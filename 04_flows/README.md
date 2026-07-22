# RE-COMP User Flows

## Purpose

This folder is the navigation system for RE-COMP app flows.

Use it to find:

- what feature a flow belongs to
- which screens exist
- which screens are missing
- what is approved
- what is frozen
- which prototype or app file represents the flow
- which backend impact is expected
- which Design System components are required

## Hierarchy

```text
Feature = what the product does
Flow = how the user moves through the feature
Screen = a single interface
Component = a reusable building block
```

Codex chats should not design isolated screens without understanding their feature and flow.

## Main Index

Start here:

- `04_flows/FEATURE_INDEX.md`

Operational app tracker:

- `experiments/app-ui-pilot/docs/app-flow-tracker.md`

Editable PO spreadsheet:

- `outputs/po-tracker/RE-COMP_App_Flow_Tracker.xlsx`

## Screen ID Convention

Use stable screen IDs:

- `ONB-001`: Onboarding
- `AUTH-001`: Authentication
- `HOME-001`: Home
- `REC-001`: Recovery
- `BODY-001`: Body / Measurements
- `TRN-001`: Training
- `NUT-001`: Nutrition / Food Tracker
- `BIO-001`: Biomarkers
- `SLP-001`: Sleep
- `GUIDE-001`: AI + Professional Guidance
- `CHAT-001`: Chat
- `COACH-001`: Coach / Specialist
- `PROF-001`: Profile
- `SET-001`: Settings
- `ADM-001`: Admin

When referring to a screen, use its ID whenever possible.

## Folder Rule

Each flow folder should contain:

- `README.md`
- flow purpose
- user decision
- screen list
- status
- evidence labels
- backend impact labels
- Design System dependency labels
- links to prototype/app implementation
- open questions

Do not place app implementation code inside `04_flows/`.

This folder is documentation and navigation only.
