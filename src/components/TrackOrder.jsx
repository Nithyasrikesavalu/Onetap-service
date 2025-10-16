import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState(null);
  const [trackingData, setTrackingData] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();

    // Mock tracking data with detailed information including delivery agents
    const mockTrackingData = {
      "ORD123": {
        status: "Order Placed",
        statusIcon: "✅",
        progress: 25,
        steps: [
          { stage: "Order Confirmed", completed: true, timestamp: "2024-01-15 10:30 AM", icon: "📝" },
          { stage: "Processing", completed: true, timestamp: "2024-01-15 11:45 AM", icon: "⚙️" },
          { stage: "Quality Check", completed: false, timestamp: "Expected: 2024-01-16", icon: "🔍" },
          { stage: "Dispatched", completed: false, timestamp: "Expected: 2024-01-17", icon: "🚚" },
          { stage: "Delivered", completed: false, timestamp: "Expected: 2024-01-18", icon: "📦" }
        ],
        customer: {
          name: "John Doe",
          phone: "+91 98765 43210",
          address: "123 Main Street, Chennai, Tamil Nadu - 600001"
        },
        service: "Documentation - Bulk Xerox & Print",
        estimatedDelivery: "2024-01-18",
        orderDate: "2024-01-15",
        deliveryAgent: null // No agent assigned yet
      },
      "ORD456": {
        status: "In Transit",
        statusIcon: "🚚",
        progress: 60,
        steps: [
          { stage: "Order Confirmed", completed: true, timestamp: "2024-01-14 09:15 AM", icon: "📝" },
          { stage: "Processing", completed: true, timestamp: "2024-01-14 10:30 AM", icon: "⚙️" },
          { stage: "Quality Check", completed: true, timestamp: "2024-01-14 02:15 PM", icon: "🔍" },
          { stage: "Dispatched", completed: true, timestamp: "2024-01-15 11:00 AM", icon: "🚚" },
          { stage: "Delivered", completed: false, timestamp: "Expected: 2024-01-16", icon: "📦" }
        ],
        customer: {
          name: "Sarah Wilson",
          phone: "+91 87654 32109",
          address: "456 Park Avenue, Coimbatore, Tamil Nadu - 641001"
        },
        service: "Government - Driving License",
        estimatedDelivery: "2024-01-16",
        orderDate: "2024-01-14",
        deliveryAgent: {
          name: "Raj Kumar",
          phone: "+91 91234 56789",
          vehicle: "TN 07 AB 1234",
          rating: "4.8 ★",
          photo: "👨‍💼",
          currentLocation: "Near Gandhipuram",
          eta: "30-45 mins",
          liveTracking: true
        }
      },
      "ORD789": {
        status: "Delivered",
        statusIcon: "📦",
        progress: 100,
        steps: [
          { stage: "Order Confirmed", completed: true, timestamp: "2024-01-12 03:20 PM", icon: "📝" },
          { stage: "Processing", completed: true, timestamp: "2024-01-12 04:45 PM", icon: "⚙️" },
          { stage: "Quality Check", completed: true, timestamp: "2024-01-13 10:30 AM", icon: "🔍" },
          { stage: "Dispatched", completed: true, timestamp: "2024-01-13 02:15 PM", icon: "🚚" },
          { stage: "Delivered", completed: true, timestamp: "2024-01-14 11:30 AM", icon: "📦" }
        ],
        customer: {
          name: "Michael Raj",
          phone: "+91 76543 21098",
          address: "789 Gandhi Road, Madurai, Tamil Nadu - 625001"
        },
        service: "International - Passport Services",
        estimatedDelivery: "2024-01-14",
        orderDate: "2024-01-12",
        deliveryAgent: {
          name: "Suresh Babu",
          phone: "+91 92345 67890",
          vehicle: "TN 09 CD 5678",
          rating: "4.9 ★",
          photo: "👨‍💻",
          currentLocation: "Delivered",
          eta: "Delivered",
          liveTracking: false
        }
      },
      "ORD999": {
        status: "Out for Delivery",
        statusIcon: "🛵",
        progress: 80,
        steps: [
          { stage: "Order Confirmed", completed: true, timestamp: "2024-01-16 09:00 AM", icon: "📝" },
          { stage: "Processing", completed: true, timestamp: "2024-01-16 10:15 AM", icon: "⚙️" },
          { stage: "Quality Check", completed: true, timestamp: "2024-01-16 01:30 PM", icon: "🔍" },
          { stage: "Dispatched", completed: true, timestamp: "2024-01-16 03:45 PM", icon: "🚚" },
          { stage: "Delivered", completed: false, timestamp: "Expected: Today", icon: "📦" }
        ],
        customer: {
          name: "Priya Sharma",
          phone: "+91 83456 78901",
          address: "321 Lake View Road, Ooty, Tamil Nadu - 643001"
        },
        service: "Healthcare - Health Insurance",
        estimatedDelivery: "2024-01-16",
        orderDate: "2024-01-16",
        deliveryAgent: {
          name: "Arun Patel",
          phone: "+91 94567 89012",
          vehicle: "TN 33 EF 9012",
          rating: "4.7 ★",
          photo: "👨‍🚀",
          currentLocation: "2 km away",
          eta: "15-20 mins",
          liveTracking: true
        }
      }
    };

    const data = mockTrackingData[orderId];
    if (data) {
      setStatus(data.status);
      setTrackingData(data);
    } else {
      setStatus("Order not found");
      setTrackingData(null);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Order Placed": return "from-blue-400 to-cyan-400";
      case "In Transit": return "from-cyan-400 to-blue-500";
      case "Out for Delivery": return "from-orange-400 to-amber-400";
      case "Delivered": return "from-green-400 to-emerald-400";
      default: return "from-gray-400 to-slate-400";
    }
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case "Order Placed": return "bg-blue-500/20";
      case "In Transit": return "bg-cyan-500/20";
      case "Out for Delivery": return "bg-orange-500/20";
      case "Delivered": return "bg-green-500/20";
      default: return "bg-gray-500/20";
    }
  };

  const handleCallAgent = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleMessageAgent = (phone) => {
    window.open(`https://wa.me/${phone.replace('+', '')}`, '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white px-4 sm:px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/10 blur-3xl"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-4xl"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.1)
          `
        }}
      >
        <div className="text-center mb-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Track Your Order 🔍
          </motion.h2>
          <motion.p
            className="text-white/70 mt-2 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Enter your Order ID to track real-time status and delivery agent details
          </motion.p>
        </div>

        <form onSubmit={handleTrack} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Order ID (e.g., ORD123, ORD456, ORD789, ORD999)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value.toUpperCase())}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 whitespace-nowrap"
            >
              Track Order
            </motion.button>
          </div>
        </form>

        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="mt-8 space-y-6"
            >
              {/* Status Card */}
              <div className={`p-6 rounded-2xl border-2 ${getStatusBgColor(status)} border-white/20 backdrop-blur-lg`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Order #{orderId}</h3>
                    <p className="text-white/60 text-sm">{trackingData?.service}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${getStatusColor(status)} bg-clip-text text-transparent`}>
                      {status} {trackingData?.statusIcon}
                    </div>
                    <p className="text-white/60 text-sm">
                      Ordered on: {trackingData?.orderDate}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-white/60 mb-2">
                    <span>Progress</span>
                    <span>{trackingData?.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${trackingData?.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-3 rounded-full bg-gradient-to-r ${getStatusColor(status)} shadow-lg`}
                    />
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-white/80">Order Timeline</h4>
                  {trackingData?.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        step.completed 
                          ? "bg-green-500 text-white" 
                          : "bg-white/20 text-white/60"
                      }`}>
                        {step.completed ? "✓" : step.icon}
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium ${
                          step.completed ? "text-white" : "text-white/60"
                        }`}>
                          {step.stage}
                        </div>
                        <div className="text-sm text-white/50">
                          {step.timestamp}
                        </div>
                      </div>
                      {step.completed && (
                        <div className="text-green-400 text-sm">
                          Completed
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Delivery Agent Section */}
              {trackingData?.deliveryAgent && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white/80 flex items-center text-lg">
                      <span className="mr-3">🚚</span>
                      Delivery Agent Details
                      {trackingData.deliveryAgent.liveTracking && (
                        <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-400/30">
                          Live Tracking
                        </span>
                      )}
                    </h4>
                    <div className="text-right">
                      <div className="text-cyan-300 font-semibold">
                        {trackingData.deliveryAgent.eta}
                      </div>
                      <div className="text-white/60 text-sm">
                        Estimated Arrival
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Agent Profile */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                        {trackingData.deliveryAgent.photo}
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">
                          {trackingData.deliveryAgent.name}
                        </div>
                        <div className="text-amber-300 text-sm">
                          {trackingData.deliveryAgent.rating}
                        </div>
                        <div className="text-white/60 text-sm">
                          {trackingData.deliveryAgent.vehicle}
                        </div>
                      </div>
                    </div>

                    {/* Current Status */}
                    <div className="space-y-2">
                      <div className="text-white/60 text-sm">Current Location</div>
                      <div className="font-semibold text-white flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        {trackingData.deliveryAgent.currentLocation}
                      </div>
                      {trackingData.deliveryAgent.liveTracking && (
                        <div className="text-cyan-300 text-sm flex items-center">
                          <span className="mr-1">📍</span>
                          Live location updating
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCallAgent(trackingData.deliveryAgent.phone)}
                        className="px-4 py-2 bg-green-500/20 text-green-300 rounded-xl border border-green-400/30 hover:bg-green-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>📞</span>
                        <span>Call Agent</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleMessageAgent(trackingData.deliveryAgent.phone)}
                        className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>💬</span>
                        <span>Message</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* No Agent Assigned Message */}
              {status === "Order Placed" && !trackingData?.deliveryAgent && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-blue-500/10 border border-blue-400/30 text-center"
                >
                  <div className="text-3xl mb-2">⏳</div>
                  <div className="text-blue-300 font-medium mb-2">Delivery Agent Not Yet Assigned</div>
                  <p className="text-blue-200/80 text-sm">
                    Your order is being processed. A delivery agent will be assigned soon and you'll be notified.
                  </p>
                </motion.div>
              )}

              {/* Customer & Delivery Info */}
              {trackingData && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Customer Information */}
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg">
                    <h4 className="font-semibold text-white/80 mb-4 flex items-center">
                      <span className="mr-2">👤</span>
                      Customer Information
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="text-white/60">Name</div>
                        <div className="text-white font-medium">{trackingData.customer.name}</div>
                      </div>
                      <div>
                        <div className="text-white/60">Phone</div>
                        <div className="text-white font-medium">{trackingData.customer.phone}</div>
                      </div>
                      <div>
                        <div className="text-white/60">Address</div>
                        <div className="text-white font-medium">{trackingData.customer.address}</div>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Information */}
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg">
                    <h4 className="font-semibold text-white/80 mb-4 flex items-center">
                      <span className="mr-2">📅</span>
                      Delivery Information
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="text-white/60">Service Type</div>
                        <div className="text-white font-medium">{trackingData.service}</div>
                      </div>
                      <div>
                        <div className="text-white/60">Order Date</div>
                        <div className="text-white font-medium">{trackingData.orderDate}</div>
                      </div>
                      <div>
                        <div className="text-white/60">Estimated Delivery</div>
                        <div className="text-white font-medium">{trackingData.estimatedDelivery}</div>
                      </div>
                      <div>
                        <div className="text-white/60">Current Status</div>
                        <div className={`font-medium ${
                          status === "Delivered" ? "text-green-400" : 
                          status === "Out for Delivery" ? "text-orange-400" :
                          status === "In Transit" ? "text-cyan-400" : 
                          "text-blue-400"
                        }`}>
                          {status} {trackingData.statusIcon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Support Info */}
              <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-white/60 text-sm">
                  Need help? Contact our support team at{" "}
                  <span className="text-blue-300">support@servicecenter.com</span> or call{" "}
                  <span className="text-blue-300">+91 98765 43210</span>
                </p>
              </div>
            </motion.div>
          )}

          {status === "Order not found" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center p-6 rounded-2xl bg-red-500/20 border border-red-400/30"
            >
              <div className="text-2xl mb-2">❌</div>
              <div className="text-red-200 font-medium">Order Not Found</div>
              <p className="text-red-100/80 text-sm mt-2">
                Please check your Order ID and try again. Valid IDs: ORD123, ORD456, ORD789, ORD999
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TrackOrder;