// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const RequestService = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     serviceCategory: "",
//     serviceType: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: "" });
//     }

//     // Reset serviceType when category changes
//     if (name === "serviceCategory") {
//       setForm(prev => ({ ...prev, serviceType: "" }));
//     }
//   };

//   const validateStep = (step) => {
//     const newErrors = {};

//     switch (step) {
//       case 0:
//         if (!form.name.trim()) newErrors.name = "Name is required";
//         else if (form.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
//         break;
//       case 1:
//         if (!form.email.trim()) newErrors.email = "Email is required";
//         else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
//         if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";
//         else if (!/^\d{10}$/.test(form.mobile)) newErrors.mobile = "Mobile number must be 10 digits";
//         break;
//       case 2:
//         if (!form.serviceCategory) newErrors.serviceCategory = "Please select a service category";
//         break;
//       case 3:
//         if (!form.serviceType) newErrors.serviceType = "Please select a service type";
//         break;
//       case 4:
//         if (!form.message.trim()) newErrors.message = "Please provide some details";
//         else if (form.message.trim().length < 10) newErrors.message = "Please provide more details (min. 10 characters)";
//         break;
//       default:
//         break;
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateStep(currentStep)) {
//       console.log("Form Data:", form);
//       setSubmitted(true);
//     }
//   };

//   const nextStep = () => {
//     if (validateStep(currentStep)) {
//       setCurrentStep((prev) => Math.min(prev + 1, 4));
//     }
//   };

//   const prevStep = () => {
//     setCurrentStep((prev) => Math.max(prev - 1, 0));
//   };

//   const steps = [
//     { title: "Personal", icon: "👤", field: "name" },
//     { title: "Contact", icon: "📱", fields: ["email", "mobile"] },
//     { title: "Category", icon: "📂", field: "serviceCategory" },
//     { title: "Service", icon: "🛠️", field: "serviceType" },
//     { title: "Details", icon: "📝", field: "message" },
//   ];

//   const serviceCategories = [
//     {
//       id: "documentation",
//       label: "Documentation",
//       icon: "🖨️",
//       description: "Printing & Xerox services",
//       color: "from-blue-400 to-cyan-400"
//     },
//     {
//       id: "government",
//       label: "Government",
//       icon: "🏛️",
//       description: "License and permit services",
//       color: "from-blue-500 to-indigo-500"
//     },
//     {
//       id: "international",
//       label: "International",
//       icon: "🌍",
//       description: "Visa and passport services",
//       color: "from-cyan-500 to-blue-500"
//     },
//     {
//       id: "healthcare",
//       label: "Healthcare",
//       icon: "🏥",
//       description: "Health card registrations",
//       color: "from-sky-500 to-blue-500"
//     },
//     {
//       id: "education",
//       label: "Education",
//       icon: "🎓",
//       description: "Certificate services",
//       color: "from-indigo-400 to-purple-400"
//     },
//     {
//       id: "business",
//       label: "Business",
//       icon: "💼",
//       description: "Registration and compliance",
//       color: "from-blue-600 to-indigo-600"
//     },
//     {
//       id: "digital",
//       label: "Digital",
//       icon: "💻",
//       description: "Online application assistance",
//       color: "from-cyan-400 to-blue-400"
//     },
//     {
//       id: "legal",
//       label: "Legal",
//       icon: "⚖️",
//       description: "Official certificates",
//       color: "from-slate-500 to-blue-500"
//     }
//   ];

//   const serviceOptions = {
//     documentation: [
//       { value: "bulk_xerox", label: "🖨️ Bulk Xerox & Print", description: "High-quality B&W and Color printing" },
//       { value: "document_scanning", label: "📄 Document Scanning", description: "Professional document digitization" },
//       { value: "binding", label: "📚 Binding Services", description: "Spiral, thermal, and hardcover binding" },
//       { value: "lamination", label: "📋 Lamination Services", description: "Document protection and preservation" },
//       { value: "photo_printing", label: "🖼️ Photo Printing", description: "High-quality photo prints" }
//     ],
//     government: [
//       { value: "driving_license", label: "🚗 Driving License", description: "New application and renewal" },
//       { value: "vehicle_registration", label: "🚙 Vehicle Registration", description: "RC book and transfer services" },
//       { value: "aadhaar", label: "🆔 Aadhaar Services", description: "Enrollment and update" },
//       { value: "ration_card", label: "🛒 Ration Card", description: "New application and modification" },
//       { value: "birth_death_cert", label: "📜 Birth/Death Certificate", description: "Certificate issuance" }
//     ],
//     international: [
//       { value: "passport", label: "📘 Passport Services", description: "Fresh and renewal applications" },
//       { value: "visa_processing", label: "🌐 Visa Processing", description: "Tourist, business, and student visas" },
//       { value: "document_attestation", label: "📑 Document Attestation", description: "Educational and personal documents" },
//       { value: "travel_insurance", label: "✈️ Travel Insurance", description: "International travel coverage" },
//       { value: "forex_services", label: "💱 Forex Services", description: "Foreign currency exchange" }
//     ],
//     healthcare: [
//       { value: "health_insurance", label: "🏥 Health Insurance", description: "Policy purchase and renewal" },
//       { value: "govt_health_schemes", label: "💊 Govt Health Schemes", description: "Ayushman Bharat and state schemes" },
//       { value: "health_card", label: "🩺 Health Card Registration", description: "Digital health records" },
//       { value: "medical_certificate", label: "📄 Medical Certificates", description: "Fitness and medical reports" },
//       { value: "insurance_claim", label: "💰 Insurance Claim", description: "Claim processing assistance" }
//     ],
//     education: [
//       { value: "marksheet_attestation", label: "📊 Marksheet Attestation", description: "Academic document verification" },
//       { value: "scholarship", label: "🎓 Scholarship Applications", description: "Government and private scholarships" },
//       { value: "transfer_certificate", label: "📜 Transfer Certificate", description: "TC issuance and attestation" },
//       { value: "degree_certificate", label: "🎖️ Degree Certificate", description: "Duplicate and verification" },
//       { value: "admission_consultation", label: "🏫 Admission Consultation", description: "College and university admissions" }
//     ],
//     business: [
//       { value: "gst_registration", label: "📊 GST Registration", description: "New GSTIN and modifications" },
//       { value: "msme_registration", label: "🏢 MSME Registration", description: "Udyam registration" },
//       { value: "company_registration", label: "💼 Company Registration", description: "Private and public limited" },
//       { value: "fssai_license", label: "🍽️ FSSAI License", description: "Food business license" },
//       { value: "trade_license", label: "🏪 Trade License", description: "Municipal business license" }
//     ],
//     digital: [
//       { value: "tnpsc_applications", label: "📝 TNPSC Applications", description: "Government exam forms" },
//       { value: "college_admissions", label: "🎓 College Admissions", description: "Online application assistance" },
//       { value: "bank_application", label: "🏦 Bank Applications", description: "Loan and account applications" },
//       { value: "govt_schemes", label: "📱 Govt Scheme Applications", description: "Various government schemes" },
//       { value: "online_bill_payment", label: "💳 Online Bill Payment", description: "Utility and tax payments" }
//     ],
//     legal: [
//       { value: "birth_certificate", label: "👶 Birth Certificate", description: "Issuance and duplicate" },
//       { value: "income_certificate", label: "💰 Income Certificate", description: "Salary and business income" },
//       { value: "community_certificate", label: "👥 Community Certificate", description: "Caste and community proof" },
//       { value: "domicile_certificate", label: "🏠 Domicile Certificate", description: "Residence proof" },
//       { value: "marriage_certificate", label: "💑 Marriage Certificate", description: "Registration and certificate" }
//     ]
//   };

//   const floatingShapes = [
//     { style: "top-10 left-10 w-20 h-20 bg-blue-400/30 blur-xl" },
//     { style: "bottom-20 right-20 w-32 h-32 bg-cyan-400/30 blur-2xl" },
//     { style: "top-1/3 right-10 w-16 h-16 bg-indigo-400/30 blur-xl" },
//     { style: "bottom-10 left-20 w-24 h-24 bg-sky-400/30 blur-2xl" },
//     { style: "top-1/4 left-1/4 w-28 h-28 bg-blue-300/25 blur-2xl" },
//     { style: "bottom-1/3 right-1/4 w-18 h-18 bg-cyan-300/25 blur-xl" },
//   ];

//   // Check if current step is complete
//   const isStepComplete = (stepIndex) => {
//     const step = steps[stepIndex];
//     if (step.field) {
//       return form[step.field] && !errors[step.field];
//     }
//     if (step.fields) {
//       return step.fields.every(field => form[field] && !errors[field]);
//     }
//     return false;
//   };

//   const getSelectedServiceLabel = () => {
//     if (!form.serviceCategory || !form.serviceType) return "";
//     const service = serviceOptions[form.serviceCategory]?.find(s => s.value === form.serviceType);
//     return service ? service.label : "";
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white px-4 sm:px-6 relative overflow-hidden">
//       {/* Enhanced Animated Background */}
//       {floatingShapes.map((shape, index) => (
//         <motion.div
//           key={index}
//           className={`absolute rounded-full ${shape.style}`}
//           animate={{
//             y: [0, -40, 0],
//             x: [0, 30, 0],
//             scale: [1, 1.3, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{
//             duration: 12 + index * 3,
//             repeat: Infinity,
//             delay: index * 1.5,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* Animated Particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/40 rounded-full"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//             }}
//             animate={{
//               y: [0, -100, 0],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 4,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       {/* Enhanced Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent)]" />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
//         animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//         transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//         className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-4xl"
//         style={{
//           background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
//           boxShadow: `
//             0 25px 50px -12px rgba(0, 0, 0, 0.4),
//             inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
//             0 0 0 1px rgba(255, 255, 255, 0.1)
//           `
//         }}
//       >
//         {/* Enhanced Progress Steps */}
//         <div className="flex justify-between items-center mb-8 relative">
//           {steps.map((step, index) => (
//             <div key={index} className="flex flex-col items-center z-10 flex-1">
//               <motion.div
//                 className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 text-sm sm:text-lg font-semibold transition-all duration-500 relative ${
//                   index <= currentStep
//                     ? "bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400 text-white shadow-lg shadow-blue-500/30"
//                     : "border-white/30 text-white/50 bg-white/10"
//                 } ${isStepComplete(index) ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-blue-900" : ""}`}
//                 whileHover={{ scale: 1.15, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {step.icon}
//                 {isStepComplete(index) && (
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-cyan-400 rounded-full flex items-center justify-center"
//                   >
//                     <span className="text-xs">✓</span>
//                   </motion.div>
//                 )}
//               </motion.div>
//               <span className={`text-xs mt-2 transition-all duration-300 text-center px-1 ${
//                 index <= currentStep ? "text-white font-medium" : "text-white/60"
//               }`}>
//                 {step.title}
//               </span>
//             </div>
//           ))}
//           {/* Enhanced Progress Line */}
//           <div className="absolute top-5 sm:top-6 left-0 right-0 h-1 bg-white/20 -z-10 rounded-full">
//             <motion.div
//               className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/30"
//               initial={{ width: "0%" }}
//               animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//             />
//           </div>
//         </div>

//         <AnimatePresence mode="wait">
//           {!submitted ? (
//             <motion.div
//               key="form"
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -30 }}
//               transition={{ duration: 0.4 }}
//             >
//               <div className="text-center mb-8">
//                 <motion.h2
//                   className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent"
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   Service Request Form
//                 </motion.h2>
//                 <motion.p
//                   className="text-white/70 mt-2 text-sm sm:text-base"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   Step {currentStep + 1} of {steps.length} • {steps[currentStep].title} Info
//                 </motion.p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <AnimatePresence mode="wait">
//                   {/* Step 1: Personal Information */}
//                   {currentStep === 0 && (
//                     <motion.div
//                       key="step1"
//                       initial={{ opacity: 0, x: 50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -50 }}
//                       className="space-y-4"
//                     >
//                       <div>
//                         <label className="block mb-3 text-sm font-medium text-white/80">
//                           Full Name *
//                         </label>
//                         <input
//                           type="text"
//                           name="name"
//                           value={form.name}
//                           onChange={handleChange}
//                           required
//                           className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 text-white placeholder-white/50 focus:outline-none focus:ring-2 ${
//                             errors.name
//                               ? "bg-red-400/10 border-red-300/50 focus:ring-red-300 focus:border-transparent"
//                               : "bg-white/10 border-white/30 focus:ring-blue-400 focus:border-transparent"
//                           }`}
//                           placeholder="Enter your full name"
//                         />
//                         <AnimatePresence>
//                           {errors.name && (
//                             <motion.p
//                               initial={{ opacity: 0, y: -10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: -10 }}
//                               className="text-red-200 text-xs mt-2 flex items-center"
//                             >
//                               ⚠️ {errors.name}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </motion.div>
//                   )}

