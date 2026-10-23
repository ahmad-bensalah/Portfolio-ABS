# 📘 CV Compilation Quick Guide

## 🚀 Quick Start (3 Steps)

### Step 1: Install LaTeX

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install texlive-latex-extra texlive-fonts-recommended
```

**macOS:**
```bash
brew install --cask mactex
```

**Windows:** Download [MiKTeX](https://miktex.org/download)

---

### Step 2: Compile CVs

```bash
cd cv/
./compile.sh
```

This will:
- ✅ Compile both French and English CVs
- ✅ Generate PDF files
- ✅ Copy PDFs to `public/` directory
- ✅ Clean up temporary files

---

### Step 3: Deploy

```bash
cd ..
git add public/portf_cv_*.pdf
git commit -m "Update CVs"
git push
```

Cloudflare Pages will automatically deploy!

---

## 📝 Manual Compilation (Alternative)

If you prefer to compile manually:

**French CV:**
```bash
cd cv/
pdflatex CV_Ahmad_Bensalah_FR.tex
pdflatex CV_Ahmad_Bensalah_FR.tex  # Run twice for references
```

**English CV:**
```bash
pdflatex CV_Ahmad_Bensalah_EN.tex
pdflatex CV_Ahmad_Bensalah_EN.tex  # Run twice for references
```

---

## 🌐 Online Compilation (No Installation Needed)

### Using Overleaf

1. Go to [Overleaf.com](https://www.overleaf.com)
2. Create account (free)
3. New Project → Upload Project
4. Upload `.tex` file
5. Click **Recompile**
6. Download PDF

---

## 🎨 Customization Tips

### Change Colors

```latex
\moderncvcolor{blue}  % Options: blue, orange, green, red, purple, grey, black
```

### Change Style

```latex
\moderncvstyle{banking}  % Options: casual, classic, banking, oldstyle, fancy
```

### Update Contact Info

```latex
\phone[mobile]{+216~XX~XXX~XXX}  % ← Add your phone number
\email{ahmad.bensalah.contact@gmail.com}
```

### Add/Remove Projects

Edit the `\section{Projets Phares}` section:

```latex
\cventry{2024}{Project Name}{Organization}{}{}{
  Description of the project.
  \newline
  \textbf{Stack:} Tech1 · Tech2 · Tech3
  \newline
  \textbf{GitHub:} \url{https://github.com/...}
}
```

---

## 🐛 Troubleshooting

### Error: `pdflatex: command not found`

**Solution:** LaTeX is not installed. Follow Step 1 above.

---

### Error: `! LaTeX Error: File 'moderncv.cls' not found`

**Solution:** Install additional LaTeX packages:

```bash
# Ubuntu/Debian
sudo apt-get install texlive-latex-extra

# macOS
brew install --cask mactex-no-gui
```

---

### Error: References not showing correctly

**Solution:** Run `pdflatex` **twice** (first pass generates references, second pass includes them).

---

### PDFs look different than expected

**Solution:** Make sure you compiled both passes and cleared old auxiliary files:

```bash
rm -f *.aux *.log *.out
pdflatex CV_Ahmad_Bensalah_FR.tex
pdflatex CV_Ahmad_Bensalah_FR.tex
```

---

## 📤 After Compilation

Your CVs will be available at:

- **French:** `https://portfolio-abs.pages.dev/portf_cv_fr.pdf`
- **English:** `https://portfolio-abs.pages.dev/portf_cv_en.pdf`

Users can download them directly from your portfolio!

---

## ✨ Pro Tips

1. **Always compile twice** - ensures references and formatting are correct
2. **Check the PDF** before deploying - open and review the compiled PDF
3. **Keep source files** - never delete `.tex` files, only auxiliary files (`.aux`, `.log`)
4. **Version control** - commit both `.tex` source and `.pdf` output
5. **Update regularly** - keep CV in sync with portfolio projects

---

## 📞 Need Help?

- **LaTeX errors:** Check [TeX StackExchange](https://tex.stackexchange.com/)
- **ModernCV docs:** [CTAN moderncv](https://ctan.org/pkg/moderncv)
- **General CV tips:** See `README.md` in this directory

---

**Happy compiling! 🎓**
