import { AppState } from '../app/store.js';
import { STORAGE_KEYS } from '../app/storageKeys.js';
import { emit, on } from '../app/bus.js';
import { escapeAttr } from '../utils/escape.js';
import { closeModal, isModalOpen, openModal } from './modal.js';
import { compatibleBadgeHtml, liveBadgeHtml, pendingBadgeHtml } from '../ui/badge.js';
import { crispBlockReason, getThemeCompatState, markThemePending, THEMES } from '../services/themeCompat.js';
import { sendThemeCompatibilityRequest } from '../services/crisp.js';

function modalEl() { return document.getElementById('theme-picker-modal'); }

export function showThemeRequestNotice(message) {
  const notice = document.getElementById('theme-request-notice');
  if (!notice) return;
  notice.textContent = message;
  notice.classList.remove('hidden');
}

export function hideThemeRequestNotice() {
  const notice = document.getElementById('theme-request-notice');
  if (notice) notice.classList.add('hidden');
}

export function renderThemeDropdown() {
  const guideThemeDropdownLabel = document.getElementById('guide-theme-dropdown-label');
  const themePickerList = document.getElementById('theme-picker-list');
  const label = AppState.selectedTheme ? AppState.selectedTheme : '-- No theme selected --';
  if (guideThemeDropdownLabel) guideThemeDropdownLabel.textContent = label;
  if (!themePickerList) return;

  let html = '';
  THEMES.forEach((theme, index) => {
    const selected = AppState.selectedTheme === theme;
    const state = getThemeCompatState(theme);
    const compatible = state === 'compatible';
    const safeTheme = escapeAttr(theme);
    const liveHtml = index === 0 ? liveBadgeHtml() : '';
    let statusHtml;
    if (state === 'compatible') statusHtml = compatibleBadgeHtml();
    else if (state === 'pending') statusHtml = pendingBadgeHtml();
    else {
      statusHtml = '<button type="button" class="w-fit whitespace-nowrap border border-gray-300 bg-white text-[#303030] text-[11px] font-medium px-2 py-1 rounded-md hover:bg-gray-100 transition-colors" data-howto-theme="' + safeTheme + '">Make compatible</button>';
    }
    html +=
      '<div class="grid grid-cols-[1fr_170px] items-center py-2.5 border-b border-gray-50 ' +
        (selected ? 'bg-blue-50 ' : '') +
        (compatible ? 'cursor-pointer hover:bg-[#f7f7f7] ' : '') +
      '" ' + (compatible ? 'data-theme="' + safeTheme + '"' : '') + '>' +
        '<div class="pl-6 pr-3 flex items-center gap-2 text-[14px] font-medium text-[#303030]">' + escapeAttr(theme) + liveHtml + '</div>' +
        '<div class="pl-3 pr-6 flex justify-center">' + statusHtml + '</div>' +
      '</div>';
  });
  themePickerList.innerHTML = html;
}

export function openThemePickerModal() {
  const themePickerModal = modalEl();
  if (!themePickerModal) return;
  hideThemeRequestNotice();
  openModal(themePickerModal);
  renderThemeDropdown();
}

export function closeThemePickerModal() {
  closeModal(modalEl());
}

export function mountThemePicker() {
  const closeBtn = document.getElementById('close-theme-picker-modal-btn');
  const overlay = document.getElementById('theme-picker-modal-overlay');
  const themePickerList = document.getElementById('theme-picker-list');
  if (closeBtn) closeBtn.addEventListener('click', closeThemePickerModal);
  if (overlay) overlay.addEventListener('click', closeThemePickerModal);
  if (!themePickerList) return;

  themePickerList.addEventListener('click', (e) => {
    const howtoBtn = e.target.closest('[data-howto-theme]');
    if (howtoBtn) {
      const theme = howtoBtn.getAttribute('data-howto-theme');
      const blockReason = crispBlockReason(theme);
      if (blockReason === 'cooldown') {
        showThemeRequestNotice('Wait a minute before requesting another theme.');
        return;
      }
      if (blockReason === 'daily_limit') {
        showThemeRequestNotice('You can request up to 3 themes a day.');
        return;
      }
      if (blockReason === 'same_theme') {
        markThemePending(theme);
        renderThemeDropdown();
        return;
      }
      hideThemeRequestNotice();
      sendThemeCompatibilityRequest(theme);
      closeThemePickerModal();
      return;
    }
    const row = e.target.closest('[data-theme]');
    if (!row) return;
    AppState.selectedTheme = row.getAttribute('data-theme');
    localStorage.setItem(STORAGE_KEYS.SELECTED_THEME, AppState.selectedTheme);
    renderThemeDropdown();
    emit('theme:chosen');
    closeThemePickerModal();
    setTimeout(() => emit('open-editor-modal'), 200);
  });
}

on('open-theme-picker', () => openThemePickerModal());
on('themes:changed', () => {
  if (isModalOpen(modalEl())) renderThemeDropdown();
});
