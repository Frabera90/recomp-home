# RE-COMP Surface Model

## Core Rule

Landing and app share brand values, design quality and selected tokens.

They do not share the same layout system or interaction model.

## App Surface Model

The app is a working health interface.

It prioritizes:

- repeated use
- decision clarity
- data legibility
- calm guidance
- native-aware controls

Apple Liquid Glass terminology maps to the RE-COMP app model as follows:

- Content layer: stable health data, plans, reports and reading surfaces.
- Diagnostic focus layer: deeper interpretation moments and selected high-value analysis.
- Functional glass layer: navigation, controls, sheets, overlays and temporary interaction surfaces.

### Stable Content Surfaces

Used for:

- health score
- signal metrics
- recommendations
- plan rows
- biomarker rows
- contributor rows
- reports and dense data

Properties:

- high readability
- low transparency
- subtle borders
- minimal shadow
- stable layout
- no decorative glow

These surfaces should not default to Liquid Glass.

### Diagnostic Focus Surfaces

Used for:

- recovery detail
- score breakdowns
- trend explanation
- high-value insight panels
- deeper biometric interpretation

Properties:

- dark graphite or near-black background
- controlled depth
- large data visualization
- clear contextual explanation
- restrained glass only when hierarchy needs it

### Interaction Glass Surfaces

Used for:

- tab bar
- quick actions
- AI composer
- filter chips
- contextual overlays
- floating actions

Properties:

- translucent
- blurred
- tactile
- responsive to touch/hover
- not used for dense reading

Apple alignment:

- This is the functional glass layer.
- It should float above content rather than replace content surfaces.
- Related controls should be grouped.
- Glass should adapt or fall back under reduced transparency, increased contrast and reduced motion conditions.

## Landing Surface Model

The landing is a narrative product and brand surface.

It prioritizes:

- first-viewport product clarity
- premium impression
- Health OS positioning
- scroll rhythm
- product visibility
- human/editorial credibility

Landing may use:

- cinematic product sections
- richer scroll-led motion
- product mockups
- dark glass insight reveals
- editorial imagery
- sticky storytelling

Landing must avoid:

- generic SaaS dashboards
- abstract decoration without product meaning
- generic fitness stock aesthetics
- vague copy
- too many floating cards

## Shared Rules

- Use one primary accent per screen/section.
- Effects must support hierarchy.
- Motion must explain relationships.
- Dark surfaces are moments, not the default system tone.
- Data modules must communicate state, meaning and action.

## Current Separation

Landing project:

- `recomp-landing-prototype/`

App project:

- `experiments/app-ui-pilot/`

Shared design system:

- `design-system/`

Landing is not currently wired to `design-system/tokens.css`.

App currently imports `design-system/tokens.css`.
