# Route Comparison

Status: first-pass comparison between original app route evidence and available Claude redesign brief.

## Source Evidence

- Original app: `ReCompV2.zip`, especially `ReCompV2/app/Pagine.js`.
- Claude redesign: `C:\Users\milen\Desktop\recomp-project\RECOMP_BRIEF.md`.

## Summary

The original app is route-heavy and implementation-heavy. The Claude redesign is screen-list and navigation-concept heavy.

This means the comparison is not one-to-one:

- Original app evidence: registered React Native stack screens.
- Claude evidence: proposed user-facing screens and fixed tab model.

## Original App Route Model

Observed characteristics:

- Native stack navigator.
- Initial route: `SplashScreen`.
- Approximate registered stack routes: 144.
- Header/gesture settings repeated per screen.
- Customer and coach variants are mostly separate routes.
- Global error boundary wraps navigation.
- `ConnectionMonitor` exists but is commented out.

Route families:

| Domain | Original Route Pattern |
| --- | --- |
| Entry | `SplashScreen`, `PreLogin`, `InfoApp`, `Login`, `Registrazione`, `PreHome`, `PreHomeCoach` |
| Customer home | `Menu`, `Home`, `Profilo`, `DettagliProfilo`, `InformazioniGenerali` |
| Coach home | `HomeCoach`, `HomeCoachNuovi`, `HomeCoachNonAttivi`, `MenuCoach` |
| Body state | `BodyCheck`, `BodyCheckCoach`, `BodyFat`, `BodyFatCoach`, `Misure`, `MisureCoach`, `CheckVeloce` |
| Morning check | `MorningCheck`, `MorningCheckCoach` |
| Training | `PianoAllenamento*`, `GiornoAllenamento*`, `EsercizioAllenamento*`, `InizioEsercizio*`, `NuovoPianoAllenamento*`, `GestionePianoAllenamento*` |
| Nutrition | `Dieta*`, `FoodTracking*`, `GiornoFood`, `AggiungiCibo*`, `GestioneCibo`, `CreaDieta`, `CreaPasto`, `CreaRicetta` |
| Reports | `Report*`, `Trend*`, `DettaglioTrend`, `MetabolismTracker*`, `KcalVSPesoVSBf*`, `PRatio*` |
| Calendar | `Calendario`, `CalendarioCoach`, `PaginaCalendario` |
| Chat | `Chat`, `ChatCoach`, `ListaCoach` |

## Claude Redesign Route Model

The redesign proposes a fixed bottom navigation:

| Tab | Label | Intended Scope |
| --- | --- | --- |
| 1 | Home | daily dashboard |
| 2 | Check | morning/body check entry |
| 3 | Nutrition | food diary and add food |
| 4 | Calendar | shared planning |
| 5 | Settings | profile and account |

The coach path is represented by:

- Lista Clienti
- Menu Percorso Cliente
- General Information
- Body Check
- Weekly Report
- Strategy Calculator

## Compression Map

| Original Route Family | Claude Equivalent | Risk |
| --- | --- | --- |
| Entry and onboarding routes | Onboarding / Settings | Role routing may be underspecified |
| Customer home/menu | Home Dashboard | Good simplification if deep actions remain accessible |
| Coach home/new/inactive queues | Lista Clienti | Risk of losing queue/state distinctions |
| Body Check, measures, body fat, HRV/BPM | Check / Measurements / Body Check | Risk of flattening baseline model |
| MorningCheck / MorningCheckCoach | 3-step Morning Check | Useful focus, but coach review path unclear |
| Training plan, execution, timers, status | Training Plan | Very high compression risk |
| Diet, food tracking, recipes, meals, coach diet creation | Food Diary / Add Food | Very high compression risk |
| Reports, trends, metabolism, calorie/body-fat analysis | Progress / Analytics / Weekly Report | Risk of losing metric definitions |
| Chat / ChatCoach / ListaCoach | Chat | Human guidance preserved only at surface level |
| Calendar variants | Calendar | Shared model plausible, permissions unknown |

## Canonical Route Recommendation

Future architecture should not copy either model directly.

Recommended top-level product routes:

- Today
- Check
- Nutrition
- Training
- Insights
- Coach
- Calendar
- Profile / Settings

Mobile navigation can expose only the most important subset, but the product architecture should keep domain routes separate underneath.

## Assumptions

- Original stack routes represent current or historically reachable app behavior.
- Claude screen names represent redesign intent, not implemented navigation.
- The redesign brief does not include hidden sub-routes.

## Unresolved

- Exact route reachability in production.
- Route parameters and mutation paths.
- Whether Figma contains additional screens beyond the brief.

