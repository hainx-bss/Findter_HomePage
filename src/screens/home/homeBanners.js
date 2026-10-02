import { navigateToPage } from '../../app/router.js';
import { AppState } from '../../app/store.js';
import { openChat } from '../../services/crisp.js';
import { showIndexingComplete } from '../../services/indexing.js';
import { PLAN_USAGE, PLAN_USAGE_OVER, PLAN_USAGE_WITHIN, renderPlanUsage } from './plan.js';

export function mountHomeBanners() {
  const pricingNoticeBanner = document.getElementById('pricing-notice-banner');
  const pricingNoticeCloseBtn = document.getElementById('pricing-notice-close-btn');
  const pricingNoticeCollapseBtn = document.getElementById('pricing-notice-collapse-btn');
  const pricingNoticeBody = document.getElementById('pricing-notice-body');
  const pricingNoticeChevron = document.getElementById('pricing-notice-chevron');
  const pricingNoticeContactLink = document.getElementById('pricing-notice-contact-link');
  const showPricingNoticeBtn = document.getElementById('show-pricing-notice-btn');
  const limitReachedBanner = document.getElementById('limit-reached-banner');
  const limitReachedCloseBtn = document.getElementById('limit-reached-close-btn');
  const limitReachedCollapseBtn = document.getElementById('limit-reached-collapse-btn');
  const limitReachedBody = document.getElementById('limit-reached-body');
  const limitReachedChevron = document.getElementById('limit-reached-chevron');
  const limitReachedContactBtn = document.getElementById('limit-reached-contact-btn');
  const showLimitReachedBtn = document.getElementById('show-limit-reached-btn');
  const welcomeContactBtn = document.getElementById('welcome-contact-btn');

  if (pricingNoticeCollapseBtn && pricingNoticeBody) {
    pricingNoticeCollapseBtn.addEventListener('click', () => {
      const isHidden = pricingNoticeBody.classList.contains('hidden');
      pricingNoticeBody.classList.toggle('hidden');
      pricingNoticeChevron.classList.toggle('fa-chevron-up', isHidden);
      pricingNoticeChevron.classList.toggle('fa-chevron-down', !isHidden);
    });
  }
  if (pricingNoticeCloseBtn && pricingNoticeBanner) {
    pricingNoticeCloseBtn.addEventListener('click', () => pricingNoticeBanner.classList.add('hidden'));
  }
  if (showPricingNoticeBtn && pricingNoticeBanner) {
    showPricingNoticeBtn.addEventListener('click', () => {
      pricingNoticeBanner.classList.remove('hidden');
      pricingNoticeBanner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  if (pricingNoticeContactLink) {
    pricingNoticeContactLink.addEventListener('click', (e) => {
      e.preventDefault();
      openChat({ hideBadge: true });
    });
  }
  if (welcomeContactBtn) {
    welcomeContactBtn.addEventListener('click', () => openChat({ hideBadge: true }));
  }

  if (limitReachedCollapseBtn && limitReachedBody) {
    limitReachedCollapseBtn.addEventListener('click', () => {
      const isHidden = limitReachedBody.classList.contains('hidden');
      limitReachedBody.classList.toggle('hidden');
      limitReachedChevron.classList.toggle('fa-chevron-up', isHidden);
      limitReachedChevron.classList.toggle('fa-chevron-down', !isHidden);
    });
  }
  if (limitReachedCloseBtn && limitReachedBanner) {
    limitReachedCloseBtn.addEventListener('click', () => {
      limitReachedBanner.classList.add('hidden');
      PLAN_USAGE.used = PLAN_USAGE_WITHIN;
      const productCount = document.getElementById('limit-reached-product-count');
      if (productCount) productCount.textContent = '10,000';
      renderPlanUsage();
    });
  }
  if (showLimitReachedBtn && limitReachedBanner) {
    showLimitReachedBtn.addEventListener('click', () => {
      navigateToPage('home');
      if (!AppState.indexingComplete) showIndexingComplete();
      PLAN_USAGE.used = PLAN_USAGE_OVER;
      const productCount = document.getElementById('limit-reached-product-count');
      if (productCount) productCount.textContent = PLAN_USAGE_OVER.toLocaleString('en-US');
      renderPlanUsage();
      limitReachedBanner.classList.remove('hidden');
      const statusCard = document.getElementById('findter-status-card');
      if (statusCard) statusCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
  if (limitReachedContactBtn) {
    limitReachedContactBtn.addEventListener('click', () => openChat({ hideBadge: true }));
  }
}
