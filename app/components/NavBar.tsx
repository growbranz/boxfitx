"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const baseLinkStyle = {
    transition: "color 0.3s, text-shadow 0.3s",
  };

  const handleMouseEnter = (e: any) => {
    e.target.style.color = "#39FF14";
    e.target.style.textShadow = "0 0 8px #39FF14, 0 0 16px #39FF14";
  };

  const handleMouseLeave = (e: any) => {
    e.target.style.color = "white";
    e.target.style.textShadow = "none";
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Active link style
  const activeStyle = {
    color: "#39FF14",
    textShadow: "0 0 8px #39FF14, 0 0 16px #39FF14",
  };

  return (
    <header
      style={{
        background: "linear-gradient(90deg, black 0%, #0a0a0a 100%)",
        color: "white",
      }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            style={{
              color: "#39FF14",
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: "1px",
              textShadow: "0 0 5px #39FF14, 0 0 15px #39FF14",
            }}
            className="flex-shrink-0 font-bold text-2xl"
          >
            Box FitX
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  style={
                    pathname === item.href
                      ? { ...baseLinkStyle, ...activeStyle }
                      : baseLinkStyle
                  }
                  className="cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={(e) =>
                    pathname === item.href
                      ? null
                      : handleMouseLeave(e)
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Join Now Button */}
          <Link
            href="/join"
            style={{
              backgroundColor: "#39FF14",
              color: "black",
              boxShadow: "0 0 8px #39FF14, 0 0 16px #39FF14",
            }}
            className="hidden md:block font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-all cursor-pointer"
          >
            Join Now
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
              {isOpen ? (
                <X size={28} style={{ color: "white" }} />
              ) : (
                <Menu size={28} style={{ color: "white" }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          maxHeight: isOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease-in-out",
        }}
        className="md:hidden px-4"
      >
        <ul className="flex flex-col space-y-4 py-4 text-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                style={
                  pathname === item.href
                    ? { ...baseLinkStyle, ...activeStyle }
                    : baseLinkStyle
                }
                className="cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={(e) =>
                  pathname === item.href
                    ? null
                    : handleMouseLeave(e)
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <Link
            href="/join"
            style={{
              backgroundColor: "#39FF14",
              color: "black",
              boxShadow: "0 0 8px #39FF14, 0 0 16px #39FF14",
            }}
            className="font-semibold px-4 py-2 w-full rounded-full hover:opacity-90 text-center"
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
