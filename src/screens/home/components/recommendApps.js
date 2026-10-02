export const recommendAppsHtml = `
                                <div id="recommend-apps-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden order-9 lg:order-none">
                                    <div class="p-5 flex items-center justify-between border-b border-gray-100">
                                        <h3 class="font-semibold text-[15px] text-[#303030]">Recommend apps</h3>
                                        <div class="flex items-center gap-2">
                                            <button id="appCarouselPrev" class="w-7 h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 shadow-sm" aria-label="Previous apps"><i class="fas fa-chevron-left text-[10px]"></i></button>
                                            <button id="appCarouselNext" class="w-7 h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 shadow-sm" aria-label="Next apps"><i class="fas fa-chevron-right text-[10px]"></i></button>
                                        </div>
                                    </div>
                                    <div class="p-5 overflow-hidden">
                                        <div id="appCarouselTrack" class="flex gap-3 transition-transform duration-300 ease-in-out">
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/s/files/1/0820/9668/5276/files/Flat_-_White_1.webp?v=1787712772" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="Chizy: AI Chatbot & Live Chat">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">Chizy: AI Chatbot & Live Chat</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Code: FINDTER (-15%)</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Smart AI agent: complementing your filters with instant support, product recommendations</p>
                                                <a href="https://apps.shopify.com/judgeme" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/s/files/1/0765/0302/3847/files/934849961d1522ef7302.png?v=1785833460" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="Yotpo: Product Reviews App">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">Yotpo: Product Reviews App</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Reviews</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Display product reviews</p>
                                                <a href="https://apps.shopify.com/yotpo-social-reviews" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/d1fbe4acf738bfaa4fa03ef985d8477e/icon/CM_PravDr4YDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="OT Section: Theme Sections">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">OT Section: Theme Sections</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Page Builder</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">200+ premium drag-and-drop sections, templates &amp; blocks for any store</p>
                                                <a href="https://apps.shopify.com/ot-theme-sections-store-page-builder" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://omnithemes.com/wp-content/uploads/2024/04/logo.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="Eurus Theme">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">Eurus Theme</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Theme</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Conversion-focused theme with mega menus, pop-ups &amp; unlimited product badges</p>
                                                <a href="https://themes.shopify.com/themes/eurus/presets/eurus" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://omnithemes.com/wp-content/uploads/2024/04/logo.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="Maximize Theme">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">Maximize Theme</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Theme</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Speed-optimized B2B theme for 500+ SKU catalogs with smart search &amp; mega menus</p>
                                                <a href="https://themes.shopify.com/themes/maximize/presets/maximize" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/5e7100d6dd8a25eae7b75d50f0d897df/icon/COWZ0fD0zosDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="OPTIS Product Options, Variant">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">OPTIS Product Options, Variant</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Product Customization</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Infinite product options with text, swatches, file uploads &amp; price addons</p>
                                                <a href="https://apps.shopify.com/product-options-by-bss" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/4639b295c8340737b2c240f10481cb85/icon/CIad9ra1140DEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="OP Color Swatch Variant Images">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">OP Color Swatch Variant Images</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Product variants</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Visual color/image swatches with combined listings &amp; variant image automator</p>
                                                <a href="https://apps.shopify.com/optis-color-swatch-variants" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/c0ba322d64f9554b2f2917c3bb2f0ca0/icon/CKmvg5WrgJMDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="TA AI Product Labels &amp; Badges">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">TA AI Product Labels &amp; Badges</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Product Labels &amp; Badges</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">AI-generated labels/badges with translations, stock &amp; discount-based display rules</p>
                                                <a href="https://apps.shopify.com/product-labels-by-bss" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/c0ba322d64f9554b2f2917c3bb2f0ca0/icon/CKmvg5WrgJMDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="TA Banner Slider, Sales Pop up">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">TA Banner Slider, Sales Pop up</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Promotions &amp; Banners</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Announcement bars, countdown timers, popups &amp; multi-banner sliders</p>
                                                <a href="https://apps.shopify.com/bss-banner-pop-up" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/c0ba322d64f9554b2f2917c3bb2f0ca0/icon/CKmvg5WrgJMDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="TA Preorder &amp; Back In Stock">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">TA Preorder &amp; Back In Stock</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Preorder &amp; Stock</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Preorders with deposits, back-in-stock alerts, waitlists &amp; presale campaigns</p>
                                                <a href="https://apps.shopify.com/dotsy-preorder-presale" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/af0a3ec102358241ae7823679d9ccda3/icon/CKH57aSigpEDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="BSS B2B Order, Request a Quote">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">BSS B2B Order, Request a Quote</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">B2B Order &amp; Quote</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Request quotes, bulk orders via CSV upload &amp; easy reorder from history</p>
                                                <a href="https://apps.shopify.com/b2b-customer-portal-quick-order" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/f406cf0e469d052e1fb506a0898d801f/icon/CMn5zMuggpEDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="BSS B2B Wholesale Pricing">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">BSS B2B Wholesale Pricing</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">B2B Wholesale</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Custom pricing, volume discounts, price lists, net terms &amp; tax control</p>
                                                <a href="https://apps.shopify.com/b2b-solution-custom-pricing" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/6649510d2d88bde754b08607b0b6a328/icon/COicvrf8rYoDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="B2Bridge B2B Wholesale Pricing">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">B2Bridge B2B Wholesale Pricing</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">B2B Wholesale</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Customer-specific pricing, bulk orders, MOQ, net terms &amp; quick order page</p>
                                                <a href="https://apps.shopify.com/b2bridge-b2b-all-in-one" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/dc7f7058c1348d662ca3919f8d9b693b/icon/CM6ZgtWMxpEDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="TL: Free Gifts BOGO &amp; Upsell">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">TL: Free Gifts BOGO &amp; Upsell</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Upsell &amp; BOGO</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">BOGO, Buy X Get Y, free gifts with purchase &amp; cart upsell offers</p>
                                                <a href="https://apps.shopify.com/salepify" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/1188f0cb74707478f04a7ab4f9563933/icon/CMqW-bav1ZEDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="MIDA Replay, Heatmap &amp; Insight">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">MIDA Replay, Heatmap &amp; Insight</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Analytics &amp; Heatmap</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Session replays, revenue heatmaps &amp; AI insights to fix UX friction</p>
                                                <a href="https://apps.shopify.com/mida-session-recording-replay" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/a9d339e5e1fd198bffdae82904deaec6/icon/CNeZtO2llJADEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="Chizy: AI Chatbot &amp; Live Chat">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">Chizy: AI Chatbot &amp; Live Chat</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">AI Chatbot</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">24/7 AI chatbot with product browsing, live chat handover &amp; smart follow-ups</p>
                                                <a href="https://apps.shopify.com/chizy-ai-chatbot" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
`;
