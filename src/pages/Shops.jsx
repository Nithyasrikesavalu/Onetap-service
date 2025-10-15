// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // 🏪 30 Dummy Shops Data
// const shops = [
//   { name: "Smart Xerox Center", address: "Anna Nagar, Chennai", services: "Xerox, Printing, Scanning", rating: 4.5, distance: "0.8 km", open: true, image: "🖨" },
//   { name: "Speed Print & Xerox", address: "T Nagar, Chennai", services: "Color Print, Lamination", rating: 4.2, distance: "1.2 km", open: true, image: "📄" },
//   { name: "Copy World", address: "Adyar, Chennai", services: "Xerox, Binding, Printout", rating: 4.7, distance: "0.5 km", open: false, image: "📑" },
//   { name: "Express Xerox Point", address: "Tambaram, Chennai", services: "Online Applications, Printouts", rating: 4.0, distance: "2.1 km", open: true, image: "⚡" },
//   { name: "Quick Print Hub", address: "Velachery, Chennai", services: "Xerox, Color Print, Scan", rating: 4.6, distance: "1.5 km", open: true, image: "🏪" },
//   { name: "Bright Xerox Shop", address: "Porur, Chennai", services: "Xerox, Photo Copy, Printing", rating: 4.1, distance: "3.2 km", open: true, image: "✨" },
//   { name: "Green Print & Copy", address: "Guindy, Chennai", services: "Xerox, Online Services", rating: 4.4, distance: "0.9 km", open: false, image: "🌿" },
//   { name: "Digital Doc Center", address: "Mylapore, Chennai", services: "Scanning, Lamination, Printing", rating: 4.8, distance: "1.8 km", open: true, image: "💻" },
//   { name: "Speedy Copy", address: "Anna Nagar, Chennai", services: "Xerox, Printing", rating: 4.3, distance: "0.9 km", open: true, image: "📠" },
//   { name: "PrintPro", address: "T Nagar, Chennai", services: "Lamination, Binding", rating: 4.2, distance: "1.1 km", open: true, image: "📝" },
//   { name: "Xpress Docs", address: "Adyar, Chennai", services: "Color Print, Scan", rating: 4.5, distance: "0.7 km", open: false, image: "📂" },
//   { name: "Copy & Go", address: "Tambaram, Chennai", services: "Printing, Xerox", rating: 4.0, distance: "2.0 km", open: true, image: "✂" },
//   { name: "PrintXpress", address: "Velachery, Chennai", services: "Scanning, Xerox", rating: 4.6, distance: "1.6 km", open: true, image: "🖨" },
//   { name: "Xerox Point", address: "Porur, Chennai", services: "Binding, Copy", rating: 4.1, distance: "3.3 km", open: true, image: "📑" },
//   { name: "QuickCopy", address: "Guindy, Chennai", services: "Print, Scan", rating: 4.4, distance: "1.0 km", open: false, image: "⚡" },
//   { name: "Digital Prints", address: "Mylapore, Chennai", services: "Color Print, Laminating", rating: 4.8, distance: "1.7 km", open: true, image: "💻" },
//   { name: "Express Prints", address: "Anna Nagar, Chennai", services: "Xerox, Scanning", rating: 4.3, distance: "0.8 km", open: true, image: "📠" },
//   { name: "Fast Copy", address: "T Nagar, Chennai", services: "Printing, Copy", rating: 4.2, distance: "1.2 km", open: true, image: "📝" },
//   { name: "Print Hub", address: "Adyar, Chennai", services: "Scan, Color Print", rating: 4.5, distance: "0.6 km", open: false, image: "📂" },
//   { name: "Copy Center", address: "Tambaram, Chennai", services: "Xerox, Laminating", rating: 4.0, distance: "2.2 km", open: true, image: "✂" },
//   { name: "Smart Copy Corner", address: "Velachery, Chennai", services: "Printing, Scan, Binding", rating: 4.3, distance: "1.3 km", open: true, image: "🖨" },
//   { name: "Elite Print House", address: "Porur, Chennai", services: "Photo Copy, Color Print", rating: 4.4, distance: "3.0 km", open: true, image: "📘" },
//   { name: "Modern Xerox Studio", address: "Guindy, Chennai", services: "Scan, Binding", rating: 4.5, distance: "1.0 km", open: false, image: "🖱" },
//   { name: "DocuFast", address: "Mylapore, Chennai", services: "Online Print, Scanning", rating: 4.7, distance: "1.6 km", open: true, image: "🧾" },
//   { name: "PaperWorks", address: "Anna Nagar, Chennai", services: "Copy, Lamination", rating: 4.2, distance: "0.9 km", open: true, image: "📜" },
//   { name: "QuickDoc", address: "T Nagar, Chennai", services: "Xerox, Scan, Print", rating: 4.3, distance: "1.1 km", open: true, image: "📋" },
//   { name: "Star Print Zone", address: "Adyar, Chennai", services: "Binding, Copy, Color Print", rating: 4.6, distance: "0.7 km", open: true, image: "💫" },
//   { name: "CopyCity", address: "Tambaram, Chennai", services: "Xerox, Lamination", rating: 4.1, distance: "2.4 km", open: true, image: "🏙" },
//   { name: "UltraPrint", address: "Velachery, Chennai", services: "Printing, Copy, Scan", rating: 4.7, distance: "1.5 km", open: true, image: "🖨" },
//   { name: "Mega Docs", address: "Guindy, Chennai", services: "Printing, Online Services", rating: 4.5, distance: "1.1 km", open: true, image: "💾" },
// ];

// export default function Shops() {
//   const [filterPlace, setFilterPlace] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   // 🔍 Filter by place + search
//   const filteredShops = shops.filter((shop) => {
//     const matchesPlace =
//       filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
//     const matchesSearch =
//       shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       shop.address.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesPlace && matchesSearch;
//   });

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Enhanced Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-2xl mb-6 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
//             <span className="text-4xl">🖨</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//             Nearby Xerox Shops
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
//             Discover the best printing & xerox services near you with real-time availability and ratings
//           </p>
//         </div>

