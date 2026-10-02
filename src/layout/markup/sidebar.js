const ic = (inner) => `<span class="ic" aria-hidden="true"><svg viewBox="0 0 16 16">${inner}</svg></span>`;

const icon = {
  search: ic('<circle cx="7" cy="7" r="4.25"/><path d="m10.5 10.5 3 3"/>'),
  collapse: ic('<path d="M4.75 4.75v6.5"/><rect x="1.75" y="1.75" width="12.5" height="12.5" rx="2"/>'),
  home: ic('<path d="M2.5 7.2 8 2.8l5.5 4.4V13a1 1 0 0 1-1 1h-3.2V9.6H6.7V14H3.5a1 1 0 0 1-1-1V7.2z"/>'),
  orders: ic('<path d="M3 5.5 8 3l5 2.5v6.2L8 14.2 3 11.7z"/><path d="M3 5.5 8 8l5-2.5M8 8v6.2"/>'),
  products: ic('<path d="M3 4.5h10v8H3z"/><path d="M3 7.5h10M6.5 4.5v8"/>'),
  customers: ic('<circle cx="8" cy="6" r="2.25"/><path d="M3.5 13.2c.6-2 2.3-3 4.5-3s3.9 1 4.5 3"/>'),
  growth: ic('<path d="M2.5 12.5 6 8.5l2.2 2L13.5 4"/><path d="M9.5 4H13.5V8"/>'),
  discounts: ic('<circle cx="5.5" cy="5.5" r="2"/><circle cx="10.5" cy="10.5" r="2"/><path d="m4 12 8-8"/>'),
  content: ic('<path d="M4 2.5h5.2L13 6.2V13.5H4z"/><path d="M9 2.5V6h4"/>'),
  markets: ic('<circle cx="8" cy="8" r="5.25"/><path d="M3 8h10M8 2.8c1.4 1.5 2.1 3.3 2.1 5.2S9.4 11.7 8 13.2C6.6 11.7 5.9 9.9 5.9 8S6.6 4.3 8 2.8z"/>'),
  finance: ic('<rect x="2.5" y="4" width="11" height="8.5" rx="1.5"/><path d="M2.5 7h11"/>'),
  analytics: ic('<path d="M3 13.5V8.5M8 13.5V3.5M13 13.5V6.5"/>'),
  store: ic('<path d="M2.5 6.5 4 3.5h8l1.5 3"/><path d="M3 6.5h10v7H3z"/><path d="M6.5 13.5V9.5h3v4"/>'),
  settings: ic('<circle cx="8" cy="8" r="2"/><path d="M8 2.2v1.6M8 12.2v1.6M2.2 8h1.6M12.2 8h1.6M3.8 3.8l1.1 1.1M11.1 11.1l1.1 1.1M12.2 3.8l-1.1 1.1M4.9 11.1l-1.1 1.1"/>'),
  bell: ic('<path d="M8 2.8a3.2 3.2 0 0 1 3.2 3.2v1.4c0 .5.2 1 .5 1.4l.6.8H3.7l.6-.8c.3-.4.5-.9.5-1.4V6A3.2 3.2 0 0 1 8 2.8z"/><path d="M6.6 12.2a1.4 1.4 0 0 0 2.8 0"/>'),
  menu: ic('<path d="M3 4.5h10M3 8h10M3 11.5h10"/>'),
};

const shopItem = (label, glyph, extra = '') =>
  `<a href="#" class="sh-item ${extra}">${glyph}<span class="sh-item__label">${label}</span></a>`;

const appItem = (id, page, label) =>
  `<a href="#" id="${id}" data-page="${page}" class="sh-item sh-item--sub${page === 'home' ? ' nav-active' : ''}"${page === 'home' ? ' aria-current="page"' : ''}><span class="sh-item__label">${label}</span></a>`;

