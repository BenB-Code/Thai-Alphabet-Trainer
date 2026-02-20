# Store Architecture - Thai Alphabet Trainer

## Vue d'ensemble

3 stores NgRx + 1 couche d'abstraction service par store.

```
Composant --> xxxStoreService --> Store (NgRx Store ou SignalStore)
```

Les composants n'injectent JAMAIS un store directement. Ils passent par le `StoreService` correspondant.

### Structure fichiers

```
src/app/rework/store/
  app/
    app.store.ts
    app-store.service.ts

  selection/
    selection.store.ts
    selection-store.service.ts

  quiz/
    quiz.state.ts
    quiz.actions.ts
    quiz.reducer.ts
    quiz.selectors.ts
    quiz.effects.ts
    quiz-store.service.ts
```

`QuizTimerService` reste dans `services/` (pas dans le store).

---

## 1. SELECTION STORE (SignalStore)

### State

```typescript
interface SelectionState {
  selected: ThaiCharacter[];
}
```

Initial : `{ selected: [] }`

### Computed (dans le store)

| Nom | Derivation |
|---|---|
| `selectedConsonants` | `selected().filter(el => el.kind === CONSONANT)` |
| `selectedVowels` | `selected().filter(el => el.kind === VOWEL)` |
| `consonantsCount` | `selectedConsonants().length` |
| `vowelsCount` | `selectedVowels().length` |
| `totalCount` | `selected().length` |
| `isEmpty` | `selected().length === 0` |

### Methods (dans le store)

| Methode | Logique |
|---|---|
| `selectLetter(letter)` | Ajoute la lettre a la selection |
| `deselectLetter(letter)` | Retire la lettre (match par `id + kind`) |
| `toggleLetter(letter)` | Add si absente, remove si presente |
| `selectAll(kind)` | Remplace toutes les lettres du kind par la liste complete (via DataService) |
| `deselectAll(kind)` | Retire toutes les lettres du kind |
| `selectByCategory(category)` | Ajoute toutes les lettres de la classe (consonnes) ou du type (voyelles) |
| `deselectByCategory(category)` | Retire toutes les lettres de la classe ou du type |
| `toggleByCategory(category)` | Inverse la selection pour la classe ou le type donne |

### Detail des methodes par categorie

**Categories consonnes** : `ConsonantClass` = `'mid' | 'high' | 'low'`
**Categories voyelles** : `VowelType` = `'short' | 'long' | 'diphthong' | 'special'`

```
selectByCategory('mid')
  --> recup toutes les consonnes de classe 'mid' via DataService
  --> ajoute celles qui ne sont pas deja selectionnees

deselectByCategory('mid')
  --> retire toutes les consonnes de classe 'mid' de la selection

toggleByCategory('mid')
  --> les consonnes 'mid' selectionnees deviennent deselectionnees
  --> les consonnes 'mid' deselectionnees deviennent selectionnees
  --> (inversion vraie, pas un "select all if incomplete")
```

Le store a besoin d'un moyen de determiner si une categorie est une ConsonantClass ou un VowelType.
Option : `DataService` fournit `getConsonantsByClass(cls)` et `getVowelsByType(type)`.
Le store appelle le bon getter selon le type de categorie.

### SelectionStoreService

```typescript
@Injectable({ providedIn: 'root' })
export class SelectionStoreService {
  private readonly store = inject(SelectionStore);

  // --- Read (signals exposes en readonly) ---
  readonly selected = this.store.selected;
  readonly selectedConsonants = this.store.selectedConsonants;
  readonly selectedVowels = this.store.selectedVowels;
  readonly consonantsCount = this.store.consonantsCount;
  readonly vowelsCount = this.store.vowelsCount;
  readonly totalCount = this.store.totalCount;
  readonly isEmpty = this.store.isEmpty;

  // --- Write ---
  selectLetter(letter: ThaiCharacter): void;
  deselectLetter(letter: ThaiCharacter): void;
  toggleLetter(letter: ThaiCharacter): void;
  selectAll(kind: LetterKind): void;
  deselectAll(kind: LetterKind): void;
  selectByCategory(category: ConsonantClass | VowelType): void;
  deselectByCategory(category: ConsonantClass | VowelType): void;
  toggleByCategory(category: ConsonantClass | VowelType): void;
}
```

---

## 2. APP STORE (SignalStore)

### State

```typescript
interface AppState {
  theme: ThemeType;        // 'light' | 'dark'
  thaiFont: FontsType;    // 'sarabun' | 'kanit' | 'sriracha'
  language: Languages;     // 'en' | 'fr'
  activeTab: number;       // 0 | 1
}
```

