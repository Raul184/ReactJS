webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/react-image-show/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-image-show/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js"));else { var i, n; }}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function i(e){if(!Array.isArray(e))return e.selector+"{"+e.content+"}";for(var t="",n=0;n<e.length;n++)t+=e[n].selector+"{"+e[n].content+"}";return t}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){var n=document.createElement("style"),a=void 0;return a=t?t+"{"+i(e)+"}":i(e),n.type="text/css",n.innerHTML=a,document.head.appendChild(n),n},r=function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)document.head.removeChild(e[t]);else document.head.removeChild(e)},s=function(e){var t=window.getComputedStyle(e).transform;if(!t)return{x:0,y:0};var n=t.split(",");return{x:parseInt(n[4]),y:parseInt(n[5])}};t.addStyleToHead=a,t.removeStyleFromHead=r,t.getTranslateXY=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.NORMAL="NORMAL",t.FIRST_TO_LAST="FIRST_TO_LAST",t.LAST_TO_FIRST="LAST_TO_FIRST"},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),c=i(l),u=n(4),d=i(u),h=n(5),f=i(h),p=n(6),m=i(p),g=n(7),v=i(g),y=n(1),b=n(2);n(8);var w=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={activeIndex:0,navigateStatus:b.NORMAL},n.styleNodes=n.createCss(e),n.handleLeftClick=n.handleLeftClick.bind(n),n.handleRightClick=n.handleRightClick.bind(n),n.handleIndicatorClick=n.handleIndicatorClick.bind(n),n.goTo=n.goTo.bind(n),n.updateNavigationStatus=n.updateNavigationStatus.bind(n),n.handleClickImage=n.handleClickImage.bind(n),n}return s(t,e),o(t,[{key:"createCss",value:function(e){var t=e.width,n=(e.imagesWidth,e.imagesHeight,e.imagesHeightMobile,e.fixedImagesHeight,[]);return n.push((0,y.addStyleToHead)({selector:".slide-show.slide-show-size",content:"width:"+t+";"},"@media screen and (min-width: 992px)")),n}},{key:"componentWillUnmount",value:function(){(0,y.removeStyleFromHead)(this.styleNodes)}},{key:"handleLeftClick",value:function(){0!==this.state.activeIndex?this.goTo(this.state.activeIndex-1):this.props.infinite&&(this.goTo(this.props.images.length-1),this.navigateStatus=b.FIRST_TO_LAST)}},{key:"handleRightClick",value:function(){var e=this.state.activeIndex;e!==this.props.images.length-1?this.goTo(e+1):this.props.infinite&&(this.goTo(0),this.navigateStatus=b.LAST_TO_FIRST)}},{key:"handleIndicatorClick",value:function(e){this.goTo(+e.currentTarget.dataset.index)}},{key:"goTo",value:function(e){this.setState({activeIndex:e})}},{key:"updateNavigationStatus",value:function(e){this.navigateStatus=e}},{key:"handleClickImage",value:function(e,t){"function"==typeof this.props.onImageClick&&this.props.onImageClick(e,t)}},{key:"render",value:function(){var e=this.props,t=e.images,n=e.indicators,i=e.thumbnails,a=e.arrows,r=e.fixedImagesHeight,s=e.infinite,o=e.imagesWidth,l=e.imagesHeight,u=e.imagesHeightMobile,h=e.thumbnailsWidth,p=this.state.activeIndex;if(!t||!t.length)return c.default.createElement("div",null);var g=t.length;return c.default.createElement("div",null,c.default.createElement("div",{className:"slide-show slide-show-size"},c.default.createElement(m.default,{images:t,activeIndex:p,onGoLeft:this.handleLeftClick,onGoRight:this.handleRightClick,goTo:this.goTo,fixedImagesHeight:r,imagesWidth:o,imagesHeight:l,imagesHeightMobile:u,infinite:s,navigateStatus:this.navigateStatus,updateNavigationStatus:this.updateNavigationStatus,onImageClick:this.handleClickImage}),a&&c.default.createElement(d.default,{onLeftClick:this.handleLeftClick,onRightClick:this.handleRightClick}),n&&c.default.createElement(f.default,{count:g,activeIndex:p,onClick:this.handleIndicatorClick})),i&&c.default.createElement("div",{className:"slide-show"},c.default.createElement(v.default,{images:t,thumbnailsWidth:h,activeIndex:p,goTo:this.goTo,fixedImagesHeight:r})))}}]),t}(c.default.PureComponent);w.defaultProps={images:[],width:"920px",imagesWidth:"800px",thumbnailsWidth:"920px",thumbnailsHeight:"12vw",imagesHeight:"450px",imagesHeightMobile:"56vw",arrows:!0,fixedImagesHeight:!1,indicators:!1,thumbnails:!1,infinite:!1,onImageClick:void 0},t.default=w},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i),r=function(e){var t=e.direction,n="left"===t?"8.165,25 25,0 0,25 25,50 8.165,25":"16.835,25 0,50 25,25 0,0 16.835,25";return a.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"50",viewBox:"0 0 25 50"},a.default.createElement("polyline",{fill:"#8B8B8B",points:n}))},s=function(e){var t=e.onLeftClick,n=e.onRightClick;return a.default.createElement("div",{className:"ss-arrows"},a.default.createElement("span",{className:"ss-arrow-left",onClick:t},a.default.createElement(r,{direction:"left"})),a.default.createElement("span",{className:"ss-arrow-right",onClick:n},a.default.createElement(r,{direction:"right"})))};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i),r=function(e){for(var t=e.count,n=e.onClick,i=e.activeIndex,r=[],s=0;s<t;s++)r.push(a.default.createElement("div",{key:s,onClick:n,"data-index":s},a.default.createElement("span",{className:s===i?"ss-active":""})));return a.default.createElement("div",{className:"ss-indicators"},r)};t.default=r},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(l),u=n(1),d=n(2),h=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={noTransition:!0,imagesTrackStyle:{}},n.styleNodes=n.createCss(e),n.activeIndex=n.calculateActiveIndex(e),n.handleLoaded=n.handleLoaded.bind(n),n.handleTouchImage=n.handleTouchImage.bind(n),n.handleMoveImage=n.handleMoveImage.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleTouchCancel=n.handleTouchCancel.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.handleClickImage=n.handleClickImage.bind(n),n}return r(t,e),o(t,[{key:"createCss",value:function(e){var t=e.imagesWidth,n=e.imagesHeight,i=e.imagesHeightMobile,a=e.fixedImagesHeight,r="@media screen and (min-width: 992px)",s=[];return a?(s.push((0,u.addStyleToHead)([{selector:".slide-show .ss-images-size",content:"height:"+i+";"}])),s.push((0,u.addStyleToHead)([{selector:".slide-show .ss-images-size",content:"width:"+t+";height:"+n+";"}],r))):s.push((0,u.addStyleToHead)([{selector:".slide-show .ss-images-size",content:"width:"+t+";"}],r)),s}},{key:"componentWillUnmount",value:function(){(0,u.removeStyleFromHead)(this.styleNodes)}},{key:"componentWillReceiveProps",value:function(e){var t=this.calculateActiveIndex(e);this.setState({imagesTrackStyle:this.calculateTrackStyle(t),noTransition:!1}),this.activeIndex=t}},{key:"calculateActiveIndex",value:function(e){var t=e.activeIndex,n=e.infinite,i=e.navigateStatus;if(!n)return t;switch(e.updateNavigationStatus(d.NORMAL),i){case d.FIRST_TO_LAST:return 0;case d.LAST_TO_FIRST:return e.images.length+1;default:return t+1}}},{key:"calculateTrackStyle",value:function(e){var t=this.props.fixedImagesHeight,n=this.imagesTrack.childNodes[e],i=n.getBoundingClientRect();return{transform:"translateX("+-e*i.width+"px)",height:t?"inherit":i.height+"px"}}},{key:"handleLoaded",value:function(){this.setState({imagesTrackStyle:this.calculateTrackStyle(this.activeIndex)})}},{key:"handleTouchImage",value:function(e){this.startingSwipeStatus={touchStartX:e.touches[0].pageX,translateStartX:(0,u.getTranslateXY)(e.currentTarget).x,trackWidth:e.currentTarget.getBoundingClientRect().width,swiped:0},this.setState({noTransition:!0})}},{key:"handleMoveImage",value:function(e){var t=e.currentTarget,n=this.startingSwipeStatus,i=n.touchStartX,a=n.translateStartX,r=e.touches[0].pageX-i;this.startingSwipeStatus.swiped=r,t.style.transform="translateX("+(a+r)+"px)"}},{key:"handleTouchEnd",value:function(e){var t=e.currentTarget,n=this.startingSwipeStatus,i=n.trackWidth,a=n.translateStartX,r=n.swiped,s=this.activeIndex,o=r/i;this.props.infinite?o<-.15?this.props.onGoRight():o>.15?this.props.onGoLeft():t.style.transform="translateX("+a+"px)":o<-.15&&s<this.props.images.length-1?this.props.onGoRight():o>.15&&s>0?this.props.onGoLeft():t.style.transform="translateX("+a+"px)",this.setState({noTransition:!1})}},{key:"handleTouchCancel",value:function(e){e.currentTarget.style.transform="translateX("+this.startingSwipeStatus.translateStartX+"px)",this.setState({noTransition:!1})}},{key:"handleTransitionEnd",value:function(e){var t=this.activeIndex,n=this.props.images;0===t&&(this.activeIndex=n.length,this.setState({imagesTrackStyle:this.calculateTrackStyle(this.activeIndex),noTransition:!0})),t===n.length+1&&(this.activeIndex=1,this.setState({imagesTrackStyle:this.calculateTrackStyle(1),noTransition:!0}))}},{key:"handleClickImage",value:function(e){var t=this;return function(n){t.props.onImageClick(n,e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.images,i=t.fixedImagesHeight,a=t.infinite,r=this.state,o=r.noTransition,l=r.imagesTrackStyle,u={onTouchStart:this.handleTouchImage,onTouchMove:this.handleMoveImage,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel,onTransitionEnd:a?this.handleTransitionEnd:void 0};return c.default.createElement("div",{className:"ss-images ss-images-size"+(i?" ss-fixed-height":"")},c.default.createElement("div",s({className:"ss-images-track"+(o?" ss-no-transition":""),style:l,ref:function(t){e.imagesTrack=t}},u),a&&c.default.createElement("div",{className:"ss-images-size ss-slide-image"},c.default.createElement("img",{src:n[n.length-1]})),n.map(function(t,n){return c.default.createElement("div",{className:"ss-images-size ss-slide-image",key:n,onClick:e.handleClickImage(n)},c.default.createElement("img",{src:t,onLoad:0===n?e.handleLoaded:void 0}))}),a&&c.default.createElement("div",{className:"ss-images-size ss-slide-image"},c.default.createElement("img",{src:n[0]}))))}}]),t}(c.default.PureComponent);t.default=h},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(o),c=n(1),u=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={thumbnailsTrackStyle:{}},n.styleNodes=n.createCss(e),n.handleImageClick=n.handleImageClick.bind(n),n}return r(t,e),s(t,[{key:"createCss",value:function(e){var t=this.props.thumbnailsWidth,n=[];return n.push((0,c.addStyleToHead)({selector:".slide-show .ss-thumbnails",content:"width:"+t+";"},"@media screen and (min-width: 992px)")),n}},{key:"componentWillReceiveProps",value:function(e){var t=e.activeIndex,n=this.calculateOffsetLeft(t);this.setState({thumbnailsTrackStyle:{transform:"translateX("+n+"px)"}})}},{key:"componentWillUnmount",value:function(){(0,c.removeStyleFromHead)(this.styleNodes)}},{key:"handleImageClick",value:function(e){this.props.goTo(+e.currentTarget.dataset.index)}},{key:"calculateOffsetLeft",value:function(e){var t=this.props.images.length,n=this.thumbnailsTrack,i=n.getBoundingClientRect().width,a=n.scrollWidth,r=a-i,s=r/(t-1);return e===t-1?-r:-e*s}},{key:"render",value:function(){var e=this,t=this.props,n=t.images,i=t.activeIndex,a=this.state.thumbnailsTrackStyle;return l.default.createElement("div",{className:"ss-thumbnails"},l.default.createElement("div",{className:"ss-thumbnails-track",style:a,ref:function(t){e.thumbnailsTrack=t}},n.map(function(t,n){return l.default.createElement("div",{key:n,className:"ss-thumbnail",onClick:e.handleImageClick,"data-index":n},l.default.createElement("img",{src:t,alt:"",className:i===n?"ss-active":""}))})))}}]),t}(l.default.PureComponent);t.default=u},function(e,t,n){var i=n(9);"string"==typeof i&&(i=[[e.i,i,""]]);var a={};a.transform=void 0;n(11)(i,a);i.locals&&(e.exports=i.locals)},function(e,t,n){t=e.exports=n(10)(void 0),t.push([e.i,'.slide-show{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:auto;position:relative;width:100%}.slide-show .ss-indicators{position:relative;top:-40px;padding:0;text-align:center;height:0}.slide-show .ss-indicators>div{display:inline-block;cursor:pointer}.slide-show .ss-indicators>div>span{display:inline-block;width:10px;height:10px;border:1px solid #fff;border-radius:50%;margin:0 5px;padding:0;background:transparent}.slide-show .ss-indicators>div>span.ss-active{background-color:#fff}.slide-show .ss-arrows{position:absolute;width:inherit;top:50%;transform:translateY(-50%);display:none}@media only screen and (min-width:992px){.slide-show .ss-arrows{display:block}}.slide-show .ss-arrow-left,.slide-show .ss-arrow-right{cursor:pointer}.slide-show .ss-arrow-left{float:left}.slide-show .ss-arrow-right{float:right}.slide-show .ss-images{position:relative;overflow:hidden;margin:auto;width:100%}.slide-show .ss-images-track{white-space:nowrap;width:inherit;height:inherit;transition:all .5s ease-out}.slide-show .ss-no-transition{transition-property:none}.slide-show .ss-slide-image{display:inline-block;text-align:center;vertical-align:top;transition:all .5s ease-out;width:inherit}.slide-show .ss-slide-image>img{width:inherit}.slide-show .ss-fixed-height .ss-slide-image{height:inherit;overflow:hidden}.slide-show .ss-fixed-height .ss-slide-image:before{content:"";margin-left:-100%}.slide-show .ss-fixed-height .ss-slide-image:after{content:"";margin-right:-100%}.slide-show .ss-fixed-height .ss-slide-image>img{width:auto;height:inherit}.slide-show .ss-thumbnails{overflow:hidden;margin:auto}.slide-show .ss-thumbnails-track{white-space:nowrap;transition:all .5s ease-out;text-align:center}.slide-show .ss-thumbnail{display:inline-block;width:20%;padding:3px;cursor:pointer}.slide-show .ss-thumbnail>img{max-width:100%;vertical-align:middle}.slide-show .ss-thumbnail>img.ss-active{outline:3px solid #337ab7}@media only screen and (min-width:768px){.slide-show .ss-thumbnail{width:15%}}',""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=i(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(i[r]=!0)}for(a=0;a<e.length;a++){var s=e[a];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],a=p[i.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](i.parts[r]);for(;r<i.parts.length;r++)a.parts.push(u(i.parts[r],t))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(u(i.parts[r],t));p[i.id]={id:i.id,refs:1,parts:s}}}}function a(e,t){for(var n=[],i={},a=0;a<e.length;a++){var r=e[a],s=t.base?r[0]+t.base:r[0],o=r[1],l=r[2],c=r[3],u={css:o,media:l,sourceMap:c};i[s]?i[s].parts.push(u):n.push(i[s]={id:s,parts:[u]})}return n}function r(e,t){var n=g(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=b[b.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function o(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),r(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),r(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,i,a,r;if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){};e.css=r}if(t.singleton){var c=y++;n=v||(v=o(t)),i=d.bind(null,n,c,!1),a=d.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),i=f.bind(null,n,t),a=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(t),i=h.bind(null,n),a=function(){s(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else a()}}function d(e,t,n,i){var a=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=k(t,a);else{var r=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function h(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t,n){var i=n.css,a=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||r)&&(i=w(i)),a&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var s=new Blob([i],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(s),o&&URL.revokeObjectURL(o)}var p={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),g=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),v=null,y=0,b=[],w=n(12);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=a(e,t);return i(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var o=n[s],l=p[o.id];l.refs--,r.push(l)}if(e){i(a(e,t),t)}for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete p[l.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a))return e;var r;return r=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:i+a.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}}])});

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-show */ "./node_modules/react-image-show/build/index.js");
/* harmony import */ var react_image_show__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_show__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Raul\\Desktop\\projects\\ReactJS\\valencia\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //Carrusel



const Index = props => {
  const urlArray = ["https://cdn.pixabay.com/photo/2018/09/30/19/03/railway-station-3714297__340.jpg", "https://i.ytimg.com/vi/HEkpbJYyv6k/maxresdefault.jpg"];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "HomePage"), __jsx(react_image_show__WEBPACK_IMPORTED_MODULE_1___default.a, {
    images: urlArray,
    width: "920px",
    imagesWidth: "800px",
    imagesHeight: "450px",
    imagesHeightMobile: "56vw",
    thumbnailsWidth: "920px",
    thumbnailsHeight: "12vw",
    indicators: true,
    thumbnails: true,
    fixedImagesHeight: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

Index.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7252cae7d4b26b36c388.hot-update.js.map