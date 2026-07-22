# Onboarding To Food Tracker Flow

Status: AS-IS review and provisional flow map.

Purpose: reconstruct the real entry path toward Food Tracker before designing new app screens.

This document does not define final architecture. It uses current audit evidence and must be validated against the original app source when that code is available again.

## Current Priority

The near-term priority is Home + Food Tracker + AI/Professional guidance.

Food Tracker should not appear as a standalone calorie tracker. It should become part of the RE-COMP Health OS path:

1. identify the user and role;
2. confirm the user's profile/setup state;
3. establish baseline or screening needs;
4. land on Home / Today;
5. expose nutrition state;
6. open Food Tracker;
7. connect tracked nutrition to AI guidance and professional review.

## Source Evidence

Primary evidence:

- `08_workflow/priority-roadmap.md`
- `01_analysis/code-audit/flow-inventory.md`
- `01_analysis/code-audit/screen-inventory.md`
- `01_analysis/code-audit/state-model.md`
- `01_analysis/code-audit/user-role-model.md`
- `01_analysis/code-audit/endpoint-storage-register.md`
- `01_analysis/food-tracker-professional-review-flow.md`
- `01_analysis/app-component-foundations.md`
- current app pilot in `experiments/app-ui-pilot/src/components/recomp-ui.jsx`

Current limitation:

- the original app archive or expanded source is not present in the workspace path currently available to this task;
- route order, storage writes and endpoint calls must be revalidated from real source before final implementation.

## AS-IS Flow Map

### 1. Splash / Pre-Login

Likely screens:

- `SplashScreen`
- `PreLogin`
- `InfoApp`

Supported by:

- `screen-inventory.md`
- `flow-inventory.md`
- `state-model.md`

User decision:

"Do I enter the app, learn what it is, or authenticate?"

Known or likely state:

- `Login`
- `LINGUA`
- possible existing session tokens

Labels:

- Product impact: `EXISTING`
- Design impact: `UI ONLY` for visual hierarchy and entry clarity
- Backend impact: `NEW LOGIC` if session detection, language behavior or token handling changes

Weakness / risk:

- exact pre-login sequence is not verified from current source;
- language state may affect copy and layout;
- returning-user behavior must not be flattened into a generic splash.

### 2. Login / Registration

Likely screens:

- `Login`
- `Registrazione`

Supported by:

- `screen-inventory.md`
- `flow-inventory.md`
- `endpoint-storage-register.md`
- `user-role-model.md`

User decision:

"Am I signing in, creating an account, or recovering access?"

Known or likely state:

- `ID`
- `Login`
- `Ruolo`
- `LINGUA`
- `TokenLoginSito`
- `access_token`
- `refresh_token`

Labels:

- Product impact: `EXISTING`
- Design impact: `UI ONLY` for layout, copy clarity, form ergonomics and error states
- Backend impact: `NEW LOGIC` for changing auth, token handling, role assignment, validation or recovery

Weakness / risk:

- role values are unresolved;
- legacy token and modern token usage may both exist;
- login cannot be redesigned as a simple visual gate.

### 3. Role Gate / Pre-Home

Likely screens:

- `PreHome`
- `PreHomeCoach`

Supported by:

- `screen-inventory.md`
- `flow-inventory.md`
- `state-model.md`
- `user-role-model.md`

User decision:

"Where should this account go next?"

Known or likely state:

- `Ruolo`
- `ID`
- `UtenteGestito`, for coach context later

Labels:

- Product impact: `EXISTING`
- Design impact: `UI ONLY` for transparent transition, loading and role-specific messaging
- Backend impact: `NEW LOGIC` for changing role rules or route gates

Weakness / risk:

- customer and coach paths are meaningfully different;
- coach may enter a client-management context rather than personal Home;
- route gating must preserve inactive/new-user behavior.

### 4. Screening / Baseline Gate

Likely screens:

- `PreScreening`
- `PreScreeningCoach`
- later Body Check family screens

Supported by:

- `screen-inventory.md`
- `flow-inventory.md`
- `state-model.md`
- `missing-states.md`

User decision:

"What setup or baseline information must be completed before guidance can be trusted?"

Known or likely state:

- onboarding pending
- screening pending
- baseline missing or incomplete
- body state missing or available

Labels:

- Product impact: `EXISTING`
- Design impact: `UI ONLY` for step clarity and completion feedback
- Backend impact: `NEW LOGIC` for changing required fields, skip rules, or completion logic

Weakness / risk:

- exact required fields are not mapped yet;
- baseline is foundational to Health OS and cannot become a cosmetic card;
- coach/customer differences must be validated.

### 5. Home / Today

Current pilot screen:

- `Home / Daily Overview`
- app pilot components: `AppShell`, `AppToolbar`, `HeroSummary`, `HealthScoreHero`, `DailyRecommendation`, `SignalMetrics`, `TodayPlanRows`, `GlassTabBar`

Original app likely screens:

- `Home`
- `Menu`
- `MenuHome`

Supported by:

- current app pilot code
- `flow-inventory.md`
- `app-component-foundations.md`
- `food-tracker-professional-review-flow.md`

User decision:

"What should I do now based on my current state?"

Known or likely state:

- daily state
- morning check state
- body baseline state
- training plan state
- nutrition state
- coach/guidance state

Labels:

