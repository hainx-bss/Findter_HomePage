import { AppState } from '../../app/store.js';
import { highlightCompleteBannerHtml, indexingBannerHtml } from '../../ui/banner.js';

export function updateHighlightFeaturePageBanner() {
  const bannerContainer = document.getElementById('hf-banner-container');
  const continueContainer = document.getElementById('hf-continue-container');
  if (!bannerContainer || !continueContainer) return;

  if (!AppState.indexingComplete) {
    bannerContainer.innerHTML = indexingBannerHtml();
    continueContainer.classList.add('hidden');
  } else {
    bannerContainer.innerHTML = highlightCompleteBannerHtml();
    continueContainer.classList.remove('hidden');
  }
}
