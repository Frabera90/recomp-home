# RE-COMP Playground Architecture

## Goal

Build an internal Component Workbench for RE-COMP.

It is not:

- a landing page
- a moodboard
- a documentation article
- a vertical style guide
- a static component gallery

It is a professional sandbox for designing, testing, comparing and documenting RE-COMP's visual system and component library.

## Visual Source Of Truth

`VISUAL_LANGUAGE.md` governs the workbench.

Required visual rules:

- soft metal is the dominant surface material
- Liquid Glass is functional and reserved for controls, navigation, floating surfaces, menus, popovers, sheets and overlays
- no neon, no cyberpunk, no decorative spectacle
- cards are not glass
- motion explains relationships
- accents are functional module signals

## Target Layout

The workbench must use three primary panels.

### 1. Left Sidebar

Purpose:

- navigate categories
- search components
- show completion status
- show favorites
- show recent components

Required areas:

- Search
- Favorites
- Recent
- Categories
- Completion status per family

Interaction:

- selecting a component updates central canvas and right inspector
- keyboard navigation should move through component list
- status badge marks `complete`, `partial`, `missing`

### 2. Central Canvas

Purpose:

- preview the selected component or material system
- compare variants, sizes and states
- test backgrounds and responsive modes
- show RE-COMP usage examples

Required canvas modes:

- `Preview`: one live component, fully interactive
- `Variants`: matrix of variants
- `Sizes`: matrix of sizes
- `States`: real states plus inspector-forced states
- `Responsive`: mobile, tablet, desktop, compact, comfortable
- `Background Tester`: dark, soft metal, graphite, light neutral, photography, chart, text and moving gradient
- `Composition`: component inside realistic RE-COMP scenario
- `Accessibility`: focus order, target size, contrast, large type, reduced motion/transparency
- `Code`: implementation snippet and tokens used

### 3. Right Inspector

Purpose:

- control the selected component and global tokens

Required inspector tabs:

- Props
- Tokens
- Material
- Size
- State
- Content
- Motion
- Accessibility
- Code

Required actions:

- reset selected prop
- reset component
- reset global tokens
- copy token
- copy code
- export JSON
- export CSS variables

## Data Model

The current monolithic JSX should be migrated into data-driven registries.

Suggested structure:

```txt
design-system/playground/
  DesignPlayground.jsx
  playground.css
  data/
    componentRegistry.js
    tokenRegistry.js
    backgroundRegistry.js
    recompExamples.js
  components/
    WorkbenchShell.jsx
    Sidebar.jsx
    Canvas.jsx
    Inspector.jsx
    PreviewFrame.jsx
    VariantMatrix.jsx
    StateMatrix.jsx
    ResponsivePreview.jsx
    BackgroundTester.jsx
    CodePanel.jsx
```

Do not create all files at once unless a phase requires them.

## Component Record Shape

Each component should eventually be represented by a record:

```js
{
  id: "actions.primary-button",
  family: "Actions",
  name: "Primary Button",
  status: "partial",
  favorite: false,
  description: "Primary committed action.",
  variants: [],
  sizes: [],
  states: [],
  props: {},
  tokens: [],
  accessibility: [],
  examples: [],
  render: ComponentPreview
}
```

## Token Runtime Model

Global token controls must update the workbench through CSS variables on the root workbench element.

Current runtime variables exist for:

- accent
- glass opacity
- blur
- radius
- shadow
- motion
- contrast
- density

Target runtime groups:

- color
- typography
- layout
- shape
- material
- depth
- motion
- accessibility

## Liquid Glass Requirements

Liquid Glass components must include:

- background tester
- regular glass
- clear glass
- tinted glass
- interactive glass
- prominent glass
- no-glass identity fallback
- adaptive contrast
- adaptive tint
- adaptive shadow
- adaptive foreground
- lensing/refraction simulation
- pressure response
- lift on interaction
- materialization/dematerialization
- shape morph
- merge/separation for nearby shapes
- reduced transparency fallback
- increased contrast fallback
- reduced motion fallback

## Accessibility Requirements

Every component story must eventually include:

- visible focus
- keyboard interaction
- screen reader label
- minimum target size
- contrast audit
- reduced motion mode
- reduced transparency mode
- increased contrast mode
- large type mode

## Current Gap

The current playground has some useful pieces:

- runtime token variables
- floating token drawer
- Framer Motion dependency
- SVG gooey filter experiment
- partial component examples

But it must be reorganized into a real workbench before expanding inventory.
