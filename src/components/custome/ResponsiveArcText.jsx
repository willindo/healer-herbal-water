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
    return size.width * 0.3; // 0% of parent width for larger screens
  };

  // Calculate responsive sweep based on available space
  const getSweep = () => {
    if (isMobile) {
      return 180; // Tighter arc for mobile
    }
    return 170; // Full arc for desktop
  };

  // Adjust angle step to center the text
  const getAngleStep = () => {
    if (isMobile) {
      return 0; // Center the arc on mobile
    }
    return 0; // Keep centered on desktop
  };

  return (
    <div
      ref={ref}
      className="w-full h-full z-10 flex justify-center items-center"
    >
      <LayoutOrchestra
        layout="arc"
        config={{
          radius: getRadius(),
          sweep: getSweep(),
          angleStep: getAngleStep(),
          // upright: isMobile ? false : true, // Optional: adjust text orientation
          spacing: isMobile ? 80 : 90, // Letter spacing
        }}
      >
        {"Rooted in Nature".split("").map((char, i) => (
          <span
            key={i}
            className="tex-4xl  d:text-5xl l:text-6xl  font-serif text-[white]"
            style={{ fontSize: "var(--step-14)" }}
          >
            {char}
          </span>
        ))}
      </LayoutOrchestra>
    </div>
  );
};

export default ResponsiveArcText;
