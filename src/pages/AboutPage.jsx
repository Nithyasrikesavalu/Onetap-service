// import React, { useState, useRef } from 'react';

// const DocumentUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState({});
//   const fileInputRef = useRef(null);

//   // Supported file types
//   const supportedFormats = [
//     'application/pdf',
//     'application/msword',
//     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//     'text/plain',
//     'application/vnd.ms-powerpoint',
//     'application/vnd.openxmlformats-officedocument.presentationml.presentation',
//     'application/vnd.ms-excel',
//     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
//   ];

//   // Handle file selection
//   const handleFileSelect = (selectedFiles) => {
//     const validFiles = Array.from(selectedFiles).filter(file =>
//       supportedFormats.includes(file.type) && file.size <= 10 * 1024 * 1024 // 10MB limit
//     );

//     const newFiles = validFiles.map(file => ({
//       file,
//       id: Math.random().toString(36).substr(2, 9),
//       name: file.name,
//       size: file.size,
//       type: file.type,
//       status: 'pending'
//     }));

//     setFiles(prev => [...prev, ...newFiles]);
//   };

//   // Handle drag and drop
//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     const droppedFiles = e.dataTransfer.files;
//     if (droppedFiles.length > 0) {
//       handleFileSelect(droppedFiles);
//     }
//   };

//   // Handle drag over
//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   // Handle file input change
//   const handleFileInputChange = (e) => {
//     handleFileSelect(e.target.files);
//     e.target.value = '';
//   };

//   // Remove file from list
//   const removeFile = (fileId) => {
//     setFiles(prev => prev.filter(file => file.id !== fileId));
//     setUploadProgress(prev => {
//       const newProgress = { ...prev };
//       delete newProgress[fileId];
//       return newProgress;
//     });
//   };

//   // Upload file to server
//   const uploadFile = async (fileData) => {
//     const formData = new FormData();
//     formData.append('document', fileData.file);

//     try {
//       setFiles(prev => prev.map(f =>
//         f.id === fileData.id ? { ...f, status: 'uploading' } : f
//       ));

//       // Simulate API call with progress
//       await new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.upload.addEventListener('progress', (e) => {
//           if (e.lengthComputable) {
//             const progress = Math.round((e.loaded * 100) / e.total);
//             setUploadProgress(prev => ({
//               ...prev,
//               [fileData.id]: progress
//             }));
//           }
//         });

//         xhr.addEventListener('load', () => {
//           if (xhr.status === 200) {
//             resolve(xhr.response);
//           } else {
//             reject(new Error('Upload failed'));
//           }
//         });

//         xhr.addEventListener('error', () => reject(new Error('Upload failed')));

//         // Simulate upload delay
//         setTimeout(() => {
//           xhr.dispatchEvent(new Event('load'));
//         }, 2000);
//       });

//       setFiles(prev => prev.map(f =>
//         f.id === fileData.id ? { ...f, status: 'completed' } : f
//       ));

//       setUploadProgress(prev => {
//         const newProgress = { ...prev };
//         delete newProgress[fileData.id];
//         return newProgress;
//       });
//     } catch (error) {
//       setFiles(prev => prev.map(f =>
//         f.id === fileData.id ? { ...f, status: 'error' } : f
//       ));
//       console.error('Upload error:', error);
//     }
//   };

//   // Upload all files
//   const uploadAllFiles = async () => {
//     if (files.length === 0) return;

//     setIsUploading(true);

//     const pendingFiles = files.filter(file => file.status === 'pending');

//     for (const file of pendingFiles) {
//       await uploadFile(file);
//     }

//     setIsUploading(false);
//   };

//   // Format file size
//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return '0 Bytes';
//     const k = 1024;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
//   };

//   // Get file icon based on type
//   const getFileIcon = (fileType) => {
//     if (fileType.includes('pdf')) return '📄';
//     if (fileType.includes('word')) return '📝';
//     if (fileType.includes('powerpoint')) return '📊';
//     if (fileType.includes('excel') || fileType.includes('spreadsheet')) return '📈';
//     if (fileType.includes('text')) return '📃';
//     return '📁';
//   };

//   // Get status color classes
//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'completed': return 'text-green-600';
//       case 'uploading': return 'text-blue-600';
//       case 'error': return 'text-red-600';
//       default: return 'text-gray-500';
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg py-30 sm:p-8 ">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
//           Upload Documents
//         </h1>
//         <p className="text-gray-600">
//           Supported formats: PDF, DOC, DOCX, TXT, PPT, XLS (Max: 10MB)
//         </p>
//       </div>

