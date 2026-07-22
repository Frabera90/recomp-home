# RE-COMP Component Rules

## Health Score

- Always prominent on daily overview.
- Never shown without interpretation.
- Must connect to a next action or explanation.

## Recommendation

- One primary recommendation per screen.
- Secondary actions may exist, but must not compete.

## Insights

- Maximum three visible insights in a primary surface.
- Each insight needs evidence or context.

## Metrics

- Do not show more than four primary metrics above the fold.
- Metrics need labels, units and status.
- Metric labels, values and units must have explicit layout rows. Never allow a label to sit on the same visual baseline as a large number unless that is intentionally designed.
- Large metric values need a dedicated value group, for example `84 /100`, with label above and status below.

## AI Coach

- The AI Coach is not the product identity.
- It should appear as a contextual guidance layer.
- It must reference user state, plan, recovery or biomarker context.

## Apple-like Tab Bars

- Bottom navigation must read as a continuous capsule/oval, not a semi-rectangular rounded container.
- Use `border-radius: 999px` for the outer tab bar and active tab.
- Keep the bar compact: icons and labels should be close enough to form one item, not two separated blocks.
- Active tab can use a pill highlight, but the highlight must remain fully oval.
- Labels inside tab bars should be small, centered and secondary to icons.
- Tab bars must be interactive in prototypes: each item changes the visible content state, not only its active color.
- Keep tab bars in the navigation/chrome layer. They may use Liquid Glass, but content cards behind them should stay legible and structurally separate.
- On scrollable mobile screens, the tab bar may be sticky, but it must align with the same left and right rhythm as the content cards.
- Test the tab bar at the narrowest mobile width before accepting the design.

## Segmented Controls

- Use segmented controls for local filtering or context switching inside a screen.
- The default shape is a full capsule, with a sliding active indicator. Avoid semi-rectangular segments.
- Segmented controls should feel like system controls: compact, legible, rounded and calm.
- The active segment must update the related content immediately so the prototype can be judged through interaction.
- Use Liquid Glass sparingly here because this is functional chrome, not content decoration.

## Landing And App Consistency

- Landing mockups must inherit the app UI language: dark neutral surfaces, compact capsule controls, solid readable content cards and restrained accents.
- Do not create landing-only card styles that feel unrelated to the app.
- Product UI shown on the landing should use the same metric layout rules as the app.
- Liquid Glass belongs to chrome and controls: navbar, CTAs, tabs, segmented controls, overlays and transient UI.
- Content cards should stay legible and structural, not decorative glass panels.
- Use one active focus at a time in stacked or layered card components.
- Avoid generic SaaS visual tropes: bright gradients, heavy skew, thick borders, random glow and large playful hover movement.
