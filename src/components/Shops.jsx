import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Dummy 20 Shops Data
const shops = [
  {
    name: "Smart Xerox Center",
    address: "Anna Nagar, Chennai",
    services: "Xerox, Printing, Scanning",
    rating: 4.5,
    distance: "0.8 km",
    open: true,
    image: "🖨",
  },
  {
    name: "Speed Print & Xerox",
    address: "T Nagar, Chennai",
    services: "Color Print, Lamination",
    rating: 4.2,
    distance: "1.2 km",
    open: true,
    image: "📄",
  },
  {
    name: "Copy World",
    address: "Adyar, Chennai",
    services: "Xerox, Binding, Printout",
    rating: 4.7,
    distance: "0.5 km",
    open: false,
    image: "📑",
  },
  {
    name: "Express Xerox Point",
    address: "Tambaram, Chennai",
    services: "Online Applications, Printouts",
    rating: 4.0,
    distance: "2.1 km",
    open: true,
    image: "⚡",
  },
  {
    name: "Quick Print Hub",
    address: "Velachery, Chennai",
    services: "Xerox, Color Print, Scan",
    rating: 4.6,
    distance: "1.5 km",
    open: true,
    image: "🏪",
  },
  {
    name: "Bright Xerox Shop",
    address: "Porur, Chennai",
    services: "Xerox, Photo Copy, Printing",
    rating: 4.1,
    distance: "3.2 km",
    open: true,
    image: "✨",
  },
  {
    name: "Green Print & Copy",
    address: "Guindy, Chennai",
    services: "Xerox, Online Services",
    rating: 4.4,
    distance: "0.9 km",
    open: false,
    image: "🌿",
  },
  {
    name: "Digital Doc Center",
    address: "Mylapore, Chennai",
    services: "Scanning, Lamination, Printing",
    rating: 4.8,
    distance: "1.8 km",
    open: true,
    image: "💻",
  },
  {
    name: "Speedy Copy",
    address: "Anna Nagar, Chennai",
    services: "Xerox, Printing",
    rating: 4.3,
    distance: "0.9 km",
    open: true,
    image: "📠",
  },
  {
    name: "PrintPro",
    address: "T Nagar, Chennai",
    services: "Lamination, Binding",
    rating: 4.2,
    distance: "1.1 km",
    open: true,
    image: "📝",
  },
  {
    name: "Xpress Docs",
    address: "Adyar, Chennai",
    services: "Color Print, Scan",
    rating: 4.5,
    distance: "0.7 km",
    open: false,
    image: "📂",
  },
  {
    name: "Copy & Go",
    address: "Tambaram, Chennai",
    services: "Printing, Xerox",
    rating: 4.0,
    distance: "2.0 km",
    open: true,
    image: "✂",
  },
  {
    name: "PrintXpress",
    address: "Velachery, Chennai",
    services: "Scanning, Xerox",
    rating: 4.6,
    distance: "1.6 km",
    open: true,
    image: "🖨",
  },
  {
    name: "Xerox Point",
    address: "Porur, Chennai",
    services: "Binding, Copy",
    rating: 4.1,
    distance: "3.3 km",
    open: true,
    image: "📑",
  },

  {
    name: "Copy Center",
    address: "Tambaram, Chennai",
    services: "Xerox, Laminating",
    rating: 4.0,
    distance: "2.2 km",
    open: true,
    image: "✂",
  },
];

