# 🎨 Design System — Portfolio UI Frontend

> A modern, futuristic design system tailored for high-performance AI developer & engineering portfolios.  
> Characterized by deep space dark surfaces, cyber-neon accents, frosted glassmorphism, fluid micro-interactions, and precision typography.

---

## 📑 Table of Contents
1. [Core Design Philosophy](#1-core-design-philosophy)
2. [Color Palette & Tokens](#2-color-palette--tokens)
3. [Typography Hierarchy](#3-typography-hierarchy)
4. [Elevation, Glassmorphism & Overlays](#4-elevation-glassmorphism--overlays)
5. [Button & Interactive Patterns](#5-button--interactive-patterns)
6. [Component Library](#6-component-library)
7. [Motion & Animation System](#7-motion--animation-system)
8. [Layout, Grid & Spacing](#8-layout-grid--spacing)
9. [Iconography & Media](#9-iconography--media)
10. [Usage Examples & Code Snippets](#10-usage-examples--code-snippets)

---

## 1. Core Design Philosophy

- **Aesthetic Direction:** Futuristic Cyber-Minimalism & AI Engineering.
- **Dark-First Architecture:** Immersive deep navy (`#0A0D14`) baseline that highlights luminous accent gradients.
- **Visual Depth:** Built using layered translucency (`backdrop-blur`), subtle specular border highlights (`1px solid rgba(255,255,255,0.08)`), and ambient radial light pools.
- **Tactile Feedback:** Fluid hover transitions, magnetic button physics, interactive cursor glow, and organic Framer Motion transitions.

---

## 2. Color Palette & Tokens

All colors are defined as HSL variables in CSS and mapped through Tailwind CSS configuration.

### 2.1 Base Colors (Surface & Canvas)
| Token | HSL Value | Hex Equivalent | Description / Role |
| :--- | :--- | :--- | :--- |
| `--background` | `230 25% 5%` | `#0A0D14` | Primary viewport backdrop |
| `--foreground` | `210 30% 96%` | `#F1F5F9` | Default high-contrast text |
| `--card` | `230 25% 7%` | `#0E131D` | Standard surface for cards & panels |
| `--card-foreground` | `210 30% 96%` | `#F1F5F9` | Text on card surfaces |
| `--popover` | `230 25% 7%` | `#0E131D` | Menus, tooltips, popovers |
| `--border` | `230 20% 16%` | `#1A202D` | Structural dividers & boundaries |
| `--input` | `230 20% 14%` | `#171B26` | Input fields background |

### 2.2 Accent & Brand Accents
| Token | HSL Value | Role |
| :--- | :--- | :--- |
| `--primary` | `175 85% 55%` | Cyber Cyan / Teal (Main action color, links, highlights) |
| `--primary-glow` | `185 90% 65%` | High-luma Cyan (Hover glows, text gradients, eyebrows) |
| `--accent-violet` | `265 85% 65%` | Electric Violet (Secondary brand gradient component) |
| `--accent-pink` | `320 80% 65%` | Magenta / Pink (Tertiary aurora glow, status badges) |
| `--muted` | `230 20% 12%` | Subdued containers and pills |
| `--muted-foreground`| `215 15% 60%` | Secondary descriptions, captions, timestamps |
| `--destructive` | `0 84% 60%` | Error states and critical actions |

### 2.3 Atmospheric Gradients
- **`--gradient-primary`**:
  ```css
  linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent-violet)));
  ```
- **`--gradient-text`**:
  ```css
  linear-gradient(135deg, hsl(210 30% 98%) 0%, hsl(175 85% 75%) 50%, hsl(265 85% 80%) 100%);
  ```
- **`--gradient-aurora`**:
  ```css
  radial-gradient(ellipse at top, hsl(175 85% 55% / 0.18), transparent 50%),
  radial-gradient(ellipse at bottom right, hsl(265 85% 65% / 0.15), transparent 50%),
  radial-gradient(ellipse at bottom left, hsl(320 80% 65% / 0.10), transparent 50%);
  ```

---

## 3. Typography Hierarchy

The UI combines three specialized Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600;700&display=swap');
```

| Type Role | Font Family | Tailwind Class | Usage |
| :--- | :--- | :--- | :--- |
| **Display / Headings** | `Space Grotesk`, sans-serif | `font-display` | H1, H2, Section titles, large stats |
| **Body / UI** | `Inter`, system-ui, sans-serif | `font-sans` | Paragraphs, descriptions, buttons, forms |
| **Monospace / Code** | `JetBrains Mono`, monospace | `font-mono` | Badges, tech tags, metrics, eyebrow labels |

### Hierarchy Scale
1. **Hero Title (Display 1):** `font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.08]`
2. **Section Title (H2):** `font-display text-4xl md:text-5xl font-bold leading-tight`
3. **Card Heading (H3):** `font-display text-xl md:text-2xl font-semibold`
4. **Section Eyebrow:** `section-eyebrow` (12px uppercase monospace pill)
5. **Body Text:** `text-base text-muted-foreground leading-relaxed`
6. **Caption / Small:** `text-xs text-muted-foreground font-mono`

---

## 4. Elevation, Glassmorphism & Overlays

### 4.1 Frosted Glass Classes
```css
/* Standard Card Glass */
.glass {
  background: linear-gradient(180deg, hsl(230 25% 10% / 0.55), hsl(230 25% 6% / 0.55));
  backdrop-filter: blur(20px) saturate(1.4);
  border: 1px solid hsl(210 30% 96% / 0.08);
  box-shadow: var(--shadow-card);
}

/* High-Contrast / Hero Modal Glass */
.glass-strong {
  background: linear-gradient(180deg, hsl(230 25% 12% / 0.7), hsl(230 25% 7% / 0.7));
  backdrop-filter: blur(28px) saturate(1.6);
  border: 1px solid hsl(210 30% 96% / 0.1);
}
```

### 4.2 Background Grid & Texture
- **`.grid-overlay`**: Subtle 56px technical blueprint grid with radial ellipse fade.
- **`.noise`**: 4% opacity fractal noise overlay for organic film grain.
- **`.glow-ring`**: Dual inner/outer halo for focused UI elements.

---

## 5. Button & Interactive Patterns

### 5.1 Magnetic Gradient Button (`.btn-magnetic`)
- **Visuals:** Dual-tone gradient (`--primary` to `--accent-violet`), pill radius (`rounded-full`), luminous drop shadow.
- **Interaction:** Dynamic radial cursor reflection tracking mouse coordinates (`--mx`, `--my`), lifts on hover (`translateY(-2px)`).
```tsx
<a href="#contact" className="btn-magnetic">
  <span>Get in touch</span>
  <ArrowRight className="h-4 w-4" />
</a>
```

### 5.2 Ghost Glow Button (`.btn-ghost-glow`)
- **Visuals:** Translucent dark backdrop, delicate border.
- **Interaction:** Glows cyan on hover with light border highlight.
```tsx
<a href="#projects" className="btn-ghost-glow">
  <span>Explore Projects</span>
</a>
```

### 5.3 Tech Chips & Badges (`.chip`)
- Compact monospace tag for technologies and categories (`Python`, `PyTorch`, `React`, `TypeScript`).
```tsx
<span className="chip">
  <Code2 className="h-3 w-3 text-primary" />
  TypeScript
</span>
```

---

## 6. Component Library

Built using modular **Radix UI** primitives styled with **Tailwind CSS** (Shadcn UI architecture).

### 6.1 Floating Frosted Navigation (`Nav.tsx`)
- Fixed centered pill navbar with glass backdrop (`glass`).
- Real-time scroll indicator that tracks active sections.
- Mobile responsive dropdown with full keyboard access.

### 6.2 Project Showcase Card (`Projects.tsx`)
- Multi-layer card with thumbnail preview and category badges.
- Hover lift animation and illuminated border highlight.
- Action links for Live Demo, GitHub repo, and architectural details.

### 6.3 Metric & Stats Grid (`Stats.tsx`)
- Numeric stats with gradient text values (`text-gradient`).
- Monospace subheadings and descriptions.

### 6.4 Services & Expertise Grid (`Services.tsx`)
- Bento-grid layout with icons, bulleted deliverables, and glass elevation.

### 6.5 Interactive Contact Form (`Contact.tsx`)
- Form inputs styled with `.glass` and animated focus rings.
- Integrated Sonner toast notifications for instant client-side feedback.

---

## 7. Motion & Animation System

Powered by **Framer Motion** and CSS Keyframes.

### 7.1 Keyframe Animations (Tailwind)
| Animation | Duration / Curve | Effect |
| :--- | :--- | :--- |
| `fade-up` | `0.7s cubic-bezier(0.22,1,0.36,1)` | Smooth reveal with vertical translation |
| `float` | `6s ease-in-out infinite` | Gentle vertical oscillation for decorative badges |
| `drift` | `18s ease-in-out infinite` | Ambient organic shifting of aurora background blobs |
| `pulse-glow` | `3s ease-in-out infinite` | Breathing intensity for glow rings |
| `shimmer` | `3s linear infinite` | Metallic light sweep over progress indicators |
| `spin-slow` | `18s linear infinite` | Slow ambient radial rotation |

### 7.2 Framer Motion Variants
```tsx
// Staggered Container
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

// Child Item Fade-in
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};
```

---

## 8. Layout, Grid & Spacing

- **Containers:** Max width `1400px` (`container max-w-7xl` or `max-w-5xl` for readable content).
- **Section Spacing:** Generous breathing room (`py-24 md:py-32`).
- **Card Padding:** `p-6 md:p-8 rounded-2xl md:rounded-3xl`.
- **Responsive Breakpoints:**
  - `sm`: 640px
  - `md`: 768px (Tablet & standard mobile layout shift)
  - `lg`: 1024px (Desktop 2-column or 3-column grids)
  - `xl`: 1280px
  - `2xl`: 1400px

---

## 9. Iconography & Media

- **Icon Set:** `lucide-react` with standard stroke width `1.5px` to `2px`.
- **Styling:** Icons inside interactive elements carry `text-primary` or `text-muted-foreground` with hover color transitions.
- **Images:** Aspect-ratio locked (`aspect-video`, `rounded-xl`) with subtle overlay gradients to blend cleanly with the dark theme.

---

## 10. Usage Examples & Code Snippets

### Standard Section Header
```tsx
<div className="text-center max-w-2xl mx-auto mb-16">
  <div className="section-eyebrow">Portfolio</div>
  <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
    Featured <span className="text-gradient">Projects</span>
  </h2>
  <p className="mt-4 text-muted-foreground">
    A curated collection of autonomous AI agents, web applications, and models.
  </p>
</div>
```

### Standard Glass Card
```tsx
<div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
    <Sparkles className="h-5 w-5" />
  </div>
  <h3 className="font-display text-xl font-semibold mb-2">Neural Analytics</h3>
  <p className="text-sm text-muted-foreground leading-relaxed">
    Real-time telemetry and streaming evaluation for production LLM pipelines.
  </p>
</div>
```

---
*Created as the official Frontend Design System for `portfolio-original`.*
