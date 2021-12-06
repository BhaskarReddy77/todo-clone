(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{28:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(18),i=c.n(s),d=(c(28),c(5)),r=c(13),j=c(0),l=function(e){var t=e.selectedTab,c=e.setSelectedTab;return console.log({selectedTab:t}),Object(j.jsxs)("div",{className:"main-side",children:[Object(j.jsxs)("div",{onClick:function(){return c("INBOX")},className:"inbox",children:[" ",Object(j.jsx)(r.a,{className:"icon"})," Inbox"]}),Object(j.jsxs)("div",{onClick:function(){return c("TODAY")},className:"today",children:[" ",Object(j.jsx)(r.c,{className:"icon"}),"Today"]}),Object(j.jsxs)("div",{onClick:function(){return c("NEXT_7")},className:"next7",children:[" ",Object(j.jsx)(r.b,{className:"icon"}),"Next 7 days"]})]})},b=c(17),o=c(12),A=(c(30),c(19)),O=c.n(A),u=(c(39),c(20)),m=c(21),x=c(22),h=c(23),f="dd/MM/yyyy";function v(e,t,c){return Object(o.a)(e,t,{locale:c})}var k=function(e){var t=e.onCancel,c=e.onAddTask,a=Object(n.useState)(""),s=Object(d.a)(a,2),i=s[0],r=s[1],l=Object(n.useState)(null),b=Object(d.a)(l,2),A=b[0],u=b[1];return Object(j.jsxs)("div",{className:"add-task-dialog",children:[Object(j.jsx)("input",{value:i,onChange:function(e){return r(e.target.value)}}),Object(j.jsxs)("div",{className:"add-task-actions-container",children:[Object(j.jsxs)("div",{className:"btns-container",children:[Object(j.jsx)("button",{disabled:!i,className:"add-btn",onClick:function(){c(i,A),t(),r("")},children:"Add Task"}),Object(j.jsx)("button",{className:"cancel-btn",onClick:function(){t(),r("")},children:"Cancel"})]}),Object(j.jsx)("div",{className:"icon-container",children:Object(j.jsx)(O.a,{onDayChange:function(e){return u(e)},placeholder:"".concat(Object(o.a)(new Date,f)),formatDate:v,format:f,dayPickerProps:{modifiers:{disabled:[{before:new Date}]}}})})]})]})},N={INBOX:"Inbox",TODAY:"Today",NEXT_7:"Next 7 Days"},T=function(e){var t=e.selectedTab,c=e.tasks,n=Object(b.a)(c);return"NEXT_7"===t&&(n=n.filter((function(e){return Object(u.a)(e.date,new Date)&&Object(m.a)(e.date,Object(x.a)(new Date,7))}))),"TODAY"===t&&(n=n.filter((function(e){return Object(h.a)(e.date)}))),Object(j.jsx)("div",{className:"task-item-container",children:n.map((function(e){return Object(j.jsxs)("div",{className:"task-item",children:[Object(j.jsx)("p",{children:e.text}),Object(j.jsx)("p",{children:Object(o.a)(new Date(e.date),f)})]})}))})},p=function(e){var t=e.selectedTab,c=Object(n.useState)(!1),a=Object(d.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)([]),l=Object(d.a)(r,2),o=l[0],A=l[1];return Object(j.jsxs)("div",{className:"tasks",children:[Object(j.jsx)("h1",{children:N[t]}),"INBOX"===t?Object(j.jsxs)("div",{className:"add-task-btn",onClick:function(){return i((function(e){return!e}))},children:[Object(j.jsx)("span",{className:"plus",children:"+"}),Object(j.jsx)("span",{className:"add-task-text",children:"Add Task"})]}):null,s&&Object(j.jsx)(k,{onAddTask:function(e,t){var c={text:e,date:t||new Date};A((function(e){return[].concat(Object(b.a)(e),[c])}))},onCancel:function(){return i(!1)}}),o.length>0?Object(j.jsx)(T,{tasks:o,selectedTab:t}):Object(j.jsx)("p",{children:"No Task Yet"})]})},g=function(){var e=Object(n.useState)("INBOX"),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(j.jsx)("div",{children:Object(j.jsxs)("section",{className:"content",children:[Object(j.jsx)(l,{selectedTab:c,setSelectedTab:a}),Object(j.jsx)(p,{selectedTab:c})]})})},I=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("nav",{children:Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("h2",{className:"heading",children:"To-Do-List"}),Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"TodoList",className:"logo-image"})]})})})};c(40);var D=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(I,{}),Object(j.jsx)(g,{})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.594a50c4.chunk.js.map