#!/bin/bash
# Tygar QA Check Script
# Automated quality checks before declaring a project done.
# Run from the project root directory.
#
# Usage: bash scripts/qa-check.sh

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color
BOLD='\033[1m'

PASS=0
FAIL=0
WARN=0

pass() { echo -e "  ${GREEN}PASS${NC} $1"; ((PASS++)); }
fail() { echo -e "  ${RED}FAIL${NC} $1"; ((FAIL++)); }
warn() { echo -e "  ${YELLOW}WARN${NC} $1"; ((WARN++)); }

echo -e "${BOLD}=== Tygar QA Check ===${NC}\n"

# --- Build Check ---
echo -e "${BOLD}Build${NC}"
if npx astro build 2>/dev/null; then
  pass "astro build succeeds"
else
  fail "astro build failed"
fi

# --- Content Checks ---
echo -e "\n${BOLD}Content${NC}"

if [ -f "src/data/content.json" ]; then
  if grep -qi "TODO\|TBD\|PLACEHOLDER\|FIXME" src/data/content.json; then
    fail "content.json contains TODO/TBD/PLACEHOLDER/FIXME"
  else
    pass "content.json has no placeholder text"
  fi
else
  warn "No src/data/content.json found (might use different content structure)"
fi

# --- File Existence Checks ---
echo -e "\n${BOLD}Required Files${NC}"

if [ -f "public/robots.txt" ]; then
  pass "robots.txt exists"
else
  fail "robots.txt missing in public/"
fi

if [ -f "public/favicon.ico" ] || [ -f "public/favicon.svg" ]; then
  pass "Favicon exists"
else
  fail "No favicon found in public/"
fi

# Check for Impressum page
if find src/pages -name "impressum*" 2>/dev/null | grep -q .; then
  pass "Impressum page exists"
else
  fail "Impressum page missing"
fi

# Check for Datenschutz page
if find src/pages -name "datenschutz*" 2>/dev/null | grep -q .; then
  pass "Datenschutz page exists"
else
  fail "Datenschutz page missing"
fi

# Check for 404 page
if find src/pages -name "404*" 2>/dev/null | grep -q .; then
  pass "404 page exists"
else
  fail "Custom 404 page missing"
fi

# --- HTML Quality Checks (on built output) ---
echo -e "\n${BOLD}HTML Quality${NC}"

DIST_DIR="dist"
if [ -d "$DIST_DIR" ]; then
  # Check for images without alt attributes
  MISSING_ALT=$(grep -rn '<img ' "$DIST_DIR" --include="*.html" | grep -v 'alt=' | wc -l | tr -d ' ')
  if [ "$MISSING_ALT" -eq 0 ]; then
    pass "All <img> tags have alt attributes"
  else
    fail "$MISSING_ALT <img> tags missing alt attribute"
  fi

  # Check for external Google Fonts (DSGVO violation)
  EXTERNAL_FONTS=$(grep -rn 'fonts.googleapis.com\|fonts.gstatic.com' "$DIST_DIR" --include="*.html" --include="*.css" | wc -l | tr -d ' ')
  if [ "$EXTERNAL_FONTS" -eq 0 ]; then
    pass "No external Google Fonts CDN (DSGVO compliant)"
  else
    fail "$EXTERNAL_FONTS references to Google Fonts CDN found (DSGVO issue)"
  fi

  # Check for Schema.org structured data
  if grep -rq 'schema.org\|application/ld+json' "$DIST_DIR" --include="*.html"; then
    pass "Schema.org structured data found"
  else
    warn "No Schema.org structured data found"
  fi

  # Check for sitemap
  if [ -f "$DIST_DIR/sitemap-index.xml" ] || [ -f "$DIST_DIR/sitemap.xml" ] || [ -f "$DIST_DIR/sitemap-0.xml" ]; then
    pass "Sitemap exists"
  else
    fail "No sitemap found in build output"
  fi
else
  warn "Build output directory ($DIST_DIR) not found — run build first"
fi

# --- Font Check ---
echo -e "\n${BOLD}Fonts${NC}"

# Check if fonts are loaded locally
if find src -name "@fontsource*" -o -name "fonts" 2>/dev/null | grep -q .; then
  pass "Local font files found"
elif grep -rq "@fontsource" package.json 2>/dev/null; then
  pass "Fontsource packages in dependencies"
else
  warn "Could not verify local font loading"
fi

# --- Summary ---
echo -e "\n${BOLD}=== Results ===${NC}"
echo -e "  ${GREEN}Passed:${NC} $PASS"
echo -e "  ${RED}Failed:${NC} $FAIL"
echo -e "  ${YELLOW}Warnings:${NC} $WARN"

if [ "$FAIL" -gt 0 ]; then
  echo -e "\n${RED}${BOLD}QA CHECK FAILED${NC} — $FAIL issue(s) must be fixed before deploy."
  exit 1
else
  echo -e "\n${GREEN}${BOLD}QA CHECK PASSED${NC}"
  exit 0
fi
