import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { parsedProjects } from "./parseProjects";

export type Language = "en" | "fr";

export interface PersonalInfo {
  name: string;
  alias: string;
  shortAlias: string;
  location: string;
  role: string;
  roles: string[];
  college: string;
  collegeUrl: string;
  avatarUrl: string;
  avatarColorUrl: string;
  status: string;
  aboutText: string;
  aboutText1: string;
  aboutText2: string;
}

export interface FetchDataItem {
  label: string;
  value: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  invertDark?: boolean;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface TimelineItem {
  year: string;
  detail: string;
  more: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;      // YouTube or live demo URL
  featured: boolean;  // set via "featured: yes" in projects.txt
  category: string;
}

export interface UiTranslations {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
    fetch: string;
    terminalToggle: string;
    themeToggle: string;
    langToggle: string;
  };
  hero: {
    status: string;
    selectedWorks: string;
    getInTouch: string;
  };
  about: {
    title: string;
    subtitle: string;
    timelineTitle: string;
    showLess: string;
    readInsight: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    featuredCategory: string;
    allCategory: string;
    viewMore: string;
    backHome: string;
    sourceCode: string;
    liveDemo: string;
  };
  contact: {
    title: string;
    subtitle: string;
    heading: string;
    headingHighlight: string;
    subheading: string;
    startConversation: string;
    resume: string;
  };
}

export const uiTranslations: Record<Language, UiTranslations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      fetch: "Fetch",
      terminalToggle: "Toggle Terminal",
      themeToggle: "Toggle Theme (Dark / Light)",
      langToggle: "Switch to French",
    },
    hero: {
      status: "Open to a 6-month end-of-studies internship · Feb 2027",
      selectedWorks: "Selected Works",
      getInTouch: "Get in Touch",
    },
    about: {
      title: "Who Am I",
      subtitle: "A chronological journey through professional evolution and engineering milestones.",
      timelineTitle: "Timeline",
      showLess: "Show Less",
      readInsight: "Read Insight",
    },
    skills: {
      title: "My Stack",
      subtitle: "A curated selection of technologies I use to build cloud-native platforms, MLOps pipelines and AI agents.",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A collection of my most impactful work, from multi-tenant MLOps platforms to agentic AI for operations.",
      featuredCategory: "Featured",
      allCategory: "All",
      viewMore: "View More Projects",
      backHome: "← Back to Home",
      sourceCode: "Source",
      liveDemo: "Live Demo →",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Looking for a 6-month DevOps, Cloud or MLOps end-of-studies internship starting February 2027. Open to relocation in Europe.",
      heading: "Let’s build",
      headingHighlight: "better",
      subheading: "Open for interesting opportunities or just a meaningful chat.",
      startConversation: "Start a Conversation",
      resume: "Resume",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      fetch: "Infos",
      terminalToggle: "Basculer vers le Terminal",
      themeToggle: "Changer de Thème (Sombre / Clair)",
      langToggle: "Passer en Anglais",
    },
    hero: {
      status: "Recherche un PFE de 6 mois · dès février 2027",
      selectedWorks: "Projets Sélectionnés",
      getInTouch: "Me Contacter",
    },
    about: {
      title: "Qui Suis-Je",
      subtitle: "Un parcours chronologique à travers mon évolution professionnelle et mes réussites d'ingénierie.",
      timelineTitle: "Parcours",
      showLess: "Réduire",
      readInsight: "En savoir plus",
    },
    skills: {
      title: "Technologies & Stack",
      subtitle: "Une sélection de technologies que j'utilise pour concevoir des plateformes cloud-native, des pipelines MLOps et des agents IA.",
    },
    projects: {
      title: "Projets Réalisés",
      subtitle: "Une sélection de mes réalisations marquantes, des plateformes MLOps multi-tenant aux agents IA pour les opérations.",
      featuredCategory: "À la une",
      allCategory: "Tous",
      viewMore: "Voir Plus de Projets",
      backHome: "← Retour à l'accueil",
      sourceCode: "Code Source",
      liveDemo: "Démo en direct →",
    },
    contact: {
      title: "Me Contacter",
      subtitle: "À la recherche d'un stage de fin d'études (PFE) de 6 mois en DevOps, Cloud ou MLOps dès février 2027. Mobilité en Europe.",
      heading: "Créons de",
      headingHighlight: "meilleurs",
      subheading: "À la recherche de défis stimulants ou d'échanges enrichissants.",
      startConversation: "Démarrer une conversation",
      resume: "CV",
    },
  },
};

