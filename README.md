# Aura Digital Studio

Marketing and portfolio site built with React, TanStack Start, TanStack Router, Vite, and Tailwind CSS v4.

## Overview

This project is a multi-page studio website with a polished landing experience for a freelance or agency-style brand. The current implementation includes:

- Home page with hero, about, services, projects, team, testimonials, and contact sections
- Dedicated route pages for `about`, `services`, `projects`, and `contact`
- Shared site layout components for navigation, footer, floating actions, and animated visual elements
- Tailwind CSS v4 styling with custom theme variables and utility layers

## Tech Stack

- React 19
- TypeScript
- TanStack Start
- TanStack Router
- Vite
- Tailwind CSS v4
- Framer Motion
- Radix UI

## Project Structure

```text
src/
  assets/                Static images
  components/
    site/                Marketing site sections and layout
    ui/                  Reusable UI primitives
  hooks/                 Shared React hooks
  lib/                   Static data and utility helpers
  routes/                File-based route entries
  router.tsx             Router setup
  server.ts              Server entry
  start.ts               Client entry
  styles.css             Global Tailwind v4 styles and theme tokens
```

## Routes

- `/` Home page
- `/about` About page
- `/services` Services page
- `/projects` Projects page
- `/contact` Contact page

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` Starts the Vite development server
- `npm run build` Creates a production build
- `npm run build:dev` Builds using development mode
- `npm run preview` Previews the production build locally
- `npm run lint` Runs ESLint
- `npm run format` Runs Prettier across the project

## Styling Notes

Global styles live in [src/styles.css](./src/styles.css). The project uses Tailwind CSS v4 directives such as:

- `@import "tailwindcss"`
- `@source`
- `@theme`
- `@layer`

If your editor shows warnings for Tailwind-specific at-rules, check the workspace settings in [`.vscode/settings.json`](./.vscode/settings.json).

## Customization

Common content updates are concentrated here:

- [src/lib/data.ts](./src/lib/data.ts) for stats, services, projects, testimonials, and other content data
- [src/components/site](./src/components/site) for page sections
- [src/routes](./src/routes) for route-level composition and metadata
- [src/styles.css](./src/styles.css) for brand colors, gradients, typography, and utility classes

## Notes

- The app is configured as a private project.
- The codebase includes a broad set of reusable UI primitives, even if every component is not currently used on the public pages.
