import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Factory, Building2, MapPin } from "lucide-react";
import { AnimatedScope } from "../../components/AnimatedScope";
import Circle3D from "../../components/Circle3d";
import TripleFrameCard from "../../components/TripleFrameCard";

const Profile = () => {
  const [isMobile, setIsMobile] = useState(false);

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
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      {/* Global Presence Banner */}
      <div className="bg-healer-green text-white py-3 px-6 mb-16">
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center  font-share tracking-[0.3em]  opacity-80"
          style={{ fontSize: "var(--step-11)" }}
        >
          <span className="flex items-center gap-2">
            <MapPin size={12} /> DUBAI: Almaz100 Global LLC
          </span>
          <div className="h-px w-8 bg-white/20 hidden md:block"></div>
          <span className="flex items-center gap-2">
            <MapPin size={12} /> INDIA: Almaz100 Global PVT. LTD
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-6 ">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-3xl mb-20"
          >
            <h2 className="text-healer-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">
              Corporate Profile
            </h2>
            <h1 className="text-5xl font-serif text-healer-green mb-6 italic">
              Precision in Purity
            </h1>
            <p className="text-healer-green/70 text-lg leading-relaxed">
              Healer isn't just a beverage; it's a commitment to botanical
              integrity. We combine the rigorous standards of modern
              manufacturing with the delicate arts of traditional herbalism.
            </p>
          </motion.div>
        </div>

        {/* Specs Section: 3D for Desktop, Grid for Mobile */}
        <div className="mb-32">
          {isMobile ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specs.map((item, index) => (
                <TripleFrameCard
                  key={index}
                  className="p-8 bg-[#444] text-white ounded-2xl border border-white/10"
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
                    className="w-[300px] p-8 bg-[#444] text-white ounded-2xl border border-healer-green/30 shadow-2xl backdrop-blur-xl"
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

        {/* Registered Details Table - High Contrast Black/White */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#444] text-white p-3 md:p-10 ounded-[2rem] relative overflow-hidden"
        >
          <TripleFrameCard className="relative z-10 p-8 md:p-10 border-white/5">
            <h3 className="text-4xl font-serif mb-12 italic border-b border-white/10 pb-6 text-healer-gold">
              Operational Matrix
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-24">
              {/* Address Block */}
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

              {/* Other Info Blocks */}
              {[
                { label: "Directorate", val: "Strategic Wellness Division" },
                { label: "Contact Channel", val: "+91 85930 89373" },
                {
                  label: "Digital Enquiries",
                  val: "hello@healerherbaldrink.com",
                },
              ].map((info, idx) => (
                <div key={idx} className="group">
                  <p className="text-[#28a931] font-share text-[10px] uppercase tracking-[0.3em] mb-3 group-hover:translate-x-2 transition-transform">
                    {info.label}
                  </p>
                  <p className="text-xl font-share opacity-90">{info.val}</p>
                </div>
              ))}
            </div>
          </TripleFrameCard>

          {/* Decorative "H" in background */}
          <div className="absolute -bottom-20 -right-10 text-white/[0.03] font-serif text-[30rem] select-none italic pointer-events-none">
            H
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
