import { emit } from './bus.js';
import { AppState } from './store.js';
import { updateAllBanners } from '../services/banners.js';
import { renderMasterPage } from '../screens/master/index.js';
import { updateHighlightFeaturePageBanner } from '../screens/highlight-feature/banner.js';
import { renderSubPageContent } from '../screens/placeholders/content.js';

export function navigateToPage(pageId) {
  document.querySelectorAll('.page-view').forEach((page) => page.classList.remove('active'));
  const targetPage = document.getElementById('page-' + pageId);
  if (!targetPage) return;
  targetPage.classList.add('active');
  AppState.currentPage = pageId;
  document.querySelectorAll('[data-page]').forEach((item) => {
    item.classList.remove('nav-active');
    if (item.getAttribute('data-page') === pageId) item.classList.add('nav-active');
  });
  if (pageId === 'master') renderMasterPage();
  else if (pageId !== 'highlight-feature') renderSubPageContent(pageId);
  emit('navigate', pageId);
  if (pageId === 'highlight-feature') updateHighlightFeaturePageBanner();
  else updateAllBanners();
}

export function mountNavigation() {
  document.querySelectorAll('[data-page]').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.getAttribute('data-page');
      if (!page) return;
      if (page === 'advanced') {
        window.open('advanced.html', '_blank');
        return;
      }
      navigateToPage(page);
    });
  });
  const appHeaderTitle = document.getElementById('app-header-title');
  if (appHeaderTitle) {
    appHeaderTitle.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToPage('home');
    });
  }
}