//         {/* Enhanced Filters Section */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 p-6 mb-10">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//             <div className="flex-1 w-full">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <span className="text-gray-400 text-lg">🔍</span>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search by shop name or location..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
//                 />
//               </div>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
//               <select
//                 value={filterPlace}
//                 onChange={(e) => setFilterPlace(e.target.value)}
//                 className="px-6 py-4 rounded-xl border border-gray-200 shadow-sm bg-white focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all duration-200 backdrop-blur-sm"
//               >
//                 <option value="All">📍 All Areas</option>
//                 <option value="Anna Nagar">🏘 Anna Nagar</option>
//                 <option value="T Nagar">🛍 T Nagar</option>
//                 <option value="Adyar">🌊 Adyar</option>
//                 <option value="Tambaram">🚉 Tambaram</option>
//                 <option value="Velachery">🏢 Velachery</option>
//                 <option value="Porur">🌉 Porur</option>
//                 <option value="Guindy">🏭 Guindy</option>
//                 <option value="Mylapore">🛕 Mylapore</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Results Counter */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="text-gray-700">
//             <span className="font-semibold text-blue-600 text-lg">{filteredShops.length}</span> shops found in{" "}
//             <span className="font-semibold text-blue-600">
//               {filterPlace === "All" ? "Chennai" : filterPlace}
//             </span>
//           </div>
//           <div className="text-sm text-gray-500">
//             Sorted by: <span className="text-blue-600 font-medium">Distance</span>
//           </div>
//         </div>

//         {/* IMAGE-INSPIRED CARD DESIGN */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {filteredShops.map((shop, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
//             >
//               {/* Card Header with Shop Name */}
//               <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
//                 <h3 className="text-xl font-bold mb-2">{shop.name}</h3>
//                 <div className="flex items-center justify-between">
//                   <div className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-full">
//                     {shop.distance}
//                   </div>
//                   <div className={`px-3 py-1 rounded-full text-sm font-medium ${
//                     shop.open ? "bg-green-500/90" : "bg-red-500/90"
//                   }`}>
//                     {shop.open ? "Open" : "Closed"}
//                   </div>
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="p-6">
//                 {/* Address Section */}
//                 <div className="mb-4">
//                   <div className="flex items-start space-x-2 text-gray-700">
//                     <span className="text-gray-500 mt-1">📍</span>
//                     <div>
//                       <p className="font-medium">{shop.address.split(", ")[0]}</p>
//                       <p className="text-gray-600">{shop.address.split(", ")[1]}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Services Section */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
//                   <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//                     <p className="text-gray-700 text-sm leading-relaxed">{shop.services}</p>
//                   </div>
//                 </div>

//                 {/* Rating and Action Section */}
//                 <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//                   <div className="flex items-center space-x-2">
//                     <span className="text-2xl font-bold text-blue-600">{shop.rating}</span>
//                     <div className="flex items-center space-x-1">
//                       <span className="text-yellow-500">⭐</span>
//                       <span className="text-sm text-gray-600">Rating</span>
//                     </div>
//                   </div>
                  
//                   <Link to={"/service"}
//                     className={`px-6 py-2 rounded-lg font-semibold text-white transition-all duration-200 ${
//                       shop.open
//                         ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//                         : "bg-gray-400 cursor-not-allowed"
//                     }`}
//                     disabled={!shop.open}
//                   >
//                     {shop.open ? "Book Now" : "Closed"}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Enhanced Footer */}
//         <div className="text-center py-8 border-t border-gray-200/60">
//           <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
//             <div className="text-gray-600 mb-4 sm:mb-0">
//               <span className="font-semibold text-blue-600">{filteredShops.length}</span> shops available • 
//               <span className="text-green-600 font-semibold ml-2">
//                 {shops.filter(shop => shop.open).length} open now
//               </span>
//             </div>
            
//             <div className="flex items-center space-x-2 text-gray-500">
//               <span>🖨</span>
//               <span className="text-sm">Quality Xerox Services in Chennai</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // 🏪 30 Dummy Shops Data
// const shops = [
//   { name: "Smart Xerox Center", address: "Anna Nagar, Chennai", services: "Xerox, Printing, Scanning", rating: 4.5, distance: "0.8 km", open: true, image: "🖨" },
//   { name: "Speed Print & Xerox", address: "T Nagar, Chennai", services: "Color Print, Lamination", rating: 4.2, distance: "1.2 km", open: true, image: "📄" },
//   { name: "Copy World", address: "Adyar, Chennai", services: "Xerox, Binding, Printout", rating: 4.7, distance: "0.5 km", open: false, image: "📑" },
//   { name: "Express Xerox Point", address: "Tambaram, Chennai", services: "Online Applications, Printouts", rating: 4.0, distance: "2.1 km", open: true, image: "⚡" },
//   { name: "Quick Print Hub", address: "Velachery, Chennai", services: "Xerox, Color Print, Scan", rating: 4.6, distance: "1.5 km", open: true, image: "🏪" },
//   { name: "Bright Xerox Shop", address: "Porur, Chennai", services: "Xerox, Photo Copy, Printing", rating: 4.1, distance: "3.2 km", open: true, image: "✨" },
//   { name: "Green Print & Copy", address: "Guindy, Chennai", services: "Xerox, Online Services", rating: 4.4, distance: "0.9 km", open: false, image: "🌿" },
//   { name: "Digital Doc Center", address: "Mylapore, Chennai", services: "Scanning, Lamination, Printing", rating: 4.8, distance: "1.8 km", open: true, image: "💻" },
//   { name: "Speedy Copy", address: "Anna Nagar, Chennai", services: "Xerox, Printing", rating: 4.3, distance: "0.9 km", open: true, image: "📠" },
//   { name: "PrintPro", address: "T Nagar, Chennai", services: "Lamination, Binding", rating: 4.2, distance: "1.1 km", open: true, image: "📝" },
//   { name: "Xpress Docs", address: "Adyar, Chennai", services: "Color Print, Scan", rating: 4.5, distance: "0.7 km", open: false, image: "📂" },
//   { name: "Copy & Go", address: "Tambaram, Chennai", services: "Printing, Xerox", rating: 4.0, distance: "2.0 km", open: true, image: "✂" },
//   { name: "PrintXpress", address: "Velachery, Chennai", services: "Scanning, Xerox", rating: 4.6, distance: "1.6 km", open: true, image: "🖨" },
//   { name: "Xerox Point", address: "Porur, Chennai", services: "Binding, Copy", rating: 4.1, distance: "3.3 km", open: true, image: "📑" },
//   { name: "QuickCopy", address: "Guindy, Chennai", services: "Print, Scan", rating: 4.4, distance: "1.0 km", open: false, image: "⚡" },
//   { name: "Digital Prints", address: "Mylapore, Chennai", services: "Color Print, Laminating", rating: 4.8, distance: "1.7 km", open: true, image: "💻" },
//   { name: "Express Prints", address: "Anna Nagar, Chennai", services: "Xerox, Scanning", rating: 4.3, distance: "0.8 km", open: true, image: "📠" },
//   { name: "Fast Copy", address: "T Nagar, Chennai", services: "Printing, Copy", rating: 4.2, distance: "1.2 km", open: true, image: "📝" },
//   { name: "Print Hub", address: "Adyar, Chennai", services: "Scan, Color Print", rating: 4.5, distance: "0.6 km", open: false, image: "📂" },
//   { name: "Copy Center", address: "Tambaram, Chennai", services: "Xerox, Laminating", rating: 4.0, distance: "2.2 km", open: true, image: "✂" },
//   { name: "Smart Copy Corner", address: "Velachery, Chennai", services: "Printing, Scan, Binding", rating: 4.3, distance: "1.3 km", open: true, image: "🖨" },
//   { name: "Elite Print House", address: "Porur, Chennai", services: "Photo Copy, Color Print", rating: 4.4, distance: "3.0 km", open: true, image: "📘" },
//   { name: "Modern Xerox Studio", address: "Guindy, Chennai", services: "Scan, Binding", rating: 4.5, distance: "1.0 km", open: false, image: "🖱" },
//   { name: "DocuFast", address: "Mylapore, Chennai", services: "Online Print, Scanning", rating: 4.7, distance: "1.6 km", open: true, image: "🧾" },
//   { name: "PaperWorks", address: "Anna Nagar, Chennai", services: "Copy, Lamination", rating: 4.2, distance: "0.9 km", open: true, image: "📜" },
//   { name: "QuickDoc", address: "T Nagar, Chennai", services: "Xerox, Scan, Print", rating: 4.3, distance: "1.1 km", open: true, image: "📋" },
//   { name: "Star Print Zone", address: "Adyar, Chennai", services: "Binding, Copy, Color Print", rating: 4.6, distance: "0.7 km", open: true, image: "💫" },
//   { name: "CopyCity", address: "Tambaram, Chennai", services: "Xerox, Lamination", rating: 4.1, distance: "2.4 km", open: true, image: "🏙" },
//   { name: "UltraPrint", address: "Velachery, Chennai", services: "Printing, Copy, Scan", rating: 4.7, distance: "1.5 km", open: true, image: "🖨" },
//   { name: "Mega Docs", address: "Guindy, Chennai", services: "Printing, Online Services", rating: 4.5, distance: "1.1 km", open: true, image: "💾" },
// ];

