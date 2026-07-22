# Developer Handoff Questions

Purpose: questions to ask the RE-COMP developers before treating the new UI pilot as product architecture.

These questions are based on the first-pass audit of `ReCompV2.zip`.

## 1. Source Of Truth

1. Is `ReCompV2.zip` the latest production app, a beta build, or an old branch?
2. Is the WordPress plugin API still the source of truth?
3. Is there a newer backend contract or API documentation?
4. Are endpoint keys like `v222`, `v65`, `v109` documented anywhere?
5. Which logic is server-owned vs client-owned?

## 2. Users And Roles

1. What are all possible values for `Ruolo`?
2. What is the exact difference between `ID` and `UtenteGestito`?
3. Can a coach impersonate or simulate a user?
4. What does `SIMULAZIONE` enable?
5. Which screens are client-only?
6. Which screens are coach-only?
7. Which screens behave differently depending on selected user?

## 3. Authentication

1. What tokens are valid today?
2. Is `TokenLoginSito` still used?
3. Are `access_token` and `refresh_token` part of the current auth model?
4. Are tokens renewed by headers or by a separate endpoint?
5. What should happen when token renewal fails?

## 4. Body Check And Baseline

1. Which measurements are required for Body Check?
2. Which measurements are optional?
3. How does Body Check influence training, nutrition, reports, or recommendations?
4. Are body composition calculations local or server-side?
5. Is `BLOCCO` related to Body Check, training, or another domain?

## 5. Morning Check

1. Which fields are collected?
2. Is it daily, weekly, or flexible?
3. What happens if the user skips it?
4. Does Morning Check update coach dashboards?
5. Does it affect recommendations?
6. Are weight values `PESO` and `PESODECIMALE` persisted only locally or synced?

## 6. Training

1. What is the hierarchy of a training plan?
2. How are current and future weeks handled?
3. What does the coach create?
4. What does the client execute?
5. How is completion tracked?
6. How is adherence calculated?
7. Which exercise library is canonical?

## 7. Nutrition

1. Is nutrition plan data created by coaches, users, or both?
2. Are recipes static or user-specific?
3. Are meals logged as completed?
4. Are calories/macros calculated locally or server-side?
5. What is the role of `DietaCoach` versus `Dieta`?

## 8. Reports And Trends

1. Which report is the most important for clients?
2. Which report is the most important for coaches?
3. Which charts are business-critical?
4. Which metrics must exist in the new Health OS home?
5. Which trends trigger coach action?

## 9. Chat And Guidance

1. Is chat coach-to-user, support-to-user, or both?
2. Are messages stored in Firebase, WordPress API, or elsewhere?
3. Are push notifications attached to chat?
4. Can the new AI Coach concept coexist with the existing human chat flow?
5. Which responses require human review?

## 10. Migration Strategy

1. Should the new app reuse the current backend?
2. Will the backend be refactored before or after the UI?
3. Which flows can be redesigned first with low risk?
4. Which flows must be frozen until fully mapped?
5. Is there a staging environment for testing old and new behavior side by side?

## Suggested Developer Ask

Ask the team for:

- Endpoint documentation for all `v*` query keys.
- Storage key definitions.
- Role/permission matrix.
- Current database model or API schema.
- Known deprecated screens.
- Known screens that must remain business-critical.

