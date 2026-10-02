import { on } from '../../app/bus.js';
import { AppState } from '../../app/store.js';
import { STORAGE_KEYS } from '../../app/storageKeys.js';
import { navigateToPage } from '../../app/router.js';
import { renderThemeDropdown } from '../../modals/ThemePicker.js';
import { openThemePickerModal } from '../../modals/ThemePicker.js';
import { openEditorWithAutoEnable, openEditorWithSearchSuggestionEnable } from '../../services/editorLaunch.js';
import { updateFindterStatus } from './plan.js';

export function updateProgressAndMessages() {
  const step1 = document.querySelector('.step-checkbox[data-step="1"]');
  const step2 = document.querySelector('.step-checkbox[data-step="2"]');
  const step3 = document.querySelector('.step-checkbox[data-step="3"]');
  const step4 = document.querySelector('.step-checkbox[data-step="4"]');
  const s1Done = step1 ? step1.getAttribute('data-completed') === 'true' : false;
  const s2Done = step2 ? step2.getAttribute('data-completed') === 'true' : false;
  const s3Done = step3 ? step3.getAttribute('data-completed') === 'true' : false;
  const s4Done = step4 ? step4.getAttribute('data-completed') === 'true' : false;
  const total = 4;
  const count = [s1Done, s2Done, s3Done, s4Done].filter(Boolean).length;
  const pct = (count / total) * 100;
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');

  if (progressBar) {
    progressBar.style.width = pct + '%';
    progressBar.className = 'bg-black h-full rounded-full transition-all duration-500';
    if (count === 1) progressBar.classList.add('bg-black');
    else if (count === 2) progressBar.classList.add('bg-yellow-400');
    else if (count === 3) progressBar.classList.add('bg-green-500');
    else progressBar.classList.add('bg-gray-400');
  }
  if (progressText) progressText.innerText = count + '/' + total + ' completed';

  const container = document.getElementById('congrat-message-container');
  if (container) {
    if (s1Done && s3Done) {
      container.innerHTML =
        '<div class="p-3 bg-green-50 border border-green-100 rounded-lg flex items-start gap-3">' +
          '<div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0"><i class="fas fa-rocket"></i></div>' +
          '<div class="flex-1">' +
            '<p class="text-[13px] font-semibold text-green-800 leading-tight">Great job! Basic setup is complete. Explore our <a href="#" class="underline font-bold text-green-700 hover:text-green-900">advanced features</a>.</p>' +
            '<p class="text-[11px] text-green-700 mt-0.5">You can always reopen the guide to review steps.</p>' +
          '</div>' +
        '</div>';
      container.classList.remove('hidden');
    } else {
      container.classList.add('hidden');
      container.innerHTML = '';
    }
  }
}

export function updateSearchSuggestionGuideStatus() {
  const step4Checkbox = document.getElementById('step4-checkbox');
  if (!step4Checkbox) return;
  const suggestionOn = AppState.searchSuggestionState === 'on';
  step4Checkbox.setAttribute('data-completed', suggestionOn ? 'true' : 'false');
  step4Checkbox.classList.toggle('bg-[#303030]', suggestionOn);
  step4Checkbox.classList.toggle('text-white', suggestionOn);
  step4Checkbox.classList.toggle('border-2', !suggestionOn);
  step4Checkbox.classList.toggle('border-dashed', !suggestionOn);
  step4Checkbox.classList.toggle('border-gray-400', !suggestionOn);
  step4Checkbox.classList.toggle('bg-white', !suggestionOn);
  const checkIcon = step4Checkbox.querySelector('.fa-check');
  if (checkIcon) checkIcon.classList.toggle('text-transparent', !suggestionOn);
  updateProgressAndMessages();
}

export function updateGuideStep1Status() {
  const step1Initial = document.getElementById('step1-initial');
  const step1Completed = document.getElementById('step1-completed');
  const step1Checkbox = document.getElementById('step1-checkbox');
  const guideThemeDropdownLabel = document.getElementById('guide-theme-dropdown-label');
  const guideThemeLivePill = document.getElementById('guide-theme-live-pill');
  const guideEnableEditorBtn = document.getElementById('guide-enable-editor-btn');
  const hasTheme = Boolean(AppState.selectedTheme);
  const appOn = AppState.appToggleState === 'on';
  const isThemeEnabled = AppState.selectedTheme && AppState.selectedTheme === AppState.lastEnabledTheme;
  const shouldShowCompleted = hasTheme && AppState.firstEnableDone;
  const isLive = AppState.firstEnableDone && appOn && isThemeEnabled;

  if (step1Initial && step1Completed) {
    if (shouldShowCompleted) {
      step1Initial.classList.add('hidden');
      step1Completed.classList.remove('hidden');
    } else {
      step1Initial.classList.remove('hidden');
      step1Completed.classList.add('hidden');
    }
  }

  if (guideThemeDropdownLabel) {
    guideThemeDropdownLabel.textContent = AppState.selectedTheme || '-- No theme selected --';
  }
  if (guideThemeLivePill) guideThemeLivePill.classList.toggle('hidden', !isLive);
  renderThemeDropdown();

  if (step1Checkbox) {
    const complete = AppState.firstEnableDone && appOn && isThemeEnabled;
    step1Checkbox.setAttribute('data-completed', complete ? 'true' : 'false');
    step1Checkbox.classList.toggle('bg-[#303030]', complete);
    step1Checkbox.classList.toggle('text-white', complete);
    step1Checkbox.classList.toggle('border-2', !complete);
    step1Checkbox.classList.toggle('border-dashed', !complete);
    step1Checkbox.classList.toggle('border-gray-400', !complete);
    step1Checkbox.classList.toggle('bg-white', !complete);
    const checkIcon = step1Checkbox.querySelector('.fa-check');
    if (checkIcon) checkIcon.classList.toggle('text-transparent', !complete);
  }

  if (guideEnableEditorBtn) {
    const needsEnable = hasTheme && AppState.indexingComplete && (!appOn || !isThemeEnabled);
    guideEnableEditorBtn.classList.toggle('hidden', !needsEnable);
  }

  updateProgressAndMessages();
  updateFindterStatus();
  updateSearchSuggestionGuideStatus();
}

