// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// // Dummy 20 Shops Data
// const shops = [
//   {
//     name: "Smart Xerox Center",
//     address: "Anna Nagar, Chennai",
//     services: "Xerox, Printing, Scanning",
//     rating: 4.5,
//     distance: "0.8 km",
//     open: true,
//     image: "🖨",
//   },
//   {
//     name: "Speed Print & Xerox",
//     address: "T Nagar, Chennai",
//     services: "Color Print, Lamination",
//     rating: 4.2,
//     distance: "1.2 km",
//     open: true,
//     image: "📄",
//   },
//   {
//     name: "Copy World",
//     address: "Adyar, Chennai",
//     services: "Xerox, Binding, Printout",
//     rating: 4.7,
//     distance: "0.5 km",
//     open: false,
//     image: "📑",
//   },
//   {
//     name: "Express Xerox Point",
//     address: "Tambaram, Chennai",
//     services: "Online Applications, Printouts",
//     rating: 4.0,
//     distance: "2.1 km",
//     open: true,
//     image: "⚡",
//   },
//   {
//     name: "Quick Print Hub",
//     address: "Velachery, Chennai",
//     services: "Xerox, Color Print, Scan",
//     rating: 4.6,
//     distance: "1.5 km",
//     open: true,
//     image: "🏪",
//   },
//   {
//     name: "Bright Xerox Shop",
//     address: "Porur, Chennai",
//     services: "Xerox, Photo Copy, Printing",
//     rating: 4.1,
//     distance: "3.2 km",
//     open: true,
//     image: "✨",
//   },
//   {
//     name: "Green Print & Copy",
//     address: "Guindy, Chennai",
//     services: "Xerox, Online Services",
//     rating: 4.4,
//     distance: "0.9 km",
//     open: false,
//     image: "🌿",
//   },
//   {
//     name: "Digital Doc Center",
//     address: "Mylapore, Chennai",
//     services: "Scanning, Lamination, Printing",
//     rating: 4.8,
//     distance: "1.8 km",
//     open: true,
//     image: "💻",
//   },
//   {
//     name: "Speedy Copy",
//     address: "Anna Nagar, Chennai",
//     services: "Xerox, Printing",
//     rating: 4.3,
//     distance: "0.9 km",
//     open: true,
//     image: "📠",
//   },
//   {
//     name: "PrintPro",
//     address: "T Nagar, Chennai",
//     services: "Lamination, Binding",
//     rating: 4.2,
//     distance: "1.1 km",
//     open: true,
//     image: "📝",
//   },
//   {
//     name: "Xpress Docs",
//     address: "Adyar, Chennai",
//     services: "Color Print, Scan",
//     rating: 4.5,
//     distance: "0.7 km",
//     open: false,
//     image: "📂",
//   },
//   {
//     name: "Copy & Go",
//     address: "Tambaram, Chennai",
//     services: "Printing, Xerox",
//     rating: 4.0,
//     distance: "2.0 km",
//     open: true,
//     image: "✂",
//   },
//   {
//     name: "PrintXpress",
//     address: "Velachery, Chennai",
//     services: "Scanning, Xerox",
//     rating: 4.6,
//     distance: "1.6 km",
//     open: true,
//     image: "🖨",
//   },
//   {
//     name: "Xerox Point",
//     address: "Porur, Chennai",
//     services: "Binding, Copy",
//     rating: 4.1,
//     distance: "3.3 km",
//     open: true,
//     image: "📑",
//   },

//   {
//     name: "Copy Center",
//     address: "Tambaram, Chennai",
//     services: "Xerox, Laminating",
//     rating: 4.0,
//     distance: "2.2 km",
//     open: true,
//     image: "✂",
//   },
// ];

// export default function NearbyShops() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [filterPlace, setFilterPlace] = useState("All");
//     setFilterPlace
//   const slidesToShow = 5;

//   // Filter shops by place
//   const filteredShops =
//     filterPlace === "All"
//       ? shops
//       : shops.filter((shop) =>
//           shop.address.toLowerCase().includes(filterPlace.toLowerCase())
//         );

//   const totalSlides = Math.ceil(filteredShops.length / slidesToShow);

//   // Auto play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, totalSlides]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section className="bg-blue-50 py-12 relative overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-900/80 to-indigo-900/90"></div>
//       </div>
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
//         <div className="absolute top-20 right-20 w-16 h-16 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
//         <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4 border border-blue-100">
//             <span className="text-2xl">🖨</span>
//           </div>
//           <h2 className="text-3xl font-bold text-white mb-2">
//             Nearby Xerox Shops
//           </h2>
//           <p className="text-sm text-white">Find printing services near you</p>
//         </div>

//         {/* Filter */}
//         {/* <div className="mb-6 text-center">
//           <div className="inline-flex items-center bg-white rounded-lg shadow-sm border border-gray-200 px-3 py-2">
//             <span className="text-xs text-gray-500 mr-2">📍</span>
//             <select
//               className="border-0 bg-transparent text-sm focus:outline-none focus:ring-0 cursor-pointer"
//               value={filterPlace}
//               onChange={(e) => {
//                 setFilterPlace(e.target.value);
//                 setCurrentSlide(0);
//               }}
//             >
//               <option>All</option>
//               <option>Anna Nagar</option>
//               <option>T Nagar</option>
//               <option>Adyar</option>
//               <option>Tambaram</option>
//               <option>Velachery</option>
//               <option>Porur</option>
//               <option>Guindy</option>
//               <option>Mylapore</option>
//             </select>
//           </div>
//         </div> */}

//         {/* Carousel Container */}
//         <div className="relative mb-6 group">
//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             onMouseEnter={() => setIsAutoPlaying(false)}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-sm text-gray-600 hover:text-blue-600 transition-all duration-300 z-20 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-x-5 hover:border-blue-200 backdrop-blur-sm"
//           >
//             ‹
//           </button>

