import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Factory, Building2 } from "lucide-react";
import { AnimatedScope } from "../../components/AnimatedScope";

const Profile = () => {
  const specs = [
    {
      icon: <ShieldCheck />,
      title: "Quality Assurance",
      desc: "FSSAI certified and lab-tested for purity. No heavy metals or synthetic additives.",
    },
    {
      icon: <Factory />,
      title: "Production",
      desc: "Small-batch cold-infusion process to preserve volatile herbal oils and nutrients.",
    },
    {
      icon: <Globe />,
      title: "Sourcing",
      desc: "Direct-from-farm sourcing across the Western Ghats, ensuring fair trade for local growers.",
    },
    {
      icon: <Building2 />,
      title: "The Entity",
      desc: "Healer Herbal Infusions is a registered venture dedicated to traditional wellness innovation.",
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-healer-cream min-h-screen">
      <h2 className="text-healer-green text-center text-sm font-bold tracking-widest mb-4">
        Dubai - ALMAZ100 GLOBAL LLC /\ India - AKMAZ100 GLOBAL Pvt. Ltd --{" "}
      </h2>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
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
            Healer isn't just a beverage; it’s a commitment to botanical
            integrity. We combine the rigorous standards of modern manufacturing
            with the delicate arts of traditional herbalism.
          </p>
        </motion.div>

        {/* Company Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {specs.map((item, index) => (
            // <motion.div
            //   key={index}
            //   initial={{ opacity: 0, y: 20 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   transition={{ delay: index * 0.1 }}
            //   className="flex gap-6 p-8 bg-white/20 border border-healer-green/5 rounded-2xl"
            // >
            <AnimatedScope
              key={index}
              className="flex gap-6 p-8 bg-white/20 border border-healer-green/5 rounded-2xl"
              animation="slideLeft"
              once={false}
              stagger={0.7}
            >
              <div className="text-healer-gold shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-healer-green mb-2">
                  {item.title}
                </h3>
                <p className="text-healer-green/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedScope>
          ))}
          {/* // </motion.div> */}
        </div>

        {/* Registered Details Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-healer-green text-healer-cream p-10 md:p-16 rounded-[3rem] shadow-2xl overflow-hidden relative"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-serif mb-10 italic">
              Official Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-20 border-t border-healer-cream/10 pt-10">
              <div>
                <p className="text-healer-gold text-xs uppercase tracking-widest mb-2 font-bold">
                  Registered Office
                </p>
                <p className="text-lg opacity-80 leading-relaxed">
                  Healer Herbal Infusions
                  <br />
                  Kerala, India
                </p>
              </div>
              <div>
                <p className="text-healer-gold text-xs uppercase tracking-widest mb-2 font-bold">
                  Directorate
                </p>
                <p className="text-lg opacity-80 leading-relaxed">
                  Strategic Wellness Division
                </p>
              </div>
              <div>
                <p className="text-healer-gold text-xs uppercase tracking-widest mb-2 font-bold">
                  Customer Relations
                </p>
                <p className="text-lg opacity-80">+91 98460 51101</p>
              </div>
              <div>
                <p className="text-healer-gold text-xs uppercase tracking-widest mb-2 font-bold">
                  Business Enquiries
                </p>
                <p className="text-lg opacity-80">hello@healerdrink.com</p>
              </div>
            </div>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute top-[-10%] right-[-5%] text-healer-cream/5 font-serif text-[15rem] select-none italic pointer-events-none">
            H
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
