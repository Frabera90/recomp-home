# Canonical Product Architecture

Status: proposed canonical architecture based on original app audit and redesign comparison.

## Principle

Do not copy the original app structure and do not copy the Claude redesign structure.

The original app contains the product depth. The Claude redesign contains useful simplification intent. The canonical architecture should preserve depth while organizing it into a Health OS.

## Canonical Product Layers

### 1. Identity and Access

Owns:

- session
- role
- language
- auth tokens
- onboarding status
- package/subscription status

### 2. Subject Context

Owns:

- current user
- managed user
- coach/customer mode
- client status
- phase/block/package context

This layer is mandatory because coach workflows act on another person.

### 3. Baseline

Owns:

- body check
- measures
- body composition
- progress photos
- HRV/BPM where available
- pre-screening

Purpose:

Understand the user's current health/body state.

### 4. Daily State

Owns:

- morning check
- daily weight
- mood/notes/photos
- recovery/sleep/strain where validated
- daily completion status

Purpose:

Understand what changed today.

### 5. Plans

Owns:

- training plan
- nutrition plan
- calendar
- coach assignments
- active block/phase

Purpose:

Define what the user is supposed to do.

### 6. Execution

Owns:

- workout execution
- exercise progress
- timers/rest
- food logging
- check completion
- adherence events

Purpose:

Capture what the user actually did.

### 7. Insight

Owns:

- reports
- trends
- weekly report
- metabolism/calorie/body-composition analysis
- derived recommendations

Purpose:

Turn state and history into meaning.

### 8. Guidance

Owns:

- coach review
- chat
- future AI/system recommendations
- action ownership
- escalation to human

Purpose:

Decide what to do next and who should act.

## Recommended Navigation Model

Product architecture should support:

- Today
- Check
- Nutrition
- Training
- Insights
- Calendar
- Coach
- Profile / Settings

Mobile tabs can expose fewer items, but the underlying architecture should not collapse domains prematurely.

## Core Product Loop

1. User baseline is known.
2. Daily state is captured.
3. Plan is understood.
4. System/coach interprets deviation.
5. User receives a recommendation.
6. User acts.
7. Action updates reports and future guidance.

Every important surface should answer:

- What is my current state?
- What changed?
- What should I do next?
- Who owns the next decision?

## Implementation Guardrail

Before final app implementation:

1. Extract route and endpoint map.
2. Define state domains.
3. Preserve critical coach/customer distinctions.
4. Build product components around domain states.
5. Only then apply final visual direction.

## Assumptions

- RE-COMP is moving toward a Health OS / Human Optimization Platform.
- The old app contains critical business logic despite UI complexity.
- The Claude redesign is useful as UX compression, not final architecture.

