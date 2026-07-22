# Next Step: Home / Daily Overview Implementation

## Recommendation

Implement only the Home / Daily Overview screen first.

Do not implement Recovery Detail or AI Coach until Home validates the UI direction.

## Why Home First

Home tests the core RE-COMP promise:

"How am I today and what should I do next?"

It validates:

- Health Score hierarchy
- Daily recommendation model
- Signal metric density
- Light-first interface
- Restrained Liquid Glass
- Native mobile shell
- Calm clinical voice

## Proposed Component Tree

```text
AppPilot
  AppShell
    TopContextHeader
    HomeDailyOverview
      GreetingBlock
      HealthScoreHero
      DailyRecommendation
      SignalMetricGrid
        SignalMetric
        SignalMetric
        SignalMetric
      TodayPlanList
        TodayPlanRow
        TodayPlanRow
        TodayPlanRow
      QuickActionRail
        GlassAction
        GlassAction
        GlassAction
      CoachEntry
    GlassTabBar
```

## Native Liquid Glass Usage

Use for:

- Bottom navigation
- Quick actions
- AI Coach entry
- Small contextual controls

Do not use for:

- Health Score content card
- Signal metric cards
- Plan rows

## Proprietary RE-COMP UI

Use stable RE-COMP surfaces for:

- Health Score
- Daily Recommendation
- Metrics
- Plan rows

These surfaces should feel clinical, calm and readable.

## Mock Data

All data is provisional.

- Health Score: 84
- Recovery: 82%
- Sleep: 7h 45m
- HRV: 78 ms
- Recommendation: moderate lower-body strength
- Support action: 10 min mobility

## Acceptance Criteria

- One dominant visual focus.
- One primary recommendation.
- Maximum three metrics above the fold.
- No generic fitness dashboard feeling.
- No excessive glass.
- Mobile-first layout works before desktop.
- Copy feels calm and credible.

