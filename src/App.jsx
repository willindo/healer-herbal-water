import React, { useRef } from "react";
import Navbar from "./components/NavbarScroll";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home3";
import Alchemy from "./pages/Alchemy/Alchemy";
import Roots from "./pages/Roots/Roots1";
import Journal from "./pages/Journal/Journal";
import Profile from "./pages/Profile/Profile3";

function App() {
  // 1. Create references for each section
  const homeRef = useRef(null);
  const alchemyRef = useRef(null);
  const rootsRef = useRef(null);
  const journalRef = useRef(null);
  const profileRef = useRef(null);

  // 2. Scroll function
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80, // -80 accounts for navbar height
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen g-healer-cream flex flex-col">
      {/* 3. Pass the scroll function to Navbar */}
      <Navbar
        onNavClick={scrollToSection}
        refs={{ homeRef, alchemyRef, rootsRef, journalRef, profileRef }}
      />

      <main className="flex-grow">
        <section ref={homeRef}>
          <Home />
        </section>
        <section ref={alchemyRef}>
          <Alchemy />
        </section>
        <section ref={rootsRef}>
          <Roots />
        </section>
        <section ref={journalRef}>
          <Journal />
        </section>
        <section ref={profileRef}>
          <Profile />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
