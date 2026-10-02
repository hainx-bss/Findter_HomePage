import { on } from './bus.js';
import { AppState } from './store.js';
import { STORAGE_KEYS } from './storageKeys.js';
import { updateLockStates } from './locks.js';
import { updateAllBanners } from '../services/banners.js';
import { renderThemeDropdown } from '../modals/ThemePicker.js';
import { updateFindterStatus } from '../screens/home/plan.js';
import { updateGuideStep1Status, updateSearchSuggestionGuideStatus } from '../screens/home/onboarding.js';

function rerenderThemeListIfOpen() {
  const themePickerModal = document.getElementById('theme-picker-modal');
  if (themePickerModal && !themePickerModal.classList.contains('hidden')) {
    renderThemeDropdown();
  }
}

export function setAppToggleState(state) {
  AppState.appToggleState = state;
  AppState.appEnabled = state === 'on';
  if (state === 'on' && !AppState.firstEnableDone) {
    AppState.firstEnableDone = true;
    AppState.lastEnabledTheme = AppState.selectedTheme;
    localStorage.setItem(STORAGE_KEYS.FIRST_ENABLE_DONE, 'true');
    localStorage.setItem(STORAGE_KEYS.LAST_ENABLED_THEME, AppState.lastEnabledTheme);
  }
  localStorage.setItem(STORAGE_KEYS.APP_TOGGLE_STATE, state);
  rerenderThemeListIfOpen();
  updateLockStates();
  updateGuideStep1Status();
  updateAllBanners();
  updateFindterStatus();
}

on('set-app-toggle', (state) => setAppToggleState(state));

on('storage', (e) => {
  if (e.key === STORAGE_KEYS.APP_TOGGLE_STATE) {
    const newState = e.newValue || 'off';
    console.log('Detected app toggle change:', newState);
    AppState.appToggleState = newState;
    AppState.appEnabled = newState === 'on';
    if (newState === 'on' && !AppState.firstEnableDone) {
      AppState.firstEnableDone = true;
      AppState.lastEnabledTheme = AppState.selectedTheme;
      localStorage.setItem(STORAGE_KEYS.FIRST_ENABLE_DONE, 'true');
      localStorage.setItem(STORAGE_KEYS.LAST_ENABLED_THEME, AppState.lastEnabledTheme);
    }
    rerenderThemeListIfOpen();
    updateAllBanners();
    updateGuideStep1Status();
    updateLockStates();
    updateFindterStatus();
    updateSearchSuggestionGuideStatus();
  }

  if (e.key === STORAGE_KEYS.SEARCH_SUGGESTION_TOGGLE_STATE) {
    AppState.searchSuggestionState = e.newValue || 'off';
    updateFindterStatus();
    updateSearchSuggestionGuideStatus();
  }
});
