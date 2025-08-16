"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRouter } from "next/navigation";
import LeadPopup from "./LeadPopup"; // ✅ import popup

const Hero = () => {
  const headingRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  // Animate on mount (for first slide only)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.4"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6 },
        "-=0.3"
      );
  }, []);

  // Slide data
  const slides = [
    {
      img: "/images/cgym1.jpg",
      title: "More Than Muscle",
      subtitle: "We Build Lifestyle.",
      button: "Join Now",
      action: "popup", // ✅ open popup
    },
    {
      img: "/images/cgym5.jpg",
      title: "Fitness Club",
      subtitle: "State-of-the-art equipment and training programs.",
      button: "Explore Fitness",
      action: "programs", // ✅ redirect
    },
    {
      img: "/images/cgym3.jpg",
      title: "Boxing Fitness Club",
      subtitle: "Unleash your power with professional boxing sessions.",
      button: "Start Boxing",
      action: "programs", // ✅ redirect
    },
    {
      img: "/images/cgym4.jpg",
      title: "Nutrition Club",
      subtitle: "Personalized nutrition plans for your fitness journey.",
      button: "Get Nutrition",
      action: "programs", // ✅ redirect
    },
  ];

  return (
    <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={1000}
        style={{ height: "100%", width: "100%" }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div style={{ position: "relative", height: "100vh", width: "100%" }}>
              <img
                src={slide.img}
                alt={slide.title}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.3) 100%)",
                  zIndex: 1,
                }}
              ></div>

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  zIndex: 2,
                  maxWidth: "90%",
                }}
              >
                <h1
                  ref={i === 0 ? headingRef : null}
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    fontFamily: "'Orbitron', sans-serif",
                    color: "#39FF14",
                    textShadow: "0 0 10px #39FF14, 0 0 20px #39FF14",
                  }}
                >
                  {slide.title}
                </h1>
                <p
                  ref={i === 0 ? taglineRef : null}
                  style={{
                    fontSize: "1.25rem",
                    marginTop: "1rem",
                    color: "#ededed",
                  }}
                >
                  {slide.subtitle}
                </p>
                <button
                  ref={i === 0 ? buttonRef : null}
                  style={{
                    marginTop: "2rem",
                    backgroundColor: "#39FF14",
                    color: "black",
                    fontWeight: "bold",
                    padding: "0.75rem 2rem",
                    borderRadius: "50px",
                    boxShadow: "0 0 8px #39FF14, 0 0 16px #39FF14",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 0 15px #39FF14, 0 0 30px #39FF14";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 8px #39FF14, 0 0 16px #39FF14";
                  }}
                  onClick={() =>
                    slide.action === "popup"
                      ? setShowPopup(true)
                      : router.push("/programs")
                  }
                >
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lead Popup for first slide */}
      <LeadPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        club="Box FitX"
      />
    </section>
  );
};

export default Hero;
