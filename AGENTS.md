# RE-COMP Project Instructions

Before changing product UI, read:

- `VISUAL_LANGUAGE.md`
- `02_context/product.md`
- `02_context/positioning.md`
- `02_context/product_philosophy.md`
- `03_design/constitution.md`
- `03_design/design_principles.md`
- `03_design/composition_principles.md`
- `03_design/design.md`
- `03_design/components.md`
- `03_design/motion.md`
- `03_design/ui_anti_patterns.md`
- `09_decisions/`

## Current Operating Mode

Work is currently split into two tracks:

1. Landing prototype: presentational marketing prototype in `recomp-landing-prototype/`.
2. App UI pilot: provisional product UI direction in `experiments/app-ui-pilot/`.

Do not treat the app UI pilot as final product architecture.

## Rules

- Treat product logic as provisional until the original app and Claude redesign codebases are audited.
- Do not alter incoming source code under `00_input/original_app/` or `00_input/claude_redesign/`.
- Do not invent medical claims.
- Mark assumptions explicitly.
- Preserve business-critical flows even when a redesign simplifies them.
- Separate visual presentation from implemented product behavior.

## UI Priority

1. Clarity
2. Guidance
3. Data legibility
4. Native iOS behavior
5. Restrained Liquid Glass
6. Composition before components

Liquid Glass is allowed mainly for navigation, floating actions, contextual controls, overlays and transient interaction surfaces.

Core data content must remain stable, readable and recognizably RE-COMP.

Before approving any screen, apply the Composition Gate:

- one focal point
- subtract before adding
- restrained accents
- integrated cards
- intentional whitespace
- grid discipline
- motion only when it explains hierarchy, relationship, transition or focus

## Visual Language Source Of Truth

`VISUAL_LANGUAGE.md` is the immutable visual language source of truth.

All UI work must preserve it unless the user explicitly asks to revise the visual language itself.

## For Every UI Task

1. Inspect existing context and components.
2. Define the screen purpose and primary user decision.
3. List assumptions.
4. Implement only within the requested scope.
5. Run visual and responsive review.
6. Report what must be validated when the real code arrives.
