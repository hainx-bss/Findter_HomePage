import { AppState } from '../app/store.js';
import { firstTimeCompleteBannerHtml, indexingBannerHtml } from '../ui/banner.js';

const PAGE_IDS = ['home', 'filter', 'search', 'metafield', 'design', 'analytics-app', 'advanced'];

function containerFor(page) {
  if (page === 'home') return document.getElementById('unified-status-banner');
  return document.getElementById('unified-banner-' + page);
}

export function updateAllBanners() {
  let bannerHTML = '';
  let showBanner = true;

  if (!AppState.indexingComplete) {
    bannerHTML = indexingBannerHtml();
  } else if (!AppState.firstEnableDone) {
    bannerHTML = firstTimeCompleteBannerHtml();
  } else {
    showBanner = false;
  }

  PAGE_IDS.forEach((page) => {
    const container = containerFor(page);
    if (!container) return;
    if (showBanner) {
      container.classList.remove('hidden');
      container.innerHTML = bannerHTML;
    } else {
      container.classList.add('hidden');
      container.innerHTML = '';
    }
  });

  const indexingBannerContainer = document.getElementById('indexing-banner-container');
  if (indexingBannerContainer) {
    indexingBannerContainer.classList.add('hidden');
    indexingBannerContainer.innerHTML = '';
  }
}