//           <button
//             onClick={nextSlide}
//             onMouseEnter={() => setIsAutoPlaying(false)}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-sm text-gray-600 hover:text-blue-600 transition-all duration-300 z-20 shadow-lg hover:shadow-xl hover:scale-110 hover:translate-x-5 hover:border-blue-200 backdrop-blur-sm"
//           >
//             ›
//           </button>

//           {/* Carousel Track */}
//           <div className="relative py-5 overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-out"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//                 <div key={slideIndex} className="w-full flex-shrink-0">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-2">
//                     {filteredShops
//                       .slice(
//                         slideIndex * slidesToShow,
//                         slideIndex * slidesToShow + slidesToShow
//                       )
//                       .map((shop, idx) => (
//                         <React.Fragment key={idx}>
//                           <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 overflow-hidden group/card hover:scale-105 hover:-translate-y-2">
//                             <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-white to-blue-50">
//                               <div className="flex items-center justify-between mb-3">
//                                 <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover/card:bg-blue-200 transition-colors duration-300 group-hover/card:scale-110">
//                                   <span className="text-base">
//                                     {shop.image}
//                                   </span>
//                                 </div>
//                                 <span
//                                   className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-300 ${
//                                     shop.open
//                                       ? "bg-green-100 text-green-700 group-hover/card:bg-green-200 group-hover/card:shadow-sm"
//                                       : "bg-red-100 text-red-700 group-hover/card:bg-red-200 group-hover/card:shadow-sm"
//                                   }`}
//                                 >
//                                   {shop.open ? "🟢 Open" : "🔴 Closed"}
//                                 </span>
//                               </div>
//                               <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight mb-1 group-hover/card:text-blue-700 transition-colors duration-300">
//                                 {shop.name}
//                               </h3>
//                               <p className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded-full inline-block group-hover/card:bg-blue-100 transition-colors duration-300">
//                                 {shop.distance}
//                               </p>
//                             </div>
//                             <div className="p-4">
//                               <div className="flex items-start mb-3 group/location">
//                                 <span className="text-xs text-gray-500 mr-2 mt-0.5 group-hover/location:text-red-500 transition-colors duration-300">
//                                   📍
//                                 </span>
//                                 <p className="text-xs text-gray-600 line-clamp-2 leading-tight group-hover/location:text-gray-700 transition-colors duration-300">
//                                   {shop.address}
//                                 </p>
//                               </div>
//                               <div className="mb-4 group/services">
//                                 <p className="text-xs text-gray-500 mb-1 group-hover/services:text-blue-600 transition-colors duration-300">
//                                   Services:
//                                 </p>
//                                 <p className="text-xs text-gray-700 line-clamp-2 leading-tight group-hover/services:text-gray-800 transition-colors duration-300">
//                                   {shop.services}
//                                 </p>
//                               </div>
//                               <div className="flex items-center justify-between">
//                                 <div className="flex items-center group/rating">
//                                   <span className="text-yellow-500 text-xs mr-1 group-hover/rating:scale-110 transition-transform duration-300">
//                                     ⭐
//                                   </span>
//                                   <span className="text-xs font-medium text-gray-800 group-hover/rating:text-yellow-700 transition-colors duration-300">
//                                     {shop.rating}
//                                   </span>
//                                 </div>
//                                 <Link to={"/service"} className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95 group/button relative overflow-hidden">
//                                   <span className="relative z-10 group-hover/button:text-white">
//                                     Book Now
//                                   </span>
//                                   <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover/button:scale-x-100 transition-transform duration-300 origin-left"></div>
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </React.Fragment>
//                       ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Carousel Indicators */}
//         <div className="flex justify-center space-x-2 mb-6">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               onMouseEnter={() => setIsAutoPlaying(false)}
//               className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
//                 index === currentSlide
//                   ? "bg-blue-600 w-8 shadow-lg"
//                   : "bg-gray-300 hover:bg-gray-400 hover:shadow-sm"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Auto-play Toggle */}
//         <div className="text-center">
//           <button
//             onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//             className="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-gray-800 transition-colors duration-200 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm"
//           >
//             <div
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"
//               }`}
//             ></div>
//             Auto-play: {isAutoPlaying ? "ON" : "OFF"}
//           </button>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style>
//         {`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(90deg); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-10px) rotate(45deg); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
//         .animate-float-slow {
//           animation: float-slow 10s ease-in-out infinite;
//         }
//         `}
//       </style>
//     </section>
//   );
// }


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // Dummy Shops Data
// const shops = [
//   {
//     name: "Smart Xerox Center",
//     address: "Anna Nagar, Chennai",
//     services: "Xerox, Printing, Scanning",
//     rating: 4.5,
//     distance: "0.8 km",
//     open: true,
//     image: "🖨",
//     waitTime: "5 min",
//     premium: true,
//     trend: "popular"
//   },
//   {
//     name: "Speed Print & Xerox",
//     address: "T Nagar, Chennai",
//     services: "Color Print, Lamination",
//     rating: 4.2,
//     distance: "1.2 km",
//     open: true,
//     image: "📄",
//     waitTime: "8 min",
//     premium: false,
//     trend: "trending"
//   },
//   {
//     name: "Copy World",
//     address: "Adyar, Chennai",
//     services: "Xerox, Binding, Printout",
//     rating: 4.7,
//     distance: "0.5 km",
//     open: false,
//     image: "📑",
//     waitTime: "3 min",
//     premium: true,
//     trend: "popular"
//   },
//   {
//     name: "Express Xerox Point",
//     address: "Tambaram, Chennai",
//     services: "Online Applications, Printouts",
//     rating: 4.0,
//     distance: "2.1 km",
//     open: true,
//     image: "⚡",
//     waitTime: "12 min",
//     premium: false,
//     trend: "new"
//   },
//   {
//     name: "Quick Print Hub",
//     address: "Velachery, Chennai",
//     services: "Xerox, Color Print, Scan",
//     rating: 4.6,
//     distance: "1.5 km",
//     open: true,
//     image: "🏪",
//     waitTime: "6 min",
//     premium: true,
//     trend: "trending"
//   },
//   {
//     name: "Digital Doc Center",
//     address: "Mylapore, Chennai",
//     services: "Scanning, Lamination, Printing",
//     rating: 4.8,
//     distance: "1.8 km",
//     open: true,
//     image: "💻",
//     waitTime: "4 min",
//     premium: true,
//     trend: "popular"
//   },
//   {
//     name: "Eco Print Solutions",
//     address: "Besant Nagar, Chennai",
//     services: "Eco-friendly Printing, Digital Copy",
//     rating: 4.9,
//     distance: "2.3 km",
//     open: true,
//     image: "🌿",
//     waitTime: "7 min",
//     premium: true,
//     trend: "new"
//   },
//   {
//     name: "24/7 Print Station",
//     address: "Egmore, Chennai",
//     services: "24/7 Service, Bulk Orders",
//     rating: 4.3,
//     distance: "1.1 km",
//     open: true,
//     image: "🌙",
//     waitTime: "10 min",
//     premium: false,
//     trend: "trending"
//   }
// ];

