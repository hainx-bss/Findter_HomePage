import { renderHeader } from './Header.js';
import { renderSidebar } from './Sidebar.js';
import { renderAppBar } from './AppBar.js';
import { renderChat } from './ChatWidget.js';
import { renderHome } from '../screens/home/index.js';
import { render as renderFilter } from '../screens/filter/index.js';
import { render as renderSearch } from '../screens/search/index.js';
import { render as renderMetafield } from '../screens/metafield/index.js';
import { render as renderDesign } from '../screens/design/index.js';
import { render as renderAnalytics } from '../screens/analytics/index.js';
import { render as renderAdvanced } from '../screens/advanced/index.js';
import { renderMaster } from '../screens/master/index.js';
import { renderHighlightFeature } from '../screens/highlight-feature/index.js';
import { restrictedHtml } from '../modals/markup/restricted.js';
import { themePickerHtml } from '../modals/markup/themePicker.js';
import { enableEmbedHtml } from '../modals/markup/enableEmbed.js';
import { feedbackModalHtml } from '../modals/markup/feedback.js';
import { welcomeHtml } from '../modals/markup/welcome.js';

export function renderShell() {
  return `
    ${renderHeader()}
    <div class="flex flex-1 overflow-hidden relative">
      ${renderSidebar()}
      <main class="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#f1f2f4]">
        ${renderAppBar()}
        <div class="flex-1 overflow-y-auto px-8 pt-6 pb-12 relative">
          ${renderHome()}
          ${renderFilter()}
          ${renderSearch()}
          ${renderMetafield()}
          ${renderDesign()}
          ${renderAnalytics()}
          ${renderAdvanced()}
          ${renderMaster()}
          ${renderHighlightFeature()}
        </div>
      </main>
    </div>
    ${renderChat()}
    ${restrictedHtml}
    ${themePickerHtml}
    ${enableEmbedHtml}
    ${feedbackModalHtml}
    ${welcomeHtml}
  `;
}
