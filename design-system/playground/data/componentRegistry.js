export const accentOptions = {
  Biomarkers: "#82d8ff",
  Recovery: "#a46cff",
  Nutrition: "#76e6ae",
  Coaching: "#f6bf4f",
};

export const canvasModes = [
  "Playground",
  "Matrix",
  "Examples",
  "Documentation",
];

export const inspectorTabs = [
  "Configure",
  "Appearance",
  "Behavior",
  "Accessibility",
  "Code",
];

export const buttonVariants = [
  "Primary",
  "Secondary",
  "Glass",
  "Ghost",
  "Outline",
  "Destructive",
  "Success",
  "Warning",
  "Info",
];

export const buttonStates = [
  "Default",
  "Hover",
  "Pressed",
  "Focused",
  "Selected",
  "Loading",
  "Disabled",
];

export const buttonSizes = ["XS", "S", "M", "L", "XL"];

export const inputVariants = ["Text", "Email", "Password", "Search", "Number", "Range", "Textarea", "Command"];
export const inputStates = ["Default", "Focus", "Typing", "Error", "Success", "Disabled", "Loading"];

export const selectionVariants = ["Checkbox", "Radio", "Switch", "Segment", "Chip", "Filter Chip", "Choice Chip"];
export const selectionStates = ["Default", "Hover", "Pressed", "Selected", "Disabled"];

export const menuTypes = ["Dropdown", "Combobox", "Context Menu", "Multi Select", "Search Select", "Floating Menu"];
export const menuStates = ["Closed", "Open", "Searching", "Selected", "Disabled"];

export const cardTypes = [
  "Base",
  "Metric",
  "Insight",
  "Report",
  "Recommendation",
  "Biomarker",
  "Nutrition",
  "Recovery",
  "Coaching",
  "Warning",
];
export const cardStates = ["Static", "Interactive", "Selected", "Expanded", "Loading", "Empty", "Error", "Locked"];

export const chartTypes = ["Line", "Ring", "Gauge", "Sparkline", "Biomarker Range", "Comparison"];
export const chartStates = ["Loading", "Animated", "Selected", "Empty", "Error", "No Data", "Reduced Motion"];

export const feedbackTypes = ["Sheet", "Modal", "Popover", "Tooltip", "Toast", "Notification", "Confirmation"];
export const feedbackStates = ["Entering", "Visible", "Dismissed", "Success", "Warning", "Error", "Loading"];

export const tableTypes = ["Plan Row", "Nutrition Row", "Training Row", "Biomarker Row", "Measurement Row", "Coach Client Row", "Data Table"];
export const tableStates = ["Default", "Done", "Current", "Skipped", "Locked", "Loading", "Sync Failed", "Selected"];

export const mediaTypes = ["Progress Photo", "Attachment Preview", "Upload", "Viewer"];
export const mediaStates = ["Empty", "Dragging", "Uploading", "Complete", "Error"];

export const dataDisplayTypes = ["Health Score", "Signal Metric", "Recommendation", "Section Heading", "Progress", "Status"];
export const dataDisplayStates = ["Normal", "Improving", "Declining", "Warning", "Loading", "Empty"];

export const motionTypes = ["Hover", "Press", "Morph", "Shared Element", "Glass Refraction", "Number Counter", "Graph Reveal", "Reduced Motion"];
export const motionStates = ["Rest", "Preview", "Active", "Return", "Reduced"];

export const accessibilityTypes = ["Contrast", "Reduced Motion", "Dynamic Type", "Focus Order", "Touch Target", "Reduced Transparency"];
export const accessibilityStates = ["Pass", "Review", "Fail", "Large Text", "Keyboard", "Compact"];

export const appPatternTypes = ["Daily State", "Plan Decision", "Recovery Detail", "Coach Prompt"];
export const appPatternStates = ["Default", "Loading", "Personalized", "Empty"];

export const foundationTypes = ["Colors", "Typography", "Icons", "Motion", "Layout", "Tokens"];
export const foundationStates = ["Default", "Light", "High Contrast", "Compact"];

export const backgrounds = [
  "Photo",
  "Black",
  "Graphite",
  "Soft Gray",
  "Gradient",
  "Chart",
  "Text",
  "Motion",
];

