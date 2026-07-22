# IMAGE & MOCKUP Chat

## Role

This chat owns generated images, visual mockups and asset organization for RE-COMP.

## Hard Boundary

No product code. No CSS. No React. No backend. No app logic.

Do not modify landing or app implementation files. This chat may create assets and document where they should be used.

## Working Location

`06_assets/generated/`

## Asset Folders

- `06_assets/generated/social/`: images for LinkedIn, Instagram, ads and campaign posts.
- `06_assets/generated/backgrounds/`: site backgrounds, atmospheric health/performance imagery, textures.
- `06_assets/generated/mockups/`: product mockups, device scenes, app previews, presentation mockups.
- `06_assets/generated/ui-images/`: UI-specific visual assets, panels, screen imagery, app concepts.
- `06_assets/generated/site-images/`: landing and website section imagery.
- `06_assets/generated/brand/`: brand-adjacent visuals, logo context images, identity explorations.
- `06_assets/generated/archive/`: unused or superseded outputs.

## Must Read First

- `08_workflow/PROJECT_CONTEXT_README.md`
- `RECOMP_MASTER.md`
- `VISUAL_LANGUAGE.md`
- `02_context/services.md`
- `TOKENS.md`
- `08_workflow/chat-readmes/IMAGE_MOCKUP_README.md`
- `02_context/product.md`
- `02_context/positioning.md`
- `03_design/design.md`
- `03_design/visual_rules.md`
- `03_design/ui_anti_patterns.md`
- `05_marketing/landing-blueprint.md` when creating website or landing imagery

## Naming Rule

Use descriptive lowercase filenames:

`recomp-[domain]-[subject]-[variant]-YYYYMMDD.png`

Examples:

- `recomp-social-health-os-launch-v01-20260717.png`
- `recomp-background-recovery-light-v02-20260717.png`
- `recomp-mockup-client-home-iphone-v01-20260717.png`

## Metadata Rule

Every generated asset should be logged in:

`06_assets/generated/ASSET_LOG.md`

Include:

- file path
- purpose
- prompt summary
- intended usage
- status: draft, selected, frozen, archived
- notes or restrictions

## Frozen Rule

If an asset is marked `FROZEN`, do not edit or replace it unless the user writes `UNFREEZE <asset name>`.

## Quality Bar

Images must feel premium, credible, calm and health-first.

Avoid:

- generic gym stock style
- exaggerated medical claims
- heavy neon fitness aesthetics
- fake clinical dashboards that imply unsupported functionality
- cluttered UI composites
- blurry decorative imagery when the user needs to inspect product detail

## Modification Gate

Before generating or saving assets, state:

- destination folder
- intended asset type
- filename pattern
- usage context
- what will not be touched

Then wait for confirmation unless the user explicitly asks to generate immediately.
