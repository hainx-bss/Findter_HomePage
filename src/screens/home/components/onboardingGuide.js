export const onboardingGuideHtml = `
                                <div id="onboarding-guide-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 order-6 lg:order-none">
                                    <div class="p-5">
                                        <div class="flex items-center justify-between mb-5">
                                            <h3 class="font-semibold text-[15px] text-[#303030]">Onboarding guide</h3>
                                            <button class="guide-toggle text-gray-400 hover:text-gray-600 transition-colors" data-target="guide-body-1" aria-expanded="true"><i class="fas fa-chevron-up"></i></button>
                                        </div>
                                        
                                        <div class="flex items-center gap-4 mb-3">
                                            <div class="flex-1 bg-gray-200 h-2.5 rounded-full overflow-hidden">
                                                <div id="progress-bar" class="bg-black h-full w-[33%] rounded-full transition-all duration-500"></div>
                                            </div>
                                            <span id="progress-text" class="text-[13px] text-gray-600 font-medium">1/3 completed</span>
                                        </div>
                                        
                                        <div id="congrat-message-container" class="mb-4 hidden congrat-message"></div>

                                        <div id="guide-body-1" class="space-y-6 relative pl-1">
                                            <div class="border border-gray-100 rounded-lg overflow-visible">
                                                <div class="flex items-center gap-5 p-3 group transition-colors">
                                                    <div id="step1-checkbox" class="step-checkbox w-6 h-6 shrink-0 rounded-full border-2 border-dashed border-gray-400 bg-white flex items-center justify-center hover:border-gray-600 transition-colors" data-step="1">
                                                        <i class="fas fa-check text-[11px] text-transparent"></i>
                                                    </div>
                                                    <div class="flex-1 flex items-center cursor-pointer guide-step-toggle" data-target="step-content-1">
                                                        <h4 class="font-semibold text-[14px] text-[#303030] flex-1">Activate app embed in theme (<a href="#" class="font-bold text-green-600 underline hover:text-green-800">Guideline here</a>)</h4>
                                                        <i class="fas fa-chevron-up text-gray-400 text-xs transition-transform duration-200 ml-2"></i>
                                                    </div>
                                                </div>
                                                <div id="step-content-1" class="pl-14 pr-4 pb-4">
                                                    <div id="step1-initial" class="mb-3">
                                                        <div class="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                            <span class="text-[13px] font-bold text-gray-800 whitespace-nowrap">Step 1:</span>
                                                            <span class="text-[13px] text-gray-700">Theme Selection</span>
                                                        </div>
                                                        <button type="button" id="select-theme-btn" class="mt-2 bg-[#303030] text-white rounded-[6px] px-4 py-1.5 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors shadow-sm">
                                                            Choose Your Theme
                                                        </button>
                                                    </div>

                                                    <div id="step1-completed" class="hidden">
                                                        <div class="mb-3">
                                                            <div class="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                                <span class="text-[13px] font-bold text-gray-800 whitespace-nowrap">Step 1:</span>
                                                                <span class="text-[13px] text-gray-700">Theme Selection</span>
                                                                <span id="guide-theme-dropdown-label" class="text-[13px] font-medium text-[#303030]">-- No theme selected --</span>
                                                                <span id="guide-theme-live-pill" class="theme-live-badge hidden">Live</span>
                                                            </div>
                                                            <button type="button" id="guide-theme-dropdown-btn" class="mt-2 bg-[#303030] text-white rounded-[6px] px-3 py-1.5 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">
                                                                Choose Your Theme
                                                            </button>
                                                        </div>
                                                        
                                                        <p class="text-[13px] text-[#303030] mb-3">
                                                            <strong>Step 2:</strong> Go to Theme Editor > App Embeds > Enable the "Search & Filter core" (Findter) > Save the Theme
                                                        </p>
                                                        
                                                        <button type="button" id="guide-enable-editor-btn" class="hidden mt-2 bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors inline-flex items-center gap-2">
                                                            <i class="fas fa-external-link-alt text-xs"></i>
                                                            Enable App in Theme Editor
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="border border-gray-100 rounded-lg overflow-hidden">
                                                <div class="flex items-center gap-5 p-3 group transition-colors">
                                                    <div id="step4-checkbox" class="step-checkbox w-6 h-6 shrink-0 rounded-full border-2 border-dashed border-gray-400 bg-white flex items-center justify-center" data-step="4">
                                                        <i class="fas fa-check text-[11px] text-transparent"></i>
                                                    </div>
                                                    <div class="flex-1 flex items-center cursor-pointer guide-step-toggle" data-target="step-content-4">
                                                        <h4 class="text-[14px] font-semibold text-[#303030] flex-1"><strong>Activate search suggestion in theme (Optional)</strong></h4>
                                                        <i class="fas fa-chevron-up text-gray-400 text-xs transition-transform duration-200 ml-2"></i>
                                                    </div>
                                                </div>
                                                <div id="step-content-4" class="pl-14 pr-4 pb-4">
                                                    <button type="button" id="enable-search-suggestion-btn" class="bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors inline-flex items-center gap-2">
                                                        <i class="fas fa-external-link-alt text-xs"></i>
                                                        Enable Search Suggestion in Theme Editor
                                                    </button>
                                                </div>
                                            </div>

                                            <div id="step2-container" class="border border-gray-100 rounded-lg overflow-hidden">
                                                <div class="flex items-center gap-5 p-3 group transition-colors">
                                                    <div id="step2-checkbox" class="step-checkbox w-6 h-6 shrink-0 rounded-full border-2 border-dashed border-gray-400 bg-white flex items-center justify-center hover:border-gray-600 transition-colors" data-step="2">
                                                        <i class="fas fa-check text-[11px] text-transparent"></i>
                                                    </div>
                                                    <div class="flex-1 flex items-center cursor-pointer guide-step-toggle" data-target="step-content-2">
                                                        <h4 class="font-semibold text-[14px] text-[#303030] flex-1">Set up custom filters for collections (Optional)</h4>
                                                        <i class="fas fa-chevron-up text-gray-400 text-xs transition-transform duration-200 ml-2"></i>
                                                    </div>
                                                </div>
                                                <div id="step-content-2" class="pl-14 pr-4 pb-4">
                                                    <p class="text-[13px] text-[#303030] mb-2">Create your custom filter for each collection page with unlimited filter values.</p>
                                                    <p class="text-[13px] mb-3">Filter Guidelines <a href="#" class="text-blue-600 font-bold underline hover:text-blue-800">here</a></p>
                                                    <button type="button" id="go-to-filter-btn" class="bg-[#303030] border border-[#303030] text-white rounded-[6px] px-4 py-1.5 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                                        Go to Filter
                                                    </button>
                                                    <p id="filter-lock-hint" class="hidden text-[11px] text-orange-600 mt-2 font-medium">
                                                        <i class="fas fa-lock mr-1"></i> Complete Step 1 and wait for indexing to finish first
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="border border-gray-100 rounded-lg overflow-hidden">
                                                <div class="flex items-center gap-5 p-3 group transition-colors">
                                                    <div class="step-checkbox w-6 h-6 shrink-0 bg-[#303030] rounded-full text-white flex items-center justify-center cursor-pointer transition-colors" data-step="3" data-completed="true">
                                                        <i class="fas fa-check text-[11px]"></i>
                                                    </div>
                                                    <div class="flex-1 flex items-center cursor-pointer guide-step-toggle" data-target="step-content-3">
                                                        <h4 class="text-[14px] font-semibold text-gray-500 flex-1">Basic search engine is set up in app</h4>
                                                        <i class="fas fa-chevron-up text-gray-400 text-xs transition-transform duration-200 ml-2"></i>
                                                    </div>
                                                </div>
                                                <div id="step-content-3" class="pl-14 pr-4 pb-4">
                                                    <p class="text-[13px] text-gray-500">Your search engine is optimized and active.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
`;
