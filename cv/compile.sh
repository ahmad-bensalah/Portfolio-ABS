#!/bin/bash
# Compile both CVs and move to public directory

set -e

echo "🔧 Compiling Ahmad Bensalah CVs..."
echo ""

# Compile French CV
echo "📄 Compiling French CV..."
pdflatex -interaction=nonstopmode CV_Ahmad_Bensalah_FR.tex > /dev/null 2>&1
pdflatex -interaction=nonstopmode CV_Ahmad_Bensalah_FR.tex > /dev/null 2>&1
echo "✅ French CV compiled: CV_Ahmad_Bensalah_FR.pdf"

# Compile English CV
echo "📄 Compiling English CV..."
pdflatex -interaction=nonstopmode CV_Ahmad_Bensalah_EN.tex > /dev/null 2>&1
pdflatex -interaction=nonstopmode CV_Ahmad_Bensalah_EN.tex > /dev/null 2>&1
echo "✅ English CV compiled: CV_Ahmad_Bensalah_EN.pdf"

# Clean up auxiliary files
echo ""
echo "🧹 Cleaning up auxiliary files..."
rm -f *.aux *.log *.out *.toc

# Copy to public directory
echo ""
echo "📤 Copying PDFs to public directory..."
cp CV_Ahmad_Bensalah_FR.pdf ../public/portf_cv_fr.pdf
cp CV_Ahmad_Bensalah_EN.pdf ../public/portf_cv_en.pdf
echo "✅ CVs copied to public/"

echo ""
echo "✨ Done! CVs are ready for deployment."
echo ""
echo "📋 Next steps:"
echo "  1. Review the PDFs: open cv/CV_Ahmad_Bensalah_*.pdf"
echo "  2. Commit changes: git add public/portf_cv_*.pdf cv/"
echo "  3. Push to deploy: git commit -m 'Update CVs' && git push"
echo ""
