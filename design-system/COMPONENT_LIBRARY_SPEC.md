# RE-COMP Component Library Spec

## Status

Authoritative working spec for the RE-COMP Component Library.

The current playground is frozen as an exploration until this spec is approved and implemented deliberately.

## Purpose

This document defines the components RE-COMP actually needs, with their variants, sizes, states, props and token dependencies.

The goal is clarity, not quantity.

## Current Problem

The design system work drifted toward a broad laboratory:

- too many labs and sections
- a large monolithic playground file
- incomplete sync between inventory and implementation
- many `partial` statuses without clear completion criteria
- local live variables that do not map cleanly to reusable component variables

The next phase must turn the work into a clear Component Library.

## Operating Rule

Before changing playground code, define or update the component in this file first.

No new component should be added to the playground unless it has:

- purpose
- variants
- sizes
- states
- props
- tokens
- accessibility rules
- usage notes
- completion criteria

## Frozen Until Approved

Do not add more labs.

Do not expand the playground with new visual experiments.

Do not refactor `DesignPlayground.jsx`, `playground.css` or `componentRegistry.js` until a specific component scope is approved.

Current frozen exploration:

- `design-system/playground/DesignPlayground.jsx`
- `design-system/playground/playground.css`
- `design-system/playground/data/componentRegistry.js`

## Component Priority

### Tier 1: Needed For App Pilot

These are the core components required to build the RE-COMP app screens clearly.

1. Button
2. Icon Button
3. Text Input
4. Search / Command Input
5. Select / Menu
6. Checkbox
7. Radio
8. Switch
9. Chip / Tag
10. Segmented Control
11. Navigation Bar
12. Bottom Tab Bar
13. Card
14. Metric / Signal
15. Health Score Module
16. Recommendation Card
17. List Row
18. Table
19. Chart
20. Progress / Gauge
21. Modal
22. Sheet
23. Popover / Tooltip
24. Toast / Notification
25. Empty / Loading / Error State

### Tier 2: Useful Soon

These should wait until Tier 1 is clean.

1. Date / Time Input
2. Token Input
3. File Upload
4. Media Preview
5. Avatar
6. Badge / Status Dot
7. Timeline
8. Calendar / Heatmap
9. Coach Prompt
10. App Shell Pattern

### Tier 3: Exploration Only

These belong in visual language or motion exploration, not the core Component Library.

1. Motion Lab
2. Accessibility Lab
3. Material Physics boards
4. Refraction boards
5. Live token console
6. App Pattern composites

They can exist, but they must not replace the component inventory.

## Component Schema

Each component must use this schema:

```txt
Name
Purpose
Variants
Sizes
States
Props
Tokens
Accessibility
Usage Rules
Do Not
Completion Criteria
```

## Core Component Definitions

### 1. Button

Purpose:

Trigger a clear user action.

Variants:

- primary
- secondary
- tertiary
- ghost
- destructive
- success
- glass

Sizes:

- compact: 32px
- small: 36px
- medium: 42px
- large: 50px
- xlarge: 58px

States:

- default
- hover
- pressed
- focused
- loading
- disabled
- selected

Props:

- `variant`
- `size`
- `state`
- `iconStart`
- `iconEnd`
- `loading`
- `disabled`
- `fullWidth`

Tokens:

- radius
- typography
- spacing
- accent
- shadow
- motion
- focus ring

Accessibility:

- visible focus
- minimum target 44px when used as primary touch control
- loading state must preserve label or accessible name

Usage Rules:

Primary buttons are for committed actions. Glass buttons are for floating or contextual controls only.

Do Not:

- use glass for every button
- create neon glow
- use text-only pill buttons for repeated tools when an icon button is clearer

Completion Criteria:

- all variants visible
- all sizes visible
- forced states visible
- background matrix available
- code/tokens documented

### 2. Icon Button

Purpose:

Provide compact repeated actions.

Variants:

- solid
- soft
- glass
- ghost
- danger

Sizes:

- 32px
- 36px
- 40px
- 44px
- 52px

States:

- default
- hover
- pressed
- focused
- selected
- disabled

Props:

- `icon`
- `label`
- `variant`
- `size`
- `selected`
- `disabled`

Tokens:

- radius
- icon size
- hit target
- accent
- motion
- focus ring

Accessibility:

- icon-only buttons require accessible label
- selected state must not rely on color alone

Usage Rules:

Use for toolbars, filters, close buttons, navigation actions and repeated utility actions.

### 3. Text Input

Purpose:

Collect user-entered data clearly.

Variants:

- text
- email
- password
- number
- textarea
- prefix
- suffix
- clearable

Sizes:

- compact: 32px
- default: 40px
- comfortable: 48px
- large: 56px
- textarea: min-height 96px

States:

- default
- focus
- typing
- error
- success
- disabled
- loading

Props:

- `label`
- `placeholder`
- `value`
- `helperText`
- `errorText`
- `required`
- `disabled`
- `size`
- `variant`

Tokens:

- surface
- stroke
- radius
- typography
- spacing
- focus ring
- semantic colors

Accessibility:

- visible label or accessible label
- error text programmatically associated
- focus visible

