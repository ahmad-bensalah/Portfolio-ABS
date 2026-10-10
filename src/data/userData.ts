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
      status: "Available for work",
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
      subtitle: "A curated selection of technologies I use to build high-performance products.",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A collection of my most impactful work, from cloud-native infrastructure to AI-driven systems.",
      featuredCategory: "Featured",
      allCategory: "All",
      viewMore: "View More Projects",
      backHome: "← Back to Home",
      sourceCode: "Source",
      liveDemo: "Live Demo →",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's build something great together. I'm always open to new opportunities and collaborations.",
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
      status: "Disponible pour de nouvelles opportunités",
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
      subtitle: "Une sélection de technologies que j'utilise pour concevoir des systèmes performants et fiables.",
    },
    projects: {
      title: "Projets Réalisés",
      subtitle: "Une sélection de mes réalisations marquantes, des infrastructures cloud-native aux systèmes basés sur l'IA.",
      featuredCategory: "À la une",
      allCategory: "Tous",
      viewMore: "Voir Plus de Projets",
      backHome: "← Retour à l'accueil",
      sourceCode: "Code Source",
      liveDemo: "Démo en direct →",
    },
    contact: {
      title: "Me Contacter",
      subtitle: "Construisons quelque chose de remarquable ensemble. Ouvert à toutes opportunités et collaborations.",
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
    name: "Ahmed Bensalah",
    alias: "Ab7",
    shortAlias: "AB",
    location: "Sfax, Tunisia",
    role: "DevOps & MLOps Engineering Student",
    roles: [
      "DevOps Engineer",
      "MLOps Enthusiast",
      "Cloud-Native Builder",
      "Linux Enthusiast",
      "Full Stack Developer",
    ],
    college: "Faculty of Sciences of Sfax",
    collegeUrl: "https://fss.rnu.tn/",
    avatarUrl: "/assets/me-bw.png",
    avatarColorUrl: "/assets/me-color.png",
    status: "Available for work",
    aboutText: "Engineering student specializing in Data Engineering and DevOps. Passionate about building high-governance AI infrastructure and DevSecOps pipelines using Kubernetes and IaC.",
    aboutText1: "I'm Ahmed Bensalah, based in Sfax, Tunisia. I'm an engineering student specializing in Data Engineering and DevOps at the Faculty of Sciences of Sfax. I build high-governance AI infrastructure, DevSecOps pipelines, and cloud-native systems. Passionate about Kubernetes, IaC, MLOps, and solving complex computational challenges for social impact.",
    aboutText2: "",
  },
  fr: {
    name: "Ahmed Bensalah",
    alias: "Ab7",
    shortAlias: "AB",
    location: "Sfax, Tunisie",
    role: "Étudiant Ingénieur en DevOps & MLOps",
    roles: [
      "Ingénieur DevOps",
      "Passionné de MLOps",
      "Architecte Cloud-Native",
      "Passionné de Linux",
      "Développeur Full Stack",
    ],
    college: "Faculté des Sciences de Sfax",
    collegeUrl: "https://fss.rnu.tn/",
    avatarUrl: "/assets/me-bw.png",
    avatarColorUrl: "/assets/me-color.png",
    status: "Disponible pour opportunités",
    aboutText: "Élève-ingénieur spécialisé en ingénierie des données et DevOps. Passionné par l'infrastructure IA à haute gouvernance et les pipelines DevSecOps avec Kubernetes et l'IaC.",
    aboutText1: "Je m'appelle Ahmed Bensalah, basé à Sfax, Tunisie. Je suis élève-ingénieur en Génie des Données et DevOps à la Faculté des Sciences de Sfax. Je conçois des infrastructures IA, des pipelines DevSecOps et des architectures cloud-native. Passionné par Kubernetes, l'IaC, le MLOps et la résolution de défis informatiques complexes à fort impact.",
    aboutText2: "",
  },
};

// backward compatibility
export const personalInfo = personalInfoByLang.en;

