import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// MongoDB URI (set your connection string)
const MONGO_URI = "mongodb+srv://sarankarthick2011_db_user:nu2Rgu6BviPCcfFq@cluster0.gh0swrv.mongodb.net/authDB?retryWrites=true&w=majority&appName=Cluster0"; // change "yourdb"

const userData = [
  {
    name: "Digital Print Solutions",
    mobile: "+91 98765 43210",
    email: "info@digitalprintsolutions.com",
    address: "Tech Park, Velachery, Chennai"
  },
  {
    name: "Corporate Document Center",
    mobile: "+91 87654 32109",
    email: "support@corporatedoc.com",
    address: "Financial District, T Nagar, Chennai"
  },
  {
    name: "Smart Xerox Center",
    mobile: "+91 76543 21098",
    email: "smartxerox@email.com",
    address: "Anna Nagar, Chennai"
  },
  {
    name: "Speed Print & Xerox",
    mobile: "+91 65432 10987",
    email: "speedprint@email.com",
    address: "T Nagar, Chennai"
  },
  {
    name: "Copy World",
    mobile: "+91 54321 09876",
    email: "copyworld@email.com",
    address: "Adyar, Chennai"
  },
  {
    name: "Express Xerox Point",
    mobile: "+91 43210 98765",
    email: "expressxerox@email.com",
    address: "Tambaram, Chennai"
  },
  {
    name: "Quick Print Hub",
    mobile: "+91 32109 87654",
    email: "quickprinthub@email.com",
    address: "Velachery, Chennai"
  },
  {
    name: "Bright Xerox Shop",
    mobile: "+91 21098 76543",
    email: "brightxerox@email.com",
    address: "Porur, Chennai"
  },
  {
    name: "Green Print & Copy",
    mobile: "+91 10987 65432",
    email: "greenprint@email.com",
    address: "Guindy, Chennai"
  },
  {
    name: "Digital Doc Center",
    mobile: "+91 98765 12340",
    email: "digitaldoc@email.com",
    address: "Mylapore, Chennai"
  },
  {
    name: "Speedy Copy",
    mobile: "+91 87654 01234",
    email: "speedycopy@email.com",
    address: "Anna Nagar, Chennai"
  },
  {
    name: "PrintPro",
    mobile: "+91 76543 90123",
    email: "printpro@email.com",
    address: "T Nagar, Chennai"
  },
  {
    name: "Xpress Docs",
    mobile: "+91 65432 89012",
    email: "xpressdocs@email.com",
    address: "Adyar, Chennai"
  },
  {
    name: "Copy & Go",
    mobile: "+91 54321 78901",
    email: "copyandgo@email.com",
    address: "Tambaram, Chennai"
  },
  {
    name: "PrintXpress",
    mobile: "+91 43210 67890",
    email: "printxpress@email.com",
    address: "Velachery, Chennai"
  },
  {
    name: "Xerox Point",
    mobile: "+91 32109 56789",
    email: "xeroxpoint@email.com",
    address: "Porur, Chennai"
  },
  {
    name: "QuickCopy",
    mobile: "+91 21098 45678",
    email: "quickcopy@email.com",
    address: "Guindy, Chennai"
  },
  {
    name: "Digital Prints",
    mobile: "+91 10987 34567",
    email: "digitalprints@email.com",
    address: "Mylapore, Chennai"
  },
  {
    name: "Express Prints",
    mobile: "+91 98765 23456",
    email: "expressprints@email.com",
    address: "Anna Nagar, Chennai"
  },
  {
    name: "Fast Copy",
    mobile: "+91 87654 12345",
    email: "fastcopy@email.com",
    address: "T Nagar, Chennai"
  },
  {
    name: "Print Hub",
    mobile: "+91 76543 01234",
    email: "printhub@email.com",
    address: "Adyar, Chennai"
  },
  {
    name: "Copy Center",
    mobile: "+91 65432 90123",
    email: "copycenter@email.com",
    address: "Tambaram, Chennai"
  },
  {
    name: "Smart Copy Corner",
    mobile: "+91 54321 89012",
    email: "smartcopy@email.com",
    address: "Velachery, Chennai"
  },
  {
    name: "Elite Print House",
    mobile: "+91 43210 78901",
    email: "eliteprint@email.com",
    address: "Porur, Chennai"
  },
  {
    name: "Modern Xerox Studio",
    mobile: "+91 32109 67890",
    email: "modernxerox@email.com",
    address: "Guindy, Chennai"
  },
  {
    name: "DocuFast",
    mobile: "+91 21098 56789",
    email: "docufast@email.com",
    address: "Mylapore, Chennai"
  },
  {
    name: "PaperWorks",
    mobile: "+91 10987 45678",
    email: "paperworks@email.com",
    address: "Anna Nagar, Chennai"
  },
  {
    name: "QuickDoc",
    mobile: "+91 98765 34567",
    email: "quickdoc@email.com",
    address: "T Nagar, Chennai"
  },
  {
    name: "Star Print Zone",
    mobile: "+91 87654 23456",
    email: "starprint@email.com",
    address: "Adyar, Chennai"
  },
  {
    name: "CopyCity",
    mobile: "+91 76543 12345",
    email: "copycity@email.com",
    address: "Tambaram, Chennai"
  }
]

// 1. Define the User Schema (match your app's schema)
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   mobile: String,
//   address: String,
//   password: String
// });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  address: { type: String },
  role: { type: String, enum: ["customer", "vendor", "admin"], default: "customer" },
  status: { type: String, enum: ["active", "inactive", "blocked"], default: "active" },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

(async function() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to MongoDB");

  // Hash the password "123456" once
  const hashedPassword = await bcrypt.hash("123456", 10);

  // Prepare all users with same password
  const userDocs = userData.map((u) => ({
    ...u,
    password: hashedPassword,
    role: "vendor", // assuming role field is needed
    status: "active" // assuming status field is needed
  }));

  // Remove existing users with these emails (optional, for idempotency)
  // const emails = userData.map(u => u.email);
  // await User.deleteMany({ email: { $in: emails } });
  // console.log("Removed existing test users if any");

  // Insert all users
  await User.insertMany(userDocs);
  console.log(`Inserted ${userDocs.length} users with password '123456'`);

  await mongoose.disconnect();
  process.exit(0);
})();
