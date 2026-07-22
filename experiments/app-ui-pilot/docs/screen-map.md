# App UI Pilot Screen Map

## 1. Home / Daily Overview

User purpose:

Understand today's body state and decide what to do next.

Primary decision:

"What should I do today?"

Information hierarchy:

1. Greeting
2. Health Score
3. One-line interpretation
4. Today's recommendation
5. Three key signals
6. Today's plan
7. Quick actions

Surface choice:

Light-first, stable data cards, restrained glass for navigation and quick actions.

Liquid Glass usage:

- Tab bar
- Quick actions
- AI entry point
- Contextual controls

States:

- Ready
- Low recovery
- Missing data
- Loading
- Body Check required

Assumptions:

- ASSUMPTION: Health Score is the main daily system score.
- ASSUMPTION: Recovery, sleep and HRV are available above the fold.
- ASSUMPTION: Today's recommendation can be generated from recovery and plan context.

Responsive behavior:

Mobile-first screen; desktop may show an expanded preview but not a dashboard wall.

Motion opportunities:

- Score count-up
- Signals converge into recommendation
- Plan rows reveal sequentially

## 2. Recovery Detail

User purpose:

Understand why recovery is high, medium or low.

Primary decision:

"Can I increase load today or should I recover?"

Information hierarchy:

1. Recovery Score
2. Interpretation
3. Contributors
4. Trend
5. Recommended actions

Surface choice:

Dark immersive diagnostic panel with stable content cards.

Liquid Glass usage:

- Filter controls
- Detail overlays
- Floating action

States:

- Improving
- Stable
- Declining
- Missing wearable data
- Post-training recovery

Assumptions:

- ASSUMPTION: Sleep duration, HRV and recent load contribute to recovery.
- ASSUMPTION: Recommendations can be expressed without medical certainty.

Responsive behavior:

Mobile detail first; charts collapse into focused modules.

Motion opportunities:

- Contributor rows reveal in order of impact
- Trend line draws once
- Recommendation emerges after contributors

## 3. AI Coach

User purpose:

Ask contextual questions and receive grounded guidance.

Primary decision:

"What should I change or do next?"

Information hierarchy:

1. Context header
2. Current state summary
3. Suggested questions
4. Conversation
5. Action recommendation

Surface choice:

Light or soft dark depending on context; avoid generic chatbot look.

Liquid Glass usage:

- Composer
- Suggested prompts
- Contextual action chips

States:

- Empty conversation
- Active guidance
- Action accepted
- Needs human review
- Missing context

Assumptions:

- ASSUMPTION: AI Coach has access to recovery, plan and available biomarker context.
- ASSUMPTION: Some recommendations may require expert review.

Responsive behavior:

Mobile conversation with persistent context header.

Motion opportunities:

- Suggested prompts enter after state summary
- Action card pins to bottom after answer

