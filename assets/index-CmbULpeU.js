(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const p={APP_TOGGLE_STATE:"findter_app_toggle_state",SEARCH_SUGGESTION_TOGGLE_STATE:"findter_search_suggestion_toggle_state",INDEXING_COMPLETE:"findter_indexing_complete",SELECTED_THEME:"findter_selected_theme",LAST_ENABLED_THEME:"findter_last_enabled_theme",FIRST_ENABLE_DONE:"findter_first_enable_done",REVIEW_SUBMITTED:"findter_review_submitted",FEEDBACK_STATE:"findter_feedback_state",THEME_COMPAT_PENDING:"findter_theme_compat_pending",THEME_COMPAT_RESOLVED:"findter_theme_compat_resolved",CRISP_REQUESTS:"findter_crisp_requests",COLLAB_CODE_RECEIVED:"findter_collab_code_received",HAS_ONBOARDED:"findter_has_onboarded",WELCOME_SEEN:"findter_welcome_seen_install",HIGHLIGHT_CONTINUE:"findter_highlight_continue_clicked",HIGHLIGHT_VIEW_FEATURE:"findter_highlight_view_feature",HIGHLIGHT_INDEX_COMPLETED_AT:"findter_highlight_index_completed_at",HIGHLIGHT_EXPIRED:"findter_highlight_screen_expired"},ze="findter_highlight_session_hide",Xe="findter_highlight_back_target",bt="findter_highlight_items_v2",ot=[{code:"filter",parentCode:null,standalone:!1,name:"Filter",thumbnail:"",media:"",enabled:!0,order:0,navigateUrl:"advanced.html"},{code:"filter-by-metafields",parentCode:"filter",name:"Filter by Metafields",thumbnail:"",media:"",enabled:!0,order:0,navigateUrl:"advanced.html",advancedFeatureId:1},{code:"image-swatches-filter",parentCode:"filter",name:"Image Swatches Filter",thumbnail:"",media:"",enabled:!0,order:1,navigateUrl:"advanced.html",advancedFeatureId:5},{code:"multi-filters-one-source",parentCode:"filter",name:"Multi-Filters by One Source",thumbnail:"",media:"",enabled:!0,order:2,navigateUrl:"advanced.html",advancedFeatureId:6},{code:"year-make-model",parentCode:null,standalone:!0,name:"Year Make Model",thumbnail:"",media:"",enabled:!0,order:1,navigateUrl:"advanced.html",advancedFeatureId:"sample-ymm"},{code:"market",parentCode:null,standalone:!1,name:"Market",thumbnail:"",media:"",enabled:!0,order:2,navigateUrl:"advanced.html"},{code:"local-currency-adaptation",parentCode:"market",name:"Local Currency Adaptation",thumbnail:"",media:"",enabled:!0,order:0,navigateUrl:"advanced.html",advancedFeatureId:4},{code:"merchandising",parentCode:null,standalone:!1,name:"Merchandising",thumbnail:"",media:"",enabled:!0,order:3,navigateUrl:"advanced.html"},{code:"boost-in-stock-products",parentCode:"merchandising",name:"Boost In-Stock Products",thumbnail:"",media:"",enabled:!0,order:0,navigateUrl:"advanced.html",advancedFeatureId:2},{code:"hide-out-of-stock-products",parentCode:"merchandising",name:"Hide Out-of-Stock Products",thumbnail:"",media:"",enabled:!0,order:1,navigateUrl:"advanced.html",advancedFeatureId:3}];function B(){try{const e=localStorage.getItem(bt);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}function re(e){localStorage.setItem(bt,JSON.stringify(e))}function Rt(){const e=B();if(e.length===0){re(ot);return}const t={};e.forEach(a=>{t[a.code]=!0});let n=!1;ot.forEach(a=>{t[a.code]||(e.push(a),n=!0)}),n&&re(e)}function _e(e){const t=B();let n=-1;t.forEach((a,i)=>{a.code===e.code&&(n=i)}),n===-1?t.push(e):t[n]=e,re(t)}function Wt(e){const t=B().filter(n=>n.code!==e&&n.parentCode!==e);re(t)}Rt();const me=new Map;function G(e,t){return me.has(e)||me.set(e,new Set),me.get(e).add(t),()=>me.get(e).delete(t)}function T(e,t){const n=me.get(e);n&&n.forEach(a=>a(t))}const o={isIndexing:!0,indexingComplete:!1,appEnabled:!1,indexingStartTime:null,indexingDuration:2e4,selectedTheme:"",lastEnabledTheme:"",firstEnableDone:!1,flowCompleted:!1,hasEnabledInEditor:!1,indexingInterval:null,currentPage:"home",appToggleState:"off",searchSuggestionState:"off",hasOnboarded:!1};function Ut(){return o.indexingComplete&&o.appToggleState==="on"}function qt(){const e=localStorage.getItem(p.APP_TOGGLE_STATE),t=localStorage.getItem(p.SEARCH_SUGGESTION_TOGGLE_STATE),n=localStorage.getItem(p.INDEXING_COMPLETE),a=localStorage.getItem(p.SELECTED_THEME),i=localStorage.getItem(p.LAST_ENABLED_THEME),s=localStorage.getItem(p.FIRST_ENABLE_DONE);e&&(o.appToggleState=e,o.appEnabled=e==="on"),t&&(o.searchSuggestionState=t),n==="true"&&(o.indexingComplete=!0,o.isIndexing=!1),a&&(o.selectedTheme=a),i&&(o.lastEnabledTheme=i),s==="true"&&(o.firstEnableDone=!0),localStorage.getItem(p.HAS_ONBOARDED)==="true"&&(o.hasOnboarded=!0),o.indexingComplete&&(o.hasOnboarded=!0,localStorage.getItem(p.HIGHLIGHT_INDEX_COMPLETED_AT)||localStorage.setItem(p.HIGHLIGHT_INDEX_COMPLETED_AT,String(Date.now())))}function Vt(){window.addEventListener("storage",e=>{T("storage",e)})}function He(){const e=document.getElementById("editor-indexing-banner"),t=document.getElementById("enable-editor-modal-btn");e&&(o.indexingComplete?(e.className="rounded-lg p-4 mb-6 transition-all duration-300 bg-emerald-50 border border-emerald-200",e.innerHTML='<div class="flex items-start gap-3"><div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0 mt-0.5"><i class="fas fa-check-circle text-sm"></i></div><div class="flex-1"><p class="text-[14px] font-semibold text-emerald-800 mb-1">Data indexing is complete!</p><p class="text-[13px] text-emerald-700 leading-relaxed">You can now proceed to enable the app in your Theme Editor.</p></div></div>',t&&(t.disabled=!1,t.classList.remove("btn-disabled-overlay"))):(e.className="rounded-lg p-4 mb-6 transition-all duration-300 bg-amber-50 border border-amber-200",e.innerHTML='<div class="flex items-start gap-3"><div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0 mt-0.5 animate-pulse-custom"><i class="fas fa-exclamation-triangle text-sm"></i></div><div class="flex-1"><p class="text-[14px] font-semibold text-amber-800 mb-1">Please wait for indexing to complete</p><p class="text-[13px] text-amber-700 leading-relaxed">Up-to-date data are being collected. Please wait until this process is complete before continuing with the app.</p></div></div>',t&&(t.disabled=!0,t.classList.add("btn-disabled-overlay"))))}function Q(){const e=document.getElementById("go-to-filter-btn"),t=document.getElementById("filter-lock-hint");e&&(e.disabled=!1),t&&t.classList.add("hidden"),He()}function $t(){Q()}function Yt(){return'<button type="button" data-action="enable-app-from-banner" class="bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors shadow-sm inline-flex items-center gap-2"><i class="fas fa-external-link-alt text-xs"></i>Enable App in Theme Editor</button>'}function ht(){return'<div class="unified-status-banner indexing-state rounded-lg p-4 border border-amber-300"><div class="flex items-start gap-3"><div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0 mt-0.5 animate-pulse-custom"><i class="fas fa-exclamation-triangle text-sm"></i></div><div class="flex-1"><p class="text-[14px] font-semibold text-amber-800 mb-1">Collecting data</p><p class="text-[13px] text-amber-700 leading-relaxed">Up-to-date data are being collected. Please wait until this process is complete before continuing with the app.</p></div></div></div>'}function zt(){return'<div class="unified-status-banner complete-state rounded-lg p-4 border border-amber-300"><div class="flex items-start gap-3"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0 mt-0.5"><i class="fas fa-check-circle text-sm"></i></div><div class="flex-1"><p class="text-[14px] font-semibold text-green-800 mb-1">Data indexing is completed.</p><p class="text-[13px] text-amber-700 leading-relaxed mb-3">Your data has been successfully indexed. To activate the app on your storefront, please enable it in your Theme Editor.</p>'+Yt()+"</div></div></div>"}function Xt(){return'<div class="unified-status-banner complete-state rounded-lg p-4 border border-amber-300"><div class="flex items-start gap-3"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0 mt-0.5"><i class="fas fa-check-circle text-sm"></i></div><div class="flex-1"><p class="text-[14px] font-semibold text-green-800 mb-1">Data indexing is completed.</p><p class="text-[13px] text-amber-700 leading-relaxed">Look through the features below, or start onboarding to activate Findter on your theme.</p></div></div></div>'}const Kt=["home","filter","search","metafield","design","analytics-app","advanced"];function Jt(e){return e==="home"?document.getElementById("unified-status-banner"):document.getElementById("unified-banner-"+e)}function Z(){let e="",t=!0;o.indexingComplete?o.firstEnableDone?t=!1:e=zt():e=ht(),Kt.forEach(a=>{const i=Jt(a);i&&(t?(i.classList.remove("hidden"),i.innerHTML=e):(i.classList.add("hidden"),i.innerHTML=""))});const n=document.getElementById("indexing-banner-container");n&&(n.classList.add("hidden"),n.innerHTML="")}function H(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const _=H;function Me(e){e&&(e.classList.remove("hidden"),document.body.style.overflow="hidden")}function ve(e){e&&(e.classList.add("hidden"),document.body.style.overflow="")}function le(e){return!!(e&&!e.classList.contains("hidden"))}function Qt(){return'<span class="theme-live-badge">Live</span>'}function Zt(){return'<span class="theme-status-badge theme-status-badge--success">Compatible</span>'}function en(){return'<span class="w-fit whitespace-nowrap border border-amber-200 bg-amber-50 text-amber-700 text-[11px] font-medium px-2 py-1 rounded-md inline-flex items-center gap-1.5"><i class="fas fa-circle-notch fa-spin text-[9px]"></i>Working on it</span>'}const tn=["Allure","Atelier","Be Yours","Broadcast","Colorblock","Concept","Craft","Crave","Dawn","Dwell","Enterprise","Eurus","Expanse","Fabric","Flawless","Focal","Heritage","Horizon","Hyper","Ignite","Impulse","Next","Noom","Origin","Pipeline","Pitch","Publisher","Refresh","Ride","Rise","Ritual","Savor","Sense","Sleek","Spotlight","Stiletto","Studio","Taste","Tinker","Trade","Vessel","Vivid","Wonder","Xtra"],nn=["Be Yours","Colorblock","Sense","Crave","Flawless","Hyper","Noom","Pitch","Ritual","Stiletto","Taste","Tinker","Vessel","Xtra"],dt=["Allure","Be Yours","Colorblock","Atelier","Broadcast","Sense"],an=dt.concat(tn.filter(e=>dt.indexOf(e)===-1)),sn=60*1e3,rn=3,on=1440*60*1e3;function dn(e){return nn.indexOf(e)===-1}function he(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):{}}catch{return{}}}function ln(e){return!!he(p.THEME_COMPAT_RESOLVED)[e]}function cn(e){return!!he(p.THEME_COMPAT_PENDING)[e]}function xt(e){const t=he(p.THEME_COMPAT_PENDING);t[e]=!0,localStorage.setItem(p.THEME_COMPAT_PENDING,JSON.stringify(t))}function un(e){const t=he(p.THEME_COMPAT_PENDING);delete t[e],localStorage.setItem(p.THEME_COMPAT_PENDING,JSON.stringify(t));const n=he(p.THEME_COMPAT_RESOLVED);n[e]=!0,localStorage.setItem(p.THEME_COMPAT_RESOLVED,JSON.stringify(n))}function Ke(){try{const e=localStorage.getItem(p.CRISP_REQUESTS),t=e?JSON.parse(e):[],n=Date.now();return t.filter(a=>a&&a.theme&&n-a.ts<on)}catch{return[]}}function pn(e){return Ke().some(t=>t.theme===e)}function mn(e){const t=Ke();if(t.some(i=>i.theme===e))return"same_theme";const n=t.reduce((i,s)=>Math.max(i,s.ts),0);if(n&&Date.now()-n<sn)return"cooldown";const a={};return t.forEach(i=>{a[i.theme]=!0}),Object.keys(a).length>=rn?"daily_limit":""}function gn(e){const t=Ke();t.push({theme:e,ts:Date.now()}),localStorage.setItem(p.CRISP_REQUESTS,JSON.stringify(t))}function fn(e){return dn(e)||ln(e)?"compatible":cn(e)||pn(e)?"pending":"incompatible"}let Ie=0,je=!1,lt=!1,Se=null;function ye(){return{bubble:document.getElementById("chat-bubble"),input:document.getElementById("chat-input"),messages:document.getElementById("chat-messages"),badge:document.getElementById("chat-badge")}}function K({hideBadge:e=!1}={}){const{bubble:t,badge:n}=ye();t&&t.classList.add("active"),e&&n&&n.classList.add("hidden")}function vt(){const{bubble:e}=ye();e&&e.classList.remove("active")}function bn(){const{bubble:e}=ye();e&&e.classList.toggle("active")}function hn(){const{bubble:e}=ye();return!!(e&&e.classList.contains("active"))}function xn(e){Ie=Date.now()+e}function O(e,t,n={}){const{messages:a}=ye();if(!a)return;const i=n.html?e:H(e),s=document.createElement("div");s.className="flex gap-2 "+(t?"justify-end":""),t?s.innerHTML='<div class="bg-red-600 text-white rounded-lg rounded-tr-none px-3 py-2 text-[13px] max-w-[85%]">'+i+"</div>":s.innerHTML='<div class="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0"><i class="fas fa-robot text-xs"></i></div><div class="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2 text-[13px] text-gray-700 max-w-[85%]">'+i+"</div>",a.appendChild(s),a.scrollTop=a.scrollHeight}function vn(e){const t=e.match(/\d+/g)||[];return t.length===1&&t[0].length===4}function yn(e){xt(e),gn(e),T("themes:changed"),K({hideBadge:!0}),O("Hi! I'd love to use Findter with the "+e+" theme, could you help make it compatible?",!0);let t="We've received your request to support the "+H(e)+" theme.";const n=localStorage.getItem(p.COLLAB_CODE_RECEIVED)==="true";!lt&&!n&&(lt=!0,je=!0,t+="<br><br>To proceed, please send us your collaborator code. You can find it by going to:<br>Shopify Admin &rarr; Settings &rarr; Users and permissions &rarr; Security &rarr; Store security &rarr; Collaborators &mdash; your code will be displayed there.<br><br>Once we receive your code, we&rsquo;ll send a collaboration request. Please grant us access when it arrives.<br><br>For your safety, we will duplicate your live theme and apply all fixes to the duplicated version, ensuring your live store remains unaffected"),setTimeout(()=>{O(t,!1,{html:!0})},800),Se=e}function wn(e){if(O(e,!0),vn(e)&&Se){const t=Se;Se=null,je=!1,localStorage.setItem(p.COLLAB_CODE_RECEIVED,"true"),setTimeout(()=>{O("Thanks for providing the information. Our team has received your request and will get back to you as soon as possible.",!1)},700),setTimeout(()=>{un(t),T("themes:changed"),O("Good news! "+t+" is now compatible with Findter, you're all set to select it.",!1)},4e3);return}if(je){setTimeout(()=>{O("Please check your code again. It needs to be 4 digits.",!1)},700);return}if(Ie&&Date.now()<=Ie){Ie=0,setTimeout(()=>{O("Thanks for reaching out! 😊 We've received your message and our team is already on it, we'll get back to you as soon as possible.",!1)},700);return}setTimeout(()=>{O("Thank you! We'll respond soon.",!1)},600)}function En(){const e=document.getElementById("send-chat-btn"),t=document.getElementById("chat-input"),n=document.getElementById("floating-chat-btn"),a=document.getElementById("close-chat-bubble");n&&n.addEventListener("click",()=>bn()),a&&a.addEventListener("click",()=>vt()),!(!e||!t)&&(e.addEventListener("click",()=>{const i=t.value.trim();i&&(t.value="",wn(i))}),t.addEventListener("keypress",i=>{i.key==="Enter"&&e.click()}))}function Je(){return document.getElementById("theme-picker-modal")}function ct(e){const t=document.getElementById("theme-request-notice");t&&(t.textContent=e,t.classList.remove("hidden"))}function yt(){const e=document.getElementById("theme-request-notice");e&&e.classList.add("hidden")}function oe(){const e=document.getElementById("guide-theme-dropdown-label"),t=document.getElementById("theme-picker-list"),n=o.selectedTheme?o.selectedTheme:"-- No theme selected --";if(e&&(e.textContent=n),!t)return;let a="";an.forEach((i,s)=>{const r=o.selectedTheme===i,d=fn(i),l=d==="compatible",c=_(i),b=s===0?Qt():"";let m;d==="compatible"?m=Zt():d==="pending"?m=en():m='<button type="button" class="w-fit whitespace-nowrap border border-gray-300 bg-white text-[#303030] text-[11px] font-medium px-2 py-1 rounded-md hover:bg-gray-100 transition-colors" data-howto-theme="'+c+'">Make compatible</button>',a+='<div class="grid grid-cols-[1fr_170px] items-center py-2.5 border-b border-gray-50 '+(r?"bg-blue-50 ":"")+(l?"cursor-pointer hover:bg-[#f7f7f7] ":"")+'" '+(l?'data-theme="'+c+'"':"")+'><div class="pl-6 pr-3 flex items-center gap-2 text-[14px] font-medium text-[#303030]">'+_(i)+b+'</div><div class="pl-3 pr-6 flex justify-center">'+m+"</div></div>"}),t.innerHTML=a}function ie(){const e=Je();e&&(yt(),Me(e),oe())}function ge(){ve(Je())}function kn(){const e=document.getElementById("close-theme-picker-modal-btn"),t=document.getElementById("theme-picker-modal-overlay"),n=document.getElementById("theme-picker-list");e&&e.addEventListener("click",ge),t&&t.addEventListener("click",ge),n&&n.addEventListener("click",a=>{const i=a.target.closest("[data-howto-theme]");if(i){const r=i.getAttribute("data-howto-theme"),d=mn(r);if(d==="cooldown"){ct("Wait a minute before requesting another theme.");return}if(d==="daily_limit"){ct("You can request up to 3 themes a day.");return}if(d==="same_theme"){xt(r),oe();return}yt(),yn(r),ge();return}const s=a.target.closest("[data-theme]");s&&(o.selectedTheme=s.getAttribute("data-theme"),localStorage.setItem(p.SELECTED_THEME,o.selectedTheme),oe(),T("theme:chosen"),ge(),setTimeout(()=>T("open-editor-modal"),200))})}G("open-theme-picker",()=>ie());G("themes:changed",()=>{le(Je())&&oe()});const de={used:1595,limit:5e4},In=1595,ut=52e3,Sn="flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600 whitespace-nowrap",Ln="flex items-center gap-2 px-2.5 py-1 rounded-md border border-green-200 bg-white text-[11px] font-semibold text-green-700 whitespace-nowrap",Bn="flex items-center gap-2 px-2.5 py-1 rounded-md border border-yellow-200 bg-yellow-100 text-[11px] font-semibold text-[#303030] whitespace-nowrap";let Re=1;function Tn(e){Re=e}function _n(e){const t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return t+"/"+n+"/"+a}function Cn(){return de.used.toLocaleString("en-US")+" / "+de.limit.toLocaleString("en-US")}function pt(e,t){const n=de.used>de.limit;e.className=n?Bn:Ln,t.className=n?"w-2 h-2 rounded-full bg-yellow-600":"w-2 h-2 rounded-full bg-green-500"}function wt(){const e=document.getElementById("status-plan-expiry-row"),t=document.getElementById("status-plan-expiry-label"),n=document.getElementById("status-plan-expiry");if(!e||!t||!n)return;const a=new Date;a.setHours(12,0,0,0),a.setDate(a.getDate()+Re);const i=Re<=0;t.textContent=i?"Expired":"Expires",n.textContent=_n(a),n.className=i?"inline-flex items-center px-2.5 py-1 rounded-md border border-yellow-300 bg-yellow-50 text-[11px] font-semibold tabular-nums text-[#303030]":"inline-flex items-center px-2.5 py-1 rounded-md border border-[#e3e3e3] bg-white text-[11px] font-semibold tabular-nums text-[#303030]"}function We(){const e=document.getElementById("plan-usage-label"),t=document.getElementById("plan-usage-count"),n=document.getElementById("plan-usage-status"),a=document.getElementById("plan-usage-dot"),i=document.getElementById("plan-usage-status-text");if(!e||!t||!n||!a||!i)return;const s=o.appToggleState==="on"&&o.firstEnableDone,r=Cn();if(!o.indexingComplete){e.textContent="Products",t.classList.add("hidden"),n.className=Sn,a.className="w-2 h-2 rounded-full bg-gray-400",i.textContent="Collecting data";return}if(!s){e.textContent="Products",t.classList.add("hidden"),pt(n,a),i.textContent=r;return}e.textContent="Products indexed",t.classList.add("hidden"),pt(n,a),i.textContent=r}function U(){const e=o.appToggleState==="on"&&o.firstEnableDone,t=o.searchSuggestionState==="on",n=document.getElementById("status-app-embed"),a=document.getElementById("status-search-suggestion"),i=document.getElementById("status-app-plan");n&&(n.className=e?"flex items-center gap-2 px-2.5 py-1 rounded-md border border-green-200 bg-white text-[11px] font-semibold text-green-700":"flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600",n.innerHTML=e?'<span class="w-2 h-2 rounded-full bg-green-500"></span>Active':'<span class="w-2 h-2 rounded-full bg-gray-400"></span>Inactive'),a&&(a.className=t?"flex items-center gap-2 px-2.5 py-1 rounded-md border border-green-200 bg-white text-[11px] font-semibold text-green-700":"flex items-center gap-2 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600",a.innerHTML=t?'<span class="w-2 h-2 rounded-full bg-green-500"></span>Active':'<span class="w-2 h-2 rounded-full bg-gray-400"></span>Inactive'),i&&(i.className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-blue-200 bg-white text-[11px] font-semibold text-blue-700",i.innerHTML='<span class="w-2 h-2 rounded-full bg-blue-500"></span>Trial'),wt(),We()}const An=`
                <div id="page-master" class="page-view">
                    <div class="max-w-[1040px] mx-auto">
                        <div class="mb-6"><h1 class="text-[22px] font-bold text-[#303030]">Master</h1></div>
                        <div id="master-tabs" class="flex gap-2 border-b border-gray-200 mb-5"></div>
                        <div id="master-tab-content"></div>
                    </div>
                </div>
`;function Hn(e,t,n){const a=_(e.code),i=n?'<button type="button" class="group-expand-toggle text-gray-400 hover:text-gray-600 mr-1.5" data-code="'+a+'"><i class="fas fa-chevron-'+(t?"down":"right")+' text-[10px]"></i></button>':'<span class="inline-block w-[18px]"></span>';return'<tr class="highlight-row border-b border-gray-100 bg-gray-50/60" draggable="true" data-code="'+a+'" data-parent=""><td class="px-3 py-2.5 text-gray-400 cursor-grab w-8"><i class="fas fa-grip-vertical"></i></td><td class="px-3 py-2.5 text-[13px] text-[#303030] font-semibold">'+i+H(e.name)+'</td><td class="px-3 py-2.5"><button type="button" class="highlight-status-toggle w-9 h-5 rounded-full relative transition-colors '+(e.enabled?"bg-green-500":"bg-gray-300")+'" data-code="'+a+'"><span class="absolute top-0.5 '+(e.enabled?"right-0.5":"left-0.5")+' w-4 h-4 bg-white rounded-full shadow transition-all"></span></button></td><td class="px-3 py-2.5 text-[12px]">'+(e.standalone?'<span class="font-medium text-green-700">Yes</span>':'<span class="text-gray-400">No</span>')+'</td><td class="px-3 py-2.5 text-right whitespace-nowrap"><button type="button" class="highlight-edit-btn text-gray-500 hover:text-[#303030] px-2" data-code="'+a+'"><i class="fas fa-pen text-xs"></i></button><button type="button" class="highlight-delete-btn text-gray-500 hover:text-red-600 px-2" data-code="'+a+'"><i class="fas fa-trash text-xs"></i></button></td></tr>'}function Mn(e){const t=_(e.code);return'<tr class="highlight-row border-b border-gray-100" draggable="true" data-code="'+t+'" data-parent="'+_(e.parentCode)+'"><td class="px-3 py-2.5 text-gray-400 cursor-grab w-8"><i class="fas fa-grip-vertical"></i></td><td class="px-3 py-2.5 text-[13px] text-gray-600 pl-8"><span class="text-gray-300 mr-1">&#8627;</span>'+H(e.name)+'</td><td class="px-3 py-2.5"><button type="button" class="highlight-status-toggle w-9 h-5 rounded-full relative transition-colors '+(e.enabled?"bg-green-500":"bg-gray-300")+'" data-code="'+t+'"><span class="absolute top-0.5 '+(e.enabled?"right-0.5":"left-0.5")+' w-4 h-4 bg-white rounded-full shadow transition-all"></span></button></td><td class="px-3 py-2.5"></td><td class="px-3 py-2.5 text-right whitespace-nowrap"><button type="button" class="highlight-edit-btn text-gray-500 hover:text-[#303030] px-2" data-code="'+t+'"><i class="fas fa-pen text-xs"></i></button><button type="button" class="highlight-delete-btn text-gray-500 hover:text-red-600 px-2" data-code="'+t+'"><i class="fas fa-trash text-xs"></i></button></td></tr>'}function Dn(e,t){return'<button type="button" id="'+e+'" class="w-9 h-5 rounded-full relative transition-colors shrink-0 '+(t?"bg-green-500":"bg-gray-300")+'"><span class="absolute top-0.5 '+(t?"right-0.5":"left-0.5")+' w-4 h-4 bg-white rounded-full shadow transition-all"></span></button>'}function Nn(e,t){const n=!t;e.classList.toggle("bg-green-500",n),e.classList.toggle("bg-gray-300",!n);const a=e.querySelector("span");return a&&(a.classList.toggle("right-0.5",n),a.classList.toggle("left-0.5",!n)),n}const J=5;function Ce(e){return String(e||"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function Ae(e,t,n){const a=s=>t.some(r=>r.code===s&&r.code!==n);if(!a(e))return e;let i=2;for(;a(e+"-"+i);)i+=1;return e+"-"+i}function Qe(e){return'<div class="p-5 space-y-3 border-b border-gray-100"><div><label class="block text-[12px] text-gray-500 mb-1">Thumbnail Link</label><input type="text" id="highlight-thumbnail-input" value="'+_(e.thumbnail||"")+'" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="https://... (image URL)"></div><div><label class="block text-[12px] text-gray-500 mb-1">Media Link (image or video)</label><input type="text" id="highlight-media-input" value="'+_(e.media||"")+'" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="https://..."></div></div><div class="p-5"><label class="block text-[12px] text-gray-500 mb-1">Navigate URL</label><input type="text" id="highlight-navigate-input" value="'+_(e.navigateUrl||"")+'" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="filter or advanced#filter"></div>'}function Ze(e,t){const n=document.getElementById("highlight-form-back-btn"),a=document.getElementById("highlight-form-cancel-btn"),i=document.getElementById("highlight-enabled-toggle");n&&n.addEventListener("click",t),a&&a.addEventListener("click",t),i&&i.addEventListener("click",()=>{e.enabled=Nn(i,e.enabled)})}function et(e){return Dn("highlight-enabled-toggle",e)}function Pn(){const e=document.getElementById("highlight-table-body");if(!e)return;let t=null;e.querySelectorAll("tr.highlight-row").forEach(n=>{n.addEventListener("dragstart",()=>{t=n,n.classList.add("opacity-50")}),n.addEventListener("dragend",()=>{n.classList.remove("opacity-50"),t=null}),n.addEventListener("dragover",a=>{if(a.preventDefault(),!t||t===n||t.getAttribute("data-parent")!==n.getAttribute("data-parent"))return;const i=n.getBoundingClientRect(),s=a.clientY-i.top<i.height/2;e.insertBefore(t,s?n:n.nextSibling)}),n.addEventListener("drop",a=>{a.preventDefault(),On()})})}function On(){const e=document.getElementById("highlight-table-body");if(!e)return;const t=B(),n={};Array.prototype.forEach.call(e.querySelectorAll("tr.highlight-row"),a=>{const i=a.getAttribute("data-parent")||"";n[i]||(n[i]=[]),n[i].push(a.getAttribute("data-code"))}),Object.keys(n).forEach(a=>{n[a].forEach((i,s)=>{const r=t.filter(d=>d.code===i)[0];r&&(r.order=s)})}),re(t),T("master:show-list")}function mt(e){const t=document.getElementById("master-tab-content");if(!t)return;const n=B(),a=e?n.filter(c=>c.code===e)[0]:null,i=!a,s=a?Object.assign({},a):{code:"",standalone:!1,name:"",thumbnail:"",media:"",enabled:!0,order:0,navigateUrl:""};t.innerHTML='<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden"><div class="p-5 border-b border-gray-100 flex items-center justify-between"><button type="button" id="highlight-form-back-btn" class="text-[13px] text-gray-500 hover:text-[#303030] inline-flex items-center gap-1"><i class="fas fa-arrow-left text-xs"></i> Back</button><h3 class="font-semibold text-[15px] text-[#303030]">'+(i?"Add group":"Edit group")+'</h3></div><div class="p-5 space-y-3 border-b border-gray-100"><div class="flex items-end justify-between gap-3"><div class="flex-1"><label class="block text-[12px] text-gray-500 mb-1">Group Name</label><input type="text" id="highlight-name-input" value="'+_(s.name)+'" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="Filter"></div><div class="pb-2">'+et(s.enabled)+'</div></div><label class="flex items-start gap-2 cursor-pointer"><input type="checkbox" id="highlight-standalone-input" '+(s.standalone?"checked":"")+' class="w-4 h-4 rounded border-gray-300 mt-0.5"><span class="text-[13px] text-[#303030]">Standalone: tick if this Group is itself a Feature (e.g. Year Make Model)</span></label></div><div id="standalone-fields" class="'+(s.standalone?"":"hidden")+'">'+Qe(s)+'</div><div class="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-200 bg-gray-50"><button type="button" id="highlight-form-cancel-btn" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors">Cancel</button><button type="button" id="highlight-form-save-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">Save</button></div></div>',Ze(s,()=>T("master:show-list"));const r=document.getElementById("highlight-standalone-input"),d=document.getElementById("standalone-fields");r&&r.addEventListener("change",()=>{s.standalone=r.checked,d&&d.classList.toggle("hidden",!s.standalone)});const l=document.getElementById("highlight-form-save-btn");l&&l.addEventListener("click",()=>{const c=document.getElementById("highlight-name-input").value.trim();if(!c){alert("Group Name is required.");return}const b=document.getElementById("highlight-thumbnail-input"),m=document.getElementById("highlight-media-input"),I=document.getElementById("highlight-navigate-input"),v=B(),k=i?Ae(Ce(c)||"group",v,s.code):s.code,y=v.filter(C=>!C.parentCode&&C.code!==s.code).length,w={code:k,parentCode:null,standalone:!!s.standalone,name:c,thumbnail:b?b.value.trim():s.thumbnail||"",media:m?m.value.trim():s.media||"",enabled:s.enabled,order:i?y:s.order,navigateUrl:I?I.value.trim():s.navigateUrl||"",unlocked:s.unlocked||!1,active:s.active!==!1,advancedFeatureId:s.advancedFeatureId};_e(w),i&&!w.standalone?T("master:add-feature",k):T("master:show-list")})}function Ue(e,t){const n=document.getElementById("master-tab-content");if(!n)return;const a=B(),i=a.filter(c=>c.code===e)[0];if(!i){T("master:show-list");return}const s=t?a.filter(c=>c.code===t)[0]:null,r=!s,d=s?Object.assign({},s):{code:"",name:"",thumbnail:"",media:"",enabled:!0,order:0,navigateUrl:i.navigateUrl||""};n.innerHTML='<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden"><div class="p-5 border-b border-gray-100 flex items-center justify-between"><button type="button" id="highlight-form-back-btn" class="text-[13px] text-gray-500 hover:text-[#303030] inline-flex items-center gap-1"><i class="fas fa-arrow-left text-xs"></i> Back</button><h3 class="font-semibold text-[15px] text-[#303030]">'+(r?"Add feature: ":"Edit feature: ")+H(i.name)+'</h3></div><div class="p-5 space-y-3 border-b border-gray-100"><div class="flex items-end justify-between gap-3"><div class="flex-1"><label class="block text-[12px] text-gray-500 mb-1">Title</label><input type="text" id="highlight-name-input" value="'+_(d.name)+'" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="Merged Value Group"></div><div class="pb-2">'+et(d.enabled)+"</div></div></div>"+Qe(d)+'<div class="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-200 bg-gray-50"><button type="button" id="highlight-form-cancel-btn" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors">Cancel</button><button type="button" id="highlight-form-save-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">Save</button></div></div>',Ze(d,()=>T("master:show-list"));const l=document.getElementById("highlight-form-save-btn");l&&l.addEventListener("click",()=>{const c=document.getElementById("highlight-name-input").value.trim();if(!c){alert("Title is required.");return}const b=document.getElementById("highlight-thumbnail-input"),m=document.getElementById("highlight-media-input"),I=document.getElementById("highlight-navigate-input"),v=B(),k=v.filter(w=>w.parentCode===e&&w.code!==d.code).length;if(r&&k>=J){alert("This group already has the maximum of "+J+" sub-features.");return}const y=r?Ae(Ce(e+"-"+c)||e+"-feature",v,d.code):d.code;_e({code:y,parentCode:e,name:c,thumbnail:b.value.trim(),media:m.value.trim(),enabled:d.enabled,order:r?k:d.order,navigateUrl:I.value.trim(),unlocked:d.unlocked||!1,active:d.active!==!1,advancedFeatureId:d.advancedFeatureId}),T("master:show-list")})}function Fn(){const e=document.getElementById("master-tab-content");if(!e)return;const t=B(),n=t.filter(c=>c.parentCode||c.standalone?!1:t.filter(m=>m.parentCode===c.code).length<J).sort((c,b)=>c.order-b.order),a={enabled:!0,thumbnail:"",media:"",navigateUrl:""},i=n.map(c=>'<option value="'+_(c.code)+'">'+H(c.name)+"</option>").join("")+'<option value="__new__">+ Create new group</option>';e.innerHTML='<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden"><div class="p-5 border-b border-gray-100 flex items-center justify-between"><button type="button" id="highlight-form-back-btn" class="text-[13px] text-gray-500 hover:text-[#303030] inline-flex items-center gap-1"><i class="fas fa-arrow-left text-xs"></i> Back</button><h3 class="font-semibold text-[15px] text-[#303030]">Add feature</h3></div><div class="p-5 space-y-3 border-b border-gray-100"><div><label class="block text-[12px] text-gray-500 mb-1">Parent Group</label><select id="highlight-group-select" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px] bg-white">'+i+'</select></div><div id="new-group-name-field" class="hidden"><label class="block text-[12px] text-gray-500 mb-1">New Group Name</label><input type="text" id="highlight-new-group-name-input" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="e.g. Merchandising"></div><div class="flex items-end justify-between gap-3"><div class="flex-1"><label class="block text-[12px] text-gray-500 mb-1">Title</label><input type="text" id="highlight-name-input" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px]" placeholder="Feature title"></div><div class="pb-2">'+et(!0)+"</div></div></div>"+Qe(a)+'<div class="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-200 bg-gray-50"><button type="button" id="highlight-form-cancel-btn" class="border border-gray-300 bg-white text-[#303030] rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-gray-100 transition-colors">Cancel</button><button type="button" id="highlight-form-save-btn" class="bg-[#303030] text-white rounded-[6px] px-5 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">Save</button></div></div>',Ze(a,()=>T("master:show-list"));const s=document.getElementById("highlight-group-select"),r=document.getElementById("new-group-name-field"),d=()=>{const c=!s||s.value==="__new__";r&&r.classList.toggle("hidden",!c)};d(),s&&s.addEventListener("change",d);const l=document.getElementById("highlight-form-save-btn");l&&l.addEventListener("click",()=>{const c=document.getElementById("highlight-name-input").value.trim();if(!c){alert("Title is required.");return}let b=B(),m;if(!s||s.value==="__new__"){const C=document.getElementById("highlight-new-group-name-input"),q=C?C.value.trim():"";if(!q){alert("Enter a name for the new group.");return}m=Ae(Ce(q)||"group",b,null);const N=b.filter(F=>!F.parentCode).length;_e({code:m,parentCode:null,standalone:!1,name:q,thumbnail:"",media:"",enabled:!0,order:N,navigateUrl:""}),b=B()}else m=s.value;const I=b.filter(C=>C.parentCode===m).length;if(I>=J){alert("This group already has the maximum of "+J+" sub-features.");return}const v=Ae(Ce(m+"-"+c)||m+"-feature",b,null),k=document.getElementById("highlight-thumbnail-input"),y=document.getElementById("highlight-media-input"),w=document.getElementById("highlight-navigate-input");_e({code:v,parentCode:m,name:c,thumbnail:k.value.trim(),media:y.value.trim(),navigateUrl:w.value.trim(),enabled:a.enabled,order:I,unlocked:!1,active:!0}),T("master:show-list")})}const qe={};function Gn(){return An}function jn(){const e=document.getElementById("master-tabs");e&&(e.innerHTML='<button type="button" class="master-tab-btn px-4 py-2 text-[13px] font-semibold border-b-2 border-[#303030] text-[#303030]">Highlight Features</button>')}function fe(){const e=document.getElementById("master-tab-content");if(!e)return;const t=B(),n=t.filter(i=>!i.parentCode).sort((i,s)=>i.order-s.order);let a="";n.forEach(i=>{const s=i.standalone?[]:t.filter(d=>d.parentCode===i.code).sort((d,l)=>d.order-l.order),r=!qe[i.code];a+=Hn(i,r,!i.standalone),!i.standalone&&r&&(s.forEach(d=>{a+=Mn(d)}),s.length<J?a+='<tr class="border-b border-gray-100"><td></td><td colspan="4" class="pl-8 pb-2.5 pt-1"><button type="button" class="add-feature-btn text-[12px] text-gray-500 hover:text-[#303030] inline-flex items-center gap-1" data-group="'+i.code+'"><i class="fas fa-plus text-[10px]"></i> Add Feature</button></td></tr>':a+='<tr class="border-b border-gray-100"><td></td><td colspan="4" class="pl-8 pb-2.5 pt-1 text-[12px] text-gray-400">Maximum of '+J+" sub-features reached</td></tr>")}),a||(a='<tr><td colspan="5" class="px-3 py-6 text-center text-[13px] text-gray-500">No groups yet, click "Add Group" to create one.</td></tr>'),e.innerHTML='<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden"><div class="p-5 flex items-center justify-between border-b border-gray-100"><h3 class="font-semibold text-[15px] text-[#303030]">Highlight feature</h3><button type="button" id="add-group-btn" class="bg-[#303030] text-white rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors">Add Group</button></div><div class="overflow-x-auto"><table class="w-full text-left"><thead class="bg-gray-50 border-b border-gray-100"><tr class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide"><th class="px-3 py-2 w-8">#</th><th class="px-3 py-2">Group Name</th><th class="px-3 py-2">Status</th><th class="px-3 py-2">Standalone</th><th class="px-3 py-2 text-right">Action</th></tr></thead><tbody id="highlight-table-body">'+a+'</tbody></table></div><div class="p-4 border-t border-gray-100 flex justify-center"><button type="button" id="add-feature-global-btn" class="text-[13px] text-gray-600 hover:text-[#303030] font-medium inline-flex items-center gap-1"><i class="fas fa-plus text-[10px]"></i> Add Feature</button></div></div>',Rn()}function Rn(){const e=document.getElementById("add-group-btn");e&&e.addEventListener("click",()=>mt(null));const t=document.getElementById("add-feature-global-btn");t&&t.addEventListener("click",()=>Fn()),document.querySelectorAll(".group-expand-toggle").forEach(n=>{n.addEventListener("click",a=>{a.stopPropagation();const i=n.getAttribute("data-code");qe[i]=!qe[i],fe()})}),document.querySelectorAll(".add-feature-btn").forEach(n=>{n.addEventListener("click",()=>Ue(n.getAttribute("data-group"),null))}),document.querySelectorAll(".highlight-edit-btn").forEach(n=>{n.addEventListener("click",()=>{const a=n.getAttribute("data-code"),i=B().filter(s=>s.code===a)[0];i&&(i.parentCode?Ue(i.parentCode,a):mt(a))})}),document.querySelectorAll(".highlight-delete-btn").forEach(n=>{n.addEventListener("click",()=>{const a=n.getAttribute("data-code"),i=B().filter(d=>d.code===a)[0],r=i&&!i.parentCode?"Are you sure you want to delete this group? All features inside it will be deleted too.":"Are you sure you want to delete this feature?";confirm(r)&&(Wt(a),fe())})}),document.querySelectorAll(".highlight-status-toggle").forEach(n=>{n.addEventListener("click",()=>{const a=n.getAttribute("data-code"),i=B(),s=i.filter(d=>d.code===a)[0];if(!s)return;const r=!s.enabled;s.enabled=r,s.parentCode||i.forEach(d=>{d.parentCode===a&&(d.enabled=r)}),re(i),fe()})}),Pn()}function Wn(){jn(),fe()}function Un(e){const t=document.getElementById("master-shortcut-btn");t&&t.addEventListener("click",()=>e("master"))}G("master:show-list",()=>fe());G("master:add-feature",e=>Ue(e,null));function tt(){const e=document.getElementById("hf-banner-container"),t=document.getElementById("hf-continue-container");!e||!t||(o.indexingComplete?(e.innerHTML=Xt(),t.classList.remove("hidden")):(e.innerHTML=ht(),t.classList.add("hidden")))}let Et=null;function qn(e){Et=e?{code:e.code,name:e.name}:null}function Vn(){return Et}const $n={home:"Homepage",filter:"Filter",search:"Search",metafield:"Metafield",design:"Filter & product grid design","analytics-app":"Analytics",advanced:"Advanced features"},Yn={filter:"filter",search:"search",metafield:"database",design:"th-large","analytics-app":"chart-bar",advanced:"cogs"};function zn(e){return e?{wrap:"bg-blue-100",icon:"text-blue-500",hint:"text-blue-600"}:{wrap:"bg-gray-100",icon:"text-gray-500",hint:"text-gray-500"}}function Xn(e){return[{title:"Configuration",icon:"cog",desc:"Main settings"},{title:"Display options",icon:"palette",desc:"Visual customization"},{title:"Advanced settings",icon:"sliders-h",desc:"Fine-tuning options"}].map(n=>'<div class="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors '+(e?"opacity-75":"")+'"><div class="flex items-center gap-3 mb-3"><div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"><i class="fas fa-'+n.icon+' text-gray-500 text-sm"></i></div><h4 class="font-medium text-[14px] text-[#303030]">'+n.title+'</h4></div><p class="text-[12px] text-gray-500">'+n.desc+"</p>"+(e?'<div class="mt-3 text-[11px] text-blue-500 font-medium"><i class="fas fa-eye mr-1"></i> Preview available</div>':"")+"</div>").join("")}function Kn(e,t){const n=H(t.name);e.innerHTML='<article id="advanced-feature-focus" tabindex="-1" class="bg-white rounded-[8px] shadow-sm border border-[#303030] p-8 outline-none focus:ring-2 focus:ring-[#303030]"><p class="text-[12px] font-semibold text-[#616161] mb-2">Advanced features</p><h2 class="text-[18px] font-semibold text-[#303030]">'+n+'</h2><p class="text-[13px] text-[#616161] mt-2">This feature is in focus from Highlight Features.</p></article>';const a=e.querySelector("#advanced-feature-focus");a&&(a.focus({preventScroll:!0}),a.scrollIntoView({block:"center"}))}function De(e){const t=document.getElementById(e+"-page-content");if(!t)return;if(e==="advanced"){const s=Vn();if(s){Kn(t,s);return}}const n=!Ut(),a=zn(n),i=Yn[e]||"file";t.innerHTML='<div class="bg-white rounded-[8px] shadow-sm border border-gray-200 p-8"><div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 '+a.wrap+' rounded-xl flex items-center justify-center"><i class="fas fa-'+i+" "+a.icon+' text-xl"></i></div><div><h2 class="text-[18px] font-semibold text-[#303030]">'+($n[e]||"")+'</h2><p class="text-[13px] '+a.hint+'">'+(n?'<i class="fas fa-info-circle mr-1"></i> Available for preview':"Configure settings here")+'</p></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">'+Xn(n)+"</div></div>"}function M(e){document.querySelectorAll(".page-view").forEach(n=>n.classList.remove("active"));const t=document.getElementById("page-"+e);t&&(t.classList.add("active"),o.currentPage=e,document.querySelectorAll("[data-page]").forEach(n=>{n.classList.remove("nav-active"),n.getAttribute("data-page")===e&&n.classList.add("nav-active")}),e==="master"?Wn():e!=="highlight-feature"&&De(e),T("navigate",e),e==="highlight-feature"?tt():Z())}function Jn(){document.querySelectorAll("[data-page]").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault();const a=t.getAttribute("data-page");if(a){if(a==="advanced"){window.open("advanced.html","_blank");return}M(a)}})});const e=document.getElementById("app-header-title");e&&e.addEventListener("click",t=>{t.preventDefault(),M("home")})}function nt(){if(!o.indexingComplete){alert("Please wait for indexing to complete first.");return}console.log("Opening Editor.html with auto-enable..."),T("set-app-toggle","on"),o.hasEnabledInEditor=!0,o.firstEnableDone=!0,o.lastEnabledTheme=o.selectedTheme,localStorage.setItem(p.FIRST_ENABLE_DONE,"true"),localStorage.setItem(p.LAST_ENABLED_THEME,o.lastEnabledTheme),window.open("Editor.html?autoEnable=1","_blank"),T("guide:refresh")}function Qn(){if(!o.indexingComplete){alert("Please wait for indexing to complete first.");return}if(!o.selectedTheme){ie();return}window.open("Editor.html?autoEnableSuggestion=1","_blank")}function Zn(){if(!o.indexingComplete){alert("Please wait for indexing to complete first.");return}if(!o.selectedTheme){ie();return}nt()}function Ne(){const e=document.querySelector('.step-checkbox[data-step="1"]'),t=document.querySelector('.step-checkbox[data-step="2"]'),n=document.querySelector('.step-checkbox[data-step="3"]'),a=document.querySelector('.step-checkbox[data-step="4"]'),i=e?e.getAttribute("data-completed")==="true":!1,s=t?t.getAttribute("data-completed")==="true":!1,r=n?n.getAttribute("data-completed")==="true":!1,d=a?a.getAttribute("data-completed")==="true":!1,l=4,c=[i,s,r,d].filter(Boolean).length,b=c/l*100,m=document.getElementById("progress-bar"),I=document.getElementById("progress-text");m&&(m.style.width=b+"%",m.className="bg-black h-full rounded-full transition-all duration-500",c===1?m.classList.add("bg-black"):c===2?m.classList.add("bg-yellow-400"):c===3?m.classList.add("bg-green-500"):m.classList.add("bg-gray-400")),I&&(I.innerText=c+"/"+l+" completed");const v=document.getElementById("congrat-message-container");v&&(i&&r?(v.innerHTML='<div class="p-3 bg-green-50 border border-green-100 rounded-lg flex items-start gap-3"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0"><i class="fas fa-rocket"></i></div><div class="flex-1"><p class="text-[13px] font-semibold text-green-800 leading-tight">Great job! Basic setup is complete. Explore our <a href="#" class="underline font-bold text-green-700 hover:text-green-900">advanced features</a>.</p><p class="text-[11px] text-green-700 mt-0.5">You can always reopen the guide to review steps.</p></div></div>',v.classList.remove("hidden")):(v.classList.add("hidden"),v.innerHTML=""))}function xe(){const e=document.getElementById("step4-checkbox");if(!e)return;const t=o.searchSuggestionState==="on";e.setAttribute("data-completed",t?"true":"false"),e.classList.toggle("bg-[#303030]",t),e.classList.toggle("text-white",t),e.classList.toggle("border-2",!t),e.classList.toggle("border-dashed",!t),e.classList.toggle("border-gray-400",!t),e.classList.toggle("bg-white",!t);const n=e.querySelector(".fa-check");n&&n.classList.toggle("text-transparent",!t),Ne()}function ee(){const e=document.getElementById("step1-initial"),t=document.getElementById("step1-completed"),n=document.getElementById("step1-checkbox"),a=document.getElementById("guide-theme-dropdown-label"),i=document.getElementById("guide-theme-live-pill"),s=document.getElementById("guide-enable-editor-btn"),r=!!o.selectedTheme,d=o.appToggleState==="on",l=o.selectedTheme&&o.selectedTheme===o.lastEnabledTheme,c=r&&o.firstEnableDone,b=o.firstEnableDone&&d&&l;if(e&&t&&(c?(e.classList.add("hidden"),t.classList.remove("hidden")):(e.classList.remove("hidden"),t.classList.add("hidden"))),a&&(a.textContent=o.selectedTheme||"-- No theme selected --"),i&&i.classList.toggle("hidden",!b),oe(),n){const m=o.firstEnableDone&&d&&l;n.setAttribute("data-completed",m?"true":"false"),n.classList.toggle("bg-[#303030]",m),n.classList.toggle("text-white",m),n.classList.toggle("border-2",!m),n.classList.toggle("border-dashed",!m),n.classList.toggle("border-gray-400",!m),n.classList.toggle("bg-white",!m);const I=n.querySelector(".fa-check");I&&I.classList.toggle("text-transparent",!m)}if(s){const m=r&&o.indexingComplete&&(!d||!l);s.classList.toggle("hidden",!m)}Ne(),U(),xe()}function ea(){const e=o.firstEnableDone&&o.appToggleState==="on"&&o.selectedTheme===o.lastEnabledTheme,t=o.searchSuggestionState==="on";return e&&t}function ta(){const e=document.querySelector('.guide-toggle[data-target="guide-body-1"]'),t=document.getElementById("guide-body-1");!e||!t||(e.setAttribute("aria-expanded","false"),e.innerHTML='<i class="fas fa-chevron-down"></i>',t.classList.add("hidden"))}function na(){const e=document.getElementById("onboarding-guide-card");e&&(e.classList.remove("guide-attention-animation"),e.offsetWidth,e.classList.add("guide-attention-animation"),e.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{e.classList.remove("guide-attention-animation")},1200))}function aa(){const e=document.getElementById("step4-checkbox");document.querySelectorAll(".step-checkbox").forEach(r=>{r.addEventListener("click",d=>{if(d.stopPropagation(),r===e){const b=o.searchSuggestionState==="on"?"off":"on";o.searchSuggestionState=b,localStorage.setItem(p.SEARCH_SUGGESTION_TOGGLE_STATE,b),U(),xe();return}const l=r.getAttribute("data-completed")==="true",c=r.querySelector(".fa-check");l?(r.setAttribute("data-completed","false"),r.classList.remove("bg-[#303030]","text-white"),r.classList.add("border-2","border-dashed","border-gray-400","bg-white"),c.classList.add("text-transparent")):(r.setAttribute("data-completed","true"),r.classList.add("bg-[#303030]","text-white"),r.classList.remove("border-2","border-dashed","border-gray-400","bg-white"),c.classList.remove("text-transparent")),Ne()})}),document.querySelectorAll(".guide-toggle").forEach(r=>{r.addEventListener("click",()=>{const d=document.getElementById(r.dataset.target),l=r.getAttribute("aria-expanded")==="true";r.setAttribute("aria-expanded",String(!l)),r.innerHTML=l?'<i class="fas fa-chevron-down"></i>':'<i class="fas fa-chevron-up"></i>',d&&d.classList.toggle("hidden",l)})}),document.querySelectorAll(".guide-step-toggle").forEach(r=>{r.addEventListener("click",()=>{const d=document.getElementById(r.dataset.target),l=r.querySelector(".fa-chevron-up, .fa-chevron-down");if(d){const c=d.classList.toggle("hidden");l&&(l.classList.toggle("fa-chevron-up",!c),l.classList.toggle("fa-chevron-down",c))}})});const t=document.getElementById("select-theme-btn"),n=document.getElementById("guide-theme-dropdown-btn"),a=document.getElementById("guide-enable-editor-btn"),i=document.getElementById("enable-search-suggestion-btn"),s=document.getElementById("go-to-filter-btn");t&&t.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),ie()}),n&&n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),ie()}),a&&a.addEventListener("click",r=>{if(r.preventDefault(),!o.selectedTheme){ie();return}nt()}),i&&i.addEventListener("click",r=>{r.preventDefault(),Qn()}),s&&s.addEventListener("click",r=>{r.preventDefault(),M("filter")})}G("theme:chosen",()=>ee());G("guide:refresh",()=>ee());function kt(){const e=document.getElementById("theme-picker-modal");e&&!e.classList.contains("hidden")&&oe()}function ia(e){o.appToggleState=e,o.appEnabled=e==="on",e==="on"&&!o.firstEnableDone&&(o.firstEnableDone=!0,o.lastEnabledTheme=o.selectedTheme,localStorage.setItem(p.FIRST_ENABLE_DONE,"true"),localStorage.setItem(p.LAST_ENABLED_THEME,o.lastEnabledTheme)),localStorage.setItem(p.APP_TOGGLE_STATE,e),kt(),Q(),ee(),Z(),U()}G("set-app-toggle",e=>ia(e));G("storage",e=>{if(e.key===p.APP_TOGGLE_STATE){const t=e.newValue||"off";console.log("Detected app toggle change:",t),o.appToggleState=t,o.appEnabled=t==="on",t==="on"&&!o.firstEnableDone&&(o.firstEnableDone=!0,o.lastEnabledTheme=o.selectedTheme,localStorage.setItem(p.FIRST_ENABLE_DONE,"true"),localStorage.setItem(p.LAST_ENABLED_THEME,o.lastEnabledTheme)),kt(),Z(),ee(),Q(),U(),xe()}e.key===p.SEARCH_SUGGESTION_TOGGLE_STATE&&(o.searchSuggestionState=e.newValue||"off",U(),xe())});const sa=`
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
`;function ra(){return sa}const oa=`
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
`;function da(){return oa}function la(){const e=document.getElementById("sidebar-toggle-btn"),t=document.getElementById("sidebar-overlay");e&&e.addEventListener("click",()=>{document.body.classList.toggle("sidebar-collapsed")}),t&&t.addEventListener("click",()=>{document.body.classList.add("sidebar-collapsed")}),document.querySelectorAll("aside a").forEach(n=>{n.addEventListener("click",()=>{document.body.classList.add("sidebar-collapsed")})})}const ca=`
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
`;function se(e,t){const n=Object.assign({event:e,timestamp:new Date().toISOString()},t||{});console.log("[highlight]",n)}function ua(e){return B().filter(t=>t.code===e)[0]}function pa(e,t){if(!e)return;const n=t||"highlight_page";sessionStorage.setItem(ze,"1"),localStorage.setItem(p.HIGHLIGHT_VIEW_FEATURE,"true"),sessionStorage.setItem(Xe,JSON.stringify({source:n,featureCode:e.code})),se("highlight_feature_view_clicked",{target_page:"advanced_features",source:n,indexing_status:localStorage.getItem(p.INDEXING_COMPLETE)==="true"?"completed":"indexing",feature_code:e.code,feature_name:e.name}),qn(e),history.pushState({findterHighlightBack:!0},""),M("advanced")}let Ve=null;function It(e,t){fetch(e).then(n=>n.arrayBuffer()).then(n=>{t(ma(n))}).catch(()=>{t(null)})}function ma(e){const t=new Uint8Array(e);if(t.length<13)return null;const n=String.fromCharCode(t[0],t[1],t[2],t[3],t[4],t[5]);if(n!=="GIF87a"&&n!=="GIF89a")return null;let a=13;t[10]&128&&(a+=3*(1<<(t[10]&7)+1));let i=0,s=0;for(;a<t.length;){const r=t[a];if(r===59)break;if(r===33){if(t[a+1]===249&&t[a+2]===4){i+=(t[a+4]|t[a+5]<<8)*10,s+=1,a+=8;continue}for(a+=2;a<t.length;){const l=t[a];if(a+=1+l,l===0)break}continue}if(r===44){if(a+9>=t.length)break;const d=t[a+9];for(a+=10,d&128&&(a+=3*(1<<(d&7)+1)),a+=1;a<t.length;){const l=t[a];if(a+=1+l,l===0)break}continue}a+=1}return!s||i<=0?null:i}function ga(){const e=document.getElementById("hf-media-modal");return!!(e&&e.classList.contains("is-open"))}function fa(e){const t=document.getElementById("hf-media-modal"),n=document.getElementById("hf-media-modal-body"),a=document.getElementById("hf-media-modal-title");if(!t||!n||!e||!e.src)return;if(Ve=e.onClose||null,a&&(a.textContent=e.name||"Preview"),n.textContent="",e.kind==="video"){const s=document.createElement("video");s.className="hf-media-modal__media",s.src=e.src,s.muted=!0,s.defaultMuted=!0,s.loop=!1,s.autoplay=!0,s.controls=!0,s.playsInline=!0,s.setAttribute("playsinline",""),n.appendChild(s);const r=s.play();r&&r.catch&&r.catch(()=>{})}else{const s=document.createElement("img");s.className="hf-media-modal__media",s.src=e.src,s.alt=e.name||"",n.appendChild(s),e.kind==="gif"&&It(e.src,r=>{!r||!s.isConnected||window.setTimeout(()=>{if(!s.isConnected)return;const d=document.createElement("canvas");d.className="hf-media-modal__media",d.width=s.naturalWidth||s.width||1,d.height=s.naturalHeight||s.height||1;const l=d.getContext("2d");l&&(l.drawImage(s,0,0,d.width,d.height),s.replaceWith(d))},r)})}t.classList.add("is-open"),t.setAttribute("aria-hidden","false");const i=t.querySelector(".hf-media-modal__close");i&&i.focus()}function St(){const e=document.getElementById("hf-media-modal");if(!e||!e.classList.contains("is-open"))return;const t=document.getElementById("hf-media-modal-body");if(t){const a=t.querySelector("video");a&&(a.pause(),a.removeAttribute("src"),a.load()),t.textContent=""}e.classList.remove("is-open"),e.setAttribute("aria-hidden","true");const n=Ve;Ve=null,n&&n()}function ba(){document.addEventListener("click",e=>{e.target.closest&&e.target.closest("[data-hf-media-close]")&&St()})}const we=[],ue=7e3;function at(){we.forEach(e=>{e&&e.refresh&&e.refresh()})}function ha(e){return e?e.indexOf("data:video")===0?!0:/\.(mp4|webm|ogg|mov)(\?|#|$)/i.test(e):!1}function xa(e){return e?e.indexOf("data:image/gif")===0?!0:/\.gif(\?|#|$)/i.test(e):!1}function va(e){return ha(e)?"video":xa(e)?"gif":"image"}function ya(e){const t=e.media||e.thumbnail,n=H(e.name),a=_(e.name);if(t){const i=va(t),s=_(t),r='<div class="hf-media-frame hf-media-frame--clickable" role="button" tabindex="0" data-media-src="'+s+'" data-media-kind="'+i+'" data-media-name="'+a+'" aria-label="Play preview of '+a+'">';return i==="video"?r+'<video src="'+s+'" muted playsinline class="h-full w-full rounded-lg object-cover"></video></div>':r+'<img src="'+s+'" alt="'+n+'" data-media-kind="'+i+'" class="h-full w-full rounded-lg object-cover"></div>'}return'<div class="hf-media-frame hf-media-frame--empty" role="img" aria-label="'+a+' preview"><div class="hf-media-empty"><span class="hf-media-empty__icon" aria-hidden="true"><i class="fas fa-photo-video"></i></span><span class="hf-media-empty__title">'+n+'</span><span class="hf-media-empty__note">Image or video preview will appear here</span></div></div>'}function Lt(e){const t=document.getElementById(e.tabsElId),n=document.getElementById(e.bodyElId);if(!t||!n)return null;const a=e.source||"highlight_page";let i=!!e.autoplay,s=null,r=!1,d=!1,l=null,c=ue,b=0,m=0,I="",v=[],k=0,y=null,w=null;function C(){const u=B().filter(h=>h.enabled);return u.filter(h=>!h.parentCode).sort((h,E)=>h.order-E.order).map(h=>Object.assign({},h,{subs:u.filter(E=>E.parentCode===h.code).sort((E,S)=>E.order-S.order)}))}function q(u){const f=[];return u.forEach(h=>{h.subs.length===0?f.push({parent:h.code,sub:null}):h.subs.forEach(E=>f.push({parent:h.code,sub:E.code}))}),f}function N(u){const f=ya(u);if(!o.indexingComplete&&!e.alwaysShowActions)return'<div class="hf-preview">'+f+"</div>";const h='<button type="button" class="feature-view-btn inline-flex items-center justify-center min-h-[44px] bg-[#303030] text-white rounded-[8px] px-3 sm:px-4 py-2 text-[12px] sm:text-[13px] font-medium hover:bg-[#4a4a4a] transition-colors" data-feature-view-code="'+_(u.code)+'">View Feature</button>';return'<div class="hf-preview">'+f+'<div class="hf-preview__bar"><p class="hf-preview__name">'+H(u.name)+"</p>"+h+"</div></div>"}function F(){const u=C();let f="";u.forEach(h=>{const E=y===h.code;f+='<button type="button" class="feature-tab-btn whitespace-nowrap px-3 py-2 rounded-lg border text-[12px] sm:text-[13px] font-semibold text-center transition-colors '+(E?"bg-[#303030] text-white border-[#303030]":"bg-white text-[#303030] border-gray-200 hover:bg-gray-50")+'" data-parent="'+_(h.code)+'">'+H(h.name)+"</button>"}),t.innerHTML=f}function V(){const f=C().filter(S=>S.code===y)[0];if(!f){n.className="p-5",n.innerHTML='<p class="text-[13px] text-gray-500">No highlight features to show yet.</p>';return}if(f.subs.length===0){n.className="hf-feature-body hf-feature-body--solo",n.innerHTML=N(f);return}(!w||!f.subs.some(S=>S.code===w))&&(w=f.subs[0].code);let h="";f.subs.forEach(S=>{const jt=w===S.code;h+='<div class="feature-sub-row shrink-0 md:shrink whitespace-nowrap md:whitespace-normal px-4 sm:px-5 py-3 cursor-pointer border-b md:border-b-0 border-gray-50 '+(jt?"is-active":"hover:bg-gray-50")+'" data-sub="'+_(S.code)+'"><div class="text-[13px] sm:text-[14px] font-semibold text-[#303030]">'+H(S.name)+"</div></div>"});const E=f.subs.filter(S=>S.code===w)[0];n.className="hf-feature-body flex flex-col md:flex-row",n.innerHTML='<div class="hf-feature-list flex md:block overflow-x-auto border-b md:border-b-0 md:border-r border-gray-100 py-1 md:py-2">'+h+'</div><div class="hf-stage min-w-0 flex-1 p-4 sm:p-5">'+N(E)+"</div>"}function j(){const u=v[k];if(!u){y=null,w=null;return}y=u.parent,w=u.sub}function R(){s&&(clearTimeout(s),s=null)}function Y(){return n.querySelector("video")}function P(){const u=v[k];if(!u)return null;const f=u.sub||u.parent;return B().filter(h=>h.code===f)[0]||null}function z(){if(a!=="highlight_page")return!1;const u=document.getElementById("page-highlight-feature");return!!(u&&u.classList.contains("active"))}function $(u,f){if(!u)return;const h=u.code+":"+m;I!==h&&(I=h,se("highlight_feature_media_played",{media_type:f,source:a,feature_code:u.code,feature_name:u.name}))}function te(){if(s=null,r||d){l="hold";return}g()}function D(){if(!(!e.autoplay||!i||r||d||!z())&&l!=="video"){if(R(),c<=0){te();return}b=Date.now()+c,s=setTimeout(te,c)}}function ne(){s&&(c=Math.max(0,b-Date.now()),R())}function Ee(){if(!(!e.autoplay||!i||r||d||!z())&&l!=="video"){if(l==="gif"){D();return}l="timer",c=ue,D()}}function W(){R();const u=++m;if(!e.autoplay||!i||!z())return;const f=P(),h=Y();if(h&&(h.loop=!1,l="video",!h.ended)){$(f,"video");const S=h.play();S&&S.catch&&S.catch(()=>{u===m&&(l="timer",c=ue,D())});return}const E=n.querySelector('img[data-media-kind="gif"]');if(E){l="gif",$(f,"gif"),It(E.getAttribute("src"),S=>{u===m&&(S&&S>0?c=S:(l="timer",c=ue),D())});return}l="timer",c=ue,D()}function X(){const u=C();if(v=q(u),v.length===0){y=null,w=null,F(),V(),W();return}if(!(y&&u.some(h=>h.code===y)))k=0,j();else{let h=-1;for(let E=0;E<v.length;E+=1)if(v[E].parent===y&&v[E].sub===w){h=E;break}k=h===-1?0:h}F(),V(),W()}function g(){if(v.length===0)return;const u=P();k=(k+1)%v.length,j();const f=P();e.autoplay&&se("highlight_feature_slide_changed",{slide_reason:"auto_slide",source:"highlight_page",from_feature_code:u?u.code:"",feature_code:f?f.code:""}),F(),V(),W()}function x(){let u=-1;for(let f=0;f<v.length;f+=1)if(v[f].parent===y&&v[f].sub===w){u=f;break}u!==-1&&(k=u)}function L(){const u=P();se("highlight_feature_selected",{source:a,group_code:y||"",feature_code:u?u.code:w||y||""})}function A(u){const f=u.getAttribute("data-media-src");if(!f)return;d=!0,ne();const h=Y();h&&!h.ended&&h.pause(),fa({src:f,kind:u.getAttribute("data-media-kind"),name:u.getAttribute("data-media-name")||"Preview",onClose:()=>{d=!1;const E=Y();if(E&&!E.ended&&e.autoplay&&i){l="video";const S=E.play();S&&S.catch&&S.catch(()=>{})}Ee()}})}function ke(){R(),l=null,i=!1}t.addEventListener("click",u=>{const f=u.target.closest("[data-parent]");f&&(y=f.getAttribute("data-parent"),w=null,F(),V(),x(),L(),W())}),n.addEventListener("click",u=>{const f=u.target.closest("[data-feature-view-code]");if(f){pa(ua(f.getAttribute("data-feature-view-code")),a);return}const h=u.target.closest(".hf-media-frame--clickable");if(h&&!u.target.closest("a, button")){A(h);return}const E=u.target.closest("[data-sub]");E&&(w=E.getAttribute("data-sub"),V(),x(),L(),W())}),n.addEventListener("keydown",u=>{if(u.key!=="Enter"&&u.key!==" ")return;const f=u.target.closest(".hf-media-frame--clickable");!f||u.target!==f||(u.preventDefault(),A(f))}),n.addEventListener("ended",u=>{!e.autoplay||!i||!u.target||u.target.tagName!=="VIDEO"||u.target!==Y()||(l="video",te())},!0),n.addEventListener("mouseover",u=>{const f=u.target.closest?u.target.closest(".hf-media-frame"):null;!f||!n.contains(f)||r||(r=!0,ne())}),n.addEventListener("mouseout",u=>{if(!r)return;const f=u.target.closest?u.target.closest(".hf-media-frame"):null;if(!f)return;const h=u.relatedTarget;h&&f.contains(h)||(r=!1,Ee())});function Ft(){k=0,y=null,w=null,X()}function Gt(u){if(a!=="highlight_page")return!1;const f=C();v=q(f);let h=-1;for(let E=0;E<v.length;E+=1){const S=v[E];if(S.sub===u||S.sub==null&&S.parent===u){h=E;break}}return h===-1?!1:(k=h,j(),F(),V(),W(),!0)}X();const ae={refresh:X,stopAutoplay:ke};return a==="highlight_page"&&(ae.resetToFirst=Ft,ae.restoreFeature=Gt,ae.pauseAutoplay=()=>{R()},ae.resumeAutoplay=()=>{W()}),we.push(ae),ae}function wa(e){let t=!1;return we.forEach(n=>{n.restoreFeature&&n.restoreFeature(e)&&(t=!0)}),t}function Bt(){we.forEach(e=>{e.resetToFirst&&e.resetToFirst()})}G("navigate",e=>{(e==="home"||e==="highlight-feature")&&at(),we.forEach(t=>{t.pauseAutoplay&&(e==="highlight-feature"?t.resumeAutoplay():t.pauseAutoplay())})});function Tt(){return document.getElementById("restricted-modal")}function Ea(){const e=document.getElementById("restriction-item-1"),t=document.getElementById("restriction-check-1"),n=document.getElementById("restriction-text-1"),a=document.getElementById("restriction-sub-1"),i=document.getElementById("restriction-item-2"),s=document.getElementById("restriction-check-2");!e||!t||!n||!a||!i||!s||(o.indexingComplete?(e.className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200",t.className="w-5 h-5 rounded-full border-2 border-green-500 bg-green-500 flex items-center justify-center shrink-0 mt-0.5",t.innerHTML='<i class="fas fa-check text-[10px] text-white"></i>',n.textContent="Data indexing complete",a.textContent="All data collected successfully"):(e.className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200",t.className="w-5 h-5 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5",t.innerHTML='<i class="fas fa-clock text-[10px] text-amber-500"></i>',n.textContent="Wait for data indexing to complete",a.textContent="Currently collecting data..."),o.appToggleState==="on"?(i.className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200",s.className="w-5 h-5 rounded-full border-2 border-green-500 bg-green-500 flex items-center justify-center shrink-0 mt-0.5",s.innerHTML='<i class="fas fa-check text-[10px] text-white"></i>'):(i.className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200",s.className="w-5 h-5 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5",s.innerHTML='<i class="fas fa-times text-[10px] text-amber-500"></i>'))}function Le(){ve(Tt()),M("home"),na()}function ka(){return le(Tt())}function Ia(){const e=document.getElementById("close-restricted-modal-btn"),t=document.getElementById("restricted-modal-home-btn"),n=document.getElementById("restricted-modal-overlay");e&&e.addEventListener("click",Le),t&&t.addEventListener("click",Le),n&&n.addEventListener("click",Le)}const Sa=3600*1e3,_t="demo-store.myshopify.com";function La(){window.addEventListener("popstate",e=>{if(e.state&&e.state.findterHighlightBack){M("advanced");return}Aa()})}function Ba(){return localStorage.getItem(p.HIGHLIGHT_VIEW_FEATURE)==="true"}function Ct(){try{const e=sessionStorage.getItem(Xe);return e?JSON.parse(e):null}catch{return null}}function Ta(){if(Ba()||sessionStorage.getItem(ze)==="1"||localStorage.getItem(p.HIGHLIGHT_CONTINUE)==="true")return!1;const e=parseInt(localStorage.getItem(p.HIGHLIGHT_INDEX_COMPLETED_AT)||"0",10);return e&&Date.now()-e>=Sa?(localStorage.getItem(p.HIGHLIGHT_EXPIRED)!=="true"&&(localStorage.setItem(p.HIGHLIGHT_EXPIRED,"true"),se("highlight_screen_expired",{hide_reason:"timeout_1h",shop_domain:_t,indexing_status:"completed"})),!1):!0}function At(){localStorage.removeItem(p.HIGHLIGHT_CONTINUE),localStorage.removeItem(p.HIGHLIGHT_VIEW_FEATURE),localStorage.removeItem(p.HIGHLIGHT_EXPIRED),localStorage.removeItem(p.HIGHLIGHT_INDEX_COMPLETED_AT),sessionStorage.removeItem(ze),sessionStorage.removeItem(Xe)}function _a(){!o.indexingComplete&&!o.indexingInterval&&Pe()}function $e(e){_a(),e&&wa(e),M("highlight-feature")}function Ca(){const e=performance.getEntriesByType?performance.getEntriesByType("navigation"):[];if(!!(e[0]&&e[0].type==="back_forward")){const n=Ct();if(n&&n.source==="highlight_page"){$e(n.featureCode);return}M("home");return}if(Ta()){$e(null),Bt();return}M("home")}function Aa(){const e=Ct();if(e&&e.source==="highlight_page"){$e(e.featureCode);return}M("home")}function Ha(){localStorage.setItem(p.HIGHLIGHT_CONTINUE,"true"),se("highlight_continue_clicked",{indexing_status:"completed",shop_domain:_t})}function Ht(){const e=new Date,t=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),a=String(e.getSeconds()).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return t+":"+n+":"+a+" "+i+"/"+s+"/"+r}function Mt(){return{syncStatusBadge:document.getElementById("sync-status-badge"),syncTimestamp:document.getElementById("sync-timestamp"),manualSyncBtn:document.getElementById("manual-sync-btn"),syncIcon:document.getElementById("sync-icon"),syncBtnText:document.getElementById("sync-btn-text")}}function Ma(){const{syncStatusBadge:e,syncTimestamp:t,syncIcon:n,syncBtnText:a,manualSyncBtn:i}=Mt();e&&(e.className="bg-amber-100 text-amber-800 text-[11px] px-2 py-0.5 rounded-full font-semibold",e.textContent="In progress"),t&&(t.textContent=Ht()),n&&(n.className="fas fa-sync-alt text-gray-400 text-sm animate-spin"),a&&(a.textContent="Syncing..."),i&&(i.disabled=!0,i.classList.add("opacity-50","cursor-not-allowed")),at(),tt(),Z(),He(),U()}function it(){o.isIndexing=!1,o.indexingComplete=!0,o.indexingInterval&&(clearInterval(o.indexingInterval),o.indexingInterval=null),localStorage.setItem(p.INDEXING_COMPLETE,"true"),localStorage.getItem(p.HIGHLIGHT_INDEX_COMPLETED_AT)||localStorage.setItem(p.HIGHLIGHT_INDEX_COMPLETED_AT,String(Date.now())),o.hasOnboarded||(o.hasOnboarded=!0,localStorage.setItem(p.HAS_ONBOARDED,"true"));const{syncStatusBadge:e,syncTimestamp:t,syncIcon:n,syncBtnText:a,manualSyncBtn:i}=Mt();e&&(e.className="bg-[#cbf1c4] text-[#1f5119] text-[11px] px-2 py-0.5 rounded-full font-semibold",e.textContent="Completed"),t&&(t.textContent=Ht()),n&&(n.className="fas fa-sync-alt text-gray-500 text-sm"),a&&(a.textContent="Manual sync"),i&&(i.disabled=!1,i.classList.remove("opacity-50","cursor-not-allowed")),at(),tt(),Ea(),He(),Q(),Z(),U(),o.currentPage!=="home"&&De(o.currentPage)}function Da(){o.indexingInterval&&(clearInterval(o.indexingInterval),o.indexingInterval=null),setTimeout(()=>{it()},300)}function Pe(){o.isIndexing=!0,o.indexingComplete=!1,o.indexingStartTime=Date.now(),Ma(),Q();const e=Date.now(),t=o.indexingDuration;o.indexingInterval=setInterval(()=>{const n=Date.now()-e;Math.min(n/t*100,100)>=100&&(clearInterval(o.indexingInterval),o.indexingInterval=null,setTimeout(()=>{it()},300))},100)}function Na(){o.indexingInterval&&(clearInterval(o.indexingInterval),o.indexingInterval=null),o.isIndexing=!0,o.indexingComplete=!1,o.appEnabled=!1,o.flowCompleted=!1,o.hasEnabledInEditor=!1,o.selectedTheme="",o.lastEnabledTheme="",o.firstEnableDone=!1,o.appToggleState="off",localStorage.removeItem(p.APP_TOGGLE_STATE),localStorage.removeItem(p.INDEXING_COMPLETE),localStorage.removeItem(p.SELECTED_THEME),localStorage.removeItem(p.LAST_ENABLED_THEME),localStorage.removeItem(p.FIRST_ENABLE_DONE),At(),Pe(),Q();const e=document.getElementById("step1-initial"),t=document.getElementById("step1-completed"),n=document.getElementById("step1-checkbox");if(e&&e.classList.remove("hidden"),t&&t.classList.add("hidden"),n){n.setAttribute("data-completed","false"),n.classList.remove("bg-[#303030]","text-white"),n.classList.add("border-2","border-dashed","border-gray-400","bg-white");const a=n.querySelector(".fa-check");a&&a.classList.add("text-transparent")}Ne(),De(o.currentPage),Z(),ee()}function Pa(){o.indexingComplete=!1,o.isIndexing=!0,localStorage.removeItem(p.INDEXING_COMPLETE),At(),U(),Pe()}function Oa(){return ca}function Fa(){const e=document.getElementById("reset-indexing-btn"),t=document.getElementById("end-index-btn"),n=document.getElementById("manual-sync-btn");e&&e.addEventListener("click",Na),t&&t.addEventListener("click",Da),n&&n.addEventListener("click",()=>{n.disabled||Pe()})}const Ga=`
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
`;function ja(){return Ga}function Ra(){En()}const Wa=`
                        <div id="welcome-box" elementtiming="lcp-welcome" class="mb-4 px-1" style="display:block !important;">
                            <h1 elementtiming="lcp-welcome-heading" class="text-[22px] font-bold text-[#303030] mb-1">👋 Welcome to findter 👋</h1>
                            <p class="text-[13px] text-gray-500 leading-relaxed">Explore your store's filter and search tools and help your customers find exactly what they're looking for.</p>
                        </div>
                        <div id="unified-status-banner" class="mb-5 hidden"></div>
                        <div id="indexing-banner-container" class="mb-5 hidden"></div>
`,Ua=`
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
`,qa=`
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
`,Va=`
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
`,$a=`
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
`,Ya=`
                                <div id="highlight-featured-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden order-7 lg:order-none">
                                    <div class="p-5 border-b border-gray-100">
                                        <h3 class="font-semibold text-[15px] text-[#303030] mb-4">Highlight features</h3>
                                        <div id="feature-highlight-tabs" class="flex flex-wrap justify-center gap-2"></div>
                                    </div>
                                    <div id="feature-highlight-body" class="flex flex-col md:flex-row"></div>
                                </div>
`,za=`
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
`,Xa=`
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
`,Ka=`
                                <div id="master-shortcut-card" class="bg-white rounded-[8px] shadow-sm border border-gray-200 overflow-hidden p-5 order-11 lg:order-none"><h3 class="font-semibold text-[15px] text-[#303030] mb-3">Master</h3><p class="text-[12px] text-gray-500 mb-3">Manage the Highlight Features shown on this homepage.</p><button id="master-shortcut-btn" class="border border-gray-300 rounded-[6px] px-3 py-1.5 text-[13px] font-medium text-[#303030] hover:bg-gray-50 shadow-sm">Go to Master</button></div>
`,Ja=`
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
`,Qa=`
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
`,Za=`
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
`,ei=`
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
`;function ti(){const e=document.getElementById("appCarouselTrack"),t=document.getElementById("appCarouselPrev"),n=document.getElementById("appCarouselNext");if(!e||!t||!n)return;let a=0;function i(s){const r=e.children,d=window.matchMedia("(min-width: 640px)").matches?2:1,l=Math.max(0,r.length-d);a=Math.max(0,Math.min(a+s,l));const m=r[0].offsetWidth+12;e.style.transform="translateX(-"+a*m+"px)"}t.addEventListener("click",()=>i(-1)),n.addEventListener("click",()=>i(1))}function ni(){return`
                <div id="page-home" class="page-view active">
                    <div class="max-w-[1040px] mx-auto">
                        ${Wa}
                        <div id="homepage-grid" class="homepage-grid">
                            <div class="homepage-column homepage-left">
                                ${Ua}
                                ${qa}
                                ${Va}
                                ${$a}
                                ${Ya}
                                ${za}
                                ${Xa}
                                ${Ka}
                            </div>
                            <div class="homepage-column homepage-right">
                                ${Ja}
                                ${Qa}
                                ${Za}
                                ${ei}
                            </div>
                        </div>
                    </div>
                </div>`}function ai(){ti(),aa(),Un(M)}function ce({pageId:e,title:t,bannerId:n,contentId:a}){return`
                <div id="page-${e}" class="page-view">
                    <div class="max-w-[1040px] mx-auto">
                        <div class="mb-6"><h1 class="text-[22px] font-bold text-[#303030]">${t}</h1></div>
                        <div id="${n}" class="mb-5 hidden"></div>
                        <div id="${a}"></div>
                    </div>
                </div>`}function ii(){return ce({pageId:"filter",title:"Filter",bannerId:"unified-banner-filter",contentId:"filter-page-content"})}function si(){return ii()}function ri(){return ce({pageId:"search",title:"Search",bannerId:"unified-banner-search",contentId:"search-page-content"})}function oi(){return ri()}function di(){return ce({pageId:"metafield",title:"Metafield",bannerId:"unified-banner-metafield",contentId:"metafield-page-content"})}function li(){return di()}function ci(){return ce({pageId:"design",title:"Filter & product grid design",bannerId:"unified-banner-design",contentId:"design-page-content"})}function ui(){return ci()}function pi(){return ce({pageId:"analytics-app",title:"Analytics",bannerId:"unified-banner-analytics-app",contentId:"analytics-app-page-content"})}function mi(){return pi()}function gi(){return ce({pageId:"advanced",title:"Advanced features",bannerId:"unified-banner-advanced",contentId:"advanced-page-content"})}function fi(){return gi()}const bi=`
                <div id="page-highlight-feature" class="page-view">
                    <div class="max-w-[1040px] mx-auto">
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
`,hi=`
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
`;function xi(){return bi}function vi(){ba(),Lt({tabsElId:"hf-feature-highlight-tabs",bodyElId:"hf-feature-highlight-body",autoplay:!0,alwaysShowActions:!0,source:"highlight_page"});const e=document.getElementById("hf-continue-to-home-btn");e&&e.addEventListener("click",()=>{Ha(),M("home")})}const yi=`
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
`,wi=`
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
`,Ei=`
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
`,ki=`

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
`,Ii=`
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
`;function Si(){return`
    ${ra()}
    <div class="flex flex-1 overflow-hidden relative">
      ${da()}
      <main class="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#f1f2f4]">
        ${Oa()}
        <div class="flex-1 overflow-y-auto px-8 pt-6 pb-12 relative">
          ${ni()}
          ${si()}
          ${oi()}
          ${li()}
          ${ui()}
          ${mi()}
          ${fi()}
          ${Gn()}
          ${xi()}
          ${hi}
        </div>
      </main>
    </div>
    ${ja()}
    ${yi}
    ${wi}
    ${Ei}
    ${ki}
    ${Ii}
  `}const Li={7:{heading:"7 Days Left in Your Trial",text:"No charge yet, and you still have full access to all features. When you're ready, pick a plan to keep your filters running without any gap.",primaryCta:"View Plans"},3:{heading:"3 Days Left: Keep Your Filters Running",text:"Your trial ends in 3 days. You haven't been charged and still have full access, upgrade now so your filters keep working without interruption.",primaryCta:"Choose a Plan"},1:{heading:"Your Trial Ends Tomorrow",text:"This is your last day. Upgrade now to keep your filters running, or chat with us if you need more time, we can extend your trial by 14 days.",primaryCta:"Upgrade Now",secondaryCta:"Chat with Us"}},Bi={7:"Hi! 👋 You've got a full week to explore Findter, how's it going so far? Is there anything not working the way you expected?",1:"Hi again! 👋 Your trial ends tomorrow, is there anything stopping you from upgrading? Whether it's pricing, timing, or a missing feature, just tell us and we'll help sort it out.",0:"Hi! 👋 Your trial just ended, did something not work out, or is there anything we can clarify before you decide on a plan?"};function Ti(){const e=document.getElementById("warning-trial-btn"),t=document.getElementById("warning-trial-menu"),n=document.getElementById("trial-warning-banner"),a=document.getElementById("trial-warning-heading"),i=document.getElementById("trial-warning-text"),s=document.getElementById("trial-warning-close-btn"),r=document.getElementById("trial-warning-cta-primary"),d=document.getElementById("trial-warning-cta-secondary"),l=document.getElementById("header-more-btn"),c=document.getElementById("header-dev-menu");e&&t&&(e.addEventListener("click",b=>{b.stopPropagation(),t.classList.toggle("hidden")}),document.addEventListener("click",b=>{!t.classList.contains("hidden")&&!t.contains(b.target)&&!e.contains(b.target)&&t.classList.add("hidden")})),s&&n&&s.addEventListener("click",()=>n.classList.add("hidden")),r&&r.addEventListener("click",()=>{const b=document.getElementById("pricing-notice-banner");b&&(b.classList.remove("hidden"),b.scrollIntoView({behavior:"smooth",block:"start"}))}),d&&d.addEventListener("click",()=>K({hideBadge:!0})),document.querySelectorAll(".warning-trial-option").forEach(b=>{b.addEventListener("click",()=>{const m=b.getAttribute("data-days");let I=parseInt(m,10);Number.isNaN(I)&&(I=0),Tn(I),wt();const v=Li[m];m!=="0"&&(v&&(a&&(a.textContent=v.heading),i&&(i.textContent=v.text),r&&(r.textContent=v.primaryCta),d&&d.classList.toggle("hidden",!v.secondaryCta)),n&&(n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"}))),t&&t.classList.add("hidden");const k=Bi[m];k&&(K({hideBadge:!0}),O(k,!1),xn(300*1e3))})}),l&&c&&(l.addEventListener("click",b=>{b.stopPropagation(),c.classList.toggle("mobile-menu-open")}),document.addEventListener("click",b=>{c.classList.contains("mobile-menu-open")&&!c.contains(b.target)&&!l.contains(b.target)&&c.classList.remove("mobile-menu-open")}))}function _i(){const e=document.getElementById("pricing-notice-banner"),t=document.getElementById("pricing-notice-close-btn"),n=document.getElementById("pricing-notice-collapse-btn"),a=document.getElementById("pricing-notice-body"),i=document.getElementById("pricing-notice-chevron"),s=document.getElementById("pricing-notice-contact-link"),r=document.getElementById("show-pricing-notice-btn"),d=document.getElementById("limit-reached-banner"),l=document.getElementById("limit-reached-close-btn"),c=document.getElementById("limit-reached-collapse-btn"),b=document.getElementById("limit-reached-body"),m=document.getElementById("limit-reached-chevron"),I=document.getElementById("limit-reached-contact-btn"),v=document.getElementById("show-limit-reached-btn"),k=document.getElementById("welcome-contact-btn");n&&a&&n.addEventListener("click",()=>{const y=a.classList.contains("hidden");a.classList.toggle("hidden"),i.classList.toggle("fa-chevron-up",y),i.classList.toggle("fa-chevron-down",!y)}),t&&e&&t.addEventListener("click",()=>e.classList.add("hidden")),r&&e&&r.addEventListener("click",()=>{e.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth",block:"start"})}),s&&s.addEventListener("click",y=>{y.preventDefault(),K({hideBadge:!0})}),k&&k.addEventListener("click",()=>K({hideBadge:!0})),c&&b&&c.addEventListener("click",()=>{const y=b.classList.contains("hidden");b.classList.toggle("hidden"),m.classList.toggle("fa-chevron-up",y),m.classList.toggle("fa-chevron-down",!y)}),l&&d&&l.addEventListener("click",()=>{d.classList.add("hidden"),de.used=In;const y=document.getElementById("limit-reached-product-count");y&&(y.textContent="10,000"),We()}),v&&d&&v.addEventListener("click",()=>{M("home"),o.indexingComplete||it(),de.used=ut;const y=document.getElementById("limit-reached-product-count");y&&(y.textContent=ut.toLocaleString("en-US")),We(),d.classList.remove("hidden");const w=document.getElementById("findter-status-card");w&&w.scrollIntoView({behavior:"smooth",block:"center"})}),I&&I.addEventListener("click",()=>K({hideBadge:!0}))}function Ci(){const e=document.getElementById("whats-new-btn"),t=document.getElementById("whats-new-dropdown"),n=document.getElementById("whats-new-badge");let a=3;!e||!t||(e.addEventListener("click",i=>{i.stopPropagation();const s=t.classList.contains("hidden");t.classList.toggle("hidden"),s&&a>0&&(a=0,n&&n.classList.add("hidden"),document.querySelectorAll(".whats-new-unread-dot").forEach(r=>r.classList.add("hidden")),document.querySelectorAll(".whats-new-item").forEach(r=>{r.style.background=""}))}),document.addEventListener("click",i=>{!t.classList.contains("hidden")&&!e.contains(i.target)&&!t.contains(i.target)&&t.classList.add("hidden")}))}function Ai(){return localStorage.getItem(p.FEEDBACK_STATE)||"default"}function Dt(){const e=document.getElementById("feedback-banner"),t=document.getElementById("feedback-mini-box"),n=Ai();n==="hidden"?(e&&e.classList.add("hidden"),t&&t.classList.add("hidden")):n==="mini"?(e&&e.classList.add("hidden"),t&&t.classList.remove("hidden")):(e&&e.classList.remove("hidden"),t&&t.classList.add("hidden"))}function Ye(e){localStorage.setItem(p.FEEDBACK_STATE,e),Dt()}function Hi(){localStorage.removeItem(p.FEEDBACK_STATE),Dt()}function Oe(){return document.getElementById("editor-modal")}function Nt(){const e=document.getElementById("close-editor-modal-btn");e&&(o.hasEnabledInEditor||o.flowCompleted?(e.style.display="flex",e.style.visibility="visible"):(e.style.display="none",e.style.visibility="hidden"))}function Mi(){o.flowCompleted||(o.flowCompleted=!0,o.appEnabled=o.appToggleState==="on",Nt(),$t(),Z(),ee(),o.currentPage!=="home"&&De(o.currentPage))}function Di(){const e=Oe();if(!e)return;Me(e);const t=document.getElementById("editor-theme-display");t&&(t.textContent=o.selectedTheme),Nt(),He()}function Be(){const e=Oe();e&&(ve(e),(o.hasEnabledInEditor||o.flowCompleted)&&Mi())}function Ni(){return le(Oe())}function Pt(){return o.hasEnabledInEditor||o.flowCompleted}function Pi(){const e=Oe();e&&e.classList.add("hidden"),setTimeout(()=>T("open-theme-picker"),150)}function Oi(){const e=document.getElementById("close-editor-modal-btn"),t=document.getElementById("editor-modal-back-btn"),n=document.getElementById("editor-modal-overlay"),a=document.getElementById("enable-editor-modal-btn");e&&e.addEventListener("click",Be),t&&t.addEventListener("click",Pi),n&&n.addEventListener("click",()=>{Pt()&&Be()}),a&&a.addEventListener("click",()=>{if(!o.indexingComplete){alert("Please wait for indexing to complete first.");return}nt(),Be()}),document.addEventListener("click",i=>{i.target.closest('[data-action="enable-app-from-banner"]')&&Zn()})}G("open-editor-modal",()=>Di());const Fi="https://apps.shopify.com/findter-custom-filter-search#modal-show=WriteReviewModal&st_campaign=rate-app&st_source=admin-web";let Ge=!1;function st(){return document.getElementById("feedback-modal")}function gt(){const e=st();if(!e)return;const t=document.getElementById("feedback-form-body"),n=document.getElementById("feedback-success-body"),a=document.getElementById("feedback-modal-footer"),i=document.getElementById("feedback-category"),s=document.getElementById("feedback-comment"),r=document.getElementById("feedback-files");t&&t.classList.remove("hidden"),n&&n.classList.add("hidden"),a&&a.classList.remove("hidden"),i&&(i.selectedIndex=0),s&&(s.value=""),r&&(r.value=""),Me(e)}function be(){ve(st())}function Gi(){return le(st())}function ji(){const e=document.getElementById("feedback-category"),t=document.getElementById("feedback-comment"),n=document.getElementById("feedback-files"),a=document.getElementById("feedback-form-body"),i=document.getElementById("feedback-success-body"),s=document.getElementById("feedback-modal-footer"),r=e?e.value:"",d=t?t.value.trim():"",l=n&&n.files?n.files.length:0;if(!r){e&&e.focus();return}const c=l>0?l+" file(s) attached":"None",b="📋 <strong>New Support Ticket</strong><br>Category: "+H(r)+"<br>Message: "+(d?H(d):"(none)")+"<br>Attachments: "+H(c);K({hideBadge:!0}),O(b,!0,{html:!0}),setTimeout(()=>{O("Thanks for reaching out! <br>We've received your feedback and our support team will get back to you shortly.",!1,{html:!0})},800),a&&a.classList.add("hidden"),s&&s.classList.add("hidden"),i&&i.classList.remove("hidden"),Ye("hidden"),setTimeout(()=>be(),1600)}function Ri(){const e=document.getElementById("close-feedback-modal-btn"),t=document.getElementById("feedback-cancel-btn"),n=document.getElementById("feedback-submit-btn"),a=document.getElementById("feedback-modal-overlay"),i=document.getElementById("feedback-banner-close"),s=document.getElementById("show-feedback-banner-btn"),r=document.getElementById("feedback-mini-box-btn"),d=document.getElementById("feedback-banner"),l=document.getElementById("feedback-thumbs-up"),c=document.getElementById("feedback-thumbs-down");e&&e.addEventListener("click",be),t&&t.addEventListener("click",be),n&&n.addEventListener("click",ji),a&&a.addEventListener("click",be),i&&d&&i.addEventListener("click",()=>d.classList.add("hidden")),s&&s.addEventListener("click",()=>{Ye("default"),d&&d.scrollIntoView({behavior:"smooth",block:"start"})}),r&&r.addEventListener("click",()=>gt()),window.addEventListener("focus",()=>{Ge&&(Ge=!1,localStorage.setItem(p.REVIEW_SUBMITTED,"true"),Ye("mini"))}),l&&l.addEventListener("click",()=>{Ge=!0,window.open(Fi,"_blank")}),c&&c.addEventListener("click",()=>gt())}function pe(e){e.timestamp=new Date().toISOString(),console.log("[welcome-tracking]",e)}function Wi(){const e=document.getElementById("welcome-carousel-track"),t=document.getElementById("welcome-carousel-dots"),n=document.getElementById("welcome-carousel-prev"),a=document.getElementById("welcome-carousel-next"),i=document.getElementById("welcome-carousel");if(!e||!t||!n||!a||!i)return{onShow(){},onDismiss(){}};const s=e.children;let r=0,d=null,l=null,c=null,b={},m={};const I=[];let v=0;function k(){const g=document.getElementById("welcome-gate-modal");return!!(g&&!g.classList.contains("hidden"))}function y(g){return!!(g&&g.complete&&g.naturalWidth>0)}function w(){l&&(clearTimeout(l),l=null)}function C(){const g=document.getElementById("welcome-mobile-banner");return g&&window.getComputedStyle(g).display!=="none"?g:i}function q(){const g=C();if(!k()||!g)return 0;const x=g.getBoundingClientRect();if(!x.width||!x.height)return 0;const L=Math.max(0,Math.min(x.right,window.innerWidth)-Math.max(x.left,0)),A=Math.max(0,Math.min(x.bottom,window.innerHeight)-Math.max(x.top,0));return L*A/(x.width*x.height)}function N(g){if(l&&!g)return;w(),v=q();const x=r+1;let L=s[r];const A=document.getElementById("welcome-mobile-banner"),ke=A&&window.getComputedStyle(A).display!=="none";ke&&(L=A.querySelector("img")),!(!k()||b[x]||!ke&&m[r])&&document.visibilityState==="visible"&&(v<.5||y(L)&&(l=setTimeout(()=>{l=null,!(r+1!==x||!k())&&(document.visibilityState!=="visible"||v<.5||!y(L)||m[r]||(b[x]=!0,pe({event:"welcome_modal_viewed",slide_index:x,change_method:g||null})))},1e3)))}function F(g){const x=Array.prototype.indexOf.call(s,g);x<0||m[x]||(m[x]=!0,x===r&&w(),k()&&pe({event:"welcome_modal_image_failed",slide_index:x+1}))}if(Array.prototype.forEach.call(s,g=>{g.addEventListener("error",()=>F(g)),g.addEventListener("load",()=>{s[r]===g&&N(null)}),g.complete&&g.naturalWidth===0&&F(g)}),"IntersectionObserver"in window){const g=document.getElementById("welcome-mobile-banner"),x=new IntersectionObserver(L=>{L.forEach(A=>{A.target===C()&&(v=A.intersectionRatio||0,v>=.5?N(null):w())})},{threshold:[0,.5,1]});x.observe(i),g&&x.observe(g)}else v=1;document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"?N(null):w()});function V(){t.innerHTML="";for(let g=0;g<s.length;g+=1){const x=document.createElement("button");x.type="button",x.className="welcome-carousel-dot h-2 rounded-full transition-all duration-300 shadow "+(g===r?"w-5 bg-black":"w-2 bg-black/50 hover:bg-black/80"),x.setAttribute("data-index",g),x.setAttribute("aria-label","Go to slide "+(g+1)),t.appendChild(x)}}function j(g,x){const L=(g+s.length)%s.length,A=L!==r;if(r=L,e.style.transform="translateX(-"+r*100+"%)",V(),!A||!x||!k()){N(x||null);return}x!=="auto_slide"&&I.push({slide_index:r+1,change_method:x}),pe({event:"welcome_modal_slide_changed",slide_index:r+1,change_method:x}),N(x)}function R(g){j(r+1,g)}function Y(g){j(r-1,g)}function P(){z(),s.length>1&&(d=setInterval(()=>R("auto_slide"),5e3))}function z(){d&&(clearInterval(d),d=null)}a.addEventListener("click",()=>{R("next_button"),P()}),n.addEventListener("click",()=>{Y("previous_button"),P()}),t.addEventListener("click",g=>{const x=g.target.closest(".welcome-carousel-dot");x&&(j(parseInt(x.getAttribute("data-index"),10),"dot"),P())}),i.addEventListener("mouseenter",z),i.addEventListener("mouseleave",P);let $=!1,te=0,D=0,ne=0;function Ee(g){if(!(s.length<2)&&!g.target.closest("#welcome-carousel-prev, #welcome-carousel-next, #welcome-carousel-dots")&&($=!0,D=0,te=g.clientX,ne=i.getBoundingClientRect().width||1,e.style.transition="none",z(),i.setPointerCapture))try{i.setPointerCapture(g.pointerId)}catch{}}function W(g){if(!$)return;D=g.clientX-te;const x=-(r*100),L=D/ne*100;e.style.transform="translateX("+(x+L)+"%)"}function X(){if(!$)return;$=!1,e.style.transition="";const g=ne*.15;D<=-g?R("swipe"):D>=g?Y("swipe"):j(r),D=0,P()}return i.addEventListener("pointerdown",Ee),i.addEventListener("pointermove",W),i.addEventListener("pointerup",X),i.addEventListener("pointercancel",X),i.addEventListener("pointerleave",()=>{$&&X()}),j(0),P(),{onShow(){c=Date.now(),b={},I.length=0,w(),pe({event:"welcome_modal_shown",slide_index:r+1}),N(null)},onDismiss(g){w();const x=c?Math.round((Date.now()-c)/1e3):0,L=Object.keys(b).map(A=>Number(A));pe({event:"welcome_modal_dismissed",dismiss_method:g,viewed:L.length>0,slides_viewed:L,slide_clicks:I.slice(),dont_show_again:!0,time_to_dismiss_seconds:x})}}}let rt={onShow(){},onDismiss(){}};function Fe(){return document.getElementById("welcome-gate-modal")}function Ui(){return localStorage.getItem(p.WELCOME_SEEN)==="true"}function Ot(){const e=Fe();if(!e)return;Me(e);const t=e.querySelector(".p-modal__dialog");t&&t.focus(),rt.onShow()}function Te(e){const t=Fe();!t||t.classList.contains("hidden")||(rt.onDismiss(e||"close_button"),localStorage.setItem(p.WELCOME_SEEN,"true"),ve(t),Pa(),Bt(),M("highlight-feature"))}function qi(){return le(Fe())}function Vi(){rt=Wi();const e=document.getElementById("welcome-gate-continue-btn"),t=document.getElementById("welcome-gate-close-btn"),n=document.getElementById("welcome-gate-backdrop"),a=document.getElementById("show-welcome-modal-btn");e&&e.addEventListener("click",()=>Te("continue")),t&&t.addEventListener("click",()=>Te("close_button")),n&&n.addEventListener("click",()=>Te("backdrop")),a&&a.addEventListener("click",()=>{localStorage.removeItem(p.WELCOME_SEEN),Ot()})}function $i(){Fe()&&!Ui()?Ot():Ca()}function Yi(){document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(ga()){St();return}if(qi()){Te("esc");return}if(hn()){vt();return}if(ka()){Le();return}le(document.getElementById("theme-picker-modal"))&&ge(),Ni()&&Pt()&&Be(),Gi()&&be()}})}function ft(){console.log("Initializing Dashboard...");const e=document.createElement("div");e.id="app",e.className="contents",e.innerHTML=Si(),document.body.prepend(e),Vt(),la(),Jn(),Fa(),Ti(),Ra(),ai(),kn(),Oi(),Ia(),Vi(),Yi(),Lt({tabsElId:"feature-highlight-tabs",bodyElId:"feature-highlight-body",autoplay:!1,source:"homepage"}),qt(),Q(),ee(),xe(),U(),ea()&&ta(),vi(),La(),$i(),Ci(),_i(),Hi(),Ri(),console.log("Ready!")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ft):ft();