//                   {/* Step 2: Contact Information */}
//                   {currentStep === 1 && (
//                     <motion.div
//                       key="step2"
//                       initial={{ opacity: 0, x: 50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -50 }}
//                       className="space-y-4"
//                     >
//                       <div>
//                         <label className="block mb-3 text-sm font-medium text-white/80">
//                           Email Address *
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           value={form.email}
//                           onChange={handleChange}
//                           required
//                           className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 text-white placeholder-white/50 focus:outline-none focus:ring-2 ${
//                             errors.email
//                               ? "bg-red-400/10 border-red-300/50 focus:ring-red-300 focus:border-transparent"
//                               : "bg-white/10 border-white/30 focus:ring-cyan-400 focus:border-transparent"
//                           }`}
//                           placeholder="your.email@example.com"
//                         />
//                         <AnimatePresence>
//                           {errors.email && (
//                             <motion.p
//                               initial={{ opacity: 0, y: -10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: -10 }}
//                               className="text-red-200 text-xs mt-2 flex items-center"
//                             >
//                               ⚠️ {errors.email}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                       <div>
//                         <label className="block mb-3 text-sm font-medium text-white/80">
//                           Mobile Number *
//                         </label>
//                         <input
//                           type="tel"
//                           name="mobile"
//                           value={form.mobile}
//                           onChange={handleChange}
//                           required
//                           maxLength="10"
//                           className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 text-white placeholder-white/50 focus:outline-none focus:ring-2 ${
//                             errors.mobile
//                               ? "bg-red-400/10 border-red-300/50 focus:ring-red-300 focus:border-transparent"
//                               : "bg-white/10 border-white/30 focus:ring-cyan-400 focus:border-transparent"
//                           }`}
//                           placeholder="Enter 10-digit mobile number"
//                         />
//                         <AnimatePresence>
//                           {errors.mobile && (
//                             <motion.p
//                               initial={{ opacity: 0, y: -10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: -10 }}
//                               className="text-red-200 text-xs mt-2 flex items-center"
//                             >
//                               ⚠️ {errors.mobile}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </motion.div>
//                   )}

