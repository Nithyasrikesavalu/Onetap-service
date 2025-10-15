// import React, { useState } from "react";

// // Document requirements mapping
// const documentRequirements = {
//   "Black & White Xerox": ["Physical Document to Scan / Copy"],
//   "Colour Printouts": ["Soft Copy (PDF, DOC, JPG)"],
//   "Lamination & Binding": ["Printed Document"],
//   "Photo Printing": ["Passport-size Photo File"],
//   "ID Card Printing": ["ID Design / Template"],
//   "Document Scanning": ["Physical Paper / Certificate"],

//   "New Learner's License": ["Aadhaar Card", "Passport-size Photo", "Signature"],
//   "Permanent License Apply": [
//     "Learner's License Copy",
//     "Aadhaar Card",
//     "Passport-size Photo",
//   ],
//   "Renewal of License": ["Old License", "Aadhaar Card"],
//   "Address or Name Change": [
//     "Proof of Address (EB Bill / Rental Agreement)",
//     "Aadhaar Card",
//   ],
//   "Duplicate License": ["FIR / Complaint Copy", "Aadhaar Card"],
//   "International Driving Permit": [
//     "Valid License",
//     "Passport Copy",
//     "Visa Copy",
//   ],

//   "New Passport Application": [
//     "Aadhaar",
//     "Birth Certificate",
//     "Photo",
//     "Address Proof",
//   ],
//   "Passport Renewal / Re-issue": ["Old Passport", "Aadhaar", "Photo"],
//   "Police Verification Assistance": ["Aadhaar", "Address Proof"],
//   "Visa Application (Tourist, Student, Work)": [
//     "Passport Copy",
//     "Photo",
//     "Invitation Letter",
//     "Visa Form",
//   ],
//   "Photo & Form Filling Help": ["Softcopy Photo", "Signature"],
//   "Appointment Booking Support": ["Passport Number", "Aadhaar"],

//   "CM Health Insurance Card (TN)": ["Aadhaar", "Ration Card", "Family Photo"],
//   "Ayushman Bharat Card": ["Aadhaar", "Ration Card"],
//   "New Health Card Registration": ["Aadhaar", "Family Details"],
//   "Renewal / Correction": ["Old Card Copy", "Aadhaar"],
//   "Hospital Enrollment Support": ["Aadhaar", "Hospital Referral Form"],
//   "Insurance Claim Form Filling": ["Health Card", "Hospital Bill", "Aadhaar"],

//   "Bonafide Certificate": ["Aadhaar", "School ID / Admission Proof"],
//   "Transfer Certificate (TC)": ["Aadhaar", "Previous TC / Marksheet"],
//   "Marksheet Verification / Duplicate Copy": ["Old Marksheet", "Aadhaar"],
//   "Scholarship Application Help": [
//     "Aadhaar",
//     "Income Certificate",
//     "Community Certificate",
//   ],
//   "Community Certificate for Students": ["Aadhaar", "Parent Community Proof"],
//   "Online Result Download & Print": ["Register Number", "Date of Birth"],

//   "GST Registration": ["PAN Card", "Aadhaar", "Business Address Proof"],
//   "MSME / Udyam Registration": ["Aadhaar", "Business Details"],
//   "FSSAI License": ["Aadhaar", "Business Proof", "Shop Photos"],
//   "Shop Establishment License": ["Rental Agreement / EB Bill", "Aadhaar"],
//   "Trademark / Logo Registration": ["Logo Design", "Business Proof"],
//   "PAN for Business": ["Aadhaar", "Photo", "Business Proof"],

//   "TNPSC / SSC / RRB Exam Apply": ["Aadhaar", "Photo", "Signature"],
//   "College / University Admission": [
//     "Marksheets",
//     "Transfer Certificate",
//     "Aadhaar",
//   ],
//   "Passport / PAN Online Apply": ["Aadhaar", "Photo", "Signature"],
//   "Voter ID Apply / Correction": ["Aadhaar", "Address Proof", "Photo"],
//   "Government Scheme Registration": ["Aadhaar", "Ration Card", "Bank Passbook"],
//   "Job Application Form Filling": ["Aadhaar", "Resume", "Certificates"],

