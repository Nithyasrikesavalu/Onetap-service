import React, { useState, useEffect } from "react";
import VendorHeader from "./VendorHeader";
import VendorSidebar from "./VendorSidebar";
import DashboardTab from "./tabs/DashboardTab";
import OrdersTab from "./tabs/OrdersTab";
import ServicesTab from "./tabs/ServicesTab";
import ReviewsTab from "./tabs/ReviewsTab";
import EarningsTab from "./tabs/EarningsTab";
import SettingsTab from "./tabs/SettingsTab";
import NotificationTab from "./tabs/NotificationTab";

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(true);
  const [vendor, setVendor] = useState({
    name: localStorage.getItem("shopName"),
    email: localStorage.getItem("shopEmail"),
    phone: localStorage.getItem("shopMobile"),
    joinedDate: "10 Jan 2024",
    address: localStorage.getItem("shopAddress"),
    rating: 4.8,
    totalEarnings: "₹45,250",
    activeOrders: 5,
    completedOrders: 128,
    pendingRequests: 3,
  });

  const [recentOrders, setRecentOrders] = useState([]);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [earnings, setEarnings] = useState([]);

  // Simulate API data fetching
  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Set mock data
        setRecentOrders([
          {
            id: "ORD001",
            customerName: "Rajesh Kumar",
            customerPhone: "+91 98765 43210",
            service: "Passport Application",
            status: "in-progress",
            amount: "₹450",
            date: "20 Feb 2024",
            deadline: "24 Feb 2024",
            documents: ["Aadhaar Card", "Photo", "Address Proof"],
            notes: "Urgent processing required",
          },
          {
            id: "ORD002",
            customerName: "Priya Sharma",
            customerPhone: "+91 98765 43211",
            service: "Color Printing",
            status: "pending",
            amount: "₹120",
            date: "22 Feb 2024",
            deadline: "25 Feb 2024",
            documents: ["Document File"],
            notes: "Double-sided printing required",
          },
          {
            id: "ORD003",
            customerName: "Amit Patel",
            customerPhone: "+91 98765 43212",
            service: "Document Scanning",
            status: "completed",
            amount: "₹80",
            date: "18 Feb 2024",
            deadline: "20 Feb 2024",
            documents: ["Physical Documents"],
            notes: "Scan to PDF format",
          },
          {
            id: "ORD004",
            customerName: "Sneha Reddy",
            customerPhone: "+91 98765 43213",
            service: "GST Registration",
            status: "in-progress",
            amount: "₹899",
            date: "25 Feb 2024",
            deadline: "02 Mar 2024",
            documents: ["PAN Card", "Aadhaar", "Business Proof"],
            notes: "New business registration",
          },
          {
            id: "ORD005",
            customerName: "Rohan Mehta",
            customerPhone: "+91 98765 43214",
            service: "Visiting Card Printing",
            status: "completed",
            amount: "₹250",
            date: "15 Feb 2024",
            deadline: "18 Feb 2024",
            documents: ["Logo File", "Design Template"],
            notes: "Glossy finish required",
          },
          {
            id: "ORD006",
            customerName: "Anjali Singh",
            customerPhone: "+91 98765 43215",
            service: "Document Notarization",
            status: "cancelled",
            amount: "₹300",
            date: "19 Feb 2024",
            deadline: "22 Feb 2024",
            documents: ["Property Documents"],
            notes: "Customer cancelled order",
          },
          {
            id: "ORD007",
            customerName: "Vikram Joshi",
            customerPhone: "+91 98765 43216",
            service: "Photo ID Printing",
            status: "pending",
            amount: "₹75",
            date: "26 Feb 2024",
            deadline: "28 Feb 2024",
            documents: ["Digital Photo"],
            notes: "Passport size photos",
          },
          {
            id: "ORD008",
            customerName: "Neha Gupta",
            customerPhone: "+91 98765 43217",
            service: "Document Lamination",
            status: "in-progress",
            amount: "₹40",
            date: "23 Feb 2024",
            deadline: "24 Feb 2024",
            documents: ["Educational Certificates"],
            notes: "A4 size lamination",
          },
          {
            id: "ORD009",
            customerName: "Arun Malhotra",
            customerPhone: "+91 98765 43218",
            service: "Company Incorporation",
            status: "in-progress",
            amount: "₹2,500",
            date: "18 Feb 2024",
            deadline: "29 Feb 2024",
            documents: ["Director PAN", "Address Proof"],
            notes: "Private Limited company",
          },
          {
            id: "ORD010",
            customerName: "Pooja Verma",
            customerPhone: "+91 98765 43219",
            service: "Xerox & Photocopy",
            status: "completed",
            amount: "₹60",
            date: "21 Feb 2024",
            deadline: "21 Feb 2024",
            documents: ["Original Documents"],
            notes: "50 pages single sided",
          },
        ]);

        setServices([
          {
            id: 1,
            name: "Passport Application",
            category: "Government Services",
            price: "₹450",
            active: true,
            orders: 45,
            description:
              "Complete passport application processing and submission",
            estimatedTime: "3-5 days",
          },
          {
            id: 2,
            name: "Color Printing",
            category: "Printing Services",
            price: "₹120",
            active: true,
            orders: 89,
            description: "High quality color printing services",
            estimatedTime: "1 day",
          },
          {
            id: 3,
            name: "Document Scanning",
            category: "Digital Services",
            price: "₹80",
            active: true,
            orders: 67,
            description: "Convert physical documents to digital format",
            estimatedTime: "2-3 hours",
          },
          {
            id: 4,
            name: "GST Registration",
            category: "Business Services",
            price: "₹899",
            active: false,
            orders: 12,
            description: "GST registration and compliance services",
            estimatedTime: "5-7 days",
          },
        ]);

        setReviews([
          {
            id: 1,
            customerName: "Rajesh Kumar",
            rating: 5,
            comment: "Excellent service! Quick and professional.",
            date: "20 Feb 2024",
            service: "Passport Application",
          },
          {
            id: 2,
            customerName: "Priya Sharma",
            rating: 4,
            comment:
              "Good quality printing, but delivery was slightly delayed.",
            date: "18 Feb 2024",
            service: "Color Printing",
          },
          {
            id: 3,
            customerName: "Amit Patel",
            rating: 5,
            comment: "Very professional and fast service. Highly recommended!",
            date: "15 Feb 2024",
            service: "Document Scanning",
          },
        ]);

        setEarnings([
          { month: "Jan", earnings: 32500 },
          { month: "Feb", earnings: 45250 },
          { month: "Mar", earnings: 28900 },
          { month: "Apr", earnings: 38750 },
        ]);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Update vendor stats when orders change
  useEffect(() => {
    if (recentOrders.length > 0) {
      const activeOrders = recentOrders.filter(
        (order) => order.status === "in-progress"
      ).length;
      const completedOrders = recentOrders.filter(
        (order) => order.status === "completed"
      ).length;

      setVendor((prev) => ({
        ...prev,
        activeOrders,
        completedOrders: prev.completedOrders + completedOrders, // Accumulate completed orders
      }));
    }
  }, [recentOrders]);

  // Calculate total earnings from earnings data
  useEffect(() => {
    if (earnings.length > 0) {
      const totalEarnings = earnings.reduce(
        (sum, month) => sum + month.earnings,
        0
      );
      setVendor((prev) => ({
        ...prev,
        totalEarnings: `₹${totalEarnings.toLocaleString()}`,
      }));
    }
  }, [earnings]);

  const calculateAverageRating = () => {
    if (reviews.length === 0) return "0.0";
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  // Handle order status update
  const handleOrderStatusUpdate = (orderId, newStatus) => {
    setRecentOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  // Handle service updates
  const handleServiceUpdate = (updatedServices) => {
    setServices(updatedServices);
  };

  // Handle vendor settings update
  const handleVendorUpdate = (updatedVendor) => {
    setVendor(updatedVendor);
  };

  // Refresh dashboard data
  const refreshDashboard = async () => {
    setIsLoading(true);
    try {
      // Simulate API call to refresh data
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Dashboard data refreshed");
    } catch (error) {
      console.error("Error refreshing dashboard:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderActiveTab = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading dashboard data...</p>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case "dashboard":
        return (
          <DashboardTab
            vendor={vendor}
            recentOrders={recentOrders}
            reviews={reviews}
            earnings={earnings}
            onRefresh={refreshDashboard}
            isLoading={isLoading}
            onViewAllOrders={() => setActiveTab("orders")}
            onViewAllReviews={() => setActiveTab("reviews")}
            onViewAllNotifications={() => setActiveTab("notifications")}
          />
        );
      case "orders":
        return (
          <OrdersTab
            recentOrders={recentOrders}
            onOrderStatusUpdate={handleOrderStatusUpdate}
          />
        );
      case "services":
        return (
          <ServicesTab
            services={services}
            onServicesUpdate={handleServiceUpdate}
          />
        );
      case "reviews":
        return (
          <ReviewsTab
            reviews={reviews}
            calculateAverageRating={calculateAverageRating}
          />
        );
      case "notifications":
        return <NotificationTab />;
      case "earnings":
        return <EarningsTab vendor={vendor} earnings={earnings} />;
      case "settings":
        return (
          <SettingsTab vendor={vendor} onVendorUpdate={handleVendorUpdate} />
        );
      default:
        return (
          <DashboardTab
            vendor={vendor}
            recentOrders={recentOrders}
            reviews={reviews}
            earnings={earnings}
            onRefresh={refreshDashboard}
            isLoading={isLoading}
            onViewAllOrders={() => setActiveTab("orders")}
            onViewAllReviews={() => setActiveTab("reviews")}
            onViewAllNotifications={() => setActiveTab("notifications")}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Uncomment if you want to use VendorHeader */}
      {/* <VendorHeader vendor={vendor} /> */}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <VendorSidebar
            vendor={vendor}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            calculateAverageRating={calculateAverageRating}
            reviews={reviews}
          />

          {/* Main Content */}
          <div className="flex-1">{renderActiveTab()}</div>
        </div>
      </div>
    </div>
  );
}
