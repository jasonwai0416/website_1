# AGENTS.md

## Project

Single-page marketing site for **blink** (inspired by blink.capital). Dark, institutional,
algorithmic-capital aesthetic. No backend — static SPA.

## Stack

- Vite 5 + React 18
- Tailwind CSS 3 (config in `tailwind.config.js`; design tokens also live as CSS vars in `src/index.css`)
- framer-motion for reveals / menu transitions

## Commands

```bash
npm install
npm run dev      # dev server on 0.0.0.0:12000 (allowedHosts: true)
npm run build    # production build -> dist/
npm run preview  # serve dist/ on 0.0.0.0:12000
```

Note: this environment blocks npm install-scripts, but `esbuild`'s binary still works, so
`vite build` succeeds. If esbuild ever fails, approve its postinstall or reinstall.

## Layout of the code

- `src/App.jsx` — composes sections, owns menu state, and routes all in-page `#hash`
  anchors through one smooth-scroll handler.
- `src/data.js` — all copy/content (NAV, MODULES, STRATEGY_CARDS, PEOPLE, SPECS, TICKER).
  Edit content here, not in components.
- `src/components/`
  - `Header.jsx`, `Menu.jsx`, `ScrollProgress.jsx`, `Cursor.jsx` — chrome.
  - `CanvasField.jsx` — canvas market-field background (rAF, DPR capped at 2, pauses when
    tab hidden, static frame under `prefers-reduced-motion`).
  - `Reveal.jsx` — `Reveal` (scroll fade), `RiseLine` (masked word rise), `DrawRule`, `EASE`.
  - Section components: `Hero`, `Origin`, `HowItWorks`, `Strategy`, `People`, `Footer`.

## Conventions

- Typography: `Bricolage Grotesque` (display) + `JetBrains Mono` (labels). Fonts loaded from
  Google Fonts in `index.html`.
- Palette: `ink #0a0a0a`, `bone #f4f2ee`, `ash #8a8a86`, `ember #ff4d1c`. Ember is the only
  accent — use it sparingly (status dots, numerals, active states).
- Section pattern: eyebrow row -> `DrawRule` -> content. Sections are `border-b border-white/[0.07]`
  and carry `scroll-mt-20`.
- Motion: one orchestrated page load (staggered `RiseLine` in hero), scroll reveals elsewhere.
  All motion must degrade under `prefers-reduced-motion` (already handled globally in `index.css`).
- When wrapping a grid child in `Reveal`, pass `className="h-full"` so `h-full` cards still
  stretch to the row height.
- Masked reveal wrappers need `pb-[..] -mb-[..]` so descenders (g, y, p) are not clipped.
