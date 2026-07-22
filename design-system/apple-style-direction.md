# RE-COMP Apple-Style Design Direction

## Purpose

This is the first document the Design System chat must read when working on RE-COMP UI.

The goal is not to create a large enterprise design system.

The goal is to create a simple, understandable, Apple-like UI foundation that makes the RE-COMP app feel native, calm and premium while still carrying RE-COMP's own health intelligence identity.

## What Went Wrong

The previous direction drifted toward an enterprise design system:

- too many levels
- too many tokens
- too many component categories
- too much playground work
- too much theory before usable UI

That is not the immediate goal.

RE-COMP needs a focused app UI system first.

## Design Goal

Create an interface that feels close to Apple's current iOS UI behavior:

- native-feeling layout
- clear navigation
- restrained Liquid Glass
- large readable typography
- simple hierarchy
- tactile controls
- minimal visual noise
- content-first health guidance

Then customize it with RE-COMP:

- Health OS positioning
- recovery, nutrition, biomarkers and coaching modules
- dark diagnostic moments
- green, blue and violet accents
- proprietary health score and recommendation surfaces
- calm expert/AI guidance tone

## Core Rule

Apple is the interaction baseline.

RE-COMP is the product identity.

Do not copy Apple branding, exact layouts or system chrome. Use Apple's principles to make RE-COMP feel native-aware.

## Keep The System Small

For now, the design system has only five implementation layers:

1. Product Rules
2. Tokens
3. Materials
4. Components
5. Screens

Do not create a giant taxonomy until the app has more validated screens.

## Product Rules

Every app screen must answer:

- How am I today?
- Why?
- What should I do next?

Every component must support:

- state
- meaning
- action

If a component does not support one of these, remove it.

## Tokens

Keep tokens minimal.

Required token groups:

- color
- typography
- spacing
- radius
- material
- motion
- shadow

Do not create token sets for every theoretical possibility.

Add tokens only when a real component needs them.

## Materials

Use only three material categories.

### Content Surface

For health data, lists, charts, recommendations and reading.

Properties:

- stable
- readable
- mostly solid
- low transparency
- subtle border

### Diagnostic Surface

For recovery detail, high-value analysis and biometric interpretation.

Properties:

- dark graphite or near black
- high contrast
- controlled depth
- optional restrained glass

### Functional Glass

For controls and transient interaction.

Use for:

- tab bar
- navigation controls
- floating actions
- AI composer
- filters
- sheets
- overlays

Do not use for:

- dense data
- long text
- biomarker tables
- plan rows
- every card

## Components

Build only the components needed for the app pilot:

- AppShell
- TopBar
- GlassTabBar
- HealthScoreHero
- DailyRecommendation
- SignalMetric
- TodayPlanRow
- CoachEntry
- Sheet
- SegmentedControl

Do not build:

- enterprise component catalog
- marketing components
- dashboard component library
- abstract UI kit variants
- dozens of button/card styles

## Screens

Focus on app screens in this order:

1. Today / Daily Overview
2. Recovery Detail
3. AI Coach

Do not expand into settings, onboarding, reports, coach dashboard or franchise/admin flows until requested.

## Apple Liquid Glass Translation

Apple guidance to preserve:

- hierarchy: controls float above content
- harmony: shapes and movement feel native to the device
- consistency: materials adapt to context and accessibility settings

RE-COMP translation:

- content stays stable
- controls can be glass
- sheets can use glass at entry, then become readable
- tab bar can float
- AI composer can feel like a native command surface
- dark diagnostic views can feel premium but must stay readable

## Visual Tone

Default app:

- calm
- uncluttered
- native-feeling
- high contrast
- one primary action
- readable before expressive

Avoid:

- neon
- decorative gradients
- glass everywhere
- equal-weight dashboards
- generic fitness cards
- fake 3D
- excessive shadows
- component catalogs detached from screens

## Playground Rule

The playground is not the product.

Use the playground only to inspect:

- tokens
- materials
- one component at a time
- direct app impact

Do not turn the playground into the main design system output.

If a playground example is not connected to a real app component, remove it.

## Output Required From Design System Chat

When asked to work on the Design System, produce:

1. A short diagnosis.
2. Exact files to touch.
3. The simplest useful change.
4. The downstream effect on app or landing.
5. What remains intentionally unresolved.

Do not produce long enterprise taxonomies unless explicitly requested.

## Acceptance Criteria

A Design System output is good only if:

- a non-designer can understand it
- the App chat can apply it
- it makes the UI more Apple-native without becoming an Apple clone
- it reduces arbitrary styling
- it improves clarity, guidance or data legibility
- it does not add unnecessary layers
