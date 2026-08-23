import React, { useState } from "react";
import {
  Activity,
  Bell,
  Camera,
  ChevronRight,
  Dumbbell,
  HeartPulse,
  ImagePlus,
  MessageCircle,
  Moon,
  Plus,
  ScanLine,
  Search,
  Sparkles,
  TrendingDown,
  Sun,
  Utensils,
  UserRound,
  X,
} from "lucide-react";
import auraBackground from "./assets/recomp-open-gauge-background-v3.png";
import recompMark from "./assets/recomp-mark.png";

const miniMetrics = [
  {
    id: "rem-sleep",
    title: "REM SLEEP",
    value: "2h 38m",
    label: "39% above baseline",
    delta: "Target 1h 40m",
    status: "Elevated",
    icon: Moon,
    curve: "M 0 34 C 27 30, 43 28, 57 24 C 72 20, 79 25, 92 21 C 108 15, 120 13, 134 10",
    area: "M 0 34 C 27 30, 43 28, 57 24 C 72 20, 79 25, 92 21 C 108 15, 120 13, 134 10 L 134 48 L 0 48 Z",
  },
  {
    id: "deep-sleep",
    title: "DEEP SLEEP",
    value: "0h 30m",
    label: "40% below baseline",
    delta: "Target 1h 16m",
    status: "Reduced",
    icon: Moon,
    curve: "M 0 35 C 27 31, 42 29, 57 26 C 74 23, 81 28, 95 23 C 111 16, 122 13, 134 11",
    area: "M 0 35 C 27 31, 42 29, 57 26 C 74 23, 81 28, 95 23 C 111 16, 122 13, 134 11 L 134 48 L 0 48 Z",
  },
  {
    id: "hrv-rmssd",
    title: "HRV (RMSSD)",
    value: "50",
    unit: "ms",
    label: "4% above baseline",
    delta: "In range",
    status: "In range",
    icon: Activity,
    curve: "M 0 34 C 27 30, 43 28, 57 24 C 72 20, 79 25, 92 21 C 108 15, 120 13, 134 10",
    area: "M 0 34 C 27 30, 43 28, 57 24 C 72 20, 79 25, 92 21 C 108 15, 120 13, 134 10 L 134 48 L 0 48 Z",
  },
  {
    id: "nighttime-hr",
    title: "NIGHTTIME HR",
    value: "55",
    unit: "bpm",
    label: "4% below baseline",
    delta: "Slightly low",
    status: "Slightly low",
    icon: HeartPulse,
    curve: "M 0 35 C 27 31, 42 29, 57 26 C 74 23, 81 28, 95 23 C 111 16, 122 13, 134 11",
    area: "M 0 35 C 27 31, 42 29, 57 26 C 74 23, 81 28, 95 23 C 111 16, 122 13, 134 11 L 134 48 L 0 48 Z",
  },
];

const todayItems = [
  {
    title: "TRAINING",
    value: "Proceed as planned",
    detail: "Your markers sit above your personal baseline.",
    icon: Dumbbell,
    className: "training",
    status: "Optimal",
  },
  {
    title: "NUTRITION",
    value: "1.240 / 2.150 kcal",
    detail: "Protein 96 / 155 g · Fibre 18 / 30 g",
    icon: Utensils,
    className: "nutrition",
    status: "On track",
  },
  {
    title: "ACTIVITY",
    value: "2.914 / 8.000 steps",
    detail: "You are 5.086 steps from today's target.",
    icon: Activity,
    className: "activity",
    status: "On track",
  },
];

const quickActions = [
  { title: "Descrivi l'alimento", icon: MessageCircle },
  { title: "Importa alimento", icon: ImagePlus },
  { title: "Fotografa l'alimento", icon: Camera },
  { title: "Scansiona alimento", icon: ScanLine },
  { title: "Chiedi a RE-COMP", icon: MessageCircle, featured: true },
  { title: "Cerca alimento", icon: Search },
  { title: "Genera modelli", icon: Sparkles },
  { title: "Vedi modelli", icon: Dumbbell },
  { title: "Registra attività", icon: Activity },
];

