import { canAccessFeatures } from '../../app/store.js';
import { getHighlightFocus } from '../../services/highlightFocus.js';
import { escapeHtml } from '../../utils/escape.js';

export const pageNames = {
  home: 'Homepage',
  filter: 'Filter',
  search: 'Search',
  metafield: 'Metafield',
  design: 'Filter & product grid design',
  'analytics-app': 'Analytics',
  advanced: 'Advanced features',
};

const PAGE_ICONS = {
  filter: 'filter',
  search: 'search',
  metafield: 'database',
  design: 'th-large',
  'analytics-app': 'chart-bar',
  advanced: 'cogs',
};

function toneClasses(showPreview) {
  if (showPreview) {
    return { wrap: 'bg-blue-100', icon: 'text-blue-500', hint: 'text-blue-600' };
  }
  return { wrap: 'bg-gray-100', icon: 'text-gray-500', hint: 'text-gray-500' };
}

function generatePlaceholderCards(isPreview) {
  const cards = [
    { title: 'Configuration', icon: 'cog', desc: 'Main settings' },
    { title: 'Display options', icon: 'palette', desc: 'Visual customization' },
    { title: 'Advanced settings', icon: 'sliders-h', desc: 'Fine-tuning options' },
  ];
  return cards.map((card) => (
    '<div class="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors ' + (isPreview ? 'opacity-75' : '') + '">' +
      '<div class="flex items-center gap-3 mb-3">' +
        '<div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">' +
          '<i class="fas fa-' + card.icon + ' text-gray-500 text-sm"></i>' +
        '</div>' +
        '<h4 class="font-medium text-[14px] text-[#303030]">' + card.title + '</h4>' +
      '</div>' +
      '<p class="text-[12px] text-gray-500">' + card.desc + '</p>' +
      (isPreview ? '<div class="mt-3 text-[11px] text-blue-500 font-medium"><i class="fas fa-eye mr-1"></i> Preview available</div>' : '') +
    '</div>'
  )).join('');
}

function renderAdvancedFocus(container, focus) {
  const name = escapeHtml(focus.name);
  container.innerHTML =
    '<article id="advanced-feature-focus" tabindex="-1" class="bg-white rounded-[8px] shadow-sm border border-[#303030] p-8 outline-none focus:ring-2 focus:ring-[#303030]">' +
      '<p class="text-[12px] font-semibold text-[#616161] mb-2">Advanced features</p>' +
      '<h2 class="text-[18px] font-semibold text-[#303030]">' + name + '</h2>' +
      '<p class="text-[13px] text-[#616161] mt-2">This feature is in focus from Highlight Features.</p>' +
    '</article>';
  const card = container.querySelector('#advanced-feature-focus');
  if (card) {
    card.focus({ preventScroll: true });
    card.scrollIntoView({ block: 'center' });
  }
}

export function renderSubPageContent(pageId) {
  const container = document.getElementById(pageId + '-page-content');
  if (!container) return;
  if (pageId === 'advanced') {
    const focus = getHighlightFocus();
    if (focus) {
      renderAdvancedFocus(container, focus);
      return;
    }
  }
  const showPreview = !canAccessFeatures();
  const tone = toneClasses(showPreview);
  const icon = PAGE_ICONS[pageId] || 'file';
  container.innerHTML =
    '<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 p-8">' +
      '<div class="flex items-center gap-4 mb-6">' +
        '<div class="w-12 h-12 ' + tone.wrap + ' rounded-xl flex items-center justify-center">' +
          '<i class="fas fa-' + icon + ' ' + tone.icon + ' text-xl"></i>' +
        '</div>' +
        '<div>' +
          '<h2 class="text-[18px] font-semibold text-[#303030]">' + (pageNames[pageId] || '') + '</h2>' +
          '<p class="text-[13px] ' + tone.hint + '">' +
            (showPreview ? '<i class="fas fa-info-circle mr-1"></i> Available for preview' : 'Configure settings here') +
          '</p>' +
        '</div>' +
      '</div>' +
      '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">' +
        generatePlaceholderCards(showPreview) +
      '</div>' +
    '</div>';
}
