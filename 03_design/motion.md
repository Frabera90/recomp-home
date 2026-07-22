# RE-COMP Motion Language

## Purpose

Motion explains relationships.

Motion should never decorate.

## Timing Scale

- 150ms: tap feedback, pressed states, tiny hover feedback
- 250ms: control transitions, hover elevation, focus changes
- 400ms: panel entrance, card reveal, screen-level supporting motion
- 650ms maximum: major transitions only

Avoid slow decorative movement unless it is ambient and non-blocking.

## Easing

Preferred:

- ease-out
- cubic-bezier(0.22, 1, 0.36, 1)
- precise spring with high damping

Avoid:

- playful bounce
- rubber-band motion
- overshoot that feels game-like
- motion that delays the user

## Rules

- Elements emerge. Never pop.
- Cards elevate. Never fly.
- Numbers count. Never spin.
- Glass morphs. Never stretches.
- Modules connect when their relationship matters.
- Data converges into a decision.

## Product Motion Patterns

- Signal to insight: metrics visually group into an interpretation.
- Insight to action: recommendation appears after the state is understood.
- Module transition: recovery, nutrition, biomarkers and coaching move as connected system parts.
- AI Coach: conversation should feel contextual, not like a generic chat window.

