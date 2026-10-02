import { pageFrame } from '../../placeholders/frame.js';

export function filterFrameHtml() {
  return pageFrame({
    pageId: 'filter',
    title: 'Filter',
    bannerId: 'unified-banner-filter',
    contentId: 'filter-page-content',
  });
}
