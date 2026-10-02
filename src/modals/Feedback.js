import { STORAGE_KEYS } from '../app/storageKeys.js';
import { escapeHtml } from '../utils/escape.js';
import { addMessageToChat, openChat } from '../services/crisp.js';
import { setFeedbackState } from '../screens/home/feedbackState.js';
import { closeModal, isModalOpen, openModal } from './modal.js';

const APP_STORE_REVIEW_URL = 'https://apps.shopify.com/findter-custom-filter-search#modal-show=WriteReviewModal&st_campaign=rate-app&st_source=admin-web';
let reviewSubmitPending = false;

function modalEl() { return document.getElementById('feedback-modal'); }

export function openFeedbackModal() {
  const feedbackModal = modalEl();
  if (!feedbackModal) return;
  const feedbackFormBody = document.getElementById('feedback-form-body');
  const feedbackSuccessBody = document.getElementById('feedback-success-body');
  const feedbackModalFooter = document.getElementById('feedback-modal-footer');
  const feedbackCategory = document.getElementById('feedback-category');
  const feedbackComment = document.getElementById('feedback-comment');
  const feedbackFiles = document.getElementById('feedback-files');
  if (feedbackFormBody) feedbackFormBody.classList.remove('hidden');
  if (feedbackSuccessBody) feedbackSuccessBody.classList.add('hidden');
  if (feedbackModalFooter) feedbackModalFooter.classList.remove('hidden');
  if (feedbackCategory) feedbackCategory.selectedIndex = 0;
  if (feedbackComment) feedbackComment.value = '';
  if (feedbackFiles) feedbackFiles.value = '';
  openModal(feedbackModal);
}

export function closeFeedbackModal() {
  closeModal(modalEl());
}

export function isFeedbackModalOpen() {
  return isModalOpen(modalEl());
}

function submitFeedback() {
  const feedbackCategory = document.getElementById('feedback-category');
  const feedbackComment = document.getElementById('feedback-comment');
  const feedbackFiles = document.getElementById('feedback-files');
  const feedbackFormBody = document.getElementById('feedback-form-body');
  const feedbackSuccessBody = document.getElementById('feedback-success-body');
  const feedbackModalFooter = document.getElementById('feedback-modal-footer');
  const category = feedbackCategory ? feedbackCategory.value : '';
  const comment = feedbackComment ? feedbackComment.value.trim() : '';
  const fileCount = feedbackFiles && feedbackFiles.files ? feedbackFiles.files.length : 0;
  if (!category) {
    if (feedbackCategory) feedbackCategory.focus();
    return;
  }
  const attachmentsText = fileCount > 0 ? fileCount + ' file(s) attached' : 'None';
  const summary = '📋 <strong>New Support Ticket</strong><br>' +
    'Category: ' + escapeHtml(category) + '<br>' +
    'Message: ' + (comment ? escapeHtml(comment) : '(none)') + '<br>' +
    'Attachments: ' + escapeHtml(attachmentsText);
  openChat({ hideBadge: true });
  addMessageToChat(summary, true, { html: true });
  setTimeout(() => {
    addMessageToChat("Thanks for reaching out! <br>We've received your feedback and our support team will get back to you shortly.", false, { html: true });
  }, 800);
  if (feedbackFormBody) feedbackFormBody.classList.add('hidden');
  if (feedbackModalFooter) feedbackModalFooter.classList.add('hidden');
  if (feedbackSuccessBody) feedbackSuccessBody.classList.remove('hidden');
  setFeedbackState('hidden');
  setTimeout(() => closeFeedbackModal(), 1600);
}

export function mountFeedback() {
  const closeBtn = document.getElementById('close-feedback-modal-btn');
  const cancelBtn = document.getElementById('feedback-cancel-btn');
  const submitBtn = document.getElementById('feedback-submit-btn');
  const overlay = document.getElementById('feedback-modal-overlay');
  const feedbackBannerCloseBtn = document.getElementById('feedback-banner-close');
  const showFeedbackBannerBtn = document.getElementById('show-feedback-banner-btn');
  const feedbackMiniBoxBtn = document.getElementById('feedback-mini-box-btn');
  const feedbackBanner = document.getElementById('feedback-banner');
  const thumbsUp = document.getElementById('feedback-thumbs-up');
  const thumbsDown = document.getElementById('feedback-thumbs-down');

  if (closeBtn) closeBtn.addEventListener('click', closeFeedbackModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeFeedbackModal);
  if (submitBtn) submitBtn.addEventListener('click', submitFeedback);
  if (overlay) overlay.addEventListener('click', closeFeedbackModal);
  if (feedbackBannerCloseBtn && feedbackBanner) {
    feedbackBannerCloseBtn.addEventListener('click', () => feedbackBanner.classList.add('hidden'));
  }
  if (showFeedbackBannerBtn) {
    showFeedbackBannerBtn.addEventListener('click', () => {
      setFeedbackState('default');
      if (feedbackBanner) feedbackBanner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  if (feedbackMiniBoxBtn) feedbackMiniBoxBtn.addEventListener('click', () => openFeedbackModal());
  window.addEventListener('focus', () => {
    if (!reviewSubmitPending) return;
    reviewSubmitPending = false;
    localStorage.setItem(STORAGE_KEYS.REVIEW_SUBMITTED, 'true');
    setFeedbackState('mini');
  });
  if (thumbsUp) {
    thumbsUp.addEventListener('click', () => {
      reviewSubmitPending = true;
      window.open(APP_STORE_REVIEW_URL, '_blank');
    });
  }
  if (thumbsDown) thumbsDown.addEventListener('click', () => openFeedbackModal());
}
