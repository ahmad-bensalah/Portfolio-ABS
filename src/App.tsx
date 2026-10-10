import { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalBackground from "./components/Background";
import BottomNavBar from "./components/BottomNavBar";
import Hero from "./sections/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { usePortfolio } from "./context/PortfolioContext";
import { uiTranslations } from "./data/userData";

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const { lang, theme } = usePortfolio();
  const t = uiTranslations[lang].projects;
  const isLight = theme === "light";

  const [uiType, setUiType] = useState<"landing" | "modular">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("ui-type") as "landing" | "modular") || "landing";
    }
    return "landing";
  });

  const [activeTab, setActiveTab] = useState("home");

  const handleUiToggle = (type: "landing" | "modular") => {
    setUiType(type);
    localStorage.setItem("ui-type", type);
  };

  const renderModularUI = () => {
    switch (activeTab) {
      case "home": return <Hero uiType={uiType} onTabChange={setActiveTab} />;
      case "about": return <About />;
      case "skills": return <Skills />;
      case "projects": return <Projects />;
      case "contact": return <Contact />;
      default: return <Hero uiType={uiType} onTabChange={setActiveTab} />;
    }
  };

  return (
    <div
      className={`w-full min-h-screen relative transition-colors duration-500 ${
        isLight ? "bg-[#f8fafc] text-slate-900" : "bg-[#050505] text-white"
      }`}
    >
      <GlobalBackground />
      <Navbar
        uiType={uiType}
        setUiType={handleUiToggle}
      />

      <main className="w-full">
        {uiType === "landing" ? (
          <Routes>
            <Route path="/" element={
              <>
                <section id="home"><Hero uiType={uiType} onTabChange={setActiveTab} /></section>
                <section id="about"><About /></section>
                <section id="projects"><Projects limit={4} /></section>
                <section id="skills"><Skills /></section>
                <section id="contact"><Contact /></section>
                <BottomNavBar />
              </>
            } />
            <Route path="/projects" element={
              <div>
                <Projects />
                <div className="flex justify-center pb-24">
                  <a
                    href="/"
                    className={`px-8 py-4 rounded-full border font-bold transition-all ${
                      isLight
                        ? "border-slate-300 text-slate-700 hover:bg-slate-100"
                        : "border-white/10 text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {t.backHome}
                  </a>
                </div>
              </div>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        ) : (
          <div>
            {renderModularUI()}
            <BottomNavBar forcedTab={activeTab} setForcedTab={setActiveTab} />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
