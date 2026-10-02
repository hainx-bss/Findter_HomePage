# Migrating uncommitted `index.html` edits

`welcome-modal-onboarding` still has the single-file mockup. This branch replaces that file with a Vite shell. If you have local edits that were never committed, port them into the module below instead of re-applying the old `index.html` diff.

Line numbers refer to `index.html` on `welcome-modal-onboarding` (about 4,933 lines).

## Shell and styles

| Old `index.html` | New file |
| --- | --- |
| `<head>` Tailwind CDN script and the pre-paint script that adds `sidebar-collapsed` | Removed. Tailwind is built from `styles/tailwind.css`. `sidebar-collapsed` is on `<body>` in the new `index.html`. Font Awesome stays on the CDN. |
| Inline `<style>` (about lines 37–465) | `styles/app.css` |
| `<link>` to `polaris.css` at the end of `<body>` | `styles/polaris.css`, imported from `src/main.js` after Tailwind and `app.css` |
| Header (about 473–499) | `src/layout/markup/header.js`, `src/layout/Header.js` |
| Sidebar and overlay (about 501–543) | `src/layout/markup/sidebar.js`, `src/layout/Sidebar.js` |
| White app bar, dev buttons, trial menu (about 545–580) | `src/layout/markup/appBar.js`, `src/layout/AppBar.js`, `src/layout/devMenu.js` |

## Screens

| Old section | New files |
| --- | --- |
| `#page-home` markup (about 582–1577) | `src/screens/home/index.js` plus `src/screens/home/components/` (`welcomeBox`, `pricingBanner`, `limitBanner`, `trialBanner`, `onboardingGuide`, `highlightCard`, `recommendApps`, `dataInsight`, `masterShortcut`, `feedbackBanner`, `statusCard`, `helpSupport`, `syncCard`, `appCarousel`) |
| Nested highlight / carousel scripts inside Home (about 994–1449), including `window.HighlightStore` and `window.AdvancedFeaturesBridge` | `src/services/highlightStore.js`, `src/services/advancedFeatures.js`, `src/services/highlightWidget.js`, `src/screens/home/components/appCarousel.js` |
| Home guide, plan, banners, feedback state in the main script | `src/screens/home/onboarding.js`, `plan.js`, `homeBanners.js`, `feedbackState.js`, `whatsNew.js` |
| `#page-filter`, `#page-search`, `#page-metafield`, `#page-design`, `#page-analytics-app`, `#page-advanced` shells (about 1578–1626) | `src/screens/<name>/index.js`. Shared placeholder cards live in `src/screens/placeholders/`. The analytics DOM id is still `page-analytics-app`. |
| `#page-master` plus master create/edit/reorder/delete logic | `src/screens/master/index.js` and `src/screens/master/components/` |
| `#page-highlight-feature` | `src/screens/highlight-feature/` |

Sidebar **Advanced Features** still calls `window.open('advanced.html')` and does not show the in-app placeholder. Enable-embed still opens `Editor.html?autoEnable=1` (search suggestion: `Editor.html?autoEnableSuggestion=1`).

## Chat, modals, and the main script

| Old section | New files |
| --- | --- |
| Chat bubble markup (about 1666–1703) | `src/layout/markup/chat.js`, `src/layout/ChatWidget.js` |
| All Crisp-style replies, theme requests, and collaborator-code handling | `src/services/crisp.js` only |
| Access restricted, theme picker, enable-embed, feedback, welcome gate (about 1705–1921) | `src/modals/markup/` plus `AccessRestricted.js`, `ThemePicker.js`, `EnableEmbed.js`, `Feedback.js`, `WelcomeGate.js`, `modal.js` |
| Welcome carousel IIFE and `window.FindterWelcomeEvents` (about 1923–2187) | `src/modals/WelcomeGate.js`, `src/modals/welcomeTracking.js`. Events are an in-module array (`getWelcomeEvents()`), not `window.FindterWelcomeEvents`. `[welcome-tracking]` console logs are unchanged. |
| `DOMContentLoaded` closure (about 2189–end): `AppState`, navigation, indexing, locks, banners, keyboard | `src/main.js` boots in the same order. State is `src/app/store.js`. Keys are `src/app/storageKeys.js`. Navigation is `src/app/router.js`. Indexing is `src/services/indexing.js`. Cross-module signals use `src/app/bus.js` instead of `window.*`. |

`localStorage` key names and values are unchanged, including `findter_highlight_items_v2`, `findter_features_v6`, `findter_features_v6_activated`, and `findter_highlight_adv_override`.

## Assets and older mockups

Images moved from the repo root to `public/` and are still requested at the same URLs (`welcome-banner.png`, `Findter Welcome Banner – Mobile.png`, and the emoji PNGs). `a.html`, `1.html`, `Editor.html`, `Editor copy.html`, and `advanced.html` moved to `legacy/`. Vite serves and builds them at the old root URLs, and also serves `/polaris.css` from `styles/polaris.css`, because those pages still reference it relatively.

## Intentionally preserved quirks

- `getReEnableReminderBannerHTML` is still unused by the banner updater. It lives in `src/ui/banner.js`.
- The progress-bar color rule is unchanged: counts 0 and 4 use gray; only count 3 is green.
- Trial copy still starts at “Your Trial Ends Tomorrow” (`TRIAL_DAYS_LEFT` 1). The store-limit close button still resets the product-count text to `10,000`.
