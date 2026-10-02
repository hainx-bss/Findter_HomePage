export const trialBannerHtml = `
                                <!-- TRIAL WARNING BANNER -->
                                <div id="trial-warning-banner" class="order-2 lg:order-none rounded-[8px] overflow-hidden border border-yellow-200 shadow-sm">
                                    <div class="flex items-center justify-between px-4 py-3 bg-yellow-100">
                                        <div class="flex items-center gap-2">
                                            <i class="fas fa-exclamation-circle text-yellow-600 text-sm"></i>
                                            <span id="trial-warning-heading" class="text-[#303030] font-semibold text-[14px]">Your Trial Ends Tomorrow</span>
                                        </div>
                                        <button id="trial-warning-close-btn" class="text-gray-500 hover:text-gray-800 hover:bg-yellow-200 rounded p-1 transition-colors" aria-label="Dismiss">
                                            <i class="fas fa-times text-sm"></i>
                                        </button>
                                    </div>
                                    <div class="bg-white px-5 py-4">
                                        <p id="trial-warning-text" class="text-[13px] text-gray-500 leading-relaxed mb-4">This is your last day. Upgrade now to keep your filters running, or chat with us if you need more time, we can extend your trial by 14 days.</p>
                                        <div class="flex items-center gap-2">
                                            <button id="trial-warning-cta-primary" class="bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-semibold hover:bg-[#4a4a4a] transition-colors inline-flex items-center gap-2">
                                                Upgrade Now
                                            </button>
                                            <button id="trial-warning-cta-secondary" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                                                Chat with Us
                                            </button>
                                        </div>
                                    </div>
                                </div>
`;
