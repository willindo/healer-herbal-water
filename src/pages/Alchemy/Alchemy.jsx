import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { herbs } from "../../utils/herbData";

const Alchemy = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-[#799779]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-healer-gold uppercase tracking-[0.3em] text-sm mb-4 font-bold">
            The Healing Formula
          </h2>
          <h1 className="text-5xl md:text-6xl font-serif text-[#19c819] italic">
            The Seven Sacred Herbs
          </h1>
          <p className="mt-6 tracking-wide text-lg text-[#1bcfd2] max-w-2xl mx-auto">
            Meticulously balanced in precise proportions to create a symphony of
            restoration.
          </p>
        </motion.div>

        {/* Grid */}
        {/* <HerbsGrid /> */}
        <HerbsSection />
      </div>
    </div>
  );
};

export function HerbsSection() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-shuffle featured herb every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setFeaturedIndex((prev) => (prev + 1) % herbs.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const featuredHerb = herbs[featuredIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-healer-beige py-16 px-4 md:px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-healer-green/10 text-healer-gold rounded-full text-sm font-semibold mb-4">
            Ancient Wisdom, Modern Wellness
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-healer-green mb-6">
            Sacred Herbs & Spices
          </h2>
          <p className="text-lg text-healer-green/70 max-w-3xl mx-auto">
            Discover the timeless healing properties of nature's most precious
            botanicals, carefully selected to restore balance and vitality to
            your daily life.
          </p>
        </motion.div>
      </div>

      {/* Featured Herb Display - Auto Shuffling */}
      <div className="max-w-6xl mx-auto mb-12 lg:mb-20">
        <AnimatePresence mode="wait">
          {!isTransitioning && (
            <motion.div
              key={featuredHerb.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-healer-green/90 via-healer-green/70 to-transparent z-10" />
              <img
                src={featuredHerb.image}
                alt={`${featuredHerb.name} Hero`}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
                <div className="max-w-xl mb-8 md:mb-0">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                      Featured Herb
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {featuredHerb.tag}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif text-white mb-4">
                    {featuredHerb.name}
                  </h3>
                  <p className="text-xl md:text-2xl font-semibold text-healer-gold mb-4">
                    {featuredHerb.benefit}
                  </p>
                  <p className="text-white/90 text-base md:text-lg mb-6">
                    {featuredHerb.desc}
                  </p>
                  <button className="px-8 py-3 bg-white text-healer-green font-semibold rounded-full hover:bg-healer-beige transition-colors">
                    Learn More
                  </button>
                </div>

                {/* Navigation Dots */}
                <div className="flex md:flex-col gap-2">
                  {herbs.map((herb, index) => (
                    <button
                      key={herb.id}
                      onClick={() => {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setFeaturedIndex(index);
                          setIsTransitioning(false);
                        }, 300);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === featuredIndex
                          ? "bg-healer-gold scale-125"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`View ${herb.name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Auto-rotate Indicator */}
              <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2">
                <div className="w-2 h-2 bg-healer-gold rounded-full animate-pulse" />
                <span className="text-white/80 text-sm">
                  Next: {herbs[(featuredIndex + 1) % herbs.length].name}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Grid Layout (excluding featured herb) */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {herbs
            .filter((_, index) => index !== featuredIndex)
            .map((herb, index) => (
              <motion.div
                key={herb.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(30, 64, 64, 0.1)",
                }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Featured badge for recently featured */}
                {index === 0 && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-healer-gold/90 text-white text-xs font-bold rounded-full animate-pulse">
                      Recently Featured
                    </span>
                  </div>
                )}

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={herb.image}
                    alt={herb.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-healer-green/90 via-healer-green/40 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-healer-green text-xs font-bold rounded-full">
                      {herb.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif text-white mb-1">
                      {herb.name}
                    </h3>
                    <p className="text-healer-gold font-semibold text-sm">
                      {herb.benefit}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-healer-green/70 text-sm leading-relaxed mb-4">
                    {herb.desc}
                  </p>
                  <div className="w-12 h-0.5 bg-healer-gold/30 mb-4" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-healer-green/60 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Ancient Remedy
                    </span>
                    <button className="text-healer-gold font-semibold text-sm hover:text-healer-green transition-colors flex items-center">
                      Explore
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[white]/5 to-healer-green/5 rounded-3xl p-12 border border-healer-green/10">
            <h3 className="text-3xl font-serif text-[#09da9b] mb-4">
              Begin Your Healing Journey
            </h3>
            <p className="text-[#09da9b] mb-8 max-w-2xl mx-auto">
              Each herb tells a story of ancient healing traditions. Discover
              how these natural wonders can transform your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-healer-green text-white font-semibold rounded-full hover:bg-healer-green/90 transition-colors">
                Explore All Herbs
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export function HerbsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {herbs.map((herb, index) => (
        <motion.div
          key={herb.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="group bg-white/40 backdrop-blur-lg border border-healer-green/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
        >
          {/* Image Container */}
          <div className="h-48 overflow-hidden relative">
            <img
              src={
                herb.image ||
                "https://via.placeholder.com/400x300?text=Healer+Herbs"
              }
              alt={herb.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-healer-green/10 group-hover:bg-transparent transition-colors" />
          </div>

          {/* Content Section */}
          <div className="p-8">
            <span className="text-xs uppercase tracking-widest text-healer-gold font-bold">
              {herb.tag}
            </span>
            <h3 className="text-2xl font-serif text-healer-green mt-2 mb-4">
              {herb.name}
            </h3>
            <p className="text-sm font-bold text-healer-green/80 mb-2 underline decoration-healer-gold/30">
              {herb.benefit}
            </p>
            <p className="text-healer-green/60 text-sm leading-relaxed">
              {herb.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Alchemy;
