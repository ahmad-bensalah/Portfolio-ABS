import { useState, useEffect } from "react";
import { Terminal, Code2 } from "lucide-react";

type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
  uiType?: "landing" | "modular";
  setUiType?: (v: "landing" | "modular") => void;
};

const Navbar = ({ terminalMode, setTerminalMode, uiType, setUiType }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${terminalMode ? "py-0" : scrolled ? "py-3" : "py-4"}`}
    >
      <div className={`mx-auto transition-all duration-500 ${terminalMode ? "max-w-full px-0 mt-2" : "max-w-7xl px-2 sm:px-4 lg:px-6"}`}>
        <div
          className={`relative flex items-center justify-between px-2 sm:px-4 transition-all duration-500 ${terminalMode
            ? "bg-black text-green-400 border-b border-green-500/30 rounded-none py-2"
            : `py-3 rounded-2xl border ${scrolled
              ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl"
              : "bg-transparent border-transparent"
            }`
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => { if (terminalMode) e.preventDefault(); }}
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded-xl border transition-all duration-300 ${terminalMode ? "border-green-500/50 bg-green-500/10" : "border-white/10 bg-white/5 group-hover:border-blue-500/50"}`}>
              {terminalMode ? (
                <Terminal size={22} className="text-green-500" />
              ) : (
                <Code2 size={22} className="text-blue-500" />
              )}
            </div>
            <div className="relative">
              <span className="font-black text-2xl tracking-tighter text-white flex items-baseline">
                AB<span className={`transition-colors ${terminalMode ? "text-zinc-500 group-hover:text-green-500" : "text-zinc-500 group-hover:text-blue-500"}`}>ensalah</span>
              </span>
              <div className={`absolute -bottom-0.5 left-0 h-1 rounded-full transition-all duration-300 w-0 group-hover:w-full ${terminalMode ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"}`} />
            </div>
          </a>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTerminalMode(!terminalMode)}
              className={`p-2 rounded-xl border transition-all duration-300 ${terminalMode
                ? "border-green-500/50 bg-green-500/20 text-green-400"
                : "border-white/5 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20"
              }`}
              title="Toggle Terminal"
            >
              <Terminal size={22} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
