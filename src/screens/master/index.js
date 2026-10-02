import { on } from '../../app/bus.js';
import { getAll, remove, save } from '../../services/highlightStore.js';
import { masterPageHtml } from './components/pageFrame.js';
import { highlightFeatureRowHtml, highlightGroupRowHtml } from './components/rows.js';
import { MAX_SUB_FEATURES_PER_GROUP } from './components/fields.js';
import { wireHighlightDragReorder } from './components/reorder.js';
import { renderGroupForm } from './components/groupForm.js';
import { renderFeatureForm } from './components/featureForm.js';
import { renderGlobalFeatureForm } from './components/globalForm.js';

const collapsedGroupCodes = {};

export function renderMaster() {
  return masterPageHtml;
}

function renderMasterTabs() {
  const masterTabsEl = document.getElementById('master-tabs');
  if (!masterTabsEl) return;
  masterTabsEl.innerHTML = '<button type="button" class="master-tab-btn px-4 py-2 text-[13px] font-semibold border-b-2 border-[#303030] text-[#303030]">Highlight Features</button>';
}

function renderHighlightList() {
  const masterContentEl = document.getElementById('master-tab-content');
  if (!masterContentEl) return;
  const items = getAll();
  const groups = items.filter((item) => !item.parentCode).sort((a, b) => a.order - b.order);
  let rowsHtml = '';
  groups.forEach((group) => {
    const children = group.standalone ? [] : items.filter((item) => item.parentCode === group.code).sort((a, b) => a.order - b.order);
    const expanded = !collapsedGroupCodes[group.code];
    rowsHtml += highlightGroupRowHtml(group, expanded, !group.standalone);
    if (!group.standalone && expanded) {
      children.forEach((feature) => { rowsHtml += highlightFeatureRowHtml(feature); });
      if (children.length < MAX_SUB_FEATURES_PER_GROUP) {
        rowsHtml += '<tr class="border-b border-gray-100"><td></td><td colspan="4" class="pl-8 pb-2.5 pt-1"><button type="button" class="add-feature-btn text-[12px] text-gray-500 hover:text-[#303030] inline-flex items-center gap-1" data-group="' + group.code + '"><i class="fas fa-plus text-[10px]"></i> Add Feature</button></td></tr>';
      } else {
        rowsHtml += '<tr class="border-b border-gray-100"><td></td><td colspan="4" class="pl-8 pb-2.5 pt-1 text-[12px] text-gray-400">Maximum of ' + MAX_SUB_FEATURES_PER_GROUP + ' sub-features reached</td></tr>';
      }
    }
  });
  if (!rowsHtml) {
    rowsHtml = '<tr><td colspan="5" class="px-3 py-6 text-center text-[13px] text-gray-500">No groups yet, click "Add Group" to create one.</td></tr>';
  }
  masterContentEl.innerHTML =
    '<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden">' +
      '<div class="p-5 flex items-center justify-between border-b border-gray-100">' +
        '<h3 class="font-semibold text-[15px] text-[#303030]">Highlight feature</h3>' +
        '<button type="button" id="add-group-btn" class="bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">Add Group</button>' +
      '</div>' +
      '<div class="overflow-x-auto">' +
        '<table class="w-full text-left">' +
          '<thead class="bg-gray-50 border-b border-gray-100">' +
            '<tr class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">' +
              '<th class="px-3 py-2 w-8">#</th>' +
              '<th class="px-3 py-2">Group Name</th>' +
              '<th class="px-3 py-2">Status</th>' +
              '<th class="px-3 py-2">Standalone</th>' +
              '<th class="px-3 py-2 text-right">Action</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody id="highlight-table-body">' + rowsHtml + '</tbody>' +
        '</table>' +
      '</div>' +
      '<div class="p-4 border-t border-gray-100 flex justify-center">' +
        '<button type="button" id="add-feature-global-btn" class="text-[13px] text-gray-600 hover:text-[#303030] font-medium inline-flex items-center gap-1"><i class="fas fa-plus text-[10px]"></i> Add Feature</button>' +
      '</div>' +
    '</div>';
  wireHighlightListEvents();
}

function wireHighlightListEvents() {
  const addGroupBtn = document.getElementById('add-group-btn');
  if (addGroupBtn) addGroupBtn.addEventListener('click', () => renderGroupForm(null));
  const addFeatureGlobalBtn = document.getElementById('add-feature-global-btn');
  if (addFeatureGlobalBtn) addFeatureGlobalBtn.addEventListener('click', () => renderGlobalFeatureForm());
  document.querySelectorAll('.group-expand-toggle').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const code = btn.getAttribute('data-code');
      collapsedGroupCodes[code] = !collapsedGroupCodes[code];
      renderHighlightList();
    });
  });
  document.querySelectorAll('.add-feature-btn').forEach((btn) => {
    btn.addEventListener('click', () => renderFeatureForm(btn.getAttribute('data-group'), null));
  });
  document.querySelectorAll('.highlight-edit-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      const item = getAll().filter((entry) => entry.code === code)[0];
      if (!item) return;
      if (item.parentCode) renderFeatureForm(item.parentCode, code);
      else renderGroupForm(code);
    });
  });
  document.querySelectorAll('.highlight-delete-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      const item = getAll().filter((entry) => entry.code === code)[0];
      const isGroup = item && !item.parentCode;
      const msg = isGroup
        ? 'Are you sure you want to delete this group? All features inside it will be deleted too.'
        : 'Are you sure you want to delete this feature?';
      if (confirm(msg)) {
        remove(code);
        renderHighlightList();
      }
    });
  });
  document.querySelectorAll('.highlight-status-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      const items = getAll();
      const item = items.filter((entry) => entry.code === code)[0];
      if (!item) return;
      const next = !item.enabled;
      item.enabled = next;
      if (!item.parentCode) {
        items.forEach((entry) => {
          if (entry.parentCode === code) entry.enabled = next;
        });
      }
      save(items);
      renderHighlightList();
    });
  });
  wireHighlightDragReorder();
}

export function renderMasterPage() {
  renderMasterTabs();
  renderHighlightList();
}

export function mountMasterShortcut(navigate) {
  const masterShortcutBtn = document.getElementById('master-shortcut-btn');
  if (masterShortcutBtn) masterShortcutBtn.addEventListener('click', () => navigate('master'));
}

on('master:show-list', () => renderHighlightList());
on('master:add-feature', (groupCode) => renderFeatureForm(groupCode, null));
