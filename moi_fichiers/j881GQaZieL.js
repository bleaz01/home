if (self.CavalryLogger) { CavalryLogger.start_js(["tTRQ\/"]); }

__d("ReactComposerFundraiserTaggerComponent.react",["cx","fbt","Grid.react","React","ComposerCharityTypeahead.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("Grid.react").GridItem;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("Grid.react"),{className:"_5esl",cols:2},b("React").createElement(i,{className:"_5esm",key:"label"},h._("Pour")),b("React").createElement(i,{className:"_5esw",key:"tokenizer"},b("React").createElement(b("ComposerCharityTypeahead.react"),{onSelect:this.props.onSelect,focusOnMount:!0})))};return c}(b("React").Component);e.exports=a}),null);
__d("ReactComposerFundraiserTaggerContainer.react",["React","ReactComposerFundraiserAttachmentActions","ReactComposerFundraiserTaggerComponent.react","ReactComposerLoggingName","ReactComposerTaggerActions","ReactComposerTaggerContainerStateMixin","ReactComposerTaggerHideOnEscapeKeyPress.react","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";a=b("React").createClass({displayName:"ReactComposerFundraiserTaggerContainer",mixins:[b("ReactComposerTaggerContainerStateMixin")()],statics:{taggerID:b("ReactComposerTaggerType").FUNDRAISER},_onSelect:function(a){a&&(a.charityID=a.getUniqueID()),b("ReactComposerTaggerActions").setTaggerData(this.context.composerID,b("ReactComposerLoggingName").FUNDRAISER_SPROUT,b("ReactComposerTaggerType").FUNDRAISER,a),b("ReactComposerTaggerActions").deselectCurrentTagger(this.context.composerID,b("ReactComposerLoggingName").FUNDRAISER_SPROUT),b("ReactComposerFundraiserAttachmentActions").fetchFundraiserAttachment(this.context.composerID,a.charityID,this.context.actorID)},render:function(){return!this.state.isSelected?null:b("React").createElement("div",{"data-testid":"fundraiser-tagger-component"},b("React").createElement(b("ReactComposerTaggerHideOnEscapeKeyPress.react"),null,b("React").createElement(b("ReactComposerFundraiserTaggerComponent.react"),{onSelect:this._onSelect})))}});e.exports=a}),null);