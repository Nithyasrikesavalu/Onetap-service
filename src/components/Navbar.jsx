// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// import { useEffect, useRef, useState } from "react";
// import SearchButton from "./SearchButton";
// import { Link } from "react-router-dom";

// // const Navbar = () => {
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [language, setLanguage] = useState("en");
// //   const [showNotifications, setShowNotifications] = useState(false);
// //   const notifications = [
// //     { id: 1, message: "PAN card request approved" },
// //     { id: 2, message: "Drone delivery now available!" },
// //   ];

// //   return (
// //     <nav
// //       className={`bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg fixed w-full z-20 top-0 left-0`}
// //     >
// //       <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
// //         {/* Left section */}
// //         <div className="flex items-center space-x-4">
// //           <span className="text-2xl font-semibold text-blue-700 dark:text-white">
// //             OneClickGov
// //           </span>
// //           <button className="text-sm px-4 py-2 rounded bg-blue-200 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-500 text-blue-900 dark:text-white">
// //             Find Xerox Shop
// //           </button>
// //         </div>
// //         {/* Center quick links */}
// //         <div className="hidden md:flex items-center space-x-6">
// //           <Link
// //             to="/request"
// //             className="text-blue-700 dark:text-blue-200 hover:underline"
// //           >
// //             Request Service
// //           </Link>
// //           <Link
// //             to="/track"
// //             className="text-blue-700 dark:text-blue-200 hover:underline"
// //           >
// //             Track Order
// //           </Link>
// //           <Link
// //             to="/upload"
// //             className="text-blue-700 dark:text-blue-200 hover:underline"
// //           >
// //             Upload Document
// //           </Link>
// //         </div>
// //         {/* Right features */}
// //         <div className="flex items-center space-x-2">
// //           <button className="px-4 py-2 rounded bg-green-200 dark:bg-green-700 hover:bg-green-400 dark:hover:bg-green-500 text-green-900 dark:text-white font-medium">
// //             AI Assistant
// //           </button>
// //           <select
// //             value={language}
// //             onChange={(e) => setLanguage(e.target.value)}
// //             className="bg-gray-100 dark:bg-gray-800 text-blue-700 dark:text-white rounded px-2 py-1 hover:bg-blue-100 dark:hover:bg-blue-900"
// //           >
// //             <option value="en">English</option>
// //             <option value="hi">Hindi</option>
// //             <option value="mr">Marathi</option>
// //           </select>
// //           <button className="rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-2 hover:bg-blue-300 dark:hover:bg-blue-800 transition">
// //             <span className="sr-only">Voice Input</span>
// //             <svg
// //               className="w-5 h-5 text-blue-700 dark:text-blue-200"
// //               viewBox="0 0 24 24"
// //               fill="none"
// //             >
// //               <path
// //                 d="M12 3v10m0 0c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4s-4 1.79-4 4v2c0 2.21 1.79 4 4 4z"
// //                 stroke="currentColor"
// //               />
// //             </svg>
// //           </button>
// //           {/* Notification dropdown */}
// //           <div className="relative">
// //             <button
// //               onClick={() => setShowNotifications((n) => !n)}
// //               className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 relative"
// //             >
// //               <svg
// //                 className="w-6 h-6 text-blue-700 dark:text-blue-200"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6 6 0 10-12 0v3c0 .386-.149.735-.405 1.095L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
// //               </svg>
// //               <span className="absolute top-1 right-2 w-3 h-3 bg-red-500 rounded-full"></span>
// //             </button>
// //             {showNotifications && (
// //               <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded">
// //                 <ul>
// //                   {notifications.map((n) => (
// //                     <li
// //                       key={n.id}
// //                       className="px-4 py-2 text-blue-900 dark:text-blue-200 border-b last:border-b-0 border-gray-100 dark:border-gray-800"
// //                     >
// //                       {n.message}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}
// //           </div>
// //           <button
// //             onClick={() => setDarkMode(!darkMode)}
// //             className="text-xl px-2 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900"
// //           >
// //             <span className="sr-only">Toggle dark mode</span>
// //             <svg
// //               className="w-5 h-5 text-blue-700 dark:text-blue-200"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109 9.79z" />
// //             </svg>
// //           </button>
// //           {/* Profile */}
// //           <div className="relative">
// //             <button className="flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-2 hover:bg-blue-100 dark:hover:bg-blue-900">
// //               <img
// //                 src="https://ui-avatars.com/api/?name=User"
// //                 alt="User profile"
// //                 className="w-6 h-6 rounded-full mr-2"
// //               />
// //               <span className="text-blue-700 dark:text-white font-semibold">
// //                 Profile
// //               </span>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;



