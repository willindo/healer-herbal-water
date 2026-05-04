import React from "react";

const FoxLogoLab = () => {
  // Define your variations here
  const logoVariations = [
    { ears: "∧   ∧", chin: "∇", label: "Sharp Minimal" },
    { ears: "Δ   Δ", chin: "◇", label: "Diamond Tech" },
    { ears: "V   V", chin: "△", label: "The V-Ears" },
    { ears: "▴   ▴", chin: "🔹", label: "Modern Soft" },
    { ears: "▲   ▲", chin: "💠", label: "Medusa Geometric" },
    { ears: "∧   ∧", chin: "♦", label: "Zen Healer" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-10 bg-gray-50 rounded-xl">
      {logoVariations.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-black transition-all cursor-pointer group"
        >
          <div className="text-3xl font-mono leading-none tracking-tighter text-gray-800">
            {item.ears}
          </div>
          <div className="text-3xl font-mono leading-none -mt-1 text-gray-800">
            {item.chin}
          </div>
          <span className="mt-4 text-xs text-gray-400 font-sans tracking-widest uppercase group-hover:text-black">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FoxLogoLab;
