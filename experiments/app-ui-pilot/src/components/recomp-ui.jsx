import React from "react";
import {
  Activity,
  ArrowRight,
  Bell,
  CalendarCheck,
  Check,
  ChevronRight,
  Dumbbell,
  HeartPulse,
  Home,
  LineChart,
  MessageCircle,
  Moon,
  Scale,
  ShieldCheck,
  Target,
  Utensils,
  UserRound,
} from "lucide-react";
import recompLogoSymbol from "../assets/recomp-logo-line-symbol-light.png";
import onboardingNutritionReview from "../assets/onboarding-nutrition-review.png";
import onboardingPerformance from "../assets/onboarding-performance.png";

export const signals = [
  { label: "Sleep", value: "7h 45m", state: "Good", icon: Moon, tone: "violet" },
  { label: "Recovery", value: "82%", state: "Stable", icon: HeartPulse, tone: "green" },
  { label: "HRV", value: "78 ms", state: "Improving", icon: Activity, tone: "blue" },
];

export const plan = [
  { label: "Morning check-in", meta: "Required", icon: Check, done: false },
  { label: "Mobility primer", meta: "10 min", icon: Activity, done: false },
  { label: "Lower-body strength", meta: "25 min", icon: Dumbbell, done: false },
  { label: "Protein meal window", meta: "After training", icon: Utensils, done: false },
];

export const tabs = [
  {
    id: "today",
    label: "Today",
    icon: Home,
    headline: "Recovery and consistency are trending together.",
    copy: "Your weekly load is rising while sleep quality stays stable.",
    score: "84",
    delta: "+7%",
    action: "Moderate lower-body strength",
    reason: "Recovery improved. Good window for strength.",
  },
  {
    id: "plan",
    label: "Plan",
    icon: CalendarCheck,
    headline: "A focused training day, without forcing recovery.",
    copy: "Strength, mobility and nutrition stay connected to your current state.",
    score: "92",
    delta: "+3%",
    action: "Lower-body strength",
    reason: "Plan adherence is stable and soreness is low.",
  },
  {
    id: "progress",
    label: "Progress",
    icon: LineChart,
    headline: "Your baseline is becoming more predictable.",
    copy: "Training load is climbing without sleep disruption.",
    score: "7",
    delta: "days",
    action: "Weekly review",
    reason: "Keep intensity controlled for two more sessions.",
  },
  {
    id: "coach",
    label: "Coach",
    icon: MessageCircle,
    headline: "Ask for context before you change the plan.",
    copy: "Guidance stays grounded in recovery, biomarkers and training history.",
    score: "1",
    delta: "coach",
    action: "Ask coach",
    reason: "Your HRV is slightly low. Prioritize recovery if soreness increases.",
  },
];

