import { Link } from "react-router-dom";
import { MousePointer2, Droplets, Leaf, ShieldCheck } from "lucide-react";
import { AnimatedScope } from "../../components/AnimatedScope";
// import WaterBackground from "../../components/WaterBackGround";
// import Water2 from "../../components/Water2";
import { MotionTextMath } from "../../components/MotionTextOrchestra";
import LayoutOrchestra from "../../components/LayoutOrchestra";
import { useLayoutConfig } from "../../configs/useLayoutConfig";
import { useMediaQuery } from "../../configs/useMediaQuery";

const Home = () => {
  const { config, setConfig } = useLayoutConfig("circle");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  const getControlPoints = () => {
    if (isMobile) {
      return [
        [-100, 5], // Flatter curve for mobile
        [-30, -30],
        [30, 40],
        [100, 10],
      ];
    } else if (isTablet) {
      return [
        [-180, 8],
        [-50, -50],
        [60, 70],
        [180, 5],
      ];
    } else {
      return [
        [-290, 10],
        [-70, -70],
        [80, 100],
        [260, 0],
      ];
    }
  };

  return (
    <>
      {/* <WaterBackground /> */}
      {/* <Water2 /> */}
      <section className="relative   h-[94vh] flex flex-col items-cente justify-around overflow-hidden  border-0 ">
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
        {/* className="z-10 fixed bottom-0 w-[70vw] "  */}
        {/* <div className="absolute inset-0 h-full w-full bg-healer-green/10 z-">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        </div> */}

        <h2
          className="  z-20 text-[#d6a60c] text-center h-8 uppercase tracking-[0.3em]  font-medium mb-4 block  animate-pulse "
          style={{ fontSize: "var(--step-11)" }}
        >
          Est. 2024 • Traditional Wisdom
        </h2>
        <div className=" z-20 min-h-[800px]:-translate-y-3/4 h-20 max-sm:max-w-full ">
          <LayoutOrchestra
            className=" "
            layout="bezier"
            config={{
              spacing: isMobile ? 60 : isTablet ? 85 : 110,
              controlPoints: getControlPoints(),
            }}
          >
            {"Heal Naturally".split("").map((char, i) => (
              <span
                key={i}
                className=" text-4xl sm:text-6xl min-[1025px]:text-8xl font-serif text-[green] "
              >
                {char}
              </span>
            ))}
          </LayoutOrchestra>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="p-6 space-y-4 flex flex-col text-[#9aff9a] ">
            <MotionTextMath
              text="Live Fully "
              pattern="lissajous"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-seri -z-10 "
            />
            {/* <MotionTextMath text="Just inline text" />{" "} */}
            {/* defaults to <span> */}
          </div>
          <p className="max-w-xxl mx-auto text-healer-green/80 text-xl md:text-xxl leading-relaxed mt-20 mb-10">
            A refreshing infusion of 7 sacred herbs, crafted to rejuvenate your
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
      <div className=" absolute w-3/12 top-[10%]  right-[1%] bg[#c3722c] ">
        <img
          src="../ALMAZ100.png"
          alt=""
          className=" mix-blend-color-dodge  "
        />
      </div>
      <div className="absolute top-[75px] lef-[50px]  animate-bounce text-[teal]">
        <Droplets size={32} />
      </div>
      <section className="pt-16 pb-24 bg-white/30  bg-gradient-to-b from-[#0c74ad] vi-[#0ea5e9]/80 to-transparent">
        {" "}
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
              desc: "Pure extracts of 7 traditional herbs. No artificial flavors.",
            },
            {
              icon: <ShieldCheck />,
              title: "Immunity Boost",
              desc: "Infused with Black Cumin seeds, Cardamom and Mace.",
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
                <h3 className="text-xl font-bold mb-2 text-[#13fffd]">
                  {item.title}
                </h3>
                <p className="text-[#034141cf] tracking-wide ">{item.desc}</p>
              </AnimatedScope>
            </AnimatedScope>
          ))}
        </AnimatedScope>
      </section>
    </>
  );
};

export default Home;
