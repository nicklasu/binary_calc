(this.webpackJsonpbin_calc=this.webpackJsonpbin_calc||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),u=n(4),a=n.n(u),j=(n(10),n(2));n(11);var i=function(e){return"unsigned"===e.sign?Object(c.jsx)("h1",{children:"Unsigned"}):Object(c.jsx)("h1",{children:"Signed"})};n(12);var l=function(e){var t=e.setNumber,n=e.name;return Object(c.jsx)("input",{className:"num1"===n?"input-num1":"input-num2",inputMode:"numeric",pattern:"[0-1]*",placeholder:0,onChange:function(e){return t(e.currentTarget.value)},style:{textAlign:"center"}})};var b=function(e){var t=e.text,n=e.setValue;return Object(c.jsx)("button",{type:"button",onClick:function(){return n(t)},children:t})};var m=function(e,t,n){return"+"===n?Number(e)+Number(t):"-"===n?Number(e)-Number(t):void 0};n(13);var o=function(e){var t=e.num1,n=e.num2,s=e.calc,r=m(t,n,s);return Object(c.jsxs)("p",{className:"result-calc",children:[Object(c.jsx)("span",{className:"result-num1",children:"".concat(t," ")}),Object(c.jsx)("span",{children:"".concat(s," ")}),Object(c.jsx)("span",{className:"result-num2",children:"".concat(n," ")}),Object(c.jsx)("span",{children:"= "}),Object(c.jsx)("span",{className:"result-total",children:"".concat(r)})]})};var O=function(e){return parseInt(e,2)||0};var x=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Feature"}),Object(c.jsx)("p",{children:"Under"}),Object(c.jsx)("hr",{}),Object(c.jsx)("p",{children:"Development"})]})};n(14);var d=function(e,t){var n=e;if(n.length<t)for(var c=t-n.length,s=0;s<c;s+=1)n="0".concat(n);return n};var g=function(e,t){return e.length>t||parseInt(e,2)<0?"overflow!":d(e,t)};var h=function(e){return e.split("")};var f=function(e,t){for(var n=h(e).map(Number),c=h(t).map(Number),s=[],r=!1,u=Math.max(e.length,t.length)-1;u>=0;u-=1)s[u]=r?"*":"\xa0",r=n[u]+c[u]+r>1;return s.join("").toString()};var v=function(e,t){for(var n=h(e).map(Number),c=h(t).map(Number),s=[],r=!1,u=Math.max(e.length,t.length)-1;u>=0;u-=1)s[u]=r?"*":"\xa0",r=n[u]-c[u]-r<0;return s.join("").toString()};var p=function(e){var t=e.num1,n=e.num2,r=e.setNum1,u=e.setNum2,a=e.calc,j=Math.max(t.length,n.length);Object(s.useEffect)((function(){r(d(t,j)),u(d(n,j))}));var i=m(O(t),O(n),a).toString(2),l=g(i,j),b="+"===a?f(t,n):v(t,n);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"section-calc",children:[Object(c.jsx)("p",{className:"unsigned-carried-numbers",children:b}),Object(c.jsx)("p",{className:"unsigned-num1",children:t}),Object(c.jsxs)("p",{className:"unsigned-num2",children:[Object(c.jsx)("span",{className:"unsigned-calc",children:a}),n]}),Object(c.jsx)("hr",{}),Object(c.jsx)("p",{className:"unsigned-result",children:l})]}),Object(c.jsx)("p",{className:"unsigned-stars",children:"+"===a?b.includes("*")?"*carried":null:b.includes("*")?"*borrowed":null})]})};var N=function(e){var t=e.num1,n=e.num2,s=e.setNum1,r=e.setNum2,u=e.calc,a=e.sign;return Object(c.jsx)(c.Fragment,{children:"unsigned"===a?Object(c.jsx)(p,{setNum1:s,setNum2:r,num1:t,num2:n,calc:u,sign:a}):Object(c.jsx)(x,{setNum1:s,setNum2:r,num1:t,num2:n,calc:u,sign:a})})};var S=function(){var e=Object(s.useState)("0"),t=Object(j.a)(e,2),n=t[0],r=t[1],u=Object(s.useState)("0"),a=Object(j.a)(u,2),i=a[0],m=a[1],x=Object(s.useState)("+"),d=Object(j.a)(x,2),g=d[0],h=d[1];return Object(c.jsxs)("section",{children:[Object(c.jsx)(l,{setNumber:r,name:"num1"}),Object(c.jsx)(l,{setNumber:m,name:"num2"}),Object(c.jsx)("br",{}),Object(c.jsx)(b,{text:"+",setValue:h}),Object(c.jsx)(b,{text:"-",setValue:h}),Object(c.jsx)("br",{}),Object(c.jsx)(o,{num1:O(n),num2:O(i),calc:g}),n&&i?Object(c.jsx)(N,{setNum1:r,setNum2:m,num1:n,num2:i,calc:g,sign:"unsigned"}):null]})};var F=function(e){var t=e.split("");if("1"!==t[0])return parseInt(t.join("").toString(),2);for(var n=0;n<t.length;n+=1)t[n]="1"===t[n]?"0":"1";return-1*parseInt(t.join("").toString(),2)-1};var V=function(){var e=Object(s.useState)("0"),t=Object(j.a)(e,2),n=t[0],r=t[1],u=Object(s.useState)("0"),a=Object(j.a)(u,2),i=a[0],m=a[1],O=Object(s.useState)("+"),x=Object(j.a)(O,2),d=x[0],g=x[1];return Object(c.jsxs)("section",{children:[Object(c.jsx)(l,{setNumber:r,name:"num1"}),Object(c.jsx)(l,{setNumber:m,name:"num2"}),Object(c.jsx)("br",{}),Object(c.jsx)(b,{text:"+",setValue:g}),Object(c.jsx)(b,{text:"-",setValue:g}),Object(c.jsx)("br",{}),Object(c.jsx)(o,{num1:F(n),num2:F(i),calc:d}),n&&i?Object(c.jsx)(N,{setNum1:r,setNum2:m,num1:n,num2:i,calc:d,sign:"signed"}):null]})};var I=function(){var e=Object(s.useState)("unsigned"),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("main",{className:"main-content",children:[Object(c.jsx)(i,{sign:n}),Object(c.jsx)(b,{text:"unsgnd",setValue:r}),Object(c.jsx)(b,{text:"signed",setValue:r}),"signed"===n?Object(c.jsx)(V,{}):Object(c.jsx)(S,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),c(e),s(e),r(e),u(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),C()}],[[15,1,2]]]);
//# sourceMappingURL=main.af1fa087.chunk.js.map