import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [user] = useState({
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43210",
    joinedDate: "15 Jan 2024",
    totalOrders: 12,
    completedOrders: 8,
    pendingOrders: 3,
    cancelledOrders: 1
  });

  const [notifications] = useState([
    {
      id: 1,
      type: "success",
      title: "Order Completed",
      message: "Your passport application has been processed successfully",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "info",
      title: "Document Required",
      message: "Please upload your Aadhaar card for license application",
      time: "5 hours ago",
      read: true
    },
    {
      id: 3,
      type: "warning",
      title: "Payment Pending",
      message: "Complete payment for your recent print order",
      time: "1 day ago",
      read: true
    }
  ]);

  const [orders] = useState([
    {
      id: "ORD-001",
      shopName: "Digital Print Solutions",
      service: "Passport Application",
      status: "completed",
      amount: "₹450",
      date: "20 Feb 2024",
      documents: ["Aadhaar Card", "Photo", "Address Proof"]
    },
    {
      id: "ORD-002",
      shopName: "Smart Xerox Center",
      service: "Color Printing",
      status: "in-progress",
      amount: "₹120",
      date: "22 Feb 2024",
      documents: ["Document File"]
    },
    {
      id: "ORD-003",
      shopName: "Corporate Document Center",
      service: "GST Registration",
      status: "pending",
      amount: "₹899",
      date: "25 Feb 2024",
      documents: ["PAN Card", "Aadhaar", "Business Proof"]
    },
    {
      id: "ORD-004",
      shopName: "Quick Print Hub",
      service: "Document Scanning",
      status: "cancelled",
      amount: "₹80",
      date: "18 Feb 2024",
      documents: ["Physical Documents"]
    }
  ]);

  const [uploadedDocuments] = useState([
    {
      id: 1,
      name: "Aadhaar_Card.pdf",
      size: "2.4 MB",
      type: "Identity Proof",
      uploadDate: "20 Feb 2024",
      status: "verified"
    },
    {
      id: 2,
      name: "Passport_Photo.jpg",
      size: "1.2 MB",
      type: "Photo",
      uploadDate: "20 Feb 2024",
      status: "verified"
    },
    {
      id: 3,
      name: "Address_Proof.pdf",
      size: "3.1 MB",
      type: "Address Proof",
      uploadDate: "20 Feb 2024",
      status: "pending"
    },
    {
      id: 4,
      name: "PAN_Card.pdf",
      size: "1.8 MB",
      type: "Identity Proof",
      uploadDate: "25 Feb 2024",
      status: "verified"
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "in-progress": return "bg-blue-100 text-blue-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "pending": return "Pending";
      case "cancelled": return "Cancelled";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OT</span>
              </div>
              <span className="font-bold text-gray-900">OneTap Service</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <Link to="/shops" className="text-gray-700 hover:text-blue-600 font-medium">Shops</Link>
              <Link to="/orders" className="text-gray-700 hover:text-blue-600 font-medium">My Orders</Link>
              <Link to="/support" className="text-gray-700 hover:text-blue-600 font-medium">Support</Link>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              {/* Notification Bell */}
              <button className="relative p-2 text-gray-600 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 010 11.25M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Avatar */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">R</span>
                </div>
                <span className="text-gray-700 font-medium">{user.name}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              {/* User Profile Summary */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">R</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-600 text-sm">{user.email}</p>
                <p className="text-gray-500 text-sm">Member since {user.joinedDate}</p>
              </div>

              {/* Navigation Menu */}
              <nav className="space-y-2">
                {[
                  { id: "dashboard", label: "Dashboard", icon: "📊" },
                  { id: "orders", label: "My Orders", icon: "📦" },
                  { id: "documents", label: "My Documents", icon: "📄" },
                  { id: "notifications", label: "Notifications", icon: "🔔" },
                  { id: "settings", label: "Account Settings", icon: "⚙️" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      activeTab === item.id
                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>

              {/* Logout Button */}
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left text-red-600 hover:bg-red-50 mt-8 border border-red-200">
                <span className="text-lg">🚪</span>
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Dashboard Tab */}
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: "Total Orders", value: user.totalOrders, color: "blue", icon: "📦" },
                    { label: "Completed", value: user.completedOrders, color: "green", icon: "✅" },
                    { label: "Pending", value: user.pendingOrders, color: "yellow", icon: "⏳" },
                    { label: "Cancelled", value: user.cancelledOrders, color: "red", icon: "❌" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                        <span className="text-2xl">{stat.icon}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    {orders.slice(0, 3).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div>
                          <h3 className="font-semibold text-gray-900">{order.service}</h3>
                          <p className="text-gray-600 text-sm">{order.shopName}</p>
                          <p className="text-gray-500 text-sm">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                          <p className="text-gray-900 font-semibold mt-1">{order.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shop</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {orders.map((order) => (
                          <tr key={order.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <span className="font-medium text-blue-600">{order.id}</span>
                            </td>
                            <td className="px-6 py-4">
                              <div>
                                <p className="font-medium text-gray-900">{order.service}</p>
                                <p className="text-gray-500 text-sm">
                                  {order.documents.length} document(s)
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-900">{order.shopName}</td>
                            <td className="px-6 py-4 font-semibold text-gray-900">{order.amount}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {getStatusText(order.status)}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-gray-500">{order.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Documents Tab */}
            {activeTab === "documents" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900">My Documents</h1>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium">
                    Upload New Document
                  </button>
                </div>

                <div className="grid gap-6">
                  {uploadedDocuments.map((doc) => (
                    <div key={doc.id} className="bg-white rounded-2xl shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <span className="text-blue-600 text-xl">📄</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                            <p className="text-gray-600 text-sm">{doc.type} • {doc.size}</p>
                            <p className="text-gray-500 text-sm">Uploaded on {doc.uploadDate}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            doc.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {doc.status === 'verified' ? 'Verified' : 'Pending'}
                          </span>
                          <div className="flex space-x-2 mt-2">
                            <button className="text-blue-600 hover:text-blue-700 text-sm">Download</button>
                            <button className="text-red-600 hover:text-red-700 text-sm">Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${
                      notification.type === 'success' ? 'border-green-500' :
                      notification.type === 'warning' ? 'border-yellow-500' :
                      notification.type === 'info' ? 'border-blue-500' : 'border-gray-500'
                    } ${!notification.read ? 'bg-blue-50' : ''}`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                          <p className="text-gray-600 mt-1">{notification.message}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-gray-500 text-sm">{notification.time}</span>
                          {!notification.read && (
                            <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
                
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                          <input 
                            type="text" 
                            defaultValue={user.name}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                          <input 
                            type="email" 
                            defaultValue={user.email}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <input 
                            type="tel" 
                            defaultValue={user.phone}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Security */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
                      <div className="space-y-3">
                        <button className="w-full text-left p-4 border border-gray-200 rounded-xl hover:bg-gray-50">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900">Change Password</span>
                            <span className="text-gray-400">›</span>
                          </div>
                        </button>
                        <button className="w-full text-left p-4 border border-gray-200 rounded-xl hover:bg-gray-50">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900">Two-Factor Authentication</span>
                            <span className="text-gray-400">›</span>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Save Button */}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}