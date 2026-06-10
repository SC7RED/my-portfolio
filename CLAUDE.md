# CLAUDE.md

## What this is

Dennis Delenyan's personal portfolio — a single-page React site (hero / about /
projects / contact / footer) migrated from an exported HTML design. Dark mode is the
default and canonical look; light mode is a first-class inversion of the same tokens.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc --noEmit` type-check, then production build (run before committing)
- `npm run preview` — serve the production build

## Structure & conventions

- `src/components/` — one component per file, PascalCase. Each page section is its own
  component; shared primitives (e.g. `Reveal`) live here too.
- `src/styles/index.css` — the only stylesheet. Design tokens are CSS variables defined
  on `:root` (light) and `.dark` (dark); Tailwind utility colors (`bg-bg`, `text-fg`,
  `border-line`, …) map onto them via `@theme inline`, so **never hardcode colors in
  JSX** — add a token instead. Effects that need real CSS (glows, gradients,
  keyframes) are component classes in the `@layer components` block.
- `src/scripts/` — hooks, helpers, and config. **All personal/site data (name, links,
  email, project list) lives in `site.ts`** — components must read from it rather than
  inlining content.
- Adding a project card = appending one entry to `projects` in `src/scripts/site.ts`
  (`repo: "owner/name"` for live GitHub data, or fully static fields).

## Behavior notes

- Theme: `dark` class on `<html>`, applied pre-paint by an inline script in
  `index.html`, persisted to `localStorage("theme")` by `useTheme`. Default is dark.
- Animations are intentionally subtle (gentle reveals, small hover lifts, the purple
  GitHub-button glow). Keep them that way, and always respect reduced motion
  (`useReducedMotion` in JS, `prefers-reduced-motion` in CSS).
- The contact form posts to Formspree using `VITE_FORMSPREE_ID` (see README); it must
  keep working gracefully (clear message, email fallback) when the ID is unset.
- GitHub project data is fetched client-side with sessionStorage caching and static
  fallbacks — never let a failed API call break the projects grid.
