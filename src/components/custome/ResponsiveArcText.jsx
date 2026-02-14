import { useParentSize } from "../../configs/useParentSize";
import LayoutOrchestra from "../LayoutOrchestra";

const ResponsiveArcText = () => {
  const { ref, size } = useParentSize();

  // Determine if mobile based on parent width
  const isMobile = size.width < 400; // Adjust threshold as needed

  // Calculate responsive radius based on parent width
  const getRadius = () => {
    if (isMobile) {
      return size.width * 0.4; // 30% of parent width for mobile
    }
    return size.width * 0.45; // % of parent width for larger screens
  };

  // Calculate responsive sweep based on available space
  const getSweep = () => {
    if (isMobile) {
      return 180; // Tighter arc for mobile
    }
    return 160; // Full arc for desktop
  };

  // Adjust angle step to center the text
  const getAngleStep = () => {
    if (isMobile) {
      return 0; // Center the arc on mobile
    }
    return 0; // Keep centered on desktop
  };

  return (
    <div ref={ref} className="w-full h-full  flex justify-center items-center">
      <LayoutOrchestra
        layout="arc"
        config={{
          radius: getRadius(),
          sweep: getSweep(),
          angleStep: getAngleStep(),
          upright: isMobile ? false : true, // Optional: adjust text orientation
          spacing: isMobile ? 80 : 85, // Letter spacing
        }}
      >
        {"Born from Tradition".split("").map((char, i) => (
          <span
            key={i}
            className="text-4xl sm:text-6xl  font-serif text-[green]"
          >
            {char}
          </span>
        ))}
      </LayoutOrchestra>
    </div>
  );
};

export default ResponsiveArcText;