// export default function NearbyShops() {
//   const [filterPlace, setFilterPlace] = useState("All");
//   const [sortBy, setSortBy] = useState("distance");
//   const [selectedShop, setSelectedShop] = useState(null);

//   // Filter and sort shops
//   const filteredShops = shops
//     .filter(shop => filterPlace === "All" || shop.address.includes(filterPlace))
//     .sort((a, b) => {
//       switch (sortBy) {
//         case "rating": return b.rating - a.rating;
//         case "distance": return parseFloat(a.distance) - parseFloat(b.distance);
//         case "waitTime": return parseFloat(a.waitTime) - parseFloat(b.waitTime);
//         default: return 0;
//       }
//     });

//   const getTrendColor = (trend) => {
//     switch (trend) {
//       case "popular": return "from-pink-500 to-rose-500";
//       case "trending": return "from-purple-500 to-indigo-500";
//       case "new": return "from-green-500 to-emerald-500";
//       default: return "from-gray-500 to-slate-500";
//     }
//   };

//   const getTrendText = (trend) => {
//     switch (trend) {
//       case "popular": return "🔥 Popular";
//       case "trending": return "📈 Trending";
//       case "new": return "🆕 New";
//       default: return "";
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-12 relative overflow-hidden">
      
//       {/* Unique Background Patterns */}
//       <div className="absolute inset-0">
//         {/* Abstract Blob Shapes */}
//         <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-amber-200/40 to-orange-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-rose-200/40 to-pink-200/30 rounded-full blur-3xl animate-pulse-slower"></div>
//         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-200/30 to-amber-200/20 rounded-full blur-2xl animate-float"></div>
        
//         {/* Geometric Grid Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `linear-gradient(45deg, #f59e0b 1px, transparent 1px),
//                              linear-gradient(-45deg, #f59e0b 1px, transparent 1px)`,
//             backgroundSize: '60px 60px',
//           }}></div>
//         </div>

//         {/* Floating Icons */}
//         {["🖨", "📄", "📑", "📊", "🖼", "📋"].map((icon, index) => (
//           <div
//             key={index}
//             className="absolute text-2xl opacity-20 animate-float-random"
//             style={{
//               left: `${10 + (index * 15)}%`,
//               top: `${20 + (index % 3) * 25}%`,
//               animationDelay: `${index * 0.5}s`,
//               animationDuration: `${8 + index * 2}s`
//             }}
//           >
//             {icon}
//           </div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* Unique Header */}
//         <div className="text-center mb-16">
//           {/* Animated Logo */}
//           <div className="relative inline-block mb-8">
//             <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
//             <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-amber-100">
//               <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-4 shadow-lg">
//                 🖨️
//               </div>
//               <h1 className="text-6xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent mb-4 tracking-tight">
//                 PrintWave
//               </h1>
//               <p className="text-amber-700 text-xl font-light max-w-2xl mx-auto leading-relaxed">
//                 Where quality meets convenience in every print
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Interactive Control Panel */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-soft border border-amber-100">
//           <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//             <div className="flex flex-wrap gap-4">
//               {/* Location Filter */}
//               <div className="bg-white rounded-2xl px-6 py-3 shadow-sm border border-amber-200">
//                 <select 
//                   className="bg-transparent border-0 text-amber-800 text-sm focus:outline-none focus:ring-0 cursor-pointer font-medium"
//                   value={filterPlace}
//                   onChange={(e) => setFilterPlace(e.target.value)}
//                 >
//                   <option className="text-amber-800">📍 All Locations</option>
//                   <option className="text-amber-800">Anna Nagar</option>
//                   <option className="text-amber-800">T Nagar</option>
//                   <option className="text-amber-800">Adyar</option>
//                   <option className="text-amber-800">Velachery</option>
//                 </select>
//               </div>
              
//               {/* Sort Filter */}
//               <div className="bg-white rounded-2xl px-6 py-3 shadow-sm border border-amber-200">
//                 <select 
//                   className="bg-transparent border-0 text-amber-800 text-sm focus:outline-none focus:ring-0 cursor-pointer font-medium"
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                 >
//                   <option value="distance">📏 Nearest First</option>
//                   <option value="rating">⭐ Highest Rated</option>
//                   <option value="waitTime">⚡ Fastest Service</option>
//                 </select>
//               </div>

//               {/* Stats */}
//               <div className="flex gap-3">
//                 <div className="bg-amber-500/10 rounded-2xl px-4 py-3 border border-amber-200">
//                   <span className="text-amber-700 font-semibold">{filteredShops.length}</span>
//                   <span className="text-amber-600 ml-2">Shops</span>
//                 </div>
//                 <div className="bg-green-500/10 rounded-2xl px-4 py-3 border border-green-200">
//                   <span className="text-green-700 font-semibold">
//                     {filteredShops.filter(s => s.open).length}
//                   </span>
//                   <span className="text-green-600 ml-2">Open Now</span>
//                 </div>
//               </div>
//             </div>

