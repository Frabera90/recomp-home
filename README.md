# RE-COMP App UI Pilot

This is an isolated provisional prototype area.

It is not the final application.

It is now a separate runnable prototype from the landing site.

## Purpose

Validate the RE-COMP app UI direction before the original app and Claude redesign codebases are audited.

## Included Screens

1. Home / Daily Overview
2. Recovery Detail
3. AI Coach

Current implemented prototype:

- Home / Daily Overview

## Flow Tracker

The app flow tracker lives at:

`experiments/app-ui-pilot/docs/app-flow-tracker.md`

Use it to see:

- what is done
- what is missing
- what is approved
- what is implemented
- what flow document exists
- what prototype/app link exists
- what the next step is

The App chat must update it when a flow changes status.

## Rules

- Do not infer final product logic.
- Design from current app/audit evidence first.
- Consult Design System before creating local app UI patterns.
- Label component dependency as `DS EXISTS`, `DS ADAPT` or `DS MISSING`.
- Preserve backend and core technology assumptions unless a new feature is explicitly approved.
- Label every proposed feature as `EXISTING`, `UI ONLY` or `NEW LOGIC`.
- Before redesigning an app area, produce an as-is review from current code and audit evidence.
- Use mock data only when marked provisional.
- Keep Liquid Glass restrained.
- Prioritize clarity, guidance and data legibility.
- Reconcile all outputs after the comparative product architecture audit.
- Do not add landing composition work here.
- Do not modify `design-system/tokens.css` without stating downstream impact first.
- Do not expose the Design System playground as an app route or mode.

## Run

From this folder:

```bash
npm install
npm run dev
```

This app prototype must stay separate from `recomp-landing-prototype/`.

## Design Playground

The Design System playground is owned by:

`design-system/playground/`

The app project does not expose it as a route or mode. The playground may temporarily import app pilot components until stable primitives are promoted into a shared Design System layer.
