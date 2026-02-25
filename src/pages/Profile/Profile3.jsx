import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Factory, Building2, MapPin } from "lucide-react";
import { AnimatedScope } from "../../components/AnimatedScope";
import Circle3D from "../../components/Circle3d";

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
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center  font-share tracking-[0.3em] uppercase opacity-80"
          style={{ fontSize: "var(--step-11)" }}
        >
          <span className="flex items-center gap-2">
            <MapPin size={12} /> Dubai: ALMAZ100 GLOBAL LLC
          </span>
          <div className="h-px w-8 bg-white/20 hidden md:block"></div>
          <span className="flex items-center gap-2">
            <MapPin size={12} /> India: AKMAZ100 GLOBAL Pvt. Ltd
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-healer-green/40 uppercase font-share tracking-[0.4em] text-xs font-bold mb-4">
              Corporate Dossier
            </h2>
            <h1 className="text-6xl md:text-7xl font-serif text-black leading-tight">
              Precision in <br />
              <span className="italic text-healer-green">Purity.</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-black/60 text-lg leading-relaxed border-l border-healer-green/20 pl-8 max-w-md"
          >
            Combining rigorous modern manufacturing with the delicate arts of
            traditional herbalism to create a new gold standard in hydration.
          </motion.p>
        </div>

        {/* Specs Section: 3D for Desktop, Grid for Mobile */}
        <div className="mb-32">
          {isMobile ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specs.map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-[#444] text-white rounded-2xl border border-white/10"
                >
                  <div className="text-healer-green mb-6">{item.icon}</div>
                  <h3 className="font-serif text-2xl mb-3 italic">
                    {item.title}
                  </h3>
                  <p className="text-white/60 font-share text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 flex justify-center items-center">
              <Circle3D
                radius={280}
                perspective={1200}
                autoRotate={true}
                speed={0.15}
              >
                {specs.map((item, index) => (
                  <div
                    key={index}
                    className="w-[300px] p-8 bg-[#444] text-white rounded-2xl border border-healer-green/30 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="text-healer-green mb-4">{item.icon}</div>
                    <h3 className="font-serif text-2xl mb-2 italic">
                      {item.title}
                    </h3>
                    <p className="text-white/50 font-share text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </Circle3D>
            </div>
          )}
        </div>

        {/* Registered Details Table - High Contrast Black/White */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#444] text-white p-10 md:p-20 rounded-[2rem] relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-4xl font-serif mb-12 italic border-b border-white/10 pb-6">
              Operational Matrix
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-24">
              {[
                {
                  label: "Registered Office",
                  val: "Healer Herbal Infusions, Kerala, India",
                },
                { label: "Directorate", val: "Strategic Wellness Division" },
                { label: "Contact Channel", val: "+91 98460 51101" },
                { label: "Digital Enquiries", val: "hello@healerdrink.com" },
              ].map((info, idx) => (
                <div key={idx} className="group">
                  <p className="text-healer-green font-share text-[10px] uppercase tracking-[0.3em] mb-3 group-hover:translate-x-2 transition-transform">
                    {info.label}
                  </p>
                  <p className="text-xl font-share opacity-90">{info.val}</p>
                </div>
              ))}
            </div>
          </div>

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
