#!/bin/bash

# SEO Verification Script for Ahmad Bensalah Portfolio
# Run this after deployment to verify all SEO elements are working

set -e

echo "🔍 SEO Verification Script"
echo "=========================="
echo ""

# Get the domain from user or use default
DOMAIN=${1:-"portfolio-abs-phi.vercel.app"}
BASE_URL="https://$DOMAIN"

echo "📍 Testing domain: $BASE_URL"
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counter
PASSED=0
FAILED=0

# Function to test URL
test_url() {
    local url=$1
    local description=$2
    local expected_code=${3:-200}
    
    echo -n "Testing: $description... "
    
    if curl -s -o /dev/null -w "%{http_code}" "$url" | grep -q "$expected_code"; then
        echo -e "${GREEN}✅ PASSED${NC}"
        ((PASSED++))
    else
        echo -e "${RED}❌ FAILED${NC}"
        ((FAILED++))
    fi
}

# Function to test meta tag
test_meta_tag() {
    local tag=$1
    local description=$2
    
    echo -n "Testing: $description... "
    
    if curl -s "$BASE_URL" | grep -q "$tag"; then
        echo -e "${GREEN}✅ PASSED${NC}"
        ((PASSED++))
    else
        echo -e "${RED}❌ FAILED${NC}"
        ((FAILED++))
    fi
}

echo "🌐 Testing URLs"
echo "-------------"
test_url "$BASE_URL/" "Homepage"
test_url "$BASE_URL/about" "About page"
test_url "$BASE_URL/projects" "Projects page"
test_url "$BASE_URL/skills" "Skills page"
test_url "$BASE_URL/contact" "Contact page"
test_url "$BASE_URL/sitemap.xml" "Sitemap"
test_url "$BASE_URL/robots.txt" "Robots.txt"
test_url "$BASE_URL/CV_Devops-en.pdf" "English CV"
test_url "$BASE_URL/CV_Devops-fr.pdf" "French CV"
echo ""

echo "📝 Testing Meta Tags"
echo "------------------"
test_meta_tag "Ahmad Bensalah | DevOps Engineer" "Title tag"
test_meta_tag "meta name=\"description\"" "Description meta tag"
test_meta_tag "meta name=\"keywords\"" "Keywords meta tag"
test_meta_tag "og:title" "Open Graph title"
test_meta_tag "og:image" "Open Graph image"
test_meta_tag "twitter:card" "Twitter card"
test_meta_tag "application/ld+json" "JSON-LD structured data"
test_meta_tag "google-site-verification" "Google verification"
echo ""

echo "🔒 Testing Security Headers"
echo "-------------------------"
echo -n "Testing: X-Frame-Options... "
if curl -s -I "$BASE_URL" | grep -q "X-Frame-Options"; then
    echo -e "${GREEN}✅ PASSED${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  WARNING${NC} (May not be set on Vercel)"
    ((FAILED++))
fi

echo -n "Testing: Content-Security-Policy... "
if curl -s -I "$BASE_URL" | grep -q "Content-Security-Policy"; then
    echo -e "${GREEN}✅ PASSED${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  WARNING${NC} (May not be set on Vercel)"
    ((FAILED++))
fi
echo ""

echo "📄 Testing SEO Files Content"
echo "--------------------------"
echo -n "Testing: Sitemap has URLs... "
if curl -s "$BASE_URL/sitemap.xml" | grep -q "<url>"; then
    echo -e "${GREEN}✅ PASSED${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ FAILED${NC}"
    ((FAILED++))
fi

echo -n "Testing: Sitemap references robots.txt... "
if curl -s "$BASE_URL/robots.txt" | grep -q "Sitemap:"; then
    echo -e "${GREEN}✅ PASSED${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ FAILED${NC}"
    ((FAILED++))
fi

echo -n "Testing: Robots.txt allows crawling... "
if curl -s "$BASE_URL/robots.txt" | grep -q "Allow: /"; then
    echo -e "${GREEN}✅ PASSED${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ FAILED${NC}"
    ((FAILED++))
fi
echo ""

echo "🎯 Testing JSON-LD Structured Data"
echo "--------------------------------"
echo -n "Testing: Person schema... "
if curl -s "$BASE_URL" | grep -q '"@type": "Person"'; then
    echo -e "${GREEN}✅ PASSED${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ FAILED${NC}"
    ((FAILED++))
fi

echo -n "Testing: WebSite schema... "
if curl -s "$BASE_URL" | grep -q '"@type": "WebSite"'; then
    echo -e "${GREEN}✅ PASSED${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ FAILED${NC}"
    ((FAILED++))
fi
echo ""

# Summary
echo "📊 Summary"
echo "=========="
echo -e "Passed: ${GREEN}$PASSED${NC}"
echo -e "Failed: ${RED}$FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed! Your SEO is looking great!${NC}"
    exit 0
else
    echo -e "${YELLOW}⚠️  Some tests failed. Please review the issues above.${NC}"
    exit 1
fi
