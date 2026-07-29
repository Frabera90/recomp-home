import React, { useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  Bell,
  Bot,
  Check,
  ChevronRight,
  Clock,
  Dna,
  Dumbbell,
  HeartPulse,
  Loader2,
  Lock,
  MessageCircle,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Utensils,
} from "lucide-react";
import { allComponents, componentGroups, systemTools } from "./data/componentRegistry";
import "./playground.css";

const statusCopy = {
  usable: "Usable",
  draft: "Draft",
  needed: "Needed",
};

export function DesignPlayground() {
  const [activeId, setActiveId] = useState("app-shell");
  const [query, setQuery] = useState("");
  const active = allComponents.find((component) => component.id === activeId) ?? allComponents[0];
  const filteredGroups = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return componentGroups;
    return componentGroups
      .map((group) => ({
        ...group,
        components: group.components.filter((component) =>
          `${group.label} ${component.name} ${component.purpose} ${component.usedIn.join(" ")}`.toLowerCase().includes(needle),
        ),
      }))
      .filter((group) => group.components.length > 0);
  }, [query]);

  return (
    <main className="ds-workbench">
      <aside className="ds-sidebar" aria-label="Component library">
        <div className="ds-brand">
          <span>RE-COMP</span>
          <strong>App Component Library</strong>
          <p>Solo componenti utili all'app. Niente lab generici come navigazione principale.</p>
        </div>

        <label className="ds-search">
          <Search size={15} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cerca componenti app" />
        </label>

        <nav className="ds-nav">
          {filteredGroups.map((group) => (
            <section key={group.id}>
              <h2>{group.label}</h2>
              <p>{group.purpose}</p>
              {group.components.map((component) => {
                const Icon = component.icon;
                return (
                  <button
                    className={active.id === component.id ? "is-active" : ""}
                    key={component.id}
                    onClick={() => setActiveId(component.id)}
                    type="button"
                  >
                    <Icon size={16} />
                    <span>{component.name}</span>
                    <Status status={component.status} />
                  </button>
                );
              })}
            </section>
          ))}
        </nav>
      </aside>

      <section className="ds-main">
        <header className="ds-header">
          <div>
            <span>{active.groupLabel} / {active.priority}</span>
            <h1>{active.name}</h1>
            <p>{active.purpose}</p>
          </div>
          <Status large status={active.status} />
        </header>

        <ComponentPreview component={active} />
        <ComponentSpec component={active} />
        <SystemTools />
      </section>
    </main>
  );
}

function Status({ large = false, status }) {
  return <b className={`ds-status is-${status} ${large ? "is-large" : ""}`}>{statusCopy[status] ?? status}</b>;
}

function ComponentPreview({ component }) {
  return (
    <section className="preview-shell" aria-label={`${component.name} preview`}>
      <div className="preview-copy">
        <span>Preview essenziale</span>
        <strong>{component.rule}</strong>
        <p>Questa preview non prova a essere una schermata completa. Serve a verificare se il componente regge scopo, stati e densita dell'app.</p>
      </div>
      <div className="preview-stage">
        {renderPreview(component.id)}
      </div>
    </section>
  );
}

function ComponentSpec({ component }) {
  return (
    <section className="spec-grid">
      <InfoBlock title="Usato In" items={component.usedIn} />
      <InfoBlock title="Varianti" items={component.variants} />
      <InfoBlock title="Stati" items={component.states} />
      <InfoBlock title="Token" items={component.tokens} />
    </section>
  );
}

function InfoBlock({ items, title }) {
  return (
    <article className="spec-card">
      <span>{title}</span>
      <div>
        {items.map((item) => <em key={item}>{item}</em>)}
      </div>
    </article>
  );
}

