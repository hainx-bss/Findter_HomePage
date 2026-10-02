import { navigateToPage } from '../../app/router.js';
import { createHighlightFeaturedWidget } from '../../services/highlightWidget.js';
import { goToOnboarding } from '../home/onboarding.js';
import { highlightFeatureHtml } from './markup.js';

export function renderHighlightFeature() {
  return highlightFeatureHtml;
}

export function mountHighlightFeature() {
  createHighlightFeaturedWidget({
    tabsElId: 'hf-feature-highlight-tabs',
    bodyElId: 'hf-feature-highlight-body',
    autoplay: true,
    alwaysShowActions: true,
  });
  const continueBtn = document.getElementById('hf-continue-to-home-btn');
  if (continueBtn) continueBtn.addEventListener('click', () => navigateToPage('home'));
  const viewBtn = document.getElementById('hf-view-features-btn');
  if (viewBtn) {
    viewBtn.addEventListener('click', () => {
      const featureCard = document.getElementById('hf-highlight-featured-card');
      if (featureCard) featureCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  const startBtn = document.getElementById('hf-start-onboarding-btn');
  if (startBtn) startBtn.addEventListener('click', goToOnboarding);
}