// export default function Shops() {
//   const [filterPlace, setFilterPlace] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [visibleCount, setVisibleCount] = useState(6); // Start with 6 shops

//   // 🔍 Filter by place + search
//   const filteredShops = shops.filter((shop) => {
//     const matchesPlace =
//       filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
//     const matchesSearch =
//       shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       shop.address.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesPlace && matchesSearch;
//   });

//   // Get only the visible shops based on visibleCount
//   const visibleShops = filteredShops.slice(0, visibleCount);

//   // Function to load more shops
//   const loadMoreShops = () => {
//     setVisibleCount(prevCount => prevCount + 6); // Load 6 more shops
//   };

//   // Reset visible count when filters change
//   React.useEffect(() => {
//     setVisibleCount(6);
//   }, [filterPlace, searchQuery]);

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Enhanced Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-2xl mb-6 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
//             <span className="text-4xl">🖨</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//             Nearby Xerox Shops
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
//             Discover the best printing & xerox services near you with real-time availability and ratings
//           </p>
//         </div>

//         {/* Enhanced Filters Section */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 p-6 mb-10">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//             <div className="flex-1 w-full">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <span className="text-gray-400 text-lg">🔍</span>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search by shop name or location..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
//                 />
//               </div>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
//               <select
//                 value={filterPlace}
//                 onChange={(e) => setFilterPlace(e.target.value)}
//                 className="px-6 py-4 rounded-xl border border-gray-200 shadow-sm bg-white focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all duration-200 backdrop-blur-sm"
//               >
//                 <option value="All">📍 All Areas</option>
//                 <option value="Anna Nagar">🏘 Anna Nagar</option>
//                 <option value="T Nagar">🛍 T Nagar</option>
//                 <option value="Adyar">🌊 Adyar</option>
//                 <option value="Tambaram">🚉 Tambaram</option>
//                 <option value="Velachery">🏢 Velachery</option>
//                 <option value="Porur">🌉 Porur</option>
//                 <option value="Guindy">🏭 Guindy</option>
//                 <option value="Mylapore">🛕 Mylapore</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Results Counter */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="text-gray-700">
//             <span className="font-semibold text-blue-600 text-lg">{filteredShops.length}</span> shops found in{" "}
//             <span className="font-semibold text-blue-600">
//               {filterPlace === "All" ? "Chennai" : filterPlace}
//             </span>
//             {filteredShops.length > visibleCount && (
//               <span className="text-gray-500 ml-2">
//                 (showing {visibleCount})
//               </span>
//             )}
//           </div>
//           <div className="text-sm text-gray-500">
//             Sorted by: <span className="text-blue-600 font-medium">Distance</span>
//           </div>
//         </div>

//         {/* IMAGE-INSPIRED CARD DESIGN */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {visibleShops.map((shop, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
//             >
//               {/* Card Header with Shop Name */}
//               <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
//                 <h3 className="text-xl font-bold mb-2">{shop.name}</h3>
//                 <div className="flex items-center justify-between">
//                   <div className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-full">
//                     {shop.distance}
//                   </div>
//                   <div className={`px-3 py-1 rounded-full text-sm font-medium ${
//                     shop.open ? "bg-green-500/90" : "bg-red-500/90"
//                   }`}>
//                     {shop.open ? "Open" : "Closed"}
//                   </div>
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="p-6">
//                 {/* Address Section */}
//                 <div className="mb-4">
//                   <div className="flex items-start space-x-2 text-gray-700">
//                     <span className="text-gray-500 mt-1">📍</span>
//                     <div>
//                       <p className="font-medium">{shop.address.split(", ")[0]}</p>
//                       <p className="text-gray-600">{shop.address.split(", ")[1]}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Services Section */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
//                   <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//                     <p className="text-gray-700 text-sm leading-relaxed">{shop.services}</p>
//                   </div>
//                 </div>

//                 {/* Rating and Action Section */}
//                 <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//                   <div className="flex items-center space-x-2">
//                     <span className="text-2xl font-bold text-blue-600">{shop.rating}</span>
//                     <div className="flex items-center space-x-1">
//                       <span className="text-yellow-500">⭐</span>
//                       <span className="text-sm text-gray-600">Rating</span>
//                     </div>
//                   </div>
                  
