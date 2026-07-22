# Endpoint and Storage Register

Source audited: `ReCompV2.zip`

Status: first-pass evidence register. This is not a complete API specification. It captures representative dependencies from critical screens so the redesign can be validated against real product behavior.

## Why This Matters

The original app does not rely on a clean, centralized API client.

Representative critical screens still call backend URLs directly and read/write local state through `AsyncStorage`. This means the redesign cannot safely proceed as if the app has a tidy domain model already available.

## Screen Dependency Snapshot

| Screen file | Direct `fetch` usage | `apiFetch` usage | `AsyncStorage` usage | Navigation usage | Risk |
| --- | ---: | ---: | ---: | ---: | --- |
| `MorningCheck.js` | 6 | 0 | 7 | 3 | High |
| `Dieta.js` | 4 | 0 | 3 | 2 | Very high |
| `PianoAllenamento.js` | 7 | 0 | 3 | 3 | Very high |
| `HomeCoach.js` | 10 | 6 | 20 | 14 | Very high |
| `ReportSettimanale.js` | 6 | 0 | 3 | 1 | High |
| `BodyFat.js` | 13 | 0 | 3 | 3 | High |
| `Misure.js` | 8 | 0 | 3 | 1 | High |

Assumption: counts are approximate pattern matches from source files and should be confirmed in a deeper parser pass.

## Backend Pattern

The app primarily calls a WordPress plugin API on the beta RE-COMP domain:

- `https://beta.recompfitness.com/wp-content/plugins/api/index.php?...`
- `https://beta.recompfitness.com/wp-content/plugins/api/coach/coach.php?...`
- `https://beta.recompfitness.com/wp-content/plugins/api/api.php?...`

Endpoint actions appear to be encoded through query keys such as:

- `v5`
- `v9`
- `v18`
- `v38`
- `v39`
- `v40`
- `v43`
- `v44`
- `v48`
- `v57`
- `v65`
- `v76`
- `v85`
- `v90`
- `v93`
- `v100`
- `v109`
- `v110`
- `v117`
- `v119`
- `v122`
- `v144`
- `v176`
- `v211`
- `v212`
- `v222`
- `v247`
- `v250`

Risk:

These version/action keys are not self-describing. The team must map them before replacing screens.

## Local Storage Keys Observed

Representative `AsyncStorage` keys:

- `ID`
- `LINGUA`
- `PESO`
- `PESODECIMALE`
- `Ruolo`
- `UtenteGestito`
- `Login`
- `SIMULAZIONE`
- `TokenLoginSito`
- `mittente`
- `device_id`
- `BLOCCO`

## Critical State Meanings To Confirm

### `ID`

Likely the current user identifier.

Must validate:

- Whether it always means logged-in user.
- Whether it changes when a coach selects a managed user.
- Whether APIs expect it as the main query parameter.

### `UtenteGestito`

Likely the managed user under coach context.

Must validate:

- When it is set.
- When it is cleared.
- Whether it changes API targets.
- Whether the user app ever reads it.

### `Ruolo`

Likely determines user role.

Must validate:

- All possible role values.
- Whether role is trusted locally or confirmed by backend.
- How role affects routes.

### `LINGUA`

Language setting.

Must validate:

- Whether localization is local-only.
- Whether language is sent to backend.
- Whether redesign can centralize copy safely.

### `PESO` and `PESODECIMALE`

Weight state used by Morning Check.

Must validate:

- Whether stored weight is latest user input.
- Whether backend sync happens immediately.
- Whether decimal handling has locale implications.

### `BLOCCO`

Observed in body composition/body fat flow.

Must validate:

- Whether this represents a training block, body check block, or UI section.
- Whether it affects downstream calculations.

## Flow-Level Implications

### Morning Check

Observed dependencies:

- Reads `ID`, `PESO`, `PESODECIMALE`, `LINGUA`.
- Writes `PESO`, `PESODECIMALE`.
- Calls multiple `index.php` endpoints and at least one coach endpoint.

Design implication:

Morning Check is not just a UI form. It likely updates local and remote user state and may affect coach context.

### Diet

Observed dependencies:

- Reads `ID`, `LINGUA`.
- Calls endpoints including `v65`, `v93`, and `v5`.

Design implication:

Nutrition should be redesigned as a module with underlying plan/meal logic, not as a simple dashboard metric.

### Training Plan

Observed dependencies:

- Reads `ID`, `LINGUA`.
- Calls both user and coach endpoints.
- Uses endpoints including `v65`, `v222`, `v44`, `v144`, `v176`, `v43`.

Design implication:

Training likely crosses client and coach logic. The new “Today’s plan” surface must remain connected to a deeper plan system.

### Coach Home

Observed dependencies:

- Heavy use of local storage.
- Reads/removes login/user state.
- Reads `Ruolo`, `SIMULAZIONE`, `mittente`, `device_id`.
- Writes `TokenLoginSito` and clears `UtenteGestito`.
- Uses direct fetch and `apiFetch`.
- Uses Firebase database URL.

Design implication:

Coach Home is a high-risk operational hub. It should not be visually simplified until role, notification, and user-list behavior are mapped.

### Reports

Observed dependencies:

- Reads `ID`, `LINGUA`.
- Calls coach and user endpoints including `v222`, `v211`, `v212`, `v119`, `v9`.

Design implication:

Reports appear to mix coach-facing and user-facing data. The Health OS “insight” layer should be validated against actual report logic.

### Body Fat / Measurements

Observed dependencies:

- Reads `ID`, `LINGUA`.
- BodyFat writes `BLOCCO`.
- Calls many measurement endpoints.

Design implication:

Body Check and composition are likely foundational, not secondary. They need a dedicated domain model before final app UI.

## Redesign Validation Checklist

Before replacing any critical screen with a new UI, confirm:

1. Which endpoint keys it uses.
2. Which storage keys it reads.
3. Which storage keys it writes or removes.
4. Which role contexts can access it.
5. Whether the screen has coach and client variants.
6. Whether data is computed locally or returned by backend.
7. What happens when the backend fails.
8. What happens when the user is offline.
9. Whether the screen triggers notifications or Firebase updates.
10. Whether the screen changes another screen’s state.

