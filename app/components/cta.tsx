"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import LeadPopup from "./LeadPopup"; // ✅ import popup

const CallToActionBanner = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden">
      {/* Background Video (subtle with overlay) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/fitness-banner.mp4" type="video/mp4" />
      </video>

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Glow Focus Behind Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#39FF14]/20 blur-[120px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
      >
        <motion.h2
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-snug"
        >
          Start Your <span className="text-[#39FF14]">Transformation</span>{" "}
          <br />
          With <span className="text-[#ff4d00]">Box FitX</span>
        </motion.h2>

        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Build strength, burn fat, and unlock unstoppable confidence — your new
          lifestyle begins here.
        </p>

        {/* ✅ Button to open popup */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPopup(true)}
          className="inline-block px-8 py-4 rounded-full font-bold text-lg bg-[#39FF14] text-black hover:bg-[#ff4d00] hover:text-white transition-colors shadow-lg"
        >
          💪 Join Now
        </motion.button>
      </motion.div>

      {/* ✅ LeadPopup Integration */}
      <LeadPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        club="Box FitX"
      />
    </section>
  );
};

export default CallToActionBanner;
