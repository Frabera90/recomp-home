# RE-COMP Glassmorphism Audit

## Status

Working audit based on:

- RE-COMP visual language and surface rules
- current design-system tokens
- current playground usage
- current app/landing usage
- external glassmorphism guidance reviewed on 2026-07-21

## Summary

RE-COMP's written direction is correct:

- glass is functional, not decorative
- cards are not glass
- dense health data must remain stable
- Liquid Glass belongs to navigation, controls, overlays and transient interaction layers
- Soft Metal is the dominant app material

The issue is implementation discipline.

The current playground and landing contain many local glass-like treatments, gradients, blur values and translucent surfaces that are not all governed by shared material tokens.

This makes the system feel rich but harder to control.

## What We Are Doing Well

- Glass is conceptually separated from core content in `VISUAL_LANGUAGE.md`.
- `design-system/surfaces.md` correctly defines stable content surfaces, diagnostic focus surfaces and interaction glass surfaces.
- `design-system/tokens.css` already includes glass, blur, radius, opacity, border and shadow foundations.
- Component rules already say cards should stay Soft Metal and controls can use glass.
- The app direction avoids turning dashboards and dense content into transparent panels.

## Current Risks

### 1. Too Many Local Glass Recipes

Risk:

Glass is implemented with many local combinations of:

- `rgba`
- `linear-gradient`
- `radial-gradient`
- `backdrop-filter`
- `filter: blur`
- custom shadows

This makes the material inconsistent.

Correction:

Create a small set of named material classes/tokens:

- `glass-control`
- `glass-nav`
- `glass-overlay`
- `glass-popover`
- `glass-search`
- `glass-fallback-solid`

Do not create new one-off glass recipes inside components.

### 2. Blur Values Are Too Broad

Risk:

The token scale includes high blur values up to 52px. That may be useful for backgrounds, but it should not be casually used for UI glass.

Correction:

For interactive UI glass:

- thin: 6-8px
- regular: 10-14px
- strong: 16-20px

Anything above 20px should be treated as atmospheric/background blur, not component glass.

### 3. Missing Fallback Rules

Risk:

`backdrop-filter` is now broadly available, but older browsers/devices may still fail or perform poorly.

Correction:

Every production glass class needs:

- default semi-solid fallback
- `@supports (backdrop-filter: blur(...))`
- reduced transparency mode
- increased contrast mode

### 4. Contrast Is Not Yet Formalized

Risk:

Glass text can look good in one background state and fail on another.

Correction:

Every glass surface that contains text must define:

- minimum surface opacity
- text color
- border strength
- optional scrim/tint layer
- worst-case background test

Normal text should target WCAG 4.5:1 contrast where applicable.

### 5. Too Much Glass Inside The Playground

Risk:

The playground uses glass to show material behavior, but it can make the component library feel less clear.

Correction:

Separate:

- Component Library: exact components, states, variants and tokens.
- Visual Language Lab: material physics, refraction, light and motion.

Glass exploration should not dominate component inventory.

### 6. Dark Mode Needs Its Own Material Rules

Risk:

RE-COMP is often dark, but dark glass can become muddy if opacity/border/highlight are not tuned.

Correction:

Define dark-mode glass separately:

- higher opacity than light glass
- softer highlight
- stronger but restrained border
- subtle inner edge
- no pure-white glow

### 7. Performance Budget Is Missing

Risk:

Multiple simultaneous `backdrop-filter` layers can hurt mobile performance.

Correction:

Adopt a glass performance budget:

- maximum 2-3 visible blurred glass surfaces per view
- avoid animating `backdrop-filter`
- avoid stacking glass over glass
- prefer opacity/transform animation over blur animation
- use pre-blurred imagery for heavy atmospheric effects

## RE-COMP Glass Usage Matrix

### Allowed

- bottom tab bar
- top navigation controls
- floating action controls
- search and command input
- filter chips when floating
- popover
- tooltip
- dropdown
- modal overlay
- bottom sheet
- toast
- AI composer

### Conditional

- insight module controls
- card-level action buttons
- CTA chips on imagery
- landing narrative overlays
- presentation captions

Use only when glass improves hierarchy or interaction.

### Not Allowed

- large dashboard cards
- dense data cards
- biomarker tables
- text-heavy panels
- entire page sections
- hero backgrounds
- decorative blobs
- permanent content containers

## Token Corrections To Consider

Do not implement immediately. Approve first.

Possible additions to `design-system/tokens.css`:

```css
--recomp-glass-ui-blur-thin: 8px;
--recomp-glass-ui-blur-regular: 12px;
--recomp-glass-ui-blur-strong: 18px;

--recomp-glass-ui-bg-dark: rgba(16, 22, 29, 0.58);
--recomp-glass-ui-bg-dark-strong: rgba(16, 22, 29, 0.72);
--recomp-glass-ui-border-dark: rgba(255, 255, 255, 0.16);
--recomp-glass-ui-highlight-dark: rgba(255, 255, 255, 0.24);

--recomp-glass-ui-bg-light: rgba(255, 255, 255, 0.58);
--recomp-glass-ui-bg-light-strong: rgba(255, 255, 255, 0.72);
--recomp-glass-ui-border-light: rgba(16, 24, 34, 0.12);

--recomp-glass-scrim-dark: rgba(0, 0, 0, 0.28);
--recomp-glass-scrim-light: rgba(255, 255, 255, 0.24);
```

## Production Class Pattern To Consider

Do not implement immediately. Approve first.

```css
.recomp-glass-control {
  background: var(--recomp-glass-ui-bg-dark-strong);
  border: 1px solid var(--recomp-glass-ui-border-dark);
  box-shadow: var(--recomp-shadow-glass);
}

@supports ((backdrop-filter: blur(12px)) or (-webkit-backdrop-filter: blur(12px))) {
  .recomp-glass-control {
    background: var(--recomp-glass-ui-bg-dark);
    backdrop-filter: blur(var(--recomp-glass-ui-blur-regular)) saturate(140%);
    -webkit-backdrop-filter: blur(var(--recomp-glass-ui-blur-regular)) saturate(140%);
  }
}

@media (prefers-reduced-transparency: reduce) {
  .recomp-glass-control {
    background: var(--recomp-glass-ui-bg-dark-strong);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```

## Priority Fixes

1. Keep current written philosophy.
2. Add named glass material tokens.
3. Add fallback and reduced transparency rules.
4. Reduce UI blur values to a controlled range.
5. Audit playground classes and replace local glass recipes with named materials.
6. Move glass experiments out of the main Component Library navigation.
7. Test glass on dark, photo, gradient, chart and dense text backgrounds.

## Decision

RE-COMP should not become more glassmorphic.

It should become more precise about glass.

Glass is a functional interaction material.

Soft Metal remains the dominant RE-COMP material.
