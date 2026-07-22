# RE-COMP Component Inventory

## Status

Approved app-first inventory for the Design System playground.

Sources:

- `design-system/COMPONENT_LIBRARY_SPEC.md`
- `01_analysis/app-component-foundations.md`
- System Architect validation
- current app pilot in `experiments/app-ui-pilot/`
- old app audit in `01_analysis/code-audit/`

## Purpose

This inventory defines what the Design System playground should become.

The playground should be a clear Component Library for the RE-COMP app, not a broad visual laboratory.

## Core Rule

Every main navigation item must be a real component or component family used by the app.

Visual labs, motion studies, accessibility checks and material experiments are secondary tools.

They must not compete with the component inventory.

## Component Page Structure

Every component page should show:

1. Overview
2. Variants
3. Sizes, when relevant
4. States
5. Usage examples
6. Tokens
7. Accessibility notes
8. Code/API notes, once implementation stabilizes

Background testing appears only when the component depends on surface context.

## Status Labels

- `draft`: purpose and rough preview exist.
- `usable`: variants, sizes, states, tokens and accessibility notes exist.
- `stable`: usage rules, background checks, code mapping and consumer validation exist.
- `frozen`: cannot change without explicit approval.
- `demoted`: kept as secondary/exploration, not main navigation.
- `missing`: not implemented as a component page.

## Approved Playground Navigation

### 1. App Structure

Purpose:

Define the recurring app frame and navigation surfaces.

Components:

- App Shell
- Top Toolbar / Context Header
- Bottom Tab Bar

### 2. Actions

Purpose:

Define controls that trigger user action.

Components:

- Button
- Icon Button
- Coach / Guidance Entry

### 3. Daily State

Purpose:

Define the components that explain today's state and next action.

Components:

- Health Score / Daily State Module
- Recommendation Card
- Signal Metric
- Section Heading

### 4. Rows & Lists

Purpose:

Define repeatable operational rows for plans, measurements, nutrition, training and coach views.

Components:

- Plan Row / Task Row
- Nutrition / Meal Row
- Training Plan Row
- Biomarker Row
- Measurement Row
- Coach Client Row
- List / Table Data Surface

### 5. Cards

Purpose:

Define stable Soft Metal content containers.

Components:

- Base Card
- Insight Card
- Report Card
- Metric Card
- Recommendation Card, cross-reference from Daily State

### 6. Forms

Purpose:

Define input and selection controls for check-ins, body check, nutrition, coach notes and settings.

Components:

- Text Input
- Number Input
- Textarea
- Search / Command Input
- Select / Menu
- Checkbox
- Radio
- Switch
- Segmented Control
- Chip / Tag
- Body Check / Measurement Form

### 7. Charts

Purpose:

Define trend and progress visualization primitives.

Components:

- Trend Visual
- Ring / Gauge
- Biomarker Range
- Comparison Chart
- Progress Indicator

### 8. Overlays

Purpose:

Define transient surfaces and system feedback.

Components:

- Sheet
- Modal
- Popover / Tooltip
- Toast / Notification
- Confirmation Dialog

### 9. States

Purpose:

Define system states that appear across all domains.

Components:

- Empty
- Loading
- Error
- Locked
- Permission Needed
- Offline / Sync Failed

## Tier 1: Build First

These are approved as the real first Component Library scope.

### App Shell

Status: `missing`

Origin:

- app pilot
- required by future app flows

Used for:

- Today
- Plan
- Progress
- Coach
- Body Check
- Reports

Required:

- safe area
- scroll container
- top toolbar slot
- bottom tab slot
- optional floating action/composer slot

### Top Toolbar / Context Header

Status: `draft`

Origin:

- app pilot

Used for:

- brand lockup
- view title
- notifications
- back/context actions
- managed client context

Required states:

- default
- back context
- notification active
- managed client
- loading

### Bottom Tab Bar

Status: `draft`

Origin:

- app pilot

Material:

- Functional Liquid Glass

Required variants:

- label + icon
- icon-only
- dark app style
- compact dock

Required states:

- default
- selected
- pressed
- disabled
- reduced motion

### Button

Status: `draft`

Required variants:

- primary
- secondary
- tertiary
- ghost
- destructive
- success
- glass

Required sizes:

- compact 32px
- small 36px
- medium 42px
- large 50px
- xlarge 58px

Required states:

- default
- hover
- pressed
- focused
- loading
- disabled
- selected

Rule:

Preserve the strongest existing button visual language.

### Icon Button

Status: `missing`

Used for:

- notifications
- open detail
- close
- filters
- toolbar actions
- row actions

Required variants:

- solid
- soft
- glass
- ghost
- danger

Accessibility:

- icon-only controls require accessible labels.

### Section Heading

Status: `missing`

Used for:

- recommendations
- signals
- plans
- reports
- biomarkers
- nutrition
- coach messages

Required:

- label
- optional action
- optional status

### Health Score / Daily State Module

Status: `draft`

Origin:

- app pilot

Used for:

