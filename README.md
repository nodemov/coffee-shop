# Lamoon Coffee Shop

A multi-page React SPA for a specialty coffee shop with online ordering. Built with **Bun**, **React 19**, **Tailwind CSS v3**, and **React Router**.

![Home Page](public/images/screenshot-home.png)

## Features

- **Home Page** — Hero section, featured drinks, story preview, testimonials, and visit CTA
- **Menu Page** — 15 products with category filtering (Coffee, Tea, Pastry, Beans), size/options selection
- **Cart Page** — Full cart management with quantity editing, remove items, checkout form, and order confirmation
- **About Page** — Coffee shop story and values
- **Locations Page** — Café location finder
- **Contact Page** — Contact form with validation
- **Responsive Design** — Mobile-first with hamburger menu and touch-friendly UI
- **Online Ordering** — Add items to cart, select sizes/options, checkout with form validation
- **Cart Persistence** — Cart saved to `localStorage` and survives page refreshes

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Bun |
| Framework | React 19 |
| Router | React Router DOM (BrowserRouter) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| UI Primitives | shadcn/ui pattern (Radix + CVA + Tailwind) |
| Icons | Lucide React |
| State | React Context + useReducer (cart) |

## Design System

Warm editorial palette inspired by specialty coffee aesthetics:

| Token | Value | Usage |
|---|---|---|
| **Canvas** | `#faf9f5` | Page background |
| **Surface Soft** | `#f5f0e8` | Section bands |
| **Surface Card** | `#efe9de` | Cards |
| **Surface Dark** | `#181715` | Dark sections, footer |
| **Primary** | `#cc785c` | Coral CTA buttons |
| **Primary Active** | `#a9583e` | Hover/press states |
| **Ink** | `#141413` | Headlines |
| **Body** | `#3d3d3a` | Body text |
| **Muted** | `#6c6a64` | Secondary text |

**Typography**
- **Cormorant Garamond** — serif display headlines (weight 400, negative tracking)
- **Inter** — sans-serif body and UI text
- **JetBrains Mono** — prices and labels

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed

### Installation

```bash
bun install
```

### Development

```bash
bun dev
```

This starts the Tailwind CSS watcher and Bun dev server with hot reload.

### Production Build

```bash
bun run build
```

This compiles CSS and bundles the static site to `dist/`.

### Serve Production Build

```bash
bun start
```

## Project Structure

```
src/
├── App.tsx                 # Router config + Layout wrapper
├── frontend.tsx            # Client entry point (createRoot + StrictMode)
├── index.html              # HTML template
├── index.css               # Tailwind directives + base styles
├── styles.css              # Generated Tailwind build output
├── server.ts               # Bun production server
├── core/                   # Global styles, theme, providers (extensible)
├── shared/
│   ├── ui/                 # Button, Card, Input, Badge (shadcn/ui pattern)
│   ├── components/
│   │   ├── TopNav.tsx      # Navigation bar with cart badge
│   │   └── Footer.tsx      # Site footer
│   ├── hooks/
│   │   └── useCart.tsx     # CartProvider + useCart hook
│   ├── lib/
│   │   └── utils.ts        # cn() utility (clsx + tailwind-merge)
│   └── types/
│       └── index.ts        # Product, CartItem, Order, CategoryTab
├── features/
│   ├── home/
│   │   ├── components/     # HeroBand, FeaturedDrinks, StoryPreview, MenuPreview, VisitCTA, Testimonials
│   │   └── HomePage.tsx
│   ├── menu/
│   │   ├── components/     # CategoryTabs, ProductCard
│   │   ├── data/
│   │   │   └── products.ts # 15 mock products
│   │   └── MenuPage.tsx
│   ├── cart/
│   │   └── CartPage.tsx    # Cart + checkout form
│   ├── about/
│   │   └── AboutPage.tsx
│   ├── locations/
│   │   └── LocationsPage.tsx
│   └── contact/
│       └── ContactPage.tsx
└── pages/                  # Thin route wrappers that re-export from features/
    ├── HomePage.tsx
    ├── MenuPage.tsx
    ├── CartPage.tsx
    ├── AboutPage.tsx
    ├── LocationsPage.tsx
    └── ContactPage.tsx
```

### Architecture Rules

1. **No cross-feature imports** — Features do not import from each other. Reuse via `shared/`.
2. **Shared abstraction only** — Reusable UI, hooks, types, and utilities live in `shared/`.
3. **Pages are thin** — `pages/MenuPage.tsx` re-exports `features/menu/MenuPage.tsx`.

## Routing

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, featured drinks, story, testimonials |
| `/menu` | Menu | Product catalog with category filtering |
| `/cart` | Cart | Cart management + checkout |
| `/about` | About | Coffee shop story |
| `/locations` | Locations | Café location finder |
| `/contact` | Contact | Contact form |

## State Management

### Cart

- `CartProvider` wraps the app in `App.tsx`
- `useCart()` hook provides: `items`, `addItem`, `removeItem`, `updateQuantity`, `clearCart`, `totalItems`, `totalPrice`
- Persisted to `localStorage` key `"lamoon-cart"`
- Cart badge appears in `TopNav`

## Mobile View

![Mobile Home](public/images/screenshot-mobile.png)

## License

MIT
