import { on } from '../app/bus.js';
import { AppState } from '../app/store.js';
import { escapeAttr, escapeHtml } from '../utils/escape.js';
import { isEnabled, isEverActivated, markEnabled } from './advancedFeatures.js';
import { getAll } from './highlightStore.js';
import { findHighlightItem, viewFeatureNow } from './highlightNavigation.js';
import { requestEnableFeatureChat } from './crisp.js';

const widgets = [];

export function refreshAllHighlightWidgets() {
  widgets.forEach((widget) => {
    if (widget && widget.refresh) widget.refresh();
  });
}

export const refreshHighlightFeaturedSection = refreshAllHighlightWidgets;

function mediaBlockHtml(item) {
  const src = item.media || item.thumbnail;
  const name = escapeHtml(item.name);
  if (src) {
    const safeSrc = escapeAttr(src);
    if (src.indexOf('data:video') === 0) {
      return '<video src="' + safeSrc + '" controls class="w-full rounded-lg" style="aspect-ratio: 16 / 9; object-fit: cover;"></video>';
    }
    return '<img src="' + safeSrc + '" alt="' + name + '" class="w-full rounded-lg object-cover" style="aspect-ratio: 16 / 9;">';
  }
  return '<div class="w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-gray-400" style="aspect-ratio: 16 / 9;">' +
    '<i class="fas fa-photo-video text-2xl mb-2"></i>' +
    '<span class="text-[12px] font-medium px-4 text-center">' + name + ': image/video coming soon</span>' +
  '</div>';
}

