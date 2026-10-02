import { pageFrame } from '../../placeholders/frame.js';

export function advancedFrameHtml() {
  return pageFrame({
    pageId: 'advanced',
    title: 'Advanced features',
    bannerId: 'unified-banner-advanced',
    contentId: 'advanced-page-content',
  });
}
