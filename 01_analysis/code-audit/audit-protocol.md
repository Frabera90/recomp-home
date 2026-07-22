# RE-COMP Comparative Product Architecture Audit Protocol

## Inputs

When available, audit these two codebases:

1. `00_input/original_app/`
2. `00_input/claude_redesign/`

The original app represents the current implemented product.

The Claude redesign represents an attempted simplification and redesign created by the PM team.

## Hard Rules

- Do not modify either codebase.
- Do not generate new UI during the audit.
- Do not refactor code during the audit.
- Treat code as evidence.
- Mark every inference as `ASSUMPTION`.
- Mark unclear or incomplete behavior as `UNRESOLVED`.
- Separate implemented behavior from visual presentation.
- Do not assume the Claude redesign is correct because it is newer.
- Do not assume the original app is correct because it is implemented.

## Audit Objectives

Create a complete comparative audit covering:

1. Application structure
2. Routes and navigation
3. User roles
4. User states
5. Feature inventory
6. Screen inventory
7. User flows
8. Data dependencies
9. Business logic
10. Component systems
11. Missing states
12. Broken or incomplete transitions
13. Duplicated functionality
14. Features removed or shortened in the redesign
15. Features added in the redesign
16. UX simplifications that improve the product
17. UX simplifications that damage or remove necessary logic
18. Technical constraints that affect the redesign
19. Assumptions that cannot be confirmed from code
20. Recommended canonical architecture

## Required Output Files

Create these files in `01_analysis/code-audit/`:

- `original-app-architecture.md`
- `claude-redesign-architecture.md`
- `route-comparison.md`
- `screen-inventory.md`
- `feature-comparison.md`
- `user-role-model.md`
- `state-model.md`
- `flow-inventory.md`
- `flow-comparison.md`
- `business-logic-map.md`
- `component-audit.md`
- `data-dependency-map.md`
- `missing-states.md`
- `ux-risks.md`
- `technical-risks.md`
- `canonical-product-architecture.md`
- `recommended-roadmap.md`

## Final Synthesis Required

At the end of the audit, produce:

### Current Reality

What the original app actually does.

### Redesign Intent

What the Claude version is trying to change.

### Lost Logic

What was removed, oversimplified or disconnected.

### Useful Improvements

What should be preserved from the redesign.

### Canonical Architecture

The recommended future product structure independent of both existing implementations.

### Next Design Priority

The first flow that should be redesigned and why.

## Canonical Output Model

The audit must separate:

- AS-IS: what exists today
- TO-BE IMPLICIT: what the Claude redesign is trying to become
- CANONICAL: what RE-COMP should become

