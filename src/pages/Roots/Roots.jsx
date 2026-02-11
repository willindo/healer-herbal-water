import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, Feather, Award } from "lucide-react";
import AnimatedGradientBg from "../../components/AnimatedGradientBg";

const Roots = () => {
  return (
    <div className="pt-32 pb-20 bg-healer-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 1: The Brand Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-healer-gold uppercase tracking-[0.3em] text-sm font-bold mb-6">
              Our Story
            </h2>
            <h1 className="text-5xl md:text-6xl font-serif text-healer-green leading-tight mb-8">
              Born from Tradition, <br />
              <span className="italic">Refined by Science.</span>
            </h1>
            <p className="text-healer-green/70 text-lg leading-relaxed mb-6">
              Healer started with a simple observation: the ancient wisdom of
              herbal infusions was being lost to the convenience of sugary,
              artificial beverages.
            </p>
            <p className="text-healer-green/70 text-lg leading-relaxed">
              We spent years working with traditional herbalists to perfect a
              blend of 9 sacred ingredients. Our goal was simple: provide
              cellular hydration that honors the rhythms of nature.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] bg-healer-green/5 rounded-2xl overflow-hidden border border-healer-green/10"
          >
            {/* Visual placeholder - later use an image from your lifestyle folder */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515600051222-73c33833201a?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale-[50%] opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-healer-green/40 to-transparent" />
          </motion.div>
        </div>

        {/* Section 2: Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-healer-green text-healer-cream p-12 rounded-3xl shadow-lg"
          >
            <Target
              className="text-healer-gold mb-6 animate-pulse "
              size={40}
            />
            <h3 className="text-3xl font-serif mb-4 italic text-healer-cream">
              The Mission
            </h3>
            <p className="text-healer-cream/80 leading-relaxed tracking-wide text-lg font-ligh">
              To bridge the gap between ancient herbal wisdom and modern
              convenience. We craft hydration that doesn't just quench thirst—it
              restores the soul and purifies the body at a cellular level.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/50 backdrop-blur-md border border-healer-green/10 p-12 rounded-3xl shadow-lg"
          >
            <Compass
              className="text-healer-gold mb-6 animate-spin "
              size={40}
              style={{ animationDuration: "3.0s" }}
            />
            <h3 className="text-3xl font-serif text-healer-green mb-4 italic">
              The Vision
            </h3>
            <p className="text-healer-green/70 leading-relaxed text-lg font-ligh tracking-wide ">
              To lead a global shift toward intentional wellness, where nature’s
              healing power is an effortless, transparent, and joyful part of
              every person's daily ritual.
            </p>
          </motion.div>
        </div>
        {/* </AnimatedGradientBg> */}
        {/* Section 3: The Promise */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto border-t border-healer-green/10 pt-20"
        >
          <Award className="mx-auto text-healer-gold mb-4" size={32} />
          <h4 className="text-2xl font-serif text-healer-green mb-4 italic underline decoration-healer-gold/30">
            The Healer Promise
          </h4>
          <p className="text-healer-green/60 italic tracking-wide leading-relaxed">
            "We promise absolute transparency in our sourcing and a commitment
            to potency. Every bottle is a tribute to the earth and a gift to
            your health."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Roots;
