import mongoose from "mongoose";
import dotenv from "dotenv";
import Service from "./models/Service.js"; // Your Service model path

dotenv.config();

const servicesData = [
  {
    name: "Home Cleaning",
    category: "Cleaning",
    description: "Full house cleaning",
    sub_services: ["Kitchen", "Bathroom", "Bedroom"],
    required_documents: ["ID Proof"],
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: "Plumbing Repair",
    category: "Plumbing",
    description: "All types of plumbing repairs",
    sub_services: ["Leak Fix", "Pipe Replacement"],
    required_documents: [],
    created_at: new Date(),
    updated_at: new Date()
  }
  // Add more service objects as needed
];

const seedServices = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Service.deleteMany({}); // Optional: Clear old data
    await Service.insertMany(servicesData);
    console.log("Services seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Seeding error:", err.message);
    process.exit(1);
  }
};

seedServices();
