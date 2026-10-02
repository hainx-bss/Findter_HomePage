import { emit, on } from '../app/bus.js';
import { AppState } from '../app/store.js';
import { checkAndUnlockFeatures } from '../app/locks.js';
import { updateAllBanners } from '../services/banners.js';
import { handleEnableAppFromBanner, openEditorWithAutoEnable } from '../services/editorLaunch.js';
import { updateGuideStep1Status } from '../screens/home/onboarding.js';
import { renderSubPageContent } from '../screens/placeholders/content.js';
import { updateEditorModalBanner } from './editorBanner.js';
import { closeModal, isModalOpen, openModal } from './modal.js';

function modalEl() { return document.getElementById('editor-modal'); }

function updateEditorModalCloseButton() {
  const closeEditorModalBtn = document.getElementById('close-editor-modal-btn');
  if (!closeEditorModalBtn) return;
  if (AppState.hasEnabledInEditor || AppState.flowCompleted) {
    closeEditorModalBtn.style.display = 'flex';
    closeEditorModalBtn.style.visibility = 'visible';
  } else {
    closeEditorModalBtn.style.display = 'none';
    closeEditorModalBtn.style.visibility = 'hidden';
  }
}

function completeFlow() {
  if (AppState.flowCompleted) return;
  AppState.flowCompleted = true;
  AppState.appEnabled = AppState.appToggleState === 'on';
  updateEditorModalCloseButton();
  checkAndUnlockFeatures();
  updateAllBanners();
  updateGuideStep1Status();
  if (AppState.currentPage !== 'home') renderSubPageContent(AppState.currentPage);
}

export function openEditorModal() {
  const editorModal = modalEl();
  if (!editorModal) return;
  openModal(editorModal);
  const editorThemeDisplay = document.getElementById('editor-theme-display');
  if (editorThemeDisplay) editorThemeDisplay.textContent = AppState.selectedTheme;
  updateEditorModalCloseButton();
  updateEditorModalBanner();
}

export function closeEditorModal() {
  const editorModal = modalEl();
  if (!editorModal) return;
  closeModal(editorModal);
  if (AppState.hasEnabledInEditor || AppState.flowCompleted) completeFlow();
}

export function isEditorModalOpen() {
  return isModalOpen(modalEl());
}

export function canDismissEditorModal() {
  return AppState.hasEnabledInEditor || AppState.flowCompleted;
}

function goBackToThemeModal() {
  const editorModal = modalEl();
  if (editorModal) editorModal.classList.add('hidden');
  setTimeout(() => emit('open-theme-picker'), 150);
}

export function mountEnableEmbed() {
  const closeBtn = document.getElementById('close-editor-modal-btn');
  const backBtn = document.getElementById('editor-modal-back-btn');
  const overlay = document.getElementById('editor-modal-overlay');
  const enableBtn = document.getElementById('enable-editor-modal-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeEditorModal);
  if (backBtn) backBtn.addEventListener('click', goBackToThemeModal);
  if (overlay) {
    overlay.addEventListener('click', () => {
      if (canDismissEditorModal()) closeEditorModal();
    });
  }
  if (enableBtn) {
    enableBtn.addEventListener('click', () => {
      if (!AppState.indexingComplete) {
        alert('Please wait for indexing to complete first.');
        return;
      }
      openEditorWithAutoEnable();
      closeEditorModal();
    });
  }
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="enable-app-from-banner"]')) handleEnableAppFromBanner();
  });
}

on('open-editor-modal', () => openEditorModal());
