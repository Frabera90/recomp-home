# RE-COMP Health OS Workspace

This workspace is organized as a persistent product, UX and AI system for RE-COMP.

## Folder Structure

- `00_input/` source material, screenshots, meetings, references and competitor material
- `01_analysis/` system analysis, flows, risks and gaps
- `02_context/` product definition, goals and positioning
- `03_design/` visual direction and component rules
- `04_flows/` detailed flow work
- `05_marketing/` landing, campaigns and messaging
- `06_assets/` images and exported visual assets
- `07_ai/` agent, planner and runtime instructions
- `08_workflow/` operating model, roles and knowledge graph
- `09_decisions/` decision records explaining why important choices were made

## Input Upload Areas

Use:

- `00_input/screenshots/current_recomp/` for old or current RE-COMP screens
- `00_input/references/app_ui/` for new app UI references
- `00_input/references/landing/` for landing page references
- `00_input/references/components/` for individual UI patterns
- `00_input/references/mobbin/` for Mobbin screenshots
- `00_input/references/brand/` for identity and tone references
- `00_input/competitors/strategy/` for competitor positioning and product strategy
- `00_input/competitors/visual/` for competitor visual material
- `00_input/meetings/stakeholder_notes/` for notes and feedback
- `00_input/claude_exports/` for AI-generated screens or concepts

See `00_input/README.md` for the full upload guide.

## First Codex Prompt

Analyze current RE-COMP material and update:

- `01_analysis/system-map.md`
- `01_analysis/feature-inventory.md`
- `01_analysis/user-types.md`
- `01_analysis/gaps.md`
- `01_analysis/flow-inventory.md`
- `01_analysis/ux-risks.md`

Do not generate UI yet.

Use:

- `02_context/product.md`
- `02_context/positioning.md`
- `02_context/goals.md`
- `03_design/design.md`
- `03_design/components.md`
- `07_ai/agent.md`
- `07_ai/planner.md`
- `07_ai/runtime.md`

Mark all assumptions explicitly.

## Working Rule

This repository is the source of truth.

Core files should not change after every conversation. They should change only when a decision is made, new input changes the product understanding, or a flow/design rule becomes stable.
