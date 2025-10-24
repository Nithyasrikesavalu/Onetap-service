import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle registration + send OTP
  const handleRegisterAndSendOtp = async () => {
    setLoading(true);
    setMessage("Creating account and sending OTP...");

    try {
      // Register new user
      const registerRes = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const registerData = await registerRes.json();

      if (!registerRes.ok) {
        setMessage(registerData.message || "Registration failed.");
        setLoading(false);
        return;
      }

      // Send OTP email
      const otpRes = await fetch("http://localhost:5000/api/users/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const otpData = await otpRes.json();

      if (otpRes.ok) {
        setOtpSent(true);
        setMessage("OTP sent to your email!");
      } else {
        setMessage(otpData.message || "Failed to send OTP");
      }
    } catch (err) {
      setMessage("Server error. Try again.", err);
    }

    setLoading(false);
  };

  // Handle login
  const handleLogin = async () => {
    setLoading(true);
    setMessage("Signing in...");

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.name);
        setMessage("Login successful!");
        setTimeout(() => navigate("/"), 1000);
      } else {
        setMessage(data.message || "Login failed.");
      }
    } catch (err) {
      setMessage("Server error while logging in.");
    }

    setLoading(false);
  };

  // Handle OTP verification after registration
  const handleVerifyOtp = async () => {
    setLoading(true);
    setMessage("Verifying OTP...");

    try {
      const res = await fetch("http://localhost:5000/api/users/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ OTP verified! Redirecting...");
        setTimeout(() => toggleAuthMode(), 1200);
      } else {
        setMessage("❌ " + data.message);
      }
    } catch (err) {
      setMessage("Server error during OTP verification.");
    }

    setLoading(false);
  };

  // Main form action
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await handleLogin();
    } else {
      if (otpSent) {
        await handleVerifyOtp();
      } else {
        await handleRegisterAndSendOtp();
      }
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setName("");
    setOtp("");
    setOtpSent(false);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {isLogin ? "Sign in to your account" : "Create new account"}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-sky-500 rounded-full mx-auto"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              />
            </div>

            {!isLogin && otpSent && (
              <div className="space-y-2 animate-fade-in">
                <label className="text-sm font-semibold text-gray-700">
                  Verification Code
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit code"
                  maxLength="6"
                  required
                  className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                />
              </div>
            )}

            {message && (
              <p className="text-sm text-center text-gray-700">{message}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-105 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-400 to-sky-500 hover:from-blue-500 hover:to-sky-600 shadow-lg hover:shadow-xl"
              }`}
            >
              {loading
                ? isLogin
                  ? "Logging in..."
                  : otpSent
                  ? "Verifying..."
                  : "Sending OTP..."
                : isLogin
                ? "Sign in"
                : otpSent
                ? "Verify OTP"
                : "Create Account"}
            </button>
          </form>

          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleAuthMode}
                className="ml-2 font-semibold text-blue-400 hover:text-sky-500 transition-colors duration-200"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
