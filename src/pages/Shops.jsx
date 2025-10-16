// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";

// // // // 🏪 30 Dummy Shops Data
// // // const shops = [
// // //   { name: "Smart Xerox Center", address: "Anna Nagar, Chennai", services: "Xerox, Printing, Scanning", rating: 4.5, distance: "0.8 km", open: true, image: "🖨" },
// // //   { name: "Speed Print & Xerox", address: "T Nagar, Chennai", services: "Color Print, Lamination", rating: 4.2, distance: "1.2 km", open: true, image: "📄" },
// // //   { name: "Copy World", address: "Adyar, Chennai", services: "Xerox, Binding, Printout", rating: 4.7, distance: "0.5 km", open: false, image: "📑" },
// // //   { name: "Express Xerox Point", address: "Tambaram, Chennai", services: "Online Applications, Printouts", rating: 4.0, distance: "2.1 km", open: true, image: "⚡" },
// // //   { name: "Quick Print Hub", address: "Velachery, Chennai", services: "Xerox, Color Print, Scan", rating: 4.6, distance: "1.5 km", open: true, image: "🏪" },
// // //   { name: "Bright Xerox Shop", address: "Porur, Chennai", services: "Xerox, Photo Copy, Printing", rating: 4.1, distance: "3.2 km", open: true, image: "✨" },
// // //   { name: "Green Print & Copy", address: "Guindy, Chennai", services: "Xerox, Online Services", rating: 4.4, distance: "0.9 km", open: false, image: "🌿" },
// // //   { name: "Digital Doc Center", address: "Mylapore, Chennai", services: "Scanning, Lamination, Printing", rating: 4.8, distance: "1.8 km", open: true, image: "💻" },
// // //   { name: "Speedy Copy", address: "Anna Nagar, Chennai", services: "Xerox, Printing", rating: 4.3, distance: "0.9 km", open: true, image: "📠" },
// // //   { name: "PrintPro", address: "T Nagar, Chennai", services: "Lamination, Binding", rating: 4.2, distance: "1.1 km", open: true, image: "📝" },
// // //   { name: "Xpress Docs", address: "Adyar, Chennai", services: "Color Print, Scan", rating: 4.5, distance: "0.7 km", open: false, image: "📂" },
// // //   { name: "Copy & Go", address: "Tambaram, Chennai", services: "Printing, Xerox", rating: 4.0, distance: "2.0 km", open: true, image: "✂" },
// // //   { name: "PrintXpress", address: "Velachery, Chennai", services: "Scanning, Xerox", rating: 4.6, distance: "1.6 km", open: true, image: "🖨" },
// // //   { name: "Xerox Point", address: "Porur, Chennai", services: "Binding, Copy", rating: 4.1, distance: "3.3 km", open: true, image: "📑" },
// // //   { name: "QuickCopy", address: "Guindy, Chennai", services: "Print, Scan", rating: 4.4, distance: "1.0 km", open: false, image: "⚡" },
// // //   { name: "Digital Prints", address: "Mylapore, Chennai", services: "Color Print, Laminating", rating: 4.8, distance: "1.7 km", open: true, image: "💻" },
// // //   { name: "Express Prints", address: "Anna Nagar, Chennai", services: "Xerox, Scanning", rating: 4.3, distance: "0.8 km", open: true, image: "📠" },
// // //   { name: "Fast Copy", address: "T Nagar, Chennai", services: "Printing, Copy", rating: 4.2, distance: "1.2 km", open: true, image: "📝" },
// // //   { name: "Print Hub", address: "Adyar, Chennai", services: "Scan, Color Print", rating: 4.5, distance: "0.6 km", open: false, image: "📂" },
// // //   { name: "Copy Center", address: "Tambaram, Chennai", services: "Xerox, Laminating", rating: 4.0, distance: "2.2 km", open: true, image: "✂" },
// // //   { name: "Smart Copy Corner", address: "Velachery, Chennai", services: "Printing, Scan, Binding", rating: 4.3, distance: "1.3 km", open: true, image: "🖨" },
// // //   { name: "Elite Print House", address: "Porur, Chennai", services: "Photo Copy, Color Print", rating: 4.4, distance: "3.0 km", open: true, image: "📘" },
// // //   { name: "Modern Xerox Studio", address: "Guindy, Chennai", services: "Scan, Binding", rating: 4.5, distance: "1.0 km", open: false, image: "🖱" },
// // //   { name: "DocuFast", address: "Mylapore, Chennai", services: "Online Print, Scanning", rating: 4.7, distance: "1.6 km", open: true, image: "🧾" },
// // //   { name: "PaperWorks", address: "Anna Nagar, Chennai", services: "Copy, Lamination", rating: 4.2, distance: "0.9 km", open: true, image: "📜" },
// // //   { name: "QuickDoc", address: "T Nagar, Chennai", services: "Xerox, Scan, Print", rating: 4.3, distance: "1.1 km", open: true, image: "📋" },
// // //   { name: "Star Print Zone", address: "Adyar, Chennai", services: "Binding, Copy, Color Print", rating: 4.6, distance: "0.7 km", open: true, image: "💫" },
// // //   { name: "CopyCity", address: "Tambaram, Chennai", services: "Xerox, Lamination", rating: 4.1, distance: "2.4 km", open: true, image: "🏙" },
// // //   { name: "UltraPrint", address: "Velachery, Chennai", services: "Printing, Copy, Scan", rating: 4.7, distance: "1.5 km", open: true, image: "🖨" },
// // //   { name: "Mega Docs", address: "Guindy, Chennai", services: "Printing, Online Services", rating: 4.5, distance: "1.1 km", open: true, image: "💾" },
// // // ];

// // // export default function Shops() {
// // //   const [filterPlace, setFilterPlace] = useState("All");
// // //   const [searchQuery, setSearchQuery] = useState("");

// // //   // 🔍 Filter by place + search
// // //   const filteredShops = shops.filter((shop) => {
// // //     const matchesPlace =
// // //       filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
// // //     const matchesSearch =
// // //       shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //       shop.address.toLowerCase().includes(searchQuery.toLowerCase());
// // //     return matchesPlace && matchesSearch;
// // //   });

// // //   return (
// // //     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 relative overflow-hidden">
// // //       {/* Background decorative elements */}
// // //       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
// // //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

// // //       <div className="max-w-7xl mx-auto relative z-10">
// // //         {/* Enhanced Header */}
// // //         <div className="text-center mb-12">
// // //           <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-2xl mb-6 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
// // //             <span className="text-4xl">🖨</span>
// // //           </div>
// // //           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// // //             Nearby Xerox Shops
// // //           </h2>
// // //           <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
// // //             Discover the best printing & xerox services near you with real-time availability and ratings
// // //           </p>
// // //         </div>

// // //         {/* Enhanced Filters Section */}
// // //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 p-6 mb-10">
// // //           <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
// // //             <div className="flex-1 w-full">
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <span className="text-gray-400 text-lg">🔍</span>
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search by shop name or location..."
// // //                   value={searchQuery}
// // //                   onChange={(e) => setSearchQuery(e.target.value)}
// // //                   className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
// // //                 />
// // //               </div>
// // //             </div>

// // //             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
// // //               <select
// // //                 value={filterPlace}
// // //                 onChange={(e) => setFilterPlace(e.target.value)}
// // //                 className="px-6 py-4 rounded-xl border border-gray-200 shadow-sm bg-white focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all duration-200 backdrop-blur-sm"
// // //               >
// // //                 <option value="All">📍 All Areas</option>
// // //                 <option value="Anna Nagar">🏘 Anna Nagar</option>
// // //                 <option value="T Nagar">🛍 T Nagar</option>
// // //                 <option value="Adyar">🌊 Adyar</option>
// // //                 <option value="Tambaram">🚉 Tambaram</option>
// // //                 <option value="Velachery">🏢 Velachery</option>
// // //                 <option value="Porur">🌉 Porur</option>
// // //                 <option value="Guindy">🏭 Guindy</option>
// // //                 <option value="Mylapore">🛕 Mylapore</option>
// // //               </select>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Results Counter */}
// // //         <div className="flex items-center justify-between mb-6">
// // //           <div className="text-gray-700">
// // //             <span className="font-semibold text-blue-600 text-lg">{filteredShops.length}</span> shops found in{" "}
// // //             <span className="font-semibold text-blue-600">
// // //               {filterPlace === "All" ? "Chennai" : filterPlace}
// // //             </span>
// // //           </div>
// // //           <div className="text-sm text-gray-500">
// // //             Sorted by: <span className="text-blue-600 font-medium">Distance</span>
// // //           </div>
// // //         </div>

// // //         {/* IMAGE-INSPIRED CARD DESIGN */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
// // //           {filteredShops.map((shop, idx) => (
// // //             <div
// // //               key={idx}
// // //               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
// // //             >
// // //               {/* Card Header with Shop Name */}
// // //               <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
// // //                 <h3 className="text-xl font-bold mb-2">{shop.name}</h3>
// // //                 <div className="flex items-center justify-between">
// // //                   <div className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-full">
// // //                     {shop.distance}
// // //                   </div>
// // //                   <div className={`px-3 py-1 rounded-full text-sm font-medium ${
// // //                     shop.open ? "bg-green-500/90" : "bg-red-500/90"
// // //                   }`}>
// // //                     {shop.open ? "Open" : "Closed"}
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Card Content */}
// // //               <div className="p-6">
// // //                 {/* Address Section */}
// // //                 <div className="mb-4">
// // //                   <div className="flex items-start space-x-2 text-gray-700">
// // //                     <span className="text-gray-500 mt-1">📍</span>
// // //                     <div>
// // //                       <p className="font-medium">{shop.address.split(", ")[0]}</p>
// // //                       <p className="text-gray-600">{shop.address.split(", ")[1]}</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Services Section */}
// // //                 <div className="mb-6">
// // //                   <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
// // //                   <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
// // //                     <p className="text-gray-700 text-sm leading-relaxed">{shop.services}</p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Rating and Action Section */}
// // //                 <div className="flex items-center justify-between border-t border-gray-200 pt-4">
// // //                   <div className="flex items-center space-x-2">
// // //                     <span className="text-2xl font-bold text-blue-600">{shop.rating}</span>
// // //                     <div className="flex items-center space-x-1">
// // //                       <span className="text-yellow-500">⭐</span>
// // //                       <span className="text-sm text-gray-600">Rating</span>
// // //                     </div>
// // //                   </div>

// // //                   <Link to={"/service"}
// // //                     className={`px-6 py-2 rounded-lg font-semibold text-white transition-all duration-200 ${
// // //                       shop.open
// // //                         ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
// // //                         : "bg-gray-400 cursor-not-allowed"
// // //                     }`}
// // //                     disabled={!shop.open}
// // //                   >
// // //                     {shop.open ? "Book Now" : "Closed"}
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Enhanced Footer */}
// // //         <div className="text-center py-8 border-t border-gray-200/60">
// // //           <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
// // //             <div className="text-gray-600 mb-4 sm:mb-0">
// // //               <span className="font-semibold text-blue-600">{filteredShops.length}</span> shops available • 
// // //               <span className="text-green-600 font-semibold ml-2">
// // //                 {shops.filter(shop => shop.open).length} open now
// // //               </span>
// // //             </div>

// // //             <div className="flex items-center space-x-2 text-gray-500">
// // //               <span>🖨</span>
// // //               <span className="text-sm">Quality Xerox Services in Chennai</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";

// // // // 🏪 30 Dummy Shops Data
// // // const shops = [
// // //   { name: "Smart Xerox Center", address: "Anna Nagar, Chennai", services: "Xerox, Printing, Scanning", rating: 4.5, distance: "0.8 km", open: true, image: "🖨" },
// // //   { name: "Speed Print & Xerox", address: "T Nagar, Chennai", services: "Color Print, Lamination", rating: 4.2, distance: "1.2 km", open: true, image: "📄" },
// // //   { name: "Copy World", address: "Adyar, Chennai", services: "Xerox, Binding, Printout", rating: 4.7, distance: "0.5 km", open: false, image: "📑" },
// // //   { name: "Express Xerox Point", address: "Tambaram, Chennai", services: "Online Applications, Printouts", rating: 4.0, distance: "2.1 km", open: true, image: "⚡" },
// // //   { name: "Quick Print Hub", address: "Velachery, Chennai", services: "Xerox, Color Print, Scan", rating: 4.6, distance: "1.5 km", open: true, image: "🏪" },
// // //   { name: "Bright Xerox Shop", address: "Porur, Chennai", services: "Xerox, Photo Copy, Printing", rating: 4.1, distance: "3.2 km", open: true, image: "✨" },
// // //   { name: "Green Print & Copy", address: "Guindy, Chennai", services: "Xerox, Online Services", rating: 4.4, distance: "0.9 km", open: false, image: "🌿" },
// // //   { name: "Digital Doc Center", address: "Mylapore, Chennai", services: "Scanning, Lamination, Printing", rating: 4.8, distance: "1.8 km", open: true, image: "💻" },
// // //   { name: "Speedy Copy", address: "Anna Nagar, Chennai", services: "Xerox, Printing", rating: 4.3, distance: "0.9 km", open: true, image: "📠" },
// // //   { name: "PrintPro", address: "T Nagar, Chennai", services: "Lamination, Binding", rating: 4.2, distance: "1.1 km", open: true, image: "📝" },
// // //   { name: "Xpress Docs", address: "Adyar, Chennai", services: "Color Print, Scan", rating: 4.5, distance: "0.7 km", open: false, image: "📂" },
// // //   { name: "Copy & Go", address: "Tambaram, Chennai", services: "Printing, Xerox", rating: 4.0, distance: "2.0 km", open: true, image: "✂" },
// // //   { name: "PrintXpress", address: "Velachery, Chennai", services: "Scanning, Xerox", rating: 4.6, distance: "1.6 km", open: true, image: "🖨" },
// // //   { name: "Xerox Point", address: "Porur, Chennai", services: "Binding, Copy", rating: 4.1, distance: "3.3 km", open: true, image: "📑" },
// // //   { name: "QuickCopy", address: "Guindy, Chennai", services: "Print, Scan", rating: 4.4, distance: "1.0 km", open: false, image: "⚡" },
// // //   { name: "Digital Prints", address: "Mylapore, Chennai", services: "Color Print, Laminating", rating: 4.8, distance: "1.7 km", open: true, image: "💻" },
// // //   { name: "Express Prints", address: "Anna Nagar, Chennai", services: "Xerox, Scanning", rating: 4.3, distance: "0.8 km", open: true, image: "📠" },
// // //   { name: "Fast Copy", address: "T Nagar, Chennai", services: "Printing, Copy", rating: 4.2, distance: "1.2 km", open: true, image: "📝" },
// // //   { name: "Print Hub", address: "Adyar, Chennai", services: "Scan, Color Print", rating: 4.5, distance: "0.6 km", open: false, image: "📂" },
// // //   { name: "Copy Center", address: "Tambaram, Chennai", services: "Xerox, Laminating", rating: 4.0, distance: "2.2 km", open: true, image: "✂" },
// // //   { name: "Smart Copy Corner", address: "Velachery, Chennai", services: "Printing, Scan, Binding", rating: 4.3, distance: "1.3 km", open: true, image: "🖨" },
// // //   { name: "Elite Print House", address: "Porur, Chennai", services: "Photo Copy, Color Print", rating: 4.4, distance: "3.0 km", open: true, image: "📘" },
// // //   { name: "Modern Xerox Studio", address: "Guindy, Chennai", services: "Scan, Binding", rating: 4.5, distance: "1.0 km", open: false, image: "🖱" },
// // //   { name: "DocuFast", address: "Mylapore, Chennai", services: "Online Print, Scanning", rating: 4.7, distance: "1.6 km", open: true, image: "🧾" },
// // //   { name: "PaperWorks", address: "Anna Nagar, Chennai", services: "Copy, Lamination", rating: 4.2, distance: "0.9 km", open: true, image: "📜" },
// // //   { name: "QuickDoc", address: "T Nagar, Chennai", services: "Xerox, Scan, Print", rating: 4.3, distance: "1.1 km", open: true, image: "📋" },
// // //   { name: "Star Print Zone", address: "Adyar, Chennai", services: "Binding, Copy, Color Print", rating: 4.6, distance: "0.7 km", open: true, image: "💫" },
// // //   { name: "CopyCity", address: "Tambaram, Chennai", services: "Xerox, Lamination", rating: 4.1, distance: "2.4 km", open: true, image: "🏙" },
// // //   { name: "UltraPrint", address: "Velachery, Chennai", services: "Printing, Copy, Scan", rating: 4.7, distance: "1.5 km", open: true, image: "🖨" },
// // //   { name: "Mega Docs", address: "Guindy, Chennai", services: "Printing, Online Services", rating: 4.5, distance: "1.1 km", open: true, image: "💾" },
// // // ];

