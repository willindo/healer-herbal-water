"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface OrbitProps {
  children: ReactNode[];
  radius?: number;
  speed?: number; // Seconds for a full rotation
  direction?: "clockwise" | "counter-clockwise";
  showPath?: boolean;
  tilt?: number; // Tilt the circle on the X-axis for 3D depth
  draggable?: boolean;
  childRotate?: boolean;
  className?: string;
}

export default function OrbitParent({
  children,
  radius = 200,
  speed = 20,
  direction = "clockwise",
  showPath = false,
  tilt = 60,
  draggable = false,
  childRotate = true,
  className = "",
}: OrbitProps) {
  const count = children.length;

  return (
    <div
      className={`relative flex items-center justify-center w-full h-[600px] perspective-1000 ${className}`}
    >
      {/* The Visual Path (Optional) */}
      {showPath && (
        <div
          className="absolute border border-white/20 rounded-full"
          style={{
            width: radius * 2,
            height: radius * 2,
            transform: `rotateX(${tilt}deg)`,
          }}
        />
      )}

      {/* The Rotating Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateY: direction === "clockwise" ? [0, 360] : [360, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        drag={draggable}
      >
        {children.map((child, i) => {
          // Position elements at 90-degree intervals for 4 items
          const angle = (i * Math.PI) / 2; // 0°, 90°, 180°, 270°
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;

          return (
            <div
              key={i}
              className="absolute"
              style={{
                transform: `translate3d(${x}px, 0, ${z}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Counter-rotation to keep children facing forward */}
              {childRotate ? (
                <motion.div
                  animate={{
                    rotateY: direction === "clockwise" ? [0, -360] : [-360, 0],
                  }}
                  transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {child}
                </motion.div>
              ) : (
                child
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