//                   {/* Step 3: Service Category */}
//                   {currentStep === 2 && (
//                     <motion.div
//                       key="step3"
//                       initial={{ opacity: 0, x: 50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -50 }}
//                       className="space-y-4"
//                     >
//                       <div>
//                         <label className="block mb-3 text-sm font-medium text-white/80">
//                           Select Service Category *
//                         </label>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                           {serviceCategories.map((category) => (
//                             <motion.label
//                               key={category.id}
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                               className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
//                                 form.serviceCategory === category.id
//                                   ? "bg-blue-500/20 border-blue-400 shadow-lg shadow-blue-500/30"
//                                   : "bg-white/10 border-white/20 hover:bg-white/15"
//                               }`}
//                             >
//                               <input
//                                 type="radio"
//                                 name="serviceCategory"
//                                 value={category.id}
//                                 checked={form.serviceCategory === category.id}
//                                 onChange={handleChange}
//                                 className="hidden"
//                               />
//                               <div className="flex items-center space-x-4 w-full">
//                                 <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-lg shadow-lg`}>
//                                   {category.icon}
//                                 </div>
//                                 <div className="flex-1">
//                                   <div className="font-medium text-white">
//                                     {category.label}
//                                   </div>
//                                   <div className="text-xs text-white/60 mt-1">
//                                     {category.description}
//                                   </div>
//                                 </div>
//                                 <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                                   form.serviceCategory === category.id
//                                     ? "border-blue-400 bg-blue-400"
//                                     : "border-white/40"
//                                 }`}>
//                                   {form.serviceCategory === category.id && (
//                                     <motion.div
//                                       initial={{ scale: 0 }}
//                                       animate={{ scale: 1 }}
//                                       className="w-2 h-2 bg-white rounded-full"
//                                     />
//                                   )}
//                                 </div>
//                               </div>
//                             </motion.label>
//                           ))}
//                         </div>
//                         <AnimatePresence>
//                           {errors.serviceCategory && (
//                             <motion.p
//                               initial={{ opacity: 0, y: -10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: -10 }}
//                               className="text-red-200 text-xs mt-2 flex items-center"
//                             >
//                               ⚠️ {errors.serviceCategory}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </motion.div>
//                   )}

//                   {/* Step 4: Specific Service */}
//                   {currentStep === 3 && (
//                     <motion.div
//                       key="step4"
//                       initial={{ opacity: 0, x: 50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -50 }}
//                       className="space-y-4"
//                     >
//                       <div>
//                         <label className="block mb-3 text-sm font-medium text-white/80">
//                           Select Specific Service *
//                         </label>
//                         <div className="grid gap-3">
//                           {form.serviceCategory && serviceOptions[form.serviceCategory]?.map((option) => (
//                             <motion.label
//                               key={option.value}
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                               className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
//                                 form.serviceType === option.value
//                                   ? "bg-blue-500/20 border-blue-400 shadow-lg shadow-blue-500/30"
//                                   : "bg-white/10 border-white/20 hover:bg-white/15"
//                               }`}
//                             >
//                               <input
//                                 type="radio"
//                                 name="serviceType"
//                                 value={option.value}
//                                 checked={form.serviceType === option.value}
//                                 onChange={handleChange}
//                                 className="hidden"
//                               />
//                               <div className="flex items-center space-x-3 w-full">
//                                 <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
//                                   form.serviceType === option.value
//                                     ? "border-blue-400 bg-blue-400"
//                                     : "border-white/40"
//                                 }`}>
//                                   {form.serviceType === option.value && (
//                                     <motion.div
//                                       initial={{ scale: 0 }}
//                                       animate={{ scale: 1 }}
//                                       className="w-2 h-2 bg-white rounded-full"
//                                     />
//                                   )}
//                                 </div>
//                                 <div className="flex-1">
//                                   <div className="font-medium text-white">
//                                     {option.label}
//                                   </div>
//                                   <div className="text-xs text-white/60 mt-1">
//                                     {option.description}
//                                   </div>
//                                 </div>
//                               </div>
//                             </motion.label>
//                           ))}
//                         </div>
//                         <AnimatePresence>
//                           {errors.serviceType && (
//                             <motion.p
//                               initial={{ opacity: 0, y: -10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: -10 }}
//                               className="text-red-200 text-xs mt-2 flex items-center"
//                             >
//                               ⚠️ {errors.serviceType}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </motion.div>
//                   )}

