import { useEffect, useState } from "react";
import { fetchDataByLang } from "../data/userData";
import { usePortfolio } from "../context/PortfolioContext";

const loadingDots = [".", "..", "...", "...."];

const Neofetch = () => {
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState(0);
  const [showFetch, setShowFetch] = useState(false);
  const { lang, theme } = usePortfolio();
  const fetchData = fetchDataByLang[lang];
  const isLight = theme === "light";

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev + 1) % loadingDots.length);
    }, 300);

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
      clearInterval(dotInterval);
    }, 2000);

    const showDataTimeout = setTimeout(() => {
      setShowFetch(true);
    }, 2300);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(loadingTimeout);
      clearTimeout(showDataTimeout);
    };
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center px-2 sm:px-6 lg:px-8 pt-12 pb-24 min-h-screen">
      <div className="w-full max-w-6xl backdrop-blur-sm rounded-2xl text-center flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <div
            className={`text-lg sm:text-xl mb-6 text-center font-mono animate-pulse ${
              isLight ? "text-slate-800" : "text-zinc-200"
            }`}
          >
            {loading ? `> neofetch${loadingDots[dots]}` : `> neofetch`}
          </div>

          {showFetch && (
            <div
              className={`flex flex-col gap-3 backdrop-blur-md rounded-2xl p-6 sm:p-10 border font-mono text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-xl ${
                isLight
                  ? "border-slate-200 bg-white/80 shadow-slate-200/50"
                  : "border-gray-800 bg-black/40 shadow-black/50"
              }`}
            >
              {fetchData.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center py-2 border-b last:border-none ${
                    isLight ? "border-slate-100" : "border-gray-800"
                  }`}
                >
                  <span
                    className={`font-semibold text-sm sm:text-base ${
                      isLight ? "text-slate-900" : "text-gray-100"
                    }`}
                  >
                    {item.label}:
                  </span>
                  <span
                    className={`text-right font-medium ${
                      isLight ? "text-emerald-600" : "text-green-400"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Neofetch;
