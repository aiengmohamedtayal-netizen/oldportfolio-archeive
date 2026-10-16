# Mohamed Tayel - AI Developer & Frontend Portfolio (Final Consolidated Edition)

A high-performance, modern, standalone frontend portfolio for **Mohamed Tayel**, consolidating all portfolio iterations into a single, production-ready codebase. Built with **React 18**, **Vite 5**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

The project features a cyber-minimalist glassmorphism interface, interactive cursor lighting, animated particle effects, in-depth architectural case studies, and an accredited digital credentials showcase.

---

## 🚀 Technology Stack

- **Framework:** [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with `@tailwindcss/typography` & `tailwindcss-animate`
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Components:** [Radix UI](https://www.radix-ui.com/) primitives styled via Shadcn UI
- **Icons:** [Lucide React](https://lucide.dev/)
- **State & Data Fetching:** [@tanstack/react-query](https://tanstack.com/query)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/) (Home & Dedicated Deep-Dive Case Studies)
- **Toasts & Feedback:** [Sonner](https://sonner.emilkowal.ski/)

---

## ✨ Key Features & Improvements

1. **Cyber Dark Glassmorphic Design System:**
   - Hand-crafted neon teal & violet aesthetic with blur backdrops, responsive grid overlays, and radial mouse-following highlights.
   - Fully documented in [`designsystem.md`](./designsystem.md).

2. **Full Architectural Case Studies:**
   - Dedicated deep-dive routes (`/project/:id`) exploring system architecture, technical problems, engineered solutions, metrics, and future roadmaps.
   - Interactive 3D tilt cards on the main showcase.

3. **Accredited Credentials & Certificates Gallery:**
   - Comprehensive collection of 25+ verified PDF certificates and professional credentials from **Anthropic** (Claude 101), **edX**, **Udemy**, **Simplilearn**, and **EYouth**.
   - Real-time search by keyword, multi-category filtering (`AI & Machine Learning`, `Web Development`, `Business & Analytics`, `Professional & Other`), live document modal preview, and one-click PDF downloads.

4. **Pure Static Architecture (Zero Backend / Zero Database Overhead):**
   - 100% client-side architecture with zero database or server dependencies.
   - Clean, lightning-fast builds with zero lint errors.

---

## 🎨 Design System

All design tokens, colors, typography, glassmorphism surfaces, and motion patterns are documented in:
👉 **[`designsystem.md`](./designsystem.md)**

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### 2. Installation
Install project dependencies:
```bash
npm install
```

### 3. Start Development Server
Start the Vite local development server:
```bash
npm run dev
```
Open your browser and navigate to:
👉 **`http://localhost:8080/`** (or the port Vite prints in your terminal)

### 4. Build for Production
To generate a production-ready, highly optimized bundle:
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory.

### 5. Preview Production Build
To test the production build locally:
```bash
npm run preview
```

### 6. Linting
To run ESLint code analysis:
```bash
npm run lint
```

---

## 📁 Project Structure

```text
finall portfolio/
├── dist/                # Production build output
├── public/              # Static assets
│   ├── certificates/    # 25 verified PDF certificates
│   ├── CNAME            # Domain routing (tayal.me)
│   ├── favicon.ico
│   └── placeholder.svg
├── src/
│   ├── components/      # UI components (Hero, Projects, Certificates, Experience, Contact, etc.)
│   │   └── ui/          # Radix UI / Shadcn UI components
│   ├── data/            # Structured data (projects.ts with full case study models)
│   ├── hooks/           # Custom React hooks (use-toast, use-mobile)
│   ├── lib/             # Utility functions
│   ├── pages/           # Application views (Index, ProjectCaseStudy, NotFound)
│   ├── App.tsx          # Root routing and providers
│   ├── index.css        # Global CSS variables, glassmorphism & typography
│   └── main.tsx         # Application entry point
├── designsystem.md      # Comprehensive design system documentation
├── MIGRATION_REPORT.md  # Detailed 4-source audit, consolidation, & migration report
├── index.html           # HTML template
├── package.json         # Scripts and dependencies
├── tailwind.config.ts   # Tailwind design tokens & keyframes
└── vite.config.ts       # Vite configuration
```

---

## 🚢 Deployment

Since this application is a pure static frontend, it can be deployed directly to any static web hosting platform:
- **GitHub Pages:** Deploy the generated `dist/` directory (includes custom `CNAME` for `tayal.me`).
- **Vercel:** Import repository and set framework preset to Vite.
- **Netlify / Cloudflare Pages:** Connect repository and set build command to `npm run build` with output directory `dist`.
