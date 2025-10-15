
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "Bulk Xerox & Print", sub: "ஜெராக்ஸ் & பிரிண்ட்", desc: "B&W, Color, Multiple copies", color: "bg-blue-500", icon: "print" },
  { title: "Driving License", sub: "உரிமம் & அனுமதி", desc: "New license or renewal", color: "bg-teal-500", icon: "car" },
  { title: "Visa & Passport", sub: "விசா & பாஸ்போர்ட்", desc: "International documents", color: "bg-amber-500", icon: "plane" },
  { title: "Health Cards", sub: "சுகாதார அட்டைகள்", desc: "Insurance & health schemes", color: "bg-rose-500", icon: "heart" },
  { title: "Education Certs", sub: "கல்வி சான்றிதழ்", desc: "Marksheets,scholarships ", color: "bg-indigo-500", icon: "school" },
  { title: "Business Registration", sub: "வணிக பதிவு", desc: "GST, MSME, Udyam, FSSAI registration services", color: "bg-green-500", icon: "id" },
  { title: "Online Applications", sub: "ஆன்லைன் விண்ணப்பங்கள்", desc: "College admission, TNPSC,SSC,RRB,CAT ", color: "bg-orange-500", icon: "doc" },
  { title: "Certificates", sub: "சான்றிதழ்கள்", desc: "Birth, income, community", color: "bg-lime-500", icon: "card" },
  { title: "More Services", sub: "மேலும் சேவைகள்", desc: "Explore all options", color: "bg-purple-500", icon: "more" },
];


function Icon({ name }) {
  switch (name) {
    case "print":
      return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7M6 13h12v7H6v-7z" />
      </svg>;
    case "id":
      return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
      </svg>;
    case "card":
      return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth={1.5} />
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
      </svg>;
    case "car":
      return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13" />
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z" />
      </svg>;
    case "plane":
      return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M2 16l20-8-8 8-4 4-2-4-6-4z" />
      </svg>;
    case "heart":
      return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z" />
      </svg>;
    case "school":
      return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4-8 4-8-4 8-4z" />
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M4 10v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
      </svg>;
    case "doc":
      return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      </svg>;
    case "more":
      return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 6v.01M12 12v.01M12 18v.01" />
      </svg>;
    default:
      return null;
  }
}

export default function OurServices() {

  const navigate = useNavigate();

  const gotoShops = () =>{
    navigate("/shops");
  }

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-700 mb-2">எங்கள் சேவைகள்</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-6">
            From simple xerox to complex government applications - we handle it all with precision and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div onClick={gotoShops}
              key={service.title} 
              className="group bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={service.icon} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mt-1">{service.sub}</p>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-xs text-gray-400">Service {index + 1}</span>
                  <button className="text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 group-hover:gap-2 duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Hover effect line- group-hover:w-full  */}
              <div className={`h-1 w-0 ${service.color} transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link to={"/service"} className="bg-gradient-to-r from-blue-300 to-purple-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            View All Services
          </Link>
          <p className="text-gray-500 text-sm mt-4">50+ services available • Walk-ins welcome</p>
        </div>
      </div>
    </section>
  );
}