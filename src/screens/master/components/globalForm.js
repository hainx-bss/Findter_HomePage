import { emit } from '../../../app/bus.js';
import { escapeAttr, escapeHtml } from '../../../utils/escape.js';
import { getAll, upsert } from '../../../services/highlightStore.js';
import { enabledToggleHtml, featureFieldsHtml, MAX_SUB_FEATURES_PER_GROUP, slugifyHighlightCode, uniqueHighlightCode, wireCommonFormFieldEvents } from './fields.js';

export function renderGlobalFeatureForm() {
  const masterContentEl = document.getElementById('master-tab-content');
  if (!masterContentEl) return;
  const items = getAll();
  const groupOptions = items.filter((item) => {
    if (item.parentCode || item.standalone) return false;
    const count = items.filter((feature) => feature.parentCode === item.code).length;
    return count < MAX_SUB_FEATURES_PER_GROUP;
  }).sort((a, b) => a.order - b.order);
  const draft = { enabled: true, thumbnail: '', media: '', navigateUrl: '' };
  const groupSelectHtml = groupOptions.map((group) => (
    '<option value="' + escapeAttr(group.code) + '">' + escapeHtml(group.name) + '</option>'
  )).join('') + '<option value="__new__">+ Create new group</option>';

  masterContentEl.innerHTML =
    '<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden">' +
      '<div class="p-5 border-b border-gray-100 flex items-center justify-between">' +
        '<button type="button" id="highlight-form-back-btn" class="text-[13px] text-gray-500 hover:text-[#303030] inline-flex items-center gap-1"><i class="fas fa-arrow-left text-xs"></i> Back</button>' +
        '<h3 class="font-semibold text-[15px] text-[#303030]">Add feature</h3>' +
      '</div>' +
      '<div class="p-5 space-y-3 border-b border-gray-100">' +
        '<div>' +
          '<label class="block text-[12px] text-gray-500 mb-1">Parent Group</label>' +
          '<select id="highlight-group-select" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px] bg-white">' + groupSelectHtml + '</select>' +
        '</div>' +
        '<div id="new-group-name-field" class="hidden">' +
          '<label class="block text-[12px] text-gray-500 mb-1">New Group Name</label>' +
          '<input type="text" id="highlight-new-group-name-input" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="e.g. Merchandising">' +
        '</div>' +
        '<div class="flex items-end justify-between gap-3">' +
          '<div class="flex-1"><label class="block text-[12px] text-gray-500 mb-1">Title</label><input type="text" id="highlight-name-input" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="Feature title"></div>' +
          '<div class="pb-2">' + enabledToggleHtml(true) + '</div>' +
        '</div>' +
      '</div>' +
      featureFieldsHtml(draft) +
      '<div class="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-200 bg-gray-50">' +
        '<button type="button" id="highlight-form-cancel-btn" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors">Cancel</button>' +
        '<button type="button" id="highlight-form-save-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">Save</button>' +
      '</div>' +
    '</div>';

  wireCommonFormFieldEvents(draft, () => emit('master:show-list'));
  const groupSelect = document.getElementById('highlight-group-select');
  const newGroupField = document.getElementById('new-group-name-field');
  const syncNewGroupFieldVisibility = () => {
    const isNewGroup = !groupSelect || groupSelect.value === '__new__';
    if (newGroupField) newGroupField.classList.toggle('hidden', !isNewGroup);
  };
  syncNewGroupFieldVisibility();
  if (groupSelect) groupSelect.addEventListener('change', syncNewGroupFieldVisibility);

  const saveBtn = document.getElementById('highlight-form-save-btn');
  if (!saveBtn) return;
  saveBtn.addEventListener('click', () => {
    const name = document.getElementById('highlight-name-input').value.trim();
    if (!name) {
      alert('Title is required.');
      return;
    }
    let current = getAll();
    let groupCode;
    if (!groupSelect || groupSelect.value === '__new__') {
      const newGroupNameInput = document.getElementById('highlight-new-group-name-input');
      const groupName = newGroupNameInput ? newGroupNameInput.value.trim() : '';
      if (!groupName) {
        alert('Enter a name for the new group.');
        return;
      }
      groupCode = uniqueHighlightCode(slugifyHighlightCode(groupName) || 'group', current, null);
      const groupOrder = current.filter((item) => !item.parentCode).length;
      upsert({
        code: groupCode, parentCode: null, standalone: false, name: groupName,
        thumbnail: '', media: '', enabled: true, order: groupOrder, navigateUrl: '',
      });
      current = getAll();
    } else {
      groupCode = groupSelect.value;
    }
    const siblingOrder = current.filter((item) => item.parentCode === groupCode).length;
    if (siblingOrder >= MAX_SUB_FEATURES_PER_GROUP) {
      alert('This group already has the maximum of ' + MAX_SUB_FEATURES_PER_GROUP + ' sub-features.');
      return;
    }
    const featureCode = uniqueHighlightCode(slugifyHighlightCode(groupCode + '-' + name) || (groupCode + '-feature'), current, null);
    const thumbnailInput = document.getElementById('highlight-thumbnail-input');
    const mediaInput = document.getElementById('highlight-media-input');
    const navigateInput = document.getElementById('highlight-navigate-input');
    upsert({
      code: featureCode,
      parentCode: groupCode,
      name,
      thumbnail: thumbnailInput.value.trim(),
      media: mediaInput.value.trim(),
      navigateUrl: navigateInput.value.trim(),
      enabled: draft.enabled,
      order: siblingOrder,
      unlocked: false,
      active: true,
    });
    emit('master:show-list');
  });
}
