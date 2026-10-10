import { motion } from "framer-motion";
import { contactItems, resume, uiTranslations } from "../data/userData";
import { ArrowUpRight } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const Contact = () => {
  const { lang, theme } = usePortfolio();
  const t = uiTranslations[lang].contact;
  const isLight = theme === "light";

  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-48 min-h-screen relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-medium ${
              isLight ? "text-slate-600" : "text-zinc-500"
            }`}
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT SIDE - MESSAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-4"
          >
            <h3
              className={`text-3xl md:text-5xl font-black leading-tight tracking-tighter ${
                isLight ? "text-slate-900" : "text-white"
              }`}
            >
              {t.heading} <span className="text-blue-600 text-glow">{t.headingHighlight}</span>.
            </h3>

            <p
              className={`text-lg md:text-2xl font-medium max-w-md leading-relaxed ${
                isLight ? "text-slate-600" : "text-zinc-400"
              }`}
            >
              {t.subheading}
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="mailto:ahmad.bensalah.contact@gmail.com"
                className={`px-6 py-3.5 rounded-full font-black text-base transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group ${
                  isLight
                    ? "bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                {t.startConversation}
              </a>
              <a
                href={lang === "fr" ? resume.fr : resume.en}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-black text-base hover:-translate-y-1 transition-all duration-300 border ${
                  isLight
                    ? "border-slate-300 text-slate-800 bg-white/80 hover:bg-slate-100"
                    : "border-white/10 text-white hover:bg-white/5"
                }`}
              >
                {t.resume} <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4 w-full">
            {contactItems.map(({ icon: Icon, label, value, href }, i) => {
              const CardComponent = href ? motion.a : motion.div;

              return (
                <CardComponent
                  key={i}
                  href={href}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className={`group p-5 rounded-3xl border transition-all duration-500 flex items-center gap-5 w-full ${
                    isLight
                      ? "border-slate-200 bg-white/75 hover:bg-white hover:border-blue-400 shadow-sm hover:shadow-md"
                      : "border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04]"
                  }`}
                >
                  <div
                    className={`p-3 rounded-2xl border group-hover:scale-110 transition-transform duration-500 ${
                      isLight
                        ? "bg-slate-100 border-slate-200 text-slate-600"
                        : "bg-white/5 border-white/5 text-zinc-400"
                    }`}
                  >
                    <Icon className="group-hover:text-blue-500 transition-colors" size={20} />
                  </div>

                  <div className="flex-1 flex flex-col items-start text-left">
                    <p
                      className={`font-black uppercase tracking-widest text-[10px] mb-1 ${
                        isLight ? "text-slate-500" : "text-zinc-500"
                      }`}
                    >
                      {label}
                    </p>
                    <p
                      className={`text-base font-bold transition-colors truncate w-full ${
                        isLight
                          ? "text-slate-900 group-hover:text-blue-600"
                          : "text-white group-hover:text-blue-500"
                      }`}
                    >
                      {value}
                    </p>
                  </div>

                  {href && (
                    <div
                      className={`transition-all duration-300 ${
                        isLight ? "text-slate-400 group-hover:text-slate-900" : "text-zinc-600 group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                </CardComponent>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;