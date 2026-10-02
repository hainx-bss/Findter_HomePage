import { sidebarHtml } from './markup/sidebar.js';

export function renderSidebar() {
  return sidebarHtml;
}

export function mountSidebar() {
  const collapseBtn = document.getElementById('sidebar-toggle-btn');
  const expandBtn = document.getElementById('sidebar-expand-btn');
  const mobileBtn = document.getElementById('mobile-nav-btn');
  const main = document.getElementById('main');
  const mobileQuery = window.matchMedia('(max-width: 767px)');

  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      if (mobileQuery.matches) document.body.classList.toggle('nav-open');
      else document.body.classList.toggle('nav-collapsed');
    });
  }
  if (expandBtn) {
    expandBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.body.classList.remove('nav-collapsed');
    });
  }
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  }
  if (main) {
    main.addEventListener('click', () => {
      if (document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
      }
    });
  }
  document.querySelectorAll('#nav a').forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileQuery.matches) document.body.classList.remove('nav-open');
    });
  });
}