//                   <Link to={"/service"}
//                     className={`px-6 py-2 rounded-lg font-semibold text-white transition-all duration-200 ${
//                       shop.open
//                         ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//                         : "bg-gray-400 cursor-not-allowed"
//                     }`}
//                     disabled={!shop.open}
//                   >
//                     {shop.open ? "Book Now" : "Closed"}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More Button */}
//         {visibleCount < filteredShops.length && (
//           <div className="text-center mb-12">
//             <button
//               onClick={loadMoreShops}
//               className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 hover:from-blue-600 hover:to-indigo-600"
//             >
//               View More Shops ({filteredShops.length - visibleCount} remaining)
//             </button>
//           </div>
//         )}

//         {/* Enhanced Footer */}
//         <div className="text-center py-8 border-t border-gray-200/60">
//           <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
//             <div className="text-gray-600 mb-4 sm:mb-0">
//               <span className="font-semibold text-blue-600">{filteredShops.length}</span> shops available • 
//               <span className="text-green-600 font-semibold ml-2">
//                 {shops.filter(shop => shop.open).length} open now
//               </span>
//             </div>
            
//             <div className="flex items-center space-x-2 text-gray-500">
//               <span>🖨</span>
//               <span className="text-sm">Quality Xerox Services in Chennai</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // 🏪 30 Dummy Shops Data
// const shops = [
//   { name: "Smart Xerox Center", address: "Anna Nagar, Chennai", services: "Xerox, Printing, Scanning", rating: 4.5, distance: "0.8 km", open: true, image: "🖨" },
//   { name: "Speed Print & Xerox", address: "T Nagar, Chennai", services: "Color Print, Lamination", rating: 4.2, distance: "1.2 km", open: true, image: "📄" },
//   { name: "Copy World", address: "Adyar, Chennai", services: "Xerox, Binding, Printout", rating: 4.7, distance: "0.5 km", open: false, image: "📑" },
//   { name: "Express Xerox Point", address: "Tambaram, Chennai", services: "Online Applications, Printouts", rating: 4.0, distance: "2.1 km", open: true, image: "⚡" },
//   { name: "Quick Print Hub", address: "Velachery, Chennai", services: "Xerox, Color Print, Scan", rating: 4.6, distance: "1.5 km", open: true, image: "🏪" },
//   { name: "Bright Xerox Shop", address: "Porur, Chennai", services: "Xerox, Photo Copy, Printing", rating: 4.1, distance: "3.2 km", open: true, image: "✨" },
//   { name: "Green Print & Copy", address: "Guindy, Chennai", services: "Xerox, Online Services", rating: 4.4, distance: "0.9 km", open: false, image: "🌿" },
//   { name: "Digital Doc Center", address: "Mylapore, Chennai", services: "Scanning, Lamination, Printing", rating: 4.8, distance: "1.8 km", open: true, image: "💻" },
//   { name: "Speedy Copy", address: "Anna Nagar, Chennai", services: "Xerox, Printing", rating: 4.3, distance: "0.9 km", open: true, image: "📠" },
//   { name: "PrintPro", address: "T Nagar, Chennai", services: "Lamination, Binding", rating: 4.2, distance: "1.1 km", open: true, image: "📝" },
//   { name: "Xpress Docs", address: "Adyar, Chennai", services: "Color Print, Scan", rating: 4.5, distance: "0.7 km", open: false, image: "📂" },
//   { name: "Copy & Go", address: "Tambaram, Chennai", services: "Printing, Xerox", rating: 4.0, distance: "2.0 km", open: true, image: "✂" },
//   { name: "PrintXpress", address: "Velachery, Chennai", services: "Scanning, Xerox", rating: 4.6, distance: "1.6 km", open: true, image: "🖨" },
//   { name: "Xerox Point", address: "Porur, Chennai", services: "Binding, Copy", rating: 4.1, distance: "3.3 km", open: true, image: "📑" },
//   { name: "QuickCopy", address: "Guindy, Chennai", services: "Print, Scan", rating: 4.4, distance: "1.0 km", open: false, image: "⚡" },
//   { name: "Digital Prints", address: "Mylapore, Chennai", services: "Color Print, Laminating", rating: 4.8, distance: "1.7 km", open: true, image: "💻" },
//   { name: "Express Prints", address: "Anna Nagar, Chennai", services: "Xerox, Scanning", rating: 4.3, distance: "0.8 km", open: true, image: "📠" },
//   { name: "Fast Copy", address: "T Nagar, Chennai", services: "Printing, Copy", rating: 4.2, distance: "1.2 km", open: true, image: "📝" },
//   { name: "Print Hub", address: "Adyar, Chennai", services: "Scan, Color Print", rating: 4.5, distance: "0.6 km", open: false, image: "📂" },
//   { name: "Copy Center", address: "Tambaram, Chennai", services: "Xerox, Laminating", rating: 4.0, distance: "2.2 km", open: true, image: "✂" },
//   { name: "Smart Copy Corner", address: "Velachery, Chennai", services: "Printing, Scan, Binding", rating: 4.3, distance: "1.3 km", open: true, image: "🖨" },
//   { name: "Elite Print House", address: "Porur, Chennai", services: "Photo Copy, Color Print", rating: 4.4, distance: "3.0 km", open: true, image: "📘" },
//   { name: "Modern Xerox Studio", address: "Guindy, Chennai", services: "Scan, Binding", rating: 4.5, distance: "1.0 km", open: false, image: "🖱" },
//   { name: "DocuFast", address: "Mylapore, Chennai", services: "Online Print, Scanning", rating: 4.7, distance: "1.6 km", open: true, image: "🧾" },
//   { name: "PaperWorks", address: "Anna Nagar, Chennai", services: "Copy, Lamination", rating: 4.2, distance: "0.9 km", open: true, image: "📜" },
//   { name: "QuickDoc", address: "T Nagar, Chennai", services: "Xerox, Scan, Print", rating: 4.3, distance: "1.1 km", open: true, image: "📋" },
//   { name: "Star Print Zone", address: "Adyar, Chennai", services: "Binding, Copy, Color Print", rating: 4.6, distance: "0.7 km", open: true, image: "💫" },
//   { name: "CopyCity", address: "Tambaram, Chennai", services: "Xerox, Lamination", rating: 4.1, distance: "2.4 km", open: true, image: "🏙" },
//   { name: "UltraPrint", address: "Velachery, Chennai", services: "Printing, Copy, Scan", rating: 4.7, distance: "1.5 km", open: true, image: "🖨" },
//   { name: "Mega Docs", address: "Guindy, Chennai", services: "Printing, Online Services", rating: 4.5, distance: "1.1 km", open: true, image: "💾" },
// ];

// export default function Shops() {
//   const [filterPlace, setFilterPlace] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [visibleCount, setVisibleCount] = useState(6);
//   const [activeSort, setActiveSort] = useState("distance");