Initial : `{ theme: LIGHT, thaiFont: SARABUN, language: EN, activeTab: 0 }`

### Computed

| Nom | Derivation |
|---|---|
| `themeIcon` | `theme() === DARK ? 'icons/sun.svg' : 'icons/moon.svg'` |
| `isDarkThemeActive` | `theme() === DARK` |

### Methods

| Methode | Logique |
|---|---|
| `toggleTheme()` | `LIGHT <-> DARK` |
| `switchFont(font)` | set `thaiFont` |
| `switchLanguage(lang)` | set `language` + `translateService.use(lang)` |
| `toggleLanguage()` | `EN <-> FR` puis `switchLanguage()` |
| `changeTab(index)` | set `activeTab` |

### Side Effects (withHooks.onInit)

**Effect Theme DOM** :
```
theme() --> document.documentElement.classList.add/remove(DARK)
```

**Effect Font DOM** :
```
thaiFont() --> getElementsByClassName('thai') --> swap classes
```

Note : si le binding reactif `[class]="'thai ' + appStore.thaiFont()"` est en place dans les templates, l'effect font devient inutile.

### Dependencies injectees dans le store

- `DOCUMENT` (pour effects DOM)
- `TranslateService` (pour switchLanguage)

### AppStoreService

```typescript
@Injectable({ providedIn: 'root' })
export class AppStoreService {
  private readonly store = inject(AppStore);

  // --- Read ---
  readonly theme = this.store.theme;
  readonly thaiFont = this.store.thaiFont;
  readonly language = this.store.language;
  readonly activeTab = this.store.activeTab;
  readonly themeIcon = this.store.themeIcon;
  readonly isDarkThemeActive = this.store.isDarkThemeActive;

  // --- Write ---
  toggleTheme(): void;
  switchFont(font: FontsType): void;
  switchLanguage(lang: Languages): void;
  toggleLanguage(): void;
  changeTab(index: number): void;

  // --- Delegate (pas de state, juste proxy) ---
  translate(key: string): string;  // --> translateService.instant(key)
}
```

`translate()` reste dans le service (pas un concern du store). Le service injecte `TranslateService` en plus du store.

### TabsConfig

`TabsService._tabsConfig` (donnees statiques) ne va PAS dans le store.
Options :
- Rester dans un `TabsService` separe (read-only, pas de state)
- Ou etre expose comme methode du `AppStoreService` (getTabsConfig / getTabsSwitchConfig)

---

## 3. QUIZ STORE (NgRx Store classique) - 2 slices

### State

```typescript
interface QuizSettingsState {
  display: DisplayType;          // 'thai' | 'latin' | 'mixed'
  questions: number;
  delay: number;                 // en secondes
  selected: ThaiCharacter[];
  randomized: ThaiCharacter[];
}

interface QuizSessionState {
  index: number;
  progressState: ProgressState;  // 'pause' | 'inProgress' | 'finished'
  flipped: boolean;
  cardAnimation: string | null;
}

interface QuizState {
  settings: QuizSettingsState;
  session: QuizSessionState;
}
```

Initial settings : `{ display: THAI, questions: 10, delay: 5, selected: [], randomized: [] }`
Initial session : `{ index: 0, progressState: PAUSE, flipped: false, cardAnimation: null }`

### Actions

```typescript
// --- Settings ---
export const QuizSettingsActions = createActionGroup({
  source: 'Quiz Settings',
  events: {
    'Update Display': props<{ display: DisplayType }>(),
    'Update Questions': props<{ questions: number }>(),
    'Update Delay': props<{ delay: number }>(),
    'Update Selected': props<{ selected: ThaiCharacter[] }>(),
    'Set Randomized List': props<{ randomized: ThaiCharacter[] }>(),
  },
});

// --- Session ---
export const QuizSessionActions = createActionGroup({
  source: 'Quiz Session',
  events: {
    'Start': emptyProps(),
    'Reset': emptyProps(),
    'Next': emptyProps(),
    'Previous': emptyProps(),
    'Toggle Flip': emptyProps(),
    'Toggle Pause': emptyProps(),
    'Set Index': props<{ index: number }>(),
    'Set Animation': props<{ animation: string | null }>(),
    'Finish': emptyProps(),
    'Timer Expired': emptyProps(),
  },
});
```

### Reducers

**Settings reducer** :

