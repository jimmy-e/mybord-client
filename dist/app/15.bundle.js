(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{743:function(n,e,t){var o=t(744);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(24)(o,r);o.locals&&(n.exports=o.locals)},744:function(n,e,t){(e=n.exports=t(23)(!0)).push([n.i,".buttonDiv___2RpvP {\n  display: flex;\n}\n.buttonDiv___2RpvP button {\n  height: 2.25rem;\n  justify-content: center;\n  width: 7.5rem;\n}\n.forgotButtonDiv___sOYry {\n  flex-direction: column;\n}\n.forgotButtonDiv___sOYry .ant-form-item {\n  margin-bottom: 0;\n}\n.forgotDiv___3Rq2g {\n  height: 0.5rem;\n}\n.loginDiv___34mt0 {\n  justify-content: space-between;\n}\n.rememberForgotDiv___5d6PS {\n  display: flex;\n  justify-content: space-between;\n}\n.signUpDiv___1_F4e {\n  justify-content: end;\n}\n","",{version:3,sources:["/Users/jemery/dev/mybord/src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormButtons.module.less"],names:[],mappings:"AAAA;EACE,cAAc;CACf;AACD;EACE,gBAAgB;EAChB,wBAAwB;EACxB,cAAc;CACf;AACD;EACE,uBAAuB;CACxB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;CAChB;AACD;EACE,+BAA+B;CAChC;AACD;EACE,cAAc;EACd,+BAA+B;CAChC;AACD;EACE,qBAAqB;CACtB",file:"loginFormButtons.module.less",sourcesContent:[".buttonDiv {\n  display: flex;\n}\n.buttonDiv button {\n  height: 2.25rem;\n  justify-content: center;\n  width: 7.5rem;\n}\n.forgotButtonDiv {\n  flex-direction: column;\n}\n.forgotButtonDiv :global .ant-form-item {\n  margin-bottom: 0;\n}\n.forgotDiv {\n  height: 0.5rem;\n}\n.loginDiv {\n  justify-content: space-between;\n}\n.rememberForgotDiv {\n  display: flex;\n  justify-content: space-between;\n}\n.signUpDiv {\n  justify-content: end;\n}\n"],sourceRoot:""}]),e.locals={buttonDiv:"buttonDiv___2RpvP",forgotButtonDiv:"forgotButtonDiv___sOYry",forgotDiv:"forgotDiv___3Rq2g",loginDiv:"loginDiv___34mt0",rememberForgotDiv:"rememberForgotDiv___5d6PS",signUpDiv:"signUpDiv___1_F4e"}},751:function(n,e,t){"use strict";var o=t(0),r=t(952);t(752);e.a=function(n){var e=n.checked,t=n.label,i=void 0===t?null:t,a=n.onChange;return i?o.createElement(r.a,{checked:e,onChange:a},i):o.createElement(r.a,{checked:e,onChange:a})}},752:function(n,e,t){n.exports={black:"#565E5F",blue:"#00A6ED",green:"#7DCC93",lightGrey:"#A4AAAF",orange:"#F17D00",purple:"#31355A",red:"#E41245",transparentBlack:"#565E5fA6",transparentWhite:"#FFFFFFBF",white:"#FFF",yellow:"#FCC900"}},835:function(n,e,t){var o=t(836);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(24)(o,r);o.locals&&(n.exports=o.locals)},836:function(n,e,t){(e=n.exports=t(23)(!0)).push([n.i,".a___1Ad4W {\n  text-decoration: none;\n}\n.button___D-qWR {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n}\n","",{version:3,sources:["/Users/jemery/dev/mybord/src/spa/shared/inputs/anchor/anchor.module.less"],names:[],mappings:"AAAA;EACE,sBAAsB;CACvB;AACD;EACE,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,cAAc;EACd,WAAW;CACZ",file:"anchor.module.less",sourcesContent:[".a {\n  text-decoration: none;\n}\n.button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n}\n"],sourceRoot:""}]),e.locals={a:"a___1Ad4W",button:"button___D-qWR"}},953:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t(17),i=t(835),a=function(n){var e=n.label,t=n.link,a=n.onClick;return t?o.createElement("a",{className:i.a,href:t},o.createElement(r.a,{color:"blue",text:e})):o.createElement("button",{className:i.button,onClick:a,type:"button"},o.createElement(r.a,{color:"blue",text:e}))},s=t(741),l=t(751),c=t(234),A=t(56),u=t(743);e.default=function(n){var e=n.form,t=Object(A.b)(),r=t.isAuthenticationWaiting,i=t.setFormStatus;return o.createElement(o.Fragment,null,o.createElement("div",{className:u.rememberForgotDiv},o.createElement(c.a,{fieldName:"remember-me",form:e},o.createElement(l.a,{label:"Remember Me"}))),o.createElement("div",{className:[u.buttonDiv,u.signUpDiv].join(" ")},o.createElement(c.a,{fieldName:"sign-up",form:e},o.createElement(s.a,{htmlType:"submit",isWaiting:r,label:"Sign Up",onClick:function(){return console.log("signing up user")},type:"primary"})),o.createElement(c.a,{fieldName:"back",form:e},o.createElement(a,{label:"back",onClick:function(){return i("login")}}))))}}}]);
//# sourceMappingURL=15.bundle.js.map