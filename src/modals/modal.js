export function openModal(el) {
  if (!el) return;
  el.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

export function closeModal(el) {
  if (!el) return;
  el.classList.add('hidden');
  document.body.style.overflow = '';
}

export function isModalOpen(el) {
  return !!(el && !el.classList.contains('hidden'));
}
