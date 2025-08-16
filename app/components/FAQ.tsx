"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Do you offer personal training?",
    answer:
      "Yes! We have certified trainers who provide one-on-one and group training sessions tailored to your fitness goals.",
  },
  {
    question: "What are your membership fees?",
    answer:
      "We offer flexible monthly, quarterly, and annual membership plans. Visit us or contact us for the latest pricing details.",
  },
  {
    question: "What are your working hours?",
    answer:
      "We are open Monday to Saturday from 6 AM – 9 PM. We’re closed on Sundays.",
  },
  {
    question: "Do you provide nutrition guidance?",
    answer:
      "Absolutely. Along with fitness training, we provide expert nutrition and diet consultation to complement your workouts.",
  },
  {
    question: "Can beginners join your programs?",
    answer:
      "Of course! We welcome all fitness levels, from complete beginners to advanced athletes. Our trainers adapt programs to your needs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#ff4d00] uppercase tracking-widest">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase drop-shadow-[0_0_15px_#39FF14]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl shadow-lg shadow-[0_0_15px_rgba(57,255,20,0.2)] overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-lg focus:outline-none hover:bg-neutral-800 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className="text-[#39FF14]" />
                ) : (
                  <FaChevronDown className="text-[#39FF14]" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`px-6 pb-5 text-gray-300 leading-relaxed transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
