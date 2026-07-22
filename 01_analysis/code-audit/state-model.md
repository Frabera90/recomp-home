# State Model

Status: first-pass state reconstruction from `ReCompV2.zip`.

## Purpose

This document identifies the app states that must be understood before final product redesign.

## Primary State Axes

### 1. Session State

Observed evidence:

- `Login`
- `ID`
- `access_token`
- `refresh_token`

Likely states:

- logged out
- logged in
- token refresh required
- invalid session
- returning user

Unresolved:

- whether legacy login and token auth are both active
- exact invalid-session handling

### 2. Role State

Observed evidence:

- `Ruolo`
- separate coach and customer screens

Likely states:

- customer
- coach
- possibly admin/operator-like coach states

Critical note:

Role is not a visual preference. It changes the product flow and available data.

### 3. Managed User State

Observed evidence:

- `UtenteGestito`
- coach screens for user management

Likely states:

- coach viewing own dashboard
- coach viewing a selected user
- coach viewing new users
- coach viewing inactive users

Health OS implication:

The coach layer should be designed around a clear current-client context.

### 4. Language State

Observed evidence:

- `LINGUA`
- imported language files

Likely states:

- Italian
- English
- possibly other language packs

Critical note:

Language affects copy, layout length and component spacing.

### 5. Onboarding State

Observed evidence:

- `PreLogin`
- `InfoApp`
- `Registrazione`
- `PreHome`
- `PreScreening`

Likely states:

- new user
- registered but incomplete
- screening pending
- ready for home
- coach onboarding

Unresolved:

- exact onboarding gate order.

### 6. Body State

Observed evidence:

- Body Check screens
- body fat / measurement screens
- weight, HRV, BPM screens

Likely states:

- no baseline
- baseline in progress
- baseline completed
- updated measurement
- coach reviewing user measurement

Health OS implication:

This is the foundation of the system, not a secondary dashboard.

### 7. Daily State

Observed evidence:

- `MorningCheck`
- `MorningCheckCoach`

Likely states:

- daily check not completed
- completed
- coach review
- daily signal available for recommendation

Health OS implication:

This should feed the `Today` screen and daily recommendation.

### 8. Training Execution State

Observed evidence:

- workout timer keys
- `GiornoAllenamento`
- `EsercizioAllenamento`
- `InizioEsercizio`
- `TrainingStatus`

Likely states:

- no active workout
- workout planned
- workout started
- current exercise
- current block
- rest timer
- completed workout
- record achieved

Critical note:

This is execution logic. It should not be lost during visual simplification.

### 9. Nutrition State

Observed evidence:

- food tracking screens
- diet creation screens
- meal and recipe screens

Likely states:

- no active diet
- diet assigned
- daily food log
- meal detail
- custom food
- coach-managed diet

Critical note:

Nutrition appears data-heavy and should be audited as its own domain.

### 10. Report and Insight State

Observed evidence:

- report screens
- trend screens
- metabolism / calorie / body composition screens

Likely states:

- no trend data
- weekly report available
- detailed trend selected
- coach reviewing trend
- user reviewing own trend

Health OS implication:

This state should become system interpretation, not isolated analytics.

## State Risks

- State is distributed across screens and AsyncStorage.
- Coach state and customer state may share keys but mean different things.
- Temporary execution state may be fragile.
- Some state may exist only because a screen previously set a value.

## Recommended Future State Domains

- `session`
- `role`
- `currentClient`
- `language`
- `onboarding`
- `bodyState`
- `dailyState`
- `plan`
- `trainingExecution`
- `nutritionLog`
- `insights`
- `coachReview`
- `notifications`