const onboardingSteps = [
  {
    id: "welcome",
    layout: "splash",
    eyebrow: "HEALTH OS",
    title: "Your daily Health OS.",
    copy: "Body state, training and recovery in one calm daily path.",
    image: onboardingPerformance,
    icon: HeartPulse,
    cta: "Start setup",
  },
  {
    id: "system",
    layout: "imageTop",
    eyebrow: "HOW IT WORKS",
    title: "Signals become guidance.",
    copy: "Check-ins, body data, training and nutrition feed one daily decision.",
    image: onboardingNutritionReview,
    icon: Activity,
    cta: "Continue",
    modules: [
      { label: "Body state", icon: Scale },
      { label: "Training", icon: Dumbbell },
      { label: "Recovery", icon: HeartPulse },
      { label: "Nutrition", icon: Utensils },
    ],
  },
  {
    id: "role",
    layout: "question",
    eyebrow: "ACCOUNT SETUP",
    title: "Who are you?",
    copy: "This decides the right path before Home opens.",
    icon: UserRound,
    cta: "Continue",
    options: [
      { title: "I am a client", copy: "Build my own plan and daily guidance." },
      { title: "I am a coach", copy: "Review and guide assigned clients." },
      { title: "I have an invitation", copy: "Join a guided RE-COMP path." },
    ],
  },
  {
    id: "profile",
    layout: "form",
    eyebrow: "REGISTRATION",
    title: "Create your starting profile.",
    copy: "A minimal account layer before setup and baseline.",
    icon: UserRound,
    cta: "Continue",
  },
  {
    id: "goal",
    layout: "question",
    eyebrow: "PRIMARY GOAL",
    title: "What comes first?",
    copy: "Your first Home should focus on one priority.",
    icon: Target,
    cta: "Continue",
    options: [
      { title: "Improve performance", copy: "Train better while protecting recovery." },
      { title: "Body recomposition", copy: "Connect nutrition, training and body data." },
      { title: "Longevity routine", copy: "Build stable habits and guided reviews." },
    ],
  },
  {
    id: "focus",
    layout: "question",
    eyebrow: "CURRENT FOCUS",
    title: "What needs attention now?",
    copy: "Recovery, training and nutrition stay connected.",
    icon: HeartPulse,
    cta: "Continue",
    options: [
      { title: "Recovery and sleep", copy: "Understand readiness before loading." },
      { title: "Training consistency", copy: "Follow the right work at the right time." },
      { title: "Nutrition alignment", copy: "Log food and compare it with the plan." },
    ],
  },
  {
    id: "baseline",
    layout: "halfImage",
    eyebrow: "BASELINE",
    title: "Build your baseline.",
    copy: "Screening and body state make guidance trustworthy.",
    image: onboardingPerformance,
    icon: Scale,
    cta: "Continue",
  },
  {
    id: "guidance",
    layout: "textOnly",
    eyebrow: "GUIDANCE MODEL",
    title: "Guidance, then review.",
    copy: "AI supports interpretation. Professionals review when it matters.",
    icon: ShieldCheck,
    cta: "Enter RE-COMP",
  },
];

export function AppStatusBar() {
  return (
    <header className="statusbar" aria-label="Phone status">
      <strong>9:41</strong>
      <span className="status-icons" aria-hidden="true">
        <span className="signal-bars">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className="wifi-mark" />
        <span className="battery-mark" />
      </span>
    </header>
  );
}

export function OnboardingFlow({ onComplete }) {
  const [stepIndex, setStepIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState({
    role: "I am a client",
    goal: "Improve performance",
    focus: "Recovery and sleep",
  });
  const [profile, setProfile] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
  });
  const step = onboardingSteps[stepIndex];
  const StepIcon = step.icon;
  const isFinalStep = stepIndex === onboardingSteps.length - 1;
  const shellClassName = `pilot-phone-shell onboarding-shell onboarding-${step.layout}`;

  function goNext() {
    if (isFinalStep) {
      onComplete();
      return;
    }

    setStepIndex((current) => current + 1);
  }

  return (
    <section className={shellClassName} aria-label="RE-COMP onboarding prototype">
      <div className="phone-scroll onboarding-scroll">
        <AppStatusBar />
        <div className="onboarding-brand" aria-label="RE-COMP">
          <img className="brand-symbol" src={recompLogoSymbol} alt="" aria-hidden="true" />
          <span className="brand-wordmark">RE-COMP</span>
        </div>

        {step.image ? (
          <section className="onboarding-media-surface" aria-label={step.title} data-ds="Media Preview / App Shell visual slot">
            <img src={step.image} alt="" aria-hidden="true" />
            <div className="onboarding-media-scrim" />
          </section>
        ) : null}

        <div className="ds-progress-indicator onboarding-progress" aria-label="Onboarding progress" data-ds="Progress Indicator">
          {onboardingSteps.map((item, index) => (
            <button
              aria-label={`Go to ${item.eyebrow.toLowerCase()}`}
              className={index === stepIndex ? "is-active" : ""}
              key={item.id}
              type="button"
              onClick={() => setStepIndex(index)}
            />
          ))}
        </div>

        <section className="ds-flow-panel onboarding-panel" data-ds="App Shell content slot">
          <div className="onboarding-kicker">
            <StepIcon size={16} />
            <small>{step.eyebrow}</small>
          </div>
          <h1>{step.title}</h1>
          <p>{step.copy}</p>

          {step.modules ? <OnboardingModuleGrid modules={step.modules} /> : null}
          {step.options ? (
            <OnboardingChoiceCard
              step={step}
              selected={answers[step.id]}
              onSelect={(value) => setAnswers((current) => ({ ...current, [step.id]: value }))}
            />
          ) : null}
          {step.id === "profile" ? <OnboardingProfileForm profile={profile} onChange={setProfile} /> : null}
          {step.id === "baseline" ? <OnboardingBaselineCard /> : null}
          {step.id === "guidance" ? <OnboardingGuidanceCard /> : null}
        </section>
      </div>

      <footer className="onboarding-actions">
        {stepIndex > 0 ? (
          <button type="button" className="onboarding-secondary" onClick={() => setStepIndex((current) => current - 1)}>
            Back
          </button>
        ) : (
          <button type="button" className="onboarding-secondary" onClick={onComplete}>
            Sign in
          </button>
        )}
        <button type="button" className="onboarding-primary" onClick={goNext}>
          <span>{step.cta}</span>
          <ArrowRight size={18} />
        </button>
      </footer>
    </section>
  );
}

