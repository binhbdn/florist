(window.webpackJsonp=window.webpackJsonp||[]).push([[32,3,23],{335:function(t,e,r){var content=r(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("8ab74692",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},338:function(t,e,r){"use strict";r(335)},339:function(t,e,r){var o=r(59),n=r(336),l=r(340),c=o((function(i){return i[1]})),d=n(l);c.push([t.i,".breadcrumb{padding:52px 0 60px;background-image:url("+d+')}.breadcrumb__text h2{padding-bottom:10px;color:#111827;font-weight:400;font-size:50px}.breadcrumb__links a{position:relative;display:inline-block;margin-right:28px;color:#ec4899;font-size:16px;text-transform:uppercase}.breadcrumb__links a:after{position:absolute;top:-1px;right:-18px;color:#aeaeae;content:"|"}.breadcrumb__links span{display:inline-block;color:#111827;font-size:16px;text-transform:uppercase}',""]),c.locals={},t.exports=c},340:function(t,e,r){t.exports=r.p+"img/breadcrumb-bg.12629eb.jpg"},341:function(t,e,r){"use strict";r.r(e);r(338);var o=r(3),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumb set-bg"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 text-center"},[r("div",{staticClass:"breadcrumb__text"},[r("h2",[t._t("default")],2),t._v(" "),r("div",{staticClass:"breadcrumb__links"},[t._t("links"),t._v(" "),r("span",[t._t("endpoint")],2)],2)])])])])])}),[],!1,null,null,null);e.default=component.exports},344:function(t,e,r){var content=r(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("b911ad92",content,!0,{sourceMap:!1})},368:function(t,e,r){"use strict";r(344)},369:function(t,e,r){var o=r(59)((function(i){return i[1]}));o.push([t.i,'.register-section{position:relative;padding-top:50px;padding-bottom:50px}.register-section .register-box{position:relative;max-width:500px;margin:0 auto;padding:45px 40px 35px;background:#f7f5fa;border-radius:10px;box-shadow:0 0 15px #555}.register-section .register-box .sec-title{margin-bottom:30px}.styled-form{max-width:600px;margin:0 auto}.styled-form,.styled-form .form-group{position:relative}.styled-form .form-group label{position:relative;margin-bottom:15px;color:#626262;font-weight:400;font-size:16px}.styled-form .form-group input{position:relative;width:100%;height:50px;padding:6px 30px;color:#222;font-size:16px;border:1px solid #ddd;border-radius:5px;box-shadow:inset 0 0 15px #ddd;transition:all .5s ease}.styled-form .form-group input:focus{border-color:#f45d96}.styled-form .form-group .users{position:relative;color:#626262;font-size:16px;text-align:center}.styled-form .form-group .users a{position:relative;color:#ff5421;font-weight:600}.styled-form .form-group .users a:hover{color:#505050}.styled-form input[required=required]:focus+.placeholder,.styled-form input[required=required]:valid+.placeholder{display:none}.styled-form .placeholder{position:absolute;top:12px;left:46px;color:#111827;font-weight:nomal;font-size:16px;line-height:inherit;background-color:transparent}.styled-form .placeholder span:after{color:red;content:"(*)"}html[lang=vi] .register-section input#fname:hover+.placeholder span:after{content:"(*) = không được bỏ trống"}html[lang=vi] .register-section input#password:hover+.placeholder span:after{content:"(*) ≥8 ký tự, ≥1 in hoa, ≥1 số"}html[lang=en] .register-section input#fname:hover+.placeholder span:after{content:"(*) = not be empty"}html[lang=en] .register-section input#password:hover+.placeholder span:after{content:"(*) ≥8 characters, ≥1 uppercase, ≥1 number"}html[lang=ja] .register-section input#fname:hover+.placeholder span:after{content:"(*) = 空ではない"}html[lang=ja] .register-section input#password:hover+.placeholder span:after{content:"(*) ≥8 文字, ≥1 大文字, ≥1 数字"}',""]),o.locals={},t.exports=o},395:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{password:""}},methods:{registerFormSubmit:function(){/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(this.password)?alert("Password hợp lệ"):alert("Password không hợp lệ")}}},n=(r(368),r(3)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"register-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"register-box"},[r("div",{staticClass:"sec-title text-center"},[r("h2",{staticClass:"title"},[t._v(t._s(t.$t("account.createNewAccount")))])]),t._v(" "),r("div",{staticClass:"styled-form"},[r("div",{attrs:{id:"form-messages"}}),t._v(" "),r("form",{attrs:{id:"contact-form",novalidate:""}},[r("div",{staticClass:"row clearfix"},[r("div",{staticClass:"form-group col-lg-12 mb-3"},[r("input",{attrs:{id:"fname",type:"text",name:"fname",required:"required"},on:{focus:function(t){return t.target.select()}}}),t._v(" "),r("span",{staticClass:"placeholder"},[t._v("\n                "+t._s(t.$t("account.fName"))+" "),r("span")])]),t._v(" "),r("div",{staticClass:"form-group col-lg-12 mb-3"},[r("input",{attrs:{id:"lname",type:"text",name:"lname",required:"required"},on:{focus:function(t){return t.target.select()}}}),t._v(" "),r("span",{staticClass:"placeholder"},[t._v("\n                "+t._s(t.$t("account.lName"))+" "),r("span")])]),t._v(" "),r("div",{staticClass:"form-group col-lg-12 mb-3"},[r("input",{attrs:{id:"email",type:"email",name:"email",required:"required"},on:{focus:function(t){return t.target.select()}}}),t._v(" "),r("span",{staticClass:"placeholder"},[t._v("\n                "+t._s(t.$t("account.emailAddress"))+" "),r("span")])]),t._v(" "),r("div",{staticClass:"form-group col-lg-12 mb-3"},[r("input",{attrs:{id:"username",type:"text",name:"username",required:"required"},on:{focus:function(t){return t.target.select()}}}),t._v(" "),r("span",{staticClass:"placeholder"},[t._v("\n                "+t._s(t.$t("account.userName"))+" "),r("span")])]),t._v(" "),r("div",{staticClass:"form-group col-lg-12 mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"password",name:"password",required:"required"},domProps:{value:t.password},on:{focus:function(t){return t.target.select()},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("span",{staticClass:"placeholder"},[t._v("\n                "+t._s(t.$t("account.password"))+" "),r("span")])]),t._v(" "),r("div",{staticClass:"form-group col-lg-12 mb-4"},[r("input",{attrs:{id:"confirm_password",type:"password",name:"confirm_password",required:"required"},on:{focus:function(t){return t.target.select()}}}),t._v(" "),r("span",{staticClass:"placeholder"},[t._v("\n                "+t._s(t.$t("account.confirmPassword"))+" "),r("span")])]),t._v(" "),r("div",{staticClass:"form-group col-lg-12 col-md-12 col-sm-12 text-center"},[r("button",{staticClass:"btn-florist border-0 mb-3",attrs:{type:"button"},on:{click:t.registerFormSubmit}},[t._v("\n                "+t._s(t.$t("nav.register"))+"\n              ")])]),t._v(" "),r("div",{staticClass:"form-group col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"users"},[t._v("\n                "+t._s(t.$t("account.alreadyHaveAccount"))+"\n                "),r("NuxtLink",{attrs:{to:t.localePath("/dang-nhap")}},[t._v("\n                  "+t._s(t.$t("nav.signIn"))+"\n                ")])],1)])])])])])])])}),[],!1,null,null,null);e.default=component.exports},424:function(t,e,r){"use strict";r.r(e);var o={nuxtI18n:{paths:{vn:"/dang-ky",en:"/register",ja:"/register"}},head:function(){return{title:"Florist | ".concat(this.$t("nav.register"))}}},n=r(3),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("AppBreadcrumb",{scopedSlots:t._u([{key:"links",fn:function(){return[r("NuxtLink",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.$t("nav.home")))])]},proxy:!0},{key:"endpoint",fn:function(){return[t._v(t._s(t.$t("nav.register")))]},proxy:!0}])},[t._v("\n    "+t._s(t.$t("account.myAccount"))+"\n    ")]),t._v(" "),r("TheRegister")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppBreadcrumb:r(341).default,TheRegister:r(395).default})}}]);