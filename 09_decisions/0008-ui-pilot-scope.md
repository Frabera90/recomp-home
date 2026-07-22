# Decision 0008: App UI Pilot Scope

## Status

Accepted as provisional.

## Decision

Before receiving and auditing the original app and Claude redesign codebases, RE-COMP may explore an isolated app UI pilot.

The pilot validates visual and interaction direction only.

## Included

- Home / Daily Overview
- Recovery Detail
- AI Coach
- Foundational components needed by those screens

## Excluded

- Final information architecture
- Definitive onboarding
- Clinician flows
- Coach dashboard
- Franchise flows
- Production data model
- Medical decision logic

## Reason

The team needs a concrete UI direction, but final product logic must be reconciled with implemented code.

## Consequences

- Pilot documentation and prototype implementation live under `experiments/app-ui-pilot/`.
- The app and landing/site are separate runnable projects.
- Earlier app visuals embedded in the landing prototype are historical/reference material only unless explicitly used for migration.
- Mock data must be marked provisional.
- Assumptions must be documented.
- No pilot screen should be treated as final until the comparative code audit is complete.
