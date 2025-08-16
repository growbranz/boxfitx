"use client";
import React from "react";

const timings = {
  fitness: {
    morning: [
      { time: "05:00 AM - 10:00 AM", note: "Regular Time" },
      { time: "10:00 AM - 12:00 PM", note: "Women's Time" },
    ],
    evening: [{ time: "04:30 PM - 09:00 PM", note: "Regular Time" }],
  },
  boxing: {
    morning: [
      { time: "05:30 AM - 06:30 AM", note: "1st Batch" },
      { time: "06:30 AM - 07:30 AM", note: "2nd Batch" },
      { time: "07:30 AM - 08:30 AM", note: "3rd Batch" },
    ],
    evening: [
      { time: "04:30 PM - 05:30 PM", note: "1st Batch" },
      { time: "05:30 PM - 06:30 PM", note: "2nd Batch" },
      { time: "06:30 PM - 07:30 PM", note: "3rd Batch" },
    ],
  },
};

const Timetable = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#ff4d00] uppercase tracking-widest">
            Schedule
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase drop-shadow-[0_0_15px_#39FF14]">
            Class Timings
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Fitness Class */}
          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg shadow-[0_0_20px_rgba(57,255,20,0.3)]">
            <h3 className="text-2xl font-bold text-[#39FF14] mb-6">
              Fitness Class
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#ff4d00] mb-2">
                  Morning
                </h4>
                <ul className="space-y-2">
                  {timings.fitness.morning.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between border-b border-gray-700 pb-1"
                    >
                      <span>{item.time}</span>
                      <span className="text-gray-400 text-sm">{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#ff4d00] mb-2">
                  Evening
                </h4>
                <ul className="space-y-2">
                  {timings.fitness.evening.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between border-b border-gray-700 pb-1"
                    >
                      <span>{item.time}</span>
                      <span className="text-gray-400 text-sm">{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Boxing Class */}
          <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg shadow-[0_0_20px_rgba(57,255,20,0.3)]">
            <h3 className="text-2xl font-bold text-[#39FF14] mb-6">
              Boxing Class
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#ff4d00] mb-2">
                  Morning
                </h4>
                <ul className="space-y-2">
                  {timings.boxing.morning.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between border-b border-gray-700 pb-1"
                    >
                      <span>{item.time}</span>
                      <span className="text-gray-400 text-sm">{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#ff4d00] mb-2">
                  Evening
                </h4>
                <ul className="space-y-2">
                  {timings.boxing.evening.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between border-b border-gray-700 pb-1"
                    >
                      <span>{item.time}</span>
                      <span className="text-gray-400 text-sm">{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timetable;