const gateStates = [
  {
    id: "client",
    label: "Client",
    title: "Account ready",
    copy: "Your client Home can open with daily state, check-in and plan access.",
    status: "Ready",
    icon: UserRound,
  },
  {
    id: "baseline",
    label: "Setup",
    title: "Baseline required",
    copy: "Pre-screening and body state should be completed before guidance becomes reliable.",
    status: "Next",
    icon: Scale,
  },
  {
    id: "coach",
    label: "Coach",
    title: "Coach workspace",
    copy: "Coach routes need a selected client context before reports, diet or training can be edited.",
    status: "Role",
    icon: ShieldCheck,
  },
];

export function RoleSetupGate({ onComplete }) {
  const [selectedGate, setSelectedGate] = React.useState("baseline");

  return (
    <section className="pilot-phone-shell role-gate-shell" aria-label="Role and setup gate prototype">
      <div className="phone-scroll role-gate-scroll">
        <AppStatusBar />
        <div className="onboarding-brand" aria-label="RE-COMP">
          <img className="brand-symbol" src={recompLogoSymbol} alt="" aria-hidden="true" />
          <span className="brand-wordmark">RE-COMP</span>
        </div>

        <section className="role-gate-panel ds-flow-panel" data-ds="Setup Required / Role Gate">
          <div className="onboarding-kicker">
            <small>PRE-HOME CHECK</small>
          </div>
          <h1>Choose the right path before Home.</h1>
          <p>Role and setup state decide what the user should see next.</p>
        </section>

        <div className="role-state-list ds-choice-group" aria-label="Available route states">
          {gateStates.map(({ id, label, title, copy, status, icon: Icon }) => (
            <button
              className={selectedGate === id ? "is-selected" : ""}
              key={id}
              type="button"
              onClick={() => setSelectedGate(id)}
            >
              <Icon size={17} />
              <span>
                <em>{label}</em>
                <strong>{title}</strong>
                <small>{copy}</small>
              </span>
              <b>{status}</b>
            </button>
          ))}
        </div>

      </div>

      <footer className="onboarding-actions role-gate-actions">
        <button type="button" className="onboarding-secondary">
          Back
        </button>
        <button type="button" className="onboarding-primary" onClick={onComplete}>
          <span>Open Home</span>
          <ArrowRight size={18} />
        </button>
      </footer>
    </section>
  );
}

