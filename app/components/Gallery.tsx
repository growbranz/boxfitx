"use client";

import React, { useState } from "react";
import Image from "next/image";

interface GalleryProps {
  preview?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ preview = false }) => {
  const allImages = [
    { src: "/images/cgym1.JPG", category: "fitness" },
    { src: "/images/cgym9.JPG", category: "fitness" },
    { src: "/images/cgym1.JPG", category: "boxing" },
    { src: "/images/cgym13.JPG", category: "boxing" },
    { src: "/images/cgym12.JPG", category: "nutrition" },
    { src: "/images/cgym4.JPG", category: "nutrition" },
    { src: "/images/cgym5.JPG", category: "fitness" },
    { src: "/images/cgym6.JPG", category: "boxing" },
    { src: "/images/cgym7.JPG", category: "nutrition" },
    { src: "/images/cgym8.JPG", category: "fitness" },
    { src: "/images/gallery1.jpg", category: "fitness" },
    { src: "/images/gallery2.jpg", category: "fitness" },
    { src: "/images/gallery3.jpg", category: "fitness" },
    { src: "/images/gallery16.jpg", category: "fitness" },
    { src: "/images/gallery17.jpg", category: "fitness" },
    { src: "/images/gallery18.jpg", category: "fitness" },
    { src: "/images/gallery4.jpg", category: "fitness" },
    { src: "/images/gallery18.jpg", category: "fitness" },
    { src: "/images/gallery19.jpg", category: "fitness" },
    { src: "/images/gallery20.jpg", category: "fitness" },
    { src: "/images/gallery7.jpg", category: "fitness" },
    { src: "/images/gallery8.jpg", category: "fitness" },
    { src: "/images/gallery9.jpg", category: "fitness" },
    { src: "/images/gallery10.jpg", category: "fitness" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages =
    selectedCategory === "all"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  const imagesToShow = preview ? filteredImages.slice(0, 9) : filteredImages;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#39FF14] drop-shadow-lg">
        Our Gallery
      </h2>

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

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {imagesToShow.map((img, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300 relative w-full"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={img.src}
              alt={`Gallery Image ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        ))}
      </div>

      {preview && (
        <div className="text-center mt-10">
          <a
            href="/gallery"
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
