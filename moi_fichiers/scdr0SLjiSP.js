if (self.CavalryLogger) { CavalryLogger.start_js(["uISKu"]); }

__d("TimelineJumperCursorConfig",[],(function(a,b,c,d,e,f){e.exports={BOUNDARY_PREFIX:"boundary",CURSOR_PREFIX:"jumper",CURSOR_DELIMITER:"_"}}),null);
__d("OptimisticPostMetadata.react",["cx","BackgroundImage.react","Link.react","React","XUIText.react","getDOMImageSize"],(function(a,b,c,d,e,f,g){__p&&__p();var h="/images/video/play_circle_80dp.png",i=80,j=470,k=263,l=472;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={height:k},c.onGetSize=function(a,b,d){d=a<b?j:k;c.setState({height:d})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){b("getDOMImageSize")(this.props.image,this.onGetSize)};d.render=function(){var a=this.props.image?b("React").createElement(b("BackgroundImage.react"),{src:this.props.image,backgroundSize:"contain",width:l,height:this.state.height}):b("React").createElement("div",{className:"_6r9x",style:{height:this.state.height}},b("React").createElement(b("BackgroundImage.react"),{src:h,backgroundSize:"contain",width:i,height:i}));return b("React").createElement("div",null,b("React").createElement("div",{className:"_1gi0"},b("React").createElement(b("XUIText.react"),{size:"header4",weight:"bold",display:"block"},b("React").createElement(b("Link.react"),null,this.props.title)),b("React").createElement(b("XUIText.react"),{size:"header4",weight:"normal",display:"block"},this.props.description)),b("React").createElement("div",{className:"_2bc-"},a))};return c}(b("React").Component);e.exports=a}),null);
__d("OptimisticPostMetadataWithoutThumbnail.react",["cx","EventListener","OptimisticPostMetadata.react","React","ReactDOM","generateVideoThumbnails","promiseDone"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={thumbnail:""},d.$1=null,d.generateVideoThumbnails=function(){var a=b("ReactDOM").findDOMNode(d.refs.videoPlayer);b("promiseDone")(b("generateVideoThumbnails")(a,200,200,1),function(a){d.setState({thumbnail:a.thumbnails[0].getURL()})})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=b("ReactDOM").findDOMNode(this.refs.videoPlayer);this.$1=b("EventListener").listen(a,"loadedmetadata",this.generateVideoThumbnails)};d.componentWillUnmount=function(){this.$1&&(this.$1.remove(),this.$1=null)};d.render=function(){return b("React").createElement("div",null,b("React").createElement(b("OptimisticPostMetadata.react"),{title:this.props.title,description:this.props.description,image:this.state.thumbnail}),b("React").createElement("video",{key:"videoPlayer",ref:"videoPlayer",className:"_2mpk",src:this.props.videoFileUrl}))};return c}(b("React").Component);e.exports=a}),null);
__d("OptimisticPostUFISection.react",["ix","cx","fbt","Image.react","React","SUIBusinessThemeContainer.react","SUIText.react","XUICardSection.react","XUIPopoverButton.react","asset"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=null;this.props.isPagePost&&(a=b("React").createElement("div",{className:"_2qa2"},b("React").createElement(b("XUIPopoverButton.react"),{haschevron:!0,image:b("React").createElement(b("Image.react"),{width:16,height:16,src:this.props.profilePicture}),ref:"open-menu-button",suppressed:!0,type:"button"})));return b("React").createElement(b("SUIBusinessThemeContainer.react"),null,b("React").createElement(b("XUICardSection.react"),null,b("React").createElement("div",{className:"_2qa3"},b("React").createElement("div",{className:"_2qa4"},b("React").createElement("div",{className:"_2qa5"},b("React").createElement(b("Image.react"),{className:"_2qa7",src:g("529238")}),b("React").createElement(b("SUIText.react"),{color:"secondary",size:"body2",weight:"bold"},i._("J\u2019aime"))),b("React").createElement("div",{className:"_2qa5"},b("React").createElement(b("Image.react"),{className:"_2qa7",src:g("510900")}),b("React").createElement(b("SUIText.react"),{color:"secondary",size:"body2",weight:"bold"},i._("Commenter"))),b("React").createElement("div",{className:"_2qa5"},b("React").createElement(b("Image.react"),{className:"_2qa7",src:g("508130")}),b("React").createElement(b("SUIText.react"),{color:"secondary",size:"body2",weight:"bold"},i._("Partager")))),a)))};return c}(b("React").Component);e.exports=a}),null);
__d("PremiereLivingRoomStoryPreview.react",["cx","fbt","LeftRight.react","LivingRoomFeedAttachmentBadgeRow.react","LivingRoomFeedAttachmentFooterNoContentItem.react","LivingRoomNoVideoPreview.react","React","ScheduledLiveStoryVideoPreviewFooter.react","StoryProfile.react","XUICard.react","XUICardSection.react","XUIText.react","suiMargin"],(function(a,b,c,d,e,f,g,h){function a(a){return b("React").createElement(b("XUICard.react"),null,b("React").createElement(b("XUICardSection.react"),null,b("React").createElement("div",{className:"_3-8j"},b("React").createElement(b("StoryProfile.react"),{profilePicture:"/images/silhouettes/person_50x50.png",useRoundPicture:!0,username:a.creatorName,uploadTime:h._("\u00c0 l\u2019instant"),description:a.plannedStartTime>0?h._("pr\u00e9voit de diffuser une premi\u00e8re"):h._("organise une nouvelle sortie vid\u00e9o")})),b("React").createElement(b("XUIText.react"),{className:"_as3",display:"block",size:"header4"},a.description)),b("React").createElement("div",{className:"_15qs"},b("React").createElement(b("LivingRoomNoVideoPreview.react"),null),b("React").createElement(b("LivingRoomFeedAttachmentBadgeRow.react"),{livingRoomID:null,premiereLivingRoomBadgeText:a.plannedStartTime>0?h._("PREMI\u00c8RE"):h._("NEW RELEASE"),presentUserCount:0}),a.plannedStartTime>0?b("React").createElement("div",{className:"_7qc-"},b("React").createElement(b("ScheduledLiveStoryVideoPreviewFooter.react"),{isPremiere:!0,plannedStartTime:a.plannedStartTime})):b("React").createElement("div",{className:"_2lu6"},b("React").createElement(b("LeftRight.react"),null,b("React").createElement(b("LivingRoomFeedAttachmentFooterNoContentItem.react"),null)))))}e.exports=a}),null);
__d("OptimisticVideoPost.react",["fbt","cx","ActorURI","AsyncRequest","Layout.react","LeftRight.react","OptimisticPostMetadata.react","OptimisticPostMetadataWithoutThumbnail.react","OptimisticPostUFISection.react","PremiereLivingRoomStoryPreview.react","PrivacyConst","ProgressBar.react","PublishingToolsSource","React","ScheduledLiveStoryPreview.react","StoryProfile.react","VideoEditSource","VideoLibraryButton.react","VideoLibrarySource","VideoThumbnailConfig","XUIAmbientNUX.react","XUIButton.react","XUICard.react","XUICardSection.react","XVideoEditController","XVideoEditDialogController"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=b("Layout.react").Column,j=b("Layout.react").FillColumn;a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={shouldShowVideoLibraryNux:d.props.shouldShowVideoLibraryNux,videoLibraryNuxImpression:0},d.getThumbnail=function(){return d.props.thumbnail?d.props.thumbnail:b("VideoThumbnailConfig").defaultThumbnailURL},d.onEditClick=function(){var a;d.props.shouldShowVideoEditDialog?(a=b("XVideoEditDialogController").getURIBuilder().setInt("video_id",d.props.videoID).setEnum("source",b("VideoEditSource").OPTIMISTIC_VIDEO_POST).getURI(),d.props.targetID&&(a=b("ActorURI").create(a,d.props.targetID)),new(b("AsyncRequest"))(a).send()):(a=b("XVideoEditController").getURIBuilder().setInt("v",d.props.videoID).setEnum("source",b("VideoEditSource").OPTIMISTIC_VIDEO_POST).getURI(),window.open(a,"_blank"))},d.onNuxDismiss=function(){d.setState({shouldShowVideoLibraryNux:!1}),d.props.onVideoLibraryNuxDismiss()},d.renderLayers=function(){return!d.props.shouldShowVideoLibraryNux?null:b("React").createElement(b("XUIAmbientNUX.react"),{contextRef:function(){return d.refs.video_library_button},shown:!0,position:"above",onCloseButtonClick:d.props.onVideoLibraryNuxDismiss,key:"videoLibraryNux"},"Manage your videos, all in one place.")},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){__p&&__p();var a=g._("\u00c0 l\u2019instant"),c;this.props.progress>=100&&this.props.progressCompleteText?c=this.props.progressCompleteText:c=g._("Pr\u00e9paration... {number} \u0025",[g._param("number",this.props.progress)]);var d=null;this.props.shouldShowVideoLibraryButton&&(d=b("React").createElement(b("VideoLibraryButton.react"),{ref:"video_library_button",pageID:this.props.targetID,source:b("VideoLibrarySource").OPTIMISTIC_VIDEO_POST,refSource:b("PublishingToolsSource").OPTIMISTIC_VIDEO_POST}));var e=null;this.props.shouldShowVideoEditButton&&!this.props.isPremiereLivingRoom&&(e=b("React").createElement(b("XUIButton.react"),{className:"_4p26",label:"Edit",size:"small",onClick:this.onEditClick}));c=b("React").createElement(b("XUICardSection.react"),{background:"light-wash"},b("React").createElement("div",{className:"_pro"},b("React").createElement("div",{className:"_2uu3"},b("React").createElement(b("Layout.react"),{className:"_1mg"},b("React").createElement(j,null,b("React").createElement("div",null,b("React").createElement(b("ProgressBar.react"),{className:"_prp",value:this.props.progress,label:c}))),b("React").createElement(i,null,b("React").createElement("div",null,d,e))))));d=this.props.profilePicture||"";e=this.props.username||"";var f=this.props.privacySetting||-1;d=this.props.isPremiere||this.props.isPremiereLivingRoom?null:b("React").createElement(b("StoryProfile.react"),{className:"_4r8g",profilePicture:d,username:e,uploadTime:a,privacySetting:f});a=null;f=(this.props.premiereTimeSeconds||0)*1e3;this.props.isPremiereLivingRoom?a=b("React").createElement(b("PremiereLivingRoomStoryPreview.react"),{creatorName:e,description:this.props.metadataDescription,plannedStartTime:f}):this.props.isPremiere?a=b("React").createElement(b("ScheduledLiveStoryPreview.react"),{description:this.props.metadataDescription||"",isPremiere:!0,plannedStartTime:f,previewTitle:this.props.metadataTitle,targetID:this.props.targetID||""}):a=this.props.thumbnail?b("React").createElement(b("OptimisticPostMetadata.react"),{title:this.props.metadataTitle,description:this.props.metadataDescription,image:this.getThumbnail()}):b("React").createElement(b("OptimisticPostMetadataWithoutThumbnail.react"),{title:this.props.metadataTitle,description:this.props.metadataDescription,videoFileUrl:this.props.videoFileUrl});e=g._("Booster");f=this.props.isPagePost?b("React").createElement("div",{className:"_5c_1"},b("React").createElement(b("LeftRight.react"),null,b("React").createElement("div",null),b("React").createElement(b("XUIButton.react"),{label:e,use:"confirm"}))):null;e=b("React").createElement(b("OptimisticPostUFISection.react"),{profilePicture:this.props.profilePicture,isPagePost:this.props.isPagePost});d=b("React").createElement("div",null,d,a,f,e);a=b("React").createElement("div",{className:"_5c_3"});return b("React").createElement("div",{className:this.props.isPagePost?"_5ctl":""},b("React").createElement(b("XUICard.react"),{className:"_4p28"},c,b("React").createElement("div",{className:"_prq"},d,a)),this.renderLayers())};return c}(b("React").Component);c.propTypes={profilePicture:a.string,username:a.string,privacySetting:a.number,metadataTitle:a.string,metadataDescription:a.string,thumbnail:a.string,videoID:a.string,isPagePost:a.bool,isPremiere:a.bool,isPremiereLivingRoom:a.bool,premiereTimeSeconds:a.number,progress:a.number,progressCompleteText:a.string,shouldShowVideoEditButton:a.bool,shouldShowVideoEditDialog:a.bool,targetID:a.string,videoFileUrl:a.string,shouldShowVideoLibraryNux:a.bool};c.defaultProps={profilePicture:"",username:"",privacySetting:b("PrivacyConst").BaseValue.EVERYONE,metadataTitle:"",metadataDescription:"",thumbnail:"",progress:0,videoID:"",isPagePost:!1,isPremiere:!1,isPremiereLivingRoom:!1,premiereTimeSeconds:0,progressCompleteText:"",shouldShowVideoEditButton:!0,shouldShowVideoEditDialog:!1,videoFileUrl:"",shouldShowVideoLibraryNux:!1};e.exports=c}),null);
__d("OptimisticVideoPostEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({VIDEO_POST_ADDED:"video_post_added",VIDEO_POST_REMOVED:"video_post_removed",POST_REMOVED_WITHOUT_REPLACEMENT:"post_removed_without_replacement"})}),null);
__d("OptimisticVideoPostLogger",["BanzaiLogger"],(function(a,b,c,d,e,f){a={logEvent:function(a,c,d,e,f){b("BanzaiLogger").log("OptimisticVideoPostLoggerConfig",{number_of_posts:d,source:c,event:a,target_id:e,video_id:f})}};e.exports=a}),null);
__d("OptimisticVideoPostSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PAGES_TIMELINE:"pages_timeline",VIDEO_HUB:"video_hub",USERS_TIMELINE:"users_timeline"})}),null);
__d("VideoLibraryNuxAction",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMPRESSION:"impression",DISMISS:"dismiss"})}),null);
__d("VideoLibraryNuxType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({HIGHLIGHTED_VIDEOS_NUX:"highlighted_videos_nux",OPTIMISTIC_POST_NUX:"optimistic_post_nux",VIDEO_HUB_NUX:"video_hub_nux",VIDEO_INSIGHTS_NUX:"video_insights_nux"})}),null);
__d("XVideoCaptionRenderGenerateHeaderAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/videos/captioneditor/pagePosts/",{video_id:{type:"Int"}})}),null);
__d("VideoPostGenerateCaptionHeader",["csx","AsyncRequest","DOM","Parent","XVideoCaptionRenderGenerateHeaderAsyncController"],(function(a,b,c,d,e,f,g){__p&&__p();a={renderHeader:function(a,c){__p&&__p();a=b("Parent").bySelector(a,"#pagelet_timeline_main_column");if(!a)return;a=b("DOM").scry(a,"._5sem")[0];if(a){var d=b("DOM").create("div");b("DOM").prependContent(a,d);a=b("XVideoCaptionRenderGenerateHeaderAsyncController").getURIBuilder().setInt("video_id",c).getURI();new(b("AsyncRequest"))().setMethod("GET").setRelativeTo(d).setURI(a).setReadOnly(!0).setAllowCrossPageTransition(!0).send()}}};e.exports=a}),null);
__d("XProfileVideoRefreshController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/picture/refresh_profile_video/",{video_id:{type:"FBID",required:!0}})}),null);
__d("XVideoLibraryNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/video_library/nux/",{action:{type:"Enum",required:!0,enumType:1},nux_type:{type:"Enum",required:!0,enumType:1}})}),null);
__d("XVideoOptimisticPostingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/optimistic_posting/",{video_id:{type:"Int",required:!0}})}),null);
__d("OptimisticVideoPostList.react",["Arbiter","AsyncRequest","ChannelConstants","FBFeedLocations","OptimisticVideoPost.react","OptimisticVideoPostEvent","OptimisticVideoPostLogger","OptimisticVideoPostSource","OptimisticVideoPostUtils","PagesComposer","ProfileVideoWWWFrontendActionTypedLogger","React","ReactDOM","ReloadPage","Run","TimelineComposer","VideoLibraryNuxAction","VideoLibraryNuxType","VideoPostGenerateCaptionHeader","VideoUploadProgressUtils","XProfileVideoRefreshController","XVideoGenerateStoryController","XVideoLibraryNuxController","XVideoOptimisticPostingController","clearInterval","clearTimeout","setInterval","setTimeout"],(function(a,b,c,d,e,f){__p&&__p();var g=a.URL||a.webkitURL||{},h="video_encode",i=7,j=5e3,k=2,l=1e3,m=30;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$4={},d.state={videoPostsMetadata:{},videoPosts:[],shouldRefreshAfterEncoding:!1,shouldShowVideoEditButton:d.props.shouldShowVideoEditButton,shouldShowVideoLibraryButton:d.props.shouldShowVideoLibraryButton,shouldShowVideoLibraryNux:d.props.shouldShowVideoLibraryNux,videoLibraryNuxImpression:0,videoLibraryNuxImpressionLogged:!1,renderedVideoPosts:[]},d.initializePosts=function(){__p&&__p();var a=[],c={};for(var e=0;e<d.props.data.length;e++){if(!b("OptimisticVideoPostUtils").shouldShowOptimisticPost(d.props.data[e]))break;var f=babelHelpers["extends"]({},d.props.data[e],{shouldRender:!1});f.progress=0;f.progressWithoutFake=0;var g=f.videoID;f.inactivityTimer=d.startInactivityTimer(g);a.push(g);c[g]=f}d.setState({videoPostsMetadata:c,videoPosts:a})},d.getChannelType=function(){return b("ChannelConstants").getArbiterType(h)},d.updateVideoData=function(a){__p&&__p();var c={};c[a.videoID]=babelHelpers["extends"]({},a,{shouldRender:!0,fakeProgressTimer:b("setInterval")(function(){return d.fakeInitialProgress(a.videoID)},3e3),inactivityTimer:d.startInactivityTimer(a.videoID)});c[a.videoID].progress=0;c[a.videoID].progressWithoutFake=0;c=babelHelpers["extends"]({},d.state.videoPostsMetadata,c);var e=[a.videoID].concat(d.state.videoPosts);d.$1=a.refreshTimeout;d.$2=a.originalComposerID;d.$3=a.progressCompleteText;d.setState({shouldRefreshAfterEncoding:!!a.shouldRefreshAfterEncoding,shouldShowVideoEditButton:a.shouldShowVideoEditButton!=null?a.shouldShowVideoEditButton:!0,shouldShowVideoLibraryButton:a.shouldShowVideoLibraryButton!=null?a.shouldShowVideoLibraryButton:d.state.shouldShowVideoLibraryButton,videoPostsMetadata:c,videoPosts:e});d.logEvent(b("OptimisticVideoPostEvent").VIDEO_POST_ADDED,a.videoID)},d.onVideoPostSubmitted=function(a,c){if(!b("OptimisticVideoPostUtils").shouldShowOptimisticPost(c))return;if(!c.isToUserProfile){d.updateVideoData(c);return}a=b("XVideoOptimisticPostingController").getURIBuilder().setInt("video_id",c.videoID).getURI();new(b("AsyncRequest"))().setURI(a).setHandler(function(a){d.updateVideoData(babelHelpers["extends"]({},a.payload,{videoFileUrl:c.videoFileURL}))}).send()},d.checkVideoStatus=function(a){b("OptimisticVideoPostUtils").checkVideoStatus(a,d.onEncodeFinish,d.onEncodeFinish,d.restartInactivityTimer)},d.startInactivityTimer=function(a){return b("setTimeout")(function(){return d.checkVideoStatus(a)},j)},d.restartInactivityTimer=function(a){d.stopInactivityTimer(a);var b=babelHelpers["extends"]({},d.state.videoPostsMetadata),c=babelHelpers["extends"]({},b[a]);c.inactivityTimer=d.startInactivityTimer(a);b[a]=c;d.setState({videoPostsMetadata:b})},d.stopInactivityTimer=function(a){b("clearTimeout")(d.state.videoPostsMetadata[a].inactivityTimer)},d.logEvent=function(a,c){b("OptimisticVideoPostLogger").logEvent(a,d.props.isPagePost?b("OptimisticVideoPostSource").PAGES_TIMELINE:b("OptimisticVideoPostSource").USERS_TIMELINE,d.state.videoPosts.length,d.props.targetID,c)},d.fakeInitialProgress=function(a){__p&&__p();var b=d.state.videoPostsMetadata[a].progress;if(b>i){d.stopFakeInitialProgress(a);return}b=babelHelpers["extends"]({},d.state.videoPostsMetadata);var c=babelHelpers["extends"]({},b[a]);c.progress+=1;b[a]=c;d.setState({videoPostsMetadata:b});d.restartInactivityTimer(a)},d.stopFakeInitialProgress=function(a){if(!d.state.videoPostsMetadata[a].fakeProgressTimer)return;var c=babelHelpers["extends"]({},d.state.videoPostsMetadata);b("clearTimeout")(c[a].fakeProgressTimer);var e=babelHelpers["extends"]({},c[a]);e.fakeProgressTimer=null;c[a]=e;d.setState({videoPostsMetadata:c})},d.onEncodeUpdate=function(a,c){__p&&__p();a=String(c.obj.videoID);if(!d.state.videoPostsMetadata[a])return;var e=babelHelpers["extends"]({},d.state.videoPostsMetadata),f=babelHelpers["extends"]({},e[a]),g={progress:f.progress,progressWithoutFake:f.progressWithoutFake};g=b("VideoUploadProgressUtils").getUpdatedProgress(c,g);g.progress!==-1&&(d.stopFakeInitialProgress(a),f.progress=g.progress,f.shouldRender=!0);f.progressWithoutFake=g.progressWithoutFake;e[a]=f;d.setState({videoPostsMetadata:e});b("VideoUploadProgressUtils").isEncodingFinished(c.obj.stage)?d.onEncodeFinish(a):d.restartInactivityTimer(a)},d.onEncodeFinish=function(a){if(!d.state.videoPostsMetadata[a])return;d.stopInactivityTimer(a);var c=d.props.isPagePost?b("FBFeedLocations").PAGE_TIMELINE:b("FBFeedLocations").TIMELINE,e=b("XVideoGenerateStoryController").getURIBuilder().setInt("video_id",a).setEnum("feed_location",c).getURI();new(b("AsyncRequest"))().setURI(e).setData({video_id:a,feed_location:c}).setHandler(function(b){return d.handleRequest(b,a)}).send()},d.refreshWhenDone=function(a){var c=!0,e=Date.now(),f=b("setInterval")(function(){if(c){c=!1;var g=b("XProfileVideoRefreshController").getURIBuilder().setFBID("video_id",a).getURI();new(b("AsyncRequest"))().setURI(g).setHandler(function(a){c=!0,a.payload.profile_video_is_set?(b("clearInterval")(f),new(b("ProfileVideoWWWFrontendActionTypedLogger"))().setEvent("profile_video_set").setSessionID(d.$2).log(),b("ReloadPage").now()):Date.now()-e>d.$1&&b("clearInterval")(f)}).send()}},l)},d.removeOptimisticPost=function(a){var c=babelHelpers["extends"]({},d.state.videoPostsMetadata);delete c[a];var e=d.state.videoPosts;e=d.removeVideoID(e,a);d.setState({videoPostsMetadata:c,videoPosts:e});d.logEvent(b("OptimisticVideoPostEvent").VIDEO_POST_REMOVED,a)},d.removeVideoID=function(a,b){b=a.indexOf(b);a.splice(b,1);return a},d.onVideoLibraryNuxShown=function(){var a=d.state.videoLibraryNuxImpression+1;d.setState({videoLibraryNuxImpression:a});a>=k&&d.setState({shouldShowVideoLibraryNux:!1})},d.onVideoLibraryNuxDismiss=function(){d.setState({shouldShowVideoLibraryNux:!1});var a=b("XVideoLibraryNuxController").getURIBuilder().setEnum("action",b("VideoLibraryNuxAction").DISMISS).setEnum("nux_type",b("VideoLibraryNuxType").OPTIMISTIC_POST_NUX).getURI();new(b("AsyncRequest"))().setURI(a).send()},d.setThumbnailURL=function(a,b){var c=babelHelpers["extends"]({},d.state.videoPostsMetadata);c[b].videoThumbnail=a;d.setState({videoPostsMetadata:c})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidUpdate=function(){if(!this.state.videoLibraryNuxImpressionLogged&&this.state.videoPosts.length>0&&this.state.shouldShowVideoLibraryNux){var a=b("XVideoLibraryNuxController").getURIBuilder().setEnum("action",b("VideoLibraryNuxAction").IMPRESSION).setEnum("nux_type",b("VideoLibraryNuxType").OPTIMISTIC_POST_NUX).getURI();new(b("AsyncRequest"))().setURI(a).send();this.setState({videoLibraryNuxImpressionLogged:!0})}};d.componentDidMount=function(){var a=b("Arbiter").subscribe("videoUpload/complete",this.onVideoPostSubmitted),c=b("Arbiter").subscribe(this.getChannelType(),this.onEncodeUpdate);b("Run").onLeave(function(){return a.unsubscribe()});b("Run").onLeave(function(){return c.unsubscribe()});this.props.data.length>0&&this.initializePosts()};d.handleRequest=function(a,c){__p&&__p();var d=this,e;e=!!((e=this.state.videoPostsMetadata[c])==null?void 0:e.isPremiereLivingRoom);a=a.payload;if(e&&!a){e=this.$4[c]||0;if(e<m){this.$4[c]=e+1;window.setTimeout(function(){return d.onEncodeFinish(c)},l);return}}if(a)if(this.props.isPagePost){if(this.state.renderedVideoPosts.includes(c))return;this.setState(function(a,b){return{renderedVideoPosts:a.renderedVideoPosts.concat([c])}});b("PagesComposer").renderStory(b("ReactDOM").findDOMNode(this),a);this.props.shouldShowVideoCaptionHeader&&b("VideoPostGenerateCaptionHeader").renderHeader(b("ReactDOM").findDOMNode(this),c)}else b("TimelineComposer").renderCapsuleBasedStory(b("ReactDOM").findDOMNode(this),a);else this.logEvent(b("OptimisticVideoPostEvent").POST_REMOVED_WITHOUT_REPLACEMENT,c);this.state.shouldRefreshAfterEncoding?this.refreshWhenDone(c):this.removeOptimisticPost(c)};d.renderOptimisticPost=function(a,c){if(!a.shouldRender)return b("React").createElement("div",{key:a.videoID});var d;a.videoThumbnail?d=a.videoThumbnail:g.createObjectURL&&a&&a.videoThumbnailBlob?(d=g.createObjectURL(a.videoThumbnailBlob),this.setThumbnailURL(d,a.videoID)):d="";return b("React").createElement(b("OptimisticVideoPost.react"),{username:a.userDisplayName,profilePicture:a.userProfilePictureURI,metadataTitle:a.videoTitle,metadataDescription:a.videoDescription,thumbnail:d,videoID:a.videoID,videoFileUrl:a.videoFileUrl,key:a.videoID,progress:a.progress,privacySetting:a.privacySetting,isPagePost:this.props.isPagePost,isPremiere:a.isPremiere,isPremiereLivingRoom:a.isPremiereLivingRoom,shouldShowVideoEditButton:this.state.shouldShowVideoEditButton,shouldShowVideoEditDialog:this.props.shouldShowVideoEditDialog,targetID:this.props.targetID,premiereTimeSeconds:a.premiereTimeMs/1e3,progressCompleteText:this.$3,shouldShowVideoLibraryButton:this.state.shouldShowVideoLibraryButton,shouldShowVideoLibraryNux:c,onVideoLibraryNuxDismiss:this.onVideoLibraryNuxDismiss,onVideoLibraryNuxShown:this.onVideoLibraryNuxShown})};d.render=function(){var a=this,c=this.state.videoPostsMetadata,d=this.state.videoPosts.map(function(b,d){return a.renderOptimisticPost(c[b],d===0&&a.state.shouldShowVideoLibraryNux)});return b("React").createElement("ul",null,d)};return c}(b("React").Component);e.exports=c}),null);
__d("OptimisticVideoPostController",["CSS","OptimisticVideoPostList.react","React","ReactDOM"],(function(a,b,c,d,e,f){a={init:function(a,c,d,e,f,g,h,i,j){this._postsContainer=a,b("ReactDOM").render(b("React").createElement(b("OptimisticVideoPostList.react"),{data:c,targetID:d,isPagePost:e,shouldShowVideoEditButton:f,shouldShowVideoEditDialog:g,shouldShowVideoLibraryButton:h,shouldShowVideoLibraryNux:i,shouldShowVideoCaptionHeader:j}),this._postsContainer),b("CSS").show(this._postsContainer)}};e.exports=a}),null);
__d("TimelineJumperStoryUtil",["DataStore","FBJSON"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={getTimeFromStory:function(a){if(!a.id)return null;a=b("DataStore").get(a,"store");if(!a)return null;a=b("FBJSON").parse(a);return parseInt(a.timestamp,10)}};e.exports=a}),null);
__d("TimelineMonitorElements",["csx","Arbiter","DOMQuery","Event","Run","TimelineJumperStoryUtil","Vector","ViewportBounds","ge","queryThenMutateDOM","throttle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null,i=null,j=0,k=null,l=!1;function m(){h=null,i=null,j=0,k&&k.remove(),k=null,l=!1}function n(){b("queryThenMutateDOM")(p,o,"TimelineMonitorElements/scroll")}function o(){i&&(b("Arbiter").inform(r.ELEMENT_CHANGED,i),h=i,i=null)}function p(){__p&&__p();var a=b("ViewportBounds").getTop()+b("Vector").getScrollPosition().y,c=q(a);if(c){if(h&&h.id===c.id){j=a;return}var d=b("TimelineJumperStoryUtil").getTimeFromStory(c);if(!d)return;i={id:c.id,timestamp:d,fromAbove:j<a}}j=a}function q(a){__p&&__p();var c=b("ge")("timeline_tab_content");if(!c)return null;c=b("DOMQuery").scry(c,"._2q8l");for(var d=0;d<c.length;d++){var e=c[d],f=b("Vector").getElementPosition(e).y+b("Vector").getElementDimensions(e).y;if(a<=f)return e}return null}var r={ELEMENT_CHANGED:"TimelineMonitorElements/elementChanged",init:function(){k||(k=b("Event").listen(window,"scroll",b("throttle")(n,100))),l||(b("Run").onLeave(m),l=!0),n()}};e.exports=r}),null);
__d("TimelineSectionTokenConstants",[],(function(a,b,c,d,e,f){"use strict";a={KEY_MONTH_POSITION:2,KEY_YEAR_POSITION:1,LAST_MONTH_OF_YEAR:12,MIN_TOKENS_PER_KEY:2,KEY_LENGTH_WITH_MONTH:3,KEY_DELIMITER:"_",RECENT_TOKEN:"recent",MONTH_TOKEN_PREFIX:"month",YEAR_TOKEN_PREFIX:"year"};e.exports=a}),null);
__d("TimelineSectionToken",["invariant","DateConsts","TimelineJumperCursorConfig","TimelineSectionTokenConstants"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("DateConsts").MS_PER_SEC,i=b("TimelineJumperCursorConfig").CURSOR_DELIMITER,j=b("TimelineJumperCursorConfig").CURSOR_PREFIX,k=b("TimelineSectionTokenConstants").KEY_DELIMITER,l=b("TimelineSectionTokenConstants").KEY_LENGTH_WITH_MONTH,m=b("TimelineSectionTokenConstants").KEY_MONTH_POSITION,n=b("TimelineSectionTokenConstants").KEY_YEAR_POSITION,o=b("TimelineSectionTokenConstants").LAST_MONTH_OF_YEAR,p=b("TimelineSectionTokenConstants").MIN_TOKENS_PER_KEY,q=b("TimelineSectionTokenConstants").MONTH_TOKEN_PREFIX;function r(a){a=a.split(k);a.length>=p||g(0,4411,p.toString());return a}var s={createMonthTokenWithYearAndMonth:function(a,b){b<=12&&b>0||g(0,4410);return q.concat(k,a.toString(),k,b.toString())},createMonthTokenWithKey:function(a,b){a=s.getYearFrom(a);return s.createMonthTokenWithYearAndMonth(a,b)},getMonthFrom:function(a){a=r(a);return a.length===l?parseInt(a[m],10):o},getYearFrom:function(a){a=r(a);return parseInt(a[n],10)},getCursorFromRecentToken:function(){var a=Date.now()/h;return j.concat(i,a.toString())},getCursorFrom:function(a){var b=s.getYearFrom(a);a=s.getMonthFrom(a);b=(new Date(b,a,1).valueOf()/h-1).toString();return j.concat(i,b)}};e.exports=s}),null);
__d("ButtonGroup",["CSS","DataStore","Parent"],(function(a,b,c,d,e,f){__p&&__p();var g="firstItem",h="lastItem";function i(a,c){a=b("Parent").byClass(a,c);if(!a)throw new Error("invalid use case");return a}function j(a){return b("CSS").shown(a)&&Array.from(a.childNodes).some(b("CSS").shown)}function k(a){var c,d,e;Array.from(a.childNodes).forEach(function(a){e=j(a),b("CSS").removeClass(a,g),b("CSS").removeClass(a,h),b("CSS").conditionShow(a,e),e&&(c=c||a,d=a)});c&&b("CSS").addClass(c,g);d&&b("CSS").addClass(d,h);b("CSS").conditionShow(a,c)}function a(a,b){b=i(b,"uiButtonGroupItem");a(b);k(b.parentNode)}c=function(){"use strict";function a(a){this._root=i(a,"uiButtonGroup"),b("DataStore").set(this._root,"ButtonGroup",this),k(this._root)}a.getInstance=function(c){c=i(c,"uiButtonGroup");var d=b("DataStore").get(c,"ButtonGroup");return d||new a(c)};return a}();Object.assign(c.prototype,{hideItem:a.bind(null,b("CSS").hide),showItem:a.bind(null,b("CSS").show),toggleItem:a.bind(null,b("CSS").toggle)});e.exports=c}),null);
__d("TimelineStickyHeader",["Animation","Arbiter","BlueBar","Bootloader","CSS","DOM","DOMQuery","Event","ProfileTabConst","ProfileTabUtils","ProfileTimelineUILogger","Style","TimelineComponentKeys","TimelineController","Vector","ViewportBounds","emptyFunction","ge","getOrCreateDOMID","nullthrows","queryThenMutateDOM"],(function(a,b,c,d,e,f){__p&&__p();var g=200,h=358,i=48,j=!1,k,l,m,n=!1,o=0,p,q,r=!1,s={},t={VISIBLE:"TimelineStickyHeader/visible",ADJUST_WIDTH:"TimelineStickyHeader/adjustWidth",init:function(a){__p&&__p();k=a;t.reset();k=a;l=b("DOM").find(a,"div.name");b("DOM").find(a,"div.actions");j=b("CSS").hasClass(a,"fbTimelineStickyHeaderVisible");var c,d=!1,e=!0;b("queryThenMutateDOM")(function(){var a=b("BlueBar").getBar();a&&a.offsetTop&&!b("ge")("page_admin_panel")&&b("TimelineController").getCurrentKey()!==b("ProfileTabConst").TIMELINE&&(c=b("Vector").getElementDimensions(a).y,d=!0);e=b("BlueBar").hasFixedBlueBar()},function(){d?b("Bootloader").loadModules(["StickyController"],function(b){new b(a,c).start()},"TimelineStickyHeader"):b("CSS").addClass(a,"fixed_elem"),e||b("CSS").addClass(a,"fbTimelineStickyHeaderNonFixedBlueBar"),t.updateBounds(),t.toggleVisibilityOnFocus(),b("queryThenMutateDOM")(b("emptyFunction"),function(){t.check(b("Vector").getScrollPosition().y)},"TimelineStickyHeader/afterInit"),b("TimelineController").register(b("TimelineComponentKeys").STICKY_HEADER,t)},"TimelineStickyHeader/init")},reset:function(){j=!1,k=null,l=null,s={},m&&m.remove(),m=null},toggleVisibilityOnFocus:function(){b("Event").listen(k,"focusin",function(){t.toggle(!0)}),b("Event").listen(k,"focusout",function(a){a=a.relatedTarget||null;b("DOMQuery").contains(k,a)||t.check(b("Vector").getScrollPosition().y)})},handleTabChange:function(a){var c=b("nullthrows")(k);r=b("ProfileTabUtils").tabHasStickyHeader(a);o=r?h-i:0;if(!r){t.toggle(!1,function(){b("CSS").hide(c)});return}else b("CSS").show(c)},updateBounds:function(){b("queryThenMutateDOM")(function(){k&&(p=k.offsetTop,q=k.scrollHeight)},function(){m=b("ViewportBounds").addTop(function(){return j?p+q:0})},"TimelineStickyHeader/init")},check:function(a){a=o===0||a>=o;t.toggle(a)},toggle:function(a,c){__p&&__p();if(!k)return;if(a===j||!r&&a){c&&c();return}b("ge")("private_sharing_confirmation_bar")?b("CSS").addClass(k,"privateSharingConfirmationBar"):p=k.offsetTop;var d=a?p-q:p,e=a?p:p-q;b("Style").set(k,"top",d+"px");b("CSS").addClass(k,"fbTimelineStickyHeaderAnimating");var f=b("getOrCreateDOMID")(k);s[f]&&s[f].stop();s[f]=new(b("Animation"))(k).from("top",d).to("top",e).duration(g).ondone(function(){__p&&__p();s[f]=null,a&&!n&&(b("ProfileTimelineUILogger").logStickyHeaderImpression(),n=!0),b("queryThenMutateDOM")(b("emptyFunction"),function(){if(!k)return;b("CSS").conditionClass(k,"fbTimelineStickyHeaderHidden",!a);k.setAttribute("aria-hidden",a?"false":"true");b("CSS").removeClass(k,"fbTimelineStickyHeaderAnimating");b("Style").set(k,"top","");t.updateBounds();b("Arbiter").inform(t.VISIBLE,a);c&&c()})}).go();j=a;j&&t.adjustWidth()},adjustWidth:function(){b("Arbiter").inform(t.ADJUST_WIDTH,l,"state")},dismissConfirmationBar:function(){k&&b("CSS").removeClass(k,"privateSharingConfirmationBar")},scrollIntoView:function(){var a;b("queryThenMutateDOM")(function(){a=b("ge")("contentArea")},function(){a&&(a.style.minHeight=window.innerHeight+o+"px");try{window.scrollTo({top:o,left:0})}catch(a){window.scrollTo(0,o)}})}};e.exports=t}),null);
__d("TimelineStickyHeaderWithJumperNav",["Arbiter","ButtonGroup","CSS","DataStore","DateConsts","DOM","Event","Parent","ProfileTabUtils","ProfileTimelineUILogger","Run","SelectorDeprecated","SubscriptionsHandler","TimelineJumperController","TimelineMonitorElements","TimelineSectionToken","TimelineSectionTokenConstants","TimelineStickyHeader","URI","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("DateConsts").MS_PER_SEC,h=b("TimelineSectionTokenConstants").KEY_DELIMITER,i=b("TimelineSectionTokenConstants").KEY_LENGTH_WITH_MONTH,j=b("TimelineSectionTokenConstants").RECENT_TOKEN,k=b("TimelineSectionTokenConstants").YEAR_TOKEN_PREFIX,l=!1,m=null,n=null,o=null,p={},q=null,r=null;function s(a){__p&&__p();if(!a.timestamp||!o)return;a=new Date(parseInt(a.timestamp,10)*g);var c=(a.getMonth()+1).toString();a=k.concat(h,a.getFullYear().toString());if(b("SelectorDeprecated").getOption(o,a)){b("SelectorDeprecated").setSelected(o,a,!0);v(a);a=p[a];a&&b("SelectorDeprecated").setSelected(a,c,!0)}else b("SelectorDeprecated").setSelected(o,j,!0),v(j)}function t(){var a=b("SelectorDeprecated").getSelectorMenu(o);b("nullthrows")(r).addSubscriptions(b("Event").listen(a,"click",function(a){return u(a)}))}function u(a){var c=a.target;if(!(c instanceof Node))return;c=b("Parent").byTag(c,"a");c=c&&b("DataStore").get(c,"key");c&&(b("ProfileTimelineUILogger").logStickyHeaderScrubberWithJumperClick(c),a.preventDefault(),v(c),b("TimelineStickyHeader").scrollIntoView(),b("TimelineJumperController").loadSection(c))}function v(a){a===j?w():x(a)}function w(){m&&m.hideItem(q)}function x(a){__p&&__p();if(a.split(h).length===i||!q)return;a=y(a);b("DOM").insertAfter(q,a);b("CSS").hide(q);for(var c in p){var d=p[c];b("CSS").conditionShow(d,d===a)}m&&m.showItem(q)}function y(a){__p&&__p();if(!q)return null;var c=p[a];if(!c){c=p[a]=q.cloneNode(!0);var d=b("DOM").scry(c,"li.activityLog a")[0];d&&(d.href=new(b("URI"))(d.href).addQueryData({key:a}));d=b("TimelineSectionToken").getYearFrom(a);var e=b("DOM").scry(c,"li.monthSelector a");for(var f=0;f<e.length;f++){var g=e[f],h=g.getAttribute("data-key");g.setAttribute("data-key",b("TimelineSectionToken").createMonthTokenWithKey(a,h));new Date(d,h-1)>new Date()&&b("CSS").hide(g)}b("nullthrows")(r).addSubscriptions(b("Event").listen(c,"click",function(a){return u(a)}))}return c}function z(a){a=a.target;if(!(a instanceof Element))return;a=b("Parent").byClass(a,"itemAnchor");if(a){a=b("DataStore").get(a,"tab-key");a&&b("ProfileTimelineUILogger").logStickyHeaderNavItemWithJumperClick(a)}}function A(){l=!1,m=null,n=null,o=null,p={},q=null,r&&(r.release(),r=null)}a={init:function(a){__p&&__p();if(l)return;l=!0;n=b("DOM").scry(a,"div.pageMenu")[0];o=b("DOM").find(a,"div.sectionMenu");m=b("ButtonGroup").getInstance(o);r=new(b("SubscriptionsHandler"))();n&&r.addSubscriptions(b("Event").listen(n,"click",function(a){return z(a)}));q=b("DOM").find(a,"div.subsectionMenu");t();r.addSubscriptions(b("Arbiter").subscribe(b("TimelineMonitorElements").ELEMENT_CHANGED,function(a,b){s(b)}),b("Arbiter").subscribe("TimelineController/sectionKeyChange",function(a,c){a=b("ProfileTabUtils").isTimelineTab(c[0]);n&&b("CSS").conditionShow(n,a);o&&b("CSS").conditionShow(o,a);if(!a)for(var d in p){c=p[d];b("CSS").hide(c)}}));b("TimelineMonitorElements").init();b("Run").onLeave(function(){return A()})}};e.exports=a}),null);
__d("ButtonGroupMonitor",["ContextualDialog","ContextualLayer","CSS","DataStore","Layer","Parent","SelectorDeprecated"],(function(a,b,c,d,e,f){function g(a,c){a=b("Parent").byClass(a,"bg_stat_elem")||b("Parent").byClass(a,"uiButtonGroup");!a&&c&&(a=b("DataStore").get(c,"toggleElement",null));a&&(c&&b("DataStore").set(c,"toggleElement",a),b("CSS").toggleClass(a,"uiButtonGroupActive"))}b("Layer").subscribe(["hide","show"],function(a,c){(c instanceof b("ContextualLayer")||c instanceof b("ContextualDialog"))&&g(c.getCausalElement(),c)});b("SelectorDeprecated").subscribe(["close","open"],function(a,b){g(b.selector)})}),null);