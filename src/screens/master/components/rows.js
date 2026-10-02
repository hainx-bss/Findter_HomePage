import { escapeAttr, escapeHtml } from '../../../utils/escape.js';

export function highlightGroupRowHtml(item, expanded, hasChildren) {
  const code = escapeAttr(item.code);
  const expandBtn = hasChildren
    ? '<button type="button" class="group-expand-toggle text-gray-400 hover:text-gray-600 mr-1.5" data-code="' + code + '"><i class="fas fa-chevron-' + (expanded ? 'down' : 'right') + ' text-[10px]"></i></button>'
    : '<span class="inline-block w-[18px]"></span>';
  return '<tr class="highlight-row border-b border-gray-100 bg-gray-50/60" draggable="true" data-code="' + code + '" data-parent="">' +
    '<td class="px-3 py-2.5 text-gray-400 cursor-grab w-8"><i class="fas fa-grip-vertical"></i></td>' +
    '<td class="px-3 py-2.5 text-[13px] text-[#303030] font-semibold">' + expandBtn + escapeHtml(item.name) + '</td>' +
    '<td class="px-3 py-2.5"><button type="button" class="highlight-status-toggle w-9 h-5 rounded-full relative transition-colors ' + (item.enabled ? 'bg-green-500' : 'bg-gray-300') + '" data-code="' + code + '"><span class="absolute top-0.5 ' + (item.enabled ? 'right-0.5' : 'left-0.5') + ' w-4 h-4 bg-white rounded-full shadow transition-all"></span></button></td>' +
    '<td class="px-3 py-2.5 text-[12px]">' + (item.standalone ? '<span class="font-medium text-green-700">Yes</span>' : '<span class="text-gray-400">No</span>') + '</td>' +
    '<td class="px-3 py-2.5 text-right whitespace-nowrap">' +
      '<button type="button" class="highlight-edit-btn text-gray-500 hover:text-[#303030] px-2" data-code="' + code + '"><i class="fas fa-pen text-xs"></i></button>' +
      '<button type="button" class="highlight-delete-btn text-gray-500 hover:text-red-600 px-2" data-code="' + code + '"><i class="fas fa-trash text-xs"></i></button>' +
    '</td>' +
  '</tr>';
}

export function highlightFeatureRowHtml(item) {
  const code = escapeAttr(item.code);
  return '<tr class="highlight-row border-b border-gray-100" draggable="true" data-code="' + code + '" data-parent="' + escapeAttr(item.parentCode) + '">' +
    '<td class="px-3 py-2.5 text-gray-400 cursor-grab w-8"><i class="fas fa-grip-vertical"></i></td>' +
    '<td class="px-3 py-2.5 text-[13px] text-gray-600 pl-8"><span class="text-gray-300 mr-1">&#8627;</span>' + escapeHtml(item.name) + '</td>' +
    '<td class="px-3 py-2.5"><button type="button" class="highlight-status-toggle w-9 h-5 rounded-full relative transition-colors ' + (item.enabled ? 'bg-green-500' : 'bg-gray-300') + '" data-code="' + code + '"><span class="absolute top-0.5 ' + (item.enabled ? 'right-0.5' : 'left-0.5') + ' w-4 h-4 bg-white rounded-full shadow transition-all"></span></button></td>' +
    '<td class="px-3 py-2.5"></td>' +
    '<td class="px-3 py-2.5 text-right whitespace-nowrap">' +
      '<button type="button" class="highlight-edit-btn text-gray-500 hover:text-[#303030] px-2" data-code="' + code + '"><i class="fas fa-pen text-xs"></i></button>' +
      '<button type="button" class="highlight-delete-btn text-gray-500 hover:text-red-600 px-2" data-code="' + code + '"><i class="fas fa-trash text-xs"></i></button>' +
    '</td>' +
  '</tr>';
}
