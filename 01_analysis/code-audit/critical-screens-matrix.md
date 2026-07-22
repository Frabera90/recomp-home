# Critical Screens Matrix

Source audited: `ReCompV2.zip`

Status: first-pass architecture audit. This matrix does not certify behavior; it identifies which parts of the original app must be protected and revalidated before any redesign becomes product architecture.

## Executive Reading

The original app is not a small set of dashboard screens. It is a working operational product with many screen families around coaching, plans, measurements, reports, diet, and training.

The highest-risk redesign mistake would be replacing these families with a visually cleaner Health OS shell before extracting the real rules underneath.

## Route Concentration

Observed route families by filename match inside `ReCompV2/app/`:

| Area | Matched files | Risk | Why it matters |
| --- | ---: | --- | --- |
| Training plan | 39 | Very high | Contains plan creation, assignment, exercise execution, future weeks, coach/user versions. |
| Diet / nutrition | 19 | Very high | Likely contains food logging, diet plans, recipes, coach-side nutrition logic. |
| Measurements | 13 | High | Body metrics, user progress, coach review surfaces. |
| Body fat / body composition | 9 | High | Baseline and composition logic are core to the Health OS positioning. |
| Coach home / coach user lists | 8 | Very high | Defines coach workflows and managed user states. |
| Trends / reports | 8 | High | Turns raw data into interpretation; core to “Health OS”. |
| Morning Check | 4 | High | Daily signal capture. |
| Calendar | 3 | Medium-high | Scheduling and adherence context. |
| Chat | 2 | Medium-high | Human guidance layer. |
| Login / auth | 2 | High | Role routing and token behavior. |
| Profile | 2 | Medium | User/account state and preferences. |

Assumption: counts are based on filename matches, not full semantic parsing. They are useful for prioritization, not as final inventory.

## Critical Screen Families

### 1. Entry, Auth and Role Routing

Representative routes:

- `SplashScreen`
- `PreLogin`
- `InfoApp`
- `Login`
- `Registrazione`
- `Menu`

Business function:

- Decide whether a user is authenticated.
- Decide whether the user is a client, coach, or managed user.
- Load persisted tokens and stored user identifiers.
- Route into the correct product surface.

Redesign risk:

- A beautiful new onboarding could break real access logic if role routing is not preserved.

Validation needed:

- Token names and renewal behavior.
- First login vs returning user path.
- Coach vs client vs managed-user routing.
- Error and offline states during login.

### 2. Client Daily Home

Representative routes:

- `Menu`
- `PaginaCalendario`
- `MorningCheck`
- `ReportSettimanale`
- `Trend`

Business function:

- Give the user the current state of their body and the next action.
- Surface check-ins, reports, trends, and calendar context.

Redesign risk:

- Turning the home into a generic dashboard instead of a daily decision surface.

Validation needed:

- Which data is available on first load.
- Which metrics are computed server-side vs locally.
- What the user is expected to do every day.

### 3. Coach Operating Layer

Representative routes:

- `HomeCoach`
- `HomeCoachNuovi`
- `HomeCoachNonAttivi`
- `ElencoUtentiEsercizi`
- `ElencoUtentiEserciziNonAttivi`
- `ReportUtente`
- `ChatCoach`

Business function:

- Segment users.
- Let the coach inspect individual states.
- Support inactive/new users.
- Review reports and communicate.

Redesign risk:

- Removing coach triage logic while simplifying the consumer app.

Validation needed:

- Definitions of new, active, inactive, and managed users.
- Coach permissions.
- User selection and context switching.
- Coach-side notification logic.

### 4. Body Check / Baseline

Representative routes:

- `BodyFat`
- `BodyFatCoach`
- `Misure`
- `MisureCoach`
- `ConfrontoMisureCoach`
- `PreScreening`

Business function:

- Capture or review body composition and baseline measurements.
- Provide a starting state for personalization.

Redesign risk:

- Presenting Body Check as a marketing feature while losing the data model that makes it useful.

Validation needed:

- Required fields.
- Measurement history.
- Coach/client differences.
- How results influence plans, reports, or recommendations.

### 5. Morning Check / Daily Signal

Representative routes:

- `MorningCheck`
- `MorningCheckCoach`

Business function:

- Collect daily readiness/signal data.
- Feed reports, recommendations, or coach context.

Redesign risk:

- Compressing it into a nice UI card without preserving inputs, timing, and impact.

Validation needed:

- Questions/metrics collected.
- Frequency.
- Required vs optional fields.
- Downstream use in recommendations and reports.

### 6. Training Plan System

Representative routes:

- `PianoAllenamento`
- `PianoAllenamentoCoach`
- `PianoAllenamentoCoachProxSettimana`
- `PianoAllenamentoCoachAltro`
- `PianoAllenamentoProxSettimana`
- `PianoAllenamentoAltro`
- `InizioEsercizio`
- `InizioEsercizioCoach`
- `EsercizioAllenamentoUtente`
- `MenuCreazionePercorsoAllenamento`
- `MenuGestionePercorsoAllenamento`

Business function:

- Create, assign, execute, and review training plans.
- Manage exercises, weeks, blocks, and libraries.

Redesign risk:

- Replacing a complex operational plan system with a simple “today’s plan” card too early.

Validation needed:

- Plan hierarchy: week, day, block, exercise, set.
- Coach assignment logic.
- Future-week handling.
- Completion/adherence rules.
- Exercise library behavior.

### 7. Nutrition / Diet

Representative routes:

- `Dieta`
- `DietaCoach`
- `DettagliRicetta`
- `ElencoPasti`
- nutrition-related screens in the diet family.

Business function:

- Support diet plans, meals, recipes, and coach-side nutrition.

Redesign risk:

- Losing meal-plan complexity when reframing nutrition as one Health OS signal.

Validation needed:

- Meal structure.
- Recipe data.
- Coach edits vs user logging.
- Calorie/macronutrient logic.

### 8. Reports and Trends

Representative routes:

- `ReportSettimanale`
- `ReportCoach`
- `ReportUtente`
- `ReportPrecedenti`
- `Trend`
- `MenuTrend`
- `KcalVSPesoVSBf`
- `KcalVSPesoVSBfUtente`

Business function:

- Convert historical measurements and behaviors into readable progress.

Redesign risk:

- Creating attractive trend modules that do not correspond to real report logic.

Validation needed:

- Which charts are important.
- Which values are computed locally.
- Coach vs user report differences.
- How reports influence next actions.

### 9. Chat and Guidance

Representative routes:

- `Chat`
- `ChatCoach`

Business function:

- Human guidance, clarification, and accountability.

Redesign risk:

- Confusing AI coach, human coach, and support chat into one vague conversational layer.

Validation needed:

- Who can message whom.
- Message persistence.
- Notifications.
- Attachments or media, if present.

## Priority for Next Audit Pass

1. Extract exact route list from `Pagine.js`.
2. For each critical family, identify the main API endpoints used.
3. For each critical family, identify AsyncStorage keys read/written.
4. Separate server-owned logic from client-owned logic.
5. Map which old flows are required in the new Health OS language.

