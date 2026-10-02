export const feedbackBannerHtml = `
                                <!-- FEEDBACK BANNER -->
                                <div id="feedback-banner" class="rounded-[8px] shadow-sm overflow-hidden order-3 lg:order-none">
                                    <div class="bg-blue-50 px-5 py-4 relative">
                                        <button id="feedback-banner-close" class="absolute top-3 right-3 text-blue-400 hover:text-blue-600 hover:bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center transition-colors z-10" aria-label="Dismiss">
                                            <i class="fas fa-times text-xs"></i>
                                        </button>
                                        <h3 id="feedback-banner-prompt-text" class="text-[14px] font-semibold text-blue-900 pr-8">How was your experience with Findter so far?</h3>
                                    </div>
                                    <div id="feedback-banner-prompt" class="bg-white px-5 py-5 text-center">
                                        <div class="flex items-center justify-center gap-10">
                                            <button type="button" id="feedback-thumbs-down" class="feedback-thumb-btn text-gray-400 hover:text-red-500 text-3xl transition-all duration-150 hover:scale-125" aria-label="Thumbs down">
                                                <i class="far fa-thumbs-down"></i>
                                            </button>
                                            <button type="button" id="feedback-thumbs-up" class="feedback-thumb-btn text-gray-400 hover:text-blue-600 text-3xl transition-all duration-150 hover:scale-125" aria-label="Thumbs up">
                                                <i class="far fa-thumbs-up"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <!-- FEEDBACK MINI BOX (shown after a thumbs-up review) -->
                                <div id="feedback-mini-box" class="hidden bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden p-5 order-3 lg:order-none">
                                    <button type="button" id="feedback-mini-box-btn" class="w-full flex items-center gap-3 text-left">
                                        <div class="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                            <i class="far fa-comment-dots"></i>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-[13px] font-semibold text-[#303030]">Have feedback for us?</p>
                                            <p class="text-[12px] text-gray-500">Let us know how we can improve Findter.</p>
                                        </div>
                                        <i class="fas fa-chevron-right text-gray-400 text-xs"></i>
                                    </button>
                                </div>
`;
