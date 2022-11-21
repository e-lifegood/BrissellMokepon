(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[80773],{276667:e=>{var i,n,l,a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SeeMoreButton_pin",selections:[{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:[i={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"privacy",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[n={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"closeupUnifiedDescription",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gridTitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryPinMetadataField",kind:"LinkedField",name:"metadata",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"pinTitle",storageKey:null}],storageKey:null}],storageKey:null},n,{alias:null,args:null,kind:"ScalarField",name:"domain",storageKey:null},l,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageSmallUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageLargeUrl",storageKey:null}],storageKey:null},i,{args:null,kind:"FragmentSpread",name:"VaseSection_pin"}],type:"Pin",abstractKey:null};a.hash="64effb4f1e63deaf1d53b77187d996de",e.exports=a},85934:e=>{var i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VaseAnnotations_pin",selections:[{alias:null,args:null,concreteType:"PinJoin",kind:"LinkedField",name:"pinJoin",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"visualAnnotation",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useAnnotationsWithLinksFragment_pin"}],type:"Pin",abstractKey:null,hash:"594237c2ea6ccfb8bbc0e3e8c62cac9f"};e.exports=i},877821:e=>{var i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VaseSection_pin",selections:[{args:null,kind:"FragmentSpread",name:"VaseAnnotations_pin"}],type:"Pin",abstractKey:null,hash:"5645b1c5850647c98e4d2fefbb484bf4"};e.exports=i},569772:e=>{var i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useAnnotationsWithLinksFragment_pin",selections:[{alias:null,args:null,concreteType:"PinJoin",kind:"LinkedField",name:"pinJoin",plural:!1,selections:[{alias:null,args:null,concreteType:"AnnotationsWithLinks",kind:"LinkedField",name:"annotationsWithLinksArray",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null,hash:"35075da6e1f4b526ac4314727015c44d"};e.exports=i},252745:(e,i,n)=>{n.d(i,{Z:()=>r});var l=n(898781),a=n(643010),o=n(883119),t=n(785893);function r({text:e,icon:i,largeIdentifier:n,largeMargin:r}){const s=(0,l.ZP)();return(0,t.jsxs)(o.xu,{zIndex:new o.Ry(1),alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:(0,a.Yc)()?"rgba(0, 0, 0, 0.7)":"rgba(255, 255, 255, 0.8)"}},display:"flex",margin:r?4:2,overflow:"hidden",position:"absolute",rounding:"pill",padding:2,paddingX:n?4:void 0,height:n?36:24,top:!0,children:[i&&(0,t.jsx)(o.xu,{marginEnd:n?2:1,children:(0,t.jsx)(o.JO,{accessibilityLabel:s._('identifier that shows the pin type', 'pin.pincard.iconAccessibilityLabel', 'shows an icon with the pin type'),color:"default",icon:i,inline:!0,size:n?18:12})}),(0,t.jsx)(o.xv,{inline:!0,size:n?"200":"100",weight:"bold",children:e})]})}},184298:(e,i,n)=>{n.d(i,{Z:()=>T});var l=n(667294),a=n(702664),o=n(373420),t=n(430322),r=n(121151),s=n(898781),d=n(643010),c=n(773285),u=n(883119),m=n(50286),p=n(785893);function h({showFullScreenInfo:e,isOpen:i,interstitialUpsellDismissed:n,children:l}){const a=(0,s.ZP)(),{checkExperiment:o}=(0,c.F)(),h=(0,m.HG)(),g=(0,m.Wb)();return g||h||!o("pcons_more_info_sheet").anyEnabled?(0,p.jsx)(r.ZP,{accessibilityModalLabel:"",mobileHideCloseIcon:!0,mobileIsFullscreen:!0,isOpen:e&&!g,closeOnOutsideClick:!1,onDismiss:()=>{},children:(0,p.jsx)(u.xu,{color:(0,d.Yc)()?"dark":"default",dangerouslySetInlineStyle:{__style:{border:(0,d.Yc)()?void 0:"1px solid #efefef",transition:"transform 0.3s ease-out",WebkitOverflowScrolling:"touch"}},height:"100%",left:!0,maxHeight:"100%",overflow:"auto",position:"fixed",top:!0,width:h?"100vw":"100%",zIndex:new u.Ry(1),children:(0,p.jsx)(u.xu,{bottom:!0,left:!0,right:!0,top:!0,position:"fixed",padding:5,overflow:"scroll",marginTop:n?0:12,children:l})})}):(0,p.jsx)(t.default,{accessibilityModalLabel:a._('Close', 'Close modal window', 'Close modal window'),isOpen:i,onDismiss:()=>{},mobileAccessibilityCloseIconLabel:a._('Close', 'Close modal window', 'Close modal window'),children:l})}var g,_=n(784590),y=n(690035),f=n(683350),v=n(623568),b=n(904411),x=n(802201),k=n(276775),S=n(992750),P=n(539497),w=n(167912);const j=void 0!==g?g:g=n(276667);function L({iconColor:e,size:i,isMainPin:n,isAuth:t,pinCreditPrefix:r,onClickTitleOrDomain:d,richMetadataDescription:g,richMetadataTitle:_,richSummaryDisplayName:b,placeSummaryName:x,closeupUnifiedDescription:w,gridTitle:j,storyPinDataId:L,storyPinDataMetadataPinTitle:D,pinDescription:C,pinDomain:I,pinTitle:T,boardId:A,boardUrl:M,boardName:F,boardPrivacy:z,pinnerFullName:U,pinnerImageSmallUrl:N,pinnerImageLargeUrl:Z,pinId:E,graphqlRef:W}){const K=(0,s.ZP)(),{unauthInterstitialDismissed:O,isSeoBot:B}=(0,a.useSelector)((({session:e})=>e)),[R,J]=(0,l.useState)(!1),q=(0,m.HG)(),V=(0,m.Wb)(),{checkExperiment:H}=(0,c.F)(),$=(0,y.Z)(),X=(0,v._S)(I)?I:"",G=!(!V&&!t)&&(H("pcons_more_info_sheet").anyEnabled||H("pcons_merge_context_menus").anyEnabled),{description:Y}=(0,S.eK)({richMetadataDescription:g,richSummaryDisplayName:b,placeSummaryName:x,closeupUnifiedDescription:w}),Q=(0,S.fs)({pinTitle:T,gridTitle:j,richSummaryDisplayName:b,richMetadataTitle:_,storyPinDataId:L,storyPinDataMetadataPinTitle:D,placeSummaryName:x})||C,ee=!q,ie=(0,k.useLocation)(),ne=(0,p.jsxs)(u.xu,{padding:5,dangerouslySetInlineStyle:G?{__style:{paddingTop:0,paddingBottom:30}}:void 0,children:[(0,p.jsx)(u.xu,{left:!0,position:"absolute",top:!0,color:"default",padding:4,"data-test-id":"close-seo-vase-see-more-button",children:(0,p.jsx)(u.hU,{accessibilityLabel:K._('Cancel', 'close modal icon', 'close modal icon'),icon:"cancel",size:"sm",onClick:()=>{(0,P.My)("mweb.unauth.see_more.dismissed"),(0,P.LW)({action:"click",pageLocation:ie,item:"close-seo-vase-see-more-button"}),J(!1),n&&(0,P.My)("mweb.unauth.see_more.main_pin.dismissed")},iconColor:"gray"})}),(0,p.jsx)(u.xu,{marginBottom:G?0:8,children:(0,p.jsx)(u.xv,{align:G?"start":"center",weight:G?void 0:"bold",children:(0,p.jsx)("span",{className:"deprecatedTextSizeXL",children:G?null:K._('More information', 'more information label', 'more information label')})})}),(0,p.jsx)(f.Z,{description:Y,title:Q,pinCreditPrefix:r,onClickTitleOrDomain:d,pinDomain:X,boardId:A,boardUrl:M,boardName:F,boardPrivacy:z,pinnerFullName:U,pinnerImageSmallUrl:N,pinnerImageLargeUrl:Z,pinId:E,graphqlRef:W})]});return(0,p.jsxs)(u.xu,{right:!0,"data-test-id":"SeoVaseSeeMoreButton",dangerouslySetInlineStyle:{__style:{float:"right"}},children:[(0,p.jsx)(u.hU,{accessibilityLabel:K._('See more', 'more information icon', 'more information icon'),icon:"ellipsis",iconColor:null!=e?e:"gray",size:i||"md",onClick:({event:e})=>{e.stopPropagation(),(0,P.My)("mweb.unauth.see_more.shown"),(0,P.LW)({action:"click",pageLocation:ie,item:"seo-vase-see-more-button"}),V||t||!H("pcons_merge_context_menus").anyEnabled?(J(!0),n&&(0,P.My)("mweb.unauth.see_more.main_pin.shown")):$({pinId:E||"",location:n?"main-pin-more-information":"non-main-pin-more-information",seoPlacementConfig:{description:Y,titleText:Q,pinCreditPrefix:r,onClickTitleOrDomain:d,cleanPinDomain:X,boardId:A,boardUrl:M,boardName:F,boardPrivacy:z,pinnerFullName:U,pinnerImageSmallUrl:N,pinnerImageLargeUrl:Z,pinId:E,graphqlRef:W}})}}),B&&ee?(0,p.jsx)(u.xu,{display:R?"flex":"none",children:ne}):(0,p.jsx)(h,{showFullScreenInfo:R,isOpen:R&&!V,interstitialUpsellDismissed:!!O,children:ne}),V&&R&&(0,p.jsx)(o.default,{accessibilityModalLabel:"test",onDismiss:()=>{},children:ne})]})}function D(e){var i,n,l,a,o,t,r,s,d,c,u,m,h,g,_,y;const f=(0,w.useFragment)(j,e.graphqlRef);return(0,p.jsx)(L,{iconColor:e.iconColor,size:e.size,isAuth:e.isAuth,isMainPin:e.isMainPin,pinCreditPrefix:e.pinCreditPrefix,onClickTitleOrDomain:e.onClickTitleOrDomain,richMetadataDescription:null!==(i=null==f||null===(n=f.richMetadata)||void 0===n?void 0:n.description)&&void 0!==i?i:"",richMetadataTitle:null!==(l=null==f||null===(a=f.richMetadata)||void 0===a?void 0:a.title)&&void 0!==l?l:"",richSummaryDisplayName:null!==(o=null==f||null===(t=f.richSummary)||void 0===t?void 0:t.displayName)&&void 0!==o?o:"",closeupUnifiedDescription:null!==(r=null==f?void 0:f.closeupUnifiedDescription)&&void 0!==r?r:"",gridTitle:null==f?void 0:f.gridTitle,storyPinDataId:null==f?void 0:f.storyPinDataId,storyPinDataMetadataPinTitle:null==f||null===(s=f.storyPinData)||void 0===s||null===(d=s.metadata)||void 0===d?void 0:d.pinTitle,pinDescription:null==f?void 0:f.description,pinDomain:(null==f?void 0:f.domain)||void 0,pinTitle:null==f?void 0:f.title,boardId:null==f||null===(c=f.board)||void 0===c?void 0:c.entityId,boardUrl:(null==f||null===(u=f.board)||void 0===u?void 0:u.url)||void 0,boardName:(null==f||null===(m=f.board)||void 0===m?void 0:m.name)||void 0,boardPrivacy:(null==f||null===(h=f.board)||void 0===h?void 0:h.privacy)||void 0,pinnerFullName:(null==f||null===(g=f.pinner)||void 0===g?void 0:g.fullName)||void 0,pinnerImageSmallUrl:null==f||null===(_=f.pinner)||void 0===_?void 0:_.imageSmallUrl,pinnerImageLargeUrl:null==f||null===(y=f.pinner)||void 0===y?void 0:y.imageLargeUrl,pinId:null==f?void 0:f.entityId,graphqlRef:f})}function C(e){var i,n,l,a,o,t,r,s,d,c,u,m;const h=(0,x.S6)()(null!==(i=e.pinId)&&void 0!==i?i:""),g=(0,b.gC)()(null!==(n=null==h?void 0:h.board)&&void 0!==n?n:""),_=null==h?void 0:h.pinner;return(0,p.jsx)(L,{iconColor:e.iconColor,size:e.size,isAuth:e.isAuth,isMainPin:e.isMainPin,pinCreditPrefix:e.pinCreditPrefix,onClickTitleOrDomain:e.onClickTitleOrDomain,richMetadataDescription:null!==(l=null==h||null===(a=h.rich_metadata)||void 0===a?void 0:a.description)&&void 0!==l?l:"",richMetadataTitle:null!==(o=null==h||null===(t=h.rich_metadata)||void 0===t?void 0:t.title)&&void 0!==o?o:"",richSummaryDisplayName:null!==(r=null==h||null===(s=h.rich_summary)||void 0===s?void 0:s.display_name)&&void 0!==r?r:"",placeSummaryName:null!==(d=null==h?void 0:h.place_summary)&&void 0!==d?d:"",closeupUnifiedDescription:null!==(c=null==h?void 0:h.closeup_unified_description)&&void 0!==c?c:"",gridTitle:null==h?void 0:h.grid_title,storyPinDataId:null==h?void 0:h.story_pin_data_id,storyPinDataMetadataPinTitle:null==h||null===(u=h.story_pin_data)||void 0===u||null===(m=u.metadata)||void 0===m?void 0:m.pin_title,pinDescription:null==h?void 0:h.description,pinDomain:null==h?void 0:h.domain,pinTitle:null==h?void 0:h.title,boardId:null==g?void 0:g.id,boardUrl:null==g?void 0:g.url,boardName:null==g?void 0:g.name,boardPrivacy:null==g?void 0:g.privacy,pinnerFullName:null==_?void 0:_.full_name,pinnerImageSmallUrl:null==_?void 0:_.image_small_url,pinnerImageLargeUrl:null==_?void 0:_.image_large_url,pinId:null==h?void 0:h.id})}function I(e){var i,n,l,a,o,t,r,s,d,c,u,m;const h=(0,x.S6)()(null!==(i=e.pinId)&&void 0!==i?i:""),g=(0,b.gC)()(null!==(n=null==h?void 0:h.board)&&void 0!==n?n:""),y=null==h?void 0:h.pinner;return(0,_.Z)({name:"PinResource",options:{id:e.pinId,field_set_key:"unauth_ssr_lazy_load"}}),(0,p.jsx)(L,{iconColor:e.iconColor,size:e.size,isAuth:e.isAuth,isMainPin:e.isMainPin,pinCreditPrefix:e.pinCreditPrefix,onClickTitleOrDomain:e.onClickTitleOrDomain,richMetadataDescription:null!==(l=null==h||null===(a=h.rich_metadata)||void 0===a?void 0:a.description)&&void 0!==l?l:"",richMetadataTitle:null!==(o=null==h||null===(t=h.rich_metadata)||void 0===t?void 0:t.title)&&void 0!==o?o:"",richSummaryDisplayName:null!==(r=null==h||null===(s=h.rich_summary)||void 0===s?void 0:s.display_name)&&void 0!==r?r:"",placeSummaryName:null!==(d=null==h?void 0:h.place_summary)&&void 0!==d?d:"",closeupUnifiedDescription:null!==(c=null==h?void 0:h.closeup_unified_description)&&void 0!==c?c:"",gridTitle:null==h?void 0:h.grid_title,storyPinDataId:null==h?void 0:h.story_pin_data_id,storyPinDataMetadataPinTitle:null==h||null===(u=h.story_pin_data)||void 0===u||null===(m=u.metadata)||void 0===m?void 0:m.pin_title,pinDescription:null==h?void 0:h.description,pinDomain:null==h?void 0:h.domain,pinTitle:null==h?void 0:h.title,boardId:null==g?void 0:g.id,boardUrl:null==g?void 0:g.url,boardName:null==g?void 0:g.name,boardPrivacy:null==g?void 0:g.privacy,pinnerFullName:null==y?void 0:y.full_name,pinnerImageSmallUrl:null==y?void 0:y.image_small_url,pinnerImageLargeUrl:null==y?void 0:y.image_large_url,pinId:null==h?void 0:h.id})}function T(e){return e.graphqlRef?(0,p.jsx)(D,{...e}):e.lazyLoadAnnotations?(0,p.jsx)(I,{...e}):(0,p.jsx)(C,{...e})}},364245:(e,i,n)=>{n.d(i,{Z:()=>S});var l,a=n(667294),o=n(391254),t=n(941646),r=n(111168),s=n(898781),d=n(992750),c=n(539497),u=n(773285),m=n(802201),p=n(276775),h=n(883119),g=n(167912),_=n(785893);const y=void 0!==l?l:l=n(85934);function f({direction:e,handleClick:i,testId:n}){const l=(0,s.ZP)(),a=(0,p.useLocation)();return(0,_.jsx)("div",{style:{alignItems:"center",background:`linear-gradient(to ${"left"===e?"right":"left"}, rgba(255,255,255,1) 25%,rgba(255,255,255,0) 100%)`,border:"none",cursor:"pointer",display:"flex",height:30,lineHeight:25,outline:"none",paddingBottom:4,paddingTop:4,position:"absolute",top:0,width:45,..."right"===e?{right:0,justifyContent:"flex-end",textAlign:"right"}:{left:0}},onClick:e=>{(0,c.LW)({action:"click",pageLocation:a,item:"board-pills-arrow"}),i(e)},role:"button","aria-label":"arrow",tabIndex:-1,"aria-hidden":"true","data-test-id":n,children:(0,_.jsx)(t.Z,{id:"board-pills-arrow",children:(0,_.jsx)(h.JO,{accessibilityLabel:l._('Scroll', 'annotations.scrollArrow', 'Accessibility label for scroll arrow button'),icon:"right"===e?"arrow-forward":"arrow-back",size:8,color:"subtle"})})})}function v({name:e,url:i}){const[n,l]=(0,a.useState)(!1),o=(0,p.useLocation)();return(0,_.jsx)(h.xu,{"data-test-id":"vase-tag",display:"inlineBlock",marginTop:1,marginEnd:1,paddingX:2,paddingY:1,height:26,color:"secondary",rounding:8,dangerouslySetInlineStyle:{__style:{whiteSpace:"nowrap"}},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:(0,_.jsx)(h.xv,{color:n?"subtle":"default",inline:!0,overflow:"breakWord",size:"100",weight:"bold",children:i?(0,_.jsx)(h.rU,{inline:!0,tapStyle:"compress",href:i,rounding:8,onClick:()=>{(0,c.LW)({action:"click",pageLocation:o,item:"vase-tag"})},underline:"hover",children:e}):e})})}function b({pinJoinVisualAnnotation:e,pinJoinAnnotationsWithLinks:i,mode:n}){const[l,r]=(0,a.useState)(!1),[s,m]=(0,a.useState)(!1),g=(0,p.useLocation)(),{checkExperiment:y}=(0,u.F)(),b=(0,a.useRef)(null);(0,a.useEffect)((()=>{const e=b.current,i=()=>{if("inlineWithScrollArrows"===n&&b.current){const e=b.current,i=Math.max(0,e.scrollLeft),n=i+e.clientWidth;r(0!==i),m(n<e.scrollWidth)}else r(!1),m(!1)};return i(),null==e||e.addEventListener("scroll",i),()=>{null==e||e.removeEventListener("scroll",i)}}),[n]);const x=e=>i=>{i.preventDefault(),i.stopPropagation(),"right"===e&&(0,c.LW)({action:"click",pageLocation:g,item:"board-pills-arrow-button-right"});const n=b.current;if(!n)return;const l=("left"===e?-1:1)*n.clientWidth*.5;n.scrollLeft=Math.min(Math.max(n.scrollLeft+l,0),n.scrollWidth)},{annotationsWithLinks:k}=(0,d.eK)({pinJoinVisualAnnotation:e,pinJoinAnnotationsWithLinks:i});return(0,_.jsx)(h.kC,{alignItems:"center",justifyContent:"end",children:(0,_.jsxs)(h.xu,{display:"flex",overflow:"auto",width:"100%",position:"relative","data-test-id":"vase-carousel",children:[(0,_.jsx)(o.Z,{unsafeCSS:"\n::-webkit-scrollbar {\n  display: none;\n}\n"}),l&&(0,_.jsx)(f,{direction:"left",handleClick:x("left"),testId:"left-scroll-arrow"}),(0,_.jsx)(h.xu,{overflow:"auto",dangerouslySetInlineStyle:{__style:{scrollBehavior:"smooth",scrollbarWidth:"none",padding:y("pcons_more_info_sheet").anyEnabled?0:"4px 0",whiteSpace:"nowrap"}},ref:b,display:"expanded"!==n||y("pcons_more_info_sheet").anyEnabled?void 0:"flex",wrap:"expanded"===n,children:k.map((({name:e,url:i})=>(0,_.jsx)(v,{name:e,url:i},i||e)))}),s&&(0,_.jsx)(t.Z,{id:"board-pills-arrow-button-right",children:(0,_.jsx)(f,{direction:"right",handleClick:x("right"),testId:"right-scroll-arrow"})})]})})}function x(e){var i;const n=(0,g.useFragment)(y,e.graphqlRef),l=(0,r.Z)(n),a=(null==n||null===(i=n.pinJoin)||void 0===i?void 0:i.visualAnnotation)||[];return a.length<1?null:(0,_.jsx)(b,{mode:e.mode,pinJoinVisualAnnotation:a,pinJoinAnnotationsWithLinks:l||void 0})}function k(e){var i,n,l;const a=(0,m.S6)()(e.pinId||"");return((null==a||null===(i=a.pin_join)||void 0===i?void 0:i.visual_annotation)||[]).length<1?null:(0,_.jsx)(b,{mode:e.mode,pinJoinVisualAnnotation:null==a||null===(n=a.pin_join)||void 0===n?void 0:n.visual_annotation,pinJoinAnnotationsWithLinks:null==a||null===(l=a.pin_join)||void 0===l?void 0:l.annotations_with_links})}function S(e){return e.graphqlRef?(0,_.jsx)(x,{...e}):(0,_.jsx)(k,{...e})}},683350:(e,i,n)=>{n.d(i,{Z:()=>k});var l=n(667294),a=n(702664),o=n(927104),t=n(941646),r=n(773285),s=n(50286),d=n(276775),c=n(539497),u=n(883119),m=n(785893);function p({boardUrl:e,boardName:i,boardPrivacy:n,pinnerFullName:l,pinnerImageSmallUrl:a,pinnerImageLargeUrl:o}){const p=(0,d.useLocation)(),h=(0,s.HG)(),{checkExperiment:g}=(0,r.F)();if(!e||!i)return null;const _=e.split("/")[1],y=l||_,f=a||o;return(0,m.jsxs)(u.kC,{alignItems:"stretch",justifyContent:"start",direction:"row",children:[f?(0,m.jsx)(u.iP,{role:"link",href:`/${_}/`,fullWidth:!1,tapStyle:"compress",onTap:()=>{(0,c.My)(`pcons.${h?"desktop":"mobile"}.see-more-button-creator`),(0,c.LW)({action:"click",pageLocation:p,item:"see-more-button-creator"})},children:(0,m.jsx)(u.xu,{rounding:"circle",width:32,height:32,overflow:"hidden",marginEnd:2,"data-test-id":"see-more-button-creator",children:(0,m.jsx)(u.Ee,{naturalHeight:32,naturalWidth:32,alt:y,fit:"cover",color:"rgb(231, 186, 176)",src:f})})},"profile-link"):null,(0,m.jsxs)(u.kC,{alignItems:"stretch",direction:"column",justifyContent:"center",children:[(0,m.jsx)(t.Z,{id:"see-more-button-creator-full-name",children:(0,m.jsx)(u.iP,{onTap:()=>{(0,c.My)(`pcons.${h?"desktop":"mobile"}.see-more-button-creator-full-name`),(0,c.LW)({action:"click",pageLocation:p,item:"see-more-button-creator-full-name"})},children:(0,m.jsx)(u.xv,{color:"default",inline:!0,size:g("pcons_more_info_sheet").anyEnabled?"100":"200",weight:"bold",children:(0,m.jsx)(u.rU,{href:`/${_}/`,inline:!0,tapStyle:"compress",underline:"hover",children:y},"profile-link")},"profileLink")})}),"protected"===n?null:(0,m.jsx)(u.xv,{color:"default",inline:!0,size:g("pcons_more_info_sheet").anyEnabled?"100":"200",children:(0,m.jsx)(u.rU,{href:null!=e?e:"",inline:!0,tapStyle:"compress",underline:"hover",children:null!=i?i:""},"board-link")},"boardLink")]})]})}var h,g=n(898781),_=n(364245),y=n(349700),f=n(780280),v=n(389920),b=n(167912);const x=void 0!==h?h:h=n(877821);function k({onClickTitleOrDomain:e,title:i,description:n,pinId:t,graphqlRef:h,pinCreditPrefix:k,pinDomain:S,boardId:P,boardUrl:w,boardName:j,boardPrivacy:L,pinnerFullName:D,pinnerImageSmallUrl:C,pinnerImageLargeUrl:I}){const T=(0,g.ZP)(),A=(0,d.useLocation)(),{isSeoBot:M}=(0,a.useSelector)((({session:e})=>e)),F=(0,s.ml)(),z=(0,s.Wb)(),{checkExperiment:U}=(0,r.F)(),{isAuthenticated:N}=(0,f.B)(),Z=(0,b.useFragment)(x,h),E=!N&&!M&&F,W=e||null,[K,O]=(0,l.useState)(!U("pcons_more_info_sheet").anyEnabled),B=(0,v.si)(),R=(0,v.Re)(),J=(i||"").length>R,q=n.length>B,[V,H]=(0,l.useState)(!q&&!J||!U("pcons_more_info_sheet").anyEnabled);return(0,m.jsxs)(u.xu,{children:[!U("pcons_more_info_sheet").anyEnabled&&(0,m.jsx)(u.xu,{marginBottom:2,children:(0,m.jsx)(_.Z,{pinId:t,mode:"expanded",graphqlRef:Z})}),(0,m.jsxs)(u.xu,{marginBottom:U("pcons_more_info_sheet").anyEnabled?void 0:3,children:[(0,m.jsxs)(u.xu,{as:"figcaption",paddingX:z&&U("pcons_more_info_sheet").anyEnabled?11:0,children:[(0,m.jsx)(u.X6,{color:"default",size:U("pcons_more_info_sheet").anyEnabled?"300":"400",accessibilityLevel:3,children:K||M?i:(0,o.Z)(i||"",R)}),(0,m.jsx)(u.xu,{height:U("pcons_more_info_sheet")?n?8:0:4}),q||J?(0,m.jsxs)(u.iP,{onTap:()=>{K||N||((0,c.NC)("click_open_description_in_sheet"),(0,c.LW)({action:"click",pageLocation:A,item:"more-description-in-sheet"})),H(!V),O(!K)},fullWidth:!1,children:[(0,m.jsx)(u.xv,{color:"default",size:U("pcons_more_info_sheet")?"200":void 0,inline:!0,children:K||M?n:(0,o.Z)(n,B)}),(0,m.jsx)(u.xu,{display:"inlineBlock",paddingX:1,children:(0,m.jsx)(u.xv,{weight:"bold",size:"200",inline:!0,children:K||M?T._('Less', 'Toggle less description button', 'Toggle less description button'):T._('More', 'Toggle more description button', 'Toggle more description button')})})]}):(0,m.jsx)(u.xv,{color:"default",size:U("pcons_more_info_sheet")?"200":void 0,inline:!0,children:n})]}),E&&(V||M)&&(0,m.jsx)(u.xu,{marginTop:2,children:(0,m.jsx)(u.kC,{alignItems:"center",direction:"row",width:"100%",children:(0,y.nk)(T._('{{ pinCreditPrefix }} {{ pinCredit }}', 'tells the user where the pin is from in the form of Saved from website', 'tells the user where the pin is from in the form of Saved from website'),{pinCreditPrefix:(0,m.jsx)(u.xu,{display:"inlineBlock",children:(0,m.jsx)(u.xv,{inline:!0,size:"200",children:k})},"pinCreditsPrefix"),pinCredit:(0,m.jsx)(u.xu,{display:"inlineBlock",marginStart:1,maxWidth:"60vw","data-test-id":"pin-domain-link",children:(0,m.jsx)(u.iP,{onTap:({event:e})=>{e.preventDefault(),e.stopPropagation(),(0,c.LW)({action:"click",pageLocation:A,item:"pin-domain-link"}),(0,c.My)("mweb_pin_page.pin_link.clickthrouh"),N||(0,c.NC)("click_pin_closeup_link_clickthrough"),W&&W()},tapStyle:"compress",children:(0,m.jsx)(u.xv,{size:"200",lineClamp:1,children:(0,m.jsx)("span",{style:{textDecoration:"underline"},children:S})},"pinLinkDomain")})},"pinCredits")})})})]}),!!P&&(V||M)&&(0,m.jsx)(u.xu,{marginTop:U("pcons_more_info_sheet")?4:void 0,children:(0,m.jsx)(p,{boardUrl:w,boardName:j,boardPrivacy:L,pinnerFullName:D,pinnerImageSmallUrl:C,pinnerImageLargeUrl:I})}),U("pcons_more_info_sheet").anyEnabled&&(0,m.jsx)(u.xu,{marginTop:4,children:(0,m.jsx)(_.Z,{pinId:t,mode:"expanded",graphqlRef:Z})})]})}},389920:(e,i,n)=>{n.d(i,{Ph:()=>a,Re:()=>t,si:()=>o});var l=n(50286);const a=e=>e&&e.promoter&&!e.is_downstream_promotion?e.promoter:null,o=()=>"phone"!==(0,l.ZP)()?180:130,t=()=>"phone"!==(0,l.ZP)()?180:80},111168:(e,i,n)=>{n.d(i,{Z:()=>r});var l,a=n(667294),o=n(167912);const t=void 0!==l?l:l=n(569772),r=e=>{var i;const n=(0,o.useFragment)(t,e),l=null==n||null===(i=n.pinJoin)||void 0===i?void 0:i.annotationsWithLinksArray;return(0,a.useMemo)((()=>null==l?void 0:l.reduce(((e,i)=>(i.name&&(e[i.name]={name:i.name,url:i.url}),e)),{})),[l])}},283698:(e,i,n)=>{function l(e){return"undefined"!=typeof window&&Object.prototype.hasOwnProperty.call(window,"requestAnimationFrame")||e&&e(),window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{e&&e()}))}))}n.d(i,{Z:()=>l})},81226:(e,i,n)=>{function l(e){const i=Math.round(e/1e3),n=i%60;return Math.floor(i/60)+":"+(n<10?"0":"")+n}n.d(i,{Z:()=>l})},373420:(e,i,n)=>{n.r(i),n.d(i,{default:()=>d});var l=n(667294),a=n(124580),o=n(223815),t=n(968121),r=n(883119),s=n(785893);function d({_dangerouslyDisableScrollBoundaryContainer:e,accessibilityModalLabel:i,align:n,allowClickAndDrag:d,allowMediaPlay:c,allowScroll:u,children:m,closeOnOutsideClick:p,footer:h,heading:g,onDismiss:_,role:y,size:f,subHeading:v}){(0,l.useEffect)((()=>(a.Z.pause(),function(){a.Z.resume()})),[]);return(0,s.jsx)(r.mh,{zIndex:t.b7,children:(0,s.jsx)(o.Z,{allowClickAndDrag:d,allowEsc:!0,allowMediaPlay:c,allowScroll:u,children:(0,s.jsx)(r.u_,{_dangerouslyDisableScrollBoundaryContainer:e,accessibilityModalLabel:i,align:n,closeOnOutsideClick:p,heading:g,footer:h,onDismiss:()=>{a.Z.resume(),_()},role:y,size:f,subHeading:v,children:m})})})}},430322:(e,i,n)=>{n.r(i),n.d(i,{default:()=>g});var l=n(667294),a=n(124580),o=n(283698),t=n(223815),r=n(50286),s=n(898781),d=n(494349),c=n(780280),u=n(883119),m=n(968121),p=n(539497),h=n(785893);function g({_dangerouslyDisableScrollBoundaryContainer:e,accessibilityModalLabel:i,align:n="center",allowScroll:g=!1,children:_,closeOnOutsideClick:y=!0,footer:f,heading:v,mobileAccessibilityCloseIconLabel:b,mobileHideCloseIcon:x,mobileIsFullscreen:k,isOpen:S,mobileIsSlideUp:P,modalStyle:w,onDismiss:j,overrideZDepth:L,subHeading:D,type:C}){const I=(0,s.ZP)(),{isRTL:T}=(0,c.B)(),A=(0,l.useRef)(!1),[M,F]=(0,l.useState)(!1),{setAppFocusState:z}=(0,d.I)(),U=(0,r.ZP)();(0,l.useEffect)((()=>{(0,p.My)(`mweb_unauth.mobile_modal.${C||"unknown_type"}.did_mount.is_open.${String(!!S)}`)}),[S,C]),(0,l.useEffect)((()=>(A.current=(0,o.Z)((()=>{A.current&&F(!0)})),()=>{"undefined"!=typeof window&&Object.prototype.hasOwnProperty.call(window,"cancelAnimationFrame")&&A.current&&(window.cancelAnimationFrame(A.current),A.current=null)})),[]),(0,l.useEffect)((()=>(S?(a.Z.pause(),z(!1)):(a.Z.resume(),z(!0)),()=>{S&&(a.Z.resume(),z(!0))})),[z,S]);const N=S&&!g;(0,l.useEffect)((()=>(N&&(()=>{if(document.body){const{body:{style:e}}=document;e.overflow="hidden",e.touchAction="none"}})(),()=>{N&&(()=>{if(document.body){const{body:{style:e}}=document;e.overflow="visible",e.touchAction="auto"}})()})),[N]);const Z=(0,m.bf)();if(!S)return null;const E=P?(0,m.Vf)({isFullscreen:k,isTablet:"tablet"===U,isShowing:M,type:C}):(0,m.JN)({isFullscreen:k,isTablet:"tablet"===U,modalStyle:w,type:C});return(0,h.jsx)(t.Z,{children:(0,h.jsx)(u.mh,{children:(0,h.jsxs)(u.xu,{"aria-label":i,display:"inlineBlock",zIndex:L?new u.Ry(L):m.ZM,position:"relative",role:"dialog",children:[(0,h.jsx)(u.iP,{accessibilityLabel:I._('Mobile Signup Modal Mask', 'mweb.signup_modal.mask', 'The acessibility label for the mask of mobile signup modal'),onTap:({event:e})=>{const i=e,n=j?"with":"without",l=C||"unknown_type";(0,p.tj)(`mweb_unauth.mobile_modal.wash_tap.${l}.${n}_dismissal`,{x:i.clientX,y:i.clientY}),y&&j&&j()},tapStyle:"none",children:(0,h.jsx)(u.xu,{position:"fixed",top:!0,left:!0,dangerouslySetInlineStyle:Z})}),(0,h.jsxs)(u.xu,{position:"fixed",color:"default",dangerouslySetInlineStyle:E,children:[(0,h.jsxs)(u.kC,{alignItems:"center",justifyContent:"start",width:"100%",gap:{row:2,column:0},children:[b&&!x?(0,h.jsx)(u.xu,{padding:2,children:(0,h.jsx)(u.hU,{accessibilityLabel:b,iconColor:"darkGray",icon:"cancel",onClick:j,padding:4,size:"sm"})}):null,v?(0,h.jsx)(u.kC.Item,{flex:"grow",children:(0,h.jsx)(u.kC,{direction:"column",alignItems:"center",justifyContent:"center",children:(0,h.jsxs)(u.xu,{dangerouslySetInlineStyle:b&&!x?(0,m.ju)(T):{__style:{}},children:[k?v:(0,h.jsx)(u.xv,{align:n,weight:"bold",size:"400",children:v}),D?(0,h.jsx)(u.xv,{align:n,children:D}):null]})})}):null]}),(0,h.jsxs)(u.xu,{overflow:e?"visible":"auto",children:[_,f]})]})]})})})}},992750:(e,i,n)=>{n.d(i,{hP:()=>u,fs:()=>s,eK:()=>d,Ly:()=>c,BY:()=>m,bN:()=>p,RC:()=>t,EU:()=>r});const l=/\s\s+/g,a=e=>e.replace(l," ");var o=n(883561);const t=({storyPinDataMetadataPinTitle:e,pinTitle:i})=>e||i,r=(e,i)=>e?e.trim().length>i?(0,o.ZP)(e.trim(),i).trim():e.trim():"",s=({pinTitle:e,gridTitle:i,richSummaryDisplayName:n,richMetadataTitle:l,storyPinDataId:a,storyPinDataMetadataPinTitle:o,placeSummaryName:t})=>{const s=o||e,d=r(i,200);return d||(n||(t||(l||(a&&s?s:null))))},d=e=>{var i,n,l,t;const{richSummaryDisplayName:r,placeSummaryName:s}=e,d=null!==(i=e.pinJoinVisualAnnotation)&&void 0!==i?i:[],c=null!==(n=e.pinJoinAnnotationsWithLinks)&&void 0!==n?n:{},u=null!==(l=e.richMetadataDescription)&&void 0!==l?l:"",m=null!==(t=e.closeupUnifiedDescription)&&void 0!==t?t:"",p=d.map((e=>(c||{})[e]||{name:e,url:""}));let h="";const g=(({richSummaryDisplayName:e,placeSummaryName:i})=>e||i||"")({richSummaryDisplayName:r,placeSummaryName:s}).toLocaleLowerCase().trim(),_=u.toLocaleLowerCase().trim(),y=m.toLocaleLowerCase().trim();return m&&m.length>3&&y!==g?h=m:u&&u.length>3&&_!==g&&(h=u),h&&(h=a((0,o.ZP)(h,496)).trim()),{description:h,annotationsWithLinks:p}},c=({pinTitle:e,gridTitle:i,richSummaryDisplayName:n,richMetadataTitle:l,storyPinDataId:a,storyPinDataMetadataPinTitle:o,placeSummaryName:t,pinJoinVisualAnnotation:r,pinJoinAnnotationsWithLinks:c})=>{const{annotationsWithLinks:u}=d({pinJoinVisualAnnotation:r,pinJoinAnnotationsWithLinks:c}),m=(u||[]).map((e=>e.name)),p=e=>(e||[])[0]||null;return s({pinTitle:e,gridTitle:i,richSummaryDisplayName:n,richMetadataTitle:l,storyPinDataId:a,storyPinDataMetadataPinTitle:o,placeSummaryName:t})||p(r)||p(m)||e},u=(e,i,n,l)=>{var a;let o=(a=e,"string"==typeof a?a:"").trim();if(!n)return l&&l.trim().length?l:o;l&&l.trim().length&&(o=l);let t=n;return t&&t.length>0&&(t=t.join(", "),o&&(o+=" "),o+=t),o},m=e=>`/pin/${e}/`,p=({pinId:e,seoUrl:i})=>i&&"string"==typeof i?i:m(e)},134185:(e,i,n)=>{n.d(i,{Z:()=>a});var l=n(785893);const a=e=>{const i=e.itemType?{itemScope:!0,itemType:e.itemType}:{};return(0,l.jsx)("div",{...i,children:e.children||null})}},578661:(e,i,n)=>{n.d(i,{G:()=>l});const l="https://schema.org/Recipe"},753311:(e,i,n)=>{n.d(i,{M:()=>t,Q:()=>o});var l=n(667294);const a=(0,l.createContext)(null),o=()=>(0,l.useContext)(a),t=a.Provider},690035:(e,i,n)=>{n.d(i,{Z:()=>a});var l=n(753311);const a=()=>{const e=(0,l.Q)();return i=>{if(e){const{pinId:n,location:l,seoPlacementConfig:a}=i;e.showUnauthContextMenu({pinId:n,location:l,seoPlacementConfig:a})}}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/80773-475e3339d65d3388.mjs.map