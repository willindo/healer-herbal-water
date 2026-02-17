import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#412f2c]  pt-20 pb-10 px-8">
      {"HEALER".split("").map((char, i) => {
        const colors = [
          "#FF5733",
          "#33FF57",
          "#3357FF",
          "#FF33F5",
          "#33FFF5",
          "#F5FF33",
          "#FF8333",
          "#8333FF",
          "#33FF83",
          "#FF3380",
        ];
        const distinctColor = colors[i % colors.length];
        // each item is +20px wider and +10px taller
        const width = 20 + i * 10;
        const height = 20 + i * 10;
        const fontSize = 20 + i * 5;

        return (
          <div
            key={i}
            style={{
              width,
              height,
              fontSize,
              // background: distinctColor,
              color: distinctColor,
              textAlign: "center",
              // borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "2px",
            }}
          >
            {char}
          </div>
        );
      })}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-healer-cream/10 pb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          {/* <h2 className="text-3xl font-bold tracking-tighter italic">HEALER</h2> */}
          <p className="text-healer-cream/60 text-sm leading-relaxed">
            Revolutionizing hydration through the wisdom of 9 sacred herbs.
            Crafted for the modern seeker.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#3f9ac7]">
            Explore
          </h4>
          <ul className="space-y-4 text-sm text-[#3f9ac7]">
            <li>
              <Link
                to="/alchemy"
                className="hover:text-healer-gold transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                The Alchemy
              </Link>
            </li>
            <li>
              <Link
                to="/roots"
                className="hover:text-healer-gold transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Our Roots
              </Link>
            </li>
            <li>
              <Link
                to="/journal"
                className="hover:text-healer-gold transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                The Journal
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:text-healer-gold transition-colors font-bold"
                onClick={() => window.scrollTo(0, 0)}
              >
                Company Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#3f9ac7]">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-[#3f9ac7]">
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
              className="p-3 text-[#3f9ac7] border border-[#3f9ac7] rounded-full hover:bg-healer-gold hover:border-healer-gold transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-3 text-[#3f9ac7] border border-[#3f9ac7] rounded-full hover:bg-healer-gold hover:border-healer-gold transition-all"
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
