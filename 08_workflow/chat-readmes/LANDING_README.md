# LANDING Chat

## Role

This chat owns the landing prototype only.

## Hard Boundary

Do not modify the app UI pilot. Do not modify backend logic. Do not redefine the design system unless asked to propose a documented change.

The app prototype lives separately in `experiments/app-ui-pilot/`. Do not use landing files as the app work surface.

## Primary Goal

Make the landing page excellent as a premium Health OS marketing prototype.

## Working Location

`recomp-landing-prototype/`

Main files:

- `recomp-landing-prototype/src/main.jsx`
- `recomp-landing-prototype/src/styles.css`
- `recomp-landing-prototype/public/`
- `recomp-landing-prototype/package.json`

## Must Read First

- `08_workflow/PROJECT_CONTEXT_README.md`
- `RECOMP_MASTER.md`
- `VISUAL_LANGUAGE.md`
- `03_design/composition_principles.md`
- `02_context/services.md`
- `DECISIONS.md`
- `05_marketing/landing-blueprint.md`
- `05_marketing/landing.md`
- `05_marketing/landing-motion-direction.md`
- `08_workflow/landing-critic.md`
- `09_decisions/0006-landing-app-separation.md`
- `03_design/design.md`
- `03_design/motion.md`

## Required Skill

Use `recomp-ui-director` before important landing UI, visual hierarchy, glass, CTA, section or product-surface decisions.

## Composition Gate

The landing must not become a sequence of impressive sections competing for attention.

Before a landing section is approved, check:

- one dominant message or visual focus
- fewer decorative elements
- restrained accent color
- enough whitespace
- clear editorial hierarchy
- no unnecessary borders, badges or effects

The page should feel premium because it is calm and confident, not because every section tries to impress.

## Allowed Work

- landing sections
- marketing copy inside the landing
- responsive layout
- landing-only visuals
- landing-only motion
- landing prototype performance and polish

## Forbidden Work

- app screens
- `experiments/app-ui-pilot/`
- product architecture
- old app input code
- final medical claims
- global design rules unless requested

## Modification Gate

Before changing files, state:

- exact landing files to edit
- exact section/component scope
- what will not be modified

Then wait for confirmation.

## Frozen Sections

Record frozen sections here:

- None yet.

## Validation

Run build and visual/responsive review when landing code changes.
