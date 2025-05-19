#!/bin/bash

# Define the base directory for the frontend project (adjust if needed)
BASE_DIR="frontend"

# Create directories for static assets and source code
mkdir -p "$BASE_DIR/public"
mkdir -p "$BASE_DIR/src"

# Create directories for reusable components
mkdir -p "$BASE_DIR/src/components/ui" 
mkdir -p "$BASE_DIR/src/components/layout" 
mkdir -p "$BASE_DIR/src/components/cards" 
mkdir -p "$BASE_DIR/src/components/tables" 

# Create the app directory with nested pages for the new Next.js app router
mkdir -p "$BASE_DIR/src/app"

# Create nested directories under app for individual pages
for page in "about" "donate" "children" "privacy" "terms" "contact" "blog"; do
  mkdir -p "$BASE_DIR/src/app/$page"
done

# Create nested directories under app for dashboard pages
mkdir -p "$BASE_DIR/src/app/dashboard"
for page in "donations" "children" "messages" "settings"; do
  mkdir -p "$BASE_DIR/src/app/dashboard/$page"
done

# Create nested directories under app for admin pages
mkdir -p "$BASE_DIR/src/app/admin"
for page in "users" "children" "transactions" "security"; do
  mkdir -p "$BASE_DIR/src/app/admin/$page"
done

# Create directories for custom hooks, context, services, utils, styles, types, and config
mkdir -p "$BASE_DIR/src/hooks"
mkdir -p "$BASE_DIR/src/context"
mkdir -p "$BASE_DIR/src/services"
mkdir -p "$BASE_DIR/src/utils"
mkdir -p "$BASE_DIR/src/styles"
mkdir -p "$BASE_DIR/src/types"
mkdir -p "$BASE_DIR/src/config"

# Create Next.js pages in the app folder

# Root page
touch "$BASE_DIR/src/app/page.tsx"

# Other public pages
touch "$BASE_DIR/src/app/about/page.tsx"
touch "$BASE_DIR/src/app/donate/page.tsx"
touch "$BASE_DIR/src/app/children/page.tsx"
touch "$BASE_DIR/src/app/privacy/page.tsx"
touch "$BASE_DIR/src/app/terms/page.tsx"
touch "$BASE_DIR/src/app/contact/page.tsx"
touch "$BASE_DIR/src/app/blog/page.tsx"

# Dashboard pages
touch "$BASE_DIR/src/app/dashboard/page.tsx"
touch "$BASE_DIR/src/app/dashboard/donations/page.tsx"
touch "$BASE_DIR/src/app/dashboard/children/page.tsx"
touch "$BASE_DIR/src/app/dashboard/messages/page.tsx"
touch "$BASE_DIR/src/app/dashboard/settings/page.tsx"

# Admin pages
touch "$BASE_DIR/src/app/admin/page.tsx"
touch "$BASE_DIR/src/app/admin/users/page.tsx"
touch "$BASE_DIR/src/app/admin/children/page.tsx"
touch "$BASE_DIR/src/app/admin/transactions/page.tsx"
touch "$BASE_DIR/src/app/admin/security/page.tsx"

# Create root-level configuration files if they don't exist
touch "$BASE_DIR/.env"
touch "$BASE_DIR/next.config.js"
touch "$BASE_DIR/tsconfig.json"

echo "Frontend directory structure (using app/) created successfully!"