//   "Birth Certificate": ["Hospital Proof", "Parent Aadhaar"],
//   "Community Certificate": ["Aadhaar", "Parent Community Proof"],
//   "Income Certificate": ["Aadhaar", "Salary Slip / Employer Letter"],
//   "Nativity Certificate": ["Aadhaar", "Address Proof"],
//   "Residence Proof": ["EB Bill / Rental Agreement"],
//   "Death Certificate": ["Doctor Letter", "Aadhaar of Deceased"],

//   "Voter ID Services": ["Aadhaar", "Photo", "Address Proof"],
//   "Ration Card Update": ["Old Ration Card", "Aadhaar"],
//   "Property Document Print": ["Softcopy / EC Number"],
//   "TNeGA / eSevai Portal Support": ["Aadhaar", "Mobile Number"],
//   "Court Affidavit Typing": ["ID Proof", "Case Details"],
//   "General Typing Works": ["Handwritten Notes / Draft"],
// };

// const services = [
//   {
//     title: "Bulk Xerox & Print",
//     sub: "ஜெராக்ஸ் & பிரிண்ட்",
//     desc: "B&W, Color, Multiple copies",
//     color: "bg-blue-500",
//     icon: "print",
//     extras: [
//       "Black & White Xerox",
//       "Colour Printouts",
//       "Lamination & Binding",
//       "Photo Printing",
//       "ID Card Printing",
//       "Document Scanning",
//     ],
//   },
//   {
//     title: "Driving License",
//     sub: "உரிமம் & அனுமதி",
//     desc: "New license or renewal",
//     color: "bg-teal-500",
//     icon: "car",
//     extras: [
//       "New Learner's License",
//       "Permanent License Apply",
//       "Renewal of License",
//       "Address or Name Change",
//       "Duplicate License",
//       "International Driving Permit",
//     ],
//   },
//   {
//     title: "Visa & Passport",
//     sub: "விசா & பாஸ்போர்ட்",
//     desc: "International documents",
//     color: "bg-amber-500",
//     icon: "plane",
//     extras: [
//       "New Passport Application",
//       "Passport Renewal / Re-issue",
//       "Police Verification Assistance",
//       "Visa Application (Tourist, Student, Work)",
//       "Photo & Form Filling Help",
//       "Appointment Booking Support",
//     ],
//   },
//   {
//     title: "Health Cards",
//     sub: "சுகாதார அட்டைகள்",
//     desc: "Insurance & health schemes",
//     color: "bg-rose-500",
//     icon: "heart",
//     extras: [
//       "CM Health Insurance Card (TN)",
//       "Ayushman Bharat Card",
//       "New Health Card Registration",
//       "Renewal / Correction",
//       "Hospital Enrollment Support",
//       "Insurance Claim Form Filling",
//     ],
//   },
//   {
//     title: "Education Certificates",
//     sub: "கல்வி சான்றிதழ்",
//     desc: "Marksheets, scholarships",
//     color: "bg-indigo-500",
//     icon: "school",
//     extras: [
//       "Bonafide Certificate",
//       "Transfer Certificate (TC)",
//       "Marksheet Verification / Duplicate Copy",
//       "Scholarship Application Help",
//       "Community Certificate for Students",
//       "Online Result Download & Print",
//     ],
//   },
//   {
//     title: "Business Registration",
//     sub: "வணிக பதிவு",
//     desc: "GST, MSME, Udyam, FSSAI registration",
//     color: "bg-green-500",
//     icon: "id",
//     extras: [
//       "GST Registration",
//       "MSME / Udyam Registration",
//       "FSSAI License",
//       "Shop Establishment License",
//       "Trademark / Logo Registration",
//       "PAN for Business",
//     ],
//   },
//   {
//     title: "Online Applications",
//     sub: "ஆன்லைன் விண்ணப்பங்கள்",
//     desc: "Government & exam services",
//     color: "bg-orange-500",
//     icon: "doc",
//     extras: [
//       "TNPSC / SSC / RRB Exam Apply",
//       "College / University Admission",
//       "Passport / PAN Online Apply",
//       "Voter ID Apply / Correction",
//       "Government Scheme Registration",
//       "Job Application Form Filling",
//     ],
//   },
//   {
//     title: "Certificates",
//     sub: "சான்றிதழ்கள்",
//     desc: "Birth, income, community",
//     color: "bg-lime-500",
//     icon: "card",
//     extras: [
//       "Birth Certificate",
//       "Community Certificate",
//       "Income Certificate",
//       "Nativity Certificate",
//       "Residence Proof",
//       "Death Certificate",
//     ],
//   },
//   {
//     title: "More Services",
//     sub: "மேலும் சேவைகள்",
//     desc: "Explore all options",
//     color: "bg-purple-500",
//     icon: "more",
//     extras: [
//       "Voter ID Services",
//       "Ration Card Update",
//       "Property Document Print",
//       "TNeGA / eSevai Portal Support",
//       "Court Affidavit Typing",
//       "General Typing Works",
//     ],
//   },
// ];

