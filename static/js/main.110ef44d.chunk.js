(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},135:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),c=n(11),l=n(8),u=(n(89),n(91),n(93),n(95),n(170)),s=n(173),m=n(174),p=n(175),d=n(176),f=n(177),h=n(2),g=n(20),v=n(9),y=n(166),b=n(29),E=Object(y.a)(function(e){return{appBar:Object(v.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(v.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(v.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}}),w=function(e){var t=e.totalItems,n=E(),a=Object(h.j)();return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{position:"fixed",className:n.appBar,color:"inherit"},r.a.createElement(s.a,null,r.a.createElement(m.a,{component:g.b,to:"/",variant:"h6",className:n.title,color:"inherit"},r.a.createElement("img",{src:"./logo192.png",alt:"Art Agency",height:"25px",className:n.image}),"ARTKO. Art Agency"),r.a.createElement("div",{className:n.grow}),"/"==a.pathname&&r.a.createElement("div",{className:n.button},r.a.createElement(p.a,{component:g.b,to:"/cart","aria-label":"Show items in the cart",color:"inherit"},r.a.createElement(d.a,{badgeContent:t,color:"secondary"},r.a.createElement(f.a,null))))))):r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{position:"fixed",className:n.appBar,color:"inherit"},r.a.createElement(s.a,null,r.a.createElement(m.a,{component:g.b,to:"/",variant:"h6",className:n.title,color:"inherit"},r.a.createElement("img",{src:"./logo192.png",alt:"Art Agency",height:"25px",className:n.image}),"ARTKO. Art Agency"),r.a.createElement("div",{className:n.grow}))))},x=n(179),j=n(180),O=n(181),k=n(182),C=n(183),N=Object(y.a)(function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}}),L=function(e){var t=e.product,n=e.onAddToCart,a=N();return r.a.createElement(x.a,{className:a.root},r.a.createElement(j.a,{className:a.media,image:t.image.url,title:t.name}),r.a.createElement(O.a,null,r.a.createElement("div",{className:a.cardContent},r.a.createElement(m.a,{variant:"body1",gutterBottom:!0},t.name),r.a.createElement(m.a,{variant:"body1"},t.price.formatted_with_code)),r.a.createElement(m.a,{variant:"body2",color:"textSecondary"},t.description)),r.a.createElement(k.a,{disableSpacing:!0,className:a.cardActions},r.a.createElement(p.a,{"aria-label":"Add to Cart",onClick:function(){return n(t.id,1)}},r.a.createElement(C.a,null))))},A=n(184),_=Object(y.a)(function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}}),S=function(e){var t=e.products,n=e.onAddToCart,a=_();return r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(A.a,{container:!0,justifyContent:"center",spacing:4},t.map(function(e){return r.a.createElement(A.a,{item:!0,key:e.id,xs:12,sm:6,md:4,lg:3},r.a.createElement(L,{product:e,onAddToCart:n}))})))},T=n(185),B=n(186),F=Object(y.a)(function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}}),R=function(e){var t=e.item,n=e.onUpdateCartQty,a=e.onRemoveFromCart,o=F();return r.a.createElement(x.a,null,r.a.createElement(j.a,{image:t.image.url,alt:t.name,className:o.media}),r.a.createElement(O.a,{className:o.cardContent},r.a.createElement(m.a,{variant:"body1"},t.name),r.a.createElement(m.a,{variant:"body1"},t.line_total.formatted_with_symbol)),r.a.createElement(k.a,{className:o.cardActions},r.a.createElement("div",{className:o.buttons},r.a.createElement(T.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity-1)}},"-"),r.a.createElement(m.a,null,t.quantity),r.a.createElement(T.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity+1)}},"+")),r.a.createElement(T.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return a(t.id)}},"Remove")))},q=Object(y.a)(function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(t={minWidth:"150px"},Object(v.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(v.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}}),G=function(e){var t=e.cart,n=e.handleEmptyCart,a=e.handleUpdateCartQty,o=e.handleRemoveFromCart,i=q();if(t.line_items)return r.a.createElement(B.a,null,r.a.createElement("div",{className:i.toolbar}),r.a.createElement(m.a,{className:i.title,variant:"h6"},"Your Shopping cart"),t.line_items.length?r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{container:!0,justifyContent:"center",spacing:4},t.line_items.map(function(e){return r.a.createElement(A.a,{item:!0,xs:12,sm:6,md:4,lg:3,key:e.id},r.a.createElement(R,{item:e,onUpdateCartQty:a,onRemoveFromCart:o,onEmptyCart:n}))})),r.a.createElement("div",{className:i.CartDetails},r.a.createElement(m.a,{variant:"body1"},"Subtotal:",t.subtotal.formatted_with_symbol),r.a.createElement("div",null,r.a.createElement(T.a,{className:i.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:n},"Empty cart"),r.a.createElement(T.a,{component:g.b,to:"/checkout",className:i.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary"},"Checkout"))))},null):r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(m.a,{variant:"subtitle1"},"You have no items in the cart! "),r.a.createElement(m.a,{variant:"body1",component:g.b,to:"/"},"Add"))},null))},I=n(171),P=n(192),D=n(187),z=n(191),Q=Object(y.a)(function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(v.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(v.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(v.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}}),U=n(36),W=n(188),Y=function(e){var t=e.name,n=e.label,a=(e.required,Object(U.d)().control);return r.a.createElement(A.a,{item:!0,xs:12,sm:6},r.a.createElement(U.a,{control:a,name:t,render:function(e){return e.field,r.a.createElement(W.a,{fullWidth:!0,label:n,required:!0})}}))},J=function(){var e=Object(U.c)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"h6",gutterBottom:!0,color:"textSecondary"},"Adresa de livrare"),r.a.createElement(U.b,e,r.a.createElement("form",{onSubmit:""},r.a.createElement(A.a,{container:!0,spacing:3},r.a.createElement(Y,{required:!0,name:"numeFamilie",label:"Nume"}),r.a.createElement(Y,{required:!0,name:"prenume",label:"Prenume"}),r.a.createElement(Y,{required:!0,name:"adresa",label:"Adresa"}),r.a.createElement(Y,{required:!0,name:"email",label:"Email"}),r.a.createElement(Y,{required:!0,name:"oras",label:"Oras"}),r.a.createElement(Y,{required:!0,name:"codPostal",label:"Cod Postal"})))))},K=function(){return r.a.createElement("div",null,"Aceasta sectiune nu este activa.")},H=["Adresa livrare","Detalii de plata","Confirmare","Plata"],M=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],o=(t[1],Q());return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o.toolbar}),r.a.createElement("main",{className:o.layout},r.a.createElement(I.a,{className:o.paper},r.a.createElement(m.a,{variant:"h4",align:"center"},"Plata"),r.a.createElement(P.a,{activeStep:n,className:o.stepper},H.map(function(e){return r.a.createElement(D.a,{key:e},r.a.createElement(z.a,null,e))})),n===H.length?r.a.createElement(function(){return r.a.createElement("div",null,"Aceasta sectiune nu este activa.")},null):r.a.createElement(function(){return 0==n?r.a.createElement(J,null):r.a.createElement(K,null)},null))))},V=(n(100),n(73)),X=new(n.n(V).a)("pk_test_498868a74f961ef9967756f3e9a82ea9294dbe1ac9f93",!0);function Z(){Z=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),c=new k(r||[]);return a(i,"_invoke",{value:w(e,n,c)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var m={};function p(){}function d(){}function f(){}var h={};l(h,o,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(C([])));v&&v!==t&&n.call(v,o)&&(h=v);var y=f.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t(function(r,i){!function a(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){a("next",e,i,c)},function(e){a("throw",e,i,c)}):t.resolve(m).then(function(e){u.value=e,i(u)},function(e){return a("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}})}function w(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return N()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function C(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=f,a(y,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:d,configurable:!0}),d.displayName=l(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new E(u(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=C,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var $=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)({}),u=Object(l.a)(i,2),s=u[0],m=u[1],p=function(){var e=Object(c.a)(Z().mark(function e(){var t,n;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.products.list();case 2:t=e.sent,n=t.data,o(n);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(Z().mark(function e(){return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,X.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(Z().mark(function e(t,n){var a;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.cart.add(t,n);case 2:a=e.sent,m(a);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(Z().mark(function e(t,n){var a;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.cart.update(t,{quantity:n});case 2:a=e.sent,m(a);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(Z().mark(function e(t){var n;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.cart.remove(t);case 2:n=e.sent,m(n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(Z().mark(function e(){var t;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.cart.empty();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){p(),d()},[]),r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(w,{totalItems:s.total_items}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",element:r.a.createElement(S,{products:n,onAddToCart:f})}),r.a.createElement(h.a,{exact:!0,path:"/cart",element:r.a.createElement(G,{cart:s,handleUpdateCartQty:v,handleRemoveFromCart:y,handleEmptyCart:b})}),r.a.createElement(h.a,{exact:!0,path:"/checkout",element:r.a.createElement(M,null)})))))};n(135);i.a.render(r.a.createElement($,null),document.getElementById("root"))},82:function(e,t,n){e.exports=n(138)},89:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){}},[[82,2,1]]]);
//# sourceMappingURL=main.110ef44d.chunk.js.map