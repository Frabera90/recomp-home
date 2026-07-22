# Home / Daily Overview Structure

## Status

Provisional pilot screen.

## User Question

"How am I today and what should I do next?"

## Screen Intent

The Home screen is not a dashboard.

It is a daily decision surface.

## Information Hierarchy

1. Context greeting
2. Health Score
3. Interpretation
4. Primary recommendation
5. Three supporting signals
6. Today's plan
7. Quick actions
8. Coach entry

## Proposed Layout

### Header

Content:

- "Good morning, Giampaolo"
- Small date/context label
- Optional notification icon

Tone:

Quiet, personal, not motivational.

### Health Score Area

Component:

- `HealthScoreHero`

Example copy:

"84"

"You're recovering well."

"Sleep and HRV are trending up. A moderate strength session fits today."

### Recommendation

Component:

- `DailyRecommendation`

Example:

"Recommended today"

"Moderate lower-body strength"

"Keep load controlled and add 10 minutes of mobility."

### Key Signals

Components:

- `SignalMetric`

Signals:

- Sleep: 7h 45m
- Recovery: 82%
- HRV: 78 ms

Rule:

No more than three metrics above the fold.

### Today Plan

Components:

- `TodayPlanRow`

Rows:

- Morning Check
- Strength Training
- Nutrition Plan
- Mobility
- Sleep window

### Quick Actions

Components:

- `GlassAction`

Actions:

- Scan food
- Book lab test
- Ask coach
- Supplements

Liquid Glass allowed here.

### Bottom Navigation

Component:

- `GlassTabBar`

Tabs:

- Today
- Plan
- Progress
- Coach

ASSUMPTION: Navigation labels are provisional.

## States

### Ready

Score is available. Recommendation is actionable.

### Low Recovery

Recommendation becomes recovery-first.

### Missing Data

Explain what is missing without blaming the user.

### Body Check Required

Home becomes a baseline entry surface.

### Loading

Use skeletons, not spinners.

## Component Tree

```text
AppShell
  TopContextHeader
  TodayScreen
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

## Motion

- Score counts in quickly.
- Interpretation appears after score.
- Recommendation slides up softly.
- Plan rows reveal one by one.
- Glass controls respond on press.

## Must Validate Later

- Actual available daily metrics.
- Whether Health Score exists in current implementation.
- Real plan object shape.
- Coach/AI availability.
- Notification and quick action logic.

