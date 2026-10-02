(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const p={APP_TOGGLE_STATE:"findter_app_toggle_state",SEARCH_SUGGESTION_TOGGLE_STATE:"findter_search_suggestion_toggle_state",INDEXING_COMPLETE:"findter_indexing_complete",SELECTED_THEME:"findter_selected_theme",LAST_ENABLED_THEME:"findter_last_enabled_theme",FIRST_ENABLE_DONE:"findter_first_enable_done",REVIEW_SUBMITTED:"findter_review_submitted",FEEDBACK_STATE:"findter_feedback_state",THEME_COMPAT_PENDING:"findter_theme_compat_pending",THEME_COMPAT_RESOLVED:"findter_theme_compat_resolved",CRISP_REQUESTS:"findter_crisp_requests",COLLAB_CODE_RECEIVED:"findter_collab_code_received",HAS_ONBOARDED:"findter_has_onboarded",WELCOME_SEEN:"findter_welcome_seen_install",HIGHLIGHT_CONTINUE:"findter_highlight_continue_clicked",HIGHLIGHT_VIEW_FEATURE:"findter_highlight_view_feature",HIGHLIGHT_INDEX_COMPLETED_AT:"findter_highlight_index_completed_at",HIGHLIGHT_EXPIRED:"findter_highlight_screen_expired"},Fe="findter_highlight_session_hide",Ge="findter_highlight_back_target",ot="findter_highlight_items_v2",Qe=[{code:"filter",parentCode:null,standalone:!1,name:"Filter",thumbnail:"",media:"",enabled:!0,order:0,navigateUrl:"advanced.html"},{code:"filter-by-metafields",parentCode:"filter",name:"Filter by Metafields",thumbnail:"",media:"",enabled:!0,order:0,navigateUrl:"advanced.html",advancedFeatureId:1},{code:"image-swatches-filter",parentCode:"filter",name:"Image Swatches Filter",thumbnail:"",media:"",enabled:!0,order:1,navigateUrl:"advanced.html",advancedFeatureId:5},{code:"multi-filters-one-source",parentCode:"filter",name:"Multi-Filters by One Source",thumbnail:"",media:"",enabled:!0,order:2,navigateUrl:"advanced.html",advancedFeatureId:6},{code:"year-make-model",parentCode:null,standalone:!0,name:"Year Make Model",thumbnail:"",media:"",enabled:!0,order:1,navigateUrl:"advanced.html",advancedFeatureId:"sample-ymm"},{code:"market",parentCode:null,standalone:!1,name:"Market",thumbnail:"",media:"",enabled:!0,order:2,navigateUrl:"advanced.html"},{code:"local-currency-adaptation",parentCode:"market",name:"Local Currency Adaptation",thumbnail:"",media:"",enabled:!0,order:0,navigateUrl:"advanced.html",advancedFeatureId:4},{code:"merchandising",parentCode:null,standalone:!1,name:"Merchandising",thumbnail:"",media:"",enabled:!0,order:3,navigateUrl:"advanced.html"},{code:"boost-in-stock-products",parentCode:"merchandising",name:"Boost In-Stock Products",thumbnail:"",media:"",enabled:!0,order:0,navigateUrl:"advanced.html",advancedFeatureId:2},{code:"hide-out-of-stock-products",parentCode:"merchandising",name:"Hide Out-of-Stock Products",thumbnail:"",media:"",enabled:!0,order:1,navigateUrl:"advanced.html",advancedFeatureId:3}];function L(){try{const e=localStorage.getItem(ot);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}function K(e){localStorage.setItem(ot,JSON.stringify(e))}function Tt(){const e=L();if(e.length===0){K(Qe);return}const t={};e.forEach(s=>{t[s.code]=!0});let n=!1;Qe.forEach(s=>{t[s.code]||(e.push(s),n=!0)}),n&&K(e)}function xe(e){const t=L();let n=-1;t.forEach((s,a)=>{s.code===e.code&&(n=a)}),n===-1?t.push(e):t[n]=e,K(t)}function _t(e){const t=L().filter(n=>n.code!==e&&n.parentCode!==e);K(t)}Tt();const ae=new Map;function O(e,t){return ae.has(e)||ae.set(e,new Set),ae.get(e).add(t),()=>ae.get(e).delete(t)}function B(e,t){const n=ae.get(e);n&&n.forEach(s=>s(t))}const o={isIndexing:!0,indexingComplete:!1,appEnabled:!1,indexingStartTime:null,indexingDuration:2e4,selectedTheme:"",lastEnabledTheme:"",firstEnableDone:!1,flowCompleted:!1,hasEnabledInEditor:!1,indexingInterval:null,currentPage:"home",appToggleState:"off",searchSuggestionState:"off",hasOnboarded:!1};function Ct(){return o.indexingComplete&&o.appToggleState==="on"}function At(){const e=localStorage.getItem(p.APP_TOGGLE_STATE),t=localStorage.getItem(p.SEARCH_SUGGESTION_TOGGLE_STATE),n=localStorage.getItem(p.INDEXING_COMPLETE),s=localStorage.getItem(p.SELECTED_THEME),a=localStorage.getItem(p.LAST_ENABLED_THEME),i=localStorage.getItem(p.FIRST_ENABLE_DONE);e&&(o.appToggleState=e,o.appEnabled=e==="on"),t&&(o.searchSuggestionState=t),n==="true"&&(o.indexingComplete=!0,o.isIndexing=!1),s&&(o.selectedTheme=s),a&&(o.lastEnabledTheme=a),i==="true"&&(o.firstEnableDone=!0),localStorage.getItem(p.HAS_ONBOARDED)==="true"&&(o.hasOnboarded=!0),o.indexingComplete&&(o.hasOnboarded=!0,localStorage.getItem(p.HIGHLIGHT_INDEX_COMPLETED_AT)||localStorage.setItem(p.HIGHLIGHT_INDEX_COMPLETED_AT,String(Date.now())))}function Ht(){window.addEventListener("storage",e=>{B("storage",e)})}function ye(){const e=document.getElementById("editor-indexing-banner"),t=document.getElementById("enable-editor-modal-btn");e&&(o.indexingComplete?(e.className="rounded-lg p-4 mb-6 transition-all duration-300 bg-emerald-50 border border-emerald-200",e.innerHTML='<div class="flex items-start gap-3"><div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0 mt-0.5"><i class="fas fa-check-circle text-sm"></i></div><div class="flex-1"><p class="text-[14px] font-semibold text-emerald-800 mb-1">Data indexing is complete!</p><p class="text-[13px] text-emerald-700 leading-relaxed">You can now proceed to enable the app in your Theme Editor.</p></div></div>',t&&(t.disabled=!1,t.classList.remove("btn-disabled-overlay"))):(e.className="rounded-lg p-4 mb-6 transition-all duration-300 bg-amber-50 border border-amber-200",e.innerHTML='<div class="flex items-start gap-3"><div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0 mt-0.5 animate-pulse-custom"><i class="fas fa-exclamation-triangle text-sm"></i></div><div class="flex-1"><p class="text-[14px] font-semibold text-amber-800 mb-1">Please wait for indexing to complete</p><p class="text-[13px] text-amber-700 leading-relaxed">Up-to-date data are being collected. Please wait until this process is complete before continuing with the app.</p></div></div>',t&&(t.disabled=!0,t.classList.add("btn-disabled-overlay"))))}function q(){const e=document.getElementById("go-to-filter-btn"),t=document.getElementById("filter-lock-hint");e&&(e.disabled=!1),t&&t.classList.add("hidden"),ye()}function Mt(){q()}function Dt(){return'<button type="button" data-action="enable-app-from-banner" class="bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors shadow-sm inline-flex items-center gap-2"><i class="fas fa-external-link-alt text-xs"></i>Enable App in Theme Editor</button>'}function dt(){return'<div class="unified-status-banner indexing-state rounded-lg p-4 border border-amber-300"><div class="flex items-start gap-3"><div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0 mt-0.5 animate-pulse-custom"><i class="fas fa-exclamation-triangle text-sm"></i></div><div class="flex-1"><p class="text-[14px] font-semibold text-amber-800 mb-1">Collecting data</p><p class="text-[13px] text-amber-700 leading-relaxed">Up-to-date data are being collected. Please wait until this process is complete before continuing with the app.</p></div></div></div>'}function Nt(){return'<div class="unified-status-banner complete-state rounded-lg p-4 border border-amber-300"><div class="flex items-start gap-3"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0 mt-0.5"><i class="fas fa-check-circle text-sm"></i></div><div class="flex-1"><p class="text-[14px] font-semibold text-green-800 mb-1">Data indexing is completed.</p><p class="text-[13px] text-amber-700 leading-relaxed mb-3">Your data has been successfully indexed. To activate the app on your storefront, please enable it in your Theme Editor.</p>'+Dt()+"</div></div></div>"}function Ot(){return'<div class="unified-status-banner complete-state rounded-lg p-4 border border-amber-300"><div class="flex items-start gap-3"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0 mt-0.5"><i class="fas fa-check-circle text-sm"></i></div><div class="flex-1"><p class="text-[14px] font-semibold text-green-800 mb-1">Data indexing is completed.</p><p class="text-[13px] text-amber-700 leading-relaxed">Look through the features below, or start onboarding to activate Findter on your theme.</p></div></div></div>'}const Pt=["home","filter","search","metafield","design","analytics-app","advanced"];function Ft(e){return e==="home"?document.getElementById("unified-status-banner"):document.getElementById("unified-banner-"+e)}function V(){let e="",t=!0;o.indexingComplete?o.firstEnableDone?t=!1:e=Nt():e=dt(),Pt.forEach(s=>{const a=Ft(s);a&&(t?(a.classList.remove("hidden"),a.innerHTML=e):(a.classList.add("hidden"),a.innerHTML=""))});const n=document.getElementById("indexing-banner-container");n&&(n.classList.add("hidden"),n.innerHTML="")}function H(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const _=H;function we(e){e&&(e.classList.remove("hidden"),document.body.style.overflow="hidden")}function le(e){e&&(e.classList.add("hidden"),document.body.style.overflow="")}function Z(e){return!!(e&&!e.classList.contains("hidden"))}function Gt(){return'<span class="theme-live-badge">Live</span>'}function jt(){return'<span class="theme-status-badge theme-status-badge--success">Compatible</span>'}function Rt(){return'<span class="w-fit whitespace-nowrap border border-amber-200 bg-amber-50 text-amber-700 text-[11px] font-medium px-2 py-1 rounded-md inline-flex items-center gap-1.5"><i class="fas fa-circle-notch fa-spin text-[9px]"></i>Working on it</span>'}const Wt=["Allure","Atelier","Be Yours","Broadcast","Colorblock","Concept","Craft","Crave","Dawn","Dwell","Enterprise","Eurus","Expanse","Fabric","Flawless","Focal","Heritage","Horizon","Hyper","Ignite","Impulse","Next","Noom","Origin","Pipeline","Pitch","Publisher","Refresh","Ride","Rise","Ritual","Savor","Sense","Sleek","Spotlight","Stiletto","Studio","Taste","Tinker","Trade","Vessel","Vivid","Wonder","Xtra"],Ut=["Be Yours","Colorblock","Sense","Crave","Flawless","Hyper","Noom","Pitch","Ritual","Stiletto","Taste","Tinker","Vessel","Xtra"],Ze=["Allure","Be Yours","Colorblock","Atelier","Broadcast","Sense"],qt=Ze.concat(Wt.filter(e=>Ze.indexOf(e)===-1)),Vt=60*1e3,$t=3,Yt=1440*60*1e3;function Xt(e){return Ut.indexOf(e)===-1}function oe(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):{}}catch{return{}}}function zt(e){return!!oe(p.THEME_COMPAT_RESOLVED)[e]}function Kt(e){return!!oe(p.THEME_COMPAT_PENDING)[e]}function lt(e){const t=oe(p.THEME_COMPAT_PENDING);t[e]=!0,localStorage.setItem(p.THEME_COMPAT_PENDING,JSON.stringify(t))}function Jt(e){const t=oe(p.THEME_COMPAT_PENDING);delete t[e],localStorage.setItem(p.THEME_COMPAT_PENDING,JSON.stringify(t));const n=oe(p.THEME_COMPAT_RESOLVED);n[e]=!0,localStorage.setItem(p.THEME_COMPAT_RESOLVED,JSON.stringify(n))}function je(){try{const e=localStorage.getItem(p.CRISP_REQUESTS),t=e?JSON.parse(e):[],n=Date.now();return t.filter(s=>s&&s.theme&&n-s.ts<Yt)}catch{return[]}}function Qt(e){return je().some(t=>t.theme===e)}function Zt(e){const t=je();if(t.some(a=>a.theme===e))return"same_theme";const n=t.reduce((a,i)=>Math.max(a,i.ts),0);if(n&&Date.now()-n<Vt)return"cooldown";const s={};return t.forEach(a=>{s[a.theme]=!0}),Object.keys(s).length>=$t?"daily_limit":""}function en(e){const t=je();t.push({theme:e,ts:Date.now()}),localStorage.setItem(p.CRISP_REQUESTS,JSON.stringify(t))}function tn(e){return Xt(e)||zt(e)?"compatible":Kt(e)||Qt(e)?"pending":"incompatible"}let ue=0,Ae=!1,et=!1,ge=null;function ce(){return{bubble:document.getElementById("chat-bubble"),input:document.getElementById("chat-input"),messages:document.getElementById("chat-messages"),badge:document.getElementById("chat-badge")}}function W({hideBadge:e=!1}={}){const{bubble:t,badge:n}=ce();t&&t.classList.add("active"),e&&n&&n.classList.add("hidden")}function ct(){const{bubble:e}=ce();e&&e.classList.remove("active")}function nn(){const{bubble:e}=ce();e&&e.classList.toggle("active")}function an(){const{bubble:e}=ce();return!!(e&&e.classList.contains("active"))}function sn(e){ue=Date.now()+e}function N(e,t,n={}){const{messages:s}=ce();if(!s)return;const a=n.html?e:H(e),i=document.createElement("div");i.className="flex gap-2 "+(t?"justify-end":""),t?i.innerHTML='<div class="bg-red-600 text-white rounded-lg rounded-tr-none px-3 py-2 text-[13px] max-w-[85%]">'+a+"</div>":i.innerHTML='<div class="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0"><i class="fas fa-robot text-xs"></i></div><div class="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2 text-[13px] text-gray-700 max-w-[85%]">'+a+"</div>",s.appendChild(i),s.scrollTop=s.scrollHeight}function rn(e){const t=e.match(/\d+/g)||[];return t.length===1&&t[0].length===4}function on(e){lt(e),en(e),B("themes:changed"),W({hideBadge:!0}),N("Hi! I'd love to use Findter with the "+e+" theme, could you help make it compatible?",!0);let t="We've received your request to support the "+H(e)+" theme.";const n=localStorage.getItem(p.COLLAB_CODE_RECEIVED)==="true";!et&&!n&&(et=!0,Ae=!0,t+="<br><br>To proceed, please send us your collaborator code. You can find it by going to:<br>Shopify Admin &rarr; Settings &rarr; Users and permissions &rarr; Security &rarr; Store security &rarr; Collaborators &mdash; your code will be displayed there.<br><br>Once we receive your code, we&rsquo;ll send a collaboration request. Please grant us access when it arrives.<br><br>For your safety, we will duplicate your live theme and apply all fixes to the duplicated version, ensuring your live store remains unaffected"),setTimeout(()=>{N(t,!1,{html:!0})},800),ge=e}function dn(e){if(N(e,!0),rn(e)&&ge){const t=ge;ge=null,Ae=!1,localStorage.setItem(p.COLLAB_CODE_RECEIVED,"true"),setTimeout(()=>{N("Thanks for providing the information. Our team has received your request and will get back to you as soon as possible.",!1)},700),setTimeout(()=>{Jt(t),B("themes:changed"),N("Good news! "+t+" is now compatible with Findter, you're all set to select it.",!1)},4e3);return}if(Ae){setTimeout(()=>{N("Please check your code again. It needs to be 4 digits.",!1)},700);return}if(ue&&Date.now()<=ue){ue=0,setTimeout(()=>{N("Thanks for reaching out! 😊 We've received your message and our team is already on it, we'll get back to you as soon as possible.",!1)},700);return}setTimeout(()=>{N("Thank you! We'll respond soon.",!1)},600)}function ln(){const e=document.getElementById("send-chat-btn"),t=document.getElementById("chat-input"),n=document.getElementById("floating-chat-btn"),s=document.getElementById("close-chat-bubble");n&&n.addEventListener("click",()=>nn()),s&&s.addEventListener("click",()=>ct()),!(!e||!t)&&(e.addEventListener("click",()=>{const a=t.value.trim();a&&(t.value="",dn(a))}),t.addEventListener("keypress",a=>{a.key==="Enter"&&e.click()}))}function Re(){return document.getElementById("theme-picker-modal")}function tt(e){const t=document.getElementById("theme-request-notice");t&&(t.textContent=e,t.classList.remove("hidden"))}function pt(){const e=document.getElementById("theme-request-notice");e&&e.classList.add("hidden")}function J(){const e=document.getElementById("guide-theme-dropdown-label"),t=document.getElementById("theme-picker-list"),n=o.selectedTheme?o.selectedTheme:"-- No theme selected --";if(e&&(e.textContent=n),!t)return;let s="";qt.forEach((a,i)=>{const r=o.selectedTheme===a,d=tn(a),c=d==="compatible",l=_(a),m=i===0?Gt():"";let u;d==="compatible"?u=jt():d==="pending"?u=Rt():u='<button type="button" class="w-fit whitespace-nowrap border border-gray-300 bg-white text-[#303030] text-[11px] font-medium px-2 py-1 rounded-md hover:bg-gray-100 transition-colors" data-howto-theme="'+l+'">Make compatible</button>',s+='<div class="grid grid-cols-[1fr_170px] items-center py-2.5 border-b border-gray-50 '+(r?"bg-blue-50 ":"")+(c?"cursor-pointer hover:bg-[#f7f7f7] ":"")+'" '+(c?'data-theme="'+l+'"':"")+'><div class="pl-6 pr-3 flex items-center gap-2 text-[14px] font-medium text-[#303030]">'+_(a)+m+'</div><div class="pl-3 pr-6 flex justify-center">'+u+"</div></div>"}),t.innerHTML=s}function z(){const e=Re();e&&(pt(),we(e),J())}function se(){le(Re())}function cn(){const e=document.getElementById("close-theme-picker-modal-btn"),t=document.getElementById("theme-picker-modal-overlay"),n=document.getElementById("theme-picker-list");e&&e.addEventListener("click",se),t&&t.addEventListener("click",se),n&&n.addEventListener("click",s=>{const a=s.target.closest("[data-howto-theme]");if(a){const r=a.getAttribute("data-howto-theme"),d=Zt(r);if(d==="cooldown"){tt("Wait a minute before requesting another theme.");return}if(d==="daily_limit"){tt("You can request up to 3 themes a day.");return}if(d==="same_theme"){lt(r),J();return}pt(),on(r),se();return}const i=s.target.closest("[data-theme]");i&&(o.selectedTheme=i.getAttribute("data-theme"),localStorage.setItem(p.SELECTED_THEME,o.selectedTheme),J(),B("theme:chosen"),se(),setTimeout(()=>B("open-editor-modal"),200))})}O("open-theme-picker",()=>z());O("themes:changed",()=>{Z(Re())&&J()});const Q={used:1595,limit:5e4},pn=1595,nt=52e3,un="flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600 whitespace-nowrap",gn="flex items-center gap-2 px-2.5 py-1 rounded-md border border-green-200 bg-white text-[11px] font-semibold text-green-700 whitespace-nowrap",mn="flex items-center gap-2 px-2.5 py-1 rounded-md border border-yellow-200 bg-yellow-100 text-[11px] font-semibold text-[#303030] whitespace-nowrap";let He=1;function fn(e){He=e}function bn(e){const t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),s=e.getFullYear();return t+"/"+n+"/"+s}function xn(){return Q.used.toLocaleString("en-US")+" / "+Q.limit.toLocaleString("en-US")}function at(e,t){const n=Q.used>Q.limit;e.className=n?mn:gn,t.className=n?"w-2 h-2 rounded-full bg-yellow-600":"w-2 h-2 rounded-full bg-green-500"}function ut(){const e=document.getElementById("status-plan-expiry-row"),t=document.getElementById("status-plan-expiry-label"),n=document.getElementById("status-plan-expiry");if(!e||!t||!n)return;const s=new Date;s.setHours(12,0,0,0),s.setDate(s.getDate()+He);const a=He<=0;t.textContent=a?"Expired":"Expires",n.textContent=bn(s),n.className=a?"inline-flex items-center px-2.5 py-1 rounded-md border border-yellow-300 bg-yellow-50 text-[11px] font-semibold tabular-nums text-[#303030]":"inline-flex items-center px-2.5 py-1 rounded-md border border-[#e3e3e3] bg-white text-[11px] font-semibold tabular-nums text-[#303030]"}function Me(){const e=document.getElementById("plan-usage-label"),t=document.getElementById("plan-usage-count"),n=document.getElementById("plan-usage-status"),s=document.getElementById("plan-usage-dot"),a=document.getElementById("plan-usage-status-text");if(!e||!t||!n||!s||!a)return;const i=o.appToggleState==="on"&&o.firstEnableDone,r=xn();if(!o.indexingComplete){e.textContent="Products",t.classList.add("hidden"),n.className=un,s.className="w-2 h-2 rounded-full bg-gray-400",a.textContent="Collecting data";return}if(!i){e.textContent="Products",t.classList.add("hidden"),at(n,s),a.textContent=r;return}e.textContent="Products indexed",t.classList.add("hidden"),at(n,s),a.textContent=r}function F(){const e=o.appToggleState==="on"&&o.firstEnableDone,t=o.searchSuggestionState==="on",n=document.getElementById("status-app-embed"),s=document.getElementById("status-search-suggestion"),a=document.getElementById("status-app-plan");n&&(n.className=e?"flex items-center gap-2 px-2.5 py-1 rounded-md border border-green-200 bg-white text-[11px] font-semibold text-green-700":"flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600",n.innerHTML=e?'<span class="w-2 h-2 rounded-full bg-green-500"></span>Active':'<span class="w-2 h-2 rounded-full bg-gray-400"></span>Inactive'),s&&(s.className=t?"flex items-center gap-2 px-2.5 py-1 rounded-md border border-green-200 bg-white text-[11px] font-semibold text-green-700":"flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600",s.innerHTML=t?'<span class="w-2 h-2 rounded-full bg-green-500"></span>Active':'<span class="w-2 h-2 rounded-full bg-gray-400"></span>Inactive'),a&&(a.className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-blue-200 bg-white text-[11px] font-semibold text-blue-700",a.innerHTML='<span class="w-2 h-2 rounded-full bg-blue-500"></span>Trial'),ut(),Me()}const hn=`
                <div id="page-master" class="page-view">
                    <div class="max-w-[1040px] mx-auto">
                        <div class="mb-6"><h1 class="text-[22px] font-bold text-[#303030]">Master</h1></div>
                        <div id="master-tabs" class="flex gap-2 border-b border-gray-200 mb-5"></div>
                        <div id="master-tab-content"></div>
                    </div>
                </div>
`;function vn(e,t,n){const s=_(e.code),a=n?'<button type="button" class="group-expand-toggle text-gray-400 hover:text-gray-600 mr-1.5" data-code="'+s+'"><i class="fas fa-chevron-'+(t?"down":"right")+' text-[10px]"></i></button>':'<span class="inline-block w-[18px]"></span>';return'<tr class="highlight-row border-b border-gray-100 bg-gray-50/60" draggable="true" data-code="'+s+'" data-parent=""><td class="px-3 py-2.5 text-gray-400 cursor-grab w-8"><i class="fas fa-grip-vertical"></i></td><td class="px-3 py-2.5 text-[13px] text-[#303030] font-semibold">'+a+H(e.name)+'</td><td class="px-3 py-2.5"><button type="button" class="highlight-status-toggle w-9 h-5 rounded-full relative transition-colors '+(e.enabled?"bg-green-500":"bg-gray-300")+'" data-code="'+s+'"><span class="absolute top-0.5 '+(e.enabled?"right-0.5":"left-0.5")+' w-4 h-4 bg-white rounded-full shadow transition-all"></span></button></td><td class="px-3 py-2.5 text-[12px]">'+(e.standalone?'<span class="font-medium text-green-700">Yes</span>':'<span class="text-gray-400">No</span>')+'</td><td class="px-3 py-2.5 text-right whitespace-nowrap"><button type="button" class="highlight-edit-btn text-gray-500 hover:text-[#303030] px-2" data-code="'+s+'"><i class="fas fa-pen text-xs"></i></button><button type="button" class="highlight-delete-btn text-gray-500 hover:text-red-600 px-2" data-code="'+s+'"><i class="fas fa-trash text-xs"></i></button></td></tr>'}function yn(e){const t=_(e.code);return'<tr class="highlight-row border-b border-gray-100" draggable="true" data-code="'+t+'" data-parent="'+_(e.parentCode)+'"><td class="px-3 py-2.5 text-gray-400 cursor-grab w-8"><i class="fas fa-grip-vertical"></i></td><td class="px-3 py-2.5 text-[13px] text-gray-600 pl-8"><span class="text-gray-300 mr-1">&#8627;</span>'+H(e.name)+'</td><td class="px-3 py-2.5"><button type="button" class="highlight-status-toggle w-9 h-5 rounded-full relative transition-colors '+(e.enabled?"bg-green-500":"bg-gray-300")+'" data-code="'+t+'"><span class="absolute top-0.5 '+(e.enabled?"right-0.5":"left-0.5")+' w-4 h-4 bg-white rounded-full shadow transition-all"></span></button></td><td class="px-3 py-2.5"></td><td class="px-3 py-2.5 text-right whitespace-nowrap"><button type="button" class="highlight-edit-btn text-gray-500 hover:text-[#303030] px-2" data-code="'+t+'"><i class="fas fa-pen text-xs"></i></button><button type="button" class="highlight-delete-btn text-gray-500 hover:text-red-600 px-2" data-code="'+t+'"><i class="fas fa-trash text-xs"></i></button></td></tr>'}function wn(e,t){return'<button type="button" id="'+e+'" class="w-9 h-5 rounded-full relative transition-colors shrink-0 '+(t?"bg-green-500":"bg-gray-300")+'"><span class="absolute top-0.5 '+(t?"right-0.5":"left-0.5")+' w-4 h-4 bg-white rounded-full shadow transition-all"></span></button>'}function En(e,t){const n=!t;e.classList.toggle("bg-green-500",n),e.classList.toggle("bg-gray-300",!n);const s=e.querySelector("span");return s&&(s.classList.toggle("right-0.5",n),s.classList.toggle("left-0.5",!n)),n}const U=5;function he(e){return String(e||"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function ve(e,t,n){const s=i=>t.some(r=>r.code===i&&r.code!==n);if(!s(e))return e;let a=2;for(;s(e+"-"+a);)a+=1;return e+"-"+a}function We(e){return'<div class="p-5 space-y-3 border-b border-gray-100"><div><label class="block text-[12px] text-gray-500 mb-1">Thumbnail Link</label><input type="text" id="highlight-thumbnail-input" value="'+_(e.thumbnail||"")+'" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="https://... (image URL)"></div><div><label class="block text-[12px] text-gray-500 mb-1">Media Link (image or video)</label><input type="text" id="highlight-media-input" value="'+_(e.media||"")+'" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="https://..."></div></div><div class="p-5"><label class="block text-[12px] text-gray-500 mb-1">Navigate URL</label><input type="text" id="highlight-navigate-input" value="'+_(e.navigateUrl||"")+'" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="filter or advanced#filter"></div>'}function Ue(e,t){const n=document.getElementById("highlight-form-back-btn"),s=document.getElementById("highlight-form-cancel-btn"),a=document.getElementById("highlight-enabled-toggle");n&&n.addEventListener("click",t),s&&s.addEventListener("click",t),a&&a.addEventListener("click",()=>{e.enabled=En(a,e.enabled)})}function qe(e){return wn("highlight-enabled-toggle",e)}function In(){const e=document.getElementById("highlight-table-body");if(!e)return;let t=null;e.querySelectorAll("tr.highlight-row").forEach(n=>{n.addEventListener("dragstart",()=>{t=n,n.classList.add("opacity-50")}),n.addEventListener("dragend",()=>{n.classList.remove("opacity-50"),t=null}),n.addEventListener("dragover",s=>{if(s.preventDefault(),!t||t===n||t.getAttribute("data-parent")!==n.getAttribute("data-parent"))return;const a=n.getBoundingClientRect(),i=s.clientY-a.top<a.height/2;e.insertBefore(t,i?n:n.nextSibling)}),n.addEventListener("drop",s=>{s.preventDefault(),kn()})})}function kn(){const e=document.getElementById("highlight-table-body");if(!e)return;const t=L(),n={};Array.prototype.forEach.call(e.querySelectorAll("tr.highlight-row"),s=>{const a=s.getAttribute("data-parent")||"";n[a]||(n[a]=[]),n[a].push(s.getAttribute("data-code"))}),Object.keys(n).forEach(s=>{n[s].forEach((a,i)=>{const r=t.filter(d=>d.code===a)[0];r&&(r.order=i)})}),K(t),B("master:show-list")}function st(e){const t=document.getElementById("master-tab-content");if(!t)return;const n=L(),s=e?n.filter(l=>l.code===e)[0]:null,a=!s,i=s?Object.assign({},s):{code:"",standalone:!1,name:"",thumbnail:"",media:"",enabled:!0,order:0,navigateUrl:""};t.innerHTML='<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden"><div class="p-5 border-b border-gray-100 flex items-center justify-between"><button type="button" id="highlight-form-back-btn" class="text-[13px] text-gray-500 hover:text-[#303030] inline-flex items-center gap-1"><i class="fas fa-arrow-left text-xs"></i> Back</button><h3 class="font-semibold text-[15px] text-[#303030]">'+(a?"Add group":"Edit group")+'</h3></div><div class="p-5 space-y-3 border-b border-gray-100"><div class="flex items-end justify-between gap-3"><div class="flex-1"><label class="block text-[12px] text-gray-500 mb-1">Group Name</label><input type="text" id="highlight-name-input" value="'+_(i.name)+'" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="Filter"></div><div class="pb-2">'+qe(i.enabled)+'</div></div><label class="flex items-start gap-2 cursor-pointer"><input type="checkbox" id="highlight-standalone-input" '+(i.standalone?"checked":"")+' class="w-4 h-4 rounded border-gray-300 mt-0.5"><span class="text-[13px] text-[#303030]">Standalone: tick if this Group is itself a Feature (e.g. Year Make Model)</span></label></div><div id="standalone-fields" class="'+(i.standalone?"":"hidden")+'">'+We(i)+'</div><div class="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-200 bg-gray-50"><button type="button" id="highlight-form-cancel-btn" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors">Cancel</button><button type="button" id="highlight-form-save-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">Save</button></div></div>',Ue(i,()=>B("master:show-list"));const r=document.getElementById("highlight-standalone-input"),d=document.getElementById("standalone-fields");r&&r.addEventListener("change",()=>{i.standalone=r.checked,d&&d.classList.toggle("hidden",!i.standalone)});const c=document.getElementById("highlight-form-save-btn");c&&c.addEventListener("click",()=>{const l=document.getElementById("highlight-name-input").value.trim();if(!l){alert("Group Name is required.");return}const m=document.getElementById("highlight-thumbnail-input"),u=document.getElementById("highlight-media-input"),v=document.getElementById("highlight-navigate-input"),x=L(),E=a?ve(he(l)||"group",x,i.code):i.code,w=x.filter(M=>!M.parentCode&&M.code!==i.code).length,S={code:E,parentCode:null,standalone:!!i.standalone,name:l,thumbnail:m?m.value.trim():i.thumbnail||"",media:u?u.value.trim():i.media||"",enabled:i.enabled,order:a?w:i.order,navigateUrl:v?v.value.trim():i.navigateUrl||"",unlocked:i.unlocked||!1,active:i.active!==!1,advancedFeatureId:i.advancedFeatureId};xe(S),a&&!S.standalone?B("master:add-feature",E):B("master:show-list")})}function De(e,t){const n=document.getElementById("master-tab-content");if(!n)return;const s=L(),a=s.filter(l=>l.code===e)[0];if(!a){B("master:show-list");return}const i=t?s.filter(l=>l.code===t)[0]:null,r=!i,d=i?Object.assign({},i):{code:"",name:"",thumbnail:"",media:"",enabled:!0,order:0,navigateUrl:a.navigateUrl||""};n.innerHTML='<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden"><div class="p-5 border-b border-gray-100 flex items-center justify-between"><button type="button" id="highlight-form-back-btn" class="text-[13px] text-gray-500 hover:text-[#303030] inline-flex items-center gap-1"><i class="fas fa-arrow-left text-xs"></i> Back</button><h3 class="font-semibold text-[15px] text-[#303030]">'+(r?"Add feature: ":"Edit feature: ")+H(a.name)+'</h3></div><div class="p-5 space-y-3 border-b border-gray-100"><div class="flex items-end justify-between gap-3"><div class="flex-1"><label class="block text-[12px] text-gray-500 mb-1">Title</label><input type="text" id="highlight-name-input" value="'+_(d.name)+'" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="Merged Value Group"></div><div class="pb-2">'+qe(d.enabled)+"</div></div></div>"+We(d)+'<div class="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-200 bg-gray-50"><button type="button" id="highlight-form-cancel-btn" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors">Cancel</button><button type="button" id="highlight-form-save-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">Save</button></div></div>',Ue(d,()=>B("master:show-list"));const c=document.getElementById("highlight-form-save-btn");c&&c.addEventListener("click",()=>{const l=document.getElementById("highlight-name-input").value.trim();if(!l){alert("Title is required.");return}const m=document.getElementById("highlight-thumbnail-input"),u=document.getElementById("highlight-media-input"),v=document.getElementById("highlight-navigate-input"),x=L(),E=x.filter(S=>S.parentCode===e&&S.code!==d.code).length;if(r&&E>=U){alert("This group already has the maximum of "+U+" sub-features.");return}const w=r?ve(he(e+"-"+l)||e+"-feature",x,d.code):d.code;xe({code:w,parentCode:e,name:l,thumbnail:m.value.trim(),media:u.value.trim(),enabled:d.enabled,order:r?E:d.order,navigateUrl:v.value.trim(),unlocked:d.unlocked||!1,active:d.active!==!1,advancedFeatureId:d.advancedFeatureId}),B("master:show-list")})}function Sn(){const e=document.getElementById("master-tab-content");if(!e)return;const t=L(),n=t.filter(l=>l.parentCode||l.standalone?!1:t.filter(u=>u.parentCode===l.code).length<U).sort((l,m)=>l.order-m.order),s={enabled:!0,thumbnail:"",media:"",navigateUrl:""},a=n.map(l=>'<option value="'+_(l.code)+'">'+H(l.name)+"</option>").join("")+'<option value="__new__">+ Create new group</option>';e.innerHTML='<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden"><div class="p-5 border-b border-gray-100 flex items-center justify-between"><button type="button" id="highlight-form-back-btn" class="text-[13px] text-gray-500 hover:text-[#303030] inline-flex items-center gap-1"><i class="fas fa-arrow-left text-xs"></i> Back</button><h3 class="font-semibold text-[15px] text-[#303030]">Add feature</h3></div><div class="p-5 space-y-3 border-b border-gray-100"><div><label class="block text-[12px] text-gray-500 mb-1">Parent Group</label><select id="highlight-group-select" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px] bg-white">'+a+'</select></div><div id="new-group-name-field" class="hidden"><label class="block text-[12px] text-gray-500 mb-1">New Group Name</label><input type="text" id="highlight-new-group-name-input" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="e.g. Merchandising"></div><div class="flex items-end justify-between gap-3"><div class="flex-1"><label class="block text-[12px] text-gray-500 mb-1">Title</label><input type="text" id="highlight-name-input" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="Feature title"></div><div class="pb-2">'+qe(!0)+"</div></div></div>"+We(s)+'<div class="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-200 bg-gray-50"><button type="button" id="highlight-form-cancel-btn" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors">Cancel</button><button type="button" id="highlight-form-save-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">Save</button></div></div>',Ue(s,()=>B("master:show-list"));const i=document.getElementById("highlight-group-select"),r=document.getElementById("new-group-name-field"),d=()=>{const l=!i||i.value==="__new__";r&&r.classList.toggle("hidden",!l)};d(),i&&i.addEventListener("change",d);const c=document.getElementById("highlight-form-save-btn");c&&c.addEventListener("click",()=>{const l=document.getElementById("highlight-name-input").value.trim();if(!l){alert("Title is required.");return}let m=L(),u;if(!i||i.value==="__new__"){const M=document.getElementById("highlight-new-group-name-input"),G=M?M.value.trim():"";if(!G){alert("Enter a name for the new group.");return}u=ve(he(G)||"group",m,null);const A=m.filter(Y=>!Y.parentCode).length;xe({code:u,parentCode:null,standalone:!1,name:G,thumbnail:"",media:"",enabled:!0,order:A,navigateUrl:""}),m=L()}else u=i.value;const v=m.filter(M=>M.parentCode===u).length;if(v>=U){alert("This group already has the maximum of "+U+" sub-features.");return}const x=ve(he(u+"-"+l)||u+"-feature",m,null),E=document.getElementById("highlight-thumbnail-input"),w=document.getElementById("highlight-media-input"),S=document.getElementById("highlight-navigate-input");xe({code:x,parentCode:u,name:l,thumbnail:E.value.trim(),media:w.value.trim(),navigateUrl:S.value.trim(),enabled:s.enabled,order:v,unlocked:!1,active:!0}),B("master:show-list")})}const Ne={};function Ln(){return hn}function Bn(){const e=document.getElementById("master-tabs");e&&(e.innerHTML='<button type="button" class="master-tab-btn px-4 py-2 text-[13px] font-semibold border-b-2 border-[#303030] text-[#303030]">Highlight Features</button>')}function ie(){const e=document.getElementById("master-tab-content");if(!e)return;const t=L(),n=t.filter(a=>!a.parentCode).sort((a,i)=>a.order-i.order);let s="";n.forEach(a=>{const i=a.standalone?[]:t.filter(d=>d.parentCode===a.code).sort((d,c)=>d.order-c.order),r=!Ne[a.code];s+=vn(a,r,!a.standalone),!a.standalone&&r&&(i.forEach(d=>{s+=yn(d)}),i.length<U?s+='<tr class="border-b border-gray-100"><td></td><td colspan="4" class="pl-8 pb-2.5 pt-1"><button type="button" class="add-feature-btn text-[12px] text-gray-500 hover:text-[#303030] inline-flex items-center gap-1" data-group="'+a.code+'"><i class="fas fa-plus text-[10px]"></i> Add Feature</button></td></tr>':s+='<tr class="border-b border-gray-100"><td></td><td colspan="4" class="pl-8 pb-2.5 pt-1 text-[12px] text-gray-400">Maximum of '+U+" sub-features reached</td></tr>")}),s||(s='<tr><td colspan="5" class="px-3 py-6 text-center text-[13px] text-gray-500">No groups yet, click "Add Group" to create one.</td></tr>'),e.innerHTML='<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden"><div class="p-5 flex items-center justify-between border-b border-gray-100"><h3 class="font-semibold text-[15px] text-[#303030]">Highlight feature</h3><button type="button" id="add-group-btn" class="bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">Add Group</button></div><div class="overflow-x-auto"><table class="w-full text-left"><thead class="bg-gray-50 border-b border-gray-100"><tr class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide"><th class="px-3 py-2 w-8">#</th><th class="px-3 py-2">Group Name</th><th class="px-3 py-2">Status</th><th class="px-3 py-2">Standalone</th><th class="px-3 py-2 text-right">Action</th></tr></thead><tbody id="highlight-table-body">'+s+'</tbody></table></div><div class="p-4 border-t border-gray-100 flex justify-center"><button type="button" id="add-feature-global-btn" class="text-[13px] text-gray-600 hover:text-[#303030] font-medium inline-flex items-center gap-1"><i class="fas fa-plus text-[10px]"></i> Add Feature</button></div></div>',Tn()}function Tn(){const e=document.getElementById("add-group-btn");e&&e.addEventListener("click",()=>st(null));const t=document.getElementById("add-feature-global-btn");t&&t.addEventListener("click",()=>Sn()),document.querySelectorAll(".group-expand-toggle").forEach(n=>{n.addEventListener("click",s=>{s.stopPropagation();const a=n.getAttribute("data-code");Ne[a]=!Ne[a],ie()})}),document.querySelectorAll(".add-feature-btn").forEach(n=>{n.addEventListener("click",()=>De(n.getAttribute("data-group"),null))}),document.querySelectorAll(".highlight-edit-btn").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-code"),a=L().filter(i=>i.code===s)[0];a&&(a.parentCode?De(a.parentCode,s):st(s))})}),document.querySelectorAll(".highlight-delete-btn").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-code"),a=L().filter(d=>d.code===s)[0],r=a&&!a.parentCode?"Are you sure you want to delete this group? All features inside it will be deleted too.":"Are you sure you want to delete this feature?";confirm(r)&&(_t(s),ie())})}),document.querySelectorAll(".highlight-status-toggle").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-code"),a=L(),i=a.filter(d=>d.code===s)[0];if(!i)return;const r=!i.enabled;i.enabled=r,i.parentCode||a.forEach(d=>{d.parentCode===s&&(d.enabled=r)}),K(a),ie()})}),In()}function _n(){Bn(),ie()}function Cn(e){const t=document.getElementById("master-shortcut-btn");t&&t.addEventListener("click",()=>e("master"))}O("master:show-list",()=>ie());O("master:add-feature",e=>De(e,null));function Ve(){const e=document.getElementById("hf-banner-container"),t=document.getElementById("hf-continue-container");!e||!t||(o.indexingComplete?(e.innerHTML=Ot(),t.classList.remove("hidden")):(e.innerHTML=dt(),t.classList.add("hidden")))}let gt=null;function An(e){gt=e?{code:e.code,name:e.name}:null}function Hn(){return gt}const Mn={home:"Homepage",filter:"Filter",search:"Search",metafield:"Metafield",design:"Filter & product grid design","analytics-app":"Analytics",advanced:"Advanced features"},Dn={filter:"filter",search:"search",metafield:"database",design:"th-large","analytics-app":"chart-bar",advanced:"cogs"};function Nn(e){return e?{wrap:"bg-blue-100",icon:"text-blue-500",hint:"text-blue-600"}:{wrap:"bg-gray-100",icon:"text-gray-500",hint:"text-gray-500"}}function On(e){return[{title:"Configuration",icon:"cog",desc:"Main settings"},{title:"Display options",icon:"palette",desc:"Visual customization"},{title:"Advanced settings",icon:"sliders-h",desc:"Fine-tuning options"}].map(n=>'<div class="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors '+(e?"opacity-75":"")+'"><div class="flex items-center gap-3 mb-3"><div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"><i class="fas fa-'+n.icon+' text-gray-500 text-sm"></i></div><h4 class="font-medium text-[14px] text-[#303030]">'+n.title+'</h4></div><p class="text-[12px] text-gray-500">'+n.desc+"</p>"+(e?'<div class="mt-3 text-[11px] text-blue-500 font-medium"><i class="fas fa-eye mr-1"></i> Preview available</div>':"")+"</div>").join("")}function Pn(e,t){const n=H(t.name);e.innerHTML='<article id="advanced-feature-focus" tabindex="-1" class="bg-white rounded-[8px] shadow-sm border border-[#303030] p-8 outline-none focus:ring-2 focus:ring-[#303030]"><p class="text-[12px] font-semibold text-[#616161] mb-2">Advanced features</p><h2 class="text-[18px] font-semibold text-[#303030]">'+n+'</h2><p class="text-[13px] text-[#616161] mt-2">This feature is in focus from Highlight Features.</p></article>';const s=e.querySelector("#advanced-feature-focus");s&&(s.focus({preventScroll:!0}),s.scrollIntoView({block:"center"}))}function Ee(e){const t=document.getElementById(e+"-page-content");if(!t)return;if(e==="advanced"){const i=Hn();if(i){Pn(t,i);return}}const n=!Ct(),s=Nn(n),a=Dn[e]||"file";t.innerHTML='<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 p-8"><div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 '+s.wrap+' rounded-xl flex items-center justify-center"><i class="fas fa-'+a+" "+s.icon+' text-xl"></i></div><div><h2 class="text-[18px] font-semibold text-[#303030]">'+(Mn[e]||"")+'</h2><p class="text-[13px] '+s.hint+'">'+(n?'<i class="fas fa-info-circle mr-1"></i> Available for preview':"Configure settings here")+'</p></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">'+On(n)+"</div></div>"}function C(e){document.querySelectorAll(".page-view").forEach(n=>n.classList.remove("active"));const t=document.getElementById("page-"+e);t&&(t.classList.add("active"),o.currentPage=e,document.querySelectorAll("[data-page]").forEach(n=>{n.classList.remove("nav-active"),n.getAttribute("data-page")===e&&n.classList.add("nav-active")}),e==="master"?_n():e!=="highlight-feature"&&Ee(e),B("navigate",e),e==="highlight-feature"?Ve():V())}function Fn(){document.querySelectorAll("[data-page]").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault();const s=t.getAttribute("data-page");if(s){if(s==="advanced"){window.open("advanced.html","_blank");return}C(s)}})});const e=document.getElementById("app-header-title");e&&e.addEventListener("click",t=>{t.preventDefault(),C("home")})}function $e(){if(!o.indexingComplete){alert("Please wait for indexing to complete first.");return}console.log("Opening Editor.html with auto-enable..."),B("set-app-toggle","on"),o.hasEnabledInEditor=!0,o.firstEnableDone=!0,o.lastEnabledTheme=o.selectedTheme,localStorage.setItem(p.FIRST_ENABLE_DONE,"true"),localStorage.setItem(p.LAST_ENABLED_THEME,o.lastEnabledTheme),window.open("Editor.html?autoEnable=1","_blank"),B("guide:refresh")}function Gn(){if(!o.indexingComplete){alert("Please wait for indexing to complete first.");return}if(!o.selectedTheme){z();return}window.open("Editor.html?autoEnableSuggestion=1","_blank")}function jn(){if(!o.indexingComplete){alert("Please wait for indexing to complete first.");return}if(!o.selectedTheme){z();return}$e()}function Ie(){const e=document.querySelector('.step-checkbox[data-step="1"]'),t=document.querySelector('.step-checkbox[data-step="2"]'),n=document.querySelector('.step-checkbox[data-step="3"]'),s=document.querySelector('.step-checkbox[data-step="4"]'),a=e?e.getAttribute("data-completed")==="true":!1,i=t?t.getAttribute("data-completed")==="true":!1,r=n?n.getAttribute("data-completed")==="true":!1,d=s?s.getAttribute("data-completed")==="true":!1,c=4,l=[a,i,r,d].filter(Boolean).length,m=l/c*100,u=document.getElementById("progress-bar"),v=document.getElementById("progress-text");u&&(u.style.width=m+"%",u.className="bg-black h-full rounded-full transition-all duration-500",l===1?u.classList.add("bg-black"):l===2?u.classList.add("bg-yellow-400"):l===3?u.classList.add("bg-green-500"):u.classList.add("bg-gray-400")),v&&(v.innerText=l+"/"+c+" completed");const x=document.getElementById("congrat-message-container");x&&(a&&r?(x.innerHTML='<div class="p-3 bg-green-50 border border-green-100 rounded-lg flex items-start gap-3"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0"><i class="fas fa-rocket"></i></div><div class="flex-1"><p class="text-[13px] font-semibold text-green-800 leading-tight">Great job! Basic setup is complete. Explore our <a href="#" class="underline font-bold text-green-700 hover:text-green-900">advanced features</a>.</p><p class="text-[11px] text-green-700 mt-0.5">You can always reopen the guide to review steps.</p></div></div>',x.classList.remove("hidden")):(x.classList.add("hidden"),x.innerHTML=""))}function de(){const e=document.getElementById("step4-checkbox");if(!e)return;const t=o.searchSuggestionState==="on";e.setAttribute("data-completed",t?"true":"false"),e.classList.toggle("bg-[#303030]",t),e.classList.toggle("text-white",t),e.classList.toggle("border-2",!t),e.classList.toggle("border-dashed",!t),e.classList.toggle("border-gray-400",!t),e.classList.toggle("bg-white",!t);const n=e.querySelector(".fa-check");n&&n.classList.toggle("text-transparent",!t),Ie()}function $(){const e=document.getElementById("step1-initial"),t=document.getElementById("step1-completed"),n=document.getElementById("step1-checkbox"),s=document.getElementById("guide-theme-dropdown-label"),a=document.getElementById("guide-theme-live-pill"),i=document.getElementById("guide-enable-editor-btn"),r=!!o.selectedTheme,d=o.appToggleState==="on",c=o.selectedTheme&&o.selectedTheme===o.lastEnabledTheme,l=r&&o.firstEnableDone,m=o.firstEnableDone&&d&&c;if(e&&t&&(l?(e.classList.add("hidden"),t.classList.remove("hidden")):(e.classList.remove("hidden"),t.classList.add("hidden"))),s&&(s.textContent=o.selectedTheme||"-- No theme selected --"),a&&a.classList.toggle("hidden",!m),J(),n){const u=o.firstEnableDone&&d&&c;n.setAttribute("data-completed",u?"true":"false"),n.classList.toggle("bg-[#303030]",u),n.classList.toggle("text-white",u),n.classList.toggle("border-2",!u),n.classList.toggle("border-dashed",!u),n.classList.toggle("border-gray-400",!u),n.classList.toggle("bg-white",!u);const v=n.querySelector(".fa-check");v&&v.classList.toggle("text-transparent",!u)}if(i){const u=r&&o.indexingComplete&&(!d||!c);i.classList.toggle("hidden",!u)}Ie(),F(),de()}function Rn(){const e=o.firstEnableDone&&o.appToggleState==="on"&&o.selectedTheme===o.lastEnabledTheme,t=o.searchSuggestionState==="on";return e&&t}function Wn(){const e=document.querySelector('.guide-toggle[data-target="guide-body-1"]'),t=document.getElementById("guide-body-1");!e||!t||(e.setAttribute("aria-expanded","false"),e.innerHTML='<i class="fas fa-chevron-down"></i>',t.classList.add("hidden"))}function Un(){const e=document.querySelector('.guide-toggle[data-target="guide-body-1"]'),t=document.getElementById("guide-body-1");!e||!t||(e.setAttribute("aria-expanded","true"),e.innerHTML='<i class="fas fa-chevron-up"></i>',t.classList.remove("hidden"))}function qn(){const e=document.getElementById("onboarding-guide-card");e&&(e.classList.remove("guide-attention-animation"),e.offsetWidth,e.classList.add("guide-attention-animation"),e.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{e.classList.remove("guide-attention-animation")},1200))}function Vn(){C("home"),Un(),requestAnimationFrame(()=>{const e=document.getElementById("onboarding-guide-card");e&&(e.classList.remove("guide-attention-animation"),e.offsetWidth,e.classList.add("guide-attention-animation"),e.scrollIntoView({behavior:"smooth",block:"start"}))})}function $n(){const e=document.getElementById("step4-checkbox");document.querySelectorAll(".step-checkbox").forEach(r=>{r.addEventListener("click",d=>{if(d.stopPropagation(),r===e){const m=o.searchSuggestionState==="on"?"off":"on";o.searchSuggestionState=m,localStorage.setItem(p.SEARCH_SUGGESTION_TOGGLE_STATE,m),F(),de();return}const c=r.getAttribute("data-completed")==="true",l=r.querySelector(".fa-check");c?(r.setAttribute("data-completed","false"),r.classList.remove("bg-[#303030]","text-white"),r.classList.add("border-2","border-dashed","border-gray-400","bg-white"),l.classList.add("text-transparent")):(r.setAttribute("data-completed","true"),r.classList.add("bg-[#303030]","text-white"),r.classList.remove("border-2","border-dashed","border-gray-400","bg-white"),l.classList.remove("text-transparent")),Ie()})}),document.querySelectorAll(".guide-toggle").forEach(r=>{r.addEventListener("click",()=>{const d=document.getElementById(r.dataset.target),c=r.getAttribute("aria-expanded")==="true";r.setAttribute("aria-expanded",String(!c)),r.innerHTML=c?'<i class="fas fa-chevron-down"></i>':'<i class="fas fa-chevron-up"></i>',d&&d.classList.toggle("hidden",c)})}),document.querySelectorAll(".guide-step-toggle").forEach(r=>{r.addEventListener("click",()=>{const d=document.getElementById(r.dataset.target),c=r.querySelector(".fa-chevron-up, .fa-chevron-down");if(d){const l=d.classList.toggle("hidden");c&&(c.classList.toggle("fa-chevron-up",!l),c.classList.toggle("fa-chevron-down",l))}})});const t=document.getElementById("select-theme-btn"),n=document.getElementById("guide-theme-dropdown-btn"),s=document.getElementById("guide-enable-editor-btn"),a=document.getElementById("enable-search-suggestion-btn"),i=document.getElementById("go-to-filter-btn");t&&t.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),z()}),n&&n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),z()}),s&&s.addEventListener("click",r=>{if(r.preventDefault(),!o.selectedTheme){z();return}$e()}),a&&a.addEventListener("click",r=>{r.preventDefault(),Gn()}),i&&i.addEventListener("click",r=>{r.preventDefault(),C("filter")})}O("theme:chosen",()=>$());O("guide:refresh",()=>$());function mt(){const e=document.getElementById("theme-picker-modal");e&&!e.classList.contains("hidden")&&J()}function Yn(e){o.appToggleState=e,o.appEnabled=e==="on",e==="on"&&!o.firstEnableDone&&(o.firstEnableDone=!0,o.lastEnabledTheme=o.selectedTheme,localStorage.setItem(p.FIRST_ENABLE_DONE,"true"),localStorage.setItem(p.LAST_ENABLED_THEME,o.lastEnabledTheme)),localStorage.setItem(p.APP_TOGGLE_STATE,e),mt(),q(),$(),V(),F()}O("set-app-toggle",e=>Yn(e));O("storage",e=>{if(e.key===p.APP_TOGGLE_STATE){const t=e.newValue||"off";console.log("Detected app toggle change:",t),o.appToggleState=t,o.appEnabled=t==="on",t==="on"&&!o.firstEnableDone&&(o.firstEnableDone=!0,o.lastEnabledTheme=o.selectedTheme,localStorage.setItem(p.FIRST_ENABLE_DONE,"true"),localStorage.setItem(p.LAST_ENABLED_THEME,o.lastEnabledTheme)),mt(),V(),$(),q(),F(),de()}e.key===p.SEARCH_SUGGESTION_TOGGLE_STATE&&(o.searchSuggestionState=e.newValue||"off",F(),de())});const Xn=`
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
`;function zn(){return Xn}const Kn=`
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
`;function Jn(){return Kn}function Qn(){const e=document.getElementById("sidebar-toggle-btn"),t=document.getElementById("sidebar-overlay");e&&e.addEventListener("click",()=>{document.body.classList.toggle("sidebar-collapsed")}),t&&t.addEventListener("click",()=>{document.body.classList.add("sidebar-collapsed")}),document.querySelectorAll("aside a").forEach(n=>{n.addEventListener("click",()=>{document.body.classList.add("sidebar-collapsed")})})}const Zn=`
            <div class="flex items-center justify-between px-8 py-3 shrink-0 bg-white border-b border-gray-200">
                <div class="flex items-center gap-2">
                    <button id="sidebar-toggle-btn" class="text-gray-500 hover:bg-gray-200 p-1.5 rounded transition-colors" aria-label="Toggle sidebar">
                        <i class="fas fa-bars text-sm"></i>
                    </button>
                    <div class="flex items-center gap-2 app-header-clickable px-2 -mx-2 py-1 rounded-md" id="app-header-title" data-page="home">
                    <div class="rounded-[4px] w-[22px] h-[22px] overflow-hidden"><img src="https://cdn.shopify.com/app-store/listing_images/393b6ef120968ea1931a5ec86b58d041/icon/CIr75oPv944DEAE=.png" alt="Findter" class="w-full h-full object-cover"></div>
                    <h1 class="font-semibold text-[18px] text-[#303030]">Findter filter & search</h1>
                    </div>
                </div>
                <div class="flex items-center gap-2 relative">
                    <div id="header-dev-menu" class="hidden lg:flex items-center gap-2">
                        <button id="show-pricing-notice-btn" class="border border-blue-300 bg-blue-50 text-blue-700 rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-blue-100 transition-colors shadow-sm whitespace-nowrap">Plan Update</button>
                        <button id="show-limit-reached-btn" class="border border-yellow-300 bg-yellow-50 text-yellow-700 rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-yellow-100 transition-colors shadow-sm whitespace-nowrap">Store Limit</button>
                        <button id="show-feedback-banner-btn" class="border border-emerald-300 bg-emerald-50 text-emerald-700 rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-emerald-100 transition-colors shadow-sm whitespace-nowrap">Feedback</button>
                        <button id="reset-indexing-btn" class="border border-orange-300 bg-orange-50 text-orange-700 rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-orange-100 transition-colors shadow-sm whitespace-nowrap">Reset Indexing</button>
                        <button id="show-welcome-modal-btn" type="button" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-gray-100 transition-colors shadow-sm whitespace-nowrap">Welcome modal</button>
                        <button id="end-index-btn" class="border border-green-300 bg-green-50 text-green-700 rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-green-100 transition-colors shadow-sm whitespace-nowrap">End Index Now</button>
                        <div class="relative">
                            <button id="warning-trial-btn" class="border border-red-300 bg-red-50 text-red-700 rounded-[6px] px-3 py-1.5 text-[12px] font-medium hover:bg-red-100 transition-colors shadow-sm whitespace-nowrap">Warning</button>
                            <div id="warning-trial-menu" class="hidden absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-20">
                                <button type="button" data-days="7" class="warning-trial-option w-full text-left px-3 py-1.5 text-[13px] text-[#303030] hover:bg-gray-50">7 days left</button>
                                <button type="button" data-days="3" class="warning-trial-option w-full text-left px-3 py-1.5 text-[13px] text-[#303030] hover:bg-gray-50">3 days left</button>
                                <button type="button" data-days="1" class="warning-trial-option w-full text-left px-3 py-1.5 text-[13px] text-[#303030] hover:bg-gray-50">1 day left</button>
                                <button type="button" data-days="0" class="warning-trial-option w-full text-left px-3 py-1.5 text-[13px] text-[#303030] hover:bg-gray-50">0 days left</button>
                            </div>
                        </div>
                    </div>
                    <button id="header-more-btn" class="lg:hidden text-gray-500 hover:bg-gray-200 p-1.5 rounded transition-colors"><i class="fas fa-ellipsis-h text-sm"></i></button>
                </div>
            </div>
`;function ke(e,t){const n=Object.assign({event:e,timestamp:new Date().toISOString()},t||{});console.log("[highlight]",n)}function ea(e){return L().filter(t=>t.code===e)[0]}function ta(e,t){if(!e)return;const n=t||"highlight_page";sessionStorage.setItem(Fe,"1"),localStorage.setItem(p.HIGHLIGHT_VIEW_FEATURE,"true"),sessionStorage.setItem(Ge,JSON.stringify({source:n,featureCode:e.code})),ke("highlight_feature_view_clicked",{target_page:"advanced_features",source:n,indexing_status:localStorage.getItem(p.INDEXING_COMPLETE)==="true"?"completed":"indexing",feature_code:e.code,feature_name:e.name}),An(e),history.pushState({findterHighlightBack:!0},""),C("advanced")}const pe=[];function Ye(){pe.forEach(e=>{e&&e.refresh&&e.refresh()})}function na(e){const t=e.media||e.thumbnail,n=H(e.name);if(t){const s=_(t);return t.indexOf("data:video")===0?'<video src="'+s+'" controls class="w-full rounded-lg" style="aspect-ratio: 16 / 9; object-fit: cover;"></video>':'<img src="'+s+'" alt="'+n+'" class="w-full rounded-lg object-cover" style="aspect-ratio: 16 / 9;">'}return'<div class="w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-gray-400" style="aspect-ratio: 16 / 9;"><i class="fas fa-photo-video text-2xl mb-2"></i><span class="text-[12px] font-medium px-4 text-center">'+n+": image/video coming soon</span></div>"}function ft(e){const t=document.getElementById(e.tabsElId),n=document.getElementById(e.bodyElId);if(!t||!n)return null;let s=!!e.autoplay,a=null,i=[],r=0,d=null,c=null;function l(){const h=L().filter(b=>b.enabled);return h.filter(b=>!b.parentCode).sort((b,I)=>b.order-I.order).map(b=>Object.assign({},b,{subs:h.filter(I=>I.parentCode===b.code).sort((I,k)=>I.order-k.order)}))}function m(h){const y=[];return h.forEach(b=>{b.subs.length===0?y.push({parent:b.code,sub:null}):b.subs.forEach(I=>y.push({parent:b.code,sub:I.code}))}),y}function u(h){const y=na(h);if(!o.indexingComplete&&!e.alwaysShowActions)return y;const I='<button type="button" class="feature-view-btn inline-flex items-center justify-center min-h-[44px] bg-[#303030] text-white rounded-[6px] px-3 sm:px-4 py-2 text-[12px] sm:text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors" data-feature-view-code="'+_(h.code)+'">View Feature</button>';return y+'<div class="flex flex-wrap items-center justify-end gap-3 mt-4">'+I+"</div>"}function v(){const h=l();let y="";h.forEach(b=>{const I=d===b.code;y+='<button type="button" class="feature-tab-btn whitespace-nowrap px-3 py-2 rounded-lg border text-[12px] sm:text-[13px] font-semibold text-center transition-colors '+(I?"bg-[#303030] text-white border-[#303030]":"bg-white text-[#303030] border-gray-200 hover:bg-gray-50")+'" data-parent="'+_(b.code)+'">'+H(b.name)+"</button>"}),t.innerHTML=y}function x(){const y=l().filter(k=>k.code===d)[0];if(!y){n.className="p-5",n.innerHTML='<p class="text-[13px] text-gray-500">No highlight features to show yet.</p>';return}if(y.subs.length===0){n.className="p-4 sm:p-5",n.innerHTML=u(y);return}(!c||!y.subs.some(k=>k.code===c))&&(c=y.subs[0].code);let b="";y.subs.forEach(k=>{const R=c===k.code;b+='<div class="feature-sub-row shrink-0 md:shrink whitespace-nowrap md:whitespace-normal px-4 sm:px-5 py-2.5 sm:py-3 cursor-pointer border-b md:border-b-0 border-gray-50 '+(R?"bg-gray-100":"hover:bg-gray-50")+'" data-sub="'+_(k.code)+'"><div class="text-[13px] sm:text-[14px] font-semibold text-[#303030]">'+H(k.name)+"</div></div>"});const I=y.subs.filter(k=>k.code===c)[0];n.className="flex flex-col md:flex-row",n.innerHTML='<div class="w-full md:w-[38%] flex md:block overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r border-gray-100 py-1 md:py-2">'+b+'</div><div class="w-full md:w-[62%] p-4 sm:p-5">'+u(I)+"</div>"}function E(){const h=i[r];if(!h){d=null,c=null;return}d=h.parent,c=h.sub}function w(){const h=l();if(i=m(h),i.length===0){d=null,c=null,v(),x();return}if(!(d&&h.some(b=>b.code===d)))r=0,E();else{let b=-1;for(let I=0;I<i.length;I+=1)if(i[I].parent===d&&i[I].sub===c){b=I;break}r=b===-1?0:b}v(),x()}function S(){a&&(clearInterval(a),a=null),s=!1}function M(){if(i.length===0)return;r=(r+1)%i.length,E(),v(),x();const h=i[r];ke("highlight_feature_slide_changed",{slide_reason:"auto_slide",source:"highlight_page",feature_code:h&&(h.sub||h.parent)})}function G(){!e.autoplay||!s||a||(a=setInterval(M,7e3))}function A(){e.autoplay&&(a&&(clearInterval(a),a=null),s=!0,G())}t.addEventListener("click",h=>{const y=h.target.closest("[data-parent]");y&&(d=y.getAttribute("data-parent"),c=null,v(),x(),A())}),n.addEventListener("click",h=>{const y=h.target.closest("[data-feature-view-code]");if(y){ta(ea(y.getAttribute("data-feature-view-code")),e.source);return}const b=h.target.closest("[data-sub]");b&&(c=b.getAttribute("data-sub"),x(),A())});function Y(){r=0,E(),v(),x(),A()}function Te(h){if(e.source!=="highlight_page")return!1;const b=L().filter(X=>X.code===h)[0];if(!b)return!1;const I=b.parentCode||b.code,k=b.parentCode?b.code:null,R=i.findIndex(X=>X.parent===I&&X.sub===k);return R===-1?!1:(r=R,E(),v(),x(),A(),!0)}w();const j=document.getElementById("page-highlight-feature");j&&j.classList.contains("active")&&G();function te(){a&&(clearInterval(a),a=null)}const P={refresh:w,stopAutoplay:S};return e.source==="highlight_page"&&(P.resetToFirst=Y,P.restoreFeature=Te,P.pauseAutoplay=te,P.resumeAutoplay=A),pe.push(P),P}function aa(e){let t=!1;return pe.forEach(n=>{n.restoreFeature&&n.restoreFeature(e)&&(t=!0)}),t}function bt(){pe.forEach(e=>{e.resetToFirst&&e.resetToFirst()})}O("navigate",e=>{(e==="home"||e==="highlight-feature")&&Ye(),pe.forEach(t=>{t.pauseAutoplay&&(e==="highlight-feature"?t.resumeAutoplay():t.pauseAutoplay())})});function xt(){return document.getElementById("restricted-modal")}function sa(){const e=document.getElementById("restriction-item-1"),t=document.getElementById("restriction-check-1"),n=document.getElementById("restriction-text-1"),s=document.getElementById("restriction-sub-1"),a=document.getElementById("restriction-item-2"),i=document.getElementById("restriction-check-2");!e||!t||!n||!s||!a||!i||(o.indexingComplete?(e.className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200",t.className="w-5 h-5 rounded-full border-2 border-green-500 bg-green-500 flex items-center justify-center shrink-0 mt-0.5",t.innerHTML='<i class="fas fa-check text-[10px] text-white"></i>',n.textContent="Data indexing complete",s.textContent="All data collected successfully"):(e.className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200",t.className="w-5 h-5 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5",t.innerHTML='<i class="fas fa-clock text-[10px] text-amber-500"></i>',n.textContent="Wait for data indexing to complete",s.textContent="Currently collecting data..."),o.appToggleState==="on"?(a.className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200",i.className="w-5 h-5 rounded-full border-2 border-green-500 bg-green-500 flex items-center justify-center shrink-0 mt-0.5",i.innerHTML='<i class="fas fa-check text-[10px] text-white"></i>'):(a.className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200",i.className="w-5 h-5 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5",i.innerHTML='<i class="fas fa-times text-[10px] text-amber-500"></i>'))}function me(){le(xt()),C("home"),qn()}function ia(){return Z(xt())}function ra(){const e=document.getElementById("close-restricted-modal-btn"),t=document.getElementById("restricted-modal-home-btn"),n=document.getElementById("restricted-modal-overlay");e&&e.addEventListener("click",me),t&&t.addEventListener("click",me),n&&n.addEventListener("click",me)}const oa=3600*1e3,ht="demo-store.myshopify.com";function da(){window.addEventListener("popstate",e=>{if(e.state&&e.state.findterHighlightBack){C("advanced");return}ga()})}function la(){return localStorage.getItem(p.HIGHLIGHT_VIEW_FEATURE)==="true"}function vt(){try{const e=sessionStorage.getItem(Ge);return e?JSON.parse(e):null}catch{return null}}function ca(){if(la()||sessionStorage.getItem(Fe)==="1"||localStorage.getItem(p.HIGHLIGHT_CONTINUE)==="true")return!1;const e=parseInt(localStorage.getItem(p.HIGHLIGHT_INDEX_COMPLETED_AT)||"0",10);return e&&Date.now()-e>=oa?(localStorage.getItem(p.HIGHLIGHT_EXPIRED)!=="true"&&(localStorage.setItem(p.HIGHLIGHT_EXPIRED,"true"),ke("highlight_screen_expired",{hide_reason:"timeout_1h",shop_domain:ht,indexing_status:"completed"})),!1):!0}function yt(){localStorage.removeItem(p.HIGHLIGHT_CONTINUE),localStorage.removeItem(p.HIGHLIGHT_VIEW_FEATURE),localStorage.removeItem(p.HIGHLIGHT_EXPIRED),localStorage.removeItem(p.HIGHLIGHT_INDEX_COMPLETED_AT),sessionStorage.removeItem(Fe),sessionStorage.removeItem(Ge)}function pa(){!o.indexingComplete&&!o.indexingInterval&&Se()}function Oe(e){pa(),e&&aa(e),C("highlight-feature")}function ua(){const e=performance.getEntriesByType?performance.getEntriesByType("navigation"):[];if(!!(e[0]&&e[0].type==="back_forward")){const n=vt();if(n&&n.source==="highlight_page"){Oe(n.featureCode);return}C("home");return}if(ca()){Oe(null),bt();return}C("home")}function ga(){const e=vt();if(e&&e.source==="highlight_page"){Oe(e.featureCode);return}C("home")}function ma(){localStorage.setItem(p.HIGHLIGHT_CONTINUE,"true"),ke("highlight_continue_clicked",{indexing_status:"completed",shop_domain:ht})}function wt(){const e=new Date,t=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),s=String(e.getSeconds()).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return t+":"+n+":"+s+" "+a+"/"+i+"/"+r}function Et(){return{syncStatusBadge:document.getElementById("sync-status-badge"),syncTimestamp:document.getElementById("sync-timestamp"),manualSyncBtn:document.getElementById("manual-sync-btn"),syncIcon:document.getElementById("sync-icon"),syncBtnText:document.getElementById("sync-btn-text")}}function fa(){const{syncStatusBadge:e,syncTimestamp:t,syncIcon:n,syncBtnText:s,manualSyncBtn:a}=Et();e&&(e.className="bg-amber-100 text-amber-800 text-[11px] px-2 py-0.5 rounded-full font-semibold",e.textContent="In progress"),t&&(t.textContent=wt()),n&&(n.className="fas fa-sync-alt text-gray-400 text-sm animate-spin"),s&&(s.textContent="Syncing..."),a&&(a.disabled=!0,a.classList.add("opacity-50","cursor-not-allowed")),Ye(),Ve(),V(),ye(),F()}function Xe(){o.isIndexing=!1,o.indexingComplete=!0,o.indexingInterval&&(clearInterval(o.indexingInterval),o.indexingInterval=null),localStorage.setItem(p.INDEXING_COMPLETE,"true"),localStorage.getItem(p.HIGHLIGHT_INDEX_COMPLETED_AT)||localStorage.setItem(p.HIGHLIGHT_INDEX_COMPLETED_AT,String(Date.now())),o.hasOnboarded||(o.hasOnboarded=!0,localStorage.setItem(p.HAS_ONBOARDED,"true"));const{syncStatusBadge:e,syncTimestamp:t,syncIcon:n,syncBtnText:s,manualSyncBtn:a}=Et();e&&(e.className="bg-[#cbf1c4] text-[#1f5119] text-[11px] px-2 py-0.5 rounded-full font-semibold",e.textContent="Completed"),t&&(t.textContent=wt()),n&&(n.className="fas fa-sync-alt text-gray-500 text-sm"),s&&(s.textContent="Manual sync"),a&&(a.disabled=!1,a.classList.remove("opacity-50","cursor-not-allowed")),Ye(),Ve(),sa(),ye(),q(),V(),F(),o.currentPage!=="home"&&Ee(o.currentPage)}function ba(){o.indexingInterval&&(clearInterval(o.indexingInterval),o.indexingInterval=null),setTimeout(()=>{Xe()},300)}function Se(){o.isIndexing=!0,o.indexingComplete=!1,o.indexingStartTime=Date.now(),fa(),q();const e=Date.now(),t=o.indexingDuration;o.indexingInterval=setInterval(()=>{const n=Date.now()-e;Math.min(n/t*100,100)>=100&&(clearInterval(o.indexingInterval),o.indexingInterval=null,setTimeout(()=>{Xe()},300))},100)}function xa(){o.indexingInterval&&(clearInterval(o.indexingInterval),o.indexingInterval=null),o.isIndexing=!0,o.indexingComplete=!1,o.appEnabled=!1,o.flowCompleted=!1,o.hasEnabledInEditor=!1,o.selectedTheme="",o.lastEnabledTheme="",o.firstEnableDone=!1,o.appToggleState="off",localStorage.removeItem(p.APP_TOGGLE_STATE),localStorage.removeItem(p.INDEXING_COMPLETE),localStorage.removeItem(p.SELECTED_THEME),localStorage.removeItem(p.LAST_ENABLED_THEME),localStorage.removeItem(p.FIRST_ENABLE_DONE),yt(),Se(),q();const e=document.getElementById("step1-initial"),t=document.getElementById("step1-completed"),n=document.getElementById("step1-checkbox");if(e&&e.classList.remove("hidden"),t&&t.classList.add("hidden"),n){n.setAttribute("data-completed","false"),n.classList.remove("bg-[#303030]","text-white"),n.classList.add("border-2","border-dashed","border-gray-400","bg-white");const s=n.querySelector(".fa-check");s&&s.classList.add("text-transparent")}Ie(),Ee(o.currentPage),V(),$()}function ha(){o.indexingComplete=!1,o.isIndexing=!0,localStorage.removeItem(p.INDEXING_COMPLETE),yt(),F(),Se()}function va(){return Zn}function ya(){const e=document.getElementById("reset-indexing-btn"),t=document.getElementById("end-index-btn"),n=document.getElementById("manual-sync-btn");e&&e.addEventListener("click",xa),t&&t.addEventListener("click",ba),n&&n.addEventListener("click",()=>{n.disabled||Se()})}const wa=`
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
`;function Ea(){return wa}function Ia(){ln()}const ka=`
                        <div id="welcome-box" elementtiming="lcp-welcome" class="mb-4 px-1" style="display:block !important;">
                            <h1 elementtiming="lcp-welcome-heading" class="text-[22px] font-bold text-[#303030] mb-1">👋 Welcome to findter 👋</h1>
                            <p class="text-[13px] text-gray-500 leading-relaxed">Explore your store's filter and search tools and help your customers find exactly what they're looking for.</p>
                        </div>
                        <div id="unified-status-banner" class="mb-5 hidden"></div>
                        <div id="indexing-banner-container" class="mb-5 hidden"></div>
`,Sa=`
                                <!-- PRICING NOTICE BANNER -->
                                <div id="pricing-notice-banner" class="hidden order-1 lg:order-none rounded-[8px] overflow-hidden border border-blue-200 shadow-sm">
                                    <div class="flex items-center justify-between px-4 py-3 bg-blue-100">
                                        <div class="flex items-center gap-2">
                                            <i class="fas fa-info-circle text-blue-600 text-sm"></i>
                                            <span class="text-[#303030] font-semibold text-[14px]">Upcoming Plan Update</span>
                                        </div>
                                        <div class="flex items-center gap-1">
                                            <button id="pricing-notice-collapse-btn" class="text-gray-500 hover:text-gray-800 hover:bg-blue-200 rounded p-1 transition-colors" aria-label="Collapse">
                                                <i id="pricing-notice-chevron" class="fas fa-chevron-up text-sm"></i>
                                            </button>
                                            <button id="pricing-notice-close-btn" class="text-gray-500 hover:text-gray-800 hover:bg-blue-200 rounded p-1 transition-colors" aria-label="Dismiss">
                                                <i class="fas fa-times text-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="pricing-notice-body" class="bg-white px-5 py-4">
                                        <p class="text-[14px] font-bold text-[#303030] mb-3">Thank You for Using Findter ❤️</p>
                                        <p class="text-[13px] text-[#303030] leading-relaxed mb-3">Starting <strong>July 1, 2026</strong>, Findter will introduce paid plans.</p>
                                        <p class="text-[13px] text-[#303030] leading-relaxed mb-3">As an existing user, you'll receive a <strong>7-days free trial</strong> before billing begins.</p>
                                        <ul class="mb-4 space-y-1.5">
                                            <li class="text-[13px] text-[#303030]">✓ Your data and settings stay unchanged.</li>
                                            <li class="text-[13px] text-[#303030]">✓ No setup required.</li>
                                            <li class="text-[13px] text-[#303030]">✓ Decide during your trial.</li>
                                        </ul>
                                        <button class="bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-semibold hover:bg-[#4a4a4a] transition-colors inline-flex items-center gap-2">
                                            See pricing plans
                                        </button>
                                    </div>
                                </div>
`,La=`
                                <!-- STORE LIMIT REACHED BANNER -->
                                <div id="limit-reached-banner" class="hidden order-2 lg:order-none rounded-[8px] overflow-hidden border border-yellow-200 shadow-sm">
                                    <div class="flex items-center justify-between px-4 py-3 bg-yellow-100">
                                        <div class="flex items-center gap-2">
                                            <i class="fas fa-exclamation-triangle text-yellow-600 text-sm"></i>
                                            <span class="text-[#303030] font-semibold text-[14px]">Store limit reached</span>
                                        </div>
                                        <div class="flex items-center gap-1">
                                            <button id="limit-reached-collapse-btn" class="text-gray-500 hover:text-gray-800 hover:bg-yellow-200 rounded p-1 transition-colors" aria-label="Collapse">
                                                <i id="limit-reached-chevron" class="fas fa-chevron-up text-sm"></i>
                                            </button>
                                            <button id="limit-reached-close-btn" class="text-gray-500 hover:text-gray-800 hover:bg-yellow-200 rounded p-1 transition-colors" aria-label="Dismiss">
                                                <i class="fas fa-times text-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="limit-reached-body" class="bg-white px-5 py-4">
                                        <p class="text-[13px] text-[#303030] leading-relaxed mb-3">Your store has exceeded the current limit with over <strong id="limit-reached-product-count">10,000</strong> products and <strong id="limit-reached-metafield-count">50</strong> metafields. Products beyond the limit will not be indexed and appear on the storefront.</p>
                                        <p class="text-[13px] text-[#303030] leading-relaxed mb-4">Contact us to consult about product and metafield limits.</p>
                                        <button id="limit-reached-contact-btn" class="bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-semibold hover:bg-[#4a4a4a] transition-colors inline-flex items-center gap-2">
                                            Contact us
                                        </button>
                                    </div>
                                </div>
`,Ba=`
                                <!-- TRIAL WARNING BANNER -->
                                <div id="trial-warning-banner" class="order-2 lg:order-none rounded-[8px] overflow-hidden border border-yellow-200 shadow-sm">
                                    <div class="flex items-center justify-between px-4 py-3 bg-yellow-100">
                                        <div class="flex items-center gap-2">
                                            <i class="fas fa-exclamation-circle text-yellow-600 text-sm"></i>
                                            <span id="trial-warning-heading" class="text-[#303030] font-semibold text-[14px]">Your Trial Ends Tomorrow</span>
                                        </div>
                                        <button id="trial-warning-close-btn" class="text-gray-500 hover:text-gray-800 hover:bg-yellow-200 rounded p-1 transition-colors" aria-label="Dismiss">
                                            <i class="fas fa-times text-sm"></i>
                                        </button>
                                    </div>
                                    <div class="bg-white px-5 py-4">
                                        <p id="trial-warning-text" class="text-[13px] text-gray-500 leading-relaxed mb-4">This is your last day. Upgrade now to keep your filters running, or chat with us if you need more time, we can extend your trial by 14 days.</p>
                                        <div class="flex items-center gap-2">
                                            <button id="trial-warning-cta-primary" class="bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-semibold hover:bg-[#4a4a4a] transition-colors inline-flex items-center gap-2">
                                                Upgrade Now
                                            </button>
                                            <button id="trial-warning-cta-secondary" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                                                Chat with Us
                                            </button>
                                        </div>
                                    </div>
                                </div>
`,Ta=`
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
`,_a=`
                                <div id="highlight-featured-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden order-7 lg:order-none">
                                    <div class="p-5 border-b border-gray-100">
                                        <h3 class="font-semibold text-[15px] text-[#303030] mb-4">Highlight features</h3>
                                        <div id="feature-highlight-tabs" class="flex flex-wrap justify-center gap-2"></div>
                                    </div>
                                    <div id="feature-highlight-body" class="flex flex-col md:flex-row"></div>
                                </div>
`,Ca=`
                                <div id="recommend-apps-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden order-9 lg:order-none">
                                    <div class="p-5 flex items-center justify-between border-b border-gray-100">
                                        <h3 class="font-semibold text-[15px] text-[#303030]">Recommend apps</h3>
                                        <div class="flex items-center gap-2">
                                            <button id="appCarouselPrev" class="w-7 h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 shadow-sm" aria-label="Previous apps"><i class="fas fa-chevron-left text-[10px]"></i></button>
                                            <button id="appCarouselNext" class="w-7 h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 shadow-sm" aria-label="Next apps"><i class="fas fa-chevron-right text-[10px]"></i></button>
                                        </div>
                                    </div>
                                    <div class="p-5 overflow-hidden">
                                        <div id="appCarouselTrack" class="flex gap-3 transition-transform duration-300 ease-in-out">
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/s/files/1/0820/9668/5276/files/Flat_-_White_1.webp?v=1787712772" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="Chizy: AI Chatbot & Live Chat">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">Chizy: AI Chatbot & Live Chat</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Code: FINDTER (-15%)</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Smart AI agent: complementing your filters with instant support, product recommendations</p>
                                                <a href="https://apps.shopify.com/judgeme" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/s/files/1/0765/0302/3847/files/934849961d1522ef7302.png?v=1785833460" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="Yotpo: Product Reviews App">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">Yotpo: Product Reviews App</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Reviews</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Display product reviews</p>
                                                <a href="https://apps.shopify.com/yotpo-social-reviews" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/d1fbe4acf738bfaa4fa03ef985d8477e/icon/CM_PravDr4YDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="OT Section: Theme Sections">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">OT Section: Theme Sections</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Page Builder</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">200+ premium drag-and-drop sections, templates &amp; blocks for any store</p>
                                                <a href="https://apps.shopify.com/ot-theme-sections-store-page-builder" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://omnithemes.com/wp-content/uploads/2024/04/logo.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="Eurus Theme">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">Eurus Theme</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Theme</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Conversion-focused theme with mega menus, pop-ups &amp; unlimited product badges</p>
                                                <a href="https://themes.shopify.com/themes/eurus/presets/eurus" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://omnithemes.com/wp-content/uploads/2024/04/logo.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="Maximize Theme">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">Maximize Theme</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Theme</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Speed-optimized B2B theme for 500+ SKU catalogs with smart search &amp; mega menus</p>
                                                <a href="https://themes.shopify.com/themes/maximize/presets/maximize" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/5e7100d6dd8a25eae7b75d50f0d897df/icon/COWZ0fD0zosDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="OPTIS Product Options, Variant">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">OPTIS Product Options, Variant</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Product Customization</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Infinite product options with text, swatches, file uploads &amp; price addons</p>
                                                <a href="https://apps.shopify.com/product-options-by-bss" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/4639b295c8340737b2c240f10481cb85/icon/CIad9ra1140DEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="OP Color Swatch Variant Images">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">OP Color Swatch Variant Images</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Product variants</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Visual color/image swatches with combined listings &amp; variant image automator</p>
                                                <a href="https://apps.shopify.com/optis-color-swatch-variants" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/c0ba322d64f9554b2f2917c3bb2f0ca0/icon/CKmvg5WrgJMDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="TA AI Product Labels &amp; Badges">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">TA AI Product Labels &amp; Badges</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Product Labels &amp; Badges</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">AI-generated labels/badges with translations, stock &amp; discount-based display rules</p>
                                                <a href="https://apps.shopify.com/product-labels-by-bss" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/c0ba322d64f9554b2f2917c3bb2f0ca0/icon/CKmvg5WrgJMDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="TA Banner Slider, Sales Pop up">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">TA Banner Slider, Sales Pop up</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Promotions &amp; Banners</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Announcement bars, countdown timers, popups &amp; multi-banner sliders</p>
                                                <a href="https://apps.shopify.com/bss-banner-pop-up" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/c0ba322d64f9554b2f2917c3bb2f0ca0/icon/CKmvg5WrgJMDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="TA Preorder &amp; Back In Stock">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">TA Preorder &amp; Back In Stock</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Preorder &amp; Stock</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Preorders with deposits, back-in-stock alerts, waitlists &amp; presale campaigns</p>
                                                <a href="https://apps.shopify.com/dotsy-preorder-presale" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/af0a3ec102358241ae7823679d9ccda3/icon/CKH57aSigpEDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="BSS B2B Order, Request a Quote">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">BSS B2B Order, Request a Quote</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">B2B Order &amp; Quote</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Request quotes, bulk orders via CSV upload &amp; easy reorder from history</p>
                                                <a href="https://apps.shopify.com/b2b-customer-portal-quick-order" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/f406cf0e469d052e1fb506a0898d801f/icon/CMn5zMuggpEDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="BSS B2B Wholesale Pricing">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">BSS B2B Wholesale Pricing</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">B2B Wholesale</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Custom pricing, volume discounts, price lists, net terms &amp; tax control</p>
                                                <a href="https://apps.shopify.com/b2b-solution-custom-pricing" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/6649510d2d88bde754b08607b0b6a328/icon/COicvrf8rYoDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="B2Bridge B2B Wholesale Pricing">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">B2Bridge B2B Wholesale Pricing</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">B2B Wholesale</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Customer-specific pricing, bulk orders, MOQ, net terms &amp; quick order page</p>
                                                <a href="https://apps.shopify.com/b2bridge-b2b-all-in-one" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/dc7f7058c1348d662ca3919f8d9b693b/icon/CM6ZgtWMxpEDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="TL: Free Gifts BOGO &amp; Upsell">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">TL: Free Gifts BOGO &amp; Upsell</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Upsell &amp; BOGO</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">BOGO, Buy X Get Y, free gifts with purchase &amp; cart upsell offers</p>
                                                <a href="https://apps.shopify.com/salepify" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/1188f0cb74707478f04a7ab4f9563933/icon/CMqW-bav1ZEDEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="MIDA Replay, Heatmap &amp; Insight">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">MIDA Replay, Heatmap &amp; Insight</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">Analytics &amp; Heatmap</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">Session replays, revenue heatmaps &amp; AI insights to fix UX friction</p>
                                                <a href="https://apps.shopify.com/mida-session-recording-replay" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                            <div class="app-rec-card border border-gray-200 rounded-[8px] p-3 flex flex-col hover:shadow-sm transition-shadow shrink-0">
                                                <div class="flex flex-row items-center gap-2 min-w-0">
                                                    <img src="https://cdn.shopify.com/app-store/listing_images/a9d339e5e1fd198bffdae82904deaec6/icon/CNeZtO2llJADEAE=.png" class="w-[60px] h-[60px] rounded-md object-cover shrink-0" alt="Chizy: AI Chatbot &amp; Live Chat">
                                                    <div class="min-w-0">
                                                        <div class="text-[13px] font-semibold text-[#303030] leading-snug">Chizy: AI Chatbot &amp; Live Chat</div>
                                                        <span class="inline-block bg-[rgb(213,235,255)] text-[rgb(0,58,90)] text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1">AI Chatbot</span>
                                                    </div>
                                                </div>
                                                <p class="text-[11px] text-gray-500 mt-2 leading-relaxed flex-1">24/7 AI chatbot with product browsing, live chat handover &amp; smart follow-ups</p>
                                                <a href="https://apps.shopify.com/chizy-ai-chatbot" target="_blank" rel="noopener" class="mt-2 inline-flex items-center justify-center gap-1 bg-white text-black border border-gray-300 text-[11px] font-semibold px-2 py-1.5 rounded-[6px] hover:bg-gray-100 transition-colors">View App</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
`,Aa=`
                                <div id="data-insight-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden order-10 lg:order-none">
                                    <div class="p-5 flex items-center justify-between border-b border-gray-100">
                                        <div class="flex items-center gap-3"><h3 class="font-semibold text-[15px] text-[#303030]">Data insight</h3><button class="border border-gray-300 rounded-[6px] px-2.5 py-1 text-[13px] font-medium text-[#303030] flex items-center gap-2 hover:bg-gray-50 shadow-sm"><i class="far fa-calendar text-gray-500 text-sm"></i> Last 30 days</button></div>
                                        <button class="border border-gray-300 rounded-[6px] w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 shadow-sm"><i class="fas fa-chart-bar text-sm"></i></button>
                                    </div>
                                    <div class="p-5 flex gap-5">
                                        <div class="flex-1 border border-gray-200 rounded-[8px] p-5 relative overflow-hidden flex flex-col justify-between"><h4 class="text-[13px] font-semibold text-[#303030] border-b border-gray-300 border-dashed pb-3 mb-4">Total sessions</h4><div class="flex items-end justify-between"><div><div class="text-[13px] text-green-700 font-medium mb-1 flex items-center gap-1">0% <i class="fas fa-arrow-up text-[10px]"></i></div><div class="text-[32px] font-normal leading-none text-[#303030]">0</div></div><div class="w-20 h-[2px] bg-green-500 mb-2"></div></div></div>
                                        <div class="flex-1 border border-gray-200 rounded-[8px] p-5 relative overflow-hidden flex flex-col justify-between"><h4 class="text-[13px] font-semibold text-[#303030] border-b border-gray-300 border-dashed pb-3 mb-4">Conversion rate</h4><div class="flex items-end justify-between"><div class="mt-6"><div class="text-[32px] font-normal leading-none text-[#303030]">0%</div></div><div class="w-20 h-[2px] bg-green-500 mb-2"></div></div></div>
                                    </div>
                                </div>
`,Ha=`
                                <div id="master-shortcut-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden p-5 order-11 lg:order-none"><h3 class="font-semibold text-[15px] text-[#303030] mb-3">Master</h3><p class="text-[12px] text-gray-500 mb-3">Manage the Highlight Features shown on this homepage.</p><button id="master-shortcut-btn" class="border border-gray-300 rounded-[6px] px-3 py-1.5 text-[13px] font-medium text-[#303030] hover:bg-gray-50 shadow-sm">Go to Master</button></div>
`,Ma=`
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
`,Da=`
                                <div id="findter-status-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden p-5 order-4 lg:order-none">
                                    <h3 class="font-semibold text-[15px] text-[#303030] mb-4"><strong>Findter app status</strong></h3>
                                    <div class="space-y-3">
                                        <div class="flex items-center justify-between gap-3 text-[13px] text-[#303030]">
                                            <span class="font-medium">Plan</span>
                                            <span id="status-app-plan" class="flex items-center gap-2 px-2.5 py-1 rounded-md border border-blue-200 bg-white text-[11px] font-semibold text-blue-700">
                                                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                                                Trial
                                            </span>
                                        </div>
                                        <div id="status-plan-expiry-row" class="flex items-center justify-between gap-3 text-[13px] text-[#303030]">
                                            <span id="status-plan-expiry-label" class="font-medium">Expires</span>
                                            <span id="status-plan-expiry" class="inline-flex items-center px-2.5 py-1 rounded-md border border-[#e3e3e3] bg-white text-[11px] font-semibold tabular-nums text-[#303030]">29/09/2026</span>
                                        </div>
                                        <div id="plan-usage" class="flex items-center justify-between gap-3 text-[13px] text-[#303030]">
                                            <span id="plan-usage-label" class="font-medium">Products</span>
                                            <span class="flex items-center gap-2 shrink-0">
                                                <span id="plan-usage-count" class="hidden font-semibold tabular-nums text-[#303030] whitespace-nowrap">1,595 / 50,000</span>
                                                <span id="plan-usage-status" class="flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600 whitespace-nowrap">
                                                    <span id="plan-usage-dot" class="w-2 h-2 rounded-full bg-gray-400"></span>
                                                    <span id="plan-usage-status-text">Collecting data</span>
                                                </span>
                                            </span>
                                        </div>
                                        <div class="flex items-center justify-between text-[13px] text-[#303030]">
                                            <span class="font-medium">App Embed</span>
                                            <span id="status-app-embed" class="flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600">
                                                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                                                Inactive
                                            </span>
                                        </div>
                                        <div class="flex items-center justify-between text-[13px] text-[#303030]">
                                            <span class="font-medium">Search Suggestion</span>
                                            <span id="status-search-suggestion" class="flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600">
                                                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                                                Inactive
                                            </span>
                                        </div>
                                    </div>
                                </div>
`,Na=`
                                <div id="help-support-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden p-5 order-8 lg:order-none">
                                    <h3 class="font-semibold text-[15px] text-[#303030] mb-3">Help & support</h3>
                                    <p class="text-[13px] text-[#303030] mb-3 leading-relaxed">Find out more User Guidelines <a href="#" class="text-blue-600 hover:underline">here</a>.</p>
                                    <div class="text-[13px] text-[#303030] space-y-1 mb-4">
                                        <p class="font-medium">If you struggling with:</p>
                                        <ul class="list-disc pl-5 space-y-1 text-gray-700">
                                            <li>Setup assistance</li>
                                            <li>Theme compatibility</li>
                                            <li>Filter/Search not displaying?</li>
                                            <li>Storefront UI customize?</li>
                                        </ul>
                                        <p class="mt-2">Please contact us for <strong class="font-semibold">free support</strong>.</p>
                                    </div>
                                    <div class="flex gap-2">
                                        <button class="flex items-center justify-center gap-2 border border-gray-300 rounded-[6px] px-3 py-1.5 text-[13px] font-medium text-[#303030] hover:bg-gray-50 flex-1 shadow-sm"><i class="far fa-comment-dots text-gray-500 text-sm"></i> Live chat</button>
                                        <button class="flex items-center justify-center gap-2 border border-gray-300 rounded-[6px] px-3 py-1.5 text-[13px] font-medium text-[#303030] hover:bg-gray-50 flex-1 shadow-sm"><i class="fas fa-phone-alt text-gray-500 text-sm"></i> Book a call</button>
                                    </div>
                                </div>
`,Oa=`
                                <div id="sync-updates-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden p-5 order-5 lg:order-none">
                                    <div class="flex items-center gap-2 mb-3">
                                        <h3 class="font-semibold text-[15px] text-[#303030]">Sync recent updates</h3>
                                        <span id="sync-status-badge" class="bg-[#cbf1c4] text-[#1f5119] text-[11px] px-2 py-0.5 rounded-full font-semibold">Completed</span>
                                    </div>
                                    <p id="sync-status-text" class="text-[13px] text-[#303030] mb-5">Recent updates were last synced:<strong class="font-semibold ml-1" id="sync-timestamp">23:59:09 02/03/2026</strong></p>
                                    
                                    <button id="manual-sync-btn" class="flex items-center justify-center gap-2 border border-gray-300 rounded-[6px] px-3 py-1.5 text-[13px] font-medium text-[#303030] hover:bg-gray-50 w-fit shadow-sm">
                                        <i class="fas fa-sync-alt text-gray-500 text-sm" id="sync-icon"></i>
                                        <span id="sync-btn-text">Manual sync</span>
                                    </button>
                                </div>
`;function Pa(){const e=document.getElementById("appCarouselTrack"),t=document.getElementById("appCarouselPrev"),n=document.getElementById("appCarouselNext");if(!e||!t||!n)return;let s=0;function a(i){const r=e.children,d=window.matchMedia("(min-width: 640px)").matches?2:1,c=Math.max(0,r.length-d);s=Math.max(0,Math.min(s+i,c));const u=r[0].offsetWidth+12;e.style.transform="translateX(-"+s*u+"px)"}t.addEventListener("click",()=>a(-1)),n.addEventListener("click",()=>a(1))}function Fa(){return`
                <div id="page-home" class="page-view active">
                    <div class="max-w-[1040px] mx-auto">
                        ${ka}
                        <div id="homepage-grid" class="homepage-grid">
                            <div class="homepage-column homepage-left">
                                ${Sa}
                                ${La}
                                ${Ba}
                                ${Ta}
                                ${_a}
                                ${Ca}
                                ${Aa}
                                ${Ha}
                            </div>
                            <div class="homepage-column homepage-right">
                                ${Ma}
                                ${Da}
                                ${Na}
                                ${Oa}
                            </div>
                        </div>
                    </div>
                </div>`}function Ga(){Pa(),$n(),Cn(C)}function ee({pageId:e,title:t,bannerId:n,contentId:s}){return`
                <div id="page-${e}" class="page-view">
                    <div class="max-w-[1040px] mx-auto">
                        <div class="mb-6"><h1 class="text-[22px] font-bold text-[#303030]">${t}</h1></div>
                        <div id="${n}" class="mb-5 hidden"></div>
                        <div id="${s}"></div>
                    </div>
                </div>`}function ja(){return ee({pageId:"filter",title:"Filter",bannerId:"unified-banner-filter",contentId:"filter-page-content"})}function Ra(){return ja()}function Wa(){return ee({pageId:"search",title:"Search",bannerId:"unified-banner-search",contentId:"search-page-content"})}function Ua(){return Wa()}function qa(){return ee({pageId:"metafield",title:"Metafield",bannerId:"unified-banner-metafield",contentId:"metafield-page-content"})}function Va(){return qa()}function $a(){return ee({pageId:"design",title:"Filter & product grid design",bannerId:"unified-banner-design",contentId:"design-page-content"})}function Ya(){return $a()}function Xa(){return ee({pageId:"analytics-app",title:"Analytics",bannerId:"unified-banner-analytics-app",contentId:"analytics-app-page-content"})}function za(){return Xa()}function Ka(){return ee({pageId:"advanced",title:"Advanced features",bannerId:"unified-banner-advanced",contentId:"advanced-page-content"})}function Ja(){return Ka()}const Qa=`
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
`;function Za(){return Qa}function es(){ft({tabsElId:"hf-feature-highlight-tabs",bodyElId:"hf-feature-highlight-body",autoplay:!0,alwaysShowActions:!0,source:"highlight_page"});const e=document.getElementById("hf-continue-to-home-btn");e&&e.addEventListener("click",()=>{ma(),C("home")});const t=document.getElementById("hf-view-features-btn");t&&t.addEventListener("click",()=>{const s=document.getElementById("hf-highlight-featured-card");s&&s.scrollIntoView({behavior:"smooth",block:"start"})});const n=document.getElementById("hf-start-onboarding-btn");n&&n.addEventListener("click",Vn)}const ts=`
    <!-- MODAL: Access Restricted Modal -->
    <div id="restricted-modal" class="modal-wrapper fixed inset-0 hidden">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="restricted-modal-overlay"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-md pointer-events-auto relative modal-content">
                <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                            <i class="fas fa-lock text-lg"></i>
                        </div>
                        <h3 class="text-[16px] font-semibold text-[#303030]">Access restricted</h3>
                    </div>
                    <button type="button" id="close-restricted-modal-btn" class="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                        <i class="fas fa-times text-lg"></i>
                    </button>
                </div>
                <div class="px-6 py-5">
                    <div class="space-y-4">
                        <p class="text-[14px] text-[#303030] leading-relaxed">Please complete the following steps before accessing this feature:</p>
                        <div class="space-y-3">
                            <div id="restriction-item-1" class="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                                <div id="restriction-check-1" class="w-5 h-5 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                                    <i class="fas fa-clock text-[10px] text-amber-500"></i>
                                </div>
                                <div class="flex-1">
                                    <p class="text-[13px] font-semibold text-[#303030]" id="restriction-text-1">Wait for data indexing to complete</p>
                                    <p class="text-[11px] text-gray-500" id="restriction-sub-1">Currently collecting data...</p>
                                </div>
                            </div>
                            <div id="restriction-item-2" class="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                                <div id="restriction-check-2" class="w-5 h-5 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                                    <i class="fas fa-times text-[10px] text-amber-500"></i>
                                </div>
                                <div class="flex-1">
                                    <p class="text-[13px] font-semibold text-[#303030]">Complete Guide Step 1: Activate App Embed</p>
                                    <p class="text-[11px] text-gray-500">Select a theme and enable the app in Theme Editor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-end px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                    <button type="button" id="restricted-modal-home-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors flex items-center gap-2">
                        <i class="fas fa-home text-xs"></i>
                        Go to Homepage
                    </button>
                </div>
            </div>
        </div>
    </div>
`,ns=`
    <!-- MODAL 1: Theme Picker Modal -->
    <div id="theme-picker-modal" class="modal-wrapper fixed inset-0 hidden">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="theme-picker-modal-overlay"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-md pointer-events-auto max-h-[55vh] flex flex-col relative modal-content">
                <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
                    <h3 class="text-[16px] font-semibold text-[#303030]">Choose your theme</h3>
                    <button type="button" id="close-theme-picker-modal-btn" class="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100" aria-label="Close">
                        <i class="fas fa-times text-lg" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="grid grid-cols-[1fr_170px] gap-3 px-6 py-2.5 border-b border-gray-200 bg-gray-50 shrink-0">
                    <span class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Your theme</span>
                    <span class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide text-center">Compatibility</span>
                </div>
                <p id="theme-request-notice" class="hidden mx-6 mt-3 rounded-lg border border-[#f0d488] bg-[#fff7df] px-3 py-2 text-[13px] text-[#8a6412]" role="status"></p>
                <div id="theme-picker-list" class="overflow-y-auto flex-1"></div>
            </div>
        </div>
    </div>
`,as=`
    <!-- MODAL 2: Enable App Embed Modal -->
    <div id="editor-modal" class="modal-wrapper fixed inset-0 hidden">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="editor-modal-overlay"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-[980px] pointer-events-auto max-h-[90vh] flex flex-col relative modal-content">
                <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <h3 class="text-[16px] font-semibold text-[#303030]">Enable app embed</h3>
                    <button type="button" id="close-editor-modal-btn" class="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                        <i class="fas fa-times text-lg"></i>
                    </button>
                </div>
                <div class="px-6 py-6 flex-1">
                    <div class="flex items-start gap-4 mb-6">
                        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                            <i class="fas fa-puzzle-piece text-lg"></i>
                        </div>
                        <div class="flex-1">
                            <p class="text-[14px] font-semibold text-[#303030] mb-2">Step 2: Enable App Embed in Theme Editor</p>
                            <p class="text-[13px] text-gray-600">Selected theme: <strong id="editor-theme-display" class="text-[#303030]"></strong></p>
                        </div>
                    </div>
                    <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                        <div class="flex items-center justify-center gap-1 whitespace-nowrap flex-wrap">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[13px] shadow-md shrink-0">1</div>
                                <span class="text-[13px] font-semibold text-gray-800">Theme Editor</span>
                            </div>
                            <i class="fas fa-arrow-right text-gray-400 text-sm mx-2 shrink-0"></i>
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[13px] shadow-md shrink-0">2</div>
                                <span class="text-[13px] font-semibold text-gray-800">App Embeds</span>
                            </div>
                            <i class="fas fa-arrow-right text-gray-400 text-sm mx-2 shrink-0"></i>
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[13px] shadow-md shrink-0">3</div>
                                <span class="text-[13px] font-semibold text-gray-800">Enable App</span>
                            </div>
                            <i class="fas fa-arrow-right text-gray-400 text-sm mx-2 shrink-0"></i>
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-[13px] shadow-md shrink-0">4</div>
                                <span class="text-[13px] font-semibold text-gray-800">Save</span>
                            </div>
                        </div>
                    </div>
                    <div id="editor-indexing-banner" class="rounded-lg p-4 mb-6 transition-all duration-300"></div>
                </div>
                <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                    <button type="button" id="editor-modal-back-btn" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors">Back</button>
                    <button type="button" id="enable-editor-modal-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed btn-disabled-overlay">
                        <i class="fas fa-external-link-alt text-xs"></i>
                        Enable App in Theme Editor
                    </button>
                </div>
            </div>
        </div>
    </div>
`,ss=`

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
`,is=`
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
`;function rs(){return`
    ${zn()}
    <div class="flex flex-1 overflow-hidden relative">
      ${Jn()}
      <main class="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#f1f2f4]">
        ${va()}
        <div class="flex-1 overflow-y-auto px-8 pt-6 pb-12 relative">
          ${Fa()}
          ${Ra()}
          ${Ua()}
          ${Va()}
          ${Ya()}
          ${za()}
          ${Ja()}
          ${Ln()}
          ${Za()}
        </div>
      </main>
    </div>
    ${Ea()}
    ${ts}
    ${ns}
    ${as}
    ${ss}
    ${is}
  `}const os={7:{heading:"7 Days Left in Your Trial",text:"No charge yet, and you still have full access to all features. When you're ready, pick a plan to keep your filters running without any gap.",primaryCta:"View Plans"},3:{heading:"3 Days Left: Keep Your Filters Running",text:"Your trial ends in 3 days. You haven't been charged and still have full access, upgrade now so your filters keep working without interruption.",primaryCta:"Choose a Plan"},1:{heading:"Your Trial Ends Tomorrow",text:"This is your last day. Upgrade now to keep your filters running, or chat with us if you need more time, we can extend your trial by 14 days.",primaryCta:"Upgrade Now",secondaryCta:"Chat with Us"}},ds={7:"Hi! 👋 You've got a full week to explore Findter, how's it going so far? Is there anything not working the way you expected?",1:"Hi again! 👋 Your trial ends tomorrow, is there anything stopping you from upgrading? Whether it's pricing, timing, or a missing feature, just tell us and we'll help sort it out.",0:"Hi! 👋 Your trial just ended, did something not work out, or is there anything we can clarify before you decide on a plan?"};function ls(){const e=document.getElementById("warning-trial-btn"),t=document.getElementById("warning-trial-menu"),n=document.getElementById("trial-warning-banner"),s=document.getElementById("trial-warning-heading"),a=document.getElementById("trial-warning-text"),i=document.getElementById("trial-warning-close-btn"),r=document.getElementById("trial-warning-cta-primary"),d=document.getElementById("trial-warning-cta-secondary"),c=document.getElementById("header-more-btn"),l=document.getElementById("header-dev-menu");e&&t&&(e.addEventListener("click",m=>{m.stopPropagation(),t.classList.toggle("hidden")}),document.addEventListener("click",m=>{!t.classList.contains("hidden")&&!t.contains(m.target)&&!e.contains(m.target)&&t.classList.add("hidden")})),i&&n&&i.addEventListener("click",()=>n.classList.add("hidden")),r&&r.addEventListener("click",()=>{const m=document.getElementById("pricing-notice-banner");m&&(m.classList.remove("hidden"),m.scrollIntoView({behavior:"smooth",block:"start"}))}),d&&d.addEventListener("click",()=>W({hideBadge:!0})),document.querySelectorAll(".warning-trial-option").forEach(m=>{m.addEventListener("click",()=>{const u=m.getAttribute("data-days");let v=parseInt(u,10);Number.isNaN(v)&&(v=0),fn(v),ut();const x=os[u];u!=="0"&&(x&&(s&&(s.textContent=x.heading),a&&(a.textContent=x.text),r&&(r.textContent=x.primaryCta),d&&d.classList.toggle("hidden",!x.secondaryCta)),n&&(n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"}))),t&&t.classList.add("hidden");const E=ds[u];E&&(W({hideBadge:!0}),N(E,!1),sn(300*1e3))})}),c&&l&&(c.addEventListener("click",m=>{m.stopPropagation(),l.classList.toggle("mobile-menu-open")}),document.addEventListener("click",m=>{l.classList.contains("mobile-menu-open")&&!l.contains(m.target)&&!c.contains(m.target)&&l.classList.remove("mobile-menu-open")}))}function cs(){const e=document.getElementById("pricing-notice-banner"),t=document.getElementById("pricing-notice-close-btn"),n=document.getElementById("pricing-notice-collapse-btn"),s=document.getElementById("pricing-notice-body"),a=document.getElementById("pricing-notice-chevron"),i=document.getElementById("pricing-notice-contact-link"),r=document.getElementById("show-pricing-notice-btn"),d=document.getElementById("limit-reached-banner"),c=document.getElementById("limit-reached-close-btn"),l=document.getElementById("limit-reached-collapse-btn"),m=document.getElementById("limit-reached-body"),u=document.getElementById("limit-reached-chevron"),v=document.getElementById("limit-reached-contact-btn"),x=document.getElementById("show-limit-reached-btn"),E=document.getElementById("welcome-contact-btn");n&&s&&n.addEventListener("click",()=>{const w=s.classList.contains("hidden");s.classList.toggle("hidden"),a.classList.toggle("fa-chevron-up",w),a.classList.toggle("fa-chevron-down",!w)}),t&&e&&t.addEventListener("click",()=>e.classList.add("hidden")),r&&e&&r.addEventListener("click",()=>{e.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth",block:"start"})}),i&&i.addEventListener("click",w=>{w.preventDefault(),W({hideBadge:!0})}),E&&E.addEventListener("click",()=>W({hideBadge:!0})),l&&m&&l.addEventListener("click",()=>{const w=m.classList.contains("hidden");m.classList.toggle("hidden"),u.classList.toggle("fa-chevron-up",w),u.classList.toggle("fa-chevron-down",!w)}),c&&d&&c.addEventListener("click",()=>{d.classList.add("hidden"),Q.used=pn;const w=document.getElementById("limit-reached-product-count");w&&(w.textContent="10,000"),Me()}),x&&d&&x.addEventListener("click",()=>{C("home"),o.indexingComplete||Xe(),Q.used=nt;const w=document.getElementById("limit-reached-product-count");w&&(w.textContent=nt.toLocaleString("en-US")),Me(),d.classList.remove("hidden");const S=document.getElementById("findter-status-card");S&&S.scrollIntoView({behavior:"smooth",block:"center"})}),v&&v.addEventListener("click",()=>W({hideBadge:!0}))}function ps(){const e=document.getElementById("whats-new-btn"),t=document.getElementById("whats-new-dropdown"),n=document.getElementById("whats-new-badge");let s=3;!e||!t||(e.addEventListener("click",a=>{a.stopPropagation();const i=t.classList.contains("hidden");t.classList.toggle("hidden"),i&&s>0&&(s=0,n&&n.classList.add("hidden"),document.querySelectorAll(".whats-new-unread-dot").forEach(r=>r.classList.add("hidden")),document.querySelectorAll(".whats-new-item").forEach(r=>{r.style.background=""}))}),document.addEventListener("click",a=>{!t.classList.contains("hidden")&&!e.contains(a.target)&&!t.contains(a.target)&&t.classList.add("hidden")}))}function us(){return localStorage.getItem(p.FEEDBACK_STATE)||"default"}function It(){const e=document.getElementById("feedback-banner"),t=document.getElementById("feedback-mini-box"),n=us();n==="hidden"?(e&&e.classList.add("hidden"),t&&t.classList.add("hidden")):n==="mini"?(e&&e.classList.add("hidden"),t&&t.classList.remove("hidden")):(e&&e.classList.remove("hidden"),t&&t.classList.add("hidden"))}function Pe(e){localStorage.setItem(p.FEEDBACK_STATE,e),It()}function gs(){localStorage.removeItem(p.FEEDBACK_STATE),It()}function Le(){return document.getElementById("editor-modal")}function kt(){const e=document.getElementById("close-editor-modal-btn");e&&(o.hasEnabledInEditor||o.flowCompleted?(e.style.display="flex",e.style.visibility="visible"):(e.style.display="none",e.style.visibility="hidden"))}function ms(){o.flowCompleted||(o.flowCompleted=!0,o.appEnabled=o.appToggleState==="on",kt(),Mt(),V(),$(),o.currentPage!=="home"&&Ee(o.currentPage))}function fs(){const e=Le();if(!e)return;we(e);const t=document.getElementById("editor-theme-display");t&&(t.textContent=o.selectedTheme),kt(),ye()}function fe(){const e=Le();e&&(le(e),(o.hasEnabledInEditor||o.flowCompleted)&&ms())}function bs(){return Z(Le())}function St(){return o.hasEnabledInEditor||o.flowCompleted}function xs(){const e=Le();e&&e.classList.add("hidden"),setTimeout(()=>B("open-theme-picker"),150)}function hs(){const e=document.getElementById("close-editor-modal-btn"),t=document.getElementById("editor-modal-back-btn"),n=document.getElementById("editor-modal-overlay"),s=document.getElementById("enable-editor-modal-btn");e&&e.addEventListener("click",fe),t&&t.addEventListener("click",xs),n&&n.addEventListener("click",()=>{St()&&fe()}),s&&s.addEventListener("click",()=>{if(!o.indexingComplete){alert("Please wait for indexing to complete first.");return}$e(),fe()}),document.addEventListener("click",a=>{a.target.closest('[data-action="enable-app-from-banner"]')&&jn()})}O("open-editor-modal",()=>fs());const vs="https://apps.shopify.com/findter-custom-filter-search#modal-show=WriteReviewModal&st_campaign=rate-app&st_source=admin-web";let Ce=!1;function ze(){return document.getElementById("feedback-modal")}function it(){const e=ze();if(!e)return;const t=document.getElementById("feedback-form-body"),n=document.getElementById("feedback-success-body"),s=document.getElementById("feedback-modal-footer"),a=document.getElementById("feedback-category"),i=document.getElementById("feedback-comment"),r=document.getElementById("feedback-files");t&&t.classList.remove("hidden"),n&&n.classList.add("hidden"),s&&s.classList.remove("hidden"),a&&(a.selectedIndex=0),i&&(i.value=""),r&&(r.value=""),we(e)}function re(){le(ze())}function ys(){return Z(ze())}function ws(){const e=document.getElementById("feedback-category"),t=document.getElementById("feedback-comment"),n=document.getElementById("feedback-files"),s=document.getElementById("feedback-form-body"),a=document.getElementById("feedback-success-body"),i=document.getElementById("feedback-modal-footer"),r=e?e.value:"",d=t?t.value.trim():"",c=n&&n.files?n.files.length:0;if(!r){e&&e.focus();return}const l=c>0?c+" file(s) attached":"None",m="📋 <strong>New Support Ticket</strong><br>Category: "+H(r)+"<br>Message: "+(d?H(d):"(none)")+"<br>Attachments: "+H(l);W({hideBadge:!0}),N(m,!0,{html:!0}),setTimeout(()=>{N("Thanks for reaching out! <br>We've received your feedback and our support team will get back to you shortly.",!1,{html:!0})},800),s&&s.classList.add("hidden"),i&&i.classList.add("hidden"),a&&a.classList.remove("hidden"),Pe("hidden"),setTimeout(()=>re(),1600)}function Es(){const e=document.getElementById("close-feedback-modal-btn"),t=document.getElementById("feedback-cancel-btn"),n=document.getElementById("feedback-submit-btn"),s=document.getElementById("feedback-modal-overlay"),a=document.getElementById("feedback-banner-close"),i=document.getElementById("show-feedback-banner-btn"),r=document.getElementById("feedback-mini-box-btn"),d=document.getElementById("feedback-banner"),c=document.getElementById("feedback-thumbs-up"),l=document.getElementById("feedback-thumbs-down");e&&e.addEventListener("click",re),t&&t.addEventListener("click",re),n&&n.addEventListener("click",ws),s&&s.addEventListener("click",re),a&&d&&a.addEventListener("click",()=>d.classList.add("hidden")),i&&i.addEventListener("click",()=>{Pe("default"),d&&d.scrollIntoView({behavior:"smooth",block:"start"})}),r&&r.addEventListener("click",()=>it()),window.addEventListener("focus",()=>{Ce&&(Ce=!1,localStorage.setItem(p.REVIEW_SUBMITTED,"true"),Pe("mini"))}),c&&c.addEventListener("click",()=>{Ce=!0,window.open(vs,"_blank")}),l&&l.addEventListener("click",()=>it())}function ne(e){e.timestamp=new Date().toISOString(),console.log("[welcome-tracking]",e)}function Is(){const e=document.getElementById("welcome-carousel-track"),t=document.getElementById("welcome-carousel-dots"),n=document.getElementById("welcome-carousel-prev"),s=document.getElementById("welcome-carousel-next"),a=document.getElementById("welcome-carousel");if(!e||!t||!n||!s||!a)return{onShow(){},onDismiss(){}};const i=e.children;let r=0,d=null,c=null,l=null,m={},u={};const v=[];let x=0;function E(){const g=document.getElementById("welcome-gate-modal");return!!(g&&!g.classList.contains("hidden"))}function w(g){return!!(g&&g.complete&&g.naturalWidth>0)}function S(){c&&(clearTimeout(c),c=null)}function M(){const g=document.getElementById("welcome-mobile-banner");return g&&window.getComputedStyle(g).display!=="none"?g:a}function G(){const g=M();if(!E()||!g)return 0;const f=g.getBoundingClientRect();if(!f.width||!f.height)return 0;const T=Math.max(0,Math.min(f.right,window.innerWidth)-Math.max(f.left,0)),D=Math.max(0,Math.min(f.bottom,window.innerHeight)-Math.max(f.top,0));return T*D/(f.width*f.height)}function A(g){if(c&&!g)return;S(),x=G();const f=r+1;let T=i[r];const D=document.getElementById("welcome-mobile-banner"),Je=D&&window.getComputedStyle(D).display!=="none";Je&&(T=D.querySelector("img")),!(!E()||m[f]||!Je&&u[r])&&document.visibilityState==="visible"&&(x<.5||w(T)&&(c=setTimeout(()=>{c=null,!(r+1!==f||!E())&&(document.visibilityState!=="visible"||x<.5||!w(T)||u[r]||(m[f]=!0,ne({event:"welcome_modal_viewed",slide_index:f,change_method:g||null})))},1e3)))}function Y(g){const f=Array.prototype.indexOf.call(i,g);f<0||u[f]||(u[f]=!0,f===r&&S(),E()&&ne({event:"welcome_modal_image_failed",slide_index:f+1}))}if(Array.prototype.forEach.call(i,g=>{g.addEventListener("error",()=>Y(g)),g.addEventListener("load",()=>{i[r]===g&&A(null)}),g.complete&&g.naturalWidth===0&&Y(g)}),"IntersectionObserver"in window){const g=document.getElementById("welcome-mobile-banner"),f=new IntersectionObserver(T=>{T.forEach(D=>{D.target===M()&&(x=D.intersectionRatio||0,x>=.5?A(null):S())})},{threshold:[0,.5,1]});f.observe(a),g&&f.observe(g)}else x=1;document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"?A(null):S()});function Te(){t.innerHTML="";for(let g=0;g<i.length;g+=1){const f=document.createElement("button");f.type="button",f.className="welcome-carousel-dot h-2 rounded-full transition-all duration-300 shadow "+(g===r?"w-5 bg-black":"w-2 bg-black/50 hover:bg-black/80"),f.setAttribute("data-index",g),f.setAttribute("aria-label","Go to slide "+(g+1)),t.appendChild(f)}}function j(g,f){const T=(g+i.length)%i.length,D=T!==r;if(r=T,e.style.transform="translateX(-"+r*100+"%)",Te(),!D||!f||!E()){A(f||null);return}f!=="auto_slide"&&v.push({slide_index:r+1,change_method:f}),ne({event:"welcome_modal_slide_changed",slide_index:r+1,change_method:f}),A(f)}function te(g){j(r+1,g)}function P(g){j(r-1,g)}function h(){y(),i.length>1&&(d=setInterval(()=>te("auto_slide"),5e3))}function y(){d&&(clearInterval(d),d=null)}s.addEventListener("click",()=>{te("next_button"),h()}),n.addEventListener("click",()=>{P("previous_button"),h()}),t.addEventListener("click",g=>{const f=g.target.closest(".welcome-carousel-dot");f&&(j(parseInt(f.getAttribute("data-index"),10),"dot"),h())}),a.addEventListener("mouseenter",y),a.addEventListener("mouseleave",h);let b=!1,I=0,k=0,R=0;function X(g){if(!(i.length<2)&&!g.target.closest("#welcome-carousel-prev, #welcome-carousel-next, #welcome-carousel-dots")&&(b=!0,k=0,I=g.clientX,R=a.getBoundingClientRect().width||1,e.style.transition="none",y(),a.setPointerCapture))try{a.setPointerCapture(g.pointerId)}catch{}}function Bt(g){if(!b)return;k=g.clientX-I;const f=-(r*100),T=k/R*100;e.style.transform="translateX("+(f+T)+"%)"}function _e(){if(!b)return;b=!1,e.style.transition="";const g=R*.15;k<=-g?te("swipe"):k>=g?P("swipe"):j(r),k=0,h()}return a.addEventListener("pointerdown",X),a.addEventListener("pointermove",Bt),a.addEventListener("pointerup",_e),a.addEventListener("pointercancel",_e),a.addEventListener("pointerleave",()=>{b&&_e()}),j(0),h(),{onShow(){l=Date.now(),m={},v.length=0,S(),ne({event:"welcome_modal_shown",slide_index:r+1}),A(null)},onDismiss(g){S();const f=l?Math.round((Date.now()-l)/1e3):0,T=Object.keys(m).map(D=>Number(D));ne({event:"welcome_modal_dismissed",dismiss_method:g,viewed:T.length>0,slides_viewed:T,slide_clicks:v.slice(),dont_show_again:!0,time_to_dismiss_seconds:f})}}}let Ke={onShow(){},onDismiss(){}};function Be(){return document.getElementById("welcome-gate-modal")}function ks(){return localStorage.getItem(p.WELCOME_SEEN)==="true"}function Lt(){const e=Be();if(!e)return;we(e);const t=e.querySelector(".p-modal__dialog");t&&t.focus(),Ke.onShow()}function be(e){const t=Be();!t||t.classList.contains("hidden")||(Ke.onDismiss(e||"close_button"),localStorage.setItem(p.WELCOME_SEEN,"true"),le(t),ha(),bt(),C("highlight-feature"))}function Ss(){return Z(Be())}function Ls(){Ke=Is();const e=document.getElementById("welcome-gate-continue-btn"),t=document.getElementById("welcome-gate-close-btn"),n=document.getElementById("welcome-gate-backdrop"),s=document.getElementById("show-welcome-modal-btn");e&&e.addEventListener("click",()=>be("continue")),t&&t.addEventListener("click",()=>be("close_button")),n&&n.addEventListener("click",()=>be("backdrop")),s&&s.addEventListener("click",()=>{localStorage.removeItem(p.WELCOME_SEEN),Lt()})}function Bs(){Be()&&!ks()?Lt():ua()}function Ts(){document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(Ss()){be("esc");return}if(an()){ct();return}if(ia()){me();return}Z(document.getElementById("theme-picker-modal"))&&se(),bs()&&St()&&fe(),ys()&&re()}})}function rt(){console.log("Initializing Dashboard...");const e=document.createElement("div");e.id="app",e.className="contents",e.innerHTML=rs(),document.body.prepend(e),Ht(),Qn(),Fn(),ya(),ls(),Ia(),Ga(),cn(),hs(),ra(),Ls(),Ts(),ft({tabsElId:"feature-highlight-tabs",bodyElId:"feature-highlight-body",autoplay:!1,source:"homepage"}),At(),q(),$(),de(),F(),Rn()&&Wn(),es(),da(),Bs(),ps(),cs(),gs(),Es(),console.log("Ready!")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rt):rt();