- Today
- Recovery
- Progress
- Reports
- Coach review

Required:

- score/value
- unit or scale
- trend
- state label
- interpretation
- optional chart/ring/orbit

### Recommendation Card

Status: `draft`

Origin:

- app pilot
- required by Health OS product loop

Used for:

- daily recommendation
- recovery action
- nutrition action
- training adjustment
- coach prompt

Required:

- title
- reason
- source signal
- primary action
- secondary action
- status/confidence when available

### Signal Metric

Status: `draft`

Origin:

- app pilot

Used for:

- sleep
- recovery
- HRV
- biomarkers
- stress
- movement
- adherence
- body composition

Required:

- label
- value
- unit
- status
- trend
- icon
- module tone
- compact and expanded modes

### Plan Row / Task Row

Status: `draft`

Origin:

- app pilot
- old app audit

Used for:

- today's plan
- training session
- mobility task
- meal/nutrition task
- check-in
- appointment

Required states:

- default
- done
- current
- skipped
- locked
- loading
- sync failed

### Card

Status: `draft`

Material:

- Soft Metal

Rule:

Cards are not glass. Floating controls on cards may use glass.

Required variants:

- base
- metric
- insight
- report
- recommendation
- biomarker
- nutrition
- recovery
- coaching
- warning

### Input And Form Controls

Status: `draft`

Used for:

- morning check
- body check
- measurements
- nutrition logging
- coach notes
- profile
- plan editing

Required:

- text input
- number input
- textarea
- search / command input
- select / menu
- checkbox
- radio
- switch
- segmented control
- chip / tag

Rule:

Standard inputs use soft-metal or solid surfaces. Search and command may use restrained Liquid Glass.

### Chart / Trend Visual

Status: `draft`

Used for:

- progress
- reports
- HRV
- sleep
- body composition
- calories vs weight vs body fat
- biomarkers

Required variants:

- line
- ring
- gauge
- sparkline
- biomarker range
- comparison

Required states:

- loading
- empty
- error
- no-data
- selected
- reduced motion

### Overlay System

Status: `draft`

Used for:

- details
- explanations
- confirmations
- filters
- coach prompts
- bottom sheets
- modals
- tooltips
- toasts

Required:

- sheet
- modal
- popover
- tooltip
- toast
- notification
- confirmation dialog

Material:

- functional glass for transient surfaces
- soft-metal for dense reading/data

### Empty / Loading / Error / Locked States

Status: `missing`

Required because every product family needs unavailable and pending states.

Required variants:

- empty
- loading
- skeleton
- error
- no-data
- permission needed
- offline
- sync failed
- locked

## Tier 2: Domain Components

Build after Tier 1 pages are clear.

### Body Check

Needed components:

- Measurement Form
- Body Composition Summary
- Measurement History Row
- Progress Photo Slot
- Required Field / Missing Baseline State
- Coach Review State

### Training

Needed components:

- Training Plan Header
- Training Day Row
- Exercise Row
- Set / Rep / Load Row
- Rest Timer / Active Workout Control
- Completion / Skip / Failed Sync State
- Coach Plan Assignment State

### Nutrition

Needed components:

- Meal Section
- Food Row
- Macro Target Module
- Recipe / Product Row
- Quantity Editor
- Coach Diet Plan Row
- No Target / Partial Log / Missing Data State

### Reports

Needed components:

- Insight Card
- Trend Detail Card
- Chart With Text Summary
- Weekly Report Table
- Metric Comparison Module
- Not Enough Data / Stale Data State

### Coach

Needed components:

- Managed Client Header
- Client Row
- Client Status Badge
- New / Active / Inactive Queue Tabs
- Coach Action Row
- Review Needed State
- Permission / Context Switch State

### Chat

Needed components:

- Conversation Row
- Message Bubble
- Composer
- Attachment Preview
- Human Coach vs AI/System Guidance Label
- Sending / Failed / Unread States

## Demoted Tools

These remain useful but must leave primary component navigation:

- Motion Lab: `demoted`
- Accessibility Lab: `demoted`
- Live Tokens: `demoted`
- Material Physics: `demoted`
- Refraction / Glass Experiments: `demoted`
- App Pattern Composites: `demoted`

Recommended secondary group:

- System Tools

## What To Freeze

- current button visual language, pending component-page cleanup
- Button background matrix, but only inside Button
- Soft Metal card rule
- restrained Liquid Glass rule
- app-first navigation hierarchy above

## What To Remove From The Mental Model

- global modes as the primary way to understand components
- generic background tester on every category
- responsive previews when layout does not actually change
- labs mixed with real components
- broad app pattern composites as main component categories

## Next Approved Implementation Sequence

1. Keep this inventory as approved direction.
2. Simplify `componentRegistry.js` to the approved navigation.
3. Keep demoted tools under `System Tools`.
4. Update the visible playground one group at a time.
5. Start with `App Structure`, then `Actions`, then `Daily State`.
6. Do not alter shared `tokens.css` unless a component token gap is explicitly identified and approved.
