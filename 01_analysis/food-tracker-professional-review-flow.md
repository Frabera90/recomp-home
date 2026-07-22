# Food Tracker + Professional Review Flow

Status: working analysis for System Architect.

Purpose: define the current Food Tracker evidence, the August 2026 technical scope, and the priority flow that connects Home, Food Tracker, AI guidance and real professionals.

## Strategic Context

RE-COMP must not be perceived as another AI food/training tracker.

The differentiator is:

- tracked user data;
- AI interpretation;
- real professionals;
- specialist review;
- paid consultation or analysis booking.

The Food Tracker is the near-term proof point because it can show how daily tracked nutrition becomes guidance and, when needed, professional review.

## Delivery Dates

| Milestone | Date |
| --- | --- |
| Food tracker technical modification | end of August 2026 |
| Internal completion target | 2026-11-21 |
| External final visibility deadline | 2026-12-05 |

## 1. Current Food Tracker State From Old App

Source: `ReCompV2.zip` audit and targeted source read.

### Main Screen Family

Observed files:

- `Dieta.js`
- `DietaCoach.js`
- `FoodTracking.js`
- `FoodTrackingUtente.js`
- `GiornoFood.js`
- `AggiungiCibo.js`
- `AggiungiCiboUtente.js`
- `AggiungiProdotto.js`
- `AggiungiProdottoUtente.js`
- `GestioneCibo.js`
- `CreaDieta.js`
- `CreaPasto.js`
- `CreaRicetta.js`
- `ElencoPasti.js`
- `DettagliPasto.js`
- `DettagliRicetta.js`
- `MenuCoachFoodTracker.js`
- `MenuUtenteFoodTracker.js`
- `elementiDietaCoach/*`

### Implemented Behavior Signals

The old Food Tracker is not just a simple macro dashboard.

It appears to support:

- daily nutrition view;
- selected day/week;
- meal groups such as breakfast, lunch, dinner and snacks;
- food search;
- barcode/scan lookup;
- product detail;
- custom product creation/editing;
- quantity editing;
- grams and ounces;
- calorie and macro calculations;
- micronutrient display;
- weekly calorie/macronutrient comparison;
- goal vs actual nutrition;
- coach-side nutrition/diet views;
- meal, recipe and diet creation flows.

### Data Captured Or Displayed

Observed nutrition fields include:

- kcal;
- proteins;
- carbohydrates;
- fats;
- fibers;
- sugars;
- saturated fats;
- polyunsaturated fats;
- monounsaturated fats;
- trans fats;
- cholesterol;
- sodium;
- potassium;
- vitamin A;
- vitamin C;
- calcium;
- iron;
- quantity;
- brand;
- store;
- pack;
- ingredients;
- custom/certified product status.

### Technical Evidence

Observed endpoint keys by file:

| File | Endpoint Keys |
| --- | --- |
| `FoodTracking.js` | `v5`, `v161`, `v164`, `v180`, `v184`, `v185`, `v186`, `v187`, `v191`, `v222`, `v231`, `v253`, `v264` |
| `FoodTrackingUtente.js` | `v5`, `v65`, `v161`, `v164`, `v180`, `v184`, `v185`, `v186`, `v187`, `v191`, `v222`, `v231`, `v253`, `v264` |
| `AggiungiCibo.js` | `v152`, `v163`, `v190`, `v261`, `v290`, `v291`, `v298` |
| `AggiungiCiboUtente.js` | `v152`, `v163`, `v190`, `v242`, `v261`, `v290`, `v291`, `v298` |
| `AggiungiProdotto.js` | `v156`, `v163`, `v259`, `v298` |
| `AggiungiProdottoUtente.js` | `v156`, `v163`, `v259` |
| `GestioneCibo.js` | `v65`, `v319`, `v325`, `v333` |
| `Dieta.js` | `v5`, `v65`, `v93` |
| `DietaCoach.js` | `v19`, `v22` |
| `CreaDieta.js` | `v65`, `v324` |
| `CreaPasto.js` | `v65`, `v161`, `v332` |
| `CreaRicetta.js` | `v65`, `v161`, `v315` |
| `ElencoPasti.js` | `v65`, `v333` |
| `DettagliPasto.js` | `v65`, `v336` |
| `DettagliRicetta.js` | `v65`, `v318` |

### Current Product Assessment

Food Tracker is production-critical and complex.

It should be treated as a nutrition operating surface, not as a generic calorie tracker.

## 2. August 2026 Technical Modification Scope

The August scope should be narrow, demonstrable and investor-visible.

### Recommended Scope

Build a technical modification that connects tracked food data to review and guidance.

Minimum scope:

1. Show daily food tracking status on Home.
2. Let the user open Food Tracker for the selected day.
3. Show logged meals and nutrition summary.
4. Show AI nutrition interpretation.
5. Offer Specialist Review when data suggests uncertainty, inconsistency or user wants expert validation.
6. Offer paid Professional Consultation as a separate higher-touch option.

