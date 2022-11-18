(window["webpackJsonpto-do-app"]=window["webpackJsonpto-do-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n(30)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),c=n.n(r),s=(n(21),n(2)),l=n(8),i=n(9),u=(n(22),function(e){return o.a.createElement("div",{className:"header shadow"},e.children)}),m=(n(23),function(e){var t=[{name:"all",content:"\u0412\u0441\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"},{name:"priority",content:"\u041f\u0435\u0440\u0448\u043e\u0447\u0435\u0440\u0433\u043e\u0432\u0456"},{name:"complete",content:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u0456"}].map((function(t){var n=t.name,a=t.content,r=e.filter===n?"btn-light":"btn-outline-light";return o.a.createElement("button",{className:"btn ".concat(r),type:"button",key:n,onClick:function(){return e.onFilterSelect(n)}},a)}));return o.a.createElement("div",{className:"btn-group mt-3"},t)}),d=n(4),f=n(5),p=n(7),h=n(6),b=(n(24),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onUpdate=function(e){var t=e.target.value;a.setState({row:t}),a.props.onUpdateSearch(t)},a.state={row:""},a}return Object(f.a)(n,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"\u041f\u043e\u0448\u0443\u043a \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f",value:this.state.row,onChange:this.onUpdate})}}]),n}(o.a.Component)),g=n(12),v=(n(25),function(e){var t="list-group-item d-flex justify-content-between";return e.asap&&(t+=" asap"),e.done&&(t+=" done"),o.a.createElement("li",{className:t},o.a.createElement("span",{tabIndex:"0",className:"list-group-item-label",onClick:e.onComplete,onKeyPress:function(t){"Enter"===t.key&&e.onComplete()}},e.task),o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("button",{type:"button",className:"btn-star btn-sm ",onClick:e.onProgress},o.a.createElement("i",{className:"fa-solid fa-star"})),o.a.createElement("button",{type:"button",className:"btn-trash btn-sm ",onClick:e.onRemove},o.a.createElement("i",{className:"fa-solid fa-trash-can"})),o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"40",width:"40",fill:"transparent"},o.a.createElement("path",{d:"m11.917 30.458-9.625-9.625L4.5 18.625 11.917 26l2.208 2.25Zm7.833-.25-9.625-9.625 2.25-2.25 7.375 7.375L35.5 9.958l2.25 2.25Zm0-8.125-2.25-2.25 9.917-9.875 2.208 2.209Z"}))))}),k=(n(26),["id"]),w=function(e){var t=e.data,n=e.onDelete,a=e.onToggleAsap,r=e.onToggleDone,c=t.map((function(e){var t=e.id,c=Object(g.a)(e,k);return o.a.createElement(v,Object.assign({key:t},c,{onRemove:function(){return n(t)},onProgress:function(){return a(t)},onComplete:function(){return r(t)}}))}));return o.a.createElement("ul",{className:"app-list list-group shadow"},c)},E=(n(27),n(28),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onValueChange=function(e){""===e.target.value?a.myRef.current.style.backgroundColor="":e.target.value.length<5||e.target.value.length>50||window.screen.width<500&&e.target.value.length>45?(a.myRef.current.style.backgroundColor="#ff6666",a.myRef.current.classList.remove("animate__animated","animate__shakeX")):a.myRef.current.style.backgroundColor="",a.setState({task:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.state.task.length<5||a.state.task.length>50||window.screen.width<500&&a.state.task.length>45?a.myRef.current.classList.add("animate__animated","animate__shakeX"):(a.myRef.current.classList.remove("animate__animated","animate__shakeX"),a.props.onAdd(a.state.task,Math.floor(993*Math.random()+7)),a.setState({task:""}))},a.state={task:""},a.myRef=o.a.createRef(),a}return Object(f.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"app-add-form shadow"},o.a.createElement("h3",null,"\u0414\u043e\u0434\u0430\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"),o.a.createElement("form",{className:"add-form mt-4 d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",ref:this.myRef,className:"form-control new-post-label",placeholder:"\u0422\u0438 \u0437\u043c\u043e\u0436\u0435\u0448 \u0432\u0441\u0435 :)",value:this.state.task,onChange:this.onValueChange}),o.a.createElement("button",{type:"submit",className:"btn btn-outline-light"},"\u0414\u043e\u0434\u0430\u0442\u0438")))}}]),n}(o.a.Component)),y=(n(29),function(){var e=JSON.parse(sessionStorage.getItem("tasks"))||[{task:"\u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u043e\u0432\u0443 \u043f\u043e\u043b\u0456\u0444\u043e\u043d\u0456\u0447\u043d\u0443 \u043f\u0430\u0440\u0442\u0456\u044e",asap:!1,done:!1,id:1},{task:"\u0437\u0432\u0435\u0441\u0442\u0438 \u043f\u0430\u0440\u043a\u0430\u043d \u043d\u0430\u0432\u043a\u043e\u043b\u043e \u0431\u0443\u0434\u0438\u043d\u043a\u0443",asap:!1,done:!0,id:2},{task:'\u043d\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u043f\u0440\u043e "\u0431\u0435\u0437 \u043c\u0435\u0436"',asap:!1,done:!1,id:3},{task:"\u0437\u043d\u0430\u0439\u0442\u0438 \u043d\u043e\u0432\u0438\u0445 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u0445 \u0434\u0443\u0440\u043d\u0456\u0432 \u0432 \u0441\u043e\u0446.\u043c\u0435\u0440\u0435\u0436\u0430\u0445",asap:!0,done:!1,id:4},{task:"\u0434\u043e\u043a\u0443\u043f\u0438\u0442\u0438 \u0440\u0435\u0448\u0442\u0443 \u0417\u041c\u0406",asap:!1,done:!1,id:5},{task:"\u0432\u0456\u0434\u043f\u043e\u0447\u0438\u0442\u0438 \u043d\u0430 \u041c\u0430\u043b\u044c\u0434\u0456\u0432\u0430\u0445, \u0431\u043e \u0432\u0442\u043e\u043c\u0438\u0432\u0441\u044f \u0432\u0456\u0434 \u043d\u043e\u0432\u0438\u043d",asap:!1,done:!1,id:6}],t=Object(a.useState)(e),n=Object(i.a)(t,2),r=n[0],c=n[1],d=Object(a.useState)(""),f=Object(i.a)(d,2),p=f[0],h=f[1],g=Object(a.useState)("all"),v=Object(i.a)(g,2),k=v[0],y=v[1];Object(a.useEffect)((function(){sessionStorage.setItem("tasks",JSON.stringify(r))}),[r]);var O=r.length,j=r.filter((function(e){if(!e.done)return e.asap})).length,N=function(e,t){switch(t){case"priority":return e.filter((function(e){if(!e.done)return e.asap}));case"complete":return e.filter((function(e){return e.done}));default:return e}}(function(e,t){return 0===t.length?e:e.filter((function(e){return e.task.indexOf(t)>-1}))}(r,p),k);return o.a.createElement("div",{className:"app shadow"},o.a.createElement(u,null,o.a.createElement("h1",null,"To-Do-List"),o.a.createElement("h2",null,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0437\u0430\u0432\u0434\u0430\u043d\u044c: ",O),o.a.createElement("h2",null,"\u041f\u0435\u0440\u0448\u043e\u0447\u0435\u0440\u0433\u043e\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f: ",j)),o.a.createElement("div",{className:"search shadow"},o.a.createElement(b,{onUpdateSearch:function(e){h(e)}}),o.a.createElement(m,{filter:k,onFilterSelect:function(e){y(e)}})),o.a.createElement(w,{data:N,onDelete:function(e){var t=r.filter((function(t){return t.id!==e}));c(t)},onToggleAsap:function(e){var t=r.findIndex((function(t){return t.id===e})),n=r[t],a=Object(s.a)(Object(s.a)({},n),{},{asap:!n.asap}),o=[].concat(Object(l.a)(r.slice(0,t)),[a],Object(l.a)(r.slice(t+1)));c(o)},onToggleDone:function(e){var t=r.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{done:!t.done}):t}));c(t)}}),o.a.createElement(E,{onAdd:function(e,t){var n={task:e,asap:!1,done:!1,id:t};c((function(e){return[].concat(Object(l.a)(e),[n])}))}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.ba58604d.chunk.js.map