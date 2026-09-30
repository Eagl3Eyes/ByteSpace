# ByteSpace New

> **Live demo:** [https://bytespacenew7.vercel.app/](https://bytespacenew7.vercel.app/)

A modern learning & creator platform landing experience built with Next.js and Tailwind CSS. ByteSpace connects students with courses, learning paths, and creators through a bold, high-contrast design system.

## Assessment Scope

| Task | Status | Branch / PR |
| --- | --- | --- |
| Landing page (required) | ✅ Complete | `feature/landing-page` |
| Login & Signup pages (bonus) | ✅ Complete | `feature/login-signup-pages` |

## Features

### Landing page (required)
- **Hero** — animated headline, CTA, floating course cards, blueprint grid background, integrated navbar
- **Logo cloud** — partner/brand logos strip
- **Course catalog** — filterable featured courses grid
- **Learning paths** — six career tracks with category art
- **Showcase** — student & creator highlight sections
- **Creator CTA** — "become an instructor" conversion block with floating ornaments
- **Testimonials** — community feedback carousel
- **Footer** — sitemap links, newsletter form, social links

### Bonus pages
- **Login** — email/password form with social sign-in options
- **Signup** — full-name/email/password registration form
- Both pages share a single reusable `AuthShell` layout component

### Extra pages
- `/courses` — full course catalog with category filters
- `/courses/overview` — course detail page (curriculum, reviews, instructor)
- `/creators` — creator/instructor showcase
- `404` — custom not-found page

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev/) — icons
- `clsx` + `tailwind-merge` — class utilities

## Getting Started

### Prerequisites
- Node.js 20+ and npm

### Installation

```bash
git clone https://github.com/Eagl3Eyes/ByteSpace.git
cd ByteSpace
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

```bash
npm run build
npm run start
```

## Deployment

The site is live on Vercel: [bytespacenew7.vercel.app](https://bytespacenew7.vercel.app/).

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout, fonts, metadata, global filter
│   ├── globals.css           # Tailwind + global styles
│   ├── not-found.tsx         # Custom 404
│   ├── login/page.tsx        # Bonus: login
│   ├── signup/page.tsx       # Bonus: signup
│   ├── courses/              # Course catalog + detail
│   └── creators/             # Creator showcase
├── components/
│   ├── auth/
│   │   └── AuthShell.tsx     # Shared login/signup layout
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/             # Landing page sections
│       ├── Hero.tsx
│       ├── LogoCloud.tsx
│       ├── CourseCatalog.tsx
│       ├── LearningPaths.tsx
│       ├── ShowcaseSections.tsx
│       ├── CreatorCTA.tsx
│       └── Testimonials.tsx
public/
└── assets/                   # Images, logos, ornaments, course art
```

## Routes

| Route | Description |
| --- | --- |
| `/` | Landing page |
| `/login` | Sign in (bonus) |
| `/signup` | Create account (bonus) |
| `/courses` | Course catalog |
| `/courses/overview` | Course detail |
| `/creators` | Creator showcase |

## Git Workflow

- `main` — project scaffold baseline
- `feature/landing-page` — landing page implementation (PR #1)
- `feature/login-signup-pages` — auth pages + shared `AuthShell` component, README (PR #2)

All feature work happens on dedicated branches and is delivered through pull requests.
