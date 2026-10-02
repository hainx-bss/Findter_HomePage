export function liveBadgeHtml() {
  return '<span class="theme-live-badge">Live</span>';
}

export function compatibleBadgeHtml() {
  return '<span class="theme-status-badge theme-status-badge--success">Compatible</span>';
}

export function pendingBadgeHtml() {
  return '<span class="w-fit whitespace-nowrap border border-amber-200 bg-amber-50 text-amber-700 text-[11px] font-medium px-2 py-1 rounded-md inline-flex items-center gap-1.5"><i class="fas fa-circle-notch fa-spin text-[9px]"></i>Working on it</span>';
}
