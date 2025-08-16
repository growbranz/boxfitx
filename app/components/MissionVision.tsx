"use client";
import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa"; // 🎯 Mission & 👁️ Vision icons

const MissionVision = () => {
  return (
    <section className="relative bg-gray-900 text-white py-16 px-6 lg:px-20">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

      <div className="relative max-w-6xl mx-auto text-center space-y-12">
        {/* Tagline */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#39FF14] drop-shadow-lg">
          More Than Muscles, We Build Lifestyle
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Mission */}
          <div className="p-6 rounded-2xl bg-gray-800 shadow-lg hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-4">
              <FaBullseye className="text-[#39FF14] text-3xl" />
              <h3 className="text-2xl font-semibold text-[#39FF14]">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At <span className="text-white font-semibold">Box FitX</span>, our
              mission is to empower individuals to push beyond limits, embrace
              discipline, and create lasting change through fitness, boxing, and
              nutrition. We’re here to help you transform both body and mind.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 rounded-2xl bg-gray-800 shadow-lg hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-4">
              <FaEye className="text-[#39FF14] text-3xl" />
              <h3 className="text-2xl font-semibold text-[#39FF14]">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We envision a community where fitness is more than just muscles —
              it’s a way of life. Our vision is to build a healthier, stronger,
              and more confident generation by combining modern training with
              lifestyle-focused guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
