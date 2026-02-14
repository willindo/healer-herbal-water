import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, Feather, Award } from "lucide-react";
import AnimatedGradientBg from "../../components/AnimatedGradientBg";
import LayoutOrchestra from "../../components/LayoutOrchestra";

import ResponsiveArcText from "../../components/custome/ResponsiveArcText";
LayoutOrchestra;
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
            <h2 className="text-healer-gold uppercase tracking-[0.3em] text-2xl font-bold mb-6 text-center ">
              Our Story
            </h2>
            {/* <div className=" translate-y-8 ">
              <LayoutOrchestra
                className=" "
                layout="arc"
                config={{
                  radius: 230, // Adjusts the curvature of the arc
                  sweep: 150, // Degrees of the arc (180 for a half-circle)
                  angleStep: 2, // Degrees between each letter
                }}
              >
                {"Born from Tradition,".split("").map((char, i) => (
                  <span
                    key={i}
                    className="text-4xl  md:text-5xl lg:text-6xl font-seri  "
                  >
                    {char}
                  </span>
                ))}
              </LayoutOrchestra>
            </div> */}
            <ResponsiveArcText />

            <h1 className="text-5xl md:text-6xl font-serif text-healer-green leading-tight mb-8 text-center">
              Refined by Science.
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
        <div className="mb-24  bg-gradient-to-t from-[#0369a1] via-[#0ea5e9]/80 to-transparent">
          <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 
                    border border-white/20 shadow-2xl"
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
                convenience. We craft hydration that doesn't just quench
                thirst—it restores the soul and purifies the body at a cellular
                level.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 
                    border border-white/20 shadow-2xl"
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
                To lead a global shift toward intentional wellness, where
                nature’s healing power is an effortless, transparent, and joyful
                part of every person's daily ritual.
              </p>
            </motion.div>
          </div>
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
      <section className="relative overflow-hidden">
        {/* Sky gradient with atmospheric depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #e0f2fe 0%, #7dd3fc 30%, #0ea5e9 70%, #0369a1 100%)",
            opacity: 0.9,
          }}
        />

        {/* Frost overlay - ethereal glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 70%)",
            mixBlendMode: "overlay",
          }}
        />

        {/* Diffusion layer - seamless fusion point */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background: "linear-gradient(to top, #0369a1, transparent)",
            opacity: 0.7,
            mixBlendMode: "multiply",
          }}
        />

        {/* Next element - emerging from the gradient */}
        <div className="relative mt-auto bg-gradient-to-t from-[#0369a1] via-[#0ea5e9]/80 to-transparent">
          <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 
                    border border-white/20 shadow-2xl"
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
                convenience. We craft hydration that doesn't just quench
                thirst—it restores the soul and purifies the body at a cellular
                level.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 
                    border border-white/20 shadow-2xl"
            >
              <Compass
                className="text-healer-gold mb-6 animate-spin "
                size={40}
                style={{ animationDuration: "3.0s" }}
              />
              <h3 className="text-3xl font-serif text-[#13fffd] mb-4 italic">
                The Vision
              </h3>
              <p className="text-[#13fffd] leading-relaxed text-lg font-ligh tracking-wide ">
                To lead a global shift toward intentional wellness, where
                nature’s healing power is an effortless, transparent, and joyful
                part of every person's daily ritual.
              </p>
            </motion.div>{" "}
          </div>
        </div>

        {/* Optional: Mist particles for ethereal transition */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.2)_0%,_transparent_70%)] 
                  mix-blend-soft-light"
          />
        </div>
      </section>
    </div>
  );
};

export default Roots;
