# RE-COMP Design System Status

## Current State

The design system is in foundation stage.

It contains:

- visual grammar direction
- product/design context
- app/landing surface separation
- component rules
- shared CSS tokens
- adoption rules

It is not yet a mature component library.

The current playground exploration is temporarily frozen. The next phase is to stabilize the actual Component Library through `design-system/COMPONENT_LIBRARY_SPEC.md`.

## What Exists

### Landing

Project:

`recomp-landing-prototype/`

Status:

- live Vite/React prototype
- visually developed
- uses landing-specific code and styling
- contains historical embedded app mockups from earlier exploration
- should now stay separate from app implementation

Role:

Communicate Health OS positioning through a premium, scroll-led marketing prototype.

### App

Project:

`experiments/app-ui-pilot/`

Status:

- separate runnable Vite/React prototype
- first implemented screen: Home / Daily Overview
- imports shared tokens from `design-system/tokens.css`
- provisional and not final product architecture

Role:

Validate the first operational app UI direction.

### Design System

Project:

`design-system/`

Status:

- shared documentation and token layer
- currently consumed by app pilot
- not yet consumed by landing
- playground exists but is exploratory, not authoritative

Role:

Provide a stable shared foundation while keeping app and landing separate.

## What Is Still Provisional

- Health Score formula.
- Final navigation.
- Actual role model.
- Body Check states.
- Human coach escalation behavior.
- Claude redesign comparison.
- Final migration architecture.
- Whether landing should consume shared implementation tokens.
- Shared component package structure.
- Current playground architecture.
- Component inventory completeness.
- Which playground labs remain after simplification.

## Open Product Dependency

The app pilot must still be reconciled with:

- `01_analysis/code-audit/`
- `00_input/original_app/`
- `00_input/claude_redesign/`

Do not treat the app pilot as production architecture until that reconciliation is complete.

## Current Build Verification

The app pilot has been verified with:

```bash
npm run build
```

inside:

`experiments/app-ui-pilot/`

## Next Design System Milestones

1. Approve `design-system/COMPONENT_LIBRARY_SPEC.md`.
2. Sync `design-system/playground/COMPONENT_INVENTORY.md` to the approved spec.
3. Simplify the playground around Tier 1 components.
4. Freeze or demote exploratory labs that distract from component clarity.
5. Stabilize token naming after core components are mapped.
6. Promote repeated app patterns into shared component primitives.
7. Decide whether landing should import shared tokens.
8. Reconcile app UI pilot with old app and Claude redesign code audit.
