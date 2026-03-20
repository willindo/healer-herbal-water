import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatedScope } from "./AnimatedScope";

export default function Navbar({ onNavClick, refs }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. Monitor scroll to change navbar styling (glassmorphism effect)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Define navigation items mapped to your refs
  const navLinks = [
    { ref: refs.homeRef, label: "Home" },
    { ref: refs.alchemyRef, label: "The Alchemy" },
    { ref: refs.rootsRef, label: "Our Roots" },
    { ref: refs.journalRef, label: "The Journal" },
    { ref: refs.profileRef, label: "Profile" },
  ];

  const handleLinkClick = (sectionRef) => {
    setIsOpen(false);
    onNavClick(sectionRef);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/80 border-b border-healer-green/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <AnimatedScope animation="fadeUp" delay={0.1}>
          <button
            onClick={() => handleLinkClick(refs.homeRef)}
            className="flex items-center gap-2 outline-none"
          >
            <img
              src="/ALMAZ100_1.png"
              alt="ALMAZ100 HEALER"
              className="h-10 w-auto object-contain hover:scale-105 transition-transform"
            />
            <span className="font-serif font-bold text-healer-green tracking-tighter hidden sm:block">
              HEALER
            </span>
          </button>
        </AnimatedScope>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <AnimatedScope
            className="flex gap-8"
            animation="fadeUp"
            stagger={0.1}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.ref)}
                className="text-xs uppercase tracking-widest font-medium text-healer-green/70 hover:text-healer-green transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-healer-green transition-all group-hover:w-full" />
              </button>
            ))}
          </AnimatedScope>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-healer-green hover:bg-healer-green/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`fixed inset-0 top-0 h-screen w-screen bg-white z-[-1] md:hidden transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handleLinkClick(link.ref)}
              className="text-2xl font-serif text-healer-green hover:italic transition-all"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
