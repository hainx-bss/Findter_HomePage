import '../styles/tailwind.css';
import '../styles/app.css';
import '../styles/polaris.css';
import './services/highlightStore.js';
import './app/appToggle.js';
import { bindStorageSync, loadPersistedState } from './app/store.js';
import { updateLockStates } from './app/locks.js';
import { mountNavigation } from './app/router.js';
import { renderShell } from './layout/shell.js';
import { mountSidebar } from './layout/Sidebar.js';
import { mountAppBar } from './layout/AppBar.js';
import { mountDevMenu } from './layout/devMenu.js';
import { mountChat } from './layout/ChatWidget.js';
import { mountHome } from './screens/home/index.js';
import { mountHomeBanners } from './screens/home/homeBanners.js';
import { mountWhatsNew } from './screens/home/whatsNew.js';
import {
  collapseOnboardingGuide,
  shouldCollapseOnboardingOnReload,
  updateGuideStep1Status,
  updateSearchSuggestionGuideStatus,
} from './screens/home/onboarding.js';
import { updateFindterStatus } from './screens/home/plan.js';
import { resetFeedbackStateForLoad } from './screens/home/feedbackState.js';
import { createHighlightFeaturedWidget } from './services/highlightWidget.js';
import { mountHighlightFeature } from './screens/highlight-feature/index.js';
import { mountThemePicker } from './modals/ThemePicker.js';
import { mountEnableEmbed } from './modals/EnableEmbed.js';
import { mountAccessRestricted } from './modals/AccessRestricted.js';
import { mountFeedback } from './modals/Feedback.js';
import { initWelcomeFlow, mountWelcomeGate } from './modals/WelcomeGate.js';
import { mountHighlightBack } from './services/highlightEntry.js';
import { mountKeyboard } from './modals/keyboard.js';

function boot() {
  console.log('Initializing Dashboard...');
  const root = document.createElement('div');
  root.id = 'app';
  root.className = 'contents';
  root.innerHTML = renderShell();
  document.body.prepend(root);

  bindStorageSync();
  mountSidebar();
  mountNavigation();
  mountAppBar();
  mountDevMenu();
  mountChat();
  mountHome();
  mountThemePicker();
  mountEnableEmbed();
  mountAccessRestricted();
  mountWelcomeGate();
  mountKeyboard();
  createHighlightFeaturedWidget({
    tabsElId: 'feature-highlight-tabs',
    bodyElId: 'feature-highlight-body',
    autoplay: false,
    source: 'homepage',
  });

  loadPersistedState();
  updateLockStates();
  updateGuideStep1Status();
  updateSearchSuggestionGuideStatus();
  updateFindterStatus();
  if (shouldCollapseOnboardingOnReload()) collapseOnboardingGuide();
  mountHighlightFeature();
  mountHighlightBack();
  initWelcomeFlow();
  mountWhatsNew();
  mountHomeBanners();
  resetFeedbackStateForLoad();
  mountFeedback();
  console.log('Ready!');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
