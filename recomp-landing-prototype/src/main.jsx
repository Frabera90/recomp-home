import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  Activity,
  ArrowRight,
  Bell,
  Brain,
  CalendarCheck,
  Check,
  ChevronRight,
  Dna,
  Dumbbell,
  HeartPulse,
  Home,
  LineChart,
  LockKeyhole,
  MessageCircle,
  Mouse,
  Moon,
  MoreHorizontal,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Utensils,
  UserRound,
  Video,
} from "lucide-react";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const appSignals = [
  { label: "Sleep", value: "7h 45m", state: "Good", icon: Moon },
  { label: "Recovery", value: "82%", state: "Stable", icon: HeartPulse },
  { label: "HRV", value: "78 ms", state: "Improving", icon: Activity },
];

const appPlan = [
  { label: "Morning Check", meta: "Complete", icon: Check, done: true },
  { label: "Lower-body strength", meta: "Moderate load · 45 min", icon: Dumbbell, done: false },
  { label: "Nutrition Plan", meta: "Protein target · 160 g", icon: Utensils, done: false },
  { label: "Mobility", meta: "10 min before sleep", icon: CalendarCheck, done: false },
];

const appQuickActions = [
  { label: "Ask coach", icon: MessageCircle },
  { label: "Plan", icon: CalendarCheck },
  { label: "Food", icon: Utensils },
];

const modules = [
  {
    icon: HeartPulse,
    label: "Recovery",
    copy: "Understand readiness, sleep quality and recovery debt before you train.",
    metric: "82%",
  },
  {
    icon: Utensils,
    label: "Nutrition",
    copy: "Turn meals and macro targets into a daily plan that adapts to your goal.",
    metric: "2,600",
  },
  {
    icon: Dna,
    label: "Biomarkers",
    copy: "Connect blood markers and body signals to practical health priorities.",
    metric: "42",
  },
  {
    icon: Brain,
    label: "AI Coach",
    copy: "Receive plain-language guidance instead of disconnected raw metrics.",
    metric: "24/7",
  },
];

const storySteps = [
  {
    eyebrow: "01 Assess",
    title: "Collect the signals that matter.",
    body: "RE-COMP brings together training, recovery, nutrition, biomarkers and check-ins into one health state.",
  },
  {
    eyebrow: "02 Interpret",
    title: "Make the data understandable.",
    body: "The system translates numbers into meaning: what is improving, what is blocking progress and what needs attention.",
  },
  {
    eyebrow: "03 Guide",
    title: "Turn insight into the next action.",
    body: "Every important surface leads to a recommendation: train, recover, adjust nutrition, book support or follow the plan.",
  },
  {
    eyebrow: "04 Improve",
    title: "Build momentum over time.",
    body: "Progress is shown as a living health trajectory, not a static dashboard of disconnected metrics.",
  },
];

const intelligenceMetrics = [
  { label: "Health Score", value: "84", unit: "/100", state: "Excellent", trend: "Up 6%" },
  { label: "Sleep", value: "7 h 45", unit: "m", state: "Good", trend: "Stable" },
  { label: "Recovery", value: "82", unit: "%", state: "Ready", trend: "Improving" },
];

const operatingSteps = [
  {
    icon: Activity,
    label: "Sync",
    copy: "Bring training, recovery, habits, nutrition and labs into one place.",
  },
  {
    icon: Brain,
    label: "Understand",
    copy: "Translate the signals into a readable health state and daily priorities.",
  },
  {
    icon: Sparkles,
    label: "Improve",
    copy: "Turn guidance into small actions that compound across the week.",
  },
];

const workflowSteps = [
  {
    id: "01",
    phase: "Baseline",
    title: "Start with your baseline",
    text: "A comprehensive assessment gives you a clear picture of your current health state.",
    badge: "Measured. Objective. Personal.",
    image: "/references/recomp-app/athlete-card-01.png",
    variant: "baseline",
    overlay: [
      { icon: ShieldCheck, label: "Baseline completed" },
      { icon: Dna, label: "84 biomarkers" },
      { icon: Activity, label: "Body composition" },
      { icon: Moon, label: "Sleep profile" },
    ],
  },
  {
    id: "02",
    phase: "Health model",
    title: "Everything becomes one view",
    text: "All your data is unified into one intelligent health model that shows what matters.",
    badge: "Integrated. Intelligent. Actionable.",
    image: "/references/recomp-app/athlete-card-02.png",
    variant: "model",
    overlay: [
      { label: "Health Score", value: "84", state: "Excellent" },
      { label: "Recovery", value: "82%", state: "Good" },
      { label: "Sleep", value: "7h45", state: "Stable" },
    ],
  },
  {
    id: "03",
    phase: "Expert layer",
    title: "Experts stay connected",
    text: "Coaches, clinicians and nutrition specialists collaborate from the same source of truth.",
    badge: "Collaborative. Evidence-led. Trusted.",
    image: "/references/recomp-app/coach-consultation.png",
    variant: "experts",
    overlay: [
      { icon: Moon, label: "Recovery", state: "reviewed" },
      { icon: Activity, label: "Training adjusted", state: "approved" },
      { icon: Utensils, label: "Nutrition updated", state: "approved" },
    ],
  },
  {
    id: "04",
    phase: "Daily guidance",
    title: "Turn insight into action",
    text: "Personalized guidance helps you make better daily choices that compound.",
    badge: "Personalized. Practical. Progressive.",
    image: "/references/recomp-app/athlete-card-03.png",
    variant: "guidance",
    overlay: [
      { icon: Activity, label: "Mobility", value: "10 min" },
      { icon: Moon, label: "Sleep target", value: "8h" },
      { icon: LineChart, label: "Recovery", value: "Improving" },
    ],
  },
];

const signalActionCards = [
  {
    icon: Activity,
    title: "Baseline Analytics",
    subtitle: "Body Check foundation",
    description: "84 biomarkers tracked",
    meta: "Core alignment mapped",
    accent: "neutral",
    chart: "radial",
    stat: 84,
    unit: "biomarkers",
    bars: [48, 62, 57, 74, 66],
  },
  {
    icon: ShieldCheck,
    title: "Risk Optimization",
    subtitle: "Volatility and load control",
    description: "System deviation reduced",
    meta: "Recovery volatility down",
    accent: "recovery",
    chart: "bars",
    stat: 78,
    unit: "stability",
    bars: [42, 48, 61, 70, 78],
  },
  {
    icon: HeartPulse,
    title: "Health Score",
    subtitle: "Daily operating signal",
    description: "94 optimization score",
    meta: "Moderate lower-body strength",
    accent: "action",
    chart: "line",
    stat: 94,
    unit: "score",
    bars: [40, 65, 55, 84, 94],
  },
];

const pillarCards = [
  {
    icon: Moon,
    title: "Recovery",
    copy: "Optimize sleep, stress and training load before fatigue becomes a problem.",
  },
  {
    icon: Utensils,
    title: "Nutrition",
    copy: "Translate your goal, biomarkers and routine into a plan that feels realistic.",
  },
  {
    icon: Dna,
    title: "Biomarkers",
    copy: "Connect lab markers and body signals to clear health priorities.",
  },
  {
    icon: UserRound,
    title: "Coaching",
    copy: "Add human context when the data needs interpretation and accountability.",
  },
];

const scienceItems = [
  {
    icon: Stethoscope,
    title: "Baseline first",
    copy: "The Body Check becomes the starting point for a measurable health state.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-led",
    copy: "Recommendations should be grounded in testing, behavior and expert review.",
  },
  {
    icon: LockKeyhole,
    title: "Private by design",
    copy: "Sensitive health data needs calm, legible and trustworthy product surfaces.",
  },
];

const testimonials = [
  {
    quote: "I finally understood why my recovery changed from week to week.",
    name: "Marco B.",
    role: "Endurance athlete",
  },
  {
    quote: "The plan feels personal without becoming another dashboard to manage.",
    name: "Alessio P.",
    role: "Professional",
  },
  {
    quote: "Coaching and data finally live in the same place.",
    name: "Giulia T.",
    role: "Designer",
  },
];

const accessPlans = [
  {
    title: "Body Check",
    subtitle: "Baseline assessment",
    detail: "Start with the entry point that already exists in RE-COMP and reposition it as health intelligence.",
    cta: "Start free",
    features: ["Initial body state", "Recovery and habits review", "Next-step recommendation"],
  },
  {
    title: "Health OS",
    subtitle: "Daily system",
    detail: "Connect recovery, nutrition, biomarkers and coaching into one operating layer.",
    cta: "Join waitlist",
    features: ["Unified dashboard", "AI insight layer", "Weekly guidance loop"],
    featured: true,
  },
  {
    title: "Coach Layer",
    subtitle: "Human oversight",
    detail: "For users who need accountability, context and professional support.",
    cta: "Talk to the team",
    features: ["Coach dashboard", "Plan adherence", "Progress review"],
  },
];

