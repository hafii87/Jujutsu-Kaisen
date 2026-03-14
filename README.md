# Jujutsu Kaisen — Dark Fantasy Anime Website

A visually immersive, single-page fan website dedicated to the *Jujutsu Kaisen* anime/manga series. Built with React and Framer Motion, it features cinematic animations, a domain expansion interactive sequence, character showcases, a story timeline, and a gallery — all wrapped in a dark fantasy aesthetic.

---

## Features

- **Animated Hero Section** — Vortex/black hole domain expansion effect triggered on button click
- **Story Section** — Overview of the world of cursed energy, sorcerers, and the balance between them
- **Characters Section** — Full roster of Jujutsu Sorcerers and Cursed Spirits with image cards, power badges, and signature moves
- **Power System Section** — Floating animated energy orbs illustrating the cursed energy system
- **Story Timeline** — Four major arcs displayed on an animated alternating timeline
- **Gallery Section** — Six-image grid with hover effects and floating particle animations
- **Quote Section** — Featured Satoru Gojo quote with pulsing energy rings
- **Footer** — Navigation links, social icons, and branding

---

## Technologies Used

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion (`motion`) | Animations & transitions |
| Lucide React | Icon library |
| shadcn/ui + Radix UI | Accessible UI primitives |
| Recharts | (Available) charting |
| PostCSS | CSS processing |

---

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd <project-folder>

# Install dependencies (uses pnpm)
pnpm install
```

> **Node.js 18+** is recommended.

---

## Running the Project

```bash
# Start development server
pnpm dev

# Build for production
pnpm build
```

The dev server will start at `http://localhost:5173` by default.

---

## Project Structure

```
├── index.html
├── vite.config.ts
├── package.json
└── src/
    ├── main.tsx                  # App entry point
    ├── app/
    │   ├── App.tsx               # Root component, section composition
    │   └── components/
    │       ├── HeroSection.tsx       # Animated hero + domain expansion
    │       ├── StorySection.tsx      # World lore overview
    │       ├── CharactersSection.tsx # Sorcerer & curse cards
    │       ├── PowerSystemSection.tsx# Floating energy orbs
    │       ├── TimelineSection.tsx   # Story arc timeline
    │       ├── GallerySection.tsx    # Image gallery grid
    │       ├── QuoteSection.tsx      # Featured quote
    │       ├── Footer.tsx            # Site footer
    │       ├── Image/
    │       │   └── ImageWithFallback.tsx
    │       └── ui/               # shadcn/ui component library
    └── styles/
        ├── index.css             # Global styles + scrollbar
        ├── tailwind.css          # Tailwind imports
        └── theme.css             # CSS custom properties / design tokens
```

---

## Credits

- UI components from [shadcn/ui](https://ui.shadcn.com/) — MIT License
- Photos from [Unsplash](https://unsplash.com/) — Unsplash License
- *Jujutsu Kaisen* is a manga/anime series by Gege Akutami / MAPPA — this is a fan project with no commercial affiliation.
