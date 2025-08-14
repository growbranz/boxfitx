"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Hero = () => {
  const headingRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(taglineRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.4")
      .fromTo(buttonRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 }, "-=0.3");
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        speed={1000}
        style={{ height: "100%", width: "100%" }}
      >
        {["/gym-bg1.jpg", "/gym-bg2.jpeg", "/gym-bg3.jpg", "/gym-bg4.jpg"].map((src, i) => (
          <SwiperSlide key={i}>
            <div style={{ position: "relative", height: "100vh", width: "100%" }}>
              <img
                src={src}
                alt="Gym background"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: "rgba(0,0,0,0.75)",
          zIndex: 1,
        }}
      ></div>

      {/* Hero Content */}
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
          ref={headingRef}
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            fontFamily: "'Orbitron', sans-serif",
            color: "#39FF14",
            textShadow: "0 0 10px #39FF14, 0 0 20px #39FF14",
          }}
        >
          More Than Muscle
        </h1>
        <p
          ref={taglineRef}
          style={{
            fontSize: "1.25rem",
            marginTop: "1rem",
            color: "#ededed",
          }}
        >
          We Build Lifestyle.
        </p>
        <button
          ref={buttonRef}
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
            e.currentTarget.style.boxShadow = "0 0 15px #39FF14, 0 0 30px #39FF14";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 8px #39FF14, 0 0 16px #39FF14";
          }}
        >
          Join Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
