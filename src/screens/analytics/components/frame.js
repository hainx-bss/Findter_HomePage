import { pageFrame } from '../../placeholders/frame.js';

export function analyticsFrameHtml() {
  return pageFrame({
    pageId: 'analytics-app',
    title: 'Analytics',
    bannerId: 'unified-banner-analytics-app',
    contentId: 'analytics-app-page-content',
  });
}
