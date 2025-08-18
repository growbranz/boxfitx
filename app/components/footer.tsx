import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">
        {/* Brand Info with Logo */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/logo.png"
              alt="Box FitX Logo"
              width={160} // slightly bigger for better emphasis
              height={60}
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-xs">
            At <span className="text-[#39FF14] font-semibold">Box FitX</span>, we believe in more than just building muscles — 
            we build strong bodies, sharp minds, and healthier lifestyles. 
            Transform your fitness journey with us and discover the best version of yourself.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-[#39FF14] mb-4">We Have</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#39FF14] transition">
              <Link href="/programs">Fitness Club</Link>
            </li>
            <li className="hover:text-[#39FF14] transition">
              <Link href="/programs">Boxing Fitness Club</Link>
            </li>
            <li className="hover:text-[#39FF14] transition">
              <Link href="/programs">Nutrition Club</Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-[#39FF14] mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#39FF14] transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#39FF14] transition">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#39FF14] transition">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="hover:text-[#39FF14] transition">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-[#39FF14] mb-4">Social</h3>
          <div className="flex space-x-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#39FF14] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/box__fitx?igsh=MWJjaGZmd2R4ajBlbg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#39FF14] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#39FF14] transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#39FF14] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Box FitX. All rights reserved. | Made with ❤️ Grow Branz
      </div>
    </footer>
  );
};

export default Footer;