//             {/* Search Box */}
//             <div className="bg-white rounded-2xl px-6 py-3 shadow-sm border border-amber-200 min-w-80">
//               <div className="flex items-center gap-3">
//                 <span className="text-amber-600">🔍</span>
//                 <input 
//                   type="text" 
//                   placeholder="Search shops, services..." 
//                   className="bg-transparent border-0 text-amber-800 placeholder-amber-400 focus:outline-none focus:ring-0 w-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Unique Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mb-16">
//           {filteredShops.map((shop, index) => (
//             <div
//               key={index}
//               className="group relative"
//               onMouseEnter={() => setSelectedShop(shop)}
//               onMouseLeave={() => setSelectedShop(null)}
//             >
//               {/* Main Card */}
//               <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-amber-100 shadow-soft hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-amber-200 overflow-hidden">
                
//                 {/* Trend Badge */}
//                 <div className={`absolute top-4 left-4 bg-gradient-to-r ${getTrendColor(shop.trend)} text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg z-10`}>
//                   {getTrendText(shop.trend)}
//                 </div>

//                 {/* Premium Crown */}
//                 {shop.premium && (
//                   <div className="absolute top-4 right-4 text-2xl z-10">👑</div>
//                 )}

//                 {/* Background Pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                   <div className="absolute inset-0" style={{
//                     backgroundImage: `radial-gradient(circle at 20% 80%, #f59e0b 0px, transparent 50%)`,
//                   }}></div>
//                 </div>

//                 {/* Shop Header */}
//                 <div className="relative z-10 mb-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
//                       {shop.image}
//                     </div>
//                     <div className="text-right">
//                       <span className={`text-xs px-3 py-1.5 rounded-full font-bold ${
//                         shop.open 
//                           ? 'bg-green-100 text-green-700 border border-green-200' 
//                           : 'bg-red-100 text-red-700 border border-red-200'
//                       }`}>
//                         {shop.open ? '🟢 OPEN' : '🔴 CLOSED'}
//                       </span>
//                       <p className="text-xs text-amber-600 mt-1 font-medium">{shop.waitTime} wait</p>
//                     </div>
//                   </div>

//                   <h3 className="text-xl font-bold text-amber-900 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors duration-300">
//                     {shop.name}
//                   </h3>
                  
//                   <div className="flex items-center justify-between">
//                     <span className="text-amber-600 font-semibold bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
//                       📍 {shop.distance}
//                     </span>
//                     <div className="flex items-center text-amber-500 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
//                       <span className="font-bold mr-1">{shop.rating}</span>
//                       <span className="text-sm">⭐</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Shop Details */}
//                 <div className="relative z-10 space-y-4 mb-6">
//                   <div className="flex items-start">
//                     <span className="text-amber-600 text-sm mr-2 mt-0.5">🏢</span>
//                     <p className="text-amber-700 text-sm leading-relaxed">
//                       {shop.address}
//                     </p>
//                   </div>
                  
//                   <div>
//                     <p className="text-amber-600 text-xs font-bold mb-2 uppercase tracking-wide">Services Available</p>
//                     <p className="text-amber-800 text-sm leading-relaxed font-medium">
//                       {shop.services}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Action Button */}
//                 <div className="relative z-10">
//                   <Link
//                     to="/service"
//                     className="block w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-center py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 group/button relative overflow-hidden"
//                   >
//                     <span className="relative z-10 group-hover/button:tracking-wide transition-all duration-300">
//                       🚀 Instant Book
//                     </span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 transform scale-x-0 group-hover/button:scale-x-100 transition-transform duration-300 origin-left rounded-2xl"></div>
//                   </Link>
//                 </div>

//                 {/* Hover Effect Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
//               </div>

//               {/* Floating Elements on Hover */}
//               {selectedShop === shop && (
//                 <>
//                   <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full animate-ping"></div>
//                   <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Features Banner */}
//         <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl p-8 text-white text-center mb-12 shadow-xl">
//           <h2 className="text-3xl font-bold mb-4">Why Choose PrintWave?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
//               <div className="text-3xl mb-3">⚡</div>
//               <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
//               <p className="text-amber-100">Instant booking with real-time availability</p>
//             </div>
//             <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
//               <div className="text-3xl mb-3">🎯</div>
//               <h3 className="font-bold text-lg mb-2">Precision Quality</h3>
//               <p className="text-amber-100">Crystal clear prints every single time</p>
//             </div>
//             <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
//               <div className="text-3xl mb-3">💰</div>
//               <h3 className="font-bold text-lg mb-2">Best Prices</h3>
//               <p className="text-amber-100">Competitive pricing with no hidden costs</p>
//             </div>
//           </div>
//         </div>