// function Icon({ name }) {
//   switch (name) {
//     case "print":
//       return (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 9V2h12v7M6 13h12v7H6v-7z"
//           />
//         </svg>
//       );
//     case "id":
//       return (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2"
//           />
//         </svg>
//       );
//     case "card":
//       return (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth={1.5} />
//           <path
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M2 10h20"
//           />
//         </svg>
//       );
//     case "car":
//       return (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13"
//           />
//           <path
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M5 19a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z"
//           />
//         </svg>
//       );
//     case "plane":
//       return (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M2 16l20-8-8 8-4 4-2-4-6-4z"
//           />
//         </svg>
//       );
//     case "heart":
//       return (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z"
//           />
//         </svg>
//       );
//     case "school":
//       return (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 2l8 4-8 4-8-4 8-4z"
//           />
//           <path
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 10v6a2 2 0 002 2h12a2 2 0 002-2v-6"
//           />
//         </svg>
//       );
//     case "doc":
//       return (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
//           />
//         </svg>
//       );
//     case "more":
//       return (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 6v.01M12 12v.01M12 18v.01"
//           />
//         </svg>
//       );
//     default:
//       return null;
//   }
// }

// // Enhanced Document Requirements Modal Component
// function DocumentModal({ isOpen, onClose, service, extraItem }) {
//   const [files, setFiles] = useState([]);
//   const [additionalInfo, setAdditionalInfo] = useState("");

//   if (!isOpen) return null;

//   const documents = documentRequirements[extraItem] || [];

//   const handleFileUpload = (event) => {
//     const selectedFiles = Array.from(event.target.files);
//     setFiles((prev) => [...prev, ...selectedFiles]);
//   };

//   const removeFile = (index) => {
//     setFiles(files.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log("Submitted:", {
//       files,
//       additionalInfo,
//       service: service.title,
//       extraItem,
//     });
//     // Reset form and close modal
//     setFiles([]);
//     setAdditionalInfo("");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//         {/* Modal Header */}
//         <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900">{extraItem}</h3>
//               <p className="text-sm text-gray-600 mt-1">{service.title}</p>
//             </div>
//             <button
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-white"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Modal Body */}
//         <div className="p-6">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Required Documents Section */}
//             <div>
//               <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                 <svg
//                   className="w-5 h-5 text-blue-500 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                   />
//                 </svg>
//                 Required Documents
//               </h4>

//               {documents.length > 0 ? (
//                 <div className="space-y-3 mb-4">
//                   {documents.map((doc, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors"
//                     >
//                       <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
//                       <span className="text-gray-700 font-medium">{doc}</span>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-4 text-gray-500 bg-gray-50 rounded-lg">
//                   <p>No specific documents required for this service.</p>
//                 </div>
//               )}
//             </div>

