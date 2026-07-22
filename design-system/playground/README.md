# RE-COMP Design System Sandbox

This folder owns the visible Design System sandbox.

The App project must not expose the playground as an app mode. App should stay focused on product screens.

## Current Status

The playground has been moved out of:

`experiments/app-ui-pilot/src/`

and into:

`design-system/playground/`

The current playground is frozen as an exploration until the Component Library Spec is approved.

Source of truth for component work:

`design-system/COMPONENT_LIBRARY_SPEC.md`

## Current Files

- `DesignPlayground.jsx`
- `playground.css`
- `index.html`
- `package.json`
- `vite.config.js`
- `src/main.jsx`

## Current Sandbox Areas

- Foundations
- Colors
- Typography
- Icons
- Buttons
- Inputs
- Selection
- Navigation
- Cards
- Feedback
- Charts
- Motion
- Live Tokens

## System Model

This playground is an interactive sandbox, not a documentation page.

It should now be treated as a support tool for the Component Library, not as the source of truth.

Global runtime controls change material, blur, radius, shadow, contrast, accent, density and motion across the entire board.

The visual language must follow `VISUAL_LANGUAGE.md`: soft metal as the dominant material, Liquid Glass only for interactive controls, restrained light, no neon, no decorative spectacle.

Buttons and cards should not be rebuilt from scratch unless explicitly requested.

## Ownership

The Design System chat owns this folder.

The App chat should not edit this folder unless explicitly asked to coordinate with Design System.

## Freeze Rule

Do not add new labs, new categories or broad playground sections.

Before editing playground code, identify the exact component from `design-system/COMPONENT_LIBRARY_SPEC.md` and the exact variables, states or variants being changed.

## Run

From this folder:

```bash
npm run dev -- --port 5180
```

Current local URL:

`http://127.0.0.1:5180`

The playground uses a local `node_modules` junction to the app pilot dependencies for now. This avoids duplicating installs while the component layer is still provisional.
