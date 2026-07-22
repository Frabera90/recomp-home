# RE-COMP Feature Index

## Purpose

This is the master index for app features, flows and screens.

Use it when you need to know where to go next, what exists, what is missing, and which flow should be designed or reviewed.

## Status Legend

- `BACKLOG`: identified but not started.
- `AS-IS REVIEW`: current app/audit/code is being reviewed.
- `FLOW MAPPED`: flow is documented but not visually designed.
- `DESIGNING`: UI/prototype work in progress.
- `REVIEW`: ready for user review.
- `APPROVED`: approved by user.
- `IMPLEMENTED`: present in app pilot.
- `FROZEN`: do not change without `UNFREEZE <flow name>`.

## Evidence Legend

- `EXISTING`: supported by current app, audit or code evidence.
- `UI ONLY`: can likely be redesigned without backend/API changes.
- `NEW LOGIC`: requires backend/API/business logic approval.

## Design System Legend

- `DS EXISTS`: reuse existing component.
- `DS ADAPT`: adapt existing or planned component.
- `DS MISSING`: request/document component before local implementation.

## Current Priority Path

| Order | Feature | Flow | Primary Screen IDs | Status | Tracker |
| --- | --- | --- | --- | --- | --- |
| 1 | Onboarding | Onboarding / Registration | `ONB-001` to `ONB-006` | REVIEW | `experiments/app-ui-pilot/docs/app-flow-tracker.md` |
| 2 | Authentication | Role Gate / Setup Required | `AUTH-001`, `AUTH-002` | AS-IS REVIEW | `experiments/app-ui-pilot/docs/app-flow-tracker.md` |
| 3 | Onboarding | PreScreening / Baseline Required | `ONB-010` to `ONB-014` | AS-IS REVIEW | `experiments/app-ui-pilot/docs/app-flow-tracker.md` |
| 4 | Home | Daily Overview | `HOME-001` | IMPLEMENTED | `experiments/app-ui-pilot/docs/app-flow-tracker.md` |
| 5 | Nutrition | Home Nutrition Entry | `HOME-010`, `NUT-001` | BACKLOG | `experiments/app-ui-pilot/docs/app-flow-tracker.md` |
| 6 | Nutrition | Food Tracker | `NUT-001` to `NUT-006` | AS-IS REVIEW | `experiments/app-ui-pilot/docs/app-flow-tracker.md` |
| 7 | Guidance | Professional Review / Consultation | `GUIDE-010`, `COACH-010` | BACKLOG | `experiments/app-ui-pilot/docs/app-flow-tracker.md` |

## Feature Map

| Feature | Folder | Screen Prefix | Priority | Current State | Notes |
| --- | --- | --- | --- | --- | --- |
| Onboarding | `04_flows/00_Onboarding/` | `ONB` | P0 | REVIEW / AS-IS REVIEW | Entry into app, baseline and readiness gates |
| Authentication | `04_flows/01_Authentication/` | `AUTH` | P0 | AS-IS REVIEW | Role and access routing |
| Home | `04_flows/02_Home/` | `HOME` | P0 | IMPLEMENTED / BACKLOG | Daily overview and nutrition entry |
| Recovery | `04_flows/03_Recovery/` | `REC` | P1 | FLOW MAPPED | Defer until Home/Food stabilizes |
| Body | `04_flows/04_Body/` | `BODY` | P1 | BACKLOG | Measurements and body check gates |
| Training | `04_flows/05_Training/` | `TRN` | P1 | BACKLOG | Plans, sessions, history |
| Nutrition | `04_flows/06_Nutrition/` | `NUT` | P0 | AS-IS REVIEW | Food Tracker is August milestone |
| Biomarkers | `04_flows/07_Biomarkers/` | `BIO` | P1 | BACKLOG | Screening and lab markers |
| Sleep | `04_flows/08_Sleep/` | `SLP` | P1 | BACKLOG | Sleep window and recovery support |
| Guidance | `04_flows/09_Guidance/` | `GUIDE` | P0/P1 | BACKLOG / FLOW MAPPED | AI + professionals must be clearly distinct |
| Chat | `04_flows/10_Chat/` | `CHAT` | P1 | BACKLOG | Human guidance, AI chat and routing |
| Coach | `04_flows/11_Coach/` | `COACH` | P0/P1 | BACKLOG | Specialist review, paid consultation, booking |
| Profile | `04_flows/12_Profile/` | `PROF` | P1 | BACKLOG | User identity, preferences, permissions |
| Settings | `04_flows/13_Settings/` | `SET` | P1 | BACKLOG | Notifications, privacy, integrations |
| Admin | `04_flows/14_Admin/` | `ADM` | P2 | BACKLOG | Admin/professional tools, not current design priority |

## Screen Inventory

### Onboarding

