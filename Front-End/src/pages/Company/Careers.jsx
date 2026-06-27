import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, ArrowRight, X, Send } from "lucide-react";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: ""
  });

  const jobs = [
    { title: "Delivery Partner", location: "Chennai", type: "Full-Time / Part-Time" },
    { title: "Document Verification Specialist", location: "Remote / Tamil Nadu", type: "Full-Time" },
    { title: "Customer Support Executive", location: "Chennai", type: "Full-Time" },
    { title: "City Operations Manager", location: "Coimbatore", type: "Full-Time" },
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    setIsSuccess(false);
    setFormData({ name: "", email: "", phone: "", experience: "", coverLetter: "" });
  };

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => setSelectedJob(null), 300);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("${import.meta.env.VITE_API_BASE_URL}/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          role: selectedJob.title
        }),
      });
      
      const result = await response.json();
      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
        >
          Join the OneTap Mission
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          We are looking for passionate individuals to help us digitize and deliver essential services to every doorstep in Tamil Nadu.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="grid gap-6">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between hover:shadow-lg transition-shadow group"
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{job.title}</h3>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                </div>
              </div>
              <button 
                onClick={() => handleApplyClick(job)}
                className="mt-4 md:mt-0 flex items-center justify-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 rounded-xl font-medium group-hover:bg-blue-600 group-hover:text-white transition-colors"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto pt-24 pb-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={handleClose}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-xl font-bold text-slate-800">
                  Apply for {selectedJob?.title}
                </h2>
                <button 
                  onClick={handleClose}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Sent!</h3>
                    <p className="text-slate-600 mb-8">Thank you for applying. Our hiring team will review your application and get back to you soon.</p>
                    <button 
                      onClick={handleClose}
                      className="px-8 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                        <input 
                          type="text" required name="name" value={formData.name} onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" 
                          placeholder="John Doe" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                        <input 
                          type="email" required name="email" value={formData.email} onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" 
                          placeholder="john@example.com" 
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                        <input 
                          type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" 
                          placeholder="+91 9876543210" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Years of Experience *</label>
                        <input 
                          type="number" required min="0" step="0.5" name="experience" value={formData.experience} onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" 
                          placeholder="e.g. 2.5" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Cover Letter / About You *</label>
                      <textarea 
                        required rows="5" name="coverLetter" value={formData.coverLetter} onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none" 
                        placeholder="Tell us why you are a great fit for this role..." 
                      />
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                      <button 
                        type="button" onClick={handleClose}
                        className="px-6 py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" disabled={isSubmitting}
                        className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-70"
                      >
                        {isSubmitting ? "Sending..." : <><Send className="w-4 h-4" /> Submit Application</>}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
