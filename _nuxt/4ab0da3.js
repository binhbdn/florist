(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{352:function(t,n,e){var content=e(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("823aa3f2",content,!0,{sourceMap:!1})},382:function(t,n,e){"use strict";e(352)},383:function(t,n,e){var o=e(54)((function(i){return i[1]}));o.push([t.i,".fl-login{padding-top:30px;padding-bottom:30px}@media only screen and (min-width:992px){.fl-login{padding-top:50px;padding-bottom:50px}}.fl-login .noticed{max-width:800px;margin:0 auto;padding:40px;background:#f7f5fa;border-radius:10px;box-shadow:0 0 15px #555}.fl-login .noticed .main-part{max-width:400px;margin:0 auto;text-align:center;border-radius:5px}.fl-login .noticed .main-part .method-account .login{margin-bottom:26px;color:#111827;font-weight:700;font-size:30px;line-height:40px}@media only screen and (min-width:768px){.fl-login .noticed .main-part .method-account .login{font-size:40px;line-height:50px}}.fl-login .noticed .main-part .method-account label{color:#505050;font-weight:600;font-size:15px;line-height:30px}.fl-login .noticed .main-part .method-account input{display:block;width:100%;height:45px;margin-bottom:30px;padding:10px 18px;color:#505050;font-weight:400;font-size:15px;border:1px solid #ddd;border-radius:5px;box-shadow:inset 0 0 15px #ddd}.fl-login .noticed .main-part .method-account input:focus{border-color:#f45d96}.fl-login .noticed .main-part .method-account span{padding-left:10px;color:#505050;font-weight:600;font-size:15px;line-height:30px}.fl-login .noticed .main-part .method-account .btn-florist{margin-bottom:12px;border:none}.fl-login .noticed .main-part .method-account .users p{margin:0;color:#505050}.fl-login .noticed .main-part .method-account .users p a{color:#ff5421;font-weight:600;font-size:15px;line-height:26px}.fl-login .noticed .main-part .method-account .users p a:hover{color:#505050}",""]),o.locals={},t.exports=o},414:function(t,n,e){"use strict";e.r(n);e(37),e(12),e(28),e(42),e(22),e(23),e(43),e(44),e(24);var o=e(4);e(41);function r(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){d=!0,r=t},f:function(){try{c||null==e.return||e.return()}finally{if(d)throw r}}}}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var c={name:"TheLogin",data:function(){return{usernameOrEmail:"",password:""}},methods:{login:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===t.usernameOrEmail||""===t.password){n.next=5;break}return n.next=3,t.$axios.$get("/61549ead9548541c29bad6ae/latest").then((function(n){var e,o=r(n.record);try{for(o.s();!(e=o.n()).done;){var l=e.value;if((l.username===t.usernameOrEmail||l.email===t.usernameOrEmail)&&l.password===t.password){t.$store.commit("updateSignInStatus",!0);break}}}catch(t){o.e(t)}finally{o.f()}t.$store.state.isSignedIn?t.$nuxt.context.from.path===t.localePath("/")||t.$nuxt.context.from.path===t.$route.path?t.$router.push(t.localePath("/")):t.$router.go(-1):alert(t.$t("alert.logInFail"))})).catch((function(t){return console.log(t)}));case 3:n.next=6;break;case 5:alert(t.$t("alert.noEmptyUsernamePassword"));case 6:case"end":return n.stop()}}),n)})))()}}},d=(e(382),e(2)),component=Object(d.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fl-login"},[e("div",{staticClass:"container"},[e("div",{staticClass:"noticed"},[e("div",{staticClass:"main-part"},[e("div",{staticClass:"method-account"},[e("h2",{staticClass:"login"},[t._v(t._s(t.$t("nav.signIn")))]),t._v(" "),e("form",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.usernameOrEmail,expression:"usernameOrEmail"}],attrs:{type:"text",name:"username_email",placeholder:t.$t("account.userName")+" | "+t.$t("account.emailAddress"),required:""},domProps:{value:t.usernameOrEmail},on:{input:function(n){n.target.composing||(t.usernameOrEmail=n.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:t.$t("account.password"),required:""},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}}),t._v(" "),e("button",{staticClass:"btn-florist",attrs:{type:"button"},on:{click:t.login}},[t._v("\n              "+t._s(t.$t("nav.signIn"))+"\n            ")]),t._v(" "),e("div",{staticClass:"users"},[e("p",[t._v("\n                "+t._s(t.$t("account.haveNotRegisteredYet"))+"\n                "),e("NuxtLink",{attrs:{to:t.localePath("/dang-ky")}},[t._v("\n                  "+t._s(t.$t("account.createNewAccount"))+"\n                ")])],1)])])])])])])])}),[],!1,null,null,null);n.default=component.exports}}]);