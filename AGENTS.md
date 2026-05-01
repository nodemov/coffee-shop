# Lamoon Coffee Shop — Agent Guide

## Overview

Multi-page React SPA for Lamoon Coffee Shop with online ordering. Built with Bun + React 19 + Tailwind CSS v4 + React Router.

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Bun |
| Framework | React 19 |
| Router | React Router DOM (BrowserRouter) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-based config) |
| UI Primitives | shadcn/ui pattern (Radix + CVA + Tailwind) |
| Icons | Lucide React |
| State | React Context + useReducer (cart) |

## Architecture

**Feature-Based Modular Architecture.** Each feature owns its components, hooks, data, and page entry. Cross-cutting concerns live in `shared/`.

### Module Boundaries

- **`core/`** — Infrastructure: global styles, Tailwind theme, providers
- **`shared/`** — Cross-cutting: base UI components, layout (Nav/Footer), hooks, types, utilities
- **`features/*/`** — Domain features: components, hooks, data, and page component
- **`pages/`** — Thin route wrappers that re-export from `features/`

### Rules

1. **No cross-feature imports.** Features do not import from each other.
2. **Shared abstraction only.** Reuse via `shared/ui`, `shared/hooks`, `shared/types`.
3. **Barrel exports.** Each feature exposes its public API via `index.ts`.
4. **Pages are thin.** `pages/MenuPage.tsx` re-exports `features/menu/MenuPage.tsx`.

## Directory Structure

```
src/
├── core/
│   └── styles/
│       └── index.css          # Tailwind v4 imports + theme tokens
├── shared/
│   ├── ui/                    # Button, Card, Input, Badge
│   ├── components/
│   │   ├── TopNav.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useCart.tsx        # CartProvider + useCart
│   ├── lib/
│   │   └── utils.ts           # cn() = clsx + tailwind-merge
│   └── types/
│       └── index.ts           # Product, CartItem, Order, CategoryTab
├── features/
│   ├── home/
│   │   ├── components/        # HeroBand, FeaturedDrinks, StoryPreview, MenuPreview, VisitCTA, Testimonials
│   │   └── HomePage.tsx
│   ├── menu/
│   │   ├── components/        # CategoryTabs, ProductCard
│   │   ├── data/
│   │   │   └── products.ts    # 15 mock products
│   │   └── MenuPage.tsx
│   ├── cart/
│   │   └── CartPage.tsx       # Cart + checkout form
│   ├── about/
│   │   └── AboutPage.tsx
│   ├── locations/
│   │   └── LocationsPage.tsx
│   └── contact/
│       └── ContactPage.tsx
├── pages/                     # Route wrappers
│   ├── HomePage.tsx
│   ├── MenuPage.tsx
│   ├── CartPage.tsx
│   ├── AboutPage.tsx
│   ├── LocationsPage.tsx
│   └── ContactPage.tsx
├── App.tsx                    # Router config + Layout wrapper
├── frontend.tsx               # Entry point (createRoot + StrictMode)
└── index.html
```

## Design System (Tailwind v4 Theme)

Tokens are defined in `src/core/styles/index.css` using `@theme`:

### Colors
- `canvas` `#faf9f5` — page background
- `surface-soft` `#f5f0e8` — section bands
- `surface-card` `#efe9de` — cards
- `surface-dark` `#181715` — dark sections, footer
- `surface-dark-elevated` `#252320` — elevated dark cards
- `primary` `#cc785c` — coral CTA
- `primary-active` `#a9583e` — hover/press
- `ink` `#141413` — headlines
- `body` `#3d3d3a` — body text
- `muted` `#6c6a64` — secondary text
- `on-primary` `#ffffff` — text on coral
- `on-dark` `#faf9f5` — text on dark

### Typography
- `font-serif` — Cormorant Garamond (display headlines)
- `font-sans` — Inter (body, UI)
- `font-mono` — JetBrains Mono (prices, labels)

### Radius
- `radius-md` (8px) — buttons, inputs
- `radius-lg` (12px) — cards
- `radius-xl` (16px) — hero containers
- `radius-pill` (9999px) — badges

### Spacing
- `spacing-section` (96px) — between major bands

## Adding a New Feature

1. Create `src/features/<name>/` with:
   - `components/` for section components
   - `hooks/` if needed
   - `data/` if needed
   - `<Name>Page.tsx` as the page entry
2. Create `src/pages/<Name>Page.tsx` that re-exports from the feature
3. Add route in `src/App.tsx`

## State Management

### Cart
- `CartProvider` wraps the app in `App.tsx`
- `useCart()` hook provides: `items`, `addItem`, `removeItem`, `updateQuantity`, `clearCart`, `totalItems`, `totalPrice`
- Persisted to `localStorage` key `"lamoon-cart"`
- Cart badge appears in `TopNav`

## Build Commands

```bash
# Development (hot reload)
bun dev

# Production build (static site to dist/)
bun run build

# Serve production build
bun start
```

## Conventions

1. **Components:** Function components, PascalCase files, forwardRef for UI primitives
2. **Imports:** Use `@/` path alias (configured in `tsconfig.json`)
3. **Styling:** Tailwind utility classes only. No CSS modules. No inline styles.
4. **Images:** Use Unsplash URLs for now. Replace with local assets in `public/` when available.
5. **No hover states documented** per DESIGN.md — only default and active/pressed.
6. **Display headlines:** Always `font-serif`, weight 400, negative tracking.

## Routing

React Router `BrowserRouter` with these routes:
- `/` — Home
- `/menu` — Menu with category filtering
- `/cart` — Cart + checkout
- `/about` — Story
- `/locations` — Café locations
- `/contact` — Contact form

## Notes for Agents

- Tailwind v4 uses CSS-based config (`@theme` in `index.css`), not `tailwind.config.js`
- The `bun init --react` template uses `frontend.tsx` as the client entry, not `main.tsx`
- Build output goes to `dist/` as a static site
- All pages share the same `Layout` (TopNav + Footer wrapper)
