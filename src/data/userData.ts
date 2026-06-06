import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export const personalInfo = {
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
};

// removed react-icons
export const fetchData = [
  { label: "User", value: "ab@fssfax" },
  { label: "OS", value: "Linux x86_64" },
  { label: "Shell", value: "bash" },
  { label: "Role", value: "DevOps & MLOps Eng. Student" },
  { label: "Education", value: "Faculty of Sciences of Sfax" },
  { label: "Location", value: "Sfax, Tunisia" },
  { label: "Email", value: "bensalahahmed8603@gmail.com" },
  { label: "GitHub", value: "github.com/ahmad-bensalah" },
  { label: "LinkedIn", value: "linkedin.com/in/ahmed-bensalah-fss" },
  { label: "Certs", value: "CKA, KCNA, NVIDIA DL" },
  { label: "Status", value: "Available for work" },
];

export const skills = [
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

export const facts = [
  "Engineering Student",
  "DevOps Enthusiast",
  "MLOps Builder",
  "Cloud-Native",
  "Linux Enthusiast",
  "IEEE Chairman",
  "Open Source",
];

export const timeline = [
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
];

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
    value: "bensalahahmed8603@gmail.com",
    href: "mailto:bensalahahmed8603@gmail.com",
    color: "text-zinc-400",
  },
];

export const projectData = [
  {
    name: "Automated Big Data Cluster (IaC)",
    description: "Provisioned a 3-node Hadoop 3.3.6 cluster using IaC principles for rapid, reproducible deployment.",
    tech: ["Vagrant", "Ansible", "Hadoop", "IaC"],
    github: "https://github.com/ahmad-bensalah/Hadoop_HA_IaC",
    category: "DevOps",
  },
  {
    name: "Kubernetes CI/CD Pipeline",
    description: "Automated end-to-end deployment with Traefik Ingress and Kyverno admission control for cluster security.",
    tech: ["Jenkins", "Docker", "Traefik", "Kyverno", "ArgoCD"],
    github: "https://github.com/ahmad-bensalah/CI-CD_K8S_Jenkins",
    category: "DevOps",
  },
  {
    name: "Mission Control",
    description: "Built an HPC governance layer for K8s with \"Hot-Enforcement\" policy sync and REST API storage scaling.",
    tech: ["Kubernetes", "FastAPI", "Longhorn", "Python"],
    github: "",
    category: "MLOps",
  },
  {
    name: "SignBridge",
    description: "An AI-driven platform enabling two-way translation between Tunisian Dialect and Tunisian Sign Language.",
    tech: ["BiLSTM", "Mediapipe", "TTS", "STT", "Python"],
    github: "https://github.com/ahmad-bensalah/SignBridge",
    category: "MLOps",
  },
  {
    name: "DevSecOps Pipeline",
    description: "Built a DevSecOps pipeline for K8s using Jenkins, ArgoCD, and SonarQube for automated security scanning.",
    tech: ["Jenkins", "ArgoCD", "SonarQube", "Kubernetes"],
    github: "",
    category: "DevOps",
  },
  {
    name: "Tunisian Agentic RAG",
    description: "An agentic Retrieval-Augmented Generation system built for Tunisian dialect Arabic, enabling context-aware conversational AI.",
    tech: ["RAG", "LLM", "Python", "LangChain"],
    github: "https://github.com/ahmad-bensalah/Tunisian_Agentic_RAG",
    category: "MLOps",
  },
  {
    name: "Recommendation Engine",
    description: "Engineered a recommendation engine using Cosine Similarity with an Angular/Django architecture.",
    tech: ["Django", "Angular", "Python", "Cosine Similarity"],
    github: "",
    category: "Data & Software",
  },
  {
    name: "Smart Leak Detection",
    description: "Developed smart leak detection systems using real-time sensor data monitoring and embedded platforms.",
    tech: ["IoT", "Embedded", "Python", "MQTT"],
    github: "",
    category: "Data & Software",
  },
];

export const resume = {
  en: "/CV_Devops-en.pdf",
  fr: "/CV_Devops-fr.pdf",
};
