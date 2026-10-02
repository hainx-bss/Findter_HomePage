export const welcomeHtml = `
    <!-- MODAL: Welcome Gate Modal -->
    <div id="welcome-gate-modal" class="modal-wrapper fixed inset-0 hidden" role="presentation">
        <div id="welcome-gate-backdrop" class="p-modal__backdrop"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div class="p-modal__dialog pointer-events-auto relative modal-content flex flex-col" role="dialog" aria-modal="true" aria-labelledby="welcome-gate-title" tabindex="-1">
                <div class="p-modal__header">
                    <h2 id="welcome-gate-title" class="p-modal__title">Welcome to Findter</h2>
                    <button type="button" id="welcome-gate-close-btn" class="p-modal__close" aria-label="Close">
                        <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M11.414 10l4.293-4.293a1 1 0 00-1.414-1.414L10 8.586 5.707 4.293a1 1 0 00-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 101.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10z"></path></svg>
                    </button>
                </div>
                <div class="p-modal__body flex flex-col min-h-0">
                    <div id="welcome-carousel" class="hidden sm:block shrink-0 relative overflow-hidden aspect-[1672/941] select-none" style="touch-action: pan-y; max-height: calc(100vh - 184px);">
                        <div id="welcome-carousel-track" class="flex h-full transition-transform duration-500 ease-in-out">
                            <img src="https://cdn.shopify.com/s/files/1/0765/0302/3847/files/welcom-banner_ae9cedd4-0385-4d08-b179-2dda6d7801b5.png?v=1789554422" alt="Enjoy a 14-day free trial with unlimited features" class="w-full h-full object-cover shrink-0 pointer-events-none" draggable="false">
                            <img src="welcome-banner.png" alt="Enjoy a 14-day free trial with unlimited features" class="w-full h-full object-cover shrink-0 pointer-events-none" draggable="false">
                        </div>
                        <button type="button" id="welcome-carousel-prev" class="p-carousel-nav absolute left-3 top-1/2 -translate-y-1/2" aria-label="Previous slide">
                            <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12.7 15.3a1 1 0 01-1.4 0l-5-5a1 1 0 010-1.4l5-5a1 1 0 111.4 1.4L8.4 9.6l4.3 4.3a1 1 0 010 1.4z"></path></svg>
                        </button>
                        <button type="button" id="welcome-carousel-next" class="p-carousel-nav absolute right-3 top-1/2 -translate-y-1/2" aria-label="Next slide">
                            <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M7.3 4.7a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 11-1.4-1.4l4.3-4.3-4.3-4.3a1 1 0 010-1.4z"></path></svg>
                        </button>
                        <div id="welcome-carousel-dots" class="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2"></div>
                    </div>
                    <div id="welcome-mobile-banner" class="sm:hidden shrink-0 flex items-center justify-center overflow-hidden">
                        <img src="Findter Welcome Banner – Mobile.png" alt="Enjoy a 14-day free trial with unlimited features" class="max-w-full object-contain" style="max-height: calc(100vh - 220px);">
                    </div>
                </div>
                <div class="p-modal__footer">
                    <button type="button" id="welcome-gate-continue-btn" class="p-button--primary">Continue</button>
                </div>
            </div>
        </div>
    </div>
`;