Usage Rules:

Standard inputs use soft-metal or solid surfaces. Search and command inputs may use Liquid Glass.

Do Not:

- make standard fields look like large cards
- use glass for dense data entry
- force input height from demo containers

### 4. Search / Command Input

Purpose:

Search, filter or open command-like actions.

Variants:

- search
- command
- global search
- inline search

Sizes:

- default: 40px
- comfortable: 48px
- prominent: 56px

States:

- default
- focus
- typing
- results
- empty
- disabled

Props:

- `placeholder`
- `value`
- `leadingIcon`
- `trailingAction`
- `resultsCount`

Tokens:

- glass
- blur
- stroke
- radius
- focus ring
- typography

Usage Rules:

Allowed to use restrained Liquid Glass because it behaves like a control layer.

### 5. Select / Menu

Purpose:

Let the user choose one or more options.

Variants:

- dropdown
- combobox
- searchable select
- multi-select
- context menu
- profile menu

Sizes:

- compact
- default
- comfortable

States:

- closed
- open
- searching
- selected
- disabled
- error

Props:

- `label`
- `options`
- `value`
- `multiple`
- `searchable`
- `disabled`

Tokens:

- trigger surface
- overlay glass
- radius
- shadow
- motion
- focus ring

Accessibility:

- keyboard navigation
- active option
- escape/dismiss path
- selected state announced

### 6. Selection Controls

Includes:

- checkbox
- radio
- switch
- chip
- tag
- segmented control

Shared States:

- default
- hover
- pressed
- selected
- focused
- disabled

Shared Tokens:

- accent
- surface
- stroke
- radius
- motion
- focus ring

Usage Rules:

Selection controls must expose real selected state and not rely on decorative styling.

### 7. Navigation

Components:

- top navigation bar
- bottom tab bar
- floating dock
- tabs
- breadcrumb
- back button

States:

- default
- hover
- pressed
- selected
- disabled
- reduced motion

Tokens:

- glass
- blur
- accent
- icon size
- label typography
- motion
- hit target

Usage Rules:

Navigation can use Liquid Glass when it behaves like a persistent control layer.

### 8. Card

Purpose:

Contain stable health content, explanation or decision support.

Variants:

- metric
- insight
- recommendation
- plan
- biomarker
- nutrition
- recovery
- coaching
- comparison
- warning

States:

- static
- interactive
- selected
- expanded
- loading
- empty
- error
- locked

Props:

- `title`
- `value`
- `unit`
- `status`
- `trend`
- `description`
- `action`
- `variant`
- `state`

Tokens:

- soft metal surface
- border
- radius
- typography
- spacing
- shadow
- module accent

Usage Rules:

Cards are not glass. Floating controls on cards may be glass.

### 9. Metric / Signal

Purpose:

Show a health signal with meaning.

Variants:

- simple metric
- trend metric
- status metric
- evidence metric
- compact signal

States:

- normal
- improving
- declining
- warning
- loading
- empty

Props:

- `label`
- `value`
- `unit`
- `trend`
- `status`
- `interpretation`

Accessibility:

- value and unit must be readable together
- trend needs text meaning, not only arrow/color

### 10. Chart

Purpose:

Show health trends and comparisons without hiding meaning.

Variants:

- line
- area
- bar
- ring
- gauge
- sparkline
- heatmap
- biomarker range

States:

- loading
- animated
- selected
- empty
- error
- no-data

Props:

- `data`
- `range`
- `selectedPoint`
- `legend`
- `thresholds`
- `summary`

Tokens:

- chart stroke
- accent
- grid
- typography
- motion
- surface

Accessibility:

- text summary required
- reduced motion required
- tooltip content must exist as text

### 11. Overlay

Components:

- modal
- confirmation dialog
- sheet
- bottom sheet
- popover
- tooltip
- toast
- notification banner

States:

- entering
- visible
- dismissed
- success
- warning
- error
- loading

Tokens:

- glass for transient layer
- soft metal for dense content
- shadow
- blur
- radius
- motion
- focus trap

Usage Rules:

Use glass for transient controls and light overlays. Use solid/soft-metal for dense reading or data.

### 12. Empty / Loading / Error State

Purpose:

Explain unavailable or pending product states.

Variants:

- empty
- loading
- skeleton
- error
- no-data
- permission needed
- offline

Props:

- `title`
- `description`
- `action`
- `status`

Usage Rules:

State copy must be human and specific. No generic placeholder language.

## Completion Levels

### Draft

Component has purpose, rough variants and one preview.

### Usable

Component has variants, sizes, states, token list and accessibility notes.

### Stable

Component has documented usage rules, background checks, code mapping and consumer validation.

### Frozen

Component cannot be changed without explicit `UNFREEZE <component>`.

## Next Approved Sequence

1. Freeze current playground exploration.
2. Sync `COMPONENT_INVENTORY.md` with this spec.
3. Simplify `componentRegistry.js` to Tier 1 components only.
4. Keep Motion, Accessibility and Live Tokens as secondary tools, not navigation equals.
5. Split the monolithic playground only after the component model is approved.
6. Implement one component at a time, starting with Button.
