import { STORAGE_KEYS } from './storageKeys.js';
import { emit } from './bus.js';

export const AppState = {
  isIndexing: true,
  indexingComplete: false,
  appEnabled: false,
  indexingStartTime: null,
  indexingDuration: 20000,
  selectedTheme: '',
  lastEnabledTheme: '',
  firstEnableDone: false,
  flowCompleted: false,
  hasEnabledInEditor: false,
  indexingInterval: null,
  currentPage: 'home',
  appToggleState: 'off',
  searchSuggestionState: 'off',
  hasOnboarded: false,
};

export function canAccessFeatures() {
  return AppState.indexingComplete && AppState.appToggleState === 'on';
}

export function loadPersistedState() {
  const storedToggle = localStorage.getItem(STORAGE_KEYS.APP_TOGGLE_STATE);
  const storedSearchSuggestion = localStorage.getItem(STORAGE_KEYS.SEARCH_SUGGESTION_TOGGLE_STATE);
  const storedIndexing = localStorage.getItem(STORAGE_KEYS.INDEXING_COMPLETE);
  const storedTheme = localStorage.getItem(STORAGE_KEYS.SELECTED_THEME);
  const storedLastEnabled = localStorage.getItem(STORAGE_KEYS.LAST_ENABLED_THEME);
  const storedFirstEnable = localStorage.getItem(STORAGE_KEYS.FIRST_ENABLE_DONE);

  if (storedToggle) {
    AppState.appToggleState = storedToggle;
    AppState.appEnabled = storedToggle === 'on';
  }

  if (storedSearchSuggestion) {
    AppState.searchSuggestionState = storedSearchSuggestion;
  }

  if (storedIndexing === 'true') {
    AppState.indexingComplete = true;
    AppState.isIndexing = false;
  }

  if (storedTheme) {
    AppState.selectedTheme = storedTheme;
  }

  if (storedLastEnabled) {
    AppState.lastEnabledTheme = storedLastEnabled;
  }

  if (storedFirstEnable === 'true') {
    AppState.firstEnableDone = true;
  }

  if (localStorage.getItem(STORAGE_KEYS.HAS_ONBOARDED) === 'true') {
    AppState.hasOnboarded = true;
  }

  if (AppState.indexingComplete) {
    AppState.hasOnboarded = true;
    if (!localStorage.getItem(STORAGE_KEYS.HIGHLIGHT_INDEX_COMPLETED_AT)) {
      localStorage.setItem(STORAGE_KEYS.HIGHLIGHT_INDEX_COMPLETED_AT, String(Date.now()));
    }
  }
}

export function bindStorageSync() {
  window.addEventListener('storage', (e) => {
    emit('storage', e);
  });
}
