# User Role Model

Status: first-pass reconstruction from `ReCompV2.zip`.

## Purpose

This file identifies the role model implied by the original RE-COMP app so the redesign does not collapse business-critical differences between customers, coaches and managed users.

## Observed Role Signals

Storage keys:

- `Ruolo`
- `ID`
- `UtenteGestito`
- `Login`
- `TokenLoginSito`
- `access_token`
- `refresh_token`

Route patterns:

- Customer screens often have neutral names, for example `Home`, `Dieta`, `BodyCheck`, `MorningCheck`, `ReportTrend`, `Chat`.
- Coach screens often use the `Coach` suffix, for example `HomeCoach`, `DietaCoach`, `BodyCheckCoach`, `MorningCheckCoach`, `ReportTrendCoach`, `ChatCoach`.
- Some coach screens refer to user segments, for example `HomeCoachNuovi`, `HomeCoachNonAttivi`, `ElencoUtentiEserciziNonAttivi`.

## Core Roles

### Customer

Primary purpose:

Use RE-COMP to understand their body state, follow plans, log nutrition/training and receive guidance.

Likely capabilities:

- log in
- complete onboarding/screening
- view own home
- complete body check or measurements
- complete morning check
- follow training plan
- log food or follow diet
- view reports/trends
- chat with coach/support

Health OS interpretation:

The customer is the person whose health state is being modeled.

### Coach

Primary purpose:

Monitor, review and guide customers.

Likely capabilities:

- view coach home
- see new users
- see inactive users
- select a managed user
- review body check / morning check / reports
- manage training and nutrition
- chat with users

Health OS interpretation:

The coach is the human review and accountability layer.

### Managed User

Primary purpose:

Represent the customer currently selected by a coach.

Observed evidence:

- `UtenteGestito`
- parallel `Coach` screens
- user-list and inactive/new user screens

Health OS interpretation:

This should become an explicit `currentClient` context in a future architecture.

## Important Distinction

`ID` and `UtenteGestito` should not be confused.

- `ID` likely identifies the logged-in account.
- `UtenteGestito` likely identifies the client being operated on by a coach.

This distinction matters because a coach action may read or write data for a different person than the logged-in account.

## Role-Based Product Surfaces

| Surface | Customer Role | Coach Role |
| --- | --- | --- |
| Home | own daily state and next action | client/user overview |
| Body Check | own baseline | review/manage client baseline |
| Morning Check | own daily signal | review client daily signal |
| Training | execute plan | create/edit/review plan |
| Nutrition | log/follow plan | create/edit/review plan |
| Reports | understand own progress | interpret client progress |
| Chat | receive support | deliver support |

## Role Risks

### Hidden current-client context

If `UtenteGestito` is set in one screen and read in another, the app may depend on implicit state. This is fragile and must be preserved carefully during redesign.

### Duplicated screens

Customer and coach versions may look similar but encode different permissions and API endpoints.

### Mixed local and server state

Role, selected user, tokens and language all appear to live in or pass through local storage.

### Admin-like states are unresolved

Some coach screens may represent operational roles beyond a normal coach, but this is not yet verified.

## Future Architecture Recommendation

Use explicit role domains:

- `session.userId`
- `session.role`
- `session.language`
- `coach.currentClientId`
- `coach.clientSegment`
- `permissions`

Avoid:

- hidden global selected-user state
- role-specific duplicated UI when only data context changes
- treating coach screens as simple variants of customer screens

## Assumptions

- `Ruolo` is the primary role flag.
- `UtenteGestito` is the selected client for coach workflows.
- Screen names ending in `Coach` are role-specific, not merely visual variants.

## Must Validate

- Exact possible values of `Ruolo`.
- Whether a user can have multiple roles.
- How `UtenteGestito` is set, cleared and validated.
- Which coach actions mutate user data.
- Whether current production users depend on inactive/new-user queues.

