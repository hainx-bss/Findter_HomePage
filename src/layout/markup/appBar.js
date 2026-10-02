export const appBarHtml = `
            <div class="flex items-center justify-between px-8 py-3 shrink-0 bg-white border-b border-gray-200">
                <div class="flex items-center gap-2">
                    <button id="sidebar-toggle-btn" class="text-gray-500 hover:bg-gray-200 p-1.5 rounded transition-colors" aria-label="Toggle sidebar">
                        <i class="fas fa-bars text-sm"></i>
                    </button>
                    <div class="flex items-center gap-2 app-header-clickable px-2 -mx-2 py-1 rounded-md" id="app-header-title" data-page="home">
                    <div class="rounded-[4px] w-[22px] h-[22px] overflow-hidden"><img src="https://cdn.shopify.com/app-store/listing_images/393b6ef120968ea1931a5ec86b58d041/icon/CIr75oPv944DEAE=.png" alt="Findter" class="w-full h-full object-cover"></div>
                    <h1 class="font-semibold text-[18px] text-[#303030]">Findter filter & search</h1>
                    </div>
                </div>
                <div class="flex items-center gap-2 relative">
                    <div id="header-dev-menu" class="hidden lg:flex items-center gap-2">
                        <button id="show-pricing-notice-btn" class="border border-blue-300 bg-blue-50 text-blue-700 rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-blue-100 transition-colors shadow-sm whitespace-nowrap">Plan Update</button>
                        <button id="show-limit-reached-btn" class="border border-yellow-300 bg-yellow-50 text-yellow-700 rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-yellow-100 transition-colors shadow-sm whitespace-nowrap">Store Limit</button>
                        <button id="show-feedback-banner-btn" class="border border-emerald-300 bg-emerald-50 text-emerald-700 rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-emerald-100 transition-colors shadow-sm whitespace-nowrap">Feedback</button>
                        <button id="reset-indexing-btn" class="border border-orange-300 bg-orange-50 text-orange-700 rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-orange-100 transition-colors shadow-sm whitespace-nowrap">Reset Indexing</button>
                        <button id="show-welcome-modal-btn" type="button" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-gray-100 transition-colors shadow-sm whitespace-nowrap">Welcome modal</button>
                        <button id="end-index-btn" class="border border-green-300 bg-green-50 text-green-700 rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-green-100 transition-colors shadow-sm whitespace-nowrap">End Index Now</button>
                        <div class="relative">
                            <button id="warning-trial-btn" class="border border-red-300 bg-red-50 text-red-700 rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-red-100 transition-colors shadow-sm whitespace-nowrap">Warning</button>
                            <div id="warning-trial-menu" class="hidden absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-20">
                                <button type="button" data-days="7" class="warning-trial-option w-full text-left px-3 py-1.5 text-[13px] text-[#303030] hover:bg-gray-50">7 days left</button>
                                <button type="button" data-days="3" class="warning-trial-option w-full text-left px-3 py-1.5 text-[13px] text-[#303030] hover:bg-gray-50">3 days left</button>
                                <button type="button" data-days="1" class="warning-trial-option w-full text-left px-3 py-1.5 text-[13px] text-[#303030] hover:bg-gray-50">1 day left</button>
                                <button type="button" data-days="0" class="warning-trial-option w-full text-left px-3 py-1.5 text-[13px] text-[#303030] hover:bg-gray-50">0 days left</button>
                            </div>
                        </div>
                    </div>
                    <button id="header-more-btn" class="lg:hidden text-gray-500 hover:bg-gray-200 p-1.5 rounded transition-colors"><i class="fas fa-ellipsis-h text-sm"></i></button>
                </div>
            </div>
`;
