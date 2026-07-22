# Liquid Glass Token

## Purpose

Define the reusable liquid glass surface language for RE-COMP.

This token applies to:

- landing CTA buttons
- landing navigation
- floating controls
- input-like bars
- app cards
- app FABs
- selected premium data modules

## Reference Direction

Inspired by the Mobbin / Perplexity references in:

- `00_input/references/mobbin/card.png`
- `00_input/references/mobbin/esempio perplexity.png`

## Visual Character

The surface should feel:

- frosted
- quiet
- modern
- semi-transparent
- low-contrast
- premium
- not neon
- not overly bordered

## Core Recipe

Background:

- milky translucent white or gray
- low opacity
- never pure white unless it is an inner input field

Blur:

- strong blur
- moderate saturation

Border:

- extremely subtle
- mostly used to define the edge
- avoid bright blue or glowing borders

Shadow:

- soft external shadow only when needed
- more important: inner top highlight and inner lower shade

Typography:

- medium or semi-bold
- avoid overly chunky bold text
- small, precise, calm

## CSS Token

```css
--glass-bg: rgba(232, 235, 232, 0.24);
--glass-bg-strong: rgba(245, 247, 246, 0.46);
--glass-border: rgba(255, 255, 255, 0.16);
--glass-highlight: rgba(255, 255, 255, 0.34);
--glass-lowlight: rgba(0, 0, 0, 0.1);
--glass-shadow: 0 18px 60px rgba(0, 0, 0, 0.22);
--glass-blur: blur(28px) saturate(145%);
```

## Rules

- Do not add bright outlines.
- Do not use strong white fills for primary glass controls.
- Do not make every surface glass.
- Use glass to separate premium controls from the background.
- Keep the shape simple.
- Prefer 999px radius for pills and 8px radius for cards/panels.

## Landing Use

On the landing, the token should support:

- emotional video hero
- minimal centered copy
- subtle CTA
- navigation that becomes compact on scroll

## App Use

In the app, this token should support:

- dark glass insight cards
- floating action controls
- health score modules
- selected overlays
- premium biometric moments

The app should still remain readable and operational.

