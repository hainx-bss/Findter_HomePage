import { appBarHtml } from './markup/appBar.js';
import { forceEndIndexing, resetIndexing, startIndexingSimulation } from '../services/indexing.js';

export function renderAppBar() {
  return appBarHtml;
}

export function mountAppBar() {
  const resetIndexingBtn = document.getElementById('reset-indexing-btn');
  const endIndexBtn = document.getElementById('end-index-btn');
  const manualSyncBtn = document.getElementById('manual-sync-btn');
  if (resetIndexingBtn) resetIndexingBtn.addEventListener('click', resetIndexing);
  if (endIndexBtn) endIndexBtn.addEventListener('click', forceEndIndexing);
  if (manualSyncBtn) {
    manualSyncBtn.addEventListener('click', () => {
      if (manualSyncBtn.disabled) return;
      startIndexingSimulation();
    });
  }
}
