(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[16],{481:function(e){e.exports=JSON.parse("{}")},519:function(e,t,s){"use strict";s.r(t),s.d(t,"UserList",(function(){return z}));var n=s(2),c=s(24),a=s.n(c),r=s(91),i=s(81),l=s(82),d=s(102),o=s(99),j=s(0),u=s(263),b=s(187),m=s(105),h=s(517),x=s(515),p=s(523),O=s(231),v=s(476),f=(s(480),s(429)),N=s(460),y=s(437),g=s(521),k=s(444),U=s(442),w=s(522),C=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this.props,t=e.data,s=e.visible,c=e.close;return Object(n.jsxs)(f.a,{width:300,placement:"right",onClose:c,closable:!1,visible:s,children:[Object(n.jsx)("div",{className:"text-center mt-3",children:Object(n.jsx)("h3",{className:"mt-2 mb-0",children:null===t||void 0===t?void 0:t.name})}),Object(n.jsx)(N.a,{dashed:!0}),Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(n.jsxs)("p",{children:[Object(n.jsx)(y.a,{}),Object(n.jsxs)("span",{className:"ml-3 text-dark",children:["id: ",null===t||void 0===t?void 0:t.id]})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(g.a,{}),Object(n.jsxs)("span",{className:"ml-3 text-dark",children:["\u0421\u0430\u0439\u0442: ",Object(n.jsx)("a",{children:null===t||void 0===t?void 0:t.website})]})]})]}),Object(n.jsxs)("div",{className:"mt-5",children:[Object(n.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(n.jsxs)("p",{children:[Object(n.jsx)(k.a,{}),Object(n.jsx)("span",{className:"ml-3 text-dark",children:null===t||void 0===t?void 0:t.phone})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(U.a,{}),Object(n.jsx)("span",{className:"ml-3 text-dark",children:(null===t||void 0===t?void 0:t.email)?null===t||void 0===t?void 0:t.email:"-"})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(w.a,{}),Object(n.jsxs)("span",{className:"ml-3 text-dark",children:[null===t||void 0===t?void 0:t.address.city,", ",null===t||void 0===t?void 0:t.address.street]})]})]}),Object(n.jsxs)("div",{className:"mt-5",children:[Object(n.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),Object(n.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(n.jsx)("b",{children:null===t||void 0===t?void 0:t.company.name})]}),Object(n.jsxs)("p",{children:["\u0421\u043b\u043e\u0433\u0430\u043d: ",Object(n.jsx)("b",{children:null===t||void 0===t?void 0:t.company.catchPhrase})]}),Object(n.jsxs)("p",{children:["\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438: ",Object(n.jsx)("b",{children:null===t||void 0===t?void 0:t.company.bs})]})]})]})}}]),s}(j.Component),P=(s(17),s(502),function(e){var t=e.name,s=e.subTitle,c=e.id,a=e.src,r=e.onNameClick;return Object(n.jsx)("div",{className:"avatar-status d-flex align-items-center",children:Object(n.jsxs)("div",{className:"ml-2",children:[Object(n.jsx)("div",{children:r?Object(n.jsx)("div",{onClick:function(){return r({name:t,subTitle:s,src:a,id:c})},className:"avatar-status-name clickable",children:t}):Object(n.jsx)("div",{className:"avatar-status-name",children:t})}),Object(n.jsx)("div",{className:"text-muted avatar-status-subtitle",children:s})]})})}),S=(s(481),s(455)),L=s.n(S),I=(L.a.create({baseURL:"https://jsonplaceholder.typicode.com"}),s(42)),V=s(103),z=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={users:null,userProfileVisible:!1,selectedUser:null},e.getUsers=Object(r.a)(a.a.mark((function t(){var s,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=L.a.get("https://jsonplaceholder.typicode.com/users"),t.next=3,s;case 3:n=t.sent.data,e.setState({users:n});case 5:case"end":return t.stop()}}),t)}))),e.deleteUser=function(t){e.setState({users:e.state.users.filter((function(e){return e.id!==t}))}),u.b.success({content:"Deleted user ".concat(t),duration:2})},e.showUserProfile=function(t){e.setState({userProfileVisible:!0,selectedUser:t})},e.closeUserProfile=function(){e.setState({userProfileVisible:!1,selectedUser:null})},e.routeChange=function(t){e.props.history.push({pathname:"/app/clients/settings",state:t})},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this,t=this.state,s=t.users,c=t.userProfileVisible,a=t.selectedUser,r=[{title:"User",dataIndex:"name",render:function(e,t){return Object(n.jsx)("div",{className:"d-flex",children:Object(n.jsx)(P,{src:t.img,name:t.name,subTitle:t.email})})},sorter:{compare:function(e,t){return(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}}},{title:"Username",dataIndex:"username",sorter:{compare:function(e,t){return e.username.length-t.username.length}}},{title:"Phone number",dataIndex:"phone",render:function(e){return Object(n.jsxs)("span",{children:[e," "]})},sorter:{compare:function(e,t){return e.phone.length-t.phone.length}}},{title:"City",dataIndex:["address","city"],render:function(e){return Object(n.jsx)("span",{children:e})},sorter:{compare:function(e,t){return(e=e.address.city.toLowerCase())>(t=t.address.city.toLowerCase())?-1:t>e?1:0}}},{title:"",dataIndex:"actions",render:function(t,s){return Object(n.jsxs)("div",{className:"text-right",children:[Object(n.jsx)(b.a,{title:"Edit",children:Object(n.jsx)(m.a,{className:"mr-2",icon:Object(n.jsx)(p.a,{}),onClick:function(){e.routeChange(s)},size:"small"})}),Object(n.jsx)(b.a,{title:"View",children:Object(n.jsx)(m.a,{type:"primary",className:"mr-2",icon:Object(n.jsx)(O.a,{}),onClick:function(){e.showUserProfile(s)},size:"small"})}),Object(n.jsx)(b.a,{title:"Delete",children:Object(n.jsx)(m.a,{danger:!0,icon:Object(n.jsx)(v.a,{}),onClick:function(){e.deleteUser(s.id)},size:"small"})})]})}}];return Object(n.jsx)(n.Fragment,{children:null===s?Object(n.jsx)(V.a,{cover:"content"}):Object(n.jsxs)(h.a,{bodyStyle:{padding:"0px"},children:[Object(n.jsx)(x.a,{columns:r,dataSource:s,rowKey:"id"}),Object(n.jsx)(C,{data:a,visible:c,close:function(){e.closeUserProfile()}})]})})}}]),s}(j.Component);t.default=Object(I.h)(z)}}]);
//# sourceMappingURL=16.d640b455.chunk.js.map