export default function NearbyShops() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [filterPlace, setFilterPlace] = useState("All");
    setFilterPlace
  const slidesToShow = 5;

  // Filter shops by place
  const filteredShops =
    filterPlace === "All"
      ? shops
      : shops.filter((shop) =>
          shop.address.toLowerCase().includes(filterPlace.toLowerCase())
        );

  const totalSlides = Math.ceil(filteredShops.length / slidesToShow);

  // Auto play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-blue-50 py-12 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-900/80 to-indigo-900/90"></div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4 border border-blue-100">
            <span className="text-2xl">🖨</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Nearby Xerox Shops
          </h2>
          <p className="text-sm text-white">Find printing services near you</p>
        </div>

        {/* Filter */}
        {/* <div className="mb-6 text-center">
          <div className="inline-flex items-center bg-white rounded-lg shadow-sm border border-gray-200 px-3 py-2">
            <span className="text-xs text-gray-500 mr-2">📍</span>
            <select
              className="border-0 bg-transparent text-sm focus:outline-none focus:ring-0 cursor-pointer"
              value={filterPlace}
              onChange={(e) => {
                setFilterPlace(e.target.value);
                setCurrentSlide(0);
              }}
            >
              <option>All</option>
              <option>Anna Nagar</option>
              <option>T Nagar</option>
              <option>Adyar</option>
              <option>Tambaram</option>
              <option>Velachery</option>
              <option>Porur</option>
              <option>Guindy</option>
              <option>Mylapore</option>
            </select>
          </div>
        </div> */}

        {/* Carousel Container */}
        <div className="relative mb-6 group">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-sm text-gray-600 hover:text-blue-600 transition-all duration-300 z-20 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-x-5 hover:border-blue-200 backdrop-blur-sm"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-sm text-gray-600 hover:text-blue-600 transition-all duration-300 z-20 shadow-lg hover:shadow-xl hover:scale-110 hover:translate-x-5 hover:border-blue-200 backdrop-blur-sm"
          >
            ›
          </button>

          {/* Carousel Track */}
          <div className="relative py-5 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-2">
                    {filteredShops
                      .slice(
                        slideIndex * slidesToShow,
                        slideIndex * slidesToShow + slidesToShow
                      )
                      .map((shop, idx) => (
                        <React.Fragment key={idx}>
                          <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 overflow-hidden group/card hover:scale-105 hover:-translate-y-2">
                            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-white to-blue-50">
                              <div className="flex items-center justify-between mb-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover/card:bg-blue-200 transition-colors duration-300 group-hover/card:scale-110">
                                  <span className="text-base">
                                    {shop.image}
                                  </span>
                                </div>
                                <span
                                  className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-300 ${
                                    shop.open
                                      ? "bg-green-100 text-green-700 group-hover/card:bg-green-200 group-hover/card:shadow-sm"
                                      : "bg-red-100 text-red-700 group-hover/card:bg-red-200 group-hover/card:shadow-sm"
                                  }`}
                                >
                                  {shop.open ? "🟢 Open" : "🔴 Closed"}
                                </span>
                              </div>
                              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight mb-1 group-hover/card:text-blue-700 transition-colors duration-300">
                                {shop.name}
                              </h3>
                              <p className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded-full inline-block group-hover/card:bg-blue-100 transition-colors duration-300">
                                {shop.distance}
                              </p>
                            </div>
                            <div className="p-4">
                              <div className="flex items-start mb-3 group/location">
                                <span className="text-xs text-gray-500 mr-2 mt-0.5 group-hover/location:text-red-500 transition-colors duration-300">
                                  📍
                                </span>
                                <p className="text-xs text-gray-600 line-clamp-2 leading-tight group-hover/location:text-gray-700 transition-colors duration-300">
                                  {shop.address}
                                </p>
                              </div>
                              <div className="mb-4 group/services">
                                <p className="text-xs text-gray-500 mb-1 group-hover/services:text-blue-600 transition-colors duration-300">
                                  Services:
                                </p>
                                <p className="text-xs text-gray-700 line-clamp-2 leading-tight group-hover/services:text-gray-800 transition-colors duration-300">
                                  {shop.services}
                                </p>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center group/rating">
                                  <span className="text-yellow-500 text-xs mr-1 group-hover/rating:scale-110 transition-transform duration-300">
                                    ⭐
                                  </span>
                                  <span className="text-xs font-medium text-gray-800 group-hover/rating:text-yellow-700 transition-colors duration-300">
                                    {shop.rating}
                                  </span>
                                </div>
                                <Link to={"/service"} className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95 group/button relative overflow-hidden">
                                  <span className="relative z-10 group-hover/button:text-white">
                                    Book Now
                                  </span>
                                  <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover/button:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mb-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                index === currentSlide
                  ? "bg-blue-600 w-8 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400 hover:shadow-sm"
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-gray-800 transition-colors duration-200 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm"
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"
              }`}
            ></div>
            Auto-play: {isAutoPlaying ? "ON" : "OFF"}
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        `}
      </style>
    </section>
  );
}


