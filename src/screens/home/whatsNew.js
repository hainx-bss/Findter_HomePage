export function mountWhatsNew() {
  const whatsNewBtn = document.getElementById('whats-new-btn');
  const whatsNewDropdown = document.getElementById('whats-new-dropdown');
  const whatsNewBadge = document.getElementById('whats-new-badge');
  let whatsNewUnread = 3;
  if (!whatsNewBtn || !whatsNewDropdown) return;
  whatsNewBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = whatsNewDropdown.classList.contains('hidden');
    whatsNewDropdown.classList.toggle('hidden');
    if (isHidden && whatsNewUnread > 0) {
      whatsNewUnread = 0;
      if (whatsNewBadge) whatsNewBadge.classList.add('hidden');
      document.querySelectorAll('.whats-new-unread-dot').forEach((dot) => dot.classList.add('hidden'));
      document.querySelectorAll('.whats-new-item').forEach((item) => { item.style.background = ''; });
    }
  });
  document.addEventListener('click', (e) => {
    if (!whatsNewDropdown.classList.contains('hidden') &&
      !whatsNewBtn.contains(e.target) &&
      !whatsNewDropdown.contains(e.target)) {
      whatsNewDropdown.classList.add('hidden');
    }
  });
}