- Product impact: `EXISTING`
- Design impact: `UI ONLY` for arranging status, next action and module entry
- Backend impact: `NEW LOGIC` if the recommendation engine, professional review triggers or nutrition summaries are newly computed

Weakness / risk:

- current pilot is mock/provisional;
- Home must not become a static dashboard;
- professional guidance must be visible without making unsupported claims.

### 6. Nutrition Entry

Likely original screens:

- `Dieta`
- `DietaCoach`

Supported by:

- `screen-inventory.md`
- `flow-inventory.md`
- `endpoint-storage-register.md`
- `food-tracker-professional-review-flow.md`

User decision:

"Is my nutrition plan or daily intake aligned with my goal?"

Known or likely state:

- no active diet
- diet assigned
- daily target available or missing
- coach-managed diet

Labels:

- Product impact: `EXISTING`
- Design impact: `UI ONLY` for entry point, status and explanation
- Backend impact: `NEW LOGIC` for new summaries, guidance scoring, review triggers or plan changes

Weakness / risk:

- Nutrition is API-dense;
- old app includes diet planning, meals, recipes and coach management;
- do not compress this into only a macro card.

### 7. Food Tracker

Likely original screens:

- `FoodTracking`
- `FoodTrackingUtente`
- `GiornoFood`
- `AggiungiCibo`
- `AggiungiCiboUtente`
- `AggiungiProdotto`
- `AggiungiProdottoUtente`
- `GestioneCibo`
- `CreaPasto`
- `CreaRicetta`
- `ElencoPasti`
- `DettagliPasto`
- `DettagliRicetta`

Supported by:

- `food-tracker-professional-review-flow.md`
- `screen-inventory.md`
- `flow-inventory.md`
- `endpoint-storage-register.md`

User decision:

"What did I eat today, what is missing or inconsistent, and do I need AI guidance or professional review?"

Known or likely state:

- selected day
- meal groups
- logged food items
- quantity/editor state
- calorie and macro values
- micronutrients
- no food logged
- partial day logged
- custom food missing macro data
- coach diet draft
- target changed by coach

Labels:

- Product impact: `EXISTING`
- Design impact: `UI ONLY` for meal rows, summaries, progress and state clarity
- Backend impact: `NEW LOGIC` for AI interpretation, professional review request, paid consultation or new booking flows

Weakness / risk:

- food logging, plan targets, food database and coach authoring are distinct behaviors;
- August scope should be narrow and demonstrable;
- professional review must be presented as human review, not hidden behind generic AI coaching.

## Proposed First Design Scope

Design should begin with the entry path, but not build every branch at once.

Recommended first scope:

1. Onboarding / Registration shell
2. Role-aware setup checkpoint
3. Screening/Baseline required state
4. Transition into Home / Today
5. Home nutrition status entry toward Food Tracker

Do not design full Food Tracker until this path is approved and the old food flow is mapped deeper.

## Design System Consultation

### DS EXISTS

Reusable or already specified component families:

- Button
- Icon Button
- Text Input
- Select / Menu
- Checkbox
- Radio
- Switch
- Chip / Tag
- Card
- List Row / Plan Row
- Empty / Loading / Error State
- Bottom Tab Bar
- Navigation Bar / Top Toolbar

### DS ADAPT

Existing or planned components that need app-specific variants:

- App Shell for logged-out and setup flows
- Top Toolbar / Context Header for back context and step context
- Card for setup checkpoints
- Form controls for registration and screening
- Recommendation Card for Home guidance
- Coach / Guidance Entry for AI vs professional guidance
- Professional Service CTA for review or consultation surfaces

### DS MISSING

Components or patterns that should be requested from Design System before app-local invention:

- Onboarding Stepper / Setup Flow
- Role Gate
- Profile Completion State
- Screening Required State
- Auth Error / Token Expired State
- AI vs Professional Guidance Label
- Nutrition Status Entry
- Food Tracker Surface

## Do Not Reinvent Locally

The app should not create one-off local versions of:

- form fields;
- primary buttons;
- onboarding progress;
- status cards;
- navigation bars;
- list rows;
- empty/loading/error states;
- guidance labels;
- nutrition rows;
- review CTAs.

If the pattern does not exist, mark it `DS MISSING` and request it before implementation.

## UI Director Decision Gate For The First Future Screen

Decision:

Help the user understand whether they can enter the app, must register, or must complete setup before reaching Home and Food Tracker.

Component:

App Shell, Onboarding Stepper, Form Controls, Button, Status Card, Role Gate.

Material:

Soft Metal for main content and forms. Liquid Glass only for navigation, floating controls or transient overlays.

States:

Default, loading, focused, disabled, error, success, incomplete profile, screening required, token/session invalid.

Tokens:

Use shared RE-COMP spacing, typography, radius, surface, form, focus and motion tokens. Do not introduce local glass recipes.

Files:

No implementation files approved yet. This document is the only current change.

Do not touch:

- `recomp-landing-prototype/`
- `design-system/playground/`
- `design-system/tokens.css`
- `00_input/`
- app UI code until scope is approved

Validation:

Validate against original app source once available: exact route order, role values, storage keys, endpoints, error states and conditions that gate access to Home or Food Tracker.

## Next User Decision

Choose the first visual design target:

1. `Onboarding / Registration`
2. `Role Gate / Setup Required`
3. `PreScreening / Baseline Required`
4. `Home Nutrition Entry`

Recommended next step:

Start with `Onboarding / Registration` as a flow map, then design only the first screen state.
