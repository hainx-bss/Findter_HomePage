import { AppState } from '../app/store.js';
import { navigateToPage } from '../app/router.js';
import { triggerGuideAttentionAnimation } from '../screens/home/onboarding.js';
import { closeModal, isModalOpen, openModal } from './modal.js';

function modalEl() { return document.getElementById('restricted-modal'); }

export function updateRestrictedModalContent() {
  const restrictionItem1 = document.getElementById('restriction-item-1');
  const restrictionCheck1 = document.getElementById('restriction-check-1');
  const restrictionText1 = document.getElementById('restriction-text-1');
  const restrictionSub1 = document.getElementById('restriction-sub-1');
  const restrictionItem2 = document.getElementById('restriction-item-2');
  const restrictionCheck2 = document.getElementById('restriction-check-2');
  if (!restrictionItem1 || !restrictionCheck1 || !restrictionText1 || !restrictionSub1 || !restrictionItem2 || !restrictionCheck2) return;

  if (AppState.indexingComplete) {
    restrictionItem1.className = 'flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200';
    restrictionCheck1.className = 'w-5 h-5 rounded-full border-2 border-green-500 bg-green-500 flex items-center justify-center shrink-0 mt-0.5';
    restrictionCheck1.innerHTML = '<i class="fas fa-check text-[10px] text-white"></i>';
    restrictionText1.textContent = 'Data indexing complete';
    restrictionSub1.textContent = 'All data collected successfully';
  } else {
    restrictionItem1.className = 'flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200';
    restrictionCheck1.className = 'w-5 h-5 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5';
    restrictionCheck1.innerHTML = '<i class="fas fa-clock text-[10px] text-amber-500"></i>';
    restrictionText1.textContent = 'Wait for data indexing to complete';
    restrictionSub1.textContent = 'Currently collecting data...';
  }

  if (AppState.appToggleState === 'on') {
    restrictionItem2.className = 'flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200';
    restrictionCheck2.className = 'w-5 h-5 rounded-full border-2 border-green-500 bg-green-500 flex items-center justify-center shrink-0 mt-0.5';
    restrictionCheck2.innerHTML = '<i class="fas fa-check text-[10px] text-white"></i>';
  } else {
    restrictionItem2.className = 'flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200';
    restrictionCheck2.className = 'w-5 h-5 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5';
    restrictionCheck2.innerHTML = '<i class="fas fa-times text-[10px] text-amber-500"></i>';
  }
}

export function showRestrictedModal() {
  updateRestrictedModalContent();
  openModal(modalEl());
}

export function closeRestrictedModalAndGoHome() {
  closeModal(modalEl());
  navigateToPage('home');
  triggerGuideAttentionAnimation();
}

export function isRestrictedModalOpen() {
  return isModalOpen(modalEl());
}

export function mountAccessRestricted() {
  const closeBtn = document.getElementById('close-restricted-modal-btn');
  const homeBtn = document.getElementById('restricted-modal-home-btn');
  const overlay = document.getElementById('restricted-modal-overlay');
  if (closeBtn) closeBtn.addEventListener('click', closeRestrictedModalAndGoHome);
  if (homeBtn) homeBtn.addEventListener('click', closeRestrictedModalAndGoHome);
  if (overlay) overlay.addEventListener('click', closeRestrictedModalAndGoHome);
}
