import { AppState } from '../app/store.js';

export function updateEditorModalBanner() {
  const editorIndexingBanner = document.getElementById('editor-indexing-banner');
  const enableEditorModalBtn = document.getElementById('enable-editor-modal-btn');
  if (!editorIndexingBanner) return;

  if (!AppState.indexingComplete) {
    editorIndexingBanner.className = 'rounded-lg p-4 mb-6 transition-all duration-300 bg-amber-50 border border-amber-200';
    editorIndexingBanner.innerHTML =
      '<div class="flex items-start gap-3">' +
        '<div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0 mt-0.5 animate-pulse-custom">' +
          '<i class="fas fa-exclamation-triangle text-sm"></i>' +
        '</div>' +
        '<div class="flex-1">' +
          '<p class="text-[14px] font-semibold text-amber-800 mb-1">Please wait for indexing to complete</p>' +
          '<p class="text-[13px] text-amber-700 leading-relaxed">Up-to-date data are being collected. Please wait until this process is complete before continuing with the app.</p>' +
        '</div>' +
      '</div>';
    if (enableEditorModalBtn) {
      enableEditorModalBtn.disabled = true;
      enableEditorModalBtn.classList.add('btn-disabled-overlay');
    }
  } else {
    editorIndexingBanner.className = 'rounded-lg p-4 mb-6 transition-all duration-300 bg-emerald-50 border border-emerald-200';
    editorIndexingBanner.innerHTML =
      '<div class="flex items-start gap-3">' +
        '<div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">' +
          '<i class="fas fa-check-circle text-sm"></i>' +
        '</div>' +
        '<div class="flex-1">' +
          '<p class="text-[14px] font-semibold text-emerald-800 mb-1">Data indexing is complete!</p>' +
          '<p class="text-[13px] text-emerald-700 leading-relaxed">You can now proceed to enable the app in your Theme Editor.</p>' +
        '</div>' +
      '</div>';
    if (enableEditorModalBtn) {
      enableEditorModalBtn.disabled = false;
      enableEditorModalBtn.classList.remove('btn-disabled-overlay');
    }
  }
}
