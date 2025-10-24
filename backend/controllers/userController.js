import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

// Temporary in-memory store for pending registrations (Replace with Redis for production)
const tempUsers = new Map();

// Generate OTP utility
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

/*
|--------------------------------------------------------------------------
| Step 1: Register (store pending data, NO email sending here)
|--------------------------------------------------------------------------
*/
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already registered!" });

    // Save pending registration in memory
    tempUsers.set(email, {
      name,
      email,
      password,
      otp: null,
      otpExpires: null,
    });

    return res.status(200).json({ message: "Registration started. Please request OTP." });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({
      message: "Server error during registration.",
      error: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Step 2: Send OTP (email OTP to user, allow resend)
|--------------------------------------------------------------------------
*/
export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const tempUser = tempUsers.get(email);
    if (!tempUser)
      return res.status(404).json({ message: "No pending registration for this email." });

    // Generate new OTP and set expiration
    const otp = generateOTP();
    tempUser.otp = otp;
    tempUser.otpExpires = Date.now() + 5 * 60 * 1000; // 5 min
    tempUsers.set(email, tempUser);

    // Setup Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: `"OneTap Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Verification OTP",
      html: `<h2>Hello ${tempUser.name}</h2><p>Your OTP is <b>${otp}</b></p><p>Valid for 5 minutes.</p>`,
    });

    return res.status(200).json({ message: "OTP sent successfully to your email!" });
  } catch (error) {
    console.error("Send OTP error:", error);
    return res.status(500).json({
      message: "Server error while sending OTP.",
      error: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Step 3: Verify OTP and Save User to MongoDB
|--------------------------------------------------------------------------
*/
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const tempUser = tempUsers.get(email);
    if (!tempUser)
      return res.status(404).json({ message: "No pending registration for this email." });

    if (tempUser.otp !== otp)
      return res.status(400).json({ message: "Invalid OTP. Please try again." });

    if (tempUser.otpExpires < Date.now())
      return res.status(400).json({ message: "OTP expired. Please re-register." });

    // Save verified user into MongoDB
    const user = new User({
      name: tempUser.name,
      email: tempUser.email,
      password: tempUser.password,
    });
    await user.save();

    tempUsers.delete(email);

    return res.status(200).json({ message: "OTP verified! User registered successfully." });
  } catch (err) {
    console.error("OTP Verify Error:", err);
    res.status(500).json({
      message: "Server error during OTP verification",
      error: err.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Step 4: Login (returns JWT)
|--------------------------------------------------------------------------
*/
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found." });

    const match = await bcrypt.compare(password, user.password);
    
    
    if (!match) return res.status(401).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.status(200).json({
      message: "Login successful.",
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error during login", error: err.message });
  }
};

/*
|--------------------------------------------------------------------------
| Step 5: Profile validation via JWT
|--------------------------------------------------------------------------
*/
export const getUserProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided." });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("name email");

    res.status(200).json({ user });
  } catch (err) {
    console.error("Profile Access Error:", err);
    res.status(401).json({ message: "Invalid or expired token." });
  }
};
