# Digital Ark — Website Overhaul Plan

Premium · Modern · Production-ready. Prioritising **responsiveness**, **accessibility (WCAG 2.2 AA)**, and **performance (Core Web Vitals)**.

---

## 1. Project snapshot

Marketing site for a printing business (**Digital Ark / DigitalArc Print** — ID lanyards, t-shirt printing, net caps, wristlets).

- **Framework:** Next.js 16 (App Router, `cacheComponents`, `typedRoutes`)
- **UI:** React 19, Tailwind CSS v4 (CSS-first), Radix UI + shadcn ("new-york", zinc)
- **Tooling:** Biome (lint/format), Bun, TypeScript strict
- **Routes:** `/`, `/services`, `/products`, `/contact`, `/privacy-policy`

---

## 2. Baseline audit (findings)

### Broken / dead code
- `next-themes` installed + `mode-toggle.tsx` present, but **no `ThemeProvider`** in `layout.tsx` → dark mode is dead (also breaks `sonner`). `ModeToggle` is never rendered.
- `public/sw.js` is a stale, never-registered service worker from a **different business** (`adss-cafe-v1`). No `next-pwa`, no registration → the PWA manifest is cosmetic.
- `showcase-data.ts` still contains **ADSS Cafe / cinnamon-roll** content from another business, imported in `page.tsx` but unused.
- `contact/page.tsx` metadata describes **"ADS Smoothies & Pastries… Robinsons Place Roxas City"** — wrong business copy in OG tags.
- `header-nav.tsx` has a no-op ternary (`? "md:block" : "md:block"`) → nav has **no active state**, no `aria-current`.
- `layout.tsx` GA verification is a placeholder (`"your-google-verification-code"`).

### Performance
- 4 font families loaded (Poppins, Lato, Geist, Geist Mono) — Geist/Mono are unused.
- Many `<Image>` without `sizes`; header logo `unoptimized`; hero images full-viewport.
- Two autoplaying carousels (hero + 4 showcases) = 5 concurrent timers, all ignoring `prefers-reduced-motion`.
- Tawk chat mounted on every page but not dynamically lazy-loaded.
- All imagery **hotlinked** from `storage.enfenetydev.com` (third-party dependency, no cache control).

### Accessibility / UX
- Hero carousel indicators are `<div>`s — not focusable, no keyboard control, no `aria-label`.
- No skip-to-content link; `<main>` has no landmark id.
- Social `<a>`s rely on `<svg><title>` instead of `aria-label`.
- Fixed `350px` cards / `70vh` hero → breaks on very small and very large screens.
- `/products` is a raw stub (two bare links).
- No `loading.tsx`, `error.tsx`, `not-found.tsx`.
- Borderline contrast: `text-accent` on `bg-primary` in header; white text over image without a guaranteed scrim at all breakpoints. CTA uses `bg-accent text-white` → invisible text in light mode.

---

## 3. Phases

### Phase 0 — Hygiene & correctness  ✅ DONE
- [x] Remove dead `showcaseData`; fix `/contact` OG copy (wrong business).
- [x] Correct `sitemap.ts` `changeFrequency`; remove placeholder GA verification token.
- [x] Add `ThemeProvider` (`next-themes`) + `suppressHydrationWarning`; default `system`; surface `ModeToggle` in header + sidebar.
- [x] Remove stale, foreign `sw.js` (deferred real PWA to Phase 5).
- [x] Prune fonts to Poppins + Lato.
- [x] Add `error.tsx`, `not-found.tsx`, `loading.tsx`.
- [x] Make on-brand text theme-safe (`text-primary-foreground` / `text-white`) so enabling dark mode doesn't regress.

### Phase 1 — Design system & tokens  ✅ DONE
- [x] Lock a warm-neutral + refined-red palette with correct light/dark semantic tokens.
- [x] Add brand token, elevation scale, radius scale, motion tokens.
- [x] Add a page-container utility + global reduced-motion reset.
- [x] Document tokens in `DESIGN.md`.