//   // 🔍 Filter by place + search
//   const filteredShops = shops.filter((shop) => {
//     const matchesPlace =
//       filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
//     const matchesSearch =
//       shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       shop.address.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesPlace && matchesSearch;
//   });

//   // Sort shops based on active sort
//   const sortedShops = [...filteredShops].sort((a, b) => {
//     switch (activeSort) {
//       case "rating":
//         return b.rating - a.rating;
//       case "name":
//         return a.name.localeCompare(b.name);
//       case "distance":
//         return parseFloat(a.distance) - parseFloat(b.distance);
//       default:
//         return 0;
//     }
//   });

//   // Get only the visible shops
//   const visibleShops = sortedShops.slice(0, visibleCount);

//   const loadMoreShops = () => {
//     setVisibleCount(prevCount => prevCount + 6);
//   };

//   React.useEffect(() => {
//     setVisibleCount(6);
//   }, [filterPlace, searchQuery, activeSort]);

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-12 px-4 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-blue-300/30 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${15 + Math.random() * 10}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center justify-center w-28 h-28 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl mb-8 border border-blue-200 transform hover:scale-105 transition-all duration-500 hover:rotate-3">
//             <span className="text-5xl">🖨️</span>
//           </div>
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//             Print & Copy Hub
//           </h1>
//           <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
//             Discover premium printing services with <span className="text-blue-600 font-semibold">real-time availability</span> and <span className="text-cyan-600 font-semibold">expert ratings</span>
//           </p>
//         </div>

//         {/* Search & Filter Section */}
//         <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-200 p-8 mb-12">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//             {/* Search Bar */}
//             <div className="flex-1 w-full">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <span className="text-blue-500 text-xl">🔍</span>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search shops by name or location..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-12 pr-6 py-5 rounded-2xl border border-blue-200 bg-white text-gray-800 placeholder-gray-500 shadow-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none transition-all duration-300"
//                 />
//               </div>
//             </div>
            
//             {/* Location Filter */}
//             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
//               <select
//                 value={filterPlace}
//                 onChange={(e) => setFilterPlace(e.target.value)}
//                 className="px-6 py-5 rounded-2xl border border-blue-200 bg-white text-gray-800 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 shadow-lg"
//               >
//                 <option value="All">📍 All Areas</option>
//                 <option value="Anna Nagar">🏘 Anna Nagar</option>
//                 <option value="T Nagar">🛍 T Nagar</option>
//                 <option value="Adyar">🌊 Adyar</option>
//                 <option value="Tambaram">🚉 Tambaram</option>
//                 <option value="Velachery">🏢 Velachery</option>
//                 <option value="Porur">🌉 Porur</option>
//                 <option value="Guindy">🏭 Guindy</option>
//                 <option value="Mylapore">🛕 Mylapore</option>
//               </select>

//               {/* Sort Options */}
//               <div className="flex gap-2">
//                 {["distance", "rating", "name"].map((sortType) => (
//                   <button
//                     key={sortType}
//                     onClick={() => setActiveSort(sortType)}
//                     className={`px-4 py-2 rounded-xl border transition-all duration-300 shadow-lg capitalize ${
//                       activeSort === sortType
//                         ? "bg-blue-500 border-blue-400 text-white"
//                         : "bg-white border-blue-200 text-gray-700 hover:bg-blue-50"
//                     }`}
//                   >
//                     {sortType}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Bar */}
//         <div className="flex items-center justify-between mb-8 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-blue-200 shadow-lg">
//           <div className="text-gray-700">
//             <span className="font-bold text-blue-600 text-xl">{filteredShops.length}</span> shops found in{" "}
//             <span className="font-semibold text-cyan-600">
//               {filterPlace === "All" ? "Chennai" : filterPlace}
//             </span>
//             {filteredShops.length > visibleCount && (
//               <span className="text-gray-500 ml-2">
//                 (showing {Math.min(visibleCount, filteredShops.length)})
//               </span>
//             )}
//           </div>
//           <div className="text-gray-600">
//             Sorted by: <span className="text-blue-600 font-medium capitalize">{activeSort}</span>
//           </div>
//         </div>

//         {/* Shop Cards Grid - Consistent Design for All */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
//           {visibleShops.map((shop, idx) => (
//             <div
//               key={idx}
//               className="group relative bg-white rounded-3xl shadow-2xl border border-blue-200 overflow-hidden hover:transform hover:scale-105 transition-all duration-500"
//             >
//               {/* Status Ribbon */}
//               <div className={`absolute top-4 right-4 z-10 px-4 py-2 rounded-full text-sm font-bold ${
//                 shop.open 
//                   ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" 
//                   : "bg-gradient-to-r from-red-500 to-pink-500 text-white"
//               }`}>
//                 {shop.open ? "🟢 OPEN" : "🔴 CLOSED"}
//               </div>

//               {/* Card Header with Consistent Gradient */}
//               <div className="relative p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm">
//                     {shop.image}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold mb-1">{shop.name}</h3>
//                     <div className="flex items-center space-x-2">
//                       <span className="text-cyan-100 text-lg font-bold">{shop.distance}</span>
//                       <span className="text-white/60">•</span>
//                       <div className="flex items-center space-x-1">
//                         <span className="text-yellow-300">⭐</span>
//                         <span className="font-semibold">{shop.rating}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Card Content - Consistent Layout */}
//               <div className="p-6">
//                 {/* Address Section */}
//                 <div className="mb-4">
//                   <div className="flex items-start space-x-3">
//                     <span className="text-blue-500 text-lg mt-1">📍</span>
//                     <div>
//                       <p className="text-gray-800 font-medium">{shop.address.split(", ")[0]}</p>
//                       <p className="text-gray-600 text-sm">{shop.address.split(", ")[1]}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Services Section */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-blue-600 mb-3">Services Offered:</h4>
//                   <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
//                     <p className="text-gray-700 text-sm leading-relaxed">{shop.services}</p>
//                   </div>
//                 </div>

//                 {/* Action Button Section */}
//                 <div className="flex justify-between items-center pt-4 border-t border-gray-200">
//                   <div className="flex items-center space-x-2">
//                     <div className={`w-3 h-3 rounded-full ${shop.open ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
//                     <span className="text-gray-500 text-sm">
//                       {shop.open ? 'Available Now' : 'Opens Tomorrow'}
//                     </span>
//                   </div>
                  
//                   <Link 
//                     to={"/service"}
//                     className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
//                       shop.open
//                         ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-blue-500/25"
//                         : "bg-gray-400 cursor-not-allowed opacity-50"
//                     }`}
//                   >
//                     {shop.open ? "Book Now →" : "Closed"}
//                   </Link>
//                 </div>
//               </div>