export const personalInfoByLang: Record<Language, PersonalInfo> = {
  en: {
    name: "Ahmad Bensalah",
    alias: "Ab7",
    shortAlias: "AB",
    location: "Sfax, Tunisia · Open to relocation in Europe",
    role: "DevOps-Focused Data Engineering Student",
    roles: [
      "DevOps Engineer",
      "Platform Engineer",
      "Data Engineering Student",
      "DataOps Builder",
      "MLOps Practitioner",
    ],
    college: "Faculty of Sciences of Sfax",
    collegeUrl: "https://fss.rnu.tn/",
    avatarUrl: "/assets/me-bw.png",
    avatarColorUrl: "/assets/me-color.png",
    status: "Seeking a 6-month internship from Feb 2027",
    aboutText: "DevOps-focused engineering student who builds the infrastructure that data and AI systems run on. Specializing in Linux, Kubernetes, and cloud-native automation. Seeking a 6-month final-year internship (PFE) from February 2027 in France or elsewhere in Europe.",
    aboutText1: "I'm Ahmad Bensalah, a Data Engineering student at the Faculty of Sciences of Sfax, graduating in 2027. My core strength is DevOps — Linux, systems, Kubernetes, and infrastructure automation. I build the platforms and pipelines that enable reliable data processing and AI operations. I design multi-tenant Kubernetes platforms, automate infrastructure with Terraform and Ansible, implement GitOps workflows with ArgoCD, and deploy monitoring stacks with Prometheus and Grafana.",
    aboutText2: "Career priority: 1) DevOps / Platform Engineering, 2) DataOps, 3) MLOps. Outside of internships, my paper “Dual-Core Defense”, a neuro-symbolic generative framework for detecting zero-day hardware vulnerabilities in SoC designs, a neuro-symbolic generative framework for detecting zero-day hardware vulnerabilities in SoC designs, was accepted at IEEE IECON 2026 in Doha. I chair the IEEE Computational Intelligence Society chapter at FSS, won 1st prize at the IEEE WIEACT 4.0 Challenge and 2nd prize at IEEE PESTGM 7.0, and compete in IEEEXtreme and TCPC.",
  },
  fr: {
    name: "Ahmad Bensalah",
    alias: "Ab7",
    shortAlias: "AB",
    location: "Sfax, Tunisie · Mobilité en Europe",
    role: "Élève-ingénieur Data Engineering axé DevOps",
    roles: [
      "Ingénieur DevOps",
      "Ingénieur Plateforme",
      "Étudiant ingénieur Data Engineering",
      "Architecte DataOps",
      "Praticien MLOps",
    ],
    college: "Faculté des Sciences de Sfax",
    collegeUrl: "https://fss.rnu.tn/",
    avatarUrl: "/assets/me-bw.png",
    avatarColorUrl: "/assets/me-color.png",
    status: "Recherche PFE de 6 mois dès février 2027",
    aboutText: "Élève-ingénieur axé DevOps, je construis les infrastructures sur lesquelles reposent les systèmes de données et d'IA. Spécialisé en Linux, Kubernetes et automatisation cloud-native. Recherche un PFE de 6 mois dès février 2027 en France ou ailleurs en Europe.",
    aboutText1: "Je m'appelle Ahmad Bensalah, étudiant ingénieur en Data Engineering à la Faculté des Sciences de Sfax, diplôme 2027. Mon cœur de compétence, c'est le DevOps — Linux, systèmes, Kubernetes et automatisation d'infrastructure. Je construis les plateformes et pipelines qui permettent un traitement de données fiable et des opérations IA robustes. Je conçois des plateformes Kubernetes multi-tenant, j'automatise les infrastructures avec Terraform et Ansible, je mets en place des workflows GitOps avec ArgoCD, et je déploie des stacks de monitoring avec Prometheus et Grafana.",
    aboutText2: "Priorité de carrière : 1) DevOps / Ingénierie de plateforme, 2) DataOps, 3) MLOps. En parallèle de mes stages, mon papier « Dual-Core Defense », un framework génératif neuro-symbolique pour la détection automatisée de vulnérabilités matérielles zero-day dans les SoC, a été accepté à IEEE IECON 2026 à Doha. Je préside le chapitre IEEE Computational Intelligence Society de la FSS, j'ai remporté le 1er prix du IEEE WIEACT 4.0 Challenge et le 2e prix d'IEEE PESTGM 7.0, et je participe à IEEEXtreme et au TCPC.",
  },
};

