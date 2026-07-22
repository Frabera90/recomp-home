# Component Audit

Status: first-pass component audit from original app architecture and available redesign design system.

## Original App Component Signals

Observed from existing audit:

- `ImportBase.js` acts as a broad import hub.
- Shared utilities, styles, translations, icons and dependencies are centralized by convenience rather than by product domain.
- Technical/service components include `ErrorBoundary`, `ConnectionMonitor`, `Cronometro`, `Timer` and API helpers.
- Many screens likely own their own data loading, state and presentation.

Architecture implication:

The original app does not appear to have a strict component system boundary. Components and screens are likely mixed with product logic.

## Claude Redesign Component System

The redesign defines a more explicit visual component system:

- Button Primary / Secondary / Ghost / Small.
- Card Default / Elevated / Row.
- Input Field.
- Icon Container.
- Badge / Pill.
- Avatar.
- Macro Progress Ring.
- Bottom Navigation.
- Step Indicator.
- Progress Bar.
- Toggle.

Strength:

The redesign gives consistent visual primitives and clear text/color rules.

Risk:

It is visual-system complete, but product-component incomplete. It does not define data states, permissions, loading/error states, empty states or domain variants.

## Component Gaps

Missing or not yet defined:

- Health status card with source and confidence.
- Recommendation card with action/owner/timing.
- Coach managed-client header.
- Metric card with trend, range and timestamp.
- Data-source freshness indicator.
- Empty/error/loading state components.
- Plan execution controls.
- Food log row with quantity and macro edit states.
- Report chart state component.
- Human coach message versus AI/system recommendation treatment.
- Permission-aware action components.

## Design-System Conflict

The Claude design system is dark premium iOS glass.

Later RE-COMP decisions accept:

- light-first app interface
- restrained Liquid Glass
- stable data content
- dark/glass modules only for selected insight or high-value moments

Implication:

The Claude components should be treated as visual exploration, not final design law.

## Canonical Component Direction

Future product components should be organized by two layers:

1. Foundation components: buttons, fields, cards, navigation, badges, sheets.
2. Product components: Today status, Health signal, Coach client, Training set, Nutrition meal, Report insight, Recommendation, Review request.

## Preservation Rules

- Do not replace service components like error handling with purely visual wrappers.
- Do not collapse coach/customer components without preserving permission differences.
- Do not make dense metric content glass-heavy if it harms legibility.
- Do not finalize visual components until state and data requirements are known.

## Assumptions

- Original reusable components require deeper inspection before final migration.
- The available Claude design system is representative of the redesign intent.

