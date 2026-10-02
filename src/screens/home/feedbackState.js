import { STORAGE_KEYS } from '../../app/storageKeys.js';

export function getFeedbackState() {
  return localStorage.getItem(STORAGE_KEYS.FEEDBACK_STATE) || 'default';
}

export function renderFeedbackBannerState() {
  const feedbackBanner = document.getElementById('feedback-banner');
  const feedbackMiniBox = document.getElementById('feedback-mini-box');
  const state = getFeedbackState();
  if (state === 'hidden') {
    if (feedbackBanner) feedbackBanner.classList.add('hidden');
    if (feedbackMiniBox) feedbackMiniBox.classList.add('hidden');
  } else if (state === 'mini') {
    if (feedbackBanner) feedbackBanner.classList.add('hidden');
    if (feedbackMiniBox) feedbackMiniBox.classList.remove('hidden');
  } else {
    if (feedbackBanner) feedbackBanner.classList.remove('hidden');
    if (feedbackMiniBox) feedbackMiniBox.classList.add('hidden');
  }
}

export function setFeedbackState(state) {
  localStorage.setItem(STORAGE_KEYS.FEEDBACK_STATE, state);
  renderFeedbackBannerState();
}

export function resetFeedbackStateForLoad() {
  localStorage.removeItem(STORAGE_KEYS.FEEDBACK_STATE);
  renderFeedbackBannerState();
}
