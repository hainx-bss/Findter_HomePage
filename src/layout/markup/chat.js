export const chatHtml = `
    <button id="floating-chat-btn" class="sh-chat-launcher" type="button" aria-label="Open chat">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-7l-5 4v-4H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm2.5 4.5a.9.9 0 0 0 0 1.8h9a.9.9 0 0 0 0-1.8zm0 3.5a.9.9 0 0 0 0 1.8h5.5a.9.9 0 0 0 0-1.8z"></path></svg>
        <span id="chat-badge" class="hidden absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white">1</span>
    </button>

    <div id="chat-bubble" class="chat-bubble">
        <div class="bg-[#9b2423] text-white px-4 py-3 flex items-center justify-between">
            <div>
                <span class="font-semibold text-[15px]">Findter support</span>
                <small class="block font-normal text-[12px] opacity-80">We usually reply within a few minutes</small>
            </div>
            <button id="close-chat-bubble" class="hover:bg-white/20 rounded-full p-1 transition-colors" type="button" aria-label="Close chat">
                <i class="fas fa-times text-sm"></i>
            </button>
        </div>
        <div id="chat-messages" class="flex-1 p-4 overflow-y-auto space-y-3 min-h-[200px] max-h-[280px] bg-[#f6f6f7]">
            <div class="flex gap-2">
                <div class="bg-white rounded-xl px-3 py-2 text-[13px] text-[#303030] shadow-sm">
                    Hi! 👋 How can we help you with Findter today?
                </div>
            </div>
        </div>
        <div class="p-3 border-t border-[#e3e3e3] bg-white">
            <div class="flex gap-2">
                <input id="chat-input" type="text" placeholder="Type your message..." class="flex-1 border border-[#8a8a8a] rounded-lg px-3 py-2 text-[13px] outline-none focus:border-[#303030]">
                <button id="send-chat-btn" class="bg-[#303030] text-white rounded-lg px-4 py-2 hover:bg-[#1a1a1a] transition-colors" type="button" aria-label="Send">
                    <i class="fas fa-paper-plane text-sm"></i>
                </button>
            </div>
        </div>
    </div>
`;
