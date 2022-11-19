(window["webpackJsonpto-do-app"]=window["webpackJsonpto-do-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n(30)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),s=(n(21),n(3)),i=n(9),l=n(2),u=(n(22),function(e){return r.a.createElement("div",{className:"header shadow"},e.children)}),m=(n(23),function(e){var t=[{name:"all",content:"\u0412\u0441\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"},{name:"priority",content:"\u041f\u0435\u0440\u0448\u043e\u0447\u0435\u0440\u0433\u043e\u0432\u0456"},{name:"complete",content:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u0456"}].map((function(t){var n=t.name,a=t.content,o=e.filter===n?"btn-light":"btn-outline-light";return r.a.createElement("button",{className:"btn ".concat(o),type:"button",key:n,onClick:function(){return e.onFilterSelect(n)}},a)}));return r.a.createElement("div",{className:"btn-group mt-3"},t)}),d=n(5),f=n(6),p=n(8),h=n(7),b=(n(24),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onUpdate=function(e){var t=e.target.value;a.setState({row:t}),a.props.onUpdateSearch(t)},a.state={row:""},a}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"\u041f\u043e\u0448\u0443\u043a \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f",value:this.state.row,onChange:this.onUpdate})}}]),n}(r.a.Component)),g=n(12),v=(n(25),function(e){var t="list-group-item d-flex justify-content-between";return e.asap&&(t+=" asap"),e.done&&(t+=" done"),r.a.createElement("li",{className:t},r.a.createElement("span",{tabIndex:"0",className:"list-group-item-label",onClick:e.onComplete,onKeyPress:function(t){"Enter"===t.key&&e.onComplete()}},e.task),r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("button",{type:"button",className:"btn-star btn-sm ",onClick:e.onProgress},r.a.createElement("i",{className:"fa-solid fa-star"})),r.a.createElement("button",{type:"button",className:"btn-trash btn-sm ",onClick:e.onRemove},r.a.createElement("i",{className:"fa-solid fa-trash-can"})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"40",width:"40",fill:"transparent"},r.a.createElement("path",{d:"m11.917 30.458-9.625-9.625L4.5 18.625 11.917 26l2.208 2.25Zm7.833-.25-9.625-9.625 2.25-2.25 7.375 7.375L35.5 9.958l2.25 2.25Zm0-8.125-2.25-2.25 9.917-9.875 2.208 2.209Z"}))))}),k=(n(26),["id"]),w=function(e){var t=e.data,n=e.onDelete,a=e.onToggleAsap,o=e.onToggleDone,c=t.map((function(e){var t=e.id,c=Object(g.a)(e,k);return r.a.createElement(v,Object.assign({key:t},c,{onRemove:function(){return n(t)},onProgress:function(){return a(t)},onComplete:function(){return o(t)}}))}));return r.a.createElement("ul",{className:"app-list list-group shadow"},c)},E=(n(27),n(28),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onValueChange=function(e){""===e.target.value?a.myRef.current.style.backgroundColor="":e.target.value.length<5||e.target.value.length>50||window.screen.width<500&&e.target.value.length>33?(a.myRef.current.style.backgroundColor="#ff6666",a.myRef.current.classList.remove("animate__animated","animate__shakeX")):a.myRef.current.style.backgroundColor="",a.setState({task:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.state.task.length<5||a.state.task.length>50||window.screen.width<500&&a.state.task.length>33?a.myRef.current.classList.add("animate__animated","animate__shakeX"):(a.myRef.current.classList.remove("animate__animated","animate__shakeX"),a.props.onAdd(a.state.task),a.setState({task:""}))},a.state={task:""},a.myRef=r.a.createRef(),a}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-add-form shadow"},r.a.createElement("h3",null,"\u0414\u043e\u0434\u0430\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"),r.a.createElement("form",{className:"add-form mt-4 d-flex",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",ref:this.myRef,className:"form-control new-post-label",placeholder:"\u0422\u0438 \u0437\u043c\u043e\u0436\u0435\u0448 \u0432\u0441\u0435 :)",value:this.state.task,onChange:this.onValueChange}),r.a.createElement("button",{type:"submit",className:"btn btn-outline-light"},"\u0414\u043e\u0434\u0430\u0442\u0438")))}}]),n}(r.a.Component)),y=(n(29),function(){var e=JSON.parse(sessionStorage.getItem("tasks"))||[{task:"\u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u043e\u0432\u0443 \u043f\u043e\u043b\u0456\u0444\u043e\u043d\u0456\u0447\u043d\u0443 \u043f\u0430\u0440\u0442\u0456\u044e",asap:!1,done:!1,id:1},{task:"\u0437\u0432\u0435\u0441\u0442\u0438 \u043f\u0430\u0440\u043a\u0430\u043d \u043d\u0430\u0432\u043a\u043e\u043b\u043e \u0431\u0443\u0434\u0438\u043d\u043a\u0443",asap:!1,done:!0,id:2},{task:'\u043d\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u043f\u0440\u043e "\u0431\u0435\u0437 \u043c\u0435\u0436"',asap:!1,done:!1,id:3},{task:"\u0437\u043d\u0430\u0439\u0442\u0438 \u043d\u043e\u0432\u0438\u0445 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u0445 \u0434\u0443\u0440\u043d\u0456\u0432 \u0432 \u0441\u043e\u0446.\u043c\u0435\u0440\u0435\u0436\u0430\u0445",asap:!0,done:!1,id:4},{task:"\u0434\u043e\u043a\u0443\u043f\u0438\u0442\u0438 \u0440\u0435\u0448\u0442\u0443 \u0417\u041c\u0406",asap:!1,done:!1,id:5},{task:"\u0432\u0456\u0434\u043f\u043e\u0447\u0438\u0442\u0438 \u043d\u0430 \u041c\u0430\u043b\u044c\u0434\u0456\u0432\u0430\u0445, \u0431\u043e \u0432\u0442\u043e\u043c\u0438\u0432\u0441\u044f \u0432\u0456\u0434 \u043d\u043e\u0432\u0438\u043d",asap:!1,done:!1,id:6}],t=Object(a.useState)(e),n=Object(l.a)(t,2),o=n[0],c=n[1],d=Object(a.useState)(""),f=Object(l.a)(d,2),p=f[0],h=f[1],g=Object(a.useState)("all"),v=Object(l.a)(g,2),k=v[0],y=v[1],O=Object(a.useState)("7"),j=Object(l.a)(O,2),N=j[0],S=j[1];Object(a.useEffect)((function(){sessionStorage.setItem("tasks",JSON.stringify(o)),fetch("http://www.randomnumberapi.com/api/v1.0/randomstring?min=5&max=10&count=1&all=true").then((function(e){return e.json()})).then((function(e){return S(e)}))}),[o]);var C=o.length,_=o.filter((function(e){if(!e.done)return e.asap})).length,x=function(e,t){switch(t){case"priority":return e.filter((function(e){if(!e.done)return e.asap}));case"complete":return e.filter((function(e){return e.done}));default:return e}}(function(e,t){return 0===t.length?e:e.filter((function(e){return e.task.indexOf(t)>-1}))}(o,p),k);return r.a.createElement("div",{className:"app shadow"},r.a.createElement(u,null,r.a.createElement("h1",null,"To-Do-List"),r.a.createElement("h2",null,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0437\u0430\u0432\u0434\u0430\u043d\u044c: ",C),r.a.createElement("h2",null,"\u041f\u0435\u0440\u0448\u043e\u0447\u0435\u0440\u0433\u043e\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f: ",_)),r.a.createElement("div",{className:"search shadow"},r.a.createElement(b,{onUpdateSearch:function(e){h(e)}}),r.a.createElement(m,{filter:k,onFilterSelect:function(e){y(e)}})),r.a.createElement(w,{data:x,onDelete:function(e){var t=o.filter((function(t){return t.id!==e}));c(t)},onToggleAsap:function(e){var t=o.findIndex((function(t){return t.id===e})),n=o[t],a=Object(s.a)(Object(s.a)({},n),{},{asap:!n.asap}),r=[].concat(Object(i.a)(o.slice(0,t)),[a],Object(i.a)(o.slice(t+1)));c(r)},onToggleDone:function(e){var t=o.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{done:!t.done}):t}));c(t)}}),r.a.createElement(E,{onAdd:function(e){var t={task:e,asap:!1,done:!1,id:N};c((function(e){return[].concat(Object(i.a)(e),[t])}))}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.c35a2386.chunk.js.map