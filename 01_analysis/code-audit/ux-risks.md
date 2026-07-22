# UX Risks

Status: first-pass UX risk register for redesign.

## High-Severity Risks

### 1. Beautiful Simplification Removes Critical Logic

The original app has many operational flows hidden inside screens. A simplified redesign can accidentally remove training, nutrition, coach or reporting behavior.

Mitigation:

Map each simplified screen to the original routes and state transitions it replaces.

### 2. Coach Context Becomes Ambiguous

Coach flows depend on acting on another user. If selected-client context is hidden, actions can become confusing or risky.

Mitigation:

Always show the managed client, status, block/phase and exit/switch controls in coach mode.

### 3. Health Data Becomes Decorative

Rings, charts and glass cards can make data feel premium while hiding freshness, source, uncertainty or required action.

Mitigation:

Every key metric needs source, date/freshness, interpretation and action where relevant.

### 4. Training Is Flattened Into Content

The original training domain includes plan creation, assignment, execution, timers, exercise states and completion.

Mitigation:

Design training as an executable workflow, not just a workout list.

### 5. Nutrition Is Flattened Into Macros

Macro rings alone do not cover diet creation, meals, recipes, custom foods and coach assignment.

Mitigation:

Separate daily logging from plan management and food database actions.

## Medium-Severity Risks

### Dark Glass May Reduce Data Legibility

The Claude design system is dark/glass-heavy, while current RE-COMP decisions prefer light-first product surfaces.

Mitigation:

Use dark/glass selectively for high-value insight or transient controls, not dense data by default.

### Navigation Compression Hides Important Domains

Five tabs improve simplicity but may bury training, insights and coach operations.

Mitigation:

Define product architecture independently from tab count.

### Reports Lose Interpretability

The redesign names Progress/Analytics but does not define how original reports become useful recommendations.

Mitigation:

Convert reports into insight plus next action while preserving drilldown.

### Empty/Error States Are Missing

The redesign brief focuses on filled screens.

Mitigation:

Design empty, partial, loading, stale and failed states for each core domain.

## Low-Severity Risks

- Typography choices may conflict with native iOS behavior.
- Overuse of red accent may reduce semantic clarity.
- Fixed 390px design may miss broader responsive/device constraints.

## Open UX Decisions

- Should app UI remain light-first as later decisions state, or preserve any dark premium screens from the Claude redesign?
- What is the canonical top-level navigation for customer and coach?
- Which flow becomes the first true Health OS pilot?

