# Recommended Roadmap

Status: proposed audit-to-implementation roadmap.

## Immediate Priority

Do not start final app UI implementation yet.

The next step is to convert the current first-pass audit into a migration-ready product architecture.

## Phase 1: Close Audit Evidence

Goal:

Know what exists, what is missing and what must be preserved.

Tasks:

1. Confirm whether a full Claude redesign codebase or Figma export exists.
2. Build complete route inventory from `Pagine.js`.
3. Mark routes as active, backup, legacy or unresolved.
4. Extract endpoint usage by critical screen family.
5. Extract AsyncStorage usage by critical flow.

Deliverables:

- route inventory
- endpoint register by flow
- storage register by flow
- active/legacy screen status

## Phase 2: Canonical Flow Definition

Goal:

Define future product behavior independently of visual design.

Priority flows:

1. Login and role routing.
2. Coach managed-user selection.
3. Customer Today / daily home.
4. Morning Check.
5. Body Check / baseline.
6. Training plan and execution.
7. Nutrition logging and coach plan management.
8. Reports to insights.
9. Chat / human guidance.

Deliverables:

- canonical flow specs
- missing-state matrix
- preservation checklist

## Phase 3: Product Architecture Pilot

Goal:

Pick one flow and redesign it as Health OS behavior.

Recommended first pilot:

Morning Check to Today recommendation.

Why:

- It is central to daily use.
- It connects baseline, daily state, recommendation and action.
- It is smaller than nutrition or training.
- It can prove the Health OS model before wider redesign.

## Phase 4: Design System Reconciliation

Goal:

Resolve visual direction before implementation.

Tasks:

1. Compare Claude dark/glass system with accepted light-first decisions.
2. Decide which dark/glass patterns survive.
3. Define product components for states, recommendations, metrics and coach context.
4. Freeze stable design rules.

## Phase 5: Implementation Readiness

Goal:

Prepare final app build without losing business logic.

Tasks:

1. Define domain services.
2. Define state/store architecture.
3. Define navigation architecture.
4. Define migration strategy from old app.
5. Define validation scenarios for each critical flow.

## Decision Needed

Choose the next operating mode:

- Continue audit depth: route/endpoint/storage extraction.
- Start canonical flow specs: begin with Morning Check -> Today.
- Reconcile design direction: light-first Health OS versus Claude dark/glass.

Recommended:

Continue audit depth for route/endpoint/storage extraction, then pilot Morning Check -> Today.

