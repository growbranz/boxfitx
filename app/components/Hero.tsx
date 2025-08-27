"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LeadPopup from "./LeadPopup";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

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

  const slides = [
    {
      img: "/images/cgym1.JPG",
      title: "More Than Muscle",
      subtitle: "We Build Lifestyle.",
      button: "Join Now",
      action: "popup",
    },
    {
      img: "/images/cgym5.JPG",
      title: "Fitness Club",
      subtitle: "State-of-the-art equipment and training programs.",
      button: "Explore Fitness",
      action: "programs",
    },
    {
      img: "/images/cgym3.JPG",
      title: "Boxing Fitness Club",
      subtitle: "Unleash your power with professional boxing sessions.",
      button: "Start Boxing",
      action: "programs",
    },
    {
      img: "/images/cgym4.JPG",
      title: "Nutrition Club",
      subtitle: "Personalized nutrition plans for your fitness journey.",
      button: "Get Nutrition",
      action: "programs",
    },
  ];

  return (
    <section
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={1000}
        style={{ height: "100%", width: "100%" }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              style={{ position: "relative", height: "100vh", width: "100%" }}
            >
              <Image
                src={slide.img}
                alt={`Hero background for ${slide.title} - ${slide.subtitle}`}
                fill
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 20%, rgba(0,0,0,0.3) 100%)",
                  zIndex: 1,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  zIndex: 2,
                  maxWidth: "85%",
                }}
              >
                <h1
                  ref={i === 0 ? headingRef : null}
                  className="font-['Ethnocentric']"
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    background: "linear-gradient(90deg, #39FF14, #00D4FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 20px rgba(0,255,128,0.3)",
                  }}
                >
                  {slide.title}
                </h1>

                <p
                  ref={i === 0 ? taglineRef : null}
                  style={{
                    fontSize: "1.3rem",
                    marginTop: "1rem",
                    color: "#f1f1f1",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {slide.subtitle}
                </p>
                <button
                  ref={i === 0 ? buttonRef : null}
                  style={{
                    marginTop: "2rem",
                    background: "linear-gradient(135deg, #39FF14, #00D4FF)",
                    color: "black",
                    fontWeight: "600",
                    padding: "0.9rem 2.5rem",
                    borderRadius: "50px",
                    boxShadow: "0 0 15px rgba(0,255,128,0.4)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.07)";
                    e.currentTarget.style.boxShadow =
                      "0 0 25px rgba(0,255,128,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 15px rgba(0,255,128,0.4)";
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

      <LeadPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        club="Box FitX"
      />
    </section>
  );
};

export default Hero;
