export const highlightFeatureHtml = `
                <div id="page-highlight-feature" class="page-view">
                    <div class="max-w-[700px] mx-auto">
                        <div id="hf-banner-container" class="mb-5"></div>

                        <section id="hf-path-choice" class="mb-5 bg-white rounded-[8px] shadow-sm border border-[#e3e3e3] p-4 sm:p-5" aria-labelledby="hf-path-choice-title">
                            <h2 id="hf-path-choice-title" class="font-semibold text-[15px] text-[#303030] mb-1">What would you like to do next?</h2>
                            <p class="text-[13px] text-[#616161] leading-relaxed mb-4">Look through Findter's features, or start onboarding to activate the app on your theme.</p>
                            <div class="flex flex-col sm:flex-row sm:justify-end gap-2">
                                <button type="button" id="hf-view-features-btn" class="border border-[#c9cccf] bg-white text-[#303030] rounded-[8px] px-4 min-h-[44px] sm:min-h-[32px] text-[13px] font-medium hover:bg-[#f7f7f7] transition-colors">View features</button>
                                <button type="button" id="hf-start-onboarding-btn" class="bg-[#303030] text-white rounded-[8px] px-4 min-h-[44px] sm:min-h-[32px] text-[13px] font-medium hover:bg-[#1a1a1a] transition-colors">Start onboarding</button>
                            </div>
                        </section>

                        <div id="hf-highlight-featured-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden">
                            <div class="p-4 sm:p-5 border-b border-gray-100">
                                <h3 class="font-semibold text-[15px] text-[#303030] mb-4">Highlight features</h3>
                                <div id="hf-feature-highlight-tabs" class="flex flex-wrap justify-center gap-2"></div>
                            </div>
                            <div id="hf-feature-highlight-body" class="flex flex-col md:flex-row"></div>
                        </div>

                        <div id="hf-continue-container" class="hidden mt-4 flex justify-end">
                            <button type="button" id="hf-continue-to-home-btn" class="bg-[#303030] text-white rounded-[6px] px-6 py-2.5 text-[14px] font-medium hover:bg-[#4a4a4a] transition-colors">Continue to Homepage</button>
                        </div>
                    </div>
                </div>
`;
