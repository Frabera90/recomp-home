# Technical Risks

Status: first-pass technical risk register.

## High-Severity Risks

### Screen-Local API Logic

Many original app screens appear to call backend endpoints directly.

Risk:

Replacing screens may remove API behavior, mutations or data transformations.

Mitigation:

Extract domain services before final redesign implementation.

### AsyncStorage As Global State

AsyncStorage stores session, role, language, selected managed user, tokens, timers and UI state.

Risk:

State transitions may break if keys are renamed, removed or moved without migration.

Mitigation:

Create a storage register and migration plan before implementation.

### Managed User Context

Coach workflows likely depend on `UtenteGestito`.

Risk:

Coach actions could point to the wrong user or lose context.

Mitigation:

Make managed-user state explicit in architecture and UI.

### Backend Contract Is Inferred

The app uses PHP/WordPress endpoints with query action keys. Response schemas are not yet documented.

Risk:

Frontend redesign may rely on assumptions that backend does not support.

Mitigation:

Document endpoint contracts and mutation effects.

## Medium-Severity Risks

### Partial API Client Adoption

`apiFetch.js` exists but direct fetch remains common.

Risk:

Auth, retry and timeout behavior may be inconsistent.

Mitigation:

Consolidate all new work behind a domain API layer.

### Error/Offline Handling Not Fully Active

`ErrorBoundary` exists and `ConnectionMonitor` is present but appears commented out in navigation.

Risk:

The app may fail silently or inconsistently under network problems.

Mitigation:

Define offline/error requirements per critical flow.

### Backup Files In Source

Several backup/copy files exist.

Risk:

Dead or historical code may be mistaken for live behavior.

Mitigation:

Before migration, mark routes/files as active, legacy, backup or unresolved.

### Native Dependency Surface

The original app includes camera, image picker, Firebase messaging, charts, calendars, video and WebView dependencies.

Risk:

Redesign may miss native permission, platform and performance constraints.

Mitigation:

Audit native dependency usage by flow.

## Open Technical Questions

- Which backend endpoints are still active?
- Which local keys are legacy?
- Which screens are reachable in production?
- Which mutation endpoints are coach-only?
- Which notification flows are critical?