export const fetchDataByLang: Record<Language, FetchDataItem[]> = {
  en: [
    { label: "User", value: "ab@fssfax" },
    { label: "OS", value: "Linux x86_64" },
    { label: "Shell", value: "bash" },
    { label: "Role", value: "DevOps & MLOps Eng. Student" },
    { label: "Education", value: "Faculty of Sciences of Sfax" },
    { label: "Location", value: "Sfax, Tunisia" },
    { label: "Email", value: "ahmad.bensalah.contact@gmail.com" },
    { label: "GitHub", value: "github.com/ahmad-bensalah" },
    { label: "LinkedIn", value: "linkedin.com/in/ahmed-bensalah-fss" },
    { label: "Certs", value: "CKA, KCNA, NVIDIA DL" },
    { label: "Status", value: "Available for work" },
  ],
  fr: [
    { label: "Utilisateur", value: "ab@fssfax" },
    { label: "OS", value: "Linux x86_64" },
    { label: "Shell", value: "bash" },
    { label: "Rôle", value: "Étudiant Ing. DevOps & MLOps" },
    { label: "Formation", value: "Faculté des Sciences de Sfax" },
    { label: "Localisation", value: "Sfax, Tunisie" },
    { label: "Email", value: "ahmad.bensalah.contact@gmail.com" },
    { label: "GitHub", value: "github.com/ahmad-bensalah" },
    { label: "LinkedIn", value: "linkedin.com/in/ahmed-bensalah-fss" },
    { label: "Certifications", value: "CKA, KCNA, NVIDIA DL" },
    { label: "Statut", value: "Disponible pour opportunités" },
  ],
};

export const fetchData = fetchDataByLang.en;

