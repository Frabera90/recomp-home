# RE-COMP Tokens Snapshot

This is a working snapshot. Canonical detailed design rules remain in `03_design/`.

## Color

- Base: white, off-white, very light cool gray.
- Text: graphite, near-black.
- Data surface: controlled black glass and dark translucent modules.
- Functional accents: electric blue, health green.
- Occasional accents: warm recovery or nutrition tones.

## Material

- Core content: stable, readable, mostly solid/light surfaces.
- Glass: navigation, controls, overlays, contextual actions, AI Coach composer and transient surfaces.
- Avoid: heavy gradients, decorative orbs, excessive glow, busy transparency, futuristic noise.

## Typography

- Modern, neutral, readable.
- Headlines should feel premium and calm.
- Data numbers should be large, clear and confident.

## Data Module Rule

Each important module should prioritize:

- one dominant metric
- one short interpretation
- one recommended action

## Motion

- 150ms: tap and tiny feedback.
- 250ms: controls, hover, focus.
- 400ms: panel entrance, card reveal.
- 650ms max: major transitions.

Preferred easing:

- ease-out
- `cubic-bezier(0.22, 1, 0.36, 1)`
- precise spring with high damping.

Motion explains relationships. It should not decorate.

## Radius

Use restrained radius. Avoid overly soft or pill-heavy interfaces unless native controls call for it.

## Liquid Glass

Allowed mainly for:

- navigation
- floating actions
- contextual controls
- overlays
- transient interaction surfaces

Not default for:

- dashboards
- biomarker lists
- plans
- reports
- tables
- dense charts
- long text
- all metric cards
