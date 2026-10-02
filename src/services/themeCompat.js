import { STORAGE_KEYS } from '../app/storageKeys.js';

export const THEME_CATALOG = ['Allure', 'Atelier', 'Be Yours', 'Broadcast', 'Colorblock', 'Concept', 'Craft', 'Crave', 'Dawn', 'Dwell', 'Enterprise', 'Eurus', 'Expanse', 'Fabric', 'Flawless', 'Focal', 'Heritage', 'Horizon', 'Hyper', 'Ignite', 'Impulse', 'Next', 'Noom', 'Origin', 'Pipeline', 'Pitch', 'Publisher', 'Refresh', 'Ride', 'Rise', 'Ritual', 'Savor', 'Sense', 'Sleek', 'Spotlight', 'Stiletto', 'Studio', 'Taste', 'Tinker', 'Trade', 'Vessel', 'Vivid', 'Wonder', 'Xtra'];
const NOT_COMPATIBLE_THEMES = ['Be Yours', 'Colorblock', 'Sense', 'Crave', 'Flawless', 'Hyper', 'Noom', 'Pitch', 'Ritual', 'Stiletto', 'Taste', 'Tinker', 'Vessel', 'Xtra'];
const THEME_TEST_ORDER = ['Allure', 'Be Yours', 'Colorblock', 'Atelier', 'Broadcast', 'Sense'];

export const THEMES = THEME_TEST_ORDER.concat(THEME_CATALOG.filter((theme) => THEME_TEST_ORDER.indexOf(theme) === -1));

export const CRISP_COOLDOWN_MS = 60 * 1000;
export const CRISP_DAILY_LIMIT = 3;
export const CRISP_WINDOW_MS = 24 * 60 * 60 * 1000;

export function isThemeCompatible(theme) {
  return NOT_COMPATIBLE_THEMES.indexOf(theme) === -1;
}

export function getThemeCompatMap(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

export function isThemeResolved(theme) {
  return !!getThemeCompatMap(STORAGE_KEYS.THEME_COMPAT_RESOLVED)[theme];
}

export function isThemePending(theme) {
  return !!getThemeCompatMap(STORAGE_KEYS.THEME_COMPAT_PENDING)[theme];
}

export function markThemePending(theme) {
  const map = getThemeCompatMap(STORAGE_KEYS.THEME_COMPAT_PENDING);
  map[theme] = true;
  localStorage.setItem(STORAGE_KEYS.THEME_COMPAT_PENDING, JSON.stringify(map));
}

export function markThemeResolved(theme) {
  const pendingMap = getThemeCompatMap(STORAGE_KEYS.THEME_COMPAT_PENDING);
  delete pendingMap[theme];
  localStorage.setItem(STORAGE_KEYS.THEME_COMPAT_PENDING, JSON.stringify(pendingMap));

  const resolvedMap = getThemeCompatMap(STORAGE_KEYS.THEME_COMPAT_RESOLVED);
  resolvedMap[theme] = true;
  localStorage.setItem(STORAGE_KEYS.THEME_COMPAT_RESOLVED, JSON.stringify(resolvedMap));
}

export function getCrispRequests() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CRISP_REQUESTS);
    const list = raw ? JSON.parse(raw) : [];
    const now = Date.now();
    return list.filter((item) => item && item.theme && now - item.ts < CRISP_WINDOW_MS);
  } catch (e) {
    return [];
  }
}

export function themeAlreadyRequested(theme) {
  return getCrispRequests().some((item) => item.theme === theme);
}

export function crispBlockReason(theme) {
  const recent = getCrispRequests();
  if (recent.some((item) => item.theme === theme)) return 'same_theme';
  const lastTs = recent.reduce((max, item) => Math.max(max, item.ts), 0);
  if (lastTs && Date.now() - lastTs < CRISP_COOLDOWN_MS) return 'cooldown';
  const themes = {};
  recent.forEach((item) => { themes[item.theme] = true; });
  if (Object.keys(themes).length >= CRISP_DAILY_LIMIT) return 'daily_limit';
  return '';
}

export function recordCrispRequest(theme) {
  const list = getCrispRequests();
  list.push({ theme, ts: Date.now() });
  localStorage.setItem(STORAGE_KEYS.CRISP_REQUESTS, JSON.stringify(list));
}

export function getThemeCompatState(theme) {
  if (isThemeCompatible(theme) || isThemeResolved(theme)) return 'compatible';
  if (isThemePending(theme) || themeAlreadyRequested(theme)) return 'pending';
  return 'incompatible';
}