| Action | Mutation |
|---|---|
| `Update Display` | `settings.display = display` |
| `Update Questions` | `settings.questions = questions` |
| `Update Delay` | `settings.delay = delay` |
| `Update Selected` | `settings.selected = selected` |
| `Set Randomized List` | `settings.randomized = randomized` |

**Session reducer** :

| Action | Mutation |
|---|---|
| `Start` | `progressState = IN_PROGRESS` |
| `Reset` | `index=0, progressState=PAUSE, flipped=false, cardAnimation=null` |
| `Set Index` | `index = payload` |
| `Set Animation` | `cardAnimation = payload` |
| `Toggle Flip` | `flipped = !flipped`. Si flip -> `progressState=PAUSE`. Si unflip -> `progressState=IN_PROGRESS` |
| `Toggle Pause` | Si `flipped` -> `flipped=false, progressState=IN_PROGRESS`. Sinon toggle `IN_PROGRESS <-> PAUSE` |
| `Finish` | `progressState = FINISHED` |
| `Timer Expired` | (action declaree mais non utilisee - le timer est gere par le composant Quiz via ProgressBar.completed) |

### Selectors

```typescript
// --- Feature ---
selectQuizFeature              // createFeatureSelector<QuizState>('quiz')

// --- Settings ---
selectSettings                 // state.settings
selectDisplay                  // settings.display
selectQuestions                 // settings.questions
selectDelay                    // settings.delay (secondes)
selectDelayMs                  // settings.delay * 1000
selectSelected                 // settings.selected
selectRandomized               // settings.randomized

// --- Session ---
selectSession                  // state.session
selectIndex                    // session.index
selectProgressState            // session.progressState
selectIsFlipped                // session.flipped
selectCardAnimation            // session.cardAnimation

// --- Derived (PAS dans le state) ---
selectMaxIndex                 // Math.max(0, questions - 1)
selectCanGoBack                // index > 0
selectCanGoForward             // index <= maxIndex
selectCurrentCard              // randomized[index] ?? null
selectProgress                 // { current: index + 1, total: questions }
selectIsFinished               // progressState === FINISHED
selectIsInProgress             // progressState === IN_PROGRESS
selectIsPaused                 // progressState === PAUSE

// --- Validation ---
selectIsQuizValid              // !display ? false
                               // questions < min || > max ? false
                               // selected.length <= 0 ? false
                               // delay == null || delay < 0 ? false
                               // true
                               // NOTE: delay === 0 est valide (mode sans timer)
```

### Effects (quiz.effects.ts)

Seuls 2 effects dans la classe `QuizEffects`. Toute la logique timer a ete deplacee dans le composant Quiz.

**1. Sync Selection Effect** (cross-store)

```
Trigger:  SelectionStore.selected() change (via toObservable)
Dispatch: QuizSettingsActions.updateSelected({ selected })
```

**2. Navigate Effect** (Next / Previous)

```
Trigger:  QuizSessionActions.next | QuizSessionActions.previous
Logic:
  1. Lire index, maxIndex depuis le store
  2. Calculer nextIndex (+1 ou -1)
  3. Si hors limites :
     - nextIndex > maxIndex --> dispatch(Finish)
     - nextIndex < 0 --> EMPTY (rien)
     - return
  4. dispatch(SetAnimation('slide-out-left' ou 'slide-out-right'))
  5. timer(300ms)
  6. dispatch(SetIndex(nextIndex))
     dispatch(SetAnimation('slide-in-left' ou 'slide-in-right'))
  7. timer(300ms)
  8. dispatch(SetAnimation(null))
```

**Generate Quiz List** : methode du `QuizStoreService` (pas un effect NgRx).
Shuffling (impur) + `distributeDisplayTypes` pour MIXED → dispatch `setRandomizedList`.

### Timer / Progress Bar (orchestration au niveau composant)

La progress bar est un composant generique (`app-progress-bar`) sans logique metier.
L'orchestration se fait dans le composant `Quiz` via `viewChild(ProgressBar)` :

```
Quiz component (effect unique avec previousIndex) :
  1. Lire progressState(), index(), progressBar()
  2. Si FINISHED --> navigate('/result')
  3. Si pas de bar ou pas de delay --> return
  4. Si state !== IN_PROGRESS --> bar.stop()
  5. Si index a change (previousIndex) --> bar.reset()
  6. bar.start(delayMs)
  7. Quand bar.completed --> quizStoreService.next()
```

Le `QuizTimerService` legacy n'est plus utilise par les effects.
Les signaux `timerPercent`/`skipTransition` sont dans le composant `ProgressBar` directement.

### ProgressBar (composant generique)

```
src/app/rework/common/progress-bar/progress-bar.ts
```

