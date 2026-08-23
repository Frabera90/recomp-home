import React from "react";
import { ArrowUp, Bell, ChevronRight, Heart, Moon, Sun } from "lucide-react";
import auraBackground from "./assets/recomp-aura-background-8090.png";
import recompMark from "./assets/recomp-mark.png";

export function HomeRecoveryLab() {
  return (
    <main className="extracted-home-stage">
      <section className="extracted-home-device">
        <div className="extracted-home-screen">
          <img className="extracted-home-bg" src={auraBackground} alt="" />
          <div className="extracted-home-bg-scrim" />

          <div className="extracted-home-content">
            <header className="extracted-home-nav-header">
              <div className="extracted-home-nav-row">
                <div className="extracted-home-logo-mark">
                  <img src={recompMark} alt="RE-COMP" />
                </div>
                <div className="extracted-home-nav-actions">
                  <button className="extracted-home-icon-button" aria-label="Notifications">
                    <Bell size={22} />
                    <i />
                  </button>
                  <button className="extracted-home-icon-button" aria-label="Theme">
                    <Sun size={22} />
                  </button>
                  <button className="extracted-home-avatar" aria-label="Profile">A</button>
                </div>
              </div>

              <div className="extracted-home-title-block">
                <h1>Good morning,<br />Alessandro.</h1>
                <p>Tuesday, 9 June</p>
              </div>
            </header>

            <section className="extracted-home-recovery-hero true-glass-card">
              <div className="extracted-home-recovery-blur-surface">
                <div className="extracted-home-recovery-top-row">
                  <span>RECOVERY</span>
                  <div className="extracted-home-recovery-arrow">
                    <ArrowUp size={25} />
                  </div>
                </div>

                <div className="extracted-home-recovery-arc-block">
                  <svg className="extracted-home-recovery-arc-svg" width="252" height="252" viewBox="0 0 252 252" aria-hidden="true">
                    <defs>
                      <linearGradient id="extractedRecoveryArc" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#78ffdf" stopOpacity="0.08" />
                        <stop offset="22%" stopColor="#78ffdf" stopOpacity="0.88" />
                        <stop offset="68%" stopColor="#38f0c6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#38f0c6" stopOpacity="0.98" />
                      </linearGradient>
                    </defs>
                    <circle cx="126" cy="126" r="92" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="3" />
                    <path
                      d="M 126 34 A 92 92 0 1 1 34 126"
                      fill="none"
                      stroke="url(#extractedRecoveryArc)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <circle cx="34" cy="126" r="5" fill="#f5fffc" stroke="#34f5d2" strokeWidth="3" />
                  </svg>
                  <div className="extracted-home-recovery-score">
                    <strong>82</strong>
                    <span>/100</span>
                  </div>
                </div>

                <div className="extracted-home-recovery-status">
                  <strong>Recovery Excellent</strong>
                  <span>Proceed as planned.</span>
                </div>

                <div className="extracted-home-metric-row">
                  <article>
                    <strong>68 <span>ms</span></strong>
                    <small>RMSSD</small>
                  </article>
                  <i />
                  <article>
                    <strong className="is-accent">+6%</strong>
                    <small>VS 7-DAY BASELINE</small>
                  </article>
                </div>

                <div className="extracted-home-hrv-block">
                  <div className="extracted-home-hrv-spectrum">
                    <div className="extracted-home-hrv-pill" style={{ left: "51%" }}>
                      <span>68 ms</span>
                    </div>
                    <div className="extracted-home-hrv-base-track" />
                    <div className="extracted-home-hrv-marker" style={{ left: "51%" }} />
                  </div>
                  <div className="extracted-home-hrv-ticks">
                    <span style={{ left: "0%" }}>50</span>
                    <span style={{ left: "33%" }}>62</span>
                    <span style={{ left: "66%" }}>74</span>
                    <span style={{ left: "100%" }}>85</span>
                  </div>
                  <p>Your usual range</p>
                </div>

                <div className="extracted-home-weekly-summary">
                  <p>Weekly avg <b>66 ms</b> <span>◆</span> RHR <b>52 bpm</b> <span>◆</span> Sleep <b>7h 42m</b></p>
                  <ChevronRight size={18} />
                </div>

                <div className="extracted-home-recovery-footer">
                  <article>
                    <Moon size={30} />
                    <div>
                      <span>Sleep</span>
                      <strong>7h 42m</strong>
                    </div>
                  </article>
                  <i />
                  <article>
                    <Heart size={30} />
                    <div>
                      <span>RHR</span>
                      <strong>52 bpm</strong>
                    </div>
                  </article>
                </div>
              </div>
            </section>

            <section className="extracted-home-insights-card">
              <div className="extracted-home-insights-top-row">
                <div className="extracted-home-insights-copy">
                  <h2>Your Insights</h2>
                  <div>
                    <span>8 Risks</span>
                    <p>Neutrophilia suggestive of acute inflammation. Review lifestyle and recent activity.</p>
                    <a href="#">Details</a>
                  </div>
                </div>
              </div>
              <button className="extracted-home-insights-arrow" aria-label="Open insights">
                <ChevronRight size={25} />
              </button>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