// // // export default function Shops() {
// // //   const [filterPlace, setFilterPlace] = useState("All");
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [visibleCount, setVisibleCount] = useState(6); // Start with 6 shops

// // //   // 🔍 Filter by place + search
// // //   const filteredShops = shops.filter((shop) => {
// // //     const matchesPlace =
// // //       filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
// // //     const matchesSearch =
// // //       shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //       shop.address.toLowerCase().includes(searchQuery.toLowerCase());
// // //     return matchesPlace && matchesSearch;
// // //   });

// // //   // Get only the visible shops based on visibleCount
// // //   const visibleShops = filteredShops.slice(0, visibleCount);

// // //   // Function to load more shops
// // //   const loadMoreShops = () => {
// // //     setVisibleCount(prevCount => prevCount + 6); // Load 6 more shops
// // //   };

// // //   // Reset visible count when filters change
// // //   React.useEffect(() => {
// // //     setVisibleCount(6);
// // //   }, [filterPlace, searchQuery]);

// // //   return (
// // //     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 relative overflow-hidden">
// // //       {/* Background decorative elements */}
// // //       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
// // //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

// // //       <div className="max-w-7xl mx-auto relative z-10">
// // //         {/* Enhanced Header */}
// // //         <div className="text-center mb-12">
// // //           <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-2xl mb-6 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
// // //             <span className="text-4xl">🖨</span>
// // //           </div>
// // //           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// // //             Nearby Xerox Shops
// // //           </h2>
// // //           <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
// // //             Discover the best printing & xerox services near you with real-time availability and ratings
// // //           </p>
// // //         </div>

// // //         {/* Enhanced Filters Section */}
// // //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 p-6 mb-10">
// // //           <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
// // //             <div className="flex-1 w-full">
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <span className="text-gray-400 text-lg">🔍</span>
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search by shop name or location..."
// // //                   value={searchQuery}
// // //                   onChange={(e) => setSearchQuery(e.target.value)}
// // //                   className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
// // //                 />
// // //               </div>
// // //             </div>

// // //             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
// // //               <select
// // //                 value={filterPlace}
// // //                 onChange={(e) => setFilterPlace(e.target.value)}
// // //                 className="px-6 py-4 rounded-xl border border-gray-200 shadow-sm bg-white focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all duration-200 backdrop-blur-sm"
// // //               >
// // //                 <option value="All">📍 All Areas</option>
// // //                 <option value="Anna Nagar">🏘 Anna Nagar</option>
// // //                 <option value="T Nagar">🛍 T Nagar</option>
// // //                 <option value="Adyar">🌊 Adyar</option>
// // //                 <option value="Tambaram">🚉 Tambaram</option>
// // //                 <option value="Velachery">🏢 Velachery</option>
// // //                 <option value="Porur">🌉 Porur</option>
// // //                 <option value="Guindy">🏭 Guindy</option>
// // //                 <option value="Mylapore">🛕 Mylapore</option>
// // //               </select>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Results Counter */}
// // //         <div className="flex items-center justify-between mb-6">
// // //           <div className="text-gray-700">
// // //             <span className="font-semibold text-blue-600 text-lg">{filteredShops.length}</span> shops found in{" "}
// // //             <span className="font-semibold text-blue-600">
// // //               {filterPlace === "All" ? "Chennai" : filterPlace}
// // //             </span>
// // //             {filteredShops.length > visibleCount && (
// // //               <span className="text-gray-500 ml-2">
// // //                 (showing {visibleCount})
// // //               </span>
// // //             )}
// // //           </div>
// // //           <div className="text-sm text-gray-500">
// // //             Sorted by: <span className="text-blue-600 font-medium">Distance</span>
// // //           </div>
// // //         </div>

// // //         {/* IMAGE-INSPIRED CARD DESIGN */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// // //           {visibleShops.map((shop, idx) => (
// // //             <div
// // //               key={idx}
// // //               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
// // //             >
// // //               {/* Card Header with Shop Name */}
// // //               <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
// // //                 <h3 className="text-xl font-bold mb-2">{shop.name}</h3>
// // //                 <div className="flex items-center justify-between">
// // //                   <div className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-full">
// // //                     {shop.distance}
// // //                   </div>
// // //                   <div className={`px-3 py-1 rounded-full text-sm font-medium ${
// // //                     shop.open ? "bg-green-500/90" : "bg-red-500/90"
// // //                   }`}>
// // //                     {shop.open ? "Open" : "Closed"}
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Card Content */}
// // //               <div className="p-6">
// // //                 {/* Address Section */}
// // //                 <div className="mb-4">
// // //                   <div className="flex items-start space-x-2 text-gray-700">
// // //                     <span className="text-gray-500 mt-1">📍</span>
// // //                     <div>
// // //                       <p className="font-medium">{shop.address.split(", ")[0]}</p>
// // //                       <p className="text-gray-600">{shop.address.split(", ")[1]}</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Services Section */}
// // //                 <div className="mb-6">
// // //                   <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
// // //                   <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
// // //                     <p className="text-gray-700 text-sm leading-relaxed">{shop.services}</p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Rating and Action Section */}
// // //                 <div className="flex items-center justify-between border-t border-gray-200 pt-4">
// // //                   <div className="flex items-center space-x-2">
// // //                     <span className="text-2xl font-bold text-blue-600">{shop.rating}</span>
// // //                     <div className="flex items-center space-x-1">
// // //                       <span className="text-yellow-500">⭐</span>
// // //                       <span className="text-sm text-gray-600">Rating</span>
// // //                     </div>
// // //                   </div>

// // //                   <Link to={"/service"}
// // //                     className={`px-6 py-2 rounded-lg font-semibold text-white transition-all duration-200 ${
// // //                       shop.open
// // //                         ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
// // //                         : "bg-gray-400 cursor-not-allowed"
// // //                     }`}
// // //                     disabled={!shop.open}
// // //                   >
// // //                     {shop.open ? "Book Now" : "Closed"}
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* View More Button */}
// // //         {visibleCount < filteredShops.length && (
// // //           <div className="text-center mb-12">
// // //             <button
// // //               onClick={loadMoreShops}
// // //               className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 hover:from-blue-600 hover:to-indigo-600"
// // //             >
// // //               View More Shops ({filteredShops.length - visibleCount} remaining)
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* Enhanced Footer */}
// // //         <div className="text-center py-8 border-t border-gray-200/60">
// // //           <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
// // //             <div className="text-gray-600 mb-4 sm:mb-0">
// // //               <span className="font-semibold text-blue-600">{filteredShops.length}</span> shops available • 
// // //               <span className="text-green-600 font-semibold ml-2">
// // //                 {shops.filter(shop => shop.open).length} open now
// // //               </span>
// // //             </div>

// // //             <div className="flex items-center space-x-2 text-gray-500">
// // //               <span>🖨</span>
// // //               <span className="text-sm">Quality Xerox Services in Chennai</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";

// // // // 🏪 30 Dummy Shops Data
// // // const shops = [
// // //   { name: "Smart Xerox Center", address: "Anna Nagar, Chennai", services: "Xerox, Printing, Scanning", rating: 4.5, distance: "0.8 km", open: true, image: "🖨" },
// // //   { name: "Speed Print & Xerox", address: "T Nagar, Chennai", services: "Color Print, Lamination", rating: 4.2, distance: "1.2 km", open: true, image: "📄" },
// // //   { name: "Copy World", address: "Adyar, Chennai", services: "Xerox, Binding, Printout", rating: 4.7, distance: "0.5 km", open: false, image: "📑" },
// // //   { name: "Express Xerox Point", address: "Tambaram, Chennai", services: "Online Applications, Printouts", rating: 4.0, distance: "2.1 km", open: true, image: "⚡" },
// // //   { name: "Quick Print Hub", address: "Velachery, Chennai", services: "Xerox, Color Print, Scan", rating: 4.6, distance: "1.5 km", open: true, image: "🏪" },
// // //   { name: "Bright Xerox Shop", address: "Porur, Chennai", services: "Xerox, Photo Copy, Printing", rating: 4.1, distance: "3.2 km", open: true, image: "✨" },
// // //   { name: "Green Print & Copy", address: "Guindy, Chennai", services: "Xerox, Online Services", rating: 4.4, distance: "0.9 km", open: false, image: "🌿" },
// // //   { name: "Digital Doc Center", address: "Mylapore, Chennai", services: "Scanning, Lamination, Printing", rating: 4.8, distance: "1.8 km", open: true, image: "💻" },
// // //   { name: "Speedy Copy", address: "Anna Nagar, Chennai", services: "Xerox, Printing", rating: 4.3, distance: "0.9 km", open: true, image: "📠" },
// // //   { name: "PrintPro", address: "T Nagar, Chennai", services: "Lamination, Binding", rating: 4.2, distance: "1.1 km", open: true, image: "📝" },
// // //   { name: "Xpress Docs", address: "Adyar, Chennai", services: "Color Print, Scan", rating: 4.5, distance: "0.7 km", open: false, image: "📂" },
// // //   { name: "Copy & Go", address: "Tambaram, Chennai", services: "Printing, Xerox", rating: 4.0, distance: "2.0 km", open: true, image: "✂" },
// // //   { name: "PrintXpress", address: "Velachery, Chennai", services: "Scanning, Xerox", rating: 4.6, distance: "1.6 km", open: true, image: "🖨" },
// // //   { name: "Xerox Point", address: "Porur, Chennai", services: "Binding, Copy", rating: 4.1, distance: "3.3 km", open: true, image: "📑" },
// // //   { name: "QuickCopy", address: "Guindy, Chennai", services: "Print, Scan", rating: 4.4, distance: "1.0 km", open: false, image: "⚡" },
// // //   { name: "Digital Prints", address: "Mylapore, Chennai", services: "Color Print, Laminating", rating: 4.8, distance: "1.7 km", open: true, image: "💻" },
// // //   { name: "Express Prints", address: "Anna Nagar, Chennai", services: "Xerox, Scanning", rating: 4.3, distance: "0.8 km", open: true, image: "📠" },
// // //   { name: "Fast Copy", address: "T Nagar, Chennai", services: "Printing, Copy", rating: 4.2, distance: "1.2 km", open: true, image: "📝" },
// // //   { name: "Print Hub", address: "Adyar, Chennai", services: "Scan, Color Print", rating: 4.5, distance: "0.6 km", open: false, image: "📂" },
// // //   { name: "Copy Center", address: "Tambaram, Chennai", services: "Xerox, Laminating", rating: 4.0, distance: "2.2 km", open: true, image: "✂" },
// // //   { name: "Smart Copy Corner", address: "Velachery, Chennai", services: "Printing, Scan, Binding", rating: 4.3, distance: "1.3 km", open: true, image: "🖨" },
// // //   { name: "Elite Print House", address: "Porur, Chennai", services: "Photo Copy, Color Print", rating: 4.4, distance: "3.0 km", open: true, image: "📘" },
// // //   { name: "Modern Xerox Studio", address: "Guindy, Chennai", services: "Scan, Binding", rating: 4.5, distance: "1.0 km", open: false, image: "🖱" },
// // //   { name: "DocuFast", address: "Mylapore, Chennai", services: "Online Print, Scanning", rating: 4.7, distance: "1.6 km", open: true, image: "🧾" },
// // //   { name: "PaperWorks", address: "Anna Nagar, Chennai", services: "Copy, Lamination", rating: 4.2, distance: "0.9 km", open: true, image: "📜" },
// // //   { name: "QuickDoc", address: "T Nagar, Chennai", services: "Xerox, Scan, Print", rating: 4.3, distance: "1.1 km", open: true, image: "📋" },
// // //   { name: "Star Print Zone", address: "Adyar, Chennai", services: "Binding, Copy, Color Print", rating: 4.6, distance: "0.7 km", open: true, image: "💫" },
// // //   { name: "CopyCity", address: "Tambaram, Chennai", services: "Xerox, Lamination", rating: 4.1, distance: "2.4 km", open: true, image: "🏙" },
// // //   { name: "UltraPrint", address: "Velachery, Chennai", services: "Printing, Copy, Scan", rating: 4.7, distance: "1.5 km", open: true, image: "🖨" },
// // //   { name: "Mega Docs", address: "Guindy, Chennai", services: "Printing, Online Services", rating: 4.5, distance: "1.1 km", open: true, image: "💾" },
// // // ];

// // // export default function Shops() {
// // //   const [filterPlace, setFilterPlace] = useState("All");
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [visibleCount, setVisibleCount] = useState(6);
// // //   const [activeSort, setActiveSort] = useState("distance");

// // //   // 🔍 Filter by place + search
// // //   const filteredShops = shops.filter((shop) => {
// // //     const matchesPlace =
// // //       filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
// // //     const matchesSearch =
// // //       shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //       shop.address.toLowerCase().includes(searchQuery.toLowerCase());
// // //     return matchesPlace && matchesSearch;
// // //   });

// // //   // Sort shops based on active sort
// // //   const sortedShops = [...filteredShops].sort((a, b) => {
// // //     switch (activeSort) {
// // //       case "rating":
// // //         return b.rating - a.rating;
// // //       case "name":
// // //         return a.name.localeCompare(b.name);
// // //       case "distance":
// // //         return parseFloat(a.distance) - parseFloat(b.distance);
// // //       default:
// // //         return 0;
// // //     }
// // //   });

// // //   // Get only the visible shops
// // //   const visibleShops = sortedShops.slice(0, visibleCount);

// // //   const loadMoreShops = () => {
// // //     setVisibleCount(prevCount => prevCount + 6);
// // //   };

// // //   React.useEffect(() => {
// // //     setVisibleCount(6);
// // //   }, [filterPlace, searchQuery, activeSort]);

// // //   return (
// // //     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-12 px-4 relative overflow-hidden">
// // //       {/* Animated Background Elements */}
// // //       <div className="absolute inset-0 overflow-hidden">
// // //         <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
// // //         <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
// // //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
// // //       </div>

