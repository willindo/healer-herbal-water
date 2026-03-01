import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

  // --- Bottle Image Cycling Logic ---
  const [currentBottle, setCurrentBottle] = useState(0);
  const bottleImages = [
    "/assets/bottle/bottle1.png",
    "/assets/bottle/bottle2.png",
    "/assets/bottle/bottle3.png",
    "/assets/bottle/bottle4.png",
    "/assets/bottle/bottle5.png",
    "/assets/bottle/bottle6.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBottle((prev) => (prev + 1) % bottleImages.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, [bottleImages.length]);

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
      // Example for your Homepage
      <Helmet>
        <title>Healer | Premium Herbal Infused Drinks for Wellness</title>
        <meta
          name="description"
          content="Experience the power of nature with Healer Herbal Drink. Sustainably sourced, naturally refreshing."
        />
      </Helmet>
      <section className="relative h-[94vh] flex flex-col items-center justify-around overflow-hidden border-0 mt-10">
        {/* Dynamic Water Gradient Background */}
        <div
          className="absolute inset-0 transition-colors duration-1000"
          style={{
            background:
              "linear-gradient(180deg, #e0fef2 0%, #7dfcd3 30%, #0ee9a5 70%, #03a169 100%)",
            opacity: 0.9,
          }}
        />

        {/* Brand & Origin Label */}
        <div className=" pt-5  z-20 text-center">
          <h2
            className="text-[#d6a60c] uppercase tracking-[0.4em] font-bold animate-pulse"
            style={{ fontSize: "var(--step-0)" }}
          >
            ALMAZ100 Presents
          </h2>
          <div className="p-6 space-y-4 flex flex-col text-[#017f01]">
            {/* We use a key here so the animation restarts when the bottle changes */}
            <MotionTextMath
              key={currentBottle}
              text="Herbal Water"
              pattern="pendulum"
              className="text-2xl sm:text-4xl md:text-5xl font-light drop-shadow-md"
            />
          </div>
          {/* <h1 className="text-[#a18020] tracking-widest text-sm mt-4">
            EST. 2024 • TRADITIONAL WISDOM
          </h1> */}
        </div>

        {/* Main "HEALER" Curved Title with its own Fade effect */}
        {/* <div className="z-20 min-h-[800px]:-translate-y-3/4 h-20 max-sm:max-w-full">
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
                className="text-5xl sm:text-7xl min-[1025px]:text-9xl font-serif text-[#111] drop-shadow-lg"
              >
                {char}
              </span>
            ))}
          </LayoutOrchestra>
        </div> */}
        <h1
          className="w-[70vw] font-share z-50 text-[black] font-bold "
          style={{ fontSize: "var(--step-14)" }}
        >
          HEALER
        </h1>

        {/* --- Cycling Bottle Display --- */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          {bottleImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Healer Bottle ${idx + 1}`}
              className={`absolute w-auto h-[50vh] transition-all duration-1000 ease-in-out transform ${
                idx === currentBottle
                  ? "opacity-60 scale-110 blur-0 translate-y-0"
                  : "opacity-0 scale-90 blur-md translate-y-10"
              }`}
            />
          ))}
        </div>

        <div className="relative z-30 text-center px-4">
          <p className="max-w-2xl mx-auto text-white text-lg md:text-xl leading-relaxed mt-10 mb-10 bg-black/20 p-4 rounded-lg backdrop-blur-md border border-white/10">
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
      {/* Static Logo Branding */}
      <div className=" absolute w-3/12 top-[10%]  right-[1%] bg[#c3722c] ">
        <img
          src="../ALMAZ100.png"
          alt=""
          className=" mi-blend-color-dodge animate-pulse "
        />
      </div>
      <section className="pt-16 pb-24 bg-gradient-to-b from-[#03a169] to-[#39e8b1]">
        <AnimatedScope
          className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 text-center"
          animation="slideRight"
          once={false}
          stagger={0.7}
        >
          {[
            {
              icon: <Waves />,
              title: "Sacred Hydration",
              desc: "A silken pour of 7 rare blooms and spices. More than water—it’s an ethereal fragrance you can drink, refreshing the soul and leaving a hauntingly beautiful trail on your palate",
            },
            {
              icon: <ShieldCheck />,
              title: "Immunity by ALMAZ",
              desc: "Deep, soul-warming notes of Black Cumin and Cardamom. A perfumed strength that guards your body, releasing a refreshing, spiced mist on your palate with every sip.",
            },
            {
              icon: <Leaf />,
              title: "100% Natural",
              desc: "Pure, petal-soft hydration. Zero calories, zero additives—just the intoxicating aroma of ancient healing captured in a bottle.",
            },
          ].map((item, idx) => (
            <AnimatedScope
              className=" flex flex-wrap items-center"
              animation="slideRight"
              once={false}
              stagger={0.7}
            >
              <AnimatedScope
                key={idx}
                animation="slideRight"
                once={false}
                stagger={0.7}
                className="flex flex-col gap-5 items-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
              >
                <div className="text-white animate-pulse">{item.icon}</div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-blue-50 leading-relaxed">{item.desc}</p>
              </AnimatedScope>
            </AnimatedScope>
          ))}
        </AnimatedScope>
      </section>
    </>
  );
};

export default Home;
