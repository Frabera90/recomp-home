# Feature Comparison

Status: first-pass comparison between original implemented scope and available Claude redesign scope.

## Summary

The original app contains broad coaching, training, nutrition, reporting and body-state functionality. The Claude redesign preserves the major product themes but compresses many features into fewer screens.

This is directionally useful for clarity, but risky for migration.

## Comparison Matrix

| Feature Area | Original App Evidence | Claude Redesign Evidence | Assessment |
| --- | --- | --- | --- |
| Auth and entry | Login, registration, splash, pre-home, role routing | Onboarding / Settings mentioned | Underdefined in redesign |
| Customer dashboard | Home/Menu and many entry points | Home Dashboard | Strong simplification |
| Morning check | Customer and coach variants | 3-step customer check | Better customer UX, coach review unclear |
| Body check | BodyCheck, BodyFat, Misure, BPM, HRV, coach variants | Body Check, Measurements, Progress Photos | Preserved in concept, reduced in detail |
| Training plan | Plan, day, exercise, start exercise, timers, status, free workout | Training Plan | Major risk of lost execution logic |
| Coach training creation | Many `NuovoPianoAllenamento*` and `GestionePianoAllenamento*` routes | Not clearly covered | Likely missing |
| Nutrition logging | Diet, FoodTracking, GiornoFood, add/manage food | Food Diary, Add Food | Partially preserved |
| Coach diet creation | CreazioneDieta, CreaDieta, CreaPasto, CreaRicetta | Not clearly covered | Likely missing |
| Reports/trends | Report, Trend, Metabolism, Kcal vs Peso vs BF, PRatio | Progress / Analytics, Weekly Report | Partially preserved |
| Coach operations | HomeCoach, new/inactive users, client menus | Lista Clienti, Menu Percorso | Simplified, needs validation |
| Chat | Chat, ChatCoach, ListaCoach | Chat | Preserved conceptually |
| Calendar | Calendar customer/coach/pages | Calendar | Preserved conceptually |
| Profile/settings | Profile, details, password | Settings / Profile | Preserved conceptually |
| Calculators | Lean, Bulk, RM, Strategy-like tools | Strategy Calculator | Partially preserved |
| Error/offline resilience | ErrorBoundary, ConnectionMonitor signal | Not specified | Missing from redesign brief |

## Features Clearly Preserved

- Customer home.
- Morning check.
- Nutrition diary.
- Add food.
- Training plan entry.
- Progress analytics.
- Measurements/photos.
- Coach client list.
- Coach client menu.
- Weekly report.
- Strategy calculator.
- Chat.
- Calendar.
- Settings/profile.

## Features At Risk

- Role-routing details.
- Coach new/inactive client workflows.
- Managed-user context.
- Training plan creation and assignment.
- Training execution state and timers.
- Free workout and exercise-library flows.
- Coach diet creation.
- Meal and recipe authoring.
- Report metric definitions.
- Historical trend drilldowns.
- Offline/error recovery.
- Push notification/device token behavior.

## Useful Redesign Moves

- Fewer entry points.
- More obvious daily priority.
- Dedicated food diary.
- Clearer coach client menu.
- More deliberate typography and component rules.

## Damaging Simplifications To Avoid

- Treating training as a static list.
- Treating nutrition as only a macro dashboard.
- Treating coach mode as only a list of clients.
- Removing report/trend detail before defining Health OS insights.
- Hiding current managed-user state.

## Assumptions

- The original app route set represents real feature scope.
- The Claude redesign brief is incomplete as implementation evidence.
- Missing features may exist in Figma or another codebase not yet located.

