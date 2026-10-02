export function toggleSwitchHtml(id, on) {
  return '<button type="button" id="' + id + '" class="p-switch' + (on ? ' is-on' : '') + '" role="switch" aria-checked="' + (on ? 'true' : 'false') + '">' +
    '<span class="p-switch__thumb"></span>' +
  '</button>';
}

export function flipToggleBtn(btn, currentVal) {
  const next = !currentVal;
  btn.classList.toggle('is-on', next);
  btn.setAttribute('aria-checked', next ? 'true' : 'false');
  return next;
}
