export function toggleSwitchHtml(id, on) {
  return '<button type="button" id="' + id + '" class="w-9 h-5 rounded-full relative transition-colors shrink-0 ' + (on ? 'bg-green-500' : 'bg-gray-300') + '">' +
    '<span class="absolute top-0.5 ' + (on ? 'right-0.5' : 'left-0.5') + ' w-4 h-4 bg-white rounded-full shadow transition-all"></span>' +
  '</button>';
}

export function flipToggleBtn(btn, currentVal) {
  const next = !currentVal;
  btn.classList.toggle('bg-green-500', next);
  btn.classList.toggle('bg-gray-300', !next);
  const dot = btn.querySelector('span');
  if (dot) {
    dot.classList.toggle('right-0.5', next);
    dot.classList.toggle('left-0.5', !next);
  }
  return next;
}
