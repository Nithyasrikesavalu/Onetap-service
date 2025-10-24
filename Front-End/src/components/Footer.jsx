// import { Facebook, Twitter, Instagram, Linkedin, Star, Truck, Clock, Shield, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white py-12 relative overflow-hidden">

//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
//       </div>

//       {/* Features Banner */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
//             <div className="flex items-center gap-3 mb-3">
//               <div className="p-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg">
//                 <Truck className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="font-semibold text-white">Fast Delivery</h3>
//             </div>
//             <p className="text-slate-300 group-hover:text-white">Next-day delivery across Tamil Nadu</p>
//           </div>

//           <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
//             <div className="flex items-center gap-3 mb-3">
//               <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg">
//                 <Shield className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="font-semibold text-white">Secure & Safe</h3>
//             </div>
//             <p className="text-slate-300 group-hover:text-white">Your documents are protected</p>
//           </div>

//           <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/20 hover:border-amber-400 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
//             <div className="flex items-center gap-3 mb-3">
//               <div className="p-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg">
//                 <Star className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="font-semibold text-white">Rated 4.9/5</h3>
//             </div>
//             <p className="text-slate-300 group-hover:text-white">By 2000+ satisfied customers</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-8">
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
//               OneTap Services
//             </h2>
//             <p className="text-slate-300 mb-6 text-lg leading-relaxed">
//               Digital Docs, Physical Delivery. Serving Villages & Cities across Tamil Nadu.
//             </p>
//             <div className="flex items-center gap-3 text-slate-300 bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-3 rounded-lg border border-slate-700/50">
//               <div className="p-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg">
//                 <Clock className="w-4 h-4 text-white" />
//               </div>
//               <span className="font-medium">24/7 Customer Support</span>
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Services
//             </h3>
//             <ul className="space-y-3 text-slate-300">
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer flex items-center gap-2">
//                 <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
//                 Xerox & Printing
//               </li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer flex items-center gap-2">
//                 <div className="w-1 h-1 bg-green-400 rounded-full"></div>
//                 Govt Documents
//               </li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer flex items-center gap-2">
//                 <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                 Lamination
//               </li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer flex items-center gap-2">
//                 <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
//                 Photo Printing
//               </li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Company
//             </h3>
//             <ul className="space-y-3 text-slate-300">
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">About Us</li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">Careers</li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">Partners</li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">Contact</li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Support
//             </h3>
//             <ul className="space-y-3 text-slate-300">
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">Help Center</li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">FAQs</li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">Track Order</li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">Privacy</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//               Contact
//             </h3>
//             <div className="space-y-3 text-slate-300">
//               <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
//                 <div className="p-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded">
//                   <Phone className="w-3 h-3 text-white" />
//                 </div>
//                 <span>+91 98765 43210</span>
//               </div>
//               <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
//                 <div className="p-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded">
//                   <Mail className="w-3 h-3 text-white" />
//                 </div>
//                 <span>support@onetap.com</span>
//               </div>
//               <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
//                 <div className="p-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded">
//                   <MapPin className="w-3 h-3 text-white" />
//                 </div>
//                 <span>Tamil Nadu</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social & Copyright */}
//         <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="text-slate-400 text-sm bg-gradient-to-r from-slate-800/30 to-slate-700/30 px-4 py-2 rounded-lg border border-slate-700/30">
//             © {new Date().getFullYear()} OneTap Services. All rights reserved.
//           </div>

//           <div className="flex gap-3">
//             <a href="#" className="group relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
//               <div className="relative w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-slate-700">
//                 <Facebook className="w-5 h-5 text-blue-400" />
//               </div>
//             </a>

//             <a href="#" className="group relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
//               <div className="relative w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-slate-700">
//                 <Twitter className="w-5 h-5 text-sky-400" />
//               </div>
//             </a>

//             <a href="#" className="group relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
//               <div className="relative w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-slate-700">
//                 <Instagram className="w-5 h-5 text-pink-400" />
//               </div>
//             </a>

//             <a href="#" className="group relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
//               <div className="relative w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-slate-700">
//                 <Linkedin className="w-5 h-5 text-blue-300" />
//               </div>
//             </a>
//           </div>
//         </div>

//         {/* Additional Info */}
//         <div className="mt-6 text-center">
//           <div className="inline-flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
//             <span className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 px-3 py-1 rounded-full border border-slate-600/30">
//               🚀 Fast & Reliable
//             </span>
//             <span className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 px-3 py-1 rounded-full border border-slate-600/30">
//               🔒 Secure Processing
//             </span>
//             <span className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 px-3 py-1 rounded-full border border-slate-600/30">
//               📍 Pan-Tamil Nadu
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px) translateX(0px);
//             opacity: 0;
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-20px) translateX(10px);
//             opacity: 0;
//           }
//         }
//         .animate-float {
//           animation: float linear infinite;
//         }
//       `}</style>
//     </footer>
//   );
// }
// import { Facebook, Twitter, Instagram, Linkedin, Star, Truck, Clock, Shield, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white py-12 relative overflow-hidden">

