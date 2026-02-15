import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // 1. Import Footer
import Alchemy from "./pages/Alchemy/Alchemy";
import Roots from "./pages/Roots/Roots";
import Journal from "./pages/Journal/Journal";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-healer-cream flex flex-col">
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
