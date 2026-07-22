# Flow Comparison

Status: first-pass flow comparison.

## Source Evidence

- Original: `flow-inventory.md`, `Pagine.js`, existing audit files.
- Redesign: `RECOMP_BRIEF.md`.

## Executive Reading

The redesign improves flow readability but does not yet prove flow completeness.

The original app has many fragmented flows. The redesign turns them into simpler screen narratives. The future product should keep the clarity of the redesign while preserving the original app's operational depth.

## Critical Flow Comparison

### 1. Entry, Login and Role Routing

Original:

- Splash, pre-login, login, registration, pre-home and role-specific home paths.
- Uses local state such as `ID`, `Ruolo`, `Login`, tokens and language.

Redesign:

- Mentions onboarding and settings.
- Does not define role/state routing.

Canonical need:

Session, role, language, package status and managed-user context must become explicit architecture states.

### 2. Customer Daily Home

Original:

- Home/menu acts as command center into training, nutrition, reports, body check, profile and chat.

Redesign:

- Home Dashboard centers greeting, morning check status, overview rings and quick actions.

Canonical need:

Adopt the daily decision model: current state, recommendation, action. Keep quick access to plans, coach and reports.

### 3. Morning Check

Original:

- Customer and coach variants exist.
- Exact fields and completion logic require deeper validation.

Redesign:

- 3-step check: weight, photo, notes/mood.

Canonical need:

Use a focused check sequence, but validate required data, completion state, coach review and downstream effects.

### 4. Coach Managed User

Original:

- Coach home, new/inactive users, menu coach and managed user state.
- `UtenteGestito` is business-critical.

Redesign:

- Lista Clienti and Menu Percorso Cliente.

Canonical need:

Make selected-client context visible, persistent and reversible. Preserve new/inactive queues if they are operationally active.

### 5. Body Check / Baseline

Original:

- Body check, body fat, measures, HRV, BPM, quick check and coach variants.

Redesign:

- Body Check, Measurements and Progress Photos.

Canonical need:

Keep body-state as a baseline model, not a gallery or visual progress section only.

### 6. Training

Original:

- Plan, day, exercise, exercise start, timers, status, free workout, coach creation and assignment.

Redesign:

- Training Plan screen with start workout and completed sets.

Canonical need:

Separate training into planning, assignment, execution and review. The redesigned Training Plan can be the entry surface, not the whole domain.

### 7. Nutrition

Original:

- Diet, food tracking, day food, add food, manage food, diet creation, meals, recipes, products and coach paths.

Redesign:

- Food Diary and Add Food.

Canonical need:

Separate nutrition into daily logging, plan targets, food database, custom foods, recipes/meals and coach plan management.

### 8. Reports / Trends / Insight

Original:

- Reports, weekly reports, trends, metabolism, calories vs weight/body fat, P-ratio.

Redesign:

- Progress / Analytics and Weekly Report.

Canonical need:

Translate reports into Health OS insights while preserving raw metric drilldowns and coach decision tools.

### 9. Chat and Guidance

Original:

- Customer and coach chat paths.

Redesign:

- Shared chat.

Canonical need:

Distinguish human coach guidance from future AI/system recommendations.

## Overall Verdict

The Claude redesign is a useful UX simplification layer. It should not be used as the canonical product architecture by itself.

## Next Validation

1. Locate full Claude app/Figma export if it exists.
2. For each simplified redesign screen, map which original routes it replaces.
3. Mark every original route as preserve, merge, replace, retire or unresolved.

