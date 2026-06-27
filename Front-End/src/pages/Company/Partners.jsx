import React from "react";
import { motion } from "framer-motion";
import { Handshake, Store, TrendingUp } from "lucide-react";

export default function Partners() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
        >
          Partner with OneTap
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          Are you a local shop owner, Xerox center, or government service agent? Join our network and multiply your daily orders.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Store className="w-8 h-8 text-blue-600" />, title: "Digital Storefront", desc: "Get your shop listed on our platform and receive digital orders instantly without customers waiting in line." },
            { icon: <Handshake className="w-8 h-8 text-blue-600" />, title: "Delivery Network", desc: "Our delivery partners will pick up completed documents from your shop and deliver them to the customer." },
            { icon: <TrendingUp className="w-8 h-8 text-blue-600" />, title: "Grow Revenue", desc: "Expand your reach beyond your neighborhood and increase your daily revenue effortlessly." }
          ].map((val, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
            >
              <div className="mb-6 p-4 bg-blue-50 inline-block rounded-full">{val.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{val.title}</h3>
              <p className="text-slate-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to boost your business?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Registration is quick, easy, and completely free. Start receiving OneTap orders today.</p>
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            Register as a Vendor
          </button>
        </motion.div>
      </div>
    </div>
  );
}
