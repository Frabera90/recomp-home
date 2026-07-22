# Business Logic Map

Status: first-pass reconstruction from `ReCompV2.zip`.

## Purpose

This document identifies where business logic appears to live in the original app and which areas should be treated as high-risk during redesign.

## High-Level Finding

The original app does not appear to have a clean separation between presentation, product logic, API access and local state.

Much of the logic likely lives inside screen files.

This means a visual redesign can accidentally remove behavior if it replaces screens without first extracting the underlying product rules.

## Main Logic Locations

### Screen Components

Likely contain:

- API calls
- form validation
- route decisions
- local storage reads/writes
- conditional rendering by role
- data transformation for charts/reports

Risk:

Screen files are not just UI.

### `Pagine.js`

Likely contains:

- route registry
- initial route
- error boundary wiring
- global navigation ref
- connection monitor integration, currently appearing commented out

Risk:

This file is the app's navigation map but not a domain architecture.

### `ImportBase.js`

Likely contains:

- shared imports
- style access
- translations
- shared utilities
- cross-cutting dependencies

Risk:

It hides dependencies. A screen may appear simple but receive many capabilities through this hub.

### `apiFetch.js`

Likely contains:

- token access
- refresh-token headers
- retry behavior
- timeout behavior
- response token persistence

Risk:

It is useful but not yet consistently adopted. Direct `fetch` calls still dominate.

### AsyncStorage

Likely contains:

- session ID
- role
- language
- selected managed user
- login state
- timer/workout state
- UI state
- legacy tokens

Risk:

AsyncStorage acts as both persistence and global app state. This makes behavior easy to break.

## Business-Critical Domains

### Authentication and Session

Critical because:

- determines user identity
- determines role
- may bridge legacy and token-based auth

Do not change until:

- role values are known
- token strategy is known
- login persistence is mapped

### Coach Management

Critical because:

- coach operates on other users
- selected-client state affects many downstream screens
- inactive/new-user queues may be operationally important

Do not change until:

- `UtenteGestito` lifecycle is mapped
- coach endpoints are mapped
- coach mutation actions are identified

### Body Check / Baseline

Critical because:

- defines baseline state
- likely feeds reports/recommendations
- has coach and customer variants

Do not change until:

- required fields are known
- submission flow is mapped
- report usage is mapped

### Morning Check

Critical because:

- daily signal layer
- likely influences current recommendation or coach review

Do not change until:

- daily completion logic is known
- output data is known
- coach review dependency is known

### Training Execution

Critical because:

- uses timers and active workout state
- may track sets, reps, blocks, loads and progress
- contains real execution behavior

Do not change until:

- timer keys are mapped
- active workout state is mapped
- completion/submission behavior is mapped

### Nutrition

Critical because:

- many API calls
- food logging and diet creation are complex
- coach/customer split is likely important

Do not change until:

- meal/product/recipe flows are mapped
- calorie/macro calculations are mapped
- coach assignment rules are mapped

### Reports and Trends

Critical because:

- current intelligence layer
- likely transforms raw data into user-facing meaning
- may contain formulas or derived metrics

Do not change until:

- metric definitions are known
- date range behavior is known
- report availability logic is known

## Current Risk Ranking

| Area | Risk | Reason |
| --- | --- | --- |
| Nutrition | Very high | High API density and many creation/logging screens |
| Training execution | Very high | Timers, active workout state and plan execution |
| Coach workflows | Very high | Managed-user state and business operations |
| Body Check | High | Baseline data and coach/customer variants |
| Reports/Trends | High | Derived metrics and interpretation |
| Login/Role routing | High | Controls all access paths |
| Chat | Medium | Human guidance and notifications |
| Profile | Medium | Account and settings dependencies |

## Health OS Design Implication

The redesign should not begin by replacing screens with prettier screens.

It should extract the system underneath:

1. Who is the current user?
2. Whose body state is being viewed?
3. What is the current baseline?
4. What changed today?
5. What is the next action?
6. Who validates or adjusts that action?

## Assumptions

- Direct screen-level code contains substantial business behavior.
- The backend is still authoritative for most product data.
- The app has accumulated legacy and current behavior in the same source tree.

## Must Validate

- Which screens are currently reachable.
- Which backup files are dead.
- Which endpoints mutate data.
- Which local storage keys are required for production flows.
- Which logic has already changed in the Claude redesign codebase.