### What August Should Not Try To Rebuild

Do not rebuild the entire old nutrition system by end of August.

Out of scope for August unless already implemented:

- full diet creation;
- full recipe builder;
- full custom food database management;
- complete coach-side nutrition authoring;
- full payment flow;
- full scheduling system;
- medical claims or diagnostic recommendations.

### August Success Criteria

By end of August, the product should be able to demonstrate:

- nutrition data is tracked;
- AI can summarize or interpret it;
- a professional review can be requested;
- paid consultation is visible as a real service path;
- the experience feels like RE-COMP's Health OS, not a standalone food logger.

## 3. Priority Flow: Home + Food Tracker + Professional Review

### Flow Name

Home -> Food Tracker -> AI Nutrition Insight -> Specialist Review / Paid Consultation

### Primary User Decision

"Is my nutrition aligned with my goal, and do I need AI guidance or a professional review?"

### Flow Steps

1. Home shows today's nutrition status.
2. User opens Food Tracker.
3. Food Tracker shows day, meals, macro/micro summary and completion state.
4. User adds or edits food if needed.
5. AI Coach summarizes the day.
6. User sees whether professional review is optional, recommended or already requested.
7. User can request Specialist Review.
8. If deeper support is needed, user can book paid Professional Consultation.
9. Review result returns as a guided recommendation on Home/Food Tracker.

### Home Surface Requirements

Home should show:

- nutrition completion state;
- daily energy/macros summary;
- one clear nutrition recommendation;
- professional review entry when appropriate;
- distinction between AI guidance and human professional review.

### Food Tracker Surface Requirements

Food Tracker should show:

- selected day;
- meal sections;
- food rows;
- quantity edit;
- macro/energy summary;
- micronutrient detail when useful;
- empty/loading/error/sync states;
- AI interpretation;
- Specialist Review CTA;
- Professional Consultation CTA.

### Professional Review Surface Requirements

Review request should show:

- what data will be reviewed;
- who reviews it;
- expected outcome;
- paid/free status;
- status: available, requested, scheduled, completed;
- result summary when complete.

## 4. Guidance Model

### AI Coach

Role:

- instant interpretation;
- pattern summary;
- daily nutrition suggestion;
- clarification;
- preparation for professional review.

Should say:

- "AI summary";
- "based on tracked data";
- "suggested next step";
- "ask for specialist review".

Should not imply:

- medical diagnosis;
- final clinical authority;
- guaranteed results.

### Professional

Role:

- real human expert behind the experience;
- reviews context;
- validates or adjusts direction;
- may provide paid consultation.

Can include:

- coach;
- nutrition specialist;
- wellness/longevity specialist;
- other approved professionals.

### Specialist Review

Role:

- asynchronous review of tracked data or a specific question.

Product meaning:

- lighter than a consultation;
- more credible than AI-only guidance;
- tied to a data package: food logs, goals, symptoms/notes if approved, training context, body data when available.

### Paid Professional Consultation

Role:

- scheduled, higher-touch session with a professional.

Product meaning:

- commercial service;
- should be clearly distinct from AI and from asynchronous review;
- may be booked from Food Tracker, Home, Specialist Review result or service surfaces.

## 5. Decision List For Call / Priority

### Business Decisions

1. What exact Food Tracker modification was promised for end of August?
2. Must August include only request flow, or also completed review result?
3. Is Specialist Review paid, included, or partly included depending on plan?
4. Is Professional Consultation paid in-app, booked externally, or handled manually first?
5. Which professional type is first: coach, nutritionist, doctor, longevity specialist or generic specialist?
6. What must be visible to investors by end of August?

### Product Decisions

1. Does Home prioritize Morning Check or Food Tracker first for the August demo?
2. When should Specialist Review appear: always, after AI insight, or only when data quality is sufficient?
3. What data is required before a professional can review nutrition?
4. What is the difference between coach chat and professional review?
5. Does review create a recommendation card, a report, a message or a task?

### Technical Decisions

1. Which old Food Tracker endpoints must remain active for August?
2. Is the August change built on old backend, new service layer or prototype data?
3. Where is review request stored?
4. Does booking require payment integration now or later?
5. What is the minimum state model: requested, scheduled, completed, cancelled?

### Claims / Compliance Decisions

1. Which claims are approved for AI nutrition guidance?
2. Which claims are approved for specialist review?
3. What disclaimer or source label is required?
4. Are any medical professionals involved, or should language remain wellness/performance only?

## Recommended Next Task

Create a screen-by-screen spec for:

`Home -> Food Tracker -> AI Nutrition Insight -> Specialist Review / Paid Consultation`

This should become the August priority flow before any app implementation.