//             {/* File Upload Section */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-3">
//                 Upload Documents
//               </label>
//               <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
//                 <input
//                   type="file"
//                   multiple
//                   onChange={handleFileUpload}
//                   className="hidden"
//                   id="file-upload"
//                   accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
//                 />
//                 <label htmlFor="file-upload" className="cursor-pointer">
//                   <svg
//                     className="w-12 h-12 text-gray-400 mx-auto mb-3"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={1.5}
//                       d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//                     />
//                   </svg>
//                   <p className="text-sm text-gray-600 mb-2">
//                     Click to upload or drag and drop
//                   </p>
//                   <p className="text-xs text-gray-500 mb-4">
//                     PNG, JPG, PDF, DOC up to 10MB each
//                   </p>
//                   <span className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
//                     Choose Files
//                   </span>
//                 </label>
//               </div>
//             </div>

//             {/* Selected Files List */}
//             {files.length > 0 && (
//               <div className="space-y-3">
//                 <h5 className="text-sm font-medium text-gray-700">
//                   Selected Files:
//                 </h5>
//                 {files.map((file, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border"
//                   >
//                     <div className="flex items-center space-x-3 flex-1 min-w-0">
//                       <svg
//                         className="w-5 h-5 text-gray-400 flex-shrink-0"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1.5}
//                           d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                         />
//                       </svg>
//                       <span className="text-sm text-gray-700 truncate">
//                         {file.name}
//                       </span>
//                       <span className="text-xs text-gray-500 flex-shrink-0">
//                         {(file.size / (1024 * 1024)).toFixed(2)} MB
//                       </span>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => removeFile(index)}
//                       className="text-red-500 hover:text-red-700 transition-colors p-1 rounded"
//                     >
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M6 18L18 6M6 6l12 12"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Additional Information */}
//             <div>
//               <label
//                 htmlFor="additionalInfo"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Additional Information (Optional)
//               </label>
//               <textarea
//                 id="additionalInfo"
//                 rows={3}
//                 value={additionalInfo}
//                 onChange={(e) => setAdditionalInfo(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
//                 placeholder="Any additional details or special requirements..."
//               />
//             </div>

