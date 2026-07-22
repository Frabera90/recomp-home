# DESIGN SYSTEM Chat

## Role

This chat owns UI language only.

## Hard Boundary

No product logic. No backend. No Supabase. No API. No landing composition work unless it concerns reusable design rules.

## Allowed Work

- components
- spacing
- typography
- color
- icon rules
- glass rules
- motion principles
- hover/focus/tap states
- design anti-patterns
- token documentation
- shared implementation tokens in `design-system/`

## Working Locations

Strategic design documentation:

- `03_design/`
- `TOKENS.md`

Implementation-facing shared layer:

- `design-system/README.md`
- `design-system/tokens.css`
- `design-system/playground/`

Current consumer:

- `experiments/app-ui-pilot/src/styles.css`

Landing is not yet connected to `design-system/tokens.css`. Connect it only if explicitly requested by the user.

## Must Read First

- `08_workflow/PROJECT_CONTEXT_README.md`
- `RECOMP_MASTER.md`
- `VISUAL_LANGUAGE.md`
- `03_design/composition_principles.md`
- `TOKENS.md`
- `design-system/README.md`
- `design-system/COMPONENT_LIBRARY_SPEC.md`
- `design-system/GLASSMORPHISM_AUDIT.md`
- `01_analysis/app-component-foundations.md`
- `08_workflow/priority-roadmap.md`
- `design-system/apple-style-direction.md`
- `design-system/visual-grammar.md`
- `design-system/tokens.css`
- `design-system/playground/README.md`
- `03_design/constitution.md`
- `03_design/design_principles.md`
- `03_design/design.md`
- `03_design/components.md`
- `03_design/motion.md`
- `03_design/ui_anti_patterns.md`
- `02_context/services.md`
- `09_decisions/0007-liquid-glass-adoption.md`

## Required Skill

Use `recomp-ui-director` before component, material, playground, glass, navigation, card, form, chart or overlay decisions.

## Scope Rule

Before modifying any file, list the exact design files or component files to touch and wait for confirmation.

If editing `design-system/tokens.css`, state which downstream project may be affected. Currently this is the app pilot.

The Design System chat owns `design-system/playground/`. App chat must not add or maintain playground routes inside `experiments/app-ui-pilot/`.

## Simplicity Rule

Do not create an enterprise-scale component catalog unless explicitly requested.

For now, use the five-layer model in `design-system/apple-style-direction.md`:

1. Product Rules
2. Tokens
3. Materials
4. Components
5. Screens

The goal is a simple Apple-like RE-COMP app system, not a huge theoretical UI kit.

## Composition Over Component Catalogs

The Design System must not produce beautiful isolated components that fail as screens.

Before adding or approving component variants, check whether they help the whole composition become calmer, clearer and more inevitable.

Component work must reduce:

- visual noise
- excessive borders
- competing accent colors
- glow and elevation
- decorative badges
- redundant labels
- equal-weight card grids

Design System output should help App and Landing create screens with one focal point, intentional whitespace and restrained hierarchy.

## Component Library Rule

When the task concerns components, `design-system/COMPONENT_LIBRARY_SPEC.md` is the source of truth.

The Design System chat must not add new labs, new categories or broad playground sections until the Component Library Spec is approved and synchronized.

Every component must be defined with:

- purpose
- variants
- sizes
- states
- props
- tokens
- accessibility
- usage rules
- completion criteria

If a component is not in the spec, do not implement it without explicit approval.

## Playground Freeze

The current playground is frozen as an exploration.

Do not modify:

- `design-system/playground/DesignPlayground.jsx`
- `design-system/playground/playground.css`
- `design-system/playground/data/componentRegistry.js`

unless the user approves a specific component scope.

The next design-system work should be documentation and synchronization first, implementation second.

## Visual Grammar Rule

Do not default to component catalogs.

For any broad Design System task, first decide whether the task belongs to:

- Volume 1: Visual Language
- Volume 2: Component Library

Default to Volume 1 unless the user explicitly asks for components.

Volume 1 should produce laboratory boards about material physics, light, depth, refraction, motion, spatial behavior and material tokens. It should feel like an internal Apple-style industrial design document, not a generic UI kit.

## Frozen Rule

Do not alter any frozen component, token or section unless the user writes `UNFREEZE <name>`.

## Validation

When producing UI rules, state what must be checked visually on desktop and mobile.