### Phase 2 — Layout shell  ✅ DONE
- [x] Rewrite header: single shared `.container-page`, responsive logo lockup (no wrap at any width), active nav state + `aria-current="page"`, scroll-aware shadow (tiny client `StickyHeader` wrapper, keeps the rest server-rendered), `ModeToggle`, accessible menu trigger (`aria-label`).
- [x] Footer: multi-column (brand + socials, services, explore, get-in-touch with `mailto:`/`tel:`), dynamic year via `CurrentYear` client component inside a Suspense boundary (Cache Components requirement).
- [x] Add skip-to-content link; `<main id="main">` retained.
- [x] Align showcase + services wrappers to `.container-page` so header, content and footer share one grid.
- [x] Sidebar nav active state uses `SidebarMenuButton isActive` + `aria-current`; fixed reversed active styling.

### Phase 3 — Page-by-page UI/UX  ✅ DONE
- [x] **Home:** responsive hero (`min()` capped height, `svh`, `sizes`, `priority` on LCP slide, art-directed scrims); accessible dot **buttons** (32px targets, `aria-label`, `aria-current`, keyboard); autoplay pauses on hover/focus and is disabled under `prefers-reduced-motion`; new value-prop band; showcase carousels (no more autoplay timers, hover zoom, `sizes`, "Explore services" links); stronger full-bleed CTA; `sr-only` `<h1>`.
- [x] **Services:** real service cards (image, description, feature list, "Request a quote" CTA), responsive 2-col grid, page metadata.
- [x] **Products:** replaced stub with storefront cards (Shopee + TikTok) + custom-order CTA, page metadata.
- [x] **Contact:** real contact section (`mailto:` + `tel:` cards from `SITE_PHONE`), socials, `priority` hero; **removed the non-functional, theme-breaking decorative phone dialer** (`phone-dial.tsx` deleted).
- [x] **Privacy:** applied semantic tokens (removed `text-gray-600` / `text-blue-600`), consistent heading rhythm, page metadata.

### Phase 4 — Accessibility (WCAG 2.2 AA)  ✅ DONE
- [x] **Landmarks & skip link:** `<header>` (sticky), `<nav aria-label="Main">`, `<main id="main">`, `<footer>`, skip-to-content link.
- [x] **Focus-visible everywhere:** global `:where(...):focus-visible` outline (2px `--ring`, 2px offset) via `@layer base`; specificity-0 so component rings (Button) still win.
- [x] **`aria-current`:** header nav, sidebar nav, hero slide dots.
- [x] **Labelled icon-only controls:** theme toggle, sidebar trigger, socials, carousel arrows (`sr-only`), hero dots (`Go to slide N of M`).
- [x] **Heading order:** fixed duplicate `<h1>` in sidebar brand lockup (→ `p`); every route has exactly one `<h1>` (home uses `sr-only`). No heading-level skips.
- [x] **Alt-text audit:** all `next/image` have meaningful alt; decorative SVGs `aria-hidden`.
- [x] **Contrast ≥ 4.5:1:** header tagline `/70→/80`, inactive nav `/75→/80`, sidebar tagline `primary/50→/70`; hero text on art-directed scrims; inactive hero dot `white/50→/70` (non-text 3:1).
- [x] **Touch targets ≥ 24px:** footer links `min-h-6`, socials `size-8`, hero dots `size-8`, nav links `h-9`, icon buttons `size-9`.
- [x] **Reduced motion:** global reset (`animation`/`transition`/`scroll-behavior`) + JS `useReducedMotion` disables hero autoplay/fade.
- [x] **Keyboard-operable carousels:** shadcn arrow-key handling; dots are real `<button>`s; `role="group"` wrapper.

