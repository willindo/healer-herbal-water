import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#412f2c]  pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-healer-cream/10 pb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <h1
            className="font-share z-50 text-[black] px-2 font-bold bg-[white] max-w-fit "
            style={{ fontSize: "var(--step-12)" }}
          >
            HEALER
          </h1>
          <p className="text-healer-cream/60 text-sm leading-relaxed">
            Revolutionizing hydration through the wisdom of 7 sacred herbs.
            Crafted for the modern seeker.
          </p>
        </div>

        {/* Quick Links */}

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#3fc79a]">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-[#3fc79a]">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-healer-gold" />
              <span>+91 85930 89373 </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-healer-gold" />
              <span>almaz100.healer@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-healer-gold mt-1" />
              <span className=" font-bold block mb-1">
                Almaz100 Global Pvt. Ltd.
              </span>
              CP 1/316 B, P.O. Palayamkunnu
              <br />
              Varkala, Thiruvananthapuram
              <br />
              Kerala — 695146
            </li>
          </ul>
        </div>

        {/* Newsletter/Social */}
        <div className="place-self-center">
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-healer-gold ">
            Follow Us
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 text-[#3fc79a] border border-[#3fc79a] rounded-full hover:bg-healer-gold hover:border-healer-gold transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-3 text-[#3fc79a] border border-[#3fc79a] rounded-full hover:bg-healer-gold hover:border-healer-gold transition-all"
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
