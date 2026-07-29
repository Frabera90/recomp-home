import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Barcode,
  Bell,
  Bot,
  Brain,
  Calendar,
  CalendarCheck,
  Check,
  CircleCheck,
  Clock,
  Code2,
  Copy,
  CreditCard,
  Dna,
  Dumbbell,
  Eye,
  FileText,
  Filter,
  Gauge,
  HeartPulse,
  Loader2,
  Lock,
  MessageCircle,
  Moon,
  Pencil,
  PieChart,
  Plus,
  Search,
  Settings,
  Sparkles,
  Star,
  Stethoscope,
  Scale,
  Utensils,
  UserRound,
  WifiOff,
  X,
} from "lucide-react";
import {
  accessibilityStates,
  accessibilityTypes,
  accentOptions,
  appPatternStates,
  appPatternTypes,
  backgrounds,
  buttonSizes,
  buttonStates,
  buttonVariants,
  canvasModes,
  cardStates,
  cardTypes,
  chartStates,
  chartTypes,
  componentRegistry,
  dataDisplayStates,
  dataDisplayTypes,
  feedbackStates,
  feedbackTypes,
  foundationStates,
  foundationTypes,
  glassStates,
  inputStates,
  inputVariants,
  inspectorTabs,
  mediaStates,
  mediaTypes,
  menuStates,
  menuTypes,
  motionStates,
  motionTypes,
  selectionStates,
  selectionVariants,
  tableStates,
  tableTypes,
} from "./data/componentRegistry";
import "./playground.css";

export function DesignPlayground() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("material.glass-experiments");
  const [mode, setMode] = useState("Playground");
  const [inspectorTab, setInspectorTab] = useState("Configure");
  const [matrixMode, setMatrixMode] = useState("Variants");
  const [viewportMode, setViewportMode] = useState("Desktop");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [inspectorCollapsed, setInspectorCollapsed] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [accent, setAccent] = useState("Biomarkers");
  const [glass, setGlass] = useState(58);
  const [blur, setBlur] = useState(28);
  const [radius, setRadius] = useState(22);
  const [shadow, setShadow] = useState(32);
  const [motionSpeed, setMotionSpeed] = useState(1);
  const [contrast, setContrast] = useState(1);
  const [density, setDensity] = useState("Comfortable");
  const [reflection, setReflection] = useState(42);
  const [refraction, setRefraction] = useState(34);
  const [noise, setNoise] = useState(18);
  const [typeScale, setTypeScale] = useState(1);
  const [spacingScale, setSpacingScale] = useState(1);
  const [pressDepth, setPressDepth] = useState(6);
  const [forcedState, setForcedState] = useState("Default");
  const [foundationVariant, setFoundationVariant] = useState("Colors");
  const [foundationState, setFoundationState] = useState("Default");
  const [buttonVariant, setButtonVariant] = useState("Primary");
  const [buttonSize, setButtonSize] = useState("M");
  const [inputVariant, setInputVariant] = useState("Text");
  const [inputState, setInputState] = useState("Default");
  const [selectionVariant, setSelectionVariant] = useState("Switch");
  const [selectionState, setSelectionState] = useState("Selected");
  const [menuVariant, setMenuVariant] = useState("Dropdown");
  const [menuState, setMenuState] = useState("Open");
  const [cardVariant, setCardVariant] = useState("Metric");
  const [cardState, setCardState] = useState("Interactive");
  const [chartVariant, setChartVariant] = useState("Line");
  const [chartState, setChartState] = useState("Animated");
  const [feedbackVariant, setFeedbackVariant] = useState("Toast");
  const [feedbackState, setFeedbackState] = useState("Visible");
  const [tableVariant, setTableVariant] = useState("Simple");
  const [tableState, setTableState] = useState("Default");
  const [mediaVariant, setMediaVariant] = useState("Upload");
  const [mediaState, setMediaState] = useState("Empty");
  const [dataDisplayVariant, setDataDisplayVariant] = useState("KPI");
  const [dataDisplayState, setDataDisplayState] = useState("Default");
  const [motionVariant, setMotionVariant] = useState("Morph");
  const [motionState, setMotionState] = useState("Preview");
  const [accessibilityVariant, setAccessibilityVariant] = useState("Contrast");
  const [accessibilityState, setAccessibilityState] = useState("Pass");
  const [appPatternVariant, setAppPatternVariant] = useState("Daily State");
  const [appPatternState, setAppPatternState] = useState("Default");
  const [backgroundVariant, setBackgroundVariant] = useState("Photo");
  const [glassState, setGlassState] = useState("Hover");
  const [activeTab, setActiveTab] = useState(0);
  const [toastOpen, setToastOpen] = useState(true);
  const [selectedChip, setSelectedChip] = useState("Recovery");

  const selected = componentRegistry.find((item) => item.id === selectedId) ?? componentRegistry[0];
  const filtered = componentRegistry.filter((item) => `${item.family} ${item.name}`.toLowerCase().includes(query.toLowerCase()));
  const recent = componentRegistry.slice(0, 3);
  const favorites = componentRegistry.filter((item) => item.favorite);
  const accentColor = accentOptions[accent];

  const sandboxStyle = {
    "--live-accent": accentColor,
    "--live-glass-opacity": glass / 100,
    "--live-blur": `${blur}px`,
    "--live-radius": `${radius}px`,
    "--live-shadow": `0 ${Math.round(shadow * 0.75)}px ${shadow * 2}px rgba(0,0,0,${0.18 + shadow / 220})`,
    "--live-motion": `${motionSpeed}`,
    "--live-contrast": `${contrast}`,
    "--live-density": density === "Compact" ? "0.82" : "1",
    "--live-reflection": reflection / 100,
    "--live-refraction": refraction / 100,
    "--live-noise": noise / 100,
    "--live-noise-opacity": noise / 460,
    "--live-reflection-alpha": 0.16 + (reflection / 100) * 0.28,
    "--live-refraction-tint": 0.03 + (refraction / 100) * 0.05,
    "--live-refraction-blur": `${blur + (refraction / 100) * 10}px`,
    "--live-glass-saturation": `${125 + (refraction / 100) * 45}%`,
    "--live-type-scale": typeScale,
    "--live-spacing-scale": spacingScale,
    "--live-press-depth": `${pressDepth}px`,
  };

  return (
    <main className={`workbench is-${theme} ${sidebarCollapsed || focusMode ? "is-sidebar-collapsed" : ""} ${inspectorCollapsed || focusMode ? "is-inspector-collapsed" : ""} ${focusMode ? "is-focus-mode" : ""}`} style={sandboxStyle}>
      {!focusMode && sidebarCollapsed && <button className="restore-panel restore-sidebar" onClick={() => setSidebarCollapsed(false)} type="button">Navigation</button>}
      {!focusMode && inspectorCollapsed && <button className="restore-panel restore-inspector" onClick={() => setInspectorCollapsed(false)} type="button">Inspector</button>}
      <WorkbenchSidebar
        components={filtered}
        favorites={favorites}
        query={query}
        recent={recent}
        selectedId={selectedId}
        setCollapsed={setSidebarCollapsed}
        setQuery={setQuery}
        setSelectedId={setSelectedId}
      />
      <WorkbenchCanvas
        activeTab={activeTab}
        backgroundVariant={backgroundVariant}
        forcedState={forcedState}
        glassState={glassState}
        focusMode={focusMode}
        matrixMode={matrixMode}
        mode={mode}
        buttonSize={buttonSize}
        buttonVariant={buttonVariant}
        inputState={inputState}
        inputVariant={inputVariant}
        selectionState={selectionState}
        selectionVariant={selectionVariant}
        menuState={menuState}
        menuVariant={menuVariant}
        cardState={cardState}
        cardVariant={cardVariant}
        chartState={chartState}
        chartVariant={chartVariant}
        feedbackState={feedbackState}
        feedbackVariant={feedbackVariant}
        tableState={tableState}
        tableVariant={tableVariant}
        mediaState={mediaState}
        mediaVariant={mediaVariant}
        dataDisplayState={dataDisplayState}
        dataDisplayVariant={dataDisplayVariant}
        motionState={motionState}
        motionVariant={motionVariant}
        accessibilityState={accessibilityState}
        accessibilityVariant={accessibilityVariant}
        appPatternState={appPatternState}
        appPatternVariant={appPatternVariant}
        foundationState={foundationState}
        foundationVariant={foundationVariant}
        selected={selected}
        selectedChip={selectedChip}
        setActiveTab={setActiveTab}
        setBackgroundVariant={setBackgroundVariant}
        setFocusMode={setFocusMode}
        setGlassState={setGlassState}
        setMatrixMode={setMatrixMode}
        setMode={setMode}
        setSelectedChip={setSelectedChip}
        setMenuState={setMenuState}
        setMenuVariant={setMenuVariant}
        setToastOpen={setToastOpen}
        setTableState={setTableState}
        setTableVariant={setTableVariant}
        setMediaState={setMediaState}
        setMediaVariant={setMediaVariant}
        setDataDisplayState={setDataDisplayState}
        setDataDisplayVariant={setDataDisplayVariant}
        setMotionState={setMotionState}
        setMotionVariant={setMotionVariant}
        setAccessibilityState={setAccessibilityState}
        setAccessibilityVariant={setAccessibilityVariant}
        setAppPatternState={setAppPatternState}
        setAppPatternVariant={setAppPatternVariant}
        setFoundationState={setFoundationState}
        setFoundationVariant={setFoundationVariant}
        toastOpen={toastOpen}
        viewportMode={viewportMode}
        setViewportMode={setViewportMode}
      />
      <WorkbenchInspector
        accent={accent}
        backgroundVariant={backgroundVariant}
        blur={blur}
        contrast={contrast}
        density={density}
        forcedState={forcedState}
        buttonSize={buttonSize}
        buttonVariant={buttonVariant}
        inputState={inputState}
        inputVariant={inputVariant}
        selectionState={selectionState}
        selectionVariant={selectionVariant}
        menuState={menuState}
        menuVariant={menuVariant}
        cardState={cardState}
        cardVariant={cardVariant}
        chartState={chartState}
        chartVariant={chartVariant}
        feedbackState={feedbackState}
        feedbackVariant={feedbackVariant}
        tableState={tableState}
        tableVariant={tableVariant}
        mediaState={mediaState}
        mediaVariant={mediaVariant}
        dataDisplayState={dataDisplayState}
        dataDisplayVariant={dataDisplayVariant}
        motionState={motionState}
        motionVariant={motionVariant}
        accessibilityState={accessibilityState}
        accessibilityVariant={accessibilityVariant}
        appPatternState={appPatternState}
        appPatternVariant={appPatternVariant}
        foundationState={foundationState}
        foundationVariant={foundationVariant}
        glass={glass}
        glassState={glassState}
        inspectorTab={inspectorTab}
        motionSpeed={motionSpeed}
        noise={noise}
        pressDepth={pressDepth}
        radius={radius}
        reflection={reflection}
        refraction={refraction}
        selected={selected}
        setCollapsed={setInspectorCollapsed}
        setAccent={setAccent}
        setBackgroundVariant={setBackgroundVariant}
        setBlur={setBlur}
        setButtonSize={setButtonSize}
        setButtonVariant={setButtonVariant}
        setCardState={setCardState}
        setCardVariant={setCardVariant}
        setChartState={setChartState}
        setChartVariant={setChartVariant}
        setContrast={setContrast}
        setDensity={setDensity}
        setFeedbackState={setFeedbackState}
        setFeedbackVariant={setFeedbackVariant}
        setTableState={setTableState}
        setTableVariant={setTableVariant}
        setMediaState={setMediaState}
        setMediaVariant={setMediaVariant}
        setDataDisplayState={setDataDisplayState}
        setDataDisplayVariant={setDataDisplayVariant}
        setMotionState={setMotionState}
        setMotionVariant={setMotionVariant}
        setAccessibilityState={setAccessibilityState}
        setAccessibilityVariant={setAccessibilityVariant}
        setAppPatternState={setAppPatternState}
        setAppPatternVariant={setAppPatternVariant}
        setFoundationState={setFoundationState}
        setFoundationVariant={setFoundationVariant}
        setForcedState={setForcedState}
        setGlass={setGlass}
        setGlassState={setGlassState}
        setInputState={setInputState}
        setInputVariant={setInputVariant}
        setInspectorTab={setInspectorTab}
        setMenuState={setMenuState}
        setMenuVariant={setMenuVariant}
        setMotionSpeed={setMotionSpeed}
        setNoise={setNoise}
        setPressDepth={setPressDepth}
        setRadius={setRadius}
        setReflection={setReflection}
        setRefraction={setRefraction}
        setSelectionState={setSelectionState}
        setSelectionVariant={setSelectionVariant}
        setShadow={setShadow}
        setSpacingScale={setSpacingScale}
        setTheme={setTheme}
        setTypeScale={setTypeScale}
        shadow={shadow}
        spacingScale={spacingScale}
        theme={theme}
        typeScale={typeScale}
      />
    </main>
  );
}

function WorkbenchSidebar({ components, favorites, query, recent, selectedId, setCollapsed, setQuery, setSelectedId }) {
  const families = [...new Set(components.map((item) => item.family))];
  return (
    <aside className="workbench-sidebar" aria-label="Component workbench navigation">
      <div className="brand-block">
        <span>RE-COMP Workbench</span>
        <h1>Component System</h1>
        <button className="panel-toggle" onClick={() => setCollapsed(true)} type="button">Collapse</button>
      </div>
      <label className="workbench-search">
        <Search size={15} />
        <input onChange={(event) => setQuery(event.target.value)} placeholder="Search components" value={query} />
      </label>
      <MiniList icon={Star} items={favorites} label="Favorites" selectedId={selectedId} setSelectedId={setSelectedId} />
      <MiniList icon={Activity} items={recent} label="Recent" selectedId={selectedId} setSelectedId={setSelectedId} />
      <div className="component-tree">
        {families.map((family) => (
          <section key={family}>
            <h2>{family}</h2>
            {components.filter((item) => item.family === family).map((item) => (
              <button className={selectedId === item.id ? "is-selected" : ""} key={item.id} onClick={() => setSelectedId(item.id)} type="button">
                <span>{item.name}</span>
                <StatusPill compact status={item.status} />
              </button>
            ))}
          </section>
        ))}
      </div>
    </aside>
  );
}