//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
//       </div>

//       {/* Features Banner */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
//             <div className="flex items-center gap-3 mb-3">
//               <div className="p-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg">
//                 <Truck className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="font-semibold text-white">Fast Delivery</h3>
//             </div>
//             <p className="text-slate-300 group-hover:text-white">Next-day delivery across Tamil Nadu</p>
//           </div>

//           <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
//             <div className="flex items-center gap-3 mb-3">
//               <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg">
//                 <Shield className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="font-semibold text-white">Secure & Safe</h3>
//             </div>
//             <p className="text-slate-300 group-hover:text-white">Your documents are protected</p>
//           </div>

//           <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/20 hover:border-amber-400 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
//             <div className="flex items-center gap-3 mb-3">
//               <div className="p-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg">
//                 <Star className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="font-semibold text-white">Rated 4.9/5</h3>
//             </div>
//             <p className="text-slate-300 group-hover:text-white">By 2000+ satisfied customers</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-8">
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
//               OneTap Services
//             </h2>
//             <p className="text-slate-300 mb-6 text-lg leading-relaxed">
//               Digital Docs, Physical Delivery. Serving Villages & Cities across Tamil Nadu.
//             </p>
//             <div className="flex items-center gap-3 text-slate-300 bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-3 rounded-lg border border-slate-700/50">
//               <div className="p-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg">
//                 <Clock className="w-4 h-4 text-white" />
//               </div>
//               <span className="font-medium">24/7 Customer Support</span>
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Services
//             </h3>
//             <ul className="space-y-3 text-slate-300">
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer flex items-center gap-2">
//                 <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
//                 Xerox & Printing
//               </li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer flex items-center gap-2">
//                 <div className="w-1 h-1 bg-green-400 rounded-full"></div>
//                 Govt Documents
//               </li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer flex items-center gap-2">
//                 <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                 Lamination
//               </li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer flex items-center gap-2">
//                 <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
//                 Photo Printing
//               </li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Company
//             </h3>
//             <ul className="space-y-3 text-slate-300">
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">About Us</li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">Careers</li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">Partners</li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">Contact</li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Support
//             </h3>
//             <ul className="space-y-3 text-slate-300">
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">Help Center</li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">FAQs</li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">Track Order</li>
//               <li className="hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">Privacy</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//               Contact
//             </h3>
//             <div className="space-y-3 text-slate-300">
//               <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
//                 <div className="p-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded">
//                   <Phone className="w-3 h-3 text-white" />
//                 </div>
//                 <span>+91 98765 43210</span>
//               </div>
//               <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
//                 <div className="p-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded">
//                   <Mail className="w-3 h-3 text-white" />
//                 </div>
//                 <span>support@onetap.com</span>
//               </div>
//               <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
//                 <div className="p-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded">
//                   <MapPin className="w-3 h-3 text-white" />
//                 </div>
//                 <span>Tamil Nadu</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social & Copyright */}

//         {/* Additional Info */}
//         <div className="mt-6 text-center">
//  <div className="text-slate-400 text-sm bg-gradient-to-r from-slate-800/30 to-slate-700/30 px-4 py-2 rounded-lg border border-slate-700/30">
//             © {new Date().getFullYear()} OneTap Services. All rights reserved.
//           </div>
//         </div>
//       </div>

//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px) translateX(0px);
//             opacity: 0;
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-20px) translateX(10px);
//             opacity: 0;
//           }
//         }
//         .animate-float {
//           animation: float linear infinite;
//         }
//       `}</style>
//     </footer>
//   );
// }
import { Truck, Shield, Star, Clock, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">

      {/* Features Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white">Fast Delivery</h3>
            </div>
            <p className="text-slate-300">Next-day delivery across Tamil Nadu</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-600 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white">Secure & Safe</h3>
            </div>
            <p className="text-slate-300">Your documents are protected</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-amber-600 rounded-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white">Rated 4.9/5</h3>
            </div>
            <p className="text-slate-300">By 2000+ satisfied customers</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              OneTap Services
            </h2>
            <p className="text-slate-300 mb-6">
              Digital Docs, Physical Delivery. Serving Villages & Cities across Tamil Nadu.
            </p>
            <div className="flex items-center gap-3 text-slate-300 bg-slate-800 p-3 rounded-lg">
              <div className="p-2 bg-green-600 rounded-lg">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">24/7 Customer Support</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Services
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li className="hover:text-white cursor-pointer">Xerox & Printing</li>
              <li className="hover:text-white cursor-pointer">Govt Documents</li>
              <li className="hover:text-white cursor-pointer">Lamination</li>
              <li className="hover:text-white cursor-pointer">Photo Printing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Company
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Partners</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact
            </h3>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2 hover:text-white cursor-pointer">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white cursor-pointer">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>support@onetap.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white cursor-pointer">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-slate-700">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} OneTap Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}