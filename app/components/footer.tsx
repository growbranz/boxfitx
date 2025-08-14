import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#39FF14]">Box FitX</h2>
          <p className="mt-3 text-sm text-gray-400">
            We don’t just build bodies — we build lifestyles. Join our fitness
            family and transform your life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#39FF14] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#39FF14] transition">Home</li>
            <li className="hover:text-[#39FF14] transition">About</li>
            <li className="hover:text-[#39FF14] transition">Gallery</li>
            <li className="hover:text-[#39FF14] transition">Contact</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold text-[#39FF14] mb-3">
            Contact Us
          </h3>
          <p className="text-sm">123 Fitness Street, Muscle City</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Email: info@morethanmuscle.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-lg">
            <FaFacebookF className="hover:text-[#39FF14] cursor-pointer transition" />
            <FaInstagram className="hover:text-[#39FF14] cursor-pointer transition" />
            <FaTwitter className="hover:text-[#39FF14] cursor-pointer transition" />
            <FaYoutube className="hover:text-[#39FF14] cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Box FitX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
