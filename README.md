# JIT ACM Official Website

Official website for the JIT ACM Student Chapter, built with React, Next.js, TypeScript, Tailwind CSS, and modern animation/3D libraries.

## Overview

This project powers the chapter website experience, including:

- Animated landing page and hero section
- About, gallery, events, sponsors, testimonials, team, and contact sections
- Event flow pages (details, registration, and ticket generation)
- Blog listing and blog detail page support

The application uses a Next.js page-based structure under `src/pages` and reusable UI sections under `src/components`.

## Tech Stack

- Framework: Next.js 16
- UI: React 19 + TypeScript
- Styling: Tailwind CSS + PostCSS
- Animation: Framer Motion, GSAP
- 3D/visual: Three.js, React Three Fiber, Drei, Spline
- Utilities: `qrcode.react`, `html2canvas`, `lucide-react`
- Linting: ESLint

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Available Scripts

- `npm run dev`: Start Next.js in development mode
- `npm run build`: Build production assets
- `npm run start`: Start production server
- `npm run lint`: Run ESLint checks

## Project Structure

```text
.
|- public/                  # Static assets (images, event media, sponsors)
|- src/
|  |- components/           # Reusable sections and UI building blocks
|  |- pages/                # Next.js pages/routes
|  |- styles/               # Fonts and additional styles
|  |- types/                # Type declarations
|  |- App.tsx               # Main composed homepage content
|  |- index.css             # Global styles
|- next.config.js           # Next.js configuration
|- tailwind.config.js       # Tailwind config
|- postcss.config.js        # PostCSS config
|- eslint.config.js         # ESLint setup
```

## Key Routes

- `/` -> Home page
- `/EventDetails?id=<event-id>` -> Event detail page
- `/EventRegistration?id=<event-id>` -> Event registration form
- `/EventTicket?id=<event-id>` -> Generated ticket view
- `/BlogPage?id=<blog-id>` -> Blog detail page

## Notes for Developers

- Route files are currently named with uppercase initials (for example `EventDetails.tsx`), so route paths are case-sensitive and should be linked exactly as defined.
- The repository still includes Vite entry/config files (`vite.config.ts`, `src/main.tsx`) from earlier setup, but npm scripts are configured for Next.js.

## Contributing

1. Create a feature branch.
2. Make changes with clear commit messages.
3. Run lint and build checks locally.
4. Open a pull request with a concise description and screenshots for UI changes.

## License

This project is currently marked with the `ISC` license in `package.json`.
