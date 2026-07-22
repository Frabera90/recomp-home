import React, { useMemo, useState } from "react";
import { AppShell, OnboardingFlow, RoleSetupGate, tabs } from "./components/recomp-ui.jsx";

export function AppPilot() {
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [setupGateComplete, setSetupGateComplete] = useState(false);
  const [activeTabId, setActiveTabId] = useState("today");
  const [checkInStatus, setCheckInStatus] = useState("required");
  const checkInComplete = checkInStatus === "complete";
  const activeTab = useMemo(() => {
    const selectedTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

    if (selectedTab.id !== "today") {
      return selectedTab;
    }

    return {
      ...selectedTab,
      headline: checkInComplete
        ? "Your morning check-in keeps today controlled."
        : "Complete your morning check-in before confirming load.",
      copy: checkInComplete
        ? "Energy and soreness inputs support a moderate strength session."
        : "Recovery looks stable, but subjective readiness is still missing.",
      action: checkInComplete ? "Moderate lower-body strength" : "Finish morning check-in",
      reason: checkInComplete
        ? "Check-in confirmed good energy and low soreness."
        : "One short input updates today's recommendation.",
      checkInStatus,
    };
  }, [activeTabId, checkInComplete, checkInStatus]);

  return (
    <main className="pilot-page">
      {onboardingComplete && setupGateComplete ? (
        <AppShell
          activeTab={activeTab}
          activeTabId={activeTabId}
          checkInComplete={checkInComplete}
          checkInStatus={checkInStatus}
          onCheckInComplete={() => setCheckInStatus("complete")}
          onTabChange={setActiveTabId}
        />
      ) : onboardingComplete ? (
        <RoleSetupGate onComplete={() => setSetupGateComplete(true)} />
      ) : (
        <OnboardingFlow onComplete={() => setOnboardingComplete(true)} />
      )}
    </main>
  );
}
