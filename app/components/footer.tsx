import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">
        {/* Brand Info */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-[#39FF14]">Box FitX</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-xs">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. Transform your lifestyle with us.
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
            <FaFacebookF className="hover:text-[#39FF14] cursor-pointer transition" />
            <FaInstagram className="hover:text-[#39FF14] cursor-pointer transition" />
            <FaTwitter className="hover:text-[#39FF14] cursor-pointer transition" />
            <FaYoutube className="hover:text-[#39FF14] cursor-pointer transition" />
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