### Phase 5 — Performance  ✅ DONE
- [x] **Images:** explicit `sizes` on every `next/image`; `priority` only on the first hero slide (other slides + all cards lazy); `remotePatterns` scoped to the storage host; `formats: ["image/avif","image/webp"]`; `deviceSizes` capped at 1920 (dropped 2048/2560/3840 variants) to cut optimizer work + bytes.
- [x] **Deferred third-party chat:** Tawk.to is now loaded via `ChatLauncher` (`next/dynamic`, `ssr:false`) after `requestIdleCallback` (3s timeout fallback) — no longer in the initial HTML or main bundle.
- [x] **Autoplay gated on visibility:** hero `Autoplay` plugin is paused/played by an `IntersectionObserver` (threshold 0.15) so timers don't run off-screen; still disabled entirely under `prefers-reduced-motion`.
- [x] **Fonts:** already `next/font` self-hosted (Poppins 400/600/700 headings, Lato 400/700 body), `display: swap`, Latin subset, zero runtime font requests / no FOUT-driven CLS.
- [x] **PWA:** **dropped the manifest** (`public/manifest.json` deleted, `metadata.manifest` removed). There is no service worker / offline strategy, so a manifest only invited a misleading install prompt; replaced with real icons (`icon512_any` favicon, `icon512_maskable` apple-touch-icon). Revisit as a separate task if offline/install is ever a goal.
- [x] **Fork leftover cleanup:** fixed `robots.ts` + `sitemap.ts` (were pointing at `digitalarkprint.com`), removed stale `DigitalArk` metadata/description/keywords from layout + home, corrected OG image to an on-brand wide asset.
- [ ] **Targets (measure in Phase 6):** LCP < 2.5s · CLS < 0.1 · INP < 200ms.

### Phase 6 — QA & production readiness  ✅ DONE (static) · 🖐 Lighthouse = manual
- [x] `bun run typecheck` passes; `bun run build` passes (**10/10 routes**).
- [x] `bunx biome check .` → 62 errors, **all formatting** (0 `lint/*` rule violations). Pre-existing `biome.json` `indentStyle: "tab"` vs the 2-space repo — intentionally not reformatted.
- [x] **Responsive class audit:** no `w-screen` / fixed-width / `overflow-x` traps; layout uses `.container-page` + breakpoint-prefixed grid/flex.
- [x] **Metadata verification:** unique `<title>` per route (templated), exactly one `<h1>` per route, per-page OG/Twitter title with shared OG image, canonical, `robots.txt` + `sitemap.xml` on `SITE_URL`.
- [x] **Fixed OG inheritance bug:** per-page `openGraph` blocks were wiping `og:image`/`twitter:image` on Services/Products/Contact — moved brand OG config to layout only; all 5 pages now emit both images.
- [x] **Heading/landmark audit:** `header` / `nav[aria-label]` / `main#main` / `footer`; home = 1×h1 → 12×h2 → 3×h3 (no level skips); `aria-labelledby` resolves.
- [x] **Keyboard/SR smoke (static):** skip link → `#main`, global focus-visible, `aria-current`, labelled icon controls, `rel="noopener noreferrer"` on every `target="_blank"`, all `next/image` have `alt` + `sizes`.
- [x] No `console.log` / `TODO` / `FIXME` leftovers; zero `digitalark` fork residue in source or build.
- [ ] **🖐 Manual (needs a real browser/device — not runnable in this environment):**
  - Lighthouse ≥ 90 (Performance / Accessibility / Best Practices / SEO) on `/` and `/services`.
  - Real-device responsive check @ **320 / 375 / 768 / 1024 / 1440 / 1920**.
  - Screen-reader pass (VoiceOver / NVDA): landmarks, skip link, carousel dots, form-less contact links.
  - Field targets via PSI/CrUX: **LCP < 2.5s · CLS < 0.1 · INP < 200ms**.

---

## 4. Order of execution

```
Phase 0 ✅ ─▶ Phase 1 ✅ ─▶ Phase 2 ✅ ─▶ Phase 3 ✅ ─▶ Phase 4 ✅ ─▶ Phase 5 ✅ ─▶ Phase 6 ✅ (static)
```

Phase 0 + 1 unblock everything. The Home page becomes the design reference for Phase 3.
