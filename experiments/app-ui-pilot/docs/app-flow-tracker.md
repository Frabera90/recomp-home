# RE-COMP App Flow Tracker

## Purpose

This is the operational table for app design work.

It tracks what flows exist, what must be designed next, what is approved, what is implemented, and where each flow document/prototype lives.

The App chat must consult and update this file whenever an app flow is reviewed, designed, approved, implemented or frozen.

## Status Labels

- `BACKLOG`: identified but not started.
- `AS-IS REVIEW`: current app/audit/code is being reviewed.
- `FLOW MAPPED`: flow is documented but not visually designed.
- `DESIGNING`: UI design/prototype work in progress.
- `REVIEW`: ready for user review.
- `APPROVED`: approved by user.
- `IMPLEMENTED`: present in app pilot.
- `FROZEN`: do not change without `UNFREEZE <flow name>`.

## Evidence Labels

- `EXISTING`: supported by current app/audit/code evidence.
- `UI ONLY`: likely redesignable without backend/API change.
- `NEW LOGIC`: requires backend/API/business logic or explicit technical approval.

## Design System Labels

- `DS EXISTS`: component exists and should be reused.
- `DS ADAPT`: component exists/planned but needs adaptation.
- `DS MISSING`: component must be requested/documented before local implementation.

## Flow Table

| Priority | Flow | Status | Evidence | Backend Impact | Design System | Flow Doc | Prototype / App Link | Owner | Next Step |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P0 | Onboarding / Registration | REVIEW | EXISTING / UI ONLY | UI ONLY for current pilot, NEW LOGIC for changed auth rules | DS EXISTS / DS ADAPT / DS MISSING | [onboarding-to-food-tracker-flow.md](./onboarding-to-food-tracker-flow.md) | `experiments/app-ui-pilot/src/components/recomp-ui.jsx`; mapping in [component-map.md](./component-map.md) | App + System Architect | Composition review: confirm one focal point per step and approve or request further subtraction |
| P0 | Role Gate / Setup Required | REVIEW | EXISTING / UI ONLY | UI ONLY for current pilot, NEW LOGIC for changed role logic | DS ADAPT / DS MISSING | [onboarding-to-food-tracker-flow.md](./onboarding-to-food-tracker-flow.md) | `experiments/app-ui-pilot/src/components/recomp-ui.jsx` | App + System Architect | Composition review: confirm route choice is clear without extra summary card |
| P0 | PreScreening / Baseline Required | AS-IS REVIEW | EXISTING | UI ONLY / NEW LOGIC for changed required fields | DS MISSING | [onboarding-to-food-tracker-flow.md](./onboarding-to-food-tracker-flow.md) | Not implemented | App + System Architect | Validate screening/baseline gates |
| P0 | Home / Daily Overview | IMPLEMENTED | UI ONLY in pilot, EXISTING direction from audit | UI ONLY for current pilot, NEW LOGIC for real recommendation engine | DS ADAPT | [home-daily-overview.md](./home-daily-overview.md) | `experiments/app-ui-pilot/src/components/recomp-ui.jsx` | App | Review against professional guidance priority |
| P0 | Home Nutrition Entry | BACKLOG | EXISTING / UI ONLY | UI ONLY for entry card, NEW LOGIC for computed nutrition insight | DS ADAPT / DS MISSING | [onboarding-to-food-tracker-flow.md](./onboarding-to-food-tracker-flow.md) | Not implemented | App | Define entry from Home to Food Tracker |
| P0 | Food Tracker | AS-IS REVIEW | EXISTING | UI ONLY for redesign, NEW LOGIC for AI/pro review/request | DS ADAPT / DS MISSING | [onboarding-to-food-tracker-flow.md](./onboarding-to-food-tracker-flow.md) | Not implemented | System Architect first | Map old food tracker screens and August scope |
| P0 | Professional Review / Consultation | BACKLOG | NEW LOGIC / service context | NEW LOGIC unless external booking link only | DS MISSING | [priority-roadmap.md](../../../08_workflow/priority-roadmap.md) | Not implemented | System Architect + Design System | Decide booking/review behavior |
| P1 | AI Coach | FLOW MAPPED | UI ONLY in pilot docs, NEW LOGIC for real AI | NEW LOGIC for real AI/data access | DS ADAPT | [ai-coach.md](./ai-coach.md) | Not implemented | App | Reframe with AI + professional distinction |
| P1 | Recovery Detail | FLOW MAPPED | UI ONLY in pilot docs | NEW LOGIC for real recovery computation | DS ADAPT | [recovery-detail.md](./recovery-detail.md) | Not implemented | App | Defer until Home/Food priority stabilizes |
| P1 | Reports / Trends | BACKLOG | EXISTING | UI ONLY for visual redesign, NEW LOGIC for new summaries | DS ADAPT | `01_analysis/code-audit/critical-screens-matrix.md` | Not implemented | System Architect | Map report/trend families |
| P1 | Body Check / Measurements | BACKLOG | EXISTING | UI ONLY for redesign, NEW LOGIC for changed required fields | DS ADAPT / DS MISSING | `01_analysis/code-audit/critical-screens-matrix.md` | Not implemented | System Architect | Map baseline/body check gates |
| P1 | Training Plan | BACKLOG | EXISTING | UI ONLY for redesign, NEW LOGIC for changed plan logic | DS ADAPT / DS MISSING | `01_analysis/code-audit/critical-screens-matrix.md` | Not implemented | System Architect | Map training hierarchy |
| P1 | Nutrition / Diet Plan | BACKLOG | EXISTING | UI ONLY for redesign, NEW LOGIC for changed target logic | DS ADAPT / DS MISSING | `01_analysis/code-audit/critical-screens-matrix.md` | Not implemented | System Architect | Separate diet plan from food tracking |
| P1 | Chat / Human Guidance | BACKLOG | EXISTING | UI ONLY for redesign, NEW LOGIC for AI/pro routing | DS ADAPT / DS MISSING | `01_analysis/code-audit/critical-screens-matrix.md` | Not implemented | System Architect | Distinguish chat, AI coach and professional review |

## Current Recommended Next Flow

Recommended next design target:

1. Onboarding / Registration as-is review
2. Role Gate / Setup Required
3. PreScreening / Baseline Required
4. Home Nutrition Entry
5. Food Tracker August scope

Reason:

This path preserves existing app logic while creating a coherent entry into Home and Food Tracker.

## Update Rule

Whenever a flow changes, update:

- `Status`
- `Evidence`
- `Backend Impact`
- `Design System`
- `Flow Doc`
- `Prototype / App Link`
- `Next Step`

If a flow is approved, write:

- approved date
- approved by user
- exact file/prototype link
- what is frozen

## Approval Rule

No flow is considered done until:

1. as-is review exists;
2. backend impact labels exist;
3. Design System dependency labels exist;
4. flow document exists;
5. user approves;
6. tracker row is updated.
