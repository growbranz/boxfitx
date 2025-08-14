"use client";
import React, { useState } from "react";

const Gallery = () => {
  const allImages = [
    { src: "/gym-bg1.jpg", category: "fitness" },
    { src: "/gym-bg2.jpeg", category: "fitness" },
    { src: "/gallery3.jpg", category: "boxing" },
    { src: "/gallery4.jpg", category: "boxing" },
    { src: "/gallery5.jpg", category: "nutrition" },
    { src: "/gallery6.jpg", category: "nutrition" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages =
    selectedCategory === "all"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8 text-[#39FF14] drop-shadow-lg">
        Our Gallery
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {["all", "fitness", "boxing", "nutrition"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#39FF14] text-black shadow-lg scale-105"
                : "bg-gray-800 text-white hover:bg-[#39FF14] hover:text-black"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={img.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
