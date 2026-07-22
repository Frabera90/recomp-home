# RE-COMP Playground Implementation Phases

Rule:

Do not implement the entire workbench in one patch.

Proceed by category and preserve approved sections unless the current task explicitly targets them.

## Phase 0 — Architecture Preparation

Goal:

Create the planning layer and freeze the target architecture.

Status:

- `COMPONENT_INVENTORY.md`: created
- `PLAYGROUND_ARCHITECTURE.md`: created
- `IMPLEMENTATION_PHASES.md`: created

No UI rewrite in this phase.

## Phase 1 — Workbench Shell

Goal:

Replace the vertical-page mental model with a true three-panel workbench.

Scope:

- left sidebar with search, categories, status, favorites and recent
- central canvas with selected component
- right inspector with tabs
- keep current working visual examples as provisional data

Files likely touched:

- `DesignPlayground.jsx`
- `playground.css`

Do not yet build the full component inventory.

Acceptance:

- no infinite vertical page as primary experience
- selecting a component changes the canvas
- inspector controls affect selected component/global tokens
- existing buttons/cards are preserved visually unless selected for work

## Phase 2 — Registry And Selection Model

Goal:

Move categories and components into a registry.

Scope:

- create component family data
- mark status: complete/partial/missing
- support selected component
- support search
- support favorites/recent in local state

Files likely touched:

- `DesignPlayground.jsx`
- optionally `data/componentRegistry.js`

Acceptance:

- all requested families A-K appear in the sidebar
- missing items are visible but not fake-complete
- current partial items map to existing demos

## Phase 3 — Actions Category

Goal:

Implement Actions first as the first complete family.

Components:

- primary button
- secondary button
- tertiary button
- ghost button
- outline button
- destructive button
- success button
- glass button
- prominent glass button
- icon button
- circular icon button
- toolbar button
- floating action button
- split button
- menu button
- disclosure button
- async button
- loading button
- confirmation button
- full-width button
- compact button
- segmented button

Acceptance:

- preview
- variants
- sizes
- real interactive states
- inspector state forcing
- RE-COMP example
- responsive demo
- accessibility demo
- code/tokens panel

## Phase 4 — Text Inputs Category

Goal:

Implement text input family with validation and typing states.

Acceptance:

- real typing
- focus/blur
- validation
- clearable behavior
- command input
- inspector controls
- code/tokens panel

## Phase 5 — Selection Category

Goal:

Implement checkbox/radio/switch/chips/select-like controls.

Acceptance:

- keyboard and pointer interaction
- selected/disabled/error states
- multi-select behavior
- inspector controls

## Phase 6 — Navigation Category

Goal:

Implement navigation family, including the Liquid Glass navigation bar.

Special focus:

- GlassEffectContainer-like behavior
- gooey/metaball transition only where appropriate
- reduced motion fallback
- background tester

Acceptance:

- bottom navigation
- top navigation
- sidebar variants
- tabs
- command palette
- menus
- accessibility keyboard paths

## Phase 7 — Overlays Category

Goal:

Implement overlays and feedback surfaces.

Important correction:

- Toasts are rounded rectangles, not capsules.

Acceptance:

- modal, dialog, popover, tooltip, dropdown, sheets, toast, snackbar, banner
- open/close interactions
- focus trap where relevant
- reduced motion mode

## Phase 8 — Data Display, Cards, Lists/Tables, Charts

Goal:

Build the data-heavy health intelligence components.

Rules:

- core cards remain soft-metal surfaces
- charts require tooltip, hover, selection, legend, range filter and data states
- no raw metric without interpretation

## Phase 9 — Media, Upload And App Patterns

Goal:

Complete remaining inventory and RE-COMP app scenarios.

Scope:

- media/upload components
- login/onboarding/settings/profile/search/offline/error patterns

## Phase 10 — Validation Pass

Goal:

Audit workbench for completeness.

Checks:

- every requested component is mapped
- statuses are accurate
- no placeholder generic content
- every component has RE-COMP scenario
- tokens update globally
- accessibility modes work
- responsive previews work
- build passes
