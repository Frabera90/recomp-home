# Apple Liquid Glass Foundation For RE-COMP

## Purpose

This document captures the Apple-sourced Liquid Glass baseline that RE-COMP should use as a structured starting point.

It is not a mandate to copy Apple.

RE-COMP uses Apple guidance as a native behavior reference, then translates it into a distinct health intelligence design language.

## Sources

Primary Apple references:

- Apple Human Interface Guidelines: `https://developer.apple.com/design/human-interface-guidelines/`
- HIG Materials: `https://developer.apple.com/design/human-interface-guidelines/materials`
- Liquid Glass overview: `https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass`
- Adopting Liquid Glass: `https://developer.apple.com/documentation/TechnologyOverviews/adopting-liquid-glass`
- SwiftUI `glassEffect(_:in:)`: `https://developer.apple.com/documentation/swiftui/view/glasseffect(_:in:)`
- SwiftUI `GlassEffectContainer`: `https://developer.apple.com/documentation/swiftui/glasseffectcontainer/`
- WWDC25 Meet Liquid Glass: `https://developer.apple.com/videos/play/wwdc2025/219/`

Local installed references:

- `C:\Users\milen\.agents\skills\ios-liquid-glass\SKILL.md`
- `C:\Users\milen\.agents\skills\ios-liquid-glass\reference.md`
- `C:\Users\milen\.agents\skills\hig\SKILL.md`
- `C:\Users\milen\.agents\skills\apple-docs-index\SKILL.md`

## Apple Baseline

Apple frames Liquid Glass around three platform principles:

- Hierarchy: controls and navigation float above content.
- Harmony: interface shapes align with hardware and system geometry.
- Consistency: behavior adapts across Apple devices, window sizes and settings.

Apple also separates materials into functional layers:

- Liquid Glass belongs primarily to controls and navigation.
- Standard materials belong to the content layer.
- Custom Liquid Glass should be used sparingly.
- System components should be preferred because they adapt automatically.

## RE-COMP Translation

RE-COMP adopts the functional logic of Liquid Glass, not the Apple visual identity.

### Adopt

- Use glass for navigation, quick actions, AI composer, filter controls, contextual controls, sheets and transient overlays.
- Keep glass tactile, legible and restrained.
- Let controls feel native-aware through motion, feedback, minimum target size and hierarchy.
- Use grouped controls when actions belong together.
- Preserve safe areas and avoid content being hidden by floating controls.
- Test reduced transparency, increased contrast and reduced motion equivalents.

### Do Not Adopt

- Do not turn every content card into glass.
- Do not use Liquid Glass as RE-COMP's brand identity.
- Do not copy Apple tab bar geometry or system layouts directly.
- Do not layer multiple glass surfaces over dense data.
- Do not use glass to make weak content look premium.
- Do not make data, reports, biomarker rows, plans or long text translucent by default.

## RE-COMP Surface Layers

### Content Layer

Used for:

- Health score content
- Signal metrics
- Biomarker rows
- Plan rows
- Reports
- Tables
- Dense charts
- Long text

Rules:

- Stable layout.
- High contrast.
- Low transparency.
- Clear typography.
- No decorative blur.
- Interpretation and action must remain more important than material.

### Diagnostic Focus Layer

Used for:

- Score breakdowns
- Recovery detail
- Trend interpretation
- High-value biometric explanation
- AI-supported analysis panels

Rules:

- May use dark graphite or near-black surfaces.
- May use restrained depth.
- May use glass only when it clarifies hierarchy.
- Must not become a wall of effects.

### Functional Glass Layer

Used for:

- Bottom navigation
- Top contextual controls
- Floating actions
- Filter controls
- AI Coach composer
- Menus
- Sheets
- Popovers
- Temporary overlays

Rules:

- Float above content.
- Stay readable over changing backgrounds.
- Group related actions.
- Avoid overcrowding controls.
- Avoid stacking glass on glass.
- Support reduced motion and reduced transparency fallbacks.

## Component Guidance

### GlassTabBar

Purpose:

Create a native-aware navigation layer without cloning Apple.

Rules:

- The tab bar belongs to the functional glass layer.
- Labels remain readable at mobile sizes.
- Active state is tactile but not neon.
- Search, if added later, should be evaluated as a special navigation role.
- Content must keep enough bottom safe area so the bar does not obscure decisions.

### Floating Action / Coach Entry

Purpose:

Expose guidance without making chat the product identity.

Rules:

- Use glass only because the element is interactive and transient.
- The entry should be anchored to current user state.
- Avoid generic chat bubble styling.
- Interaction should reveal context, not a blank chatbot surface.

### Filters And Segmented Controls

Purpose:

Change context without interrupting the main decision.

Rules:

- Use glass or control material when the control floats above content.
- Use stable surfaces when controls sit inside dense content.
- Keep labels short and scannable.
- Avoid too many peer filters above the fold.

### Sheets And Overlays

Purpose:

Show secondary decisions or focused detail.

Rules:

- Sheet entry should originate from the control or component that triggered it.
- Underlying content may peek through only when it preserves clarity.
- Expanded sheets should become more stable and readable.
- Long reading surfaces should not remain highly translucent.

## Motion Guidance

Apple Liquid Glass emphasizes fluidity, morphing and adaptivity.

RE-COMP translation:

- Motion must explain where a control came from and what it affects.
- Glass controls may morph between compact and expanded states.
- Recommendations may enter after the state is understood.
- Data should not be delayed by decorative motion.
- Honor reduced motion by removing nonessential transitions.

Preferred RE-COMP timings remain:

- 150ms for tap feedback.
- 250ms for controls, hover and focus.
- 400ms for panel entrance and card reveal.
- 650ms maximum for major transitions.

## Accessibility And Ergonomics

Baseline checks:

- Minimum interactive target: 44px/44pt equivalent.
- Text must remain readable over any material.
- Glass controls need fallback contrast for reduced transparency.
- Motion must have reduced-motion alternatives.
- Icon-only actions need accessible labels.
- Controls near screen edges must respect safe areas and system gestures.

## Playground Rules

The Design Playground should be the visible app-facing review space for this foundation.

Every playground component should show:

- component name
- purpose
- surface layer
- interaction/material rule
- linked app-scoped implementation

Playground examples must use the same app-scoped React components as App Preview whenever possible.

The playground should not become a gallery of decorative variants. It should show the rule, the component and the real downstream behavior.

## Implementation Notes

For SwiftUI/iOS developers:

- Prefer standard SwiftUI, UIKit and system controls before custom effects.
- Use `glassEffect(_:in:)` for custom Liquid Glass only when system components are insufficient.
- Use `GlassEffectContainer` when multiple glass elements need to combine or morph.
- Use `interactive()` for tactile controls, not passive content.
- Use `tint(_:)` semantically and sparingly.
- Test with reduced transparency, increased contrast and reduced motion.

For the web prototype:

- Treat CSS glass tokens as approximations of the intended system behavior.
- Keep token names semantic, not effect-specific to one screen.
- Do not overfit web glass to mimic exact Apple rendering.
- Use the playground to document intent before moving patterns into production app code.

## Change Gate

Before changing `design-system/tokens.css`, state:

- exact tokens to change
- why they are changing
- which project may be affected
- whether landing should remain unchanged

Current affected project:

- App pilot

Landing remains unchanged unless explicitly connected later.
