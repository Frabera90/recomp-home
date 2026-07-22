# App UI Pilot Component Map

## Foundational Components

- `HealthScoreHero`
- `SignalMetric`
- `DailyRecommendation`
- `TodayPlanRow`
- `GlassTabBar`
- `GlassAction`
- `InsightCard`
- `ContributorRow`
- `TrendChart`
- `CoachContextHeader`
- `SuggestedPrompt`
- `ActionRecommendation`

## Pilot V0 Build Order

1. `AppShell`
2. `GlassTabBar`
3. `HealthScoreHero`
4. `DailyRecommendation`
5. `SignalMetric`
6. `TodayPlanRow`
7. `GlassAction`
8. `CoachEntry`

Reason:

Home / Daily Overview is the strongest first pilot because it tests the central product promise: "How am I today and what should I do?"

## Not In V0

Do not build these yet:

- Biomarker report tables
- Clinician review flows
- Coach dashboard
- Franchise/admin views
- Final navigation model
- Medical decision logic

These depend on the comparative code audit.

## Onboarding / Registration Pilot Components

Status:

- Flow status: `REVIEW`
- Implementation: `experiments/app-ui-pilot/src/components/recomp-ui.jsx`
- Flow doc: `experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md`
- Tracker: `experiments/app-ui-pilot/docs/app-flow-tracker.md`

Purpose:

Prototype the entry path toward Home while preserving the old app/audit logic: registration, role gate, setup, baseline and guidance.

### Design System Mapping

`DS EXISTS`

- Button: used by onboarding primary/secondary actions.
- Text Input: used by registration fields.
- Card: used by choice groups, baseline state and guidance surfaces.
- Progress Indicator: used by onboarding step progress.
- List Row / Card grid: used by module and baseline summaries.
- Icon: lucide icons used in the same minimal family as the app pilot.

`DS ADAPT`

- App Shell: onboarding uses the same phone shell and scroll/safe-area frame but needs logged-out variants.
- Media Preview: onboarding needs full, half and absent media layouts.
- Radio / Choice Group: currently implemented as app-local selectable cards.
- Form Grid: currently app-local but mapped to Forms / Text Input.
- Coach / Guidance Entry: guidance model card distinguishes AI and professional review.

`DS MISSING`

- Onboarding Stepper / Setup Flow.
- Role Gate.
- Profile Completion State.
- Screening Required State.
- Auth Error / Token Expired State.
- AI vs Professional Guidance Label.

### App-Local Adapter Classes

The current pilot uses app-local classes with DS mapping markers:

- `ds-progress-indicator`
- `ds-flow-panel`
- `ds-card`
- `ds-card-compact`
- `ds-choice-group`
- `ds-form-grid`
- `ds-list-grid`
- `module-lines`

These are not promoted Design System components. They are local adapters so the pilot can be reviewed before component promotion.

### Passive Vs Interactive Rule

Composition rule:

If an element is not clickable, it must not look like a button or selectable card.

Use:

- passive line groups;
- integrated sections;
- low-contrast dividers;
- no hover-like elevation;
- no radio/selected affordance.

Reserve card/button treatment for actual interaction, selection, primary action or drilldown.

### Backend Impact

`EXISTING`

- Login, registration, role routing and pre-screening exist in old app audit.

`UI ONLY`

- Current onboarding visuals, selectable cards, fields and progress are prototype-only.

`NEW LOGIC`

- Any real auth behavior, token handling, role validation, saved profile fields, screening requirement or backend route gate.

## Component Rules

### HealthScoreHero

Purpose:

Show the user's current state as the primary decision surface.

Must include:

- Score
- Status
- Interpretation
- Link to reason/details

Must not:

- Appear as a decorative ring only
- Be shown without context

Pilot data:

- Score: `84`
- Status: `You're recovering well.`
- Interpretation: `Sleep and HRV are trending up. A moderate strength session fits today.`

### DailyRecommendation

Purpose:

Turn state into action.

Must include:

- One primary recommendation
- Reason
- Expected action

Must not:

- Show multiple competing recommendations

Pilot data:

- Title: `Recommended today`
- Action: `Moderate lower-body strength`
- Reason: `Keep load controlled and add 10 minutes of mobility.`

### SignalMetric

Purpose:

Support the primary interpretation.

Must include:

- Label
- Value
- Unit when relevant
- Status

Pilot metrics:

- Sleep: `7h 45m`, `Good`
- Recovery: `82%`, `Stable`
- HRV: `78 ms`, `Improving`

## AppShell

Purpose:

Create a native-aware mobile structure without copying Apple.

Contains:

- Top contextual header
- Main content
- Bottom glass navigation

Rules:

- Mobile-first.
- No permanent sidebar in the pilot.
- Desktop can show the same mobile UI in a premium preview frame if needed.

## CoachEntry

Purpose:

Expose AI guidance contextually without making the whole product feel like a chatbot.

Content:

- Current state prompt
- One suggested question
- Entry action

Example:

`Ask why today's load should stay moderate.`

### GlassTabBar

Purpose:

Native-aware navigation.

Must use restrained glass.

Must not copy Apple tab bar geometry exactly.

### CoachContextHeader

Purpose:

Prevent AI Coach from feeling generic by anchoring the conversation to current user state.

Must include:

- Current state summary
- Relevant plan or recovery context
