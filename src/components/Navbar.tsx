import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
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
  const { lang, toggleLang, theme, toggleTheme } = usePortfolio();
  const t = uiTranslations[lang].nav;
  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
