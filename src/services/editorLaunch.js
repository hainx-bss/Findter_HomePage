import { emit } from '../app/bus.js';
import { AppState } from '../app/store.js';
import { STORAGE_KEYS } from '../app/storageKeys.js';
import { openThemePickerModal } from '../modals/ThemePicker.js';

export function openEditorWithAutoEnable() {
  if (!AppState.indexingComplete) {
    alert('Please wait for indexing to complete first.');
    return;
  }
  console.log('Opening Editor.html with auto-enable...');
  emit('set-app-toggle', 'on');
  AppState.hasEnabledInEditor = true;
  AppState.firstEnableDone = true;
  AppState.lastEnabledTheme = AppState.selectedTheme;
  localStorage.setItem(STORAGE_KEYS.FIRST_ENABLE_DONE, 'true');
  localStorage.setItem(STORAGE_KEYS.LAST_ENABLED_THEME, AppState.lastEnabledTheme);
  window.open('Editor.html?autoEnable=1', '_blank');
  emit('guide:refresh');
}

export function openEditorWithSearchSuggestionEnable() {
  if (!AppState.indexingComplete) {
    alert('Please wait for indexing to complete first.');
    return;
  }
  if (!AppState.selectedTheme) {
    openThemePickerModal();
    return;
  }
  window.open('Editor.html?autoEnableSuggestion=1', '_blank');
}

export function handleEnableAppFromBanner() {
  if (!AppState.indexingComplete) {
    alert('Please wait for indexing to complete first.');
    return;
  }
  if (!AppState.selectedTheme) {
    openThemePickerModal();
    return;
  }
  openEditorWithAutoEnable();
}
