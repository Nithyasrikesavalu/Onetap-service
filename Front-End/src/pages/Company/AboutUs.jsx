import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, MapPin, Users } from "lucide-react";

export default function AboutUs() {
  const stats = [
    { label: "Active Customers", value: "10,000+" },
    { label: "Services Provided", value: "50,000+" },
    { label: "Partner Shops", value: "500+" },
    { label: "Cities Covered", value: "25+" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Digital Docs, Physical Delivery.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            OneTap Services bridges the gap between essential documentation services and doorstep delivery. We empower communities across Tamil Nadu by making government and daily documentation accessible with a single tap.
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 border-y border-slate-200 mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Shield className="w-8 h-8 text-blue-600" />, title: "Trust & Security", desc: "Your sensitive documents are handled with the highest level of privacy and security." },
            { icon: <Clock className="w-8 h-8 text-blue-600" />, title: "Speed & Efficiency", desc: "We guarantee fast processing and on-time doorstep delivery for all your requests." },
            { icon: <Users className="w-8 h-8 text-blue-600" />, title: "Community First", desc: "Built to serve the people, ensuring everyone has easy access to essential services." }
          ].map((val, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-6 p-4 bg-blue-50 inline-block rounded-xl">{val.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{val.title}</h3>
              <p className="text-slate-600 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
