export const themePickerHtml = `
    <!-- MODAL 1: Theme Picker Modal -->
    <div id="theme-picker-modal" class="modal-wrapper fixed inset-0 hidden">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="theme-picker-modal-overlay"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-md pointer-events-auto max-h-[55vh] flex flex-col relative modal-content">
                <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
                    <h3 class="text-[16px] font-semibold text-[#303030]">Choose your theme</h3>
                    <button type="button" id="close-theme-picker-modal-btn" class="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100" aria-label="Close">
                        <i class="fas fa-times text-lg" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="grid grid-cols-[1fr_170px] gap-3 px-6 py-2.5 border-b border-gray-200 bg-gray-50 shrink-0">
                    <span class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Your theme</span>
                    <span class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide text-center">Compatibility</span>
                </div>
                <p id="theme-request-notice" class="hidden mx-6 mt-3 rounded-lg border border-[#f0d488] bg-[#fff7df] px-3 py-2 text-[13px] text-[#8a6412]" role="status"></p>
                <div id="theme-picker-list" class="overflow-y-auto flex-1"></div>
            </div>
        </div>
    </div>
`;