//         {/* Footer CTA */}
//         <div className="text-center">
//           <p className="text-amber-700 text-lg mb-6">Can't find what you're looking for?</p>
//           <Link
//             to="/all-shops"
//             className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-amber-700 px-8 py-4 rounded-2xl font-bold border-2 border-amber-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
//           >
//             <span>Explore All Shops</span>
//             <span className="text-xl">→</span>
//           </Link>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style>
//         {`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(10deg); }
//         }
//         @keyframes float-random {
//           0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
//           33% { transform: translateY(-15px) translateX(10px) rotate(120deg); }
//           66% { transform: translateY(10px) translateX(-5px) rotate(240deg); }
//         }
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.4; transform: scale(1); }
//           50% { opacity: 0.6; transform: scale(1.1); }
//         }
//         @keyframes pulse-slower {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(1.05); }
//         }
//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }
//         .animate-float-random {
//           animation: float-random 15s ease-in-out infinite;
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 6s ease-in-out infinite;
//         }
//         .animate-pulse-slower {
//           animation: pulse-slower 10s ease-in-out infinite;
//         }
//         .shadow-soft {
//           box-shadow: 0 8px 40px -4px rgba(245, 158, 11, 0.15), 0 4px 16px -2px rgba(245, 158, 11, 0.1);
//         }
//         `}
//       </style>
//     </section>
//   );
// }


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // Professional Shops Data
// const shops = [
//   {
//     name: "Professional Print Solutions",
//     address: "Business District, Anna Nagar, Chennai",
//     services: "High-Quality Printing, Scanning, Document Services",
//     rating: 4.8,
//     distance: "0.8 km",
//     open: true,
//     image: "🏢",
//     waitTime: "5 min",
//     premium: true,
//     efficiency: 98,
//     established: "2018",
//     clients: "500+ Corporate"
//   },
//   {
//     name: "Corporate Document Center",
//     address: "Financial District, T Nagar, Chennai",
//     services: "Color Printing, Lamination, Binding Services",
//     rating: 4.6,
//     distance: "1.2 km",
//     open: true,
//     image: "📊",
//     waitTime: "8 min",
//     premium: true,
//     efficiency: 95,
//     established: "2015",
//     clients: "300+ Businesses"
//   },
//   {
//     name: "Executive Print Hub",
//     address: "Corporate Park, Adyar, Chennai",
//     services: "Executive Printing, Document Binding, Digital Copies",
//     rating: 4.9,
//     distance: "0.5 km",
//     open: true,
//     image: "💼",
//     waitTime: "3 min",
//     premium: true,
//     efficiency: 99,
//     established: "2020",
//     clients: "200+ Enterprises"
//   },
//   {
//     name: "Business Print Station",
//     address: "Commercial Complex, Tambaram, Chennai",
//     services: "Bulk Printing, Online Applications, Professional Copies",
//     rating: 4.4,
//     distance: "2.1 km",
//     open: true,
//     image: "🏪",
//     waitTime: "12 min",
//     premium: false,
//     efficiency: 92,
//     established: "2019",
//     clients: "150+ Companies"
//   },
//   {
//     name: "Digital Print Solutions",
//     address: "Tech Park, Velachery, Chennai",
//     services: "Digital Printing, High-Res Scanning, Color Services",
//     rating: 4.7,
//     distance: "1.5 km",
//     open: true,
//     image: "💻",
//     waitTime: "6 min",
//     premium: true,
//     efficiency: 96,
//     established: "2017",
//     clients: "400+ Corporate"
//   },
//   {
//     name: "Professional Copy Center",
//     address: "Business Center, Mylapore, Chennai",
//     services: "Professional Copies, Document Services, Printing",
//     rating: 4.5,
//     distance: "1.8 km",
//     open: true,
//     image: "📑",
//     waitTime: "4 min",
//     premium: true,
//     efficiency: 94,
//     established: "2016",
//     clients: "250+ Businesses"
//   }
// ];

// export default function ProfessionalPrintServices() {
//   const [filterPlace, setFilterPlace] = useState("All");
//   const [sortBy, setSortBy] = useState("rating");
//   const [selectedService, setSelectedService] = useState("all");

//   const services = [
//     { id: "all", name: "All Services", icon: "📋" },
//     { id: "printing", name: "Professional Printing", icon: "🖨️" },
//     { id: "scanning", name: "High-Quality Scanning", icon: "📄" },
//     { id: "binding", name: "Document Binding", icon: "📚" },
//     { id: "lamination", name: "Lamination Services", icon: "🛡️" },
//     { id: "digital", name: "Digital Solutions", icon: "💾" }
//   ];

//   // Filter and sort shops
//   const filteredShops = shops
//     .filter(shop => filterPlace === "All" || shop.address.includes(filterPlace))
//     .sort((a, b) => {
//       switch (sortBy) {
//         case "rating": return b.rating - a.rating;
//         case "distance": return parseFloat(a.distance) - parseFloat(b.distance);
//         case "efficiency": return b.efficiency - a.efficiency;
//         default: return 0;
//       }
//     });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      

//       <div className="max-w-7xl mx-auto px-6 py-8">
//         {/* Page Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-200 mb-6">
//             <span className="text-3xl">📍</span>
//           </div>
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Professional Printing Partners
//           </h2>
//           <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
//             Connect with certified business printing centers offering enterprise-grade solutions 
//             for all your corporate document needs.
//           </p>
//         </div>

//         {/* Control Panel */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
//           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Filter Partners</h3>
//               <p className="text-gray-600 text-sm">Find the perfect printing solution for your business needs</p>
//             </div>
            
//             <div className="flex flex-wrap gap-4">
//               {/* Location Filter */}
//               <div className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
//                 <select 
//                   className="bg-transparent border-0 text-gray-700 text-sm focus:outline-none focus:ring-0 cursor-pointer font-medium"
//                   value={filterPlace}
//                   onChange={(e) => setFilterPlace(e.target.value)}
//                 >
//                   <option className="text-gray-700">📍 All Business Districts</option>
//                   <option className="text-gray-700">Anna Nagar</option>
//                   <option className="text-gray-700">T Nagar</option>
//                   <option className="text-gray-700">Adyar</option>
//                   <option className="text-gray-700">Velachery</option>
//                 </select>
//               </div>
              
