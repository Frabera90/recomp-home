# RE-COMP Component Rules

## Core Components

The product should be built from a small set of repeatable components:

- health score card
- metric card
- insight card
- recommendation card
- daily action card
- progress chart
- AI guidance panel
- coach note
- user state indicator
- segmented controls
- bottom navigation
- floating action button
- modal sheet
- profile summary

## Card Rules

Cards should have:

- clean hierarchy
- controlled spacing
- radius of 8px or less unless the system requires otherwise
- subtle borders
- no excessive shadows

Dark cards may use glass blur when they represent:

- key health data
- important insights
- AI analysis
- premium biometric information

## Button Rules

Buttons should be minimal and purposeful.

Use:

- icon buttons for repeated tools
- text buttons for clear actions
- icon plus text for important commands

Avoid decorative buttons that do not clarify the action.

## Liquid Glass Controls

Use `03_design/liquid-glass-token.md` for:

- premium CTA buttons
- floating controls
- app FABs
- input-like command bars
- selected cards and overlays

Liquid glass should be subtle, frosted and low-contrast.

Avoid bright borders, neon glow or overly white fills.

## Health Score Card

Required content:

- main score or state
- short label
- trend
- one explanation
- one action

Example structure:

- 82
- Ready
- Up 6% from last week
- Recovery is strong today
- Suggested action: strength session

## Insight Card

Required content:

- insight title
- short interpretation
- linked data point
- recommended action

Insights must be written in human language, not analytics language.

## AI Guidance Panel

The AI should not feel like a generic chatbot.

It should act as a decision layer that explains:

- what is happening
- why it matters
- what to do next

## Navigation

Navigation should support the core product domains:

- Today
- Health
- Nutrition
- Recovery
- Coach
- Profile

Navigation labels can evolve after the flow inventory is complete.

## Empty States

Empty states should be calm and actionable.

They should explain:

- what is missing
- why it matters
- what the user can do now

## Component Principle

Every component must help the user understand state, meaning or action.
