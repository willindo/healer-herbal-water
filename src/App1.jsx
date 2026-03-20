import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // 1. Import Footer
import Alchemy from "./pages/Alchemy/Alchemy";
import Roots from "./pages/Roots/Roots1";
import Journal from "./pages/Journal/Journal";
import Profile from "./pages/Profile/Profile3";
import Home from "./pages/Home/Home3";
import Water2 from "./components/Water2";
import HerbJournalOverlay from "./components/HerbJournalOverlay";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen g-healer-cream flex flex-col">
        {/* <Water2 /> */}
        {/* <div
          className="absolute inset-0 transition-colors duration-1000"
          style={{
            background:
              "linear-gradient(180deg, #e0fef2 0%, #7dfcd3 30%, #0ee9a5 70%, #03a169 100%)",
            opacity: 0.9,
          }}
        /> */}
        <main className="flex-grow">
          {" "}
          {/* 2. This ensures footer stays at bottom */}
          <Routes>
            {/* <ScrollToTop /> */}
            <Route path="/" element={<Home />} />
            <Route path="/alchemy" element={<Alchemy />} />
            <Route path="/roots" element={<Roots />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
