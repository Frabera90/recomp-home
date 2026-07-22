# RE-COMP Component Model

## Component Principle

Every component must help the user understand state, meaning or action.

Avoid components that exist only to make a screen look rich.

## App Component Foundation

### AppShell

Purpose:

Create a native-aware mobile structure without copying Apple.

Contains:

- top contextual header
- main content scroll
- bottom glass navigation
- optional floating AI entry point

Rules:

- mobile-first
- no permanent sidebar in pilot
- desktop can show mobile UI in a preview frame

### HealthScoreHero

Purpose:

Show the user's current state as the primary decision surface.

Must include:

- score or state
- label/status
- trend
- interpretation
- link to reason/details
- recommended action or next step nearby

Must not:

- appear as a decorative ring only
- be shown without context
- imply medical certainty

### DailyRecommendation

Purpose:

Turn current state into one primary action.

Must include:

- recommendation title
- reason
- expected action

Rule:

There can be only one primary recommendation above the fold.

### SignalMetric

Purpose:

Support the primary interpretation with evidence.

Must include:

- label
- value
- unit when relevant
- status
- optional mini trend

Limit:

Maximum three key signals above the fold.

### TodayPlanRow

Purpose:

Make the day executable.

Must include:

- activity
- type
- time or duration
- status
- next action

### InsightCard

Purpose:

Explain what the data means.

Must include:

- insight title
- short interpretation
- linked data point
- recommended action

Language must be human, not analytics-heavy.

### AI Guidance Panel / CoachEntry

Purpose:

Offer guidance without making chat the product identity.

Must explain:

- what is happening
- why it matters
- what to do next

Must be anchored to current user state.

### GlassTabBar

Purpose:

Native-aware navigation.

Rules:

- restrained glass
- tactile active state
- no Apple clone geometry
- readable labels

Provisional tabs:

- Today
- Plan
- Progress
- Coach

Final navigation is unresolved until code audit reconciliation.

## Landing Component Foundation

Landing components are more narrative than app components.

Current landing system includes:

- hero product reveal
- signal-to-insight sections
- app/product mockup sections
- dark glass insight modules
- sticky story sections
- product pillar cards
- trust/social proof strips
- final CTA/download area

Landing components may be more cinematic, but must stay product-specific.

## Shared Component Rules

Cards:

- clean hierarchy
- controlled spacing
- subtle border
- no excessive shadow
- avoid making every surface a card

Buttons:

- minimal
- purposeful
- icon buttons for repeated tools
- icon plus text for important commands
- text buttons for clear actions

Glass:

- use for interaction and transient control layers
- avoid for dense data and long text
- no bright outlines
- no neon glow

Motion:

- score count-up is allowed
- recommendation entrance after state is understood is allowed
- plan rows may reveal sequentially
- trend lines may draw once
- avoid constant decorative movement