//               {/* Sort Filter */}
//               <div className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
//                 <select 
//                   className="bg-transparent border-0 text-gray-700 text-sm focus:outline-none focus:ring-0 cursor-pointer font-medium"
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                 >
//                   <option value="rating">⭐ Highest Rated</option>
//                   <option value="distance">📏 Nearest Location</option>
//                   <option value="efficiency">⚡ Most Efficient</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Service Categories */}
//           <div>
//             <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">SERVICES</h4>
//             <div className="flex flex-wrap gap-3">
//               {services.map(service => (
//                 <button
//                   key={service.id}
//                   onClick={() => setSelectedService(service.id)}
//                   className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${
//                     selectedService === service.id
//                       ? 'bg-blue-50 border-blue-200 text-blue-700 shadow-sm'
//                       : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
//                   }`}
//                 >
//                   <span className="text-lg">{service.icon}</span>
//                   <span className="text-sm font-medium">{service.name}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Stats Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
//           {[
//             { label: "Verified Partners", value: filteredShops.length, icon: "✅" },
//             { label: "Average Rating", value: "4.7/5.0", icon: "⭐" },
//             { label: "Response Time", value: "< 10min", icon: "⚡" },
//             { label: "Client Satisfaction", value: "98%", icon: "💎" }
//           ].map((stat, index) => (
//             <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
//               <div className="text-2xl mb-2">{stat.icon}</div>
//               <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
//               <div className="text-gray-600 text-sm">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Professional Grid */}
//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
//           {filteredShops.map((shop, index) => (
//             <div key={index} className="group">
//               {/* Professional Card */}
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden">
//                 <div className="p-8">
//                   {/* Card Header */}
//                   <div className="flex items-start justify-between mb-6">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl shadow-sm">
//                         {shop.image}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900 mb-1">{shop.name}</h3>
//                         <div className="flex items-center space-x-4">
//                           <div className="flex items-center text-amber-500">
//                             <span className="font-semibold mr-1">{shop.rating}</span>
//                             <span className="text-sm">⭐</span>
//                           </div>
//                           <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
//                             🟢 OPEN
//                           </span>
//                           {shop.premium && (
//                             <span className="text-blue-600 text-sm font-medium bg-blue-50 px-2 py-1 rounded-full">
//                               💎 Premium Partner
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Business Details */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div className="space-y-4">
//                       <div className="flex items-start">
//                         <span className="text-gray-500 text-sm mr-3 mt-0.5">📍</span>
//                         <div>
//                           <p className="text-gray-600 text-sm font-medium mb-1">Business Location</p>
//                           <p className="text-gray-900 text-sm">{shop.address}</p>
//                         </div>
//                       </div>
                      
//                       <div className="flex items-start">
//                         <span className="text-gray-500 text-sm mr-3 mt-0.5">🏢</span>
//                         <div>
//                           <p className="text-gray-600 text-sm font-medium mb-1">Established</p>
//                           <p className="text-gray-900 text-sm">Since {shop.established}</p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-4">
//                       <div className="flex items-start">
//                         <span className="text-gray-500 text-sm mr-3 mt-0.5">👥</span>
//                         <div>
//                           <p className="text-gray-600 text-sm font-medium mb-1">Client Base</p>
//                           <p className="text-gray-900 text-sm">{shop.clients}</p>
//                         </div>
//                       </div>
                      
//                       <div className="flex items-start">
//                         <span className="text-gray-500 text-sm mr-3 mt-0.5">⚡</span>
//                         <div>
//                           <p className="text-gray-600 text-sm font-medium mb-1">Efficiency</p>
//                           <p className="text-gray-900 text-sm font-semibold">{shop.efficiency}% Success Rate</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Services */}
//                   <div className="mb-6">
//                     <p className="text-gray-600 text-sm font-medium mb-3">CORE SERVICES</p>
//                     <p className="text-gray-900 text-sm leading-relaxed">{shop.services}</p>
//                   </div>

//                   {/* Quick Stats */}
//                   <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 mb-6">
//                     <div className="text-center">
//                       <p className="text-gray-600 text-sm font-medium">Distance</p>
//                       <p className="text-gray-900 font-semibold">{shop.distance}</p>
//                     </div>
//                     <div className="text-center">
//                       <p className="text-gray-600 text-sm font-medium">Wait Time</p>
//                       <p className="text-gray-900 font-semibold">{shop.waitTime}</p>
//                     </div>
//                     <div className="text-center">
//                       <p className="text-gray-600 text-sm font-medium">Service Level</p>
//                       <p className="text-green-600 font-semibold">Enterprise</p>
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex items-center space-x-4">
//                     <Link
//                       to="/service"
//                       className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold transition-colors duration-200"
//                     >
//                       Schedule Service
//                     </Link>
//                     <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-colors duration-200">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";

// // 🏪 15 Dummy Shops Data
// const shops = [
//   { id: 1, name: "Digital Print Solutions", address: "Tech Park, Velachery", services: "Digital Printing, Scanning", rating: 4.7, reviews: 128, distance: "1.5 km", waitTime: "6 min", open: true, image: "🖨", established: "2017", clientBase: "400+", efficiency: "96%", serviceLevel: "Enterprise", premiumPartner: true },
//   { id: 2, name: "Corporate Document Center", address: "Financial District, T Nagar", services: "Color Print, Lamination", rating: 4.6, reviews: 95, distance: "1.2 km", waitTime: "8 min", open: true, image: "📄", established: "2015", clientBase: "300+", efficiency: "95%", serviceLevel: "Enterprise", premiumPartner: true },
//   { id: 3, name: "Smart Xerox Center", address: "Anna Nagar", services: "Xerox, Printing", rating: 4.5, reviews: 87, distance: "0.8 km", waitTime: "5 min", open: true, image: "🖨", established: "2018", clientBase: "250+", efficiency: "94%", serviceLevel: "Standard", premiumPartner: false },
//   { id: 4, name: "Speed Print & Xerox", address: "T Nagar", services: "Color Print, Lamination", rating: 4.2, reviews: 76, distance: "1.2 km", waitTime: "10 min", open: true, image: "📄", established: "2016", clientBase: "200+", efficiency: "92%", serviceLevel: "Standard", premiumPartner: false },
//   { id: 5, name: "Copy World", address: "Adyar", services: "Xerox, Binding", rating: 4.7, reviews: 112, distance: "0.5 km", waitTime: "7 min", open: false, image: "📑", established: "2019", clientBase: "180+", efficiency: "93%", serviceLevel: "Standard", premiumPartner: false },
//   { id: 6, name: "Express Xerox Point", address: "Tambaram", services: "Online Applications", rating: 4.0, reviews: 64, distance: "2.1 km", waitTime: "12 min", open: true, image: "⚡", established: "2020", clientBase: "150+", efficiency: "90%", serviceLevel: "Standard", premiumPartner: false },
//   { id: 7, name: "Quick Print Hub", address: "Velachery", services: "Xerox, Color Print", rating: 4.6, reviews: 89, distance: "1.5 km", waitTime: "9 min", open: true, image: "🏪", established: "2019", clientBase: "220+", efficiency: "94%", serviceLevel: "Standard", premiumPartner: false },
//   { id: 8, name: "Bright Xerox Shop", address: "Porur", services: "Xerox, Photo Copy", rating: 4.1, reviews: 71, distance: "3.2 km", waitTime: "15 min", open: true, image: "✨", established: "2017", clientBase: "190+", efficiency: "91%", serviceLevel: "Standard", premiumPartner: false },
//   { id: 9, name: "Green Print & Copy", address: "Guindy", services: "Xerox, Online", rating: 4.4, reviews: 83, distance: "0.9 km", waitTime: "8 min", open: false, image: "🌿", established: "2021", clientBase: "160+", efficiency: "92%", serviceLevel: "Standard", premiumPartner: false },
//   { id: 10, name: "Digital Doc Center", address: "Mylapore", services: "Scanning, Lamination", rating: 4.8, reviews: 134, distance: "1.8 km", waitTime: "11 min", open: true, image: "💻", established: "2015", clientBase: "280+", efficiency: "96%", serviceLevel: "Enterprise", premiumPartner: true },
// ]

