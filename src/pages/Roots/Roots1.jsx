import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Compass, Feather, Award, Leaf, Droplet } from "lucide-react";
import ResponsiveArcText from "../../components/custome/ResponsiveArcText";

const COLORS = {
  cream: "#faf7f2",
  green: "#1b4d3e",
  gold: "#c6a15b",
  skyDeep: "#03a169",
  skyEnd: "#0ee9a5",
  skyMid: "#7dfcd3",
};

const Roots = () => {
  // --- Synchronized Bottle Logic from Home.jsx ---
  const [currentBottle, setCurrentBottle] = useState(0);
  const bottleImages = [
    "/assets/healer/h12.png",
    "/assets/healer/ha36.png",
    "/assets/healer/h26.png",
    "/assets/healer/ha48.png",
    "/assets/healer/h29.png",
    "/assets/healer/ha57.png",
    "/assets/healer/h87.png",
    "/assets/healer/ha46.png",
    "/assets/healer/ha55.png",
    "/assets/healer/ha60.png",
    "/assets/healer/ha68.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBottle((prev) => (prev + 1) % bottleImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen b-healer-cream bg-[#a1cea1] ">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-healer-gold uppercase tracking-[0.3em] text-center text-2xl font-bold mb-6">
                Our Story
              </h2>
              <ResponsiveArcText />
              <h1
                className="text-5xl md:text-6xl mt-8 font-serif text-[white] leading-tight mb-8 text-center"
                style={{ fontSize: "var(--step-14)" }}
              >
                Refined by Science, <br />
              </h1>

              <div className="space-y-6">
                <p className="text-[white] text-lg leading-relaxed">
                  Healer started with a simple observation: the ancient wisdom
                  of herbal infusions was being lost to the convenience of
                  sugary, artificial beverages.
                </p>
                <p className="text-[white] text-lg leading-relaxed font-medium">
                  Under the stewardship of <strong>Almaz100 Global</strong>, we
                  spent years working with traditional herbalists to perfect a
                  blend of 7 sacred ingredients.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <Leaf className="text-healer-gold animate-bounce" size={24} />
                <Droplet className="text-healer-gold animate-pulse" size={24} />
                <Feather className="text-healer-gold" size={24} />
              </div>
            </motion.div>

            {/* Right Image Container - Integrating the Home.jsx Animation Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-green-100 to-green-300"
            >
              {/* Cycling Bottle Images */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentBottle}
                    src={bottleImages[currentBottle]}
                    alt="Healer Premium Bottle"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 1.1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                  />
                </AnimatePresence>
              </div>

              {/* Dynamic Overlay Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-healer-green/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-10 left-0 right-0 text-center">
                <motion.div
                  key={currentBottle}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <p className="text-white text-sm uppercase tracking-[0.4em] font-bold">
                    Ancient Wisdom
                  </p>
                  <p className="text-white/80 text-xs tracking-widest italic">
                    Modern Craft •{" "}
                    <span className=" not-italic "> Almaz100 Global</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${COLORS.skyDeep} 0%, ${COLORS.skyEnd} 50%, ${COLORS.skyMid} 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Feather
              className="mx-auto text-healer-cream mb-4 animate-pulse"
              size={48}
            />
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Our Guiding Light
            </h2>
            <div className="w-24 h-1 bg-healer-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-10 border border-white/20 shadow-xl">
              <Target className="text-healer-gold mb-6" size={40} />
              <h3 className="text-3xl font-serif mb-4 text-white">
                The Mission
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                To bridge the gap between ancient herbal wisdom and modern
                convenience. We craft hydration that doesn't just quench
                thirst—it restores the soul at a cellular level.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-10 border border-white/20 shadow-xl">
              <Compass
                className="text-healer-gold mb-6 animate-[spin_10s_linear_infinite]"
                size={40}
              />
              <h3 className="text-3xl font-serif mb-4 text-white">
                The Vision
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                To lead a global shift toward intentional wellness, where
                nature's healing power is an effortless and joyful part of every
                daily ritual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the values sections remain as per your logic... */}
    </div>
  );
};

export default Roots;
