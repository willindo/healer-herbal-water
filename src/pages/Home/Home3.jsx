import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    "/assets/healer/h12.png",
    "/assets/healer/ha36.png",
    "/assets/healer/h26.png",
    "/assets/healer/ha48.png",
    "/assets/healer/h29.png",
    "/assets/healer/ha57.png",
    "/assets/healer/h87.png",
    "/assets/healer/ha46.png",
    "/assets/healer/ha55.png",
    "/assets/healer/ha60.png",
    "/assets/healer/ha68.png",
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
      <title>Healer | Premium Herbal Infused Water & Wellness</title>
      <meta
        name="description"
        content="Discover Healer: The ultimate herbal-infused water crafted for natural hydration, energy, and holistic wellness. Sustainably sourced."
      />
      <meta property="og:title" content="Healer | Premium Herbal Water" />
      <meta
        property="og:description"
        content="Natural hydration meets ancient herbal wisdom."
      />
      <section className="relative min-h-screen max-lg:flex flex-col items-center justify-around overflow-hidden border-0 mt-10 lg:grid lg:grid-cols-[20vw_70vw_10vw] lg:grid-rows-[3rem_4rem_4rem_1fr_auto]  ">
        <div
          className="absolute inset-0 transition-colors duration-1000"
          style={{
            background:
              "linear-gradient(180deg, #e0fef2 0%, #7dfcd3 30%, #0ee9a5 70%, #03a169 100%)",
            opacity: 0.9,
          }}
        />
        {/* Brand & Origin Label */}
        <div className=" pt-5  z-20 text-center lg:row-start-1 lg:col-span-3 place-self-center ">
          <h2
            className="text-[forestgreen] capitalize tracking-[0.4em] font-bold animate-pulse "
            style={{ fontSize: "var(--step-0)" }}
          >
            almaz100 global presents
          </h2>
          {/* <div className="p-6 space-y-4 flex flex-col text-[#017f01]"></div> */}
          {/* <h1 className="text-[#a18020] tracking-widest text-sm mt-4">
            EST. 2024 • TRADITIONAL WISDOM
            </h1> */}
        </div>

        <h1
          className="-[70vw] font-share z-50 text-[black] font-bold lg:col-start-1 lg:row-start-2 place-self-center"
          style={{ fontSize: "var(--step-14)" }}
        >
          HEALER
        </h1>

        <h1
          className="text-2xl font-light drop-shadow-md font-share uppercase z-10 lg:col-start-1 lg:row-start-3 place-self-center "
          style={{ fontSize: "var(--step-13)" }}
        >
          herbal water
        </h1>

        {/* --- Cycling Bottle Display --- */}
        <div className="relative  max-lg:aspect-square  w-full lg:w-[70%] lg:h-full  mx-auto my-8  bg-transparent flex items-center justify-center z-30 pointer-events-none overflow-hidden lg:col-start-2 lg:row-start-2 row-end-5 ">
          {bottleImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Healer Bottle ${idx + 1}`}
              className={`absolute bg-transparent lg:w-auto lg:h-auto object-contain object-center transition-all duration-1000 ease-in-out transform ${
                idx === currentBottle
                  ? "opacity-60 scale-110 blur-0 translate-y-0"
                  : "opacity-0 scale-90 blur-md translate-y-10"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Static Logo Branding */}
      <div className=" absolute w-3/12 top-[10%] md:top-[5%]  right-[1%] bg[#c3722c]  ">
        <img
          src="../ALMAZ100.png"
          alt=""
          className=" mi-blend-color-dodge animate-pulse "
        />
      </div>
    </>
  );
};

export default Home;
