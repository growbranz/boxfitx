"use client";
import React from "react";
import { FaDumbbell, FaAppleAlt, FaUserTie, FaHeartbeat } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaDumbbell className="text-5xl text-[#39FF14]" />,
      title: "Modern Equipment",
      desc: "State-of-the-art machines and tools to help you train smarter, safer, and stronger.",
    },
    {
      icon: <FaAppleAlt className="text-5xl text-[#39FF14]" />,
      title: "Healthy Nutrition Plan",
      desc: "Personalized meal plans designed to fuel your body and maximize your results.",
    },
    {
      icon: <FaUserTie className="text-5xl text-[#39FF14]" />,
      title: "Professional Training Plan",
      desc: "Guidance from certified trainers who understand your goals and push your limits.",
    },
    {
      icon: <FaHeartbeat className="text-5xl text-[#39FF14]" />,
      title: "Unique to Your Needs",
      desc: "Custom fitness strategies that adapt to your lifestyle, schedule, and body type.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <p className="text-sm font-semibold text-[#ff4d00] uppercase tracking-widest mb-2">
          Why Choose Us?
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-16 drop-shadow-[0_0_15px_#39FF14]">
          Push Your Limits Forward
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-neutral-900 shadow-[0_0_20px_rgba(57,255,20,0.5)] mb-6">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
