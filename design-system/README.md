# RE-COMP Design System

This folder is the implementation-facing home for shared RE-COMP design system assets.

Strategic design documentation remains in `03_design/`.

## Purpose

Use this folder for shared tokens and, later, shared component primitives that can affect the app and site intentionally.

## Current Files

- `apple-style-direction.md`: immediate Apple-like direction for keeping the system simple and usable.
- `visual-grammar.md`: primary creative direction for Volume 1, focused on material physics, light, depth and motion before components.
- `tokens.css`: shared CSS custom properties for color, material, radius, shadow, typography and motion.
- `COMPONENT_LIBRARY_SPEC.md`: authoritative working spec for real components, variants, states, props and tokens.
- `GLASSMORPHISM_AUDIT.md`: review of glass usage, risks and corrections.
- `context.md`: product, positioning and design intent already learned.
- `surfaces.md`: how app and landing surfaces differ.
- `components.md`: current component model and behavior rules.
- `apple-liquid-glass-foundation.md`: Apple-sourced Liquid Glass baseline translated into RE-COMP rules.
- `adoption.md`: how app and landing should consume the design system.
- `status.md`: what has already been built and what is still provisional.
- `playground/`: Design System playground and review space.

## Rules

- Design System changes must be intentional and reviewed because they may affect downstream projects.
- Component work must follow `COMPONENT_LIBRARY_SPEC.md` before playground implementation.
- App implementation may import shared tokens.
- Landing may import shared tokens later, but only after the landing chat explicitly approves the migration.
- Do not put product logic here.
- Do not put screen-specific layout here.
- Keep playground work here, not in the App project.

## Future Direction

When stable, shared component primitives may be added here or in a package-like structure.

Until then:

- `03_design/` explains the design philosophy.
- `design-system/` contains implementation-facing shared tokens.
- `design-system/COMPONENT_LIBRARY_SPEC.md` defines the component library before code.
- `experiments/app-ui-pilot/` consumes app-facing tokens.
- `recomp-landing-prototype/` remains separate unless explicitly connected.

## Read Order For Design System Work

1. `apple-style-direction.md`
2. `visual-grammar.md`
3. `COMPONENT_LIBRARY_SPEC.md`
4. `GLASSMORPHISM_AUDIT.md`
5. `context.md`
6. `surfaces.md`
7. `components.md`
8. `apple-liquid-glass-foundation.md`
9. `tokens.css`
10. `adoption.md`
11. `status.md`
