import { STORAGE_KEYS } from '../app/storageKeys.js';
import { navigateToPage } from '../app/router.js';
import { enterAppAfterWelcome } from '../services/highlightEntry.js';
import { resetHighlightScreenToFirst } from '../services/highlightWidget.js';
import { startFreshReindexAfterWelcomeGate } from '../services/indexing.js';
import { closeModal, isModalOpen, openModal } from './modal.js';
import { initWelcomeCarousel } from './welcomeTracking.js';

let tracking = { onShow() {}, onDismiss() {} };

function modalEl() { return document.getElementById('welcome-gate-modal'); }

export function isWelcomeSuppressed() {
  return localStorage.getItem(STORAGE_KEYS.WELCOME_SEEN) === 'true';
}

export function openWelcomeGate() {
  const welcomeGateModal = modalEl();
  if (!welcomeGateModal) return;
  openModal(welcomeGateModal);
  const dialog = welcomeGateModal.querySelector('.p-modal__dialog');
  if (dialog) dialog.focus();
  tracking.onShow();
}

export function dismissWelcomeGate(method) {
  const welcomeGateModal = modalEl();
  if (!welcomeGateModal || welcomeGateModal.classList.contains('hidden')) return;
  tracking.onDismiss(method || 'close_button');
  localStorage.setItem(STORAGE_KEYS.WELCOME_SEEN, 'true');
  closeModal(welcomeGateModal);
  startFreshReindexAfterWelcomeGate();
  resetHighlightScreenToFirst();
  navigateToPage('highlight-feature');
}

export function isWelcomeGateOpen() {
  return isModalOpen(modalEl());
}

export function mountWelcomeGate() {
  tracking = initWelcomeCarousel();
  const continueBtn = document.getElementById('welcome-gate-continue-btn');
  const closeBtn = document.getElementById('welcome-gate-close-btn');
  const backdrop = document.getElementById('welcome-gate-backdrop');
  const showBtn = document.getElementById('show-welcome-modal-btn');
  if (continueBtn) continueBtn.addEventListener('click', () => dismissWelcomeGate('continue'));
  if (closeBtn) closeBtn.addEventListener('click', () => dismissWelcomeGate('close_button'));
  if (backdrop) backdrop.addEventListener('click', () => dismissWelcomeGate('backdrop'));
  if (showBtn) {
    showBtn.addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEYS.WELCOME_SEEN);
      openWelcomeGate();
    });
  }
}

export function initWelcomeFlow() {
  if (modalEl() && !isWelcomeSuppressed()) openWelcomeGate();
  else enterAppAfterWelcome();
}
