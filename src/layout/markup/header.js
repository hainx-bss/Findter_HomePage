export const headerHtml = `
    <header class="h-14 bg-[#1a1a1a] text-gray-300 flex items-center justify-between px-3 sm:px-4 gap-2 shrink-0 overflow-hidden">
        <div class="flex items-center gap-2 sm:gap-4 shrink-0">
            <div class="flex items-center gap-2 text-white font-semibold text-lg tracking-tight">
                <i class="fab fa-shopify text-[#95bf47] text-[22px]"></i>
                <span class="hidden sm:inline">shopify</span>
            </div>
        </div>
        <div class="flex-1 min-w-0 max-w-[560px] px-1 sm:px-4">
            <div class="bg-[#303030] hover:bg-[#3a3a3a] transition-colors rounded border border-[#444] flex items-center px-3 py-1.5 cursor-pointer shadow-inner">
                <i class="fas fa-search text-gray-400 text-sm shrink-0"></i>
                <span class="ml-2 text-gray-400 text-sm flex-1 hidden sm:inline truncate">Search</span>
                <div class="hidden sm:flex gap-1 shrink-0">
                    <span class="bg-[#4a4a4a] border border-[#555] text-[10px] px-1.5 py-0.5 rounded text-gray-300 font-medium">CTRL</span>
                    <span class="bg-[#4a4a4a] border border-[#555] text-[10px] px-1.5 py-0.5 rounded text-gray-300 font-medium">K</span>
                </div>
            </div>
        </div>
        <div class="flex items-center gap-2 sm:gap-4 text-sm shrink-0">
            <button class="hidden sm:inline text-gray-400 hover:text-white transition-colors"><i class="fas fa-th"></i></button>
            <button class="text-gray-400 hover:text-white transition-colors"><i class="fas fa-bell"></i></button>
            <div class="flex items-center gap-2 hover:bg-[#303030] rounded px-2 py-1 cursor-pointer transition-colors -mr-2">
                <div class="bg-[#cbf1c4] text-[#1f5119] text-[10px] font-bold px-1.5 py-0.5 rounded">MS</div>
                <span class="hidden sm:inline text-gray-200 font-medium text-[13px]">Master Admin</span>
            </div>
        </div>
    </header>
`;
