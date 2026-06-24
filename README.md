# BrightSmile Picks

A curated dental product affiliate store built with React + Vite. Inspired by the editorial aesthetic of Function of Beauty — warm cream tones, Space Grotesk headings, and clean minimal product cards.

**Live preview path:** `/dental-store/`

---

## What it does

BrightSmile Picks displays a hand-curated collection of dental products with Amazon affiliate links. Visitors can filter by category, browse featured picks, and click through to purchase on Amazon. Every sale earns a commission via the Amazon Associates program.

---

## Getting started

### Prerequisites

- Node.js 18+
- pnpm

### Install & run

```bash
pnpm install
pnpm --filter @workspace/dental-store run dev
```

The store runs at `http://localhost:<PORT>/dental-store/`.

---

## Setting up your Amazon affiliate tag

All product links currently use the placeholder tag `YOURTAG-20`. Replace it with your real Amazon Associates tag before going live.

**1. Get your tag**
Sign up at [affiliate-program.amazon.com](https://affiliate-program.amazon.com) and note your tracking ID (e.g. `brightsmile-20`).

**2. Update the products file**

Open `src/data/products.ts` and do a find-and-replace:

```
YOURTAG-20  →  your-real-tag-20
```

Every product's `affiliateUrl` follows this pattern:
```
https://www.amazon.com/dp/ASIN?tag=YOURTAG-20
```

**3. Update the footer disclosure**

In `src/pages/Home.tsx`, find the footer `<p>` and replace `BrightSmile Picks` with your own business name if needed.

---

## Adding or editing products

All products live in one file: `src/data/products.ts`

Each product has this shape:

```ts
{
  id: "p1",                          // unique string
  name: "Product Name",
  description: "Short description.",
  imageUrl: "https://...",           // Amazon product image URL
  price: "$49.99",                   // display string, e.g. "from $9.99"
  rating: 4.7,                       // number out of 5
  reviewCount: 9540,                 // shown on card
  category: "Electric Toothbrush",  // must match a Category type below
  affiliateUrl: "https://www.amazon.com/dp/ASIN?tag=YOURTAG-20"
}
```

**Available categories** (defined in the `Category` type):

| Value | Filter label shown |
|---|---|
| `"Whitening"` | Whitening |
| `"Electric Toothbrush"` | Electric Toothbrush |
| `"Flossing"` | Flossing |
| `"Mouthwash"` | Mouthwash |
| `"Kids"` | Kids |
| `"Specialty"` | Specialty |

To add a new category, add it to the `Category` union type at the top of `products.ts` and it will automatically appear in the filter bar.

**Finding Amazon product image URLs**
Go to the product page on Amazon → right-click the main image → Copy image address. Use the `_AC_SL1500_` size variant for best quality.

---

## Customising the design

### Colors

All colors are CSS variables in `src/index.css`. Key ones to change:

| Variable | Default | Used for |
|---|---|---|
| `--background` | warm cream `hsl(45 30% 97%)` | page background |
| `--primary` | sage mint `hsl(174 40% 50%)` | announcement bar, marquee, CTA buttons |
| `--foreground` | near-black `hsl(20 15% 12%)` | text, dark pill buttons |
| `--muted` | soft grey | product card backgrounds |

### Fonts

Headings use **Space Grotesk** and body copy uses **Inter**, both loaded from Google Fonts in `index.html`.

To swap the heading font:
1. Change the Google Fonts `<link>` in `index.html`
2. Update `--app-font-serif` in `src/index.css`

### Hero image

Replace `public/hero-lifestyle.png` with your own photo. Keep the filename or update the `src` in `Home.tsx`:

```tsx
src={`${import.meta.env.BASE_URL}hero-lifestyle.png`}
```

> The `BASE_URL` prefix is required — the store runs under `/dental-store/` so root-relative paths will 404.

---

## Page sections (top to bottom)

| Section | Component / location |
|---|---|
| Announcement bar | inline in `Home.tsx` |
| Nav (logo + Shop Now) | inline in `Home.tsx` |
| Hero split layout | inline in `Home.tsx` |
| Scrolling trust marquee | inline in `Home.tsx` |
| Promo banner | `src/components/PromoBanner.tsx` |
| Trust badges + featured products | `src/components/FeaturedRow.tsx` → `TrustBadgePanel.tsx` + `FeaturedProducts.tsx` |
| Curated Collection grid + filter | inline in `Home.tsx` |
| About / Why Trust Us | inline in `Home.tsx` |
| Footer + affiliate disclosure | inline in `Home.tsx` |

---

## Tech stack

| Tool | Purpose |
|---|---|
| React 18 + TypeScript | UI |
| Vite | Dev server & build |
| Tailwind CSS | Styling |
| shadcn/ui + Radix UI | Accessible component primitives |
| Framer Motion | Product card animations & hero fade-in |
| Lucide React | Icons (shield, stethoscope, leaf, check) |
| Space Grotesk + Inter | Google Fonts |

---

## Amazon Associates compliance

The footer already includes the required disclosure:

> *As an Amazon Associate, BrightSmile Picks earns from qualifying purchases.*

Amazon requires this on every page that contains affiliate links. Do **not** remove it. If you rename the store, update the disclosure text to match your business name.

For the full operating agreement, see [Amazon Associates Program Policies](https://affiliate-program.amazon.com/help/operating/policies).

---

## Project structure

```
dental-store/
├── public/
│   ├── hero-lifestyle.png    ← replace with your hero photo
│   ├── opengraph.jpg         ← social sharing preview image
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── products.ts       ← all product data lives here
│   ├── components/
│   │   ├── PromoBanner.tsx
│   │   ├── FeaturedRow.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── TrustBadgePanel.tsx
│   │   └── ui/               ← shadcn/ui component library
│   ├── pages/
│   │   └── Home.tsx          ← main page layout & sections
│   └── index.css             ← theme variables & global styles
├── index.html                ← Google Fonts import here
└── vite.config.ts
```
