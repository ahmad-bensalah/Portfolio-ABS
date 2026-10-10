import { usePortfolio } from "../context/PortfolioContext";

const GlobalBackground = () => {
  const { theme } = usePortfolio();
  const isLight = theme === "light";

  return (
    <div
      className={`fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-500 ${
        isLight ? "bg-[#f8fafc]" : "bg-[#050505]"
      }`}
    >
      {/* Technical Grid Overlay */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${isLight ? "opacity-[0.04]" : "opacity-[0.03]"}`} 
        style={{ 
          backgroundImage: `linear-gradient(to right, ${isLight ? "#000000" : "#ffffff"} 1px, transparent 1px), linear-gradient(to bottom, ${isLight ? "#000000" : "#ffffff"} 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Central Atmosphere Glow */}
      <div
        className={`absolute top-1/2 left-1/2 w-[60%] h-[60%] blur-[120px] rounded-full animate-pulse-slow transition-colors duration-500 ${
          isLight ? "bg-blue-400/20" : "bg-blue-600/15"
        }`}
      />
      
      {/* Radial Vignette */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isLight
            ? "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-100/40 to-slate-200/80 opacity-60"
            : "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black opacity-90"
        }`}
      />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default GlobalBackground;
