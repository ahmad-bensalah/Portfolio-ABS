"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Star } from "lucide-react";
import clsx from "clsx";
import { projectDataByLang, uiTranslations } from "../data/userData";
import { usePortfolio } from "../context/PortfolioContext";

const Projects = ({ limit }: { limit?: number }) => {
  const [activeCategory, setActiveCategory] = useState("featured");
  const { lang, theme } = usePortfolio();
  const projectData = projectDataByLang[lang];
  const t = uiTranslations[lang].projects;
  const isLight = theme === "light";

  // Categories extracted from projects: ["DevOps", "MLOps", "Data & Software"]
  const projectCategories = Array.from(new Set(projectData.map((p) => p.category)));

  // Filter projects based on active tab:
  // "featured": projects marked with featured: yes in projects.txt
  // "all": all projects
  // specific category: projects matching category
  const filteredProjects = projectData.filter((p) => {
    if (activeCategory === "featured") {
      return p.featured === true;
    }
    if (activeCategory === "all") {
      return true;
    }
    return p.category === activeCategory;
  });

  // Display projects (in featured and all we display all matching without limit)
  const displayProjects =
    activeCategory === "featured" || activeCategory === "all" || !limit
      ? filteredProjects
      : filteredProjects.slice(0, limit);

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen relative z-10 scroll-mt-32">
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

        {/* Category Filter: Featured (first with star) -> Specific categories -> All (last) */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {/* 1. Featured (first tab with star icon) */}
          <button
            onClick={() => setActiveCategory("featured")}
            className={clsx(
              "px-5 py-2 rounded-full text-sm font-black transition-all duration-300 uppercase tracking-widest border inline-flex items-center gap-2",
              activeCategory === "featured"
                ? isLight
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-black border-white"
                : isLight
                ? "text-slate-600 border-slate-200 bg-white/70 hover:border-blue-400 hover:text-blue-600"
                : "text-zinc-500 border-white/10 hover:border-blue-500/50 hover:text-white"
            )}
          >
            <Star
              size={15}
              className={clsx(
                activeCategory === "featured"
                  ? isLight
                    ? "text-amber-400 fill-amber-400"
                    : "text-amber-500 fill-amber-500"
                  : "text-amber-400 fill-amber-400/40"
              )}
            />
            {t.featuredCategory}
          </button>

          {/* 2. Specific Categories */}
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-6 py-2 rounded-full text-sm font-black transition-all duration-300 uppercase tracking-widest border",
                activeCategory === cat
                  ? isLight
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-white text-black border-white"
                  : isLight
                  ? "text-slate-600 border-slate-200 bg-white/70 hover:border-blue-400 hover:text-blue-600"
                  : "text-zinc-500 border-white/10 hover:border-blue-500/50 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}

          {/* 3. All (last tab) */}
          <button
            onClick={() => setActiveCategory("all")}
            className={clsx(
              "px-6 py-2 rounded-full text-sm font-black transition-all duration-300 uppercase tracking-widest border",
              activeCategory === "all"
                ? isLight
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-black border-white"
                : isLight
                ? "text-slate-600 border-slate-200 bg-white/70 hover:border-blue-400 hover:text-blue-600"
                : "text-zinc-500 border-white/10 hover:border-blue-500/50 hover:text-white"
            )}
          >
            {t.allCategory}
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 md:grid-cols-2 max-w-6xl mx-auto sm:px-0">
          {displayProjects.map((project) => {
            const isFeatured = project.featured === true;

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className={`rounded-3xl p-6 border transition-all duration-500 text-left flex flex-col h-full group relative ${
                  isLight
                    ? "border-slate-200 bg-white/75 hover:bg-white hover:border-blue-400 shadow-sm hover:shadow-md"
                    : "border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3
                    className={`text-2xl font-bold transition-colors ${
                      isLight
                        ? "text-slate-900 group-hover:text-blue-600"
                        : "text-white group-hover:text-blue-500"
                    }`}
                  >
                    {project.name}
                  </h3>
                  {isFeatured && (
                    <span
                      title="Featured Project"
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shrink-0 border ${
                        isLight
                          ? "bg-amber-50 text-amber-700 border-amber-200/80"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      }`}
                    >
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      {t.featuredCategory}
                    </span>
                  )}
                </div>

                <p
                  className={`text-base mb-6 flex-grow leading-relaxed ${
                    isLight ? "text-slate-600" : "text-zinc-400"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 text-xs mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-lg font-semibold tracking-tight border ${
                        isLight
                          ? "bg-slate-100 border-slate-200 text-slate-700"
                          : "bg-white/5 border border-white/10 text-zinc-300"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className={`flex items-center justify-between mt-auto pt-4 border-t ${
                    isLight ? "border-slate-100" : "border-white/5"
                  }`}
                >
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm transition-colors font-bold ${
                        isLight
                          ? "text-slate-600 hover:text-blue-600"
                          : "text-zinc-500 hover:text-white"
                      }`}
                    >
                      <Github size={18} /> {t.sourceCode}
                    </a>
                  ) : (
                    <span />
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-black text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-widest"
                    >
                      {t.liveDemo}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
