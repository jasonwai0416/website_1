# AGENTS.md — studio-mirage

Immersive 3D agency portfolio for **Studio Mirage** (inspired by studiomirage.io).
Dark, cinematic, editorial. Paris & Dubai.

## Stack

- Vite 5 + React 18
- Tailwind CSS 3 (`tailwind.config.js`) + design tokens as CSS vars in `src/index.css`
- `three` + `@react-three/fiber` for the hero WebGL scene
- `framer-motion` for reveals, the lightbox, and menu transitions

## Commands

```bash
npm install
npm run dev      # dev server on 0.0.0.0:12001 (allowedHosts: true)
npm run build    # -> dist/
npm run preview  # serve dist/ on 0.0.0.0:12001
```

This environment blocks npm install scripts, but `esbuild` still works, so builds succeed.

## Code layout

- `src/App.jsx` — composes sections, owns lightbox index state, and routes in-page
  `#hash` anchors through one `navigate()` handler.
- `src/data.js` — NAV, SERVICES, PROJECTS, CAPABILITIES, STATS. All copy lives here.
  Project images are hot-linked from the public Prismic CDN at `?w=1600`.
- `src/components/`
  - `Header.jsx` — sticky nav (Our works / About us / Contact us).
  - `Hero.jsx` — lazy-loads the WebGL scene via `React.lazy`, plus grade layers,
    scroll cue, and the service marquee.
  - `MirageScene.jsx` — the R3F canvas. **Heaviest dependency — always keep it lazy.**
  - `Works.jsx` — asymmetric project grid + `Card`.
  - `Lightbox.jsx` — case-study modal (Esc closes, → advances).
  - `About.jsx`, `Contact.jsx` (offices + inquiry form), `Manifesto.jsx`.
  - `Reveal.jsx` — `Reveal`, `RiseWords`, `DrawRule`, `EASE`. Reuse these for motion.
  - `ScrollProgress.jsx` — hairline top progress bar.

## Conventions

- Type: `Anton` (display), `Archivo` (body), `Space Mono` (labels), `IBM Plex Sans Arabic`
  (Arabic script accents). Loaded from Google Fonts in `index.html`.
- Palette: `charcoal #0d0d0d`, `bone #f2f1ed`, `mist #8c8c86`, `jade #1f6f5c`,
  `emerald #2fbf94`, `gold #c8a45c`. Emerald is the primary accent; gold/jade are
  per-project tints (`PROJECTS[].accent`).
- Section pattern: eyebrow row -> `DrawRule` -> display header -> content. Sections carry
  `scroll-mt-20` so hash navigation clears the sticky header.
- The asymmetric works grid uses a 12-column grid at `lg+`; `PROJECTS[].span`
  (`wide` = 8 cols, `tall`/`normal` = 4 cols) drives it. Below `lg` it collapses to 1-2 cols.
- WebGL performance guards: `dpr` capped at 1.75, `frameloop` set to `never` when the hero
  leaves the viewport, and rotation/parallax disabled under `prefers-reduced-motion`.
- Motion must degrade under `prefers-reduced-motion` (handled globally in `index.css`).
- Masked reveal wrappers need `pb-[..] -mb-[..]` so descenders aren't clipped.
