(this.webpackJsonpbin_calc=this.webpackJsonpbin_calc||[]).push([[0],[,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(0),s=t(1),r=t.n(s),u=t(4),a=t.n(u),i=(t(10),t(2));t(11),t(12);var j=function(e){var n=e.setNumber,t=e.name;return Object(c.jsx)("input",{className:"num1"===t?"input-num1":"input-num2",inputMode:"numeric",pattern:"[0-1]*",placeholder:0,onChange:function(e){return n(e.currentTarget.value)},style:{textAlign:"center"}})};var l=function(e){var n=e.text,t=e.setValue;return Object(c.jsx)("button",{type:"button",onClick:function(){return t(n)},children:n})};var m=function(e,n,t){return"+"===t?Number(e)+Number(n):"-"===t?Number(e)-Number(n):void 0};t(13);var b=function(e){var n=e.num1,t=e.num2,s=e.calc,r=m(n,t,s);return Object(c.jsxs)("p",{className:"result-calc",children:[Object(c.jsx)("span",{className:"result-num1",children:"".concat(n," ")}),Object(c.jsx)("span",{children:"".concat(s," ")}),Object(c.jsx)("span",{className:"result-num2",children:"".concat(t," ")}),Object(c.jsx)("span",{children:"= "}),Object(c.jsx)("span",{className:"result-total",children:"".concat(r)})]})};var o=function(e){return parseInt(e,2)||0};var d=function(e){return"unsigned"===e.sign?Object(c.jsx)("h1",{children:"Unsigned"}):Object(c.jsx)("h1",{children:"Signed"})};var x=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Feature"}),Object(c.jsx)("p",{children:"Under"}),Object(c.jsx)("hr",{}),Object(c.jsx)("p",{children:"Development"})]})};t(14);var O=function(e,n){var t=e;if(t.length<n)for(var c=n-t.length,s=0;s<c;s+=1)t="0".concat(t);return t};var h=function(e,n){return e.length>n||parseInt(e,2)<0?"overflow!":O(e,n)};var g=function(e){return e.split("")};var p=function(e,n){for(var t=g(e).map(Number),c=g(n).map(Number),s=[],r=!1,u=Math.max(e.length,n.length)-1;u>=0;u-=1)s[u]=r?"*":"\xa0",r=t[u]+c[u]+r>1;return s.join("").toString()};var f=function(e,n){for(var t=g(e).map(Number),c=g(n).map(Number),s=[],r=!1,u=Math.max(e.length,n.length)-1;u>=0;u-=1)s[u]=r?"*":"\xa0",r=t[u]-c[u]-r<0;return s.join("").toString()};var N=function(e){var n=e.num1,t=e.num2,r=e.setNum1,u=e.setNum2,a=e.calc,i=Math.max(n.length,t.length);Object(s.useEffect)((function(){r(O(n,i)),u(O(t,i))}));var j=m(o(n),o(t),a).toString(2),l=h(j,i),b="+"===a?p(n,t):f(n,t);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"section-calc",children:[Object(c.jsx)("p",{className:"unsigned-carried-numbers",children:b}),Object(c.jsx)("p",{className:"unsigned-num1",children:n}),Object(c.jsxs)("p",{className:"unsigned-num2",children:[Object(c.jsx)("span",{className:"unsigned-calc",children:a}),t]}),Object(c.jsx)("hr",{}),Object(c.jsx)("p",{className:"unsigned-result",children:l})]}),Object(c.jsx)("p",{className:"unsigned-stars",children:"+"===a?b.includes("*")?"*carried":null:b.includes("*")?"*borrowed":null})]})};var v=function(e){var n=e.num1,t=e.num2,s=e.setNum1,r=e.setNum2,u=e.calc,a=e.sign;return Object(c.jsx)(c.Fragment,{children:"unsigned"===a?Object(c.jsx)(N,{setNum1:s,setNum2:r,num1:n,num2:t,calc:u,sign:a}):Object(c.jsx)(x,{setNum1:s,setNum2:r,num1:n,num2:t,calc:u,sign:a})})};var S=function(){var e=Object(s.useState)("0"),n=Object(i.a)(e,2),t=n[0],r=n[1],u=Object(s.useState)("0"),a=Object(i.a)(u,2),m=a[0],x=a[1],O=Object(s.useState)("+"),h=Object(i.a)(O,2),g=h[0],p=h[1],f=Object(s.useState)("unsigned"),N=Object(i.a)(f,2),S=N[0],F=N[1];return Object(c.jsxs)("main",{className:"main-content",children:[Object(c.jsx)(d,{sign:S}),Object(c.jsx)(j,{setNumber:r,name:"num1"}),Object(c.jsx)(j,{setNumber:x,name:"num2"}),Object(c.jsx)("br",{}),Object(c.jsx)(l,{text:"+",setValue:p}),Object(c.jsx)(l,{text:"-",setValue:p}),Object(c.jsx)("br",{}),Object(c.jsx)(l,{text:"unsigned",setValue:F}),Object(c.jsx)(l,{text:"signed",setValue:F}),Object(c.jsx)(b,{num1:o(t),num2:o(m),calc:g}),t&&m?Object(c.jsx)(v,{setNum1:r,setNum2:x,num1:t,num2:m,calc:g,sign:S}):null]})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,r=n.getLCP,u=n.getTTFB;t(e),c(e),s(e),r(e),u(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),F()}],[[15,1,2]]]);
//# sourceMappingURL=main.889bc1bf.chunk.js.map