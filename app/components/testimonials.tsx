"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "merwin adelric",
    // role: "Member Since 2023",
    text: "Absolutely love this gym! The facilities are top-notch, with clean and well-maintained equipment that caters to all fitness levels. The staff is incredibly friendly, knowledgeable, and always ready to help with form, workouts, or motivation. The atmosphere is energetic yet welcoming—perfect whether you’re a beginner or a seasoned gym-goer. The trainers genuinely push you to achieve your goals. It’s more than just a gym—it’s a community that keeps you coming back. Highly recommend!..Special Mention to Karthik Anna and Mythreyan Anna 🔥🔥🔥🔥",
    img: "/testimonials/client1.png",
  },
  {
    name: "sangeetha k s",
    // role: "Member Since 2022",
    text: "The gym is very spacious and has a clean, high-end feel to it. One of the best parts is the trainer — he’s extremely friendly, supportive, and always makes sure we’re using the correct form during workouts. If you make a mistake, he patiently helps you correct it. The gym is fully equipped with a wide range of new machines, so everything you need is already there. Whether you’re a beginner or someone more experienced, this place has everything to help you stay consistent and reach your goals. They also offer a separate timing exclusively for women, which makes it even more comfortable and convenient. Highly recommended!",
    img: "/testimonials/client2.png",
  },
  {
    name: "RFM Shaggy",
    // role: "Member Since 2024",
    text: "I've been coming to Boxfitx for three months and it's been a game-changer. It's more than just a gym; it has a genuinely welcoming and motivating atmosphere. The equipment is top-of-the-line and always clean, just like the rest of the facility. The staff are the best part—super friendly, knowledgeable, and always encouraging. If you're looking for a gym that feels like a community, this is your place. Highly recommend!",
    img: "/testimonials/client3.png",
  },
  {
    name: "Karthick R",
    // role: "Member Since 2023",
    text: "From the moment you walk in, you feel the positive energy. The music, the cleanliness, and the professional trainers make every workout enjoyable. I’ve seen amazing results here. Best gym in Krishnagiri. Love the vibe here..",
    img: "/testimonials/client4.png",
  },
  {
    name: "boxer Vinoth",
    // role: "Member Since 2021",
    text: "Box FitX has been awesome to me, This is the best gym in the Krishnagiri. Their trainers are exceptional, the overall vibe is great inside the gym, and I’ve had nothing but good experiences in the gym. I definitely recommend this gym to my friends and family.",
    img: "/testimonials/client5.png",
  },
];

const floatingAvatars = [
  { img: "/testimonials/client1.png", top: "15%", left: "10%" },
  { img: "/testimonials/client2.png", top: "25%", right: "12%" },
  { img: "/testimonials/client3.png", bottom: "20%", left: "8%" },
  { img: "/testimonials/client4.png", bottom: "15%", right: "15%" },
  { img: "/testimonials/client5.png", top: "50%", left: "5%" },
  { img: "/testimonials/client6.png", bottom: "50%", right: "5%" },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-20 px-6 relative overflow-hidden">
      {/* Floating avatars */}
      {floatingAvatars.map((avatar, index) => (
        <motion.img
          key={index}
          src={avatar.img}
          alt="client"
          className="w-14 h-14 rounded-full border-2 border-[#39FF14] shadow-lg absolute"
          style={{
            top: avatar.top,
            bottom: avatar.bottom,
            left: avatar.left,
            right: avatar.right,
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <p className="text-[#ff4d00] uppercase tracking-widest font-semibold text-sm">
          Our Clients Say
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-[0_0_15px_#39FF14]">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Our clients share their experiences after achieving their fitness goals with us.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-neutral-900 p-8 rounded-xl shadow-lg shadow-[0_0_20px_rgba(57,255,20,0.3)] relative">
                <FaQuoteLeft className="text-4xl text-[#39FF14] mb-4 mx-auto" />
                <p className="text-gray-300 italic mb-6">{item.text}</p>
                <div className="flex flex-col items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-full border-2 border-[#39FF14] mb-3"
                  />
                  <h4 className="font-bold text-lg text-[#39FF14]">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
