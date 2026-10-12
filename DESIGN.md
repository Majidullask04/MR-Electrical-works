---
version: alpha
name: MR. ELECTRICAL WORKS
description: Turnkey electrical engineering and contracting design system for high-voltage substations, industrial power distribution, and commercial infrastructure.

colors:
  primary: "#B35010"
  secondary: "#5C6470"
  tertiary: "#0E639C"
  neutral: "#F4F5F7"
  surface: "#FCFCFD"
  on-surface: "#121417"
  subtle: "#EAECEF"
  border: "#D7DBE0"
  error: "#A82810"

typography:
  display:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.12em
  data-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    fontFeature: "'tnum' 1"
  data-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.35
    fontFeature: "'tnum' 1"

rounded:
  none: 0px
  sm: 2px
  md: 6px
  lg: 10px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  margin: 48px

components:
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "#A74F14"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  text-meta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
  chip-status:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.on-surface}"
    typography: "{typography.data-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  status-live:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.surface}"
    typography: "{typography.data-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    typography: "{typography.body-sm}"
  tooltip:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
---

# MR. ELECTRICAL WORKS

## Overview

MR. ELECTRICAL WORKS operates in high-stakes environments: 11kV/33kV substations, industrial LT switchgear panels, heavy chemical processing units, pharmaceutical cleanrooms, and corporate IT infrastructure in Hyderabad and Telangana. The decisions made here govern personnel safety, fire prevention, grid compliance, and continuous power continuity.

The design direction is **Swiss Industrial Precision crossed with Technical Specification Architecture**. It departs completely from playful consumer landing pages, cartoon clip-art swirls, and generic SaaS indigo templates. Every token, border, and measurement reflects the physical discipline of electrical engineering blueprints and single-line schematics (SLDs).

What this system gives up: **playful consumer softness and decorative fluff**. There are no rainbow gradients, no 28px bubble radii on standard containers, and no unanchored drop-shadows. The trade secures immediate institutional authority with chief electrical inspectors, project directors, MEP consultants, and industrial plant managers.

## Colors

All color values trace back to authentic electrical physical materials:

- **Primary (#C25E1A):** *Electrolytic Busbar Copper.* The exact tone of pure copper conductors after initial oxidation. Used with strict discipline (less than 5% total screen space) for primary actions and engineering endorsements. Meets WCAG AA contrast (4.6:1 against surface).
- **Secondary (#5C6470):** *Galvanized Steel / Cable Tray Zinc.* The neutral engineering grey found on perforated cable trays and switchgear enclosures. Used for metadata, technical tags, and labels.
- **Tertiary (#0E639C):** *Grid Incomer Breaker Active.* The standardized cobalt blue pilot light of energized switchgear incoming feeders. Reserved exclusively for live status chips, active line indicators, and telemetry.
- **Neutral (#F4F5F7) and Surface (#FCFCFD):** *Drafting Vellum and Switchgear Chassis White.* A half-step distinction providing crisp structural containment without visual fatigue. No pure `#FFFFFF` glare.
- **On-surface (#121417):** *Transformer Core Silicon Steel.* Deep graphite with a minute warm iron bias, providing sharp technical legibility.
- **Subtle (#EAECEF):** *Chassis Powder Coat Grey.* Used for tabular data row alternation and badge backgrounds.
- **Border (#D7DBE0):** *1px Technical Hairline Rule.* Solves layout hierarchy through physical enclosure rather than blurry shadows.
- **Error (#A82810):** *High-Voltage Tripped Arc Red.* Sourced from warning placards and breaker trip flags.

## Typography

The type system separates authoritative architectural voice from measured electrical apparatus:

- **Outfit:** Carries the display voice. Architectural, bold, and geometric with tight negative tracking (`-0.025em`). Conveys institutional permanence.
- **Plus Jakarta Sans:** Carries structural prose and technical descriptions. Highly legible at 15px with balanced x-height.
- **JetBrains Mono:** Carries all engineering telemetry, voltages (`11kV HT`, `415V LT`), currents (`800A ACB`), wire gauges (`25 sq.mm Cu`), power factors, and estimate calculations. Tabular figures (`'tnum' 1`) ensure all figures align across engineering bill of quantities (BOQ) tables.

## Layout

A modular **12-column engineering grid** with 24px gutters and 48px outer margins. The system utilizes structural hairline borders (`1px solid #D7DBE0`) inspired by industrial single-line schematics to establish clean containment.

Density is intentionally functional: technical equipment matrices, load recommendations, and compliance milestones are structured in dense, scannable data layouts rather than generic spaced-out cards.

## Elevation & Depth

Depth is established through **architectural borders and tonal contrast** rather than artificial glow or blurry box shadows:

1. **Flush Panels:** Depth 0 utilizes `#F4F5F7` backing with 1px hairline rules.
2. **Elevated Switchgear Cabinets:** Interactive panels utilize a subtle 1px crisp border with a micro-drop `0 2px 4px rgba(18, 20, 23, 0.04)`.
3. **Overlays:** Modals and diagnostic sheets utilize a defined 1px solid border (`#121417`) with a solid backdrop scrim.

## Shapes

Shapes are defined by **Industrial Machined Precision**. Radii are strictly controlled:
- `2px` (`sm`) for technical buttons, inputs, and toggles.
- `6px` (`md`) for panel containment cards and project manifests.
- `10px` (`lg`) for major hero showcase containers.
- `9999px` (`full`) reserved exclusively for status indicator pills and breaker badges.

Large consumer radii (20px+) are prohibited on core containers to maintain structural gravity.

## Components

- **Buttons:** Solid primary copper with off-white tracked text (`JetBrains Mono`). Secondary buttons utilize neutral background with dark graphite text.
- **Technical Badges:** Pill-shaped, hairline border, displaying standard engineering ratings (e.g., `CPRI TESTED`, `CEA 2010 COMPLIANT`, `ISO 9001:2015`).
- **Load Calculator:** Interactive engineering utility with segmented bus selectors, input steps, and real-time copper wire and breaker calculation output.
- **Engineering Cards:** Structured with top metadata header, technical specification body, and terminal verification footer.

## Do's and Don'ts

- **Do** anchor every numeric specification (kW, kVA, Volts, Amperes, mm²) in `JetBrains Mono` with tabular numerals.
- **Don't** use rainbow gradients or playful multi-color swirl logos. All brand marks must be vector geometric engineering emblems.
- **Do** keep primary copper accent below 5% of total pixel volume to preserve call-to-action urgency.
- **Don't** use generic blurry `shadow-xl` or glassmorphic `backdrop-blur` without structural 1px borders.
- **Do** pair every compliance claim with certified engineering credentials (e.g., Mr. Nekbor Seikh, M.Tech EEE, License & CEA Standards).
- **Don't** center body copy. Maintain flush-left alignment adhering to Swiss typographic discipline.
