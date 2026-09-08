# AGENTS.md

## Project Overview
Expo React Native assignment tracker for college students. Polished prototype: clean, motivating

Stack: Expo ~55, React 19, React Navigation 7 (stack + tabs), Zustand 5, AsyncStorage, `react-native-calendars`, `@react-native-community/datetimepicker`.

## Routes — do not extend
Stack: `Tabs`, `AddAssignment {assignmentId?}`, `CompletedAssignments`. Tabs: `Home`, `Calendar`. No `Settings`/details screen. Edit = `AddAssignment` with id.

## Inspect First
Read relevant screen, component, store, navigator, styles, and utils before editing. 
Reuse what exists.
Never rebuild from description alone.

## Targeted Changes Only
Smallest diff that fixes the task. Keep working behavior, no unrelated refactors, no file moves, no new abstractions, no extra features.

## Follow Existing Patterns
Match current naming, file layout, Zustand store shape, navigation calls, and `colors` usage. Prefer simplest option that fits. No hardcoded hex, no 8-digit concat, no negative-margin layout, no per-screen `display:'none'` tab bar.

## TypeScript
Explicit props/state/store types. Reuse `src/types`. No `any` / `as any` / `@ts-ignore`.

## Assignments
`id, title, type, customType?, duration, deadline: Date, description, status, coinReward, createdAt, completedAt?`

- Compare with `getTime()`, not display strings.
- Validate dates after load (`isNaN`), fallback UI, never crash.
- `customType` only if `type==='other'` and non-empty.

## Persistence
Key `@assignments`, dates as ISO strings. Load: try/catch, `Array.isArray` check, per-item validation, fallback `[]`. Save fail: `console.error` + `Alert`.

## Error Handling
Prevent crashes. Handle missing/malformed data with fallback UI. Surface save/load failures to user. Never swallow errors to look functional.

## Gamification — inactive
`SHOW_REWARDS=false`. `mockUser` static. Preserve coin code, add none.

## Testing
`npm test`. Check `src/screens/__tests__` first. Cover double-complete, bad storage, bad dates. Never edit tests to pass.
Prioritize behavior and edge cases over testing trivial implementation details.