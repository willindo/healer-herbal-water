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
      image: "/assets/administrate/dr_razin.jpg", // Placeholder or fallback image
    },
    {
      name: "Scientific R&D Partner",
      role: "Zeed Drops Research Laboratories International Co. UAE",
      description:
        "Our official global research and development partner. They continuously validate our product formulations, raw material safety parameters, and shelf-life compliance to ensure full adherence to international FSSAI and ESMA (UAE) food safety regulations.",
      image: "/assets/administrate/zeed_drops.jpg", // Placeholder or fallback image
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
        {/* Company Overview Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-healer-cream/30 to-white border border-healer-gold/20 rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <h2 className="text-healer-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">
              Company Overview
            </h2>
            <p className="text-healer-green/80 text-lg leading-relaxed mb-6">
              Almaz100 Global Private Limited is a Kerala-based wellness beverage
              company founded on a simple belief: people should not have to
              choose between taste, refreshment, and health.
            </p>
            <p className="text-healer-green/80 text-base leading-relaxed mb-6">
              Our mission is to create enjoyable wellness drinks that deliver
              authentic flavor and refreshment without the excessive added sugars
              and preservative-heavy formulations commonly found in conventional
              soft drinks. By combining traditional herbal wisdom with modern
              beverage innovation, Almaz100 is building a new generation of
              clean-label wellness beverages for consumers in India and
              international markets.
            </p>
            <p className="text-healer-green/80 text-base leading-relaxed mb-8">
              At the heart of our portfolio is <strong>Healer Herbal Water</strong>,
              a modern botanical beverage inspired by traditional herbal drinks
              once prepared in households using carefully selected herbs. Today,
              that heritage is being reimagined into a scalable, premium wellness
              product designed for contemporary lifestyles.
            </p>

            {/* Product Philosophy */}
            <div className="mb-10 bg-white/80 p-6 rounded-2xl border border-healer-gold/10">
              <h3 className="text-xl font-serif text-healer-green italic mb-4 font-bold">
                Our Product Philosophy
              </h3>
              <p className="text-sm text-healer-green/70 mb-4">
                Every Almaz100 beverage is built around four core pillars:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="p-3 bg-healer-cream/20 rounded-xl">
                  <span className="font-bold text-healer-green block mb-1">
                    Taste
                  </span>
                  <span className="text-healer-green/70">
                    Refreshing flavor inspired by authentic herbal traditions.
                  </span>
                </div>
                <div className="p-3 bg-healer-cream/20 rounded-xl">
                  <span className="font-bold text-healer-green block mb-1">
                    Refreshment
                  </span>
                  <span className="text-healer-green/70">
                    A satisfying and hydrating drinking experience for everyday
                    consumption.
                  </span>
                </div>
                <div className="p-3 bg-healer-cream/20 rounded-xl">
                  <span className="font-bold text-healer-green block mb-1">
                    Happiness
                  </span>
                  <span className="text-healer-green/70">
                    Enjoyment without compromise, allowing consumers to indulge
                    with confidence.
                  </span>
                </div>
                <div className="p-3 bg-healer-cream/20 rounded-xl">
                  <span className="font-bold text-healer-green block mb-1">
                    Cleaner Formulation
                  </span>
                  <span className="text-healer-green/70">
                    No added sugar overloads and no artificial preservatives.
                  </span>
                </div>
              </div>
              <p className="mt-4 italic text-healer-gold font-serif text-center text-sm">
                Almaz100 Global - Where herbal heritage meets modern refreshment.
              </p>
            </div>

            {/* Our Story & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4 text-healer-green/80 text-sm leading-relaxed">
                <h3 className="text-xl font-serif text-healer-green italic font-bold">
                  Our Story
                </h3>
                <p>
                  The inspiration behind Almaz100 Global emerged from the
                  personal journey of founder <strong>Noorul Eman</strong>.
                </p>
                <p>
                  During a challenging period marked by financial setbacks and
                  extensive travel, he observed a common human behavior: people
                  of all ages consumed soft drinks not only to quench thirst, but
                  also to experience enjoyment, refreshment, and happiness.
                </p>
                <blockquote className="border-l-2 border-healer-gold pl-4 italic text-healer-green font-serif py-1 my-2">
                  "Can a beverage deliver taste, refreshment, and happiness without
                  the health concerns associated with conventional soft drinks?"
                </blockquote>
                <p>
                  Drawing from childhood memories of traditional herbal drinks
                  prepared at home, he envisioned a product that could preserve
                  the goodness of herbal traditions while meeting the
                  expectations of modern consumers.
                </p>
                <p>
                  Despite early funding and operational challenges, the vision
                  continued to grow. The company gained momentum under the
                  leadership of <strong>Haseena Abdul Majeed</strong>, Managing
                  Director, whose confidence in the brand's social relevance,
                  commercial potential, and export opportunities helped establish
                  and expand Almaz100 Global.
                </p>
                <p>
                  The leadership team was further strengthened by{" "}
                  <strong>Shaju</strong>, Director, whose agricultural expertise
                  supports the company's commitment to sourcing high-quality,
                  pesticide-free herbs. Together, the team combines
                  entrepreneurial vision, business leadership, and agricultural
                  knowledge to build a trusted wellness beverage brand.
                </p>
              </div>

              <div className="flex flex-col justify-center p-6 bg-healer-green text-white rounded-2xl">
                <h3 className="text-healer-gold uppercase tracking-[0.2em] text-xs font-bold mb-3">
                  Vision
                </h3>
                <p className="font-serif italic text-lg leading-relaxed">
                  "To build a globally trusted wellness beverage brand from Kerala
                  by transforming traditional herbal wisdom into modern, scalable,
                  and accessible drinks."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Corporate Profile Header Section */}
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

        {/* Executive Leadership & Core Team Section */}
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
              Core Leadership Team
            </h3>
            <div className="w-20 h-px bg-healer-gold mx-auto mt-6"></div>
          </div>

          {/* Responsive Flex/Grid Container centered for 5 cards */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {executiveLeadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] flex"
              >
                <TripleFrameCard className="bg-gradient-to-b from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between w-full">
                  <div>
                    {/* Full Image Container - Full width */}
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
                      <h4 className="text-xl font-serif text-healer-green mb-2 italic">
                        {leader.name}
                      </h4>
                      <p className="text-healer-gold font-share text-xs uppercase tracking-wider font-semibold mb-4">
                        {leader.role}
                      </p>
                      <p className="text-healer-green/70 text-xs leading-relaxed text-left">
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
          className="bg-[#444] text-white p-6 md:p-10 rounde-[2rem] relative overflow-hidden"
        >
          <TripleFrameCard className="relative z-10 p-6 md:p-10 border-white/5">
            <h3 className="text-3xl md:text-4xl font-serif mb-12 italic border-b border-white/10 pb-6 text-healer-gold">
              Operational Matrix
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-24">
              <div className="group text-center ">
                <p className="text-[#28a931] font-share  text-[10px] uppercase tracking-[0.3em] mb-3 group-hover:translate-x-2 transition-transform">
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

              <div className="space-y-8  ">
                <div className="group text-center ">
                  <p className="text-[#28a931] font-share text-[10px] uppercase tracking-[0.3em] mb-3 group-hover:translate-x-2 transition-transform">
                    Contact Channels
                  </p>
                  <div className="flex flex-col gap-2 justify-center ">
                    <p className="text-xl font-share opacity-90 flex items-center gap-3 flex-wrap">
                      <Phone size={16} /> +91 85930 89373
                    </p>
                    <p className="text-xl font-share opacity-90 flex items-center gap-3 flex-wrap">
                      <Phone size={16} /> +91 96332 32232
                    </p>
                  </div>
                </div>

                <div className="group text-center">
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