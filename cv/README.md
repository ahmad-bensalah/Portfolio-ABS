# 📄 Ahmad Bensalah - CV Files

This directory contains LaTeX source files for Ahmad Bensalah's professional CVs in both French and English.

---

## 📁 Files

| File | Description |
|------|-------------|
| `CV_Ahmad_Bensalah_FR.tex` | French CV source (LaTeX) |
| `CV_Ahmad_Bensalah_EN.tex` | English CV source (LaTeX) |

---

## 🔧 How to Compile

### Prerequisites

You need a LaTeX distribution installed:

**Ubuntu/Debian:**
```bash
sudo apt-get install texlive-latex-extra texlive-fonts-recommended
```

**macOS (with Homebrew):**
```bash
brew install --cask mactex
```

**Windows:**
- Download and install [MiKTeX](https://miktex.org/download) or [TeX Live](https://www.tug.org/texlive/)

---

### Compilation Commands

**French CV:**
```bash
cd cv/
pdflatex CV_Ahmad_Bensalah_FR.tex
pdflatex CV_Ahmad_Bensalah_FR.tex  # Run twice for references
```

**English CV:**
```bash
cd cv/
pdflatex CV_Ahmad_Bensalah_EN.tex
pdflatex CV_Ahmad_Bensalah_EN.tex  # Run twice for references
```

**Output:** PDF files will be generated in the same directory.

---

### Using Overleaf (Online)

If you prefer an online editor:

1. Go to [Overleaf.com](https://www.overleaf.com)
2. Create a new project → Upload Project
3. Upload the `.tex` file
4. Click **Recompile** to generate PDF
5. Download the PDF

---

## 📝 Customization

### Update Personal Information

Edit the header section in each `.tex` file:

```latex
\name{Ahmad}{Bensalah}
\title{DevOps \& Platform Engineering}
\phone[mobile]{+216~XX~XXX~XXX}  % ← Update phone number
\email{ahmad.bensalah.contact@gmail.com}
\social[linkedin]{ahmad-bensalah}
\social[github]{ahmad-bensalah}
\homepage{portfolio-abs.pages.dev}
```

### Add/Remove Sections

The CV uses `moderncv` package with these main sections:

- `\section{Profil}` or `\section{Profile}` - Profile summary
- `\section{Compétences Techniques}` - Technical skills
- `\section{Projets Phares}` - Featured projects
- `\section{Expérience Professionnelle}` - Work experience
- `\section{Formation}` - Education
- `\section{Publications \& Distinctions}` - Awards
- `\section{Langues}` - Languages

### Change Theme

To change the visual style, modify:

```latex
\moderncvstyle{banking}  % Options: casual, classic, banking, oldstyle, fancy
\moderncvcolor{blue}     % Options: blue, orange, green, red, purple, grey, black
```

---

## 🎨 CV Highlights

### ✅ What's Included

**Profile:**
- DevOps-first positioning
- Focus on infrastructure for data & AI systems
- Linux, Kubernetes, cloud-native automation
- Multi-tenant MLOps platforms
- AI agents for operations automation
- IEEE IECON 2026 author

**Skills (6 Categories):**
1. Cloud & Orchestration (Kubernetes, Docker, Proxmox, Azure, GCP)
2. IaC & CI/CD (Terraform, Ansible, Helm, ArgoCD, GitLab CI)
3. MLOps & Agentic AI (KServe, MLflow, LangChain, LangGraph, n8n)
4. DataOps & Data Engineering (Airflow, Kafka, Iceberg, Hive, Trino)
5. Observability & Security (Prometheus, Grafana, Istio, Kyverno, Vault)
6. Languages & Frameworks (Python, Bash, SQL, Django, Angular, Java)

**Featured Projects:**
1. **KubeOlive MLOps Platform** - Multi-tenant Kubeflow on Proxmox
2. **DevAIPortal** - Conversational IDP with LLM + Kubernetes
3. **TendOlive RFP Intelligence** - AI-powered tender automation
4. **SignBridge** - Tunisian Sign Language AI translator

**Experience:**
- LAMBDA Lab (DevOps & MLOps Engineer)
- InovareTech (DataOps & DevOps Intern)

---

## 📤 Deploy to Portfolio

After compiling, move the PDFs to the public directory:

```bash
# After compilation, copy to public folder
cp CV_Ahmad_Bensalah_FR.pdf ../public/portf_cv_fr.pdf
cp CV_Ahmad_Bensalah_EN.pdf ../public/portf_cv_en.pdf

# Commit and push
cd ..
git add public/portf_cv_*.pdf cv/
git commit -m "Update CVs with new profile and projects"
git push
```

Cloudflare Pages will automatically deploy the updated CVs.

---

## 🔗 Download Links

Once deployed, your CVs will be available at:

- **French:** `https://portfolio-abs.pages.dev/portf_cv_fr.pdf`
- **English:** `https://portfolio-abs.pages.dev/portf_cv_en.pdf`

---

## 📋 TODO (Optional Enhancements)

- [ ] Add phone number (currently placeholder: +216 XX XXX XXX)
- [ ] Add certifications section (CKA, Terraform Associate)
- [ ] Add more experience details if needed
- [ ] Update with new projects as they're completed

---

## 📞 Contact

**Ahmad Bensalah**  
📧 ahmad.bensalah.contact@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/ahmad-bensalah)  
💻 [GitHub](https://github.com/ahmad-bensalah)  
🌐 [Portfolio](https://portfolio-abs.pages.dev)

---

**Need help?** Check the [moderncv documentation](https://ctan.org/pkg/moderncv) or ask!