// // //       {/* Floating Particles */}
// // //       <div className="absolute inset-0">
// // //         {[...Array(15)].map((_, i) => (
// // //           <div
// // //             key={i}
// // //             className="absolute w-2 h-2 bg-blue-300/30 rounded-full animate-float"
// // //             style={{
// // //               left: `${Math.random() * 100}%`,
// // //               top: `${Math.random() * 100}%`,
// // //               animationDelay: `${Math.random() * 5}s`,
// // //               animationDuration: `${15 + Math.random() * 10}s`
// // //             }}
// // //           ></div>
// // //         ))}
// // //       </div>

// // //       <div className="max-w-7xl mx-auto relative z-10">
// // //         {/* Header Section */}
// // //         <div className="text-center mb-16">
// // //           <div className="inline-flex items-center justify-center w-28 h-28 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl mb-8 border border-blue-200 transform hover:scale-105 transition-all duration-500 hover:rotate-3">
// // //             <span className="text-5xl">🖨️</span>
// // //           </div>
// // //           <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
// // //             Print & Copy Hub
// // //           </h1>
// // //           <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
// // //             Discover premium printing services with <span className="text-blue-600 font-semibold">real-time availability</span> and <span className="text-cyan-600 font-semibold">expert ratings</span>
// // //           </p>
// // //         </div>

// // //         {/* Search & Filter Section */}
// // //         <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-200 p-8 mb-12">
// // //           <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
// // //             {/* Search Bar */}
// // //             <div className="flex-1 w-full">
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
// // //                   <span className="text-blue-500 text-xl">🔍</span>
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search shops by name or location..."
// // //                   value={searchQuery}
// // //                   onChange={(e) => setSearchQuery(e.target.value)}
// // //                   className="w-full pl-12 pr-6 py-5 rounded-2xl border border-blue-200 bg-white text-gray-800 placeholder-gray-500 shadow-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none transition-all duration-300"
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Location Filter */}
// // //             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
// // //               <select
// // //                 value={filterPlace}
// // //                 onChange={(e) => setFilterPlace(e.target.value)}
// // //                 className="px-6 py-5 rounded-2xl border border-blue-200 bg-white text-gray-800 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 shadow-lg"
// // //               >
// // //                 <option value="All">📍 All Areas</option>
// // //                 <option value="Anna Nagar">🏘 Anna Nagar</option>
// // //                 <option value="T Nagar">🛍 T Nagar</option>
// // //                 <option value="Adyar">🌊 Adyar</option>
// // //                 <option value="Tambaram">🚉 Tambaram</option>
// // //                 <option value="Velachery">🏢 Velachery</option>
// // //                 <option value="Porur">🌉 Porur</option>
// // //                 <option value="Guindy">🏭 Guindy</option>
// // //                 <option value="Mylapore">🛕 Mylapore</option>
// // //               </select>

// // //               {/* Sort Options */}
// // //               <div className="flex gap-2">
// // //                 {["distance", "rating", "name"].map((sortType) => (
// // //                   <button
// // //                     key={sortType}
// // //                     onClick={() => setActiveSort(sortType)}
// // //                     className={`px-4 py-2 rounded-xl border transition-all duration-300 shadow-lg capitalize ${
// // //                       activeSort === sortType
// // //                         ? "bg-blue-500 border-blue-400 text-white"
// // //                         : "bg-white border-blue-200 text-gray-700 hover:bg-blue-50"
// // //                     }`}
// // //                   >
// // //                     {sortType}
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Stats Bar */}
// // //         <div className="flex items-center justify-between mb-8 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-blue-200 shadow-lg">
// // //           <div className="text-gray-700">
// // //             <span className="font-bold text-blue-600 text-xl">{filteredShops.length}</span> shops found in{" "}
// // //             <span className="font-semibold text-cyan-600">
// // //               {filterPlace === "All" ? "Chennai" : filterPlace}
// // //             </span>
// // //             {filteredShops.length > visibleCount && (
// // //               <span className="text-gray-500 ml-2">
// // //                 (showing {Math.min(visibleCount, filteredShops.length)})
// // //               </span>
// // //             )}
// // //           </div>
// // //           <div className="text-gray-600">
// // //             Sorted by: <span className="text-blue-600 font-medium capitalize">{activeSort}</span>
// // //           </div>
// // //         </div>

// // //         {/* Shop Cards Grid - Consistent Design for All */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
// // //           {visibleShops.map((shop, idx) => (
// // //             <div
// // //               key={idx}
// // //               className="group relative bg-white rounded-3xl shadow-2xl border border-blue-200 overflow-hidden hover:transform hover:scale-105 transition-all duration-500"
// // //             >
// // //               {/* Status Ribbon */}
// // //               <div className={`absolute top-4 right-4 z-10 px-4 py-2 rounded-full text-sm font-bold ${
// // //                 shop.open 
// // //                   ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" 
// // //                   : "bg-gradient-to-r from-red-500 to-pink-500 text-white"
// // //               }`}>
// // //                 {shop.open ? "🟢 OPEN" : "🔴 CLOSED"}
// // //               </div>

// // //               {/* Card Header with Consistent Gradient */}
// // //               <div className="relative p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
// // //                 <div className="flex items-center space-x-4">
// // //                   <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm">
// // //                     {shop.image}
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <h3 className="text-xl font-bold mb-1">{shop.name}</h3>
// // //                     <div className="flex items-center space-x-2">
// // //                       <span className="text-cyan-100 text-lg font-bold">{shop.distance}</span>
// // //                       <span className="text-white/60">•</span>
// // //                       <div className="flex items-center space-x-1">
// // //                         <span className="text-yellow-300">⭐</span>
// // //                         <span className="font-semibold">{shop.rating}</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Card Content - Consistent Layout */}
// // //               <div className="p-6">
// // //                 {/* Address Section */}
// // //                 <div className="mb-4">
// // //                   <div className="flex items-start space-x-3">
// // //                     <span className="text-blue-500 text-lg mt-1">📍</span>
// // //                     <div>
// // //                       <p className="text-gray-800 font-medium">{shop.address.split(", ")[0]}</p>
// // //                       <p className="text-gray-600 text-sm">{shop.address.split(", ")[1]}</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Services Section */}
// // //                 <div className="mb-6">
// // //                   <h4 className="text-sm font-semibold text-blue-600 mb-3">Services Offered:</h4>
// // //                   <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
// // //                     <p className="text-gray-700 text-sm leading-relaxed">{shop.services}</p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Action Button Section */}
// // //                 <div className="flex justify-between items-center pt-4 border-t border-gray-200">
// // //                   <div className="flex items-center space-x-2">
// // //                     <div className={`w-3 h-3 rounded-full ${shop.open ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
// // //                     <span className="text-gray-500 text-sm">
// // //                       {shop.open ? 'Available Now' : 'Opens Tomorrow'}
// // //                     </span>
// // //                   </div>

// // //                   <Link 
// // //                     to={"/service"}
// // //                     className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
// // //                       shop.open
// // //                         ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-blue-500/25"
// // //                         : "bg-gray-400 cursor-not-allowed opacity-50"
// // //                     }`}
// // //                   >
// // //                     {shop.open ? "Book Now →" : "Closed"}
// // //                   </Link>
// // //                 </div>
// // //               </div>

// // //               {/* Hover Effect */}
// // //               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Load More Button */}
// // //         {visibleCount < filteredShops.length && (
// // //           <div className="text-center mb-16">
// // //             <button
// // //               onClick={loadMoreShops}
// // //               className="px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-600 hover:to-cyan-600"
// // //             >
// // //               Load More Shops • {filteredShops.length - visibleCount} Remaining
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* Footer Section */}
// // //         <div className="text-center py-12 border-t border-blue-200">
// // //           <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
// // //             <div className="text-gray-600 mb-4 sm:mb-0">
// // //               <span className="font-semibold text-blue-600">{shops.length}</span> total shops • 
// // //               <span className="text-green-600 font-semibold ml-2">
// // //                 {shops.filter(shop => shop.open).length} open now
// // //               </span>
// // //             </div>

// // //             <div className="flex items-center space-x-3 text-gray-600">
// // //               <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
// // //                 <span className="text-lg">🖨️</span>
// // //               </div>
// // //               <span className="text-sm">Premium Printing Services Across Chennai</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Custom CSS for floating animation */}
// // //       <style jsx>{`
// // //         @keyframes float {
// // //           0%, 100% { transform: translateY(0) rotate(0deg); }
// // //           50% { transform: translateY(-20px) rotate(180deg); }
// // //         }
// // //         .animate-float {
// // //           animation: float linear infinite;
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // }

// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";

// // // // 🏪 30 Dummy Shops Data
// // // const shops = [
// // //   { name: "Smart Xerox Center", address: "Anna Nagar, Chennai", services: "Xerox, Printing, Scanning", rating: 4.5, distance: "0.8 km", open: true, image: "🖨" },
// // //   { name: "Speed Print & Xerox", address: "T Nagar, Chennai", services: "Color Print, Lamination", rating: 4.2, distance: "1.2 km", open: true, image: "📄" },
// // //   { name: "Copy World", address: "Adyar, Chennai", services: "Xerox, Binding, Printout", rating: 4.7, distance: "0.5 km", open: false, image: "📑" },
// // //   { name: "Express Xerox Point", address: "Tambaram, Chennai", services: "Online Applications, Printouts", rating: 4.0, distance: "2.1 km", open: true, image: "⚡" },
// // //   { name: "Quick Print Hub", address: "Velachery, Chennai", services: "Xerox, Color Print, Scan", rating: 4.6, distance: "1.5 km", open: true, image: "🏪" },
// // //   { name: "Bright Xerox Shop", address: "Porur, Chennai", services: "Xerox, Photo Copy, Printing", rating: 4.1, distance: "3.2 km", open: true, image: "✨" },
// // //   { name: "Green Print & Copy", address: "Guindy, Chennai", services: "Xerox, Online Services", rating: 4.4, distance: "0.9 km", open: false, image: "🌿" },
// // //   { name: "Digital Doc Center", address: "Mylapore, Chennai", services: "Scanning, Lamination, Printing", rating: 4.8, distance: "1.8 km", open: true, image: "💻" },
// // //   { name: "Speedy Copy", address: "Anna Nagar, Chennai", services: "Xerox, Printing", rating: 4.3, distance: "0.9 km", open: true, image: "📠" },
// // //   { name: "PrintPro", address: "T Nagar, Chennai", services: "Lamination, Binding", rating: 4.2, distance: "1.1 km", open: true, image: "📝" },
// // //   { name: "Xpress Docs", address: "Adyar, Chennai", services: "Color Print, Scan", rating: 4.5, distance: "0.7 km", open: false, image: "📂" },
// // //   { name: "Copy & Go", address: "Tambaram, Chennai", services: "Printing, Xerox", rating: 4.0, distance: "2.0 km", open: true, image: "✂" },
// // //   { name: "PrintXpress", address: "Velachery, Chennai", services: "Scanning, Xerox", rating: 4.6, distance: "1.6 km", open: true, image: "🖨" },
// // //   { name: "Xerox Point", address: "Porur, Chennai", services: "Binding, Copy", rating: 4.1, distance: "3.3 km", open: true, image: "📑" },
// // //   { name: "QuickCopy", address: "Guindy, Chennai", services: "Print, Scan", rating: 4.4, distance: "1.0 km", open: false, image: "⚡" },
// // //   { name: "Digital Prints", address: "Mylapore, Chennai", services: "Color Print, Laminating", rating: 4.8, distance: "1.7 km", open: true, image: "💻" },
// // //   { name: "Express Prints", address: "Anna Nagar, Chennai", services: "Xerox, Scanning", rating: 4.3, distance: "0.8 km", open: true, image: "📠" },
// // //   { name: "Fast Copy", address: "T Nagar, Chennai", services: "Printing, Copy", rating: 4.2, distance: "1.2 km", open: true, image: "📝" },
// // //   { name: "Print Hub", address: "Adyar, Chennai", services: "Scan, Color Print", rating: 4.5, distance: "0.6 km", open: false, image: "📂" },
// // //   { name: "Copy Center", address: "Tambaram, Chennai", services: "Xerox, Laminating", rating: 4.0, distance: "2.2 km", open: true, image: "✂" },
// // //   { name: "Smart Copy Corner", address: "Velachery, Chennai", services: "Printing, Scan, Binding", rating: 4.3, distance: "1.3 km", open: true, image: "🖨" },
// // //   { name: "Elite Print House", address: "Porur, Chennai", services: "Photo Copy, Color Print", rating: 4.4, distance: "3.0 km", open: true, image: "📘" },
// // //   { name: "Modern Xerox Studio", address: "Guindy, Chennai", services: "Scan, Binding", rating: 4.5, distance: "1.0 km", open: false, image: "🖱" },
// // //   { name: "DocuFast", address: "Mylapore, Chennai", services: "Online Print, Scanning", rating: 4.7, distance: "1.6 km", open: true, image: "🧾" },
// // //   { name: "PaperWorks", address: "Anna Nagar, Chennai", services: "Copy, Lamination", rating: 4.2, distance: "0.9 km", open: true, image: "📜" },
// // //   { name: "QuickDoc", address: "T Nagar, Chennai", services: "Xerox, Scan, Print", rating: 4.3, distance: "1.1 km", open: true, image: "📋" },
// // //   { name: "Star Print Zone", address: "Adyar, Chennai", services: "Binding, Copy, Color Print", rating: 4.6, distance: "0.7 km", open: true, image: "💫" },
// // //   { name: "CopyCity", address: "Tambaram, Chennai", services: "Xerox, Lamination", rating: 4.1, distance: "2.4 km", open: true, image: "🏙" },
// // //   { name: "UltraPrint", address: "Velachery, Chennai", services: "Printing, Copy, Scan", rating: 4.7, distance: "1.5 km", open: true, image: "🖨" },
// // //   { name: "Mega Docs", address: "Guindy, Chennai", services: "Printing, Online Services", rating: 4.5, distance: "1.1 km", open: true, image: "💾" },
// // // ];

// // // export default function Shops() {
// // //   const [filterPlace, setFilterPlace] = useState("All");
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [visibleCount, setVisibleCount] = useState(6);

// // //   // 🔍 Filter by place + search
// // //   const filteredShops = shops.filter((shop) => {
// // //     const matchesPlace =
// // //       filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
// // //     const matchesSearch =
// // //       shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //       shop.address.toLowerCase().includes(searchQuery.toLowerCase());
// // //     return matchesPlace && matchesSearch;
// // //   });

// // //   // Get shops to display based on visibleCount
// // //   const shopsToShow = filteredShops.slice(0, visibleCount);

// // //   // Handle show more/less
// // //   const handleShowMore = () => {
// // //     if (visibleCount >= filteredShops.length) {
// // //       // If showing all, reset to 6
// // //       setVisibleCount(6);
// // //     } else {
// // //       // Show 6 more shops
// // //       setVisibleCount(prevCount => Math.min(prevCount + 6, filteredShops.length));
// // //     }
// // //   };

// // //   // Reset visible count when filters change
// // //   React.useEffect(() => {
// // //     setVisibleCount(6);
// // //   }, [filterPlace, searchQuery]);

// // //   const isShowingAll = visibleCount >= filteredShops.length;
// // //   const canShowMore = filteredShops.length > 6;

// // //   return (
// // //     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 relative overflow-hidden">
// // //       {/* Background decorative elements */}
// // //       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
// // //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

