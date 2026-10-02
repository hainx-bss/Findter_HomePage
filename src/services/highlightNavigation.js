import { navigateToPage } from '../app/router.js';
import { STORAGE_KEYS } from '../app/storageKeys.js';
import { getAll } from './highlightStore.js';
import { setHighlightFocus } from './highlightFocus.js';
import { trackHighlight } from './highlightTracking.js';
import { HIGHLIGHT_BACK_TARGET, HIGHLIGHT_SESSION_HIDE } from '../app/storageKeys.js';

export function findHighlightItem(code) {
  return getAll().filter((item) => item.code === code)[0];
}

export function viewFeature(item, source) {
  if (!item) return;
  const fromPage = source || 'highlight_page';
  sessionStorage.setItem(HIGHLIGHT_SESSION_HIDE, '1');
  localStorage.setItem(STORAGE_KEYS.HIGHLIGHT_VIEW_FEATURE, 'true');
  sessionStorage.setItem(HIGHLIGHT_BACK_TARGET, JSON.stringify({
    source: fromPage,
    featureCode: item.code,
  }));
  trackHighlight('highlight_feature_view_clicked', {
    target_page: 'advanced_features',
    source: fromPage,
    indexing_status: localStorage.getItem(STORAGE_KEYS.INDEXING_COMPLETE) === 'true' ? 'completed' : 'indexing',
    feature_code: item.code,
    feature_name: item.name,
  });
  setHighlightFocus(item);
  history.pushState({ findterHighlightBack: true }, '');
  navigateToPage('advanced');
}
