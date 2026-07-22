# RE-COMP App Component Foundations

## Status

Working extraction for System Architect and Design System.

Sources:

- `experiments/app-ui-pilot/src/components/recomp-ui.jsx`
- `experiments/app-ui-pilot/src/styles.css`
- `design-system/COMPONENT_LIBRARY_SPEC.md`
- `01_analysis/code-audit/critical-screens-matrix.md`

## Purpose

Identify the app foundations and the components that will be used most often, so the Design System playground can focus on the real RE-COMP component library instead of broad visual experiments.

## Current App Pilot Structure

The current app pilot is a mobile daily overview.

Implemented structure:

1. `AppShell`
2. `AppStatusBar`
3. `AppToolbar`
4. `HeroSummary`
5. `HealthScoreHero`
6. `DailyRecommendation`
7. `SignalMetrics`
8. `TodayPlanRows`
9. `GlassTabBar`

Current tabs:

- Today
- Plan
- Progress
- Coach

Current screen job:

Help the user understand today's state and decide what to do next.

## Core Product Loop

The app should repeatedly express this loop:

1. Capture or receive signals.
2. Interpret the current state.
3. Explain why it matters.
4. Recommend the next action.
5. Track completion.
6. Review progress.
7. Escalate to human or AI guidance when needed.

Updated strategic requirement:

The app must clearly show that AI and professionals guide the user together. RE-COMP should not feel like a generic AI food/training app.

## Most Reused App Components

### 1. App Shell

Used for:

- client home
- plan
- progress
- coach
- future body check flows
- future reports

Includes:

- mobile frame/safe area
- scrollable content
- top contextual toolbar
- bottom tab bar
- optional floating action/composer

Design System priority:

High.

### 2. Top Toolbar / Context Header

Used for:

- brand lockup
- current view title
- notifications
- back/context actions
- profile/settings access

Design System priority:

High.

### 3. Bottom Tab Bar

Used for:

- primary app navigation
- Today
- Plan
- Progress
- Coach

Material:

Functional Liquid Glass.

Design System priority:

High.

### 4. Health Score / Daily State Module

Used for:

- home
- recovery
- progress
- reports
- coach review

Must support:

- score/value
- unit or scale
- trend
- state label
- interpretation
- optional visual chart/orbit/ring

Design System priority:

Very high.

### 5. Recommendation Card

Used for:

- daily recommendation
- recovery action
- nutrition action
- training adjustment
- coach prompt
- plan change

Must support:

- title
- reason
- source signal
- primary action
- secondary action
- confidence or status when available

Design System priority:

Very high.

### 6. Signal Metric

Used for:

- sleep
- recovery
- HRV
- biomarkers
- stress
- movement
- adherence
- body composition

Must support:

- label
- value
- unit
- status
- trend
- icon
- module tone
- compact and expanded modes

Design System priority:

Very high.

### 7. Plan Row / Task Row

Used for:

- today's plan
- training session
- mobility task
- meal/nutrition task
- check-in
- supplement/service task
- appointment or consultation

Must support:

- icon
- title
- metadata
- completion state
- next/detail affordance
- disabled/locked state

Design System priority:

Very high.

### 8. Section Heading

Used throughout:

- recommendations
- key signals
- plans
- reports
- biomarkers
- nutrition
- coach messages

Must support:

- label
- optional action
- optional status

Design System priority:

High.

### 9. Icon Button

Used for:

- notifications
- open detail
- close
- filters
- toolbars
- row actions
- coach/message actions

Must support:

- solid
- soft
- glass
- ghost
- danger
- selected
- disabled

Design System priority:

Very high.

### 10. Card

Used for:

- health score
- signal summary
- insight
- recommendation
- recovery
- nutrition
- biomarker
- coach
- report
- comparison

Material:

Soft Metal, not glass.

Design System priority:

Very high.

### 11. Chart / Trend Visual

Used for:

- progress
- reports
- HRV
- sleep
- body composition
- calories vs weight vs body fat
- biomarkers

Must support:

- line
- ring
- gauge
- sparkline
- biomarker range
- comparison
- loading/empty/error
- text summary

Design System priority:

High.

### 12. List / Table Data Surface

Used for:

- biomarkers
- measurements
- training exercises
- meal lists
- user lists for coach
- reports

Must support:

- dense rows
- grouped rows
- sortable table later
- selected/active row
- empty/loading/error

Design System priority:

High.

### 13. Input And Form Controls

Used for:

- morning check
- body check
- measurements
- nutrition logging
- coach notes
- profile
- plan editing

Needed controls:

- text input
- number input
- textarea
- search/command input
- select/menu
- checkbox
- radio
- switch
- segmented control
- chip/tag

Design System priority:

High.

### 14. Overlay System

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

Material:

Functional glass for transient surfaces.

Design System priority:

Medium-high.

### 15. Coach / Guidance Entry

Used for:

- AI coach
- human coach
- explanation prompt
- chat entry
- escalation path

Must distinguish:

- AI guidance
- human coach
- support/chat
- specialist review
- paid professional consultation
- booked analysis

Design System priority:

High, but after core home components.

### 16. Professional Service CTA

Used for:

- book analysis
- specialist review
- professional consultation
- paid service entry
- nutrition/training/body check review

Must support:

- service title
- price or paid indicator when available
- professional type
- reason to book
- status: available, requested, scheduled, completed, locked
- CTA: book, request review, view result

Design System priority:

High.

### 17. Food Tracker Surface

Used for:

- near-term food tracker milestone
- meal logging
- food review
- AI nutrition guidance
- professional nutrition review

Must support:

- meal row
- food item row
- quantity/editor surface
- macro/energy summary
- AI interpretation
- professional review CTA
- empty/loading/error/sync failed states

Design System priority:

Very high for August 2026 milestone.

## Component Frequency Ranking

Highest frequency:

1. Section Heading
2. Icon Button
3. List Row / Plan Row
4. Card
5. Signal Metric
6. Top Toolbar
7. Bottom Tab Bar
8. Button
9. Input
10. Chip / Tag

Highest product importance:

1. Health Score / Daily State Module
2. Recommendation Card
3. Signal Metric
4. Plan Row / Task Row
5. Coach / Guidance Entry
6. Chart / Trend Visual
7. Body Check / Measurement Form
8. Nutrition / Meal Row
9. Training Plan Row
10. Report / Insight Card
11. Professional Service CTA
12. Food Tracker Surface

## Old App Audit Implications

The old app shows the future product is larger than the pilot.

Critical families to preserve:

- auth and role routing
- client daily home
- coach operating layer
- body check / baseline
- morning check / daily signal
- training plan system
- nutrition / diet
- reports and trends
- chat and guidance

New stakeholder priority:

- food tracker modification by end of August 2026
- app must expose professional guidance, not only AI guidance
- professional services include analysis booking, specialist review and paid consultation

Design System implication:

The playground should prioritize components that can serve these families, especially rows, forms, cards, metrics, charts, overlays and navigation.

## Recommended Playground Update

Do not add new visual labs.

Update the playground around these first component groups:

1. Navigation
   - Top Toolbar
   - Bottom Tab Bar
   - Back / Context actions

2. Actions
   - Button
   - Icon Button

3. Data Surfaces
   - Card
   - Signal Metric
   - Health Score Module
   - Recommendation Card

4. Lists And Rows
   - Plan Row
   - Measurement Row
   - Biomarker Row
   - Training Row
   - Nutrition Row

5. Forms
   - Text Input
   - Number Input
   - Search / Command
   - Select / Menu
   - Checkbox / Radio / Switch / Segmented / Chip

6. Charts
   - Trend Line
   - Ring / Gauge
   - Biomarker Range
   - Comparison Chart

7. Overlays
   - Sheet
   - Modal
   - Popover / Tooltip
   - Toast

8. States
   - Empty
   - Loading
   - Error
   - Locked
   - Permission Needed

9. Professional Services
   - Book Analysis CTA
   - Specialist Review Card
   - Professional Consultation CTA
   - AI vs Professional Guidance Label

10. Food Tracker
   - Meal Row
   - Food Item Row
   - Quantity Editor
   - Nutrition Summary
   - Review Request CTA

## What To Demote

These should move out of primary navigation:

- Motion Lab
- Accessibility Lab
- Live Tokens
- Material Physics explorations
- broad App Pattern composites

They are useful support tools, but not the main Component Library.

## Design System Next Step

Update `design-system/playground/COMPONENT_INVENTORY.md` first.

Then propose a simplified `componentRegistry.js` structure.

Do not edit playground JSX/CSS until the inventory is approved.

## System Architect Next Step

Map the Food Tracker current state and define the August milestone scope before App implementation.
