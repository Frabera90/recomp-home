# AI Coach Structure

## Status

Provisional pilot screen.

## User Question

"What should I change or do next?"

## Screen Intent

AI Coach should feel like a contextual guidance layer, not a generic chatbot.

The value is not chat. The value is that the coach knows the user's current state.

## Information Hierarchy

1. Context header
2. Current state summary
3. Suggested prompts
4. Conversation
5. Action recommendation

## Proposed Layout

### Context Header

Component:

- `CoachContextHeader`

Content:

- Today's state
- Recovery status
- Plan context
- Relevant biomarker or Body Check note when available

Example:

"Today: stable recovery, moderate load available."

### Suggested Prompts

Component:

- `SuggestedPrompt`

Examples:

- "Can I train harder today?"
- "What should I eat before training?"
- "Why is recovery lower than usual?"

### Conversation

Rules:

- Keep bubbles minimal.
- Avoid playful assistant personality.
- Answers should reference state and action.

Example answer:

"Your recovery is stable and HRV is trending up. Keep today's lower-body session moderate, then add mobility before sleep."

### Action Card

Component:

- `ActionRecommendation`

Purpose:

Convert answer into an executable next step.

## Surface Choice

Light base with glass composer.

Dark mode may be used when entered from Recovery Detail.

## Component Tree

```text
AppShell
  AICoachScreen
    CoachContextHeader
    SuggestedPromptList
      SuggestedPrompt
      SuggestedPrompt
      SuggestedPrompt
    ConversationThread
      UserMessage
      CoachMessage
    ActionRecommendation
    GlassComposer
  GlassTabBar
```

## Liquid Glass Usage

Allowed:

- Composer
- Suggested prompt chips
- Context action controls

Not allowed:

- Entire conversation background
- Dense data content

## States

- Empty conversation
- Active guidance
- Action accepted
- Needs human review
- Missing context
- Waiting for data sync

## Motion

- Context appears before prompts.
- Suggested prompts enter sequentially.
- Action card pins after answer.
- Composer stays tactile but restrained.

## Must Validate Later

- Whether AI Coach exists in current code.
- Whether human expert escalation exists.
- Available context sources.
- Data privacy and safety constraints.

