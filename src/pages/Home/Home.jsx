import React from "react";
import { Link } from "react-router-dom";
import { MousePointer2, Droplets, Leaf, ShieldCheck } from "lucide-react";
import { AnimatedScope } from "../../components/AnimatedScope";
// import WaterBackground from "../../components/WaterBackGround";
// import Water2 from "../../components/Water2";
import { MotionTextMath } from "../../components/MotionTextOrchestra";
import LayoutOrchestra from "../../components/LayoutOrchestra";
import { LayoutSwitcher } from "../../components/LayoutSwitcher";
import { DevConfigPanel1 } from "../../components/ui-tools/DevConfigPanel1";
import { useResponsiveScale } from "../../configs/useResponsiveScale";
import { defaultConfigs } from "../../configs/layoutConfigs";
import { useLayoutConfig } from "../../configs/useLayoutConfig";
import { arcSpiralSchema } from "../../configs/panelSchemas";

arcSpiralSchema;
const Home = () => {
  const { config, setConfig } = useLayoutConfig("circle");
  return (
    <>
      {/* <WaterBackground /> */}
      {/* <Water2 /> */}
      <section className="relative  h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #e0f2fe 0%, #7dd3fc 30%, #0ea5e9 70%, #0369a1 100%)",
            opacity: 0.9,
          }}
        />

        {/* Frost overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 70%)",
            mixBlendMode: "overlay",
          }}
        />

        {/* <div className="absolute inset-0 h-full w-full bg-healer-green/10 z-">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        </div> */}

        <div className="relative z-10 text-center px-4">
          <span className="relative z-10 top-24 text-[#d6a60c] uppercase tracking-[0.3em] text-2xl font-medium mb-4 block  animate-pulse ">
            Est. 2024 • Traditional Wisdom
          </span>

          <div className="  -translate-y-3/4 h-20 ">
            <LayoutOrchestra
              className=" "
              layout="bezier"
              config={{
                spacing: 110, // Squeezes letters toward the center of the curve
                controlPoints: [
                  [-290, 10], // Start
                  [-70, -70], // Peak
                  [80, 100], // Valley
                  [260, 0], // End
                ],
              }}
            >
              {"Heal Naturally".split("").map((char, i) => (
                <span key={i} className="text-8xl font-serif  ">
                  {char}
                </span>
              ))}
            </LayoutOrchestra>
          </div>

          <div className="p-6 space-y-4 flex flex-col ">
            <MotionTextMath
              text="Live Fully "
              pattern="lissajous"
              className="text-8xl font-seri -z-10 "
            />
            <MotionTextMath
              as="p"
              text="Animating with MotionTextMath"
              pattern="pendulum"
            />
            {/* <MotionTextMath text="Just inline text" />{" "} */}
            {/* defaults to <span> */}
          </div>
          <p className="max-w-xxl mx-auto text-healer-green/80 text-xl md:text-xxl leading-relaxed mb-10">
            A refreshing infusion of 9 sacred herbs, crafted to rejuvenate your
            body and mind with every conscious sip.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center font-bold">
            <Link
              to="/alchemy"
              className="bg-healer-green text-healer-cream px-10 py-4 rounded-full hover:bg-opacity-90 transition-all tracking-wide"
            >
              The Alchemy
            </Link>
            <Link
              to="/roots"
              className="text-healer-green border border-healer-green/30 px-10 py-4 rounded-full hover:bg-healer-green/5 transition-all tracking-wide"
            >
              Our Roots
            </Link>
          </div>
        </div>
      </section>
      <div className="absolute top-[75px] lef-[50px]  animate-bounce text-[teal]">
        <Droplets size={32} />
      </div>
      <section className="pt-16 pb-24 bg-white/30 border-y border-healer-green/5">
        
        <AnimatedScope
          className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 text-center"
          animation="slideRight"
          once={false}
          stagger={0.7}
        >
          {[
            {
              icon: <Leaf />,
              title: "100% Herbal",
              desc: "Pure extracts of 9 traditional herbs. No artificial flavors.",
            },
            {
              icon: <ShieldCheck />,
              title: "Immunity Boost",
              desc: "Infused with Krishna Tulsi and Black Cumin seeds.",
            },
            {
              icon: <MousePointer2 />,
              title: "Modern Ritual",
              desc: "Ancient healing wisdom adapted for your busy lifestyle.",
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
                className="flex flex-col gap-5 "
              >
                <div
                  className="flex justify-center mb-4 text-healer-gold animate-ping "
                  style={{ animationDuration: "3.0s" }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-healer-green">
                  {item.title}
                </h3>
                <p className="text-healer-green/70 tracking-wide ">
                  {item.desc}
                </p>
              </AnimatedScope>
            </AnimatedScope>
          ))}
        </AnimatedScope>
      </section>
    </>
  );
};

export default Home;