//                   {/* Step 5: Additional Details */}
//                   {currentStep === 4 && (
//                     <motion.div
//                       key="step5"
//                       initial={{ opacity: 0, x: 50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -50 }}
//                       className="space-y-4"
//                     >
//                       <div>
//                         <label className="block mb-3 text-sm font-medium text-white/80">
//                           Additional Details *
//                         </label>
//                         <textarea
//                           name="message"
//                           value={form.message}
//                           onChange={handleChange}
//                           rows="5"
//                           placeholder="Please describe your request in detail. Include any specific requirements, documents you have, preferred timeline, or any other relevant information..."
//                           className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 text-white placeholder-white/50 focus:outline-none focus:ring-2 resize-none ${
//                             errors.message
//                               ? "bg-red-400/10 border-red-300/50 focus:ring-red-300 focus:border-transparent"
//                               : "bg-white/10 border-white/30 focus:ring-indigo-400 focus:border-transparent"
//                           }`}
//                         />
//                         <div className="flex justify-between items-center mt-2">
//                           <AnimatePresence>
//                             {errors.message && (
//                               <motion.p
//                                 initial={{ opacity: 0, y: -10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -10 }}
//                                 className="text-red-200 text-xs flex items-center"
//                               >
//                                 ⚠️ {errors.message}
//                               </motion.p>
//                             )}
//                           </AnimatePresence>
//                           <span className={`text-xs ${
//                             form.message.length < 10 ? "text-white/50" : "text-cyan-300"
//                           }`}>
//                             {form.message.length}/10
//                           </span>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 <div className="flex justify-between items-center pt-6 border-t border-white/20">
//                   <motion.button
//                     type="button"
//                     onClick={prevStep}
//                     disabled={currentStep === 0}
//                     className={`px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
//                       currentStep === 0
//                         ? "bg-white/10 text-white/40 cursor-not-allowed"
//                         : "bg-white/15 text-white hover:bg-white/25 border border-white/30 hover:shadow-lg"
//                     }`}
//                     whileHover={currentStep !== 0 ? { scale: 1.05, x: -2 } : {}}
//                     whileTap={currentStep !== 0 ? { scale: 0.95 } : {}}
//                   >
//                     <span>←</span>
//                     <span className="hidden sm:inline">Back</span>
//                   </motion.button>

//                   <div className="text-xs text-white/60 text-center">
//                     <div>Step {currentStep + 1} of {steps.length}</div>
//                     {form.serviceType && (
//                       <div className="text-blue-300 mt-1">{getSelectedServiceLabel()}</div>
//                     )}
//                   </div>

//                   {currentStep < steps.length - 1 ? (
//                     <motion.button
//                       type="button"
//                       onClick={nextStep}
//                       className="px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-medium text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center space-x-2"
//                       whileHover={{ scale: 1.05, x: 2 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <span className="hidden sm:inline">Next</span>
//                       <span>→</span>
//                     </motion.button>
//                   ) : (
//                     <motion.button
//                       type="submit"
//                       className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-medium text-white shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center space-x-2"
//                       whileHover={{ scale: 1.05, y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <span>🚀</span>
//                       <span>Submit Request</span>
//                     </motion.button>
//                   )}
//                 </div>
//               </form>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="success"
//               initial={{ scale: 0.8, opacity: 0, rotateX: 10 }}
//               animate={{ scale: 1, opacity: 1, rotateX: 0 }}
//               transition={{ duration: 0.6, type: "spring" }}
//               className="text-center space-y-6 py-8"
//             >
//               <motion.div
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   rotate: [0, 5, -5, 0],
//                   y: [0, -10, 0]
//                 }}
//                 transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
//                 className="text-6xl"
//               >
//                 🎉
//               </motion.div>

