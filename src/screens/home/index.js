import { navigateToPage } from '../../app/router.js';
import { welcomeBoxHtml } from './components/welcomeBox.js';
import { pricingBannerHtml } from './components/pricingBanner.js';
import { limitBannerHtml } from './components/limitBanner.js';
import { trialBannerHtml } from './components/trialBanner.js';
import { onboardingGuideHtml } from './components/onboardingGuide.js';
import { highlightCardHtml } from './components/highlightCard.js';
import { recommendAppsHtml } from './components/recommendApps.js';
import { dataInsightHtml } from './components/dataInsight.js';
import { masterShortcutHtml } from './components/masterShortcut.js';
import { feedbackBannerHtml } from './components/feedbackBanner.js';
import { statusCardHtml } from './components/statusCard.js';
import { helpSupportHtml } from './components/helpSupport.js';
import { syncCardHtml } from './components/syncCard.js';
import { mountAppCarousel } from './components/appCarousel.js';
import { mountOnboarding } from './onboarding.js';
import { mountMasterShortcut } from '../master/index.js';

export function renderHome() {
  return `
                <div id="page-home" class="page-view active">
                    <div class="app-page">
                        ${welcomeBoxHtml}
                        <div id="homepage-grid" class="homepage-grid">
                            <div class="homepage-column homepage-left">
                                ${pricingBannerHtml}
                                ${limitBannerHtml}
                                ${trialBannerHtml}
                                ${onboardingGuideHtml}
                                ${highlightCardHtml}
                                ${recommendAppsHtml}
                                ${dataInsightHtml}
                                ${masterShortcutHtml}
                            </div>
                            <div class="homepage-column homepage-right">
                                ${feedbackBannerHtml}
                                ${statusCardHtml}
                                ${helpSupportHtml}
                                ${syncCardHtml}
                            </div>
                        </div>
                    </div>
                </div>`;
}

export function mountHome() {
  mountAppCarousel();
  mountOnboarding();
  mountMasterShortcut(navigateToPage);
}