export const glassStates = ["Default", "Hover", "Pressed", "Focus", "Disabled"];

export const componentRegistry = [
  {
    id: "patterns.app",
    family: "App Structure",
    name: "App Shell",
    status: "missing",
    favorite: true,
    description: "The recurring RE-COMP app frame: safe area, scroll content, top toolbar, bottom tab and optional composer slot.",
    variants: ["Today", "Plan", "Progress", "Coach", "Body Check", "Reports"],
    states: ["Default", "Loading", "Empty", "Managed Client"],
    tokens: ["layout", "safe area", "soft metal", "glass nav"],
    accessibility: ["focus order", "primary decision", "landmarks"],
  },
  {
    id: "navigation.top-toolbar",
    family: "App Structure",
    name: "Top Toolbar / Context Header",
    status: "draft",
    favorite: true,
    description: "Contextual app header for title, back action, notifications, profile and managed-client state.",
    variants: ["Default", "Back Context", "Notification Active", "Managed Client", "Loading"],
    states: ["Default", "Pressed", "Focused", "Disabled"],
    tokens: ["surface", "spacing", "icon size", "focus ring"],
    accessibility: ["button labels", "heading hierarchy", "touch target"],
  },
  {
    id: "navigation.glass-nav",
    family: "App Structure",
    name: "Bottom Tab Bar",
    status: "draft",
    favorite: true,
    description: "Primary Today, Plan, Progress and Coach navigation using restrained functional Liquid Glass.",
    variants: ["Label + Icon", "Icon Only", "Dark App", "Compact Dock"],
    states: ["Default", "Selected", "Pressed", "Disabled", "Reduced Motion"],
    tokens: ["glass", "blur", "reflection", "motion", "accent"],
    accessibility: ["tab role", "active tab", "target size"],
  },
  {
    id: "actions.buttons",
    family: "Actions",
    name: "Button",
    status: "draft",
    favorite: true,
    description: "Physical action object for committed, secondary, contextual and floating actions.",
    variants: buttonVariants,
    sizes: buttonSizes,
    states: buttonStates,
    tokens: ["radius", "shadow", "accent", "motion", "density"],
    accessibility: ["44px target", "visible focus", "disabled state"],
  },
  {
    id: "actions.iconography",
    family: "Actions",
    name: "Iconography",
    status: "draft",
    favorite: true,
    description: "App-first symbol system for health data, food tracking, AI guidance, professional services, actions and states.",
    variants: ["Core App", "Health Data", "Food Tracker", "AI + Professional", "States"],
    sizes: ["16", "20", "24", "32", "40"],
    states: ["Default", "Hover", "Pressed", "Focused", "Selected", "Disabled", "Semantic"],
    tokens: ["icon stroke", "icon size", "module accent", "neutral foreground", "focus ring"],
    accessibility: ["meaningful label", "state text", "not color-only"],
  },
  {
    id: "actions.icon-button",
    family: "Actions",
    name: "Icon Button",
    status: "missing",
    favorite: true,
    description: "Compact repeated action for toolbars, filters, close, notifications, row actions and detail affordances.",
    variants: ["Solid", "Soft", "Glass", "Ghost", "Danger"],
    sizes: ["32", "36", "40", "44", "52"],
    states: ["Default", "Hover", "Pressed", "Focused", "Selected", "Disabled"],
    tokens: ["radius", "icon size", "hit target", "accent", "motion"],
    accessibility: ["accessible label", "visible focus", "selected meaning"],
  },
  {
    id: "actions.guidance-entry",
    family: "Actions",
    name: "Coach / Guidance Entry",
    status: "missing",
    favorite: false,
    description: "Entry point for AI coach, human coach, explanation prompts and escalation paths.",
    variants: ["AI Guidance", "Human Coach", "Support", "Composer"],
    states: ["Default", "Focused", "Sending", "Failed", "Disabled"],
    tokens: ["glass control", "soft metal", "accent", "type"],
    accessibility: ["input label", "status text", "send action label"],
  },
  {
    id: "data.display",
    family: "Daily State",
    name: "Health Score / Daily State Module",
    status: "draft",
    favorite: true,
    description: "Primary daily state module for score, trend, interpretation and optional visual summary.",
    variants: ["Score Hero", "Compact Score", "Score With Trend", "Score With Evidence"],
    states: dataDisplayStates,
    tokens: ["soft metal", "accent", "type", "chart", "motion"],
    accessibility: ["score text", "trend meaning", "summary"],
  },
  {
    id: "daily.recommendation",
    family: "Daily State",
    name: "Recommendation Card",
    status: "draft",
    favorite: true,
    description: "Turns the current health state into one clear next action with reason and source signal.",
    variants: ["Primary", "Secondary", "Warning", "Coach Prompt"],
    states: ["Static", "Interactive", "Selected", "Loading", "Empty", "Error"],
    tokens: ["soft metal", "module accent", "spacing", "type"],
    accessibility: ["heading", "reason text", "action label"],
  },
  {
    id: "daily.signal-metric",
    family: "Daily State",
    name: "Signal Metric",
    status: "draft",
    favorite: true,
    description: "Reusable health signal for sleep, recovery, HRV, biomarkers, stress, movement and adherence.",
    variants: ["Simple", "Trend", "Status", "Evidence", "Compact"],
    states: ["Normal", "Improving", "Declining", "Warning", "Loading", "Empty"],
    tokens: ["soft metal", "module accent", "icon", "type"],
    accessibility: ["value and unit", "trend text", "status text"],
  },
  {
    id: "daily.section-heading",
    family: "Daily State",
    name: "Section Heading",
    status: "missing",
    favorite: true,
    description: "Repeated heading pattern for recommendations, signals, plans, reports, biomarkers, nutrition and coach messages.",
    variants: ["Label", "With Action", "With Status"],
    states: ["Default", "Action Hover", "Action Pressed", "Disabled"],
    tokens: ["type", "spacing", "accent", "icon"],
    accessibility: ["heading level", "action label"],
  },
  {
    id: "tables.base",
    family: "Rows & Lists",
    name: "Rows & Lists",
    status: "draft",
    favorite: true,
    description: "Operational rows for plans, nutrition, training, biomarkers, measurements and coach client lists.",
    variants: tableTypes,
    states: tableStates,
    tokens: ["surface", "divider", "spacing", "type"],
    accessibility: ["row labels", "state text", "disclosure labels"],
  },
  {
    id: "cards.health",
    family: "Cards",
    name: "Cards",
    status: "draft",
    favorite: true,
    description: "Stable Soft Metal content containers for health, insight, report, metric and recommendation content.",
    variants: cardTypes,
    states: cardStates,
    tokens: ["soft metal", "radius", "shadow", "type scale"],
    accessibility: ["heading hierarchy", "data label", "reduced motion"],
  },
  {
    id: "inputs.text",
    family: "Forms",
    name: "Input And Form Controls",
    status: "draft",
    favorite: true,
    description: "Inputs and controls for check-ins, body check, measurements, nutrition logging, coach notes and settings.",
    variants: inputVariants,
    states: inputStates,
    tokens: ["surface", "stroke", "radius", "focus", "type"],
    accessibility: ["label", "focus ring", "error message"],
  },
  {
    id: "menus.select",
    family: "Forms",
    name: "Select / Menu",
    status: "draft",
    favorite: false,
    description: "Dropdown, combobox, context and multi-select menus using functional overlay material only where needed.",
    variants: menuTypes,
    states: menuStates,
    tokens: ["glass", "blur", "surface", "focus", "motion"],
    accessibility: ["keyboard navigation", "active option", "dismiss path"],
  },
  {
    id: "selection.controls",
    family: "Forms",
    name: "Selection Controls",
    status: "draft",
    favorite: false,
    description: "Checkbox, radio, switch, segmented control and chips for explicit selection.",
    variants: selectionVariants,
    states: selectionStates,
    tokens: ["accent", "radius", "stroke", "motion"],
    accessibility: ["role", "selected state", "keyboard toggle"],
  },
  {
    id: "forms.body-check",
    family: "Forms",
    name: "Body Check / Measurement Form",
    status: "missing",
    favorite: false,
    description: "Domain form pattern for body measurements, required fields, missing baseline and coach review states.",
    variants: ["Measurement Form", "Body Composition Summary", "History Row", "Progress Photo Slot"],
    states: ["Default", "Missing Baseline", "Required Field", "Coach Review", "Sync Failed"],
    tokens: ["input", "soft metal", "semantic", "spacing"],
    accessibility: ["field labels", "error text", "required state"],
  },
  {
    id: "charts.health",
    family: "Charts",
    name: "Chart / Trend Visual",
    status: "draft",
    favorite: true,
    description: "Health trend and progress visualization with text summary, selected state and reduced-motion behavior.",
    variants: chartTypes,
    states: chartStates,
    tokens: ["accent", "stroke", "motion", "type"],
    accessibility: ["summary", "trend text", "reduced motion"],
  },
  {
    id: "feedback.toast",
    family: "Overlays",
    name: "Overlay System",
    status: "draft",
    favorite: false,
    description: "Transient surfaces for details, confirmations, filters, coach prompts, sheets, modals, tooltips and toasts.",
    variants: feedbackTypes,
    states: feedbackStates,
    tokens: ["glass", "soft metal", "motion", "radius"],
    accessibility: ["live region", "dismiss action", "focus return"],
  },
  {
    id: "states.system",
    family: "States",
    name: "Empty / Loading / Error / Locked",
    status: "missing",
    favorite: false,
    description: "Reusable unavailable, pending and blocked states across daily state, rows, forms, charts and overlays.",
    variants: ["Empty", "Loading", "Skeleton", "Error", "No Data", "Permission Needed", "Offline", "Sync Failed", "Locked"],
    states: ["Default", "With Action", "Retry", "Disabled"],
    tokens: ["semantic", "type", "spacing", "soft metal"],
    accessibility: ["specific copy", "status announcement", "retry label"],
  },
  {
    id: "foundations.live",
    family: "System Tools",
    name: "Live Tokens",
    status: "demoted",
    favorite: false,
    description: "Secondary tool for inspecting color, type, icon, motion, layout and token behavior.",
    variants: foundationTypes,
    states: foundationStates,
    tokens: ["color", "type", "spacing", "motion", "radius", "glass"],
    accessibility: ["contrast", "large type", "reduced motion", "density"],
  },
  {
    id: "motion.lab",
    family: "System Tools",
    name: "Motion Lab",
    status: "demoted",
    favorite: false,
    description: "Secondary tool for interaction physics, pressure, morphing, refraction and reduced-motion checks.",
    variants: motionTypes,
    states: motionStates,
    tokens: ["duration", "spring", "scale", "blur", "depth"],
    accessibility: ["reduced motion", "no surprise movement", "state continuity"],
  },
  {
    id: "accessibility.lab",
    family: "System Tools",
    name: "Accessibility Lab",
    status: "demoted",
    favorite: false,
    description: "Secondary tool for contrast, type, focus, motion, transparency and target-size checks.",
    variants: accessibilityTypes,
    states: accessibilityStates,
    tokens: ["contrast", "type scale", "focus", "motion", "transparency"],
    accessibility: ["keyboard path", "visible focus", "touch target", "reduced motion"],
  },
  {
    id: "material.glass-experiments",
    family: "Material Physics",
    name: "Liquid Glass Studio",
    status: "usable",
    favorite: true,
    description: "Functional Liquid Glass workbench for navigation, buttons, search, menus and transient controls.",
    variants: ["Button", "Icon Button", "Search", "Select", "Dock", "Tab Bar", "Popover", "Dropdown", "Tooltip", "Card Controls"],
    states: ["Rest", "Hover", "Pressed", "Focused", "Reduced Transparency"],
    tokens: ["blur", "refraction", "edge light", "specular", "chromatic", "fallback"],
    accessibility: ["contrast", "reduced transparency", "performance budget", "hit target"],
  },
  {
    id: "patterns.composites",
    family: "System Tools",
    name: "App Pattern Composites",
    status: "demoted",
    favorite: false,
    description: "Secondary composed-screen checks for hierarchy, decisions and navigation after components are stable.",
    variants: appPatternTypes,
    states: appPatternStates,
    tokens: ["layout", "soft metal", "glass", "module accent"],
    accessibility: ["focus order", "primary decision", "content hierarchy"],
  },
];
