"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // For SPA navigation
import { AnimatedScope } from "./AnimatedScope";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/alchemy", label: "The Alchemy" },
    { to: "/roots", label: "Our Roots" },
    { to: "/journal", label: "The Journal" },
  ];

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          {/* Brand/Logo */}
          <AnimatedScope animation="fadeRight" delay={0.1}>
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-[#34894c] hover:text-[#71da26] transition-colors"
              onClick={handleLinkClick}
            >
              HEALER
            </Link>
          </AnimatedScope>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <AnimatedScope
              className="flex items-center space-x-1"
              animation="fadeUp"
              stagger={0.05}
            >
              {/* {navLinks.slice(0, 6).map((link) => ( */}
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-2 rounded-md text-sm font-medium text-[teal] hover:text-[#915333] hover:bg-gray-200/50 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </AnimatedScope>

            {/* Separator and additional links */}
            <span className="mx-2 text-healer-green">|</span>

            <AnimatedScope
              className="flex items-center space-x-1"
              animation="fadeUp"
              stagger={0.05}
            >
              {navLinks.slice(6).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-2 rounded-md text-sm font-medium text-[teal] hover:text-[#006666] hover:bg-teal-50 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              {/* Contact Button */}
              <button className="ml-4 border border-[teal] px-4 py-2 text-xs uppercase tracking-widest font-medium text-[teal] hover:bg-[teal] hover:text-white transition-all duration-300">
                Contact
              </button>
            </AnimatedScope>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#915333] hover:bg-gray-200/50 focus:outline-none transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatedScope animation="fadeDown" duration={0.2}>
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#915333] hover:bg-gray-100 transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full border border-[teal] px-4 py-3 text-sm uppercase tracking-widest font-medium text-[teal] hover:bg-[teal] hover:text-white transition-all duration-300 rounded-md">
                Contact
              </button>
            </div>
          </div>
        </div>
      </AnimatedScope>
    </nav>
  );
}
