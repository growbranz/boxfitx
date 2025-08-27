"use client";
import React from "react";
import { FaLeaf, FaWeight, FaUtensils, FaSmileBeam } from "react-icons/fa";
import { GiMuscleUp, GiShinyApple } from "react-icons/gi";
import NavBar from "../components/NavBar";
import Footer from "../components/footer"; // ✅ match file casing
import WhatsappIcon from "../components/WhatsappIcon";
import CallToActionBanner from "../components/cta"; // ✅ match file casing
import Image from "next/image";

const nutritionServices = [
  {
    title: "Personalized Meal Plans",
    icon: <FaUtensils className="text-4xl text-[#39FF14]" />,
    image: "/nutrition/meal-plan.jpg",
    description:
      "Customized meal plans designed around your fitness goals, lifestyle, and preferences.",
  },
  {
    title: "Weight Management",
    icon: <FaWeight className="text-4xl text-[#39FF14]" />,
    image: "/nutrition/weight-management.jpg",
    description:
      "Science-based strategies for sustainable weight loss or healthy weight gain.",
  },
  {
    title: "Muscle Gain Nutrition",
    icon: <GiMuscleUp className="text-4xl text-[#39FF14]" />,
    image: "/nutrition/muscle-gain.jpg",
    description:
      "Fuel your training with high-protein diets and recovery-focused meal guidance.",
  },
  {
    title: "Supplements Guidance",
    icon: <GiShinyApple className="text-4xl text-[#39FF14]" />,
    image: "/nutrition/supplements.jpg",
    description:
      "Expert advice on choosing the right supplements to maximize performance and recovery.",
  },
  {
    title: "Healthy Lifestyle Coaching",
    icon: <FaLeaf className="text-4xl text-[#39FF14]" />,
    image: "/nutrition/healthy-lifestyle.jpg",
    description:
      "Learn how to create lasting healthy habits that go beyond just dieting.",
  },
  {
    title: "Energy & Vitality",
    icon: <FaSmileBeam className="text-4xl text-[#39FF14]" />,
    image: "/nutrition/energy.jpg",
    description:
      "Boost energy levels and improve mood through nutrient-rich food choices.",
  },
];

const Nutrition = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section with Background Image */}
      <section className="relative bg-black text-white text-center px-6 flex items-center justify-center min-h-[60vh]">
        <Image
          src="/nutrition/nutrition-hero.jpg"
          alt="Nutrition Hero"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-6">
            <span className="bg-gradient-to-r from-[#39FF14] to-[#00D4FF] bg-clip-text text-transparent drop-shadow-lg">
              Nutrition for Performance
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl">
            At <span className="text-white font-semibold">Box FitX</span>, we
            believe nutrition is the foundation of fitness. Get tailored plans,
            expert guidance, and the fuel your body deserves.
          </p>
        </div>
      </section>

      {/* Nutrition Services Grid */}
      <section className="bg-neutral-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6 text-[#39FF14] drop-shadow-lg">
            Our Nutrition Plans
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Choose from a variety of expert-designed nutrition services to boost
            your fitness journey.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {nutritionServices.map((service, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-2xl shadow-lg shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:scale-105 transition-transform overflow-hidden"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-[#39FF14] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/cgym9.jpg"
            alt="Healthy Food"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg shadow-[0_0_25px_rgba(57,255,20,0.4)]"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#39FF14] uppercase">
              Fuel Your Transformation
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Nutrition isn’t about strict diets — it’s about balance. Our
              expert nutritionists help you create a plan that fuels your
              workouts, supports recovery, and keeps you energized throughout
              the day.
            </p>
            <p className="text-gray-400 italic">
              "The body achieves what the mind believes — and it starts with the
              fuel you provide."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CallToActionBanner />
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Nutrition;