export function createHighlightFeaturedWidget(config) {
  const tabsEl = document.getElementById(config.tabsElId);
  const bodyEl = document.getElementById(config.bodyElId);
  if (!tabsEl || !bodyEl) return null;

  let autoplayOn = !!config.autoplay;
  let autoplayTimer = null;
  let flatSequence = [];
  let flatIndex = 0;
  let selectedParent = null;
  let selectedSub = null;

  function getFeatureTree() {
    const items = getAll().filter((item) => item.enabled);
    const parents = items.filter((item) => !item.parentCode).sort((a, b) => a.order - b.order);
    return parents.map((parent) => Object.assign({}, parent, {
      subs: items.filter((item) => item.parentCode === parent.code).sort((a, b) => a.order - b.order),
    }));
  }

  function buildFlatSequence(tree) {
    const seq = [];
    tree.forEach((parent) => {
      if (parent.subs.length === 0) seq.push({ parent: parent.code, sub: null });
      else parent.subs.forEach((sub) => seq.push({ parent: parent.code, sub: sub.code }));
    });
    return seq;
  }

  function placeholderBlock(item) {
    const media = mediaBlockHtml(item);
    if (!AppState.indexingComplete && !config.alwaysShowActions) return media;
    const enabled = item.advancedFeatureId != null ? !!isEnabled(item.advancedFeatureId) : !!item.unlocked;
    const code = escapeAttr(item.code);
    const actionHtml = enabled
      ? '<button type="button" class="feature-view-btn bg-[#303030] text-white rounded-[6px] px-3 sm:px-4 py-2 text-[12px] sm:text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors" data-feature-view-code="' + code + '">View Feature Now</button>'
      : '<button type="button" class="feature-enable-btn bg-[#303030] text-white rounded-[6px] px-3 sm:px-4 py-2 text-[12px] sm:text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors" data-feature-enable-code="' + code + '">Click to Enable</button>';
    return media + '<div class="flex flex-wrap items-center justify-end gap-3 mt-4">' + actionHtml + '</div>';
  }

  function renderTabs() {
    const tree = getFeatureTree();
    let html = '';
    tree.forEach((item) => {
      const active = selectedParent === item.code;
      html += '<button type="button" class="feature-tab-btn whitespace-nowrap px-3 py-2 rounded-lg border text-[12px] sm:text-[13px] font-semibold text-center transition-colors ' +
        (active ? 'bg-[#303030] text-white border-[#303030]' : 'bg-white text-[#303030] border-gray-200 hover:bg-gray-50') +
        '" data-parent="' + escapeAttr(item.code) + '">' + escapeHtml(item.name) + '</button>';
    });
    tabsEl.innerHTML = html;
  }

  function renderBody() {
    const tree = getFeatureTree();
    const item = tree.filter((feature) => feature.code === selectedParent)[0];
    if (!item) {
      bodyEl.className = 'p-5';
      bodyEl.innerHTML = '<p class="text-[13px] text-gray-500">No highlight features to show yet.</p>';
      return;
    }
    if (item.subs.length === 0) {
      bodyEl.className = 'p-4 sm:p-5';
      bodyEl.innerHTML = placeholderBlock(item);
      return;
    }
    if (!selectedSub || !item.subs.some((sub) => sub.code === selectedSub)) selectedSub = item.subs[0].code;
    let leftHtml = '';
    item.subs.forEach((sub) => {
      const active = selectedSub === sub.code;
      leftHtml += '<div class="feature-sub-row shrink-0 md:shrink whitespace-nowrap md:whitespace-normal px-4 sm:px-5 py-2.5 sm:py-3 cursor-pointer border-b md:border-b-0 border-gray-50 ' +
        (active ? 'bg-gray-100' : 'hover:bg-gray-50') +
        '" data-sub="' + escapeAttr(sub.code) + '">' +
        '<div class="text-[13px] sm:text-[14px] font-semibold text-[#303030]">' + escapeHtml(sub.name) + '</div>' +
      '</div>';
    });
    const selectedItem = item.subs.filter((sub) => sub.code === selectedSub)[0];
    bodyEl.className = 'flex flex-col md:flex-row';
    bodyEl.innerHTML =
      '<div class="w-full md:w-[38%] flex md:block overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r border-gray-100 py-1 md:py-2">' + leftHtml + '</div>' +
      '<div class="w-full md:w-[62%] p-4 sm:p-5">' + placeholderBlock(selectedItem) + '</div>';
  }

  function syncSelectionToFlat() {
    const entry = flatSequence[flatIndex];
    if (!entry) { selectedParent = null; selectedSub = null; return; }
    selectedParent = entry.parent;
    selectedSub = entry.sub;
  }

  function renderAll() {
    const tree = getFeatureTree();
    flatSequence = buildFlatSequence(tree);
    if (flatSequence.length === 0) {
      selectedParent = null;
      selectedSub = null;
      renderTabs();
      renderBody();
      return;
    }
    const stillValid = selectedParent && tree.some((feature) => feature.code === selectedParent);
    if (!stillValid) {
      flatIndex = 0;
      syncSelectionToFlat();
    } else {
      let idx = -1;
      for (let i = 0; i < flatSequence.length; i += 1) {
        if (flatSequence[i].parent === selectedParent && flatSequence[i].sub === selectedSub) { idx = i; break; }
      }
      flatIndex = idx === -1 ? 0 : idx;
    }
    renderTabs();
    renderBody();
  }

  function stopAutoplay() {
    if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; }
    autoplayOn = false;
  }

  function advanceAutoplay() {
    if (flatSequence.length === 0) return;
    flatIndex = (flatIndex + 1) % flatSequence.length;
    syncSelectionToFlat();
    renderTabs();
    renderBody();
  }

  function startAutoplay() {
    if (!config.autoplay || !autoplayOn || autoplayTimer) return;
    autoplayTimer = setInterval(advanceAutoplay, 5000);
  }

  tabsEl.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('[data-parent]');
    if (!tabBtn) return;
    stopAutoplay();
    selectedParent = tabBtn.getAttribute('data-parent');
    selectedSub = null;
    renderTabs();
    renderBody();
  });

  bodyEl.addEventListener('click', (e) => {
    stopAutoplay();
    const viewBtn = e.target.closest('[data-feature-view-code]');
    if (viewBtn) {
      stopAutoplay();
      viewFeatureNow(findHighlightItem(viewBtn.getAttribute('data-feature-view-code')));
      return;
    }
    const enableBtn = e.target.closest('[data-feature-enable-code]');
    if (enableBtn) {
      stopAutoplay();
      const item = findHighlightItem(enableBtn.getAttribute('data-feature-enable-code'));
      if (item && item.advancedFeatureId != null && isEverActivated(item.advancedFeatureId)) {
        markEnabled(item.advancedFeatureId);
        refreshAllHighlightWidgets();
      } else if (item) {
        requestEnableFeatureChat(item, () => refreshAllHighlightWidgets());
      }
      return;
    }
    const subRow = e.target.closest('[data-sub]');
    if (subRow) {
      stopAutoplay();
      selectedSub = subRow.getAttribute('data-sub');
      renderBody();
    }
  });

  bodyEl.addEventListener('play', () => { stopAutoplay(); }, true);
  renderAll();
  startAutoplay();
  const widget = { refresh: renderAll, stopAutoplay };
  widgets.push(widget);
  return widget;
}

on('navigate', (pageId) => {
  if (pageId === 'home' || pageId === 'highlight-feature') refreshAllHighlightWidgets();
});
