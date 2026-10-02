import { updateEditorModalBanner } from '../modals/editorBanner.js';

export function updateLockStates() {
  const goToFilterBtn = document.getElementById('go-to-filter-btn');
  const filterLockHint = document.getElementById('filter-lock-hint');
  if (goToFilterBtn) goToFilterBtn.disabled = false;
  if (filterLockHint) filterLockHint.classList.add('hidden');
  updateEditorModalBanner();
}

export function checkAndUnlockFeatures() {
  updateLockStates();
}
