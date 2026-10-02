const welcomeEvents = [];

export function getWelcomeEvents() {
  return welcomeEvents;
}

function logWelcomeEvent(payload) {
  payload.timestamp = new Date().toISOString();
  welcomeEvents.push(payload);
  console.log('[welcome-tracking]', payload);
}

export function initWelcomeCarousel() {
  const track = document.getElementById('welcome-carousel-track');
  const dotsContainer = document.getElementById('welcome-carousel-dots');
  const prevBtn = document.getElementById('welcome-carousel-prev');
  const nextBtn = document.getElementById('welcome-carousel-next');
  const carousel = document.getElementById('welcome-carousel');
  if (!track || !dotsContainer || !prevBtn || !nextBtn || !carousel) {
    return { onShow() {}, onDismiss() {} };
  }

  const slides = track.children;
  let current = 0;
  let autoTimer = null;
  let viewTimer = null;
  let shownAt = null;
  let viewedSlides = {};
  let failedSlides = {};
  const slideClicks = [];
  let modalVisibleRatio = 0;

  function modalOpen() {
    const modal = document.getElementById('welcome-gate-modal');
    return !!(modal && !modal.classList.contains('hidden'));
  }

  function imageReady(img) {
    return !!(img && img.complete && img.naturalWidth > 0);
  }

  function clearViewTimer() {
    if (viewTimer) {
      clearTimeout(viewTimer);
      viewTimer = null;
    }
  }

  function activeBanner() {
    const mobile = document.getElementById('welcome-mobile-banner');
    if (mobile && window.getComputedStyle(mobile).display !== 'none') return mobile;
    return carousel;
  }

  function measureVisibleRatio() {
    const banner = activeBanner();
    if (!modalOpen() || !banner) return 0;
    const rect = banner.getBoundingClientRect();
    if (!rect.width || !rect.height) return 0;
    const visibleW = Math.max(0, Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0));
    const visibleH = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
    return (visibleW * visibleH) / (rect.width * rect.height);
  }

  function scheduleView(changeMethod) {
    if (viewTimer && !changeMethod) return;
    clearViewTimer();
    modalVisibleRatio = measureVisibleRatio();
    const slideIndex = current + 1;
    let img = slides[current];
    const mobileBanner = document.getElementById('welcome-mobile-banner');
    const onMobile = mobileBanner && window.getComputedStyle(mobileBanner).display !== 'none';
    if (onMobile) img = mobileBanner.querySelector('img');
    if (!modalOpen() || viewedSlides[slideIndex] || (!onMobile && failedSlides[current])) return;
    if (document.visibilityState !== 'visible') return;
    if (modalVisibleRatio < 0.5) return;
    if (!imageReady(img)) return;
    viewTimer = setTimeout(() => {
      viewTimer = null;
      if (current + 1 !== slideIndex || !modalOpen()) return;
      if (document.visibilityState !== 'visible' || modalVisibleRatio < 0.5) return;
      if (!imageReady(img) || failedSlides[current]) return;
      viewedSlides[slideIndex] = true;
      logWelcomeEvent({
        event: 'welcome_modal_viewed',
        slide_index: slideIndex,
        change_method: changeMethod || null,
      });
    }, 1000);
  }

  function noteImageFailure(img) {
    const index = Array.prototype.indexOf.call(slides, img);
    if (index < 0 || failedSlides[index]) return;
    failedSlides[index] = true;
    if (index === current) clearViewTimer();
    if (!modalOpen()) return;
    logWelcomeEvent({ event: 'welcome_modal_image_failed', slide_index: index + 1 });
  }

  Array.prototype.forEach.call(slides, (img) => {
    img.addEventListener('error', () => noteImageFailure(img));
    img.addEventListener('load', () => {
      if (slides[current] === img) scheduleView(null);
    });
    if (img.complete && img.naturalWidth === 0) noteImageFailure(img);
  });

  if ('IntersectionObserver' in window) {
    const mobileBannerEl = document.getElementById('welcome-mobile-banner');
    const viewObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target !== activeBanner()) return;
        modalVisibleRatio = entry.intersectionRatio || 0;
        if (modalVisibleRatio >= 0.5) scheduleView(null);
        else clearViewTimer();
      });
    }, { threshold: [0, 0.5, 1] });
    viewObserver.observe(carousel);
    if (mobileBannerEl) viewObserver.observe(mobileBannerEl);
  } else {
    modalVisibleRatio = 1;
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') scheduleView(null);
    else clearViewTimer();
  });

  function renderDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'welcome-carousel-dot h-2 rounded-full transition-all duration-300 shadow ' +
        (i === current ? 'w-5 bg-black' : 'w-2 bg-black/50 hover:bg-black/80');
      dot.setAttribute('data-index', i);
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dotsContainer.appendChild(dot);
    }
  }

  function goToSlide(index, changeMethod) {
    const next = (index + slides.length) % slides.length;
    const changed = next !== current;
    current = next;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    renderDots();
    if (!changed || !changeMethod || !modalOpen()) {
      scheduleView(changeMethod || null);
      return;
    }
    if (changeMethod !== 'auto_slide') {
      slideClicks.push({ slide_index: current + 1, change_method: changeMethod });
    }
    logWelcomeEvent({
      event: 'welcome_modal_slide_changed',
      slide_index: current + 1,
      change_method: changeMethod,
    });
    scheduleView(changeMethod);
  }

  function nextSlide(changeMethod) { goToSlide(current + 1, changeMethod); }
  function prevSlide(changeMethod) { goToSlide(current - 1, changeMethod); }
  function startAutoSlide() {
    stopAutoSlide();
    if (slides.length > 1) autoTimer = setInterval(() => nextSlide('auto_slide'), 5000);
  }
  function stopAutoSlide() {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  }

  nextBtn.addEventListener('click', () => { nextSlide('next_button'); startAutoSlide(); });
  prevBtn.addEventListener('click', () => { prevSlide('previous_button'); startAutoSlide(); });
  dotsContainer.addEventListener('click', (e) => {
    const dot = e.target.closest('.welcome-carousel-dot');
    if (!dot) return;
    goToSlide(parseInt(dot.getAttribute('data-index'), 10), 'dot');
    startAutoSlide();
  });
  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);

  let isDragging = false;
  let dragStartX = 0;
  let dragDeltaX = 0;
  let carouselWidth = 0;

  function onDragStart(e) {
    if (slides.length < 2) return;
    if (e.target.closest('#welcome-carousel-prev, #welcome-carousel-next, #welcome-carousel-dots')) return;
    isDragging = true;
    dragDeltaX = 0;
    dragStartX = e.clientX;
    carouselWidth = carousel.getBoundingClientRect().width || 1;
    track.style.transition = 'none';
    stopAutoSlide();
    if (carousel.setPointerCapture) {
      try { carousel.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    }
  }
  function onDragMove(e) {
    if (!isDragging) return;
    dragDeltaX = e.clientX - dragStartX;
    const basePercent = -(current * 100);
    const dragPercent = (dragDeltaX / carouselWidth) * 100;
    track.style.transform = 'translateX(' + (basePercent + dragPercent) + '%)';
  }
  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = '';
    const threshold = carouselWidth * 0.15;
    if (dragDeltaX <= -threshold) nextSlide('swipe');
    else if (dragDeltaX >= threshold) prevSlide('swipe');
    else goToSlide(current);
    dragDeltaX = 0;
    startAutoSlide();
  }

  carousel.addEventListener('pointerdown', onDragStart);
  carousel.addEventListener('pointermove', onDragMove);
  carousel.addEventListener('pointerup', onDragEnd);
  carousel.addEventListener('pointercancel', onDragEnd);
  carousel.addEventListener('pointerleave', () => { if (isDragging) onDragEnd(); });
  goToSlide(0);
  startAutoSlide();

  return {
    onShow() {
      shownAt = Date.now();
      viewedSlides = {};
      slideClicks.length = 0;
      clearViewTimer();
      logWelcomeEvent({ event: 'welcome_modal_shown', slide_index: current + 1 });
      scheduleView(null);
    },
    onDismiss(method) {
      clearViewTimer();
      const elapsed = shownAt ? Math.round((Date.now() - shownAt) / 1000) : 0;
      const slidesViewed = Object.keys(viewedSlides).map((key) => Number(key));
      logWelcomeEvent({
        event: 'welcome_modal_dismissed',
        dismiss_method: method,
        viewed: slidesViewed.length > 0,
        slides_viewed: slidesViewed,
        slide_clicks: slideClicks.slice(),
        dont_show_again: true,
        time_to_dismiss_seconds: elapsed,
      });
    },
  };
}
