export function pageFrame({ pageId, title, bannerId, contentId }) {
  return `
                <div id="page-${pageId}" class="page-view">
                    <div class="max-w-[1040px] mx-auto">
                        <div class="mb-6"><h1 class="text-[22px] font-bold text-[#303030]">${title}</h1></div>
                        <div id="${bannerId}" class="mb-5 hidden"></div>
                        <div id="${contentId}"></div>
                    </div>
                </div>`;
}