export const sidebarHtml = `
<aside class="sh-nav" id="nav" aria-label="Main navigation">
  <div class="sh-nav__top">
    <a class="sh-logo" href="#" aria-label="Shopify">
      <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/en/assets/shopify-glyph-color-2026-65613845c170.svg" alt="">
    </a>
    <button type="button" class="sh-iconbtn sh-expand" id="sidebar-expand-btn" aria-label="Expand navigation">${icon.collapse}</button>
    <button type="button" class="sh-iconbtn sh-collapse" id="sidebar-toggle-btn" aria-label="Collapse navigation">${icon.collapse}</button>
    <div class="sh-only-mobile m-pill">
      <button type="button" class="sh-iconbtn" aria-label="Alerts">${icon.bell}</button>
    </div>
    <button type="button" class="m-avatar" aria-label="Account">MA</button>
  </div>
  <button type="button" class="sh-search" aria-label="Search">
    ${icon.search}
    <span class="sh-search__label">Search</span>
    <kbd>Ctrl K</kbd>
  </button>
  <nav class="sh-list">
    <a href="#" id="nav-home-main" data-page="home" class="sh-item nav-active" aria-current="page">${icon.home}<span class="sh-item__label">Home</span></a>
    ${shopItem('Orders', icon.orders)}
    ${shopItem('Products', icon.products)}
    ${shopItem('Customers', icon.customers)}
    ${shopItem('Growth', icon.growth)}
    ${shopItem('Discounts', icon.discounts)}
    ${shopItem('Content', icon.content)}
    ${shopItem('Markets', icon.markets)}
    ${shopItem('Finance', icon.finance)}
    ${shopItem('Analytics', icon.analytics)}
    <div class="sh-divider"></div>
    <button type="button" class="sh-section">Sales channels ${ic('<path d="m4 6 4 4 4-4"/>')}</button>
    ${shopItem('Online Store', icon.store, 'sh-expanded-only')}
    <div class="sh-divider"></div>
    <button type="button" class="sh-section sh-section--apps">Apps ${ic('<path d="m4 6 4 4 4-4"/>')}</button>
    <a href="#" class="sh-item sh-only-collapsed sh-appsrail" data-page="home" aria-label="Findter Filter &amp; Search">
      <img class="sh-appicon" alt="" src="https://cdn.shopify.com/s/files/applications/393b6ef120968ea1931a5ec86b58d041_200x200.png?v=1753934348">
    </a>
    <div class="sh-appgroup">
      <a href="#" id="nav-app-name" data-page="home" class="sh-item nav-active" aria-current="page">
        <img class="sh-appicon" alt="" src="https://cdn.shopify.com/s/files/applications/393b6ef120968ea1931a5ec86b58d041_200x200.png?v=1753934348">
        <span class="sh-item__label">Findter Filter &amp; Search</span>
      </a>
      ${appItem('nav-app-home', 'home', 'Homepage')}
      ${appItem('nav-filter', 'filter', 'Filter')}
      ${appItem('nav-search', 'search', 'Search')}
      ${appItem('nav-metafield', 'metafield', 'Metafield')}
      ${appItem('nav-design', 'design', 'Filter &amp; product grid design')}
      ${appItem('nav-analytics-app', 'analytics-app', 'Analytics')}
      ${appItem('nav-advanced', 'advanced', 'Advanced features')}
      ${appItem('nav-master', 'master', 'Master')}
    </div>
  </nav>
  <div class="sh-bottom">
    ${shopItem('Settings', icon.settings)}
    <button type="button" class="sh-account">
      <span class="sh-avatar">MA</span>
      <span class="sh-account__name">Master Admin</span>
    </button>
    <button type="button" class="sh-iconbtn sh-bell" aria-label="Alerts">${icon.bell}</button>
  </div>
</aside>
`;

export const mobileNavButtonHtml = `
<button type="button" class="m-fab m-fab--menu" id="mobile-nav-btn" aria-label="Menu">${icon.menu}</button>
<button type="button" class="m-fab m-fab--sk" aria-label="Sidekick">
  <span class="sk__avatar"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#4b2aa8"/><circle cx="9" cy="11" r="1.15" fill="#fff"/><circle cx="15" cy="11" r="1.15" fill="#fff"/><path d="M8.6 14.4c.9 1.2 2 1.8 3.4 1.8s2.5-.6 3.4-1.8" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/></svg></span>
</button>
`;
