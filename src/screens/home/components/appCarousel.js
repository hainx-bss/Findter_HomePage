export function mountAppCarousel() {
  const track = document.getElementById('appCarouselTrack');
  const prevBtn = document.getElementById('appCarouselPrev');
  const nextBtn = document.getElementById('appCarouselNext');
  if (!track || !prevBtn || !nextBtn) return;
  let index = 0;
  function move(dir) {
    const cards = track.children;
    const visible = window.matchMedia('(min-width: 640px)').matches ? 2 : 1;
    const maxIndex = Math.max(0, cards.length - visible);
    index = Math.max(0, Math.min(index + dir, maxIndex));
    const card = cards[0];
    const gap = 12;
    const step = card.offsetWidth + gap;
    track.style.transform = 'translateX(-' + (index * step) + 'px)';
  }
  prevBtn.addEventListener('click', () => move(-1));
  nextBtn.addEventListener('click', () => move(1));
}
