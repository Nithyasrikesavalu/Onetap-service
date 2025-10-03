// import React from "react";

// // Adjusted layout: Centered heading + exact 50px gap between text and image
// export default function About () {
//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Centered Headings */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">How It Works</h2>
//           <p className="text-lg font-semibold text-gray-700 mb-2">இது எப்படி வேலை செய்கிறது</p>
//           <p className="text-sm text-gray-500">Simple, secure, and fast – get your documents without stepping out</p>
//         </div>

//         {/* Steps + Image */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: "50px" }}>
//           {/* LEFT CONTENT */}
//           <div className="space-y-6">
//             {/* Step 1 */}
//             <div className="flex items-start gap-4">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-semibold text-sm">1</div>
//               <div>
//                 <h3 className="font-semibold text-gray-800">Find Nearby Shop</h3>
//                 <p className="text-sm text-gray-600">சமீபத்தில் உள்ள கடைகளை கண்டுபிடியுங்கள்</p>
//                 <p className="text-xs text-gray-500">Search and select from our network of trusted partner shops near you.</p>
//               </div>
//             </div>

//             {/* Step 2 */}
//             <div className="flex items-start gap-4">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-semibold text-sm">2</div>
//               <div>
//                 <h3 className="font-semibold text-gray-800">Upload or Visit</h3>
//                 <p className="text-sm text-gray-600">பதிவேற்றம் அல்லது பார்வையிடவும்</p>
//                 <p className="text-xs text-gray-500">Upload documents online or visit the shop in person with your files.</p>
//               </div>
//             </div>

//             {/* Step 3 */}
//             <div className="flex items-start gap-4">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-semibold text-sm">3</div>
//               <div>
//                 <h3 className="font-semibold text-gray-800">Get Secure Code</h3>
//                 <p className="text-sm text-gray-600">பாதுகாப்பான குறியீடு பெறுங்கள்</p>
//                 <p className="text-xs text-gray-500">Receive a unique code to protect your privacy and documents.</p>
//               </div>
//             </div>

//             {/* Step 4 */}
//             <div className="flex items-start gap-4">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white font-semibold text-sm">4</div>
//               <div>
//                 <h3 className="font-semibold text-gray-800">Processing & Delivery</h3>
//                 <p className="text-sm text-gray-600">செயலாக்கம் மற்றும் விநியோகம்</p>
//                 <p className="text-xs text-gray-500">Shop processes your request, agent delivers to your address.</p>
//               </div>
//             </div>

//             {/* Step 5 */}
//             <div className="flex items-start gap-4">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700 text-white font-semibold text-sm">5</div>
//               <div>
//                 <h3 className="font-semibold text-gray-800">Track & Receive</h3>
//                 <p className="text-sm text-gray-600">கண்காணித்து பெறவும்</p>
//                 <p className="text-xs text-gray-500">Track status in real-time and receive your documents securely.</p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative">
//               <img
//                 src="https://i.ibb.co/Jd6vP4r/delivery-boy.png"
//                 alt="Delivery Boy"
//                 className="w-[380px] h-auto rounded-xl shadow-md"
//               />

//               {/* Badge Top Right */}
//               <div className="absolute top-3 right-3 bg-white shadow-md px-3 py-1 rounded-lg text-xs font-medium text-blue-600 flex items-center gap-1">
//                 <span>30 min</span>
//                 <span className="text-gray-500">Avg Delivery</span>
//               </div>

//               {/* Badge Bottom Left */}
//               <div className="absolute bottom-3 left-3 bg-white shadow-md px-3 py-1 rounded-lg text-xs font-medium text-green-600">
//                 100% Secure
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Streamlined Process
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl font-semibold text-gray-800 mb-3">இது எப்படி வேலை செய்கிறது</p>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Simple, secure, and fast – get your documents without stepping out. 
            Our streamlined process ensures your documents are handled with care and delivered promptly.
          </p>
        </div>

        {/* Steps + Image Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Content - Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Find Nearby Shop</h3>
                <p className="text-sm text-gray-700 font-medium mb-2">சமீபத்தில் உள்ள கடைகளை கண்டுபிடியுங்கள்</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Search and select from our network of trusted partner shops near you with real-time availability.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Upload or Visit</h3>
                <p className="text-sm text-gray-700 font-medium mb-2">பதிவேற்றம் அல்லது பார்வையிடவும்</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Upload documents securely online or visit the shop in person with your files. Multiple options for your convenience.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Get Secure Code</h3>
                <p className="text-sm text-gray-700 font-medium mb-2">பாதுகாப்பான குறியீடு பெறுங்கள்</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Receive a unique encrypted code to protect your privacy and ensure document security throughout the process.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-cyan-200">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Processing & Delivery</h3>
                <p className="text-sm text-gray-700 font-medium mb-2">செயலாக்கம் மற்றும் விநியோகம்</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Expert processing at our partner shops followed by secure delivery to your address by verified agents.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Track & Receive</h3>
                <p className="text-sm text-gray-700 font-medium mb-2">கண்காணித்து பெறவும்</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Real-time tracking with status updates and secure document delivery with verification at your doorstep.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./images/1.png"
                  alt="Delivery Service"
                  className="w-full max-w-md h-auto transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
              </div>

              {/* Enhanced Badge Top Right */}
              <div className="absolute top-6 -right-4 bg-white shadow-xl px-4 py-3 rounded-xl text-sm font-semibold text-blue-600 flex items-center gap-2 border border-blue-100">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                  <span className="text-blue-600">⚡</span>
                </div>
                <div>
                  <div className="font-bold">30 min</div>
                  <div className="text-xs text-gray-500 font-normal">Avg Delivery</div>
                </div>
              </div>

              {/* Enhanced Badge Bottom Left */}
              <div className="absolute -bottom-4 left-6 bg-white shadow-xl px-4 py-3 rounded-xl text-sm font-semibold text-green-600 flex items-center gap-2 border border-green-100">
                <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                  <span className="text-green-600">🛡️</span>
                </div>
                <div>
                  <div className="font-bold">100% Secure</div>
                  <div className="text-xs text-gray-500 font-normal">Verified</div>
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                Trusted Service
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Get Started Today
          </button>
          <p className="text-gray-600 text-sm mt-4">
            Join thousands of satisfied customers using our document services
          </p>
        </div>
      </div>
    </section>
  );
}