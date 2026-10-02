import { renderSidebar } from './Sidebar.js';
import { renderAppBar } from './AppBar.js';
import { renderChat } from './ChatWidget.js';
import { mobileNavButtonHtml } from './markup/sidebar.js';
import { renderHome } from '../screens/home/index.js';
import { render as renderFilter } from '../screens/filter/index.js';
import { render as renderSearch } from '../screens/search/index.js';
import { render as renderMetafield } from '../screens/metafield/index.js';
import { render as renderDesign } from '../screens/design/index.js';
import { render as renderAnalytics } from '../screens/analytics/index.js';
import { render as renderAdvanced } from '../screens/advanced/index.js';
import { renderMaster } from '../screens/master/index.js';
import { renderHighlightFeature } from '../screens/highlight-feature/index.js';
import { highlightMediaModalHtml } from '../screens/highlight-feature/markup.js';
import { restrictedHtml } from '../modals/markup/restricted.js';
import { themePickerHtml } from '../modals/markup/themePicker.js';
import { enableEmbedHtml } from '../modals/markup/enableEmbed.js';
import { feedbackModalHtml } from '../modals/markup/feedback.js';
import { welcomeHtml } from '../modals/markup/welcome.js';

const sidekickHtml = `
<div class="sk" aria-label="Sidekick">
  <span class="sk__avatar"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4b2aa8"/><circle cx="9" cy="11" r="1.15" fill="#fff"/><circle cx="15" cy="11" r="1.15" fill="#fff"/><path d="M8.6 14.4c.9 1.2 2 1.8 3.4 1.8s2.5-.6 3.4-1.8" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/></svg></span>
  <input class="sk__input" type="text" placeholder="Ask Sidekick" aria-label="Ask Sidekick" readonly>
  <span class="sk__sep"></span>
  <button type="button" class="sh-iconbtn" aria-label="Sidekick history"><span class="ic" aria-hidden="true"><svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="5.25"/><path d="M8 5.2V8l2 1.4"/></svg></span></button>
</div>
`;

export function renderShell() {
  return `
    ${renderSidebar()}
    <div class="sh-main" id="main">
      ${renderAppBar()}
      <div class="sh-scroll">
        ${renderHome()}
        ${renderFilter()}
        ${renderSearch()}
        ${renderMetafield()}
        ${renderDesign()}
        ${renderAnalytics()}
        ${renderAdvanced()}
        ${renderMaster()}
        ${renderHighlightFeature()}
        ${highlightMediaModalHtml}
      </div>
    </div>
    ${sidekickHtml}
    ${mobileNavButtonHtml}
    ${renderChat()}
    ${restrictedHtml}
    ${themePickerHtml}
    ${enableEmbedHtml}
    ${feedbackModalHtml}
    ${welcomeHtml}
  `;
}
