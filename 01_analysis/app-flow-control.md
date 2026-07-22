# RE-COMP App Flow Control

Status: living control document.

Purpose: keep the app redesign work ordered, visible and updateable while the original app audit, app pilot and future Claude redesign are reconciled.

This is not final product architecture. It is the control board for deciding what to draw, validate and update next.

## Current Position

RE-COMP should not be redesigned as disconnected screens.

The work should proceed by product flows:

1. understand the old app behavior;
2. define the future Health OS behavior;
3. identify required screens and components;
4. design the flow;
5. validate what still depends on the real app code or future Claude redesign.

## Source Status

| Source | Status | Use |
| --- | --- | --- |
| Original app `ReCompV2.zip` | Available and partially audited | Evidence of implemented behavior |
| App UI pilot | Available | Provisional visual/product direction |
| Claude redesign package | Brief/design-system only, not full app code | Redesign intent, not architecture evidence |
| Future Claude app v2 | Pending | Must be compared when available |
| Design System | In progress | Must follow app flow needs, not abstract labs |

## Flow Board

| Priority | Flow | Status | Why It Matters | Next Action |
| ---: | --- | --- | --- | --- |
| 1 | Today -> Morning Check -> Today Recommendation | Ready to design first | Small enough to control, central to Health OS loop | Draft flow screens and states |
| 2 | Body Check / Baseline | Audit known, needs deeper field map | Defines starting body state | Extract real fields and states |
| 3 | Training Plan / Execution | High risk, broad old-app scope | Core user action and coach plan logic | Audit route/state depth before design |
| 4 | Nutrition / Diet / Food Tracking | High risk, broad old-app scope | Major daily behavior and coach logic | Audit meal, food, recipe and coach plan states |
| 5 | Reports / Trends -> Insights | Known as critical, not yet translated | Turns history into recommendations | Map old reports to future insight cards |
| 6 | Coach Operating Layer | High business importance | Coach manages users and decisions | Map active/new/inactive/client context |
| 7 | Chat / Guidance | Medium-high importance | Human guidance and future AI guidance | Separate coach, AI/system and support roles |
| 8 | Calendar / Planning | Medium-high importance | Plan timing and adherence | Map relationship to training/nutrition/checks |
| 9 | Auth / Role / Onboarding | Foundational but not first visual flow | Controls access and role routing | Keep as architecture validation track |
| 10 | Profile / Settings | Lower priority | Account, preferences, package state | Design after core product loops |

## Flow 01: Today -> Morning Check -> Today Recommendation

### Status

Ready to design first.

### Purpose

Capture the user's daily signal, interpret it and return them to Today with a clear next action.

### Primary User Decision

"What should I do today based on how I am doing?"

### Real Old-App Fields Found

From `MorningCheck.js` and `MorningCheckCoach.js`:

- today's weight
- sleep quality and hours from yesterday
- stress level from yesterday
- appetite from yesterday
- nutrition plan precision from yesterday

### Input Format

- Weight: integer plus decimal.
- Daily report answers: `0%` to `100%`, step `5%`.
- Date: current day in `dd-mm-yyyy`.

### Known States

- loading
- weight missing
- weight already saved
- daily report missing
- daily report already saved
- modified but not saved
- save success
- fallback to last known weight

### Proposed Screens

1. `Today / Morning check pending`
2. `Morning Check / Weight`
3. `Morning Check / Daily signals`
4. `Morning Check / Review and save`
5. `Today / Check complete`
6. `Today / Recommendation explained`

### Components Needed

- App Shell
- Top Toolbar
- Bottom Tab Bar
- Health State Summary
- Check Status Card
- Weight Input
- Percentage Picker / Slider
- Signal Question Row
- Save / Continue Button
- Recommendation Card
- Loading / Saved / Error states

### Assumptions

- The future version can improve the interaction model while preserving the real data model.
- The old app's four questions are still business-relevant until validated otherwise.
- The Today recommendation should be based on signal interpretation, not invented medical claims.

### Must Validate Later

- Whether all four questions are still required.
- Whether weight is mandatory before report save.
- Whether coach sees the same data or extra interpretation.
- Whether saved data affects reports, plan changes or coach alerts.
- Whether future Claude app v2 changes this flow.

## Flow 02: Body Check / Baseline

### Status

Known critical family, not ready for final design.

