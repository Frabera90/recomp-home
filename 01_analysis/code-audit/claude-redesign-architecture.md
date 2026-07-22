# Claude Redesign Architecture

Status: first-pass reconstruction from available Claude redesign material.

## Source Evidence

- `C:\Users\milen\Desktop\recomp-project\RECOMP_BRIEF.md`
- `C:\Users\milen\Desktop\recomp-project\RECOMP_RULES.md`
- `C:\Users\milen\Desktop\recomp-project\RECOMP_DESIGN_SYSTEM.md`
- `C:\Users\milen\Desktop\recomp-project\files.zip`

`files.zip` contains the same three markdown files. No full runnable Claude redesign app codebase was found in `00_input/claude_redesign/`; that folder currently contains only its README.

## Executive Summary

The Claude redesign is not currently available as a complete product codebase. The available evidence is a design brief and visual system for a dark premium iOS glass redesign.

It defines a simplified product surface with:

- 5 fixed bottom navigation tabs.
- About 20 target screens.
- A strong customer-first mobile dashboard direction.
- A smaller coach flow focused on client list, client menu, body check, weekly report and strategy calculator.
- Visual rules for typography, color, cards, buttons, badges and navigation.

This material is useful as redesign intent, but it is not sufficient as product architecture evidence.

## Redesign Intent

The redesign appears to pursue:

1. A premium dark/glass visual identity.
2. Simpler navigation.
3. Fewer top-level destinations.
4. Stronger visual hierarchy.
5. A clearer customer daily flow.
6. A more scannable coach client-management layer.

## Proposed Navigation

The brief defines 5 fixed tabs:

| Tab | Label | User |
| --- | --- | --- |
| 1 | Home | Customer |
| 2 | Check | Customer |
| 3 | Nutrition | Customer |
| 4 | Calendar | Customer + Coach |
| 5 | Settings | Both |

Architecture implication:

This is a large compression from the original app route system. It may improve usability, but it risks hiding coach, training, reporting and body-state complexity unless the deeper flows remain reachable.

## Target Screens

Customer screens:

- Home Dashboard
- Morning Check Step 1
- Morning Check Step 2
- Morning Check Step 3
- Food Diary
- Add Food
- Training Plan
- Progress / Analytics
- Measurements
- Progress Photos

Coach screens:

- Lista Clienti
- Menu Percorso Cliente
- General Information
- Body Check
- Weekly Report
- Strategy Calculator

Shared screens:

- Chat
- Calendar
- Settings / Profile
- Onboarding

## Component System

The redesign defines:

- dark backgrounds
- glass-like translucent cards
- Syne display typography
- DM Sans body typography
- red primary accent `#E8202A`
- semantic macro colors for protein, carbs and fats
- fixed card, button, badge, avatar, ring and bottom-navigation rules

Product implication:

The design system is coherent visually, but it conflicts with later accepted RE-COMP decisions that favor a light-first Health OS interface with restrained Liquid Glass.

## Useful Improvements

- Bottom navigation forces clearer hierarchy.
- Morning Check is broken into a focused sequence.
- Food Diary gives nutrition a strong daily surface.
- Coach Client List and Client Menu clarify coach entry.
- Weekly Report is treated as an operational decision screen rather than a decorative chart.
- Macro and overview colors are deliberately separated.
- Text rules reduce visual noise from all-caps labels.

## Product Risks

- The original app has about 144 stack routes; the redesign brief names about 20 screens.
- Training execution is represented as one screen, while the original app has many training creation, assignment, execution and status screens.
- Nutrition is represented as diary/add-food, while the original app includes diet creation, meals, recipes, products and coach-managed nutrition.
- Reports and trends are compressed into progress/analytics and weekly report.
- Coach operations appear simplified and may not cover inactive/new users, managed-user state, plan assignment and report review.
- No API, storage or state model is present in the redesign evidence.

## Assumptions

- The desktop `recomp-project` folder is the available Claude redesign package.
- The redesign is a visual/product brief, not a full implementation.
- The brief represents PM/design intent from April 2026 and may predate later Health OS decisions.

## Unresolved

- Whether a full Claude redesign codebase exists elsewhere.
- Whether any Figma frames are the canonical source for these screens.
- Whether the dark premium direction is superseded by the later light-first Health OS decision.
- Whether every original app business-critical flow has a redesign equivalent.