// backward compatibility
export const personalInfo = personalInfoByLang.en;

export const fetchDataByLang: Record<Language, FetchDataItem[]> = {
  en: [
    { label: "User", value: "ab@fssfax" },
    { label: "OS", value: "Linux x86_64" },
    { label: "Shell", value: "bash" },
    { label: "Role", value: "Data Eng. Student | DevOps, MLOps & Agentic AI" },
    { label: "Education", value: "Eng. Degree in Data Engineering, FSS (2027)" },
    { label: "Location", value: "Sfax, Tunisia · Open to Europe" },
    { label: "Email", value: "ahmad.bensalah.contact@gmail.com" },
    { label: "GitHub", value: "github.com/ahmad-bensalah" },
    { label: "LinkedIn", value: "linkedin.com/in/ahmad-bensalah" },
    { label: "Certs", value: "CKA (in progress), NVIDIA DL" },
    { label: "Languages", value: "Arabic, French (C1), English (B2), German (A2)" },
    { label: "Status", value: "Seeking 6-month internship · Feb 2027" },
  ],
  fr: [
    { label: "Utilisateur", value: "ab@fssfax" },
    { label: "OS", value: "Linux x86_64" },
    { label: "Shell", value: "bash" },
    { label: "Rôle", value: "Étudiant Data Eng. | DevOps, MLOps & IA Agentique" },
    { label: "Formation", value: "Cycle ingénieur Data Engineering, FSS (2027)" },
    { label: "Localisation", value: "Sfax, Tunisie · Mobilité en Europe" },
    { label: "Email", value: "ahmad.bensalah.contact@gmail.com" },
    { label: "GitHub", value: "github.com/ahmad-bensalah" },
    { label: "LinkedIn", value: "linkedin.com/in/ahmad-bensalah" },
    { label: "Certifications", value: "CKA (en préparation), NVIDIA DL" },
    { label: "Langues", value: "Arabe, Français (C1), Anglais (B2), Allemand (A2)" },
    { label: "Statut", value: "Recherche PFE de 6 mois · février 2027" },
  ],
};

export const fetchData = fetchDataByLang.en;