Composant autonome sans logique metier. API publique :
- `paused` : input signal (boolean)
- `completed` : output (void)
- `start(durationMs)` : demarre le decompte via requestAnimationFrame
- `stop()` : arrete le decompte
- `reset(durationMs?)` : remet a 100% avec skipTransition, arrete le decompte

Le parent controle le composant via `viewChild(ProgressBar)`.
Pas de dependance au store, pas de logique quiz.

Le `QuizTimerService` legacy dans `services/` n'est plus utilise par le nouveau code.

### QuizStoreService

```typescript
@Injectable({ providedIn: 'root' })
export class QuizStoreService {
  private readonly store = inject(Store);
  private readonly timerService = inject(QuizTimerService);

  // --- Read (selectSignal) ---

  // Settings
  readonly display = this.store.selectSignal(selectDisplay);
  readonly questions = this.store.selectSignal(selectQuestions);
  readonly delay = this.store.selectSignal(selectDelay);
  readonly selected = this.store.selectSignal(selectSelected);
  readonly randomized = this.store.selectSignal(selectRandomized);

  // Session
  readonly index = this.store.selectSignal(selectIndex);
  readonly progressState = this.store.selectSignal(selectProgressState);
  readonly isFlipped = this.store.selectSignal(selectIsFlipped);
  readonly cardAnimation = this.store.selectSignal(selectCardAnimation);

  // Derived
  readonly canGoBack = this.store.selectSignal(selectCanGoBack);
  readonly canGoForward = this.store.selectSignal(selectCanGoForward);
  readonly currentCard = this.store.selectSignal(selectCurrentCard);
  readonly progress = this.store.selectSignal(selectProgress);
  readonly isFinished = this.store.selectSignal(selectIsFinished);
  readonly isInProgress = this.store.selectSignal(selectIsInProgress);
  readonly isPaused = this.store.selectSignal(selectIsPaused);
  readonly isQuizValid = this.store.selectSignal(selectIsQuizValid);

  // Timer : plus de proxy timerService, la progress bar est un composant
  // controle via viewChild dans le composant Quiz

  // --- Write ---
  updateDisplay(display: DisplayType): void;
  updateQuestions(questions: number): void;
  updateDelay(delay: number): void;
  generateQuizList(): void;  // shuffle + dispatch setRandomizedList

  start(): void;
  reset(): void;
  next(): void;
  previous(): void;
  toggleFlip(): void;
  togglePause(): void;

  // --- Validation (pour les guards) ---
  // selectIsQuizValid est deja expose en read
  // selectIsFinished est deja expose en read
}
```

### Guards (migration)

```typescript
// Avant : prepService.isValid()
// Apres :
canMatch: [() => inject(QuizStoreService).isQuizValid()]

// Avant : sessionService.progressState() === FINISHED
// Apres :
canMatch: [() => inject(QuizStoreService).isFinished()]
```

---

## Decisions prises

1. **SignalStore** pour App et Selection, **NgRx Store classique** pour Quiz
2. **1 feature store Quiz** avec 2 slices (settings + session), pas 2 stores separes
3. **Timer = composant generique ProgressBar** controle via `viewChild` depuis Quiz. Pas de timer dans le store ni dans les effects (60fps = anti-pattern dans NgRx)
4. **canGoBack/canGoForward** = selectors derives, pas dans le state
5. **isValid** duplication supprimee, un seul selector `selectIsQuizValid`. `delay === 0` est valide (mode sans timer)
6. **Shuffling** dans le QuizStoreService (methode impure), pas dans le reducer
7. **setTimeout** remplaces par `timer()` RxJS dans les effects
8. **Couche service** (xxxStoreService) entre store et composants
9. **Selection par categorie** : selectByCategory / deselectByCategory / toggleByCategory sur ConsonantClass et VowelType. toggleByCategory fait une **inversion vraie** (swap selected/deselected)
10. **translate()** reste dans AppStoreService (proxy TranslateService), pas un concern du store
11. **TabsConfig** (donnees statiques) reste dans un service separe ou expose par AppStoreService
12. **getCountByCategory()** --> methode utilitaire dans SelectionStoreService (depend de selected + LetterUtilsService)
13. **Identite composite** (id + kind) pour la comparaison des lettres, pas de withEntities()
14. **Effects simplifies** : seuls 2 effects NgRx (syncSelection + navigate). Pas de timer effects.
15. **Quiz component orchestre la progress bar** via un seul `effect()` avec pattern `previousIndex` pour detecter les changements d'index vs changements d'etat