// // //       <div className="max-w-7xl mx-auto relative z-10">
// // //         {/* Enhanced Header */}
// // //         <div className="text-center mb-12">
// // //           <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-2xl mb-6 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
// // //             <span className="text-4xl">🖨</span>
// // //           </div>
// // //           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// // //             Nearby Xerox Shops
// // //           </h2>
// // //           <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
// // //             Discover the best printing & xerox services near you with real-time availability and ratings
// // //           </p>
// // //         </div>

// // //         {/* Enhanced Filters Section */}
// // //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 p-6 mb-10">
// // //           <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
// // //             <div className="flex-1 w-full">
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <span className="text-gray-400 text-lg">🔍</span>
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search by shop name or location..."
// // //                   value={searchQuery}
// // //                   onChange={(e) => setSearchQuery(e.target.value)}
// // //                   className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
// // //                 />
// // //               </div>
// // //             </div>

// // //             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
// // //               <select
// // //                 value={filterPlace}
// // //                 onChange={(e) => setFilterPlace(e.target.value)}
// // //                 className="px-6 py-4 rounded-xl border border-gray-200 shadow-sm bg-white focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all duration-200 backdrop-blur-sm"
// // //               >
// // //                 <option value="All">📍 All Areas</option>
// // //                 <option value="Anna Nagar">🏘 Anna Nagar</option>
// // //                 <option value="T Nagar">🛍 T Nagar</option>
// // //                 <option value="Adyar">🌊 Adyar</option>
// // //                 <option value="Tambaram">🚉 Tambaram</option>
// // //                 <option value="Velachery">🏢 Velachery</option>
// // //                 <option value="Porur">🌉 Porur</option>
// // //                 <option value="Guindy">🏭 Guindy</option>
// // //                 <option value="Mylapore">🛕 Mylapore</option>
// // //               </select>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Results Counter */}
// // //         <div className="flex items-center justify-between mb-6">
// // //           <div className="text-gray-700">
// // //             <span className="font-semibold text-blue-600 text-lg">{filteredShops.length}</span> shops found in{" "}
// // //             <span className="font-semibold text-blue-600">
// // //               {filterPlace === "All" ? "Chennai" : filterPlace}
// // //             </span>
// // //           </div>
// // //           <div className="text-sm text-gray-500">
// // //             Showing <span className="text-blue-600 font-medium">{shopsToShow.length}</span> of {filteredShops.length}
// // //           </div>
// // //         </div>

// // //         {/* IMAGE-INSPIRED CARD DESIGN */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// // //           {shopsToShow.map((shop, idx) => (
// // //             <div
// // //               key={idx}
// // //               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
// // //             >
// // //               {/* Card Header with Shop Name */}
// // //               <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
// // //                 <h3 className="text-xl font-bold mb-2">{shop.name}</h3>
// // //                 <div className="flex items-center justify-between">
// // //                   <div className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-full">
// // //                     {shop.distance}
// // //                   </div>
// // //                   <div className={`px-3 py-1 rounded-full text-sm font-medium ${
// // //                     shop.open ? "bg-green-500/90" : "bg-red-500/90"
// // //                   }`}>
// // //                     {shop.open ? "Open" : "Closed"}
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Card Content */}
// // //               <div className="p-6">
// // //                 {/* Address Section */}
// // //                 <div className="mb-4">
// // //                   <div className="flex items-start space-x-2 text-gray-700">
// // //                     <span className="text-gray-500 mt-1">📍</span>
// // //                     <div>
// // //                       <p className="font-medium">{shop.address.split(", ")[0]}</p>
// // //                       <p className="text-gray-600">{shop.address.split(", ")[1]}</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Services Section */}
// // //                 <div className="mb-6">
// // //                   <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
// // //                   <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
// // //                     <p className="text-gray-700 text-sm leading-relaxed">{shop.services}</p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Rating and Action Section */}
// // //                 <div className="flex items-center justify-between border-t border-gray-200 pt-4">
// // //                   <div className="flex items-center space-x-2">
// // //                     <span className="text-2xl font-bold text-blue-600">{shop.rating}</span>
// // //                     <div className="flex items-center space-x-1">
// // //                       <span className="text-yellow-500">⭐</span>
// // //                       <span className="text-sm text-gray-600">Rating</span>
// // //                     </div>
// // //                   </div>

// // //                   <Link to={"/service"}
// // //                     className={`px-6 py-2 rounded-lg font-semibold text-white transition-all duration-200 ${
// // //                       shop.open
// // //                         ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
// // //                         : "bg-gray-400 cursor-not-allowed"
// // //                     }`}
// // //                     disabled={!shop.open}
// // //                   >
// // //                     {shop.open ? "Book Now" : "Closed"}
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Show More/Less Button */}
// // //         {canShowMore && (
// // //           <div className="text-center mb-12">
// // //             <button
// // //               onClick={handleShowMore}
// // //               className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
// // //             >
// // //               {isShowingAll ? "Show Less" : `Show More (+${Math.min(6, filteredShops.length - visibleCount)})`}
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* Enhanced Footer */}
// // //         <div className="text-center py-8 border-t border-gray-200/60">
// // //           <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
// // //             <div className="text-gray-600 mb-4 sm:mb-0">
// // //               <span className="font-semibold text-blue-600">{filteredShops.length}</span> shops available • 
// // //               <span className="text-green-600 font-semibold ml-2">
// // //                 {shops.filter(shop => shop.open).length} open now
// // //               </span>
// // //             </div>

// // //             <div className="flex items-center space-x-2 text-gray-500">
// // //               <span>🖨</span>
// // //               <span className="text-sm">Quality Xerox Services in Chennai</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // // import React, { useState, useEffect } from "react";
// // // import { Link } from "react-router-dom";

// // // // 🏪 30 Dummy Shop Data
// // // const shops = [
// // //   { name: "Smart Xerox Center", address: "Anna Nagar, Chennai", services: "Xerox, Printing, Scanning", rating: 4.5, distance: "0.8 km", open: true, image: "🖨" },
// // //   { name: "Speed Print & Xerox", address: "T Nagar, Chennai", services: "Color Print, Lamination", rating: 4.2, distance: "1.2 km", open: true, image: "📄" },
// // //   { name: "Copy World", address: "Adyar, Chennai", services: "Xerox, Binding, Printout", rating: 4.7, distance: "0.5 km", open: false, image: "📑" },
// // //   { name: "Express Xerox Point", address: "Tambaram, Chennai", services: "Online Applications, Printouts", rating: 4.0, distance: "2.1 km", open: true, image: "⚡" },
// // //   { name: "Quick Print Hub", address: "Velachery, Chennai", services: "Xerox, Color Print, Scan", rating: 4.6, distance: "1.5 km", open: true, image: "🏪" },
// // //   { name: "Bright Xerox Shop", address: "Porur, Chennai", services: "Xerox, Photo Copy, Printing", rating: 4.1, distance: "3.2 km", open: true, image: "✨" },
// // //   { name: "Green Print & Copy", address: "Guindy, Chennai", services: "Xerox, Online Services", rating: 4.4, distance: "0.9 km", open: false, image: "🌿" },
// // //   { name: "Digital Doc Center", address: "Mylapore, Chennai", services: "Scanning, Lamination, Printing", rating: 4.8, distance: "1.8 km", open: true, image: "💻" },
// // //   { name: "Speedy Copy", address: "Anna Nagar, Chennai", services: "Xerox, Printing", rating: 4.3, distance: "0.9 km", open: true, image: "📠" },
// // //   { name: "PrintPro", address: "T Nagar, Chennai", services: "Lamination, Binding", rating: 4.2, distance: "1.1 km", open: true, image: "📝" },
// // //   { name: "Xpress Docs", address: "Adyar, Chennai", services: "Color Print, Scan", rating: 4.5, distance: "0.7 km", open: false, image: "📂" },
// // //   { name: "Copy & Go", address: "Tambaram, Chennai", services: "Printing, Xerox", rating: 4.0, distance: "2.0 km", open: true, image: "✂" },
// // //   { name: "PrintXpress", address: "Velachery, Chennai", services: "Scanning, Xerox", rating: 4.6, distance: "1.6 km", open: true, image: "🖨" },
// // //   { name: "Xerox Point", address: "Porur, Chennai", services: "Binding, Copy", rating: 4.1, distance: "3.3 km", open: true, image: "📑" },
// // //   { name: "QuickCopy", address: "Guindy, Chennai", services: "Print, Scan", rating: 4.4, distance: "1.0 km", open: false, image: "⚡" },
// // //   { name: "Digital Prints", address: "Mylapore, Chennai", services: "Color Print, Laminating", rating: 4.8, distance: "1.7 km", open: true, image: "💻" },
// // //   { name: "Express Prints", address: "Anna Nagar, Chennai", services: "Xerox, Scanning", rating: 4.3, distance: "0.8 km", open: true, image: "📠" },
// // //   { name: "Fast Copy", address: "T Nagar, Chennai", services: "Printing, Copy", rating: 4.2, distance: "1.2 km", open: true, image: "📝" },
// // //   { name: "Print Hub", address: "Adyar, Chennai", services: "Scan, Color Print", rating: 4.5, distance: "0.6 km", open: false, image: "📂" },
// // //   { name: "Copy Center", address: "Tambaram, Chennai", services: "Xerox, Laminating", rating: 4.0, distance: "2.2 km", open: true, image: "✂" },
// // //   { name: "Smart Copy Corner", address: "Velachery, Chennai", services: "Printing, Scan, Binding", rating: 4.3, distance: "1.3 km", open: true, image: "🖨" },
// // //   { name: "Elite Print House", address: "Porur, Chennai", services: "Photo Copy, Color Print", rating: 4.4, distance: "3.0 km", open: true, image: "📘" },
// // //   { name: "Modern Xerox Studio", address: "Guindy, Chennai", services: "Scan, Binding", rating: 4.5, distance: "1.0 km", open: false, image: "🖱" },
// // //   { name: "DocuFast", address: "Mylapore, Chennai", services: "Online Print, Scanning", rating: 4.7, distance: "1.6 km", open: true, image: "🧾" },
// // //   { name: "PaperWorks", address: "Anna Nagar, Chennai", services: "Copy, Lamination", rating: 4.2, distance: "0.9 km", open: true, image: "📜" },
// // //   { name: "QuickDoc", address: "T Nagar, Chennai", services: "Xerox, Scan, Print", rating: 4.3, distance: "1.1 km", open: true, image: "📋" },
// // //   { name: "Star Print Zone", address: "Adyar, Chennai", services: "Binding, Copy, Color Print", rating: 4.6, distance: "0.7 km", open: true, image: "💫" },
// // //   { name: "CopyCity", address: "Tambaram, Chennai", services: "Xerox, Lamination", rating: 4.1, distance: "2.4 km", open: true, image: "🏙" },
// // //   { name: "UltraPrint", address: "Velachery, Chennai", services: "Printing, Copy, Scan", rating: 4.7, distance: "1.5 km", open: true, image: "🖨" },
// // //   { name: "Mega Docs", address: "Guindy, Chennai", services: "Printing, Online Services", rating: 4.5, distance: "1.1 km", open: true, image: "💾" },
// // // ];

// // // export default function Shops() {
// // //   const [filterPlace, setFilterPlace] = useState("All");
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [visibleCount, setVisibleCount] = useState(6);

// // //   const filteredShops = shops.filter((shop) => {
// // //     const matchesPlace = filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
// // //     const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) || shop.address.toLowerCase().includes(searchQuery.toLowerCase());
// // //     return matchesPlace && matchesSearch;
// // //   });

// // //   const shopsToShow = filteredShops.slice(0, visibleCount);
// // //   const isShowingAll = visibleCount >= filteredShops.length;
// // //   const canShowMore = filteredShops.length > 6;

// // //   const handleShowMore = () => setVisibleCount(isShowingAll ? 6 : Math.min(visibleCount + 6, filteredShops.length));

// // //   useEffect(() => setVisibleCount(6), [filterPlace, searchQuery]);

// // //   return (
// // //     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 relative overflow-hidden">
// // //       {/* Background Decorative Lights */}
// // //       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
// // //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

// // //       <div className="max-w-7xl mx-auto relative z-10">
// // //         {/* Header */}
// // //         <div className="text-center mb-12">
// // //           <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-2xl mb-6 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
// // //             <span className="text-4xl">🖨</span>
// // //           </div>
// // //           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// // //             Nearby Xerox Shops
// // //           </h2>
// // //           <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
// // //             Find the best printing & xerox services near you with live ratings and distance
// // //           </p>
// // //         </div>

// // //         {/* Filters */}
// // //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 p-6 mb-10">
// // //           <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
// // //             <div className="relative w-full">
// // //               <span className="absolute left-4 top-3 text-gray-400 text-lg">🔍</span>
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search by shop name or area..."
// // //                 value={searchQuery}
// // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // //                 className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-400 bg-white/50 backdrop-blur-sm"
// // //               />
// // //             </div>

// // //             <select
// // //               value={filterPlace}
// // //               onChange={(e) => setFilterPlace(e.target.value)}
// // //               className="px-6 py-3 rounded-xl border border-gray-200 shadow-sm bg-white focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
// // //             >
// // //               <option value="All">📍 All Areas</option>
// // //               <option value="Anna Nagar">🏘 Anna Nagar</option>
// // //               <option value="T Nagar">🛍 T Nagar</option>
// // //               <option value="Adyar">🌊 Adyar</option>
// // //               <option value="Tambaram">🚉 Tambaram</option>
// // //               <option value="Velachery">🏢 Velachery</option>
// // //               <option value="Porur">🌉 Porur</option>
// // //               <option value="Guindy">🏭 Guindy</option>
// // //               <option value="Mylapore">🛕 Mylapore</option>
// // //             </select>
// // //           </div>
// // //         </div>

// // //         {/* Shops Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {shopsToShow.map((shop, i) => (
// // //             <div
// // //               key={i}
// // //               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
// // //             >
// // //               <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white flex justify-between items-center">
// // //                 <div>
// // //                   <h3 className="text-xl font-bold mb-1">{shop.name}</h3>
// // //                   <p className="text-sm opacity-90">{shop.distance}</p>
// // //                 </div>
// // //                 <div
// // //                   className={`px-3 py-1 rounded-full text-sm font-semibold ${
// // //                     shop.open ? "bg-green-500/90" : "bg-red-500/90"
// // //                   }`}
// // //                 >
// // //                   {shop.open ? "Open" : "Closed"}
// // //                 </div>
// // //               </div>

// // //               <div className="p-6">
// // //                 <p className="text-gray-700 mb-2">📍 {shop.address}</p>
// // //                 <p className="text-gray-600 text-sm mb-4">{shop.services}</p>

// // //                 <div className="flex items-center justify-between">
// // //                   <div className="text-blue-600 font-bold text-xl">{shop.rating}⭐</div>
// // //                   <Link
// // //                     to="/service"
// // //                     className={`px-5 py-2 rounded-lg text-white font-semibold ${
// // //                       shop.open
// // //                         ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
// // //                         : "bg-gray-400 cursor-not-allowed"
// // //                     }`}
// // //                   >
// // //                     {shop.open ? "Book Now" : "Closed"}
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Show More Button */}
// // //         {canShowMore && (
// // //           <div className="text-center mt-10">
// // //             <button
// // //               onClick={handleShowMore}
// // //               className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
// // //             >
// // //               {isShowingAll ? "Show Less" : "Show More"}
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";

