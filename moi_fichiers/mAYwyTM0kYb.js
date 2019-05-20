if (self.CavalryLogger) { CavalryLogger.start_js(["8nK9h"]); }

__d("IntlControllerSpecialCharEncodings",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NON_BREAKING_SPACE:"&nbsp;"})}),null);
__d("LocaleSwitchingReferrers",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CARRY_LOGOUT_LOGIN:"carry_logout_login",COMMUNITY_SITE_TRANSLATION_TOGGLE:"community_site_translation_toggle",FB4B_GLOBAL_SITES_DIALOG:"fb4b_global_sites_dialog",FB4B_GLOBAL_SITES_FOOTER:"fb4b_global_sites_footer",FB4C_GLOBAL_SITE_FOOTER:"fb4c_global_site_footer",IGB_GLOBAL_SITES_FOOTER:"igb_global_sites_footer",WORKPLACE_MARKETING_FOOTER:"workplace_marketing_footer",WORKPLACE_GALAHAD_CHANNEL:"workplace_galahad_channel",IG_HC_FOOTER:"ig_hc_footer",LOCALE_SWITCH_SCRIPT:"locale_switch_script",M_TOUCH_LOCALE_SELECTOR:"m_touch_locale_selector",M_BASIC_LOCALE_FOOTER:"m_basic_locale_footer",MEDIA_PORTAL_V3_DIALOG:"media_portal_v3_dialog",MOBILE_ACCOUNT_SETTINGS:"mobile_account_settings",MOBILE_CHROME_JP_FOOTER:"mobile_chrome_jp_footer",MOBILE_FB4B_GLOBAL_SITES_FOOTER:"mobile_fb4b_global_sites_footer",MOBILE_FB4B_GLOBAL_SITES_PAGE_VIEW:"mobile_fb4b_global_sites_page_view",MOBILE_HELP_CENTER_SEARCH:"mobile_help_center_search",MOBILE_LOCALE_CHANGED_NOTICE:"mobile_locale_changed_notice",MOBILE_LOCALE_LINKS:"mobile_locale_links",MOBILE_SUGGESTED_LOCALE_SELECTOR:"mobile_suggested_locale_selector",MOBILE_SWITCH_LANGUAGE_HEADER:"mobile_switch_language_header",SAFETY_CENTER_GLOBAL_SITES_FOOTER:"fbsc_global_sites_footer",SITEMAP:"sitemap",QP_PROMO:"qp_promo",RLX_QP_FORCE_SWITCH:"rlx_qp_force_switch",RLX_QP_PROMPT_SWITCH:"rlx_qp_prompt_switch",RLX_PROMPTED_SWITCH_FOLLOWUP_NOTICE:"rlx_prompted_switch_followup_notice",RLX_QP_MULTI_LANGUAGE:"rlx_qp_multi_language",WWW_ACCOUNT_SETTINGS:"www_account_settings",WWW_CARD_SELECTOR:"www_card_selector",WWW_CARD_SELECTOR_MORE:"www_card_selector_more",WWW_DEV_SITE:"www_dev_site",WWW_HELP_INLINE_SELECTOR:"www_help_inline_selector",WWW_I18N_NUB:"www_i18n_nub",WWW_LANGUAGE_PAGE:"www_language_page",WWW_LINK_DIALOG_SELECTOR:"www_link_dialog_selector",WWW_LIST_SELECTOR:"www_list_selector",WWW_LIST_SELECTOR_MORE:"www_list_selector_more",WWW_MANDATORY_LOCALE_SELECTION_POST:"www_mandatory_locale_selection_post",WWW_TRANS_APP_INCONSISTENT:"www_trans_app_inconsistent",FBCOLUMN_FOOTER:"fbcolumn_footer",WWW_LOGIN_BLUE_BAR:"www_login_blue_bar_nub",UNIT_TEST:"unit_test",ACCOUNT_CREATOR:"account_creator",AT_WORK_ACCOUNT:"at_work_account_creator",ADMIN_TOOL:"admin_tool",TRANSLATION_APP_UNINSTALL:"translation_app_uninstall",CHECKPOINT:"checkpoint",LEGACY_CONTROLLER:"legacy_controller",AYMT:"aymt",UNKNOWN:"unknown"})}),null);
__d("LoggedOutSwitchingLocaleTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setIndex=function(a){this.$1.index=a;return this};c.setNewLocale=function(a){this.$1.new_locale=a;return this};c.setOldLocale=function(a){this.$1.old_locale=a;return this};c.setReferrer=function(a){this.$1.referrer=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={index:!0,new_locale:!0,old_locale:!0,referrer:!0,time:!0,weight:!0};e.exports=a}),null);
__d("XIntlAccountSetLocaleAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/ajax/save_locale/",{loc:{type:"String"},href:{type:"String"},index:{type:"Int"},ref:{type:"String"},ls_ref:{type:"Enum",defaultValue:"unknown",enumType:1},should_redirect:{type:"Bool",defaultValue:!0}})}),null);
__d("IntlUtils",["AsyncRequest","Cookie","IntlControllerSpecialCharEncodings","LocaleSwitchingReferrers","LoggedOutSwitchingLocaleTypedLogger","ReloadPage","XIntlAccountSetLocaleAsyncController","goURI"],(function(a,b,c,d,e,f){__p&&__p();a={setXmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({xmode:a}).setHandler(function(){b("ReloadPage").now()}).send()},encodeSpecialCharsForXController:function(a){return a.replace(new RegExp("\xa0","g"),b("IntlControllerSpecialCharEncodings").NON_BREAKING_SPACE)},decodeSpecialCharsFromXController:function(a){return a.replace(new RegExp(b("IntlControllerSpecialCharEncodings").NON_BREAKING_SPACE,"g"),"\xa0")},setAmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({amode:a,app:!1}).setHandler(function(){b("ReloadPage").now()}).send()},setRmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({rmode:a}).setHandler(function(){b("ReloadPage").now()}).send()},setLocale:function(a,c,d,e){d||(d=a.options[a.selectedIndex].value);e=b("XIntlAccountSetLocaleAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(e).setData({loc:d,ref:c,should_redirect:!1}).setHandler(function(a){b("ReloadPage").now()}).send()},appendCookieLocaleHistory:function(a){__p&&__p();var c="lh",d=b("Cookie").get(c),e=[],f=5;if(d!==null&&d!==void 0&&d!=""){e=d.split(",");e.push(a);for(var d=0;d<e.length-1;d++)e[d]==e[d+1]&&e.splice(d,1);e.length>=f&&e.slice(1,f)}else e.push(a);b("Cookie").set(c,e.toString())},setCookieLocale:function(a,c,d,e,f){e===void 0&&(e=b("LocaleSwitchingReferrers").OTHER),f===void 0&&(f=null),b("Cookie").setWithoutCheckingUserConsent_DANGEROUS("locale",a),this.appendCookieLocaleHistory(a),new(b("LoggedOutSwitchingLocaleTypedLogger"))().setNewLocale(a).setOldLocale(c).setIndex(f).setReferrer(e).log(),b("goURI")(d)}};e.exports=a}),null);
__d("legacy:intl-base",["IntlUtils"],(function(a,b,c,d,e,f){a.intl_set_xmode=b("IntlUtils").setXmode,a.intl_set_amode=b("IntlUtils").setAmode,a.intl_set_rmode=b("IntlUtils").setRmode,a.intl_set_locale=b("IntlUtils").setLocale}),3);
__d("XReferer",["Base64","Cookie","FBJSON","URI","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g={update:function(a,c,d){__p&&__p();if(!d){b("Cookie").set("x-referer","");return}a!=null&&(a=g.truncatePath(a));c!=null&&(c=g.truncatePath(c));var e=window.location.pathname+window.location.search;d=b("URI").getRequestURI();var f=d.getSubdomain();c!=null&&g._setCookie(c,e,f);a!=null&&b("setTimeoutAcrossTransitions")(function(){a!=null&&g._setCookie(a,e,f)},0)},_setCookie:function(a,c,d){a={r:a,h:c,s:d};c=b("Base64").encode(b("FBJSON").stringify(a));b("Cookie").set("x-referer",c)},truncatePath:function(a){var b=1024;a&&a.length>b&&(a=a.substring(0,b)+"...");return a}};e.exports=g}),null);
__d("HistoryManager",["SessionName","Env","Event","SprinkleConfig","URI","UserAgent_DEPRECATED","XReferer","emptyFunction","gkx","goOrReplace","isInIframe","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();b("SessionName").getName();var g={history:null,current:0,fragment:null,isInitialized:function(){return!!g._initialized},init:function(){__p&&__p();if(!b("Env").ALLOW_TRANSITION_IN_IFRAME&&b("isInIframe")())return;if(g._initialized)return g;var a=new(b("URI"))(window.location.href),c=a.getFragment()||"";c.charAt(0)==="!"&&(c=c.substr(1),a.setFragment(c));Object.assign(g,{_initialized:!0,fragment:c,orig_fragment:c,history:[a],callbacks:[],lastChanged:Date.now(),canonical:new(b("URI"))("#"),user:0,enabled:!0,debug:b("emptyFunction")});if(window.history&&window.history.pushState){this.lastURI=document.URL;if(b("gkx")("678676")){c=new(b("URI"))(this.lastURI);a=c.getQueryData();a.__md__=void 0;a.__xts__=void 0;a.fb_dtsg_ag=void 0;a[b("SprinkleConfig").param_name]=void 0;this.lastURI=c.setQueryData(a).toString()}try{window.history.state&&b("gkx")("819236")?window.history.replaceState(window.history.state,null,this.lastURI):window.history.replaceState(this.lastURI,null,this.lastURI)}catch(a){if(!(a.number===-2147467259))throw a}b("Event").listen(window,"popstate",function(a){var c=a&&a.state&&typeof a.state==="string";c&&g.lastURI!=a.state&&(g.lastURI=document.URL,g.lastChanged=Date.now(),g.notify(new(b("URI"))(a.state).getUnqualifiedURI().toString()))}.bind(g));(b("UserAgent_DEPRECATED").webkit()<534||b("UserAgent_DEPRECATED").chrome()<=13)&&(b("setIntervalAcrossTransitions")(g.checkURI,42),g._updateRefererURI(this.lastURI));return g}g._updateRefererURI(b("URI").getRequestURI(!1));if(b("UserAgent_DEPRECATED").webkit()<500||b("UserAgent_DEPRECATED").firefox()<2){g.enabled=!1;return g}"onhashchange"in window?b("Event").listen(window,"hashchange",function(){window.setTimeout(g.checkURI.bind(g),0)}):b("setIntervalAcrossTransitions")(g.checkURI,42);return g},registerURIHandler:function(a){g.callbacks.push(a);return g},setCanonicalLocation:function(a){g.canonical=new(b("URI"))(a);return g},notify:function(a){a==g.orig_fragment&&(a=g.canonical.getFragment());for(var b=0;b<g.callbacks.length;b++)try{if(g.callbacks[b](a))return!0}catch(a){}return!1},checkURI:function(){__p&&__p();if(Date.now()-g.lastChanged<400)return;if(window.history&&window.history.pushState){var a=new(b("URI"))(document.URL).removeQueryData("ref").toString(),c=new(b("URI"))(g.lastURI).removeQueryData("ref").toString();a!=c&&(g.lastChanged=Date.now(),g.lastURI=a,b("UserAgent_DEPRECATED").webkit()<534&&g._updateRefererURI(a),g.notify(new(b("URI"))(a).getUnqualifiedURI().toString()));return}if(b("UserAgent_DEPRECATED").webkit()&&window.history.length==200){g.warned||(g.warned=!0);return}c=new(b("URI"))(window.location.href).getFragment();c.charAt(0)=="!"&&(c=c.substr(1));c=c.replace(/%23/g,"#");if(c!=g.fragment.replace(/%23/g,"#")){g.debug([c," vs ",g.fragment,"whl: ",window.history.length,"QHL: ",g.history.length].join(" "));for(var a=g.history.length-1;a>=0;--a)if(g.history[a].getFragment().replace(/%23/g,"#")==c)break;++g.user;a>=0?g.go(a-g.current):g.go("#"+c);--g.user}},_updateRefererURI:function(a){a instanceof b("URI")&&(a=a.toString()),b("XReferer").update(a,null,!0)},go:function(a,c,d){__p&&__p();if(window.history&&window.history.pushState){c||typeof a==="number";var e=new(b("URI"))(a).removeQueryData(["ref","messaging_source","ajaxpipe_fetch_stream","fb_dtsg_ag",b("SprinkleConfig").param_name]).toString();g.lastChanged=Date.now();this.lastURI=e;d?window.history.replaceState(a,null,e):window.history.pushState(a,null,e);b("UserAgent_DEPRECATED").webkit()<534&&g._updateRefererURI(a);return!1}g.debug("go: "+a);c===void 0&&(c=!0);if(!g.enabled&&!c)return!1;if(typeof a==="number"){if(!a)return!1;e=a+g.current;var f=Math.max(0,Math.min(g.history.length-1,e));g.current=f;e=g.history[f].getFragment()||g.orig_fragment;e=new(b("URI"))(e).removeQueryData("ref").getUnqualifiedURI().toString();g.fragment=e;g.lastChanged=Date.now();g.user||b("goOrReplace")(window.location,window.location.href.split("#")[0]+"#!"+e,d);c&&g.notify(e);g._updateRefererURI(e);return!1}a=new(b("URI"))(a);a.getDomain()==new(b("URI"))(window.location.href).getDomain()&&(a=new(b("URI"))("#"+a.getUnqualifiedURI()));f=g.history[g.current].getFragment();e=a.getFragment();if(e==f||f==g.orig_fragment&&e==g.canonical.getFragment()){c&&g.notify(e);g._updateRefererURI(e);return!1}d&&g.current--;f=g.history.length-g.current-1;g.history.splice(g.current+1,f);g.history.push(new(b("URI"))(a));return g.go(1,c,d)},getCurrentFragment:function(){var a=b("URI").getRequestURI(!1).getFragment();return a==g.orig_fragment?g.canonical.getFragment():a}};e.exports=g}),null);
__d("escapeJSQuotes",[],(function(a,b,c,d,e,f){function a(a){return typeof a==="undefined"||a==null||!a.valueOf()?"":a.toString().replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\"/g,"\\x22").replace(/\'/g,"\\'").replace(/</g,"\\x3c").replace(/>/g,"\\x3e").replace(/&/g,"\\x26")}e.exports=a}),null);
__d("PageTransitionsBlue",["fbt","invariant","Arbiter","BlueCompatBroker","BlueCompatRouter","Bootloader","CurrentUser","DOMQuery","DOMScroll","Env","ErrorUtils","Event","HistoryManager","JSLogger","LayerHideOnEscape","PageHooks","PageNavigationStageLogger","PageTransitionsConfig","PageTransitionsRegistrar","React","ScriptPath","URI","Vector","areEqual","clickRefAction","escapeJSQuotes","ge","goOrReplace","isFacebookURI","isInIframe","setTimeout"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=["cquick","ctarget","cquick_token","mh_","killabyte","tfc_","tfi_"],j={};function k(a,b){a&&(j[a.getUnqualifiedURI().toString()]=b)}function l(a){return j[a.getUnqualifiedURI().toString()]}function m(a){delete j[a.getUnqualifiedURI().toString()]}function n(){var a={};window.location.search.slice(1).split("&").forEach(function(b){b=b.split("=");var c=b[0];b=b[1];b=b===void 0?null:b;i.some(function(a){return c.startsWith(a)})&&(a[c]=b)});return a}var o=null,p=!1,q=new(b("URI"))(""),r=null,s=new(b("URI"))(),t=null,u=!1,v=!1,w=!1,x={isInitialized:function(){return p},init:function(){x._init()},_init:function(){__p&&__p();if(b("isInIframe")())return!1;if(p)return!0;var a=b("PageTransitionsRegistrar").getMostRecentURI();o=a;q=a;r=null;s=a;var c=b("ErrorUtils").applyWithGuard(function(a){return new(b("URI"))(a)},null,[document.referrer]);t=document.referrer&&c&&b("isFacebookURI")(c)?c:null;p=!0;c=b("URI").getRequestURI(!1);c.getFragment().startsWith("/")?c=c.getFragment():c=a.toString();b("HistoryManager").init().setCanonicalLocation("#"+c).registerURIHandler(x._historyManagerHandler);b("Event").listen(window,"scroll",function(){u||k(o,b("Vector").getScrollPosition())});return!0},registerHandler:b("PageTransitionsRegistrar").registerHandler,removeHandler:b("PageTransitionsRegistrar").removeHandler,getCurrentURI:function(a){a===void 0&&(a=!1);this._init();return!o&&!a?new(b("URI"))(q):new(b("URI"))(o)},isTransitioning:function(){this._init();return!o},getNextURI:function(){this._init();return s},getNextReferrerURI:function(){this._init();return r},getReferrerURI:function(){this._init();return t},getMostRecentURI:function(){this._init();return new(b("URI"))(q)},go:function(a,c){c===void 0&&(c=!1);if(b("BlueCompatRouter").go(a))return;this.goBase(a,c)},goBase:function(a,c){c===void 0&&(c=!1);this._init();var d=n(),e=new(b("URI"))(a).removeQueryData("quickling").addQueryData(d).getQualifiedURI();b("JSLogger").create("pagetransition").debug("go",{uri:e.toString()});m(e);c||b("clickRefAction")("uri",{href:e.toString()},null,"INDIRECT");x._loadPage(e,function(a){a?b("HistoryManager").go(e.toString(),!1,c):(b("PageNavigationStageLogger").setNote("pt_not_handled"),b("PageNavigationStageLogger").updateCookie(),b("goOrReplace")(window.location,e,c))})},_historyManagerHandler:function(a){if(a.charAt(0)!="/")return!1;b("clickRefAction")("h",{href:a});b("ScriptPath").getClickPointInfo()||b("ScriptPath").setClickPointInfo({click:"back"});x._loadPage(new(b("URI"))(a),function(c){c||(b("PageNavigationStageLogger").setNote("hist_manager_fallback"),b("goOrReplace")(window.location,a,!0))});return!0},_loadPage:function(a,c){__p&&__p();if(new(b("URI"))(a).getFragment()&&b("areEqual")(new(b("URI"))(a).setFragment(null).getQualifiedURI(),new(b("URI"))(o).setFragment(null).getQualifiedURI())){b("Arbiter").inform("pre_page_fragment_transition",{from:new(b("URI"))(o).getFragment(),to:new(b("URI"))(a).getFragment()});if(x.restoreScrollPosition(a)){o=q=a;b("Arbiter").inform("page_fragment_transition",{fragment:new(b("URI"))(a).getFragment()});return}}b("PageNavigationStageLogger").setCookieForNavigation(a);var d;o&&(d=l(o));var e=function(){d&&o&&k(o,d);r=x.getMostRecentURI();o=null;s=a;d&&b("DOMScroll").scrollTo(d,!1);u=!0;var e=x._handleTransition(a);c&&(e===b("PageTransitionsRegistrar").DELAY_HISTORY?b("setTimeout")(function(){return c&&c(e)},0):c(e))},f=s;s=a;var g=b("PageHooks").runHooks("onbeforeleavehooks");s=f;g?x._warnBeforeLeaving(g,e):e()},_handleTransition:function(c){__p&&__p();window.onbeforeleavehooks=void 0;if(v||!c.isSameOrigin()){b("PageNavigationStageLogger").setNote("pt_disabled");return!1}var d=b("PageTransitionsConfig").reloadOnBootloadError&&this._hasBootloadErrors();if(d){b("PageNavigationStageLogger").setNote("bl_err");return!1}var e;d=a.AsyncRequest;d&&(e=d.getLastID());b("Arbiter").inform("pre_page_transition",{from:x.getMostRecentURI(),to:c});d=b("PageTransitionsRegistrar")._getTransitionHandlers();for(var f=d.length-1;f>=0;--f){var g=d[f];if(!g)continue;for(var h=g.length-1;h>=0;--h){var i=g[h](c);if(i===!0||i===b("PageTransitionsRegistrar").DELAY_HISTORY){var j={sender:this,uri:c,id:e};try{b("Arbiter").inform("page_transition",j)}catch(a){}return i}else g.splice(h,1)}}return!1},disableTransitions:function(){v=!0},disableScrollAnimation:function(){w=!0},_hasBootloadErrors:function(){return b("Bootloader").getErrorUrls().length>0},unifyURI:function(){this._init(),o=q=s,t=r},transitionComplete:function(a){a===void 0&&(a=!1);this._init();u=!1;x._executeCompletionCallbacks();x.unifyURI();a||o&&x.restoreScrollPosition(o);try{document.activeElement&&document.activeElement.nodeName==="A"&&document.activeElement.blur()}catch(a){}},_executeCompletionCallbacks:function(){var a=b("PageTransitionsRegistrar")._getCompletionCallbacks();a.length>0&&(b("PageTransitionsRegistrar")._resetCompletionCallbacks(),a.forEach(function(a){return a()}))},registerCompletionCallback:b("PageTransitionsRegistrar").registerCompletionCallback,rewriteCurrentURI:function(a,c){__p&&__p();this._init();var d=b("PageTransitionsRegistrar")._getTransitionHandlers(),e=d.length||1,f=!1;b("PageTransitionsRegistrar").registerHandler(function(){if(a&&a.toString()==x.getMostRecentURI().getUnqualifiedURI().toString()){x.transitionComplete();return!0}f=!0},e);x.go(c,!0);d.length===e+1&&d[e].length===(f?0:1)||h(0,1302);d.length=e},_warnBeforeLeaving:function(a,c){b("Bootloader").loadModules(["DialogX","XUIDialogTitle.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIGrayText.react"],function(d,e,f,h,i,j){var k=b("CurrentUser").isWorkUser();e=k?b("React").createElement(e,{showCloseButton:!0},g._("Terminer votre publication\u00a0?")):b("React").createElement(e,{showCloseButton:!1},g._("Quitter la page\u00a0?"));k=k?[b("React").createElement(h,{key:"confirm",action:"confirm",label:g._("Abandonner la publication")}),b("React").createElement(h,{key:"cancel",action:"cancel",use:"confirm",label:g._("Acc\u00e9der \u00e0 la publication")})]:[b("React").createElement(h,{key:"cancel",action:"cancel",label:g._("Rester sur cette page")}),b("React").createElement(h,{key:"confirm",action:"confirm",use:"confirm",label:g._("Quitter cette page")})];var l=new d({width:450,addedBehaviors:[b("LayerHideOnEscape")]},b("React").createElement("div",null,e,b("React").createElement(f,null,b("React").createElement(j,{shade:"medium",size:"medium"},a)),b("React").createElement(i,null,k)));l.subscribe("confirm",function(){l.hide(),c()});l.show()},"PageTransitionsBlue")},restoreScrollPosition:function(a){__p&&__p();var c=l(a);if(c){b("DOMScroll").scrollTo(c,!1);return!0}function d(a){if(!a)return null;var c="a[name='"+b("escapeJSQuotes")(a)+"']";return b("DOMQuery").scry(document.body,c)[0]||b("ge")(a)}c=d(new(b("URI"))(a).getFragment());if(c){d=!w;b("DOMScroll").scrollTo(c,d);return!0}return!1}};b("Env").isCQuick&&(b("BlueCompatBroker").init(),b("BlueCompatBroker").register("transitionpage",function(a){a=b("BlueCompatBroker").getMessageEventString(a,"uri");if(window.location.href===a)return;x.goBase(a,!1)}));e.exports=x}),null);
__d("FacebarPlaceholderShortcut",["fbt","KeyboardShortcuts","translateKey"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this._input=a,this._listener=null}var c=a.prototype;c.enable=function(){this._registerListener()};c._registerListener=function(){this._listener&&this._listener.remove(),this._listener=b("KeyboardShortcuts").register("SLASH",this._handleKeydown.bind(this),{filter:function(a,b){return!a.getModifiers().shift},persistOnTransition:!0,shortcutInfo:{displayKeys:[b("translateKey")("/")],description:g._("Rechercher")}})};c.disable=function(){this._listener&&this._listener.remove(),this._listener=null};c._handleKeydown=function(a){this._input.focus();return!1};return a}();e.exports=a}),null);
__d("XFacebarBootloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/typeahead/search/facebar/bootload/",{placeholder_id:{type:"String"}})}),null);
__d("FacebarBootloader",["AsyncRequest","BanzaiODS","CSS","Event","FacebarPlaceholderShortcut","Run","SubscriptionsHandler","XFacebarBootloadController","getActiveElement"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="facebar_bootloader",h=g+"_";a={isRequested:!1,isFocused:!1,isInitialized:!1,init:function(a,c,d,e){__p&&__p();var f=this;this.reset();this.subscriptions=new(b("SubscriptionsHandler"))();this.placeholder=d;this.searchInput=a;this.shortcutHandler=new(b("FacebarPlaceholderShortcut"))(a);this.loadingIndicator=c;this.shortcutHandler.enable();this.subscriptions.addSubscriptions(b("Event").listen(a,"focus",function(){f.requestSearch(),f.showLoadingIndicator()}),b("Event").listen(d,"mouseover",this.requestSearch.bind(this)),b("Event").listen(a,"invalid",function(a){return a.preventDefault()}));e&&this.subscriptions.addSubscriptions(b("Event").listen(window,"load",this.requestSearch.bind(this)));b("Run").onUnload(this.reset.bind(this));this.isInitialized=!0;(a.value||b("getActiveElement")()==a)&&(this.requestSearch(),this.showLoadingIndicator())},showLoadingIndicator:function(){this.loadingIndicator&&b("CSS").show(this.loadingIndicator)},reset:function(){this.subscriptions&&this.subscriptions.release(),this.shortcutHandler&&this.shortcutHandler.disable(),this.searchInput=this.subscriptions=this.shortcutHandler=null,this.loadingIndicator=null,this.isRequested=!1,this.isFocused=!1,this.isInitialized=!1},requestSearch:function(){b("getActiveElement")()==this.searchInput&&!this.isFocused&&(this.isFocused=!0,this.focusTime=Date.now());if(this.isRequested||!this.isInitialized)return;this.isRequested=!0;var a=b("XFacebarBootloadController").getURIBuilder().setString("placeholder_id",this.placeholder.getAttribute("id")).getURI(),c=new(b("AsyncRequest"))();c.setURI(a).setMethod("GET").setReadOnly(!0).setAllowCrossPageTransition(!0).setErrorHandler(function(a){b("BanzaiODS").bumpEntityKey(g,h+"request_failed"),a&&a.errorSummary?b("BanzaiODS").bumpEntityKey(g,h+"request_failed_"+a.errorSummary):b("BanzaiODS").bumpEntityKey(g,h+"request_failed_no_error_summary"),this.isRequested=!1}).send()},setFocus:function(a,c,d){if(!this.searchInput)return;b("BanzaiODS").bumpEntityKey(g,h+"response_arrived");(this.searchInput.value||this.isFocused)&&(a.getCore().isFocused=!0,a.getCore().input.setValue(d.fromString(this.searchInput.value),!0),a.getCore().setStartTime(this.focusTime),c.focus(),c.setSelection({length:this.searchInput.selectionEnd-this.searchInput.selectionStart,offset:this.searchInput.selectionStart}),c.togglePlaceHolder&&c.togglePlaceholder());this.reset()}};e.exports=a}),null);
__d("SketchBase",["Promise","regeneratorRuntime","Alea","Base64","md5","performanceNow","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=10,h=16,i=function(){return new(b("Promise"))(function(a){b("setTimeout")(a)})},j=function(){__p&&__p();function a(a,c,d){this.seed=a,this.rounds=c,this.rng=b("Alea")(a),this.ctx=d.getContext("2d"),this.width=d.width,this.height=d.height}var c=a.prototype;c.solveAllRoundsAsync=function(a){__p&&__p();var c,d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:c=Date.now()+g,d=0;case 2:if(!(d<this.rounds)){e.next=11;break}a(d);if(!(Date.now()>c)){e.next=8;break}e.next=7;return b("regeneratorRuntime").awrap(i());case 7:c=Date.now()+g;case 8:d++;e.next=2;break;case 11:case"end":return e.stop()}},null,this)};c.solveAsync=function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(this.solveAllRoundsAsync(this.pickPrimitiveAndDraw.bind(this)));case 2:case"end":return a.stop()}},null,this)};c.solveOnePrimitiveAsync=function(a){return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:c.next=2;return b("regeneratorRuntime").awrap(this.solveAllRoundsAsync(this.getDrawFunction(a)));case 2:case"end":return c.stop()}},null,this)};c.getDrawFunction=function(a){switch(a){case"text":return this.drawText.bind(this);case"bezier":return this.drawBezier.bind(this);case"circle":return this.drawCircle.bind(this);case"emoji":return this.drawEmoji.bind(this);default:return function(){return void 0}}};c.pickPrimitive=function(a){var b=["emoji","circle","bezier","text"];return b[a%b.length]};c.pickPrimitiveAndDraw=function(a){a=this.getDrawFunction(this.pickPrimitive(a));a()};c.drawText=function(){var a=Math.floor(this.rng()*50+100);this.ctx.font=a+"px Arial";var b=Math.floor(this.rng()*100).toString(),c=Math.floor(this.rng()*this.width/2);a=this.rngRange(a*2,this.height-a);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fillText(b,c,a)};c.drawEmoji=function(){var a=Math.floor(this.rng()*50+100);this.ctx.font=a+"px Arial";var b="\ud83d\ude03",c=Math.floor(this.rng()*this.width/2);a=this.rngRange(a*2,this.height-a);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fillText(b,c,a)};c.drawBezier=function(){this.ctx.beginPath();var a=this.rng()*this.width,b=this.rng()*this.height,c=this.rng()*this.width,d=this.rng()*this.height,e=this.rng()*this.width,f=this.rng()*this.height;this.ctx.moveTo(a,b);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,c,d);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,e,f);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,a,b);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fill()};c.drawCircle=function(){this.ctx.beginPath(),this.ctx.arc(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width/5,0,2*Math.PI),this.ctx.fillStyle=this.makeRadialGradient(),this.applyShadow(),this.ctx.fill(),this.ctx.lineWidth=2,this.ctx.strokeStyle=this.makeRadialGradient(),this.ctx.stroke()};c.makeRadialGradient=function(){var a=this.ctx.createRadialGradient(this.rng()*this.width,this.rng()*this.height,0,this.rng()*this.width,this.rng()*this.height,this.width*2);a.addColorStop(0,this.makeColor());a.addColorStop(.5,this.makeColor());a.addColorStop(1,this.makeColor());return a};c.makeColor=function(){var a=Math.floor(this.rng()*255),b=Math.floor(this.rng()*255),c=Math.floor(this.rng()*255);return"rgb("+a+","+b+","+c+")"};c.applyShadow=function(){this.ctx.shadowColor=this.makeColor(),this.ctx.shadowBlur=this.rng()*50,this.ctx.shadowOffsetX=this.rng()*15,this.ctx.shadowOffsetY=this.rng()*15};c.rngRange=function(a,b){var c=Math.min(a,b);a=Math.max(a,b);return this.rng()*(a-c)+c};return a}(),k={createCanvasAndSolveAllPrimitives:function(a,c,d){__p&&__p();var e,f,g,h;return b("regeneratorRuntime").async(function(i){__p&&__p();while(1)switch(i.prev=i.next){case 0:e=document.createElement("canvas");e.width=200;e.height=200;e.style.display="none";f={hash:"",hash_bezier:"",hash_circle:"",hash_emoji:"",hash_text:"",hash2:"",rounds:d,seed:a,seed2:c,time_taken:0};document.body&&document.body.appendChild(e);i.next=8;return b("regeneratorRuntime").awrap(k.solveAsync(e,a,d));case 8:g=i.sent;i.next=11;return b("regeneratorRuntime").awrap(k.solveAsync(e,c,d));case 11:h=i.sent;f.hash=g.hash;f.hash2=h.hash;f.time_taken=g.time_taken+h.time_taken;i.next=17;return b("regeneratorRuntime").awrap(k.solvePrimitive(e,a,d,"text"));case 17:f.hash_text=i.sent;i.next=20;return b("regeneratorRuntime").awrap(k.solvePrimitive(e,a,d,"bezier"));case 20:f.hash_bezier=i.sent;i.next=23;return b("regeneratorRuntime").awrap(k.solvePrimitive(e,a,d,"circle"));case 23:f.hash_circle=i.sent;i.next=26;return b("regeneratorRuntime").awrap(k.solvePrimitive(e,a,d,"emoji"));case 26:f.hash_emoji=i.sent;document.body&&document.body.removeChild(e);return i.abrupt("return",f);case 29:case"end":return i.stop()}},null,this)},encode:function(a){return b("Base64").encode(JSON.stringify(a))},getHash:function(a){return new(b("Promise"))(function(c){b("setTimeout")(function(){c(b("md5")(a.toDataURL()))},h)})},solveAsync:function(a,c,d){__p&&__p();var e,f,g,h,i,l;return b("regeneratorRuntime").async(function(m){__p&&__p();while(1)switch(m.prev=m.next){case 0:e=new j(c,d,a);e.ctx.clearRect(0,0,e.width,e.height);f=b("performanceNow")();m.next=5;return b("regeneratorRuntime").awrap(e.solveAsync());case 5:g=b("performanceNow")();h=parseInt((g-f)*1e3,10);m.next=9;return b("regeneratorRuntime").awrap(k.getHash(a));case 9:i=m.sent;l={hash:i,time_taken:h};return m.abrupt("return",l);case 12:case"end":return m.stop()}},null,this)},solvePrimitive:function(a,c,d,e){__p&&__p();var f,g;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:f=new j(c,d,a);f.ctx.clearRect(0,0,f.width,f.height);h.next=4;return b("regeneratorRuntime").awrap(f.solveOnePrimitiveAsync(e));case 4:h.next=6;return b("regeneratorRuntime").awrap(k.getHash(a));case 6:g=h.sent;return h.abrupt("return",g);case 8:case"end":return h.stop()}},null,this)}};e.exports=k}),null);
__d("SISketchSurface",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FEED:"feed",LOGIN:"login",REG:"registration"})}),null);
__d("XSISketchResultsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sketch_results/",{})}),null);
__d("SketchBlue",["regeneratorRuntime","AsyncRequest","Form","SISketchSurface","SketchBase","XSISketchResultsController","emptyFunction","nullthrows"],(function(a,b,c,d,e,f){__p&&__p();var g={solveIntern:function(a,c,d,e){var f;return b("regeneratorRuntime").async(function(g){while(1)switch(g.prev=g.next){case 0:g.next=2;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(a,d,e));case 2:f=g.sent,c.textContent=f.hash;case 4:case"end":return g.stop()}},null,this)},solveAndCallAsyncController:function(a,c,d){var e,f,h;return b("regeneratorRuntime").async(function(i){while(1)switch(i.prev=i.next){case 0:i.next=2;return b("regeneratorRuntime").awrap(g.createCanvasAndSolve(a,c,d));case 2:e=i.sent,f=b("SketchBase").encode(e),h=b("XSISketchResultsController").getURIBuilder().getURI(),new(b("AsyncRequest"))().setURI(h).setMethod("POST").setData({skstamp:f}).setTimeoutHandler(1e4,b("emptyFunction")).setErrorHandler(b("emptyFunction")).send();case 6:case"end":return i.stop()}},null,this)},solveAndUpdateForm:function(a,c,d,e){var f,h,i,j;return b("regeneratorRuntime").async(function(k){while(1)switch(k.prev=k.next){case 0:k.next=2;return b("regeneratorRuntime").awrap(g.createCanvasAndSolve(a,c,d));case 2:f=k.sent,h=babelHelpers["extends"]({},f,{surface:e=="login_form"?b("SISketchSurface").LOGIN:e=="reg"?b("SISketchSurface").REG:""}),i=b("SketchBase").encode(h),j=document.getElementById(e),b("Form").createHiddenInputs({skstamp:i},j);case 7:case"end":return k.stop()}},null,this)},solveAllPrimitivesAndCallAsyncController:function(a,c,d){var e,f,g;return b("regeneratorRuntime").async(function(h){while(1)switch(h.prev=h.next){case 0:h.next=2;return b("regeneratorRuntime").awrap(b("SketchBase").createCanvasAndSolveAllPrimitives(a,c,d));case 2:e=h.sent,f=b("SketchBase").encode(e),g=b("XSISketchResultsController").getURIBuilder().getURI(),new(b("AsyncRequest"))().setURI(g).setMethod("POST").setData({skstamp:f}).setTimeoutHandler(1e4,b("emptyFunction")).setErrorHandler(b("emptyFunction")).send();case 6:case"end":return h.stop()}},null,this)},createCanvasAndSolve:function(a,c,d){__p&&__p();var e,f,g,h;return b("regeneratorRuntime").async(function(i){__p&&__p();while(1)switch(i.prev=i.next){case 0:e=document.createElement("canvas");e.width=200;e.height=200;e.style.display="none";b("nullthrows")(document.body).appendChild(e);i.next=7;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(e,a,d));case 7:f=i.sent;i.next=10;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(e,c,d));case 10:g=i.sent;h={hash:f.hash,hash2:g.hash,rounds:d,seed:a,seed2:c,time_taken:f.time_taken+g.time_taken};b("nullthrows")(document.body).removeChild(e);return i.abrupt("return",h);case 14:case"end":return i.stop()}},null,this)}};e.exports=g}),null);
__d("SimpleFBAuthenticatedXHRRequest",["invariant","CurrentUser","DTSG","DTSGUtils","ServerJSDefine","SprinkleConfig","XHRRequest","isFacebookURI"],(function(a,b,c,d,e,f,g){__p&&__p();var h=1;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){c=a.call(this,c)||this;var e={__dyn:b("ServerJSDefine").getLoadedModuleHash(),__req:(h++).toString(36),__ajax__:1,__a:1,__user:b("CurrentUser").getID()};a.prototype.setData.call(babelHelpers.assertThisInitialized(c),babelHelpers["extends"]({},d,e));return c}var d=c.prototype;d.send=function(){__p&&__p();var c=this;if(!b("isFacebookURI")(this.getURI()))return a.prototype.send.call(this);if(b("DTSG").getCachedToken){var d=b("DTSG").getCachedToken();if(d)return this.sendOnDTSGToken(d);else{b("DTSG").getToken().done(function(a){return c.sendOnDTSGToken(a)});return this}}else this.sendOnDTSGToken(b("DTSG").getToken())};d.sendOnDTSGToken=function(c){if(c){a.prototype.setData.call(this,babelHelpers["extends"]({},this.getData(),{fb_dtsg:c}));if(b("SprinkleConfig").param_name){var d;a.prototype.setData.call(this,babelHelpers["extends"]({},this.getData(),(d={},d[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(c),d)))}}return a.prototype.send.call(this)};d.setData=function(a){g(0,5518)};c.parseResponse=function(a){return JSON.parse(a.substr(9))};c.getPayload=function(a){a=c.parseResponse(a).payload;return a.payload?a.payload:a};return c}(b("XHRRequest"));e.exports=a}),null);
__d("XFantailLogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/fantail/",{service:{type:"String",required:!0}})}),null);
__d("FantailLogQueue",["ChannelClientID","CircularBuffer","PHPQuerySerializer","SimpleFBAuthenticatedXHRRequest","XFantailLogController","destroyOnUnload","setIntervalAcrossTransitions","sprintf"],(function(a,b,c,d,e,f){__p&&__p();var g={DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error"};a=function(){"use strict";__p&&__p();function a(a){this.$2=a,this.$3=new(b("CircularBuffer"))(200),b("setIntervalAcrossTransitions")(this.$4.bind(this),30*1e3),b("destroyOnUnload")(this.$4.bind(this))}a.get=function(b){a.$1=a.$1||{};a.$1[b]=a.$1[b]||new a(b);return a.$1[b]};var c=a.prototype;c.debug=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[g.DEBUG,a].concat(c))};c.info=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[g.INFO,a].concat(c))};c.warn=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[g.WARN,a].concat(c))};c.error=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[g.ERROR,a].concat(c))};c.$5=function(a,c){for(var d=arguments.length,e=new Array(d>2?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];var g=b("sprintf").apply(void 0,[c].concat(e));this.$3.write({log_time:Date.now(),log:g,severity:a,device_id:b("ChannelClientID").getID()})};c.$4=function(){var a=this.$3.read();if(a.length>0){var c={log_time:[],log:[],severity:[],device_id:[]};a.forEach(function(a){c.log_time.push(a.log_time),c.log.push(a.log),c.severity.push(a.severity),c.device_id.push(a.device_id)});this.$3.clear();a=b("XFantailLogController").getURIBuilder().setString("service",this.$2).getURI();new(b("SimpleFBAuthenticatedXHRRequest"))(a,c).setMethod("POST").setDataSerializer(b("PHPQuerySerializer").serialize).setRequestHeader("Content-Type","application/x-www-form-urlencoded").send()}};return a}();e.exports=a}),null);