import nodemailer from "nodemailer";

export const submitApplication = async (req, res) => {
  try {
    const { name, email, phone, role, experience, coverLetter } = req.body;

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

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sent to botvortex.learning@gmail.com
      subject: `New Job Application: ${name} for ${role}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Job Application: ${role}</h2>
          
          <p>Dear Hiring Team,</p>
          <p>A new application has been submitted via the OneTap Careers Portal. Please find the applicant's details below.</p>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin: 20px 0; border: 1px solid #cbd5e1;">
            <h3 style="margin-top: 0; color: #0f172a; font-size: 16px;">Applicant Information</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 5px 0;"><strong>Experience:</strong> ${experience} Years</p>
          </div>

          <h3 style="color: #0f172a; font-size: 16px;">Cover Letter / Statement</h3>
          <div style="background-color: #f1f5f9; padding: 20px; border-left: 4px solid #3b82f6; font-style: italic; white-space: pre-wrap;">${coverLetter}</div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #64748b; text-align: center;">
            This is an automated message from the OneTap Services System.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Career Application Error:", error);
    res.status(500).json({ success: false, message: "Failed to send application", error: error.message });
  }
};
