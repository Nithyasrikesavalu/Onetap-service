import ServiceBooking from "../models/ServiceBooking.js";

export const createBooking = async (req, res) => {
  try {
    const {
      name, email, mobile, serviceCategory, serviceType, message,
      appointmentType, appointmentDate, appointmentTime, branchLocation
    } = req.body;

    // Create and save booking
    const booking = await ServiceBooking.create({
      name, email, mobile, serviceCategory, serviceType, message,
      appointmentType, appointmentDate, appointmentTime, branchLocation
    });

    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await ServiceBooking.find().sort({ created_at: -1 });
    res.json({ bookings });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
