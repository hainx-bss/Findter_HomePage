import { openChat, setTrialFeedbackReplyWindow, addMessageToChat } from '../services/crisp.js';
import { renderPlanExpiry, setTrialDaysLeft } from '../screens/home/plan.js';

const TRIAL_WARNING_COPY = {
  7: {
    heading: '7 Days Left in Your Trial',
    text: "No charge yet, and you still have full access to all features. When you're ready, pick a plan to keep your filters running without any gap.",
    primaryCta: 'View Plans',
  },
  3: {
    heading: '3 Days Left: Keep Your Filters Running',
    text: "Your trial ends in 3 days. You haven't been charged and still have full access, upgrade now so your filters keep working without interruption.",
    primaryCta: 'Choose a Plan',
  },
  1: {
    heading: 'Your Trial Ends Tomorrow',
    text: 'This is your last day. Upgrade now to keep your filters running, or chat with us if you need more time, we can extend your trial by 14 days.',
    primaryCta: 'Upgrade Now',
    secondaryCta: 'Chat with Us',
  },
};

const TRIAL_CHAT_MESSAGES = {
  7: "Hi! 👋 You've got a full week to explore Findter, how's it going so far? Is there anything not working the way you expected?",
  1: "Hi again! 👋 Your trial ends tomorrow, is there anything stopping you from upgrading? Whether it's pricing, timing, or a missing feature, just tell us and we'll help sort it out.",
  0: "Hi! 👋 Your trial just ended, did something not work out, or is there anything we can clarify before you decide on a plan?",
};

export function mountDevMenu() {
  const warningTrialBtn = document.getElementById('warning-trial-btn');
  const warningTrialMenu = document.getElementById('warning-trial-menu');
  const trialWarningBanner = document.getElementById('trial-warning-banner');
  const trialWarningHeading = document.getElementById('trial-warning-heading');
  const trialWarningText = document.getElementById('trial-warning-text');
  const trialWarningCloseBtn = document.getElementById('trial-warning-close-btn');
  const trialWarningCtaPrimary = document.getElementById('trial-warning-cta-primary');
  const trialWarningCtaSecondary = document.getElementById('trial-warning-cta-secondary');
  const headerMoreBtn = document.getElementById('header-more-btn');
  const headerDevMenu = document.getElementById('header-dev-menu');

  if (warningTrialBtn && warningTrialMenu) {
    warningTrialBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      warningTrialMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!warningTrialMenu.classList.contains('hidden') &&
        !warningTrialMenu.contains(e.target) &&
        !warningTrialBtn.contains(e.target)) {
        warningTrialMenu.classList.add('hidden');
      }
    });
  }
  if (trialWarningCloseBtn && trialWarningBanner) {
    trialWarningCloseBtn.addEventListener('click', () => trialWarningBanner.classList.add('hidden'));
  }
  if (trialWarningCtaPrimary) {
    trialWarningCtaPrimary.addEventListener('click', () => {
      const pricingNoticeBanner = document.getElementById('pricing-notice-banner');
      if (!pricingNoticeBanner) return;
      pricingNoticeBanner.classList.remove('hidden');
      pricingNoticeBanner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  if (trialWarningCtaSecondary) {
    trialWarningCtaSecondary.addEventListener('click', () => openChat({ hideBadge: true }));
  }
  document.querySelectorAll('.warning-trial-option').forEach((opt) => {
    opt.addEventListener('click', () => {
      const days = opt.getAttribute('data-days');
      let trialDays = parseInt(days, 10);
      if (Number.isNaN(trialDays)) trialDays = 0;
      setTrialDaysLeft(trialDays);
      renderPlanExpiry();
      const copy = TRIAL_WARNING_COPY[days];
      if (days !== '0') {
        if (copy) {
          if (trialWarningHeading) trialWarningHeading.textContent = copy.heading;
          if (trialWarningText) trialWarningText.textContent = copy.text;
          if (trialWarningCtaPrimary) trialWarningCtaPrimary.textContent = copy.primaryCta;
          if (trialWarningCtaSecondary) trialWarningCtaSecondary.classList.toggle('hidden', !copy.secondaryCta);
        }
        if (trialWarningBanner) {
          trialWarningBanner.classList.remove('hidden');
          trialWarningBanner.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      if (warningTrialMenu) warningTrialMenu.classList.add('hidden');
      const chatMessage = TRIAL_CHAT_MESSAGES[days];
      if (chatMessage) {
        openChat({ hideBadge: true });
        addMessageToChat(chatMessage, false);
        setTrialFeedbackReplyWindow(5 * 60 * 1000);
      }
    });
  });

  if (headerMoreBtn && headerDevMenu) {
    headerMoreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      headerDevMenu.classList.toggle('mobile-menu-open');
    });
    document.addEventListener('click', (e) => {
      if (headerDevMenu.classList.contains('mobile-menu-open') &&
        !headerDevMenu.contains(e.target) &&
        !headerMoreBtn.contains(e.target)) {
        headerDevMenu.classList.remove('mobile-menu-open');
      }
    });
  }
}
