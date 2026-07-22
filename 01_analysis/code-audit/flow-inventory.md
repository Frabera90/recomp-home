# Flow Inventory

Status: first-pass reconstruction from `ReCompV2.zip`.

This document maps the likely implemented product flows in the original RE-COMP app. It is based on route names, observed storage keys, backend URL patterns and screen/domain grouping. It is not yet a verified behavioral specification.

## Source Evidence

- Archive: `C:\Users\milen\OneDrive\Desktop\ReCompV2.zip`
- Main route registry: `app/Pagine.js`
- Shared state: `AsyncStorage`
- API pattern: `beta.recompfitness.com/wp-content/plugins/api/`
- Existing audit docs:
  - `original-app-architecture.md`
  - `screen-inventory.md`
  - `data-dependency-map.md`
  - `state-model.md`

## Critical Flows

### 1. Entry, Login and Role Routing

Likely path:

1. `SplashScreen`
2. `PreLogin` / `InfoApp`
3. `Login` / `Registrazione`
4. `PreHome` or `PreHomeCoach`
5. Customer or coach home

State involved:

- `Login`
- `ID`
- `Ruolo`
- `LINGUA`
- `TokenLoginSito`
- `access_token`
- `refresh_token`

Business meaning:

This flow decides who the user is, which role they occupy and which product surface they should see first.

Preservation note:

The redesign must not treat login as a simple visual gate. It controls role, language, managed-user behavior and possibly legacy token behavior.

Unresolved:

- Exact role values.
- Whether `TokenLoginSito` and `access_token` are both active in production.
- Whether onboarding state is stored server-side, locally, or both.

### 2. Customer Home / Daily Entry

Likely path:

1. `Home`
2. `Menu` / `MenuHome`
3. Entry into training, nutrition, body check, reports, profile or chat

State involved:

- `ID`
- `LINGUA`
- daily data loaded by home/dashboard calls
- notification or message state, inferred from Firebase and chat presence

Business meaning:

This is the current customer command center. In the Health OS direction, it should become the `Today` surface: current state, primary recommendation and next action.

Preservation note:

Do not simplify this into a generic dashboard. It must preserve access to current plan, status, reports and coach communication.

### 3. Coach Home / Managed User Flow

Likely path:

1. `HomeCoach`
2. `HomeCoachNuovi` / `HomeCoachNonAttivi`
3. select user or client group
4. set `UtenteGestito`
5. navigate to managed-user reports, body check, diet, training or chat

State involved:

- `Ruolo`
- `ID`
- `UtenteGestito`
- coach-specific API calls under `/coach/coach.php`

Business meaning:

The coach does not only view data. The coach acts on another user's state. This makes `currentClient` a business-critical state.

Preservation note:

The future coach layer should make the selected client context explicit and stable. Hidden `UtenteGestito` state is risky.

Unresolved:

- Whether coaches can manage inactive/new users from separate queues.
- Whether coach actions directly update user plans or only create recommendations.

### 4. Body Check / Baseline Flow

Likely path:

1. `BodyCheck` or `BodyCheckCoach`
2. body composition / measures screens:
   - `BodyFat`
   - `Misure`
   - `CheckVeloce`
   - `PesoCoach`
   - `BPMCoach`
   - `HRVCoach`
   - `HRVCVCoach`
3. report or recommendation surfaces

State involved:

- user ID or managed user ID
- local measurement/session values
- backend body-check endpoints

Business meaning:

This is the baseline layer of RE-COMP. It defines the starting health state that later guidance depends on.

Preservation note:

Body Check should not be redesigned as a cosmetic card. It is the starting point of the operating system.

Unresolved:

- Required fields.
- Measurement validation.
- Coach versus customer permissions.

### 5. Morning Check / Daily Signal Flow

Likely path:

1. `MorningCheck`
2. daily answers or biometrics submitted
3. home/report/coaching surfaces updated
4. `MorningCheckCoach` for review

State involved:

- user ID or managed user ID
- daily completion state
- possibly HRV, sleep, mood, readiness-like values

Business meaning:

This flow converts daily condition into a signal. It should eventually drive the daily recommendation.

Preservation note:

The future `Today` screen should show whether the daily signal exists and what changed because of it.

### 6. Training Plan and Execution Flow

Likely path:

1. `PianoAllenamento`
2. choose day or plan period
3. `GiornoAllenamento`
4. `EsercizioAllenamento`
5. `InizioEsercizio`
6. timer/rest/block execution
7. `TrainingStatus` / report update

Coach path:

1. `PianoAllenamentoCoach`
2. `NuovoPianoAllenamento*`
3. `GestionePianoAllenamentoCoach`
4. assign or edit plan for managed user

State involved:

- plan ID
- workout day
- current exercise
- timer keys
- block state
- record / load / volume data

Business meaning:

Training is not just content. It is an executable plan with stateful progress and timing.

Preservation note:

The redesign can simplify the visual language, but it must not flatten execution states into static plan cards.

### 7. Nutrition and Food Tracking Flow

Likely customer path:

1. `Dieta`
2. `FoodTracking`
3. `GiornoFood`
4. `AggiungiCibo`
5. `GestioneCibo`
6. meal/product/recipe detail screens

Likely coach path:

1. `DietaCoach`
2. `CreazioneDieta`
3. `CreaDieta`
4. `CreaPasto`
5. `CreaRicetta`
6. assignment or update for user

State involved:

- user ID or managed user ID
- day/date
- meal IDs
- food/product IDs
- macro/calorie values

Business meaning:

Nutrition is one of the most API-dense areas and probably contains a large amount of real business logic.

Preservation note:

Do not replace nutrition with a visual "macro card" until logging, plan creation and coach assignment are fully mapped.

### 8. Reports, Trends and Insight Flow

Likely path:

1. `Trend` / `TrendUtente`
2. `ReportTrend` / `ReportTrendCoach`
3. `DettaglioTrend`
4. `ReportSettimanale`
5. `ReportPrecedenti`
6. specialized analytics:
   - `MetabolismTracker`
   - `KcalVSPesoVSBf`
   - `PRatio`

State involved:

- date ranges
- selected metric
- user or managed user
- report availability

Business meaning:

These screens are the current interpretation layer. They likely contain the raw material for Health OS insights.

Preservation note:

The future product should translate reports into guidance, not simply hide them.

### 9. Chat and Human Guidance Flow

Likely path:

1. `Chat` or `ChatCoach`
2. `ListaCoach`
3. messaging with user/coach

State involved:

- sender / receiver IDs
- `mittente`
- Firebase messaging / notification tokens

Business meaning:

This is the human layer of RE-COMP: support, accountability and context.

Preservation note:

The app should preserve a clear distinction between AI-style guidance, system recommendation and human coach input.

## Flow Risks

- Many flows are screen-scattered, so route names may hide business logic inside UI files.
- Coach flows depend on `UtenteGestito`, which must be audited carefully.
- Training and nutrition contain execution/creation logic, not just display logic.
- API contracts are still inferred, not verified.
- Backup files may include outdated logic and should not be treated as current behavior without reference checks.

## Health OS Mapping

| Future Health OS Flow | Original App Evidence |
| --- | --- |
| Baseline setup | Body Check, measures, body fat, HRV, BPM |
| Daily check | Morning Check |
| Today recommendation | Home, reports, morning/body/training/nutrition signals |
| Plan execution | Training plan, diet, calendar |
| Human review | Coach home, managed users, chat |
| Longitudinal intelligence | Reports, trends, metabolism and body composition analytics |

## Assumptions

- Screens registered in `Pagine.js` represent reachable or historically reachable product flows.
- Customer and coach variants often share a domain but differ in permissions and current-user context.
- Current backend behavior is still active unless later audit proves a route/file is dead.

## Next Validation Pass

1. Extract exact route names and route parameters from `Pagine.js`.
2. For each critical flow, inspect 3-5 representative screens deeply.
3. Build endpoint tables per flow.
4. Build AsyncStorage key tables per flow.
5. Compare with the Claude redesign codebase before approving any final app UI direction.