//       {/* Drag & Drop Area */}
//       <div
//         className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ${
//           isUploading
//             ? 'border-gray-300 bg-gray-50 cursor-not-allowed opacity-70'
//             : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'
//         }`}
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         onClick={() => !isUploading && fileInputRef.current?.click()}
//       >
//         <div className="text-4xl mb-4">
//           {isUploading ? '⏳' : '📁'}
//         </div>
//         <p className="text-lg font-medium text-gray-700 mb-2">
//           {isUploading ? 'Upload in progress...' : 'Drag & drop your files here'}
//         </p>
//         <p className="text-gray-600">
//           or <span className="text-blue-500 underline cursor-pointer">browse files</span>
//         </p>

//         <input
//           ref={fileInputRef}
//           type="file"
//           multiple
//           onChange={handleFileInputChange}
//           accept=".pdf,.doc,.docx,.txt,.ppt,.pptx,.xls,.xlsx"
//           disabled={isUploading}
//           className="hidden"
//         />
//       </div>

//       {/* Upload Button */}
//       <button
//         className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
//           isUploading || files.length === 0
//             ? 'bg-gray-400 cursor-not-allowed text-white'
//             : 'bg-blue-500 hover:bg-blue-600 text-white'
//         }`}
//         onClick={uploadAllFiles}
//         disabled={isUploading || files.length === 0}
//       >
//         {isUploading ? (
//           <>
//             <span>⏳</span>
//             Uploading...
//           </>
//         ) : (
//           <>
//             <span>📤</span>
//             Upload Files ({files.length})
//           </>
//         )}
//       </button>

//       {/* File List */}
//       <div className="mt-8">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">
//           Selected Files ({files.length})
//         </h3>

//         {files.length === 0 ? (
//           <div className="text-center py-8 text-gray-500 italic">
//             No files selected
//           </div>
//         ) : (
//           <div className="space-y-3">
//             {files.map((file) => (
//               <div
//                 key={file.id}
//                 className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
//               >
//                 {/* File Icon */}
//                 <div className="text-2xl mr-4">
//                   {getFileIcon(file.type)}
//                 </div>

//                 {/* File Info */}
//                 <div className="flex-1 min-w-0">
//                   <div className="font-medium text-gray-800 truncate">
//                     {file.name}
//                   </div>
//                   <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
//                     <span>{formatFileSize(file.size)}</span>
//                     <span className={`font-medium capitalize ${getStatusColor(file.status)}`}>
//                       {file.status === 'uploading' && uploadProgress[file.id] !== undefined
//                         ? `Uploading... ${uploadProgress[file.id]}%`
//                         : file.status
//                       }
//                     </span>
//                   </div>

//                   {/* Progress Bar */}
//                   {file.status === 'uploading' && (
//                     <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                       <div
//                         className="bg-blue-500 h-2 rounded-full transition-all duration-300"
//                         style={{ width: `${uploadProgress[file.id] || 0}%` }}
//                       />
//                     </div>
//                   )}
//                 </div>

