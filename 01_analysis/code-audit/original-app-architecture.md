# Original App Architecture

Status: first-pass architecture reconstruction from `ReCompV2.zip`.

Source evidence:

- Archive inspected: `C:\Users\milen\OneDrive\Desktop\ReCompV2.zip`
- Duplicate archive observed: `C:\Users\milen\OneDrive\Desktop\ReCompV2 (1).zip`
- The two archives appear to be duplicates by size.
- `00_input/original_app/` currently contains only its README, so this document should be treated as a provisional audit of the external archive.

## Executive Summary

The current RE-COMP app is a React Native CLI application with a large screen-based architecture.

The product is already functionally broad: customer onboarding, coach workflows, body checks, morning checks, training, nutrition, reports, trends and chat are all present in the codebase.

The main architectural issue is not missing product scope. The issue is that product logic, UI, API calls, local state and navigation are mostly coupled inside individual screens.

In Health OS terms, the current app already contains the raw building blocks, but they are not yet expressed as a coherent operating system.

## Application Stack

- Framework: React Native CLI
- App entry: `index.js`
- Root component: `App.js`
- Main navigation: `app/Pagine.js`
- Shared import hub: `app/ImportBase.js`
- Approximate stack screens: 144
- Approximate JS/TS app files inspected: 237
- Backend style: PHP/WordPress plugin API on `beta.recompfitness.com`

Notable package signals:

- React Native `0.82.1`
- React `19.1.1`
- Firebase messaging
- AsyncStorage
- React Navigation native stack
- Camera / image picker / crop picker
- Charting libraries
- WebView / Video
- Vector icons

## Top-Level Structure

### `App.js`

Wraps the application in `SafeAreaProvider` and renders `Pagine`.

Interpretation:

The app has a simple root shell. Most complexity starts below it in navigation and screens.

### `app/Pagine.js`

Defines the central native stack navigator.

Observed characteristics:

- Large route registry.
- Initial route appears to be `SplashScreen`.
- Global error handling is wired here.
- `ConnectionMonitor` exists but appears commented out.
- Console promise errors are intercepted and routed into the global error handler.

Interpretation:

`Pagine.js` is the current product map, but it is not organized by domain. It acts as a route list rather than a product architecture layer.

### `app/ImportBase.js`

Acts as a broad shared import/export file.

It centralizes many dependencies, including:

- React Native primitives
- shared styles
- AsyncStorage
- translations
- Firebase
- charting
- icons
- custom components
- utility functions

Interpretation:

This file reduces repetitive imports, but it also hides dependencies and increases coupling. It is a convenience layer, not a clean design system boundary.

### `app/apiFetch.js`

Provides a partial authenticated request wrapper.

Observed behavior:

- Reads `access_token` and `refresh_token` from AsyncStorage.
- Attaches Authorization and refresh token headers.
- Stores renewed tokens from response headers.
- Uses timeout and retry logic.
- Defaults to POST.

Interpretation:

The app has the beginning of a centralized API client, but most fetch usage still appears to be direct inside screens. `apiFetch` is not yet the enforced data access layer.

## Backend Architecture Signals

The current backend appears to be a WordPress/PHP plugin API.

Observed URL pattern:

- `https://beta.recompfitness.com/wp-content/plugins/api/index.php?...`
- `https://beta.recompfitness.com/wp-content/plugins/api/coach/coach.php?...`

Common characteristics:

- Query-string version keys, for example `v18`, `v42`, `v222`, `v231`.
- Hardcoded request keys in URLs.
- Role-specific coach API paths.
- Some token-based logic exists, but many calls appear directly embedded in screens.

Implication:

The future app should introduce a product API layer independent from screen UI. Otherwise the redesign will keep inheriting backend complexity directly into interface code.

## Local State Architecture

AsyncStorage is heavily used.

Important observed keys:

- `ID`
- `LINGUA`
- `Login`
- `Ruolo`
- `UtenteGestito`
- `TokenLoginSito`
- `access_token`
- `refresh_token`
- workout/session timing keys
- body/weight simulation keys
- block-open state keys

Interpretation:

AsyncStorage currently behaves as a global persistence and session layer. This should be treated carefully during redesign because many flows may depend on hidden keys.

## Role Model

Observed role split:

1. Customer / user
2. Coach
3. Managed user state through `UtenteGestito`

The codebase contains many parallel customer and coach screens.

Examples:

- `Home` / `HomeCoach`
- `BodyCheck` / `BodyCheckCoach`
- `MorningCheck` / `MorningCheckCoach`
- `Dieta` / `DietaCoach`
- `ReportTrend` / `ReportTrendCoach`
- `Chat` / `ChatCoach`

Interpretation:

The coach/customer split is business-critical. A future architecture should preserve the distinction, but avoid duplicating entire screens when the underlying domain is shared.

## Product Domains Found

### Authentication and Entry

Representative screens:

- `SplashScreen`
- `PreLogin`
- `InfoApp`
- `Login`
- `Registrazione`
- `PreHome`
- `PreHomeCoach`

Purpose:

Determine session state, role, language and first destination.

Health OS meaning:

This is the access layer.

### Customer Home

Representative screens:

- `Home`
- `MenuHome`
- customer dashboard screens

Purpose:

Show user status, app entry points and customer actions.

