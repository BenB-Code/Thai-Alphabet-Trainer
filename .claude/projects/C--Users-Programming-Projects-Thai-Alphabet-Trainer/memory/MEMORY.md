# Thai Alphabet Trainer - Memory

## Project Structure
- `/rework` = source of truth, `/features` + `/services` = legacy (will be deleted)
- Zoneless (`provideZonelessChangeDetection`), standalone, OnPush, signals
- Components in `/rework` have no `Component` suffix (e.g. `Quiz`, not `QuizComponent`)

## State Management
- 3 stores: App (SignalStore), Selection (SignalStore), Quiz (NgRx Store classique)
- `xxxStoreService` abstraction between stores and components
- SignalStore uses `patchState(store, { prop: value })`, NOT `.set()`/`.update()` on properties
- Quiz: 1 feature, 2 slices (settings + session), registered in `app.config.ts`
- Only 2 NgRx effects: `syncSelection$` (cross-store) + `navigate$` (animations + setIndex)
- Timer NOT in effects/store. ProgressBar = generic component, controlled via `viewChild` in Quiz
- Quiz component: single `effect()` with `previousIndex` pattern for bar orchestration
- `selectIsQuizValid`: `delay === 0` is valid (no-timer mode), only `null` or `< 0` invalid
- `toggleByCategory` = true inversion (selected<->deselected swap), not "select remaining"
- Identity: composite `id + kind` via `isSameCharacter()` helper

## Key Patterns
- `Object.entries()` returns `string` keys - cast needed for `ConsonantClass | VowelType`
- Progress bar: `start(ms)`, `stop()`, `reset(ms?)` - rAF-based, `completed` output
- Collapsible panel: `grid-template-rows: 0fr/1fr` + opacity animation pattern
- For a11y: use `<button>` for clickable elements, not `<div>` with role/tabindex
- DRY reducers: use `INITIAL_SESSION_STATE` spread instead of duplicating values
- `CardAnimation` = union literal type, not `string | null`
- Generic components (e.g. SwitchSelector) must NOT inject stores - use inputs
- Static data in services: use readonly fields, not getter methods (referential stability)
- CSS animations: `@keyframes` global in `_animations.scss` (no mixin wrapper), classes in component SCSS
- Flip card pattern: recto `rotateY(0)` / verso `rotateY(180deg)`, `.flipped` toggles both. Container holds `[class.flipped]` + `[class]` for slide
- Prefer native `[class]`/`[class.xxx]` bindings over `NgClass` directive

## Documentation
- `documentation/store-architecture.md` = full store architecture doc
- `CLAUDE.md` at project root = key decisions summary
- MUST keep both updated when architecture changes

## User Preferences
- Responds in French, code in English
- Strict about doc maintenance - update docs as changes happen
- Prefers simple solutions over overengineered ones
- Wants proof that code was read (line references) before proposals

## CRITICAL - Agent Orchestration
- ALWAYS dispatch angular-reviewer + security-auditor BEFORE writing code changes
- ALWAYS dispatch notion-pm AFTER code changes to update documentation
- NEVER improvise code without agent validation first
- These are mandatory per CLAUDE.md global config
