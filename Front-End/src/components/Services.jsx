// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { useNavigate } from "react-router-dom";

// // const services = [
// //   { title: "Bulk Xerox & Print", sub: "ஜெராக்ஸ் & பிரிண்ட்", desc: "B&W, Color, Multiple copies", color: "bg-blue-500", icon: "print" },
// //   { title: "Driving License", sub: "உரிமம் & அனுமதி", desc: "New license or renewal", color: "bg-teal-500", icon: "car" },
// //   { title: "Visa & Passport", sub: "விசா & பாஸ்போர்ட்", desc: "International documents", color: "bg-amber-500", icon: "plane" },
// //   { title: "Health Cards", sub: "சுகாதார அட்டைகள்", desc: "Insurance & health schemes", color: "bg-rose-500", icon: "heart" },
// //   { title: "Education Certs", sub: "கல்வி சான்றிதழ்", desc: "Marksheets,scholarships ", color: "bg-indigo-500", icon: "school" },
// //   { title: "Business Registration", sub: "வணிக பதிவு", desc: "GST, MSME, Udyam, FSSAI registration services", color: "bg-green-500", icon: "id" },
// //   { title: "Online Applications", sub: "ஆன்லைன் விண்ணப்பங்கள்", desc: "College admission, TNPSC,SSC,RRB,CAT ", color: "bg-orange-500", icon: "doc" },
// //   { title: "Certificates", sub: "சான்றிதழ்கள்", desc: "Birth, income, community", color: "bg-lime-500", icon: "card" },
// //   { title: "More Services", sub: "மேலும் சேவைகள்", desc: "Explore all options", color: "bg-purple-500", icon: "more" },
// // ];

// // function Icon({ name }) {
// //   switch (name) {
// //     case "print":
// //       return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7M6 13h12v7H6v-7z" />
// //       </svg>;
// //     case "id":
// //       return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
// //       </svg>;
// //     case "card":
// //       return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth={1.5} />
// //         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
// //       </svg>;
// //     case "car":
// //       return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13" />
// //         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z" />
// //       </svg>;
// //     case "plane":
// //       return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M2 16l20-8-8 8-4 4-2-4-6-4z" />
// //       </svg>;
// //     case "heart":
// //       return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z" />
// //       </svg>;
// //     case "school":
// //       return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4-8 4-8-4 8-4z" />
// //         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M4 10v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
// //       </svg>;
// //     case "doc":
// //       return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
// //       </svg>;
// //     case "more":
// //       return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 6v.01M12 12v.01M12 18v.01" />
// //       </svg>;
// //     default:
// //       return null;
// //   }
// // }

// // export default function OurServices() {

// //   const navigate = useNavigate();

// //   const gotoShops = () =>{
// //     navigate("/shops");
// //   }

