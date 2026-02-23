import { Link } from "react-router-dom";
import {
  MousePointer2,
  Droplets,
  Leaf,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { AnimatedScope } from "../../components/AnimatedScope";
import { MotionTextMath } from "../../components/MotionTextOrchestra";
import LayoutOrchestra from "../../components/LayoutOrchestra";
import { useLayoutConfig } from "../../configs/useLayoutConfig";
import { useMediaQuery } from "../../configs/useMediaQuery";

const Home = () => {
  const { config, setConfig } = useLayoutConfig("circle");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  const getControlPoints = () => {
    if (isMobile)
      return [
        [-100, 5],
        [-30, -30],
        [30, 40],
        [100, 10],
      ];
    if (isTablet)
      return [
        [-180, 8],
        [-50, -50],
        [60, 70],
        [180, 5],
      ];
    return [
      [-290, 10],
      [-70, -70],
      [80, 100],
      [260, 0],
    ];
  };

  return (
    <>
      <section className="relative h-[94vh] flex flex-col items-center justify-around overflow-hidden border-0 ">
        {/* Dynamic Water Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #e0f2fe 0%, #7dd3fc 30%, #0ea5e9 70%, #0369a1 100%)",
            opacity: 0.9,
          }}
        />

        {/* Brand & Origin Label */}
        <div className="z-20 text-center">
          <h2
            className="text-[#d6a60c] uppercase tracking-[0.4em] font-bold animate-pulse"
            style={{ fontSize: "var(--step-0)" }}
          >
            ALMAZ100 Presents
          </h2>
          <h1 className="text-white/80 tracking-widest text-sm mt-1">
            EST. 2024 • TRADITIONAL WISDOM
          </h1>
        </div>

        {/* Main "HEALER" Curved Title */}
        <div className="z-20 min-h-[800px]:-translate-y-3/4 h-20 max-sm:max-w-full">
          <LayoutOrchestra
            layout="bezier"
            config={{
              spacing: isMobile ? 60 : isTablet ? 85 : 110,
              controlPoints: getControlPoints(),
            }}
          >
            {"HEALER".split("").map((char, i) => (
              <span
                key={i}
                className="text-5xl sm:text-7xl min-[1025px]:text-9xl font-serif text-white drop-shadow-lg"
              >
                {char}
              </span>
            ))}
          </LayoutOrchestra>
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="p-6 space-y-4 flex flex-col text-[#9aff9a]">
            <MotionTextMath
              text="Premium Herbal Water"
              patter="lissajous"
              className="text-2xl sm:text-4xl md:text-5xl font-light italic"
            />
          </div>

          <p className="max-w-2xl mx-auto text-white/90 text-lg md:text-xl leading-relaxed mt-10 mb-10 bg-black/5 p-4 rounded-lg backdrop-blur-sm">
            Experience the purity of <strong>Healer</strong>. A refreshing
            infusion of 7 sacred herbs by <strong>ALMAZ100</strong>, crafted to
            rejuvenate your body and mind with every conscious sip.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center font-bold">
            <Link
              to="/alchemy"
              className="bg-white text-[#0369a1] px-10 py-4 rounded-full hover:bg-opacity-90 transition-all tracking-wide shadow-xl"
            >
              Discover the Herbs
            </Link>
            <Link
              to="/roots"
              className="text-white border border-white/40 px-10 py-4 rounded-full hover:bg-white/10 transition-all tracking-wide"
            >
              ALMAZ100 Story
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Product Image with better positioning */}
      <div className="absolute w-2/12 min-w-[150px] top-[15%] right-[5%] z-30 drop-shadow-2xl">
        <img
          src="../ALMAZ100.png"
          alt="Healer Herbal Water Bottle"
          className="mix-blend-normal hover:scale-105 transition-transform duration-500"
        />
      </div>

      <section className="pt-16 pb-24 bg-gradient-to-b from-[#0369a1] to-[#0ea5e9]">
        <AnimatedScope
          className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 text-center"
          animation="slideRight"
          once={false}
          stagger={0.2}
        >
          {[
            {
              icon: <Waves />,
              title: "Sacred Hydration",
              desc: "The world's first premium bottled water infused with 7 therapeutic botanicals.",
            },
            {
              icon: <ShieldCheck />,
              title: "Immunity by ALMAZ",
              desc: "Powered by Black Cumin, Cardamom, and Mace to fortify your natural defenses.",
            },
            {
              icon: <Leaf />,
              title: "100% Natural",
              desc: "Zero calories. Zero additives. Just the ancient wisdom of Healer in a bottle.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-5 items-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
            >
              <div className="text-white animate-pulse">{item.icon}</div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-blue-50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </AnimatedScope>
      </section>
    </>
  );
};

export default Home;
