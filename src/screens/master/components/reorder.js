import { emit } from '../../../app/bus.js';
import { getAll, save } from '../../../services/highlightStore.js';

export function wireHighlightDragReorder() {
  const tbody = document.getElementById('highlight-table-body');
  if (!tbody) return;
  let draggedRow = null;
  tbody.querySelectorAll('tr.highlight-row').forEach((row) => {
    row.addEventListener('dragstart', () => {
      draggedRow = row;
      row.classList.add('opacity-50');
    });
    row.addEventListener('dragend', () => {
      row.classList.remove('opacity-50');
      draggedRow = null;
    });
    row.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (!draggedRow || draggedRow === row) return;
      if (draggedRow.getAttribute('data-parent') !== row.getAttribute('data-parent')) return;
      const rect = row.getBoundingClientRect();
      const before = (e.clientY - rect.top) < rect.height / 2;
      tbody.insertBefore(draggedRow, before ? row : row.nextSibling);
    });
    row.addEventListener('drop', (e) => {
      e.preventDefault();
      persistHighlightOrderFromDom();
    });
  });
}

function persistHighlightOrderFromDom() {
  const tbody = document.getElementById('highlight-table-body');
  if (!tbody) return;
  const items = getAll();
  const groups = {};
  Array.prototype.forEach.call(tbody.querySelectorAll('tr.highlight-row'), (row) => {
    const parent = row.getAttribute('data-parent') || '';
    if (!groups[parent]) groups[parent] = [];
    groups[parent].push(row.getAttribute('data-code'));
  });
  Object.keys(groups).forEach((parent) => {
    groups[parent].forEach((code, index) => {
      const item = items.filter((entry) => entry.code === code)[0];
      if (item) item.order = index;
    });
  });
  save(items);
  emit('master:show-list');
}
