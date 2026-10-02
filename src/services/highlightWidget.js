import { on } from '../app/bus.js';
import { AppState } from '../app/store.js';
import { escapeAttr, escapeHtml } from '../utils/escape.js';
import { getAll } from './highlightStore.js';
import { findHighlightItem, viewFeature } from './highlightNavigation.js';
import { trackHighlight } from './highlightTracking.js';
import { openHighlightMediaModal, readGifDurationMs } from './highlightMedia.js';

const widgets = [];
const SLIDE_DELAY_MS = 7000;

export function refreshAllHighlightWidgets() {
  widgets.forEach((widget) => {
    if (widget && widget.refresh) widget.refresh();
  });
}

export const refreshHighlightFeaturedSection = refreshAllHighlightWidgets;

function isVideoSrc(src) {
  if (!src) return false;
  if (src.indexOf('data:video') === 0) return true;
  return /\.(mp4|webm|ogg|mov)(\?|#|$)/i.test(src);
}

function isGifSrc(src) {
  if (!src) return false;
  if (src.indexOf('data:image/gif') === 0) return true;
  return /\.gif(\?|#|$)/i.test(src);
}

function mediaKind(src) {
  if (isVideoSrc(src)) return 'video';
  if (isGifSrc(src)) return 'gif';
  return 'image';
}

function mediaBlockHtml(item) {
  const src = item.media || item.thumbnail;
  const name = escapeHtml(item.name);
  const safeName = escapeAttr(item.name);
  if (src) {
    const kind = mediaKind(src);
    const safeSrc = escapeAttr(src);
    const frame = '<div class="hf-media-frame hf-media-frame--clickable" role="button" tabindex="0" data-media-src="' + safeSrc + '" data-media-kind="' + kind + '" data-media-name="' + safeName + '" aria-label="Play preview of ' + safeName + '">';
    if (kind === 'video') {
      return frame + '<video src="' + safeSrc + '" muted playsinline class="h-full w-full rounded-lg object-cover"></video></div>';
    }
    return frame + '<img src="' + safeSrc + '" alt="' + name + '" data-media-kind="' + kind + '" class="h-full w-full rounded-lg object-cover"></div>';
  }
  return '<div class="hf-media-frame hf-media-frame--empty" role="img" aria-label="' + safeName + ' preview">' +
    '<div class="hf-media-empty">' +
      '<span class="hf-media-empty__icon" aria-hidden="true"><i class="fas fa-photo-video"></i></span>' +
      '<span class="hf-media-empty__title">' + name + '</span>' +
      '<span class="hf-media-empty__note">Image or video preview will appear here</span>' +
    '</div></div>';
}

export function createHighlightFeaturedWidget(config) {
  const tabsEl = document.getElementById(config.tabsElId);
  const bodyEl = document.getElementById(config.bodyElId);
  if (!tabsEl || !bodyEl) return null;

  const widgetSource = config.source || 'highlight_page';
  let autoplayOn = !!config.autoplay;
  let autoplayTimer = null;
  let pointerInside = false;
  let modalOpen = false;
  let mediaGate = null;
  let gateRemaining = SLIDE_DELAY_MS;
  let gateEndsAt = 0;
  let slideToken = 0;
  let playedKey = '';
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
    if (!AppState.indexingComplete && !config.alwaysShowActions) return '<div class="hf-preview">' + media + '</div>';
    const actionHtml = '<button type="button" class="feature-view-btn inline-flex items-center justify-center min-h-[44px] bg-[#303030] text-white rounded-[8px] px-3 sm:px-4 py-2 text-[12px] sm:text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors" data-feature-view-code="' + escapeAttr(item.code) + '">View Feature</button>';
    return '<div class="hf-preview">' + media +
      '<div class="hf-preview__bar">' +
        '<p class="hf-preview__name">' + escapeHtml(item.name) + '</p>' +
        actionHtml +
      '</div></div>';
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
      bodyEl.className = 'hf-feature-body hf-feature-body--solo';
      bodyEl.innerHTML = placeholderBlock(item);
      return;
    }
    if (!selectedSub || !item.subs.some((sub) => sub.code === selectedSub)) selectedSub = item.subs[0].code;
    let leftHtml = '';
    item.subs.forEach((sub) => {
      const active = selectedSub === sub.code;
      leftHtml += '<div class="feature-sub-row shrink-0 md:shrink whitespace-nowrap md:whitespace-normal px-4 sm:px-5 py-3 cursor-pointer border-b md:border-b-0 border-gray-50 ' +
        (active ? 'is-active' : 'hover:bg-gray-50') +
        '" data-sub="' + escapeAttr(sub.code) + '">' +
        '<div class="text-[13px] sm:text-[14px] font-semibold text-[#303030]">' + escapeHtml(sub.name) + '</div>' +
      '</div>';
    });
    const selectedItem = item.subs.filter((sub) => sub.code === selectedSub)[0];
    bodyEl.className = 'hf-feature-body flex flex-col md:flex-row';
    bodyEl.innerHTML =
      '<div class="hf-feature-list flex md:block overflow-x-auto border-b md:border-b-0 md:border-r border-gray-100 py-1 md:py-2">' + leftHtml + '</div>' +
      '<div class="hf-stage min-w-0 flex-1 p-4 sm:p-5">' + placeholderBlock(selectedItem) + '</div>';
  }

  function syncSelectionToFlat() {
    const entry = flatSequence[flatIndex];
    if (!entry) { selectedParent = null; selectedSub = null; return; }
    selectedParent = entry.parent;
    selectedSub = entry.sub;
  }

  function clearSlideTimer() {
    if (autoplayTimer) { clearTimeout(autoplayTimer); autoplayTimer = null; }
  }

  function currentVideo() {
    return bodyEl.querySelector('video');
  }

  function currentFeature() {
    const entry = flatSequence[flatIndex];
    if (!entry) return null;
    const code = entry.sub || entry.parent;
    return getAll().filter((item) => item.code === code)[0] || null;
  }

  function highlightPageIsOpen() {
    if (widgetSource !== 'highlight_page') return false;
    const page = document.getElementById('page-highlight-feature');
    return !!(page && page.classList.contains('active'));
  }

  function markMediaPlayed(feature, mediaType) {
    if (!feature) return;
    const key = feature.code + ':' + slideToken;
    if (playedKey === key) return;
    playedKey = key;
    trackHighlight('highlight_feature_media_played', {
      media_type: mediaType,
      source: widgetSource,
      feature_code: feature.code,
      feature_name: feature.name,
    });
  }

  function onGateDone() {
    autoplayTimer = null;
    if (pointerInside || modalOpen) {
      mediaGate = 'hold';
      return;
    }
    advanceAutoplay();
  }

  function resumeGate() {
    if (!config.autoplay || !autoplayOn || pointerInside || modalOpen || !highlightPageIsOpen()) return;
    if (mediaGate === 'video') return;
    clearSlideTimer();
    if (gateRemaining <= 0) {
      onGateDone();
      return;
    }
    gateEndsAt = Date.now() + gateRemaining;
    autoplayTimer = setTimeout(onGateDone, gateRemaining);
  }

  function pauseGate() {
    if (!autoplayTimer) return;
    gateRemaining = Math.max(0, gateEndsAt - Date.now());
    clearSlideTimer();
  }

  function releaseAfterPause() {
    if (!config.autoplay || !autoplayOn || pointerInside || modalOpen || !highlightPageIsOpen()) return;
    if (mediaGate === 'video') return;
    if (mediaGate === 'gif') {
      resumeGate();
      return;
    }
    mediaGate = 'timer';
    gateRemaining = SLIDE_DELAY_MS;
    resumeGate();
  }

  function armSlideTimer() {
    clearSlideTimer();
    const token = ++slideToken;
    if (!config.autoplay || !autoplayOn || !highlightPageIsOpen()) return;
    const feature = currentFeature();
    const video = currentVideo();
    if (video) {
      video.loop = false;
      mediaGate = 'video';
      if (!video.ended) {
        markMediaPlayed(feature, 'video');
        const playPromise = video.play();
        if (playPromise && playPromise.catch) {
          playPromise.catch(() => {
            if (token !== slideToken) return;
            mediaGate = 'timer';
            gateRemaining = SLIDE_DELAY_MS;
            resumeGate();
          });
        }
        return;
      }
    }
    const gif = bodyEl.querySelector('img[data-media-kind="gif"]');
    if (gif) {
      mediaGate = 'gif';
      markMediaPlayed(feature, 'gif');
      readGifDurationMs(gif.getAttribute('src'), (durationMs) => {
        if (token !== slideToken) return;
        if (durationMs && durationMs > 0) gateRemaining = durationMs;
        else {
          mediaGate = 'timer';
          gateRemaining = SLIDE_DELAY_MS;
        }
        resumeGate();
      });
      return;
    }
    mediaGate = 'timer';
    gateRemaining = SLIDE_DELAY_MS;
    resumeGate();
  }

  function renderAll() {
    const tree = getFeatureTree();
    flatSequence = buildFlatSequence(tree);
    if (flatSequence.length === 0) {
      selectedParent = null;
      selectedSub = null;
      renderTabs();
      renderBody();
      armSlideTimer();
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
    armSlideTimer();
  }

  function advanceAutoplay() {
    if (flatSequence.length === 0) return;
    const fromFeature = currentFeature();
    flatIndex = (flatIndex + 1) % flatSequence.length;
    syncSelectionToFlat();
    const toFeature = currentFeature();
    if (config.autoplay) {
      trackHighlight('highlight_feature_slide_changed', {
        slide_reason: 'auto_slide',
        source: 'highlight_page',
        from_feature_code: fromFeature ? fromFeature.code : '',
        feature_code: toFeature ? toFeature.code : '',
      });
    }
    renderTabs();
    renderBody();
    armSlideTimer();
  }

  function syncFlatFromSelection() {
    let idx = -1;
    for (let i = 0; i < flatSequence.length; i += 1) {
      if (flatSequence[i].parent === selectedParent && flatSequence[i].sub === selectedSub) {
        idx = i;
        break;
      }
    }
    if (idx !== -1) flatIndex = idx;
  }

  function trackSelected() {
    const feature = currentFeature();
    trackHighlight('highlight_feature_selected', {
      source: widgetSource,
      group_code: selectedParent || '',
      feature_code: feature ? feature.code : (selectedSub || selectedParent || ''),
    });
  }

  function openMediaFromFrame(frame) {
    const src = frame.getAttribute('data-media-src');
    if (!src) return;
    modalOpen = true;
    pauseGate();
    const cardVideo = currentVideo();
    if (cardVideo && !cardVideo.ended) cardVideo.pause();
    openHighlightMediaModal({
      src,
      kind: frame.getAttribute('data-media-kind'),
      name: frame.getAttribute('data-media-name') || 'Preview',
      onClose: () => {
        modalOpen = false;
        const video = currentVideo();
        if (video && !video.ended && config.autoplay && autoplayOn) {
          mediaGate = 'video';
          const playPromise = video.play();
          if (playPromise && playPromise.catch) playPromise.catch(() => {});
        }
        releaseAfterPause();
      },
    });
  }

  function stopAutoplay() {
    clearSlideTimer();
    mediaGate = null;
    autoplayOn = false;
  }

  tabsEl.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('[data-parent]');
    if (!tabBtn) return;
    selectedParent = tabBtn.getAttribute('data-parent');
    selectedSub = null;
    renderTabs();
    renderBody();
    syncFlatFromSelection();
    trackSelected();
    armSlideTimer();
  });

  bodyEl.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('[data-feature-view-code]');
    if (viewBtn) {
      viewFeature(findHighlightItem(viewBtn.getAttribute('data-feature-view-code')), widgetSource);
      return;
    }
    const frame = e.target.closest('.hf-media-frame--clickable');
    if (frame && !e.target.closest('a, button')) {
      openMediaFromFrame(frame);
      return;
    }
    const subRow = e.target.closest('[data-sub]');
    if (subRow) {
      selectedSub = subRow.getAttribute('data-sub');
      renderBody();
      syncFlatFromSelection();
      trackSelected();
      armSlideTimer();
    }
  });

  bodyEl.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const frame = e.target.closest('.hf-media-frame--clickable');
    if (!frame || e.target !== frame) return;
    e.preventDefault();
    openMediaFromFrame(frame);
  });

  bodyEl.addEventListener('ended', (e) => {
    if (!config.autoplay || !autoplayOn) return;
    if (!e.target || e.target.tagName !== 'VIDEO' || e.target !== currentVideo()) return;
    mediaGate = 'video';
    onGateDone();
  }, true);

  bodyEl.addEventListener('mouseover', (e) => {
    const frame = e.target.closest ? e.target.closest('.hf-media-frame') : null;
    if (!frame || !bodyEl.contains(frame) || pointerInside) return;
    pointerInside = true;
    pauseGate();
  });

  bodyEl.addEventListener('mouseout', (e) => {
    if (!pointerInside) return;
    const frame = e.target.closest ? e.target.closest('.hf-media-frame') : null;
    if (!frame) return;
    const related = e.relatedTarget;
    if (related && frame.contains(related)) return;
    pointerInside = false;
    releaseAfterPause();
  });

  function resetToFirst() {
    flatIndex = 0;
    selectedParent = null;
    selectedSub = null;
    renderAll();
  }

  function restoreFeature(code) {
    if (widgetSource !== 'highlight_page') return false;
    const tree = getFeatureTree();
    flatSequence = buildFlatSequence(tree);
    let idx = -1;
    for (let i = 0; i < flatSequence.length; i += 1) {
      const entry = flatSequence[i];
      if (entry.sub === code || (entry.sub == null && entry.parent === code)) {
        idx = i;
        break;
      }
    }
    if (idx === -1) return false;
    flatIndex = idx;
    syncSelectionToFlat();
    renderTabs();
    renderBody();
    armSlideTimer();
    return true;
  }

  renderAll();

  const widget = { refresh: renderAll, stopAutoplay };
  if (widgetSource === 'highlight_page') {
    widget.resetToFirst = resetToFirst;
    widget.restoreFeature = restoreFeature;
    widget.pauseAutoplay = () => { clearSlideTimer(); };
    widget.resumeAutoplay = () => { armSlideTimer(); };
  }
  widgets.push(widget);
  return widget;
}

export function restoreHighlightFeature(code) {
  let restored = false;
  widgets.forEach((widget) => {
    if (widget.restoreFeature && widget.restoreFeature(code)) restored = true;
  });
  return restored;
}

export function resetHighlightScreenToFirst() {
  widgets.forEach((widget) => {
    if (widget.resetToFirst) widget.resetToFirst();
  });
}

on('navigate', (pageId) => {
  if (pageId === 'home' || pageId === 'highlight-feature') refreshAllHighlightWidgets();
  widgets.forEach((widget) => {
    if (!widget.pauseAutoplay) return;
    if (pageId === 'highlight-feature') widget.resumeAutoplay();
    else widget.pauseAutoplay();
  });
});