export const skills: SkillCategory[] = [
  {
    category: "DevOps",
    items: [
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins" },
      { name: "ArgoCD", icon: "https://cdn.simpleicons.org/argo" },
      { name: "Helm", icon: "https://cdn.simpleicons.org/helm" },
      { name: "GitLab", icon: "https://cdn.simpleicons.org/gitlab" },
      { name: "Prometheus", icon: "https://cdn.simpleicons.org/prometheus" },
      { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana" },
    ],
  },
  {
    category: "Cloud & IaC",
    items: [
      { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Azure", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
      { name: "GCP", icon: "https://cdn.simpleicons.org/googlecloud" },
      { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform" },
      { name: "Ansible", icon: "https://cdn.simpleicons.org/ansible", invertDark: true },
      { name: "Vagrant", icon: "https://cdn.simpleicons.org/vagrant" },
      { name: "Proxmox", icon: "https://cdn.simpleicons.org/proxmox" },
      { name: "Traefik", icon: "https://cdn.simpleicons.org/traefikproxy" },
    ],
  },
  {
    category: "MLOps",
    items: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
      { name: "Go", icon: "https://cdn.simpleicons.org/go" },
      { name: "Bash", icon: "https://cdn.simpleicons.org/gnubash", invertDark: true },
      { name: "MLflow", icon: "https://cdn.simpleicons.org/mlflow" },
      { name: "Kubeflow", icon: "https://www.kubeflow.org/images/logo.svg" },
      { name: "DVC", icon: "https://cdn.simpleicons.org/dvc" },
      { name: "KServe", icon: "https://avatars.githubusercontent.com/u/83512434?s=280&v=4" },
    ],
  },
  {
    category: "Data & Software",
    items: [
      { name: "Hadoop", icon: "https://cdn.simpleicons.org/apachehadoop" },
      { name: "Spark", icon: "https://cdn.simpleicons.org/apachespark" },
      { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "Django", icon: "https://cdn.simpleicons.org/django", invertDark: true },
      { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
      { name: "C/C++", icon: "https://cdn.simpleicons.org/cplusplus" },
      { name: "Java", icon: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/250px-Java_Logo.svg.png" },
    ],
  },
];

export const factsByLang: Record<Language, string[]> = {
  en: [
    "Engineering Student",
    "DevOps Enthusiast",
    "MLOps Builder",
    "Cloud-Native",
    "Linux Enthusiast",
    "IEEE Chairman",
    "Open Source",
  ],
  fr: [
    "Élève-Ingénieur",
    "Passionné DevOps",
    "Développeur MLOps",
    "Cloud-Native",
    "Passionné Linux",
    "Président IEEE",
    "Open Source",
  ],
};

export const facts = factsByLang.en;

export const timelineByLang: Record<Language, TimelineItem[]> = {
  en: [
    {
      year: "2026",
      detail: "Focused on mastering advanced tools and preparing for professional opportunities in DevOps and AI infrastructure.",
      more: "Actively building production-level cloud-native projects and seeking roles in DevOps, MLOps, and AI infrastructure engineering.",
    },
    {
      year: "2025",
      detail: "DevSecOps Intern at SIFAST — built a DevSecOps pipeline for K8s using Jenkins, ArgoCD, and SonarQube for automated security scanning.",
      more: "Designed and implemented a full GitOps pipeline with automated security scanning, ArgoCD deployments, and Kyverno policy enforcement on Kubernetes.",
    },
    {
      year: "2025",
      detail: "IoT Intern at WEDETECT — developed smart leak detection systems using real-time sensor data monitoring and embedded platforms.",
      more: "Worked with embedded systems and real-time data streams to build reliable IoT leak detection with sensor integration and alerting pipelines.",
    },
    {
      year: "2024",
      detail: "Chairman, IEEE Computational Intelligence Society (CIS) FSS. Full-Stack Intern at Djagora Fablab — engineered a recommendation engine using Cosine Similarity with Angular/Django.",
      more: "Led IEEE CIS FSS technical initiatives while building production full-stack applications at Djagora Fablab. Gained hands-on experience with recommendation systems and REST APIs.",
    },
    {
      year: "2023",
      detail: "Joined the Data Engineering cycle at FSS. HR Manager at Google Developer Student Club (GDSC) FSS. Participated in IEEEXtreme 17.0.",
      more: "Deepened knowledge in algorithms, data structures, and systems programming. Started building real-world DevOps and cloud-native projects.",
    },
    {
      year: "2022",
      detail: "Enrolled at the Faculty of Sciences of Sfax — Preparatory Cycle in Mathematics and Physics.",
      more: "Built a strong foundation in mathematics, physics, and core CS fundamentals. Began exploring Linux, networking, and programming.",
    },
  ],
  fr: [
    {
      year: "2026",
      detail: "Perfectionnement des compétences avancées et préparation aux opportunités professionnelles en DevOps et infrastructures d'IA.",
      more: "Création active de projets cloud-native de niveau production et recherche de postes stimulants en DevOps, MLOps et ingénierie d'infrastructure IA.",
    },
    {
      year: "2025",
      detail: "Stagiaire DevSecOps chez SIFAST — conception d'un pipeline DevSecOps pour K8s avec Jenkins, ArgoCD et SonarQube pour l'analyse de sécurité automatisée.",
      more: "Mise en place d'un pipeline GitOps complet avec analyses de vulnérabilités automatisées, déploiement continu via ArgoCD et politiques de sécurité Kyverno sur Kubernetes.",
    },
    {
      year: "2025",
      detail: "Stagiaire IoT chez WEDETECT — développement de systèmes intelligents de détection de fuites via la surveillance de données capteurs en temps réel.",
      more: "Travail sur systèmes embarqués et flux de données en direct pour bâtir une solution robuste de détection et d'alerte avec intégration MQTT.",
    },
    {
      year: "2024",
      detail: "Président, IEEE Computational Intelligence Society (CIS) FSS. Stagiaire Full-Stack à Djagora Fablab — développement d'un moteur de recommandation par similarité cosinus avec Angular/Django.",
      more: "Direction des initiatives techniques d'IEEE CIS FSS tout en développant des applications full-stack en production. Expérience approfondie en systèmes de recommandation et API REST.",
    },
    {
      year: "2023",
      detail: "Admis au cycle d'ingénieur en Génie des Données à la FSS. Responsable RH au Google Developer Student Club (GDSC) FSS. Participation à IEEEXtreme 17.0.",
      more: "Consolidation des compétences en algorithmique, structures de données et programmation système. Début de projets concrets en DevOps et cloud-native.",
    },
    {
      year: "2022",
      detail: "Admission à la Faculté des Sciences de Sfax — Cycle Préparatoire Intégré en Mathématiques et Physique.",
      more: "Acquisition de bases solides en mathématiques, physique et fondamentaux informatiques. Découverte approfondie de Linux, réseaux et programmation.",
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
    value: "linkedin.com/in/ahmed-bensalah-fss",
    href: "https://www.linkedin.com/in/ahmed-bensalah-fss",
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
  en: "/CV_Devops-en.pdf",
  fr: "/CV_Devops-fr.pdf",
};