//             {/* Warning Note */}
//             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
//               <div className="flex items-start space-x-3">
//                 <svg
//                   className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
//                   />
//                 </svg>
//                 <div>
//                   <p className="text-sm text-yellow-800 font-medium">
//                     Important
//                   </p>
//                   <p className="text-sm text-yellow-700 mt-1">
//                     Please bring original documents for verification along with
//                     one photocopy of each.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex space-x-4 pt-4">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//               >
//                 Submit Request
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Services() {
//   const [expanded, setExpanded] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);
//   const [selectedExtra, setSelectedExtra] = useState("");

//   const toggleExpand = (index) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   const openModal = (service, extra) => {
//     setSelectedService(service);
//     setSelectedExtra(extra);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedService(null);
//     setSelectedExtra("");
//   };

//   return (
//     <>
//       <section className="bg-gradient-to-br from-gray-50 to-white py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-14">
//             <h2 className="text-4xl font-bold text-gray-900 mb-3">
//               Our Services
//             </h2>
//             <p className="text-xl text-gray-700">எங்கள் சேவைகள்</p>
//             <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
//           </div>

//           {/* Services Grid with Horizontal Expansion */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`cursor-pointer bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-500 ease-in-out overflow-hidden ${
//                   expanded === index
//                     ? "lg:col-span-3 xl:col-span-2 transform scale-105 shadow-2xl ring-2 ring-blue-300 z-10"
//                     : "hover:-translate-y-2 hover:shadow-2xl"
//                 }`}
//               >
//                 <div className="p-6">
//                   {/* Service Header */}
//                   <div
//                     onClick={() => toggleExpand(index)}
//                     className="flex items-start gap-4 cursor-pointer"
//                   >
//                     <div
//                       className={`w-14 h-14 rounded-xl flex items-center justify-center ${
//                         service.color
//                       } text-white shadow-lg flex-shrink-0 transform transition-transform duration-300 ${
//                         expanded === index ? "scale-110" : ""
//                       }`}
//                     >
//                       <Icon name={service.icon} />
//                     </div>
//                     <div className="flex-grow">
//                       <h3 className="font-bold text-gray-900 text-xl">
//                         {service.title}
//                       </h3>
//                       <p className="text-sm text-gray-600 font-medium mt-1">
//                         {service.sub}
//                       </p>
//                       <p className="text-gray-500 text-sm mt-2">
//                         {service.desc}
//                       </p>
//                     </div>
//                     {/* Expand/Collapse Icon */}
//                     <div
//                       className={`transform transition-transform duration-500 ${
//                         expanded === index ? "rotate-180 scale-110" : ""
//                       }`}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-6 h-6 text-gray-400"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </div>
//                   </div>

//                   {/* Expandable Sub-services */}
//                   <div
//                     className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                       expanded === index
//                         ? "max-h-96 opacity-100 mt-6"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//                       {service.extras.map((extra, i) => (
//                         <div
//                           key={i}
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             openModal(service, extra);
//                           }}
//                           className="group bg-gradient-to-br from-gray-50 to-white rounded-xl text-center py-4 px-4 text-sm font-medium text-gray-700 hover:from-blue-50 hover:to-indigo-50 hover:scale-105 hover:shadow-lg transition-all duration-300 border border-gray-200 cursor-pointer relative overflow-hidden"
//                         >
//                           <div className="relative z-10">{extra}</div>
//                           <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
//                           <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <svg
//                               className="w-4 h-4 text-blue-500"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                               />
//                             </svg>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className={`h-1 ${
//                     service.color
//                   } transition-all duration-500 ${
//                     expanded === index ? "h-2" : ""
//                   }`}
//                 ></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Document Requirements Modal */}
//       <DocumentModal
//         isOpen={modalOpen}
//         onClose={closeModal}
//         service={selectedService}
//         extraItem={selectedExtra}
//       />
//     </>
//   );
// }
import React, { useState, useEffect } from "react";

// Document requirements mapping (same as before)
const documentRequirements = {
  "Black & White Xerox": ["Physical Document to Scan / Copy"],
  "Colour Printouts": ["Soft Copy (PDF, DOC, JPG)"],
  "Lamination & Binding": ["Printed Document"],
  "Photo Printing": ["Passport-size Photo File"],
  "ID Card Printing": ["ID Design / Template"],
  "Document Scanning": ["Physical Paper / Certificate"],

  "New Learner's License": ["Aadhaar Card", "Passport-size Photo", "Signature"],
  "Permanent License Apply": [
    "Learner's License Copy",
    "Aadhaar Card",
    "Passport-size Photo",
  ],
  "Renewal of License": ["Old License", "Aadhaar Card"],
  "Address or Name Change": [
    "Proof of Address (EB Bill / Rental Agreement)",
    "Aadhaar Card",
  ],
  "Duplicate License": ["FIR / Complaint Copy", "Aadhaar Card"],
  "International Driving Permit": [
    "Valid License",
    "Passport Copy",
    "Visa Copy",
  ],

  "New Passport Application": [
    "Aadhaar",
    "Birth Certificate",
    "Photo",
    "Address Proof",
  ],
  "Passport Renewal / Re-issue": ["Old Passport", "Aadhaar", "Photo"],
  "Police Verification Assistance": ["Aadhaar", "Address Proof"],
  "Visa Application (Tourist, Student, Work)": [
    "Passport Copy",
    "Photo",
    "Invitation Letter",
    "Visa Form",
  ],
  "Photo & Form Filling Help": ["Softcopy Photo", "Signature"],
  "Appointment Booking Support": ["Passport Number", "Aadhaar"],

  "CM Health Insurance Card (TN)": ["Aadhaar", "Ration Card", "Family Photo"],
  "Ayushman Bharat Card": ["Aadhaar", "Ration Card"],
  "New Health Card Registration": ["Aadhaar", "Family Details"],
  "Renewal / Correction": ["Old Card Copy", "Aadhaar"],
  "Hospital Enrollment Support": ["Aadhaar", "Hospital Referral Form"],
  "Insurance Claim Form Filling": ["Health Card", "Hospital Bill", "Aadhaar"],

  "Bonafide Certificate": ["Aadhaar", "School ID / Admission Proof"],
  "Transfer Certificate (TC)": ["Aadhaar", "Previous TC / Marksheet"],
  "Marksheet Verification / Duplicate Copy": ["Old Marksheet", "Aadhaar"],
  "Scholarship Application Help": [
    "Aadhaar",
    "Income Certificate",
    "Community Certificate",
  ],
  "Community Certificate for Students": ["Aadhaar", "Parent Community Proof"],
  "Online Result Download & Print": ["Register Number", "Date of Birth"],

  "GST Registration": ["PAN Card", "Aadhaar", "Business Address Proof"],
  "MSME / Udyam Registration": ["Aadhaar", "Business Details"],
  "FSSAI License": ["Aadhaar", "Business Proof", "Shop Photos"],
  "Shop Establishment License": ["Rental Agreement / EB Bill", "Aadhaar"],
  "Trademark / Logo Registration": ["Logo Design", "Business Proof"],
  "PAN for Business": ["Aadhaar", "Photo", "Business Proof"],

  "TNPSC / SSC / RRB Exam Apply": ["Aadhaar", "Photo", "Signature"],
  "College / University Admission": [
    "Marksheets",
    "Transfer Certificate",
    "Aadhaar",
  ],
  "Passport / PAN Online Apply": ["Aadhaar", "Photo", "Signature"],
  "Voter ID Apply / Correction": ["Aadhaar", "Address Proof", "Photo"],
  "Government Scheme Registration": ["Aadhaar", "Ration Card", "Bank Passbook"],
  "Job Application Form Filling": ["Aadhaar", "Resume", "Certificates"],

  "Birth Certificate": ["Hospital Proof", "Parent Aadhaar"],
  "Community Certificate": ["Aadhaar", "Parent Community Proof"],
  "Income Certificate": ["Aadhaar", "Salary Slip / Employer Letter"],
  "Nativity Certificate": ["Aadhaar", "Address Proof"],
  "Residence Proof": ["EB Bill / Rental Agreement"],
  "Death Certificate": ["Doctor Letter", "Aadhaar of Deceased"],

  "Voter ID Services": ["Aadhaar", "Photo", "Address Proof"],
  "Ration Card Update": ["Old Ration Card", "Aadhaar"],
  "Property Document Print": ["Softcopy / EC Number"],
  "TNeGA / eSevai Portal Support": ["Aadhaar", "Mobile Number"],
  "Court Affidavit Typing": ["ID Proof", "Case Details"],
  "General Typing Works": ["Handwritten Notes / Draft"],
};

const services = [
  {
    title: "Bulk Xerox & Print",
    sub: "ஜெராக்ஸ் & பிரிண்ட்",
    desc: "B&W, Color, Multiple copies",
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    icon: "print",
    extras: [
      "Black & White Xerox",
      "Colour Printouts",
      "Lamination & Binding",
      "Photo Printing",
      "ID Card Printing",
      "Document Scanning",
    ],
  },
  {
    title: "Driving License",
    sub: "உரிமம் & அனுமதி",
    desc: "New license or renewal",
    color: "#0D9488",
    gradient: "linear-gradient(135deg, #0D9488 0%, #115E59 100%)",
    icon: "car",
    extras: [
      "New Learner's License",
      "Permanent License Apply",
      "Renewal of License",
      "Address or Name Change",
      "Duplicate License",
      "International Driving Permit",
    ],
  },
  {
    title: "Visa & Passport",
    sub: "விசா & பாஸ்போர்ட்",
    desc: "International documents",
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    icon: "plane",
    extras: [
      "New Passport Application",
      "Passport Renewal / Re-issue",
      "Police Verification Assistance",
      "Visa Application (Tourist, Student, Work)",
      "Photo & Form Filling Help",
      "Appointment Booking Support",
    ],
  },
  {
    title: "Health Cards",
    sub: "சுகாதார அட்டைகள்",
    desc: "Insurance & health schemes",
    color: "#EC4899",
    gradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
    icon: "heart",
    extras: [
      "CM Health Insurance Card (TN)",
      "Ayushman Bharat Card",
      "New Health Card Registration",
      "Renewal / Correction",
      "Hospital Enrollment Support",
      "Insurance Claim Form Filling",
    ],
  },
  {
    title: "Education Certificates",
    sub: "கல்வி சான்றிதழ்",
    desc: "Marksheets, scholarships",
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    icon: "school",
    extras: [
      "Bonafide Certificate",
      "Transfer Certificate (TC)",
      "Marksheet Verification / Duplicate Copy",
      "Scholarship Application Help",
      "Community Certificate for Students",
      "Online Result Download & Print",
    ],
  },
  {
    title: "Business Registration",
    sub: "வணிக பதிவு",
    desc: "GST, MSME, Udyam, FSSAI registration",
    color: "#10B981",
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    icon: "id",
    extras: [
      "GST Registration",
      "MSME / Udyam Registration",
      "FSSAI License",
      "Shop Establishment License",
      "Trademark / Logo Registration",
      "PAN for Business",
    ],
  },
  {
    title: "Online Applications",
    sub: "ஆன்லைன் விண்ணப்பங்கள்",
    desc: "Government & exam services",
    color: "#F97316",
    gradient: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
    icon: "doc",
    extras: [
      "TNPSC / SSC / RRB Exam Apply",
      "College / University Admission",
      "Passport / PAN Online Apply",
      "Voter ID Apply / Correction",
      "Government Scheme Registration",
      "Job Application Form Filling",
    ],
  },
  {
    title: "Certificates",
    sub: "சான்றிதழ்கள்",
    desc: "Birth, income, community",
    color: "#84CC16",
    gradient: "linear-gradient(135deg, #84CC16 0%, #65A30D 100%)",
    icon: "card",
    extras: [
      "Birth Certificate",
      "Community Certificate",
      "Income Certificate",
      "Nativity Certificate",
      "Residence Proof",
      "Death Certificate",
    ],
  },
  {
    title: "More Services",
    sub: "மேலும் சேவைகள்",
    desc: "Explore all options",
    color: "#A855F7",
    gradient: "linear-gradient(135deg, #A855F7 0%, #9333EA 100%)",
    icon: "more",
    extras: [
      "Voter ID Services",
      "Ration Card Update",
      "Property Document Print",
      "TNeGA / eSevai Portal Support",
      "Court Affidavit Typing",
      "General Typing Works",
    ],
  },
];

// Unique Icon Components with modern design
function Icon({ name, className = "w-6 h-6" }) {
  const icons = {
    print: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    id: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    card: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 10h20M6 14h4" />
      </svg>
    ),
    car: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    plane: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 16l20-8-8 8-4 4-2-4-6-4z" />
      </svg>
    ),
    heart: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    school: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    doc: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    more: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v.01M12 12v.01M12 18v.01" />
      </svg>
    ),
  };

  return icons[name] || null;
}

