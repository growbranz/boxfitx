"use client";
import React from "react";
import {
  FaDumbbell,
  FaRunning,
  FaHeartbeat,
  FaUserFriends,
  FaHandsHelping,
} from "react-icons/fa";
import { GiBoxingGlove, GiMuscleUp } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import PricingPlans from "../components/price";
import CallToActionBanner from "../components/Cta";
import WhatWeHave from "../components/what";

const programsList = [
  {
    title: "Boxing",
    icon: <GiBoxingGlove className="text-5xl text-[#39FF14]" />,
    description:
      "Learn the art of boxing with professional coaches, improve strength, endurance, and discipline.",
  },
  {
    title: "Weight Training",
    icon: <FaDumbbell className="text-5xl text-[#39FF14]" />,
    description:
      "Build strength and muscle with guided weightlifting sessions tailored to all levels.",
  },
  {
    title: "CrossFit",
    icon: <MdFitnessCenter className="text-5xl text-[#39FF14]" />,
    description:
      "High-intensity functional workouts that combine strength, agility, and conditioning.",
  },
  {
    title: "Cardio",
    icon: <FaHeartbeat className="text-5xl text-[#39FF14]" />,
    description:
      "Boost stamina, burn calories, and improve heart health with our cardio programs.",
  },
  {
    title: "Personal Training",
    icon: <FaUserFriends className="text-5xl text-[#39FF14]" />,
    description:
      "Get one-on-one coaching with personalized fitness plans designed for your goals.",
  },
  {
    title: "Calisthenics",
    icon: <GiMuscleUp className="text-5xl text-[#39FF14]" />,
    description:
      "Master bodyweight movements to build strength, mobility, and control.",
  },
  {
    title: "Agility Training",
    icon: <FaRunning className="text-5xl text-[#39FF14]" />,
    description:
      "Enhance speed, coordination, and reaction time with agility drills.",
  },
  {
    title: "Bodyweight Exercises",
    icon: <FaHandsHelping className="text-5xl text-[#39FF14]" />,
    description:
      "No equipment needed — train using your own bodyweight to develop functional strength.",
  },
];

const Programs = () => {
  return (
    <div>
      <NavBar />
      <WhatWeHave />
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6 text-[#39FF14] drop-shadow-lg">
            Our Programs
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Whether you’re a beginner or advanced athlete,{" "}
            <span className="text-white font-semibold">Box FitX</span> has
            programs tailored to push your limits and build a lifestyle of
            fitness.
          </p>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programsList.map((program, index) => (
              <div
                key={index}
                className="bg-neutral-900 p-8 rounded-2xl shadow-lg shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:scale-105 transition-transform"
              >
                <div className="flex justify-center mb-6">{program.icon}</div>
                <h3 className="text-2xl font-bold text-[#39FF14] mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-300">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PricingPlans />
      <CallToActionBanner />
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Programs;
