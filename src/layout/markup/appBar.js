const devBtn = (id, label) =>
  `<button type="button" id="${id}" class="p-dev-btn">${label}</button>`;

export const appBarHtml = `
<header class="sh-top">
  <div class="sh-top__brand app-header-clickable" id="app-header-title" data-page="home">
    <img src="https://cdn.shopify.com/s/files/applications/393b6ef120968ea1931a5ec86b58d041_200x200.png?v=1753934348" alt="">
    <h1 class="sh-top__title">Findter Filter &amp; Search</h1>
  </div>
  <div id="header-dev-menu" class="sh-dev hidden lg:flex">
    ${devBtn('show-pricing-notice-btn', 'Plan Update')}
    ${devBtn('show-limit-reached-btn', 'Store Limit')}
    ${devBtn('show-feedback-banner-btn', 'Feedback')}
    ${devBtn('reset-indexing-btn', 'Reset Indexing')}
    ${devBtn('show-welcome-modal-btn', 'Welcome modal')}
    ${devBtn('end-index-btn', 'End Index Now')}
    <div class="relative">
      <button type="button" id="warning-trial-btn" class="p-dev-btn">Warning</button>
      <div id="warning-trial-menu" class="hidden absolute right-0 mt-2 w-36 bg-white border border-[#e3e3e3] rounded-lg shadow-lg py-1 z-20">
        <button type="button" data-days="7" class="warning-trial-option w-full text-left px-3 py-1.5 text-[13px] text-[#303030] hover:bg-[#f7f7f7]">7 days left</button>
        <button type="button" data-days="3" class="warning-trial-option w-full text-left px-3 py-1.5 text-[13px] text-[#303030] hover:bg-[#f7f7f7]">3 days left</button>
        <button type="button" data-days="1" class="warning-trial-option w-full text-left px-3 py-1.5 text-[13px] text-[#303030] hover:bg-[#f7f7f7]">1 day left</button>
        <button type="button" data-days="0" class="warning-trial-option w-full text-left px-3 py-1.5 text-[13px] text-[#303030] hover:bg-[#f7f7f7]">0 days left</button>
      </div>
    </div>
  </div>
  <button type="button" id="header-more-btn" class="sh-more" aria-label="More actions">
    <span class="ic" aria-hidden="true"><svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="1.25" fill="currentColor"/><circle cx="3.25" cy="8" r="1.25" fill="currentColor"/><circle cx="12.75" cy="8" r="1.25" fill="currentColor"/></svg></span>
  </button>
</header>
`;
