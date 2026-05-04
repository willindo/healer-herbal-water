import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Factory,
  Building2,
  MapPin,
  Phone,
  Mail,
  UserCircle,
} from "lucide-react";
import TripleFrameCard from "../../components/TripleFrameCard";
import Circle3D from "../../components/Circle3d";

const Profile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Executive Leadership Data
  const executiveLeadership = [
    {
      name: "Haseena Abdul Majeed",
      role: "Managing Director",
      image: "/assets/administrate/haseena.jpg",
    },
    {
      name: "Shaju Samad",
      role: "Director",
      image: "/assets/administrate/shajusamad.jpg",
    },
    {
      name: "Noorul Eman",
      role: "Chief Executive Officer",
      image: "/assets/administrate/nooruleman.jpg",
    },
  ];

  const specs = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Quality Assurance",
      desc: "FSSAI certified and lab-tested for purity. No heavy metals or synthetic additives.",
    },
    {
      icon: <Factory size={32} />,
      title: "Production",
      desc: "Small-batch cold-infusion process to preserve volatile herbal oils and nutrients.",
    },
    {
      icon: <Globe size={32} />,
      title: "Sourcing",
      desc: "Direct-from-farm sourcing across the Western Ghats, ensuring fair trade for local growers.",
    },
    {
      icon: <Building2 size={32} />,
      title: "The Entity",
      desc: "Healer Herbal Infusions is a registered venture dedicated to traditional wellness innovation.",
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Determine leadership grid layout based on screen size
  const getLeadershipGridClass = () => {
    if (isMobile) return "grid-cols-1";
    if (isTablet) return "grid-cols-2";
    return "grid-cols-3";
  };

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      {/* Global Presence Banner */}
      <div className="bg-healer-green text-white py-3 px-6 mb-16">
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center font-share tracking-[0.3em] opacity-80"
          style={{ fontSize: "clamp(0.6rem, 2vw, 0.75rem)" }}
        >
          <span className="flex items-center gap-2 text-center md:text-left">
            <MapPin size={12} /> DUBAI: Almaz100 Global LLC
          </span>
          <div className="h-px w-8 bg-white/20 hidden md:block"></div>
          <span className="flex items-center gap-2 text-center md:text-left">
            <MapPin size={12} /> INDIA: Almaz100 Global PVT. LTD
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <h2 className="text-healer-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">
              Corporate Profile
            </h2>
            <h1 className="text-5xl md:text-6xl font-serif text-healer-green mb-6 italic">
              Precision in Purity
            </h1>
            <p className="text-healer-green/70 text-lg leading-relaxed">
              Healer isn't just a beverage; it's a commitment to botanical
              integrity. We combine the rigorous standards of modern
              manufacturing with the delicate arts of traditional herbalism.
            </p>
          </motion.div>
        </div>

        {/* Executive Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-healer-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">
              Our Leadership
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-healer-green italic">
              Executive Leadership
            </h3>
            <div className="w-20 h-px bg-healer-gold mx-auto mt-6"></div>
          </div>

          <div className={`grid ${getLeadershipGridClass()} gap-8 md:gap-12`}>
            {executiveLeadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <TripleFrameCard className="bg-gradient-to-b from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Full Image Container - No padding, full width */}
                  <div className="relative w-full pt-[100%] bg-gradient-to-br from-healer-green/10 to-healer-gold/10 overflow-hidden">
                    {/* Image fills entire container */}
                    {leader.image ? (
                      <>
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="absolute top-0 left-0 w-ful h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = `
                              <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-healer-green/20 to-healer-gold/20">
                                <svg class="w-20 h-20 text-healer-green/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                            `;
                          }}
                        />
                        {/* Overlay gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-healer-green/20 to-healer-gold/20">
                        <UserCircle
                          size={80}
                          className="text-healer-green/40"
                        />
                      </div>
                    )}

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-healer-gold/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 text-center bg-white">
                    <h4 className="text-xl md:text-2xl font-serif text-healer-green mb-2 italic">
                      {leader.name}
                    </h4>
                    <p className="text-healer-gold font-share text-sm uppercase tracking-wider font-semibold">
                      {leader.role}
                    </p>
                    <div className="w-12 h-px bg-healer-gold/30 mx-auto mt-4 group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </TripleFrameCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specs Section */}
        <div className="mb-32">
          {isMobile ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specs.map((item, index) => (
                <TripleFrameCard
                  key={index}
                  className="p-8 bg-[#444] text-white rounded-2xl border border-white/10"
                >
                  <div className="text-[#28a931] mb-6">{item.icon}</div>
                  <h3 className="font-serif text-2xl mb-3 italic">
                    {item.title}
                  </h3>
                  <p className="text-white/60 font-share text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </TripleFrameCard>
              ))}
            </div>
          ) : (
            <div className="py-20 flex justify-center items-center">
              <Circle3D
                radius={210}
                perspective={800}
                autoRotate={true}
                speed={0.15}
                real3D={false}
              >
                {specs.map((item, index) => (
                  <TripleFrameCard
                    key={index}
                    className="w-[300px] p-8 bg-[#444] text-white rounded-2xl border border-healer-green/30 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="text-[#45924a] mb-4">{item.icon}</div>
                    <h3 className="font-serif text-2xl mb-2 italic">
                      {item.title}
                    </h3>
                    <p className="text-white/50 font-share text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </TripleFrameCard>
                ))}
              </Circle3D>
            </div>
          )}
        </div>

        {/* Operational Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#444] text-white p-4 md:p-10 rounded-[2rem] relative overflow-hidden"
        >
          <TripleFrameCard className="relative z-10 p-6 md:p-10 border-white/5">
            <h3 className="text-3xl md:text-4xl font-serif mb-12 italic border-b border-white/10 pb-6 text-healer-gold">
              Operational Matrix
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-24">
              <div className="group">
                <p className="text-[#28a931] font-share text-[10px] uppercase tracking-[0.3em] mb-3 group-hover:translate-x-2 transition-transform">
                  Registered Office
                </p>
                <div className="text-lg font-share opacity-90 leading-relaxed">
                  <span className="text-xl font-bold block mb-1">
                    Almaz100 Global Pvt. Ltd.
                  </span>
                  CP 1/316 B, P.O. Palayamkunnu
                  <br />
                  Varkala, Thiruvananthapuram
                  <br />
                  Kerala — 695146
                </div>
              </div>

              <div className="space-y-8">
                <div className="group">
                  <p className="text-[#28a931] font-share text-[10px] uppercase tracking-[0.3em] mb-3 group-hover:translate-x-2 transition-transform">
                    Contact Channels
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-share opacity-90 flex items-center gap-3 flex-wrap">
                      <Phone size={16} /> +91 85930 89373
                    </p>
                    <p className="text-xl font-share opacity-90 flex items-center gap-3 flex-wrap">
                      <Phone size={16} /> +91 96332 32232
                    </p>
                  </div>
                </div>

                <div className="group">
                  <p className="text-[#28a931] font-share text-[10px] uppercase tracking-[0.3em] mb-3 group-hover:translate-x-2 transition-transform">
                    Digital Enquiries
                  </p>
                  <p className="text-xl font-share opacity-90 flex items-center gap-3 break-all">
                    <Mail size={16} /> almaz100.healer@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </TripleFrameCard>

          <div className="absolute -bottom-20 -right-10 text-white/[0.03] font-serif text-[20rem] md:text-[30rem] select-none italic pointer-events-none">
            H
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
