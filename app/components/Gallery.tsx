"use client";
import React, { useState } from "react";

const Gallery = ({ preview = false }) => {
  const allImages = [
    { src: "/images/cgym1.jpg", category: "fitness" },
    { src: "/images/cgym9.jpg", category: "fitness" },
    { src: "/images/cgym1.jpg", category: "boxing" },
    { src: "/images/cgym13.jpg", category: "boxing" },
    { src: "/images/cgym12.jpg", category: "nutrition" },
    { src: "/images/cgym4.jpg", category: "nutrition" },
    { src: "/images/cgym5.jpg", category: "fitness" },
    { src: "/images/cgym6.jpg", category: "boxing" },
    { src: "/images/cgym7.jpg", category: "nutrition" },
    { src: "/images/cgym8.jpg", category: "fitness" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages =
    selectedCategory === "all"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  // If preview is true, show only first 8 images
  const imagesToShow = preview ? filteredImages.slice(0, 9) : filteredImages;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8 text-[#39FF14] drop-shadow-lg">
        Our Gallery
      </h2>

      {/* Show filter buttons only on full gallery */}
      {!preview && (
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
      )}

      {/* Image Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {imagesToShow.map((img, index) => (
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

      {/* Button to View Full Gallery */}
      {preview && (
        <div className="text-center mt-10">
          <a
            href="/gallery" // 👉 You can route to full gallery page
            className="inline-block px-6 py-3 bg-[#39FF14] text-black font-bold rounded-full shadow-md hover:bg-[#2ecc71] transition"
          >
            View Full Gallery
          </a>
        </div>
      )}
    </section>
  );
};

export default Gallery;