const productScreens = [
  {
    icon: Moon,
    title: "Recovery",
    copy: "Health score, sleep and readiness become one daily decision surface.",
    image: "/references/recomp-app/screen-home.png",
    className: "large",
  },
  {
    icon: Dna,
    title: "Biomarkers",
    copy: "Lab values stay readable, ranked and connected to what matters next.",
    image: "/references/recomp-app/screen-biomarkers.png",
  },
  {
    icon: Utensils,
    title: "Plan",
    copy: "Training, nutrition, breathing and mobility move into one executable plan.",
    image: "/references/recomp-app/screen-plan.png",
  },
  {
    icon: Brain,
    title: "AI Coach",
    copy: "Guidance stays conversational, precise and grounded in the user's real state.",
    image: "/references/recomp-app/screen-ai-coach.png",
  },
];

const pillarStackCards = [
  {
    id: "system",
    image: "/images/pillars/pillar-system.png",
    alt: "RE-COMP operating layer with health score, signals and recommendation",
  },
  {
    id: "recovery",
    image: "/images/pillars/pillar-recovery.png",
    alt: "RE-COMP recovery score and weekly recovery trend",
  },
  {
    id: "biomarkers",
    image: "/images/pillars/pillar-biomarkers.png",
    alt: "RE-COMP key biomarkers list and trend insight",
  },
  {
    id: "plan",
    image: "/images/pillars/pillar-plan.png",
    alt: "RE-COMP daily recommendation and today's plan",
  },
];

const pillarsStorySlides = [
  {
    id: "system",
    eyebrow: "4 pillars. One system.",
    title: "Everything you need to perform, recover and live better.",
    description:
      "Recovery, biomarkers, planning and coaching stay connected in one calm operating layer.",
    visual: "system",
    background: "ocean",
  },
  {
    id: "understanding",
    eyebrow: "4 pillars. One system.",
    title: "Understand what's really happening.",
    description:
      "RE-COMP interprets your data in context, so you see patterns, not just numbers.",
    visual: "understanding",
    background: "orange",
  },
  {
    id: "plan",
    eyebrow: "4 pillars. One system.",
    title: "Get a clear plan for today.",
    description:
      "Daily recommendations are built around your recovery, goals and training load.",
    visual: "plan",
    background: "cyan",
  },
  {
    id: "biomarkers",
    eyebrow: "4 pillars. One system.",
    title: "Track what matters. Improve over time.",
    description:
      "Biomarkers, trends and insights help you make better decisions every day.",
    visual: "biomarkers",
    background: "deep-blue",
  },
];

const planItems = ["Morning Check", "Strength Training", "Nutrition Plan", "Mobility", "Breathing"];

const proofReviews = [
  {
    name: "Marco B.",
    role: "Endurance athlete",
    quote: "I finally understood why my recovery was lagging behind my training load.",
  },
  {
    name: "Laura R.",
    role: "Hybrid performer",
    quote: "The plan feels personal without becoming noisy. I know what to adjust each day.",
  },
  {
    name: "Giulia T.",
    role: "Wellness coach",
    quote: "Biomarkers and habits finally live in one readable place.",
  },
  {
    name: "Alessio P.",
    role: "Founder",
    quote: "The coach layer gives me context when the numbers alone are not enough.",
  },
  {
    name: "Nadia M.",
    role: "Runner",
    quote: "My sleep and nutrition changed faster once the weekly guidance became clear.",
  },
  {
    name: "Luca F.",
    role: "Strength athlete",
    quote: "It turns complex health data into decisions I can actually follow.",
  },
];

const expertFaces = [
  { image: "expert-01.png", name: "Elena Rossi", role: "Performance coach" },
  { image: "expert-02.png", name: "Marta Leone", role: "Clinical nutritionist" },
  { image: "expert-03.png", name: "Daniel Ricci", role: "Strength trainer" },
  { image: "expert-04.png", name: "Kenji Tanaka", role: "Biomarker specialist" },
  { image: "expert-05.png", name: "Sara Conti", role: "Recovery coach" },
  { image: "expert-06.png", name: "Matteo Ferri", role: "Mobility trainer" },
  { image: "expert-07.png", name: "Arianna Greco", role: "Longevity clinician" },
  { image: "expert-08.png", name: "Luca Marin", role: "Data performance lead" },
];

const athleteCards = [
  "athlete-card-01.png",
  "athlete-card-02.png",
  "athlete-card-03.png",
  "athlete-card-04.png",
  "athlete-card-05.png",
  "athlete-card-06.png",
];

const heroPillars = [
  {
    icon: Moon,
    label: "Recovery",
    line: "for Recovery.",
  },
  {
    icon: Utensils,
    label: "Nutrition",
    line: "for Nutrition.",
  },
  {
    icon: Dna,
    label: "Biomarkers",
    line: "through Biomarkers.",
  },
  {
    icon: UserRound,
    label: "Coaching",
    line: "with Coaching.",
  },
];

const heroStepOrder = [0, 1, 2, 3];
const premiumCardTransition = {
  type: "spring",
  mass: 0.2,
  stiffness: 380,
  damping: 30,
};

function SpotlightTiltCard({ children, className = "", index = 0, isDimmed, onHoverEnd, onHoverStart }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setCoords({ x, y });
    setRotate({
      x: ((y - centerY) / centerY) * -10,
      y: ((x - centerX) / centerX) * 10,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverStart();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    onHoverEnd();
  };

  return (
    <motion.article
      className={`${className} ${isDimmed ? "is-dimmed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={cardRef}
      style={{
        filter: isDimmed ? "blur(0.7px) saturate(0.58) brightness(0.72)" : "blur(0px) saturate(1) brightness(1)",
        opacity: isDimmed ? 0.34 : 1,
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isDimmed ? 0.98 : 1})`,
        zIndex: isDimmed ? 0 : 2,
        transition: isHovered ? "opacity 500ms ease, filter 500ms ease" : "transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, filter 500ms ease",
      }}
    >
      {isHovered && (
        <>
          <span
            className="access-card-spotlight"
            style={{
              "--spotlight-x": `${coords.x}px`,
              "--spotlight-y": `${coords.y}px`,
            }}
          />
          <span className="access-card-sweep" />
        </>
      )}
      <div className="access-card-content">{children}</div>
    </motion.article>
  );
}

function useSmoothScroll() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    window.recompLenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      if (window.recompLenis === lenis) {
        window.recompLenis = null;
      }
      lenis.destroy();
    };
  }, []);
}

function Root() {
  const isAppPilot = window.location.pathname.startsWith("/app-pilot");
  return isAppPilot ? <AppPilot /> : <App />;
}

