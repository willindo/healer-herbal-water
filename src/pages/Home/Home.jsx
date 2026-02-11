import React from "react";
import { Link } from "react-router-dom";
import { MousePointer2, Droplets, Leaf, ShieldCheck } from "lucide-react";
import { AnimatedScope } from "../../components/AnimatedScope";
// import WaterBackground from "../../components/WaterBackGround";
// import Water2 from "../../components/Water2";
import { MotionTextMath } from "../../components/MotionTextOrchestra";

MotionTextMath;
const Home = () => {
  return (
    <>
      {/* <WaterBackground /> */}
      {/* <Water2 /> */}
      <section className="relative  h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-healer-green/10 z-">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        </div>

        <div className="relative z-10 text-center px-4">
          <span className="text-[#d6a60c] uppercase tracking-[0.3em] text-lg font-medium mb-4 block  animate-pulse ">
            Est. 2024 • Traditional Wisdom
          </span>
          {/* <h1 className="text-6xl  md:text-8xl  font-serif text-healer-green mb-6 mt-8 tracking-tight leading-tight">
            Heal Naturally <br />
          </h1>
          <hi className="text-6xl  md:text-8xl  font-serif text-healer-green mb-6 mt-8 tracking-tight leading-tight">
            Live Fully
          </hi> */}
          <div className="p-6 space-y-4 flex flex-col ">
            <MotionTextMath
              as="h1"
              text="Heal Naturally "
              pattern="chaos"
              className="text-8xl font-serif  "
            />
            <MotionTextMath
              as="h1"
              text="Live Fully "
              pattern="lissajous"
              className="text-8xl font-serif  "
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
