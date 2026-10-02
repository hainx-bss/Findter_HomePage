import { pageFrame } from '../../placeholders/frame.js';

export function searchFrameHtml() {
  return pageFrame({
    pageId: 'search',
    title: 'Search',
    bannerId: 'unified-banner-search',
    contentId: 'search-page-content',
  });
}
