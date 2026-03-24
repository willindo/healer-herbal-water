import React, { useRef } from "react";
import Navbar from "./components/NavbarScroll";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home3";
import Alchemy from "./pages/Alchemy/Alchemy";
import Roots from "./pages/Roots/Roots1";
import Journal from "./pages/Journal/Journal";
import Profile from "./pages/Profile/Profile3";
import { AnimatedScope } from "./components/AnimatedScope";
import {
  MousePointer2,
  Droplets,
  Leaf,
  ShieldCheck,
  Waves,
} from "lucide-react";
function App() {
  // 1. Create references for each section
  const homeRef = useRef(null);
  const alchemyRef = useRef(null);
  const rootsRef = useRef(null);
  // const journalRef = useRef(null);
  const profileRef = useRef(null);

  // 2. Scroll function
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80, // -80 accounts for navbar height
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-creen g-healer-cream flex flex-col">
      {/* 3. Pass the scroll function to Navbar */}
      <Navbar
        onNavClick={scrollToSection}
        refs={{ homeRef, alchemyRef, rootsRef, profileRef }}
      />

      <main className="flex-grow pt-4 ">
        <section ref={homeRef}>
          <Home />
        </section>
        <section className="pt-4 pb-24 bg-gradient-to-b from-[#03a169] to-[#39e8b1]">
          <div className="relative z-30 text-center px-4 py-8 ">
            <p className="max-w-2xl mx-auto text-white text-lg md:text-xl leading-relaxed   bg-black/20 p-4 rounded-lg backdrop-blur-md border border-white/10">
              Experience the purity of <strong>Healer</strong>. A refreshing
              infusion of 7 sacred herbs by <strong>Almaz100 Global</strong>,
              crafted to rejuvenate your body and mind with every conscious sip.
            </p>
          </div>
          <AnimatedScope
            className="max-w-7xl mx-auto pt-4 px-8 grid grid-cols-1 md:grid-cols-3 gap-16 text-center items-center "
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
                title: "Aromatic Shield",
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
        <section ref={alchemyRef}>
          <Alchemy />
        </section>
        <section ref={rootsRef}>
          <Roots />
        </section>
        {/* <section ref={journalRef}>
          <Journal />
        </section> */}
        <section ref={profileRef}>
          <Profile />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