// //   return (
// //     <section className="bg-gradient-to-br from-gray-50 to-white py-20">
// //       <div className="max-w-7xl mx-auto px-6">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
// //           <p className="text-xl text-gray-700 mb-2">எங்கள் சேவைகள்</p>
// //           <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
// //           <p className="text-gray-500 max-w-2xl mx-auto mt-6">
// //             From simple xerox to complex government applications - we handle it all with precision and care
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {services.map((service, index) => (
// //             <div onClick={gotoShops}
// //               key={service.title}
// //               className="group bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
// //             >
// //               <div className="p-6">
// //                 <div className="flex items-start gap-5">
// //                   <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
// //                     <Icon name={service.icon} />
// //                   </div>
// //                   <div className="flex-1">
// //                     <h3 className="font-bold text-gray-900 text-lg group-hover:text-gray-700 transition-colors">
// //                       {service.title}
// //                     </h3>
// //                     <p className="text-sm text-gray-600 font-medium mt-1">{service.sub}</p>
// //                     <p className="text-gray-500 text-sm mt-2 leading-relaxed">{service.desc}</p>
// //                   </div>
// //                 </div>

// //                 <div className="mt-6 flex justify-between items-center">
// //                   <span className="text-xs text-gray-400">Service {index + 1}</span>
// //                   <button className="text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 group-hover:gap-2 duration-300">
// //                     Learn more
// //                     <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //                     </svg>
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Hover effect line- group-hover:w-full  */}
// //               <div className={`h-1 w-0 ${service.color} transition-all duration-500`}></div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Call to Action */}
// //         <div className="text-center mt-16">
// //           <Link to={"/service"} className="bg-gradient-to-r from-blue-300 to-purple-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
// //             View All Services
// //           </Link>
// //           <p className="text-gray-500 text-sm mt-4">50+ services available • Walk-ins welcome</p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

//  import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const services = [
//   {
//     title: "Bulk Xerox & Print",
//     sub: "ஜெராக்ஸ் & பிரிண்ட்",
//     desc: "B&W, Color, Multiple copies",
//     color: "from-blue-500 to-cyan-500",
//     bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
//     icon: "print",
//     pattern: "grid"
//   },
//   {
//     title: "Driving License",
//     sub: "உரிமம் & அனுமதி",
//     desc: "New license or renewal",
//     color: "from-emerald-500 to-teal-500",
//     bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
//     icon: "car",
//     pattern: "dots"
//   },
//   {
//     title: "Visa & Passport",
//     sub: "விசா & பாஸ்போர்ட்",
//     desc: "International documents",
//     color: "from-amber-500 to-orange-500",
//     bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
//     icon: "plane",
//     pattern: "lines"
//   },
//   {
//     title: "Health Cards",
//     sub: "சுகாதார அட்டைகள்",
//     desc: "Insurance & health schemes",
//     color: "from-rose-500 to-pink-500",
//     bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
//     icon: "heart",
//     pattern: "waves"
//   },
//   {
//     title: "Education Certs",
//     sub: "கல்வி சான்றிதழ்",
//     desc: "Marksheets, scholarships",
//     color: "from-indigo-500 to-purple-500",
//     bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
//     icon: "school",
//     pattern: "hexagon"
//   },
//   {
//     title: "Business Registration",
//     sub: "வணிக பதிவு",
//     desc: "GST, MSME, Udyam, FSSAI",
//     color: "from-green-500 to-lime-500",
//     bgColor: "bg-gradient-to-br from-green-50 to-lime-50",
//     icon: "id",
//     pattern: "circuit"
//   },
//   {
//     title: "Online Applications",
//     sub: "ஆன்லைன் விண்ணப்பங்கள்",
//     desc: "College admission, TNPSC, SSC",
//     color: "from-orange-500 to-red-500",
//     bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
//     icon: "doc",
//     pattern: "binary"
//   },
//   {
//     title: "Certificates",
//     sub: "சான்றிதழ்கள்",
//     desc: "Birth, income, community",
//     color: "from-lime-500 to-emerald-500",
//     bgColor: "bg-gradient-to-br from-lime-50 to-emerald-50",
//     icon: "card",
//     pattern: "triangle"
//   },
//   {
//     title: "More Services",
//     sub: "மேலும் சேவைகள்",
//     desc: "Explore all options",
//     color: "from-purple-500 to-violet-500",
//     bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
//     icon: "more",
//     pattern: "stars"
//   },
// ];

// function PatternBackground({ type, color }) {
//   const baseColor = color.split('-')[1]; // Extract color name

//   switch (type) {
//     case "grid":
//       return (
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `linear-gradient(${baseColor} 1px, transparent 1px), linear-gradient(90deg, ${baseColor} 1px, transparent 1px)`,
//             backgroundSize: '20px 20px'
//           }}></div>
//         </div>
//       );
//     case "dots":
//       return (
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(${baseColor} 1px, transparent 1px)`,
//             backgroundSize: '20px 20px'
//           }}></div>
//         </div>
//       );
//     case "waves":
//       return (
//         <div className="absolute inset-0 opacity-5">
//           <svg viewBox="0 0 100 100" className="w-full h-full">
//             <path d="M0,50 Q25,30 50,50 T100,50" stroke={baseColor} strokeWidth="2" fill="none" />
//             <path d="M0,60 Q25,40 50,60 T100,60" stroke={baseColor} strokeWidth="2" fill="none" />
//           </svg>
//         </div>
//       );
//     default:
//       return null;
//   }
// }

// function Icon({ name, className = "w-8 h-8" }) {
//   const icons = {
//     print: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 13h12v7H6v-7z" />
//       </svg>
//     ),
//     id: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//       </svg>
//     ),
//     car: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h6m-4 8h4M6 21v-4m12 4v-4M4 13l1.5-4.5A2 2 0 017.4 7h9.2a2 2 0 011.9 1.5L20 13" />
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M6 18a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
//       </svg>
//     ),
//     plane: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//       </svg>
//     ),
//     heart: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//       </svg>
//     ),
//     school: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//       </svg>
//     ),
//     doc: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//       </svg>
//     ),
//     more: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 6v.01M12 12v.01M12 18v.01M8 12h.01M16 12h.01" />
//       </svg>
//     ),
//     card: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth={1.5} />
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M2 10h20M6 15h4" />
//       </svg>
//     )
//   };

//   return icons[name] || null;
// }

// export default function OurServices() {
//   const navigate = useNavigate();
//   const [setHoveredCard] = useState(null);

//   const gotoShops = () => {
//     navigate("/shops");
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//       <div className="absolute top-0 right-0 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//       <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8">
//             <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//             <span className="text-sm font-medium text-gray-600">Our Services</span>
//             <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//           </div>

//           <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6">
//             What We Offer
//           </h2>
//           <p className="text-2xl text-gray-700 mb-4 font-light">எங்கள் சேவைகள்</p>

//           <div className="flex justify-center items-center gap-4 mb-8">
//             <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
//             <div className="w-3 h-3 bg-blue-500 rounded-full rotate-45"></div>
//             <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
//           </div>

//           <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
//             From simple xerox to complex government applications - we handle it all with
//             <span className="font-semibold text-blue-600"> precision</span> and
//             <span className="font-semibold text-green-600"> care</span>
//           </p>
//         </div>

//         {/* Services Grid - Asymmetric Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
//           {/* Main Featured Cards */}
//           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {services.slice(0, 4).map((service, index) => (
//               <div
//                 key={service.title}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 onClick={gotoShops}
//                 className={`group relative ${service.bgColor} rounded-3xl p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 border-2 border-white shadow-2xl shadow-black/5 backdrop-blur-sm overflow-hidden`}
//               >
//                 <PatternBackground type={service.pattern} color={service.color.split('-')[1]} />

//                 {/* Animated Gradient Border */}
//                 <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md -z-10`}></div>

//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between mb-6">
//                     <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
//                       <Icon name={service.icon} />
//                     </div>
//                     <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/80 text-gray-600 backdrop-blur-sm">
//                       {String(index + 1).padStart(2, '0')}
//                     </span>
//                   </div>

//                   <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm font-medium text-gray-600 mb-3">{service.sub}</p>
//                   <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>

//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-gray-400 font-medium">Tap to explore</span>
//                     <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
//                       <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Sidebar - Vertical Cards */}
//           <div className="lg:col-span-4 flex flex-col gap-6">
//             {services.slice(4, 7).map((service, index) => (
//               <div
//                 key={service.title}
//                 onMouseEnter={() => setHoveredCard(index + 4)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 onClick={gotoShops}
//                 className={`group flex-1 ${service.bgColor} rounded-3xl p-6 cursor-pointer transform transition-all duration-500 hover:scale-105 border-2 border-white shadow-2xl shadow-black/5 backdrop-blur-sm overflow-hidden`}
//               >
//                 <PatternBackground type={service.pattern} color={service.color.split('-')[1]} />

//                 <div className="flex items-center gap-4">
//                   <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
//                     <Icon name={service.icon} className="w-6 h-6" />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="font-bold text-gray-900 text-lg mb-1">{service.title}</h4>
//                     <p className="text-xs text-gray-600 mb-2">{service.sub}</p>
//                     <p className="text-sm text-gray-500">{service.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Row - Horizontal Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
//           {services.slice(7).map((service, index) => (
//             <div
//               key={service.title}
//               onMouseEnter={() => setHoveredCard(index + 7)}
//               onMouseLeave={() => setHoveredCard(null)}
//               onClick={gotoShops}
//               className={`group ${service.bgColor} rounded-3xl p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 border-2 border-white shadow-2xl shadow-black/5 backdrop-blur-sm overflow-hidden`}
//             >
//               <PatternBackground type={service.pattern} color={service.color.split('-')[1]} />

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-6">
//                   <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
//                     <Icon name={service.icon} />
//                   </div>
//                   <div>
//                     <h4 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h4>
//                     <p className="text-sm font-medium text-gray-600 mb-1">{service.sub}</p>
//                     <p className="text-gray-500">{service.desc}</p>
//                   </div>
//                 </div>
//                 <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
//                   <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Enhanced CTA Section */}
//         <div className="text-center relative">
//           <div className="inline-flex flex-col items-center gap-6">
//             <Link
//               to="/service"
//               className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform"
//             >
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
//               Explore All Services
//               <div className="absolute -right-2 -top-2 w-6 h-6 bg-amber-400 rounded-full animate-ping opacity-75"></div>
//             </Link>

//             <div className="flex items-center gap-8 text-sm text-gray-500">
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 <span>50+ services available</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//                 <span>Walk-ins welcome</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
//                 <span>Expert assistance</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const services = [
//   {
//     title: "Bulk Xerox & Print",
//     sub: "ஜெராக்ஸ் & பிரிண்ட்",
//     desc: "B&W, Color, Multiple copies",
//     icon: "print",
//     gradient: "from-blue-500 to-cyan-500",
//     accent: "bg-blue-500"
//   },
//   {
//     title: "Driving License",
//     sub: "உரிமம் & அனுமதி",
//     desc: "New license or renewal",
//     icon: "car",
//     gradient: "from-green-500 to-emerald-500",
//     accent: "bg-green-500"
//   },
//   {
//     title: "Visa & Passport",
//     sub: "விசா & பாஸ்போர்ட்",
//     desc: "International documents",
//     icon: "plane",
//     gradient: "from-orange-500 to-amber-500",
//     accent: "bg-orange-500"
//   },
//   {
//     title: "Health Cards",
//     sub: "சுகாதார அட்டைகள்",
//     desc: "Insurance & health schemes",
//     icon: "heart",
//     gradient: "from-rose-500 to-pink-500",
//     accent: "bg-rose-500"
//   },
//   {
//     title: "Education Certs",
//     sub: "கல்வி சான்றிதழ்",
//     desc: "Marksheets, scholarships",
//     icon: "school",
//     gradient: "from-purple-500 to-violet-500",
//     accent: "bg-purple-500"
//   },
//   {
//     title: "Business Registration",
//     sub: "வணிக பதிவு",
//     desc: "GST, MSME, Udyam, FSSAI",
//     icon: "id",
//     gradient: "from-teal-500 to-cyan-500",
//     accent: "bg-teal-500"
//   },
//   {
//     title: "Online Applications",
//     sub: "ஆன்லைன் விண்ணப்பங்கள்",
//     desc: "College admission, TNPSC, SSC",
//     icon: "doc",
//     gradient: "from-red-500 to-orange-500",
//     accent: "bg-red-500"
//   },
//   {
//     title: "Certificates",
//     sub: "சான்றிதழ்கள்",
//     desc: "Birth, income, community",
//     icon: "card",
//     gradient: "from-lime-500 to-green-500",
//     accent: "bg-lime-500"
//   },
//   {
//     title: "More Services",
//     sub: "மேலும் சேவைகள்",
//     desc: "Explore all options",
//     icon: "more",
//     gradient: "from-indigo-500 to-purple-500",
//     accent: "bg-indigo-500"
//   },
// ];

// function Icon({ name, className = "w-6 h-6" }) {
//   const icons = {
//     print: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 13h12v7H6v-7z" />
//       </svg>
//     ),
//     id: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//       </svg>
//     ),
//     car: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h6m-4 8h4M6 21v-4m12 4v-4M4 13l1.5-4.5A2 2 0 017.4 7h9.2a2 2 0 011.9 1.5L20 13" />
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M6 18a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
//       </svg>
//     ),
//     plane: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//       </svg>
//     ),
//     heart: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//       </svg>
//     ),
//     school: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//       </svg>
//     ),
//     doc: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//       </svg>
//     ),
//     more: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 6v.01M12 12v.01M12 18v.01M8 12h.01M16 12h.01" />
//       </svg>
//     ),
//     card: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth={1.5} />
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M2 10h20M6 15h4" />
//       </svg>
//     )
//   };

//   return icons[name] || null;
// }

// export default function OurServices() {
//   const navigate = useNavigate();
//   const [ setActiveCard] = useState(null);

//   const gotoShops = () => {
//     navigate("/shops");
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/10 py-20 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
//       <div className="absolute top-20 right-10 w-24 h-24 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
//       <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>

//       {/* Geometric Patterns */}
//       <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
//         <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 clip-path-polygon"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm mb-6">
//             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
//             <span className="text-xs font-medium text-gray-600 tracking-wider">OUR SERVICES</span>
//             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Offer</span>
//           </h2>
//           <p className="text-xl text-gray-700 mb-3 font-light">எங்கள் சேவைகள்</p>

//           <div className="flex justify-center items-center gap-3 mb-6">
//             <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
//             <div className="w-2 h-2 bg-blue-500 rounded-full rotate-45"></div>
//             <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
//           </div>

//           <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
//             Professional services with precision and care for all your documentation needs
//           </p>
//         </div>

//         {/* Services Grid - Hexagon Inspired Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
//           {services.map((service, index) => (
//             <div
//               key={service.title}
//               onMouseEnter={() => setActiveCard(index)}
//               onMouseLeave={() => setActiveCard(null)}
//               onClick={gotoShops}
//               className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105"
//             >
//               {/* Main Card */}
//               <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
//                 {/* Animated Background Gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

//                 {/* Corner Accents */}
//                 <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${service.accent} border-opacity-0 group-hover:border-opacity-100 transition-all duration-300`}></div>
//                 <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${service.accent} border-opacity-0 group-hover:border-opacity-100 transition-all duration-300`}></div>
//                 <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${service.accent} border-opacity-0 group-hover:border-opacity-100 transition-all duration-300`}></div>
//                 <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${service.accent} border-opacity-0 group-hover:border-opacity-100 transition-all duration-300`}></div>

//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
//                       <Icon name={service.icon} className="w-5 h-5" />
//                     </div>
//                     <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-gray-200 transition-colors">
//                       {String(index + 1).padStart(2, '0')}
//                     </span>
//                   </div>

//                   <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-gray-800 transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm font-medium text-gray-600 mb-3">{service.sub}</p>
//                   <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>

//                   <div className="flex items-center justify-between pt-3 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
//                     <span className="text-xs text-gray-400">Click to explore</span>
//                     <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 flex items-center justify-center transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">
//                       <svg className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Element */}
//               <div className={`absolute -top-2 -right-2 w-4 h-4 ${service.accent} rounded-full opacity-0 group-hover:opacity-100 transform group-hover:scale-150 transition-all duration-300`}></div>
//             </div>
//           ))}
//         </div>

//         {/* Enhanced CTA */}
//         <div className="text-center">
//           <div className="inline-flex flex-col items-center gap-6">
//             <Link
//               to="/service"
//               className="group relative bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:scale-105 transform overflow-hidden"
//             >
//               {/* Animated Background */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

//               {/* Text that changes color on hover */}
//               <span className="relative z-10 group-hover:text-white transition-colors duration-300">
//                 Discover All Services
//               </span>

//               {/* Animated Arrow */}
//               <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
//                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </div>
//             </Link>

//             {/* Stats */}
//             <div className="flex items-center gap-6 text-sm text-gray-500">
//               <div className="flex items-center gap-2">
//                 <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
//                 <span>{services.length}+ Professional Services</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
//                 <span>Expert Assistance</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-10px) rotate(180deg); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         .clip-path-polygon {
//           clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
//         }
//       `}</style>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const services = [
//   {
//     title: "Bulk Xerox & Print",
//     sub: "ஜெராக்ஸ் & பிரிண்ட்",
//     desc: "B&W, Color, Multiple copies",
//     icon: "print",
//     gradient: "from-blue-500 to-cyan-500"
//   },
//   {
//     title: "Driving License",
//     sub: "உரிமம் & அனுமதி",
//     desc: "New license or renewal",
//     icon: "car",
//     gradient: "from-green-500 to-emerald-500"
//   },
//   {
//     title: "Visa & Passport",
//     sub: "விசா & பாஸ்போர்ட்",
//     desc: "International documents",
//     icon: "plane",
//     gradient: "from-orange-500 to-amber-500"
//   },
//   {
//     title: "Health Cards",
//     sub: "சுகாதார அட்டைகள்",
//     desc: "Insurance & health schemes",
//     icon: "heart",
//     gradient: "from-rose-500 to-pink-500"
//   },
//   {
//     title: "Education Certs",
//     sub: "கல்வி சான்றிதழ்",
//     desc: "Marksheets, scholarships",
//     icon: "school",
//     gradient: "from-purple-500 to-violet-500"
//   },
//   {
//     title: "Business Registration",
//     sub: "வணிக பதிவு",
//     desc: "GST, MSME, Udyam, FSSAI",
//     icon: "id",
//     gradient: "from-teal-500 to-cyan-500"
//   },
//   {
//     title: "Online Applications",
//     sub: "ஆன்லைன் விண்ணப்பங்கள்",
//     desc: "College admission, TNPSC, SSC",
//     icon: "doc",
//     gradient: "from-red-500 to-orange-500"
//   },
//   {
//     title: "Certificates",
//     sub: "சான்றிதழ்கள்",
//     desc: "Birth, income, community",
//     icon: "card",
//     gradient: "from-lime-500 to-green-500"
//   },
//   {
//     title: "More Services",
//     sub: "மேலும் சேவைகள்",
//     desc: "Explore all options",
//     icon: "more",
//     gradient: "from-indigo-500 to-purple-500"
//   },
// ];

// function Icon({ name, className = "w-6 h-6" }) {
//   const icons = {
//     print: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 13h12v7H6v-7z" />
//       </svg>
//     ),
//     id: (
//       <svg xmlns="http://www3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//       </svg>
//     ),
//     car: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h6m-4 8h4M6 21v-4m12 4v-4M4 13l1.5-4.5A2 2 0 017.4 7h9.2a2 2 0 011.9 1.5L20 13" />
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M6 18a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
//       </svg>
//     ),
//     plane: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//       </svg>
//     ),
//     heart: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//       </svg>
//     ),
//     school: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//       </svg>
//     ),
//     doc: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//       </svg>
//     ),
//     more: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 6v.01M12 12v.01M12 18v.01M8 12h.01M16 12h.01" />
//       </svg>
//     ),
//     card: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth={1.5} />
//         <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M2 10h20M6 15h4" />
//       </svg>
//     )
//   };

//   return icons[name] || null;
// }

// export default function OurServices() {
//   const navigate = useNavigate();
//   const [ setActiveCard] = useState(null);

//   const gotoShops = () => {
//     navigate("/shops");
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
//       <div className="absolute top-20 right-10 w-24 h-24 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
//       <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>

//       <div className="relative max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm mb-6">
//             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
//             <span className="text-xs font-medium text-gray-600 tracking-wider">OUR SERVICES</span>
//             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Offer</span>
//           </h2>
//           <p className="text-xl text-gray-700 mb-3 font-light">எங்கள் சேவைகள்</p>

//           <div className="flex justify-center items-center gap-3 mb-6">
//             <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
//             <div className="w-2 h-2 bg-blue-500 rounded-full rotate-45"></div>
//             <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
//           </div>

//           <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
//             Professional services with precision and care for all your documentation needs
//           </p>
//         </div>

//         {/* Services Grid - Clean Design */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//           {services.map((service, index) => (
//             <div
//               key={service.title}
//               onMouseEnter={() => setActiveCard(index)}
//               onMouseLeave={() => setActiveCard(null)}
//               onClick={gotoShops}
//               className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
//             >
//               {/* Main Card */}
//               <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
//                 {/* Subtle Background Gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-500`}></div>

//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient} text-white shadow-md transform group-hover:scale-110 transition-all duration-300`}>
//                       <Icon name={service.icon} className="w-5 h-5" />
//                     </div>
//                     <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
//                       {String(index + 1).padStart(2, '0')}
//                     </span>
//                   </div>

//                   <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-gray-800 transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm font-medium text-gray-600 mb-3">{service.sub}</p>
//                   <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>

//                   <div className="flex items-center justify-between pt-3 border-t border-gray-100">
//                     <span className="text-xs text-gray-400">Click to explore</span>
//                     <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transform group-hover:translate-x-1 transition-all duration-300">
//                       <svg className="w-3 h-3 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <div className="inline-flex flex-col items-center gap-6">
//             <Link
//               to="/service"
//               className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 transform overflow-hidden"
//             >
//               <span className="relative z-10">Discover All Services</span>

//               {/* Animated Arrow */}
//               <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
//                 <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </div>
//             </Link>

//             {/* Stats */}
//             <div className="flex items-center gap-6 text-sm text-gray-500">
//               <div className="flex items-center gap-2">
//                 <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
//                 <span>{services.length}+ Professional Services</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
//                 <span>Expert Assistance</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const services = [
//   {
//     title: "Bulk Xerox & Print",
//     sub: "ஜெராக்ஸ் & பிரிண்ட்",
//     desc: "High-quality B&W, Color printing with multiple copy options",
//     icon: "print",
//     category: "Documentation",
//     features: ["High Speed", "Quality Paper", "Binding"]
//   },
//   {
//     title: "Driving License",
//     sub: "உரிமம் & அனுமதி",
//     desc: "Complete assistance for new license and renewal processes",
//     icon: "car",
//     category: "Government",
//     features: ["New DL", "Renewal", "Duplicate"]
//   },
//   {
//     title: "Visa & Passport",
//     sub: "விசா & பாஸ்போர்ட்",
//     desc: "Expert guidance for international travel documents",
//     icon: "plane",
//     category: "International",
//     features: ["Fresh Passport", "Visa Processing", "Documentation"]
//   },
//   {
//     title: "Health Cards",
//     sub: "சுகாதார அட்டைகள்",
//     desc: "Insurance and government health scheme registrations",
//     icon: "heart",
//     category: "Healthcare",
//     features: ["Health Insurance", "Govt Schemes", "Renewal"]
//   },
//   {
//     title: "Education Certs",
//     sub: "கல்வி சான்றிதழ்",
//     desc: "Academic document processing and certification services",
//     icon: "school",
//     category: "Education",
//     features: ["Marksheets", "Scholarships", "Verification"]
//   },
//   {
//     title: "Business Registration",
//     sub: "வணிக பதிவு",
//     desc: "Complete business registration and compliance services",
//     icon: "id",
//     category: "Business",
//     features: ["GST", "MSME", "FSSAI"]
//   },
//   {
//     title: "Online Applications",
//     sub: "ஆன்லைன் விண்ணப்பங்கள்",
//     desc: "Professional assistance for online form submissions",
//     icon: "doc",
//     category: "Digital",
//     features: ["TNPSC", "College", "Government"]
//   },
//   {
//     title: "Certificates",
//     sub: "சான்றிதழ்கள்",
//     desc: "Official certificate issuance and attestation services",
//     icon: "card",
//     category: "Legal",
//     features: ["Birth", "Income", "Community"]
//   },
// ];

// function Icon({ name, className = "w-6 h-6" }) {
//   const icons = {
//     print: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
//       </svg>
//     ),
//     id: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 10-4 0v1m4 0a2 2 0 004 0m-4 0a2 2 0 10-4 0m4 0v1m-4 0a2 2 0 00-4 0m4 0v3m0 0h4m-4 0a2 2 0 004 0" />
//       </svg>
//     ),
//     car: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//       </svg>
//     ),
//     plane: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//       </svg>
//     ),
//     heart: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//       </svg>
//     ),
//     school: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//       </svg>
//     ),
//     doc: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//       </svg>
//     ),
//     card: (
//       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//       </svg>
//     )
//   };

//   return icons[name] || null;
// }

// export default function OurServices() {
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [setHoveredCard] = useState(null);

//   const categories = ["All", "Documentation", "Government", "International", "Healthcare", "Education", "Business", "Digital", "Legal"];

//   const filteredServices = activeCategory === "All"
//     ? services
//     : services.filter(service => service.category === activeCategory);

//   const gotoShops = (service) => {
//     navigate("/shops", { state: { service } });
//   };

//   return (
//     <section className="relative bg-white py-24 overflow-hidden">
//       {/* Geometric Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
//         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow animation-delay-2000"></div>
//         <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow animation-delay-4000"></div>

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 opacity-[0.03]">
//           <div className="w-full h-full" style={{
//             backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }}></div>
//         </div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8">
//             <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//             <span className="text-sm font-semibold text-slate-700 tracking-wider uppercase">Our Services</span>
//             <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//           </div>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
//             Professional
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
//               Services
//             </span>
//           </h1>

//           <p className="text-xl text-slate-600 mb-4 font-light">தொழில்முறை சேவைகள்</p>

//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>

//           <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
//             Comprehensive solutions for all your documentation and certification needs.
//             Professional, reliable, and efficient services tailored to exceed expectations.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-3 mb-16">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 border ${
//                 activeCategory === category
//                   ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
//                   : "bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-600 hover:shadow-md"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
//           {filteredServices.map((service, index) => (
//             <div
//               key={service.title}
//               className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//               onClick={() => gotoShops(service)}
//             >
//               {/* Header with Icon and Category */}
//               <div className="p-6 border-b border-slate-100">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className={`p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon name={service.icon} className="w-5 h-5" />
//                   </div>
//                   <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-600">
//                     {service.category}
//                   </span>
//                 </div>

//                 <h3 className="font-bold text-slate-900 text-lg mb-2 leading-tight">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm font-medium text-blue-600 mb-1">{service.sub}</p>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <p className="text-slate-600 text-sm leading-relaxed mb-4">
//                   {service.desc}
//                 </p>

//                 {/* Features */}
//                 <div className="space-y-2 mb-6">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
//                       <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
//                       <span>{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Button */}
//                 <button className="w-full py-3 px-4 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-lg font-semibold text-sm transition-all duration-300 border border-slate-200 hover:border-blue-300 group-hover:shadow-md flex items-center justify-center gap-2">
//                   Get Service
//                   <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Hover Overlay */}
//               <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

//               {/* Corner Accents */}
//               <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500/20 rounded-tl-2xl"></div>
//               <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500/20 rounded-tr-2xl"></div>
//               <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500/20 rounded-bl-2xl"></div>
//               <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500/20 rounded-br-2xl"></div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="bg-slate-50 rounded-2xl p-8 mb-16 border border-slate-200">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             <div className="space-y-3">
//               <div className="text-3xl font-bold text-slate-900">{services.length}+</div>
//               <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Services</div>
//               <div className="w-8 h-1 bg-blue-600 rounded-full mx-auto"></div>
//             </div>
//             <div className="space-y-3">
//               <div className="text-3xl font-bold text-slate-900">500+</div>
//               <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Happy Clients</div>
//               <div className="w-8 h-1 bg-indigo-600 rounded-full mx-auto"></div>
//             </div>
//             <div className="space-y-3">
//               <div className="text-3xl font-bold text-slate-900">99%</div>
//               <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Success Rate</div>
//               <div className="w-8 h-1 bg-blue-600 rounded-full mx-auto"></div>
//             </div>
//             <div className="space-y-3">
//               <div className="text-3xl font-bold text-slate-900">24/7</div>
//               <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Support</div>
//               <div className="w-8 h-1 bg-indigo-600 rounded-full mx-auto"></div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute inset-0" style={{
//                 backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
//                 backgroundSize: '50px 50px'
//               }}></div>
//             </div>

//             <div className="relative z-10 max-w-2xl mx-auto">
//               <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
//               <p className="text-blue-100 text-lg mb-8 leading-relaxed">
//                 Experience professional service and exceptional results.
//                 Let us handle your documentation needs with precision and care.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link
//                   to="/contact"
//                   className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 transform inline-flex items-center gap-2"
//                 >
//                   Contact Us
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                   </svg>
//                 </Link>

//                 <Link
//                   to="/services"
//                   className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm inline-flex items-center gap-2"
//                 >
//                   View All Services
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 0.4; transform: scale(1.05); }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 6s ease-in-out infinite;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const services = [
  {
    title: "Bulk Xerox & Print",
    sub: "ஜெராக்ஸ் & பிரிண்ட்",
    desc: "High-quality B&W, Color printing with multiple copy options",
    icon: "print",
    category: "Documentation",
    features: ["High Speed", "Quality Paper", "Binding"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Driving License",
    sub: "உரிமம் & அனுமதி",
    desc: "Complete assistance for new license and renewal processes",
    icon: "car",
    category: "Government",
    features: ["New DL", "Renewal", "Duplicate"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Visa & Passport",
    sub: "விசா & பாஸ்போர்ட்",
    desc: "Expert guidance for international travel documents",
    icon: "plane",
    category: "International",
    features: ["Fresh Passport", "Visa Processing", "Documentation"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Health Cards",
    sub: "சுகாதார அட்டைகள்",
    desc: "Insurance and government health scheme registrations",
    icon: "heart",
    category: "Healthcare",
    features: ["Health Insurance", "Govt Schemes", "Renewal"],
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Education Certs",
    sub: "கல்வி சான்றிதழ்",
    desc: "Academic document processing and certification services",
    icon: "school",
    category: "Education",
    features: ["Marksheets", "Scholarships", "Verification"],
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Business Registration",
    sub: "வணிக பதிவு",
    desc: "Complete business registration and compliance services",
    icon: "id",
    category: "Business",
    features: ["GST", "MSME", "FSSAI"],
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Online Applications",
    sub: "ஆன்லைன் விண்ணப்பங்கள்",
    desc: "Professional assistance for online form submissions",
    icon: "doc",
    category: "Digital",
    features: ["TNPSC", "College", "Government"],
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Certificates",
    sub: "சான்றிதழ்கள்",
    desc: "Official certificate issuance and attestation services",
    icon: "card",
    category: "Legal",
    features: ["Birth", "Income", "Community"],
    color: "from-lime-500 to-green-500",
  },
];

function Icon({ name, className = "w-6 h-6" }) {
  const icons = {
    print: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
        />
      </svg>
    ),
    id: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 10-4 0v1m4 0a2 2 0 004 0m-4 0a2 2 0 10-4 0m4 0v1m-4 0a2 2 0 00-4 0m4 0v3m0 0h4m-4 0a2 2 0 004 0"
        />
      </svg>
    ),
    car: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    plane: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
    heart: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    school: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
    doc: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    card: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
  };

  return icons[name] || null;
}

// Floating Particles Background
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-300/20 rounded-full animate-float-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200/10 to-indigo-200/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-blue-200/20 rounded-lg rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-purple-200/20 rounded-full animate-bounce-slow"></div>
    </div>
  );
}

