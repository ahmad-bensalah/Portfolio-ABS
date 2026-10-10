import projectsRawText from "./projects.txt?raw";

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;       // YouTube or live demo URL (optional)
  featured: boolean;   // explicitly set via "featured: yes" in projects.txt
  category: string;
}

/**
 * Parses projects.txt dynamically so any edit in projects.txt
 * automatically updates the projects across the entire website.
 *
 * Supported fields per [PROJECT] block:
 *   category : DevOps | MLOps | Cloud & IaC | Data & Software
 *   featured : yes | no
 *   tech     : comma-separated list
 *   github   : GitHub URL (leave empty if none)
 *   demo     : YouTube / live demo URL (leave empty if none)
 *   name_en  / desc_en  : English title & description
 *   name_fr  / desc_fr  : French title & description
 */
export function parseProjectsFromText(rawText: string): { en: ProjectItem[]; fr: ProjectItem[] } {
  const enProjects: ProjectItem[] = [];
  const frProjects: ProjectItem[] = [];

  const blocks = rawText.split(/\[PROJECT\]/i).slice(1);

  for (const block of blocks) {
    const lines = block.split("\n");
    let category = "DevOps";
    let featured = false;
    let tech: string[] = [];
    let github = "";
    let demo = "";
    let name_en = "";
    let desc_en = "";
    let name_fr = "";
    let desc_fr = "";

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;

      const colonIndex = line.indexOf(":");
      if (colonIndex === -1) continue;

      const key = line.slice(0, colonIndex).trim().toLowerCase();
      const value = line.slice(colonIndex + 1).trim();

      switch (key) {
        case "category":
          category = value;
          break;
        case "featured":
          featured = value.toLowerCase() === "yes";
          break;
        case "tech":
          tech = value.split(",").map((t) => t.trim()).filter(Boolean);
          break;
        case "github":
          github = value;
          break;
        case "demo":
          demo = value;
          break;
        case "name_en":
          name_en = value;
          break;
        case "desc_en":
          desc_en = value;
          break;
        case "name_fr":
          name_fr = value;
          break;
        case "desc_fr":
          desc_fr = value;
          break;
      }
    }

    if (name_en || name_fr) {
      enProjects.push({
        name: name_en || name_fr,
        description: desc_en || desc_fr,
        tech,
        github,
        ...(demo ? { demo } : {}),
        featured,
        category,
      });

      frProjects.push({
        name: name_fr || name_en,
        description: desc_fr || desc_en,
        tech,
        github,
        ...(demo ? { demo } : {}),
        featured,
        category,
      });
    }
  }

  return { en: enProjects, fr: frProjects };
}

export const parsedProjects = parseProjectsFromText(projectsRawText);
