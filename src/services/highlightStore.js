import { HIGHLIGHT_STORAGE_KEY } from '../app/storageKeys.js';

const DEFAULT_ITEMS = [
  { code: 'filter', parentCode: null, standalone: false, name: 'Filter', thumbnail: '', media: '', enabled: true, order: 0, navigateUrl: 'advanced.html' },
  { code: 'filter-by-metafields', parentCode: 'filter', name: 'Filter by Metafields', thumbnail: '', media: '', enabled: true, order: 0, navigateUrl: 'advanced.html', advancedFeatureId: 1 },
  { code: 'image-swatches-filter', parentCode: 'filter', name: 'Image Swatches Filter', thumbnail: '', media: '', enabled: true, order: 1, navigateUrl: 'advanced.html', advancedFeatureId: 5 },
  { code: 'multi-filters-one-source', parentCode: 'filter', name: 'Multi-Filters by One Source', thumbnail: '', media: '', enabled: true, order: 2, navigateUrl: 'advanced.html', advancedFeatureId: 6 },
  { code: 'year-make-model', parentCode: null, standalone: true, name: 'Year Make Model', thumbnail: '', media: '', enabled: true, order: 1, navigateUrl: 'advanced.html', advancedFeatureId: 'sample-ymm' },
  { code: 'market', parentCode: null, standalone: false, name: 'Market', thumbnail: '', media: '', enabled: true, order: 2, navigateUrl: 'advanced.html' },
  { code: 'local-currency-adaptation', parentCode: 'market', name: 'Local Currency Adaptation', thumbnail: '', media: '', enabled: true, order: 0, navigateUrl: 'advanced.html', advancedFeatureId: 4 },
  { code: 'merchandising', parentCode: null, standalone: false, name: 'Merchandising', thumbnail: '', media: '', enabled: true, order: 3, navigateUrl: 'advanced.html' },
  { code: 'boost-in-stock-products', parentCode: 'merchandising', name: 'Boost In-Stock Products', thumbnail: '', media: '', enabled: true, order: 0, navigateUrl: 'advanced.html', advancedFeatureId: 2 },
  { code: 'hide-out-of-stock-products', parentCode: 'merchandising', name: 'Hide Out-of-Stock Products', thumbnail: '', media: '', enabled: true, order: 1, navigateUrl: 'advanced.html', advancedFeatureId: 3 },
];

export function getAll() {
  try {
    const raw = localStorage.getItem(HIGHLIGHT_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

export function save(items) {
  localStorage.setItem(HIGHLIGHT_STORAGE_KEY, JSON.stringify(items));
}

export function seedDefaultsIfEmpty() {
  const items = getAll();
  if (items.length === 0) {
    save(DEFAULT_ITEMS);
    return;
  }
  const known = {};
  items.forEach((item) => { known[item.code] = true; });
  let added = false;
  DEFAULT_ITEMS.forEach((item) => {
    if (!known[item.code]) {
      items.push(item);
      added = true;
    }
  });
  if (added) save(items);
}

export function slugify(text) {
  return text.toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'item';
}

export function uniqueCode(baseText) {
  const items = getAll();
  const base = slugify(baseText);
  let candidate = base;
  let n = 2;
  while (items.some((item) => item.code === candidate)) {
    candidate = base + '-' + n;
    n += 1;
  }
  return candidate;
}

export function upsert(item) {
  const items = getAll();
  let idx = -1;
  items.forEach((entry, index) => {
    if (entry.code === item.code) idx = index;
  });
  if (idx === -1) items.push(item);
  else items[idx] = item;
  save(items);
}

export function remove(code) {
  const items = getAll().filter((item) => item.code !== code && item.parentCode !== code);
  save(items);
}

seedDefaultsIfEmpty();