export default function OurServices() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [setHoveredCard] = useState(null);

  const categories = [
    "All",
    "Documentation",
    "Government",
    "International",
    "Healthcare",
    "Education",
    "Business",
    "Digital",
    "Legal",
  ];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const gotoShops = (service) => {
    navigate("/shops", { state: { service } });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 pt-24 overflow-hidden">
      {/* Enhanced Background */}
      {/* <FloatingParticles /> */}

      {/* Additional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-orb"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-orb animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-orb animation-delay-4000"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(90deg, transparent 79px, #ababab 79px, #ababab 81px, transparent 81px),
              linear-gradient(#eee .1em, transparent .1em)
            `,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Premium Services
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Professional
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mt-2 animate-gradient-x">
              Services
            </span>
          </h1>

          <p className="text-xl text-slate-700 mb-4 font-light">
            தொழில்முறை சேவைகள்
          </p>

          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full rotate-45 animate-spin-slow"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
          </div>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Experience premium services with cutting-edge solutions tailored to
            your unique needs
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-500 border backdrop-blur-sm relative overflow-hidden group ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-2xl shadow-blue-500/25 transform scale-105"
                  : "bg-white/80 text-slate-700 border-slate-300/50 hover:border-blue-400 hover:text-blue-600 hover:shadow-xl"
              }`}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Services Grid with Unique Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {filteredServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => gotoShops(service)}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-105`}
              ></div>

              {/* Main Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl border border-slate-200/60 group-hover:border-transparent transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20 overflow-hidden">
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Header with Icon and Category */}
                <div className="relative p-6 border-b border-slate-100/60 group-hover:border-slate-200/30 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg transform group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}
                    >
                      <Icon
                        name={service.icon}
                        className="w-5 h-5 relative z-10"
                      />
                      {/* < div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500"></div> */}
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100/80 text-slate-600 backdrop-blur-sm group-hover:bg-white/90 transition-colors duration-300">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg mb-2 leading-tight group-hover:text-slate-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {service.sub}
                  </p>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
                    {service.desc}
                  </p>

                  {/* Enhanced Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-slate-500 group-hover:text-slate-600 transform group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full flex-shrink-0 transform group-hover:scale-125 transition-transform duration-300`}
                        ></div>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <button className="w-full py-3 px-4 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-blue-50 hover:to-purple-50 text-slate-700 hover:text-blue-600 rounded-lg font-semibold text-sm transition-all duration-500 border border-slate-200/60 hover:border-transparent group-hover:shadow-lg flex items-center justify-center gap-2 backdrop-blur-sm transform group-hover:scale-105 group-hover:-translate-y-1">
                    <span>Get Service</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500/20 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-indigo-500/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-200/60 hover:shadow-xl transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: `${services.length}+`,
                label: "Services",
                color: "from-blue-500 to-cyan-500",
              },
              {
                number: "500+",
                label: "Happy Clients",
                color: "from-green-500 to-emerald-500",
              },
              {
                number: "99%",
                label: "Success Rate",
                color: "from-purple-500 to-violet-500",
              },
              {
                number: "24/7",
                label: "Support",
                color: "from-orange-500 to-amber-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider group-hover:text-slate-700 transition-colors">
                  {stat.label}
                </div>
                <div
                  className={`w-8 h-1 bg-gradient-to-r ${stat.color} rounded-full mx-auto mt-3 transform group-hover:scale-110 transition-transform duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Enhanced CTA Section */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90  p-12 text-white relative overflow-hidden backdrop-blur-sm border border-white/20 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
              Experience the difference with our premium services. Let's create
              something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 transform inline-flex items-center gap-2 backdrop-blur-sm group/btn"
              >
                <span className="group-hover/btn:scale-110 transition-transform duration-300">
                  Contact Us
                </span>
                <svg
                  className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
