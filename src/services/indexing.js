import { AppState } from '../app/store.js';
import { STORAGE_KEYS } from '../app/storageKeys.js';
import { updateLockStates } from '../app/locks.js';
import { updateAllBanners } from './banners.js';
import { refreshAllHighlightWidgets } from './highlightWidget.js';
import { updateEditorModalBanner } from '../modals/editorBanner.js';
import { updateRestrictedModalContent } from '../modals/AccessRestricted.js';
import { updateFindterStatus } from '../screens/home/plan.js';
import { updateGuideStep1Status, updateProgressAndMessages } from '../screens/home/onboarding.js';
import { updateHighlightFeaturePageBanner } from '../screens/highlight-feature/banner.js';
import { clearHighlightScreenFlags } from './highlightEntry.js';
import { renderSubPageContent } from '../screens/placeholders/content.js';

export function getCurrentTimestamp() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const mo = String(now.getMonth() + 1).padStart(2, '0');
  const y = now.getFullYear();
  return h + ':' + m + ':' + s + ' ' + d + '/' + mo + '/' + y;
}

function syncEls() {
  return {
    syncStatusBadge: document.getElementById('sync-status-badge'),
    syncTimestamp: document.getElementById('sync-timestamp'),
    manualSyncBtn: document.getElementById('manual-sync-btn'),
    syncIcon: document.getElementById('sync-icon'),
    syncBtnText: document.getElementById('sync-btn-text'),
  };
}

export function showIndexingInProgress() {
  const { syncStatusBadge, syncTimestamp, syncIcon, syncBtnText, manualSyncBtn } = syncEls();
  if (syncStatusBadge) {
    syncStatusBadge.className = 'bg-amber-100 text-amber-800 text-[11px] px-2 py-0.5 rounded-full font-semibold';
    syncStatusBadge.textContent = 'In progress';
  }
  if (syncTimestamp) syncTimestamp.textContent = getCurrentTimestamp();
  if (syncIcon) syncIcon.className = 'fas fa-sync-alt text-gray-400 text-sm animate-spin';
  if (syncBtnText) syncBtnText.textContent = 'Syncing...';
  if (manualSyncBtn) {
    manualSyncBtn.disabled = true;
    manualSyncBtn.classList.add('opacity-50', 'cursor-not-allowed');
  }
  refreshAllHighlightWidgets();
  updateHighlightFeaturePageBanner();
  updateAllBanners();
  updateEditorModalBanner();
  updateFindterStatus();
}

export function showIndexingComplete() {
  AppState.isIndexing = false;
  AppState.indexingComplete = true;
  if (AppState.indexingInterval) {
    clearInterval(AppState.indexingInterval);
    AppState.indexingInterval = null;
  }
  localStorage.setItem(STORAGE_KEYS.INDEXING_COMPLETE, 'true');
  if (!localStorage.getItem(STORAGE_KEYS.HIGHLIGHT_INDEX_COMPLETED_AT)) {
    localStorage.setItem(STORAGE_KEYS.HIGHLIGHT_INDEX_COMPLETED_AT, String(Date.now()));
  }
  if (!AppState.hasOnboarded) {
    AppState.hasOnboarded = true;
    localStorage.setItem(STORAGE_KEYS.HAS_ONBOARDED, 'true');
  }
  const { syncStatusBadge, syncTimestamp, syncIcon, syncBtnText, manualSyncBtn } = syncEls();
  if (syncStatusBadge) {
    syncStatusBadge.className = 'bg-[#cbf1c4] text-[#1f5119] text-[11px] px-2 py-0.5 rounded-full font-semibold';
    syncStatusBadge.textContent = 'Completed';
  }
  if (syncTimestamp) syncTimestamp.textContent = getCurrentTimestamp();
  if (syncIcon) syncIcon.className = 'fas fa-sync-alt text-gray-500 text-sm';
  if (syncBtnText) syncBtnText.textContent = 'Manual sync';
  if (manualSyncBtn) {
    manualSyncBtn.disabled = false;
    manualSyncBtn.classList.remove('opacity-50', 'cursor-not-allowed');
  }
  refreshAllHighlightWidgets();
  updateHighlightFeaturePageBanner();
  updateRestrictedModalContent();
  updateEditorModalBanner();
  updateLockStates();
  updateAllBanners();
  updateFindterStatus();
  if (AppState.currentPage !== 'home') renderSubPageContent(AppState.currentPage);
}

export function forceEndIndexing() {
  if (AppState.indexingInterval) {
    clearInterval(AppState.indexingInterval);
    AppState.indexingInterval = null;
  }
  setTimeout(() => { showIndexingComplete(); }, 300);
}

export function startIndexingSimulation() {
  AppState.isIndexing = true;
  AppState.indexingComplete = false;
  AppState.indexingStartTime = Date.now();
  showIndexingInProgress();
  updateLockStates();
  const startTime = Date.now();
  const duration = AppState.indexingDuration;
  AppState.indexingInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min((elapsed / duration) * 100, 100);
    if (progress >= 100) {
      clearInterval(AppState.indexingInterval);
      AppState.indexingInterval = null;
      setTimeout(() => { showIndexingComplete(); }, 300);
    }
  }, 100);
}

export function resetIndexing() {
  if (AppState.indexingInterval) {
    clearInterval(AppState.indexingInterval);
    AppState.indexingInterval = null;
  }
  AppState.isIndexing = true;
  AppState.indexingComplete = false;
  AppState.appEnabled = false;
  AppState.flowCompleted = false;
  AppState.hasEnabledInEditor = false;
  AppState.selectedTheme = '';
  AppState.lastEnabledTheme = '';
  AppState.firstEnableDone = false;
  AppState.appToggleState = 'off';
  localStorage.removeItem(STORAGE_KEYS.APP_TOGGLE_STATE);
  localStorage.removeItem(STORAGE_KEYS.INDEXING_COMPLETE);
  localStorage.removeItem(STORAGE_KEYS.SELECTED_THEME);
  localStorage.removeItem(STORAGE_KEYS.LAST_ENABLED_THEME);
  localStorage.removeItem(STORAGE_KEYS.FIRST_ENABLE_DONE);
  clearHighlightScreenFlags();
  startIndexingSimulation();
  updateLockStates();
  const step1Initial = document.getElementById('step1-initial');
  const step1Completed = document.getElementById('step1-completed');
  const step1Checkbox = document.getElementById('step1-checkbox');
  if (step1Initial) step1Initial.classList.remove('hidden');
  if (step1Completed) step1Completed.classList.add('hidden');
  if (step1Checkbox) {
    step1Checkbox.setAttribute('data-completed', 'false');
    step1Checkbox.classList.remove('bg-[#303030]', 'text-white');
    step1Checkbox.classList.add('border-2', 'border-dashed', 'border-gray-400', 'bg-white');
    const checkIcon = step1Checkbox.querySelector('.fa-check');
    if (checkIcon) checkIcon.classList.add('text-transparent');
  }
  updateProgressAndMessages();
  renderSubPageContent(AppState.currentPage);
  updateAllBanners();
  updateGuideStep1Status();
}

export function startFreshReindexAfterWelcomeGate() {
  AppState.indexingComplete = false;
  AppState.isIndexing = true;
  localStorage.removeItem(STORAGE_KEYS.INDEXING_COMPLETE);
  clearHighlightScreenFlags();
  updateFindterStatus();
  startIndexingSimulation();
}