export const skills: SkillCategory[] = [
  {
    category: "Cloud & Orchestration",
    items: [
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      { name: "Apache CloudStack", icon: "https://cdn.simpleicons.org/apachecloudstack" },
      { name: "Proxmox", icon: "https://cdn.simpleicons.org/proxmox" },
      { name: "Longhorn", icon: "https://cdn.simpleicons.org/longhorn" },
      { name: "AWS (EKS)", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", invertDark: true },
      { name: "Azure (AKS)", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
      { name: "GCP (GKE)", icon: "https://cdn.simpleicons.org/googlecloud" },
    ],
  },
  {
    category: "IaC & CI/CD",
    items: [
      { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform" },
      { name: "OpenTofu", icon: "https://cdn.simpleicons.org/opentofu" },
      { name: "Ansible", icon: "https://cdn.simpleicons.org/ansible" },
      { name: "Helm", icon: "https://cdn.simpleicons.org/helm" },
      { name: "ArgoCD", icon: "https://cdn.simpleicons.org/argo" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions" },
      { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins" },
      { name: "GitLab CI", icon: "https://cdn.simpleicons.org/gitlab" },
    ],
  },
  {
    category: "MLOps & Agentic AI",
    items: [
      { name: "Kubeflow", icon: "https://www.kubeflow.org/images/logo.svg" },
      { name: "KServe", icon: "https://avatars.githubusercontent.com/u/83512434?s=280&v=4" },
      { name: "MLflow", icon: "https://cdn.simpleicons.org/mlflow" },
      { name: "LangChain", icon: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/langchain-color.svg" },
      { name: "LangGraph", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/langgraph.png", invertDark: true },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
      { name: "CrewAI", icon: "https://cdn.simpleicons.org/crewai" },
      { name: "MCP", icon: "https://cdn.simpleicons.org/modelcontextprotocol", invertDark: true },
    ],
  },
  {
    category: "DataOps & Data Engineering",
    items: [
      { name: "Airflow", icon: "https://cdn.simpleicons.org/apacheairflow" },
      { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka", invertDark: true },
      { name: "Iceberg", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/apache-iceberg.svg" },
      { name: "Trino", icon: "https://cdn.simpleicons.org/trino" },
      { name: "Superset", icon: "https://cdn.simpleicons.org/apachesuperset" },
      { name: "Hive", icon: "https://cdn.simpleicons.org/apachehive" },
      { name: "Nifi", icon: "https://cdn.simpleicons.org/apachenifi" },
      { name: "MinIO", icon: "https://cdn.simpleicons.org/minio" },
    ],
  },
  {
    category: "Observability, Security & Networking",
    items: [
      { name: "Prometheus", icon: "https://cdn.simpleicons.org/prometheus" },
      { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana" },
      { name: "OpenTelemetry", icon: "https://cdn.simpleicons.org/opentelemetry", invertDark: true },
      { name: "Trivy", icon: "https://cdn.simpleicons.org/trivy" },
      { name: "SonarQube", icon: "https://cdn.simpleicons.org/sonarqubeserver" },
      { name: "Vault", icon: "https://cdn.simpleicons.org/vault" },
      { name: "Kyverno", icon: "https://raw.githubusercontent.com/cncf/artwork/main/projects/kyverno/icon/color/kyverno-icon-color.svg" },
      { name: "Istio", icon: "https://cdn.simpleicons.org/istio" },
    ],
  },
  {
    category: "Languages & Frameworks",
    items: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "Bash", icon: "https://cdn.simpleicons.org/gnubash", invertDark: true },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/sqlitebrowser.png", invertDark: true },
      { name: "Java", icon: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/250px-Java_Logo.svg.png" },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
      { name: "Django", icon: "https://cdn.simpleicons.org/django", invertDark: true },
      { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot" },
      { name: "Angular", icon: "https://cdn.simpleicons.org/angular", invertDark: true },
    ],
  },
];

export const factsByLang: Record<Language, string[]> = {
  en: [
    "Engineering Student",
    "DevOps & MLOps",
    "Agentic AI Builder",
    "Cloud-Native",
    "IEEE IECON26 paper author",
    "IEEE CIS Chair",
    "Competitive Programmer",
    "Open Source",
  ],
  fr: [
    "Élève-Ingénieur",
    "DevOps & MLOps",
    "Concepteur d'IA Agentique",
    "Cloud-Native",
    "Auteur d'un papier IEEE IECON26",
    "Président IEEE CIS",
    "Programmation Compétitive",
    "Open Source",
  ],
};

export const facts = factsByLang.en;

export const timelineByLang: Record<Language, TimelineItem[]> = {
  en: [
    {
      year: "2027",
      detail: "Final year of the Data Engineering engineering degree at FSS, seeking a 6-month end-of-studies internship (PFE) in DevOps, Cloud or MLOps from February 2027.",
      more: "Open to relocation in Europe. Preparing the Certified Kubernetes Administrator (CKA) exam and building agentic AI projects for platform operations: SRE Copilot, an AI DevPortal on GKE and a ChatOps bot on EKS. Competed in IEEEXtreme 20.",
    },
    {
      year: "2026",
      detail: "MLOps & DevOps Intern at OLIVESOFT (Jun – Aug 2026) — designed and deployed a Kubeflow platform on a private cloud to share AI resources across research teams of the LAMBDA lab.",
      more: "Provisioned the cluster on Proxmox with Terraform and Ansible, deployed Kubeflow 1.10 with Longhorn and Istio, and built a FastAPI self-service portal for multi-tenant onboarding with SSO, RBAC, CPU/RAM/GPU quotas and pre-provisioned pipelines.",
    },
    {
      year: "2026",
      detail: "DevOps mission at Diwan FM (Apr 2026) — took part in deploying the Diwan Sport platform on an on-premise datacenter. Paper “Dual-Core Defense” accepted at IEEE IECON 2026, Doha.",
      more: "Handled infrastructure provisioning and CI/CD pipeline automation for the on-premise rollout. The IECON paper presents a neuro-symbolic generative framework for automated detection of zero-day hardware vulnerabilities in SoC designs.",
    },
    {
      year: "2025",
      detail: "DevSecOps Intern at SIFAST (Jul – Aug 2025) — built a fully automated DevSecOps pipeline for Spring Boot applications. Elected Chairman of IEEE CIS FSS (2025 – 2026).",
      more: "Delivered GitOps-based continuous deployment, centralized monitoring, real-time alerting and integrated security scanning. Competed in IEEEXtreme 19.",
    },
    {
      year: "2024",
      detail: "Full-Stack Intern at Orange Djagora Fablab (Jul 2024) — developed a tourist-circuit recommendation web platform using cosine similarity (Angular, Django). Started the Data Engineering engineering cycle at FSS.",
      more: "HR Manager at GDSC FSS and Treasurer of the IEEE FSS Student Branch (2024 – 2025). Competed in TCPC 2024 and IEEEXtreme 18.",
    },
    {
      year: "2022",
      detail: "Baccalaureate in Mathematics with honours (mention Bien), Lycée Mahmoud Megdiche, Sfax. Joined the Integrated Preparatory Cycle at the Faculty of Sciences of Sfax (2022 – 2024).",
      more: "Built a strong foundation in mathematics, physics and computer science fundamentals, and started competitive programming (TCPC 2023).",
    },
  ],
  fr: [
    {
      year: "2027",
      detail: "Dernière année du cycle ingénieur en Data Engineering à la FSS, à la recherche d'un stage de fin d'études (PFE) de 6 mois en DevOps, Cloud ou MLOps dès février 2027.",
      more: "Mobilité en Europe. Préparation de la certification Certified Kubernetes Administrator (CKA) et développement de projets d'IA agentique pour l'exploitation des plateformes : SRE Copilot, DevPortal IA sur GKE et bot ChatOps sur EKS. Participation à IEEEXtreme 20.",
    },
    {
      year: "2026",
      detail: "Stagiaire MLOps & DevOps chez OLIVESOFT (juin – août 2026) — conception et déploiement d'une plateforme Kubeflow sur cloud privé pour mutualiser les ressources IA de plusieurs équipes de recherche de l'unité LAMBDA.",
      more: "Provisionnement du cluster sur Proxmox avec Terraform et Ansible, déploiement de Kubeflow 1.10 avec Longhorn et Istio, et conception d'un portail FastAPI d'onboarding multi-tenant avec SSO, RBAC, quotas CPU/RAM/GPU et pré-provisionnement des pipelines.",
    },
    {
      year: "2026",
      detail: "Mission DevOps chez Diwan FM (avril 2026) — participation au déploiement de la plateforme Diwan Sport sur un datacenter on-premise. Papier « Dual-Core Defense » accepté à IEEE IECON 2026, Doha.",
      more: "Provisionnement de l'infrastructure et automatisation des pipelines CI/CD pour le déploiement on-premise. Le papier IECON présente un framework génératif neuro-symbolique pour la détection automatisée de vulnérabilités matérielles zero-day dans les SoC.",
    },
    {
      year: "2025",
      detail: "Stagiaire DevSecOps chez SIFAST (juil. – août 2025) — mise en place d'un pipeline DevSecOps entièrement automatisé pour des applications Spring Boot. Élu Président d'IEEE CIS FSS (2025 – 2026).",
      more: "GitOps, déploiement continu, supervision centralisée, alertes en temps réel et analyse de sécurité intégrée. Participation à IEEEXtreme 19.",
    },
    {
      year: "2024",
      detail: "Stagiaire Full Stack à Orange Djagora Fablab (juil. 2024) — développement d'une plateforme web de recommandation de circuits touristiques par similarité cosinus (Angular, Django). Entrée au cycle ingénieur en Data Engineering à la FSS.",
      more: "Responsable RH au GDSC FSS et Trésorier de l'IEEE FSS Student Branch (2024 – 2025). Participation au TCPC 2024 et à IEEEXtreme 18.",
    },
    {
      year: "2022",
      detail: "Baccalauréat en Mathématiques, mention Bien, Lycée Mahmoud Megdiche, Sfax. Admission au Cycle Préparatoire Intégré de la Faculté des Sciences de Sfax (2022 – 2024).",
      more: "Acquisition de bases solides en mathématiques, physique et fondamentaux informatiques, et début de la programmation compétitive (TCPC 2023).",
    },
  ],
};

export const timeline = timelineByLang.en;

export const contactItems = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ahmad-bensalah",
    href: "https://github.com/ahmad-bensalah",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ahmad-bensalah",
    href: "https://www.linkedin.com/in/ahmad-bensalah",
    color: "text-blue-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ahmad.bensalah.contact@gmail.com",
    href: "mailto:ahmad.bensalah.contact@gmail.com",
    color: "text-zinc-400",
  },
];

// Project data is sourced entirely from src/data/projects.txt via parseProjects.ts.
// To add, edit, or remove projects, edit projects.txt — no code changes needed.
export const projectDataByLang: Record<Language, ProjectItem[]> = parsedProjects as Record<Language, ProjectItem[]>;

// Legacy alias kept for any file that still imports projectData directly
export const projectData = parsedProjects.en;


export const resume = {
  en: "/portf_cv_en.pdf",
  fr: "/portf_cv_fr.pdf",
};
