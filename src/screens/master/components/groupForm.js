import { emit } from '../../../app/bus.js';
import { escapeAttr } from '../../../utils/escape.js';
import { getAll, upsert } from '../../../services/highlightStore.js';
import { enabledToggleHtml, featureFieldsHtml, slugifyHighlightCode, uniqueHighlightCode, wireCommonFormFieldEvents } from './fields.js';

export function renderGroupForm(code) {
  const masterContentEl = document.getElementById('master-tab-content');
  if (!masterContentEl) return;
  const items = getAll();
  const editing = code ? items.filter((item) => item.code === code)[0] : null;
  const isNew = !editing;
  const draft = editing ? Object.assign({}, editing) : {
    code: '', parentCode: null, standalone: false, name: '', thumbnail: '', media: '',
    enabled: true, order: 0, navigateUrl: '',
  };

  masterContentEl.innerHTML =
    '<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden">' +
      '<div class="p-5 border-b border-gray-100 flex items-center justify-between">' +
        '<button type="button" id="highlight-form-back-btn" class="text-[13px] text-gray-500 hover:text-[#303030] inline-flex items-center gap-1"><i class="fas fa-arrow-left text-xs"></i> Back</button>' +
        '<h3 class="font-semibold text-[15px] text-[#303030]">' + (isNew ? 'Add group' : 'Edit group') + '</h3>' +
      '</div>' +
      '<div class="p-5 space-y-3 border-b border-gray-100">' +
        '<div class="flex items-end justify-between gap-3">' +
          '<div class="flex-1"><label class="block text-[12px] text-gray-500 mb-1">Group Name</label><input type="text" id="highlight-name-input" value="' + escapeAttr(draft.name) + '" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="Filter"></div>' +
          '<div class="pb-2">' + enabledToggleHtml(draft.enabled) + '</div>' +
        '</div>' +
        '<label class="flex items-start gap-2 cursor-pointer">' +
          '<input type="checkbox" id="highlight-standalone-input" ' + (draft.standalone ? 'checked' : '') + ' class="w-4 h-4 rounded border-gray-300 mt-0.5">' +
          '<span class="text-[13px] text-[#303030]">Standalone: tick if this Group is itself a Feature (e.g. Year Make Model)</span>' +
        '</label>' +
      '</div>' +
      '<div id="standalone-fields" class="' + (draft.standalone ? '' : 'hidden') + '">' + featureFieldsHtml(draft) + '</div>' +
      '<div class="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-200 bg-gray-50">' +
        '<button type="button" id="highlight-form-cancel-btn" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors">Cancel</button>' +
        '<button type="button" id="highlight-form-save-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">Save</button>' +
      '</div>' +
    '</div>';

  wireCommonFormFieldEvents(draft, () => emit('master:show-list'));
  const standaloneInput = document.getElementById('highlight-standalone-input');
  const standaloneFields = document.getElementById('standalone-fields');
  if (standaloneInput) {
    standaloneInput.addEventListener('change', () => {
      draft.standalone = standaloneInput.checked;
      if (standaloneFields) standaloneFields.classList.toggle('hidden', !draft.standalone);
    });
  }
  const saveBtn = document.getElementById('highlight-form-save-btn');
  if (!saveBtn) return;
  saveBtn.addEventListener('click', () => {
    const name = document.getElementById('highlight-name-input').value.trim();
    if (!name) {
      alert('Group Name is required.');
      return;
    }
    const thumbnailInput = document.getElementById('highlight-thumbnail-input');
    const mediaInput = document.getElementById('highlight-media-input');
    const navigateInput = document.getElementById('highlight-navigate-input');
    const current = getAll();
    const nextCode = isNew ? uniqueHighlightCode(slugifyHighlightCode(name) || 'group', current, draft.code) : draft.code;
    const siblingOrder = current.filter((item) => !item.parentCode && item.code !== draft.code).length;
    const finalItem = {
      code: nextCode,
      parentCode: null,
      standalone: !!draft.standalone,
      name,
      thumbnail: thumbnailInput ? thumbnailInput.value.trim() : (draft.thumbnail || ''),
      media: mediaInput ? mediaInput.value.trim() : (draft.media || ''),
      enabled: draft.enabled,
      order: isNew ? siblingOrder : draft.order,
      navigateUrl: navigateInput ? navigateInput.value.trim() : (draft.navigateUrl || ''),
      unlocked: draft.unlocked || false,
      active: draft.active !== false,
      advancedFeatureId: draft.advancedFeatureId,
    };
    upsert(finalItem);
    if (isNew && !finalItem.standalone) emit('master:add-feature', nextCode);
    else emit('master:show-list');
  });
}
