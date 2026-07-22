# Migration Guardrails

Purpose: keep the redesign from becoming a beautiful but incomplete rewrite.

These guardrails are based on the first-pass audit of `ReCompV2.zip`.

## Core Principle

Do not redesign RE-COMP as a set of screens.

Redesign it as a system of decisions:

1. What is the user's current state?
2. What changed?
3. What should they do next?
4. Who, if anyone, needs to intervene?
5. What should be remembered for the next cycle?

## Non-Negotiable Preservation Rules

### 1. Preserve Role Logic Before Visual Simplification

The original app appears to support at least:

- Client/user
- Coach
- Managed user context

Any new app shell must preserve:

- Authentication state
- Token renewal
- Role-based landing path
- Coach/user context switching
- New/inactive/active user states

Do not merge coach and client surfaces visually until their data permissions are understood.

### 2. Preserve Training Plan Structure

Training is one of the largest code families in the original app.

Before redesigning it as a single “plan” module, validate:

- Week/day/block/exercise hierarchy
- Current week vs next week
- Coach-created vs user-consumed plans
- Exercise library behavior
- Completion and adherence states

Design implication:

The home can show a simple next action, but the underlying product must still support a full training plan system.

### 3. Preserve Nutrition Complexity

Nutrition is another large family.

Before reducing it to a signal, validate:

- Diet plan structure
- Meal lists
- Recipe details
- Coach-side edits
- User-side consumption/logging
- Calorie or macro logic

Design implication:

The Health OS can summarize nutrition, but must not erase meal-level operations.

### 4. Preserve Baseline and Body Composition Logic

Body Check and measurement flows are strategically important because they support the positioning of RE-COMP as a health intelligence system.

Before redesigning:

- Identify all required measurements.
- Identify historical comparison logic.
- Identify coach vs client measurement views.
- Identify where body composition influences plans or reports.

Design implication:

Body Check should not be treated as a marketing CTA only. It is likely a system input.

### 5. Preserve Daily Signal Capture

Morning Check appears to be a key daily input.

Before redesigning:

- Identify collected fields.
- Identify timing and frequency.
- Identify whether missing data creates fallback states.
- Identify which reports or recommendations use it.

Design implication:

The daily app home should be centered around action and state, not a static metric dashboard.

### 6. Preserve Reports and Trend Meaning

Reports and trends likely contain business logic, not just charts.

Before redesigning:

- Identify important metrics.
- Identify comparison windows.
- Identify user vs coach report differences.
- Identify how report outcomes affect recommendations.

Design implication:

Charts should be chosen because they explain decisions, not because they make the UI feel premium.

### 7. Preserve Human Guidance Boundaries

The product appears to have both coaching and chat surfaces.

Before introducing an “AI Coach” model:

- Determine which interactions are human.
- Determine which are support.
- Determine which could safely become automated guidance.
- Determine whether coach review is required before recommendations.

Design implication:

AI language must not imply clinical autonomy or medical decision-making unless validated.

## What Must Not Be Done Yet

- Do not treat the app UI pilot as final architecture.
- Do not delete or flatten coach workflows.
- Do not replace training/nutrition with generic cards.
- Do not invent medical claims.
- Do not define final Health Score semantics until source logic is audited.
- Do not assume all data is available from one clean API.

## Recommended Migration Model

### Phase 1: Preserve and Map

Audit:

- Routes
- Endpoints
- Storage keys
- User roles
- Critical actions

Output:

- Flow map
- Data map
- Role map
- Business logic map

### Phase 2: Translate to Health OS

For every old flow, decide whether it becomes:

- A daily home signal
- A module detail
- A coach workflow
- A background system process
- A deprecated/merged feature

### Phase 3: Redesign Surface

Only after mapping:

- Define app navigation.
- Define daily home.
- Define module pages.
- Define coach layer.
- Define Body Check entry.

### Phase 4: Validate With Real Code

For each redesigned surface:

- Confirm source endpoint.
- Confirm required fields.
- Confirm missing/error state.
- Confirm role permissions.
- Confirm behavior on slow/offline network.

## Practical Design Rule

If a visual component cannot answer one of these questions, it should not be on the first screen:

- How am I today?
- What changed?
- What should I do next?
- Why?
- Who is helping me?