// Floating Action Button Component
function FloatingActionButton({ onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 group"
      aria-label={label}
    >
      <Icon name={icon} className="w-6 h-6" />
      <span className="absolute -top-8 right-0 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}

// Enhanced Mobile-Responsive Document Modal
function DocumentModal({ isOpen, onClose, service, extraItem }) {
  const [files, setFiles] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const documents = documentRequirements[extraItem] || [];

  const handleFileUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { files, additionalInfo, service: service?.title, extraItem });
    setFiles([]);
    setAdditionalInfo("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/20">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm p-6 border-b border-gray-200/50 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-gray-900 truncate">{extraItem}</h3>
              <p className="text-sm text-gray-600 mt-1 truncate">{service?.title}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100 ml-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Required Documents */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Icon name="doc" className="w-5 h-5 text-blue-500 mr-2" />
                Required Documents
              </h4>
              {documents.length > 0 ? (
                <div className="grid gap-3">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100/50"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-gray-500 bg-gray-50 rounded-lg">
                  <p>No specific documents required for this service.</p>
                </div>
              )}
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Upload Documents
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-blue-400 transition-colors cursor-pointer bg-gray-50/50">
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                  accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
                />
                <label htmlFor="file-upload" className="cursor-pointer block">
                  <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF, DOC up to 10MB each</p>
                </label>
              </div>
            </div>

            {/* Selected Files */}
            {files.length > 0 && (
              <div className="space-y-2">
                <h5 className="text-sm font-medium text-gray-700">Selected Files:</h5>
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border">
                    <div className="flex items-center space-x-2 flex-1 min-w-0">
                      <Icon name="doc" className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 truncate flex-1">{file.name}</span>
                      <span className="text-xs text-gray-500 flex-shrink-0">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 transition-colors p-1 rounded ml-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Additional Information */}
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                id="additionalInfo"
                rows={3}
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-sm"
                placeholder="Any additional details or special requirements..."
              />
            </div>

            {/* Warning Note */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <p className="text-sm text-yellow-800 font-medium">Important</p>
                  <p className="text-sm text-yellow-700 mt-1">
                    Please bring original documents for verification along with one photocopy of each.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all font-medium text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service, isExpanded, onToggle, onServiceClick }) {
  const visibleExtras = isExpanded ? service.extras : service.extras.slice(0, 3);
  const hasMoreServices = service.extras.length > 3 && !isExpanded;
  hasMoreServices
  return (
    <div className="group relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-white/80">
      <div className="h-full flex flex-col">
        {/* Card Header with Gradient */}
        <div 
          className="p-6 text-white relative overflow-hidden cursor-pointer"
          onClick={onToggle}
          style={{ background: service.gradient }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Icon name={service.icon} className="w-6 h-6 text-white" />
              </div>
              <div className="text-white/80 text-sm font-medium">
                {service.sub}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-white/90 text-sm">{service.desc}</p>
          </div>
          
          {/* Expand/Collapse Icon */}
          <div className={`absolute bottom-4 right-4 transform transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Sub-services List */}
        <div className="p-6 flex-1">
          <div className="space-y-3">
            {visibleExtras.map((extra, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  onServiceClick(service, extra);
                }}
                className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 border border-gray-200 hover:border-blue-200 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 flex-1 pr-2">
                    {extra}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </button>
            ))}
            
            {/* Show More/Less Button */}
            {service.extras.length > 3 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                className="w-full py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <span>{isExpanded ? 'Show Less' : `View All ${service.extras.length} Services`}</span>
                <svg 
                  className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
}

export default function Services() {
  const [expandedCards, setExpandedCards] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedExtra, setSelectedExtra] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openModal = (service, extra) => {
    setSelectedService(service);
    setSelectedExtra(extra);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
    setSelectedExtra("");
  };

  // Filter services based on search term
  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.sub.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.extras.some(extra => extra.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/30">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>

        {/* Sticky Header */}
        <header className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-gray-600 mt-1">எங்கள் சேவைகள்</p>
            </div>
          </div>
        </header>

        <main className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Search Section */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-14 pr-6 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500 text-gray-700"
                />
                <svg
                  className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  index={index}
                  isExpanded={expandedCards[index]}
                  onToggle={() => toggleCard(index)}
                  onServiceClick={openModal}
                />
              ))}
            </div>

            {/* No Results Message */}
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 text-gray-400 bg-white/50 rounded-3xl flex items-center justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Try adjusting your search terms or browse through our service categories.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* Floating Action Button */}
        <FloatingActionButton
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          icon="more"
          label="Back to Top"
        />
      </div>

      {/* Document Modal */}
      <DocumentModal
        isOpen={modalOpen}
        onClose={closeModal}
        service={selectedService}
        extraItem={selectedExtra}
      />
    </>
  );
}