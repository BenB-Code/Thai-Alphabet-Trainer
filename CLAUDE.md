# Thai Alphabet Trainer - Project Instructions

## Architecture

- `/rework` est la source de verite. `/features` et `/services` sont legacy et seront supprimes
- Tout nouveau code va dans `/rework`
- Zoneless change detection (`provideZonelessChangeDetection()`)
- Standalone components, OnPush, signals partout
- NgRx v21 installe et configure dans `app.config.ts`

## State Management - 3 Stores

Voir `documentation/store-architecture.md` pour la doc complete.

### Decisions cles

1. **App Store** = SignalStore (theme, font, language, activeTab)
2. **Selection Store** = SignalStore (lettres selectionnees, methodes par categorie)
3. **Quiz Store** = NgRx Store classique, 1 feature / 2 slices (settings + session)
4. Couche d'abstraction `xxxStoreService` entre stores et composants
5. **Timer = ProgressBar composant generique** controle via `viewChild` depuis Quiz. Pas de timer dans store/effects
6. `canGoBack`/`canGoForward` = selectors derives, jamais dans le state
7. Shuffling (impur) dans QuizStoreService, jamais dans les reducers
8. Sync Selection -> Quiz via `toObservable()` dans un effect
9. Pas de `withEntities()` - identite composite `id + kind`
10. Effects simplifies : syncSelection + navigate seulement. Quiz component orchestre la progress bar via `effect()` + `previousIndex`
11. `delay === 0` valide dans `selectIsQuizValid` (mode sans timer)
12. Reducers DRY : `start` = `{ ...INITIAL_SESSION_STATE, progressState: IN_PROGRESS }`, `reset` = `INITIAL_SESSION_STATE`
13. `CardAnimation` = type union literal (`'slide-out-left' | 'slide-out-right' | 'slide-in-left' | 'slide-in-right' | null`)
14. Composants generiques (`common/`) ne doivent PAS injecter de stores - tout via `input()`
15. `TabsService` : champs readonly (`tabsConfig`, `tabsSwitchConfig`) au lieu de methodes getter
16. `@keyframes` globaux dans `_animations.scss` (top-level, pas dans un mixin) emis via `@use` dans `styles.scss`. Classes d'animation dans le SCSS du composant
17. Binding natif `[class]` / `[class.xxx]` prefere a `NgClass` directive

### Structure

```
src/app/rework/store/
  app/          --> app.store.ts + app-store.service.ts
  selection/    --> selection.store.ts + selection-store.service.ts
  quiz/         --> quiz.state.ts + quiz.actions.ts + quiz.reducer.ts
                    quiz.selectors.ts + quiz.effects.ts + quiz-store.service.ts
```

## Data Model

- `ThaiCharacter = ThaiConsonant | ThaiVowel` (union type)
- Identite = `id + kind` (id non unique globalement)
- `ConsonantClass`: mid | high | low
- `VowelType`: short | long | diphthong | special
- `ProgressState`: pause | inProgress | finished
- `DisplayType`: thai | latin | mixed
- `CardAnimation`: slide-out-left | slide-out-right | slide-in-left | slide-in-right | null

## Conventions specifiques au projet

- Les composants dans `/rework` n'ont pas de suffixe Component (ex: `Letters`, pas `LettersComponent`)
- Services dans `/rework/services/` pour les nouveaux, `/services/` pour les legacy
- Constants reparties entre `/shared/constants/` et `/rework/shared/constants/`
