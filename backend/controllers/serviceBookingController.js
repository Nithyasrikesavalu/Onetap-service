// import ServiceBooking from "../models/ServiceBooking.js";

// export const createBooking = async (req, res) => {
//   try {
//     const {
//       userName,
//       userEmail,
//       userMobile,
//       service,
//       extraItem,
//       additionalInfo,
//       appointmentType,
//       appointmentDate,
//       appointmentTime,
//       shopId, // <-- NEW
//       userLocation,
//       status,
//     } = req.body;

//     let files = [];
//     if (req.files && req.files.length > 0) {
//       files = req.files.map((file) => ({
//         originalName: file.originalname,
//         storedName: file.filename,
//         path: file.path,
//         type: file.mimetype,
//         size: file.size,
//       }));
//     }

//     const booking = await ServiceBooking.create({
//       userName,
//       userEmail,
//       userMobile,
//       service,
//       extraItem,
//       additionalInfo,
//       appointmentType,
//       appointmentDate,
//       appointmentTime,
//       shopId, // <-- NEW
//       userLocation,
//       documents: files,
//       status,
//     });

//     res.status(201).json({ success: true, booking });
//   } catch (err) {
//     res.status(400).json({ success: false, message: err.message });
//   }
// };

// // export const getAllBookings = async (req, res) => {
// //   try {
// //     const bookings = await ServiceBooking.find().sort({ created_at: -1 });
// //     res.json({ bookings });
// //   } catch (err) {
// //     res.status(400).json({ message: err.message });
// //   }
// // };

// export const getAllBookings = async (req, res) => {
//   try {
//     const filter = {};
//     if (req.query.shopId) filter.shopId = req.query.shopId;
//     const bookings = await ServiceBooking.find(filter).sort({ created_at: -1 });
//     res.json({ bookings });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

import ServiceBooking from "../models/ServiceBooking.js";

export const createBooking = async (req, res) => {
  try {
    const {
      userName,
      userEmail,
      userMobile,
      service,
      extraItem,
      additionalInfo,
      appointmentType,
      appointmentDate,
      appointmentTime,
      shopId,
      userLocation,
      status,
    } = req.body;

    let files = [];
    if (req.files && req.files.length > 0) {
      files = req.files.map((file) => ({
        originalName: file.originalname,
        storedName: file.filename,
        path: file.path,
        type: file.mimetype,
        size: file.size,
      }));
    }

    const booking = await ServiceBooking.create({
      userName,
      userEmail,
      userMobile,
      service,
      extraItem,
      additionalInfo,
      appointmentType,
      appointmentDate,
      appointmentTime,
      shopId,
      userLocation,
      documents: files,
      status,
    });

    // ✅ EMIT REAL-TIME NOTIFICATION TO FRONTEND
    if (global.io) {
      global.io.emit("new_service_request", {
        shopId,
        userName,
        userMobile,
        service,
        time: new Date(),
      });
    }

    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const filter = {};
    if (req.query.shopId) filter.shopId = req.query.shopId;
    const bookings = await ServiceBooking.find(filter).sort({ created_at: -1 });
    res.json({ bookings });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
