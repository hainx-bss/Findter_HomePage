export const syncCardHtml = `
                                <div id="sync-updates-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden p-5 order-5 lg:order-none">
                                    <div class="flex items-center gap-2 mb-3">
                                        <h3 class="font-semibold text-[15px] text-[#303030]">Sync recent updates</h3>
                                        <span id="sync-status-badge" class="bg-[#cbf1c4] text-[#1f5119] text-[11px] px-2 py-0.5 rounded-full font-semibold">Completed</span>
                                    </div>
                                    <p id="sync-status-text" class="text-[13px] text-[#303030] mb-5">Recent updates were last synced:<strong class="font-semibold ml-1" id="sync-timestamp">23:59:09 02/03/2026</strong></p>
                                    
                                    <button id="manual-sync-btn" class="flex items-center justify-center gap-2 border border-gray-300 rounded-[6px] px-3 py-1.5 text-[13px] font-medium text-[#303030] hover:bg-gray-50 w-fit shadow-sm">
                                        <i class="fas fa-sync-alt text-gray-500 text-sm" id="sync-icon"></i>
                                        <span id="sync-btn-text">Manual sync</span>
                                    </button>
                                </div>
`;
