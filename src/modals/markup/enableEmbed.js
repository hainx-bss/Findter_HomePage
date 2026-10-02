export const enableEmbedHtml = `
    <!-- MODAL 2: Enable App Embed Modal -->
    <div id="editor-modal" class="modal-wrapper fixed inset-0 hidden">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="editor-modal-overlay"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-[980px] pointer-events-auto max-h-[90vh] flex flex-col relative modal-content">
                <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <h3 class="text-[16px] font-semibold text-[#303030]">Enable app embed</h3>
                    <button type="button" id="close-editor-modal-btn" class="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                        <i class="fas fa-times text-lg"></i>
                    </button>
                </div>
                <div class="px-6 py-6 flex-1">
                    <div class="flex items-start gap-4 mb-6">
                        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                            <i class="fas fa-puzzle-piece text-lg"></i>
                        </div>
                        <div class="flex-1">
                            <p class="text-[14px] font-semibold text-[#303030] mb-2">Step 2: Enable App Embed in Theme Editor</p>
                            <p class="text-[13px] text-gray-600">Selected theme: <strong id="editor-theme-display" class="text-[#303030]"></strong></p>
                        </div>
                    </div>
                    <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                        <div class="flex items-center justify-center gap-1 whitespace-nowrap flex-wrap">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[13px] shadow-md shrink-0">1</div>
                                <span class="text-[13px] font-semibold text-gray-800">Theme Editor</span>
                            </div>
                            <i class="fas fa-arrow-right text-gray-400 text-sm mx-2 shrink-0"></i>
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[13px] shadow-md shrink-0">2</div>
                                <span class="text-[13px] font-semibold text-gray-800">App Embeds</span>
                            </div>
                            <i class="fas fa-arrow-right text-gray-400 text-sm mx-2 shrink-0"></i>
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[13px] shadow-md shrink-0">3</div>
                                <span class="text-[13px] font-semibold text-gray-800">Enable App</span>
                            </div>
                            <i class="fas fa-arrow-right text-gray-400 text-sm mx-2 shrink-0"></i>
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-[13px] shadow-md shrink-0">4</div>
                                <span class="text-[13px] font-semibold text-gray-800">Save</span>
                            </div>
                        </div>
                    </div>
                    <div id="editor-indexing-banner" class="rounded-lg p-4 mb-6 transition-all duration-300"></div>
                </div>
                <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                    <button type="button" id="editor-modal-back-btn" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors">Back</button>
                    <button type="button" id="enable-editor-modal-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed btn-disabled-overlay">
                        <i class="fas fa-external-link-alt text-xs"></i>
                        Enable App in Theme Editor
                    </button>
                </div>
            </div>
        </div>
    </div>
`;