function OnboardingModuleGrid({ modules }) {
  return (
    <div className="module-lines" aria-label="RE-COMP modules" data-ds="List Row / Passive information">
      {modules.map(({ label, icon: Icon }) => (
        <div key={label}>
          <Icon size={18} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function OnboardingProfileForm({ profile, onChange }) {
  function updateField(field, value) {
    onChange((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className="ds-form-grid profile-form" aria-label="Registration fields" data-ds="Forms / Text Input">
      <label>
        <span>Name</span>
        <input value={profile.firstName} onChange={(event) => updateField("firstName", event.target.value)} placeholder="Giampaolo" />
      </label>
      <label>
        <span>Surname</span>
        <input value={profile.lastName} onChange={(event) => updateField("lastName", event.target.value)} placeholder="Rossi" />
      </label>
      <label className="is-wide">
        <span>Email</span>
        <input value={profile.email} onChange={(event) => updateField("email", event.target.value)} placeholder="name@example.com" type="email" />
      </label>
      <label className="is-wide">
        <span>Date of birth</span>
        <input value={profile.birthDate} onChange={(event) => updateField("birthDate", event.target.value)} type="date" />
      </label>
    </div>
  );
}

function OnboardingChoiceCard({ step, selected, onSelect }) {
  return (
    <div className="ds-card setup-card" aria-label={`${step.eyebrow} options`} data-ds="Card / Radio choice group">
      <div className="section-heading">
        <span>Selection</span>
        <em>Prototype</em>
      </div>
      <div className="ds-choice-group setup-options">
        {step.options.map((option) => (
          <button
            type="button"
            className={selected === option.title ? "is-selected" : ""}
            key={option.title}
            onClick={() => onSelect(option.title)}
          >
            <strong>{option.title}</strong>
            <small>{option.copy}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

function OnboardingBaselineCard() {
  return (
    <div className="ds-list-grid baseline-card" aria-label="Baseline setup gate" data-ds="List Row / Setup state">
      <article className="ds-card ds-card-compact">
        <Check size={17} />
        <span>Profile</span>
      </article>
      <article className="ds-card ds-card-compact">
        <Scale size={17} />
        <span>Measurements</span>
      </article>
      <article className="ds-card ds-card-compact">
        <HeartPulse size={17} />
        <span>Daily signals</span>
      </article>
    </div>
  );
}

function OnboardingGuidanceCard() {
  return (
    <div className="ds-card guidance-card" aria-label="Guidance model" data-ds="Coach / Guidance Entry">
      <article>
        <span>AI</span>
        <strong>Daily interpretation</strong>
        <small>Based on tracked signals.</small>
      </article>
      <article>
        <span>PRO</span>
        <strong>Specialist review</strong>
        <small>Human validation when needed.</small>
      </article>
    </div>
  );
}

export function AppShell({
  activeTab,
  activeTabId,
  checkInComplete,
  checkInStatus,
  onCheckInComplete,
  onTabChange,
}) {
  const planItems = plan.slice(0, 3).map((item) =>
    item.label === "Morning check-in"
      ? { ...item, meta: checkInComplete ? "Complete" : "Required", done: checkInComplete, current: !checkInComplete }
      : item,
  );

  return (
    <section className="pilot-phone-shell" aria-label="RE-COMP app prototype">
      <div className="phone-scroll">
        <AppStatusBar />
        <AppToolbar activeTab={activeTab} />
        <HeroSummary activeTab={activeTab} />
        <HealthScoreHero activeTab={activeTab} />
        <DailyRecommendation activeTab={activeTab} checkInComplete={checkInComplete} />
        {activeTabId === "today" && !checkInComplete ? (
          <MorningCheckInPanel status={checkInStatus} onComplete={onCheckInComplete} />
        ) : null}
        <SignalMetrics signals={signals} />
        <TodayPlanRows items={planItems} />
      </div>
      <GlassTabBar activeTabId={activeTabId} onTabChange={onTabChange} />
    </section>
  );
}

export function AppToolbar({ activeTab }) {
  return (
    <div className="safe-toolbar" aria-label="Home actions">
      <div className="brand-lockup">
        <img className="brand-symbol" src={recompLogoSymbol} alt="" aria-hidden="true" />
        <span className="brand-wordmark">RE-COMP</span>
      </div>
      <div className="view-title">
        <strong>{activeTab.label}</strong>
        <ChevronRight size={17} />
      </div>
      <button type="button" aria-label="Notifications">
        <Bell size={18} />
      </button>
    </div>
  );
}

export function HeroSummary({ activeTab }) {
  return (
    <section className="hero-summary">
      <span>Good morning, Giampaolo</span>
      <h1>{activeTab.headline}</h1>
      <p>{activeTab.copy}</p>
    </section>
  );
}

export function HealthScoreHero({ activeTab }) {
  return (
    <section className="score-module" aria-label="Daily state">
      <div className="score-main">
        <span>Health Score</span>
        <div className="score-value">
          <strong>{activeTab.score}</strong>
          <small>{activeTab.id === "coach" ? "" : "/100"}</small>
        </div>
        <p>
          <b>{activeTab.delta}</b>
          <span>{activeTab.id === "progress" ? " positive trend" : " vs last 7 days"}</span>
        </p>
      </div>
      <TrendOrbit />
    </section>
  );
}

export function TrendOrbit() {
  return (
    <div className="trend-orbit" aria-hidden="true">
      <svg viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="54" />
        <path d="M24 86c13-22 25-31 39-16 16 17 30 14 51-10" />
      </svg>
    </div>
  );
}

export function DailyRecommendation({ activeTab, checkInComplete = true }) {
  return (
    <section className={`recommendation ${checkInComplete ? "is-ready" : "needs-checkin"}`} aria-label="Today's recommendation">
      <div className="section-heading">
        <span>Today's recommendation</span>
      </div>
      <div>
        <strong>{activeTab.action}</strong>
        <p>
          <span aria-hidden="true" />
          {activeTab.reason}
        </p>
      </div>
      <button type="button" aria-label="Open recommendation">
        <ArrowRight size={22} />
      </button>
    </section>
  );
}

export function MorningCheckInPanel({ onComplete }) {
  return (
    <section className="morning-checkin" aria-label="Morning check-in required">
      <div className="section-heading">
        <span>Morning check-in</span>
        <em>Required</em>
      </div>
      <div className="checkin-grid" aria-label="Readiness inputs">
        <article>
          <small>Energy</small>
          <strong>Good</strong>
        </article>
        <article>
          <small>Soreness</small>
          <strong>Low</strong>
        </article>
        <article>
          <small>Stress</small>
          <strong>Normal</strong>
        </article>
      </div>
      <p>Confirm these inputs to update today's guidance before you start training.</p>
      <button type="button" onClick={onComplete}>
        <Check size={16} />
        <span>Confirm check-in</span>
      </button>
    </section>
  );
}

export function SignalMetrics({ signals: signalItems }) {
  return (
    <section className="key-signals" aria-label="Key signals">
      <span>Key signals</span>
      <div>
        {signalItems.map(({ label, value, state, icon: Icon, tone }) => (
          <article data-tone={tone} key={label}>
            <Icon size={18} />
            <small>{label}</small>
            <strong>{value}</strong>
            <em>{state}</em>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TodayPlanRows({ items }) {
  return (
    <section className="plan-list" id="plan">
      <div className="section-heading">
        <span>Today's plan</span>
        <a href="#plan">View all</a>
      </div>
      {items.map(({ label, meta, icon: Icon, done, current }) => (
        <article className={current ? "is-current" : ""} key={label}>
          <span className={done ? "is-done" : ""}>
            <Icon size={18} />
          </span>
          <div>
            <strong>{label}</strong>
            <small>{meta}</small>
          </div>
          <ChevronRight size={16} />
        </article>
      ))}
    </section>
  );
}

export function GlassTabBar({ activeTabId, onTabChange }) {
  return (
    <nav className="tabbar" aria-label="App navigation">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          className={activeTabId === id ? "is-active" : ""}
          key={id}
          type="button"
          onClick={() => onTabChange(id)}
        >
          <Icon size={18} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