### Purpose

Establish and review body baseline.

### Known Old-App Areas

- Body fat
- Measurements
- Coach body check
- Pre-screening
- Measurement comparison

### Missing Before Design

- Exact fields.
- Required vs optional inputs.
- Photo requirements.
- Coach/customer differences.
- History and comparison behavior.

## Flow 03: Training Plan / Execution

### Status

High risk. Do not simplify yet.

### Purpose

Create, assign, execute and review training.

### Known Old-App Areas

- Training plans
- Training days
- Exercise execution
- Coach plan creation
- Plan assignment
- Future weeks
- Free workout
- Training status

### Missing Before Design

- Plan hierarchy.
- Set/rep/load rules.
- Timer and workout state.
- Completion/adherence rules.
- Coach assignment logic.

## Flow 04: Nutrition / Diet / Food Tracking

### Status

High risk. Do not reduce to macro cards yet.

### Purpose

Support diet plans, daily logging, meals, recipes and coach nutrition management.

### Known Old-App Areas

- Diet
- Food tracking
- Day food
- Add food
- Manage food
- Recipes
- Meals
- Coach diet creation

### Missing Before Design

- Meal structure.
- Macro calculation rules.
- Custom food behavior.
- Recipe/product relationship.
- Coach edit/assignment rules.

## Flow 05: Reports / Trends -> Insights

### Status

Needs translation.

### Purpose

Turn historical data into readable insight and next action.

### Known Old-App Areas

- Weekly report
- Reports
- Trends
- Metabolism tracker
- Calories vs weight vs body fat
- P-ratio

### Missing Before Design

- Which reports are most important.
- Which metrics are computed locally vs server-side.
- What should become an insight.
- What should remain a drilldown chart.

## Flow 06: Coach Operating Layer

### Status

Business critical.

### Purpose

Let coaches triage clients, inspect state and act in the correct client context.

### Known Old-App Areas

- Active users
- New users
- Inactive users
- Managed user context
- Coach reports
- Coach chat

### Missing Before Design

- Active/new/inactive definitions.
- Coach permissions.
- Client switch behavior.
- Coach alerts and review queues.

## Flow 07: Chat / Guidance

### Status

Needs role separation.

### Purpose

Support human coach communication and future AI/system guidance without confusion.

### Missing Before Design

- Who can message whom.
- Attachments/media behavior.
- Notification behavior.
- Difference between human coach, AI guidance and support.

## Flow 08: Calendar / Planning

### Status

Secondary but connected.

### Purpose

Show scheduled training, nutrition, check-ins, reports and appointments.

### Missing Before Design

- Event types.
- Coach vs client calendar behavior.
- Relationship to adherence.

## Flow 09: Auth / Role / Onboarding

### Status

Architecture validation track.

### Purpose

Route user into the correct product state.

### Known Dependencies

- user ID
- role
- language
- login state
- access/refresh tokens
- managed user for coach flows

### Design Note

Do not start here visually unless access logic becomes blocking.

## Flow 10: Profile / Settings

### Status

Later.

### Purpose

Account, preferences, privacy, package status and logout.

## What Is Missing From The Whole App Map

- Exact active route list.
- Endpoint usage by flow.
- AsyncStorage usage by flow.
- Active vs backup/legacy screen status.
- Future Claude app v2 comparison.
- Final navigation decision.
- Final light-first visual application across full app.

## Design System Implications

The Design System should prioritize components needed by the first flows:

1. App Shell
2. Top Toolbar
3. Bottom Tab Bar
4. Card
5. Icon Button
6. Button
7. Signal Metric
8. Recommendation Card
9. Form Input
10. Percentage Picker / Slider
11. List Row
12. Chart / Trend Visual
13. Empty / Loading / Error / Saved states
14. Coach / Guidance Entry

Do not prioritize new visual labs until these are stable.

## Update Rule

Update this file whenever:

- a new source is added;
- a flow is audited;
- a flow is designed;
- a flow is blocked;
- Claude app v2 changes the picture;
- a product decision changes priority.

## Next Recommended Task

Create the detailed screen-by-screen flow spec for:

`Flow 01: Today -> Morning Check -> Today Recommendation`

Expected output:

- screen list;
- screen purpose;
- user decision;
- data shown;
- components needed;
- states;
- assumptions;
- validation questions.