//               {/* Hover Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         {visibleCount < filteredShops.length && (
//           <div className="text-center mb-16">
//             <button
//               onClick={loadMoreShops}
//               className="px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-600 hover:to-cyan-600"
//             >
//               Load More Shops • {filteredShops.length - visibleCount} Remaining
//             </button>
//           </div>
//         )}

//         {/* Footer Section */}
//         <div className="text-center py-12 border-t border-blue-200">
//           <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
//             <div className="text-gray-600 mb-4 sm:mb-0">
//               <span className="font-semibold text-blue-600">{shops.length}</span> total shops • 
//               <span className="text-green-600 font-semibold ml-2">
//                 {shops.filter(shop => shop.open).length} open now
//               </span>
//             </div>
            
//             <div className="flex items-center space-x-3 text-gray-600">
//               <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
//                 <span className="text-lg">🖨️</span>
//               </div>
//               <span className="text-sm">Premium Printing Services Across Chennai</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for floating animation */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         .animate-float {
//           animation: float linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // 🏪 30 Dummy Shops Data
// const shops = [
//   { name: "Smart Xerox Center", address: "Anna Nagar, Chennai", services: "Xerox, Printing, Scanning", rating: 4.5, distance: "0.8 km", open: true, image: "🖨" },
//   { name: "Speed Print & Xerox", address: "T Nagar, Chennai", services: "Color Print, Lamination", rating: 4.2, distance: "1.2 km", open: true, image: "📄" },
//   { name: "Copy World", address: "Adyar, Chennai", services: "Xerox, Binding, Printout", rating: 4.7, distance: "0.5 km", open: false, image: "📑" },
//   { name: "Express Xerox Point", address: "Tambaram, Chennai", services: "Online Applications, Printouts", rating: 4.0, distance: "2.1 km", open: true, image: "⚡" },
//   { name: "Quick Print Hub", address: "Velachery, Chennai", services: "Xerox, Color Print, Scan", rating: 4.6, distance: "1.5 km", open: true, image: "🏪" },
//   { name: "Bright Xerox Shop", address: "Porur, Chennai", services: "Xerox, Photo Copy, Printing", rating: 4.1, distance: "3.2 km", open: true, image: "✨" },
//   { name: "Green Print & Copy", address: "Guindy, Chennai", services: "Xerox, Online Services", rating: 4.4, distance: "0.9 km", open: false, image: "🌿" },
//   { name: "Digital Doc Center", address: "Mylapore, Chennai", services: "Scanning, Lamination, Printing", rating: 4.8, distance: "1.8 km", open: true, image: "💻" },
//   { name: "Speedy Copy", address: "Anna Nagar, Chennai", services: "Xerox, Printing", rating: 4.3, distance: "0.9 km", open: true, image: "📠" },
//   { name: "PrintPro", address: "T Nagar, Chennai", services: "Lamination, Binding", rating: 4.2, distance: "1.1 km", open: true, image: "📝" },
//   { name: "Xpress Docs", address: "Adyar, Chennai", services: "Color Print, Scan", rating: 4.5, distance: "0.7 km", open: false, image: "📂" },
//   { name: "Copy & Go", address: "Tambaram, Chennai", services: "Printing, Xerox", rating: 4.0, distance: "2.0 km", open: true, image: "✂" },
//   { name: "PrintXpress", address: "Velachery, Chennai", services: "Scanning, Xerox", rating: 4.6, distance: "1.6 km", open: true, image: "🖨" },
//   { name: "Xerox Point", address: "Porur, Chennai", services: "Binding, Copy", rating: 4.1, distance: "3.3 km", open: true, image: "📑" },
//   { name: "QuickCopy", address: "Guindy, Chennai", services: "Print, Scan", rating: 4.4, distance: "1.0 km", open: false, image: "⚡" },
//   { name: "Digital Prints", address: "Mylapore, Chennai", services: "Color Print, Laminating", rating: 4.8, distance: "1.7 km", open: true, image: "💻" },
//   { name: "Express Prints", address: "Anna Nagar, Chennai", services: "Xerox, Scanning", rating: 4.3, distance: "0.8 km", open: true, image: "📠" },
//   { name: "Fast Copy", address: "T Nagar, Chennai", services: "Printing, Copy", rating: 4.2, distance: "1.2 km", open: true, image: "📝" },
//   { name: "Print Hub", address: "Adyar, Chennai", services: "Scan, Color Print", rating: 4.5, distance: "0.6 km", open: false, image: "📂" },
//   { name: "Copy Center", address: "Tambaram, Chennai", services: "Xerox, Laminating", rating: 4.0, distance: "2.2 km", open: true, image: "✂" },
//   { name: "Smart Copy Corner", address: "Velachery, Chennai", services: "Printing, Scan, Binding", rating: 4.3, distance: "1.3 km", open: true, image: "🖨" },
//   { name: "Elite Print House", address: "Porur, Chennai", services: "Photo Copy, Color Print", rating: 4.4, distance: "3.0 km", open: true, image: "📘" },
//   { name: "Modern Xerox Studio", address: "Guindy, Chennai", services: "Scan, Binding", rating: 4.5, distance: "1.0 km", open: false, image: "🖱" },
//   { name: "DocuFast", address: "Mylapore, Chennai", services: "Online Print, Scanning", rating: 4.7, distance: "1.6 km", open: true, image: "🧾" },
//   { name: "PaperWorks", address: "Anna Nagar, Chennai", services: "Copy, Lamination", rating: 4.2, distance: "0.9 km", open: true, image: "📜" },
//   { name: "QuickDoc", address: "T Nagar, Chennai", services: "Xerox, Scan, Print", rating: 4.3, distance: "1.1 km", open: true, image: "📋" },
//   { name: "Star Print Zone", address: "Adyar, Chennai", services: "Binding, Copy, Color Print", rating: 4.6, distance: "0.7 km", open: true, image: "💫" },
//   { name: "CopyCity", address: "Tambaram, Chennai", services: "Xerox, Lamination", rating: 4.1, distance: "2.4 km", open: true, image: "🏙" },
//   { name: "UltraPrint", address: "Velachery, Chennai", services: "Printing, Copy, Scan", rating: 4.7, distance: "1.5 km", open: true, image: "🖨" },
//   { name: "Mega Docs", address: "Guindy, Chennai", services: "Printing, Online Services", rating: 4.5, distance: "1.1 km", open: true, image: "💾" },
// ];

// export default function Shops() {
//   const [filterPlace, setFilterPlace] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [visibleCount, setVisibleCount] = useState(6);