//                 {/* File Actions */}
//                 <div className="flex items-center">
//                   {file.status === 'pending' && (
//                     <button
//                       className="p-2 text-gray-400 hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
//                       onClick={() => removeFile(file.id)}
//                       disabled={isUploading}
//                       title="Remove file"
//                     >
//                       🗑️
//                     </button>
//                   )}
//                   {file.status === 'completed' && (
//                     <span className="text-green-500 text-lg" title="Upload completed">✅</span>
//                   )}
//                   {file.status === 'error' && (
//                     <span className="text-red-500 text-lg" title="Upload failed">❌</span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DocumentUpload;

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("how-it-works");

  const features = [
    {
      icon: "🔐",
      title: "Secure Login",
      description:
        "Quick signup with phone number or email for personalized service",
    },
    {
      icon: "🏪",
      title: "Find Nearby Shops",
      description:
        "Discover verified printing shops near your location with real-time availability",
    },
    {
      icon: "📋",
      title: "Select Services",
      description:
        "Choose from 50+ services including printing, document services, and government applications",
    },
    {
      icon: "📄",
      title: "Upload Documents",
      description:
        "Securely upload required documents through our encrypted platform",
    },
    {
      icon: "📱",
      title: "Real-time Tracking",
      description: "Track your service status from processing to completion",
    },
    {
      icon: "⭐",
      title: "Rate & Review",
      description:
        "Share your experience and help others choose the best services",
    },
  ];

  const benefits = [
    {
      title: "Time Saving",
      description:
        "No more waiting in long queues - get everything done from your phone",
      icon: "⏰",
    },
    {
      title: "Cost Effective",
      description:
        "Compare prices across multiple shops and choose the best deal",
      icon: "💰",
    },
    {
      title: "Secure & Private",
      description:
        "Bank-level encryption for all your documents and personal information",
      icon: "🔒",
    },
    {
      title: "24/7 Availability",
      description:
        "Access services anytime, anywhere with our mobile-first platform",
      icon: "🌙",
    },
    {
      title: "Verified Partners",
      description: "All shops are verified and rated by real customers",
      icon: "✅",
    },
    {
      title: "Instant Support",
      description: "24/7 customer support to help with any issues",
      icon: "💬",
    },
  ];

  const reviews = [
    {
      name: "Rajesh Kumar",
      role: "College Student",
      rating: 5,
      comment:
        "Got my scholarship documents processed in 2 hours! Amazing service!",
      avatar: "👨‍🎓",
    },
    {
      name: "Priya S",
      role: "Office Employee",
      rating: 5,
      comment:
        "Perfect for last-minute document needs. Saved me multiple times!",
      avatar: "👩‍💼",
    },
    {
      name: "Mohan Das",
      role: "Business Owner",
      rating: 4,
      comment:
        "GST registration made so easy. Professional service throughout.",
      avatar: "👨‍💼",
    },
  ];

  const documentUploadSteps = [
    {
      step: 1,
      title: "Select Service",
      description: "Choose the service you need from our extensive catalog",
      icon: "📋",
    },
    {
      step: 2,
      title: "View Requirements",
      description:
        "See exactly which documents are needed for your selected service",
      icon: "📄",
    },
    {
      step: 3,
      title: "Upload Securely",
      description: "Upload documents through our encrypted, secure platform",
      icon: "🔐",
    },
    {
      step: 4,
      title: "Auto Verification",
      description: "Our system automatically verifies document completeness",
      icon: "✅",
    },
    {
      step: 5,
      title: "Real-time Tracking",
      description: "Track your document processing status in real-time",
      icon: "📱",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50  to-purple-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About OneTap Service
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Revolutionizing document services with technology - Making your life
            simpler, one tap at a time
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-8">
            {[
              { id: "how-it-works", label: "How It Works" },
              { id: "upload-docs", label: "Upload Documents" },
              { id: "benefits", label: "Benefits" },
              { id: "reviews", label: "Reviews" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        {/* How It Works Section */}
        {activeTab === "how-it-works" && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How OneTap Service Works
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Get your document services completed in just 4 simple steps
              </p>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Login & Setup",
                  description:
                    "Create your account with phone or email verification",
                  icon: "🔐",
                  color: "blue",
                },
                {
                  step: "02",
                  title: "Find Shops",
                  description:
                    "Discover nearby verified service providers with ratings",
                  icon: "🏪",
                  color: "green",
                },
                {
                  step: "03",
                  title: "Select Service",
                  description:
                    "Choose from 50+ services and upload required documents",
                  icon: "📋",
                  color: "purple",
                },
                {
                  step: "04",
                  title: "Track & Receive",
                  description:
                    "Real-time tracking and secure document delivery",
                  icon: "📱",
                  color: "orange",
                },
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 text-white flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.step}
                  </div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload Documents Section */}
        {activeTab === "upload-docs" && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Secure Document Upload
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Upload your documents securely with our encrypted platform
              </p>
            </div>

            {/* Upload Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {documentUploadSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-xl shadow-lg flex items-center justify-center text-xl absolute -top-2 -right-2">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Security Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Bank-Level Security
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🔒",
                    title: "End-to-End Encryption",
                    description:
                      "All documents are encrypted during upload, storage, and transmission",
                  },
                  {
                    icon: "📱",
                    title: "Secure Access",
                    description:
                      "Multi-factor authentication and secure login protocols",
                  },
                  {
                    icon: "🚫",
                    title: "Auto Deletion",
                    description:
                      "Documents automatically deleted after service completion",
                  },
                ].map((feature, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Supported Documents */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Supported Document Types
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {[
                  "PDF Files",
                  "JPG/PNG Images",
                  "DOC/DOCX Files",
                  "All Common Formats",
                ].map((type, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md border border-gray-200"
                  >
                    <div className="text-blue-600 font-semibold">{type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Benefits Section */}
        {activeTab === "benefits" && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose OneTap Service?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Experience the future of document services with these amazing
                benefits
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "50K+", label: "Happy Customers" },
                { number: "200+", label: "Verified Shops" },
                { number: "50+", label: "Services" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Section */}
        {activeTab === "reviews" && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Real experiences from our valued customers
              </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl mr-4">
                      {review.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {review.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        {i < review.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>

            {/* Overall Rating */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Overall Rating
              </h3>
              <div className="text-4xl text-yellow-400 mb-2">★★★★★</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                4.8/5.0
              </div>
              <p className="text-gray-600">Based on 2,500+ customer reviews</p>
            </div>
          </div>
        )}
      </div>
      {/* CTA Section */}
      <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust OneTap Service for
          their document needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/service"
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            Explore Services
          </Link>
          <Link
            to="/shops"
            className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Find Nearby Shops
          </Link>
        </div>
      </div>
    </div>
  );
}
