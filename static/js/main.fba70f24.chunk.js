(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(2),l=a.n(r),o=a(3),u=a(4),i=a(6),s=a(5),m=a(7),b=(a(13),function(t){var e=t.tab,a=function(t){var a=t.target;document.querySelector(".tab-selected").className="tab",a.className="tab tab-selected";var n=e.find(function(e){return e.title===t.target.value});document.querySelector(".output").innerText=n.content};return c.a.createElement("section",{className:"tabcontain"},e.map(function(t,e){return 0===e?c.a.createElement("input",{type:"button",key:t.title,className:"tab tab-selected",onClick:a,value:t.title}):c.a.createElement("input",{type:"button",key:t.title,className:"tab",onClick:a,value:t.title})}),c.a.createElement("hr",{className:"hr"}),c.a.createElement("div",{className:"output"},e[0].content))}),p=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(c)))).state={tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}]},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state.tabs;return c.a.createElement("div",{className:"App"},c.a.createElement(b,{tab:t}))}}]),e}(c.a.Component);l.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.fba70f24.chunk.js.map