// export default function Shops() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Premium Printing Shops
//           </h1>
//           <p className="text-gray-600">
//             Discover the best printing services near you
//           </p>
//         </div>

//         {/* Cards Grid - Smaller Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
//           {shops.map((shop) => (
//             <div
//               key={shop.id}
//               className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
//             >
//               {/* Card Header */}
//               <div className="p-3 border-b border-gray-100">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="font-semibold text-gray-900 text-sm leading-tight">{shop.name}</h3>
//                   <div className="flex flex-col items-end space-y-1">
//                     {shop.premiumPartner && (
//                       <span className="bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded">⭐</span>
//                     )}
//                     <div className={`px-1.5 py-0.5 rounded text-xs ${
//                       shop.open ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                     }`}>
//                       {shop.open ? "OPEN" : "CLOSED"}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-1 text-gray-600 text-xs">
//                   <span>📍</span>
//                   <span className="truncate">{shop.address.split(',')[0]}</span>
//                 </div>
//               </div>

//               {/* Business Details */}
//               <div className="p-3 border-b border-gray-100">
//                 <div className="grid grid-cols-2 gap-2 mb-2">
//                   <div>
//                     <div className="text-xs text-gray-500">Since</div>
//                     <div className="font-medium text-xs">{shop.established}</div>
//                   </div>
//                   <div>
//                     <div className="text-xs text-gray-500">Clients</div>
//                     <div className="font-medium text-xs">{shop.clientBase}</div>
//                   </div>
//                 </div>
//                 <div className="text-xs text-gray-700 truncate">{shop.services}</div>
//               </div>

//               {/* Footer */}
//               <div className="p-3">
//                 <div className="flex items-center justify-between">
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Distance</div>
//                     <div className="font-medium text-xs">{shop.distance}</div>
//                   </div>
                  
//                   <div className="text-center">
//                     <div className="text-xs text-gray-500">Rating</div>
//                     <div className="font-medium text-blue-600 text-xs">{shop.rating}⭐</div>
//                   </div>

//                   <Link
//                     to=""
//                     state={{ shop: shop }}
//                     className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
//                       shop.open
//                         ? "bg-blue-600 hover:bg-blue-700 text-white"
//                         : "bg-gray-400 text-gray-500 cursor-not-allowed"
//                     }`}
//                   >
//                     {shop.open ? "Open" : "Closed"}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Explore More Shops Button */}
//         <div className="text-center">
//           <Link
//             to="/shops"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
//           >
//             <span>Explore More Shops</span>
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

// 🏪 15 Dummy Shops Data
const shops = [
  { id: 1, name: "Digital Print Solutions", address: "Tech Park, Velachery", services: "Digital Printing, Scanning", rating: 4.7, reviews: 128, distance: "1.5 km", waitTime: "6 min", open: true, image: "🖨", established: "2017", clientBase: "400+", efficiency: "96%", serviceLevel: "Enterprise", premiumPartner: true },
  { id: 2, name: "Corporate Document Center", address: "Financial District, T Nagar", services: "Color Print, Lamination", rating: 4.6, reviews: 95, distance: "1.2 km", waitTime: "8 min", open: true, image: "📄", established: "2015", clientBase: "300+", efficiency: "95%", serviceLevel: "Enterprise", premiumPartner: true },
  { id: 3, name: "Smart Xerox Center", address: "Anna Nagar", services: "Xerox, Printing", rating: 4.5, reviews: 87, distance: "0.8 km", waitTime: "5 min", open: true, image: "🖨", established: "2018", clientBase: "250+", efficiency: "94%", serviceLevel: "Standard", premiumPartner: false },
  { id: 4, name: "Speed Print & Xerox", address: "T Nagar", services: "Color Print, Lamination", rating: 4.2, reviews: 76, distance: "1.2 km", waitTime: "10 min", open: true, image: "📄", established: "2016", clientBase: "200+", efficiency: "92%", serviceLevel: "Standard", premiumPartner: false },
  { id: 5, name: "Copy World", address: "Adyar", services: "Xerox, Binding", rating: 4.7, reviews: 112, distance: "0.5 km", waitTime: "7 min", open: false, image: "📑", established: "2019", clientBase: "180+", efficiency: "93%", serviceLevel: "Standard", premiumPartner: false },
  { id: 6, name: "Express Xerox Point", address: "Tambaram", services: "Online Applications", rating: 4.0, reviews: 64, distance: "2.1 km", waitTime: "12 min", open: true, image: "⚡", established: "2020", clientBase: "150+", efficiency: "90%", serviceLevel: "Standard", premiumPartner: false },
  { id: 7, name: "Quick Print Hub", address: "Velachery", services: "Xerox, Color Print", rating: 4.6, reviews: 89, distance: "1.5 km", waitTime: "9 min", open: true, image: "🏪", established: "2019", clientBase: "220+", efficiency: "94%", serviceLevel: "Standard", premiumPartner: false },
  { id: 8, name: "Bright Xerox Shop", address: "Porur", services: "Xerox, Photo Copy", rating: 4.1, reviews: 71, distance: "3.2 km", waitTime: "15 min", open: true, image: "✨", established: "2017", clientBase: "190+", efficiency: "91%", serviceLevel: "Standard", premiumPartner: false },
  { id: 9, name: "Green Print & Copy", address: "Guindy", services: "Xerox, Online", rating: 4.4, reviews: 83, distance: "0.9 km", waitTime: "8 min", open: false, image: "🌿", established: "2021", clientBase: "160+", efficiency: "92%", serviceLevel: "Standard", premiumPartner: false },
  { id: 10, name: "Digital Doc Center", address: "Mylapore", services: "Scanning, Lamination", rating: 4.8, reviews: 134, distance: "1.8 km", waitTime: "11 min", open: true, image: "💻", established: "2015", clientBase: "280+", efficiency: "96%", serviceLevel: "Enterprise", premiumPartner: true },
]

