"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import LeadPopup from "./LeadPopup"; // 👈 import your popup

const services = [
  {
    title: "Fitness Club",
    description:
      "Our state-of-the-art fitness club offers the best equipment, certified trainers, and a motivating environment to help you achieve your goals.",
    video: "/fitness-club.mp4",
    cta: "Join Now",
  },
  {
    title: "Boxing Fitness Club",
    description:
      "Experience high-energy boxing sessions designed to build strength, speed, and endurance, whether you're a beginner or a pro.",
    video: "/boxing-club.mp4",
    cta: "Start Training",
  },
  {
    title: "Nutrition Club",
    description:
      "Get personalized nutrition guidance and meal plans tailored to your fitness journey, ensuring you fuel your body the right way.",
    video: "/nutrition-club.mp4",
    cta: "Get Started",
  },
];

const WhatWeHave = () => {
  // State for popup
  const [selectedClub, setSelectedClub] = useState<string | null>(null);

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-[#ff4d00] uppercase tracking-widest font-semibold text-sm">
          What We Have
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-[0_0_15px_#39FF14]">
          Explore Our Clubs
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          From fitness training to boxing and nutrition, we offer everything you need to
          achieve your dream body and a healthy lifestyle.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg border border-neutral-800 flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Video */}
            <div className="h-64 overflow-hidden">
              <video
                src={service.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 p-6 bg-neutral-900 text-center">
              <div>
                <h3 className="text-2xl font-bold text-[#39FF14] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
              </div>
              <button
                onClick={() => setSelectedClub(service.title)} // 👈 open popup
                className="px-6 py-2 rounded-full font-semibold bg-[#ff4d00] hover:bg-[#39FF14] hover:text-black transition-colors shadow-lg"
              >
                {service.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lead Popup */}
      <LeadPopup
        isOpen={!!selectedClub}
        onClose={() => setSelectedClub(null)}
        club={selectedClub || ""}
      />
    </section>
  );
};

export default WhatWeHave;
