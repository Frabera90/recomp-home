# RE-COMP App UI Foundation

## Status

Provisional. To be reconciled with the original app and Claude redesign codebases.

## Purpose

Define the first reusable UI direction for the RE-COMP app pilot.

This is not a final design system. It is a controlled foundation for three pilot screens:

- Home / Daily Overview
- Recovery Detail
- AI Coach

## Product Question

The app should help the user answer:

"How am I today, why, and what should I do next?"

## Surface Model

RE-COMP uses three surface types.

### 1. Stable Content Surfaces

Used for health data, recommendations and plan rows.

Properties:

- Light background
- High readability
- Low transparency
- Subtle border
- Minimal shadow
- No decorative glow

Use for:

- Health Score
- Signal metrics
- Recommendations
- Plan rows
- Biomarker rows
- Contributor rows

### 2. Diagnostic Focus Surfaces

Used for deeper, focused interpretation.

Properties:

- Dark graphite background
- Controlled glass
- Large data visualization
- Clear contextual explanation

Use for:

- Recovery Detail hero
- Score breakdown
- Trend explanation
- High-value insight panels

### 3. Interaction Glass Surfaces

Used for native-aware controls.

Properties:

- Translucent
- Blurred
- Tactile
- Responsive to touch/hover
- Never used as default content material

Use for:

- Tab bar
- Quick actions
- AI composer
- Filter chips
- Contextual overlays
- Floating actions

## App Shell Direction

Mobile-first.

Primary shell:

- Top contextual header
- Main content scroll
- Bottom glass navigation
- Floating AI entry point when contextually useful

Avoid:

- Desktop dashboard density
- Permanent sidebars in the mobile pilot
- Copying Apple tab bar geometry exactly

## Primary Components

### HealthScoreHero

Role:

Main daily state surface.

Must answer:

- What is my state?
- Is that good or concerning?
- What should I do?

Content:

- Score
- Status
- One-line interpretation
- Link to Recovery Detail

### DailyRecommendation

Role:

Single primary action.

Content:

- Recommendation title
- Reason
- Action
- Optional time/load/context

Rule:

There can be only one primary recommendation above the fold.

### SignalMetric

Role:

Support the recommendation with evidence.

Content:

- Label
- Value
- Unit
- Status
- Optional mini trend

Limit:

Maximum three key signals above the fold.

### TodayPlanRow

Role:

Make the day executable.

Content:

- Activity
- Type
- Time or duration
- Status
- Next action

### CoachEntry

Role:

Offer AI guidance without making chat the product identity.

Content:

- Context-aware prompt
- Small state summary
- Entry action

### GlassTabBar

Role:

Native-aware navigation.

Tabs, provisional:

- Today
- Plan
- Progress
- Coach

ASSUMPTION: Final navigation will be validated against code audit.

## Visual Language

Default:

- Light-first
- Off-white background
- Stable cards
- Dark text
- Soft gray dividers

Accent logic:

- Recovery: ice blue
- Nutrition: muted green
- Biomarkers: teal/violet
- Coaching: warm neutral

Use accents functionally, not decoratively.

## Motion Language

Motion explains state and hierarchy.

Allowed:

- Score count-up
- Recommendation entrance after score
- Plan rows reveal sequentially
- Glass controls respond to touch
- Trend lines draw once

Avoid:

- Constant decorative movement
- Bouncy cards
- Long blocking transitions
- Scroll effects on every section

## Content Voice

Use calm, direct language.

Example:

"You're recovering well. A moderate strength session fits today."

Avoid:

"Crush your goals" or "Optimize your wellness journey."

## Open Questions

- UNRESOLVED: Actual Health Score formula.
- UNRESOLVED: Exact role model.
- UNRESOLVED: Final navigation.
- UNRESOLVED: Whether human coach escalation exists in current code.
- UNRESOLVED: Which Body Check states are implemented.

