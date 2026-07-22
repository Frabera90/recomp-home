# RE-COMP Master Context

## Purpose

This file is the short source of truth for starting new Codex chats without carrying a long conversation history.

RE-COMP is evolving from a fitness/training app into a Health OS: a system that helps people understand their current health state and decide what to do next across wellness, longevity, performance, recovery, nutrition, coaching and AI health intelligence.

RE-COMP is also developing a premium service ecosystem around RECOMP Wellness Plan: an advanced longevity and wellness program with personalized paths, specialist-supported services and exclusive locations in Italy.

Current strategic emphasis: RE-COMP must not be perceived as another AI food/training tracker. Its differentiation is the combination of tracked data, AI guidance and real professionals available through specialist review, analysis booking and paid consultations.

## Repository Location

Workspace root:

`C:\Users\milen\OneDrive\Documents\Re comp`

## Main Areas

- `00_input/`: source material, old app code, Claude redesign input, screenshots and references.
- `01_analysis/`: product analysis, gaps, risks, inventories and system maps.
- `01_analysis/code-audit/`: comparative product architecture audit from the old app and Claude redesign.
- `02_context/`: product definition, positioning, goals and philosophy.
- `02_context/services.md`: RECOMP Wellness Plan and current service ecosystem context.
- `03_design/`: design constitution, principles, visual direction, components, typography, motion and anti-patterns.
- `05_marketing/`: landing strategy, landing blueprint, motion direction and references.
- `05_marketing/social/`: social strategy, content pillars, formats, captions, calendar and visual briefs.
- `06_assets/generated/social/`: generated social visuals connected to social work.
- `08_workflow/`: operating model, roles, critic notes and working rules.
- `08_workflow/priority-roadmap.md`: current roadmap, deadlines, stakeholder priorities and next steps.
- `09_decisions/`: accepted decision records.
- `recomp-landing-prototype/`: current live landing/site prototype.
- `experiments/app-ui-pilot/`: separate runnable app UI pilot, not final architecture.
- `brand/`: logo and brand guideline material.

## Current Operating Mode

Work is split into two tracks:

1. Landing/site prototype in `recomp-landing-prototype/`.
2. App UI pilot prototype in `experiments/app-ui-pilot/`.
3. Design system direction in `03_design/`, `TOKENS.md` and the Design System chat.

Do not treat the app UI pilot as final product architecture.

## Current App Prototype Location

The app visual prototype now lives as a separate runnable project:

- `experiments/app-ui-pilot/package.json`
- `experiments/app-ui-pilot/index.html`
- `experiments/app-ui-pilot/src/main.jsx`
- `experiments/app-ui-pilot/src/styles.css`

Historical note: earlier app visuals were embedded inside the landing prototype. Going forward, App work must use `experiments/app-ui-pilot/` as the implementation home and must not open or modify the landing prototype unless the task explicitly concerns migration or comparison.

The documentation and intended app direction live under:

- `experiments/app-ui-pilot/docs/`

## Product Direction

RE-COMP should feel like a bridge between fitness, wellness and medical prevention. It should be premium, minimal, credible, calm, intelligent, performance-oriented and health-first.

The visual source of truth is:

- `VISUAL_LANGUAGE.md`

All UI agents must read it before proposing or modifying visual elements.

Every important surface should produce:

- insight
- recommendation
- action

The product should support both a digital Health OS direction and a real-world premium wellness service layer:

- biomarker screening
- longevity-oriented specialist paths
- movement and posture analysis
- nervous system and stress evaluation
- breathing, biofeedback and autonomic regulation
- metabolic and body composition analysis
- personalized nutrition and training strategies

Current priority:

- Home experience
- Food Tracker modification by end of August 2026
- professional guidance layer: Book Analysis, Specialist Review, Professional Consultation
- internal completion target by 2026-11-21 before the external 2026-12-05 visibility deadline

## Design Direction

RE-COMP sits between Apple, Bevel, Nike and Superpower:

- Apple: clarity, restraint, system elegance.
- Bevel: intelligent health dashboards and biometric depth.
- Nike: human performance and movement energy.
- Superpower: medical wellness and serious longevity orientation.

Default product tone is light-first: white, off-white and very light cool gray. Dark/glass modules are reserved for selected insight, data and high-value moments.

## Critical Decisions

- Landing and app UI are separate surfaces. They share brand and positioning, not layout systems.
- Liquid Glass is accepted only where it improves native usability: navigation, controls, overlays, contextual actions, temporary filters, AI Coach composer.
- Liquid Glass is not the RE-COMP visual identity and must not be the default for dense content.
- Core data content must remain stable, readable and recognizably RE-COMP.
- Wellness and longevity services must be communicated without unsupported medical claims.
- Do not modify incoming source code under `00_input/original_app/` or `00_input/claude_redesign/`.

## Old Code Audit Status

The old app audit is stored in:

`01_analysis/code-audit/`

Current state:

- Original app first-pass audit started from `ReCompV2.zip`.
- Duplicate archive appears to contain the same codebase.
- Analysis is focused on reconstructing product architecture from code evidence before final app work.
- Several outputs already exist, including architecture, role model, state model, flow inventory, business logic map, screen matrix, storage/register and migration guardrails.
- Some expected comparative outputs may still be missing or incomplete.

## Working Rule For New Chats

Before modifying any file, Codex must state:

- exact files it will touch
- exact component or section scope
- what will not be modified

Then wait for explicit confirmation.

Exception: documentation-only setup tasks explicitly requested by the user may proceed if they do not touch product code.

## Frozen Rule

When a section, component or document is marked `FROZEN`, it cannot be modified unless the user writes `UNFREEZE <name>`.

## Prompt Shape For Tasks

Use this format:

```text
ROLE:
TASK:
AREA:
OBJECTIVE:
CONSTRAINTS:
FILES ALLOWED:
FILES FORBIDDEN:
EXPECTED RESULT:
VALIDATION:
```

Avoid vague prompts like "make it more beautiful." Prefer precise intent, constraints and allowed files.