// // // 🏪 30 Dummy Shop Data
// // const shops = [
// //   { name: "Smart Xerox Center", address: "Anna Nagar, Chennai", services: "Xerox, Printing, Scanning", rating: 4.5, distance: "0.8 km", open: true, image: "🖨", lat: 13.0850, lng: 80.2101 },
// //   { name: "Speed Print & Xerox", address: "T Nagar, Chennai", services: "Color Print, Lamination", rating: 4.2, distance: "1.2 km", open: true, image: "📄", lat: 13.0418, lng: 80.2341 },
// //   { name: "Copy World", address: "Adyar, Chennai", services: "Xerox, Binding, Printout", rating: 4.7, distance: "0.5 km", open: false, image: "📑", lat: 13.0067, lng: 80.2206 },
// //   { name: "Express Xerox Point", address: "Tambaram, Chennai", services: "Online Applications, Printouts", rating: 4.0, distance: "2.1 km", open: true, image: "⚡", lat: 12.9249, lng: 80.1000 },
// //   { name: "Quick Print Hub", address: "Velachery, Chennai", services: "Xerox, Color Print, Scan", rating: 4.6, distance: "1.5 km", open: true, image: "🏪", lat: 12.9692, lng: 80.2094 },
// //   { name: "Bright Xerox Shop", address: "Porur, Chennai", services: "Xerox, Photo Copy, Printing", rating: 4.1, distance: "3.2 km", open: true, image: "✨", lat: 13.0359, lng: 80.1563 },
// //   { name: "Green Print & Copy", address: "Guindy, Chennai", services: "Xerox, Online Services", rating: 4.4, distance: "0.9 km", open: false, image: "🌿", lat: 13.0102, lng: 80.2025 },
// //   { name: "Digital Doc Center", address: "Mylapore, Chennai", services: "Scanning, Lamination, Printing", rating: 4.8, distance: "1.8 km", open: true, image: "💻", lat: 13.0339, lng: 80.2614 },
// //   { name: "Speedy Copy", address: "Anna Nagar, Chennai", services: "Xerox, Printing", rating: 4.3, distance: "0.9 km", open: true, image: "📠", lat: 13.0878, lng: 80.2075 },
// //   { name: "PrintPro", address: "T Nagar, Chennai", services: "Lamination, Binding", rating: 4.2, distance: "1.1 km", open: true, image: "📝", lat: 13.0431, lng: 80.2378 },
// //   { name: "Xpress Docs", address: "Adyar, Chennai", services: "Color Print, Scan", rating: 4.5, distance: "0.7 km", open: false, image: "📂", lat: 13.0089, lng: 80.2189 },
// //   { name: "Copy & Go", address: "Tambaram, Chennai", services: "Printing, Xerox", rating: 4.0, distance: "2.0 km", open: true, image: "✂", lat: 12.9267, lng: 80.1025 },
// //   { name: "PrintXpress", address: "Velachery, Chennai", services: "Scanning, Xerox", rating: 4.6, distance: "1.6 km", open: true, image: "🖨", lat: 12.9708, lng: 80.2111 },
// //   { name: "Xerox Point", address: "Porur, Chennai", services: "Binding, Copy", rating: 4.1, distance: "3.3 km", open: true, image: "📑", lat: 13.0372, lng: 80.1589 },
// //   { name: "QuickCopy", address: "Guindy, Chennai", services: "Print, Scan", rating: 4.4, distance: "1.0 km", open: false, image: "⚡", lat: 13.0117, lng: 80.2042 },
// //   { name: "Digital Prints", address: "Mylapore, Chennai", services: "Color Print, Laminating", rating: 4.8, distance: "1.7 km", open: true, image: "💻", lat: 13.0347, lng: 80.2631 },
// //   { name: "Express Prints", address: "Anna Nagar, Chennai", services: "Xerox, Scanning", rating: 4.3, distance: "0.8 km", open: true, image: "📠", lat: 13.0864, lng: 80.2089 },
// //   { name: "Fast Copy", address: "T Nagar, Chennai", services: "Printing, Copy", rating: 4.2, distance: "1.2 km", open: true, image: "📝", lat: 13.0422, lng: 80.2358 },
// //   { name: "Print Hub", address: "Adyar, Chennai", services: "Scan, Color Print", rating: 4.5, distance: "0.6 km", open: false, image: "📂", lat: 13.0078, lng: 80.2197 },
// //   { name: "Copy Center", address: "Tambaram, Chennai", services: "Xerox, Laminating", rating: 4.0, distance: "2.2 km", open: true, image: "✂", lat: 12.9256, lng: 80.1014 },
// //   { name: "Smart Copy Corner", address: "Velachery, Chennai", services: "Printing, Scan, Binding", rating: 4.3, distance: "1.3 km", open: true, image: "🖨", lat: 12.9714, lng: 80.2103 },
// //   { name: "Elite Print House", address: "Porur, Chennai", services: "Photo Copy, Color Print", rating: 4.4, distance: "3.0 km", open: true, image: "📘", lat: 13.0364, lng: 80.1575 },
// //   { name: "Modern Xerox Studio", address: "Guindy, Chennai", services: "Scan, Binding", rating: 4.5, distance: "1.0 km", open: false, image: "🖱", lat: 13.0125, lng: 80.2033 },
// //   { name: "DocuFast", address: "Mylapore, Chennai", services: "Online Print, Scanning", rating: 4.7, distance: "1.6 km", open: true, image: "🧾", lat: 13.0353, lng: 80.2622 },
// //   { name: "PaperWorks", address: "Anna Nagar, Chennai", services: "Copy, Lamination", rating: 4.2, distance: "0.9 km", open: true, image: "📜", lat: 13.0856, lng: 80.2094 },
// //   { name: "QuickDoc", address: "T Nagar, Chennai", services: "Xerox, Scan, Print", rating: 4.3, distance: "1.1 km", open: true, image: "📋", lat: 13.0439, lng: 80.2367 },
// //   { name: "Star Print Zone", address: "Adyar, Chennai", services: "Binding, Copy, Color Print", rating: 4.6, distance: "0.7 km", open: true, image: "💫", lat: 13.0094, lng: 80.2178 },
// //   { name: "CopyCity", address: "Tambaram, Chennai", services: "Xerox, Lamination", rating: 4.1, distance: "2.4 km", open: true, image: "🏙", lat: 12.9278, lng: 80.1033 },
// //   { name: "UltraPrint", address: "Velachery, Chennai", services: "Printing, Copy, Scan", rating: 4.7, distance: "1.5 km", open: true, image: "🖨", lat: 12.9697, lng: 80.2086 },
// //   { name: "Mega Docs", address: "Guindy, Chennai", services: "Printing, Online Services", rating: 4.5, distance: "1.1 km", open: true, image: "💾", lat: 13.0133, lng: 80.2050 },
// // ];

// // export default function Shops() {
// //   const [filterPlace, setFilterPlace] = useState("All");
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [visibleCount, setVisibleCount] = useState(6);
// //   const [ setUserLocation] = useState({ lat: 13.0827, lng: 80.2707 });
// //   const [mapPins, setMapPins] = useState([]);

// //   // Chennai map image URL - Using a real Chennai map
// //   const mapImageUrl = "https://images.unsplash.com/photo-1582573613350-752cff035ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

