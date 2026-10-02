export const statusCardHtml = `
                                <div id="findter-status-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden p-5 order-4 lg:order-none">
                                    <h3 class="font-semibold text-[15px] text-[#303030] mb-4"><strong>Findter app status</strong></h3>
                                    <div class="space-y-3">
                                        <div class="flex items-center justify-between gap-3 text-[13px] text-[#303030]">
                                            <span class="font-medium">Plan</span>
                                            <span id="status-app-plan" class="p-badge p-badge--info">
                                                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                                                Trial
                                            </span>
                                        </div>
                                        <div id="status-plan-expiry-row" class="flex items-center justify-between gap-3 text-[13px] text-[#303030]">
                                            <span id="status-plan-expiry-label" class="font-medium">Expires</span>
                                            <span id="status-plan-expiry" class="p-badge">29/09/2026</span>
                                        </div>
                                        <div id="plan-usage" class="flex items-center justify-between gap-3 text-[13px] text-[#303030]">
                                            <span id="plan-usage-label" class="font-medium">Products</span>
                                            <span class="flex items-center gap-2 shrink-0">
                                                <span id="plan-usage-count" class="hidden font-semibold tabular-nums text-[#303030] whitespace-nowrap">1,595 / 50,000</span>
                                                <span id="plan-usage-status" class="p-badge">
                                                    <span id="plan-usage-dot" class="w-2 h-2 rounded-full bg-gray-400"></span>
                                                    <span id="plan-usage-status-text">Collecting data</span>
                                                </span>
                                            </span>
                                        </div>
                                        <div class="flex items-center justify-between text-[13px] text-[#303030]">
                                            <span class="font-medium">App Embed</span>
                                            <span id="status-app-embed" class="p-badge">
                                                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                                                Inactive
                                            </span>
                                        </div>
                                        <div class="flex items-center justify-between text-[13px] text-[#303030]">
                                            <span class="font-medium">Search Suggestion</span>
                                            <span id="status-search-suggestion" class="p-badge">
                                                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                                                Inactive
                                            </span>
                                        </div>
                                    </div>
                                </div>
`;
