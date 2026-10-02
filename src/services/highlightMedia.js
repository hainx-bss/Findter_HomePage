let onCloseHandler = null;

export function readGifDurationMs(url, callback) {
  fetch(url).then((response) => response.arrayBuffer()).then((buffer) => {
    callback(parseGifDurationMs(buffer));
  }).catch(() => {
    callback(null);
  });
}

function parseGifDurationMs(buffer) {
  const data = new Uint8Array(buffer);
  if (data.length < 13) return null;
  const sig = String.fromCharCode(data[0], data[1], data[2], data[3], data[4], data[5]);
  if (sig !== 'GIF87a' && sig !== 'GIF89a') return null;
  let i = 13;
  if (data[10] & 0x80) i += 3 * (1 << ((data[10] & 7) + 1));
  let total = 0;
  let frames = 0;
  while (i < data.length) {
    const marker = data[i];
    if (marker === 0x3B) break;
    if (marker === 0x21) {
      const label = data[i + 1];
      if (label === 0xF9 && data[i + 2] === 4) {
        total += (data[i + 4] | (data[i + 5] << 8)) * 10;
        frames += 1;
        i += 8;
        continue;
      }
      i += 2;
      while (i < data.length) {
        const extSize = data[i];
        i += 1 + extSize;
        if (extSize === 0) break;
      }
      continue;
    }
    if (marker === 0x2C) {
      if (i + 9 >= data.length) break;
      const imagePacked = data[i + 9];
      i += 10;
      if (imagePacked & 0x80) i += 3 * (1 << ((imagePacked & 7) + 1));
      i += 1;
      while (i < data.length) {
        const blockSize = data[i];
        i += 1 + blockSize;
        if (blockSize === 0) break;
      }
      continue;
    }
    i += 1;
  }
  if (!frames || total <= 0) return null;
  return total;
}

export function isHighlightMediaOpen() {
  const modal = document.getElementById('hf-media-modal');
  return !!(modal && modal.classList.contains('is-open'));
}

export function openHighlightMediaModal(opts) {
  const modal = document.getElementById('hf-media-modal');
  const body = document.getElementById('hf-media-modal-body');
  const title = document.getElementById('hf-media-modal-title');
  if (!modal || !body || !opts || !opts.src) return;
  onCloseHandler = opts.onClose || null;
  if (title) title.textContent = opts.name || 'Preview';
  body.textContent = '';
  if (opts.kind === 'video') {
    const video = document.createElement('video');
    video.className = 'hf-media-modal__media';
    video.src = opts.src;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = false;
    video.autoplay = true;
    video.controls = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    body.appendChild(video);
    const playPromise = video.play();
    if (playPromise && playPromise.catch) playPromise.catch(() => {});
  } else {
    const image = document.createElement('img');
    image.className = 'hf-media-modal__media';
    image.src = opts.src;
    image.alt = opts.name || '';
    body.appendChild(image);
    if (opts.kind === 'gif') {
      readGifDurationMs(opts.src, (durationMs) => {
        if (!durationMs || !image.isConnected) return;
        window.setTimeout(() => {
          if (!image.isConnected) return;
          const canvas = document.createElement('canvas');
          canvas.className = 'hf-media-modal__media';
          canvas.width = image.naturalWidth || image.width || 1;
          canvas.height = image.naturalHeight || image.height || 1;
          const context = canvas.getContext('2d');
          if (!context) return;
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          image.replaceWith(canvas);
        }, durationMs);
      });
    }
  }
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  const closeBtn = modal.querySelector('.hf-media-modal__close');
  if (closeBtn) closeBtn.focus();
}

export function closeHighlightMediaModal() {
  const modal = document.getElementById('hf-media-modal');
  if (!modal || !modal.classList.contains('is-open')) return;
  const body = document.getElementById('hf-media-modal-body');
  if (body) {
    const video = body.querySelector('video');
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.load();
    }
    body.textContent = '';
  }
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  const onClose = onCloseHandler;
  onCloseHandler = null;
  if (onClose) onClose();
}

export function mountHighlightMediaModal() {
  document.addEventListener('click', (e) => {
    if (e.target.closest && e.target.closest('[data-hf-media-close]')) closeHighlightMediaModal();
  });
}
