import React from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  skills,
  projectDataByLang,
  personalInfoByLang,
  Language,
} from "../data/userData";

export const getCommandData = (
  setTerminalMode: (v: boolean) => void,
  lang: Language = "en"
): Record<string, React.ReactNode> => {
  const personalInfo = personalInfoByLang[lang];
  const projectData = projectDataByLang[lang];

  return {
    whoami: (
      <div className="flex flex-col gap-1">
        <div className="text-green-300 font-bold">{personalInfo.name}</div>
        <div>{personalInfo.role}</div>
        <div>{personalInfo.college}</div>
        <div>{personalInfo.location}</div>
        <br />
        <span>
          Type <strong>help</strong> to see available commands.
        </span>
      </div>
    ),
    about: (
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-4">
          <img
            src={personalInfo.avatarUrl}
            alt={personalInfo.name}
            className="h-32 w-30 rounded-full border border-green-500"
          />
          <div className="flex flex-col gap-1">
            <div className="text-lg font-bold">{personalInfo.name}</div>
            <div className="text-sm text-green-300">{personalInfo.role}</div>
            <div className="text-sm text-zinc-400">{personalInfo.college}</div>
            <div className="text-sm text-zinc-400">{personalInfo.location}</div>
            <div className="text-sm text-zinc-400">ahmad.bensalah.contact@gmail.com</div>
            <div className="text-sm text-zinc-400">github.com/ahmad-bensalah</div>
            <div className="text-sm text-zinc-400">linkedin.com/in/ahmed-bensalah-fss</div>
          </div>
        </div>
        <div className="text-sm leading-relaxed max-w-2xl">
          {personalInfo.aboutText1}
        </div>
      </div>
    ),
    projects: (
      <>
        <div className="grid gap-4 md:grid-cols-2 max-w-6xl mx-auto">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="rounded-xl p-6 bg-white/20 dark:bg-black/30 shadow-xs border border-gray-300 dark:border-gray-800 text-left transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description || "No description provided."}
              </p>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-muted border border-gray-400 dark:border-gray-600 px-2 py-1 rounded-full text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:underline"
                  >
                    <Github size={16} /> Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    ),
    skills: (
      <div className="flex flex-col gap-4">
        <div>
          🚀 <span className="font-semibold">Skills:</span>
        </div>
        {skills.map((categoryGroup, index) => (
          <div key={index} className="pl-2 border-l-2 border-gray-600">
            <div className="text-primary font-bold mb-3">{categoryGroup.category}</div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-accent">
              {categoryGroup.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="p-1 rounded-md bg-white/20 dark:bg-black/30 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={`w-4 h-4 object-contain ${item.invertDark ? "dark:invert" : ""}`}
                    />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
    contact: (
      <div className="flex flex-col gap-2">
        <div>📧 ahmad.bensalah.contact@gmail.com</div>
        <div>🐙 github.com/ahmad-bensalah</div>
        <div>💼 linkedin.com/in/ahmed-bensalah-fss</div>
        <div>📍 {personalInfo.location}</div>
      </div>
    ),
    help: (
      <>
        🧠 Available commands:
        <ul className="list-disc ml-4 font-bold">
          <li>whoami</li>
          <li>about</li>
          <li>projects</li>
          <li>skills</li>
          <li>contact</li>
          <li>themes list / themes set &lt;name&gt;</li>
          <li>glow on/off</li>
          <li
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => setTerminalMode(false)}
          >
            gui
          </li>
          <li>clear</li>
          <li>help</li>
        </ul>
      </>
    ),
  };
};
