# Findter style guide

Visual source: the saved Shopify Admin page **Findter Filter & Search** (Polaris 12.27, Inter). The app still uses the existing screens, router, and state. This guide is the token and component layer those screens paint with.

Token source of truth: `styles/tokens.css` (`--p-*`). Shell metrics: `styles/admin-shell.css` (`--sh-*`). Shared aliases used by older rules (`--fill`, `--r2`, `--shbtn`, …) live at the top of `styles/polaris.css` and point at the `--p-*` tokens.

## Color

| Role | Token | Value |
| --- | --- | --- |
| App canvas | `--p-color-bg` | `#f1f1f1` |
| Card / surface | `--p-color-bg-surface` | `#ffffff` |
| Surface hover | `--p-color-bg-surface-hover` | `#f7f7f7` |
| Text | `--p-color-text` | `#303030` |
| Secondary text | `--p-color-text-secondary` | `#616161` |
| Disabled text | `--p-color-text-disabled` | `#b5b5b5` |
| Link / emphasis | `--p-color-text-link` | `#005bd3` |
| Border | `--p-color-border` | `#e3e3e3` |
| Focus ring | `--p-color-border-focus` | `#005bd3` |
| Primary fill | `--p-color-bg-fill-brand` | `#303030` |
| Primary fill hover | `--p-color-bg-fill-brand-hover` | `#1a1a1a` |
| Critical | `--p-color-bg-fill-critical` | `#e51c00` |
| Success fill | `--p-color-bg-fill-success` | `#29845a` |
| Info surface | `--p-color-bg-surface-info` | `#eaf4ff` |
| Success surface | `--p-color-bg-surface-success` | `#cdfee1` |
| Caution surface | `--p-color-bg-surface-caution` | `#fff8db` |
| Warning surface | `--p-color-bg-surface-warning` | `#fff1e3` |
| Critical surface | `--p-color-bg-surface-critical` | `#fee9e8` |
| Backdrop | `--p-color-backdrop-bg` | `rgba(0, 0, 0, 0.71)` |
| Input border | `--p-color-input-border` | `#8a8a8a` |
| Admin chrome | `--sh-bg` | `#0a0a0a` |
| Nav text | `--sh-text` | `#dcdcdc` |
| Nav selected | `--sh-active` | `#262626` |
| Support launcher | — | `#9b2423` |

## Type

Font family: **Inter** (`--p-font-family-sans`), loaded from the Shopify Inter stylesheet with the Google Fonts fallback in `styles/app.css`.

| Token | Size | Use |
| --- | --- | --- |
| `--p-font-weight-regular` | 450 | Body, app title |
| `--p-font-weight-medium` | 550 | Buttons, badges, selected nav |
| `--p-font-weight-semibold` | 650 | Card headings, page titles |
| `--p-font-weight-bold` | 700 | Welcome title |
| `--p-font-size-300` | 12px | Badges, dev buttons |
| `--p-font-size-325` | 13px | Body, app title bar |
| `--p-font-size-350` | 14px | Card titles (`headingMd`) |
| `--p-font-size-500` | 20px | In-app page titles |

Welcome title uses `clamp(24px, 3vw, 30px)` and `--p-font-letter-spacing-denser`.

## Space, radius, shadow, breakpoints

Spacing scale: `--p-space-100` 4px, `--p-space-200` 8px, `--p-space-300` 12px, `--p-space-400` 16px. Cards use 16px padding. The home canvas is at most **966px** wide with a **16px** column gap.

| Token | Value | Use |
| --- | --- | --- |
| `--p-border-radius-200` | 8px | Buttons, badges, inputs, tabs |
| `--p-border-radius-300` | 12px | Cards, modals, nav items |
| `--sh-radius` | 16px | Admin frame |
| `--p-shadow-100` | bevel | Cards |
| `--p-shadow-button` | inset | Secondary buttons |
| `--p-shadow-button-primary` | inset | Primary buttons |
| `--p-shadow-400` | drop | Modals |
| `--p-breakpoints-sm` | 490px | Phone |
| `--p-breakpoints-md` | 768px | Two-column home, mobile shell cutoff |
| `--sh-nav-w` | 220px (60px collapsed) | Left nav |

## Shell

The admin chrome is not a light overlay drawer.

- Left nav (`.sh-nav`) is full height, `#0a0a0a`, 220px. Collapse switches `body.nav-collapsed` to a 60px icon rail. Below 768px the nav is a drawer: `body.nav-open` slides `.sh-main` to the right.
- The app frame (`.sh-main`) is a white sheet with 16px radius, inset 4px from the top, right, and bottom.
- The title bar (`.sh-top`) is 54px: app icon, **Findter Filter & Search**, dev actions on wide screens, and the more button.
- Sidekick (`.sk`) sits centered on the bottom of the frame. The support launcher (`.sh-chat-launcher`, `#floating-chat-btn`) is the burgundy circle at the bottom right. The support panel is still `#chat-bubble`.

## Components

| Piece | Class | Notes |
| --- | --- | --- |
| Primary button | `button.bg-[#303030]`, `.p-button--primary` | Fill `#303030`, white label, `--p-shadow-button-primary`, radius 8px |
| Secondary button | `button.bg-white.border`, `.p-dev-btn` | White fill, `--p-shadow-button` |
| Badge | `.p-badge`, `.p-badge--info`, `--success`, `--warning` | 20px tall, radius 8px, no border |
| Live / compatible | `.theme-live-badge` | Success surface `#cdfee1` / `#0c5132` |
| Banner | `.unified-status-banner` | Caution, info, and critical surfaces from the tokens |
| Card | `.bg-white.shadow-sm` | Surface white, radius 12px, `--p-shadow-100`, no gray border |
| Switch | `.p-switch` / `.is-on` | 32×20, thumb slides, on state uses brand fill |
| Text input | inputs inside `.sh-scroll` and `.modal-content` | Border `#8a8a8a`, radius 8px, focus `#1a1a1a` |
| Tabs | `.mt-tab`, `.master-tab-btn` | 8px radius; selected tab is white with a `#ccc` border |
| Modal | `.modal-content`, `.p-modal__dialog` | Radius 12px, `--p-shadow-400`, backdrop `--p-color-backdrop-bg` |
| Nav item | `.sh-item` | 30px row, radius 12px; current page uses `--sh-active` |

## What stayed on the existing flow

Routes are unchanged: Home, Filter, Search, Metafield, Filter & product grid design, Analytics, Advanced features (still opens `advanced.html`), and Master. Dev actions (plan, limit, feedback, indexing, welcome, trial warning) keep their ids. The mockup also shows a **Year Make Model** nav row and a **View more** disclosure. Those are not separate routes in this app, so they are not added as new screens.
