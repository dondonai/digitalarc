# Digital Ark — Design System

Single source of truth for tokens is `src/app/globals.css`. This document describes intent; if it ever disagrees with the CSS, the CSS wins.

## Brand

| Token | Value (light) | Notes |
| --- | --- | --- |
| `--primary` | `oklch(0.55 0.216 27.5)` | Brand red. Header, CTAs, focus ring. |
| `--primary-foreground` | warm near-white | Text/icons **on** brand surfaces. |
| `--brand` / `--brand-foreground` | aliases of primary | Extra brand surface (non-shadcn-`accent`). |

Use `bg-primary text-primary-foreground` for brand surfaces. **Do not** use `text-accent` for brand text — `accent` is the shadcn hover-surface token.

## Neutrals

Warm-grey neutrals (hue ~55–65) instead of the old cool purple-grey, for a warmer, more premium feel.

| Token | Purpose |
| --- | --- |
| `--background` / `--foreground` | Page surface + body text |
| `--card`, `--popover` | Raised surfaces |
| `--muted` / `--muted-foreground` | Subdued bg + secondary text |
| `--secondary` | Secondary buttons/chips |
| `--accent` / `--accent-foreground` | Hover/focus surface (shadcn semantics) |
| `--border`, `--input`, `--ring` | Lines, form borders, focus ring |

Status: `--success`, `--warning`, `--destructive`.

Theme switching is class-based (`.dark`) via `next-themes`; `color-scheme` is set per theme for native controls/scrollbars.

## Radius

`--radius: 0.75rem` drives `rounded-sm|md|lg|xl|2xl` (computed). Prefer `rounded-lg` / `rounded-xl` for cards, `rounded-full` for pills.

## Elevation

- `shadow-soft` — cards, subtle lift.
- `shadow-elevated` — dialogs, popovers, floating actions.

## Layout

- `--container-page: 80rem` → utility `max-w-page`.
- `.container-page` — max width + responsive gutters (1rem → 1.5rem → 2rem). **All top-level sections should use this** so header, content and footer share one grid.

## Motion

| Token | Value | Use |
| --- | --- | --- |
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | General transitions |
| `--ease-emphasized` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances, reveals |

A global `prefers-reduced-motion: reduce` reset disables animation/transition/scroll-behavior. **Any autoplaying or scroll-driven motion must also be disabled in JS.**

## Typography

- `font-heading` → Poppins (headings). `font-sans` → Lato (body). Only these two families are loaded.
- Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty` (set in base layer).

## Rules of thumb

1. Brand surface ⇒ `bg-primary text-primary-foreground`.
2. Text over imagery ⇒ `text-white` + a gradient scrim (never a theme-dependent token).
3. Never hard-code grey hex/`text-gray-*`; use semantic tokens.
4. New hard-coded color? Add a token instead.
