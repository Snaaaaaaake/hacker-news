(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{74:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),i=n(17),s=n(23),o=n(22),l=n.n(o),u=(n(74),n(9)),d=n(29),h=n(58),j=n(51),m=n(99),f=n(80),b=n(100),p=n(96),x=n(94),O=n(20),g=n.n(O),S=n(49),v=n(35);function E(e,t){return e.length===t.length&&(0===e.length||e.every((function(e,n){return e===t[n]})))}var C=function(){return{type:"FETCH_LIST_REQUEST"}},y=function(e){return{type:"FETCH_LIST_SUCCESS",payload:e}},w=function(e){return{type:"FETCH_LIST_FAILURE",payload:e}},A=function(e){return{type:"SAVE_IDS",payload:e}},T=function(){return{type:"FETCH_SINGLE_NEWS_REQUEST"}},N=function(e){return{type:"FETCH_SINGLE_NEWS_SUCCESS",payload:e}},L=function(){return{type:"FETCH_COMMENTS_REQUEST"}},k=function(e){return{type:"FETCH_COMMENTS_SUCCESS",payload:e}},_=function(e){return{type:"FETCH_COMMENTS_FAILURE",payload:e}},I=function(e,t,n,r,c){return function(a,i){function s(e){return o.apply(this,arguments)}function o(){return(o=Object(v.a)(g.a.mark((function t(n){var r,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getListFromIds(n);case 3:return r=t.sent,c=r.map(function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.kids.length>0)){e.next=4;break}return e.next=3,s(t.kids);case 3:t.extendedKids=e.sent;case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.abrupt("return",Promise.all(c));case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}s(n).then((function(e){if(!t.canceled){var n=i().commentsState.comments.map((function(t){return t.id===r&&(t.extendedKids=e),t}));a(k(n)),c(null)}})).catch((function(e){return a(_(e))}))}},R=Object(c.createContext)(),F=n(92),H=n(93);function U(e){return e<10?"0".concat(e):"".concat(e)}function M(e){var t=new Date(1e3*e);return"".concat(U(t.getDate()),".").concat(U(t.getMonth()+1),".").concat(t.getFullYear()," \u0432 ").concat(t.getHours(),":").concat(U(t.getMinutes()))}var D=Object(x.a)((function(e){return{cardRoot:{minWidth:300,border:"none",background:"none"},cardContainer:{padding:5},itemText:{"text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden"},title:{color:e.palette.primary.main}}})),Q=function(e){var t=e.item,n=e.style,c=D();return t?Object(r.jsx)(F.a,{className:c.cardRoot,style:n,variant:"outlined",children:Object(r.jsxs)(H.a,{className:c.cardContainer,children:[Object(r.jsx)(s.b,{color:"primary",className:c.itemText,to:"/".concat(t.id),children:Object(r.jsx)(f.a,{title:t.title,className:"".concat(c.itemText," ").concat(c.title),variant:"h6",component:"h2",children:t.title})}),Object(r.jsxs)(f.a,{className:c.itemText,variant:"body2",children:["\u0410\u0432\u0442\u043e\u0440: ",t.by," | \u0414\u0430\u0442\u0430: ",M(t.time)," | \u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",t.score]})]})},t.id):null},W=Object(x.a)({container:{display:"flex",justifyContent:"center",margin:"50px 0"},text:{color:"red"}}),P=function(e){var t=W();return Object(r.jsx)(m.a,{className:t.container,children:Object(r.jsxs)(f.a,{variant:"h5",component:"h5",className:t.text,children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",e.error.message]})})},G=n(95),K=Object(x.a)({marginContainer:{display:"flex",justifyContent:"center",margin:"50px 0"}}),q=function(){var e=K();return Object(r.jsx)(m.a,{className:e.marginContainer,children:Object(r.jsx)(G.a,{})})},V=n(40),z=n(55),B=n(59),Y=n(57),J=function(e){Object(B.a)(n,e);var t=Object(Y.a)(n);function n(){var e;return Object(V.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(z.a)(n,[{key:"render",value:function(){return this.state.hasError?(console.log("\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442"),Object(r.jsx)(P,{error:this.state.hasError})):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:e}}}]),n}(c.Component),X=Object(x.a)({subtitle:{paddingLeft:5},divider:{margin:"10px 0"},listContainer:{flexGrow:1,"@media (max-height:608px)":{minHeight:"100vh"}},button:{padding:"0 0 0 5px",marginLeft:5},disabled:{"@media (max-width:767px)":{display:"none"}},flexContainer:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}),Z={fetchListThunkAction:function(e,t){return function(n){var r=[];function c(e){return a.apply(this,arguments)}function a(){return(a=Object(v.a)(g.a.mark((function a(i){var s,o;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=i.slice(r.length,r.length+e.packLength).map((function(t){return e.getSingleItem(t)})),a.next=4,Promise.all(s);case 4:o=a.sent,t.canceled||(r=[].concat(Object(S.a)(r),Object(S.a)(o)),n(y(r)),r.length<e.listLength&&c(i)),a.next=11;break;case 8:throw a.prev=8,a.t0=a.catch(0),a.t0;case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))).apply(this,arguments)}n({type:"FETCH_LIST_REQUEST"}),e.getRawList().then((function(t){var r=t.slice(0,e.listLength);n(A(r)),c(r)})).catch((function(e){return n(w(e))}))}},fetchListRequestAction:C,fetchShadowReloadListThunkAction:function(e,t){return function(n,r){e.getRawList().then(function(){var c=Object(v.a)(g.a.mark((function c(a){var i,s,o;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(c.prev=0,i=a.slice(0,e.listLength),s=r().listState.ids,E(i,s)||t.canceled){c.next=9;break}return c.next=6,e.getListFromIds(i);case 6:o=c.sent,n(y(o)),n(A(i));case 9:c.next=14;break;case 11:throw c.prev=11,c.t0=c.catch(0),c.t0;case 14:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(e){return c.apply(this,arguments)}}()).catch((function(e){return n(w(e))}))}}},$=Object(i.b)((function(e){return{listState:e.listState}}),Z)((function(e){var t=Object(c.useContext)(R),n=Object(c.useState)(!1),a=Object(d.a)(n,2),i=a[0],s=a[1],o=X(),l=e.fetchListThunkAction,u=e.fetchListRequestAction,x=e.fetchShadowReloadListThunkAction,O=e.listState,g=O.list,S=O.error,v=O.isLoading;return Object(c.useEffect)((function(){var e={canceled:!1};return l(t,e),function(){u(),e.canceled=!0}}),[i,l,u,t]),Object(c.useEffect)((function(){var e={canceled:!1},n=setInterval((function(){return x(t,e)}),6e4);return function(){clearInterval(n),e.canceled=!0}}),[i,x,t]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(m.a,{className:o.flexContainer,children:[Object(r.jsx)(f.a,{variant:"subtitle1",component:"h6",className:o.subtitle,children:"\u0412\u0430\u0448 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u043a\u0440\u0443\u0442\u044b\u0445 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439!"}),Object(r.jsxs)(m.a,{display:"flex",children:[Object(r.jsx)(f.a,{variant:"subtitle1",component:"h6",color:"textSecondary",className:"".concat(o.subtitle,", ").concat(o.disabled),children:"\u041f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0441\u0430\u043c\u044b\u0435 \u043d\u043e\u0432\u044b\u0435, \u043d\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435"}),Object(r.jsx)(b.a,{color:"primary",className:o.button,onClick:function(){return s(!i)},disabled:v,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})]})]}),Object(r.jsx)(p.a,{className:o.divider}),S?Object(r.jsx)(P,{error:S}):v?Object(r.jsx)(q,{}):Object(r.jsx)(m.a,{className:o.listContainer,children:Object(r.jsx)(j.a,{children:function(e){var t=e.height,n=e.width;return Object(r.jsx)(h.a,{height:t,width:n>360?n:360,itemSize:85,itemCount:g.length,children:function(e){var t=e.index,n=e.style;return Object(r.jsx)(J,{children:Object(r.jsx)(Q,{item:g[t],style:n})})}})}})})]})})),ee=n(42),te=n.n(ee),ne=n(97),re=n(102),ce=Object(x.a)({rootContainer:{margin:"10px 0"},commentaryContainer:{display:"flex"},arrowContainer:{display:"flex",alignItems:"center",marginRight:10,background:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkCAIAAADITs03AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAClSURBVChTVZDbDUMxCEMp2X+ltoPx6DHkfjQSAhNjnNj38/bs8krzKnKHt+pUTVQSDYccYCvuywOuEUkIV18O3EoyeDOhe/VvL6k1q3159WfP7JAP1eIHta3+40P74AW4YzWFK6QLd3joGv1nbt63XnXX4EztBDPbepc0pE9ef+t1OcRwbm/m747rq0r/Bmd0pRPzr4/H0ZHn7OP+Ou1+rO3/mP0AJZgL7l01iawAAAAASUVORK5CYII=",") left top no-repeat"),backgroundSize:"1px 50%"},childrenContainer:function(e){return{marginLeft:e.depth<10?25:0}},arrow:{lineHeight:"1px"},button:{marginLeft:25,padding:0,textTransform:"none",fontWeight:"normal"},spinner:{margin:"10px 0 10px 25px"}}),ae={fetchCommentTreeThunkAction:I},ie=Object(i.b)((function(e){return{commentsState:e.commentsState}}),ae)((function e(t){var n=t.comment,c=t.extendHandler,a=t.isExtended,i=t.closeHandler,s=t.depth,o=ce({depth:s});return!n||n.deleted?null:Object(r.jsxs)(m.a,{className:o.rootContainer,children:[Object(r.jsxs)(m.a,{className:o.commentaryContainer,children:[Object(r.jsx)(m.a,{className:o.arrowContainer,children:Object(r.jsx)(f.a,{variant:"body2",component:"p",className:o.arrow,children:"\u2192"})}),Object(r.jsxs)(m.a,{className:o.commentaryBody,children:[Object(r.jsx)(f.a,{variant:"body2",component:"span",children:Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:te.a.sanitize(n.text)}})}),Object(r.jsxs)(f.a,{variant:"subtitle2",component:"p",color:"textSecondary",children:["\u041e\u0442 ",n.by,", ",M(n.time)]})]})]}),n.kids.length>0&&(n.extendedKids?Object(r.jsxs)(r.Fragment,{children:[i&&Object(r.jsx)(b.a,{className:o.button,onClick:i,color:"primary",children:"\u0421\u043a\u0440\u044b\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u044b"}),Object(r.jsx)(m.a,{className:o.childrenContainer,children:n.extendedKids.map((function(t){return Object(r.jsx)(e,{comment:t,depth:s+1},t.id)}))})]}):a?Object(r.jsx)(re.a,{className:o.spinner}):Object(r.jsx)(b.a,{className:o.button,onClick:c,color:"primary",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u044b"}))]})})),se={fetchCommentsRequestAction:L,fetchCommentListThunkAction:function(e,t,n){return function(r){r({type:"FETCH_COMMENTS_REQUEST"}),n?e.getListFromIds(n).then((function(e){t.canceled||r(k(e))})).catch((function(e){return r(_(e))})):r(k([]))}},fetchCommentTreeThunkAction:I,removeCommentTreeThunkAction:function(e){return function(t,n){var r=n().commentsState.comments.map((function(t){return t.id===e&&delete t.extendedKids,t}));t(k(r))}}},oe=Object(i.b)((function(e){return{singleNewsState:e.singleNewsState,commentsState:e.commentsState}}),se)((function(e){var t=Object(c.useContext)(R),n=Object(c.useState)(null),a=Object(d.a)(n,2),i=a[0],s=a[1],o=e.fetchCommentsRequestAction,l=e.fetchCommentListThunkAction,u=e.fetchCommentTreeThunkAction,h=e.removeCommentTreeThunkAction,j=e.commentsState,m=j.comments,f=j.error,b=j.isLoading,p=e.singleNewsState.news;return Object(c.useEffect)((function(){var e={canceled:!1};return l(t,e,p.kids),function(){o(),e.canceled=!0}}),[l,o,t,p.kids]),Object(c.useEffect)((function(){var e={canceled:!1};return i&&u(t,e,i.kids,i.id,s),function(){return e.canceled=!0}}),[i,u,t]),f?Object(r.jsx)(P,{error:f}):b?Object(r.jsx)(q,{}):m.map((function(e){var t=i&&i.id===e.id;return Object(r.jsx)(J,{children:Object(r.jsx)(ie,{extendHandler:function(){return s(e)},closeHandler:function(){return h(e.id)},isExtended:t,comment:e,depth:0})},e.id)}))})),le=Object(x.a)({divider:{margin:"10px 0"},link:{marginTop:10},button:{marginLeft:5},flexContainer:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}),ue={fetchSingleNewsRequestAction:T,fetchSingleNewsThunkAction:function(e,t,n){return function(r){e.getSingleItem(n).then((function(e){t.canceled||r(N(e))})).catch((function(e){return r({type:"FETCH_SINGLE_NEWS_FAILURE",payload:e})}))}},fetchShadowReloadCommentListThunkAction:function(e,t){return function(n,r){var c=r().singleNewsState.news;e.getSingleItem(c.id).then((function(e){c.descendants===e.descendants||t.canceled||n(N(e))}))}}},de=Object(i.b)((function(e){return{singleNewsState:e.singleNewsState}}),ue)((function(e){var t=Object(c.useContext)(R),n=Object(c.useState)(!1),a=Object(d.a)(n,2),i=a[0],s=a[1],o=Object(u.g)(),l=Object(u.f)(),h=le(),j=e.fetchSingleNewsThunkAction,x=e.fetchSingleNewsRequestAction,O=e.fetchShadowReloadCommentListThunkAction,g=e.singleNewsState,S=g.news,v=g.error,E=g.isLoading;return Object(c.useEffect)((function(){var e={canceled:!1};return j(t,e,o.id),function(){x(),e.canceled=!0}}),[i,j,x,t,o.id]),Object(c.useEffect)((function(){var e={canceled:!1},n=setInterval((function(){return O(t,e)}),6e4);return function(){clearInterval(n),e.canceled=!0}}),[i,t,O]),v?Object(r.jsx)(P,{error:v}):E||!S?Object(r.jsx)(q,{}):"story"!==S.type?Object(r.jsx)(P,{error:new Error("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441!")}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.a,{className:h.divider}),Object(r.jsxs)(m.a,{className:h.flexContainer,children:[Object(r.jsx)(f.a,{variant:"h4",component:"h2",children:S.title}),Object(r.jsx)(b.a,{className:h.button,color:"primary",onClick:function(){return l.push("/")},children:"\u041d\u0430\u0437\u0430\u0434"})]}),S.text&&Object(r.jsx)(f.a,{variant:"body1",component:"span",children:Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:te.a.sanitize(S.text)}})}),S.url&&Object(r.jsx)(ne.a,{className:h.link,target:"_blank",variant:"subtitle2",href:S.url,children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u043d\u043e\u0432\u043e\u0441\u0442\u0438"}),Object(r.jsxs)(f.a,{variant:"subtitle2",component:"p",color:"textSecondary",children:["\u0410\u0432\u0442\u043e\u0440 ",S.by,", \u0434\u0430\u0442\u0430 ",M(S.time)]}),Object(r.jsx)(p.a,{className:h.divider}),Object(r.jsxs)(m.a,{className:h.flexContainer,children:[Object(r.jsxs)(f.a,{variant:"subtitle1",component:"p",children:["\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 (",S.descendants,")"]}),Object(r.jsx)(b.a,{className:h.button,color:"primary",onClick:function(){return s(!i)},children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"})]}),Object(r.jsx)(oe,{})]})})),he=function(){return Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/",exact:!0,children:Object(r.jsx)($,{})}),Object(r.jsx)(u.a,{path:"/:id",exact:!0,children:Object(r.jsx)(de,{})}),Object(r.jsx)(u.a,{path:"/:id",children:Object(r.jsx)(P,{error:new Error("404: \u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b!")})})]})},je=n(30),me=n(56),fe=n(21),be={list:[],ids:[],error:null,isLoading:!0},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LIST_REQUEST":return Object(fe.a)(Object(fe.a)({},e),{},{list:[],error:null,isLoading:!0});case"FETCH_LIST_SUCCESS":return Object(fe.a)(Object(fe.a)({},e),{},{list:t.payload,error:null,isLoading:!1});case"FETCH_LIST_FAILURE":return Object(fe.a)(Object(fe.a)({},e),{},{list:[],error:t.payload,isLoading:!1});case"SAVE_IDS":return Object(fe.a)(Object(fe.a)({},e),{},{ids:t.payload});default:return e}},xe={news:null,error:null,isLoading:!0},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SINGLE_NEWS_REQUEST":return{news:null,error:null,isLoading:!0};case"FETCH_SINGLE_NEWS_SUCCESS":return{news:t.payload,error:null,isLoading:!1};case"FETCH_SINGLE_NEWS_FAILURE":return{news:null,error:t.payload,isLoading:!1};default:return e}},ge={comments:[],error:null,isLoading:!0},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COMMENTS_REQUEST":return{comments:[],error:null,isLoading:!0};case"FETCH_COMMENTS_SUCCESS":return{comments:t.payload,error:null,isLoading:!1};case"FETCH_COMMENTS_FAILURE":return{comments:[],error:t.payload,isLoading:!1};default:return e}},ve=Object(je.d)(Object(je.c)({listState:pe,singleNewsState:Oe,commentsState:Se}),Object(je.a)(me.a));function Ee(e){if(e.ok)return e.json();throw new Error(e.status)}function Ce(e){if(e)return e;throw new Error("404: \u043d\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b!")}function ye(e){return e.kids||(e.kids=[]),e}var we=n(98),Ae=n(78),Te=n.p+"static/media/backgroundImage.2466819e.jpg",Ne=Object(x.a)({root:{minHeight:"100%",display:"flex",padding:0},paper:{margin:5,flexGrow:1,padding:"5px 10px",display:"flex",flexDirection:"column",backgroundImage:"url(".concat(Te,")"),backgroundRepeat:"repeat",minWidth:360},title:{color:"black",textDecoration:"none","white-space":"nowrap"}}),Le=function(e){var t=Ne();return Object(r.jsx)(we.a,{maxWidth:"md",className:t.root,children:Object(r.jsxs)(Ae.a,{className:t.paper,elevation:3,children:[Object(r.jsx)(s.b,{to:"/",className:t.title,title:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e",children:Object(r.jsx)(f.a,{variant:"h2",component:"h1",className:t.title,children:"Hacker News"})}),e.children]})})},ke=new function e(){var t=this;Object(V.a)(this,e),this.getRawList=function(){return fetch("".concat(t.apiUrl,"/v0/newstories.json")).then(Ee)},this.getSingleItem=function(e){return fetch("".concat(t.apiUrl,"/v0/item/").concat(e,".json")).then(Ee).then(Ce).then(ye)},this.getListFromIds=function(e){var n=e.map((function(e){return t.getSingleItem(e)}));return Promise.all(n)},this.apiUrl="https://hacker-news.firebaseio.com/",this.packLength=10,this.listLength=100};l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(R.Provider,{value:ke,children:Object(r.jsx)(i.a,{store:ve,children:Object(r.jsx)(s.a,{basename:"/hacker-news",children:Object(r.jsx)(Le,{children:Object(r.jsx)(he,{})})})})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.1640cc43.chunk.js.map