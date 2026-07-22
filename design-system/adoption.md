# RE-COMP Design System Adoption

## Purpose

This file explains how app and landing should consume the design system without collapsing into one project.

## Current Projects

Landing/site:

- `recomp-landing-prototype/`

App:

- `experiments/app-ui-pilot/`

Shared implementation layer:

- `design-system/`

Strategic design documentation:

- `03_design/`
- `TOKENS.md`

## Current Token Adoption

App imports:

```css
@import "../../../design-system/tokens.css";
```

from:

`experiments/app-ui-pilot/src/styles.css`

Landing does not yet import shared tokens.

## Design System Change Gate

Before changing `design-system/tokens.css`, state:

- exact tokens to change
- why they are changing
- which project may be affected
- whether landing should remain unchanged

Currently affected project:

- App pilot

Potential future affected project:

- Landing/site, only after explicit connection

## App Adoption Rule

App may consume shared tokens for:

- color roles
- typography
- motion timings
- radius
- glass materials
- shadows
- control states

App should keep screen-specific layout in:

- `experiments/app-ui-pilot/src/styles.css`

## Landing Adoption Rule

Landing may later consume shared tokens for:

- brand colors
- typography
- CTA/glass material
- motion timing

Landing should keep:

- page composition
- cinematic section styling
- scroll-specific behavior
- marketing-specific assets

inside:

- `recomp-landing-prototype/`

## Component Adoption Rule

Do not create shared components until a pattern repeats across at least app and landing or multiple app screens.

Promote a component to shared only when:

- its purpose is stable
- its props/content model is clear
- it does not encode one screen's layout
- it matches documented RE-COMP component rules

## Change Types

### Documentation Change

Updates `03_design/`, `TOKENS.md` or `design-system/*.md`.

Usually safe, but should still state assumptions.

### Token Change

Updates `design-system/tokens.css`.

May affect app immediately.

Requires clear downstream impact statement.

### App Component Change

Updates `experiments/app-ui-pilot/`.

Should follow design system rules but remain app-scoped.

### Landing Component Change

Updates `recomp-landing-prototype/`.

Should follow design system philosophy but remain landing-scoped.
