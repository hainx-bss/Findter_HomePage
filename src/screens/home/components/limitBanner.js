export const limitBannerHtml = `
                                <!-- STORE LIMIT REACHED BANNER -->
                                <div id="limit-reached-banner" class="hidden order-2 lg:order-none rounded-[8px] overflow-hidden border border-yellow-200 shadow-sm">
                                    <div class="flex items-center justify-between px-4 py-3 bg-yellow-100">
                                        <div class="flex items-center gap-2">
                                            <i class="fas fa-exclamation-triangle text-yellow-600 text-sm"></i>
                                            <span class="text-[#303030] font-semibold text-[14px]">Store limit reached</span>
                                        </div>
                                        <div class="flex items-center gap-1">
                                            <button id="limit-reached-collapse-btn" class="text-gray-500 hover:text-gray-800 hover:bg-yellow-200 rounded p-1 transition-colors" aria-label="Collapse">
                                                <i id="limit-reached-chevron" class="fas fa-chevron-up text-sm"></i>
                                            </button>
                                            <button id="limit-reached-close-btn" class="text-gray-500 hover:text-gray-800 hover:bg-yellow-200 rounded p-1 transition-colors" aria-label="Dismiss">
                                                <i class="fas fa-times text-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="limit-reached-body" class="bg-white px-5 py-4">
                                        <p class="text-[13px] text-[#303030] leading-relaxed mb-3">Your store has exceeded the current limit with over <strong id="limit-reached-product-count">10,000</strong> products and <strong id="limit-reached-metafield-count">50</strong> metafields. Products beyond the limit will not be indexed and appear on the storefront.</p>
                                        <p class="text-[13px] text-[#303030] leading-relaxed mb-4">Contact us to consult about product and metafield limits.</p>
                                        <button id="limit-reached-contact-btn" class="bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-semibold hover:bg-[#4a4a4a] transition-colors inline-flex items-center gap-2">
                                            Contact us
                                        </button>
                                    </div>
                                </div>
`;
