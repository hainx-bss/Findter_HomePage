import { pageFrame } from '../../placeholders/frame.js';

export function metafieldFrameHtml() {
  return pageFrame({
    pageId: 'metafield',
    title: 'Metafield',
    bannerId: 'unified-banner-metafield',
    contentId: 'metafield-page-content',
  });
}
