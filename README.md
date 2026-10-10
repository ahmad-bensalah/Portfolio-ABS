<h1 align="center">Ahmed Bensalah — Portfolio</h1>

<p align="center">
  Personal portfolio of <strong>Ahmed Bensalah</strong>, Data Engineering & DevOps engineer.<br/>
  Bilingual (🇬🇧 EN / 🇫🇷 FR) · Dark & Light mode · Fully responsive
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/Maintained-yes-22c55e?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" />
</p>

---

## ✨ Features

- 🌍 **Bilingual** — seamless English / French language switch with a single click
- 🌗 **Dark / Light mode** — smooth theme transitions with CSS variables
- ⚡ **Framer Motion** — fluid section animations and micro-interactions
- 📄 **CV download** — language-aware (EN PDF / FR PDF)
- 🗂️ **Data-driven projects** — edit [`src/data/projects.txt`](src/data/projects.txt) to update all project cards instantly, no code needed
- ⭐ **Featured badge** — mark projects as featured with `featured: yes`
- 📺 **Demo links** — YouTube icon appears automatically for demo URLs
- 📱 **Fully responsive** — mobile-first layout with bottom nav bar on small screens
- 🎨 **Custom scrollbar** — thin blue accent bar matching the design system

---

## 🗂️ Project Structure

```
portfolio-abs/
├── public/
│   ├── assets/          # Logo, avatar photos
│   ├── icons/           # Favicon & PWA icons
│   ├── CV_Devops-en.pdf # English CV
│   └── CV_Devops-fr.pdf # French CV
├── src/
│   ├── components/      # Navbar, Background, BottomNavBar, ...
│   ├── context/         # PortfolioContext (lang + theme state)
│   ├── data/
│   │   ├── projects.txt # ← Edit this to update project cards
│   │   ├── parseProjects.ts
│   │   └── userData.ts  # Personal info, skills, translations
│   ├── pages/           # About, Projects, Skills, Contact, ...
│   ├── sections/        # Hero section
│   ├── terminal/        # Terminal easter-egg mode
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repo
git clone https://github.com/ahmad-bensalah/Portfolio-ABS.git
cd Portfolio-ABS

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

---

## ✏️ Customising Content

### Update your projects

Open [`src/data/projects.txt`](src/data/projects.txt) and edit, add, or remove `[PROJECT]` blocks:

```ini
[PROJECT]
category: DevOps
featured: yes          # shows a ⭐ badge on the card
tech: Docker, Kubernetes, Python
github: https://github.com/you/your-repo
demo:                  # YouTube link → shows YouTube icon automatically
name_en: My Project
desc_en: Short English description.
name_fr: Mon Projet
desc_fr: Courte description en français.
```

No code changes needed — the site re-reads this file on every build.

### Update personal info & translations

Edit [`src/data/userData.ts`](src/data/userData.ts) — it contains your name, roles, about text, skills, contact links, and all UI translations.

### Swap your CV

Replace the files in `public/`:
- `CV_Devops-en.pdf` — downloaded when language is English
- `CV_Devops-fr.pdf` — downloaded when language is French

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 3 + Vanilla CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Routing | React Router DOM v6 |
| Type animation | react-type-animation |

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/ahmad-bensalah">Ahmed Bensalah</a>
</p>
