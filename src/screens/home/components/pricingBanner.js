export const pricingBannerHtml = `
                                <!-- PRICING NOTICE BANNER -->
                                <div id="pricing-notice-banner" class="hidden order-1 lg:order-none rounded-[8px] overflow-hidden border border-blue-200 shadow-sm">
                                    <div class="flex items-center justify-between px-4 py-3 bg-blue-100">
                                        <div class="flex items-center gap-2">
                                            <i class="fas fa-info-circle text-blue-600 text-sm"></i>
                                            <span class="text-[#303030] font-semibold text-[14px]">Upcoming Plan Update</span>
                                        </div>
                                        <div class="flex items-center gap-1">
                                            <button id="pricing-notice-collapse-btn" class="text-gray-500 hover:text-gray-800 hover:bg-blue-200 rounded p-1 transition-colors" aria-label="Collapse">
                                                <i id="pricing-notice-chevron" class="fas fa-chevron-up text-sm"></i>
                                            </button>
                                            <button id="pricing-notice-close-btn" class="text-gray-500 hover:text-gray-800 hover:bg-blue-200 rounded p-1 transition-colors" aria-label="Dismiss">
                                                <i class="fas fa-times text-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="pricing-notice-body" class="bg-white px-5 py-4">
                                        <p class="text-[14px] font-bold text-[#303030] mb-3">Thank You for Using Findter ❤️</p>
                                        <p class="text-[13px] text-[#303030] leading-relaxed mb-3">Starting <strong>July 1, 2026</strong>, Findter will introduce paid plans.</p>
                                        <p class="text-[13px] text-[#303030] leading-relaxed mb-3">As an existing user, you'll receive a <strong>7-days free trial</strong> before billing begins.</p>
                                        <ul class="mb-4 space-y-1.5">
                                            <li class="text-[13px] text-[#303030]">✓ Your data and settings stay unchanged.</li>
                                            <li class="text-[13px] text-[#303030]">✓ No setup required.</li>
                                            <li class="text-[13px] text-[#303030]">✓ Decide during your trial.</li>
                                        </ul>
                                        <button class="bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-semibold hover:bg-[#4a4a4a] transition-colors inline-flex items-center gap-2">
                                            See pricing plans
                                        </button>
                                    </div>
                                </div>
`;
