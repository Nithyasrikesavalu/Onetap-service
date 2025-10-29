import mongoose from "mongoose";

const serviceBookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  serviceCategory: { type: String, required: true },
  serviceType: { type: String, required: true },
  message: { type: String, required: true },
  appointmentType: { type: String }, // 'in-person', 'home-visit', 'online'
  appointmentDate: { type: String }, // Store as string for easy validation
  appointmentTime: { type: String },
  branchLocation: { type: String },
  created_at: { type: Date, default: Date.now }
}, { timestamps: true });

const ServiceBooking = mongoose.model("ServiceBooking", serviceBookingSchema);

export default ServiceBooking;
