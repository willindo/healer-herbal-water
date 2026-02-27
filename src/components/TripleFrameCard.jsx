import React from "react";
import { motion } from "framer-motion";

const TripleFrameCard = ({ children, className = "" }) => {
  return (
    <div className={`relative p-  ${className}`}>
      {/* Outer Border (The actual Div border) */}
      <div className="absolute inset-2 border border-[#ed11d0] pointer-events-none" />

      {/* Middle Border (Using before) */}
      <div className="absolute inset-4 border border-[#59df52] pointer-events-none" />

      {/* Inner Border (The tightest frame) */}
      <div className="absolute inset-6 border border-[#e8e22d] pointer-events-none" />

      {/* Content Area */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// <TripleFrameCard className="max-w-md mx-auto">
// </TripleFrameCard>

export default TripleFrameCard;
