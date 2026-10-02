import { sidebarHtml } from './markup/sidebar.js';

export function renderSidebar() {
  return sidebarHtml;
}

export function mountSidebar() {
  const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-collapsed');
    });
  }
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
      document.body.classList.add('sidebar-collapsed');
    });
  }
  document.querySelectorAll('aside a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.add('sidebar-collapsed');
    });
  });
}