function MiniList({ icon: Icon, items, label, selectedId, setSelectedId }) {
  return (
    <details className="mini-list">
      <summary><Icon size={13} /> {label}</summary>
      {items.map((item) => (
        <button className={selectedId === item.id ? "is-selected" : ""} key={item.id} onClick={() => setSelectedId(item.id)} type="button">
          {item.name}
        </button>
      ))}
    </details>
  );
}

function WorkbenchCanvas(props) {
  const directComponentPage = props.selected.id === "selection.controls" || props.selected.id === "actions.buttons" || props.selected.id === "actions.iconography" || props.selected.id === "inputs.text" || props.selected.id === "menus.select" || props.selected.id === "navigation.glass-nav" || props.selected.id === "feedback.toast" || props.selected.id === "cards.health" || props.selected.id === "charts.health" || props.selected.id === "tables.base" || props.selected.id === "data.display" || props.selected.id === "media.upload" || props.selected.id === "motion.lab" || props.selected.id === "accessibility.lab" || props.selected.id === "patterns.app" || props.selected.id === "material.glass-experiments";
  const matrixModes = props.selected.id === "actions.buttons" ? ["Variants", "Sizes", "States", "Backgrounds"] : ["Variants", "Sizes", "States"];

  return (
    <section className="workbench-canvas">
      <header className="canvas-header">
        <div>
          <span>{props.selected.family}</span>
          <h2>{props.selected.name}</h2>
          <p>{props.selected.description}</p>
        </div>
        <div className="component-meta">
          <StatusPill status={props.selected.status} />
          <span>v0.1</span>
        </div>
      </header>
      {!directComponentPage && (
        <div className="canvas-toolbar">
          <nav className="canvas-tabs" aria-label="Canvas modes">
            {canvasModes.map((item) => (
              <button className={props.mode === item ? "is-active" : ""} key={item} onClick={() => props.setMode(item)} type="button">{item}</button>
            ))}
          </nav>
          {props.mode === "Matrix" && (
            <nav className="matrix-tabs" aria-label="Matrix modes">
              {matrixModes.map((item) => <button className={props.matrixMode === item ? "is-active" : ""} key={item} onClick={() => props.setMatrixMode(item)} type="button">{item}</button>)}
            </nav>
          )}
          <select aria-label="Viewport" onChange={(event) => props.setViewportMode(event.target.value)} value={props.viewportMode}>
            <option>Mobile</option>
            <option>Tablet</option>
            <option>Desktop</option>
          </select>
          <button className="tool-button" onClick={() => props.setFocusMode(!props.focusMode)} type="button">{props.focusMode ? "Exit focus" : "Focus"}</button>
        </div>
      )}
      <div className="canvas-stage">
        <CanvasMode {...props} />
      </div>
    </section>
  );
}

function CanvasMode(props) {
  if (props.selected.id === "patterns.app") return <AppStructureLibraryPage activeTab={props.activeTab} setActiveTab={props.setActiveTab} />;
  if (props.selected.id === "material.glass-experiments") return <LiquidGlassStudioPage />;
  if (props.selected.status === "missing") return <MissingStory selected={props.selected} />;
  if (props.selected.id === "actions.buttons") return <ButtonLibraryPage />;
  if (props.selected.id === "actions.iconography") return <IconographyLibraryPage />;
  if (props.selected.id === "inputs.text") return <InputLibraryPage />;
  if (props.selected.id === "menus.select") return <MenuLibraryPage />;
  if (props.selected.id === "selection.controls") return <SelectionLibraryPage />;
  if (props.selected.id === "navigation.glass-nav") return <NavigationLibraryPage activeTab={props.activeTab} setActiveTab={props.setActiveTab} />;
  if (props.selected.id === "feedback.toast") return <FeedbackLibraryPage setToastOpen={props.setToastOpen} toastOpen={props.toastOpen} />;
  if (props.selected.id === "cards.health") return <CardLibraryPage />;
  if (props.selected.id === "charts.health") return <ChartLibraryPage />;
  if (props.selected.id === "tables.base") return <TableLibraryPage />;
  if (props.selected.id === "data.display") return <DataDisplayLibraryPage />;
  if (props.selected.id === "media.upload") return <MediaLibraryPage />;
  if (props.selected.id === "motion.lab") return <MotionToolPage />;
  if (props.selected.id === "accessibility.lab") return <AccessibilityToolPage />;
  if (props.mode === "Matrix" && props.matrixMode === "Variants") return <VariantMatrix selected={props.selected} />;
  if (props.mode === "Matrix" && props.matrixMode === "Sizes") return <SizeMatrix selected={props.selected} />;
  if (props.mode === "Matrix" && props.matrixMode === "States") return <StateMatrix selected={props.selected} />;
  if (props.mode === "Matrix" && props.matrixMode === "Backgrounds" && props.selected.id === "actions.buttons") return <ButtonBackgroundShowcase />;
  if (props.mode === "Matrix" && props.matrixMode === "Backgrounds") {
    return (
      <BackgroundTester
        backgroundVariant={props.backgroundVariant}
        glassState={props.glassState}
        setBackgroundVariant={props.setBackgroundVariant}
        setGlassState={props.setGlassState}
      />
    );
  }
  if (props.mode === "Examples" && props.selected.id === "actions.buttons") return <ButtonBackgroundShowcase />;
  if (props.mode === "Examples") return <ResponsivePreview selected={props.selected} />;
  if (props.mode === "Documentation") return <CodePreview selected={props.selected} />;
  return <PreviewStory {...props} />;
}

function PreviewStory(props) {
  if (props.selected.id === "foundations.live") return <FoundationPreview state={props.foundationState} variant={props.foundationVariant} />;
  if (props.selected.id === "navigation.glass-nav") return <GlassNav activeTab={props.activeTab} setActiveTab={props.setActiveTab} />;
  if (props.selected.id === "actions.buttons") return <ButtonPreview forcedState={props.forcedState} size={props.buttonSize} variant={props.buttonVariant} />;
  if (props.selected.id === "inputs.text") return <InputPreview state={props.inputState} variant={props.inputVariant} />;
  if (props.selected.id === "selection.controls") return <SelectionPreview selectedChip={props.selectedChip} setSelectedChip={props.setSelectedChip} state={props.selectionState} variant={props.selectionVariant} />;
  if (props.selected.id === "menus.select") return <MenuPreview state={props.menuState} variant={props.menuVariant} />;
  if (props.selected.id === "cards.health") return <CardPreview state={props.cardState} variant={props.cardVariant} />;
  if (props.selected.id === "feedback.toast") return <FeedbackPreview setToastOpen={props.setToastOpen} state={props.feedbackState} toastOpen={props.toastOpen} variant={props.feedbackVariant} />;
  if (props.selected.id === "charts.health") return <ChartPreview state={props.chartState} variant={props.chartVariant} />;
  if (props.selected.id === "tables.base") return <TablePreview state={props.tableState} variant={props.tableVariant} />;
  if (props.selected.id === "media.upload") return <MediaPreview state={props.mediaState} variant={props.mediaVariant} />;
  if (props.selected.id === "data.display") return <DataDisplayPreview state={props.dataDisplayState} variant={props.dataDisplayVariant} />;
  if (props.selected.id === "motion.lab") return <MotionLabPreview state={props.motionState} variant={props.motionVariant} />;
  if (props.selected.id === "accessibility.lab") return <AccessibilityLabPreview state={props.accessibilityState} variant={props.accessibilityVariant} />;
  if (props.selected.id === "patterns.app") return <AppPatternPreview state={props.appPatternState} variant={props.appPatternVariant} />;
  return <MissingStory selected={props.selected} />;
}

const liquidStudioComponents = [
  { id: "button", label: "Button", sub: "LiquidGlassButton", badge: "BU" },
  { id: "icon", label: "Icon Button", sub: "LiquidGlassIconButton", badge: "IC" },
  { id: "search", label: "Search", sub: "LiquidGlassSearch", badge: "SE" },
  { id: "select", label: "Select", sub: "LiquidGlassSelect", badge: "SL" },
  { id: "dock", label: "Dock", sub: "LiquidGlassDock", badge: "DO" },
  { id: "tabbar", label: "Tab Bar", sub: "LiquidGlassTabBar", badge: "TA" },
  { id: "popover", label: "Popover", sub: "LiquidGlassPopover", badge: "PO" },
  { id: "dropdown", label: "Dropdown", sub: "LiquidGlassDropdown", badge: "DR" },
  { id: "tooltip", label: "Tooltip", sub: "LiquidGlassTooltip", badge: "TO" },
  { id: "card", label: "Card Controls", sub: "SoftMetalCard + glass controls", badge: "CA" },
];

function LiquidGlassStudioPage() {
  const [active, setActive] = useState("button");
  const [variant, setVariant] = useState("Frosted");
  const [physics, setPhysics] = useState({
    blur: 34,
    refraction: 38,
    chromatic: 25,
    distortion: 12,
    edge: 10,
    specular: 12,
    fresnel: 90,
  });
  const selected = liquidStudioComponents.find((item) => item.id === active) ?? liquidStudioComponents[0];
  const setPhysicsValue = (key, value) => setPhysics((current) => ({ ...current, [key]: Number(value) }));
  const physicsStyle = {
    "--lg-blur": `${10 + physics.blur * 0.55}px`,
    "--lg-alpha": `${0.18 + physics.blur / 420}`,
    "--lg-refraction": `${physics.refraction / 100}`,
    "--lg-chromatic": `${physics.chromatic / 1000}`,
    "--lg-distortion": `${physics.distortion / 1000}`,
    "--lg-edge": `${physics.edge / 100}`,
    "--lg-specular": `${physics.specular / 100}`,
    "--lg-fresnel": `${physics.fresnel / 100}`,
  };

  return (
    <section className="liquid-studio" style={physicsStyle}>
      <header className="liquid-studio-topbar">
        <div>
          <span>Liquid Glass Playground</span>
          <h2>Component Studio</h2>
        </div>
        <div className="liquid-studio-status">
          <div>
            <span>Surface</span>
            <strong>{selected.sub}</strong>
          </div>
          <strong>{selected.label}</strong>
        </div>
        <div className="liquid-studio-actions">
          <button type="button">Docs</button>
          <button className="is-on" type="button"><CircleCheck size={14} /> Video</button>
          <button className="is-primary" type="button">Hide</button>
        </div>
      </header>

      <div className="liquid-studio-grid">
        <aside className="liquid-studio-rail" aria-label="Liquid glass components">
          <div className="liquid-rail-heading">
            <span>Components</span>
            <strong>{liquidStudioComponents.length}</strong>
          </div>
          {liquidStudioComponents.map((item) => (
            <button className={active === item.id ? "is-active" : ""} key={item.id} onClick={() => setActive(item.id)} type="button">
              <span>{item.badge}</span>
              <span>
                <strong>{item.label}</strong>
                <small>{item.sub}</small>
              </span>
            </button>
          ))}
        </aside>

        <main className="liquid-stage" aria-label="Liquid glass preview">
          <div className="liquid-stage-orbit">
            <LiquidStudioPreview active={active} selected={selected} />
          </div>
        </main>

        <aside className="liquid-physics" aria-label="Glass physics inspector">
          <header>
            <span>Playground</span>
            <h3>Glass Physics</h3>
          </header>
          <label className="liquid-select-row">
            <span>Glass variant</span>
            <select onChange={(event) => setVariant(event.target.value)} value={variant}>
              <option>Frosted</option>
              <option>Thin</option>
              <option>Strong</option>
              <option>Reduced</option>
            </select>
          </label>
          {[
            ["blur", "Blur", 0, 70],
            ["refraction", "Refraction", 0, 70],
            ["chromatic", "Chromatic", 0, 60],
            ["distortion", "Distortion", 0, 50],
            ["edge", "Edge light", 0, 35],
            ["specular", "Specular", 0, 35],
            ["fresnel", "Fresnel", 35, 100],
          ].map(([key, label, min, max]) => (
            <label className="liquid-slider" key={key}>
              <span>{label}<small>{physics[key] / (key === "chromatic" || key === "distortion" ? 1000 : 100)}</small></span>
              <input max={max} min={min} onChange={(event) => setPhysicsValue(key, event.target.value)} type="range" value={physics[key]} />
            </label>
          ))}
          <div className="liquid-usage">
            <span>Current usage</span>
            <code>{`<${selected.sub}
  variant="${variant.toLowerCase()}"
  blur={${(physics.blur / 100).toFixed(2)}}
  refraction={${(physics.refraction / 100).toFixed(2)}}
  edgeLight={${(physics.edge / 100).toFixed(2)}}
/>`}</code>
          </div>
        </aside>
      </div>
    </section>
  );
}

