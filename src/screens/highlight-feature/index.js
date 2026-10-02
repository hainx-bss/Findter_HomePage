import { navigateToPage } from '../../app/router.js';
import { recordHighlightContinue } from '../../services/highlightEntry.js';
import { mountHighlightMediaModal } from '../../services/highlightMedia.js';
import { createHighlightFeaturedWidget } from '../../services/highlightWidget.js';
import { highlightFeatureHtml } from './markup.js';

export function renderHighlightFeature() {
  return highlightFeatureHtml;
}

export function mountHighlightFeature() {
  mountHighlightMediaModal();
  createHighlightFeaturedWidget({
    tabsElId: 'hf-feature-highlight-tabs',
    bodyElId: 'hf-feature-highlight-body',
    autoplay: true,
    alwaysShowActions: true,
    source: 'highlight_page',
  });
  const continueBtn = document.getElementById('hf-continue-to-home-btn');
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      recordHighlightContinue();
      navigateToPage('home');
    });
  }
}