Health OS meaning:

This should evolve into the `Today` surface.

### Coach Home

Representative screens:

- `HomeCoach`
- `HomeCoachNuovi`
- `HomeCoachNonAttivi`
- `MenuCoach`

Purpose:

Coach dashboard, managed users, monitoring and operational actions.

Health OS meaning:

This is the operational coach layer.

### Body State and Baseline

Representative screens:

- `BodyCheck`
- `BodyCheckCoach`
- `BodyFat`
- `BodyFatCoach`
- `Misure`
- `MisureCoach`
- `CheckVeloce`
- `PesoCoach`
- `BPMCoach`
- `HRVCoach`
- `HRVCVCoach`

Purpose:

Collect and review physical state, measurements and biometric indicators.

Health OS meaning:

This is the baseline and body-state model.

### Daily Check-In

Representative screens:

- `MorningCheck`
- `MorningCheckCoach`

Purpose:

Capture daily subjective/objective state.

Health OS meaning:

This becomes the daily signal layer.

### Training

Representative screens:

- `PianoAllenamento`
- `PianoAllenamentoCoach`
- `NuovoPianoAllenamento*`
- `GiornoAllenamento`
- `GiornoAllenamentoUtente`
- `EsercizioAllenamento`
- `InizioEsercizio`
- `TrainingStatus`
- `FreeWorkout`
- `RMCalculator`

Purpose:

Plan, edit, execute and monitor training.

Health OS meaning:

This is the action and execution layer.

### Nutrition

Representative screens:

- `Dieta`
- `DietaCoach`
- `FoodTracking`
- `FoodTrackingUtente`
- `GiornoFood`
- `AggiungiCibo`
- `GestioneCibo`
- `CreazioneDieta`
- `CreaPasto`
- `CreaRicetta`
- `DettagliPasto`

Purpose:

Manage diet, food logging, meals and nutrition plans.

Health OS meaning:

This is the nutrition signal and plan layer.

### Reports and Trends

Representative screens:

- `Trend`
- `TrendUtente`
- `ReportTrend`
- `ReportTrendCoach`
- `ReportSettimanale`
- `ReportPrecedenti`
- `MetabolismTracker`
- `KcalVSPesoVSBf`
- `PRatio`

Purpose:

Interpret historical data and progress.

Health OS meaning:

This is the intelligence and insight layer.

### Communication and Support

Representative screens:

- `Chat`
- `ChatCoach`
- `ListaCoach`

Purpose:

Human support, coaching conversation and user-coach relationship.

Health OS meaning:

This becomes the human guidance layer.

## High-Risk Complexity Areas

Observed hotspots:

- `FoodTracking`
- `FoodTrackingUtente`
- body check screens
- training plan creation/editing screens
- `HomeCoach`
- `MenuCoach`
- report/trend screens

Why they matter:

These areas likely contain business logic that cannot be removed casually during redesign.

## Architecture Risks

### API calls are screen-scattered

Many screens call the backend directly. This makes redesign risky because changing screens may accidentally remove behavior.

### AsyncStorage is overloaded

Session, role, language, temporary workout state and UI state appear mixed in local storage.

### Coach and customer logic is duplicated

Duplicated screens may hide subtle role-specific behavior.

### UI and business behavior are coupled

Many screens appear to combine visual layout, API calls, storage and flow decisions.

### Offline and error logic exists but is not fully active

`ErrorBoundary` and `ConnectionMonitor` indicate attempts to manage resilience, but connection monitoring appears not fully enabled in the main navigation.

### Backup files exist in source

Several `Backup` files appear in the app tree. These should be separated during any future migration to avoid auditing dead code as live product.

## Health OS Translation

The current app maps naturally into the Health OS model:

| Health OS Layer | Current App Evidence |
| --- | --- |
| Baseline | Body Check, measures, body fat, HRV, BPM, weight |
| Daily State | Morning Check, daily health inputs |
| Guidance | Home, reports, recommendations, coach review |
| Plan | Training plans, diet plans, calendar |
| Execution | Exercise flow, food logging, daily actions |
| Intelligence | Trends, reports, metabolism, calories vs weight/body fat |
| Human Layer | Coach dashboards, chat, user management |

## Assumptions

- The inspected ZIP represents the current implemented app.
- `ReCompV2.zip` and `ReCompV2 (1).zip` are duplicates.
- Screens listed in `Pagine.js` are treated as product surface evidence.
- Direct code behavior still needs deeper validation file by file.
- Backend endpoint meanings are inferred from filenames, query names and screen context, not from backend source.

## Unresolved

- Exact backend response schemas.
- Exact role values and role transition rules.
- Which backup files are dead code versus still referenced.
- Complete happy-path and edge-case flows.
- Whether the Claude redesign preserves all business-critical logic.
- Whether token refresh is used broadly or only in newer screens.

## Recommended Next Audit Steps

1. Build a complete route inventory from `Pagine.js`.
2. Build a screen-to-domain inventory.
3. Extract API endpoint usage by screen.
4. Extract AsyncStorage key usage by screen.
5. Reconstruct the critical flows:
   - login and role routing
   - customer home entry
   - body check
   - morning check
   - training plan execution
   - nutrition logging
   - coach-managed user review
6. Compare the same flows with the Claude redesign when available.

