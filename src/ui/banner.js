import { enableAppButtonHtml } from './button.js';

export function indexingBannerHtml() {
  return '<div class="unified-status-banner indexing-state rounded-lg p-4 border border-amber-300">' +
    '<div class="flex items-start gap-3">' +
      '<div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0 mt-0.5 animate-pulse-custom">' +
        '<i class="fas fa-exclamation-triangle text-sm"></i>' +
      '</div>' +
      '<div class="flex-1">' +
        '<p class="text-[14px] font-semibold text-amber-800 mb-1">Collecting data</p>' +
        '<p class="text-[13px] text-amber-700 leading-relaxed">' +
          'Up-to-date data are being collected. Please wait until this process is complete before continuing with the app.' +
        '</p>' +
      '</div>' +
    '</div>' +
  '</div>';
}

export function firstTimeCompleteBannerHtml() {
  return '<div class="unified-status-banner complete-state rounded-lg p-4 border border-amber-300">' +
    '<div class="flex items-start gap-3">' +
      '<div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0 mt-0.5">' +
        '<i class="fas fa-check-circle text-sm"></i>' +
      '</div>' +
      '<div class="flex-1">' +
        '<p class="text-[14px] font-semibold text-green-800 mb-1">Data indexing is completed.</p>' +
        '<p class="text-[13px] text-amber-700 leading-relaxed mb-3">' +
          'Your data has been successfully indexed. To activate the app on your storefront, please enable it in your Theme Editor.' +
        '</p>' +
        enableAppButtonHtml() +
      '</div>' +
    '</div>' +
  '</div>';
}

export function reEnableReminderBannerHtml() {
  return '<div class="unified-status-banner disabled-state rounded-lg p-4 border border-red-300">' +
    '<div class="flex items-start gap-3">' +
      '<div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0 mt-0.5 animate-pulse-custom">' +
        '<i class="fas fa-exclamation-circle text-sm"></i>' +
      '</div>' +
      '<div class="flex-1">' +
        '<p class="text-[14px] font-semibold text-red-800 mb-1">Data indexing is completed.</p>' +
        '<p class="text-[13px] text-red-700 leading-relaxed mb-3">' +
          'Your data has been successfully indexed. To activate the app on your storefront, please enable it in your Theme Editor.' +
        '</p>' +
        enableAppButtonHtml() +
      '</div>' +
    '</div>' +
  '</div>';
}

export function highlightCompleteBannerHtml() {
  return '<div class="unified-status-banner complete-state rounded-lg p-4 border border-amber-300">' +
    '<div class="flex items-start gap-3">' +
      '<div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0 mt-0.5">' +
        '<i class="fas fa-check-circle text-sm"></i>' +
      '</div>' +
      '<div class="flex-1">' +
        '<p class="text-[14px] font-semibold text-green-800 mb-1">Data indexing is completed.</p>' +
        '<p class="text-[13px] text-amber-700 leading-relaxed">Look through the features below, or start onboarding to activate Findter on your theme.</p>' +
      '</div>' +
    '</div>' +
  '</div>';
}
