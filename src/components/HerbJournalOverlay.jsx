import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const herbDetails = {
  vetiver: {
    name: "Vetiver",
    scientific: "Chrysopogon zizanioides",
    alias: "The Oil of Tranquility",
    origin: "Tropical India",
    essence: "Earth / Cooling / Grounding",
    description:
      "Known as 'Khus', Vetiver is a perennial grass with a deep, complex root system. In HEALER, it acts as a natural body coolant and emotional anchor.",
    benefits: [
      "Reduces Core Body Heat",
      "Supports Neural Calm",
      "Natural Antioxidant",
    ],
    alchemy:
      "Steam-distilled at low temperatures to preserve the volatile earthy molecules.",
  },
  black_cumin: {
    name: "Black Cumin",
    scientific: "Nigella Sativa",
    alias: "The Seed of Blessing",
    origin: "Mediterranean / Western Asia",
    essence: "Pungent / Restorative / Warm",
    description:
      "Historically claimed to be 'a cure for everything but death,' these obsidian seeds house Thymoquinone, a potent bioactive compound.",
    benefits: [
      "Immune System Modulation",
      "Respiratory Support",
      "Digestive Catalyst",
    ],
    alchemy:
      "Cold-pressed extraction to ensure zero loss of the delicate Thymoquinone oils.",
  },
};

export default function HerbJournalOverlay({ selectedHerbId, onClose }) {
  const data = herbDetails[selectedHerbId];

  if (!data) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-end bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="h-full w-full md:w-[600px] bg-[#f8f5f0] shadow-2xl flex flex-col overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-healer-green hover:rotate-90 transition-transform"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Journal Content */}
          <div className="p-10 md:p-16 pt-24 text-[#1e4040]">
            <header className="mb-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs uppercase tracking-[0.3em] text-healer-gold font-bold block mb-2"
              >
                Botanical Monograph
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-serif italic mb-2"
              >
                {data.name}
              </motion.h2>
              <p className="text-sm font-medium opacity-60 italic">
                {data.scientific}
              </p>
            </header>

            <section className="space-y-10">
              {/* Key Data Grid */}
              <div className="grid grid-cols-2 gap-6 border-y border-healer-green/10 py-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-healer-gold mb-1">
                    Origin
                  </h4>
                  <p className="text-sm font-semibold">{data.origin}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-healer-gold mb-1">
                    Essence
                  </h4>
                  <p className="text-sm font-semibold">{data.essence}</p>
                </div>
              </div>

              {/* Narrative Description */}
              <div>
                <h3 className="font-serif text-2xl mb-4 italic">
                  "{data.alias}"
                </h3>
                <p className="leading-relaxed text-healer-green/80 mb-6">
                  {data.description}
                </p>
                <div className="bg-white/50 p-6 rounded-2xl border border-white">
                  <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-healer-gold"></span>{" "}
                    Restoration Benefits
                  </h4>
                  <ul className="space-y-3">
                    {data.benefits.map((b, i) => (
                      <li key={i} className="text-sm flex items-center gap-3">
                        <div className="w-1 h-1 bg-healer-gold rounded-full" />{" "}
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* The HEALER Method */}
              <div className="pt-6 border-t border-healer-green/10">
                <h4 className="text-xs uppercase tracking-widest font-bold mb-3">
                  The Extraction Ritual
                </h4>
                <p className="text-sm italic opacity-70 leading-relaxed">
                  {data.alchemy}
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
