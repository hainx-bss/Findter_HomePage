import { getAll } from './highlightStore.js';
import { navigateToPage } from '../app/router.js';

const KNOWN_HIGHLIGHT_PAGE_IDS = ['home', 'filter', 'search', 'metafield', 'design', 'analytics-app', 'advanced', 'master'];

export function viewFeatureNow(item) {
  if (!item || !item.navigateUrl) return;
  const url = item.navigateUrl.trim();
  if (!url) return;
  const hashIndex = url.indexOf('#');
  const pageId = hashIndex === -1 ? url : url.substring(0, hashIndex);
  if (KNOWN_HIGHLIGHT_PAGE_IDS.indexOf(pageId) !== -1) {
    navigateToPage(pageId);
    return;
  }
  if (/^https?:\/\//i.test(url) || /\.html?($|#)/i.test(url)) {
    window.open(url, '_blank');
    return;
  }
  console.log('View Feature Now: unrecognized navigate URL', url);
}

export function findHighlightItem(code) {
  return getAll().filter((item) => item.code === code)[0];
}
