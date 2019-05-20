if (self.CavalryLogger) { CavalryLogger.start_js(["1M8WB"]); }

__d("FDSCancelButton.react",["fbt","FDSButton.react","React","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("FDSButton.react"),babelHelpers["extends"]({},this.props,{label:g._("Annuler"),layerAction:"cancel"}))};return c}(b("React").PureComponent);a.defaultProps=b("FDSButton.react").defaultProps;e.exports=b("makeFDSStandardComponent")("FDSCancelButton",a)}),null);
__d("getSUIDropdownSelectorOptionGroupUniform.fds",["ix","cssVar","React","SUIGlyphIcon.react","asset","createBUITypeStyle"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){return{activeBackgroundColor:"#DADDE1",activeColor:"#1C1E21",collapsedIcon:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("496752")}),color:"#1C1E21",expandedIcon:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("504839")}),highlightedBackgroundColor:"#F5F6F7",highlightedColor:"#1C1E21",typeStyle:b("createBUITypeStyle")({color:"#1C1E21",fontSize:"12px",fontWeight:"bold"})}}e.exports=a}),null);
__d("SUIDropdownSelectorOptionGroupUniform.fds",["getSUIDropdownSelectorOptionGroupUniform.fds"],(function(a,b,c,d,e,f){"use strict";e.exports=b("getSUIDropdownSelectorOptionGroupUniform.fds")()}),null);
__d("FDSDropdownSelectorOptionGroup.react",["React","SUIDropdownSelectorOptionGroupUniform.fds","SUISelectorOptionGroup.react","emptyFunction","makeFDSStandardComponent","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("makeSUIFDSPrivateTheme")("FDSDropdownSelectorOptionGroup",{SUISelectorOptionGroup:b("SUIDropdownSelectorOptionGroupUniform.fds")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("SUISelectorOptionGroup.react"),{canSelectMultiple:this.props.canSelectMultiple,"data-testid":this.props["data-testid"],isCollapsible:this.props.isCollapsible,isExpandedInitially:this.props.isExpandedInitially,label:this.props.label,onKeyDown:this.props.onKeyDown,onSelect:this.props.onSelect,onSubItemSelect:this.props.onSubItemSelect,selected:this.props.selected,setupFocusRef:this.props.setupFocusRef,theme:g},this.props.children)};return c}(b("React").PureComponent);a.defaultProps={canSelectMultiple:!1,isCollapsible:!0,isExpandedInitially:!1,setupFocusRef:b("emptyFunction")};e.exports=b("makeFDSStandardComponent")("FDSDropdownSelectorOptionGroup",a)}),null);
__d("getSUIDropdownSelectorUniform.fds",["cssVar"],(function(a,b,c,d,e,f,g){"use strict";function a(){return{backgroundColor:"#FFFFFF",borderColor:"#DADDE1",boxShadow:"0 0 4px 0 rgba(0, 0, 0, 0.2)"}}e.exports=a}),null);
__d("FDSDropdownSelector.react",["FDSDropdownButton.react","FDSDropdownSelectorOptionGroup.react","FDSPrivateThemeContext.react","React","SUIErrorComponentUtil","SUISelector.react","SUISelectorButton.react","getSUIButtonUniform.fds","getSUIDropdownButtonUniform.fds","getSUIDropdownSelectorUniform.fds","getSUIErrorUniform.fds","makeFDSStandardComponent","makeSUIThemeGetter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("makeSUIThemeGetter")({SUISelector:b("getSUIDropdownSelectorUniform.fds"),SUIButton:b("getSUIButtonUniform.fds"),SUIError:b("getSUIErrorUniform.fds"),SUISelectorButton:b("getSUIDropdownButtonUniform.fds")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=g(this.context);return b("React").createElement(b("SUISelector.react"),{button:this.props.button?b("React").cloneElement(this.props.button,{icon:this.props.buttonIcon,isDisabled:this.props.isDisabled,size:this.props.buttonSize,use:this.props.buttonUse}):b("React").createElement(b("SUISelectorButton.react"),{borderedSides:this.props.buttonBorderedSides,disabled:this.props.isDisabled,height:h(this.props.buttonSize),icon:this.props.buttonIcon,roundedCorners:this.props.buttonRoundedCorners,textAlign:this.props.buttonTextAlign,use:this.props.buttonUse}),canCollapseGroups:this.props.canCollapseGroups,canSelectMultiple:!1,children:this.props.children,contextualLayerBehaviors:this.props.contextualLayerBehaviors,"data-menu-testid":this.props["data-menu-testid"],"data-testid":this.props["data-testid"],disabled:this.props.isDisabled,dropdownWidth:this.props.dropdownWidth,errorMessage:this.props.errorMessage,errorTooltipPosition:this.props.errorTooltipPosition,id:this.props.id,isSuppressed:this.props.isSuppressed,label:this.props.label,labelledBy:this.props.labelledBy,margin:this.props.margin,maxHeight:this.props.maxHeight,maxWidth:this.props.maxWidth,menuAlignment:this.props.menuAlignment,menuPosition:this.props.menuPosition,name:this.props.name,onChange:this.props.onChange,onMouseEntersMenu:this.props.onMouseEntersMenu,onMouseLeavesMenu:this.props.onMouseLeavesMenu,onOpen:this.props.onOpen,onSelectorButtonClick:this.props.onSelectorButtonClick,optionGroupComponentType:b("FDSDropdownSelectorOptionGroup.react"),placeholder:this.props.placeholder,shouldHideOnBlur:this.props.shouldHideOnBlur,shouldHideOnMouseLeave:this.props.shouldHideOnMouseLeave,shouldOpenAutomatically:this.props.shouldOpenAutomatically,style:this.props.style,theme:a,tooltip:this.props.tooltip,value:this.props.value,warningMessage:this.props.warningMessage,width:this.props.width},this.props.children)};return c}(b("React").PureComponent);a.defaultProps=babelHelpers["extends"]({},b("SUIErrorComponentUtil").defaultProps,{buttonSize:"medium",buttonTextAlign:"left",buttonUse:"default",canCollapseGroups:!0,contextualLayerBehaviors:{},isDisabled:!1,dropdownWidth:"auto",isSuppressed:!1,maxHeight:250,menuAlignment:"left",menuPosition:"below",shouldHideOnMouseLeave:!1,shouldHideOnBlur:!0,width:"auto"});a.contextType=b("FDSPrivateThemeContext.react");function h(a){if(a==="small")return"short";return a==="large"?"tall":"normal"}e.exports=b("makeFDSStandardComponent")("FDSDropdownSelector",a)}),null);
__d("getSUIDropdownSelectorOptionUniform.fds",["ix","cssVar","React","SUIGlyphIcon.react","asset","createBUITypeStyle"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){return{activeBackgroundColor:"#DADDE1",activeColor:"#1C1E21",color:"#1C1E21",descriptionColor:"#606770",descriptionSelectedColor:"#606770",disabledBackgroundColor:"#F5F6F7",disabledColor:"#606770",highlightedBackgroundColor:"#F5F6F7",highlightedColor:"#1C1E21",iconMargin:{left:"0",right:"8px"},padding:{bottom:"6px",left:"32px",right:"24px",top:"6px"},paddingWhenNoValue:{bottom:"6px",left:"12px",right:"24px",top:"6px"},selectedBackgroundColor:"#ECF3FF",selectedColor:"#1C1E21",selectedIcon:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("495838"),style:{position:"relative",top:-1}}),selectedIconMarginRight:"8px",selectedTypeStyle:b("createBUITypeStyle")({color:"#1C1E21",fontSize:"12px",fontWeight:"bold"}),typeStyle:b("createBUITypeStyle")({color:"#1C1E21",fontSize:"12px",fontWeight:"normal"})}}e.exports=a}),null);
__d("SUIDropdownSelectorOptionUniform.fds",["getSUIDropdownSelectorOptionUniform.fds"],(function(a,b,c,d,e,f){"use strict";e.exports=b("getSUIDropdownSelectorOptionUniform.fds")()}),null);
__d("FDSDropdownSelectorOption.react",["React","SUIDropdownSelectorOptionUniform.fds","SUIHelpMessageUniform.business","SUISelectorOption.react","SUITooltipUniform.business","makeFDSStandardComponent","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("makeSUIFDSPrivateTheme")("FDSDropdownSelectorOption",{SUISelectorOption:b("SUIDropdownSelectorOptionUniform.fds"),SUIHelpMessage:b("SUIHelpMessageUniform.business"),SUITooltip:b("SUITooltipUniform.business")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("SUISelectorOption.react"),{canSelectMultiple:this.props.canSelectMultiple,"data-testid":this.props["data-testid"],description:this.props.description,disabled:this.props.isDisabled,hasSelectedValue:this.props.hasSelectedValue,icon:this.props.icon,onKeyDown:this.props.onKeyDown,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,onSelect:this.props.onSelect,role:this.props.role,selected:this.props.selected,setupFocusRef:this.props.setupFocusRef,theme:g,tooltip:this.props.tooltip,tooltipPosition:this.props.tooltipPosition,value:this.props.value},this.props.children)};return c}(b("React").PureComponent);a.defaultProps={canSelectMultiple:!1,isDisabled:!1,hasSelectedValue:!1,role:"menuitem",selected:!1,tooltipPosition:"above"};e.exports=b("makeFDSStandardComponent")("FDSDropdownSelectorOption",a)}),null);
__d("getSUITabGroupUniform.fds",["ix","cssVar","FDSPrivateThemeAtomsType","Image.react","React","asset"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){var c=a.tab;a=a.id===b("FDSPrivateThemeAtomsType").FDS_GEODESIC;a=a?{dividerColor:"rgba(0, 0, 0, 0.15)",dividerHorzMargin:4,dividerSize:12}:null;var d=c.subItem.padding;return babelHelpers["extends"]({},a,{activeIndicatorColor:c.active.background,chevron:b("React").createElement(b("Image.react"),{src:g("481883")}),subItem:{selectedBackgroundColor:c.subItem.active.backgroundColor,selectedColor:c.subItem.active.color,highlightedBackgroundColor:c.subItem.hover.backgroundColor,highlightedColor:c.subItem.hover.color,padding:{bottom:d+"px",left:d*2+"px",right:d*3+"px",top:d+"px"}}})}e.exports=a}),null);
__d("getSUITabItemUniform.fds",["cssVar"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.tab;a=a.type;return{activeBorderBottomColor:b.active.background,activeTypeStyle:{color:b.active.color,fontFamily:a.fontFamily,fontSize:"14px",fontWeight:"bold",letterSpacing:a.letterSpacing,lineHeight:"18px"},disabledColor:"#BEC3C9",height:b.item.height,hoverBackgroundColor:b.item.hover,iconMargin:8,subtextTypeStyle:{color:"#606770",fontFamily:a.fontFamily,fontSize:"12px",fontWeight:"normal",letterSpacing:a.letterSpacing,lineHeight:"16px"},typeStyle:{color:b.item.color,fontFamily:a.fontFamily,fontSize:"14px",letterSpacing:a.letterSpacing,lineHeight:"18px"}}}e.exports=a}),null);
__d("FDSTabGroup.react",["ix","cx","FDSPrivateThemeAtomsType","FDSPrivateThemeContext.react","Image.react","React","SUITabGroup.react","asset","getSUIDropdownSelectorOptionUniform.fds","getSUIDropdownSelectorUniform.fds","getSUIPopoverUniform.fds","getSUITabGroupUniform.fds","getSUITabItemUniform.fds","getSUITooltipUniform.fds","makeFDSStandardComponent","makeSUIThemeGetter"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("makeSUIThemeGetter")({SUIPopover:b("getSUIPopoverUniform.fds"),SUISelector:b("getSUIDropdownSelectorUniform.fds"),SUISelectorOption:b("getSUIDropdownSelectorOptionUniform.fds"),SUITabGroup:b("getSUITabGroupUniform.fds"),SUITabItem:b("getSUITabItemUniform.fds"),SUITooltip:b("getSUITooltipUniform.fds")});a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(){return this.context.id===b("FDSPrivateThemeAtomsType").FDS_GEODESIC};d.$2=function(){return i(this.context)};d.render=function(){var a=this.props,c=this.$1(),d=c?"dense":a.density,e=this.$2(),f;c&&(f=b("React").createElement(b("React").Fragment,null,b("React").createElement("span",{className:"_7zah"}),b("React").createElement("span",{className:"_7zai"},"More",b("React").createElement(b("Image.react"),{className:"_7zaj",src:g("481882")}))));return b("React").createElement(b("SUITabGroup.react"),{density:d,moreLabel:f,onChange:a.onChange,onTabClick:a.onTabClick,tabs:a.tabs,theme:e,value:a.value})};return c}(b("React").PureComponent);a.defaultProps={density:"sparse"};a.contextType=b("FDSPrivateThemeContext.react");e.exports=b("makeFDSStandardComponent")("FDSTabGroup",a)}),null);
__d("XUIOverlayButton.react",["cx","AbstractButton.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a="_51tl selected";return b("React").createElement(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:b("joinClasses")(this.props.className,a)}))};return c}(b("React").Component);e.exports=a}),null);
__d("SUITextArea.react",["cx","AbstractTextField.react","React","SUIBorderUtils","SUIComponent","SUIErrorComponentUtil","SUIInternalDisplay","SUIPlaceholderStyle","SUITheme","TextAreaControl","cancelAnimationFrame","debounce","gkx","joinClasses","requestAnimationFrame","withSUITheme"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h="_i_l";function i(a){return h+"_"+a.id}c=b("AbstractTextField.react").propTypes;d=c.useLabel;f=babelHelpers.objectWithoutPropertiesLoose(c,["useLabel"]);void d;g=b("gkx")("678820")?b("React").Component:b("SUIComponent");c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={isFocused:!1,hasScrollbar:!1},d.$SUITextArea4=function(a){__p&&__p();if(d.$SUITextArea2!==a){d.$SUITextArea2=a;if(d.$SUITextArea2){a=new(b("TextAreaControl"))(d.$SUITextArea2);a.setAutogrow(d.props.shouldAutoGrow);a.onupdate();d.$SUITextArea1=a}else d.$SUITextArea1=null}},d.$SUITextArea5=function(){d.$SUITextArea1&&d.$SUITextArea1.onupdate()},d.$SUITextArea11=function(a){d.setState({isFocused:!1}),d.props.onBlur&&d.props.onBlur(a)},d.$SUITextArea12=function(a){d.$SUITextArea13();a=a.target.value;d.props.onChange&&d.props.onChange(a)},d.$SUITextArea14=function(a){d.setState({isFocused:!0}),d.props.onFocus&&d.props.onFocus(a)},d.$SUITextArea13=b("debounce")(function(){d.$SUITextArea7()},200),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$SUITextArea6=function(){b("cancelAnimationFrame")(this.$SUITextArea3),this.$SUITextArea3=b("requestAnimationFrame")(this.$SUITextArea5)};d.componentDidMount=function(){var a=b("SUITheme").get(this);b("SUIPlaceholderStyle").ensureInjectForTheme(a,h,a.SUITextArea.placeholderColor,a.SUITextArea.placeholderColorFocused);this.$SUITextArea7()};d.componentDidUpdate=function(){this.$SUITextArea6()};d.componentWillUnmount=function(){b("cancelAnimationFrame")(this.$SUITextArea3),this.$SUITextArea3=null,this.$SUITextArea1=null};d.$SUITextArea8=function(){return b("SUIErrorComponentUtil").getErrorLevel(this.props)!=="none"?b("SUIErrorComponentUtil").getErrorBorderColor(this.props,b("SUITheme").get(this)):null};d.$SUITextArea9=function(){return this.$SUITextArea8()?b("SUIErrorComponentUtil").getErrorIcon(this.props,b("SUITheme").get(this)):this.props.rightIcon};d.$SUITextArea10=function(){var a=b("SUITheme").get(this).SUITextArea;return this.props.disabled?a.disabled:a.enabled};d.$SUITextArea7=function(){this.$SUITextArea9()&&this.$SUITextArea2&&this.setState({hasScrollbar:this.$SUITextArea2.clientHeight<this.$SUITextArea2.scrollHeight})};d.focusInput=function(){this.$SUITextArea2&&this.$SUITextArea2.focus()};d.moveInputCursorToEnd=function(){this.$SUITextArea2&&this.$SUITextArea2.setSelectionRange(this.$SUITextArea2.value.length,this.$SUITextArea2.value.length)};d.blurInput=function(){this.$SUITextArea2&&this.$SUITextArea2.blur()};d.select=function(){this.$SUITextArea2&&this.$SUITextArea2.select()};d.render=function(){__p&&__p();var a=this.props,c=a.className,d=a.display;a.errorMessage;a.errorTooltipPosition;var e=a.leftIcon,f=a.margin;a.onChange;var g=a.roundedCorners,h=a.rows,j=a.style;a.warningMessage;var k=a.width,l=a.disabled;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","display","errorMessage","errorTooltipPosition","leftIcon","margin","onChange","roundedCorners","rows","style","warningMessage","width","disabled"]);var m=b("SUITheme").get(this),n=m.SUITextArea;g=b("SUIBorderUtils").getBorderRadiusStyles(g,n.borderRadius);var o=n.padding!=null?{padding:n.padding}:{},p=this.$SUITextArea10(),q=this.$SUITextArea9(),r=!l&&this.state.isFocused?n.focusedBorderColor:null;r=r||b("SUIErrorComponentUtil").getErrorBorderColor(this.props,m)||p.borderColor;return b("React").createElement("label",{className:b("joinClasses")("_i_l"+(e?" _i_n":"")+(!!q&&this.state.hasScrollbar?" _6anw":"")+(!!q&&!this.state.hasScrollbar?" _i_o":""),b("SUIInternalDisplay").get(d),c,f),style:babelHelpers["extends"]({width:k},j)},b("React").createElement(b("AbstractTextField.react"),babelHelpers["extends"]({},a,{disabled:l,onBlur:this.$SUITextArea11,onChange:this.$SUITextArea12,onFocus:this.$SUITextArea14,style:babelHelpers["extends"]({},g,o,p,n.typeStyle,{borderColor:r,color:p.color,lineHeight:"16px",maxHeight:this.props.maxHeight?this.props.maxHeight:"none",resize:this.props.resize}),useLabel:!1}),b("React").createElement("textarea",{className:b("joinClasses")("_i_m",i(b("SUITheme").get(this))),ref:this.$SUITextArea4,rows:h,tabIndex:this.props.tabIndex})),e?b("React").cloneElement(e,{className:b("joinClasses")("_i_p",e.props.className)}):null,q?b("React").cloneElement(q,babelHelpers["extends"]({},b("SUIErrorComponentUtil").getErrorTooltipProps(this.props),{className:b("joinClasses")("_i_q"+(this.state.hasScrollbar?" _6anx":""),q.props.className)})):null)};return c}(g);c.propTypes=babelHelpers["extends"]({},f,b("SUIErrorComponentUtil").propTypes,{display:b("SUIInternalDisplay").propType.isRequired,leftIcon:a.element,margin:a.string,maxHeight:a.number,onClick:a.func,rightIcon:a.element,roundedCorners:b("SUIBorderUtils").RoundedCornersPropType.isRequired,shouldAutoGrow:a.bool,theme:a.instanceOf(b("SUITheme"))});c.defaultProps=babelHelpers["extends"]({},b("AbstractTextField.react").defaultProps,b("SUIErrorComponentUtil").defaultProps,{display:"inline",resize:"vertical",roundedCorners:b("SUIBorderUtils").ALL_CORNERS,shouldAutoGrow:!1});e.exports=b("withSUITheme")(c)}),null);
__d("SingleSelectorBase",["csx","cx","invariant","Alignment","ArbiterMixin","BehaviorsMixin","Button","CSS","DOM","DOMQuery","Event","Layer","LayerBounds","Locale","ParameterizedPopover","PopoverMenu","Rect","Scroll","SelectableMenuUtils","Style","getOverlayZIndex","mixin","throttle"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=b("Alignment").Anchor,k=b("Locale").isRTL()?j.RIGHT:j.LEFT,l={},m=16;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f){__p&&__p();var g;g=a.call(this)||this;g.$SingleSelectorBase1=c;g.$SingleSelectorBase2=null;g.$SingleSelectorBase3=l;g.$SingleSelectorBase4=b("DOM").create("div",{});g.$SingleSelectorBase5=new(b("Layer"))({classNames:["_5xew"]},g.$SingleSelectorBase4);g.$SingleSelectorBase6=new(b("ParameterizedPopover"))(c.parentNode,c,[],babelHelpers["extends"]({},e,{layer:g.$SingleSelectorBase5}));g.$SingleSelectorBase6.subscribe("show",g.$SingleSelectorBase7.bind(babelHelpers.assertThisInitialized(g)));g.$SingleSelectorBase6.subscribe("hide",g.$SingleSelectorBase8.bind(babelHelpers.assertThisInitialized(g)));g.$SingleSelectorBase9=new(b("PopoverMenu"))(g.$SingleSelectorBase6,c,d,[]);g.setMenu(d);f&&f.behaviors&&g.enableBehaviors(f.behaviors);return g}var d=c.prototype;d.$SingleSelectorBase7=function(){__p&&__p();this.$SingleSelectorBase10();this.$SingleSelectorBase11();b("CSS").conditionClass(this.$SingleSelectorBase5.getRoot(),"_5xex",this.$SingleSelectorBase12());b("Style").set(this.$SingleSelectorBase5.getRoot(),"min-width",this.$SingleSelectorBase1.offsetWidth+m+"px");var a=b("DOM").scry(this.$SingleSelectorBase4,"div.uiScrollableAreaWrap")[0];if(a){var c=b("Alignment").measure(new j(this.$SingleSelectorBase13(),k,j.MIDDLE),new j(this.$SingleSelectorBase2.getRoot(),k,j.MIDDLE));b("Scroll").setTop(a,b("Scroll").getTop(a)-c.y)}this.align();this.getMenu().focusAnItem();this.$SingleSelectorBase14||(this.$SingleSelectorBase14=b("Event").listen(window,"resize",b("throttle")(this.align.bind(this))));this.inform("show")};d.$SingleSelectorBase8=function(){this.$SingleSelectorBase14&&(this.$SingleSelectorBase14.remove(),this.$SingleSelectorBase14=null),this.inform("hide")};d.$SingleSelectorBase15=function(a,b){this.$SingleSelectorBase16=null,this.$SingleSelectorBase17||this.inform("change",b)};d.isShown=function(){return this.$SingleSelectorBase6.isShown()};d.setValue=function(a){this.isShown()?this.$SingleSelectorBase18(a,!1):(this.$SingleSelectorBase3=a,this.$SingleSelectorBase19=!1)};d.setValueWithoutChange=function(a){this.isShown()?this.$SingleSelectorBase18(a,!0):(this.$SingleSelectorBase3=a,this.$SingleSelectorBase19=!0)};d.$SingleSelectorBase11=function(){this.$SingleSelectorBase3!==l&&(this.$SingleSelectorBase18(this.$SingleSelectorBase3,this.$SingleSelectorBase19),this.$SingleSelectorBase3=l)};d.$SingleSelectorBase18=function(a,b){this.$SingleSelectorBase17=b,this.$SingleSelectorBase2.setValue(a),this.$SingleSelectorBase17=null};d.getValue=function(){return this.getSelectedItem().getValue()};d.getLayer=function(){return this.$SingleSelectorBase5};d.getButton=function(){return this.$SingleSelectorBase1};d.setMenu=function(a){this.isShown()?this.$SingleSelectorBase20(a):this.$SingleSelectorBase21=a};d.$SingleSelectorBase10=function(){this.$SingleSelectorBase21&&(this.$SingleSelectorBase20(this.$SingleSelectorBase21),this.$SingleSelectorBase21=null)};d.$SingleSelectorBase20=function(a){a!==this.$SingleSelectorBase2&&(this.$SingleSelectorBase2=a,this.$SingleSelectorBase22&&this.$SingleSelectorBase22.unsubscribe(),this.$SingleSelectorBase22=this.$SingleSelectorBase2.subscribe("change",this.$SingleSelectorBase15.bind(this)),b("DOM").setContent(this.$SingleSelectorBase4,a.getRoot()),this.$SingleSelectorBase9.setMenu(a),this.$SingleSelectorBase16=null)};d.getMenu=function(){return this.$SingleSelectorBase21||this.$SingleSelectorBase2};d.enable=function(){b("Button").setEnabled(this.$SingleSelectorBase1,!0),this.$SingleSelectorBase6.enable()};d.disable=function(){b("Button").setEnabled(this.$SingleSelectorBase1,!1),this.$SingleSelectorBase6.disable()};d.$SingleSelectorBase12=function(){return b("Style").isFixed(this.$SingleSelectorBase1)&&!b("Style").isFixed(this.$SingleSelectorBase5.getRoot().parentNode)};d.align=function(){this.$SingleSelectorBase16||(this.$SingleSelectorBase16=this.getAlignment());this.$SingleSelectorBase16.align();var a=b("Rect").getElementBounds(this.$SingleSelectorBase2.getRoot()),c=b("LayerBounds").getViewportRectForContext(this.$SingleSelectorBase1),d=a.t-c.t,e=c.b-a.b,f=a.l-c.l;c=c.r-a.r;a=this.$SingleSelectorBase5.getRoot();d<10?n(a,"top",-d+10):e<10&&n(a,"top",e-10);f<10?n(a,"left",-f+10):c<10&&n(a,"left",c-10);d=b("getOverlayZIndex")(this.$SingleSelectorBase1,this.$SingleSelectorBase5.getInsertParent());b("Style").set(this.$SingleSelectorBase5.getRoot(),"z-index",d>200?d:"")};d.getAlignment=function(){return new(b("Alignment"))(new j(this.$SingleSelectorBase5.getRoot(),j.TOP,j.LEFT),new j(this.$SingleSelectorBase13(),k,j.MIDDLE),new j(this.$SingleSelectorBase23(),k,j.MIDDLE))};d.$SingleSelectorBase23=function(){return b("DOMQuery").find(this.$SingleSelectorBase1,"._55pe")};d.getSelectedItem=function(){var a=null;this.$SingleSelectorBase3!==l?this.getMenu().forEachItem(function(b){b.getValue()===this.$SingleSelectorBase3&&(a===null||i(0,4204),a=b)}.bind(this)):this.getMenu().forEachItem(function(c){b("SelectableMenuUtils").isSelected(c)&&(a===null||i(0,4204),a=c)});a!==null||i(0,4205);return a};d.$SingleSelectorBase13=function(){return b("DOMQuery").find(this.getSelectedItem().getRoot(),"._54nh")};d.destroy=function(){this.$SingleSelectorBase2&&this.$SingleSelectorBase2.destroy(),this.$SingleSelectorBase9.destroy(),this.$SingleSelectorBase6.destroy(),this.$SingleSelectorBase5.destroy()};return c}(b("mixin")(b("ArbiterMixin"),b("BehaviorsMixin")));function n(a,c,d){b("Style").set(a,c,b("Style").getFloat(a,c)+d+"px")}e.exports=a}),null);
__d("AudioContextSingleton",["FBLogger"],(function(a,b,c,d,e,f){var g=window.AudioContext||window.webkitAudioContext||window.mozAudioContext,h=null;a={get:function(){h==null&&(h=new g());h.state==="closed"&&(b("FBLogger")("project").warn("AudioContext Singleton has been closed"),h=new g());return h}};e.exports=a}),null);
__d("AbstractRelaySearchSource",["AbstractAsyncSearchSource","debounceCore","RelayModern"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("RelayModern").fetchQuery;function h(a){return function(b,c,d,e){c=c.gen(b.value,b);b=c.query;c=c.variables;return g(a,b,c).then(d,e)}}a=function(a){babelHelpers.inheritsLoose(c,a);function c(c,d,e){return a.call(this,d,b("debounceCore")(h(c),225),e)||this}return c}(b("AbstractAsyncSearchSource"));e.exports=a}),null);
__d("XPagesComposerDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/composer/dialog/",{entry_point:{type:"String",required:!0},open_composer:{type:"Enum",enumType:1},preview_url:{type:"String"},extra_info:{type:"StringToStringMap"},composer_prefill:{type:"String"},composer_igphoto_id:{type:"String"},attach_support_now_cta:{type:"Bool",defaultValue:!1},archived_story_card_id:{type:"FBID"},__asyncDialog:{type:"Int"}})}),null);