function Sparkline({ metric }) {
  const strokeId = `trendStroke-${metric.id}`;
  const areaId = `trendArea-${metric.id}`;
  return (
    <svg className="open-gauge-sparkline" viewBox="0 0 134 48" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={strokeId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8EDFD0" stopOpacity="0.08" />
          <stop offset="22%" stopColor="#6FD8C1" stopOpacity="0.58" />
          <stop offset="64%" stopColor="#2FCDAA" stopOpacity="0.96" />
          <stop offset="100%" stopColor="#18B995" stopOpacity="0.98" />
        </linearGradient>
        <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#24CFA9" stopOpacity="0.28" />
          <stop offset="68%" stopColor="#24CFA9" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#24CFA9" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path className="open-gauge-trend-area" d={metric.area} fill={`url(#${areaId})`} />
      <path className="open-gauge-trend-line" d={metric.curve} stroke={`url(#${strokeId})`} />
      <circle className="open-gauge-trend-dot" cx="134" cy={metric.id === "hrv-rmssd" || metric.id === "rem-sleep" ? "10" : "11"} r="2.7" />
    </svg>
  );
}

function MetricCard({ metric }) {
  const Icon = metric.icon;
  return (
    <article className="open-gauge-metric-card">
      <div className="open-gauge-card-head">
        <div className="open-gauge-card-icon">
          <Icon size={18} />
        </div>
        {metric.status && <em>{metric.status}</em>}
      </div>
      <div className="open-gauge-card-value">
        <strong>{metric.value}</strong>
        {metric.unit && <small>{metric.unit}</small>}
      </div>
      <span className="open-gauge-card-label">{metric.label}</span>
      <Sparkline metric={metric} />
      <div className="open-gauge-delta-row">
        <b>{metric.delta}</b>
        <span>{metric.title}</span>
      </div>
    </article>
  );
}

function PersonalRange() {
  return (
    <section className="open-gauge-range-card" aria-label="Personal range">
      <div className="open-gauge-range-header">
        <span className="open-gauge-range-title">PERSONAL RANGE</span>
        <span className="open-gauge-range-info">i</span>
      </div>
      <div className="open-gauge-range-values">
        <div>
          <strong>68</strong>
          <small>ms</small>
          <span>RMSSD</span>
        </div>
        <div aria-hidden="true" />
        <div>
          <strong>+6%</strong>
          <span>vs 7-day<br />baseline</span>
        </div>
      </div>
      <svg className="open-gauge-range-curve" viewBox="-52 0 434 104" aria-hidden="true">
        <defs>
          <linearGradient id="rangeLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF7547" stopOpacity="0.88" />
            <stop offset="14%" stopColor="#F58C55" stopOpacity="0.72" />
            <stop offset="30%" stopColor="#45D7B7" stopOpacity="0.72" />
            <stop offset="50%" stopColor="#76F1D5" stopOpacity="1" />
            <stop offset="72%" stopColor="#42D2B2" stopOpacity="0.76" />
            <stop offset="88%" stopColor="#D8D16D" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#F2C85E" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="rangeAura" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#55DDBF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#55DDBF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="open-gauge-range-aura" d="M -52 66 C 16 66, 72 54, 126 34 C 153 20, 178 20, 204 32 C 260 54, 314 66, 382 66 L 382 104 L -52 104 Z" />
        <path className="open-gauge-range-line" d="M -52 66 C 16 66, 72 54, 126 34 C 153 20, 178 20, 204 32 C 260 54, 314 66, 382 66" />
        <line className="open-gauge-range-guide" x1="169.6" y1="13" x2="169.6" y2="95" />
        <circle className="open-gauge-range-dot" cx="169.6" cy="23" r="4.5" />
      </svg>
      <div className="open-gauge-range-scale">
        <span>50</span>
        <span>62</span>
        <span>74</span>
        <span>85</span>
      </div>
      <div className="open-gauge-range-footer">
        <div className="open-gauge-range-footer-item">
          <span className="open-gauge-range-footer-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 15.5l4.4-5.2 4.1 4.1 6.8-8" />
              <circle cx="4" cy="15.5" r="1.7" />
              <circle cx="8.4" cy="10.3" r="1.7" />
              <circle cx="12.5" cy="14.4" r="1.7" />
              <circle cx="19.3" cy="6.4" r="1.7" />
            </svg>
          </span>
          <span>Your typical range</span>
          <strong>62 – 74 ms</strong>
        </div>
        <div className="open-gauge-range-footer-item">
          <span className="open-gauge-range-footer-icon">
            <i />
          </span>
          <span>Your baseline</span>
          <strong>68 ms</strong>
        </div>
      </div>
    </section>
  );
}

function TodaySection() {
  return (
    <section className="open-gauge-today" aria-label="Today">
      <h2>TODAY</h2>
      <div className="open-gauge-today-list">
        {todayItems.map((item) => {
          const Icon = item.icon;
          return (
            <article className="open-gauge-today-row" key={item.title}>
              <div className={`open-gauge-today-icon ${item.className}`}>
                <Icon size={24} />
              </div>
              <div className="open-gauge-today-copy">
                <span>{item.title}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </div>
              <em className="open-gauge-today-status">{item.status}</em>
              <ChevronRight className="open-gauge-today-chevron" size={24} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

function RecompInsightCard() {
  return (
    <section className="open-gauge-insight-card" aria-label="RECOMP insight">
      <div className="open-gauge-insight-head">
        <span>RECOMP INSIGHT</span>
        <b>Excellent</b>
      </div>

      <div className="open-gauge-insight-body">
        <div>
          <p className="open-gauge-insight-title">
            Nighttime heart rate is 4% below baseline.
          </p>
          <div className="open-gauge-insight-delta">
            <i><TrendingDown size={17} /></i>
            <span>-4% vs 7-day baseline</span>
          </div>
        </div>
        <svg className="open-gauge-insight-chart" viewBox="0 0 170 90" aria-hidden="true">
          <defs>
            <linearGradient id="insightLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2c746d" stopOpacity="0" />
              <stop offset="42%" stopColor="#78dcca" stopOpacity="0.55" />
              <stop offset="72%" stopColor="#8fffe8" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#4ea79d" stopOpacity="0.38" />
            </linearGradient>
            <linearGradient id="insightArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5dffe4" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#5dffe4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="open-gauge-insight-area" d="M 4 72 C 34 70, 42 54, 66 56 C 92 59, 102 46, 118 20 C 136 -7, 151 50, 166 48 L 166 90 L 4 90 Z" />
          <path className="open-gauge-insight-line" d="M 4 72 C 34 70, 42 54, 66 56 C 92 59, 102 46, 118 20 C 136 -7, 151 50, 166 48" />
          <circle className="open-gauge-insight-dot" cx="66" cy="56" r="3.2" />
        </svg>
      </div>

      <div className="open-gauge-insight-reco">
        <span>RECOMMENDATION</span>
        <strong>Proceed as planned.</strong>
        <p>Your markers sit above your personal baseline. Full planned volume and intensity are cleared.</p>
        <button type="button">View full insight <ChevronRight size={20} /></button>
      </div>
      <button className="open-gauge-insight-open" aria-label="Open full insight">
        <ChevronRight size={26} />
      </button>
    </section>
  );
}

function PhysiologicalStressCard() {
  return (
    <section className="open-gauge-psi-card" aria-label="Physiological stress">
      <div className="open-gauge-psi-head">
        <span>PHYSIOLOGICAL STRESS · PSI</span>
        <b>Minimal</b>
      </div>
      <div className="open-gauge-psi-body">
        <div className="open-gauge-psi-copy">
          <div className="open-gauge-psi-score">
            <strong>0</strong>
            <small>/100</small>
          </div>
          <em>Minimal Stress</em>
        </div>
        <svg className="open-gauge-psi-chart" viewBox="0 0 220 86" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="psiLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#A8F4FF" stopOpacity="0.14" />
              <stop offset="42%" stopColor="#63DCF2" stopOpacity="0.96" />
              <stop offset="100%" stopColor="#27BFD8" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="psiArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#63DCF2" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#63DCF2" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="open-gauge-psi-area" d="M 3 50 C 42 50, 58 51, 73 49 C 94 46, 90 24, 107 22 C 127 20, 131 40, 151 45 C 174 51, 191 49, 217 55 L 217 86 L 3 86 Z" />
          <path className="open-gauge-psi-line" d="M 3 50 C 42 50, 58 51, 73 49 C 94 46, 90 24, 107 22 C 127 20, 131 40, 151 45 C 174 51, 191 49, 217 55" />
          <circle className="open-gauge-psi-dot" cx="217" cy="55" r="3" />
        </svg>
      </div>
      <p className="open-gauge-psi-description">Physiological markers are close to baseline.</p>
      <div className="open-gauge-psi-footer">
        <span>0/5 markers altered</span>
        <span>High confidence</span>
        <b>↙ -2 vs yesterday</b>
        <ChevronRight size={18} />
      </div>
    </section>
  );
}

function SleepCard() {
  const bars = [42, 28, 48, 58, 34, 42, 54, 39, 44, 50, 37, 35, 32, 45, 56];
  return (
    <article className="open-gauge-sleep-card">
      <div className="open-gauge-sleep-copy">
        <div className="open-gauge-orb">
          <Moon size={20} />
        </div>
        <span className="open-gauge-card-label">SLEEP</span>
        <div className="open-gauge-sleep-time">
          <strong>7</strong>
          <small>h</small>
          <strong>42</strong>
          <small>m</small>
        </div>
        <p>Sleep score</p>
        <b>Good</b>
      </div>
      <div className="open-gauge-bars" aria-hidden="true">
        {bars.map((height, index) => (
          <i key={index} style={{ height }} />
        ))}
      </div>
    </article>
  );
}

function SmallSignal({ icon: Icon, title, value, unit, meta, color }) {
  return (
    <article className="open-gauge-small-signal">
      <div className="open-gauge-orb">
        <Icon size={19} />
      </div>
      <span className="open-gauge-card-label">{title}</span>
      <div className="open-gauge-small-value">
        <strong>{value}</strong>
        {unit && <small>{unit}</small>}
      </div>
      <p>{meta}</p>
      <b style={{ color }}>{title === "ACTIVITY" ? "612 kcal" : "8,932 steps"}</b>
    </article>
  );
}

export function HomeOpenGaugeConcept() {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);

  return (
    <main className="open-gauge-stage">
      <section className="open-gauge-phone">
        <img className="open-gauge-bg" src={auraBackground} alt="" />
        <div className="open-gauge-scrim" />

        <div className="open-gauge-content" style={{ "--open-gauge-bg": `url(${auraBackground})` }}>
          <header className="open-gauge-top">
            <img className="open-gauge-logo" src={recompMark} alt="RE-COMP" />
            <div className="open-gauge-actions">
              <button aria-label="Notifications">
                <Bell size={20} />
                <i />
              </button>
              <button aria-label="Profile">A</button>
            </div>
          </header>

          <section className="open-gauge-hero">
            <h1>Good morning,<br />Alessandro.</h1>
            <p>Tuesday, 9 June</p>
            <button className="open-gauge-coach-chip" type="button" aria-label="AI Coach mode">
              <i />
              <span>AI Coach</span>
              <ChevronRight size={12} />
            </button>

            <div className="open-gauge-arc" aria-label="Recovery 82 out of 100">
              <svg viewBox="0 0 280 170" width="280" height="170" aria-hidden="true">
                <defs>
                  <linearGradient id="recoveryArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ECFFFA" stopOpacity="1" />
                    <stop offset="18%" stopColor="#F7FFFD" stopOpacity="1" />
                    <stop offset="42%" stopColor="#E9FFF9" stopOpacity="0.92" />
                    <stop offset="68%" stopColor="#A9E9DF" stopOpacity="0.52" />
                    <stop offset="100%" stopColor="#58AFA6" stopOpacity="0.08" />
                  </linearGradient>
                  <linearGradient id="recoveryArcBase" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A9E9DF" stopOpacity="0.04" />
                    <stop offset="50%" stopColor="#F4FFFC" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#58AFA6" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <path className="open-gauge-track" d="M 30 150 A 118 118 0 1 1 250 150" />
                <path className="open-gauge-progress" d="M 30 150 A 118 118 0 1 1 250 150" />
              </svg>
              <div className="open-gauge-score">
                <span className="open-gauge-score-value">82</span>
                <span className="open-gauge-score-max">/100</span>
              </div>

              <div className="open-gauge-recovery-copy">
                <strong>Recovery Excellent</strong>
                <span>Proceed as planned.</span>
              </div>
            </div>
          </section>

          <PersonalRange />

          <TodaySection />

          <RecompInsightCard />

          <section className="open-gauge-data-zone" aria-label="Daily signals">
            <div className="open-gauge-data-scrim" />
            <section className="open-gauge-grid">
              {miniMetrics.map((metric) => (
                <MetricCard key={metric.title} metric={metric} />
              ))}
            </section>

            <PhysiologicalStressCard />
          </section>
        </div>

        {isActionMenuOpen && (
          <div className="open-gauge-action-popover" role="dialog" aria-label="Quick actions">
            <div className="open-gauge-action-grid">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    className={action.featured ? "is-featured" : undefined}
                    type="button"
                    key={action.title}
                  >
                    <span><Icon size={21} /></span>
                    <b>{action.title}</b>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <nav className="open-gauge-tabbar" aria-label="Navigation">
          <div className="open-gauge-tabbar-main">
            <button className="is-active"><Sun size={20} /><span>Home</span></button>
            <button><Utensils size={20} /><span>Fuel</span></button>
            <button><Dumbbell size={20} /><span>Train</span></button>
            <button><UserRound size={20} /><span>Health</span></button>
          </div>
          <button
            className={`open-gauge-plus${isActionMenuOpen ? " is-open" : ""}`}
            aria-label={isActionMenuOpen ? "Close actions" : "Add"}
            aria-expanded={isActionMenuOpen}
            onClick={() => setIsActionMenuOpen((value) => !value)}
          >
            {isActionMenuOpen ? <X size={28} /> : <Plus size={30} />}
          </button>
        </nav>
      </section>
    </main>
  );
}
