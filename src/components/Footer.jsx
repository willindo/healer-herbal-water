import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-healer-green text-healer-cream pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-healer-cream/10 pb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter italic">HEALER</h2>
          <p className="text-healer-cream/60 text-sm leading-relaxed">
            Revolutionizing hydration through the wisdom of 9 sacred herbs.
            Crafted for the modern seeker.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-healer-gold">
            Explore
          </h4>
          <ul className="space-y-4 text-sm text-healer-cream/70">
            <li>
              <Link
                to="/alchemy"
                className="hover:text-healer-gold transition-colors"
              >
                The Alchemy
              </Link>
            </li>
            <li>
              <Link
                to="/roots"
                className="hover:text-healer-gold transition-colors"
              >
                Our Roots
              </Link>
            </li>
            <li>
              <Link
                to="/journal"
                className="hover:text-healer-gold transition-colors"
              >
                The Journal
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:text-healer-gold transition-colors font-bold"
              >
                Company Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-healer-gold">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-healer-cream/70">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-healer-gold" />
              <span>+91 98460 51101</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-healer-gold" />
              <span>hello@healerdrink.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-healer-gold mt-1" />
              <span>
                Kerala, India <br />
                Traditional Roots, Global Vision
              </span>
            </li>
          </ul>
        </div>

        {/* Newsletter/Social */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-healer-gold">
            Follow Us
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 border border-healer-cream/20 rounded-full hover:bg-healer-gold hover:border-healer-gold transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-3 border border-healer-cream/20 rounded-full hover:bg-healer-gold hover:border-healer-gold transition-all"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 flex flex-col md:row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-healer-cream/40">
        <p>© 2026 HEALER HERBAL INFUSIONS. ALL RIGHTS RESERVED.</p>
        <p className="mt-4 md:mt-0">Designed for Wellness</p>
      </div>
    </footer>
  );
};

export default Footer;
