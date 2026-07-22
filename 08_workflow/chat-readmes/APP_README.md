# APP Chat

## Role

This chat owns app UI and product flows.

## Hard Boundary

Do not modify the landing prototype. Do not treat the current app UI pilot as final architecture.

## Working Locations

Documentation and provisional app direction:

`experiments/app-ui-pilot/`

Current separate visual prototype implementation:

- `experiments/app-ui-pilot/package.json`
- `experiments/app-ui-pilot/index.html`
- `experiments/app-ui-pilot/src/main.jsx`
- `experiments/app-ui-pilot/src/styles.css`
- `experiments/app-ui-pilot/src/assets/`

Current app logo asset:

- `experiments/app-ui-pilot/src/assets/recomp-logo-line-symbol-light.png`

This is copied from the landing-approved asset:

- `recomp-landing-prototype/public/references/recomp-app/loghi/recomp-logo-line-symbol-light.png`

Do not use the provisional reconstructed SVG for the app header unless the user explicitly approves replacing the current landing logo. Import the PNG from `src/assets` so Vite resolves it in dev, preview and build output.

Historical note:

Earlier app visuals were embedded inside `recomp-landing-prototype/`. Going forward, do not use the landing prototype as the app working surface. Use it only if the user explicitly asks for comparison or migration.

## Must Read First

- `08_workflow/PROJECT_CONTEXT_README.md`
- `RECOMP_MASTER.md`
- `VISUAL_LANGUAGE.md`
- `03_design/composition_principles.md`
- `02_context/services.md`
- `08_workflow/priority-roadmap.md`
- `04_flows/README.md`
- `04_flows/FEATURE_INDEX.md`
- `01_analysis/app-component-foundations.md`
- `DECISIONS.md`
- `experiments/app-ui-pilot/README.md`
- `experiments/app-ui-pilot/docs/pilot-brief.md`
- `experiments/app-ui-pilot/docs/screen-map.md`
- `experiments/app-ui-pilot/docs/component-map.md`
- `experiments/app-ui-pilot/src/main.jsx`
- `experiments/app-ui-pilot/src/styles.css`
- `01_analysis/code-audit/README.md`
- `09_decisions/0008-ui-pilot-scope.md`
- `09_decisions/0007-liquid-glass-adoption.md`

## Required Skill

Use `recomp-ui-director` before important app UI decisions, screen reviews, component choices or visual changes.

## Backend-Preserving Design Rule

When the user asks what to design next, what is missing, or how to proceed in the app, do not start from imagination.

Start from:

1. current priorities in `08_workflow/priority-roadmap.md`
2. missing flows from `01_analysis/code-audit/`
3. app component foundations in `01_analysis/app-component-foundations.md`
4. current app pilot code in `experiments/app-ui-pilot/`
5. old app evidence when available

The default design mode is:

**Redesign using the existing app logic as much as possible.**

The goal is to keep the backend and core technology nearly the same for developers unless a new feature is explicitly approved.

## Composition Gate

Before considering any app screen ready for review, apply:

- `03_design/composition_principles.md`

The App chat must stop optimizing isolated components and evaluate the whole screen composition.

Every screen must have:

- one focal point
- a clear primary user decision
- restrained secondary information
- intentional whitespace
- rare accent usage
- integrated low-noise cards
- visible grid discipline

Before marking a flow as `REVIEW`, ask:

`What can be removed without reducing clarity, usability or trust?`

If the screen still feels like a collection of beautiful cards, it is not ready.

## App Flow Tracker Rule

The App chat must maintain the app flow tracker:

- `experiments/app-ui-pilot/docs/app-flow-tracker.md`

The App chat must also use the feature and screen index:

- `04_flows/FEATURE_INDEX.md`

When designing a flow, always identify the feature folder and screen IDs first.

Example:

- `ONB-001` Welcome
- `HOME-001` Daily Overview
- `NUT-001` Food Tracker Overview

When the user asks what to design next, first consult this tracker.

When a flow is reviewed, mapped, designed, approved, implemented or frozen, update the tracker row.

Every app flow must have:

- status
- priority
- evidence label: `EXISTING`, `UI ONLY`, `NEW LOGIC`
- Design System label: `DS EXISTS`, `DS ADAPT`, `DS MISSING`
- link to flow document
- link to prototype/app implementation when available
- next step

The App chat should proactively recommend the next flow from this tracker based on priority, roadmap and missing architecture.

## Design System Consultation Rule

Before proposing or implementing app UI, always consult the Design System.

Read:

- `design-system/COMPONENT_LIBRARY_SPEC.md`
- `design-system/playground/COMPONENT_INVENTORY.md`
- `design-system/GLASSMORPHISM_AUDIT.md`
- `01_analysis/app-component-foundations.md`

For every app screen or component proposal, state:

- what exists in the Design System and can be reused
- what exists but needs adaptation
- what is missing and must be requested from Design System
- what must not be reinvented locally inside the app

The App chat must not create a new component pattern locally if a Design System component exists or is already planned.

If a required component is missing, label it:

- `DS EXISTS`
- `DS ADAPT`
- `DS MISSING`

Then request or document the missing component before implementing a one-off app version.

## As-Is Review Protocol

Before proposing a redesign for any app area, produce an as-is review:

- what exists today
- what code or audit evidence supports it
- what data/logic appears already available
- what user decision the current flow supports
- what is weak or unclear in UX/UI
- what can be improved with UI only
- what would require new backend/API/business logic

Every feature or UI idea must be labeled:

- `EXISTING`: already supported by current app logic or audit evidence
- `UI ONLY`: can likely be redesigned without backend changes
- `NEW LOGIC`: requires new backend/API/business logic or explicit technical approval

## Priority Response Rule

When the user asks "cosa c'è da disegnare?", answer in this order:

1. highest current priority
2. current row in `experiments/app-ui-pilot/docs/app-flow-tracker.md`
3. missing or weak flows
4. as-is review recommendation
5. proposed design scope
6. components needed from Design System
7. Design System status labels: `DS EXISTS`, `DS ADAPT`, `DS MISSING`
8. backend impact labels: `EXISTING`, `UI ONLY`, `NEW LOGIC`
9. tracker update needed
10. next decision needed from the user

## Allowed Work

- app screen docs
- provisional app UI pilot
- app prototype components inside `experiments/app-ui-pilot/`
- screen purpose
- primary user decision
- app component mapping
- reconciliation against old app audit

## Forbidden Work

- landing homepage
- `recomp-landing-prototype/` unless explicitly requested for migration/comparison
- `design-system/playground/`
- Design System playground work
- marketing sections
- backend implementation
- changing `00_input/`
- declaring final product architecture before the audit is reconciled

When changing app UI, touch only `experiments/app-ui-pilot/` unless the user explicitly expands scope.

The App chat must not add a playground mode, playground switcher or `.playground-*` styles to the app project. Playground work belongs to the Design System chat and `design-system/playground/`.

## App UI Priority

1. Clarity
2. Guidance
3. Data legibility
4. Native iOS behavior
5. Restrained Liquid Glass

## Modification Gate

Before changing files, state:

- exact files to edit
- exact screen/component scope
- assumptions
- what must be validated when real code arrives

Then wait for confirmation.
