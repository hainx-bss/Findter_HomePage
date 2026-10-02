export const chatHtml = `
    <!-- Floating Chat Icon -->
    <div class="fixed bottom-6 right-6 z-50">
        <button id="floating-chat-btn" class="w-[50px] h-[50px] bg-[#303030] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-red-800 transition-colors relative">
            <i class="fas fa-search text-xl"></i>
            <span id="chat-badge" class="hidden absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white">1</span>
        </button>
    </div>

    <!-- Chat Bubble -->
    <div id="chat-bubble" class="chat-bubble">
        <div class="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <i class="fas fa-headset"></i>
                <span class="font-semibold text-sm">Support Chat</span>
            </div>
            <button id="close-chat-bubble" class="hover:bg-white/20 rounded-full p-1 transition-colors">
                <i class="fas fa-times text-sm"></i>
            </button>
        </div>
        <div id="chat-messages" class="flex-1 p-4 overflow-y-auto space-y-3 min-h-[200px] max-h-[280px]">
            <div class="flex gap-2">
                <div class="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">
                    <i class="fas fa-robot text-xs"></i>
                </div>
                <div class="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2 text-[13px] text-gray-700">
                    Hello! How can we help you today?
                </div>
            </div>
        </div>
        <div class="p-3 border-t border-gray-200">
            <div class="flex gap-2">
                <input id="chat-input" type="text" placeholder="Type your message..." class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400">
                <button id="send-chat-btn" class="bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-700 transition-colors">
                    <i class="fas fa-paper-plane text-sm"></i>
                </button>
            </div>
        </div>
    </div>
`;
