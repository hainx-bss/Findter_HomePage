let focusedFeature = null;

export function setHighlightFocus(item) {
  focusedFeature = item ? { code: item.code, name: item.name } : null;
}

export function getHighlightFocus() {
  return focusedFeature;
}

export function clearHighlightFocus() {
  focusedFeature = null;
}
