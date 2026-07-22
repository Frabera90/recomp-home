# Recovery Detail Structure

## Status

Provisional pilot screen.

## User Question

"Why is my recovery score this, and can I increase load today?"

## Screen Intent

Recovery Detail explains the score and turns it into a load decision.

It can be darker and more immersive than Home, but must stay legible.

## Information Hierarchy

1. Recovery Score
2. Interpretation
3. Main contributors
4. Trend
5. Recommended actions

## Proposed Layout

### Diagnostic Hero

Component:

- `RecoveryScorePanel`

Content:

- Recovery score
- Status
- One-line explanation
- Load guidance

Example:

"82%"

"Recovery is stable."

"Sleep and HRV support a moderate training load today."

### Contributors

Component:

- `ContributorRow`

Potential contributors:

- Sleep duration
- HRV
- Resting heart rate
- Previous training load
- Stress / readiness

ASSUMPTION: Contributor list is provisional.

### Trend

Component:

- `TrendChart`

Purpose:

Show direction, not a complex analytics dashboard.

### Recommended Actions

Component:

- `ActionRecommendation`

Examples:

- "Keep strength session moderate."
- "Add 10 minutes mobility."
- "Move sleep window earlier."

## Surface Choice

Dark diagnostic surface.

Use glass only for:

- Floating filter
- Detail overlays
- Contextual actions

Data rows should remain stable and readable.

## Component Tree

```text
AppShell
  RecoveryDetailScreen
    DetailHeader
    RecoveryScorePanel
    ContributorList
      ContributorRow
      ContributorRow
      ContributorRow
    TrendChart
    ActionRecommendation
  GlassTabBar
```

## Motion

- Score appears first.
- Contributors reveal in order of importance.
- Trend line draws once.
- Recommendation appears after contributors.

## States

- Improving
- Stable
- Declining
- Missing wearable data
- Post-training recovery
- Body Check baseline only

## Must Validate Later

- Actual recovery formula.
- Available data sources.
- Whether contributors exist in current product.
- Whether recommendations are AI-generated, coach-authored or rule-based.

