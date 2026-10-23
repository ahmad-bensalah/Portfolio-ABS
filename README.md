# 🚀 Ahmad Bensalah - DevOps Portfolio

> Infrastructure engineer building the platforms that power data and AI systems.

[![Live Portfolio](https://img.shields.io/badge/Portfolio-Live-success?style=for-the-badge)](https://ahmad-bensalah.pages.dev)
[![GitHub](https://img.shields.io/badge/GitHub-ahmad--bensalah-blue?style=for-the-badge&logo=github)](https://github.com/ahmad-bensalah)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ahmad-bensalah)

---

## ✨ Features

- 🌐 **Bilingual** (English/French) with seamless switching
- 🌗 **Dark/Light mode** with theme persistence
- 📱 **Fully responsive** design for all devices
- ⚡ **Blazing fast** - built with Vite + React + TypeScript
- 🎨 **Modern UI** with Framer Motion animations
- 🔍 **SEO optimized** for Google rankings
- 💼 **4 featured projects** with detailed descriptions
- 📄 **Downloadable CVs** in both languages
- 🖥️ **Terminal mode** with interactive commands

---

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ ([Download](https://nodejs.org/))

### Installation

```bash
# Clone the repository
git clone https://github.com/ahmad-bensalah/Portfolio-ABS.git
cd Portfolio-ABS

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
# Output: dist/ folder ready for deployment
```

---

## 📂 Project Structure

```
Portfolio-ABS/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Main pages (Home, Projects, Skills, etc.)
│   ├── data/
│   │   ├── projects.txt   # All projects (single source of truth)
│   │   ├── parseProjects.ts  # Projects parser
│   │   └── userData.ts    # Personal info, skills, experience
│   ├── terminal/          # Terminal mode implementation
│   └── context/           # React context (language, theme)
│
├── public/
│   ├── portf_cv_fr.pdf    # French CV
│   ├── portf_cv_en.pdf    # English CV
│   ├── sitemap.xml        # SEO sitemap
│   ├── robots.txt         # Crawler rules
│   └── assets/            # Images, logos, icons
│
├── cv/                    # LaTeX CV source files
│   ├── CV_Ahmad_Bensalah_FR.tex
│   ├── CV_Ahmad_Bensalah_EN.tex
│   └── README.md          # CV compilation guide
│
├── docs/                  # 📚 Documentation
│   ├── seo/               # SEO guides & strategy
│   ├── deployment/        # Deployment guides
│   └── guides/            # Quick start & tutorials
│
└── scripts/               # Utility scripts
```

---

## ⚙️ Customization

### Edit Projects

All projects are managed in **`src/data/projects.txt`**:

```text
[PROJECT]
category: DevOps & Cloud
featured: yes
tech: Kubernetes, Terraform, Ansible
github: https://github.com/ahmad-bensalah/project-name
demo: https://demo-url.com
name_en: Project Name
desc_en: Project description in English
name_fr: Nom du Projet
desc_fr: Description du projet en français
```

- Set `featured: yes` to highlight projects with ⭐ badge
- Changes auto-reflect across the entire site

### Update Personal Info

Edit **`src/data/userData.ts`** to update:
- Personal information (name, email, phone, socials)
- Skills & tech stack
- Experience & education
- About section

### Replace CVs

Update CV files in `/cv/` directory:

```bash
cd cv/
./compile.sh  # Compiles .tex files to PDF
```

Or manually replace files in `/public/`:
- `portf_cv_fr.pdf` (French)
- `portf_cv_en.pdf` (English)

---

## 📚 Documentation

**Comprehensive documentation is available in the [`docs/`](docs/) folder:**

| Documentation | Description |
|---------------|-------------|
| **[Project Summary](docs/PROJECT-SUMMARY.md)** | Complete overview & status |
| **[Quick Start Guide](docs/guides/QUICK-START.md)** | Detailed setup instructions |
| **[Deployment Guide](docs/deployment/DEPLOYMENT.md)** | Cloudflare Pages deployment |
| **[SEO Checklist](docs/seo/SEO-CHECKLIST.md)** | SEO optimization tasks |
| **[Acceleration Plan](docs/seo/ACCELERATION-PLAN.md)** | Strategy to rank #1 on Google |
| **[CV Documentation](cv/README.md)** | CV compilation & customization |

**📖 [Browse all documentation →](docs/)**

---

## 🛠️ Tech Stack

- **Framework:** React + TypeScript + Vite
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Cloudflare Pages
- **CV:** LaTeX (ModernCV)

---

## 🌐 Live Demo

**Portfolio:** [https://ahmad-bensalah.pages.dev](https://ahmad-bensalah.pages.dev)

**CVs:**
- 🇫🇷 [French CV](https://ahmad-bensalah.pages.dev/portf_cv_fr.pdf)
- 🇬🇧 [English CV](https://ahmad-bensalah.pages.dev/portf_cv_en.pdf)

---

## 📞 Contact

**Ahmad Bensalah**  
📧 ahmad.bensalah.contact@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/ahmad-bensalah)  
💻 [GitHub](https://github.com/ahmad-bensalah)  
🌐 [Portfolio](https://ahmad-bensalah.pages.dev)

📍 Seeking **6-month PFE internship** starting **February 2027**  
💼 **DevOps • Platform Engineering • MLOps**

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by Ahmad Bensalah**
