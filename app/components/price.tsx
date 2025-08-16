"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import LeadPopup from "./LeadPopup"; // import your popup component

const plans = [
  {
    title: "Monthly Plan",
    price: "₹1500",
    duration: "per month",
    features: ["Standard equipment access", "Unlimited gym hours", "Access to locker rooms"],
    cta: "Get Started",
  },
  {
    title: "Quarterly Plan",
    price: "₹4000",
    duration: "per 3 months",
    features: ["Standard equipment access", "Unlimited gym hours", "Access to locker rooms"],
    cta: "Get Started",
    tag: "Popular",
    highlight: true,
  },
  {
    title: "Half-Yearly Plan",
    price: "₹7500",
    duration: "per 6 months",
    features: [
      "Standard equipment access",
      "Unlimited gym hours",
      "Access to locker rooms",
      "🎁 Free Gym Bag",
      "🎯 Specific Nutrition Guidance",
    ],
    cta: "Get Started",
    highlight: true,
    featured: true,
  },
  {
    title: "Annual Plan",
    price: "₹12000",
    duration: "per year",
    features: [
      "Standard equipment access",
      "Unlimited gym hours",
      "Access to locker rooms",
      "🎁 Free Gym Bag & T-Shirt",
      "📊 Body Analysis Report",
      "🎯 Specific Nutrition Guidance",
    ],
    cta: "Get Started",
    tag: "Best Value",
    highlight: true,
  },
  {
    title: "Couple Annual Plan",
    price: "₹18000",
    duration: "per year (2 persons)",
    features: ["Everything in Annual Plan", "Special Couple Membership Benefits"],
    cta: "Get Started",
  },
  {
    title: "Boxing Fitness Club",
    price: "₹1000",
    duration: "per month",
    features: ["Boxing training sessions", "Endurance & strength training"],
    cta: "Join Boxing",
  },
  {
    title: "Personal Training (Optional)",
    price: "₹5000",
    duration: "per month",
    features: ["One-on-one coaching", "Tailored fitness programs", "Faster results"],
    cta: "Hire Trainer",
  },
];

const PricingPlans = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const mainPlans = plans.filter((p) => p.highlight);
  const otherPlans = plans.filter((p) => !p.highlight);

  const handleOpenPopup = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setPopupOpen(true);
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-[#ff4d00] uppercase tracking-widest font-semibold text-sm">
          Our Plans
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-[0_0_15px_#39FF14]">
          Choose Your Plan
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Flexible membership options designed to fit your lifestyle. Whether it’s fitness,
          boxing, or nutrition, we’ve got you covered.
        </p>
      </div>

      {/* Main Plans */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 overflow-visible">
        {mainPlans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: plan.featured ? 1.1 : 1.05 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-2xl shadow-lg flex flex-col border overflow-visible
              ${plan.featured
                ? "bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] border-[#ff4d00] shadow-[0_0_30px_#ff4d00]"
                : "bg-neutral-900 border-[#39FF14]/40"
              }`}
          >
            {plan.tag && (
              <span className="absolute top-4 right-4 bg-[#39FF14] text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {plan.tag}
              </span>
            )}

            {plan.featured && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff4d00] text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full shadow-lg z-20">
                ⭐ Recommended
              </span>
            )}

            <div className="p-6 text-center border-b border-neutral-800">
              <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "text-[#ff4d00]" : "text-[#39FF14]"}`}>
                {plan.title}
              </h3>
              <p className="mt-2 text-3xl font-extrabold">{plan.price}</p>
              <p className="text-gray-400 text-sm">{plan.duration}</p>
            </div>

            <div className="p-6 flex-1">
              <ul className="space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <FaCheckCircle className={`${plan.featured ? "text-[#ff4d00]" : "text-[#39FF14]"}`} />{" "}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 text-center">
              <button
                onClick={() => handleOpenPopup(plan.title)}
                className="w-full px-6 py-3 rounded-full font-semibold transition-colors shadow-lg cursor-pointer
                  bg-[#ff4d00] hover:bg-[#39FF14] hover:text-black"
              >
                {plan.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Plans */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8 text-[#ff4d00]">
          Other Membership Options
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {otherPlans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-bold text-[#39FF14]">{plan.title}</h4>
                <span className="text-xl font-extrabold">{plan.price}</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">{plan.duration}</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#39FF14] text-sm" /> {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleOpenPopup(plan.title)}
                className="w-full px-4 py-2 rounded-full font-semibold bg-[#ff4d00] hover:bg-[#39FF14] hover:text-black transition-colors cursor-pointer"
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lead Popup */}
      <LeadPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        club={selectedPlan}
      />
    </section>
  );
};

export default PricingPlans;
