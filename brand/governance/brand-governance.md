# RE-COMP Brand Governance

Status: working rules

## Purpose

Brand governance prevents temporary prototypes, generated images or provisional assets from becoming official by accident.

## Asset Status

Use these statuses:

- draft: exploratory asset
- selected: approved for use in a defined context
- frozen: cannot be edited without `UNFREEZE`
- archived: no longer active

## Current Freeze Candidates

Recommended to freeze after explicit approval:

- Health OS positioning
- product loop: Signals to Understanding to Guidance to Daily Action
- insight / recommendation / action pattern
- tone of voice principles
- no unsupported medical claims
- glass as functional material only
- app and landing separation
- current PNG logo as temporary visual anchor

## Provisional Items

Must remain marked provisional:

- app UI pilot architecture
- SVG logo reconstructions
- final type system
- final image library
- social templates
- motion templates beyond logo guidance

## Modification Gate

Before editing brand files, state:

- exact brand files to update
- reference files used
- asset folders involved
- what will not be touched

Wait for confirmation unless the user explicitly asks for documentation setup.

## Forbidden Without Explicit Request

Do not modify:

- app code
- landing code
- backend
- design system tokens
- master logo assets
- generated assets from another area
- incoming source code under `00_input/`

## Decision Records

When a brand decision becomes accepted:

1. Add a full record to `09_decisions/`.
2. Update `DECISIONS.md`.
3. Update affected brand documents.
4. Mark affected assets as selected or frozen where relevant.