//   // 🔍 Filter by place + search
//   const filteredShops = shops.filter((shop) => {
//     const matchesPlace =
//       filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
//     const matchesSearch =
//       shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       shop.address.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesPlace && matchesSearch;
//   });

//   // Get shops to display based on visibleCount
//   const shopsToShow = filteredShops.slice(0, visibleCount);

//   // Handle show more/less
//   const handleShowMore = () => {
//     if (visibleCount >= filteredShops.length) {
//       // If showing all, reset to 6
//       setVisibleCount(6);
//     } else {
//       // Show 6 more shops
//       setVisibleCount(prevCount => Math.min(prevCount + 6, filteredShops.length));
//     }
//   };

//   // Reset visible count when filters change
//   React.useEffect(() => {
//     setVisibleCount(6);
//   }, [filterPlace, searchQuery]);

//   const isShowingAll = visibleCount >= filteredShops.length;
//   const canShowMore = filteredShops.length > 6;

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Enhanced Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-2xl mb-6 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
//             <span className="text-4xl">🖨</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//             Nearby Xerox Shops
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
//             Discover the best printing & xerox services near you with real-time availability and ratings
//           </p>
//         </div>

//         {/* Enhanced Filters Section */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 p-6 mb-10">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//             <div className="flex-1 w-full">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <span className="text-gray-400 text-lg">🔍</span>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search by shop name or location..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
//               <select
//                 value={filterPlace}
//                 onChange={(e) => setFilterPlace(e.target.value)}
//                 className="px-6 py-4 rounded-xl border border-gray-200 shadow-sm bg-white focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all duration-200 backdrop-blur-sm"
//               >
//                 <option value="All">📍 All Areas</option>
//                 <option value="Anna Nagar">🏘 Anna Nagar</option>
//                 <option value="T Nagar">🛍 T Nagar</option>
//                 <option value="Adyar">🌊 Adyar</option>
//                 <option value="Tambaram">🚉 Tambaram</option>
//                 <option value="Velachery">🏢 Velachery</option>
//                 <option value="Porur">🌉 Porur</option>
//                 <option value="Guindy">🏭 Guindy</option>
//                 <option value="Mylapore">🛕 Mylapore</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Results Counter */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="text-gray-700">
//             <span className="font-semibold text-blue-600 text-lg">{filteredShops.length}</span> shops found in{" "}
//             <span className="font-semibold text-blue-600">
//               {filterPlace === "All" ? "Chennai" : filterPlace}
//             </span>
//           </div>
//           <div className="text-sm text-gray-500">
//             Showing <span className="text-blue-600 font-medium">{shopsToShow.length}</span> of {filteredShops.length}
//           </div>
//         </div>

//         {/* IMAGE-INSPIRED CARD DESIGN */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {shopsToShow.map((shop, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
//             >
//               {/* Card Header with Shop Name */}
//               <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
//                 <h3 className="text-xl font-bold mb-2">{shop.name}</h3>
//                 <div className="flex items-center justify-between">
//                   <div className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-full">
//                     {shop.distance}
//                   </div>
//                   <div className={`px-3 py-1 rounded-full text-sm font-medium ${
//                     shop.open ? "bg-green-500/90" : "bg-red-500/90"
//                   }`}>
//                     {shop.open ? "Open" : "Closed"}
//                   </div>
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="p-6">
//                 {/* Address Section */}
//                 <div className="mb-4">
//                   <div className="flex items-start space-x-2 text-gray-700">
//                     <span className="text-gray-500 mt-1">📍</span>
//                     <div>
//                       <p className="font-medium">{shop.address.split(", ")[0]}</p>
//                       <p className="text-gray-600">{shop.address.split(", ")[1]}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Services Section */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
//                   <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//                     <p className="text-gray-700 text-sm leading-relaxed">{shop.services}</p>
//                   </div>
//                 </div>

//                 {/* Rating and Action Section */}
//                 <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//                   <div className="flex items-center space-x-2">
//                     <span className="text-2xl font-bold text-blue-600">{shop.rating}</span>
//                     <div className="flex items-center space-x-1">
//                       <span className="text-yellow-500">⭐</span>
//                       <span className="text-sm text-gray-600">Rating</span>
//                     </div>
//                   </div>

//                   <Link to={"/service"}
//                     className={`px-6 py-2 rounded-lg font-semibold text-white transition-all duration-200 ${
//                       shop.open
//                         ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//                         : "bg-gray-400 cursor-not-allowed"
//                     }`}
//                     disabled={!shop.open}
//                   >
//                     {shop.open ? "Book Now" : "Closed"}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Show More/Less Button */}
//         {canShowMore && (
//           <div className="text-center mb-12">
//             <button
//               onClick={handleShowMore}
//               className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
//             >
//               {isShowingAll ? "Show Less" : `Show More (+${Math.min(6, filteredShops.length - visibleCount)})`}
//             </button>
//           </div>
//         )}

//         {/* Enhanced Footer */}
//         <div className="text-center py-8 border-t border-gray-200/60">
//           <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
//             <div className="text-gray-600 mb-4 sm:mb-0">
//               <span className="font-semibold text-blue-600">{filteredShops.length}</span> shops available • 
//               <span className="text-green-600 font-semibold ml-2">
//                 {shops.filter(shop => shop.open).length} open now
//               </span>
//             </div>

