import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, Feather, Award, Leaf, Droplet } from "lucide-react";
import ResponsiveArcText from "../../components/custome/ResponsiveArcText";

// Constants for better maintainability
const COLORS = {
  cream: "#faf7f2",
  green: "#1b4d3e",
  gold: "#c6a15b",
  skyStart: "#e0f2fe",
  skyMid: "#7dd3fc",
  skyEnd: "#0ea5e9",
  skyDeep: "#0369a1",
};

const ANIMATION_VARIANTS = {
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  fadeInScale: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
};

const SectionTitle = ({ children, className = "" }) => (
  <h2
    className={`text-healer-gold uppercase tracking-[0.3em] text-2xl font-bold mb-6 text-center ${className}`}
  >
    {children}
  </h2>
);

const Card = ({ children, className = "", delay = 0, hoverEffect = true }) => (
  <motion.div
    whileHover={hoverEffect ? { y: -5 } : {}}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`backdrop-blur-sm bg-white/10 rounded-2xl p-8 
                border border-white/20 shadow-2xl ${className}`}
  >
    {children}
  </motion.div>
);

const Roots = () => {
  return (
    <div className="min-h-screen bg-healer-cream">
      {/* Hero Section with Brand Story */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div {...ANIMATION_VARIANTS.fadeInLeft}>
              <SectionTitle>Our Story</SectionTitle>
              <ResponsiveArcText />
              <h1
                className="text-5xl d:text-6xl mt-8 font-serif text-healer-green/70 leading-tight mb-8 text-center"
                style={{ fontSize: "var(--step-14)" }}
              >
                Refined by Science,
                <br />
                {/* <span className="text-healer-gold">Rooted in Nature</span> */}
              </h1>

              <div className="space-y-6">
                <p className="text-healer-green/70 text-lg leading-relaxed">
                  Healer started with a simple observation: the ancient wisdom
                  of herbal infusions was being lost to the convenience of
                  sugary, artificial beverages.
                </p>
                <p className="text-healer-green/70 text-lg leading-relaxed">
                  We spent years working with traditional herbalists to perfect
                  a blend of 9 sacred ingredients. Our goal was simple: provide
                  cellular hydration that honors the rhythms of nature.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Leaf className="text-healer-gold" size={24} />
                <Droplet className="text-healer-gold" size={24} />
                <Feather className="text-healer-gold" size={24} />
              </div>
            </motion.div>

            <motion.div
              {...ANIMATION_VARIANTS.fadeInScale}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1515600051222-73c33833201a?auto=format&fit=crop&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-healer-green/60 via-healer-green/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-healer-cream">
                <p className="text-sm uppercase tracking-wider opacity-90">
                  Ancient wisdom, modern craft
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Gradient Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${COLORS.skyDeep} 0%, ${COLORS.skyEnd} 50%, ${COLORS.skyMid} 100%)`,
          }}
        />

        {/* Atmospheric overlay */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.2)_0%,_transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Feather className="mx-auto text-healer-cream mb-4" size={48} />
            <h2 className="text-4xl md:text-5xl font-serif text-healer-cream mb-4">
              Our Guiding Light
            </h2>
            <div className="w-24 h-1 bg-healer-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card>
              <Target
                className="text-healer-gold mb-6 animate-pulse"
                size={40}
                style={{ animationDuration: "3.0s" }}
              />
              <h3 className="text-3xl font-serif mb-4 text-healer-cream">
                The Mission
              </h3>
              <p className="text-healer-cream/90 leading-relaxed text-lg">
                To bridge the gap between ancient herbal wisdom and modern
                convenience. We craft hydration that doesn't just quench
                thirst—it restores the soul and purifies the body at a cellular
                level.
              </p>
            </Card>

            <Card delay={0.2}>
              <Compass
                className="text-healer-gold mb-6 animate-spin"
                size={40}
                style={{ animationDuration: "3.0s" }}
              />
              <h3 className="text-3xl font-serif mb-4 text-healer-cream">
                The Vision
              </h3>
              <p className="text-healer-cream/90 leading-relaxed text-lg">
                To lead a global shift toward intentional wellness, where
                nature's healing power is an effortless, transparent, and joyful
                part of every person's daily ritual.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-healer-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Leaf,
                title: "Sacred Sourcing",
                description:
                  "Every ingredient is ethically sourced from traditional growers who share our commitment to purity.",
              },
              {
                icon: Droplet,
                title: "Cellular Hydration",
                description:
                  "Our unique blend works at the deepest level, ensuring every drop delivers maximum benefit.",
              },
              {
                icon: Feather,
                title: "Mindful Rituals",
                description:
                  "We believe in creating moments of peace in a busy world, one sip at a time.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-block p-4 bg-healer-gold/10 rounded-full mb-4">
                  <item.icon className="text-healer-gold" size={32} />
                </div>
                <h4 className="text-xl font-serif text-healer-green mb-3">
                  {item.title}
                </h4>
                <p className="text-healer-green/60">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* The Promise */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Award className="mx-auto text-healer-gold mb-6" size={48} />
            <div className="relative">
              <div className="absolute inset-0 bg-healer-gold/5 rounded-3xl transform -rotate-1" />
              <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-12 border border-healer-gold/20">
                <h4 className="text-3xl font-serif text-healer-green mb-6">
                  The Healer Promise
                </h4>
                <p className="text-healer-green/70 text-xl italic leading-relaxed">
                  "We promise absolute transparency in our sourcing and a
                  commitment to potency. Every bottle is a tribute to the earth
                  and a gift to your health."
                </p>
                <div className="mt-6 flex justify-center gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-healer-gold/40"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${COLORS.skyEnd} 0%, ${COLORS.skyDeep} 100%)`,
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-healer-cream mb-6">
              Begin Your Healing Journey
            </h2>
            <p className="text-healer-cream/90 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands who've discovered the power of intentional
              hydration.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-healer-gold text-healer-green font-semibold rounded-full
                       shadow-xl hover:shadow-2xl transition-all duration-300
                       border-2 border-healer-cream/20"
            >
              Explore Our Collection
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Roots;
