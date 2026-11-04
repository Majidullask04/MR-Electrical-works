# Design: MR. ELECTRICAL WORKS

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: **modern-minimal** (industrial B2B electrical engineering & turnkey contracting)
- Shape of the first page: **Workbench** — split engineering brief + technical index, signature interactive workbench below
- Theme: **vantage material discipline, brand-locked to `DESIGN.md`** (Swiss industrial precision × technical specification architecture)
- Axes: warm paper band / achromatic steel ink / copper accent, breaker-blue reserved for telemetry · posture: **restrained**

## Tokens
Source of truth: `DESIGN.md` brand values, implemented in `src/index.css` (`:root`) and `tailwind.config.js` (utilities resolve to them). The roles:

```css
:root {
  --color-surface: #FCFCFD;  /* paper — never #FFFFFF */
  --color-neutral: #F4F5F7;  --color-subtle: #EAECEF;
  --color-on-surface: #121417;  /* ink — never #000000, never #0A0D12 */
  --color-primary: #B35010;  --color-primary-hover: #9C4208;  --color-primary-light: #F5EBE4;
  --color-secondary: #5C6470;  /* steel ink / muted */
  --color-tertiary: #0E639C;  --color-tertiary-light: #E6F3FA;  /* breaker blue: telemetry & live status only */
  --color-border: #D7DBE0;  /* 1px technical hairline rule */
  --color-panel: #121417;  /* small dark readout decks only */
  --color-error: #A82810;
  --font-display: "Outfit";  --font-sans: "Plus Jakarta Sans";  --font-mono: "JetBrains Mono";
}
```

Radius: 2px buttons/inputs · 6px panels · 10px hero showcases · pill only for status. Copper stays under ~5% of any screen.

## Controls
- Primary: copper fill, surface text, `rounded-sm`, 40–48px, Plus Jakarta Sans 600
- Secondary: hairline `border-border` on surface, ink text, same radius and height
- Dark-band secondary: hairline `border-panel-line` on chassis, surface text

## Typography
- Display `Outfit` 600–800, tight tracking, one colour (no accent words, Gate 38i/iii)
- Body `Plus Jakarta Sans` 13–15px+ on brand voice; never smaller than 13px
- Data `JetBrains Mono` always `tabular-nums` — all kW/kVA/V/A/Ω/₹ figures; micro labels are mono **sentence case, untracked** (Gates 54, 67)

## Motion
- Character: **brisk, restrained** — `ScrollReveal` (transform/opacity, 0.45s, `[0.22,1,0.36,1]`, once) is the single reveal pattern; `BlurText` mask reveal is the hero's one entrance; readouts tween 250ms; `BlueprintViewer` draws its copper spine once per layer change
- Never: `filter: blur()`, layout-property animation, `transition: all`, re-triggering scroll reveals, continuous marquees without hover/focus pause
- Under reduced motion: everything lands at rest at once; the marquee wraps statically

## Exports
`src/index.css` (tokens + base rules + marquee + reduced-motion) and `tailwind.config.js` in this project. Brand truth: `DESIGN.md`.