function App() {
  useSmoothScroll();
  const heroRef = useRef(null);
  const storyRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-video",
        { scale: 1.16 },
        {
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".signal-pill",
        { opacity: 0, y: 28, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".signal-grid",
            start: "top 78%",
            end: "top 38%",
            scrub: true,
          },
        }
      );

      gsap.to(".story-progress", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".module-card",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".modules-grid",
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".landing-section .landing-copy, .landing-section .center-heading, .landing-section .system-copy, .landing-section .science-copy, .landing-section .human-copy, .landing-section .access-heading",
        { opacity: 0, y: 42, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".connected-workflow-section",
            start: "top 74%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.utils.toArray(".app-screen-card, .floating-app-panel, .device-screen, .bento-product-card, .proof-log-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 58, scale: 0.96, filter: "blur(14px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 94%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.fromTo(
        ".access-card",
        { opacity: 0, y: 34, scale: 0.98, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.78,
          ease: "power3.out",
          stagger: 0.16,
          scrollTrigger: {
            trigger: ".access-grid",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".signal-stack-card",
        {
          opacity: 0,
          "--stack-reveal-y": "42px",
          "--stack-reveal-scale": 0.94,
          filter: "blur(14px) saturate(0.86)",
        },
        {
          opacity: (index, card) => Number.parseFloat(getComputedStyle(card).getPropertyValue("--card-opacity")) || 1,
          "--stack-reveal-y": "0px",
          "--stack-reveal-scale": 1,
          filter: (index, card) =>
            card.classList.contains("is-active")
              ? "blur(0px) saturate(1) brightness(1)"
              : "blur(0px) saturate(0.72) brightness(0.86)",
          duration: 0.82,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: ".signal-card-stack",
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".international-patient-badge",
        { opacity: 0, y: 18, scale: 0.94, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".app-download-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".app-download-copy",
        { opacity: 0, y: 34, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.92,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".app-download-showcase",
            start: "top 74%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".app-download-mockup",
        { opacity: 0, y: 42, scale: 0.94, filter: "blur(16px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".app-download-showcase",
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.utils.toArray(".stat-value").forEach((valueEl) => {
        const target = Number(valueEl.dataset.count || 0);
        const suffix = valueEl.dataset.suffix || "";
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 0.82,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valueEl,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            valueEl.textContent = `${Math.round(counter.value)}${suffix}`;
          },
          onReverseComplete: () => {
            valueEl.textContent = `0${suffix}`;
          },
        });
      });

      gsap.fromTo(
        ".stat-label span",
        { xPercent: -105 },
        {
          xPercent: 0,
          duration: 0.62,
          ease: "power3.out",
          stagger: 0.11,
          scrollTrigger: {
            trigger: ".stats-strip",
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".operating-steps article",
        { "--line-scale": 0, "--content-opacity": 0, "--content-x": "-18px" },
        {
          "--line-scale": 1,
          "--content-opacity": 1,
          "--content-x": "0px",
          duration: 0.78,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: ".operating-steps",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <Navigation />
      <Hero refEl={heroRef} />
      <AppDownloadSection />
      <PartnerProofSection />
      <IntelligenceSection />
      <SignalToActionSection />
      <OneSystemSignalsSection />
      <BeamFieldSection />
      <PillarsLandingSection />
      <ScienceSection />
      <SocialProofSection />
      <HumanLayerSection />
      <AccessSection />
      <LandingFinalCTA />
    </main>
  );
}

function AppDownloadBeams() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !host || !ctx) {
      return undefined;
    }

    let frame = 0;
    let animationId = 0;
    let beams = [];

    const createBeam = (width, height) => ({
      x: Math.random() * width * 1.45 - width * 0.2,
      y: Math.random() * height,
      width: 24 + Math.random() * 58,
      length: height * (1.25 + Math.random() * 0.85),
      angle: -35 + (Math.random() * 18 - 9),
      speed: 0.32 + Math.random() * 0.55,
      hue: 190 + Math.random() * 70,
      opacity: 0.08 + Math.random() * 0.16,
      pulse: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      beams = Array.from({ length: Math.max(9, Math.floor(width / 130)) }, () => createBeam(width, height));
    };

    const drawBeam = (beam) => {
      const pulse = 0.82 + Math.sin(frame * 0.018 + beam.pulse) * 0.18;

      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(0.22, `hsla(${beam.hue}, 90%, 72%, 0)`);
      gradient.addColorStop(0.52, `hsla(${beam.hue}, 90%, 72%, ${beam.opacity * pulse})`);
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    };

    const animate = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "screen";

      beams.forEach((beam) => {
        beam.y -= beam.speed;
        beam.x += Math.sin(frame * 0.006 + beam.pulse) * 0.25;

        if (beam.y < -beam.length * 0.9) {
          Object.assign(beam, createBeam(width, height), {
            y: height + beam.length * 0.15,
          });
        }

        drawBeam(beam);
      });

      ctx.globalCompositeOperation = "source-over";
      frame += 1;
      animationId = requestAnimationFrame(animate);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-download-beams" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}

function AppDownloadSection() {
  const stores = [
    {
      platform: "App Store",
      badge: "app-store",
      eyebrow: "Download on the",
      label: "App Store",
    },
    {
      platform: "Google Play",
      badge: "google-play",
      eyebrow: "Get it on",
      label: "Google Play",
    },
  ];

  return (
    <section id="download" className="app-download-section" aria-label="Download RE-COMP app">
      <AppDownloadBeams />
      <div className="app-download-inner">
        <button className="international-patient-badge" type="button" aria-label="International Patient">
          <img src="/international-patient-logo.png" alt="" aria-hidden="true" />
        </button>

        <div className="app-download-showcase">
          <div className="app-download-copy reveal-on-scroll">
            <p>RE-COMP HEALTH OS</p>
            <h2>
              Welcome to the <span className="download-title-gradient">future</span> of daily{" "}
              <span className="download-title-gradient">health intelligence</span>.
            </h2>
            <span>
              Recovery, biomarkers, training and nutrition become one clear system
              that tells you what matters today.
            </span>
          </div>

          <div className="app-download-mockup reveal-on-scroll" aria-label="RE-COMP app preview">
            <img src="/images/recomp-future-hand-mockup.png" alt="RE-COMP app shown on an iPhone held in hand" />
          </div>
        </div>

        <div className="app-download-actions">
          {stores.map((store) => (
            <a
              className="download-store-button"
              href="#start"
              key={store.platform}
              aria-label={`Download RE-COMP on ${store.platform}`}
            >
              <span className="download-neon-line top" aria-hidden="true" />
              <span className={`store-badge-native is-${store.badge}`} aria-hidden="true">
                {store.badge === "app-store" ? (
                  <svg className="store-logo is-apple" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16.2 12.9c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.8-1.4-.1-2.6.8-3.3.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.2 9.1.8 1.1 1.7 2.4 2.9 2.3 1.2-.1 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.3.9-1.3 1.2-2.5 1.2-2.6-.1-.1-2.8-1.1-2.9-3.5ZM14 6.3c.6-.8 1.1-1.8.9-2.8-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.7-.9 2.7 1 .1 2-.5 2.7-1.3Z" />
                  </svg>
                ) : (
                  <svg className="store-logo is-play" viewBox="0 0 24 24" aria-hidden="true">
                    <path className="play-blue" d="M4.2 3.1c-.4.3-.6.8-.6 1.5v14.8c0 .7.2 1.2.6 1.5l8.5-8.9L4.2 3.1Z" />
                    <path className="play-green" d="m12.7 12 2.6-2.7-9.1-5.1c-.7-.4-1.4-.8-2-.9l8.5 8.7Z" />
                    <path className="play-yellow" d="m12.7 12-8.5 8.7c.6-.1 1.3-.5 2-.9l9.1-5.1-2.6-2.7Z" />
                    <path className="play-red" d="m15.3 9.3-2.6 2.7 2.6 2.7 3.4-1.9c1.2-.7 1.2-1.8 0-2.5l-3.4-2Z" />
                  </svg>
                )}
                <span className="store-copy">
                  <small>{store.eyebrow}</small>
                  <strong>{store.label}</strong>
                </span>
              </span>
              <ArrowRight size={17} aria-hidden="true" />
              <span className="download-neon-line bottom" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerProofSection() {
  const partners = [
    "Superpower",
    "Everlab",
    "Bevel",
    "WHOOP",
    "Apple Health",
    "Strava",
  ];

  return (
    <section className="partner-proof-section" aria-label="RE-COMP partner proof">
      <div className="partner-proof-strip">
        <p>Scelti dai migliori partner per trasformare ogni segnale in guida quotidiana.</p>
        <div className="partner-logo-rail">
          <div className="partner-logo-track">
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <span className="partner-logo" key={`${partner}-${index}`}>
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector(".hero-scroll");
      if (!hero) {
        setIsScrolled(window.scrollY > window.innerHeight * 0.8);
        return;
      }

      const distance = hero.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, window.scrollY / distance));
      setIsScrolled(progress > 0.86);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={`nav ${isScrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="RE-COMP home">
        <span className="brand-logo-container" aria-hidden="true">
          <img
            className="brand-logo-symbol"
            src="/references/recomp-app/loghi/recomp-logo-line-symbol-light.png"
            alt=""
          />
        </span>
        <span className="brand-wordmark" aria-hidden="true">RE COMP</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#system">System</a>
        <a href="#guidance">Guidance</a>
        <a href="#modules">Modules</a>
      </nav>
      <a className="nav-cta" href="#start">
        Join waitlist
        <ArrowRight size={20} />
      </a>
    </header>
  );
}

function Hero({ refEl }) {
  const [displayedPillar, setDisplayedPillar] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isReleasingHero, setIsReleasingHero] = useState(false);
  const videoRef = useRef(null);
  const scrollLock = useRef(false);
  const contentTimer = useRef(null);
  const touchStartY = useRef(null);
  const active = heroPillars[displayedPillar];
  const scrollExitProgress = Math.min(1, Math.max(0, (scrollProgress - 0.74) / 0.18));
  const exitProgress = isReleasingHero ? 1 : scrollExitProgress;
  const springTransition = { stiffness: 150, damping: 22, mass: 1.2, type: "spring" };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.controls = false;
    video.disablePictureInPicture = true;
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("disablepictureinpicture", "");
    video.setAttribute("controlslist", "nodownload noplaybackrate noremoteplayback");

    const startVideo = () => {
      const playAttempt = video.play();
      if (playAttempt?.catch) {
        playAttempt.catch(() => {});
      }
    };

    startVideo();
    video.addEventListener("canplay", startVideo, { once: true });
    window.addEventListener("scroll", startVideo, { passive: true, once: true });
    window.addEventListener("touchstart", startVideo, { passive: true, once: true });
    window.addEventListener("pointerdown", startVideo, { passive: true, once: true });
    return () => {
      video.removeEventListener("canplay", startVideo);
      window.removeEventListener("scroll", startVideo);
      window.removeEventListener("touchstart", startVideo);
      window.removeEventListener("pointerdown", startVideo);
    };
  }, []);

  useEffect(() => {
    const updateHeroProgress = () => {
      if (!refEl.current) return;
      const rect = refEl.current.getBoundingClientRect();
      const distance = refEl.current.offsetHeight - window.innerHeight;
      const rawProgress = distance > 0 ? -rect.top / distance : 0;
      const progress = Number.isFinite(rawProgress) ? Math.min(1, Math.max(0, rawProgress)) : 0;
      setScrollProgress(progress);
      if (progress < 0.02 && !scrollLock.current) {
        setIsReleasingHero(false);
        setActiveStep(0);
      }
    };

    updateHeroProgress();
    window.addEventListener("scroll", updateHeroProgress, { passive: true });
    window.addEventListener("resize", updateHeroProgress);
    return () => {
      window.removeEventListener("scroll", updateHeroProgress);
      window.removeEventListener("resize", updateHeroProgress);
    };
  }, [refEl]);

  useEffect(() => {
    if (contentTimer.current) {
      window.clearTimeout(contentTimer.current);
    }

    contentTimer.current = window.setTimeout(() => {
      setDisplayedPillar(heroStepOrder[activeStep]);
    }, activeStep === displayedPillar ? 0 : 360);

    return () => {
      if (contentTimer.current) {
        window.clearTimeout(contentTimer.current);
      }
    };
  }, [activeStep, displayedPillar]);

  useEffect(() => {
    const isHeroLocked = () => {
      if (!refEl.current) return false;
      const hero = refEl.current;
      const rect = hero.getBoundingClientRect();
      return rect.top <= 2 && rect.bottom >= window.innerHeight * 0.72;
    };

    const releaseHero = () => {
      if (!refEl.current) return;
      const hero = refEl.current;
      const targetElement = document.getElementById("download") || hero.nextElementSibling;
      const target = targetElement
        ? Math.max(0, window.scrollY + targetElement.getBoundingClientRect().top)
        : hero.offsetTop + hero.offsetHeight;
      const isMobile = window.matchMedia("(max-width: 820px)").matches;

      scrollLock.current = true;
      setIsReleasingHero(true);
      document.body.classList.add("is-post-hero-snapping");

      const snapToTarget = (immediate = false) => {
        if (window.recompLenis?.scrollTo) {
          window.recompLenis.scrollTo(target, immediate
            ? { immediate: true }
            : {
                duration: isMobile ? 0.16 : 0.34,
                easing: (t) => 1 - Math.pow(1 - t, 5),
              });
        } else {
          window.scrollTo({ top: target, left: 0, behavior: immediate ? "auto" : "smooth" });
        }
      };

      window.setTimeout(() => snapToTarget(false), isMobile ? 24 : 140);
      window.setTimeout(() => {
        snapToTarget(true);
        document.body.classList.remove("is-post-hero-snapping");
        scrollLock.current = false;
        setIsReleasingHero(false);
      }, isMobile ? 280 : 760);
    };

    const moveDial = (direction, event) => {
      if (scrollLock.current || !isHeroLocked()) return false;

      if (direction < 0 && activeStep === 0) return false;
      if (direction > 0 && activeStep === heroStepOrder.length - 1) {
        event.preventDefault();
        event.stopPropagation();
        releaseHero();
        return true;
      }

      event.preventDefault();
      event.stopPropagation();
      const nextStep = Math.min(heroStepOrder.length - 1, Math.max(0, activeStep + direction));
      setActiveStep(nextStep);
      window.scrollTo({ top: refEl.current.offsetTop, left: 0, behavior: "auto" });

      scrollLock.current = true;
      window.setTimeout(() => {
        scrollLock.current = false;
      }, 560);
      return true;
    };

    const goToHeroStep = (event) => {
      if (Math.abs(event.deltaY) < 10) return;
      moveDial(event.deltaY > 0 ? 1 : -1, event);
    };

    const onTouchStart = (event) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (event) => {
      if (touchStartY.current === null) return;
      const touchY = event.touches[0]?.clientY ?? touchStartY.current;
      const delta = touchStartY.current - touchY;
      if (Math.abs(delta) < 28) return;
      const handled = moveDial(delta > 0 ? 1 : -1, event);
      if (handled) touchStartY.current = touchY;
    };

    window.addEventListener("wheel", goToHeroStep, { passive: false, capture: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false, capture: true });
    return () => {
      window.removeEventListener("wheel", goToHeroStep, { capture: true });
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove, { capture: true });
    };
  }, [activeStep, refEl]);

  return (
    <section className="hero hero-scroll" id="top" ref={refEl}>
      <div
        className="hero-stage"
        style={{
          "--hero-exit": exitProgress,
        }}
      >
        <div className="hero-video-frame" aria-hidden="true">
          <video
            ref={videoRef}
            className="hero-video"
            src="/references/Female_runner_in_landscapes_202607051359.mp4"
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            controlsList="nodownload noplaybackrate noremoteplayback"
          />
        </div>
        <div className="hero-shade" />
        <div className="hero-watermark-crop" />
        <div className="hero-orbit" aria-label="RE-COMP health pillars">
          <motion.div
            className="dial-ring"
            animate={{ rotate: activeStep * 90 }}
            transition={springTransition}
          >
            <div className="dial-track" />
            {heroPillars.map((pillar, index) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  className={`icon-slot ${index === activeStep ? "is-active" : ""}`}
                  key={pillar.label}
                  style={{ "--slot-angle": `${index * -90}deg` }}
                  aria-label={pillar.label}
                >
                  <motion.span
                    className="icon-counter"
                    animate={{ rotate: activeStep * -90 + index * 90 }}
                    transition={springTransition}
                  >
                    <span className="orbit-icon">
                      <PillarIcon size={32} />
                    </span>
                  </motion.span>
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Your health.</span>
            <span>One intelligent system.</span>
          </h1>
          <motion.p
            className="hero-chapter-line"
            key={active.line}
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.56, delay: 0.06, ease: [0.42, 0, 0.18, 1] }}
          >
            {active.line}
          </motion.p>
          <motion.form
            className="waitlist-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            onSubmit={(event) => event.preventDefault()}
          >
            <input aria-label="Email address" placeholder="Enter your email" type="email" />
            <button type="submit" aria-label="Join waitlist">
              <ArrowRight size={20} />
            </button>
          </motion.form>
          <span className="waitlist-note">Get early access. Be the first to know.</span>
        </div>
        <div className="scroll-orb">
          <Mouse size={24} aria-hidden="true" />
          <span aria-hidden="true">â†“</span>
          <small>Scroll to discover the Health OS</small>
        </div>
      </div>
    </section>
  );
}

function IntelligenceSection() {
  return (
    <section className="connected-workflow-section" id="system">
      <motion.div
        className="workflow-heading"
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">One connected workflow</span>
        <h2>
          Everything connects. <span>Naturally.</span>
        </h2>
        <p>
          From your baseline to <strong>daily action</strong>, RE-COMP unifies data, experts and
          guidance in one seamless health workflow.
        </p>
      </motion.div>

      <div className="workflow-timeline" aria-hidden="true">
        <span className="workflow-line" />
        <motion.span
          className="workflow-line-active"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 3.2, ease: "linear" }}
        />
        <div className="workflow-nodes">
          {workflowSteps.map((step, index) => (
            <motion.div
              className="workflow-node"
              key={step.id}
              initial={{ "--node-glow": 0 }}
              whileInView={{ "--node-glow": 1 }}
              viewport={{ once: false, amount: 0.65 }}
              transition={{ delay: index * 0.62, duration: 0.28 }}
            >
              <span>{step.phase}</span>
              <i />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="workflow-card-grid">
        {workflowSteps.map((step, index) => (
          <motion.article
            className={`workflow-card is-${step.variant}`}
            key={step.id}
            initial={{ opacity: 0, y: 26, scale: 0.985, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ delay: index * 0.62, duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="workflow-card-media">
              <img src={step.image} alt="" />
              <span className="workflow-card-index">{step.id}</span>
              <WorkflowOverlay step={step} />
            </div>
            <div className="workflow-card-copy">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <span>{step.badge}</span>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="workflow-privacy">
        <LockKeyhole size={14} />
        <span>Your data is private, secure and never shared.</span>
      </div>
    </section>
  );
}

function SignalToActionSection() {
  const [activeCard, setActiveCard] = useState(2);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % signalActionCards.length);
    }, 4600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="signal-action-section" aria-labelledby="signal-action-title">
      <motion.div
        className="signal-action-copy"
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow light">How RE-COMP thinks</span>
        <h2 id="signal-action-title">From signal to action.</h2>
        <p>
          RE-COMP connects what your body is telling you, understands the context and turns
          it into one clear next step.
        </p>
      </motion.div>

      <div
        className="signal-card-stack"
        onMouseLeave={() => setActiveCard(2)}
        role="list"
        aria-label="Signal to action layers"
      >
        {signalActionCards.map(({ icon: Icon, title, subtitle, description, meta, accent, chart, stat, unit, bars }, index) => {
          const isActive = activeCard === index;
          return (
            <motion.button
              className={`signal-stack-card is-${accent} ${isActive ? "is-active" : ""}`}
              key={title}
              type="button"
              role="listitem"
              onClick={() => setActiveCard(index)}
              onFocus={() => setActiveCard(index)}
              onMouseEnter={() => setActiveCard(index)}
              onPointerDown={() => setActiveCard(index)}
              initial={{
                opacity: 0,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.38 }}
              transition={{ delay: index * 0.24, duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="signal-card-header">
                <span className="signal-card-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="signal-card-title">{title}</span>
                  <small>{subtitle}</small>
                </span>
                <ArrowRight size={16} />
              </span>

              <span className="signal-card-body">
                <span>
                  <small>{description}</small>
                  <strong>
                    {stat}
                    <em>{unit === "score" ? "/100" : unit === "stability" ? "%" : ""}</em>
                  </strong>
                </span>
                <SignalCardChart type={chart} bars={bars} stat={stat} title={title} />
              </span>

              <span className="signal-card-footer">
                <small>{meta}</small>
                <span aria-hidden="true" />
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

function SignalCardChart({ type, bars, stat, title }) {
  if (type === "radial") {
    return (
      <span className="signal-mini-chart signal-radial-chart" aria-hidden="true">
        <svg viewBox="0 0 120 120">
          <circle className="radial-base" cx="60" cy="60" r="44" />
          <circle className="radial-progress" cx="60" cy="60" r="44" />
        </svg>
        <span>{stat}</span>
      </span>
    );
  }

  if (type === "line") {
    return (
      <span className="signal-mini-chart signal-line-chart" aria-hidden="true">
        <svg viewBox="0 0 160 90" preserveAspectRatio="none">
          <path className="line-grid" d="M8 20H152M8 45H152M8 70H152" />
          <path className="line-path" d="M10 68C26 54 34 32 50 42C66 52 72 70 90 58C106 46 116 24 134 30C144 34 150 24 156 18" />
        </svg>
      </span>
    );
  }

  return (
    <span className="signal-mini-chart signal-bar-chart" aria-hidden="true">
      {bars.map((height, barIndex) => (
        <i key={`${title}-${barIndex}`} style={{ "--bar-height": `${height}%`, "--bar-delay": `${barIndex * 80}ms` }} />
      ))}
    </span>
  );
}

function BeamFieldSection() {
  const marqueeText =
    "RE-COMP is your continuous health OS - recovery, biomarkers, training, nutrition and coaching translated into one clear next action.";

  return (
    <section className="beam-field-section" aria-label="RE-COMP system scanner">
      <div className="beam-field">
        <div className="beam-grid" aria-hidden="true" />
        <div className="beam-marquee" aria-hidden="true">
          <div>
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function OneSystemSignalsSection() {
  const recoveryPoints = [
    { x: 0, y: 62, tone: "danger" },
    { x: 8, y: 38, tone: "danger" },
    { x: 16, y: 50, tone: "warm" },
    { x: 24, y: 58, tone: "warm" },
    { x: 32, y: 52, tone: "warm" },
    { x: 40, y: 48, tone: "warm" },
    { x: 48, y: 54, tone: "warm" },
    { x: 56, y: 36, tone: "good" },
    { x: 64, y: 56, tone: "good" },
    { x: 72, y: 58, tone: "good" },
    { x: 80, y: 52, tone: "good" },
    { x: 88, y: 42, tone: "good" },
    { x: 96, y: 34, tone: "good" },
  ];
  const hrvBars = [18, 28, 20, 24, 34, 30, 26, 42, 32, 38, 28, 36, 48, 56, 64, 58, 72];
  const planItemsCompact = [
    { icon: Check, title: "Morning Check-in", meta: "Complete", done: true },
    { icon: ArrowRight, title: "Mobility", meta: "10 min" },
    { icon: Activity, title: "Strength", meta: "25 min" },
  ];
  const biomarkers = [
    { label: "Apolipoprotein B", value: "1.9 mmol/L", tone: "warn" },
    { label: "Vitamin D", value: "32 ng/mL", tone: "good" },
    { label: "Ferritin", value: "85 ug/L", tone: "good" },
  ];

  return (
    <section className="signal-system-section" aria-labelledby="signal-system-title">
      <motion.div
        className="signal-system-heading"
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="signal-system-title">One system. Every signal.</h2>
        <p>
          RE-COMP turns recovery, biomarkers, sleep, training and nutrition into one
          continuous health intelligence system.
        </p>
      </motion.div>

      <div className="signal-system-grid">
        <article className="system-health-card system-card">
          <div className="health-score-arc" aria-hidden="true">
            <svg viewBox="0 0 240 160">
              <path className="arc-base" d="M28 138 A92 92 0 0 1 212 138" />
              <path className="arc-progress" d="M28 138 A92 92 0 0 1 148 50" />
              <circle cx="148" cy="50" r="6" />
            </svg>
          </div>
          <span>Health Score</span>
          <strong>
            84<small>/100</small>
          </strong>
          <p>
            Above your baseline
            <small>+7% vs last 7 days</small>
          </p>
          <em>Your body is responding well. Keep going.</em>
        </article>

        <article className="system-card recovery-trend-card">
          <span className="system-label">Recovery</span>
          <div className="system-card-title">
            <strong>82%</strong>
            <em>Stable</em>
          </div>
          <div className="recovery-plot" aria-hidden="true">
            <div className="plot-lines" />
            {recoveryPoints.map((point, index) => (
              <i
                className={`plot-dot is-${point.tone}`}
                key={`recovery-${index}`}
                style={{ "--x": `${point.x}%`, "--y": `${point.y}%` }}
              />
            ))}
            <small className="plot-max">100</small>
            <small className="plot-min">0</small>
            <div className="plot-days">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                <span key={`${day}-${index}`}>{day}</span>
              ))}
            </div>
          </div>
          <div className="system-insight">
            <i />
            <span>Recovery is stable and above your weekly average.</span>
          </div>
        </article>

        <div className="system-side-stack">
          <article className="system-card recommendation-card-large">
            <span className="system-label">Today's recommendation</span>
            <h3>Moderate lower-body strength</h3>
            <p>Recovery improved. Good window for strength.</p>
            <div className="recommendation-why">
              <span aria-hidden="true">
                <ArrowRight size={28} />
              </span>
              <div>
                <strong>Why this recommendation?</strong>
                <small>Based on your recovery, HRV and training load.</small>
              </div>
              <ChevronRight size={20} />
            </div>
          </article>

          <article className="system-card today-plan-card">
            <div className="system-card-row-head">
              <span className="system-label">Today's plan</span>
              <small>3 activities</small>
            </div>
            {planItemsCompact.map(({ icon: Icon, title, meta, done }) => (
              <div className="plan-compact-row" key={title}>
                <span className={done ? "is-done" : ""}>
                  <Icon size={18} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <small>{meta}</small>
                </div>
                <ChevronRight size={18} />
              </div>
            ))}
          </article>
        </div>

        <article className="system-card hrv-card">
          <span className="system-label">HRV</span>
          <div className="system-card-title">
            <strong>
              78<small> ms</small>
            </strong>
            <em>Improving</em>
          </div>
          <div className="hrv-bars" aria-hidden="true">
            {hrvBars.map((height, index) => (
              <i key={`hrv-${index}`} style={{ "--bar": `${height}%`, "--delay": `${index * 55}ms` }} />
            ))}
          </div>
          <p>Your HRV is trending up. Great sign of adaptation.</p>
        </article>

        <article className="system-card sleep-card">
          <span className="system-label">Sleep</span>
          <div className="system-card-title">
            <strong>7h 45m</strong>
            <em className="blue">Good</em>
          </div>
          <div className="sleep-line" aria-hidden="true">
            <span />
          </div>
          <div className="sleep-times">
            <small>23:00</small>
            <small>07:00</small>
          </div>
          <div className="sleep-quality">
            <Moon size={26} />
            <span>
              Sleep quality
              <strong>Good</strong>
            </span>
          </div>
        </article>

        <article className="system-card biomarker-list-card">
          <div className="system-card-row-head">
            <span className="system-label">Biomarkers</span>
            <small>3 updates</small>
          </div>
          {biomarkers.map((item) => (
            <div className="biomarker-row" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <i className={`is-${item.tone}`} />
            </div>
          ))}
          <a href="#modules">
            View all biomarkers
            <ChevronRight size={18} />
          </a>
        </article>
      </div>
    </section>
  );
}

function AppPilot() {
  const isClientHome = window.location.pathname.includes("/client-home");

  return (
    <main className="app-pilot-page">
      <section className="app-pilot-stage app-pilot-stage-direct">
        <motion.div
          className="app-phone-shell"
          initial={{ opacity: 0, y: 28, scale: 0.96, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="app-phone-screen">
            {isClientHome ? <AppClientHomeScreen /> : <AppHomeScreen />}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function AppClientHomeScreen() {
  const clientTabs = [
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
      coach: "Stop two reps before failure and add mobility before sleep.",
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
      coach: "Stop two reps before failure and add mobility before sleep.",
    },
    {
      id: "progress",
      label: "Progress",
      icon: LineChart,
      headline: "Recovery and consistency are trending together.",
      copy: "Your weekly load is rising while sleep quality stays stable.",
      score: "7",
      delta: "days",
      action: "Weekly review",
      reason: "Training load is climbing without sleep disruption.",
      coach: "Your trend is positive. Keep intensity controlled for two more sessions.",
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
      coach: "Your HRV is slightly low. Prioritize recovery if soreness increases.",
    },
  ];
  const [activeClientTab, setActiveClientTab] = useState("today");
  const activeTab = clientTabs.find((tab) => tab.id === activeClientTab) ?? clientTabs[0];

  return (
    <div className="app-home-screen client-home-screen">
      <header className="app-statusbar" aria-label="Phone status">
        <strong>9:41</strong>
        <span className="app-status-icons" aria-hidden="true">
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

      <div className="client-safe-toolbar" aria-label="Home actions">
        <div className="client-brand-lockup">
          <img src="/references/recomp-app/loghi/recomp-logo-line-symbol-light.png" alt="" />
          <span>RE-COMP</span>
        </div>
        <div className="client-view-title">
          <strong>{activeTab.label}</strong>
          <ChevronRight size={17} />
        </div>
        <button type="button" aria-label="Notifications">
          <Bell size={18} />
        </button>
      </div>

      <section className="client-hero-summary">
        <span>Good morning, Giampaolo</span>
        <h1>{activeTab.headline}</h1>
        <p>{activeTab.copy}</p>
      </section>

      <section className="client-score-module" aria-label="Daily state">
        <div className="client-score-main">
          <span>Health Score</span>
          <div className="client-score-value">
            <strong>{activeTab.score}</strong>
            <small>{activeTab.id === "coach" ? "" : "/100"}</small>
          </div>
          <p>
            <b>{activeTab.delta}</b>
            <span>{activeTab.id === "progress" ? " positive trend" : " vs last 7 days"}</span>
          </p>
        </div>
        <div className="client-trend-orbit" aria-hidden="true">
          <svg viewBox="0 0 140 140">
            <circle cx="70" cy="70" r="54" />
            <path d="M24 86c13-22 25-31 39-16 16 17 30 14 51-10" />
          </svg>
        </div>
      </section>

      <section className="client-recommendation" aria-label="Today's recommendation">
        <div className="client-section-heading">
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

      <section className="client-key-signals" aria-label="Key signals">
        <span>Key signals</span>
        <div>
          {appSignals.map(({ label, value, state, icon: Icon }) => (
            <article key={label}>
              <Icon size={18} />
              <small>{label}</small>
              <strong>{value}</strong>
              <em>{state}</em>
            </article>
          ))}
        </div>
      </section>

      <section className="client-plan-list" id="plan">
        <div className="client-section-heading">
          <span>Today's plan</span>
          <a href="#plan">View all</a>
        </div>
        {appPlan.slice(0, 3).map(({ label, meta, icon: Icon, done }) => (
          <article key={label}>
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

      <nav className="glass-tabbar glass-tabbar-dark client-tabbar" aria-label="App navigation">
        {clientTabs.map(({ id, label, icon: Icon }) => (
          <button
            className={activeClientTab === id ? "is-active" : ""}
            key={id}
            type="button"
            onClick={() => setActiveClientTab(id)}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

function AppHomeScreen() {
  return (
    <div className="app-home-screen app-home-screen-dark">
      <header className="app-statusbar" aria-label="Phone status">
        <strong>9:41</strong>
        <span className="app-status-icons" aria-hidden="true">
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

      <section className="app-device-hero" aria-label="RE-COMP system preview">
        <div className="device-cluster" aria-hidden="true">
          <div className="mini-device mini-device-left">
            <div className="liquid-bubbles">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="main-device">
            <div className="main-device-bezel">
              <span>RE-COMP</span>
              <strong>84</strong>
              <small>Health Score</small>
              <div className="device-radar" />
            </div>
          </div>
          <div className="mini-device mini-device-right">
            <strong>82</strong>
            <small>recovery</small>
          </div>
        </div>
      </section>

      <section className="app-hero-copy">
        <p className="app-kicker">Daily system</p>
        <h1>Good morning</h1>
        <p>
          Your recovery is stable. RE-COMP has enough signal to guide today's load.
        </p>
        <a href="#context" className="app-info-link">
          <span>i</span>
          View today's recovery context
        </a>
      </section>

      <button className="app-primary-pill" type="button">
        Start today's plan
      </button>

      <section className="app-state-panel" id="context">
        <div className="app-state-panel-header">
          <div>
            <span>Live state</span>
            <strong>Moderate training recommended.</strong>
          </div>
          <small>Updated now</small>
        </div>
        <div className="app-dark-signal-strip" aria-label="Current signals">
          {appSignals.map(({ label, value }) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>

      <nav className="glass-tabbar glass-tabbar-dark" aria-label="App navigation">
        <a className="is-active" href="#today">
          <Home size={18} />
          <span>Today</span>
        </a>
        <a href="#plan">
          <CalendarCheck size={18} />
          <span>Plan</span>
        </a>
        <a href="#coach">
          <MessageCircle size={18} />
          <span>Coach</span>
        </a>
      </nav>
    </div>
  );
}

function WorkflowOverlay({ step }) {
  if (step.variant === "baseline") {
    return (
      <div className="workflow-overlay workflow-checklist">
        {step.overlay.map(({ icon: Icon, label }) => (
          <div key={label}>
            <Icon size={14} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (step.variant === "model") {
    return (
      <div className="workflow-overlay workflow-model">
        {step.overlay.map(({ label, value, state }) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{state}</small>
          </div>
        ))}
      </div>
    );
  }

  if (step.variant === "experts") {
    return (
      <div className="workflow-overlay workflow-review">
        <strong>Weekly review</strong>
        {step.overlay.map(({ icon: Icon, label, state }) => (
          <div key={label}>
            <Icon size={14} />
            <span>{label}</span>
            <small>{state}</small>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="workflow-overlay workflow-guidance">
      <strong>Today's focus</strong>
      {step.overlay.map(({ icon: Icon, label, value }) => (
        <div key={label}>
          <Icon size={15} />
          <span>
            {label}
            <small>{value}</small>
          </span>
        </div>
      ))}
    </div>
  );
}

function SystemViewSection() {
  return (
    <section className="landing-section system-view-section" id="guidance">
      <video
        className="system-background-video"
        src="/references/recomp-app/biceps-training-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="system-video-shade" />
      <div className="system-copy">
        <span className="eyebrow light">Your health. In your hand.</span>
        <h2>All your data. One clear view.</h2>
        <p>
          Training, nutrition, recovery, biomarkers and coaching become one daily loop: sync the
          signals, understand the state, then improve with guidance.
        </p>
        <div className="operating-steps">
          {operatingSteps.map(({ label, copy }, index) => (
            <article key={label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{`${label}. ${copy}`}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsLandingSection() {
  const [activePillar, setActivePillar] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

    const updateActivePillar = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(0.999, Math.max(0, -rect.top / scrollable));
      setActivePillar(Math.min(pillarsStorySlides.length - 1, Math.floor(progress * pillarsStorySlides.length)));
    };

    updateActivePillar();
    window.addEventListener("scroll", updateActivePillar, { passive: true });

    return () => window.removeEventListener("scroll", updateActivePillar);
  }, []);

  const goToPillar = (nextIndex) => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const targetIndex = (nextIndex + pillarsStorySlides.length) % pillarsStorySlides.length;
    const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
    const top = section.offsetTop + scrollable * (targetIndex / pillarsStorySlides.length);
    window.scrollTo({ top, behavior: "smooth" });
    setActivePillar(targetIndex);
  };

  return (
    <section className="pillars-story-section" id="modules" ref={sectionRef}>
      <div className="pillars-story-heading">
        <span className="eyebrow">4 pillars. One system.</span>
        <h2>One system for every signal.</h2>
        <p>
          RE-COMP turns recovery, biomarkers, sleep, training and nutrition into one
          continuous health intelligence system.
        </p>
      </div>
      <div className="pillars-story-sticky">
        <div className="pillars-story-shell">
          {pillarsStorySlides.map((slide, index) => {
            const offset = index - activePillar;
            const stateClass = offset === 0 ? "is-active" : offset < 0 ? "is-before" : "is-after";

            return (
              <article
                aria-hidden={activePillar !== index}
                className={`pillars-story-card is-${slide.background} ${stateClass}`}
                key={slide.id}
                style={{ "--slide-offset": offset, "--slide-index": index }}
              >
                <div className="pillars-story-copy">
                  <span className="eyebrow">{slide.eyebrow}</span>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <div className="pillars-story-controls">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                      <em>/ 04</em>
                    </span>
                    <button
                      aria-label="Show next pillar"
                      onClick={() => goToPillar(index + 1)}
                      type="button"
                    >
                      <ArrowRight size={22} />
                    </button>
                  </div>
                </div>
                <div className="pillars-story-media">
                  <span className="pillars-story-texture" aria-hidden="true" />
                  <PillarsStoryVisual type={slide.visual} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PillarsStoryVisual({ type }) {
  if (type === "plan") {
    return (
      <div className="story-ui-panel story-plan-ui">
        <div className="story-ui-header">
          <span>Today's recommendation</span>
          <button type="button" aria-label="Open recommendation">
            <ArrowRight size={22} />
          </button>
        </div>
        <h3>Moderate lower-body strength</h3>
        <p><span /> Recovery improved. Good window for strength.</p>
        <div className="story-signal-row">
          <div>
            <Moon size={22} />
            <span>Sleep quality</span>
            <strong>Good</strong>
          </div>
          <div>
            <HeartPulse size={22} />
            <span>Recovery</span>
            <strong>82%</strong>
          </div>
          <div>
            <Activity size={22} />
            <span>HRV</span>
            <strong>78 ms</strong>
          </div>
        </div>
        <div className="story-plan-list">
          {["Morning Check-in", "Mobility", "Strength"].map((item, index) => (
            <div key={item}>
              <Check size={17} />
              <span>{item}</span>
              <small>{index === 0 ? "Complete" : index === 1 ? "10 min" : "25 min"}</small>
              <ChevronRight size={16} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "understanding") {
    return (
      <div className="story-ui-panel story-recovery-ui">
        <span className="story-card-label">Recovery score</span>
        <div className="story-score-line">
          <strong>82<small>%</small></strong>
          <em>Stable</em>
        </div>
        <p className="story-trend">+3% vs last 7 days</p>
        <svg className="story-line-chart" viewBox="0 0 520 160" role="img" aria-label="Weekly recovery trend">
          <path d="M18 126 C 64 80 92 78 128 92 S 202 112 244 80 S 324 76 360 88 S 440 58 500 42" />
          {[18, 98, 168, 238, 322, 404, 500].map((x, index) => (
            <circle cx={x} cy={[126, 80, 96, 78, 88, 60, 42][index]} key={x} r="8" />
          ))}
        </svg>
        <div className="story-insight-card">
          <Brain size={24} />
          <span>Recovery is stable and above your weekly average.</span>
        </div>
      </div>
    );
  }

  if (type === "biomarkers") {
    return (
      <div className="story-ui-panel story-biomarker-ui">
        <div className="story-ui-header">
          <span>Key biomarkers</span>
          <small>3 updates</small>
        </div>
        {[
          ["Apolipoprotein B", "1.9", "mmol/L", "warning"],
          ["Vitamin D", "32", "ng/mL", "ok"],
          ["Ferritin", "85", "ug/L", "ok"],
          ["Omega-3 Index", "8.1", "%", "ok"],
        ].map(([label, value, unit, state]) => (
          <div className="story-biomarker-row" key={label}>
            <span>{label}</span>
            <strong>{value} <small>{unit}</small></strong>
            <i className={`is-${state}`} />
          </div>
        ))}
        <div className="story-insight-card is-light">
          <LineChart size={24} />
          <span>
            <strong>Upward trend</strong>
            Your key markers are improving.
          </span>
          <ArrowRight size={20} />
        </div>
      </div>
    );
  }

  return (
    <div className="story-ui-panel story-system-ui">
      <div className="story-health-row">
        <div>
          <span>Health Score</span>
          <strong>84<small>/100</small></strong>
          <em>+7% vs last 7 days</em>
        </div>
        <div className="story-score-orbit">
          <span />
          <svg viewBox="0 0 120 70" aria-hidden="true">
            <path d="M6 44 C 28 8 46 64 68 34 S 98 12 114 30" />
          </svg>
        </div>
      </div>
      <div className="story-key-signals">
        {[
          [Moon, "Sleep", "7h 45m", "Good"],
          [HeartPulse, "Recovery", "82%", "Stable"],
          [Activity, "HRV", "78 ms", "Improving"],
        ].map(([Icon, label, value, state]) => (
          <div key={label}>
            <Icon size={20} />
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{state}</small>
          </div>
        ))}
      </div>
      <div className="story-recommendation-strip">
        <span>Today's recommendation</span>
        <strong>Moderate lower-body strength</strong>
        <small>Recovery improved. Good window for strength.</small>
      </div>
    </div>
  );
}

function PillarStackVisual({ type }) {
  if (type === "recovery") {
    return (
      <div className="pillar-visual recovery-visual">
        <span className="pillar-organic-field" aria-hidden="true" />
        <div className="recovery-dashboard pillar-ui-cluster">
          <div className="score-orb">
            <span>Health Score</span>
            <strong>84</strong>
            <small>Excellent</small>
          </div>
          <div className="metric-grid">
            <MetricTile label="Sleep" value="7h45" />
            <MetricTile label="Recovery" value="82%" />
            <MetricTile label="HRV" value="78ms" />
          </div>
          <div className="mini-chart" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <p>Your body is ready. Moderate training recommended.</p>
        </div>
      </div>
    );
  }

  if (type === "biomarkers") {
    return (
      <div className="pillar-visual biomarker-visual">
        <span className="pillar-organic-field" aria-hidden="true" />
        <div className="biomarker-panel pillar-ui-cluster">
          {[
            ["Vitamin D", "75 ng/mL", "Optimal"],
            ["Omega-3 Index", "8.2%", "Improving"],
            ["Glucose", "92 mg/dL", "Stable"],
            ["CRP", "0.4 mg/L", "Low"],
          ].map(([label, value, state], index) => (
            <div className={index === 1 ? "is-highlighted" : ""} key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{state}</small>
            </div>
          ))}
          <p>Trending up. Retest suggested in 8 weeks.</p>
        </div>
      </div>
    );
  }

  if (type === "plan") {
    return (
      <div className="pillar-visual plan-visual">
        <span className="pillar-organic-field" aria-hidden="true" />
        <div className="daily-plan-panel pillar-ui-cluster">
          <div className="plan-header">
            <span>Today</span>
            <strong>Plan</strong>
          </div>
          {planItems.map((item, index) => (
            <div className="plan-row" key={item}>
              <Check size={16} />
              <div>
                <strong>{item}</strong>
                <span>{index === 0 ? "Complete" : index === 1 ? "Lower body - 45 min" : index === 2 ? "2,600 kcal" : index === 3 ? "10 min" : "5 min"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pillar-visual coach-visual">
      <span className="pillar-organic-field" aria-hidden="true" />
      <div className="coach-panel pillar-ui-cluster">
        <div className="coach-orb">
          <Brain size={24} />
        </div>
        <div className="chat-bubble user">How should I train today?</div>
        <div className="chat-bubble ai">
          Your HRV is slightly low. Prioritize recovery today.
        </div>
        <div className="recommendation-card">
          <span>Recommendation</span>
          <strong>Mobility + early sleep window</strong>
          <small>Adjusted to your current recovery state.</small>
        </div>
      </div>
    </div>
  );
}

function MetricTile({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ScienceSection() {
  return (
    <section className="landing-section science-section">
      <video
        className="science-video"
        src="/references/Female_runner_in_landscapes_202607051359.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="science-video-shade" />
      <div className="science-copy">
        <span className="eyebrow light">Science first</span>
        <h2>Built on evidence, trusted by people.</h2>
        <p>
          RE-COMP should feel less like a fitness package and more like a premium layer between
          performance, prevention and care.
        </p>
        <a className="ghost-link" href="#start">
          Our methodology
          <ArrowRight size={17} />
        </a>
      </div>
      <div className="science-list">
        {scienceItems.map(({ icon: Icon, title, copy }) => (
          <article key={title}>
            <Icon size={22} />
            <div>
              <strong>{title}</strong>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="science-visual">
        <div className="science-image-card is-reference-photo">
          <img
            src="/images/recomp-science-hand-reference.png"
            alt="Hand holding an iPhone with RE-COMP app"
          />
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="landing-section social-proof-section">
      <div className="landing-copy compact">
        <span className="eyebrow">Trusted by people who push forward.</span>
        <h2>Athlete stories, live system signals.</h2>
        <p>Testimonials should feel like proof from real training lives, not static quote cards.</p>
      </div>
      <div className="athlete-slider" aria-label="Athlete testimonial image slider">
        <div className="athlete-track">
          {[...athleteCards, ...athleteCards].map((card, index) => (
            <img
              src={`/references/recomp-app/${card}`}
              alt={index < athleteCards.length ? "Athlete testimonial card" : ""}
              aria-hidden={index >= athleteCards.length}
              key={`${card}-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="log-carousel" aria-label="RE-COMP athlete review feed">
        <div className="log-track">
          {[...proofReviews, ...proofReviews].map((review, index) => (
            <article className="proof-log-card" key={`${review.name}-${index}`}>
              <span>Member story</span>
              <p>"{review.quote}"</p>
              <small>
                {review.name} / {review.role}
              </small>
            </article>
          ))}
        </div>
      </div>
      <div className="stats-strip">
        <Stat value="20+" label="Health metrics" />
        <Stat value="4" label="Core pillars" />
        <Stat value="24/7" label="Guidance layer" />
        <Stat value="1" label="Daily system" />
      </div>
    </section>
  );
}

function HumanLayerSection() {
  return (
    <section className="landing-section human-layer-section">
      <div className="human-copy">
        <span className="eyebrow light">Meet the team of experts</span>
        <h2>Built by minds that understand health, performance and care.</h2>
        <p>
          RE-COMP needs a real expert layer: coaches, clinicians, nutrition specialists and data
          minds working around the same body state.
        </p>
        <div className="human-tags">
          <span>Performance coaching</span>
          <span>Clinical context</span>
          <span>Nutrition strategy</span>
          <span>Biomarker review</span>
        </div>
      </div>
      <div className="expert-orbit" aria-label="RE-COMP team of experts">
        <div className="expert-orbit-track">
          {expertFaces.map((face, index) => (
            <span
              className="expert-face-node"
              key={face.image}
              style={{ "--face-angle": `${index * 45}deg` }}
            >
              <img src={`/references/recomp-app/${face.image}`} alt={face.name} />
              <span className="expert-face-detail">
                <strong>{face.name}</strong>
                <small>{face.role}</small>
              </span>
            </span>
          ))}
        </div>
        <div className="expert-center">
          <img src="/references/recomp-app/loghi/recomp-logo-square-glass.png" alt="RE-COMP" />
        </div>
      </div>
    </section>
  );
}

function AccessSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="landing-section access-section">
      <div className="access-heading">
        <span className="eyebrow light">Access</span>
        <h2>Start with your baseline. Grow into the full system.</h2>
        <p>
          Body Check is the entry point: a clear baseline that can expand into daily guidance,
          coach oversight and the full Health OS.
        </p>
      </div>
      <div className="access-grid">
        {accessPlans.map((plan, index) => (
          <SpotlightTiltCard
            className={`access-card ${plan.featured ? "is-featured" : ""}`}
            index={index}
            isDimmed={hoveredIndex !== null && hoveredIndex !== index}
            key={plan.title}
            onHoverEnd={() => setHoveredIndex(null)}
            onHoverStart={() => setHoveredIndex(index)}
          >
            {plan.featured && <span className="plan-badge">Recommended</span>}
            <h3>{plan.title}</h3>
            <span>{plan.subtitle}</span>
            <p>{plan.detail}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={15} />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#start">{plan.cta}</a>
          </SpotlightTiltCard>
        ))}
      </div>
    </section>
  );
}

function LandingFinalCTA() {
  return (
    <>
      <section className="landing-final-cta" id="start">
        <div>
          <span className="eyebrow light">Be the first to know</span>
          <h2>Join the waitlist and get early access to RE-COMP.</h2>
        </div>
        <form className="footer-waitlist" onSubmit={(event) => event.preventDefault()}>
          <input aria-label="Email address" placeholder="Enter your email" type="email" />
          <button type="submit" aria-label="Join waitlist">
            <ArrowRight size={19} />
          </button>
          <small>No spam. Unsubscribe anytime.</small>
        </form>
      </section>
      <footer className="site-footer">
        <div className="footer-copy">
          <p>Your all-in-one system for health, performance and longevity.</p>
        </div>
        <a className="footer-living-logo" href="#top" aria-label="RE-COMP home">
          <span className="living-logo-mark" aria-hidden="true">
            <span className="living-logo-glow" />
            <span className="living-logo-border" />
            <span className="living-logo-inner">
              <img
                src="/references/recomp-app/loghi/recomp-logo-line-symbol-light.png"
                alt=""
              />
            </span>
          </span>
          <span className="footer-logo-wordmark">RE-COMP</span>
        </a>
        <nav>
          <a href="#system">System</a>
          <a href="#guidance">Guidance</a>
          <a href="#modules">Modules</a>
        </nav>
        <span className="footer-year">RE-COMP 2026</span>
      </footer>
    </>
  );
}

function Stat({ value, label }) {
  const count = Number.parseInt(value, 10);
  const suffix = value.replace(String(count), "");

  return (
    <article>
      <strong className="stat-value" data-count={count} data-suffix={suffix}>
        0{suffix}
      </strong>
      <span className="stat-label">
        <span>{label}</span>
      </span>
    </article>
  );
}

function HeroEditorial() {
  return (
    <div className="hero-editorial">
      <img
        src="/references/hero-health-studio-v1.png"
        alt="Premium health studio consultation with a tablet dashboard"
      />
      <div className="hero-overlay top">
        <span>Health Score</span>
        <strong>84</strong>
        <small>Excellent readiness</small>
      </div>
      <div className="hero-overlay bottom">
        <span>AI recommendation</span>
        <p>Recovery is strong. Prioritize lower body strength and a high-protein meal window.</p>
      </div>
    </div>
  );
}

function HealthDevice() {
  return (
    <div className="hero-device" aria-label="RE-COMP dashboard preview">
      <div className="device-top">
        <span>Today</span>
        <Sparkles size={18} />
      </div>
      <div className="score-ring">
        <div>
          <span className="score-label">Health Score</span>
          <strong>84</strong>
          <span className="score-state">Excellent</span>
        </div>
      </div>
      <div className="mini-metrics">
        <Metric label="Sleep" value="7h 45m" state="Good" />
        <Metric label="Recovery" value="82%" state="Ready" />
        <Metric label="Energy" value="High" state="Optimal" />
      </div>
      <div className="insight-card">
        <span>AI Insight</span>
        <p>You recovered well last night. A moderate strength session is recommended today.</p>
      </div>
    </div>
  );
}

function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="RE-COMP proof points">
      <article className="proof-card video-card">
        <div className="video-thumb">
          <Video size={28} />
        </div>
        <div>
          <span>Member story</span>
          <strong>From scattered data to a weekly health plan.</strong>
        </div>
      </article>
      <article className="proof-card">
        <span>100+ signals</span>
        <strong>Testing, habits and coaching connected.</strong>
      </article>
      <article className="proof-card">
        <span>Coach layer</span>
        <strong>Human oversight when the data needs context.</strong>
      </article>
    </section>
  );
}

function Metric({ label, value, state }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{state}</small>
    </div>
  );
}

function SignalSection() {
  return (
    <section className="section signal-section" id="system">
      <div className="section-heading">
        <span className="eyebrow">From tracking to interpretation</span>
        <h2>All your body signals, translated into what to do next.</h2>
      </div>
      <div className="signal-grid">
        <SignalPill icon={Moon} title="Recovery" value="82%" />
        <SignalPill icon={Utensils} title="Nutrition" value="2,600 kcal" />
        <SignalPill icon={Dna} title="Biomarkers" value="42 markers" />
        <SignalPill icon={Activity} title="Training" value="Moderate" />
      </div>
      <div className="recommendation-panel">
        <div>
          <span>Recommended action</span>
          <h3>Strength session, lower body.</h3>
          <p>
            Recovery is strong, glucose is stable and nutrition is aligned with today's training load.
          </p>
        </div>
        <ChevronRight size={24} />
      </div>
    </section>
  );
}

function SignalPill({ icon: Icon, title, value }) {
  return (
    <div className="signal-pill">
      <Icon size={22} />
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}

function StorySection({ refEl }) {
  return (
    <section className="story-section" id="guidance" ref={refEl}>
      <div className="story-sticky">
        <div className="story-copy">
          <span className="eyebrow">How RE-COMP works</span>
          <h2>Health intelligence as a daily operating system.</h2>
          <p>
            The product is not a dashboard of isolated numbers. It is a loop that helps the user
            assess, interpret, act and improve.
          </p>
          <div className="story-line">
            <span className="story-progress" />
          </div>
        </div>
        <div className="story-card">
          {storySteps.map((step, index) => (
            <article key={step.eyebrow} className="story-step">
              <span>{step.eyebrow}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModulesSection() {
  return (
    <section className="section modules-section" id="modules">
      <div className="section-heading compact">
        <span className="eyebrow">Product modules</span>
        <h2>One system for performance, recovery and care.</h2>
      </div>
      <div className="modules-grid">
        {modules.map(({ icon: Icon, label, copy, metric }) => (
          <article className="module-card" key={label}>
            <div className="module-top">
              <Icon size={22} />
              <span>{metric}</span>
            </div>
            <h3>{label}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CareSection() {
  return (
    <section className="care-section">
      <div className="care-visual">
        <div className="tablet">
          <div className="tablet-sidebar">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="tablet-main">
            <div className="tablet-header">
              <span>Coach overview</span>
              <strong>Giampaolo</strong>
            </div>
            <div className="tablet-row">
              <LineChart size={20} />
              <span>Plan adherence</span>
              <strong>92%</strong>
            </div>
            <div className="tablet-row">
              <HeartPulse size={20} />
              <span>Recovery trend</span>
              <strong>Improving</strong>
            </div>
            <div className="tablet-row">
              <Brain size={20} />
              <span>Next intervention</span>
              <strong>Nutrition review</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="care-copy">
        <span className="eyebrow">Between fit and medical</span>
        <h2>Sport as care, not only discipline.</h2>
        <p>
          RE-COMP connects the user's daily plan with professional oversight, so health,
          performance and prevention live in the same product system.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta" id="start">
      <span className="eyebrow">First live prototype</span>
      <h2>Build the Health OS direction as something developers can open, inspect and reuse.</h2>
      <a className="primary-button dark" href="#top">
        Back to top
        <ArrowRight size={18} />
      </a>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