function LiquidStudioPreview({ active, selected }) {
  if (active === "icon") {
    return (
      <div className="liquid-preview-stack is-compact">
        <button className="liquid-glass-icon" type="button"><Search size={18} /></button>
        <button className="liquid-glass-icon" type="button"><Filter size={18} /></button>
        <button className="liquid-glass-icon" type="button"><Settings size={18} /></button>
      </div>
    );
  }

  if (active === "search") {
    return (
      <div className="liquid-glass-search">
        <Search size={18} />
        <span>Search biomarker, protocol, specialist...</span>
        <Filter size={17} />
      </div>
    );
  }

  if (active === "select" || active === "dropdown") {
    return (
      <div className="liquid-preview-stack">
        <button className="liquid-glass-menu" type="button">
          <span>Recovery Plan</span>
          <ArrowRight size={16} />
        </button>
        <div className="liquid-glass-popover">
          <strong>Specialist review</strong>
          <span>Review biomarkers with a professional.</span>
        </div>
      </div>
    );
  }

  if (active === "dock" || active === "tabbar") {
    return (
      <nav className="liquid-glass-dock" aria-label={selected.label}>
        {[
          [Activity, "Today"],
          [CalendarCheck, "Plan"],
          [Gauge, "Progress"],
          [MessageCircle, "Coach"],
        ].map(([Icon, label], index) => (
          <button className={index === 0 ? "is-active" : ""} key={label} type="button">
            <Icon size={17} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    );
  }

  if (active === "popover" || active === "tooltip") {
    return (
      <div className="liquid-preview-stack">
        <button className="liquid-glass-button" type="button">Book analysis</button>
        <div className="liquid-glass-popover">
          <strong>Human guidance</strong>
          <span>AI and professionals guide the same wellness plan.</span>
        </div>
      </div>
    );
  }

  if (active === "card") {
    return (
      <article className="liquid-soft-card">
        <span>Health score</span>
        <strong>84</strong>
        <p>Moderate strength session fits today.</p>
        <button className="liquid-glass-button" type="button">Open review</button>
      </article>
    );
  }

  return (
    <div className="liquid-focus-card">
      <div>
        <span>Focus session</span>
        <strong>{selected.label}</strong>
        <p>Design review and component refinement</p>
      </div>
      <b>42:18</b>
      <div className="liquid-progress"><span /></div>
      <div className="liquid-button-row">
        <button className="liquid-glass-button" type="button">Pause</button>
        <button className="liquid-glass-button is-danger" type="button">Stop</button>
      </div>
    </div>
  );
}

function WorkbenchInspector(props) {
  return (
    <aside className="workbench-inspector" aria-label="Component inspector">
      <header>
        <span>Inspector</span>
        <strong>{props.selected.name}</strong>
        <button className="panel-toggle" onClick={() => props.setCollapsed(true)} type="button">Collapse</button>
      </header>
      <nav className="inspector-tabs">
        {inspectorTabs.map((tab) => (
          <button className={props.inspectorTab === tab ? "is-active" : ""} key={tab} onClick={() => props.setInspectorTab(tab)} type="button">{tab}</button>
        ))}
      </nav>
      <InspectorPanel {...props} />
    </aside>
  );
}

function InspectorPanel(props) {
  if (props.inspectorTab === "Configure" && props.selected.id === "actions.buttons") {
    return (
      <div className="inspector-section">
        <label>Variant<select onChange={(event) => props.setButtonVariant(event.target.value)} value={props.buttonVariant}>{buttonVariants.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>Size<select onChange={(event) => props.setButtonSize(event.target.value)} value={props.buttonSize}>{buttonSizes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setForcedState(event.target.value)} value={props.forcedState}>{buttonStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Buttons are physical objects: depth, pressure and clear state feedback before decoration.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "foundations.live") {
    return (
      <div className="inspector-section">
        <label>Foundation<select onChange={(event) => props.setFoundationVariant(event.target.value)} value={props.foundationVariant}>{foundationTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setFoundationState(event.target.value)} value={props.foundationState}>{foundationStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">This lab covers the foundation points from the original list without turning the playground into a static documentation page.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "inputs.text") {
    return (
      <div className="inspector-section">
        <label>Input type<select onChange={(event) => props.setInputVariant(event.target.value)} value={props.inputVariant}>{inputVariants.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setInputState(event.target.value)} value={props.inputState}>{inputStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Inputs are calm data surfaces. Search and command can use glass; data entry stays soft metal and readable.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "selection.controls") {
    return (
      <div className="inspector-section">
        <label>Control<select onChange={(event) => props.setSelectionVariant(event.target.value)} value={props.selectionVariant}>{selectionVariants.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setSelectionState(event.target.value)} value={props.selectionState}>{selectionStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Selection controls must show commitment without shouting. Accent means state, not decoration.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "menus.select") {
    return (
      <div className="inspector-section">
        <label>Menu type<select onChange={(event) => props.setMenuVariant(event.target.value)} value={props.menuVariant}>{menuTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setMenuState(event.target.value)} value={props.menuState}>{menuStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Menus are transient glass overlays. They help choose context and then disappear.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "cards.health") {
    return (
      <div className="inspector-section">
        <label>Card type<select onChange={(event) => props.setCardVariant(event.target.value)} value={props.cardVariant}>{cardTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setCardState(event.target.value)} value={props.cardState}>{cardStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Cards are soft-metal content surfaces. Only their floating controls may use glass.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "charts.health") {
    return (
      <div className="inspector-section">
        <label>Chart type<select onChange={(event) => props.setChartVariant(event.target.value)} value={props.chartVariant}>{chartTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setChartState(event.target.value)} value={props.chartState}>{chartStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Charts explain health direction. They reveal signal, not decoration.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "feedback.toast") {
    return (
      <div className="inspector-section">
        <label>Surface<select onChange={(event) => props.setFeedbackVariant(event.target.value)} value={props.feedbackVariant}>{feedbackTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setFeedbackState(event.target.value)} value={props.feedbackState}>{feedbackStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Feedback appears, confirms context, then gets out of the way. Toasts stay rounded rectangles, not capsules.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "tables.base") {
    return (
      <div className="inspector-section">
        <label>Table type<select onChange={(event) => props.setTableVariant(event.target.value)} value={props.tableVariant}>{tableTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setTableState(event.target.value)} value={props.tableState}>{tableStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Tables are soft-metal data surfaces: quiet dividers, clear values and no glass-heavy decoration.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "media.upload") {
    return (
      <div className="inspector-section">
        <label>Media type<select onChange={(event) => props.setMediaVariant(event.target.value)} value={props.mediaVariant}>{mediaTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setMediaState(event.target.value)} value={props.mediaState}>{mediaStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Media surfaces stay inspectable. Glass is reserved for floating actions above the preview, not the preview itself.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "data.display") {
    return (
      <div className="inspector-section">
        <label>Display type<select onChange={(event) => props.setDataDisplayVariant(event.target.value)} value={props.dataDisplayVariant}>{dataDisplayTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setDataDisplayState(event.target.value)} value={props.dataDisplayState}>{dataDisplayStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Data display turns health information into readable state. Accent is reserved for meaning, not ornament.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "motion.lab") {
    return (
      <div className="inspector-section">
        <label>Motion type<select onChange={(event) => props.setMotionVariant(event.target.value)} value={props.motionVariant}>{motionTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setMotionState(event.target.value)} value={props.motionState}>{motionStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Motion must explain cause, destination and state. Reduced mode preserves meaning without travel.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "accessibility.lab") {
    return (
      <div className="inspector-section">
        <label>Check type<select onChange={(event) => props.setAccessibilityVariant(event.target.value)} value={props.accessibilityVariant}>{accessibilityTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setAccessibilityState(event.target.value)} value={props.accessibilityState}>{accessibilityStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Accessibility is a live constraint: the component must still work when type, motion and transparency change.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Configure" && props.selected.id === "patterns.app") {
    return (
      <div className="inspector-section">
        <label>Pattern<select onChange={(event) => props.setAppPatternVariant(event.target.value)} value={props.appPatternVariant}>{appPatternTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>State<select onChange={(event) => props.setAppPatternState(event.target.value)} value={props.appPatternState}>{appPatternStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p className="small-note">Patterns prove whether the system supports the primary health decision without becoming product logic.</p>
      </div>
    );
  }

  if (props.inspectorTab === "Appearance") {
    return (
      <div className="inspector-section">
        <label>Theme<select onChange={(event) => props.setTheme(event.target.value)} value={props.theme}><option>dark</option><option>light</option></select></label>
        <label>Accent<select onChange={(event) => props.setAccent(event.target.value)} value={props.accent}>{Object.keys(accentOptions).map((item) => <option key={item}>{item}</option>)}</select></label>
        <Slider label="Glass" max="86" min="20" setValue={props.setGlass} value={props.glass} />
        <Slider label="Blur" max="54" min="6" setValue={props.setBlur} value={props.blur} />
        <Slider label="Radius" max="42" min="10" setValue={props.setRadius} value={props.radius} />
        <Slider label="Shadow" max="70" min="8" setValue={props.setShadow} value={props.shadow} />
        <Slider label="Contrast" max="1.4" min="0.8" setValue={props.setContrast} step="0.05" value={props.contrast} />
        <Slider label="Type scale" max="1.18" min="0.88" setValue={props.setTypeScale} step="0.02" value={props.typeScale} />
        <Slider label="Spacing scale" max="1.22" min="0.78" setValue={props.setSpacingScale} step="0.02" value={props.spacingScale} />
        <p className="token-readout">Live tokens update the whole board, but do not write to shared token files.</p>
        <label>Background<select onChange={(event) => props.setBackgroundVariant(event.target.value)} value={props.backgroundVariant}>{backgrounds.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>Glass state<select onChange={(event) => props.setGlassState(event.target.value)} value={props.glassState}>{glassStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <Slider label="Reflection" max="80" min="0" setValue={props.setReflection} value={props.reflection} />
        <Slider label="Refraction" max="80" min="0" setValue={props.setRefraction} value={props.refraction} />
        <Slider label="Noise" max="54" min="0" setValue={props.setNoise} value={props.noise} />
        <p className="small-note">Liquid Glass is tested only as a functional control surface across changing content, never as a large page material.</p>
      </div>
    );
  }
  if (props.inspectorTab === "Behavior") {
    return (
      <div className="inspector-section">
        <label>Forced state<select onChange={(event) => props.setForcedState(event.target.value)} value={props.forcedState}>{buttonStates.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>Density<select onChange={(event) => props.setDensity(event.target.value)} value={props.density}><option>Comfortable</option><option>Compact</option></select></label>
        <Slider label="Motion speed" max="1.8" min="0.4" setValue={props.setMotionSpeed} step="0.1" value={props.motionSpeed} />
        <Slider label="Press depth" max="14" min="1" setValue={props.setPressDepth} value={props.pressDepth} />
        <p className="small-note">Motion controls affect pressure, transition pacing and perceived physicality across the sandbox.</p>
      </div>
    );
  }
  if (props.inspectorTab === "Code") return <CodePreview selected={props.selected} compact />;
  return (
    <div className="inspector-section">
      <p className="small-note">Registry-backed metadata for the selected component. Detailed controls arrive category by category.</p>
      <MetaList label="Variants" values={props.selected.variants} />
      <MetaList label="States" values={props.selected.states} />
      <MetaList label="Tokens" values={props.selected.tokens} />
      <MetaList label="Accessibility" values={props.selected.accessibility} />
      <button className="tool-button" type="button"><Copy size={14} />Copy</button>
      <button className="tool-button" type="button">Reset</button>
    </div>
  );
}

function MetaList({ label, values = [] }) {
  return (
    <section className="meta-list">
      <strong>{label}</strong>
      <div>{values.map((value) => <span key={value}>{value}</span>)}</div>
    </section>
  );
}

function Slider({ label, max, min, setValue, step = "1", value }) {
  return <label>{label}<input max={max} min={min} onChange={(event) => setValue(Number(event.target.value))} step={step} type="range" value={value} /><small>{value}</small></label>;
}

function FoundationPreview({ state = "Default", variant = "Colors" }) {
  return (
    <section className={`foundation-lab is-${state.toLowerCase().replace(" ", "-")}`}>
      <header>
        <span>{variant}</span>
        <strong>{foundationTitle(variant)}</strong>
        <p>{foundationCopy(variant)}</p>
      </header>
      {variant === "Colors" && <ColorFoundation />}
      {variant === "Typography" && <TypeFoundation />}
      {variant === "Icons" && <IconFoundation />}
      {variant === "Motion" && <MotionFoundation />}
      {variant === "Layout" && <LayoutFoundation />}
      {variant === "Tokens" && <TokenFoundation />}
    </section>
  );
}

function foundationTitle(variant) {
  if (variant === "Typography") return "Hierarchy comes from type, not color";
  if (variant === "Icons") return "Symbols stay quiet until state needs them";
  if (variant === "Motion") return "Motion explains origin and destination";
  if (variant === "Layout") return "Space protects the primary decision";
  if (variant === "Tokens") return "Global controls update the system live";
  return "Color is functional, not decorative";
}

function foundationCopy(variant) {
  if (variant === "Typography") return "Large titles, clean body, numeric clarity and no viewport-scaled type.";
  if (variant === "Icons") return "Icons are tools for health domains, status and actions.";
  if (variant === "Motion") return "State changes use restrained timing and visible cause.";
  if (variant === "Layout") return "Responsive grids preserve scan order and breathing room.";
  if (variant === "Tokens") return "Radius, blur, shadow, density and accent are inherited by every component.";
  return "Neutrals carry the interface. Module accents identify meaning.";
}

function ColorFoundation() {
  const [selectedColor, setSelectedColor] = useState("Soft Metal");
  const swatches = [
    { name: "Black 950", color: "#07090b", role: "Background" },
    { name: "Soft Metal", color: "#11161c", role: "Surface" },
    { name: "Graphite", color: "#1f2933", role: "Panel" },
    { name: "Gray 700", color: "#46515d", role: "Divider" },
    { name: "Gray 400", color: "#a8b4bf", role: "Muted text" },
    { name: "Health Paper", color: "#eef3f7", role: "Light surface" },
    { name: "Recovery", color: "#a46cff", role: "Module" },
    { name: "Nutrition", color: "#76e6ae", role: "Module" },
    { name: "Biomarkers", color: "#82d8ff", role: "Module" },
    { name: "Coaching", color: "#f6bf4f", role: "Module" },
    { name: "Success", color: "#76e6ae", role: "Semantic" },
    { name: "Warning", color: "#f6bf4f", role: "Semantic" },
    { name: "Error", color: "#ff6b6b", role: "Semantic" },
    { name: "Info", color: "#82d8ff", role: "Semantic" },
  ];
  const active = swatches.find((item) => item.name === selectedColor) ?? swatches[1];
  return (
    <div className="color-system-lab">
      <div className="foundation-swatches">
        {swatches.map((item) => (
          <button className={item.name === active.name ? "is-selected" : ""} key={item.name} onClick={() => setSelectedColor(item.name)} style={{ "--swatch": item.color }} type="button">
            <i />
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </button>
        ))}
      </div>
      <aside className="color-detail" style={{ "--swatch": active.color }}>
        <i />
        <span>{active.role}</span>
        <strong>{active.name}</strong>
        <dl>
          <div><dt>HEX</dt><dd>{active.color}</dd></div>
          <div><dt>RGB</dt><dd>{hexToRgb(active.color)}</dd></div>
          <div><dt>HSL</dt><dd>{hexToHsl(active.color)}</dd></div>
          <div><dt>OKLCH</dt><dd>{hexToOklchLabel(active.color)}</dd></div>
        </dl>
        <p>{active.role === "Module" ? "Use only to identify health domains and meaningful state." : "Neutral colors carry structure, depth and readability."}</p>
        <button className="glass-control" type="button"><Copy size={14} />Copy value</button>
      </aside>
    </div>
  );
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}

function hexToHsl(hex) {
  const [r, g, b] = hexToRgb(hex).split(" ").map((item) => Number(item) / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    h /= 6;
  }
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

function hexToOklchLabel(hex) {
  const [r, g, b] = hexToRgb(hex).split(" ").map(Number);
  const lightness = Math.round(((Math.max(r, g, b) + Math.min(r, g, b)) / 510) * 100);
  const chroma = Math.round(((Math.max(r, g, b) - Math.min(r, g, b)) / 255) * 100) / 100;
  return `${lightness}% ${chroma} approx`;
}

function TypeFoundation() {
  return (
    <div className="type-foundation">
      <h2>Recovery is stable</h2>
      <h3>Lower-body strength is acceptable today.</h3>
      <p>Training can proceed with a moderate load and a shorter finisher.</p>
      <div><strong>84</strong><span>/100 Health Score</span></div>
    </div>
  );
}

function IconFoundation() {
  const icons = [["Recovery", HeartPulse], ["Signal", Activity], ["Coach", MessageCircle], ["Status", Check], ["Alert", AlertTriangle], ["AI", Sparkles]];
  return (
    <div className="icon-foundation">
      {icons.map(([label, Icon], index) => (
        <button className={index === 0 ? "is-selected" : ""} key={label} type="button">
          <i><Icon size={22} /></i>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

function IconographyLibraryPage() {
  const iconGroups = [
    {
      label: "Core App",
      description: "Navigation and repeated utility actions.",
      items: [
        ["Today", Activity],
        ["Plan", Check],
        ["Progress", Gauge],
        ["Coach", MessageCircle],
        ["Search", Search],
        ["Filter", Filter],
        ["Notify", Bell],
        ["Settings", Settings],
        ["Add", Plus],
        ["Edit", Pencil],
        ["Close", X],
      ],
    },
    {
      label: "Health Data",
      description: "Signals that explain state, trend and evidence.",
      items: [
        ["Health Score", HeartPulse],
        ["Recovery", HeartPulse],
        ["Sleep", Moon],
        ["HRV / Signal", Activity],
        ["Biomarkers", Dna],
        ["Body Composition", Scale],
        ["Training", Dumbbell],
        ["Report", FileText],
        ["Trend", LineIcon],
      ],
    },
    {
      label: "Food Tracker",
      description: "Nutrition logging, quantity editing and data summaries.",
      items: [
        ["Food Tracker", Utensils],
        ["Meal", Calendar],
        ["Food Item", Utensils],
        ["Scan", Barcode],
        ["Quantity", Scale],
        ["Macros", PieChart],
        ["Nutrition Summary", Gauge],
        ["Review Request", ClipboardIcon],
      ],
    },
    {
      label: "AI + Professional",
      description: "Clear distinction between instant AI and real professional guidance.",
      items: [
        ["AI Guidance", Bot],
        ["AI Summary", Brain],
        ["Professional", UserRound],
        ["Specialist Review", Stethoscope],
        ["Book Analysis", CalendarCheck],
        ["Consultation", MessageCircle],
        ["Paid Service", CreditCard],
        ["Review Result", CircleCheck],
      ],
    },
    {
      label: "States",
      description: "Operational state, never color-only.",
      items: [
        ["Complete", Check],
        ["Warning", AlertTriangle],
        ["Locked", Lock],
        ["Loading", Loader2],
        ["Scheduled", Clock],
        ["Sync Failed", WifiOff],
      ],
    },
  ];

  return (
    <section className="component-page iconography-page">
      <header className="component-page-intro">
        <span>Iconography</span>
        <strong>Symbols clarify app meaning, not decoration</strong>
        <p>RE-COMP icons identify domains, actions and guidance source. They stay quiet by default and gain emphasis only through state, selected context or module accent.</p>
      </header>

      {iconGroups.map((group) => (
        <section className="component-section" key={group.label}>
          <div>
            <span>{group.label}</span>
            <strong>{group.description}</strong>
          </div>
          <div className="recomp-icon-grid">
            {group.items.map(([label, Icon], index) => (
              <button className={index === 0 ? "is-selected" : ""} key={label} type="button">
                <i><Icon size={24} strokeWidth={1.85} /></i>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </section>
      ))}

      <section className="component-section">
        <div>
          <span>States</span>
          <strong>Icon state is expressed by surface, text and focus, not color alone</strong>
        </div>
        <div className="icon-state-row">
          {["Default", "Hover", "Pressed", "Focused", "Selected", "Disabled"].map((state) => (
            <button className={`icon-state-sample is-${state.toLowerCase()}`} disabled={state === "Disabled"} key={state} type="button">
              <Sparkles size={20} strokeWidth={1.85} />
              <span>{state}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Rules</span>
          <strong>System constraints</strong>
        </div>
        <div className="token-list">
          <span>stroke 1.75-2px</span>
          <span>16 / 20 / 24 / 32px</span>
          <span>labels required when meaning is not obvious</span>
          <span>module accents only for meaning</span>
          <span>icon buttons keep 44px touch target</span>
        </div>
      </section>
    </section>
  );
}

function LineIcon(props) {
  return (
    <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path d="M4 16.5c2.5 0 3.4-6 6-6s3.4 5 6 5 3.4-7 4-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={props.strokeWidth ?? 1.85} />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path d="M9 5.5h6M10 4h4l1 2H9l1-2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={props.strokeWidth ?? 1.85} />
      <path d="M7 6h-.5A2.5 2.5 0 0 0 4 8.5v9A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 17.5 6H17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={props.strokeWidth ?? 1.85} />
      <path d="m8.5 13 2 2 5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={props.strokeWidth ?? 1.85} />
    </svg>
  );
}

function MotionFoundation() {
  return (
    <div className="motion-foundation">
      <span className="motion-track"><i /></span>
      <div><b>150ms</b><span>Tap feedback</span></div>
      <div><b>250ms</b><span>Control state</span></div>
      <div><b>400ms</b><span>Panel entrance</span></div>
    </div>
  );
}

function LayoutFoundation() {
  return (
    <div className="layout-foundation">
      <section>Primary decision</section>
      <aside>Signals</aside>
      <aside>Controls</aside>
    </div>
  );
}

function TokenFoundation() {
  return (
    <div className="token-foundation">
      {["Accent", "Glass", "Blur", "Radius", "Shadow", "Density"].map((item) => <span key={item}>{item}<b /></span>)}
    </div>
  );
}

function ButtonPreview({ forcedState, size = "M", variant = "Primary" }) {
  return (
    <div className="button-preview">
      <button className={`button is-${variant.toLowerCase()} is-${forcedState.toLowerCase()} size-${size.toLowerCase()}`} disabled={forcedState === "Disabled"} type="button">
        {forcedState === "Loading" && <Loader2 size={14} />}
        Recommended action
        {variant === "Split Button" && <ArrowRight size={14} />}
      </button>
      <p>{variant} / {size} / {forcedState}</p>
    </div>
  );
}

function ButtonLibraryPage() {
  const usageItems = [
    { label: "Committed action", variant: "Primary", copy: "Use once per decision area." },
    { label: "Secondary action", variant: "Secondary", copy: "Use for safe alternatives." },
    { label: "Floating context", variant: "Glass", copy: "Use only above content or overlays." },
  ];

  return (
    <section className="component-page button-page">
      <header className="component-page-intro">
        <span>Actions</span>
        <strong>Buttons are physical controls with clear intent</strong>
        <p>All variants, sizes, states and background checks live in one place. Glass is reserved for floating or contextual controls.</p>
      </header>

      <section className="component-section">
        <div>
          <span>Variants</span>
          <strong>Action hierarchy before decoration</strong>
        </div>
        <div className="button-library-grid">
          {buttonVariants.map((variant) => (
            <div className="button-library-cell" key={variant}>
              <button className={`button is-${variant.toLowerCase()}`} type="button">
                {variant === "Loading" && <Loader2 size={14} />}
                {variant}
              </button>
              <p>{variant}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Sizes</span>
          <strong>Same object, different density</strong>
        </div>
        <div className="button-size-stack">
          {buttonSizes.map((size) => (
            <div key={size}>
              <button className={`button is-primary size-${size.toLowerCase()}`} type="button">{size}</button>
              <span>{size}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>States</span>
          <strong>Feedback is visible and physical</strong>
        </div>
        <div className="button-library-grid">
          {buttonStates.map((state) => (
            <div className="button-library-cell" key={state}>
              <button className={`button is-primary is-${state.toLowerCase()}`} disabled={state === "Disabled"} type="button">
                {state === "Loading" && <Loader2 size={14} />}
                {state}
              </button>
              <p>{state}</p>
            </div>
          ))}
        </div>
      </section>

      <ButtonBackgroundShowcase compact />

      <section className="component-section">
        <div>
          <span>Usage</span>
          <strong>Few roles, used consistently</strong>
        </div>
        <div className="button-usage-grid">
          {usageItems.map((item) => (
            <article key={item.label}>
              <button className={`button is-${item.variant.toLowerCase()}`} type="button">{item.label}</button>
              <strong>{item.label}</strong>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Tokens</span>
          <strong>Button depends on shared system values</strong>
        </div>
        <div className="token-chip-grid">
          {["radius", "typography", "spacing", "accent", "shadow", "motion", "focus ring"].map((token) => <span key={token}>{token}</span>)}
        </div>
      </section>
    </section>
  );
}

function InputPreview({ state = "Default", variant = "Text" }) {
  const disabled = state === "Disabled" || state === "Loading";
  const value = state === "Typing" ? "Sleep debt is improving" : "";
  const commonProps = {
    disabled,
    placeholder: variant === "Search" ? "Search biomarkers" : variant === "Command" ? "Ask what changed today" : "Enter value",
    defaultValue: value,
  };

  return (
    <div className="input-preview">
      <p className="input-demo-label">{variant} / {state}</p>
      <label className={`field is-${state.toLowerCase()} is-${variant.toLowerCase()}`}>
        <span>{variant === "Command" ? "Coach command" : variant === "Range" ? "Training load" : "Recovery note"}</span>
        {variant === "Textarea" ? <textarea {...commonProps} /> : variant === "Range" ? <input disabled={disabled} max="100" min="0" type="range" defaultValue="64" /> : <input {...commonProps} type={variant === "Password" ? "password" : variant === "Email" ? "email" : variant === "Number" ? "number" : "text"} />}
        {state === "Loading" && <Loader2 className="field-loader" size={16} />}
        {state === "Error" && <small>Use a value inside today&apos;s safe range.</small>}
        {state === "Success" && <small>Saved to today&apos;s recovery context.</small>}
      </label>
    </div>
  );
}

function InputLibraryPage() {
  const sizeRows = [
    ["Compact", "input-size-compact", "32px"],
    ["Default", "input-size-default", "40px"],
    ["Comfortable", "input-size-comfortable", "48px"],
    ["Large", "input-size-large", "56px"],
  ];
  const standardTypes = ["Text", "Email", "Password", "Number"];
  const glassTypes = ["Search", "Command"];

  return (
    <section className="component-page input-page">
      <header className="component-page-intro">
        <span>Inputs</span>
        <strong>Inputs are controls, not cards</strong>
        <p>Standard fields use soft-metal surfaces with real app heights. Search and command inputs may use restrained Liquid Glass because they behave like control layers.</p>
      </header>

      <section className="component-section">
        <div>
          <span>Types</span>
          <strong>Common app fields stay compact</strong>
        </div>
        <div className="input-library-grid">
          {standardTypes.map((type) => <InputPreview key={type} state="Default" variant={type} />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Sizes</span>
          <strong>Height communicates density</strong>
        </div>
        <div className="input-size-stack">
          {sizeRows.map(([label, className, height]) => (
            <label className={`field ${className}`} key={label}>
              <span>{label} / {height}</span>
              <input placeholder={`${label} field`} />
            </label>
          ))}
          <label className="field">
            <span>Textarea / 96px min</span>
            <textarea placeholder="Longer recovery note" />
          </label>
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>States</span>
          <strong>Validation is explicit and readable</strong>
        </div>
        <div className="input-library-grid">
          {inputStates.map((state) => <InputPreview key={state} state={state} variant="Text" />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Search / Command</span>
          <strong>Glass only where the field floats</strong>
        </div>
        <div className="input-library-grid">
          {glassTypes.map((type) => <InputPreview key={type} state="Typing" variant={type} />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Tokens</span>
          <strong>Input depends on shared field values</strong>
        </div>
        <div className="token-chip-grid">
          {["surface", "stroke", "radius", "typography", "spacing", "focus ring", "semantic colors"].map((token) => <span key={token}>{token}</span>)}
        </div>
      </section>
    </section>
  );
}

function SelectionPreview({ selectedChip, setSelectedChip, state = "Selected", variant = "Switch" }) {
  const [checked, setChecked] = useState(state === "Selected");
  const [segment, setSegment] = useState("Recovery");
  const disabled = state === "Disabled";
  const isSelected = state === "Selected" || checked;

  if (variant === "Switch") {
    return (
      <div className="selection-preview">
        <button aria-pressed={isSelected} className={`switch-control is-${state.toLowerCase()} ${isSelected ? "is-on" : ""}`} disabled={disabled} onClick={() => setChecked(!checked)} type="button">
          <span />
        </button>
        <p>Recovery guidance {isSelected ? "enabled" : "paused"} / {state}</p>
      </div>
    );
  }

  if (variant === "Checkbox" || variant === "Radio") {
    return (
      <div className="selection-preview">
        <button aria-pressed={isSelected} className={`check-control is-${variant.toLowerCase()} is-${state.toLowerCase()} ${isSelected ? "is-selected" : ""}`} disabled={disabled} onClick={() => setChecked(!checked)} type="button">
          <i>{isSelected && (variant === "Checkbox" ? <Check size={15} /> : null)}</i>
          <span>{variant === "Checkbox" ? "Recovery enabled" : "Balanced plan"}</span>
        </button>
        <p>{variant} / {state}</p>
      </div>
    );
  }

  if (variant === "Segment") {
    return (
      <div className="selection-preview">
        <div className="segment-control">
          {["Recovery", "Nutrition", "Biomarkers"].map((item) => (
            <button className={segment === item ? "is-selected" : ""} key={item} onClick={() => setSegment(item)} type="button">{item}</button>
          ))}
        </div>
        <p>Segment / {segment}</p>
      </div>
    );
  }

  return (
    <div className="selection-lab selection-preview">
      {["Recovery", "Nutrition", "Biomarkers", "Coaching"].map((item) => (
        <button className={`${selectedChip === item ? "is-selected" : ""} is-${state.toLowerCase()}`} disabled={disabled} key={item} onClick={() => setSelectedChip(item)} type="button">{selectedChip === item && <Check size={15} />}{item}</button>
      ))}
      <p>{variant} / {state}</p>
    </div>
  );
}

function SelectionLibraryPage() {
  const [segment, setSegment] = useState("Recovery");
  const [checked, setChecked] = useState(true);
  const [radio, setRadio] = useState("Balanced");
  const [switchOn, setSwitchOn] = useState(true);
  const [chip, setChip] = useState("Recovery");
  const chips = ["Recovery", "Nutrition", "Biomarkers", "Coaching"];

  return (
    <section className="component-page selection-page">
      <header className="component-page-intro">
        <span>Selection</span>
        <strong>Controls expose choice, state and commitment clearly</strong>
        <p>Each control is shown as a real app component, grouped by type. Background tests are removed here because selection controls do not need a generic material tester.</p>
      </header>

      <section className="component-section">
        <div>
          <span>Segmented Control</span>
          <strong>One visible context at a time</strong>
        </div>
        <div className="selection-demo-row">
          <div className="segment-control is-library">
            {["Recovery", "Nutrition", "Biomarkers"].map((item) => (
              <button className={segment === item ? "is-selected" : ""} key={item} onClick={() => setSegment(item)} type="button">{item}</button>
            ))}
          </div>
          <p>{segment} selected</p>
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Checkbox / Radio</span>
          <strong>Explicit selection for forms and plans</strong>
        </div>
        <div className="selection-control-grid">
          <button aria-pressed={checked} className={`check-control ${checked ? "is-selected" : ""}`} onClick={() => setChecked(!checked)} type="button">
            <i>{checked && <Check size={15} />}</i>
            <span>Recovery enabled</span>
          </button>
          {["Balanced", "Performance", "Recovery"].map((item) => (
            <button aria-pressed={radio === item} className={`check-control is-radio ${radio === item ? "is-selected" : ""}`} key={item} onClick={() => setRadio(item)} type="button">
              <i />
              <span>{item}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Switch</span>
          <strong>Immediate on/off settings</strong>
        </div>
        <div className="selection-demo-row">
          <button aria-pressed={switchOn} className={`switch-control ${switchOn ? "is-on" : ""}`} onClick={() => setSwitchOn(!switchOn)} type="button">
            <span />
          </button>
          <p>Coach nudges {switchOn ? "enabled" : "paused"}</p>
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Chip / Tag</span>
          <strong>Lightweight filters and module tags</strong>
        </div>
        <div className="selection-chip-grid">
          {chips.map((item) => (
            <button className={chip === item ? "is-selected" : ""} key={item} onClick={() => setChip(item)} type="button">
              {chip === item && <Check size={14} />}
              {item}
            </button>
          ))}
        </div>
      </section>
    </section>
  );
}

function MenuPreview({ state = "Open", variant = "Dropdown" }) {
  const [selectedOption, setSelectedOption] = useState("Recovery");
  const isOpen = state !== "Closed";
  const disabled = state === "Disabled";
  const options = ["Recovery", "Nutrition", "Biomarkers", "Coaching"];
  const searching = state === "Searching" || variant === "Combobox" || variant === "Search Select";
  const multi = variant === "Multi Select";
  const context = variant === "Context Menu";

  return (
    <div className={`menu-preview is-${variant.toLowerCase().replaceAll(" ", "-")} is-${state.toLowerCase()}`}>
      <section className="menu-context-surface">
        <span>Context</span>
        <strong>{context ? "Training plan row" : "Health module"}</strong>
        <p>{variant} / {state}</p>
        <button className="glass-control" disabled={disabled} type="button">
          {selectedOption}
          <ArrowRight size={14} />
        </button>
      </section>
      {isOpen && !disabled && (
        <div className={`menu-surface ${context ? "is-context" : ""}`}>
          {searching && (
            <label className="menu-search">
              <Search size={14} />
              <input defaultValue={state === "Searching" ? "rec" : ""} placeholder="Search options" />
            </label>
          )}
          {multi && (
            <div className="menu-token-row">
              {["Recovery", "Biomarkers"].map((item) => <span key={item}>{item}<X size={12} /></span>)}
            </div>
          )}
          <div className="menu-options">
            {(context ? ["Open detail", "Pin row", "Compare", "Hide signal"] : options).map((item) => {
              const active = item === selectedOption || (state === "Selected" && item === "Recovery");
              return (
                <button className={active ? "is-active" : ""} key={item} onClick={() => setSelectedOption(item)} type="button">
                  <span>{item}</span>
                  {active ? <Check size={14} /> : <ArrowRight size={13} />}
                </button>
              );
            })}
          </div>
        </div>
      )}
      {disabled && <p className="small-note">Disabled menus preserve the trigger but remove the overlay.</p>}
    </div>
  );
}

function MenuLibraryPage() {
  return (
    <section className="component-page menu-page">
      <header className="component-page-intro">
        <span>Select / Menu</span>
        <strong>Menus reveal choices without taking over the screen</strong>
        <p>Triggers stay solid or soft-metal. The floating menu surface may use restrained Liquid Glass because it is a transient control layer.</p>
      </header>

      <section className="component-section">
        <div>
          <span>Variants</span>
          <strong>Choose the smallest menu that explains the choice</strong>
        </div>
        <div className="menu-library-grid">
          {menuTypes.map((type) => <MenuPreview key={type} state="Open" variant={type} />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>States</span>
          <strong>Open, selected and disabled must be obvious</strong>
        </div>
        <div className="menu-library-grid">
          {menuStates.map((state) => <MenuPreview key={state} state={state} variant="Dropdown" />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Tokens</span>
          <strong>Menu depends on trigger and overlay values</strong>
        </div>
        <div className="token-chip-grid">
          {["trigger surface", "overlay glass", "radius", "shadow", "motion", "focus ring", "active option"].map((token) => <span key={token}>{token}</span>)}
        </div>
      </section>
    </section>
  );
}

function CardPreview({ state = "Interactive", variant = "Metric" }) {
  const [expanded, setExpanded] = useState(state === "Expanded");
  const cardData = {
    Metric: ["Health Score", "84", "Recovery and consistency are aligned. A moderate strength session fits today."],
    Recovery: ["Recovery", "82%", "Sleep debt is the main limiter. Keep the training window moderate."],
    Workout: ["Training", "25 min", "Lower-body strength remains appropriate with controlled volume."],
    Nutrition: ["Nutrition", "High protein", "Post-session meal timing supports recovery quality."],
    Biomarker: ["HRV", "78 ms", "Trend is improving across the last three readings."],
    Chart: ["Trend", "+7%", "Weekly recovery trend is stable with one small dip."],
    Notification: ["Coach Note", "Ready", "A recommendation is available for today&apos;s plan."],
    Expandable: ["Recovery Detail", "Open", "Tap to reveal supporting signals and guidance."],
  }[variant] ?? ["Health Score", "84", "Recovery and consistency are aligned."];
  const isLoading = state === "Loading";
  const isError = state === "Error";

  return (
    <article className={`live-card card-preview is-${variant.toLowerCase()} is-${state.toLowerCase()}`}>
      <header>
        <span>{cardData[0]}</span>
        {state !== "Static" && <button className="glass-control" onClick={() => setExpanded(!expanded)} type="button">{expanded ? "Close" : "Open"} <ArrowRight size={14} /></button>}
      </header>
      {isLoading ? <div className="card-skeleton"><i /><i /><i /></div> : isError ? <strong>Review needed</strong> : <strong>{cardData[1]}</strong>}
      <p>{isError ? "Source data is incomplete. Confirm values before changing guidance." : cardData[2]}</p>
      {variant === "Chart" && <LineChart />}
      {(expanded || state === "Expanded") && <div className="card-detail"><span>Signals</span><p>Sleep 7h 45m - HRV improving - soreness low</p></div>}
    </article>
  );
}

function CardLibraryPage() {
  return (
    <section className="component-page card-page">
      <header className="component-page-intro">
        <span>Surfaces</span>
        <strong>Cards contain stable health content</strong>
        <p>Cards are soft-metal surfaces, not glass. Glass may appear only as a small control on top of a card.</p>
      </header>

      <section className="component-section">
        <div>
          <span>Variants</span>
          <strong>Health content by role</strong>
        </div>
        <div className="library-card-grid">
          {cardTypes.slice(0, 8).map((type) => <CardPreview key={type} state="Static" variant={type} />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>States</span>
          <strong>Stable, interactive and unavailable states</strong>
        </div>
        <div className="library-card-grid">
          {cardStates.map((state) => <CardPreview key={state} state={state} variant="Metric" />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Tokens</span>
          <strong>Card depends on surface values</strong>
        </div>
        <div className="token-chip-grid">
          {["soft metal", "border", "radius", "typography", "spacing", "shadow", "module accent"].map((token) => <span key={token}>{token}</span>)}
        </div>
      </section>
    </section>
  );
}

function FeedbackPreview({ setToastOpen, state = "Visible", toastOpen, variant = "Toast" }) {
  const visible = state !== "Dismissed" && toastOpen;
  const isError = state === "Error";
  const isSuccess = state === "Success";
  const title = isError ? "Biomarker import needs review" : isSuccess ? "Recovery goal updated" : "Recovery detail";
  const body = isError ? "Confirm values before changing guidance." : isSuccess ? "Saved to today&apos;s plan." : "Sleep debt is the main contributor today.";

  if (variant === "Alert") {
    return (
      <div className="feedback-stage">
        <div className={`alert feedback-surface is-${state.toLowerCase()}`}>
          {isError ? <AlertTriangle size={18} /> : <Check size={18} />}
          <strong>{title}</strong>
          <p>{body}</p>
          <button className="button is-secondary size-s" type="button">Review</button>
        </div>
      </div>
    );
  }

  if (variant === "Sheet") {
    return (
      <div className="feedback-stage">
        <section className={`sheet-surface feedback-surface is-${state.toLowerCase()}`}>
          <i />
          <span>Recovery detail</span>
          <strong>Sleep debt is the main contributor today.</strong>
          <p>Keep the training window moderate and prioritize protein after the session.</p>
          <button className="button is-primary size-s" type="button">Apply to plan</button>
        </section>
      </div>
    );
  }

  if (variant === "Popover" || variant === "Tooltip") {
    return (
      <div className="feedback-stage">
        <button className="button is-glass" type="button">{variant === "Popover" ? "Open signal" : "Hover target"}</button>
        <div className={`popover-surface feedback-surface is-${variant.toLowerCase()} is-${state.toLowerCase()}`}>
          <strong>{variant === "Popover" ? "HRV trend" : "Training load"}</strong>
          <p>{variant === "Popover" ? "Improving across three readings." : "Current weekly intensity."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="feedback-stage">
      {visible && (
        <div className={`toast feedback-surface is-${state.toLowerCase()}`}>
          {isError ? <AlertTriangle size={17} /> : <Check size={17} />}
          <span>{title}</span>
          <button onClick={() => setToastOpen(false)} type="button"><X size={14} /></button>
        </div>
      )}
      <button className="button is-glass" onClick={() => setToastOpen(true)} type="button">Show toast</button>
    </div>
  );
}

function FeedbackLibraryPage({ setToastOpen, toastOpen }) {
  return (
    <section className="component-page feedback-page">
      <header className="component-page-intro">
        <span>Overlays</span>
        <strong>Feedback appears, explains and gets out of the way</strong>
        <p>Toast, alert, sheet and tooltip surfaces are separated by role. Toasts use rounded rectangles, never oversized capsules.</p>
      </header>

      <section className="component-section">
        <div>
          <span>Toast</span>
          <strong>Brief confirmation</strong>
        </div>
        <div className="feedback-library-grid">
          {["Visible", "Success", "Error"].map((state) => <FeedbackPreview key={state} setToastOpen={setToastOpen} state={state} toastOpen={toastOpen} variant="Toast" />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Alert / Sheet</span>
          <strong>More context when the decision matters</strong>
        </div>
        <div className="feedback-library-grid">
          <FeedbackPreview setToastOpen={setToastOpen} state="Error" toastOpen variant="Alert" />
          <FeedbackPreview setToastOpen={setToastOpen} state="Visible" toastOpen variant="Sheet" />
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Popover / Tooltip</span>
          <strong>Small help attached to a target</strong>
        </div>
        <div className="feedback-library-grid">
          <FeedbackPreview setToastOpen={setToastOpen} state="Visible" toastOpen variant="Popover" />
          <FeedbackPreview setToastOpen={setToastOpen} state="Visible" toastOpen variant="Tooltip" />
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Tokens</span>
          <strong>Feedback depends on transient layer values</strong>
        </div>
        <div className="token-chip-grid">
          {["glass", "soft metal", "shadow", "blur", "radius", "motion", "focus trap"].map((token) => <span key={token}>{token}</span>)}
        </div>
      </section>
    </section>
  );
}

function ChartPreview({ state = "Animated", variant = "Line" }) {
  const isLoading = state === "Loading";
  const isEmpty = state === "Empty";
  const isError = state === "Error";

  return (
    <article className={`chart-panel is-${variant.toLowerCase()} is-${state.toLowerCase()}`}>
      <header>
        <span>{variant}</span>
        <strong>{isError ? "Review source" : isEmpty ? "No signal yet" : "Recovery trend"}</strong>
      </header>
      {isLoading && <div className="card-skeleton"><i /><i /><i /></div>}
      {isEmpty && <p className="small-note">No readings are available for this interval.</p>}
      {isError && <p className="small-note">The imported data source is incomplete.</p>}
      {!isLoading && !isEmpty && !isError && (
        <>
          {variant === "Line" && <LineChart selected={state === "Selected"} />}
          {variant === "Bar" && <BarChart />}
          {variant === "Ring" && <RingChart />}
          {variant === "Gauge" && <GaugeChart />}
          {variant === "Sparkline" && <SparklineChart />}
        </>
      )}
      <footer>
        <span>Last 7 days</span>
        <b>+7%</b>
      </footer>
    </article>
  );
}

function TablePreview({ state = "Default", variant = "Simple" }) {
  const [selectedRow, setSelectedRow] = useState("HRV");
  const [sortKey, setSortKey] = useState("value");
  const isDense = variant === "Dense";
  const isLoading = state === "Loading";
  const isEmpty = state === "Empty";
  const rows = [
    { id: "HRV", metric: "HRV", value: "78 ms", trend: "+6%", module: "Recovery", status: "Improving" },
    { id: "Sleep", metric: "Sleep", value: "7h 45m", trend: "+18m", module: "Recovery", status: "Stable" },
    { id: "Protein", metric: "Protein", value: "142 g", trend: "92%", module: "Nutrition", status: "On track" },
    { id: "Load", metric: "Training Load", value: "62", trend: "-4%", module: "Coaching", status: "Moderate" },
  ];
  const visibleRows = state === "Filtered" ? rows.filter((row) => row.module === "Recovery") : rows;
  const sortedRows = state === "Sorted" ? [...visibleRows].sort((a, b) => a.metric.localeCompare(b.metric)) : visibleRows;

  return (
    <article className={`table-panel is-${variant.toLowerCase()} is-${state.toLowerCase()}`}>
      <header className="table-toolbar">
        <div>
          <span>{variant}</span>
          <strong>Biomarker rows</strong>
        </div>
        <div className="table-actions">
          <button className="glass-control" type="button"><Search size={14} />Filter</button>
          <button className="glass-control" onClick={() => setSortKey(sortKey === "value" ? "metric" : "value")} type="button">Sort {sortKey}</button>
        </div>
      </header>
      {isLoading && <div className="table-skeleton"><i /><i /><i /><i /></div>}
      {isEmpty && <div className="table-empty"><Code2 size={22} /><strong>No rows in this interval</strong><p>Empty states keep the structure visible without inventing data.</p></div>}
      {!isLoading && !isEmpty && (
        <div className="data-table" role="table" aria-label="Biomarker data table">
          <div className="data-row is-head" role="row">
            <button onClick={() => setSortKey("metric")} role="columnheader" type="button">Metric</button>
            <button onClick={() => setSortKey("value")} role="columnheader" type="button">Value</button>
            <span role="columnheader">Trend</span>
            <span role="columnheader">Module</span>
            <span role="columnheader">Status</span>
          </div>
          {sortedRows.map((row) => {
            const selected = state === "Selected" ? row.id === selectedRow : false;
            return (
              <button
                className={`data-row ${selected ? "is-selected" : ""}`}
                key={row.id}
                onClick={() => setSelectedRow(row.id)}
                role="row"
                type="button"
              >
                <strong role="cell">{variant === "Expandable" && selected ? "Expanded " : ""}{row.metric}</strong>
                <span role="cell">{variant === "Editable" && selected ? <input aria-label={`${row.metric} value`} defaultValue={row.value} /> : row.value}</span>
                <span role="cell">{row.trend}</span>
                <span className={`module-pill is-${row.module.toLowerCase()}`} role="cell">{row.module}</span>
                <span role="cell">{row.status}</span>
              </button>
            );
          })}
        </div>
      )}
      {variant === "Pinned" && !isLoading && !isEmpty && <footer className="table-summary"><span>Pinned summary</span><b>2 recovery signals changed</b></footer>}
    </article>
  );
}

function TableLibraryPage() {
  return (
    <section className="component-page table-page">
      <header className="component-page-intro">
        <span>Tables</span>
        <strong>Tables compare health rows without becoming dashboards</strong>
        <p>Tables are dense reading surfaces. Responsive behavior is real here: small screens should scroll rows or switch to list rows.</p>
      </header>

      <section className="component-section">
        <div>
          <span>Variants</span>
          <strong>Density and row behavior</strong>
        </div>
        <div className="library-table-grid">
          {tableTypes.map((type) => <TablePreview key={type} state="Default" variant={type} />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>States</span>
          <strong>Loading and empty states preserve structure</strong>
        </div>
        <div className="library-table-grid">
          {tableStates.map((state) => <TablePreview key={state} state={state} variant="Simple" />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Tokens</span>
          <strong>Table depends on dense data values</strong>
        </div>
        <div className="token-chip-grid">
          {["surface", "row height", "grid stroke", "typography", "module color", "focus", "empty state"].map((token) => <span key={token}>{token}</span>)}
        </div>
      </section>
    </section>
  );
}

function MediaPreview({ state = "Empty", variant = "Upload" }) {
  const isEmpty = state === "Empty";
  const isDragging = state === "Dragging";
  const isUploading = state === "Uploading";
  const isComplete = state === "Complete";
  const isError = state === "Error";
  const galleryItems = ["Scan", "Posture", "Range"];

  return (
    <article className={`media-panel is-${variant.toLowerCase()} is-${state.toLowerCase()}`}>
      <header className="media-toolbar">
        <div>
          <span>{variant}</span>
          <strong>{isError ? "Review media source" : isComplete ? "Media ready" : "Body composition import"}</strong>
        </div>
        <div className="media-actions">
          <button className="glass-control" type="button"><Search size={14} />Inspect</button>
          <button className="glass-control" type="button"><ArrowRight size={14} />Use</button>
        </div>
      </header>
      <section className={`media-stage ${isDragging ? "is-dragging" : ""}`}>
        {variant === "Gallery" && (
          <div className="media-gallery">
            {galleryItems.map((item) => <span key={item}>{item}</span>)}
          </div>
        )}
        {variant === "Attachment" && (
          <div className="attachment-card">
            <Code2 size={22} />
            <div><strong>DEXA-report.pdf</strong><span>2.4 MB - encrypted source</span></div>
          </div>
        )}
        {(variant === "Image" || variant === "Upload" || variant === "Viewer") && (
          <div className="media-preview-frame">
            <div className="scan-silhouette" />
            <span>{variant === "Viewer" ? "Inspection frame" : isEmpty ? "Drop source here" : "Preview"}</span>
          </div>
        )}
        {isEmpty && <p className="media-message">Awaiting image, PDF or wearable export.</p>}
        {isDragging && <p className="media-message">Release to attach to this health record.</p>}
        {isUploading && <div className="upload-progress"><span><b style={{ width: "68%" }} /></span><small>Uploading 68%</small></div>}
        {isComplete && <div className="media-confirm"><Check size={18} />Validated and ready for review</div>}
        {isError && <div className="media-error"><AlertTriangle size={18} />File type or metadata needs review</div>}
      </section>
    </article>
  );
}

function MediaLibraryPage() {
  return (
    <section className="component-page media-page">
      <header className="component-page-intro">
        <span>Media / Tier 2</span>
        <strong>Media remains inspectable, not decorative</strong>
        <p>Media is useful soon, but not part of the first core library pass. Keep frames stable and readable; do not use glass-heavy image decoration.</p>
      </header>

      <section className="component-section">
        <div>
          <span>Variants</span>
          <strong>Stable frames for sources and attachments</strong>
        </div>
        <div className="media-library-grid">
          {mediaTypes.map((type) => <MediaPreview key={type} state="Complete" variant={type} />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>States</span>
          <strong>Import state must be explicit</strong>
        </div>
        <div className="media-library-grid">
          {mediaStates.map((state) => <MediaPreview key={state} state={state} variant="Upload" />)}
        </div>
      </section>
    </section>
  );
}

function DataDisplayPreview({ state = "Default", variant = "KPI" }) {
  const [selectedStep, setSelectedStep] = useState("Sleep");
  const loading = state === "Loading";
  const empty = state === "Empty";
  const warning = state === "Warning";
  const selected = state === "Selected";
  const statusCopy = warning ? "Needs review" : selected ? "Selected" : "Stable";

  if (variant === "Badge" || variant === "Status") {
    return (
      <section className={`data-display-panel is-${variant.toLowerCase()} is-${state.toLowerCase()}`}>
        <header><span>{variant}</span><strong>Health state markers</strong></header>
        <div className="status-cluster">
          {["Recovery", "Nutrition", "Biomarkers", "Coaching"].map((item) => (
            <button className={`${selected && item === "Recovery" ? "is-selected" : ""} ${warning && item === "Biomarkers" ? "is-warning" : ""}`} key={item} type="button">
              <i />
              <span>{item}</span>
              <b>{item === "Biomarkers" && warning ? "Review" : "OK"}</b>
            </button>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "Avatar") {
    return (
      <section className={`data-display-panel is-avatar is-${state.toLowerCase()}`}>
        <header><span>Avatar</span><strong>Identity with presence</strong></header>
        <div className="avatar-row">
          {["MR", "CS", "AI"].map((item, index) => (
            <button className={index === 0 && selected ? "is-selected" : ""} key={item} type="button">
              <span>{item}</span>
              <i />
            </button>
          ))}
        </div>
        <p>{empty ? "No assigned coach yet." : "Presence is quiet and functional."}</p>
      </section>
    );
  }

  if (variant === "Progress") {
    return (
      <section className={`data-display-panel is-progress is-${state.toLowerCase()}`}>
        <header><span>Progress</span><strong>{loading ? "Syncing source" : "Weekly adherence"}</strong></header>
        <div className="progress-stack">
          {["Sleep", "Protein", "Mobility"].map((item, index) => (
            <label key={item}>
              <span>{item}</span>
              <b>{loading ? "--" : `${82 - index * 14}%`}</b>
              <i><em style={{ width: loading ? "38%" : `${82 - index * 14}%` }} /></i>
            </label>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "Timeline") {
    return (
      <section className={`data-display-panel is-timeline is-${state.toLowerCase()}`}>
        <header><span>Timeline</span><strong>Decision sequence</strong></header>
        <div className="timeline-list">
          {["Sleep", "Recovery", "Plan"].map((item, index) => (
            <button className={selectedStep === item ? "is-selected" : ""} key={item} onClick={() => setSelectedStep(item)} type="button">
              <i>{index + 1}</i>
              <span>{item}</span>
              <b>{item === selectedStep ? "Active" : "Ready"}</b>
            </button>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={`data-display-panel is-kpi is-${state.toLowerCase()}`}>
      <header><span>KPI</span><strong>{empty ? "No reading yet" : "Recovery score"}</strong></header>
      <div className="kpi-display">
        <strong>{loading ? "--" : empty ? "0" : warning ? "68" : "84"}<small>/100</small></strong>
        <div>
          <span>{statusCopy}</span>
          <p>{warning ? "Biomarker source changed. Review before guidance." : empty ? "Awaiting first usable source." : "Trend supports a moderate session today."}</p>
        </div>
      </div>
    </section>
  );
}

function DataDisplayLibraryPage() {
  return (
    <section className="component-page data-page">
      <header className="component-page-intro">
        <span>Data Display</span>
        <strong>Small data objects make health status scannable</strong>
        <p>KPI, badge, avatar, progress, timeline and status components support cards and tables without competing with primary decisions.</p>
      </header>

      <section className="component-section">
        <div>
          <span>Variants</span>
          <strong>Compact components for status and progress</strong>
        </div>
        <div className="library-data-grid">
          {dataDisplayTypes.map((type) => <DataDisplayPreview key={type} state="Default" variant={type} />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>States</span>
          <strong>Selected, warning and empty must explain themselves</strong>
        </div>
        <div className="library-data-grid">
          {dataDisplayStates.map((state) => <DataDisplayPreview key={state} state={state} variant="KPI" />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Tokens</span>
          <strong>Data display depends on semantic values</strong>
        </div>
        <div className="token-chip-grid">
          {["typography", "numeric", "semantic color", "status dot", "progress", "spacing", "focus"].map((token) => <span key={token}>{token}</span>)}
        </div>
      </section>
    </section>
  );
}

function MotionLabPreview({ state = "Preview", variant = "Morph" }) {
  const [active, setActive] = useState(state === "Active");
  const reduced = state === "Reduced" || variant === "Reduced Motion";
  const running = active || state === "Preview" || state === "Active";
  const copy = {
    Hover: ["Lift clarifies availability", "The object rises just enough to show it can be touched."],
    Press: ["Compression confirms intent", "A pressed control moves inward before returning to rest."],
    Morph: ["Shape keeps identity through change", "One surface stretches between source and destination."],
    "Shared Element": ["The selected signal travels", "The user sees where the detail came from."],
    "Glass Refraction": ["Glass reacts to passing content", "Blur and light change only while the control crosses context."],
    "Number Counter": ["Numbers update with restraint", "Value change is legible before it is animated."],
    "Graph Reveal": ["Trend appears from origin", "The line draws from past to present, not from nowhere."],
    "Reduced Motion": ["Meaning remains without travel", "State changes use opacity, emphasis and copy instead of movement."],
  }[variant] ?? ["Motion explains relationship", "Every transition needs a reason."];

  return (
    <section className={`motion-lab-panel is-${variant.toLowerCase().replaceAll(" ", "-")} is-${state.toLowerCase()} ${running ? "is-running" : ""} ${reduced ? "is-reduced" : ""}`}>
      <header>
        <span>{variant}</span>
        <strong>{copy[0]}</strong>
        <button className="glass-control" onClick={() => setActive(!active)} type="button">{active ? "Return" : "Run"} <ArrowRight size={14} /></button>
      </header>
      <div className="motion-lab-stage">
        <div className="motion-origin">
          <span>Origin</span>
          <b>Recovery</b>
        </div>
        <div className="motion-path" aria-hidden="true">
          <i />
          <svg viewBox="0 0 420 120" role="img" aria-label="Motion path">
            <path d="M22 82 C112 28 188 114 274 54 S374 34 398 56" />
          </svg>
        </div>
        <motion.div
          animate={reduced ? { opacity: running ? 1 : 0.72 } : motionAnimation(variant, running)}
          className="motion-object"
          initial={false}
          transition={motionTransition(variant)}
        >
          {variant === "Number Counter" ? "84" : variant === "Graph Reveal" ? <SparklineChart /> : <Sparkles size={18} />}
        </motion.div>
        <div className="motion-destination">
          <span>Destination</span>
          <b>{variant === "Shared Element" ? "Detail sheet" : "Plan"}</b>
        </div>
      </div>
      <footer>
        <div>
          <span>Cause</span>
          <b>{state === "Rest" ? "Waiting" : state === "Return" ? "Dismiss" : "User intent"}</b>
        </div>
        <div>
          <span>Timing</span>
          <b>{variant === "Press" ? "150ms" : variant === "Graph Reveal" ? "900ms" : "320ms"}</b>
        </div>
        <div>
          <span>Rule</span>
          <b>{copy[1]}</b>
        </div>
      </footer>
    </section>
  );
}

function motionAnimation(variant, running) {
  if (!running) return { x: 0, y: 0, scale: 1, borderRadius: 22, opacity: 0.82 };
  if (variant === "Hover") return { y: -12, scale: 1.03, opacity: 1 };
  if (variant === "Press") return { y: 8, scale: 0.94, opacity: 1 };
  if (variant === "Shared Element") return { x: 246, y: -28, scale: 0.86, opacity: 1 };
  if (variant === "Glass Refraction") return { x: 198, scaleX: 1.28, scaleY: 0.92, opacity: 1 };
  if (variant === "Number Counter") return { y: -6, scale: 1.06, opacity: 1 };
  if (variant === "Graph Reveal") return { x: 118, y: -10, scale: 1.04, opacity: 1 };
  return { x: 210, scaleX: 1.42, scaleY: 0.9, borderRadius: 999, opacity: 1 };
}

function motionTransition(variant) {
  if (variant === "Press") return { duration: 0.15, ease: [0.2, 0.8, 0.2, 1] };
  if (variant === "Graph Reveal") return { duration: 0.9, ease: [0.22, 1, 0.36, 1] };
  return { type: "spring", stiffness: variant === "Morph" ? 145 : 170, damping: variant === "Morph" ? 17 : 20, mass: 0.9 };
}

function MotionToolPage() {
  return (
    <section className="component-page tool-page">
      <header className="component-page-intro">
        <span>Secondary Tool</span>
        <strong>Motion is a behavior reference, not a component category</strong>
        <p>Use this page to inspect principles that component pages consume: hover, press, morph, graph reveal and reduced motion.</p>
      </header>
      <section className="component-section">
        <div>
          <span>Motion Rules</span>
          <strong>Relationship before spectacle</strong>
        </div>
        <div className="motion-grid">
          {motionTypes.map((type) => <MotionLabPreview key={type} state="Preview" variant={type} />)}
        </div>
      </section>
    </section>
  );
}

function AccessibilityLabPreview({ state = "Pass", variant = "Contrast" }) {
  const [focusIndex, setFocusIndex] = useState(0);
  const largeText = state === "Large Text" || variant === "Dynamic Type";
  const reducedMotion = state === "Review" || variant === "Reduced Motion";
  const reducedTransparency = variant === "Reduced Transparency";
  const compact = state === "Compact";
  const fail = state === "Fail";
  const keyboard = state === "Keyboard" || variant === "Focus Order";
  const controls = ["Score", "Plan", "Coach"];

  return (
    <section className={`a11y-lab-panel is-${variant.toLowerCase().replaceAll(" ", "-")} is-${state.toLowerCase().replaceAll(" ", "-")} ${largeText ? "has-large-type" : ""} ${reducedTransparency ? "has-solid-surfaces" : ""}`}>
      <header>
        <span>{variant}</span>
        <strong>{accessibilityTitle(variant, state)}</strong>
        <button className="glass-control" onClick={() => setFocusIndex((focusIndex + 1) % controls.length)} type="button"><Eye size={14} />Next focus</button>
      </header>
      <div className="a11y-test-stage">
        <article className="a11y-phone">
          <span>Today</span>
          <strong>Recovery is stable</strong>
          <p>{fail ? "Low contrast preview for review." : "A moderate session fits today if soreness stays low."}</p>
          <div className="a11y-score">
            <b>84</b>
            <small>/100</small>
          </div>
          <nav aria-label="Accessibility path">
            {controls.map((item, index) => (
              <button
                className={`${keyboard && index === focusIndex ? "is-focused" : ""} ${compact ? "is-compact" : ""}`}
                key={item}
                onClick={() => setFocusIndex(index)}
                type="button"
              >
                {item}
              </button>
            ))}
          </nav>
        </article>
        <aside className="a11y-checks">
          <div><span>Contrast</span><b>{fail ? "2.8:1" : "7.6:1"}</b></div>
          <div><span>Target</span><b>{compact ? "36px review" : "48px pass"}</b></div>
          <div><span>Motion</span><b>{reducedMotion ? "Reduced" : "Spring"}</b></div>
          <div><span>Transparency</span><b>{reducedTransparency ? "Solid" : "Glass only controls"}</b></div>
        </aside>
      </div>
      <footer>
        {["Visible focus", "Keyboard path", "Readable type", "Meaning without color"].map((item) => (
          <span key={item}><Check size={14} />{item}</span>
        ))}
      </footer>
    </section>
  );
}

function accessibilityTitle(variant, state) {
  if (state === "Fail") return "Failure states must be obvious";
  if (variant === "Dynamic Type") return "Type can grow without breaking hierarchy";
  if (variant === "Focus Order") return "Keyboard path follows the decision";
  if (variant === "Touch Target") return "Controls stay large enough to trust";
  if (variant === "Reduced Transparency") return "Glass has a solid fallback";
  if (variant === "Reduced Motion") return "Motion can quiet down and keep meaning";
  return "Legibility protects the health decision";
}

function AccessibilityToolPage() {
  return (
    <section className="component-page tool-page">
      <header className="component-page-intro">
        <span>Secondary Tool</span>
        <strong>Accessibility validates the component library</strong>
        <p>This is a review tool for contrast, motion, type, focus and target size. It should support component pages, not replace them.</p>
      </header>
      <section className="component-section">
        <div>
          <span>Checks</span>
          <strong>Every core component must pass these checks</strong>
        </div>
        <div className="a11y-grid">
          {accessibilityTypes.map((type) => <AccessibilityLabPreview key={type} state="Pass" variant={type} />)}
        </div>
      </section>
    </section>
  );
}

function AppPatternPreview({ state = "Default", variant = "Daily State" }) {
  const isLoading = state === "Loading";
  const isEmpty = state === "Empty";
  const personalized = state === "Personalized";

  return (
    <article className={`app-pattern is-${variant.toLowerCase().replaceAll(" ", "-")} is-${state.toLowerCase()}`}>
      <header className="app-phone-status">
        <span>9:41</span>
        <b>RE-COMP</b>
      </header>
      {isLoading && <div className="pattern-loading"><i /><i /><i /></div>}
      {isEmpty && <div className="pattern-empty"><Code2 size={24} /><strong>No guidance yet</strong><p>When data is missing, the screen preserves structure without inventing recommendations.</p></div>}
      {!isLoading && !isEmpty && (
        <>
          <section className="pattern-hero">
            <span>{personalized ? "Personalized today" : variant}</span>
            <strong>{patternTitle(variant, personalized)}</strong>
            <p>{patternCopy(variant)}</p>
          </section>
          <section className="pattern-content">
            {variant === "Daily State" && (
              <>
                <CardPreview state="Interactive" variant="Metric" />
                <ChartPreview state="Animated" variant="Ring" />
              </>
            )}
            {variant === "Plan Decision" && (
              <>
                <CardPreview state="Expanded" variant="Workout" />
                <TablePreview state="Filtered" variant="Dense" />
              </>
            )}
            {variant === "Recovery Detail" && (
              <>
                <ChartPreview state="Selected" variant="Line" />
                <MediaPreview state="Complete" variant="Image" />
              </>
            )}
            {variant === "Coach Prompt" && (
              <>
                <FeedbackPreview setToastOpen={() => {}} state="Visible" toastOpen variant="Sheet" />
                <InputPreview state="Focus" variant="Command" />
              </>
            )}
          </section>
          <footer className="pattern-nav">
            <GlassNav activeTab={variant === "Coach Prompt" ? 3 : 0} setActiveTab={() => {}} />
          </footer>
        </>
      )}
    </article>
  );
}

function patternTitle(variant, personalized) {
  if (variant === "Plan Decision") return personalized ? "Shift strength after recovery dip" : "Lower-body strength is acceptable";
  if (variant === "Recovery Detail") return personalized ? "Sleep debt is the main limiter" : "Recovery is stable";
  if (variant === "Coach Prompt") return personalized ? "Ask about today's constraint" : "Coach is ready";
  return personalized ? "You can train, with restraint" : "Recovery is stable";
}

function patternCopy(variant) {
  if (variant === "Plan Decision") return "A primary decision sits above supporting signals and plan rows.";
  if (variant === "Recovery Detail") return "Deep interpretation combines trend, source and confidence.";
  if (variant === "Coach Prompt") return "Guidance appears as a focused overlay and returns control quickly.";
  return "Score, trend and recommendation stay readable before any action.";
}

function AppPatternReferencePage() {
  return (
    <section className="component-page pattern-page">
      <header className="component-page-intro">
        <span>Reference</span>
        <strong>App patterns show component composition, not new components</strong>
        <p>Use this page to validate how core components behave together in RE-COMP app moments. Patterns should not expand the Component Library inventory.</p>
      </header>
      <section className="component-section">
        <div>
          <span>Patterns</span>
          <strong>Core app moments</strong>
        </div>
        <div className="pattern-grid">
          {appPatternTypes.map((type) => <AppPatternPreview key={type} state="Default" variant={type} />)}
        </div>
      </section>
    </section>
  );
}

function AppStructureLibraryPage({ activeTab, setActiveTab }) {
  const structureItems = [
    ["Top Toolbar", "Title, back/context actions, notifications and profile access."],
    ["Content Scroll", "One readable vertical content area with stable Soft Metal surfaces."],
    ["Bottom Tab Bar", "Persistent Today, Plan, Progress and Coach navigation."],
    ["Floating Slot", "Optional composer or contextual action without covering the primary decision."],
  ];

  return (
    <section className="component-page pattern-page">
      <header className="component-page-intro">
        <span>App Structure</span>
        <strong>App Shell defines the frame all RE-COMP screens inherit</strong>
        <p>The shell is not a decorative screen. It fixes safe area, toolbar, scroll behavior, bottom navigation and optional floating guidance entry.</p>
      </header>

      <section className="component-section">
        <div>
          <span>Shell anatomy</span>
          <strong>Top context, content, bottom navigation</strong>
        </div>
        <div className="foundation-stage">
          <div className="live-device">
            <div className="device-status">9:41</div>
            <div className="app-toolbar-preview">
              <button className="icon-button is-ghost" aria-label="Back" type="button"><ArrowRight size={16} /></button>
              <div>
                <span>Today</span>
                <strong>Recovery is stable</strong>
              </div>
              <button className="icon-button is-glass" aria-label="Search" type="button"><Search size={16} /></button>
            </div>
            <section className="score-card">
              <span>Health Score</span>
              <strong>84</strong>
              <p>A moderate strength session fits today.</p>
            </section>
            <div className="signal-row">
              <span>HRV 78 ms</span>
              <span>Sleep 7h 45m</span>
            </div>
            <GlassNav activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Required slots</span>
          <strong>What the real component must expose</strong>
        </div>
        <div className="card-grid">
          {structureItems.map(([title, copy]) => (
            <article className="library-card" key={title}>
              <span>Slot</span>
              <strong>{title}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Rules</span>
          <strong>Shell constraints</strong>
        </div>
        <div className="token-list">
          <span>height: 100dvh</span>
          <span>single content scroll</span>
          <span>safe-area aware</span>
          <span>Soft Metal content</span>
          <span>Liquid Glass navigation</span>
        </div>
      </section>
    </section>
  );
}

function VariantMatrix({ selected }) {
  if (selected.id === "foundations.live") return <div className="foundation-grid">{foundationTypes.map((type) => <FoundationPreview key={type} state="Default" variant={type} />)}</div>;
  if (selected.id === "actions.buttons") return <div className="matrix">{buttonVariants.map((variant) => <button className={`button is-${variant.toLowerCase()}`} key={variant} type="button">{variant}</button>)}</div>;
  if (selected.id === "inputs.text") return <div className="matrix">{inputVariants.map((variant) => <InputPreview key={variant} state="Default" variant={variant} />)}</div>;
  if (selected.id === "selection.controls") return <div className="matrix">{selectionVariants.map((variant) => <SelectionPreview key={variant} selectedChip="Recovery" setSelectedChip={() => {}} state="Selected" variant={variant} />)}</div>;
  if (selected.id === "menus.select") return <div className="menu-grid">{menuTypes.map((type) => <MenuPreview key={type} state="Open" variant={type} />)}</div>;
  if (selected.id === "cards.health") return <div className="card-grid">{cardTypes.map((type) => <CardPreview key={type} state="Static" variant={type} />)}</div>;
  if (selected.id === "charts.health") return <div className="chart-grid">{chartTypes.map((type) => <ChartPreview key={type} state="Animated" variant={type} />)}</div>;
  if (selected.id === "feedback.toast") return <div className="feedback-grid">{feedbackTypes.map((type) => <FeedbackPreview key={type} setToastOpen={() => {}} state="Visible" toastOpen variant={type} />)}</div>;
  if (selected.id === "tables.base") return <div className="table-grid">{tableTypes.map((type) => <TablePreview key={type} state="Default" variant={type} />)}</div>;
  if (selected.id === "media.upload") return <div className="media-grid">{mediaTypes.map((type) => <MediaPreview key={type} state="Complete" variant={type} />)}</div>;
  if (selected.id === "data.display") return <div className="data-display-grid">{dataDisplayTypes.map((type) => <DataDisplayPreview key={type} state="Default" variant={type} />)}</div>;
  if (selected.id === "motion.lab") return <div className="motion-grid">{motionTypes.map((type) => <MotionLabPreview key={type} state="Preview" variant={type} />)}</div>;
  if (selected.id === "accessibility.lab") return <div className="a11y-grid">{accessibilityTypes.map((type) => <AccessibilityLabPreview key={type} state="Pass" variant={type} />)}</div>;
  if (selected.id === "patterns.app") return <div className="pattern-grid">{appPatternTypes.map((type) => <AppPatternPreview key={type} state="Default" variant={type} />)}</div>;
  return <div className="small-note">Variant matrix is planned for this component in its category phase.</div>;
}

function SizeMatrix({ selected }) {
  if (selected.id === "actions.buttons") return <div className="matrix">{buttonSizes.map((size) => <button className={`button is-primary size-${size.toLowerCase()}`} key={size} type="button">{size}</button>)}</div>;
  return <div className="small-note">Size matrix is planned for this component in its category phase.</div>;
}

function StateMatrix({ selected }) {
  if (selected.id === "foundations.live") return <div className="foundation-grid">{foundationStates.map((state) => <FoundationPreview key={state} state={state} variant="Tokens" />)}</div>;
  if (selected.id === "actions.buttons") return <div className="matrix">{buttonStates.map((state) => <button className={`button is-primary is-${state.toLowerCase()}`} disabled={state === "Disabled"} key={state} type="button">{state === "Loading" && <Loader2 size={14} />}{state}</button>)}</div>;
  if (selected.id === "inputs.text") return <div className="matrix">{inputStates.map((state) => <InputPreview key={state} state={state} variant="Text" />)}</div>;
  if (selected.id === "selection.controls") return <div className="matrix">{selectionStates.map((state) => <SelectionPreview key={state} selectedChip="Recovery" setSelectedChip={() => {}} state={state} variant="Switch" />)}</div>;
  if (selected.id === "menus.select") return <div className="menu-grid">{menuStates.map((state) => <MenuPreview key={state} state={state} variant="Dropdown" />)}</div>;
  if (selected.id === "cards.health") return <div className="card-grid">{cardStates.map((state) => <CardPreview key={state} state={state} variant="Metric" />)}</div>;
  if (selected.id === "charts.health") return <div className="chart-grid">{chartStates.map((state) => <ChartPreview key={state} state={state} variant="Line" />)}</div>;
  if (selected.id === "feedback.toast") return <div className="feedback-grid">{feedbackStates.map((state) => <FeedbackPreview key={state} setToastOpen={() => {}} state={state} toastOpen variant="Toast" />)}</div>;
  if (selected.id === "tables.base") return <div className="table-grid">{tableStates.map((state) => <TablePreview key={state} state={state} variant="Simple" />)}</div>;
  if (selected.id === "media.upload") return <div className="media-grid">{mediaStates.map((state) => <MediaPreview key={state} state={state} variant="Upload" />)}</div>;
  if (selected.id === "data.display") return <div className="data-display-grid">{dataDisplayStates.map((state) => <DataDisplayPreview key={state} state={state} variant="KPI" />)}</div>;
  if (selected.id === "motion.lab") return <div className="motion-grid">{motionStates.map((state) => <MotionLabPreview key={state} state={state} variant="Morph" />)}</div>;
  if (selected.id === "accessibility.lab") return <div className="a11y-grid">{accessibilityStates.map((state) => <AccessibilityLabPreview key={state} state={state} variant="Contrast" />)}</div>;
  if (selected.id === "patterns.app") return <div className="pattern-grid">{appPatternStates.map((state) => <AppPatternPreview key={state} state={state} variant="Daily State" />)}</div>;
  return <div className="small-note">State matrix is planned for this component in its category phase.</div>;
}

function BackgroundTester({ backgroundVariant, glassState, setBackgroundVariant, setGlassState }) {
  const activeBackgroundClass = `bg-${backgroundVariant.toLowerCase().replace(" ", "-")}`;
  return (
    <div className="material-tester">
      <section className={`material-stage ${activeBackgroundClass}`} aria-label="Material behaviour tester">
        <div className="stage-copy">
          <span>{backgroundVariant} background</span>
          <strong>One control, different material response</strong>
          <p>Use the states below to inspect reflection, compression, focus and disabled contrast.</p>
        </div>
        <div className="glass-state-row">
          {glassStates.map((state) => (
            <button
              className={`glass-control material-glass is-${state.toLowerCase()} ${glassState === state ? "is-active" : ""}`}
              disabled={state === "Disabled"}
              key={state}
              onClick={() => setGlassState(state)}
              type="button"
            >
              <Sparkles size={15} />
              {state}
            </button>
          ))}
        </div>
        <div className="stage-signal">
          <span>Depth</span>
          <b>{glassState}</b>
        </div>
      </section>
      <div className="refraction-grid">
        {backgrounds.map((item) => {
          const tileClass = `bg-${item.toLowerCase().replace(" ", "-")}`;
          return (
            <button
              className={`refraction-tile ${tileClass} ${backgroundVariant === item ? "is-selected" : ""}`}
              key={item}
              onClick={() => setBackgroundVariant(item)}
              type="button"
            >
              <span className="mini-glass"><Sparkles size={13} />{glassState}</span>
              <strong>{item}</strong>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ButtonBackgroundShowcase({ compact = false }) {
  const samples = ["Photo", "Black", "Graphite", "Soft Gray", "Gradient", "Glass"];
  const variants = ["Primary", "Secondary", "Glass", "Ghost", "Outline", "Info"];

  return (
    <section className={`button-background-showcase ${compact ? "is-compact" : ""}`} aria-label="Button material across backgrounds">
      <header>
        <span>Buttons / Backgrounds</span>
        <strong>Buttons keep their physical identity across surfaces</strong>
        <p>Primary and secondary remain solid. Glass appears only where the control floats, adapts and needs material response.</p>
      </header>
      <div className="button-bg-grid">
        {samples.map((background) => {
          const tileClass = `bg-${background.toLowerCase().replace(" ", "-")}`;
          return (
            <article className={`button-bg-tile ${tileClass}`} key={background}>
              <span>{background}</span>
              <div>
                {variants.map((variant) => (
                  <button className={`button is-${variant.toLowerCase()}`} key={variant} type="button">
                    {variant === "Info" ? <Sparkles size={14} /> : null}
                    {variant}
                  </button>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function NavigationLibraryPage({ activeTab, setActiveTab }) {
  return (
    <section className="component-page navigation-page">
      <header className="component-page-intro">
        <span>Navigation</span>
        <strong>Navigation floats above content without becoming the content</strong>
        <p>Bottom navigation uses restrained Liquid Glass because it is a persistent control layer. Responsive examples appear only where behavior changes.</p>
      </header>

      <section className="component-section">
        <div>
          <span>Bottom Tab Bar</span>
          <strong>Compact mobile control</strong>
        </div>
        <div className="nav-library-stage bg-graphite">
          <div className="nav-phone-surface">
            <header><span>Today</span><strong>Recovery is stable</strong></header>
            <div className="nav-content-card"><span>Health Score</span><strong>84</strong><p>A moderate strength session fits today.</p></div>
            <GlassNav activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Icon Only</span>
          <strong>Navigation proposals without labels</strong>
        </div>
        <div className="nav-proposal-grid">
          <article>
            <span>Compact Glass</span>
            <GlassNav activeTab={activeTab} labels={false} setActiveTab={setActiveTab} />
          </article>
          <article>
            <span>Dark App</span>
            <GlassNav activeTab={activeTab} labels={false} setActiveTab={setActiveTab} tone="dark" />
          </article>
          <article>
            <span>Minimal Dock</span>
            <GlassNav activeTab={activeTab} labels={false} setActiveTab={setActiveTab} tone="minimal" />
          </article>
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Backgrounds</span>
          <strong>Glass responds to context</strong>
        </div>
        <div className="nav-background-grid">
          {["Photo", "Black", "Graphite", "Gradient"].map((background) => (
            <article className={`nav-bg-tile bg-${background.toLowerCase()}`} key={background}>
              <GlassNav activeTab={activeTab} labels={background !== "Black"} setActiveTab={setActiveTab} tone={background === "Black" ? "dark" : "default"} />
              <span>{background}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Responsive</span>
          <strong>Show only real behavior changes</strong>
        </div>
        <div className="nav-responsive-grid">
          <article><span>Mobile</span><strong>Bottom tab bar</strong><p>Thumb-first persistent navigation.</p></article>
          <article><span>Tablet</span><strong>Floating dock or sidebar</strong><p>Use only when screen width supports persistent destinations.</p></article>
          <article><span>Desktop</span><strong>Top/side navigation</strong><p>Bottom nav should not be stretched into desktop chrome.</p></article>
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Tokens</span>
          <strong>Navigation depends on glass and motion</strong>
        </div>
        <div className="token-chip-grid">
          {["glass", "blur", "accent", "icon size", "label typography", "motion", "hit target"].map((token) => <span key={token}>{token}</span>)}
        </div>
      </section>
    </section>
  );
}

function ResponsivePreview({ selected }) {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedChip, setSelectedChip] = useState("Recovery");
  const [toastOpen, setToastOpen] = useState(true);
  return (
    <div className="responsive-preview">
      {["Mobile", "Tablet", "Desktop"].map((size) => (
        <article key={size}>
          <span>{size}</span>
          <PreviewStory
            activeTab={activeTab}
            forcedState="Default"
            buttonSize="M"
            buttonVariant="Primary"
            inputState="Default"
            inputVariant="Text"
            selectionState="Selected"
            selectionVariant="Switch"
            cardState="Interactive"
            cardVariant="Metric"
            chartState="Animated"
            chartVariant="Line"
            feedbackState="Visible"
            feedbackVariant="Toast"
            selected={selected}
            selectedChip={selectedChip}
            setActiveTab={setActiveTab}
            setSelectedChip={setSelectedChip}
            setToastOpen={setToastOpen}
            toastOpen={toastOpen}
          />
        </article>
      ))}
    </div>
  );
}

function AccessibilityPanel({ selected }) {
  return (
    <div className="accessibility-list">
      {(selected?.accessibility ?? ["Visible focus", "Keyboard path", "44px target", "Reduced motion", "Reduced transparency", "Large type"]).map((item) => <span key={item}><Check size={14} />{item}</span>)}
    </div>
  );
}

function CodePreview({ selected, compact = false }) {
  return (
    <pre className={compact ? "code-preview is-compact" : "code-preview"}><code>{`<${selected.name.replace(/\s/g, "")}\n  material="soft-metal"\n  accent="var(--live-accent)"\n  state="interactive"\n/>`}</code></pre>
  );
}

function MissingStory({ selected }) {
  return <div className="missing-story"><Code2 size={28} /><strong>{selected.name} is not implemented yet.</strong><p>Mapped in inventory. It will be built in its category phase.</p></div>;
}

function StatusPill({ compact = false, status }) {
  return <span aria-label={status} className={`status-pill is-${status} ${compact ? "is-compact" : ""}`}>{compact ? "" : status}</span>;
}

function GlassNav({ activeTab, labels = true, setActiveTab, tone = "default" }) {
  const tabs = [["Today", Activity], ["Plan", Check], ["Progress", HeartPulse], ["Coach", MessageCircle]];
  const indicatorX = labels ? `${activeTab * 100}%` : activeTab * 46;
  const selectTab = (index) => {
    if (index === activeTab) return;
    setActiveTab(index);
  };

  return (
    <div className={`nav-shell is-${tone} ${labels ? "has-labels" : "is-icon-only"}`}>
      <nav className="glass-nav" aria-label={labels ? "App navigation" : "Icon-only app navigation"}>
        <div className="nav-indicator-layer" aria-hidden="true">
          <motion.div animate={{ x: indicatorX }} className="nav-indicator" initial={false} transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }} />
        </div>
        {tabs.map(([label, Icon], index) => (
          <button aria-label={label} className={activeTab === index ? "is-active" : ""} key={label} onClick={() => selectTab(index)} type="button"><Icon size={17} />{labels && <span>{label}</span>}</button>
        ))}
      </nav>
    </div>
  );
}

function ChartLibraryPage() {
  return (
    <section className="component-page chart-page">
      <header className="component-page-intro">
        <span>Data</span>
        <strong>Charts show signal and trend without hiding meaning</strong>
        <p>Charts need text summaries, selected states and reduced-motion behavior. Responsive is meaningful here because charts change with available width.</p>
      </header>

      <section className="component-section">
        <div>
          <span>Variants</span>
          <strong>Core health visualizations</strong>
        </div>
        <div className="library-chart-grid">
          {chartTypes.map((type) => <ChartPreview key={type} state="Animated" variant={type} />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>States</span>
          <strong>Loading, selected and no-data are first-class</strong>
        </div>
        <div className="library-chart-grid">
          {chartStates.map((state) => <ChartPreview key={state} state={state} variant="Line" />)}
        </div>
      </section>

      <section className="component-section">
        <div>
          <span>Tokens</span>
          <strong>Chart depends on data display values</strong>
        </div>
        <div className="token-chip-grid">
          {["chart stroke", "accent", "grid", "typography", "motion", "surface", "summary text"].map((token) => <span key={token}>{token}</span>)}
        </div>
      </section>
    </section>
  );
}

function LineChart({ selected = false }) {
  return <svg className={`line-chart ${selected ? "is-selected" : ""}`} viewBox="0 0 320 150"><path d="M18 108 C62 96 70 54 112 72 C158 92 172 42 218 52 C260 62 276 34 304 28" />{selected && <circle cx="218" cy="52" r="7" />}</svg>;
}

function BarChart() {
  return <div className="bar-chart">{[44, 72, 58, 86, 64, 76].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>;
}

function RingChart() {
  return <svg className="ring-chart" viewBox="0 0 120 120"><circle cx="60" cy="60" r="42" /><circle cx="60" cy="60" r="42" /><text x="60" y="66">84</text></svg>;
}

function GaugeChart() {
  return <svg className="gauge-chart" viewBox="0 0 180 110"><path d="M28 88 A62 62 0 0 1 152 88" /><path d="M28 88 A62 62 0 0 1 124 38" /><line x1="90" y1="88" x2="126" y2="48" /><text x="90" y="104">82</text></svg>;
}

function SparklineChart() {
  return <svg className="sparkline-chart" viewBox="0 0 260 80"><path d="M8 58 C36 54 42 34 70 42 C98 50 108 20 138 28 C170 36 188 16 214 22 C238 28 244 18 252 12" /></svg>;
}
