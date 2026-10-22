import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon, Home, Info, FolderKanban, Target, ContactRound } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";
import { uiTranslations } from "../data/userData";

type Props = {
  uiType?: "landing" | "modular";
  setUiType?: (v: "landing" | "modular") => void;
};

// SVG for France Flag
const FranceFlag = () => (
  <svg
    className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs shrink-0"
    viewBox="0 0 640 480"
    aria-hidden="true"
  >
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#00267f" d="M0 0h213.3v480H0z" />
      <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
    </g>
  </svg>
);

// SVG for UK (Union Jack) Flag
const UKFlag = () => (
  <svg
    className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs shrink-0"
    viewBox="0 0 60 30"
    aria-hidden="true"
  >
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath="url(#t)"
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const Navbar = ({}: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { lang, toggleLang, theme, toggleTheme } = usePortfolio();
  const t = uiTranslations[lang].nav;
  const isLight = theme === "light";

  const navItems = [
    { name: t.home, id: "home", icon: Home },
    { name: t.about, id: "about", icon: Info },
    { name: t.projects, id: "projects", icon: FolderKanban },
    { name: t.skills, id: "skills", icon: Target },
    { name: t.contact, id: "contact", icon: ContactRound },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="mx-auto transition-all duration-500 max-w-7xl px-2 sm:px-4 lg:px-6">
        <div
          className={`relative flex items-center justify-between px-3 sm:px-5 transition-all duration-500 py-3 rounded-2xl border ${
            scrolled
              ? isLight
                ? "bg-white/85 backdrop-blur-xl border-slate-200/80 shadow-lg text-slate-900"
                : "bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl text-white"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center group py-1">
            <div className="relative">
              <span
                className={`font-black text-2xl tracking-tighter flex items-baseline ${
                  isLight ? "text-slate-900" : "text-white"
                }`}
              >
                AB
                <span
                  className={`transition-colors ${
                    isLight
                      ? "text-slate-400 group-hover:text-blue-600"
                      : "text-zinc-500 group-hover:text-blue-500"
                  }`}
                >
                  ensalah
                </span>
              </span>
              <div className="absolute -bottom-0.5 left-0 h-1 rounded-full transition-all duration-300 w-0 group-hover:w-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            </div>
          </a>

          {/* Navigation Links - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = item.id === activeSection;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 group ${
                    isActive
                      ? isLight
                        ? "text-blue-600 bg-blue-100/70"
                        : "text-blue-400 bg-blue-500/15"
                      : isLight
                      ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50/60"
                      : "text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10"
                  }`}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  
                  {/* Animated text that appears only when active */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden whitespace-nowrap"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Tooltip for inactive items */}
                  {!isActive && (
                    <span
                      className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border whitespace-nowrap shadow-md ${
                        isLight
                          ? "bg-white text-slate-800 border-slate-200"
                          : "bg-zinc-800 text-white border-white/5"
                      }`}
                    >
                      {item.name}
                    </span>
                  )}

                  {/* Active Indicator with motion */}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Controls: Language switcher with flags, Dark/White mode toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher with UK & France flags */}
            <button
              onClick={toggleLang}
              className={`h-9 flex items-center justify-center gap-2 px-3 rounded-xl border text-xs font-black tracking-wider transition-all duration-300 active:scale-95 group ${
                isLight
                  ? "border-slate-200 bg-white/80 hover:border-blue-500/50 hover:bg-blue-50/70 hover:text-blue-600 text-slate-800 shadow-sm"
                  : "border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 text-zinc-200 hover:text-blue-400"
              }`}
              title={t.langToggle}
              aria-label={t.langToggle}
            >
              {lang === "en" ? <UKFlag /> : <FranceFlag />}
              <span className={`font-extrabold uppercase text-[12px] transition-colors ${
                isLight ? "group-hover:text-blue-600" : "group-hover:text-blue-400"
              }`}>
                {lang.toUpperCase()}
              </span>
            </button>

            {/* Dark & White (Light) Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`h-9 w-9 flex items-center justify-center rounded-xl border transition-all duration-300 active:scale-95 group ${
                isLight
                  ? "border-slate-200 bg-white/80 hover:border-blue-500/50 hover:bg-blue-50/70 hover:text-blue-600 text-slate-700 shadow-sm"
                  : "border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 text-yellow-400"
              }`}
              title={t.themeToggle}
              aria-label={t.themeToggle}
            >
              {isLight ? (
                <Moon size={20} className="transition-colors group-hover:text-blue-600" />
              ) : (
                <Sun size={20} className="transition-colors group-hover:text-blue-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