//               <div>
//                 <motion.h2
//                   className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-3"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   Request Confirmed!
//                 </motion.h2>
//                 <motion.p
//                   className="text-white/70 leading-relaxed text-sm sm:text-base"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   Thank you <span className="text-blue-300 font-semibold">{form.name}</span>!
//                   <br />
//                   We've received your request for <span className="text-cyan-300 font-semibold">{getSelectedServiceLabel()}</span>.
//                   <br /><br />
//                   Our team will contact you at <span className="text-indigo-300">{form.email}</span> within 24 hours.
//                 </motion.p>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="space-y-3"
//               >
//                 <motion.button
//                   onClick={() => {
//                     setSubmitted(false);
//                     setCurrentStep(0);
//                     setForm({
//                       name: "",
//                       email: "",
//                       mobile: "",
//                       serviceCategory: "",
//                       serviceType: "",
//                       message: "",
//                     });
//                     setErrors({});
//                   }}
//                   className="w-full px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
//                   whileHover={{ scale: 1.02, y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   ✨ Submit Another Request
//                 </motion.button>
//                 <button
//                   onClick={() => window.print()}
//                   className="px-6 py-2 text-white/60 hover:text-white/80 text-sm transition-all duration-300"
//                 >
//                   📄 Print Confirmation
//                 </button>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// export default RequestService;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RequestService = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    serviceCategory: "",
    serviceType: "",
    message: "",
    appointmentDate: "",
    appointmentTime: "",
    appointmentType: "in-person",
    branchLocation: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }

    if (name === "serviceCategory") {
      setForm((prev) => ({ ...prev, serviceType: "" }));
    }

    if (name === "appointmentDate") {
      setForm((prev) => ({ ...prev, appointmentTime: "" }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 0:
        if (!form.name.trim()) newErrors.name = "Name is required";
        else if (form.name.trim().length < 2)
          newErrors.name = "Name must be at least 2 characters";
        break;
      case 1:
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email))
          newErrors.email = "Email is invalid";
        if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";
        else if (!/^\d{10}$/.test(form.mobile))
          newErrors.mobile = "Mobile number must be 10 digits";
        break;
      case 2:
        if (!form.serviceCategory)
          newErrors.serviceCategory = "Please select a service category";
        break;
      case 3:
        if (!form.serviceType)
          newErrors.serviceType = "Please select a service type";
        break;
      case 4:
        if (!form.appointmentType)
          newErrors.appointmentType = "Please select appointment type";
        if (!form.appointmentDate)
          newErrors.appointmentDate = "Please select appointment date";
        else if (
          new Date(form.appointmentDate) < new Date().setHours(0, 0, 0, 0)
        ) {
          newErrors.appointmentDate = "Please select a future date";
        }
        if (!form.appointmentTime)
          newErrors.appointmentTime = "Please select appointment time";
        if (form.appointmentType === "in-person" && !form.branchLocation) {
          newErrors.branchLocation = "Please select branch location";
        }
        break;
      case 5:
        if (!form.message.trim())
          newErrors.message = "Please provide some details";
        else if (form.message.trim().length < 10)
          newErrors.message =
            "Please provide more details (min. 10 characters)";
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      console.log("Form Data:", form);
      setSubmitted(true);
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const steps = [
    { title: "Personal", icon: "👤", field: "name" },
    { title: "Contact", icon: "📱", fields: ["email", "mobile"] },
    { title: "Category", icon: "📂", field: "serviceCategory" },
    { title: "Service", icon: "🛠️", field: "serviceType" },
    {
      title: "Appointment",
      icon: "📅",
      fields: ["appointmentDate", "appointmentTime"],
    },
    { title: "Details", icon: "📝", field: "message" },
  ];

  const serviceCategories = [
    {
      id: "documentation",
      label: "Documentation",
      icon: "🖨️",
      description: "Printing & Xerox services",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: "government",
      label: "Government",
      icon: "🏛️",
      description: "License and permit services",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: "international",
      label: "International",
      icon: "🌍",
      description: "Visa and passport services",
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: "healthcare",
      label: "Healthcare",
      icon: "🏥",
      description: "Health card registrations",
      color: "from-indigo-500 to-blue-600",
    },
    {
      id: "education",
      label: "Education",
      icon: "🎓",
      description: "Certificate services",
      color: "from-purple-500 to-blue-600",
    },
    {
      id: "business",
      label: "Business",
      icon: "💼",
      description: "Registration and compliance",
      color: "from-blue-700 to-indigo-700",
    },
    {
      id: "digital",
      label: "Digital",
      icon: "💻",
      description: "Online application assistance",
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "legal",
      label: "Legal",
      icon: "⚖️",
      description: "Official certificates",
      color: "from-indigo-600 to-blue-600",
    },
  ];

  const serviceOptions = {
    documentation: [
      {
        value: "bulk_xerox",
        label: "🖨️ Bulk Xerox & Print",
        description: "High-quality B&W and Color printing",
      },
      {
        value: "document_scanning",
        label: "📄 Document Scanning",
        description: "Professional document digitization",
      },
      {
        value: "binding",
        label: "📚 Binding Services",
        description: "Spiral, thermal, and hardcover binding",
      },
      {
        value: "lamination",
        label: "📋 Lamination Services",
        description: "Document protection and preservation",
      },
      {
        value: "photo_printing",
        label: "🖼️ Photo Printing",
        description: "High-quality photo prints",
      },
    ],
    government: [
      {
        value: "driving_license",
        label: "🚗 Driving License",
        description: "New application and renewal",
      },
      {
        value: "vehicle_registration",
        label: "🚙 Vehicle Registration",
        description: "RC book and transfer services",
      },
      {
        value: "aadhaar",
        label: "🆔 Aadhaar Services",
        description: "Enrollment and update",
      },
      {
        value: "ration_card",
        label: "🛒 Ration Card",
        description: "New application and modification",
      },
      {
        value: "birth_death_cert",
        label: "📜 Birth/Death Certificate",
        description: "Certificate issuance",
      },
    ],
    international: [
      {
        value: "passport",
        label: "📘 Passport Services",
        description: "Fresh and renewal applications",
      },
      {
        value: "visa_processing",
        label: "🌐 Visa Processing",
        description: "Tourist, business, and student visas",
      },
      {
        value: "document_attestation",
        label: "📑 Document Attestation",
        description: "Educational and personal documents",
      },
      {
        value: "travel_insurance",
        label: "✈️ Travel Insurance",
        description: "International travel coverage",
      },
      {
        value: "forex_services",
        label: "💱 Forex Services",
        description: "Foreign currency exchange",
      },
    ],
    healthcare: [
      {
        value: "health_insurance",
        label: "🏥 Health Insurance",
        description: "Policy purchase and renewal",
      },
      {
        value: "govt_health_schemes",
        label: "💊 Govt Health Schemes",
        description: "Ayushman Bharat and state schemes",
      },
      {
        value: "health_card",
        label: "🩺 Health Card Registration",
        description: "Digital health records",
      },
      {
        value: "medical_certificate",
        label: "📄 Medical Certificates",
        description: "Fitness and medical reports",
      },
      {
        value: "insurance_claim",
        label: "💰 Insurance Claim",
        description: "Claim processing assistance",
      },
    ],
    education: [
      {
        value: "marksheet_attestation",
        label: "📊 Marksheet Attestation",
        description: "Academic document verification",
      },
      {
        value: "scholarship",
        label: "🎓 Scholarship Applications",
        description: "Government and private scholarships",
      },
      {
        value: "transfer_certificate",
        label: "📜 Transfer Certificate",
        description: "TC issuance and attestation",
      },
      {
        value: "degree_certificate",
        label: "🎖️ Degree Certificate",
        description: "Duplicate and verification",
      },
      {
        value: "admission_consultation",
        label: "🏫 Admission Consultation",
        description: "College and university admissions",
      },
    ],
    business: [
      {
        value: "gst_registration",
        label: "📊 GST Registration",
        description: "New GSTIN and modifications",
      },
      {
        value: "msme_registration",
        label: "🏢 MSME Registration",
        description: "Udyam registration",
      },
      {
        value: "company_registration",
        label: "💼 Company Registration",
        description: "Private and public limited",
      },
      {
        value: "fssai_license",
        label: "🍽️ FSSAI License",
        description: "Food business license",
      },
      {
        value: "trade_license",
        label: "🏪 Trade License",
        description: "Municipal business license",
      },
    ],
    digital: [
      {
        value: "tnpsc_applications",
        label: "📝 TNPSC Applications",
        description: "Government exam forms",
      },
      {
        value: "college_admissions",
        label: "🎓 College Admissions",
        description: "Online application assistance",
      },
      {
        value: "bank_application",
        label: "🏦 Bank Applications",
        description: "Loan and account applications",
      },
      {
        value: "govt_schemes",
        label: "📱 Govt Scheme Applications",
        description: "Various government schemes",
      },
      {
        value: "online_bill_payment",
        label: "💳 Online Bill Payment",
        description: "Utility and tax payments",
      },
    ],
    legal: [
      {
        value: "birth_certificate",
        label: "👶 Birth Certificate",
        description: "Issuance and duplicate",
      },
      {
        value: "income_certificate",
        label: "💰 Income Certificate",
        description: "Salary and business income",
      },
      {
        value: "community_certificate",
        label: "👥 Community Certificate",
        description: "Caste and community proof",
      },
      {
        value: "domicile_certificate",
        label: "🏠 Domicile Certificate",
        description: "Residence proof",
      },
      {
        value: "marriage_certificate",
        label: "💑 Marriage Certificate",
        description: "Registration and certificate",
      },
    ],
  };

  const appointmentTypes = [
    {
      value: "in-person",
      label: "🏢 In-Person Visit",
      description: "Visit our branch office",
    },
    {
      value: "online",
      label: "💻 Online Consultation",
      description: "Video call or chat",
    },
  ];

  const branchLocations = [
    {
      value: "t_nager",
      label: "T Nagar",
      address: "123 MG Road, T Nagar, Chennai",
    },
    {
      value: "porur",
      label: "Porur",
      address: "456 Mount Road, Porur, Chennai",
    },
    {
      value: "tambaram",
      label: "Tambaram",
      address: "789 GST Road, Tambaram, Chennai",
    },
    {
      value: "velachery",
      label: "Velachery",
      address: "321 Velachery Main Road, Chennai",
    },
    {
      value: "anna_nagar",
      label: "Anna Nagar",
      address: "654 3rd Avenue, Anna Nagar, Chennai",
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ];

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split("T")[0]);
      }
    }
    return dates;
  };

  const isStepComplete = (stepIndex) => {
    const step = steps[stepIndex];
    if (step.field) {
      return form[step.field] && !errors[step.field];
    }
    if (step.fields) {
      return step.fields.every((field) => form[field] && !errors[field]);
    }
    return false;
  };

  const getSelectedServiceLabel = () => {
    if (!form.serviceCategory || !form.serviceType) return "";
    const service = serviceOptions[form.serviceCategory]?.find(
      (s) => s.value === form.serviceType
    );
    return service ? service.label : "";
  };

  const getSelectedBranchLabel = () => {
    if (!form.branchLocation) return "";
    const branch = branchLocations.find((b) => b.value === form.branchLocation);
    return branch ? branch.label : "";
  };

  const formatAppointmentDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle Background Animation */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-900/30 blur-xl"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              top: `${10 + i * 12}%`,
              left: `${5 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl mx-auto py-8"
      >
        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-white">
            <div className="text-center">
              <motion.h1
                className="text-3xl sm:text-4xl font-bold mb-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Request Service
              </motion.h1>
              <motion.p
                className="text-blue-100 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Complete the form below to schedule your service appointment
              </motion.p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-8">
            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-8 relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center z-10 flex-1"
                >
                  <motion.div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 text-xs sm:text-sm font-semibold transition-all duration-500 relative ${
                      index <= currentStep
                        ? "bg-gradient-to-r from-blue-300 to-purple-300 border-blue-300 text-white shadow-lg shadow-blue-500/30"
                        : "border-gray-300 text-gray-400 bg-gray-50"
                    } ${
                      isStepComplete(index)
                        ? "ring-2 ring-blue-400 ring-offset-2 ring-offset-white"
                        : ""
                    }`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {step.icon}
                    {isStepComplete(index) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <span className="text-[8px] sm:text-xs text-white">
                          ✓
                        </span>
                      </motion.div>
                    )}
                  </motion.div>
                  <span
                    className={`text-xs mt-2 transition-all duration-300 text-center px-1 ${
                      index <= currentStep
                        ? "text-gray-900 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
              {/* Progress Line */}
              <div className="absolute top-4 sm:top-5 left-0 right-0 h-1 bg-gray-200 -z-10 rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg shadow-blue-500/30"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${(currentStep / (steps.length - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-8">
                    <motion.h2
                      className="text-2xl sm:text-3xl font-bold text-gray-900"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {steps[currentStep].title} Information
                    </motion.h2>
                    <motion.p
                      className="text-gray-600 mt-2 text-sm sm:text-base"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Step {currentStep + 1} of {steps.length}
                    </motion.p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <AnimatePresence mode="wait">
                      {/* Step 1: Personal Information */}
                      {currentStep === 0 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block mb-3 text-sm font-medium text-gray-700">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              required
                              className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                                errors.name
                                  ? "bg-red-50 border-red-300 focus:ring-red-300 focus:border-transparent"
                                  : "bg-gray-50 border-gray-200 focus:ring-blue-500 focus:border-transparent"
                              }`}
                              placeholder="Enter your full name"
                            />
                            <AnimatePresence>
                              {errors.name && (
                                <motion.p
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="text-red-600 text-xs mt-2 flex items-center"
                                >
                                  ⚠️ {errors.name}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Contact Information */}
                      {currentStep === 1 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block mb-3 text-sm font-medium text-gray-700">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              required
                              className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                                errors.email
                                  ? "bg-red-50 border-red-300 focus:ring-red-300 focus:border-transparent"
                                  : "bg-gray-50 border-gray-200 focus:ring-blue-500 focus:border-transparent"
                              }`}
                              placeholder="your.email@example.com"
                            />
                            <AnimatePresence>
                              {errors.email && (
                                <motion.p
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="text-red-600 text-xs mt-2 flex items-center"
                                >
                                  ⚠️ {errors.email}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                          <div>
                            <label className="block mb-3 text-sm font-medium text-gray-700">
                              Mobile Number *
                            </label>
                            <input
                              type="tel"
                              name="mobile"
                              value={form.mobile}
                              onChange={handleChange}
                              required
                              maxLength="10"
                              className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                                errors.mobile
                                  ? "bg-red-50 border-red-300 focus:ring-red-300 focus:border-transparent"
                                  : "bg-gray-50 border-gray-200 focus:ring-blue-500 focus:border-transparent"
                              }`}
                              placeholder="Enter 10-digit mobile number"
                            />
                            <AnimatePresence>
                              {errors.mobile && (
                                <motion.p
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="text-red-600 text-xs mt-2 flex items-center"
                                >
                                  ⚠️ {errors.mobile}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3: Service Category */}
                      {currentStep === 2 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block mb-3 text-sm font-medium text-gray-700">
                              Select Service Category *
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {serviceCategories.map((category) => (
                                <motion.label
                                  key={category.id}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                    form.serviceCategory === category.id
                                      ? "bg-blue-50 border-blue-500 shadow-lg shadow-blue-500/20"
                                      : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="serviceCategory"
                                    value={category.id}
                                    checked={
                                      form.serviceCategory === category.id
                                    }
                                    onChange={handleChange}
                                    className="hidden"
                                  />
                                  <div className="flex items-center space-x-4 w-full">
                                    <div
                                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-lg text-white shadow-lg`}
                                    >
                                      {category.icon}
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-medium text-gray-900">
                                        {category.label}
                                      </div>
                                      <div className="text-xs text-gray-600 mt-1">
                                        {category.description}
                                      </div>
                                    </div>
                                    <div
                                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                        form.serviceCategory === category.id
                                          ? "border-blue-500 bg-blue-500"
                                          : "border-gray-400"
                                      }`}
                                    >
                                      {form.serviceCategory === category.id && (
                                        <motion.div
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          className="w-2 h-2 bg-white rounded-full"
                                        />
                                      )}
                                    </div>
                                  </div>
                                </motion.label>
                              ))}
                            </div>
                            <AnimatePresence>
                              {errors.serviceCategory && (
                                <motion.p
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="text-red-600 text-xs mt-2 flex items-center"
                                >
                                  ⚠️ {errors.serviceCategory}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 4: Specific Service */}
                      {currentStep === 3 && (
                        <motion.div
                          key="step4"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block mb-3 text-sm font-medium text-gray-700">
                              Select Specific Service *
                            </label>
                            <div className="grid gap-3">
                              {form.serviceCategory &&
                                serviceOptions[form.serviceCategory]?.map(
                                  (option) => (
                                    <motion.label
                                      key={option.value}
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                      className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                        form.serviceType === option.value
                                          ? "bg-blue-50 border-blue-500 shadow-lg shadow-blue-500/20"
                                          : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                                      }`}
                                    >
                                      <input
                                        type="radio"
                                        name="serviceType"
                                        value={option.value}
                                        checked={
                                          form.serviceType === option.value
                                        }
                                        onChange={handleChange}
                                        className="hidden"
                                      />
                                      <div className="flex items-center space-x-3 w-full">
                                        <div
                                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                            form.serviceType === option.value
                                              ? "border-blue-500 bg-blue-500"
                                              : "border-gray-400"
                                          }`}
                                        >
                                          {form.serviceType ===
                                            option.value && (
                                            <motion.div
                                              initial={{ scale: 0 }}
                                              animate={{ scale: 1 }}
                                              className="w-2 h-2 bg-white rounded-full"
                                            />
                                          )}
                                        </div>
                                        <div className="flex-1">
                                          <div className="font-medium text-gray-900">
                                            {option.label}
                                          </div>
                                          <div className="text-xs text-gray-600 mt-1">
                                            {option.description}
                                          </div>
                                        </div>
                                      </div>
                                    </motion.label>
                                  )
                                )}
                            </div>
                            <AnimatePresence>
                              {errors.serviceType && (
                                <motion.p
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="text-red-600 text-xs mt-2 flex items-center"
                                >
                                  ⚠️ {errors.serviceType}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 5: Appointment Booking */}
                      {currentStep === 4 && (
                        <motion.div
                          key="step5"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          className="space-y-6"
                        >
                          <div>
                            <label className="block mb-3 text-sm font-medium text-gray-700">
                              Appointment Type *
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {appointmentTypes.map((type) => (
                                <motion.label
                                  key={type.value}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                    form.appointmentType === type.value
                                      ? "bg-blue-50 border-blue-500 shadow-lg shadow-blue-500/20"
                                      : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="appointmentType"
                                    value={type.value}
                                    checked={
                                      form.appointmentType === type.value
                                    }
                                    onChange={handleChange}
                                    className="hidden"
                                  />
                                  <div className="flex items-center space-x-3 w-full">
                                    <div
                                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                        form.appointmentType === type.value
                                          ? "border-blue-500 bg-blue-500"
                                          : "border-gray-400"
                                      }`}
                                    >
                                      {form.appointmentType === type.value && (
                                        <motion.div
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          className="w-2 h-2 bg-white rounded-full"
                                        />
                                      )}
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-medium text-gray-900">
                                        {type.label}
                                      </div>
                                      <div className="text-xs text-gray-600 mt-1">
                                        {type.description}
                                      </div>
                                    </div>
                                  </div>
                                </motion.label>
                              ))}
                            </div>
                            <AnimatePresence>
                              {errors.appointmentType && (
                                <motion.p
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="text-red-600 text-xs mt-2 flex items-center"
                                >
                                  ⚠️ {errors.appointmentType}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>

                          {form.appointmentType === "in-person" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              <label className="block mb-3 text-sm font-medium text-gray-700">
                                Select Branch Location *
                              </label>
                              <div className="grid gap-3">
                                {branchLocations.map((branch) => (
                                  <motion.label
                                    key={branch.value}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                      form.branchLocation === branch.value
                                        ? "bg-blue-50 border-blue-500 shadow-lg shadow-blue-500/20"
                                        : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name="branchLocation"
                                      value={branch.value}
                                      checked={
                                        form.branchLocation === branch.value
                                      }
                                      onChange={handleChange}
                                      className="hidden"
                                    />
                                    <div className="flex items-center space-x-3 w-full">
                                      <div
                                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                          form.branchLocation === branch.value
                                            ? "border-blue-500 bg-blue-500"
                                            : "border-gray-400"
                                        }`}
                                      >
                                        {form.branchLocation ===
                                          branch.value && (
                                          <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-2 h-2 bg-white rounded-full"
                                          />
                                        )}
                                      </div>
                                      <div className="flex-1">
                                        <div className="font-medium text-gray-900">
                                          {branch.label}
                                        </div>
                                        <div className="text-xs text-gray-600 mt-1">
                                          {branch.address}
                                        </div>
                                      </div>
                                    </div>
                                  </motion.label>
                                ))}
                              </div>
                              <AnimatePresence>
                                {errors.branchLocation && (
                                  <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-red-600 text-xs mt-2 flex items-center"
                                  >
                                    ⚠️ {errors.branchLocation}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block mb-3 text-sm font-medium text-gray-700">
                                Preferred Date *
                              </label>
                              <select
                                name="appointmentDate"
                                value={form.appointmentDate}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 text-gray-900 focus:outline-none focus:ring-2 ${
                                  errors.appointmentDate
                                    ? "bg-red-50 border-red-300 focus:ring-red-300 focus:border-transparent"
                                    : "bg-gray-50 border-gray-200 focus:ring-blue-500 focus:border-transparent"
                                }`}
                              >
                                <option value="">Select a date</option>
                                {getAvailableDates().map((date) => (
                                  <option key={date} value={date}>
                                    {formatAppointmentDate(date)}
                                  </option>
                                ))}
                              </select>
                              <AnimatePresence>
                                {errors.appointmentDate && (
                                  <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-red-600 text-xs mt-2 flex items-center"
                                  >
                                    ⚠️ {errors.appointmentDate}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                            </div>

                            <div>
                              <label className="block mb-3 text-sm font-medium text-gray-700">
                                Preferred Time *
                              </label>
                              <select
                                name="appointmentTime"
                                value={form.appointmentTime}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 text-gray-900 focus:outline-none focus:ring-2 ${
                                  errors.appointmentTime
                                    ? "bg-red-50 border-red-300 focus:ring-red-300 focus:border-transparent"
                                    : "bg-gray-50 border-gray-200 focus:ring-blue-500 focus:border-transparent"
                                }`}
                              >
                                <option value="">Select a time</option>
                                {timeSlots.map((time) => (
                                  <option key={time} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                              <AnimatePresence>
                                {errors.appointmentTime && (
                                  <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-red-600 text-xs mt-2 flex items-center"
                                  >
                                    ⚠️ {errors.appointmentTime}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>

                          {form.appointmentDate && form.appointmentTime && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-4 bg-blue-50 border border-blue-200 rounded-xl"
                            >
                              <div className="text-center">
                                <div className="text-blue-700 font-semibold">
                                  📅 Appointment Scheduled
                                </div>
                                <div className="text-gray-600 text-sm mt-1">
                                  {formatAppointmentDate(form.appointmentDate)}{" "}
                                  at {form.appointmentTime}
                                </div>
                                {form.appointmentType === "in-person" &&
                                  form.branchLocation && (
                                    <div className="text-gray-500 text-xs mt-1">
                                      {getSelectedBranchLabel()}
                                    </div>
                                  )}
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      )}

                      {/* Step 6: Additional Details */}
                      {currentStep === 5 && (
                        <motion.div
                          key="step6"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block mb-3 text-sm font-medium text-gray-700">
                              Additional Details *
                            </label>
                            <textarea
                              name="message"
                              value={form.message}
                              onChange={handleChange}
                              rows="5"
                              placeholder="Please describe your request in detail. Include any specific requirements, documents you have, preferred timeline, or any other relevant information..."
                              className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 resize-none ${
                                errors.message
                                  ? "bg-red-50 border-red-300 focus:ring-red-300 focus:border-transparent"
                                  : "bg-gray-50 border-gray-200 focus:ring-blue-500 focus:border-transparent"
                              }`}
                            />
                            <div className="flex justify-between items-center mt-2">
                              <AnimatePresence>
                                {errors.message && (
                                  <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-red-600 text-xs flex items-center"
                                  >
                                    ⚠️ {errors.message}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                              <span
                                className={`text-xs ${
                                  form.message.length < 10
                                    ? "text-gray-500"
                                    : "text-green-600"
                                }`}
                              >
                                {form.message.length}/10
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                      <motion.button
                        type="button"
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className={`px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                          currentStep === 0
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300 hover:shadow-lg"
                        }`}
                        whileHover={currentStep !== 0 ? { scale: 1.05 } : {}}
                        whileTap={currentStep !== 0 ? { scale: 0.95 } : {}}
                      >
                        <span>←</span>
                        <span className="hidden sm:inline">Back</span>
                      </motion.button>

                      <div className="text-xs text-gray-600 text-center">
                        <div>
                          Step {currentStep + 1} of {steps.length}
                        </div>
                        {form.serviceType && (
                          <div className="text-blue-600 mt-1 font-medium">
                            {getSelectedServiceLabel()}
                          </div>
                        )}
                      </div>

                      {currentStep < steps.length - 1 ? (
                        <motion.button
                          type="button"
                          onClick={nextStep}
                          className="px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-medium text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="hidden sm:inline">Next</span>
                          <span>→</span>
                        </motion.button>
                      ) : (
                        <motion.button
                          type="submit"
                          className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-medium text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>🚀</span>
                          <span>Submit Request</span>
                        </motion.button>
                      )}
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="text-center space-y-6 py-8"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="text-6xl"
                  >
                    🎉
                  </motion.div>

                  <div>
                    <motion.h2
                      className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Appointment Confirmed!
                    </motion.h2>
                    <motion.p
                      className="text-gray-600 leading-relaxed text-sm sm:text-base"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Thank you{" "}
                      <span className="text-blue-600 font-semibold">
                        {form.name}
                      </span>
                      !
                      <br />
                      Your appointment for{" "}
                      <span className="text-purple-600 font-semibold">
                        {getSelectedServiceLabel()}
                      </span>{" "}
                      has been scheduled.
                      <br />
                      <br />
                      <span className="text-blue-700 font-semibold">
                        📅 {formatAppointmentDate(form.appointmentDate)} at{" "}
                        {form.appointmentTime}
                      </span>
                      <br />
                      {form.appointmentType === "in-person" ? (
                        <span className="text-green-600">
                          🏢 {getSelectedBranchLabel()}
                        </span>
                      ) : (
                        <span className="text-indigo-600">
                          💻 Online Consultation
                        </span>
                      )}
                      <br />
                      <br />
                      Confirmation has been sent to{" "}
                      <span className="text-blue-600">
                        {form.email}
                      </span> and{" "}
                      <span className="text-blue-600">{form.mobile}</span>.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-3"
                  >
                    <motion.button
                      onClick={() => {
                        setSubmitted(false);
                        setCurrentStep(0);
                        setForm({
                          name: "",
                          email: "",
                          mobile: "",
                          serviceCategory: "",
                          serviceType: "",
                          message: "",
                          appointmentDate: "",
                          appointmentTime: "",
                          appointmentType: "in-person",
                          branchLocation: "",
                        });
                        setErrors({});
                      }}
                      className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ✨ Book Another Appointment
                    </motion.button>
                    <button
                      onClick={() => window.print()}
                      className="px-6 py-2 text-gray-500 hover:text-gray-700 text-sm transition-all duration-300"
                    >
                      📄 Print Confirmation
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RequestService;