// //   // Simulate live location tracking
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setUserLocation(prev => ({
// //         lat: prev.lat + (Math.random() - 0.5) * 0.001,
// //         lng: prev.lng + (Math.random() - 0.5) * 0.001
// //       }));
// //     }, 3000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   // Update map pins based on filtered shops
// //   useEffect(() => {
// //     const pins = filteredShops.map(shop => ({
// //       ...shop,
// //       active: shop.open
// //     }));
// //     setMapPins(pins);
// //   }, [filterPlace, searchQuery]);

// //   const filteredShops = shops.filter((shop) => {
// //     const matchesPlace = filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
// //     const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) || shop.address.toLowerCase().includes(searchQuery.toLowerCase());
// //     return matchesPlace && matchesSearch;
// //   });

// //   const shopsToShow = filteredShops.slice(0, visibleCount);
// //   const isShowingAll = visibleCount >= filteredShops.length;
// //   const canShowMore = filteredShops.length > 6;

// //   const handleShowMore = () => setVisibleCount(isShowingAll ? 6 : Math.min(visibleCount + 6, filteredShops.length));

// //   useEffect(() => setVisibleCount(6), [filterPlace, searchQuery]);

// //   return (
// //     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 relative overflow-hidden">

// //       {/* Real Map Background */}
// //       <div className="absolute inset-0">
// //         <img 
// //           src={mapImageUrl} 
// //           alt="Chennai Map" 
// //           className="w-full h-full object-cover opacity-20"
// //         />
// //         {/* Overlay to make map more subtle */}
// //         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-50/80"></div>

// //         {/* Animated Map Elements */}
// //         <div className="absolute inset-0">
// //           {/* Pulse effect around user location */}
// //           <div 
// //             className="absolute w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-2xl transform -translate-x-1/2 -translate-y-1/2"
// //             style={{
// //               left: '50%',
// //               top: '50%',
// //               animation: 'pulse 2s infinite'
// //             }}
// //           >
// //             <div className="absolute inset-0 rounded-full bg-red-400 animate-ping"></div>
// //           </div>

// //           {/* Shop markers on map */}
// //           {mapPins.slice(0, 8).map((shop, index) => (
// //             <div
// //               key={index}
// //               className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 ${
// //                 shop.open ? 'bg-green-500 animate-bounce' : 'bg-gray-400'
// //               }`}
// //               style={{
// //                 left: `${40 + Math.cos(index * 0.8) * 25}%`,
// //                 top: `${45 + Math.sin(index * 0.8) * 25}%`,
// //                 animationDelay: `${index * 0.3}s`
// //               }}
// //             >
// //               <div className="absolute -top-8 -left-4 bg-black text-white text-xs px-2 py-1 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
// //                 {shop.name}
// //                 <div className="text-xs text-green-300">{shop.distance}</div>
// //               </div>
// //             </div>
// //           ))}

// //           {/* Moving traffic indicators */}
// //           <div className="absolute top-1/3 left-0 w-3 h-3 bg-yellow-500 rounded-full shadow-lg animate-moveRight" style={{animationDuration: '15s'}}></div>
// //           <div className="absolute top-2/3 right-0 w-3 h-3 bg-yellow-500 rounded-full shadow-lg animate-moveLeft" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
// //           <div className="absolute top-1/2 left-0 w-3 h-3 bg-orange-500 rounded-full shadow-lg animate-moveRight" style={{animationDuration: '18s', animationDelay: '1s'}}></div>
// //         </div>
// //       </div>

// //       {/* Background Decorative Lights */}
// //       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
// //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
// //       <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         {/* Enhanced Header */}
// //         <div className="text-center mb-12">
// //           <div className="inline-flex items-center justify-center w-24 h-24 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl mb-6 border border-blue-100 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
// //             <span className="text-4xl">🖨</span>
// //           </div>
// //           <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
// //             Nearby Xerox Shops
// //           </h2>
// //           <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-3 bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
// //             🗺️ <span className="font-semibold text-blue-600">Live Map View</span> - Find the best printing & xerox services near you on real Chennai map
// //           </p>

// //           {/* Live Status Bar */}
// //           <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-200 inline-flex items-center gap-3 px-6 py-3">
// //             <div className="flex items-center gap-2">
// //               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
// //               <span className="text-sm font-semibold text-green-700">Live Map Tracking</span>
// //             </div>
// //             <div className="w-px h-4 bg-gray-300"></div>
// //             <div className="text-sm text-gray-600 flex items-center gap-2">
// //               <span>📍 Your Location</span>
// //               <span>•</span>
// //               <span>🟢 {shops.filter(s => s.open).length} Shops Open</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Enhanced Filters */}
// //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/60 p-6 mb-10 transform hover:shadow-2xl transition-all duration-300">
// //           <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
// //             <div className="relative w-full lg:w-1/2">
// //               <span className="absolute left-4 top-3 text-gray-400 text-lg">🔍</span>
// //               <input
// //                 type="text"
// //                 placeholder="Search by shop name or area..."
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 shadow-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 bg-white/70 backdrop-blur-sm transition-all duration-300"
// //               />
// //             </div>

// //             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
// //               <select
// //                 value={filterPlace}
// //                 onChange={(e) => setFilterPlace(e.target.value)}
// //                 className="px-6 py-4 rounded-2xl border border-gray-200 shadow-lg bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-300"
// //               >
// //                 <option value="All">📍 All Areas</option>
// //                 <option value="Anna Nagar">🏘 Anna Nagar</option>
// //                 <option value="T Nagar">🛍 T Nagar</option>
// //                 <option value="Adyar">🌊 Adyar</option>
// //                 <option value="Tambaram">🚉 Tambaram</option>
// //                 <option value="Velachery">🏢 Velachery</option>
// //                 <option value="Porur">🌉 Porur</option>
// //                 <option value="Guindy">🏭 Guindy</option>
// //                 <option value="Mylapore">🛕 Mylapore</option>
// //               </select>

// //               <button className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-semibold flex items-center gap-2">
// //                 🗺️ Full Screen Map
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Map Legend */}
// //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-4 mb-8">
// //           <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
// //             <div className="flex items-center gap-2">
// //               <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow"></div>
// //               <span>Your Location</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
// //               <span>Open Shops</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <div className="w-4 h-4 bg-gray-400 rounded-full border-2 border-white shadow"></div>
// //               <span>Closed Shops</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <div className="w-3 h-3 bg-yellow-500 rounded-full shadow"></div>
// //               <span>Live Traffic</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Stats Bar */}
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
// //           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-blue-100">
// //             <div className="text-2xl font-bold text-blue-600">{shops.length}</div>
// //             <div className="text-sm text-gray-600">Total Shops</div>
// //           </div>
// //           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-green-100">
// //             <div className="text-2xl font-bold text-green-600">{shops.filter(s => s.open).length}</div>
// //             <div className="text-sm text-gray-600">Open Now</div>
// //           </div>
// //           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-purple-100">
// //             <div className="text-2xl font-bold text-purple-600">
// //               {Math.max(...shops.map(s => s.rating))}
// //             </div>
// //             <div className="text-sm text-gray-600">Best Rating</div>
// //           </div>
// //           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-orange-100">
// //             <div className="text-2xl font-bold text-orange-600">24/7</div>
// //             <div className="text-sm text-gray-600">Service Available</div>
// //           </div>
// //         </div>

// //         {/* Enhanced Shops Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// //           {shopsToShow.map((shop, i) => (
// //             <div
// //               key={i}
// //               className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:transform hover:-translate-y-2"
// //             >
// //               {/* Shop Header with Gradient */}
// //               <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white relative overflow-hidden">
// //                 <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
// //                 <div className="relative z-10 flex justify-between items-start">
// //                   <div>
// //                     <h3 className="text-xl font-bold mb-1 group-hover:underline">{shop.name}</h3>
// //                     <p className="text-sm opacity-90 flex items-center gap-1">
// //                       <span>📍</span> {shop.distance}
// //                     </p>
// //                   </div>
// //                   <div
// //                     className={`px-3 py-1 rounded-full text-sm font-semibold shadow-lg ${
// //                       shop.open ? "bg-green-500/90" : "bg-red-500/90"
// //                     }`}
// //                   >
// //                     {shop.open ? "🟢 Open" : "🔴 Closed"}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Shop Details */}
// //               <div className="p-6">
// //                 <div className="flex items-center gap-3 mb-4">
// //                   <div className="text-3xl">{shop.image}</div>
// //                   <div>
// //                     <p className="text-gray-700 font-medium flex items-center gap-2">
// //                       📍 {shop.address}
// //                     </p>
// //                     <p className="text-gray-600 text-sm mt-1">{shop.services}</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-2">
// //                     <div className="text-blue-600 font-bold text-xl">{shop.rating}⭐</div>
// //                     <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
// //                       {shop.distance} away
// //                     </div>
// //                   </div>
// //                   <Link
// //                     to="/service"
// //                     className={`px-5 py-3 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 ${
// //                       shop.open
// //                         ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl"
// //                         : "bg-gray-400 cursor-not-allowed"
// //                     }`}
// //                   >
// //                     {shop.open ? "📖 Book Now" : "❌ Closed"}
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Enhanced Show More Button */}
// //         {canShowMore && (
// //           <div className="text-center mt-10">
// //             <button
// //               onClick={handleShowMore}
// //               className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl shadow-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1"
// //             >
// //               {isShowingAll ? "👆 Show Less" : "👇 Load More Shops"}
// //             </button>
// //           </div>
// //         )}

// //         {/* Live Tracking Footer */}
// //         <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200 p-6 text-center">
// //           <div className="flex items-center justify-center gap-3 mb-2">
// //             <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
// //             <span className="font-semibold text-gray-700">Live Map Tracking Active</span>
// //           </div>
// //           <p className="text-gray-600 text-sm">
// //             Real Chennai map with live shop locations and real-time availability updates
// //           </p>
// //         </div>
// //       </div>

// //       {/* Add custom animations */}
// //       <style jsx>{`
// //         @keyframes moveRight {
// //           0% { transform: translateX(-100px); }
// //           100% { transform: translateX(calc(100vw + 100px)); }
// //         }
// //         @keyframes moveLeft {
// //           0% { transform: translateX(calc(100vw + 100px)); }
// //           100% { transform: translateX(-100px); }
// //         }
// //         @keyframes pulse {
// //           0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
// //           50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.7; }
// //           100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
// //         }
// //         .animate-moveRight {
// //           animation: moveRight linear infinite;
// //         }
// //         .animate-moveLeft {
// //           animation: moveLeft linear infinite;
// //         }
// //         .animation-delay-2000 {
// //           animation-delay: 2s;
// //         }
// //         .animation-delay-4000 {
// //           animation-delay: 4s;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// // 🏪 30 Complete Shop Data with Full Details
// const shops = [
//   { 
//     id: 1,
//     name: "Digital Print Solutions", 
//     address: "Tech Park, Velachery, Chennai", 
//     services: "Digital Printing, High-Res Scanning, Color Services", 
//     rating: 4.7, 
//     reviews: 128,
//     distance: "1.5 km", 
//     waitTime: "6 min",
//     open: true, 
//     image: "🖨",
//     established: "Since 2017",
//     clientBase: "400+ Corporate",
//     efficiency: "96% Success Rate",
//     serviceLevel: "Enterprise",
//     premiumPartner: true,
//     contact: "+91 98765 43210",
//     email: "info@digitalprintsolutions.com",
//     workingHours: {
//       weekdays: "8:00 AM - 9:00 PM",
//       weekends: "9:00 AM - 8:00 PM"
//     }
//   },
//   { 
//     id: 2,
//     name: "Corporate Document Center", 
//     address: "Financial District, T Nagar, Chennai", 
//     services: "Color Printing, Lamination, Binding Services", 
//     rating: 4.6, 
//     reviews: 95,
//     distance: "1.2 km", 
//     waitTime: "8 min",
//     open: true, 
//     image: "📄",
//     established: "Since 2015",
//     clientBase: "300+ Businesses",
//     efficiency: "95% Success Rate",
//     serviceLevel: "Enterprise",
//     premiumPartner: true,
//     contact: "+91 87654 32109",
//     email: "support@corporatedoc.com",
//     workingHours: {
//       weekdays: "9:00 AM - 8:00 PM",
//       weekends: "10:00 AM - 6:00 PM"
//     }
//   },
//   { 
//     id: 3,
//     name: "Smart Xerox Center", 
//     address: "Anna Nagar, Chennai", 
//     services: "Xerox, Printing, Scanning", 
//     rating: 4.5, 
//     reviews: 87,
//     distance: "0.8 km", 
//     waitTime: "5 min",
//     open: true, 
//     image: "🖨",
//     established: "Since 2018",
//     clientBase: "250+ Clients",
//     efficiency: "94% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 76543 21098",
//     email: "smartxerox@email.com",
//     workingHours: {
//       weekdays: "8:30 AM - 8:30 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 4,
//     name: "Speed Print & Xerox", 
//     address: "T Nagar, Chennai", 
//     services: "Color Print, Lamination", 
//     rating: 4.2, 
//     reviews: 76,
//     distance: "1.2 km", 
//     waitTime: "10 min",
//     open: true, 
//     image: "📄",
//     established: "Since 2016",
//     clientBase: "200+ Clients",
//     efficiency: "92% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 65432 10987",
//     email: "speedprint@email.com",
//     workingHours: {
//       weekdays: "9:00 AM - 8:00 PM",
//       weekends: "9:30 AM - 6:30 PM"
//     }
//   },
//   { 
//     id: 5,
//     name: "Copy World", 
//     address: "Adyar, Chennai", 
//     services: "Xerox, Binding, Printout", 
//     rating: 4.7, 
//     reviews: 112,
//     distance: "0.5 km", 
//     waitTime: "7 min",
//     open: false, 
//     image: "📑",
//     established: "Since 2019",
//     clientBase: "180+ Clients",
//     efficiency: "93% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 54321 09876",
//     email: "copyworld@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 8:00 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 6,
//     name: "Express Xerox Point", 
//     address: "Tambaram, Chennai", 
//     services: "Online Applications, Printouts", 
//     rating: 4.0, 
//     reviews: 64,
//     distance: "2.1 km", 
//     waitTime: "12 min",
//     open: true, 
//     image: "⚡",
//     established: "Since 2020",
//     clientBase: "150+ Clients",
//     efficiency: "90% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 43210 98765",
//     email: "expressxerox@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 9:00 PM",
//       weekends: "8:30 AM - 8:00 PM"
//     }
//   },
//   { 
//     id: 7,
//     name: "Quick Print Hub", 
//     address: "Velachery, Chennai", 
//     services: "Xerox, Color Print, Scan", 
//     rating: 4.6, 
//     reviews: 89,
//     distance: "1.5 km", 
//     waitTime: "9 min",
//     open: true, 
//     image: "🏪",
//     established: "Since 2019",
//     clientBase: "220+ Clients",
//     efficiency: "94% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 32109 87654",
//     email: "quickprinthub@email.com",
//     workingHours: {
//       weekdays: "8:30 AM - 8:30 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 8,
//     name: "Bright Xerox Shop", 
//     address: "Porur, Chennai", 
//     services: "Xerox, Photo Copy, Printing", 
//     rating: 4.1, 
//     reviews: 71,
//     distance: "3.2 km", 
//     waitTime: "15 min",
//     open: true, 
//     image: "✨",
//     established: "Since 2017",
//     clientBase: "190+ Clients",
//     efficiency: "91% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 21098 76543",
//     email: "brightxerox@email.com",
//     workingHours: {
//       weekdays: "9:00 AM - 8:00 PM",
//       weekends: "9:30 AM - 6:30 PM"
//     }
//   },
//   { 
//     id: 9,
//     name: "Green Print & Copy", 
//     address: "Guindy, Chennai", 
//     services: "Xerox, Online Services", 
//     rating: 4.4, 
//     reviews: 83,
//     distance: "0.9 km", 
//     waitTime: "8 min",
//     open: false, 
//     image: "🌿",
//     established: "Since 2021",
//     clientBase: "160+ Clients",
//     efficiency: "92% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 10987 65432",
//     email: "greenprint@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 8:00 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 10,
//     name: "Digital Doc Center", 
//     address: "Mylapore, Chennai", 
//     services: "Scanning, Lamination, Printing", 
//     rating: 4.8, 
//     reviews: 134,
//     distance: "1.8 km", 
//     waitTime: "11 min",
//     open: true, 
//     image: "💻",
//     established: "Since 2015",
//     clientBase: "280+ Clients",
//     efficiency: "96% Success Rate",
//     serviceLevel: "Enterprise",
//     premiumPartner: true,
//     contact: "+91 98765 12340",
//     email: "digitaldoc@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 9:00 PM",
//       weekends: "9:00 AM - 8:00 PM"
//     }
//   },
//   { 
//     id: 11,
//     name: "Speedy Copy", 
//     address: "Anna Nagar, Chennai", 
//     services: "Xerox, Printing", 
//     rating: 4.3, 
//     reviews: 78,
//     distance: "0.9 km", 
//     waitTime: "6 min",
//     open: true, 
//     image: "📠",
//     established: "Since 2018",
//     clientBase: "210+ Clients",
//     efficiency: "93% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 87654 01234",
//     email: "speedycopy@email.com",
//     workingHours: {
//       weekdays: "8:30 AM - 8:30 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 12,
//     name: "PrintPro", 
//     address: "T Nagar, Chennai", 
//     services: "Lamination, Binding", 
//     rating: 4.2, 
//     reviews: 69,
//     distance: "1.1 km", 
//     waitTime: "10 min",
//     open: true, 
//     image: "📝",
//     established: "Since 2016",
//     clientBase: "200+ Clients",
//     efficiency: "92% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 76543 90123",
//     email: "printpro@email.com",
//     workingHours: {
//       weekdays: "9:00 AM - 8:00 PM",
//       weekends: "9:30 AM - 6:30 PM"
//     }
//   },
//   { 
//     id: 13,
//     name: "Xpress Docs", 
//     address: "Adyar, Chennai", 
//     services: "Color Print, Scan", 
//     rating: 4.5, 
//     reviews: 91,
//     distance: "0.7 km", 
//     waitTime: "8 min",
//     open: false, 
//     image: "📂",
//     established: "Since 2019",
//     clientBase: "170+ Clients",
//     efficiency: "94% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 65432 89012",
//     email: "xpressdocs@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 8:00 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 14,
//     name: "Copy & Go", 
//     address: "Tambaram, Chennai", 
//     services: "Printing, Xerox", 
//     rating: 4.0, 
//     reviews: 62,
//     distance: "2.0 km", 
//     waitTime: "13 min",
//     open: true, 
//     image: "✂",
//     established: "Since 2020",
//     clientBase: "140+ Clients",
//     efficiency: "89% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 54321 78901",
//     email: "copyandgo@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 9:00 PM",
//       weekends: "8:30 AM - 8:00 PM"
//     }
//   },
//   { 
//     id: 15,
//     name: "PrintXpress", 
//     address: "Velachery, Chennai", 
//     services: "Scanning, Xerox", 
//     rating: 4.6, 
//     reviews: 85,
//     distance: "1.6 km", 
//     waitTime: "9 min",
//     open: true, 
//     image: "🖨",
//     established: "Since 2018",
//     clientBase: "230+ Clients",
//     efficiency: "95% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 43210 67890",
//     email: "printxpress@email.com",
//     workingHours: {
//       weekdays: "8:30 AM - 8:30 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 16,
//     name: "Xerox Point", 
//     address: "Porur, Chennai", 
//     services: "Binding, Copy", 
//     rating: 4.1, 
//     reviews: 73,
//     distance: "3.3 km", 
//     waitTime: "16 min",
//     open: true, 
//     image: "📑",
//     established: "Since 2017",
//     clientBase: "185+ Clients",
//     efficiency: "90% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 32109 56789",
//     email: "xeroxpoint@email.com",
//     workingHours: {
//       weekdays: "9:00 AM - 8:00 PM",
//       weekends: "9:30 AM - 6:30 PM"
//     }
//   },
//   { 
//     id: 17,
//     name: "QuickCopy", 
//     address: "Guindy, Chennai", 
//     services: "Print, Scan", 
//     rating: 4.4, 
//     reviews: 79,
//     distance: "1.0 km", 
//     waitTime: "7 min",
//     open: false, 
//     image: "⚡",
//     established: "Since 2021",
//     clientBase: "155+ Clients",
//     efficiency: "93% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 21098 45678",
//     email: "quickcopy@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 8:00 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 18,
//     name: "Digital Prints", 
//     address: "Mylapore, Chennai", 
//     services: "Color Print, Laminating", 
//     rating: 4.8, 
//     reviews: 121,
//     distance: "1.7 km", 
//     waitTime: "10 min",
//     open: true, 
//     image: "💻",
//     established: "Since 2016",
//     clientBase: "270+ Clients",
//     efficiency: "97% Success Rate",
//     serviceLevel: "Enterprise",
//     premiumPartner: true,
//     contact: "+91 10987 34567",
//     email: "digitalprints@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 9:00 PM",
//       weekends: "9:00 AM - 8:00 PM"
//     }
//   },
//   { 
//     id: 19,
//     name: "Express Prints", 
//     address: "Anna Nagar, Chennai", 
//     services: "Xerox, Scanning", 
//     rating: 4.3, 
//     reviews: 82,
//     distance: "0.8 km", 
//     waitTime: "5 min",
//     open: true, 
//     image: "📠",
//     established: "Since 2019",
//     clientBase: "195+ Clients",
//     efficiency: "94% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 98765 23456",
//     email: "expressprints@email.com",
//     workingHours: {
//       weekdays: "8:30 AM - 8:30 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 20,
//     name: "Fast Copy", 
//     address: "T Nagar, Chennai", 
//     services: "Printing, Copy", 
//     rating: 4.2, 
//     reviews: 74,
//     distance: "1.2 km", 
//     waitTime: "11 min",
//     open: true, 
//     image: "📝",
//     established: "Since 2017",
//     clientBase: "205+ Clients",
//     efficiency: "92% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 87654 12345",
//     email: "fastcopy@email.com",
//     workingHours: {
//       weekdays: "9:00 AM - 8:00 PM",
//       weekends: "9:30 AM - 6:30 PM"
//     }
//   },
//   { 
//     id: 21,
//     name: "Print Hub", 
//     address: "Adyar, Chennai", 
//     services: "Scan, Color Print", 
//     rating: 4.5, 
//     reviews: 88,
//     distance: "0.6 km", 
//     waitTime: "7 min",
//     open: false, 
//     image: "📂",
//     established: "Since 2020",
//     clientBase: "165+ Clients",
//     efficiency: "95% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 76543 01234",
//     email: "printhub@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 8:00 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 22,
//     name: "Copy Center", 
//     address: "Tambaram, Chennai", 
//     services: "Xerox, Laminating", 
//     rating: 4.0, 
//     reviews: 67,
//     distance: "2.2 km", 
//     waitTime: "14 min",
//     open: true, 
//     image: "✂",
//     established: "Since 2018",
//     clientBase: "145+ Clients",
//     efficiency: "88% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 65432 90123",
//     email: "copycenter@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 9:00 PM",
//       weekends: "8:30 AM - 8:00 PM"
//     }
//   },
//   { 
//     id: 23,
//     name: "Smart Copy Corner", 
//     address: "Velachery, Chennai", 
//     services: "Printing, Scan, Binding", 
//     rating: 4.3, 
//     reviews: 81,
//     distance: "1.3 km", 
//     waitTime: "8 min",
//     open: true, 
//     image: "🖨",
//     established: "Since 2019",
//     clientBase: "215+ Clients",
//     efficiency: "94% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 54321 89012",
//     email: "smartcopy@email.com",
//     workingHours: {
//       weekdays: "8:30 AM - 8:30 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 24,
//     name: "Elite Print House", 
//     address: "Porur, Chennai", 
//     services: "Photo Copy, Color Print", 
//     rating: 4.4, 
//     reviews: 77,
//     distance: "3.0 km", 
//     waitTime: "15 min",
//     open: true, 
//     image: "📘",
//     established: "Since 2016",
//     clientBase: "195+ Clients",
//     efficiency: "93% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 43210 78901",
//     email: "eliteprint@email.com",
//     workingHours: {
//       weekdays: "9:00 AM - 8:00 PM",
//       weekends: "9:30 AM - 6:30 PM"
//     }
//   },
//   { 
//     id: 25,
//     name: "Modern Xerox Studio", 
//     address: "Guindy, Chennai", 
//     services: "Scan, Binding", 
//     rating: 4.5, 
//     reviews: 86,
//     distance: "1.0 km", 
//     waitTime: "6 min",
//     open: false, 
//     image: "🖱",
//     established: "Since 2021",
//     clientBase: "160+ Clients",
//     efficiency: "96% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 32109 67890",
//     email: "modernxerox@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 8:00 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 26,
//     name: "DocuFast", 
//     address: "Mylapore, Chennai", 
//     services: "Online Print, Scanning", 
//     rating: 4.7, 
//     reviews: 105,
//     distance: "1.6 km", 
//     waitTime: "9 min",
//     open: true, 
//     image: "🧾",
//     established: "Since 2015",
//     clientBase: "290+ Clients",
//     efficiency: "97% Success Rate",
//     serviceLevel: "Enterprise",
//     premiumPartner: true,
//     contact: "+91 21098 56789",
//     email: "docufast@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 9:00 PM",
//       weekends: "9:00 AM - 8:00 PM"
//     }
//   },
//   { 
//     id: 27,
//     name: "PaperWorks", 
//     address: "Anna Nagar, Chennai", 
//     services: "Copy, Lamination", 
//     rating: 4.2, 
//     reviews: 72,
//     distance: "0.9 km", 
//     waitTime: "7 min",
//     open: true, 
//     image: "📜",
//     established: "Since 2018",
//     clientBase: "200+ Clients",
//     efficiency: "92% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 10987 45678",
//     email: "paperworks@email.com",
//     workingHours: {
//       weekdays: "8:30 AM - 8:30 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 28,
//     name: "QuickDoc", 
//     address: "T Nagar, Chennai", 
//     services: "Xerox, Scan, Print", 
//     rating: 4.3, 
//     reviews: 79,
//     distance: "1.1 km", 
//     waitTime: "10 min",
//     open: true, 
//     image: "📋",
//     established: "Since 2017",
//     clientBase: "210+ Clients",
//     efficiency: "93% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 98765 34567",
//     email: "quickdoc@email.com",
//     workingHours: {
//       weekdays: "9:00 AM - 8:00 PM",
//       weekends: "9:30 AM - 6:30 PM"
//     }
//   },
//   { 
//     id: 29,
//     name: "Star Print Zone", 
//     address: "Adyar, Chennai", 
//     services: "Binding, Copy, Color Print", 
//     rating: 4.6, 
//     reviews: 94,
//     distance: "0.7 km", 
//     waitTime: "8 min",
//     open: true, 
//     image: "💫",
//     established: "Since 2019",
//     clientBase: "175+ Clients",
//     efficiency: "95% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 87654 23456",
//     email: "starprint@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 8:00 PM",
//       weekends: "9:00 AM - 7:00 PM"
//     }
//   },
//   { 
//     id: 30,
//     name: "CopyCity", 
//     address: "Tambaram, Chennai", 
//     services: "Xerox, Lamination", 
//     rating: 4.1, 
//     reviews: 68,
//     distance: "2.4 km", 
//     waitTime: "13 min",
//     open: true, 
//     image: "🏙",
//     established: "Since 2020",
//     clientBase: "150+ Clients",
//     efficiency: "89% Success Rate",
//     serviceLevel: "Standard",
//     premiumPartner: false,
//     contact: "+91 76543 12345",
//     email: "copycity@email.com",
//     workingHours: {
//       weekdays: "8:00 AM - 9:00 PM",
//       weekends: "8:30 AM - 8:00 PM"
//     }
//   }
// ];

// export default function Shops() {
//   const [filterPlace, setFilterPlace] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [visibleCount, setVisibleCount] = useState(4);
//   const [loading, setLoading] = useState(false);

//   const filteredShops = shops.filter((shop) => {
//     const matchesPlace = filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
//     const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) || shop.address.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesPlace && matchesSearch;
//   });

//   const shopsToShow = filteredShops.slice(0, visibleCount);
//   const hasMoreShops = visibleCount < filteredShops.length;
//   const totalShops = filteredShops.length;

//   const handleShowMore = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setVisibleCount(prevCount => Math.min(prevCount + 4, totalShops));
//       setLoading(false);
//     }, 500);
//   };

//   const handleShowLess = () => {
//     setVisibleCount(4);
//   };

//   useEffect(() => {
//     setVisibleCount(4);
//   }, [filterPlace, searchQuery]);

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 relative overflow-hidden">

//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Premium Printing & Xerox Services
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Find the best corporate document solutions near you with verified ratings and service details
//           </p>
//         </div>

//         {/* Filters Section */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8">
//           <div className="flex flex-col md:flex-row gap-4 items-center">
//             <div className="flex-1 w-full">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <span className="text-gray-400">🔍</span>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search by shop name or location..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
//                 />
//               </div>
//             </div>

//             <div className="w-full md:w-auto">
//               <select
//                 value={filterPlace}
//                 onChange={(e) => setFilterPlace(e.target.value)}
//                 className="w-full md:w-auto px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
//               >
//                 <option value="All">All Areas</option>
//                 <option value="Anna Nagar">Anna Nagar</option>
//                 <option value="T Nagar">T Nagar</option>
//                 <option value="Adyar">Adyar</option>
//                 <option value="Tambaram">Tambaram</option>
//                 <option value="Velachery">Velachery</option>
//                 <option value="Porur">Porur</option>
//                 <option value="Guindy">Guindy</option>
//                 <option value="Mylapore">Mylapore</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Results Counter */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="text-gray-700">
//             <span className="font-semibold text-blue-600">{totalShops}</span> shops found
//             {filterPlace !== "All" && (
//               <span> in <span className="font-semibold text-blue-600">{filterPlace}</span></span>
//             )}
//           </div>
//           <div className="text-sm text-gray-500">
//             Showing <span className="text-blue-600 font-medium">{shopsToShow.length}</span> of {totalShops}
//           </div>
//         </div>

//         {/* Shop Cards Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           {shopsToShow.map((shop) => (
//             <div
//               key={shop.id}
//               className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
//             >
//               {/* Card Header */}
//               <div className="p-5 border-b border-gray-100">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-xl font-bold text-gray-900">{shop.name}</h3>
//                   <div className="flex items-center space-x-2">
//                     {shop.premiumPartner && (
//                       <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                         Premium Partner
//                       </span>
//                     )}
//                     <div className={`px-2.5 py-0.5 rounded text-xs font-medium ${
//                       shop.open ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                     }`}>
//                       {shop.open ? "OPEN" : "CLOSED"}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-2 text-gray-600">
//                   <span>📍</span>
//                   <span>{shop.address}</span>
//                 </div>
//               </div>

//               {/* Business Details */}
//               <div className="p-5 border-b border-gray-100">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <div className="text-sm text-gray-500 mb-1">Business Location</div>
//                     <div className="font-medium">{shop.address.split(",")[0]}</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 mb-1">Client Base</div>
//                     <div className="font-medium">{shop.clientBase}</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 mb-1">Established</div>
//                     <div className="font-medium">{shop.established}</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 mb-1">Efficiency</div>
//                     <div className="font-medium">{shop.efficiency}</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Core Services */}
//               <div className="p-5 border-b border-gray-100">
//                 <h4 className="text-sm font-semibold text-gray-900 mb-2">CORE SERVICES</h4>
//                 <p className="text-gray-700">{shop.services}</p>
//               </div>

//               {/* Footer with Action Buttons */}
//               <div className="p-5">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <div className="text-sm text-gray-500">Distance</div>
//                       <div className="font-medium">{shop.distance}</div>
//                     </div>
//                     <div>
//                       <div className="text-sm text-gray-500">Wait Time</div>
//                       <div className="font-medium">{shop.waitTime}</div>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-4">
//                     <div className="text-right">
//                       <div className="text-sm text-gray-500">Service Level</div>
//                       <div className="font-medium">{shop.serviceLevel}</div>
//                     </div>

//                     <div className="flex space-x-2">
//                       <Link 
//                         to={`/shop/${shop.id}`}
//                         className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
//                       >
//                         View Details
//                       </Link>
//                       <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 font-medium rounded-lg transition-colors duration-200">
//                         Schedule Service
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Show More / Show Less Buttons */}
//         <div className="text-center mb-8">
//           {hasMoreShops && (
//             <button
//               onClick={handleShowMore}
//               disabled={loading}
//               className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Loading...
//                 </>
//               ) : (
//                 `Show More (${totalShops - visibleCount} remaining)`
//               )}
//             </button>
//           )}