function SystemTools() {
  return (
    <section className="system-tools">
      <header>
        <span>Secondary tools</span>
        <strong>Prima componenti reali, poi verifiche.</strong>
      </header>
      <div>
        {systemTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <article key={tool.id}>
              <Icon size={18} />
              <strong>{tool.name}</strong>
              <ul>
                {tool.checks.map((check) => <li key={check}>{check}</li>)}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function renderPreview(id) {
  switch (id) {
    case "app-shell":
      return <PhoneShell />;
    case "top-toolbar":
      return <ToolbarPreview />;
    case "bottom-tab-bar":
      return <BottomNavPreview />;
    case "button":
      return <ButtonPreview />;
    case "icon-button":
      return <IconButtonPreview />;
    case "guidance-entry":
      return <GuidancePreview />;
    case "health-score":
      return <HealthScorePreview />;
    case "recommendation-card":
      return <RecommendationPreview />;
    case "signal-metric":
      return <SignalMetricPreview />;
    case "section-heading":
      return <SectionHeadingPreview />;
    case "task-row":
      return <RowsPreview />;
    case "food-row":
      return <FoodRowsPreview />;
    case "biomarker-row":
      return <BiomarkerRowsPreview />;
    case "training-row":
      return <TrainingRowsPreview />;
    case "text-input":
      return <InputsPreview />;
    case "selection-controls":
      return <SelectionPreview />;
    case "trend-visual":
      return <TrendPreview />;
    case "system-states":
      return <StatesPreview />;
    case "overlay-system":
      return <OverlayPreview />;
    default:
      return <PhoneShell />;
  }
}

function PhoneShell() {
  return (
    <div className="phone">
      <div className="phone-status"><span>9:41</span><span>RE-COMP</span></div>
      <ToolbarPreview compact />
      <HealthScorePreview compact />
      <RecommendationPreview compact />
      <RowsPreview compact />
      <BottomNavPreview />
    </div>
  );
}

function ToolbarPreview({ compact = false }) {
  return (
    <div className={`toolbar ${compact ? "is-compact" : ""}`}>
      <div>
        <span>Today</span>
        <strong>Guidance over metrics</strong>
      </div>
      <button aria-label="Notifications" type="button"><Bell size={17} /></button>
    </div>
  );
}

function BottomNavPreview() {
  const tabs = [["Today", Activity], ["Plan", Check], ["Progress", HeartPulse], ["Coach", MessageCircle]];
  return (
    <nav className="bottom-nav" aria-label="App tabs">
      {tabs.map(([label, Icon], index) => (
        <button className={index === 0 ? "is-active" : ""} key={label} type="button">
          <Icon size={16} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

function ButtonPreview() {
  return (
    <div className="button-stack">
      <button className="button is-primary" type="button">Continue <ArrowRight size={15} /></button>
      <button className="button is-secondary" type="button">Request review</button>
      <button className="button is-ghost" type="button">Skip for now</button>
    </div>
  );
}

function IconButtonPreview() {
  return (
    <div className="icon-row">
      {[Bell, Search, Settings, Lock].map((Icon, index) => (
        <button className={index === 1 ? "is-selected" : ""} aria-label="Icon action" key={index} type="button"><Icon size={18} /></button>
      ))}
    </div>
  );
}

function GuidancePreview() {
  return (
    <div className="guidance-card">
      <div><Bot size={20} /><span>AI + Professional</span></div>
      <strong>Review this nutrition pattern with a specialist.</strong>
      <p>AI can summarize the signals. A professional can review the context.</p>
      <button className="button is-primary" type="button">Request specialist review</button>
    </div>
  );
}

function HealthScorePreview({ compact = false }) {
  return (
    <article className={`score-card ${compact ? "is-compact" : ""}`}>
      <span>Daily state</span>
      <div>
        <strong>84</strong>
        <small>/100</small>
      </div>
      <p>Stable recovery. Keep intensity moderate today.</p>
    </article>
  );
}

function RecommendationPreview({ compact = false }) {
  return (
    <article className={`recommendation ${compact ? "is-compact" : ""}`}>
      <span>Next action</span>
      <strong>Log lunch before training.</strong>
      <p>Nutrition timing is the missing signal for today's plan.</p>
      {!compact && <button className="button is-secondary" type="button">Open Food Tracker</button>}
    </article>
  );
}

function SignalMetricPreview() {
  return (
    <div className="metric-grid">
      <Metric icon={HeartPulse} label="HRV" value="78 ms" trend="Improving" />
      <Metric icon={Clock} label="Sleep" value="7h 42m" trend="Stable" />
      <Metric icon={Activity} label="Load" value="Moderate" trend="Ready" />
    </div>
  );
}

function Metric({ icon: Icon, label, trend, value }) {
  return (
    <article className="metric">
      <Icon size={17} />
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{trend}</p>
    </article>
  );
}

function SectionHeadingPreview() {
  return (
    <div className="section-heading">
      <div>
        <span>Nutrition</span>
        <strong>Food Tracker</strong>
      </div>
      <button type="button">View all <ChevronRight size={15} /></button>
    </div>
  );
}

function RowsPreview({ compact = false }) {
  return (
    <div className="row-list">
      <Row icon={Check} meta="Current" title="Mobility primer" />
      <Row icon={Utensils} meta="Next" title="Log lunch" />
      {!compact && <Row icon={MessageCircle} meta="Optional" title="Ask coach for review" />}
    </div>
  );
}

function FoodRowsPreview() {
  return (
    <div className="row-list">
      <Row icon={Utensils} meta="Logged" title="Breakfast - 420 kcal" />
      <Row icon={Utensils} meta="Missing" title="Lunch not tracked" tone="warning" />
      <Row icon={Bot} meta="Review" title="Pattern ready for specialist" />
    </div>
  );
}

function BiomarkerRowsPreview() {
  return (
    <div className="row-list">
      <Row icon={Dna} meta="In range" title="Vitamin D" />
      <Row icon={Dna} meta="Watch" title="hs-CRP" tone="warning" />
      <Row icon={Dna} meta="Review" title="Metabolic panel" />
    </div>
  );
}

function TrainingRowsPreview() {
  return (
    <div className="row-list">
      <Row icon={Dumbbell} meta="Today" title="Strength - moderate" />
      <Row icon={Activity} meta="Done" title="Zone 2 recovery" />
      <Row icon={Lock} meta="Locked" title="High intensity session" />
    </div>
  );
}

function Row({ icon: Icon, meta, title, tone = "default" }) {
  return (
    <button className={`data-row is-${tone}`} type="button">
      <Icon size={17} />
      <span>{title}</span>
      <em>{meta}</em>
      <ChevronRight size={15} />
    </button>
  );
}

function InputsPreview() {
  return (
    <div className="form-stack">
      <label><span>Meal</span><input value="Greek yogurt" readOnly /></label>
      <label><span>Quantity</span><input value="180 g" readOnly /></label>
      <label className="is-error"><span>Time</span><input value="" placeholder="Required" readOnly /></label>
    </div>
  );
}

function SelectionPreview() {
  return (
    <div className="selection-stack">
      <button className="chip is-selected" type="button">Recovery</button>
      <button className="chip" type="button">Nutrition</button>
      <button className="chip" type="button">Training</button>
      <div className="switch-row"><span>Professional review</span><i /></div>
    </div>
  );
}

function TrendPreview() {
  return (
    <div className="trend-card">
      <span>7-day trend</span>
      <svg viewBox="0 0 320 120" aria-hidden="true">
        <path d="M14 86 C52 80 66 50 100 60 C140 72 154 36 196 42 C236 48 258 22 306 28" />
      </svg>
      <p>Recovery is improving, but nutrition consistency is the weak signal.</p>
    </div>
  );
}

function StatesPreview() {
  return (
    <div className="state-card">
      <Loader2 size={22} />
      <strong>Nutrition data is still syncing.</strong>
      <p>We will update today's guidance when the meal log is available.</p>
      <button className="button is-secondary" type="button">Retry sync</button>
    </div>
  );
}

function OverlayPreview() {
  return (
    <div className="overlay-stage">
      <div className="overlay-card">
        <span>Specialist review</span>
        <strong>Send this week to a nutrition specialist?</strong>
        <p>The review includes meal timing, adherence and recovery context.</p>
        <div>
          <button className="button is-secondary" type="button">Cancel</button>
          <button className="button is-primary" type="button">Send</button>
        </div>
      </div>
    </div>
  );
}
