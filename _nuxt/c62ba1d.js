(window.webpackJsonp=window.webpackJsonp||[]).push([[17,11,12],{332:function(t,e,r){var content=r(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("5bc0b736",content,!0,{sourceMap:!1})},333:function(t,e,r){var map={"./carousel-1.jpg":334,"./carousel-2.jpg":335};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=333},334:function(t,e,r){t.exports=r.p+"img/carousel-1.b12425d.jpg"},335:function(t,e,r){t.exports=r.p+"img/carousel-2.301712d.jpg"},336:function(t,e,r){"use strict";r(332)},337:function(t,e,r){var n=r(61)((function(i){return i[1]}));n.push([t.i,".carousel-text span{position:relative;margin-bottom:0.75rem;display:block;font-weight:700;text-transform:uppercase;letter-spacing:2px;--tw-text-opacity:1;color:rgba(17, 24, 39, var(--tw-text-opacity));opacity:0;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:500ms}.carousel-text h2{position:relative;margin-bottom:1.75rem;font-size:2.625rem;line-height:1.375;--tw-text-opacity:1;color:rgba(17, 24, 39, var(--tw-text-opacity));opacity:0;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:700ms}.carousel-text .btn-florist{position:relative;opacity:0;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:1000ms}.carousel-item.active .carousel-text .btn-florist, .carousel-item.active .carousel-text h2, .carousel-item.active .carousel-text span{top:0px;opacity:1}",""]),n.locals={},t.exports=n},338:function(t,e,r){"use strict";r.r(e);r(336);var n=r(3),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel carousel-fade carousel-dark slide",attrs:{id:"myCarousel","data-bs-ride":"carousel"}},[n("div",{staticClass:"carousel-indicators"},t._l(2,(function(t){return n("button",{key:t,class:{active:1==t},attrs:{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":t-1,"aria-label":"Slide "+t,"aria-current":1==t}})})),0),t._v(" "),n("div",{staticClass:"carousel-inner"},t._l(2,(function(e){return n("div",{key:e,staticClass:"carousel-item",class:{active:1==e},attrs:{"data-bs-interval":"4000"}},[n("div",{staticClass:"set-bg tw-h-[550px]",style:{backgroundImage:"url("+r(333)("./carousel-"+e+".jpg")+")"}}),t._v(" "),n("div",{staticClass:"carousel-caption"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-5"},[n("div",{staticClass:"carousel-text text-start"},[n("span",{staticClass:"tw-top-[100px]"},[t._v(t._s(t.$t("hero.title")))]),t._v(" "),n("h2",{staticClass:"tw-top-[200px]"},[t._v("\n                  "+t._s(t.$tc("hero.subTitle",e))+"\n                ")]),t._v(" "),n("NuxtLink",{staticClass:"btn-florist tw-top-[400px]",attrs:{to:t.localePath(t.$tc("hero.href",e))}},[t._v("\n                  "+t._s(t.$tc("hero.btnText",e))+"\n                ")])],1)])])])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},339:function(t,e,r){"use strict";r.r(e);var n=r(3),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tw-py-7.5"},[r("div",{staticClass:"container tw-pt-7.5"},[r("div",{staticClass:"row"},t._l(t.$t("benefitItems"),(function(e){return r("div",{key:e.id,staticClass:"col-sm-6 col-md-6 col-lg-3"},[r("div",{staticClass:"tw-pb-7.5 tw-pl-7.5 sm:tw-pl-0 tw-overflow-hidden"},[r("div",{staticClass:"tw-float-left tw-mr-5"},[r("img",{attrs:{src:"img/benefit/benefit-"+e.id+".png"}})]),t._v(" "),r("div",{staticClass:"tw-overflow-hidden"},[r("h4",{staticClass:"tw-mb-2.5 tw-text-gray-900 hover:tw-text-pink-500"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),r("p",{staticClass:"tw-mb-0"},[t._v(t._s(e.content))])])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({}),o=r(3),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("TheCarousel"),t._v(" "),r("TheBenefits")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheCarousel:r(338).default,TheBenefits:r(339).default})}}]);