| ID | Screen | Status | Evidence | Backend Impact | Design System | Link |
| --- | --- | --- | --- | --- | --- | --- |
| `ONB-001` | Welcome / Product Promise | REVIEW | EXISTING / UI ONLY | UI ONLY | DS ADAPT | `experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md` |
| `ONB-002` | Role / User Type | REVIEW | EXISTING / UI ONLY | UI ONLY / NEW LOGIC if role logic changes | DS MISSING | `experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md` |
| `ONB-003` | Goal Selection | REVIEW | EXISTING / UI ONLY | UI ONLY | DS ADAPT | `experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md` |
| `ONB-004` | Focus Areas | REVIEW | EXISTING / UI ONLY | UI ONLY | DS ADAPT | `experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md` |
| `ONB-005` | Baseline Intro | REVIEW | EXISTING / UI ONLY | UI ONLY / NEW LOGIC if fields change | DS MISSING | `experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md` |
| `ONB-006` | Guidance Setup | REVIEW | UI ONLY / NEW LOGIC | NEW LOGIC for professional routing | DS MISSING | `experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md` |

### Authentication

| ID | Screen | Status | Evidence | Backend Impact | Design System | Link |
| --- | --- | --- | --- | --- | --- | --- |
| `AUTH-001` | Role Gate / Setup Required | REVIEW | EXISTING / UI ONLY | UI ONLY / NEW LOGIC if role logic changes | DS ADAPT / DS MISSING | `experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md` |
| `AUTH-002` | PreHome Route Decision | REVIEW | EXISTING / UI ONLY | UI ONLY / NEW LOGIC if route gates change | DS MISSING | `experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md` |

### Home

| ID | Screen | Status | Evidence | Backend Impact | Design System | Link |
| --- | --- | --- | --- | --- | --- | --- |
| `HOME-001` | Daily Overview | IMPLEMENTED | UI ONLY in pilot | NEW LOGIC for real recommendation engine | DS ADAPT | `experiments/app-ui-pilot/docs/home-daily-overview.md` |
| `HOME-010` | Nutrition Entry From Home | BACKLOG | EXISTING / UI ONLY | UI ONLY for entry card, NEW LOGIC for computed insight | DS ADAPT / DS MISSING | `experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md` |

### Nutrition

| ID | Screen | Status | Evidence | Backend Impact | Design System | Link |
| --- | --- | --- | --- | --- | --- | --- |
| `NUT-001` | Food Tracker Overview | AS-IS REVIEW | EXISTING | UI ONLY for redesign | DS ADAPT / DS MISSING | `experiments/app-ui-pilot/docs/onboarding-to-food-tracker-flow.md` |
| `NUT-002` | Add Meal / Entry | BACKLOG | EXISTING | UI ONLY / NEW LOGIC if tracking model changes | DS MISSING | `01_analysis/code-audit/critical-screens-matrix.md` |
| `NUT-003` | Food Log / History | BACKLOG | EXISTING | UI ONLY | DS ADAPT | `01_analysis/code-audit/critical-screens-matrix.md` |
| `NUT-004` | Nutrition Insight | BACKLOG | UI ONLY / NEW LOGIC | NEW LOGIC for computed insights | DS ADAPT / DS MISSING | `experiments/app-ui-pilot/docs/app-flow-tracker.md` |
| `NUT-005` | Specialist Review Request | BACKLOG | NEW LOGIC / service context | NEW LOGIC unless external booking link | DS MISSING | `08_workflow/priority-roadmap.md` |
| `NUT-006` | August Technical Modification | AS-IS REVIEW | EXISTING / stakeholder priority | TBD after audit | TBD | `08_workflow/priority-roadmap.md` |

### Guidance / Coach

| ID | Screen | Status | Evidence | Backend Impact | Design System | Link |
| --- | --- | --- | --- | --- | --- | --- |
| `GUIDE-001` | AI Coach Overview | FLOW MAPPED | UI ONLY in pilot docs | NEW LOGIC for real AI/data access | DS ADAPT | `experiments/app-ui-pilot/docs/ai-coach.md` |
| `GUIDE-010` | Professional Review / Consultation Entry | BACKLOG | NEW LOGIC / service context | NEW LOGIC unless external booking link | DS MISSING | `08_workflow/priority-roadmap.md` |
| `COACH-010` | Book Analysis / Specialist Review | BACKLOG | NEW LOGIC / service context | NEW LOGIC unless external booking link | DS MISSING | `08_workflow/priority-roadmap.md` |

## Rule For New Screens

Every new screen must be added here before or immediately after it is designed.

Required fields:

- ID
- screen name
- feature folder
- status
- evidence label
- backend impact
- Design System dependency
- link to flow doc
- link to prototype/app implementation when available

If a screen does not have an ID, it is not yet part of the product map.
