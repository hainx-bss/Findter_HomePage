import { emit } from '../../../app/bus.js';
import { escapeAttr, escapeHtml } from '../../../utils/escape.js';
import { getAll, upsert } from '../../../services/highlightStore.js';
import { enabledToggleHtml, featureFieldsHtml, MAX_SUB_FEATURES_PER_GROUP, slugifyHighlightCode, uniqueHighlightCode, wireCommonFormFieldEvents } from './fields.js';

export function renderFeatureForm(groupCode, code) {
  const masterContentEl = document.getElementById('master-tab-content');
  if (!masterContentEl) return;
  const items = getAll();
  const group = items.filter((item) => item.code === groupCode)[0];
  if (!group) {
    emit('master:show-list');
    return;
  }
  const editing = code ? items.filter((item) => item.code === code)[0] : null;
  const isNew = !editing;
  const draft = editing ? Object.assign({}, editing) : {
    code: '', parentCode: groupCode, name: '', thumbnail: '', media: '',
    enabled: true, order: 0, navigateUrl: group.navigateUrl || '',
  };

  masterContentEl.innerHTML =
    '<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden">' +
      '<div class="p-5 border-b border-gray-100 flex items-center justify-between">' +
        '<button type="button" id="highlight-form-back-btn" class="text-[13px] text-gray-500 hover:text-[#303030] inline-flex items-center gap-1"><i class="fas fa-arrow-left text-xs"></i> Back</button>' +
        '<h3 class="font-semibold text-[15px] text-[#303030]">' + (isNew ? 'Add feature: ' : 'Edit feature: ') + escapeHtml(group.name) + '</h3>' +
      '</div>' +
      '<div class="p-5 space-y-3 border-b border-gray-100">' +
        '<div class="flex items-end justify-between gap-3">' +
          '<div class="flex-1"><label class="block text-[12px] text-gray-500 mb-1">Title</label><input type="text" id="highlight-name-input" value="' + escapeAttr(draft.name) + '" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="Merged Value Group"></div>' +
          '<div class="pb-2">' + enabledToggleHtml(draft.enabled) + '</div>' +
        '</div>' +
      '</div>' +
      featureFieldsHtml(draft) +
      '<div class="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-200 bg-gray-50">' +
        '<button type="button" id="highlight-form-cancel-btn" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors">Cancel</button>' +
        '<button type="button" id="highlight-form-save-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">Save</button>' +
      '</div>' +
    '</div>';

  wireCommonFormFieldEvents(draft, () => emit('master:show-list'));
  const saveBtn = document.getElementById('highlight-form-save-btn');
  if (!saveBtn) return;
  saveBtn.addEventListener('click', () => {
    const name = document.getElementById('highlight-name-input').value.trim();
    if (!name) {
      alert('Title is required.');
      return;
    }
    const thumbnailInput = document.getElementById('highlight-thumbnail-input');
    const mediaInput = document.getElementById('highlight-media-input');
    const navigateInput = document.getElementById('highlight-navigate-input');
    const current = getAll();
    const siblingCount = current.filter((item) => item.parentCode === groupCode && item.code !== draft.code).length;
    if (isNew && siblingCount >= MAX_SUB_FEATURES_PER_GROUP) {
      alert('This group already has the maximum of ' + MAX_SUB_FEATURES_PER_GROUP + ' sub-features.');
      return;
    }
    const nextCode = isNew
      ? uniqueHighlightCode(slugifyHighlightCode(groupCode + '-' + name) || (groupCode + '-feature'), current, draft.code)
      : draft.code;
    upsert({
      code: nextCode,
      parentCode: groupCode,
      name,
      thumbnail: thumbnailInput.value.trim(),
      media: mediaInput.value.trim(),
      enabled: draft.enabled,
      order: isNew ? siblingCount : draft.order,
      navigateUrl: navigateInput.value.trim(),
      unlocked: draft.unlocked || false,
      active: draft.active !== false,
      advancedFeatureId: draft.advancedFeatureId,
    });
    emit('master:show-list');
  });
}