export default function Shops() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100 py-8 px-4 relative overflow-hidden">
      
      {/* Unique Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circles - Darker */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200 rounded-full opacity-40 blur-xl"></div>
        
        {/* Medium Circles */}
        <div className="absolute top-1/3 right-10 w-60 h-60 bg-slate-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-1/4 left-10 w-52 h-52 bg-blue-300 rounded-full opacity-25 blur-xl"></div>
        
        {/* Small Floating Shapes */}
        <div className="absolute top-1/4 left-10 w-12 h-12 bg-blue-300 rounded-lg opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-20 w-8 h-8 bg-indigo-300 rounded-full opacity-25 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-slate-300 rounded-lg opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-blue-400 rounded-full opacity-30 animate-float" style={{animationDelay: '1.5s'}}></div>
        
        {/* Grid Pattern Overlay - More Visible */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Subtle Scan Lines Effect */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(99,102,241,0.03)_1px,rgba(99,102,241,0.03)_2px)]"></div>
      </div>

      {/* Printer Icons Background - More Visible */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-5 text-4xl">🖨️</div>
        <div className="absolute top-40 right-10 text-3xl">📄</div>
        <div className="absolute bottom-20 left-20 text-4xl">📑</div>
        <div className="absolute bottom-40 right-1/4 text-3xl">🖨️</div>
        <div className="absolute top-1/3 left-1/3 text-2xl">📄</div>
        <div className="absolute top-2/3 right-20 text-3xl">📊</div>
        <div className="absolute bottom-10 left-1/2 text-2xl">🖨️</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Enhanced Heading with Background */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/60 to-transparent rounded-2xl -m-4 transform rotate-1"></div>
          <div className="relative">
            <h1 className="text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Premium Printing Shops
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover the best printing services near you with our curated selection of premium partners
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-2 mt-4">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        {/* Cards Grid with Enhanced Container */}
        <div className="relative mb-12">
          {/* Background Glow Effect - Darker */}
          <div className="absolute inset-0 bg-blue-300/30 rounded-3xl blur-3xl -z-10 transform scale-105"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {shops.map((shop) => (
              <div
                key={shop.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/70 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group"
              >
                {/* Premium Partner Ribbon */}
                {shop.premiumPartner && (
                  <div className="absolute -right-8 top-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold px-8 py-1 transform rotate-45 z-10 shadow-lg">
                    PREMIUM
                  </div>
                )}
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/8 group-hover:to-indigo-500/15 transition-all duration-500 rounded-2xl"></div>

                {/* Card Header */}
                <div className="p-4 border-b border-gray-200/60 relative z-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-blue-800 transition-colors duration-300 pr-2">
                      {shop.name}
                    </h3>
                    <div className="flex flex-col items-end space-y-1">
                      {shop.premiumPartner && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full border border-yellow-300">
                          ⭐
                        </span>
                      )}
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold border ${
                        shop.open 
                          ? "bg-green-100 text-green-800 border-green-300" 
                          : "bg-red-100 text-red-800 border-red-300"
                      }`}>
                        {shop.open ? "OPEN" : "CLOSED"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-700 text-xs">
                    <span className="text-blue-600">📍</span>
                    <span className="truncate">{shop.address.split(',')[0]}</span>
                  </div>
                </div>

                {/* Business Details */}
                <div className="p-4 border-b border-gray-200/60 relative z-5">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="text-center p-2 bg-blue-100/60 rounded-lg border border-blue-200/50">
                      <div className="text-xs text-gray-600 font-medium">Since</div>
                      <div className="font-bold text-blue-800 text-sm">{shop.established}</div>
                    </div>
                    <div className="text-center p-2 bg-indigo-100/60 rounded-lg border border-indigo-200/50">
                      <div className="text-xs text-gray-600 font-medium">Clients</div>
                      <div className="font-bold text-indigo-800 text-sm">{shop.clientBase}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-800 font-medium bg-gray-100/60 rounded-lg px-3 py-2 border border-gray-200">
                    🛠️ {shop.services}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 relative z-5">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-xs text-gray-600 font-medium">Distance</div>
                      <div className="font-bold text-gray-900 text-sm">{shop.distance}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xs text-gray-600 font-medium">Rating</div>
                      <div className="font-bold text-yellow-700 text-sm flex items-center justify-center">
                        {shop.rating}
                        <span className="ml-1">⭐</span>
                      </div>
                    </div>

                    <Link
                      to=""
                      state={{ shop: shop }}
                      className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 transform group-hover:scale-105 ${
                        shop.open
                          ? "bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl"
                          : "bg-gray-500 text-gray-300 cursor-not-allowed"
                      }`}
                    >
                      {shop.open ? "View Shop" : "Closed"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Explore More Button */}
        <div className="text-center relative">
          {/* Background Glow - Darker */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mt-32"></div>
          </div>
          
          <Link
            to="/shops"
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 group"
          >
            <span className="relative z-10">Explore More Shops</span>
            <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            
            {/* Button Shine Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </Link>
          
          {/* Decorative Dots - Darker */}
          <div className="flex justify-center space-x-2 mt-6">
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: `${dot * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>

      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}