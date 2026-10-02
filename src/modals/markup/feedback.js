export const feedbackModalHtml = `

    <!-- MODAL 3: Feedback Modal (unhappy box) -->
    <div id="feedback-modal" class="modal-wrapper fixed inset-0 hidden">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="feedback-modal-overlay"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-md pointer-events-auto relative modal-content">
                <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <h3 class="text-[16px] font-semibold text-[#303030]">How can we help you?</h3>
                    <button type="button" id="close-feedback-modal-btn" class="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                        <i class="fas fa-times text-lg"></i>
                    </button>
                </div>

                <div id="feedback-form-body" class="px-6 py-5 space-y-4">
                    <p class="text-[13px] text-gray-500 leading-relaxed">Fill in the details below and our support team will respond directly in the chat</p>
                    <div>
                        <label class="block text-[13px] font-semibold text-gray-700 mb-1.5">Category <span class="text-red-500">*</span></label>
                        <select id="feedback-category" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 bg-white">
                            <option value="Something isn't working">Something isn't working</option>
                            <option value="I can't find what I'm looking for">I can't find what I'm looking for</option>
                            <option value="Issue with my order">Issue with my order</option>
                            <option value="Payment or billing problem">Payment or billing problem</option>
                            <option value="Shipping or delivery question">Shipping or delivery question</option>
                            <option value="Return or refund request">Return or refund request</option>
                            <option value="Confusing to use">Confusing to use</option>
                            <option value="Feature suggestion">Feature suggestion</option>
                            <option value="App is slow">App is slow</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[13px] font-semibold text-gray-700 mb-1.5">Tell us more <span class="text-gray-400 font-normal">(optional)</span></label>
                        <textarea id="feedback-comment" rows="4" placeholder="Please describe your issue or feedback as much detail as possible. The more you share, the better help we can do!" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"></textarea>
                    </div>
                    <div>
                        <label class="block text-[13px] font-semibold text-gray-700 mb-1.5">Add a screenshot (optional)</label>
                        <input type="file" id="feedback-files" multiple class="w-full text-[13px] text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-gray-100 file:text-[13px] file:font-medium file:text-gray-700 hover:file:bg-gray-200 cursor-pointer">
                    </div>
                </div>

                <div id="feedback-success-body" class="hidden px-6 py-10 text-center">
                    <i class="fas fa-check-circle text-emerald-500 text-3xl mb-2"></i>
                    <p class="text-[14px] font-semibold text-[#303030]">Thanks, we've got it!</p>
                    <p class="text-[13px] text-gray-500 mt-1">Our support team will follow up in the chat shortly.</p>
                </div>

                <div id="feedback-modal-footer" class="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                    <button type="button" id="feedback-cancel-btn" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors">Never mind</button>
                    <button type="button" id="feedback-submit-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#1a1a1a] transition-colors">Send to support</button>
                </div>
            </div>
        </div>
    </div>
`;