// // export default function OneClickGovNavbar() {
// //   return (
// //     <header className="w-full bg-white shadow-sm">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-20">
// //           {/* LEFT: Brand */}
// //           <div className="flex items-center space-x-4">
// //             <div className="flex items-center gap-3">
// //               {/* Round logo with G letter */}
// //               <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">1Cs</div>
// //               <div>
// //                 <div className="text-lg font-semibold">OneClickGov</div>
// //                 <div className="text-xs text-gray-500">Your gateway to Digital India</div>
// //               </div>
// //             </div>

// //             {/* Primary CTA (Find Xerox Shop) */}
// //             <button className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-md text-sm text-blue-700">
// //               {/* Search icon */}
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
// //               </svg>
// //               Find Xerox Shop
// //             </button>
// //           </div>

// //           {/* CENTER: Links with icons */}
// //           <nav className="hidden lg:flex items-center space-x-6 text-sm text-gray-700">
// //             <a href="#" className="flex items-center gap-1 hover:text-blue-600">
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// //               </svg>
// //               Request Service
// //             </a>
// //             <a href="#" className="flex items-center gap-1 hover:text-blue-600">
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// //               </svg>
// //               Track Order
// //             </a>
// //             <a href="#" className="flex items-center gap-1 hover:text-blue-600">
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12h16M4 8h16M4 4h16" />
// //               </svg>
// //               Upload Document
// //             </a>
// //           </nav>

// //           {/* RIGHT: Controls */}
// //           <div className="flex items-center gap-3">
// //             {/* AI Assistant pill */}
// //             <button className="hidden md:inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //                 <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
// //               </svg>
// //               AI Assistant
// //             </button>

// //             {/* Language selector */}
// //             <div className="hidden md:flex items-center space-x-1 border rounded-md px-2 py-1 text-sm text-gray-700">
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //                 <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
// //               </svg>
// //               <select className="bg-transparent outline-none text-sm" defaultValue="en">
// //                 <option value="en">English</option>
// //                 <option value="ta">தமிழ்</option>
// //                 <option value="hi">हिन्दी</option>
// //               </select>
// //             </div>

// //             {/* Notification bell */}
// //             <button className="p-2 rounded-md hover:bg-gray-100">
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //                 <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
// //               </svg>
// //             </button>

// //             {/* Profile circle */}
// //             <div className="flex items-center gap-2">
// //               <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">P</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// export default function Navbar() {

//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsProfileOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const toggleProfileDropdown = () => {
//     setIsProfileOpen(!isProfileOpen);
//   };

//   return (
//     <header className="w-full bg-gradient-to-r from-white to-blue-50 border-b-2 border-blue-100">
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* LEFT: Brand with modern design */}
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center gap-3 group cursor-pointer">
//               {/* Animated logo with gradient */}
//               <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold text-xl shadow-lg transform group-hover:scale-105 transition-all duration-300">
//                 <div className="relative">
//                   1Ts
//                   <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 </div>
//               </div>
//               <div className="transform group-hover:translate-x-1 transition-transform duration-300">
//                 <div className="text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
//                   OneTap Services
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* CENTER: Links with modern hover effects */}
//           {/* <nav className="hidden lg:flex items-center space-x-8 text-sm">
//             <a href="#" className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300">
//               <div className="p-2 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                 </svg>
//               </div>
//               <span className="group-hover:font-semibold transition-all duration-300">Request Service</span>
//             </a>
//             <a href="#" className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300">
//               <div className="p-2 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <span className="group-hover:font-semibold transition-all duration-300">Track Order</span>
//             </a>
//             <a href="#" className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300">
//               <div className="p-2 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12h16M4 8h16M4 4h16" />
//                 </svg>
//               </div>
//               <span className="group-hover:font-semibold transition-all duration-300">Upload Document</span>
//             </a>
//           </nav> */}

//           {/* RIGHT: Modern controls with depth */}
//           <div className="flex items-center gap-4">
//             {/* Primary CTA with modern styling */}
//             {/* <SearchButton /> */}
//             {/* AI Assistant with glowing effect */}
//             <button className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105  transition-all duration-300 border border-green-300 relative overflow-hidden group">
//               <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
//               </svg>
//               AI Assistant
//               <div className="w-2 h-2 bg-white rounded-full ml-1 opacity-75"></div>
//             </button>

