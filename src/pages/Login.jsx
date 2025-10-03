

// const Login = () => {


//   return (
//     <div className="w-full">
//       {/* Cards Section */}
//       <div className="py-16 bg-white">
//         <h2 className="text-3xl font-bold text-center mb-10">Choose Your Role</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
//           {/* User Card */}
//           <div className="p-6 bg-gray-100 rounded-2xl shadow-lg text-center">
//             <h3 className="text-2xl font-bold mb-4 text-blue-600">User</h3>
//             <p className="mb-6 text-gray-600">
//               Access 100+ government and essential services from your home.
//             </p>
//             <button
//               className="px-5 py-2 bg-blue-600 text-white rounded-lg"
//             >
//               Join as User
//             </button>
//           </div>

//           {/* Admin Card */}
//           <div className="p-6 bg-gray-100 rounded-2xl shadow-lg text-center">
//             <h3 className="text-2xl font-bold mb-4 text-green-600">Admin</h3>
//             <p className="mb-6 text-gray-600">
//               Manage services, users, and shop owners with full control.
//             </p>
//             <button
            
//               className="px-5 py-2 bg-green-600 text-white rounded-lg"
//             >
//               Join as Admin
//             </button>
//           </div>

//           {/* Shop Owner Card */}
//           <div className="p-6 bg-gray-100 rounded-2xl shadow-lg text-center">
//             <h3 className="text-2xl font-bold mb-4 text-purple-600">Shop Owner</h3>
//             <p className="mb-6 text-gray-600">
//               Provide Xerox, printing & government services to your community.
//             </p>
//             <button
//               className="px-5 py-2 bg-purple-600 text-white rounded-lg"
//             >
//               Join as Shop Owner
//             </button>
//           </div>
//         </div>
//       </div>

      
//     </div>
//   );
// };
// export default Login;




import React, { useState } from "react";

