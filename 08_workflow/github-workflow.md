# RE-COMP GitHub Workflow

## Principle

GitHub does not replace local work.

The correct model is:

```text
Local workspace
-> Git history
-> GitHub backup / collaboration / synchronization
```

Codex, designers and developers should continue working locally, then use Git and GitHub to preserve, review and share changes.

## Why Use GitHub

Use GitHub for:

- backup
- version history
- collaboration
- pull requests
- branch comparison
- restoring earlier versions
- working from another computer
- preserving product documentation and design decisions

Do not use GitHub as a substitute for local organization.

If the local project is messy, GitHub will only preserve the mess.

## Repository Direction

For the current RE-COMP phase, use one main repository:

```text
recomp/
  app or experiments/app-ui-pilot/
  recomp-landing-prototype/
  design-system/
  01_analysis/
  02_context/
  03_design/
  04_flows/
  05_marketing/
  06_assets/
  08_workflow/
  09_decisions/
  brand/
  presentations/
```

Reason:

The product is still being shaped. A single repository keeps context, decisions, docs, app pilot, landing and design system together.

Later, if the team grows or the codebases become independent, split into separate repositories:

- `recomp-app`
- `recomp-landing`
- `recomp-design-system`
- `recomp-brand`
- `recomp-docs`

## What Should Be Versioned

Version:

- product documentation
- design principles
- visual language
- flow maps
- feature specs
- app pilot
- landing prototype
- design-system docs and tokens
- branding guidelines
- decision records
- presentation sources when editable

Be careful with:

- very large generated images
- exported videos
- temporary previews
- local logs
- private credentials
- medical or user data

Large assets may eventually need Git LFS or a dedicated storage workflow.

## Working Rule

Do not create folders like:

```text
recomp-final
recomp-final-2
recomp-new
recomp-backup
```

Use commits instead.

Examples:

- `Design System composition gate`
- `Onboarding flow review`
- `Food Tracker August scope`
- `Landing hero refinement`
- `Professional review service layer`

## Codex Rule

Before a large change, Codex should state:

- target area
- files expected to change
- whether the change is documentation, prototype or product code
- whether it should happen in a branch

For now, documentation-only organization can be done directly in the local project.

Product code changes should eventually happen through branches and review.