//           {visibleCount > 4 && (
//             <button
//               onClick={handleShowLess}
//               className="mt-4 px-6 py-2 text-blue-600 hover:text-blue-800 font-medium rounded-lg transition-colors duration-200"
//             >
//               Show Less
//             </button>
//           )}
//         </div>

//         {/* Results Summary */}
//         <div className="text-center py-6 border-t border-gray-200">
//           <div className="text-gray-600">
//             <span className="font-medium">{totalShops}</span> shops available • 
//             <span className="text-green-600 font-medium ml-2">
//               {shops.filter(shop => shop.open).length} open now
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 🏪 30 Complete Shop Data with Full Details
const shops = [
  {
    id: 1,
    name: "Digital Print Solutions",
    address: "Tech Park, Velachery, Chennai",
    services: "Digital Printing, High-Res Scanning, Color Services",
    rating: 4.7,
    reviews: 128,
    distance: "1.5 km",
    waitTime: "6 min",
    open: true,
    image: "🖨",
    established: "Since 2017",
    clientBase: "400+ Corporate",
    efficiency: "96% Success Rate",
    serviceLevel: "Enterprise",
    premiumPartner: true,
    contact: "+91 98765 43210",
    email: "info@digitalprintsolutions.com",
    workingHours: {
      weekdays: "8:00 AM - 9:00 PM",
      weekends: "9:00 AM - 8:00 PM"
    }
  },
  {
    id: 2,
    name: "Corporate Document Center",
    address: "Financial District, T Nagar, Chennai",
    services: "Color Printing, Lamination, Binding Services",
    rating: 4.6,
    reviews: 95,
    distance: "1.2 km",
    waitTime: "8 min",
    open: true,
    image: "📄",
    established: "Since 2015",
    clientBase: "300+ Businesses",
    efficiency: "95% Success Rate",
    serviceLevel: "Enterprise",
    premiumPartner: true,
    contact: "+91 87654 32109",
    email: "support@corporatedoc.com",
    workingHours: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "10:00 AM - 6:00 PM"
    }
  },
  {
    id: 3,
    name: "Smart Xerox Center",
    address: "Anna Nagar, Chennai",
    services: "Xerox, Printing, Scanning",
    rating: 4.5,
    reviews: 87,
    distance: "0.8 km",
    waitTime: "5 min",
    open: true,
    image: "🖨",
    established: "Since 2018",
    clientBase: "250+ Clients",
    efficiency: "94% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 76543 21098",
    email: "smartxerox@email.com",
    workingHours: {
      weekdays: "8:30 AM - 8:30 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 4,
    name: "Speed Print & Xerox",
    address: "T Nagar, Chennai",
    services: "Color Print, Lamination",
    rating: 4.2,
    reviews: 76,
    distance: "1.2 km",
    waitTime: "10 min",
    open: true,
    image: "📄",
    established: "Since 2016",
    clientBase: "200+ Clients",
    efficiency: "92% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 65432 10987",
    email: "speedprint@email.com",
    workingHours: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "9:30 AM - 6:30 PM"
    }
  },
  {
    id: 5,
    name: "Copy World",
    address: "Adyar, Chennai",
    services: "Xerox, Binding, Printout",
    rating: 4.7,
    reviews: 112,
    distance: "0.5 km",
    waitTime: "7 min",
    open: false,
    image: "📑",
    established: "Since 2019",
    clientBase: "180+ Clients",
    efficiency: "93% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 54321 09876",
    email: "copyworld@email.com",
    workingHours: {
      weekdays: "8:00 AM - 8:00 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 6,
    name: "Express Xerox Point",
    address: "Tambaram, Chennai",
    services: "Online Applications, Printouts",
    rating: 4.0,
    reviews: 64,
    distance: "2.1 km",
    waitTime: "12 min",
    open: true,
    image: "⚡",
    established: "Since 2020",
    clientBase: "150+ Clients",
    efficiency: "90% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 43210 98765",
    email: "expressxerox@email.com",
    workingHours: {
      weekdays: "8:00 AM - 9:00 PM",
      weekends: "8:30 AM - 8:00 PM"
    }
  },
  {
    id: 7,
    name: "Quick Print Hub",
    address: "Velachery, Chennai",
    services: "Xerox, Color Print, Scan",
    rating: 4.6,
    reviews: 89,
    distance: "1.5 km",
    waitTime: "9 min",
    open: true,
    image: "🏪",
    established: "Since 2019",
    clientBase: "220+ Clients",
    efficiency: "94% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 32109 87654",
    email: "quickprinthub@email.com",
    workingHours: {
      weekdays: "8:30 AM - 8:30 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 8,
    name: "Bright Xerox Shop",
    address: "Porur, Chennai",
    services: "Xerox, Photo Copy, Printing",
    rating: 4.1,
    reviews: 71,
    distance: "3.2 km",
    waitTime: "15 min",
    open: true,
    image: "✨",
    established: "Since 2017",
    clientBase: "190+ Clients",
    efficiency: "91% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 21098 76543",
    email: "brightxerox@email.com",
    workingHours: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "9:30 AM - 6:30 PM"
    }
  },
  {
    id: 9,
    name: "Green Print & Copy",
    address: "Guindy, Chennai",
    services: "Xerox, Online Services",
    rating: 4.4,
    reviews: 83,
    distance: "0.9 km",
    waitTime: "8 min",
    open: false,
    image: "🌿",
    established: "Since 2021",
    clientBase: "160+ Clients",
    efficiency: "92% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 10987 65432",
    email: "greenprint@email.com",
    workingHours: {
      weekdays: "8:00 AM - 8:00 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 10,
    name: "Digital Doc Center",
    address: "Mylapore, Chennai",
    services: "Scanning, Lamination, Printing",
    rating: 4.8,
    reviews: 134,
    distance: "1.8 km",
    waitTime: "11 min",
    open: true,
    image: "💻",
    established: "Since 2015",
    clientBase: "280+ Clients",
    efficiency: "96% Success Rate",
    serviceLevel: "Enterprise",
    premiumPartner: true,
    contact: "+91 98765 12340",
    email: "digitaldoc@email.com",
    workingHours: {
      weekdays: "8:00 AM - 9:00 PM",
      weekends: "9:00 AM - 8:00 PM"
    }
  },
  {
    id: 11,
    name: "Speedy Copy",
    address: "Anna Nagar, Chennai",
    services: "Xerox, Printing",
    rating: 4.3,
    reviews: 78,
    distance: "0.9 km",
    waitTime: "6 min",
    open: true,
    image: "📠",
    established: "Since 2018",
    clientBase: "210+ Clients",
    efficiency: "93% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 87654 01234",
    email: "speedycopy@email.com",
    workingHours: {
      weekdays: "8:30 AM - 8:30 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 12,
    name: "PrintPro",
    address: "T Nagar, Chennai",
    services: "Lamination, Binding",
    rating: 4.2,
    reviews: 69,
    distance: "1.1 km",
    waitTime: "10 min",
    open: true,
    image: "📝",
    established: "Since 2016",
    clientBase: "200+ Clients",
    efficiency: "92% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 76543 90123",
    email: "printpro@email.com",
    workingHours: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "9:30 AM - 6:30 PM"
    }
  },
  {
    id: 13,
    name: "Xpress Docs",
    address: "Adyar, Chennai",
    services: "Color Print, Scan",
    rating: 4.5,
    reviews: 91,
    distance: "0.7 km",
    waitTime: "8 min",
    open: false,
    image: "📂",
    established: "Since 2019",
    clientBase: "170+ Clients",
    efficiency: "94% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 65432 89012",
    email: "xpressdocs@email.com",
    workingHours: {
      weekdays: "8:00 AM - 8:00 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 14,
    name: "Copy & Go",
    address: "Tambaram, Chennai",
    services: "Printing, Xerox",
    rating: 4.0,
    reviews: 62,
    distance: "2.0 km",
    waitTime: "13 min",
    open: true,
    image: "✂",
    established: "Since 2020",
    clientBase: "140+ Clients",
    efficiency: "89% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 54321 78901",
    email: "copyandgo@email.com",
    workingHours: {
      weekdays: "8:00 AM - 9:00 PM",
      weekends: "8:30 AM - 8:00 PM"
    }
  },
  {
    id: 15,
    name: "PrintXpress",
    address: "Velachery, Chennai",
    services: "Scanning, Xerox",
    rating: 4.6,
    reviews: 85,
    distance: "1.6 km",
    waitTime: "9 min",
    open: true,
    image: "🖨",
    established: "Since 2018",
    clientBase: "230+ Clients",
    efficiency: "95% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 43210 67890",
    email: "printxpress@email.com",
    workingHours: {
      weekdays: "8:30 AM - 8:30 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 16,
    name: "Xerox Point",
    address: "Porur, Chennai",
    services: "Binding, Copy",
    rating: 4.1,
    reviews: 73,
    distance: "3.3 km",
    waitTime: "16 min",
    open: true,
    image: "📑",
    established: "Since 2017",
    clientBase: "185+ Clients",
    efficiency: "90% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 32109 56789",
    email: "xeroxpoint@email.com",
    workingHours: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "9:30 AM - 6:30 PM"
    }
  },
  {
    id: 17,
    name: "QuickCopy",
    address: "Guindy, Chennai",
    services: "Print, Scan",
    rating: 4.4,
    reviews: 79,
    distance: "1.0 km",
    waitTime: "7 min",
    open: false,
    image: "⚡",
    established: "Since 2021",
    clientBase: "155+ Clients",
    efficiency: "93% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 21098 45678",
    email: "quickcopy@email.com",
    workingHours: {
      weekdays: "8:00 AM - 8:00 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 18,
    name: "Digital Prints",
    address: "Mylapore, Chennai",
    services: "Color Print, Laminating",
    rating: 4.8,
    reviews: 121,
    distance: "1.7 km",
    waitTime: "10 min",
    open: true,
    image: "💻",
    established: "Since 2016",
    clientBase: "270+ Clients",
    efficiency: "97% Success Rate",
    serviceLevel: "Enterprise",
    premiumPartner: true,
    contact: "+91 10987 34567",
    email: "digitalprints@email.com",
    workingHours: {
      weekdays: "8:00 AM - 9:00 PM",
      weekends: "9:00 AM - 8:00 PM"
    }
  },
  {
    id: 19,
    name: "Express Prints",
    address: "Anna Nagar, Chennai",
    services: "Xerox, Scanning",
    rating: 4.3,
    reviews: 82,
    distance: "0.8 km",
    waitTime: "5 min",
    open: true,
    image: "📠",
    established: "Since 2019",
    clientBase: "195+ Clients",
    efficiency: "94% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 98765 23456",
    email: "expressprints@email.com",
    workingHours: {
      weekdays: "8:30 AM - 8:30 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 20,
    name: "Fast Copy",
    address: "T Nagar, Chennai",
    services: "Printing, Copy",
    rating: 4.2,
    reviews: 74,
    distance: "1.2 km",
    waitTime: "11 min",
    open: true,
    image: "📝",
    established: "Since 2017",
    clientBase: "205+ Clients",
    efficiency: "92% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 87654 12345",
    email: "fastcopy@email.com",
    workingHours: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "9:30 AM - 6:30 PM"
    }
  },
  {
    id: 21,
    name: "Print Hub",
    address: "Adyar, Chennai",
    services: "Scan, Color Print",
    rating: 4.5,
    reviews: 88,
    distance: "0.6 km",
    waitTime: "7 min",
    open: false,
    image: "📂",
    established: "Since 2020",
    clientBase: "165+ Clients",
    efficiency: "95% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 76543 01234",
    email: "printhub@email.com",
    workingHours: {
      weekdays: "8:00 AM - 8:00 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 22,
    name: "Copy Center",
    address: "Tambaram, Chennai",
    services: "Xerox, Laminating",
    rating: 4.0,
    reviews: 67,
    distance: "2.2 km",
    waitTime: "14 min",
    open: true,
    image: "✂",
    established: "Since 2018",
    clientBase: "145+ Clients",
    efficiency: "88% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 65432 90123",
    email: "copycenter@email.com",
    workingHours: {
      weekdays: "8:00 AM - 9:00 PM",
      weekends: "8:30 AM - 8:00 PM"
    }
  },
  {
    id: 23,
    name: "Smart Copy Corner",
    address: "Velachery, Chennai",
    services: "Printing, Scan, Binding",
    rating: 4.3,
    reviews: 81,
    distance: "1.3 km",
    waitTime: "8 min",
    open: true,
    image: "🖨",
    established: "Since 2019",
    clientBase: "215+ Clients",
    efficiency: "94% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 54321 89012",
    email: "smartcopy@email.com",
    workingHours: {
      weekdays: "8:30 AM - 8:30 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 24,
    name: "Elite Print House",
    address: "Porur, Chennai",
    services: "Photo Copy, Color Print",
    rating: 4.4,
    reviews: 77,
    distance: "3.0 km",
    waitTime: "15 min",
    open: true,
    image: "📘",
    established: "Since 2016",
    clientBase: "195+ Clients",
    efficiency: "93% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 43210 78901",
    email: "eliteprint@email.com",
    workingHours: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "9:30 AM - 6:30 PM"
    }
  },
  {
    id: 25,
    name: "Modern Xerox Studio",
    address: "Guindy, Chennai",
    services: "Scan, Binding",
    rating: 4.5,
    reviews: 86,
    distance: "1.0 km",
    waitTime: "6 min",
    open: false,
    image: "🖱",
    established: "Since 2021",
    clientBase: "160+ Clients",
    efficiency: "96% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 32109 67890",
    email: "modernxerox@email.com",
    workingHours: {
      weekdays: "8:00 AM - 8:00 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 26,
    name: "DocuFast",
    address: "Mylapore, Chennai",
    services: "Online Print, Scanning",
    rating: 4.7,
    reviews: 105,
    distance: "1.6 km",
    waitTime: "9 min",
    open: true,
    image: "🧾",
    established: "Since 2015",
    clientBase: "290+ Clients",
    efficiency: "97% Success Rate",
    serviceLevel: "Enterprise",
    premiumPartner: true,
    contact: "+91 21098 56789",
    email: "docufast@email.com",
    workingHours: {
      weekdays: "8:00 AM - 9:00 PM",
      weekends: "9:00 AM - 8:00 PM"
    }
  },
  {
    id: 27,
    name: "PaperWorks",
    address: "Anna Nagar, Chennai",
    services: "Copy, Lamination",
    rating: 4.2,
    reviews: 72,
    distance: "0.9 km",
    waitTime: "7 min",
    open: true,
    image: "📜",
    established: "Since 2018",
    clientBase: "200+ Clients",
    efficiency: "92% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 10987 45678",
    email: "paperworks@email.com",
    workingHours: {
      weekdays: "8:30 AM - 8:30 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 28,
    name: "QuickDoc",
    address: "T Nagar, Chennai",
    services: "Xerox, Scan, Print",
    rating: 4.3,
    reviews: 79,
    distance: "1.1 km",
    waitTime: "10 min",
    open: true,
    image: "📋",
    established: "Since 2017",
    clientBase: "210+ Clients",
    efficiency: "93% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 98765 34567",
    email: "quickdoc@email.com",
    workingHours: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "9:30 AM - 6:30 PM"
    }
  },
  {
    id: 29,
    name: "Star Print Zone",
    address: "Adyar, Chennai",
    services: "Binding, Copy, Color Print",
    rating: 4.6,
    reviews: 94,
    distance: "0.7 km",
    waitTime: "8 min",
    open: true,
    image: "💫",
    established: "Since 2019",
    clientBase: "175+ Clients",
    efficiency: "95% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 87654 23456",
    email: "starprint@email.com",
    workingHours: {
      weekdays: "8:00 AM - 8:00 PM",
      weekends: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: 30,
    name: "CopyCity",
    address: "Tambaram, Chennai",
    services: "Xerox, Lamination",
    rating: 4.1,
    reviews: 68,
    distance: "2.4 km",
    waitTime: "13 min",
    open: true,
    image: "🏙",
    established: "Since 2020",
    clientBase: "150+ Clients",
    efficiency: "89% Success Rate",
    serviceLevel: "Standard",
    premiumPartner: false,
    contact: "+91 76543 12345",
    email: "copycity@email.com",
    workingHours: {
      weekdays: "8:00 AM - 9:00 PM",
      weekends: "8:30 AM - 8:00 PM"
    }
  }
];

export default function Shops() {
  const [filterPlace, setFilterPlace] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(false);

  const filteredShops = shops.filter((shop) => {
    const matchesPlace = filterPlace === "All" || shop.address.toLowerCase().includes(filterPlace.toLowerCase());
    const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) || shop.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlace && matchesSearch;
  });

  const shopsToShow = filteredShops.slice(0, visibleCount);
  const hasMoreShops = visibleCount < filteredShops.length;
  const totalShops = filteredShops.length;

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prevCount => Math.min(prevCount + 4, totalShops));
      setLoading(false);
    }, 500);
  };

  const handleShowLess = () => {
    setVisibleCount(4);
  };

  const handleScheduleService = (shop) => {
    alert(`Scheduling service for ${shop.name}\nContact: ${shop.contact}\nEmail: ${shop.email}`);
    // Here you can implement your scheduling logic
    // For example: navigate to scheduling page, open modal, etc.
  };

  useEffect(() => {
    setVisibleCount(4);
  }, [filterPlace, searchQuery]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 py-18">
      
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Printing Partners
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Connect with certified business printing centers offering enterprise-grade solutions 
            for all your corporate document needs.
          </p>
        </div>
        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
                <input
                  type="text"
                  placeholder="Search by shop name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="w-full md:w-auto">
              <select
                value={filterPlace}
                onChange={(e) => setFilterPlace(e.target.value)}
                className="w-full md:w-auto px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
              >
                <option value="All">All Areas</option>
                <option value="Anna Nagar">Anna Nagar</option>
                <option value="T Nagar">T Nagar</option>
                <option value="Adyar">Adyar</option>
                <option value="Tambaram">Tambaram</option>
                <option value="Velachery">Velachery</option>
                <option value="Porur">Porur</option>
                <option value="Guindy">Guindy</option>
                <option value="Mylapore">Mylapore</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-700">
            <span className="font-semibold text-blue-600">{totalShops}</span> shops found
            {filterPlace !== "All" && (
              <span> in <span className="font-semibold text-blue-600">{filterPlace}</span></span>
            )}
          </div>
          <div className="text-sm text-gray-500">
            Showing <span className="text-blue-600 font-medium">{shopsToShow.length}</span> of {totalShops}
          </div>
        </div>

        {/* Shop Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {shopsToShow.map((shop) => (
            <div
              key={shop.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{shop.name}</h3>
                  <div className="flex items-center space-x-2">
                    {shop.premiumPartner && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Premium Partner
                      </span>
                    )}
                    <div className={`px-2.5 py-0.5 rounded text-xs font-medium ${shop.open ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}>
                      {shop.open ? "OPEN" : "CLOSED"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-gray-600">
                  <span>📍</span>
                  <span>{shop.address}</span>
                </div>
              </div>

              {/* Business Details */}
              <div className="p-5 border-b border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Business Location</div>
                    <div className="font-medium">{shop.address.split(",")[0]}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Client Base</div>
                    <div className="font-medium">{shop.clientBase}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Established</div>
                    <div className="font-medium">{shop.established}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Efficiency</div>
                    <div className="font-medium">{shop.efficiency}</div>
                  </div>
                </div>
              </div>

              {/* Core Services */}
              <div className="p-5 border-b border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">CORE SERVICES</h4>
                <p className="text-gray-700">{shop.services}</p>
              </div>

              {/* Footer with Single Schedule Service Button */}
              <div className="p-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Distance</div>
                      <div className="font-medium">{shop.distance}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Wait Time</div>
                      <div className="font-medium">{shop.waitTime}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Service Level</div>
                      <div className="font-medium">{shop.serviceLevel}</div>
                    </div>

                    <Link
                      to="/Allservice"
                      state={{ shop: shop }}
                      className={`px-6 py-3 font-medium rounded-lg transition-all duration-200 text-center block ${shop.open
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
                        }`}
                    >
                      {shop.open ? "Schedule Service" : "Currently Closed"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Buttons */}
        <div className="text-center mb-8">
          {hasMoreShops && (
            <button
              onClick={handleShowMore}
              disabled={loading}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                `Show More (${totalShops - visibleCount} remaining)`
              )}
            </button>
          )}

          {visibleCount > 4 && (
            <button
              onClick={handleShowLess}
              className="mt-4 px-6 py-2 text-blue-600 hover:text-blue-800 font-medium rounded-lg transition-colors duration-200"
            >
              Show Less
            </button>
          )}
        </div>
        
         {/* Enterprise Features */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Professional Network</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Enterprise-grade solutions trusted by leading businesses and corporations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "Secure & Confidential",
                description: "Enterprise-grade security for all your sensitive business documents"
              },
              {
                icon: "⚡",
                title: "Rapid Turnaround",
                description: "Express services with guaranteed delivery timelines"
              },
              {
                icon: "💎",
                title: "Premium Quality",
                description: "Professional-grade equipment and materials for superior results"
              },
              {
                icon: "🔄",
                title: "Scalable Solutions",
                description: "From single documents to bulk corporate orders"
              },
              {
                icon: "📊",
                title: "Detailed Reporting",
                description: "Comprehensive service analytics and usage reports"
              },
              {
                icon: "🌟",
                title: "Dedicated Support",
                description: "Professional account management and technical support"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-200">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Results Summary */}
        <div className="text-center py-6 border-t border-gray-200">
          <div className="text-gray-600">
            <span className="font-medium">{totalShops}</span> shops available •
            <span className="text-green-600 font-medium ml-2">
              {shops.filter(shop => shop.open).length} open now
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}