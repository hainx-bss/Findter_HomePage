import { escapeAttr } from '../../../utils/escape.js';
import { flipToggleBtn, toggleSwitchHtml } from '../../../ui/switch.js';

export const MAX_SUB_FEATURES_PER_GROUP = 5;

export function slugifyHighlightCode(value) {
  return String(value || '').toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function uniqueHighlightCode(base, items, ignoreCode) {
  const taken = (code) => items.some((item) => item.code === code && item.code !== ignoreCode);
  if (!taken(base)) return base;
  let n = 2;
  while (taken(base + '-' + n)) n += 1;
  return base + '-' + n;
}

export function featureFieldsHtml(draft) {
  return '<div class="p-5 space-y-3 border-b border-gray-100">' +
    '<div><label class="block text-[12px] text-gray-500 mb-1">Thumbnail Link</label><input type="text" id="highlight-thumbnail-input" value="' + escapeAttr(draft.thumbnail || '') + '" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="https://... (image URL)"></div>' +
    '<div><label class="block text-[12px] text-gray-500 mb-1">Media Link (image or video)</label><input type="text" id="highlight-media-input" value="' + escapeAttr(draft.media || '') + '" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="https://..."></div>' +
  '</div>' +
  '<div class="p-5">' +
    '<label class="block text-[12px] text-gray-500 mb-1">Navigate URL</label><input type="text" id="highlight-navigate-input" value="' + escapeAttr(draft.navigateUrl || '') + '" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="filter or advanced#filter">' +
  '</div>';
}

export function wireCommonFormFieldEvents(draft, onBack) {
  const backBtn = document.getElementById('highlight-form-back-btn');
  const cancelBtn = document.getElementById('highlight-form-cancel-btn');
  const enabledToggle = document.getElementById('highlight-enabled-toggle');
  if (backBtn) backBtn.addEventListener('click', onBack);
  if (cancelBtn) cancelBtn.addEventListener('click', onBack);
  if (enabledToggle) {
    enabledToggle.addEventListener('click', () => {
      draft.enabled = flipToggleBtn(enabledToggle, draft.enabled);
    });
  }
}

export function enabledToggleHtml(on) {
  return toggleSwitchHtml('highlight-enabled-toggle', on);
}
