export const highlightFeatureHtml = `
                <div id="page-highlight-feature" class="page-view">
                    <div class="app-page">
                        <header class="hf-page-head">
                            <h1>Discover Findter</h1>
                            <p>Look through the features below while your store data is collected.</p>
                        </header>
                        <div id="hf-banner-container" class="mb-5"></div>

                        <div id="hf-highlight-featured-card" class="bg-white rounded-[8px] shadow-sm border border-[#e3e3e3] overflow-hidden">
                            <div class="hf-card-head">
                                <div>
                                    <h2>Highlight features</h2>
                                    <p>Choose a group, then preview a feature.</p>
                                </div>
                                <div id="hf-feature-highlight-tabs" class="flex flex-wrap justify-start gap-2"></div>
                            </div>
                            <div id="hf-feature-highlight-body" class="flex flex-col md:flex-row"></div>
                        </div>

                        <div id="hf-continue-container" class="hidden mt-4 flex justify-end">
                            <button type="button" id="hf-continue-to-home-btn" class="bg-[#303030] text-white rounded-[6px] px-6 py-2.5 text-[14px] font-medium hover:bg-[#4a4a4a] transition-colors min-h-[44px]">Continue to Homepage</button>
                        </div>
                    </div>
                </div>
`;

export const highlightMediaModalHtml = `
                <div id="hf-media-modal" class="hf-media-modal" role="dialog" aria-modal="true" aria-labelledby="hf-media-modal-title" aria-hidden="true">
                    <button type="button" class="hf-media-modal__backdrop" data-hf-media-close aria-label="Close preview"></button>
                    <div class="hf-media-modal__dialog">
                        <div class="hf-media-modal__header">
                            <h2 id="hf-media-modal-title" class="hf-media-modal__title">Preview</h2>
                            <button type="button" class="hf-media-modal__close" data-hf-media-close aria-label="Close">&times;</button>
                        </div>
                        <div id="hf-media-modal-body" class="hf-media-modal__body"></div>
                    </div>
                </div>
`;
