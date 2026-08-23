import React from "react";
import {
  ArrowUpRight,
  Bell,
  Heart,
  Moon,
  Sun,
  TrendingUp,
  UserRound,
} from "lucide-react";
import auroraBackground from "./assets/recomp-aura-background.png";

const tabs = [
  { label: "Home", icon: Sun, active: true },
  { label: "Fuel", icon: Moon },
  { label: "Train", icon: TrendingUp },
  { label: "Body", icon: UserRound },
  { label: "Insight", icon: TrendingUp },
];

function RecoveryCard() {
  return (
    <section className="contrast-recovery-card">
      <div className="contrast-card-head">
        <span>RECOVERY</span>
        <button aria-label="Open recovery">
          <ArrowUpRight size={25} strokeWidth={2.3} />
        </button>
      </div>

      <div className="contrast-ring">
        <svg viewBox="0 0 220 220" aria-hidden="true">
          <circle className="contrast-ring-track" cx="110" cy="110" r="86" />
          <circle className="contrast-ring-value" cx="110" cy="110" r="86" />
          <circle className="contrast-ring-dot" cx="37" cy="90" r="5.5" />
        </svg>
        <div className="contrast-score">
          <strong>82</strong>
          <span>/100</span>
        </div>
      </div>

      <div className="contrast-status">
        <strong>Recovery Excellent</strong>
        <span>Proceed as planned.</span>
      </div>

      <div className="contrast-metrics">
        <article>
          <strong>68 <small>ms</small></strong>
          <span>RMSSD</span>
        </article>
        <i />
        <article>
          <strong>+6%</strong>
          <span>VS 7-DAY BASELINE</span>
        </article>
      </div>

      <div className="contrast-range">
        <div className="contrast-range-line">
          <span />
        </div>
        <div className="contrast-range-numbers">
          <span>50</span>
          <span>62</span>
          <span>74</span>
          <span>85</span>
        </div>
        <b>YOUR USUAL RANGE</b>
      </div>

      <p className="contrast-weekly">
        Weekly avg <strong>66 ms</strong> <span>◇</span> RHR <strong>52 bpm</strong>{" "}
        <span>◇</span> Sleep <strong>7h 42m</strong>
      </p>
    </section>
  );
}

function PhonePreview({ variant, title, note }) {
  return (
    <article className="contrast-sample">
      <div className={`contrast-phone contrast-${variant}`}>
        <img className="contrast-bg" src={auroraBackground} alt="" />
        <div className="contrast-phone-shade" />

        <div className="contrast-shell">
          <header className="contrast-topbar">
            <div className="contrast-logo">R</div>
            <div className="contrast-actions">
              <button aria-label="Notifications">
                <Bell size={20} />
                <i />
              </button>
              <button aria-label="Theme">
                <Sun size={20} />
              </button>
              <button aria-label="Profile">A</button>
            </div>
          </header>

          <section className="contrast-greeting">
            <h1>Good morning,<br />Alessandro.</h1>
            <p>Tuesday, 9 June</p>
          </section>

          <RecoveryCard />

          <section className="contrast-insights-card">
            <div>
              <h2>Your Insights</h2>
              <span>8 Risks</span>
              <p>Neutrophilia suggestive of acute inflammation.</p>
            </div>
            <button aria-label="Open insights">
              <ArrowUpRight size={24} />
            </button>
          </section>

          <nav className="contrast-tabbar" aria-label="Tabs">
            {tabs.map(({ label, icon: Icon, active }) => (
              <button key={label} className={active ? "is-active" : ""}>
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <footer className="contrast-label">
        <strong>{title}</strong>
        <span>{note}</span>
      </footer>
    </article>
  );
}

export function HomeContrastLab() {
  return (
    <main className="contrast-lab-stage">
      <div className="contrast-lab-intro">
        <p>RE-COMP Home material separation lab</p>
        <h1>Background/Card Contrast Tests</h1>
      </div>
      <div className="contrast-lab-grid">
        <PhonePreview
          variant="dark-bg-light-card"
          title="A. Darker Aura / Lighter Surface"
          note="Più stacco per luminanza, ma rischia una card più lattiginosa."
        />
        <PhonePreview
          variant="bright-bg-dark-card"
          title="B. Brighter Aura / Dark Graphite Surface"
          note="Gerarchia più RE-COMP: sfondo vivo, card fisica e stabile."
        />
      </div>
    </main>
  );
}
