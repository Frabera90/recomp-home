# Liquid Glass research notes

Source date: 2026-07-13

Sources:
- Apple Developer Documentation: Liquid Glass
  https://developer.apple.com/documentation/technologyoverviews/liquid-glass
- Apple Human Interface Guidelines: Materials
  https://developer.apple.com/design/human-interface-guidelines/materials
- Apple Developer Documentation: Adopting Liquid Glass
  https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass
- Conor Bailey: iOS 26 Liquid Glass reference, used as a secondary implementation checklist
  https://www.conor.fyi/writing/liquid-glass-reference
- Apple sample project inspected locally:
  `C:\Users\milen\OneDrive\Desktop\re comp personal\LandmarksBuildingAnAppWithLiquidGlass.zip`

## What Liquid Glass is

Liquid Glass is a dynamic functional material for controls and navigation. It combines glass-like optical behavior with fluid interaction, but its purpose is not decoration. Its purpose is to create hierarchy, preserve context, and let content remain visible beneath floating functional UI.

For RE-COMP, Liquid Glass should be treated as an interaction material, not a page background style.

## Key Apple guidance

- Use Liquid Glass for the topmost functional layer: navigation, tab bars, sidebars, floating controls, menus, sheets, popovers, and transient interactive elements.
- Do not use Liquid Glass in the content layer. Content cards, dashboards, metric panels, and dense reading areas should use standard materials, solid surfaces, or restrained blur.
- Use Liquid Glass sparingly. Too many glass controls compete with content and reduce hierarchy.
- Use the regular variant when legibility matters or when the component contains text.
- Use the clear variant only over visually rich media when content visibility is the priority.
- If clear glass sits over bright media, add a dimming layer around 35% opacity.
- Let content pass behind floating navigation only when legibility is protected by scroll-edge effects, blur, opacity reduction, or dimming.
- Avoid custom backgrounds that fight system controls and navigation.
- Use rounded shapes that feel concentric with the device and with their container.
- Test reduced transparency, increased contrast, and reduced motion equivalents.

## What the Landmarks sample shows

The sample does not make every card glass. It uses:

- System navigation structures: `NavigationSplitView`, `NavigationStack`, `toolbar`, `inspector`, and `searchable`.
- Edge-to-edge imagery with `backgroundExtensionEffect()`.
- Flexible headers that stretch with scroll.
- Readability gradients over media instead of heavy glass panels.
- Direct custom Liquid Glass only in a small badge system:
  - `GlassEffectContainer`
  - `.glassEffect(.regular, in: .rect(cornerRadius: ...))`
  - `.buttonStyle(.glass)`
  - `.glassEffectID(...)` for coordinated animation.

This confirms that the premium result comes from restraint, hierarchy, and content-first layout, not from applying glass everywhere.

## RE-COMP rules

### Use Liquid Glass for

- Top nav / app navigation.
- Bottom tab bar.
- Primary floating CTA.
- Compact segmented controls.
- Search.
- Modal/sheet handles.
- Transient controls such as sliders, toggles, scrubbers, and contextual action pills.
- Small overlays above video or photo content.

### Do not use Liquid Glass for

- Main metric cards.
- Long text cards.
- Pricing cards.
- Dense dashboards.
- Static product panels.
- Every repeated item in a list.

Those should use standard materials: dark matte, soft solid surfaces, subtle blur, low-contrast borders, and clear typography.

## Visual direction for the app pilot

The app should stay closer to Apple Watch / iOS system UI:

- Dark, sharp, quiet base.
- Large single focus per screen.
- Big rounded controls with strong tap targets.
- Tab bar as floating functional layer.
- Liquid Glass only on the navigation/control layer.
- Dashboard content should feel solid, legible, and health-trustworthy.
- Accents should be minimal: green for state, amber for attention, blue/violet only for AI or system intelligence.

## Translation to web prototype

CSS approximations:

- Functional glass:
  - `backdrop-filter: blur(24px) saturate(145%)`
  - semi-transparent dark or light fill
  - inner top highlight
  - subtle border
  - no heavy glow unless active/hovered
- Content cards:
  - solid dark or light surfaces
  - slight border
  - subtle shadow
  - no strong refraction
- Media overlays:
  - dark dimming layer when needed
  - readability gradient from text area
  - clear glass only for small controls

## Control patterns to reuse

- Capsule is the default shape for navigation, segmented controls, and compact action groups.
- Segmented controls need a sliding active indicator and immediate state change.
- Active controls can use small scale, subtle highlight, and tint, but tint must communicate state or emphasis, not decoration.
- Group related controls in one glass container instead of stacking many separate glass elements.
- Keep icon and label spacing tight in tab bars so each tab reads as one compact control.
- Respect reduced transparency and reduced motion equivalents in future production implementation.

## Product implication

For RE-COMP, the UI should not look like a glassmorphism showcase. It should look like a calm health operating system where glass appears only when the user is operating the system.
