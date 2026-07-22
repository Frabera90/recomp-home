# Data Dependency Map

Status: first-pass data dependency map from `ReCompV2.zip`.

This file identifies data access patterns that affect future redesign work.

## Source

- Archive: `C:\Users\milen\OneDrive\Desktop\ReCompV2.zip`
- Observed code patterns: direct `fetch`, `apiFetch`, `AsyncStorage`, Firebase messaging and hardcoded backend URLs.

## Summary

The current app does not appear to have a strict domain data layer.

Most data dependencies are distributed across screens. This makes UI redesign risky because changing or removing a screen may also remove business logic, API calls, session handling or local state transitions.

## Backend Pattern

Primary backend host:

- `https://beta.recompfitness.com`

Observed backend paths:

- `/wp-content/plugins/api/index.php`
- `/wp-content/plugins/api/coach/coach.php`
- `/wp-content/plugins/api/coach/crash_report.php`

Observed API style:

- PHP endpoint files.
- Query-string version/action keys such as `v18`, `v42`, `v139`, `v176`, `v222`, `v231`.
- Hardcoded request keys.
- Many requests appear screen-local.

## API Client Pattern

### Direct Fetch

Direct `fetch` usage is widespread.

High-density areas observed:

- food tracking
- diet / macro blocks
- body check
- coach home
- training plan management
- menu / navigation data

Risk:

Direct fetch makes it difficult to reason about product behavior from a central place.

### `apiFetch`

`apiFetch.js` introduces a partial centralized request layer.

Observed behavior:

- reads access and refresh tokens
- attaches auth headers
- stores token refresh responses
- retries requests
- times out after a fixed delay

Risk:

Because most requests appear to be direct fetch calls, `apiFetch` may only cover newer or selected flows.

Future direction:

Create domain services such as:

- `authService`
- `bodyStateService`
- `morningCheckService`
- `trainingService`
- `nutritionService`
- `reportService`
- `coachService`
- `chatService`

## Local Persistence

AsyncStorage is heavily used.

Important observed keys:

| Key | Likely Meaning | Risk |
| --- | --- | --- |
| `ID` | current user ID | central session dependency |
| `LINGUA` | selected language | affects every screen |
| `Login` | login state | entry routing dependency |
| `Ruolo` | user role | coach/customer split |
| `UtenteGestito` | managed user for coach flow | critical coach dependency |
| `TokenLoginSito` | web/site login token | possible webview/site bridge |
| `access_token` | API auth token | newer auth flow |
| `refresh_token` | token refresh | newer auth flow |
| `device_id` | device registration | notifications/session |
| `mittente` | message sender | chat dependency |
| timer keys | workout execution state | critical during training |
| body/weight keys | measurement simulation/input | body-check dependency |

Interpretation:

AsyncStorage is currently acting as:

- session store
- role store
- language store
- temporary workout store
- UI state store
- coach-managed-user store

Future direction:

Separate these into clear state domains.

## Firebase and Notifications

Firebase messaging appears in the dependency set and import hub.

Possible roles:

- push notifications
- device token registration
- coach/user communication triggers

Unresolved:

- exact notification registration flow
- whether notification permissions are required during onboarding
- whether notifications drive critical coach workflows

## Data Domains

### Auth and Identity

Likely dependencies:

- AsyncStorage `Login`, `Ruolo`, `ID`
- backend login endpoints
- token keys

Redesign risk:

Entry and role routing cannot be simplified until all state transitions are mapped.

### Coach Managed User

Likely dependencies:

- `UtenteGestito`
- coach API endpoints
- user lists

Redesign risk:

Coach views may use `UtenteGestito` as implicit global context. Removing or hiding that behavior could break coach workflows.

### Body State

Likely dependencies:

- body check endpoints
- measurements
- HRV/BPM/weight/body fat data

Health OS role:

Baseline and state model.

### Daily State

Likely dependencies:

- morning check endpoints
- daily subjective state
- recovery/sleep readiness inputs

Health OS role:

Daily recommendation engine input.

### Training

Likely dependencies:

- plan endpoints
- exercise endpoints
- timers
- current block/exercise state
- records / PR logic

Health OS role:

Action execution.

### Nutrition

Likely dependencies:

- food database endpoints
- meal logging
- diet plans
- macro blocks
- custom food data

Health OS role:

Nutrition signal and plan.

### Reports and Trends

Likely dependencies:

- trend endpoints
- weekly reports
- calorie/body composition relationships
- metabolism trackers

Health OS role:

Interpretation layer.

## Architecture Risk Summary

1. Screen-local data calls make behavior hard to migrate.
2. AsyncStorage hides business state.
3. Role handling is probably distributed.
4. Backend endpoints are not semantically named in the client.
5. Some newer token logic coexists with older direct endpoint calls.
6. The redesign must not treat screens as purely visual surfaces.

## Recommended Extraction Order

1. Session and role model.
2. Coach managed-user model.
3. Body Check and measurement endpoints.
4. Morning Check endpoints.
5. Training execution state.
6. Nutrition logging state.
7. Report/trend endpoints.
8. Chat and notification dependencies.

## Assumptions

- The observed archive is representative of the current app.
- Direct endpoint names are inferred from filenames and usage context.
- AsyncStorage key meanings are inferred from key names and frequency.

## Unresolved

- Full backend schema.
- Which endpoints are still active.
- Which keys are legacy.
- Which screen-level fetches mutate server state.
- Which screens are production-visible versus legacy.