// Reusable Modal Component
const RoleModal = ({ role, description, color, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  // Define fields for registration based on role
  const getRegistrationFields = (role) => {
    switch (role) {
      case "User":
        return [
          { placeholder: "First Name", icon: "👤" },
          { placeholder: "Last Name", icon: "👤" },
          { placeholder: "Mobile Number", icon: "📱" },
          { placeholder: "Email ID", icon: "📧" },
          { placeholder: "Username", icon: "🔑" },
          { placeholder: "Password", type: "password", icon: "🔒" },
          { placeholder: "Confirm Password", type: "password", icon: "🔒" },
          { placeholder: "Address", type: "textarea", icon: "🏠" },
          { placeholder: "More Details", type: "textarea", icon: "📝" },
        ];
      case "Admin":
        return [
          { placeholder: "Full Name", icon: "👔" },
          { placeholder: "Email ID", icon: "📧" },
          { placeholder: "Username", icon: "🔑" },
          { placeholder: "Password", type: "password", icon: "🔒" },
          { placeholder: "Confirm Password", type: "password", icon: "🔒" },
          { placeholder: "Admin Code", icon: "🔐" },
          { placeholder: "Department", icon: "🏢" },
        ];
      case "Shop Owner":
        return [
          { placeholder: "Owner Name", icon: "👨‍💼" },
          { placeholder: "Shop Name", icon: "🏪" },
          { placeholder: "Mobile Number", icon: "📱" },
          { placeholder: "Email ID", icon: "📧" },
          { placeholder: "Username", icon: "🔑" },
          { placeholder: "Password", type: "password", icon: "🔒" },
          { placeholder: "Confirm Password", type: "password", icon: "🔒" },
          { placeholder: "Shop Address", type: "textarea", icon: "📍" },
          { placeholder: "Additional Details", type: "textarea", icon: "📋" },
        ];
      default:
        return [];
    }
  };

  const registrationFields = getRegistrationFields(role);

  // Get color classes based on role
  const getColorClasses = () => {
    const colorMap = {
      "blue-600": {
        bg: "bg-blue-600",
        hover: "hover:bg-blue-700",
        text: "text-blue-600",
        border: "border-blue-600",
        ring: "focus:ring-blue-500",
        light: "bg-blue-50"
      },
      "green-600": {
        bg: "bg-green-600",
        hover: "hover:bg-green-700",
        text: "text-green-600",
        border: "border-green-600",
        ring: "focus:ring-green-500",
        light: "bg-green-50"
      },
      "purple-600": {
        bg: "bg-purple-600",
        hover: "hover:bg-purple-700",
        text: "text-purple-600",
        border: "border-purple-600",
        ring: "focus:ring-purple-500",
        light: "bg-purple-50"
      }
    };
    return colorMap[color] || colorMap["blue-600"];
  };

  const colorClasses = getColorClasses();

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background blur with animation */}
      <div
        className={`absolute inset-0 bg-black transition-all duration-300 ${isClosing ? 'opacity-0' : 'opacity-40'}`}
        onClick={handleClose}
      ></div>

      {/* Modal content with scale animation */}
      <div className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 z-10 max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 hover:text-gray-700 text-xl font-bold transition-colors duration-200"
        >
          &times;
        </button>

        {/* Role Details with icon */}
        <div className="mb-8 text-center">
          <div className={`w-20 h-20 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
            <span className="text-3xl text-white">
              {role === "User" ? "👤" : role === "Admin" ? "👔" : "🏪"}
            </span>
          </div>
          <h2 className={`text-4xl font-bold mb-3 ${colorClasses.text}`}>{role}</h2>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>

        {/* Tabs with better styling */}
        <div className="flex justify-center mb-8 bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              activeTab === "login" 
                ? `${colorClasses.bg} text-white shadow-md` 
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              activeTab === "register" 
                ? `${colorClasses.bg} text-white shadow-md` 
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Register
          </button>
        </div>

        {/* Forms */}
        {activeTab === "login" ? (
          <form className="space-y-6">
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">📧</span>
              <input
                type="text"
                placeholder="Email or Username"
                className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">🔒</span>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
            </div>
            <button
              type="submit"
              className={`w-full ${colorClasses.bg} ${colorClasses.hover} text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200`}
            >
              Login to Your Account
            </button>
            <div className="text-center">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                Forgot your password?
              </a>
            </div>
          </form>
        ) : (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
            {registrationFields.map((field, index) =>
              field.type === "textarea" ? (
                <div key={index} className="relative col-span-1 md:col-span-2">
                  <span className="absolute left-4 top-4 text-gray-400 text-lg">{field.icon}</span>
                  <textarea
                    placeholder={field.placeholder}
                    className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 min-h-[100px] resize-vertical"
                  />
                </div>
              ) : (
                <div key={index} className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">{field.icon}</span>
                  <input
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
              )
            )}
            <div className="col-span-1 md:col-span-2 flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
              </label>
            </div>
            <button
              type="submit"
              className={`col-span-1 md:col-span-2 ${colorClasses.bg} ${colorClasses.hover} text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200`}
            >
              Create {role} Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// Enhanced Role Card Component
const RoleCard = ({ role, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getColorClasses = () => {
    const colorMap = {
      "blue-600": {
        bg: "bg-blue-600",
        hover: "hover:bg-blue-700",
        text: "text-blue-600",
        border: "border-blue-600",
        light: "bg-blue-50",
        gradient: "from-blue-500 to-blue-600"
      },
      "green-600": {
        bg: "bg-green-600",
        hover: "hover:bg-green-700",
        text: "text-green-600",
        border: "border-green-600",
        light: "bg-green-50",
        gradient: "from-green-500 to-green-600"
      },
      "purple-600": {
        bg: "bg-purple-600",
        hover: "hover:bg-purple-700",
        text: "text-purple-600",
        border: "border-purple-600",
        light: "bg-purple-50",
        gradient: "from-purple-500 to-purple-600"
      }
    };
    return colorMap[role.color] || colorMap["blue-600"];
  };

  const colorClasses = getColorClasses();

  return (
    <div
      className={`relative p-8 bg-white rounded-3xl shadow-xl text-center transform transition-all duration-500 cursor-pointer group overflow-hidden ${
        isHovered ? 'scale-105 shadow-2xl' : 'scale-100'
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Animated border */}
      <div className={`absolute inset-0 rounded-3xl border-2 ${colorClasses.border} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

      {/* Icon container */}
      <div className={`relative w-24 h-24 ${colorClasses.light} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
        <div className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg`}>
          {role.name === "User" ? "👤" : role.name === "Admin" ? "👔" : "🏪"}
        </div>
      </div>

      {/* Role name */}
      <h3 className={`text-2xl font-bold mb-4 ${colorClasses.text} relative group-hover:scale-105 transition-transform duration-300`}>
        {role.name}
      </h3>

      {/* Description */}
      <p className="mb-6 text-gray-600 leading-relaxed relative group-hover:scale-105 transition-transform duration-300">
        {role.description}
      </p>

      {/* Button */}
      <button
        className={`relative px-8 py-3 ${colorClasses.bg} ${colorClasses.hover} text-white rounded-xl font-semibold shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
      >
        <span className="relative z-10">Join as {role.name}</span>
        <div className={`absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
      </button>

      {/* Decorative elements */}
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
    </div>
  );
};

// Main Component
const RoleCards = () => {
  const roles = [
    {
      name: "User",
      description: "Access 100+ government and essential services from your home with seamless digital experience.",
      color: "blue-600",
    },
    {
      name: "Admin",
      description: "Manage services, users, and shop owners with full administrative control and analytics.",
      color: "green-600",
    },
    {
      name: "Shop Owner",
      description: "Provide Xerox, printing & government services to your community with business tools.",
      color: "purple-600",
    },
  ];

  const [selectedRole, setSelectedRole] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Choose Your Role</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Select your role to get started with our comprehensive service platform
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {roles.map((role) => (
          <RoleCard
            key={role.name}
            role={role}
            onClick={() => openModal(role)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedRole && (
        <RoleModal
          role={selectedRole.name}
          description={selectedRole.description}
          color={selectedRole.color}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      {/* Footer note */}
      <div className="text-center mt-16">
        <p className="text-gray-500">
          Not sure which role to choose? <a href="#" className="text-blue-600 hover:underline">Contact support</a>
        </p>
      </div>
    </div>
  );
};

export default RoleCards;
