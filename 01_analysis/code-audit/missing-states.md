# Missing States

Status: first-pass missing-state inventory.

## Purpose

This file lists states that must be designed and validated before final app implementation.

## Cross-App Missing States

### Session States

- logged out
- logged in without complete profile
- token expired
- token refresh failed
- role unknown
- language unavailable
- device offline
- backend unavailable

### Role States

- customer
- coach
- managed user selected
- no managed user selected
- inactive user
- new user
- admin-like state, unresolved

### Data States

- loading
- empty
- stale data
- partial data
- invalid data
- backend error
- permission denied
- optimistic update pending
- submission failed

## Domain Missing States

### Morning Check

- not started today
- partially completed
- submitted
- submitted but not reflected in dashboard
- coach reviewed
- coach not reviewed
- photo upload failed
- weight value invalid

### Body Check / Baseline

- baseline missing
- baseline incomplete
- measurement pending review
- measurement edited by coach
- body fat unavailable
- photos missing
- HRV/BPM unavailable

### Training

- no active plan
- plan assigned but not started
- workout in progress
- timer/rest in progress
- exercise skipped
- workout partially completed
- workout submitted
- workout failed to sync
- coach plan draft
- coach plan assigned

### Nutrition

- no daily target
- no food logged
- partial day logged
- custom food missing macro data
- recipe incomplete
- meal copied from prior day
- coach diet draft
- diet assigned
- target changed by coach

### Reports / Insights

- not enough data
- report generating
- report unavailable
- trend improves
- trend worsens
- mixed signal
- coach action needed
- user action needed

### Chat / Guidance

- no coach assigned
- message sending
- message failed
- unread coach message
- system recommendation available
- human review required

## Redesign Risk

The Claude redesign brief defines polished happy-path screens. It does not define most missing, partial, failed or permission states.

Final app work must treat these states as core product requirements, not edge-case decoration.

## Next Validation

1. For each critical flow, inspect representative original screens for existing state handling.
2. Confirm which missing states are backend-driven.
3. Decide which missing states are visible to customer, coach or both.

