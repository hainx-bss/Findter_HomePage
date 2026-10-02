export const sidebarHtml = `
        <!-- Backdrop shown while the sidebar overlay is open -->
        <div id="sidebar-overlay" class="fixed inset-0 bg-black/40 z-30"></div>
        <!-- Sidebar (fixed overlay drawer, doesn't affect main content width) -->
        <aside class="w-60 bg-[#ebebeb] flex flex-col border-r border-gray-300 shrink-0 sidebar-scrollbar overflow-y-auto shadow-2xl transition-transform duration-300">
            <nav class="flex-1 py-3 px-3 flex flex-col gap-0.5">
                <a href="#" id="nav-home-main" data-page="home" class="nav-item flex items-center px-2 py-1.5 text-[13px] font-medium rounded-md hover:bg-gray-200 text-gray-700 transition-colors nav-active"><i class="fas fa-home w-6 text-gray-500 text-center"></i> Home</a>
                <a href="#" class="flex items-center px-2 py-1.5 text-[13px] font-medium rounded-md hover:bg-gray-200 text-gray-700 transition-colors"><i class="fas fa-inbox w-6 text-gray-500 text-center"></i> Orders</a>
                <a href="#" class="flex items-center px-2 py-1.5 text-[13px] font-medium rounded-md hover:bg-gray-200 text-gray-700 transition-colors"><i class="fas fa-tags w-6 text-gray-500 text-center"></i> Products</a>
                <a href="#" class="flex items-center px-2 py-1.5 text-[13px] font-medium rounded-md hover:bg-gray-200 text-gray-700 transition-colors"><i class="fas fa-user w-6 text-gray-500 text-center"></i> Customers</a>
                <a href="#" class="flex items-center px-2 py-1.5 text-[13px] font-medium rounded-md hover:bg-gray-200 text-gray-700 transition-colors"><i class="fas fa-bullhorn w-6 text-gray-500 text-center"></i> Marketing</a>
                <a href="#" class="flex items-center px-2 py-1.5 text-[13px] font-medium rounded-md hover:bg-gray-200 text-gray-700 transition-colors"><i class="fas fa-percent w-6 text-gray-500 text-center"></i> Discounts</a>
                <a href="#" class="flex items-center px-2 py-1.5 text-[13px] font-medium rounded-md hover:bg-gray-200 text-gray-700 transition-colors"><i class="fas fa-file-alt w-6 text-gray-500 text-center"></i> Content</a>
                <a href="#" class="flex items-center px-2 py-1.5 text-[13px] font-medium rounded-md hover:bg-gray-200 text-gray-700 transition-colors"><i class="fas fa-globe w-6 text-gray-500 text-center"></i> Markets</a>
                <a href="#" class="flex items-center px-2 py-1.5 text-[13px] font-medium rounded-md hover:bg-gray-200 text-gray-700 transition-colors"><i class="fas fa-chart-line w-6 text-gray-500 text-center"></i> Analytics</a>
                
                <div class="mt-4 px-2 py-1 flex justify-between items-center text-[11px] font-bold text-gray-500 uppercase tracking-wider group cursor-pointer hover:bg-gray-200 rounded-md"><span>Sales channels</span><i class="fas fa-chevron-right text-[10px] text-gray-400"></i></div>
                <a href="#" class="flex items-center px-2 py-1.5 text-[13px] font-medium rounded-md hover:bg-gray-200 text-gray-700 transition-colors"><i class="fas fa-store w-6 text-gray-500 text-center"></i> Online Store</a>
                
                <div class="mt-4 px-2 py-1 flex justify-between items-center text-[11px] font-bold text-gray-500 uppercase tracking-wider group cursor-pointer hover:bg-gray-200 rounded-md"><span>Apps</span><i class="fas fa-chevron-right text-[10px] text-gray-400"></i></div>
                
                <div class="bg-gray-200 rounded-md pb-1.5 mt-0.5 shadow-sm">
                    <a href="#" id="nav-app-name" data-page="home" class="app-sub-nav flex items-center px-2 py-1.5 text-[13px] font-medium rounded-md text-[#303030] app-header-clickable transition-colors cursor-pointer">
                        <div class="rounded w-5 h-5 mr-2 shrink-0 overflow-hidden"><img src="https://cdn.shopify.com/app-store/listing_images/393b6ef120968ea1931a5ec86b58d041/icon/CIr75oPv944DEAE=.png" alt="Findter" class="w-full h-full object-cover"></div>
                        <span class="flex-1 truncate">Findter Custom Filter ...</span>
                        <div class="w-1 h-1 bg-[#303030] rounded-full mx-2"></div>
                    </a>
                    
                    <div class="flex flex-col mt-0.5 border-l-2 border-gray-300 ml-5 pl-3 space-y-0.5">
                        <a href="#" id="nav-app-home" data-page="home" class="app-sub-nav flex items-center px-2 py-1.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-300 py-1 px-2 rounded transition-colors cursor-pointer"><i class="fas fa-home w-5 text-center text-xs mr-1"></i>Homepage</a>
                        <a href="#" id="nav-filter" data-page="filter" class="app-sub-nav flex items-center px-2 py-1.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-300 py-1 px-2 rounded transition-colors cursor-pointer"><i class="fas fa-filter w-5 text-center text-xs mr-1"></i>Filter</a>
                        <a href="#" id="nav-search" data-page="search" class="app-sub-nav flex items-center px-2 py-1.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-300 py-1 px-2 rounded transition-colors cursor-pointer"><i class="fas fa-search w-5 text-center text-xs mr-1"></i>Search</a>
                        <a href="#" id="nav-metafield" data-page="metafield" class="app-sub-nav flex items-center px-2 py-1.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-300 py-1 px-2 rounded transition-colors cursor-pointer"><i class="fas fa-database w-5 text-center text-xs mr-1"></i>Metafield</a>
                        <a href="#" id="nav-design" data-page="design" class="app-sub-nav flex items-center px-2 py-1.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-300 py-1 px-2 rounded transition-colors cursor-pointer"><i class="fas fa-th-large w-5 text-center text-xs mr-1"></i>Filter & Product Grid Design</a>
                        <a href="#" id="nav-analytics-app" data-page="analytics-app" class="app-sub-nav flex items-center px-2 py-1.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-300 py-1 px-2 rounded transition-colors cursor-pointer"><i class="fas fa-chart-bar w-5 text-center text-xs mr-1"></i>Analytics</a>
                        <a href="#" id="nav-advanced" data-page="advanced" class="app-sub-nav flex items-center px-2 py-1.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-300 py-1 px-2 rounded transition-colors cursor-pointer"><i class="fas fa-cogs w-5 text-center text-xs mr-1"></i>Advanced Features</a>
                        <a href="#" id="nav-master" data-page="master" class="app-sub-nav flex items-center px-2 py-1.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-300 py-1 px-2 rounded transition-colors cursor-pointer"><i class="fas fa-star w-5 text-center text-xs mr-1"></i>Master</a>
                    </div>
                </div>
            </nav>
            <div class="p-4 mt-auto"><a href="#" class="flex items-center px-2 py-1.5 text-[13px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-md transition-colors"><i class="fas fa-cog w-6 text-center"></i> Settings</a></div>
        </aside>
`;
