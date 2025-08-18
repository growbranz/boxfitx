"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const About = () => {
  const features = [
    {
      lottie: (
        <DotLottieReact
          src="https://lottie.host/062e7e5b-e1c3-4cd9-8db3-73197a762162/5cURpsXXaP.lottie"
          loop
          autoplay
          style={{ width: "110px", height: "110px" }}
        />
      ),
      title: "Modern Equipment",
      desc: "State-of-the-art machines and tools to help you train smarter, safer, and stronger.",
    },
    {
      lottie: (
        <DotLottieReact
          src="https://lottie.host/b97f6981-d764-41b9-8b3e-226ab2d8825c/KHAtBtGOXZ.lottie"
          loop
          autoplay
          style={{ width: "110px", height: "110px" }}
        />
      ),
      title: "Healthy Nutrition Plan",
      desc: "Personalized meal plans designed to fuel your body and maximize your results.",
    },
    {
      lottie: (
        <DotLottieReact
          src="https://lottie.host/c1d1e108-ee31-49e0-935d-25dd91f713ec/3LaMb9HQNz.lottie"
          loop
          autoplay
          style={{ width: "110px", height: "110px" }}
        />
      ),
      title: "Professional Training Plan",
      desc: "Guidance from certified trainers who understand your goals and push your limits.",
    },
    {
      lottie: (
        <DotLottieReact
          src="https://lottie.host/61d75958-ea33-4b33-ac85-854561b4fd30/uZYOZyQgA4.lottie"
          loop
          autoplay
          style={{ width: "110px", height: "110px" }}
        />
      ),
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
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="flex items-center justify-center w-32 h-32 rounded-full bg-neutral-900 shadow-[0_0_25px_rgba(57,255,20,0.7)] mb-6">
                {item.lottie}
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