//             <div className="flex items-center space-x-2 text-gray-500">
//               <span>🖨</span>
//               <span className="text-sm">Quality Xerox Services in Chennai</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 🏪 30 Dummy Shop Data
const shops = [
  { name: "Smart Xerox Center", address: "Anna Nagar, Chennai", services: "Xerox, Printing, Scanning", rating: 4.5, distance: "0.8 km", open: true, image: "🖨" },
  { name: "Speed Print & Xerox", address: "T Nagar, Chennai", services: "Color Print, Lamination", rating: 4.2, distance: "1.2 km", open: true, image: "📄" },
  { name: "Copy World", address: "Adyar, Chennai", services: "Xerox, Binding, Printout", rating: 4.7, distance: "0.5 km", open: false, image: "📑" },
  { name: "Express Xerox Point", address: "Tambaram, Chennai", services: "Online Applications, Printouts", rating: 4.0, distance: "2.1 km", open: true, image: "⚡" },
  { name: "Quick Print Hub", address: "Velachery, Chennai", services: "Xerox, Color Print, Scan", rating: 4.6, distance: "1.5 km", open: true, image: "🏪" },
  { name: "Bright Xerox Shop", address: "Porur, Chennai", services: "Xerox, Photo Copy, Printing", rating: 4.1, distance: "3.2 km", open: true, image: "✨" },
  { name: "Green Print & Copy", address: "Guindy, Chennai", services: "Xerox, Online Services", rating: 4.4, distance: "0.9 km", open: false, image: "🌿" },
  { name: "Digital Doc Center", address: "Mylapore, Chennai", services: "Scanning, Lamination, Printing", rating: 4.8, distance: "1.8 km", open: true, image: "💻" },
  { name: "Speedy Copy", address: "Anna Nagar, Chennai", services: "Xerox, Printing", rating: 4.3, distance: "0.9 km", open: true, image: "📠" },
  { name: "PrintPro", address: "T Nagar, Chennai", services: "Lamination, Binding", rating: 4.2, distance: "1.1 km", open: true, image: "📝" },
  { name: "Xpress Docs", address: "Adyar, Chennai", services: "Color Print, Scan", rating: 4.5, distance: "0.7 km", open: false, image: "📂" },
  { name: "Copy & Go", address: "Tambaram, Chennai", services: "Printing, Xerox", rating: 4.0, distance: "2.0 km", open: true, image: "✂" },
  { name: "PrintXpress", address: "Velachery, Chennai", services: "Scanning, Xerox", rating: 4.6, distance: "1.6 km", open: true, image: "🖨" },
  { name: "Xerox Point", address: "Porur, Chennai", services: "Binding, Copy", rating: 4.1, distance: "3.3 km", open: true, image: "📑" },
  { name: "QuickCopy", address: "Guindy, Chennai", services: "Print, Scan", rating: 4.4, distance: "1.0 km", open: false, image: "⚡" },
  { name: "Digital Prints", address: "Mylapore, Chennai", services: "Color Print, Laminating", rating: 4.8, distance: "1.7 km", open: true, image: "💻" },
  { name: "Express Prints", address: "Anna Nagar, Chennai", services: "Xerox, Scanning", rating: 4.3, distance: "0.8 km", open: true, image: "📠" },
  { name: "Fast Copy", address: "T Nagar, Chennai", services: "Printing, Copy", rating: 4.2, distance: "1.2 km", open: true, image: "📝" },
  { name: "Print Hub", address: "Adyar, Chennai", services: "Scan, Color Print", rating: 4.5, distance: "0.6 km", open: false, image: "📂" },
  { name: "Copy Center", address: "Tambaram, Chennai", services: "Xerox, Laminating", rating: 4.0, distance: "2.2 km", open: true, image: "✂" },
  { name: "Smart Copy Corner", address: "Velachery, Chennai", services: "Printing, Scan, Binding", rating: 4.3, distance: "1.3 km", open: true, image: "🖨" },
  { name: "Elite Print House", address: "Porur, Chennai", services: "Photo Copy, Color Print", rating: 4.4, distance: "3.0 km", open: true, image: "📘" },
  { name: "Modern Xerox Studio", address: "Guindy, Chennai", services: "Scan, Binding", rating: 4.5, distance: "1.0 km", open: false, image: "🖱" },
  { name: "DocuFast", address: "Mylapore, Chennai", services: "Online Print, Scanning", rating: 4.7, distance: "1.6 km", open: true, image: "🧾" },
  { name: "PaperWorks", address: "Anna Nagar, Chennai", services: "Copy, Lamination", rating: 4.2, distance: "0.9 km", open: true, image: "📜" },
  { name: "QuickDoc", address: "T Nagar, Chennai", services: "Xerox, Scan, Print", rating: 4.3, distance: "1.1 km", open: true, image: "📋" },
  { name: "Star Print Zone", address: "Adyar, Chennai", services: "Binding, Copy, Color Print", rating: 4.6, distance: "0.7 km", open: true, image: "💫" },
  { name: "CopyCity", address: "Tambaram, Chennai", services: "Xerox, Lamination", rating: 4.1, distance: "2.4 km", open: true, image: "🏙" },
  { name: "UltraPrint", address: "Velachery, Chennai", services: "Printing, Copy, Scan", rating: 4.7, distance: "1.5 km", open: true, image: "🖨" },
  { name: "Mega Docs", address: "Guindy, Chennai", services: "Printing, Online Services", rating: 4.5, distance: "1.1 km", open: true, image: "💾" },
];

export default function Shops() {
  const [filterPlace, setFilterPlace] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredShops = shops.filter((shop) => {
    const matchesPlace = filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
    const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) || shop.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlace && matchesSearch;
  });

  const shopsToShow = filteredShops.slice(0, visibleCount);
  const isShowingAll = visibleCount >= filteredShops.length;
  const canShowMore = filteredShops.length > 6;

  const handleShowMore = () => setVisibleCount(isShowingAll ? 6 : Math.min(visibleCount + 6, filteredShops.length));

  useEffect(() => setVisibleCount(6), [filterPlace, searchQuery]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 relative overflow-hidden">
      {/* Background Decorative Lights */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-2xl mb-6 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
            <span className="text-4xl">🖨</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Nearby Xerox Shops
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
            Find the best printing & xerox services near you with live ratings and distance
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 p-6 mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="relative w-full">
              <span className="absolute left-4 top-3 text-gray-400 text-lg">🔍</span>
              <input
                type="text"
                placeholder="Search by shop name or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-400 bg-white/50 backdrop-blur-sm"
              />
            </div>

            <select
              value={filterPlace}
              onChange={(e) => setFilterPlace(e.target.value)}
              className="px-6 py-3 rounded-xl border border-gray-200 shadow-sm bg-white focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
            >
              <option value="All">📍 All Areas</option>
              <option value="Anna Nagar">🏘 Anna Nagar</option>
              <option value="T Nagar">🛍 T Nagar</option>
              <option value="Adyar">🌊 Adyar</option>
              <option value="Tambaram">🚉 Tambaram</option>
              <option value="Velachery">🏢 Velachery</option>
              <option value="Porur">🌉 Porur</option>
              <option value="Guindy">🏭 Guindy</option>
              <option value="Mylapore">🛕 Mylapore</option>
            </select>
          </div>
        </div>

        {/* Shops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopsToShow.map((shop, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-1">{shop.name}</h3>
                  <p className="text-sm opacity-90">{shop.distance}</p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    shop.open ? "bg-green-500/90" : "bg-red-500/90"
                  }`}
                >
                  {shop.open ? "Open" : "Closed"}
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-2">📍 {shop.address}</p>
                <p className="text-gray-600 text-sm mb-4">{shop.services}</p>

                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-bold text-xl">{shop.rating}⭐</div>
                  <Link
                    to="/service"
                    className={`px-5 py-2 rounded-lg text-white font-semibold ${
                      shop.open
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {shop.open ? "Book Now" : "Closed"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {canShowMore && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMore}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
            >
              {isShowingAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
