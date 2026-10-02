export const restrictedHtml = `
    <!-- MODAL: Access Restricted Modal -->
    <div id="restricted-modal" class="modal-wrapper fixed inset-0 hidden">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="restricted-modal-overlay"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-md pointer-events-auto relative modal-content">
                <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                            <i class="fas fa-lock text-lg"></i>
                        </div>
                        <h3 class="text-[16px] font-semibold text-[#303030]">Access restricted</h3>
                    </div>
                    <button type="button" id="close-restricted-modal-btn" class="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                        <i class="fas fa-times text-lg"></i>
                    </button>
                </div>
                <div class="px-6 py-5">
                    <div class="space-y-4">
                        <p class="text-[14px] text-[#303030] leading-relaxed">Please complete the following steps before accessing this feature:</p>
                        <div class="space-y-3">
                            <div id="restriction-item-1" class="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                                <div id="restriction-check-1" class="w-5 h-5 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                                    <i class="fas fa-clock text-[10px] text-amber-500"></i>
                                </div>
                                <div class="flex-1">
                                    <p class="text-[13px] font-semibold text-[#303030]" id="restriction-text-1">Wait for data indexing to complete</p>
                                    <p class="text-[11px] text-gray-500" id="restriction-sub-1">Currently collecting data...</p>
                                </div>
                            </div>
                            <div id="restriction-item-2" class="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                                <div id="restriction-check-2" class="w-5 h-5 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                                    <i class="fas fa-times text-[10px] text-amber-500"></i>
                                </div>
                                <div class="flex-1">
                                    <p class="text-[13px] font-semibold text-[#303030]">Complete Guide Step 1: Activate App Embed</p>
                                    <p class="text-[11px] text-gray-500">Select a theme and enable the app in Theme Editor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-end px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                    <button type="button" id="restricted-modal-home-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors flex items-center gap-2">
                        <i class="fas fa-home text-xs"></i>
                        Go to Homepage
                    </button>
                </div>
            </div>
        </div>
    </div>
`;
