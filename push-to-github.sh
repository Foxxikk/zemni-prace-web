#!/usr/bin/env bash
set -e

# Nastaveni - uprav podle sebe
REPO_NAME="zemni-prace-web"
VISIBILITY="private"   # private nebo public

# Prejdi do slozky, kde lezi tento skript
cd "$(dirname "$0")"

# 1) Git a GitHub CLI - nainstaluje, pokud chybi
command -v git >/dev/null 2>&1 || brew install git
command -v gh  >/dev/null 2>&1 || brew install gh

# 2) Prihlaseni ke GitHubu - jen pokud jeste nejsi prihlasen
gh auth status >/dev/null 2>&1 || gh auth login

# 3) Inicializace Gitu a prvni commit
git init -b main
git add .
git commit -m "Initial commit: web zemni a vykopove prace (MVP)"

# 4) Vytvoreni repozitare na GitHubu a nahrani
gh repo create "$REPO_NAME" --"$VISIBILITY" --source=. --remote=origin --push

echo ""
echo "Hotovo! Repozitar je na GitHubu."
gh repo view --web
