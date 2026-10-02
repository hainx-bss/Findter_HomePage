import { AppState } from '../app/store.js';
import { navigateToPage } from '../app/router.js';
import { HIGHLIGHT_BACK_TARGET, HIGHLIGHT_SESSION_HIDE, STORAGE_KEYS } from '../app/storageKeys.js';
import { startIndexingSimulation } from './indexing.js';
import { trackHighlight } from './highlightTracking.js';
import { resetHighlightScreenToFirst, restoreHighlightFeature } from './highlightWidget.js';

export const HIGHLIGHT_SCREEN_TTL_MS = 60 * 60 * 1000;
export const HIGHLIGHT_SHOP_DOMAIN = 'demo-store.myshopify.com';

export function mountHighlightBack() {
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.findterHighlightBack) {
      navigateToPage('advanced');
      return;
    }
    restoreHighlightFromBack();
  });
}

export function hasHighlightViewFeatureFlag() {
  return localStorage.getItem(STORAGE_KEYS.HIGHLIGHT_VIEW_FEATURE) === 'true';
}

export function readHighlightBackTarget() {
  try {
    const raw = sessionStorage.getItem(HIGHLIGHT_BACK_TARGET);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function shouldShowHighlightScreen() {
  if (hasHighlightViewFeatureFlag()) return false;
  if (sessionStorage.getItem(HIGHLIGHT_SESSION_HIDE) === '1') return false;
  if (localStorage.getItem(STORAGE_KEYS.HIGHLIGHT_CONTINUE) === 'true') return false;
  const completedAt = parseInt(localStorage.getItem(STORAGE_KEYS.HIGHLIGHT_INDEX_COMPLETED_AT) || '0', 10);
  if (completedAt && (Date.now() - completedAt) >= HIGHLIGHT_SCREEN_TTL_MS) {
    if (localStorage.getItem(STORAGE_KEYS.HIGHLIGHT_EXPIRED) !== 'true') {
      localStorage.setItem(STORAGE_KEYS.HIGHLIGHT_EXPIRED, 'true');
      trackHighlight('highlight_screen_expired', {
        hide_reason: 'timeout_1h',
        shop_domain: HIGHLIGHT_SHOP_DOMAIN,
        indexing_status: 'completed',
      });
    }
    return false;
  }
  return true;
}

export function clearHighlightScreenFlags() {
  localStorage.removeItem(STORAGE_KEYS.HIGHLIGHT_CONTINUE);
  localStorage.removeItem(STORAGE_KEYS.HIGHLIGHT_VIEW_FEATURE);
  localStorage.removeItem(STORAGE_KEYS.HIGHLIGHT_EXPIRED);
  localStorage.removeItem(STORAGE_KEYS.HIGHLIGHT_INDEX_COMPLETED_AT);
  sessionStorage.removeItem(HIGHLIGHT_SESSION_HIDE);
  sessionStorage.removeItem(HIGHLIGHT_BACK_TARGET);
}

function ensureIndexing() {
  if (!AppState.indexingComplete && !AppState.indexingInterval) startIndexingSimulation();
}

export function showHighlightAtFeature(featureCode) {
  ensureIndexing();
  if (featureCode) restoreHighlightFeature(featureCode);
  navigateToPage('highlight-feature');
}

export function enterAppAfterWelcome() {
  const nav = performance.getEntriesByType ? performance.getEntriesByType('navigation') : [];
  const isBack = !!(nav[0] && nav[0].type === 'back_forward');
  if (isBack) {
    const backTarget = readHighlightBackTarget();
    if (backTarget && backTarget.source === 'highlight_page') {
      showHighlightAtFeature(backTarget.featureCode);
      return;
    }
    navigateToPage('home');
    return;
  }
  if (shouldShowHighlightScreen()) {
    showHighlightAtFeature(null);
    resetHighlightScreenToFirst();
    return;
  }
  navigateToPage('home');
}

export function restoreHighlightFromBack() {
  const backTarget = readHighlightBackTarget();
  if (backTarget && backTarget.source === 'highlight_page') {
    showHighlightAtFeature(backTarget.featureCode);
    return;
  }
  navigateToPage('home');
}

export function recordHighlightContinue() {
  localStorage.setItem(STORAGE_KEYS.HIGHLIGHT_CONTINUE, 'true');
  trackHighlight('highlight_continue_clicked', {
    indexing_status: 'completed',
    shop_domain: HIGHLIGHT_SHOP_DOMAIN,
  });
}
