import { AppState } from '../../app/store.js';

export const PLAN_USAGE = { used: 1595, limit: 50000 };
export const PLAN_USAGE_WITHIN = 1595;
export const PLAN_USAGE_OVER = 52000;

const STATUS_PILL_INACTIVE = 'flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600 whitespace-nowrap';
const STATUS_PILL_ACTIVE = 'flex items-center gap-2 px-2.5 py-1 rounded-md border border-green-200 bg-white text-[11px] font-semibold text-green-700 whitespace-nowrap';
const STATUS_PILL_WARNING = 'flex items-center gap-2 px-2.5 py-1 rounded-md border border-yellow-200 bg-yellow-100 text-[11px] font-semibold text-[#303030] whitespace-nowrap';

let trialDaysLeft = 1;

export function getTrialDaysLeft() {
  return trialDaysLeft;
}

export function setTrialDaysLeft(days) {
  trialDaysLeft = days;
}

export function formatPlanDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return day + '/' + month + '/' + year;
}

function formatPlanUsageCount() {
  return PLAN_USAGE.used.toLocaleString('en-US') + ' / ' + PLAN_USAGE.limit.toLocaleString('en-US');
}

function applyProductCountPill(statusEl, dotEl) {
  const overLimit = PLAN_USAGE.used > PLAN_USAGE.limit;
  statusEl.className = overLimit ? STATUS_PILL_WARNING : STATUS_PILL_ACTIVE;
  dotEl.className = overLimit
    ? 'w-2 h-2 rounded-full bg-yellow-600'
    : 'w-2 h-2 rounded-full bg-green-500';
}

export function renderPlanExpiry() {
  const row = document.getElementById('status-plan-expiry-row');
  const label = document.getElementById('status-plan-expiry-label');
  const value = document.getElementById('status-plan-expiry');
  if (!row || !label || !value) return;

  const expiry = new Date();
  expiry.setHours(12, 0, 0, 0);
  expiry.setDate(expiry.getDate() + trialDaysLeft);

  const ended = trialDaysLeft <= 0;
  label.textContent = ended ? 'Expired' : 'Expires';
  value.textContent = formatPlanDate(expiry);
  value.className = ended
    ? 'inline-flex items-center px-2.5 py-1 rounded-md border border-yellow-300 bg-yellow-50 text-[11px] font-semibold tabular-nums text-[#303030]'
    : 'inline-flex items-center px-2.5 py-1 rounded-md border border-[#e3e3e3] bg-white text-[11px] font-semibold tabular-nums text-[#303030]';
}

export function renderPlanUsage() {
  const labelEl = document.getElementById('plan-usage-label');
  const countEl = document.getElementById('plan-usage-count');
  const statusEl = document.getElementById('plan-usage-status');
  const dotEl = document.getElementById('plan-usage-dot');
  const textEl = document.getElementById('plan-usage-status-text');
  if (!labelEl || !countEl || !statusEl || !dotEl || !textEl) return;

  const onTheme = AppState.appToggleState === 'on' && AppState.firstEnableDone;
  const usageCount = formatPlanUsageCount();

  if (!AppState.indexingComplete) {
    labelEl.textContent = 'Products';
    countEl.classList.add('hidden');
    statusEl.className = STATUS_PILL_INACTIVE;
    dotEl.className = 'w-2 h-2 rounded-full bg-gray-400';
    textEl.textContent = 'Collecting data';
    return;
  }

  if (!onTheme) {
    labelEl.textContent = 'Products';
    countEl.classList.add('hidden');
    applyProductCountPill(statusEl, dotEl);
    textEl.textContent = usageCount;
    return;
  }

  labelEl.textContent = 'Products indexed';
  countEl.classList.add('hidden');
  applyProductCountPill(statusEl, dotEl);
  textEl.textContent = usageCount;
}

export function updateFindterStatus() {
  const appLive = AppState.appToggleState === 'on' && AppState.firstEnableDone;
  const suggestionLive = AppState.searchSuggestionState === 'on';
  const statusAppEmbed = document.getElementById('status-app-embed');
  const statusSearchSuggestion = document.getElementById('status-search-suggestion');
  const statusAppPlan = document.getElementById('status-app-plan');

  if (statusAppEmbed) {
    statusAppEmbed.className = appLive
      ? 'flex items-center gap-2 px-2.5 py-1 rounded-md border border-green-200 bg-white text-[11px] font-semibold text-green-700'
      : 'flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600';
    statusAppEmbed.innerHTML = appLive
      ? '<span class="w-2 h-2 rounded-full bg-green-500"></span>Active'
      : '<span class="w-2 h-2 rounded-full bg-gray-400"></span>Inactive';
  }

  if (statusSearchSuggestion) {
    statusSearchSuggestion.className = suggestionLive
      ? 'flex items-center gap-2 px-2.5 py-1 rounded-md border border-green-200 bg-white text-[11px] font-semibold text-green-700'
      : 'flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600';
    statusSearchSuggestion.innerHTML = suggestionLive
      ? '<span class="w-2 h-2 rounded-full bg-green-500"></span>Active'
      : '<span class="w-2 h-2 rounded-full bg-gray-400"></span>Inactive';
  }

  if (statusAppPlan) {
    statusAppPlan.className = 'flex items-center gap-2 px-2.5 py-1 rounded-md border border-blue-200 bg-white text-[11px] font-semibold text-blue-700';
    statusAppPlan.innerHTML = '<span class="w-2 h-2 rounded-full bg-blue-500"></span>Trial';
  }
  renderPlanExpiry();
  renderPlanUsage();
}