//             {/* Language selector with modern design */}
//             {/* <div className="hidden md:flex items-center space-x-2 border-2 border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 bg-white hover:border-blue-300 transition-all duration-300 shadow-sm">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
//               </svg>
//               <select className="bg-transparent outline-none text-sm font-medium cursor-pointer">
//                 <option value="en">English</option>
//                 <option value="ta">தமிழ்</option>
//                 <option value="hi">हिन्दी</option>
//               </select>
//             </div> */}

//             {/* Notification bell with indicator */}
//             {/* <button className="p-3 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-300 shadow-sm relative group">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 group-hover:text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//               </svg>
//               <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//             </button> */}

//             {/* Profile with modern design */}
//             {/* <div className="flex items-center gap-3 group cursor-pointer">
//               <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center text-blue-700 font-bold text-lg border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//             </div> */}
//             {/* Profile with dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <div
//                 className="flex items-center gap-3 group cursor-pointer"
//                 onClick={toggleProfileDropdown}
//               >
//                 <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center text-blue-700 font-bold text-lg border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//               </div>

//               {/* Dropdown Menu */}
//               {isProfileOpen && (
//                 <div className="absolute right-0 top-14 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 py-3 z-50">
//                   {/* User Status */}
//                   <div className="px-4 py-3 border-b border-gray-100">
//                     <p className="text-sm text-gray-500">Welcome to OneTap Services</p>
//                     <p className="text-sm font-medium text-gray-900 mt-1">Sign in to access your account</p>
//                   </div>

//                   {/* Login Button */}
//                   <Link to={"/login"} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 group">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
//                     </svg>
//                     <span className="flex-1 text-left">Login to Your Account</span>
//                     <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                   </Link>

//                   {/* Signup Button */}
//                   <Link to={"/Account"} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 transition-all duration-300 group mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//                     </svg>
//                     <span className="flex-1 text-left">Create New Account</span>
//                     <div className="transform group-hover:translate-x-1 transition-transform duration-300">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </Link>

//                   {/* Divider */}
//                   <div className="px-4 py-2">
//                     <div className="border-t border-gray-200"></div>
//                   </div>

//                   {/* Additional Options */}
//                   <div className="px-1">
//                     <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-all duration-300 group">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                       <span>Settings & Preferences</span>
//                     </a>
//                     <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-all duration-300 group">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                       <span>Help & Support</span>
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-white to-blue-50 border-b-2 border-blue-100 fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LEFT: Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold text-xl shadow-lg transform group-hover:scale-105 transition-all duration-300">
                1Ts
              </div>
              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                <div className="text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  OneTap Services
                </div>
              </div>
            </div>
          </div>

          {/* CENTER: Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm">
            <Link
              to="/request"
              className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              Request Service
            </Link>
            <Link
              to="/track"
              className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              Track Order
            </Link>
            <Link
              to="/upload"
              className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12h16M4 8h16M4 4h16"
                  />
                </svg>
              </div>
              About
            </Link>
          </nav>

          {/* RIGHT: Controls */}
          <div className="flex items-center gap-4">
            {/* AI Assistant */}
            <button className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-green-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"
                />
              </svg>
              AI Assistant
            </button>

            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2 border-2 border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 bg-white hover:border-blue-300 transition-all duration-300 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
              </svg>
              <select className="bg-transparent outline-none text-sm font-medium cursor-pointer">
                <option value="en">English</option>
                <option value="ta">தமிழ்</option>
                <option value="hi">हिन्दी</option>
              </select>
            </div>

            {/* Notification Bell */}
            <button className="p-3 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-300 shadow-sm relative group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 group-hover:text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </button>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center gap-3 group cursor-pointer"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center text-blue-700 font-bold text-lg border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Dropdown menu */}
              {isProfileOpen && (
                <div className="absolute right-0 top-14 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 py-3 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm text-gray-500">
                      Welcome to OneTap Services
                    </p>
                    <p className="text-sm font-medium text-gray-900 mt-1">
                      Sign in to access your account
                    </p>
                  </div>

                  <Link
                    to="/login"
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 16l-4-4m0 0l4-4m-4 4h14"
                      />
                    </svg>
                    <span>Login to Your Account</span>
                  </Link>

                  <Link
                    to="/Account"
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3M9 5l7 7-7 7"
                      />
                    </svg>
                    <span>Create New Account</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white rounded-xl shadow-lg mt-2 p-4 space-y-3">
            <Link to="/request" className="block text-gray-700 hover:text-blue-600">
              Request Service
            </Link>
            <Link to="/track" className="block text-gray-700 hover:text-blue-600">
              Track Order
            </Link>
            <Link to="/upload" className="block text-gray-700 hover:text-blue-600">
              About
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
