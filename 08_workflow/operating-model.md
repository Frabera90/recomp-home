# Operating Model

## Core Principle

The repository is the source of truth.

Conversation is used to decide what to do next, but decisions become reliable only when they are written into the repository.

## Standard Workflow

1. Add new material to `00_input/`.
2. Ask Codex to analyze the new material.
3. Codex updates analysis files only when there is a clear reason.
4. Product decisions are captured under `09_decisions/`.
5. Flow or design files are updated only after a decision or validated direction.
6. Codex summarizes the impact of the change.

## Update Rule

Do not update core files after every conversation.

Update files when:

- a decision has been made
- a flow has been clarified
- a contradiction has been resolved
- new input changes product understanding
- a design rule becomes stable

## Review Rule

Before generating UI, Codex should check:

- product context
- positioning
- relevant decisions
- flow inventory
- design direction
- component rules
- `08_workflow/landing-critic.md` when working on the landing

## Output Rule

Every meaningful output should state:

- what changed
- why it changed
- which files were updated
- what decision is still open
