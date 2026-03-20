import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AnimatedScope } from "./AnimatedScope";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation();

  const navLinks = [
    { to: "/alchemy", label: "The Alchemy" },
    { to: "/roots", label: "Our Roots" },
    { to: "/journal", label: "The Journal" },
    { to: "/profile", label: "Profile" },
  ];

  // Auto-close mobile menu on route change or manual click
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-[100vw] z-50  backdrop-blur-md border-b border-healer-green/10">
      <div className="ma-w-7xl mx-auto px-6 py-3 flex items-center justify-between  ">
        {/* Brand / Logo */}
        <AnimatedScope animation="fadeUp" delay={0.1}>
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <img
              src="/ALMAZ100_1.png"
              alt="ALMAZ100 HEALER"
              className="h-10 w-auto object-contain hover:scale-105 transition-transform"
            />
            <span className="font-serif font-bold text-healer-green tracking-tighter hidden sm:block">
              HEALER
            </span>
          </Link>
        </AnimatedScope>

        {/* Desktop Links - Animates every time they appear */}
        <div className="hidden md:flex items-center gap-8">
          <AnimatedScope
            key={location.pathname} // Forces re-animation on navigation
            className="flex gap-8"
            animation="fadeUp"
            stagger={0.2}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm uppercase tracking-widest font-medium text-[#c113e8] hover:text-healer-green ransition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-healer-green transition-all group-hover:w-full" />
              </Link>
            ))}
          </AnimatedScope>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-healer-green hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)} // Fixed logic here
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-7 h-7 animate-in spin-in-90 duration-300" />
          ) : (
            <Menu className="w-7 h-7 animate-in fade-in zoom-in duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown - Animated Overlay */}
      <div
        className={`fixed inset-0 top-[65px] b-white z-40 md:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center  justify-center h-full gap-8 pb-20">
          {isOpen && (
            <AnimatedScope animation="fadeIn" stagger={0.2}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleLinkClick}
                  className="text-xl font-serif text-healer-green hover:italic transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </AnimatedScope>
          )}
        </div>
      </div>
    </nav>
  );
}