export function shouldCollapseOnboardingOnReload() {
  const appLive = AppState.firstEnableDone && AppState.appToggleState === 'on' && AppState.selectedTheme === AppState.lastEnabledTheme;
  const suggestionLive = AppState.searchSuggestionState === 'on';
  return appLive && suggestionLive;
}

export function collapseOnboardingGuide() {
  const toggle = document.querySelector('.guide-toggle[data-target="guide-body-1"]');
  const body = document.getElementById('guide-body-1');
  if (!toggle || !body) return;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
  body.classList.add('hidden');
}

export function expandOnboardingGuide() {
  const toggle = document.querySelector('.guide-toggle[data-target="guide-body-1"]');
  const body = document.getElementById('guide-body-1');
  if (!toggle || !body) return;
  toggle.setAttribute('aria-expanded', 'true');
  toggle.innerHTML = '<i class="fas fa-chevron-up"></i>';
  body.classList.remove('hidden');
}

export function triggerGuideAttentionAnimation() {
  const onboardingGuideCard = document.getElementById('onboarding-guide-card');
  if (!onboardingGuideCard) return;
  onboardingGuideCard.classList.remove('guide-attention-animation');
  void onboardingGuideCard.offsetWidth;
  onboardingGuideCard.classList.add('guide-attention-animation');
  onboardingGuideCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => { onboardingGuideCard.classList.remove('guide-attention-animation'); }, 1200);
}

export function goToOnboarding() {
  navigateToPage('home');
  expandOnboardingGuide();
  requestAnimationFrame(() => {
    const onboardingGuideCard = document.getElementById('onboarding-guide-card');
    if (!onboardingGuideCard) return;
    onboardingGuideCard.classList.remove('guide-attention-animation');
    void onboardingGuideCard.offsetWidth;
    onboardingGuideCard.classList.add('guide-attention-animation');
    onboardingGuideCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

export function mountOnboarding() {
  const step4Checkbox = document.getElementById('step4-checkbox');
  document.querySelectorAll('.step-checkbox').forEach((cb) => {
    cb.addEventListener('click', (e) => {
      e.stopPropagation();
      if (cb === step4Checkbox) {
        const nextState = AppState.searchSuggestionState === 'on' ? 'off' : 'on';
        AppState.searchSuggestionState = nextState;
        localStorage.setItem(STORAGE_KEYS.SEARCH_SUGGESTION_TOGGLE_STATE, nextState);
        updateFindterStatus();
        updateSearchSuggestionGuideStatus();
        return;
      }
      const done = cb.getAttribute('data-completed') === 'true';
      const icon = cb.querySelector('.fa-check');
      if (done) {
        cb.setAttribute('data-completed', 'false');
        cb.classList.remove('bg-[#303030]', 'text-white');
        cb.classList.add('border-2', 'border-dashed', 'border-gray-400', 'bg-white');
        icon.classList.add('text-transparent');
      } else {
        cb.setAttribute('data-completed', 'true');
        cb.classList.add('bg-[#303030]', 'text-white');
        cb.classList.remove('border-2', 'border-dashed', 'border-gray-400', 'bg-white');
        icon.classList.remove('text-transparent');
      }
      updateProgressAndMessages();
    });
  });

  document.querySelectorAll('.guide-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.innerHTML = expanded ? '<i class="fas fa-chevron-down"></i>' : '<i class="fas fa-chevron-up"></i>';
      if (target) target.classList.toggle('hidden', expanded);
    });
  });

  document.querySelectorAll('.guide-step-toggle').forEach((header) => {
    header.addEventListener('click', () => {
      const content = document.getElementById(header.dataset.target);
      const icon = header.querySelector('.fa-chevron-up, .fa-chevron-down');
      if (content) {
        const hid = content.classList.toggle('hidden');
        if (icon) {
          icon.classList.toggle('fa-chevron-up', !hid);
          icon.classList.toggle('fa-chevron-down', hid);
        }
      }
    });
  });

  const selectThemeBtn = document.getElementById('select-theme-btn');
  const guideThemeDropdownBtn = document.getElementById('guide-theme-dropdown-btn');
  const guideEnableEditorBtn = document.getElementById('guide-enable-editor-btn');
  const enableSearchSuggestionBtn = document.getElementById('enable-search-suggestion-btn');
  const goToFilterBtn = document.getElementById('go-to-filter-btn');

  if (selectThemeBtn) {
    selectThemeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openThemePickerModal();
    });
  }
  if (guideThemeDropdownBtn) {
    guideThemeDropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openThemePickerModal();
    });
  }
  if (guideEnableEditorBtn) {
    guideEnableEditorBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!AppState.selectedTheme) {
        openThemePickerModal();
        return;
      }
      openEditorWithAutoEnable();
    });
  }
  if (enableSearchSuggestionBtn) {
    enableSearchSuggestionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openEditorWithSearchSuggestionEnable();
    });
  }
  if (goToFilterBtn) {
    goToFilterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToPage('filter');
    });
  }
}

on('theme:chosen', () => updateGuideStep1Status());
on('guide:refresh', () => updateGuideStep1Status());
