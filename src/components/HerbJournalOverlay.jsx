import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const herbDetails = {
  vetiver: {
    name: "Vetiver",
    scientific: "Chrysopogon zizanioides",
    alias: "The Oil of Tranquility",
    origin: "Tropical India (Khus)",
    essence: "Earth / Cooling / Grounding",
    description:
      "A sacred perennial grass with deep, tenacious roots. Vetiver acts as a powerful thermal regulator and emotional anchor, pulling 'excess heat' from both the physical body and the restless mind.",
    benefits: [
      "Thermal Regulation: Naturally lowers core body temperature and reduces inflammation.",
      "Neural Restoration: Soothes the nervous system to alleviate anxiety and mental fatigue.",
      "Hormonal Equilibrium: Traditionally used to support rhythmic balance and soothe cycles.", // The refined period claim
      "Digestive Harmony: Acts as an alkalizer to relieve dehydration-induced constipation.",
      "Cellular Shield: Rich in antioxidants that scavenge free radicals and slow oxidative stress.",
    ],
    alchemy:
      "Slow steam-distillation of the aged root fibers to capture the dense, grounding sesquiterpenes.",
    clinicalNotes:
      "Traditionally used in Ayurveda as a natural refrigerant and blood purifier to balance Pitta dosha.",
  },
  black_cumin: {
    name: "Black Cumin",
    scientific: "Nigella sativa",
    alias: "The Seed of Blessing",
    origin: "Southwest Asia & Mediterranean",
    essence: "Warm / Piquant / Restorative",
    description:
      "Anciently referred to as 'Kalonji,' these matte-black seeds are prized for their high concentration of Thymoquinone. In our Alchemy blend, it acts as the 'immune-architect,' reinforcing the body's natural defenses while soothing systemic heat.",
    benefits: [
      "Immune Architecture: A nutrient-dense source of Vitamins A, C, E, and K to fortify the white blood cell response.",
      "Glycemic Regulation: Traditionally used in Ayurveda to prevent sudden blood sugar spikes and reduce associated fatigue.",
      "Selective Anti-Inflammatory: Contains Thymoquinone, which targets chronic inflammation without suppressing the natural immune flow.",
      "Cognitive Longevity: Provides neuroprotective properties that support memory retention and mental sharpness.",
      "Digestive Fortitude: High dietary fiber content helps stabilize the gut microbiome and supports liver detoxification.",
    ],
    alchemy:
      "Cold-pressed or lightly toasted to activate the volatile oils without degrading the delicate crystalline Thymoquinone molecules.",
    clinicalNotes:
      "Regarded in historical texts as a 'panacea' for its ability to address both metabolic and respiratory vitality.",
  },
  mace: {
    name: "Mace",
    scientific: "Myristica fragrans",
    alias: "The Golden Veil",
    origin: "Banda Islands (The Spice Islands)",
    essence: "Warm / Aromatic / Kinetic",
    description:
      "The delicate, lacy aril that encompasses the nutmeg seed. Mace is a kinetic spice in our Alchemy blend, acting as a catalyst that stimulates blood flow and clears the respiratory pathways with its sophisticated, warm aroma.",
    benefits: [
      "Micro-circulatory Support: Enhances systemic blood flow, promoting vibrant skin, hair health, and efficient nutrient transport.",
      "Renal Filtration: Contains compounds that support the kidneys in preventing the formation of mineral deposits and stones.",
      "Oral Bio-Protection: A natural antibacterial agent that targets breath-neutralizing bacteria and supports gum resilience.",
      "Respiratory Clarity: Traditionally used to clear congestion and soothe the delicate tissues of the throat.",
      "Mineral Catalyst: A potent source of Manganese, Copper, and Zinc, essential for cellular repair and metabolic enzyme function.",
    ],
    alchemy:
      "Hand-peeled and sun-dried until the crimson 'blades' turn a deep amber, concentrating its ethereal oils.",
    clinicalNotes:
      "In traditional medicine, Mace is prized for its ability to 'invigorate the blood' without over-stimulating the heart.",
  },
  cardamom: {
    name: "Cardamom",
    scientific: "Elettaria cardamomum",
    alias: "The Queen of Spices",
    origin: "The Western Ghats, India",
    essence: "Cool / Floral / Uplifting",
    description:
      "A prized green pod containing volatile aromatic seeds. Cardamom is the 'harmonizer' of the digestive system, using its cooling pungency to settle the stomach and clarify the mind by flushing out systemic stagnation.",
    benefits: [
      "Fluid Equilibrium: Acts as a natural diuretic to help regulate blood pressure and reduce water retention around vital organs.",
      "Gastric Protection: Traditionally used to soothe acid reflux and reinforce the stomach lining against discomfort and ulcers.",
      "Oral Purification: Rich in cineole, a potent antimicrobial that neutralizes palate bacteria and refreshes breath naturally.",
      "Cortisol Moderation: Helps the body manage stress by lowering cortisol levels and promoting expansive, easy breathing.",
      "Antioxidant Detox: Facilitates the expulsion of toxins through the renal system, purifying the blood and brightening the complexion.",
    ],
    alchemy:
      "Pods are harvested by hand and slow-dried to lock in the essential oils within the dark inner seeds.",
    clinicalNotes:
      "In Ayurveda, Cardamom is known as 'Ela,' a sattvic spice that clears the senses and lightens the heaviness of digestion.",
  },
  cloves: {
    name: "Cloves",
    scientific: "Syzygium aromaticum",
    alias: "The Flower of Immortality",
    origin: "Maluku Islands, Indonesia",
    essence: "Spicy / Piercing / Vitalizing",
    description:
      "The sun-dried flower buds of the evergreen clove tree. Cloves are an antioxidant powerhouse, containing the highest ORAC (Oxygen Radical Absorbance Capacity) value of any spice, making them essential for cellular defense and metabolic heat.",
    benefits: [
      "Oxidative Shield: Loaded with Eugenol, a natural antioxidant that neutralizes free radicals and prevents cellular aging.",
      "Metabolic Balance: Contains Nigericin, which helps the body’s cells utilize insulin more effectively to stabilize blood sugar.",
      "Cellular Integrity: Supports the body's natural ability to eliminate damaged cells and prevent systemic inflammation.",
      "Kinetic Warmth: Enhances micro-circulation and blood flow, helping to regulate body temperature and metabolic speed.",
      "Vital Purification: Acts as a powerful blood purifier and stress-reliever, clearing the lymphatic system of stagnant toxins.",
    ],
    alchemy:
      "Harvested exactly when the green buds turn a soft pink, then sun-dried until they reach a dark, resinous brown.",
    clinicalNotes:
      "Known in traditional medicine as a 'hot' spice that Kindles Agni (digestive fire) and clears 'Amavisha' (internal toxins).",
  },
  cinnamon: {
    name: "Cinnamon",
    scientific: "Cinnamomum verum",
    alias: "The Eternal Bark",
    origin: "Sri Lanka (Ceylon)",
    essence: "Sweet / Woody / Warming",
    description:
      "Harvested from the inner bark of evergreen trees, Cinnamon is a master metabolic regulator. In our Alchemy blend, it acts as a 'thermal bridge,' helping the body process sugars efficiently while shielding the nervous system from oxidative decay.",
    benefits: [
      "Glycemic Mimicry: Contains compounds that mimic insulin to help cells absorb glucose, potentially reducing post-meal sugar spikes by 10-29%.",
      "Neural Longevity: Helps inhibit the buildup of 'Tau' proteins in the brain, supporting long-term cognitive health and clarity.",
      "Biotic Shield: Rich in Cinnamaldehyde, a potent agent that fights fungal and bacterial infections while protecting dental health.",
      "Polyphenol Powerhouse: Loaded with high-capacity antioxidants that protect the heart and arteries from oxidative stress.",
      "Metabolic Ignition: Naturally warms the body’s core to improve digestion and speed up the elimination of systemic waste.",
    ],
    alchemy:
      "The delicate inner bark is hand-rolled into 'quills' and air-dried to preserve its complex, sweet essential oils.",
    clinicalNotes:
      "Ceylon Cinnamon (True Cinnamon) is preferred in alchemy for its ultra-low coumarin content and superior aromatic profile.",
  },
  sarsaparilla: {
    name: "Sarsaparilla",
    scientific: "Hemidesmus indicus",
    alias: "The Eternal Root",
    origin: "South Asia / Central America",
    essence: "Sweet / Cooling / Fluid",
    description:
      "A slender, aromatic root known for its distinctive vanilla-like fragrance. Sarsaparilla is the ultimate 'Blood Purifier' in our Alchemy blend, acting as a natural magnet for systemic toxins while shielding the skin’s structural integrity from the inside out.",
    benefits: [
      "Dermal Preservation: Actively protects collagen production and inhibits oxidative damage caused by UV exposure for resilient, youthful skin.",
      "Systemic Cooling: Suppresses key inflammatory markers (TNF-alpha and IL-6) to soothe the body’s internal 'heat' and irritation.",
      "Joint Mobility: Traditionally used to reduce swelling and discomfort associated with gout and rheumatoid conditions by flushing excess uric acid.",
      "Cellular Signaling Defense: Contains saponins that help regulate healthy cell growth and inhibit the signaling pathways of damaged cells.",
      "Hepatic Detoxification: Supports the liver in filtering the bloodstream, leading to clearer skin and increased metabolic clarity.",
    ],
    alchemy:
      "The woody roots are crushed to release their cooling saponins and then cold-steeped to preserve their delicate, sweet aromatic profile.",
    clinicalNotes:
      "In Ayurveda, it is known as 'Sariva,' the premier herb for balancing Pitta and clearing heat-related skin conditions.",
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
