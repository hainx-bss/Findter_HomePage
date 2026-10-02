import { ADV_ACTIVATED_KEY, ADV_OVERRIDE_KEY, ADV_STORAGE_KEY } from '../app/storageKeys.js';

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
}

export function getAdvFeatures() {
  const parsed = readJson(ADV_STORAGE_KEY, null);
  return Array.isArray(parsed) ? parsed : null;
}

function getActivatedMap() {
  const map = readJson(ADV_ACTIVATED_KEY, {});
  return map && typeof map === 'object' ? map : {};
}

function getOverrideMap() {
  const map = readJson(ADV_OVERRIDE_KEY, {});
  return map && typeof map === 'object' ? map : {};
}

export function isEnabled(advId) {
  const override = getOverrideMap();
  if (override[String(advId)]) return true;
  const list = getAdvFeatures();
  if (list) {
    const feature = list.filter((item) => String(item.id) === String(advId))[0];
    if (feature) return String(feature.status || 'Locked').toLowerCase() === 'enabled';
  }
  return false;
}

export function isEverActivated(advId) {
  const override = getOverrideMap();
  if (override[String(advId)]) return true;
  return !!getActivatedMap()[String(advId)];
}

export function markEnabled(advId) {
  const list = getAdvFeatures();
  if (list) {
    const next = list.map((feature) => (
      String(feature.id) === String(advId) ? Object.assign({}, feature, { status: 'Enabled' }) : feature
    ));
    localStorage.setItem(ADV_STORAGE_KEY, JSON.stringify(next));
    const activatedMap = getActivatedMap();
    activatedMap[String(advId)] = true;
    localStorage.setItem(ADV_ACTIVATED_KEY, JSON.stringify(activatedMap));
  } else {
    const override = getOverrideMap();
    override[String(advId)] = true;
    localStorage.setItem(ADV_OVERRIDE_KEY, JSON.stringify(override));
  }
}
