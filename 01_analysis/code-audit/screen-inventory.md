# Screen Inventory

Status: first-pass screen inventory from `ReCompV2.zip`.

This file groups observed app screens by product domain. It is not yet a complete route-by-route specification.

## Source

- Archive: `C:\Users\milen\OneDrive\Desktop\ReCompV2.zip`
- Main route registry: `app/Pagine.js`

## Summary

Approximate stack routes observed: 144.

The screen system is broad and role-heavy. Most product domains have both customer and coach variants.

## Authentication and Entry

Representative screens:

- `SplashScreen`
- `PreLogin`
- `InfoApp`
- `Login`
- `Registrazione`
- `PreHome`
- `PreHomeCoach`
- `PreScreening`
- `PreScreeningCoach`

Purpose:

Route the user into the correct product state based on login, role and onboarding context.

Critical preservation note:

Do not redesign onboarding or entry flows without first mapping role, language, ID and token storage.

## Customer Home and Navigation

Representative screens:

- `Home`
- `Menu`
- `Profilo`
- `DettagliProfilo`
- `InformazioniGenerali`

Purpose:

Primary customer entry and navigation into training, nutrition, reports and profile.

Future direction:

This should become a calmer `Today` surface with one primary daily decision.

## Coach Home and Managed Users

Representative screens:

- `HomeCoach`
- `HomeCoachNonAttivi`
- `HomeCoachNuovi`
- `MenuCoach`
- `MenuCoach-Backup`
- `ListaCoach`
- `ElencoUtentiEsercizi`
- `ElencoUtentiEserciziNonAttivi`

Purpose:

Coach operations, client overview, inactive/new users and user management.

Critical preservation note:

Coach workflows likely contain business operations that are not visible in the customer app.

## Body State, Measures and Biometrics

Representative screens:

- `BodyCheck`
- `BodyCheckCoach`
- `BodyFat`
- `BodyFatCoach`
- `Misure`
- `MisureCoach`
- `PesoCoach`
- `BPMCoach`
- `HRVCoach`
- `HRVCVCoach`
- `CheckVeloce`
- `LeanCalculator`
- `BulkCalculator`

Purpose:

Capture or review physical state, body composition and biometric signals.

Health OS role:

Baseline and body-state model.

## Morning Check

Representative screens:

- `MorningCheck`
- `MorningCheckCoach`

Purpose:

Daily check-in and daily state review.

Health OS role:

Daily signal and readiness layer.

## Training

Representative screens:

- `PianoAllenamento`
- `PianoAllenamentoCoach`
- `PianoAllenamentoCoachProxSettimana`
- `PianoAllenamentoCoachAltro`
- `PianoAllenamentoProxSettimana`
- `NuovoPianoAllenamento*`
- `GestionePianoAllenamentoCoach`
- `GestionePianoAllenamentoCoach2`
- `GiornoAllenamento`
- `GiornoAllenamentoUtente`
- `EsercizioAllenamento`
- `InizioEsercizio`
- `InizioEsercizioCoach`
- `TrainingStatus`
- `TrainingStatusCoach`
- `FreeWorkout`
- `RMCalculator`
- `AddEsercizio*`
- `CreaEsercizio*`

Purpose:

Create, review, execute and monitor training.

Health OS role:

Action execution layer.

Critical preservation note:

Training likely includes many micro-states: current exercise, timers, blocks, records, next sets and plan variants.

## Nutrition and Food Tracking

Representative screens:

- `Dieta`
- `DietaCoach`
- `FoodTracking`
- `FoodTrackingUtente`
- `GiornoFood`
- `AggiungiCibo`
- `GestioneCibo`
- `CreazioneDieta`
- `CreaDieta`
- `CreaPasto`
- `CreaRicetta`
- `DettagliPasto`
- `ElencoPasti`
- `AggiungiProdotto`
- `ModificaCiboCustom`

Purpose:

Diet planning, meal tracking, food logging and nutrition management.

Health OS role:

Nutrition signal and plan layer.

Critical preservation note:

This area has high API density and should not be simplified until food logging and diet creation flows are mapped.

## Reports, Trends and Intelligence

Representative screens:

- `ReportCoach`
- `ReportUtente`
- `ReportSettimanale`
- `ReportPrecedenti`
- `Trend`
- `TrendUtente`
- `ReportTrend`
- `ReportTrendCoach`
- `DettaglioTrend`
- `MetabolismTracker`
- `KcalCoach`
- `KcalVSPesoVSBf`
- `PRatio`

Purpose:

Historical analysis, reporting and progress interpretation.

Health OS role:

Intelligence layer.

Future direction:

These screens should inform the new Health OS insight model, not remain isolated dashboards.

## Calendar and Planning

Representative screens:

- `Calendario`
- `CalendarioCoach`
- `PaginaCalendario`

Purpose:

Calendar and scheduled product behavior.

Health OS role:

Plan and adherence layer.

## Chat and Human Guidance

Representative screens:

- `Chat`
- `ChatCoach`
- `ListaCoach`

Purpose:

Communication between user and coach / support layer.

Health OS role:

Human guidance layer.

## Technical / Service Components

Representative files:

- `ErrorBoundary`
- `ConnectionMonitor`
- `apiFetch`
- `Cronometro`
- `Timer`

Purpose:

Resilience, connectivity, API client and execution timing.

Critical preservation note:

These are not pure UI details. They affect reliability, workout execution and support workflows.

## Open Questions

- Which screens are still reachable in production?
- Which backup files are dead code?
- Which coach screens are admin-only versus normal coach workflow?
- Which customer features are paid, free, onboarding-only or legacy?
- Which screens are mandatory for current paying users?

