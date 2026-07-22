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
  Quote,
} from "lucide-react";
import TripleFrameCard from "../../components/TripleFrameCard";
import Circle3D from "../../components/Circle3d";

const Profile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Executive Leadership & Scientific Partner Data
  const executiveLeadership = [
    {
      name: "Haseena Abdul Majeed",
      role: "Managing Director",
      description:
        "Spearheads corporate governance, legal frameworks, capital structuring, investor relations, and high-level government compliance across domestic and international jurisdictions.",
      image: "/assets/administrate/haseena.jpg",
    },
    {
      name: "Shaju Samad",
      role: "Director - Production & Sourcing",
      description:
        "Directs all manufacturing operations and quality control. He leads the company's sustainable agricultural initiatives, focusing on securing pesticide-free herbs through direct crop-sourcing links with regional farming networks.",
      image: "/assets/administrate/shajusamad.jpg",
    },
    {
      name: "Noorul Eman",
      role: "Chief Executive Officer - CEO",
      description:
        "Orchestrates global brand strategy, international market penetration, and business development. Additionally, oversees the end-to-end supply chain management and commercial logistics operations globally.",
      image: "/assets/administrate/nooruleman.jpg",
    },
    {
      name: "Dr. Razin. N, MBBS, MD",
      role: "Director - Medical Research & Clinical Validation",
      description:
        "Spearheads clinical validation, therapeutic standardization, and health-claim compliance for our beverage portfolio. Bridges traditional herbal chemistry with modern medical science, working in tandem with global laboratories to ensure absolute biological efficacy, safety, and evidence-based nutraceutical positioning.",
      image: "/assets/administrate/Razin.jpg",
    },
    {
      name: "Scientific R&D Partner",
      role: "Zeed Drops Research Laboratories International Co. UAE",
      description:
        "Our official global research and development partner. They continuously validate our product formulations, raw material safety parameters, and shelf-life compliance to ensure full adherence to international FSSAI and ESMA (UAE) food safety regulations.",
      image: "/assets/administrate/R&D.png",
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
  
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      {/* Global Presence Banner */}
      <div className="bg-healer-green text-white py-3 px-6 mb-16">
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center font-share tracking-[0.3em] opacity-80"
          style={{ fontSize: "var(--step--10)" }}
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

          // #395664e6  #2d4647  #008080
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Company Overview Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#395664e6] text-zinc-100 rounded-3xl p-8 md:p-12 shadow-2xl border border-zinc-800 relative overflow-hidden"
          >
            {/* Subtle background glow element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#03a169]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h2
                className="text-[#2ad494] uppercase tracking-[0.3em] font-bold mb-3"
                style={{ fontSize: "var(--step--10)" }}
              >
                Company Overview
              </h2>
              <h3
                className="font-serif italic text-white mb-6 font-medium leading-snug"
                style={{ fontSize: "var(--step-13)" }}
              >
                Redefining Refreshment Through Herbal Wisdom
              </h3>

              <div
                className="space-y-4 text-zinc-300 leading-relaxed max-w-4xl mb-10"
                style={{ fontSize: "var(--step-0)" }}
              >
                <p>
                  <strong className="text-white font-semibold">
                    Almaz100 Global Private Limited
                  </strong>{" "}
                  is a Kerala-based wellness beverage company founded on a simple
                  belief: people should not have to choose between taste,
                  refreshment, and health[cite: 1].
                </p>
                <p>
                  Our mission is to create enjoyable wellness drinks that deliver
                  authentic flavor and refreshment without the excessive added
                  sugars and preservative-heavy formulations commonly found in
                  conventional soft drinks[cite: 1]. By combining traditional herbal
                  wisdom with modern beverage innovation, Almaz100 is building a
                  new generation of clean-label wellness beverages for consumers
                  in India and international markets[cite: 1].
                </p>
                <p>
                  At the heart of our portfolio is{" "}
                  <span className="text-[#2ad494] font-medium">
                    Healer Herbal Water
                  </span>
                  , a modern botanical beverage inspired by traditional herbal
                  drinks once prepared in households using carefully selected
                  herbs[cite: 1]. Today, that heritage is being reimagined into a
                  scalable, premium wellness product designed for contemporary
                  lifestyles[cite: 1].
                </p>
              </div>

              {/* Product Philosophy Cards */}
              <div className="mb-12 bg-[#5f9ea0] p-6 md:p-8 rounded-2xl border border-zinc-700/60 backdrop-blur-sm">
                <h4
                  className="font-serif text-[#00ff9f] italic mb-6 font-semibold"
                  style={{ fontSize: "var(--step-11)" }}
                >
                  Our Product Philosophy
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      title: "Taste",
                      desc: "Refreshing flavor inspired by authentic herbal traditions[cite: 1].",
                    },
                    {
                      title: "Refreshment",
                      desc: "A satisfying and hydrating drinking experience for everyday consumption[cite: 1].",
                    },
                    {
                      title: "Happiness",
                      desc: "Enjoyment without compromise, allowing consumers to indulge with confidence[cite: 1].",
                    },
                    {
                      title: "Cleaner Formulation",
                      desc: "No added sugar overloads and no artificial preservatives[cite: 1].",
                    },
                  ].map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#2d4647] rounded-xl border border-zinc-700/50 hover:border-[#2ad494]/40 transition-colors"
                    >
                      <span
                        className="font-bold text-white block mb-1.5"
                        style={{ fontSize: "var(--step-0)" }}
                      >
                        {pillar.title}
                      </span>
                      <span
                        className="text-zinc-400 block leading-normal"
                        style={{ fontSize: "var(--step--10)" }}
                      >
                        {pillar.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  className="mt-6 italic text-[#14ff5b] font-serif text-center"
                  style={{ fontSize: "var(--step-0)" }}
                >
                  Almaz100 Global - Where herbal heritage meets modern refreshment.[cite: 1]
                </p>
              </div>

              {/* Our Story & Vision */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                <div className="lg:col-span-2 space-y-4 text-zinc-300">
                  <h4
                    className="font-serif text-white italic font-semibold mb-2"
                    style={{ fontSize: "var(--step-12)" }}
                  >
                    Our Story
                  </h4>
                  <p style={{ fontSize: "var(--step-0)" }}>
                    The inspiration behind Almaz100 Global emerged from the
                    personal journey of founder{" "}
                    <strong className="text-white">Noorul Eman</strong>[cite: 1].
                  </p>
                  <p style={{ fontSize: "var(--step-0)" }}>
                    During a challenging period marked by financial setbacks and
                    extensive travel, he observed a common human behavior: people of
                    all ages consumed soft drinks not only to quench thirst, but
                    also to experience enjoyment, refreshment, and happiness[cite: 1].
                  </p>
                  
                  <blockquote className="relative my-4 p-4 rounded-xl bg-zinc-800/50 border-l-4 border-[#2ad494] text-zinc-100 font-serif italic flex gap-3">
                    <Quote className="text-[#2ad494] shrink-0" size={20} />
                    <span style={{ fontSize: "var(--step-11)" }}>
                      "Can a beverage deliver taste, refreshment, and happiness
                      without the health concerns associated with conventional
                      soft drinks?"[cite: 1]
                    </span>
                  </blockquote>

                  <p style={{ fontSize: "var(--step-0)" }}>
                    Drawing from childhood memories of traditional herbal drinks
                    prepared at home, he envisioned a product that could preserve
                    the goodness of herbal traditions while meeting the expectations
                    of modern consumers[cite: 1].
                  </p>
                  <p style={{ fontSize: "var(--step-0)" }}>
                    Despite early funding and operational challenges, the vision
                    continued to grow[cite: 1]. The company gained momentum under the
                    leadership of <strong className="text-white">Haseena Abdul Majeed</strong>,
                    Managing Director, whose confidence in the brand's social
                    relevance, commercial potential, and export opportunities helped
                    establish and expand Almaz100 Global[cite: 1].
                  </p>
                  <p style={{ fontSize: "var(--step-0)" }}>
                    The leadership team was further strengthened by{" "}
                    <strong className="text-white">Shaju</strong>, Director, whose
                    agricultural expertise supports the company's commitment to
                    sourcing high-quality, pesticide-free herbs[cite: 1]. Together, the
                    team combines entrepreneurial vision, business leadership, and
                    agricultural knowledge to build a trusted wellness beverage
                    brand[cite: 1].
                  </p>
                </div>

                <div className="p-8 bg-[#195c44] text-white rounded-2xl flex flex-col justify-center border border-emerald-400/20 shadow-lg">
                  <h4
                    className="text-emerald-200 uppercase tracking-[0.2em] font-bold mb-3"
                    style={{ fontSize: "var(--step--10)" }}
                  >
                    Vision
                  </h4>
                  <p
                    className="font-serif italic leading-relaxed"
                    style={{ fontSize: "var(--step-11)" }}
                  >
                    "To build a globally trusted wellness beverage brand from Kerala
                    by transforming traditional herbal wisdom into modern,
                    scalable, and accessible drinks."[cite: 1]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Corporate Profile Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2
              className="text-healer-gold uppercase tracking-[0.3em] font-bold mb-4"
              style={{ fontSize: "var(--step--10)" }}
            >
              Corporate Profile
            </h2>
            <h1
              className="font-serif text-healer-green mb-6 italic"
              style={{ fontSize: "var(--step-14)" }}
            >
              Precision in Purity
            </h1>
            <p
              className="text-healer-green/70 leading-relaxed"
              style={{ fontSize: "var(--step-11)" }}
            >
              Healer isn't just a beverage; it's a commitment to botanical
              integrity[cite: 1]. We combine the rigorous standards of modern
              manufacturing with the delicate arts of traditional herbalism[cite: 1].
            </p>
          </motion.div>
        </div>

        {/* Executive Leadership & Core Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h2
              className="text-healer-gold uppercase tracking-[0.3em] font-bold mb-2"
              style={{ fontSize: "var(--step--10)" }}
            >
              Our Leadership
            </h2>
            <h3
              className="font-serif text-healer-green italic"
              style={{ fontSize: "var(--step-13)" }}
            >
              Core Leadership Team
            </h3>
            <div className="w-20 h-px bg-healer-gold mx-auto mt-4"></div>
          </div>

          {/* Centered responsive flex layout for the 5 profile items */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {executiveLeadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] flex"
              >
                <TripleFrameCard className="bg-gradient-to-b from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between w-full">
                  <div>
                    {/* Image container with ratio preserved */}
                    <div className="relative w-full pt-[100%] bg-gradient-to-br from-healer-green/10 to-healer-gold/10 overflow-hidden">
                      {leader.image ? (
                        <>
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
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

                      <div className="absolute top-0 right-0 w-24 h-24 bg-healer-gold/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 text-center">
                      <h4
                        className="font-serif text-healer-green mb-2 italic"
                        style={{ fontSize: "var(--step-12)" }}
                      >
                        {leader.name}
                      </h4>
                      <p
                        className="text-healer-gold font-share uppercase tracking-wider font-semibold mb-4"
                        style={{ fontSize: "var(--step--10)" }}
                      >
                        {leader.role}
                      </p>
                      <p
                        className="text-healer-green/70 text-left leading-relaxed"
                        style={{ fontSize: "var(--step-0)" }}
                      >
                        {leader.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="w-12 h-px bg-healer-gold/30 mx-auto group-hover:w-20 transition-all duration-300"></div>
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
                  className="p-8 bg-[#234b66] text-white rounde-2xl border border-white/10"
                >
                  <div className="text-[#28a931] mb-6">{item.icon}</div>
                  <h3
                    className="font-serif mb-3 italic"
                    style={{ fontSize: "var(--step-13)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-white/60 font-share leading-relaxed"
                    style={{ fontSize: "var(--step-0)" }}
                  >
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
                    className="w-[300px] p-8 bg-[#234b66] text-white rounded-2xl border border-healer-green/30 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="text-[#45924a] mb-4">{item.icon}</div>
                    <h3
                      className="font-serif mb-2 italic"
                      style={{ fontSize: "var(--step-12)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-white/50 font-share leading-relaxed"
                      style={{ fontSize: "var(--step--10)" }}
                    >
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
          viewport={{ once: true }}
          className="bg-[#234b66] text-white p-6 md:p-10 rounde-[2rem] relative overflow-hidden"
        >
          <TripleFrameCard className="relative z-10 p-6 md:p-10 border-white/5">
            <h3
              className="font-serif mb-12 italic border-b border-white/10 pb-6 text-healer-gold"
              style={{ fontSize: "var(--step-13)" }}
            >
              Operational Matrix
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-24">
              <div className="group">
                <p
                  className="text-[#28a931] font-share uppercase tracking-[0.3em] mb-3 group-hover:translate-x-2 transition-transform"
                  style={{ fontSize: "var(--step--10)" }}
                >
                  Registered Office
                </p>
                <div
                  className="font-share opacity-90 leading-relaxed"
                  style={{ fontSize: "var(--step-0)" }}
                >
                  <span className="font-bold block mb-1 text-white">
                    Almaz100 Global Pvt. Ltd.[cite: 1]
                  </span>
                  CP 1/316 B, P.O. Palayamkunnu<br />
                  Varkala, Thiruvananthapuram<br />
                  Kerala — 695146
                </div>
              </div>

              <div className="space-y-8">
                <div className="group">
                  <p
                    className="text-[#28a931] font-share uppercase tracking-[0.3em] mb-3 group-hover:translate-x-2 transition-transform"
                    style={{ fontSize: "var(--step--10)" }}
                  >
                    Contact Channels
                  </p>
                  <div className="flex flex-col gap-2">
                    <p
                      className="font-share opacity-90 flex items-center gap-3 flex-wrap"
                      style={{ fontSize: "var(--step-0)" }}
                    >
                      <Phone size={16} /> +91 85930 89373[cite: 1]
                    </p>
                    <p
                      className="font-share opacity-90 flex items-center gap-3 flex-wrap"
                      style={{ fontSize: "var(--step-0)" }}
                    >
                      <Phone size={16} /> +91 96332 32232[cite: 1]
                    </p>
                  </div>
                </div>

                <div className="group">
                  <p
                    className="text-[#28a931] font-share uppercase tracking-[0.3em] mb-3 group-hover:translate-x-2 transition-transform"
                    style={{ fontSize: "var(--step--10)" }}
                  >
                    Digital Enquiries
                  </p>
                  <p
                    className="font-share opacity-90 flex items-center gap-3 break-all"
                    style={{ fontSize: "var(--step-0)" }}
                  >
                    <Mail size={16} /> almaz100.healer@gmail.com[cite: 1]
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