(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c.n(n),a=c(9),o=c.n(a),i=(c(77),c(78),c(143)),s=c(16),u=c(144),l=c(145),d=c(142),p=c(5),j=c(147),m=c(61),g=c.n(m),h=c(146),b=c(22),f=c(139),O=c(154),v=c(155),y=c(156),x=c(35),D=c.n(x),E=c(51),A=c(36),k=c.n(A),C="https://api-js401.herokuapp.com/api/v1",P=function(t){return{type:"GET_P",payload:t}},S=function(t){return{type:"GET_C",payload:t}},T=function(t){return{type:"ADD",payload:t}},w=function(t){return{type:"DELETE",payload:t}},G=c(4);function M(t){var e=Object(n.useState)(null),c=Object(b.a)(e,2),r=c[0],a=c[1],o=Object(s.d)((function(t){return{cart:t.cart}})),i=Object(s.c)(),u=function(){a(null)};return Object(G.jsxs)("div",{children:[Object(G.jsxs)(f.a,{"aria-controls":"simple-menu","aria-haspopup":"true",style:{display:"flex"},onClick:function(t){a(t.currentTarget)},children:["Cart (",o.cart.num,")"]}),Object(G.jsx)(O.a,{id:"simple-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:u,children:o.cart.cart.map((function(t){return Object(G.jsx)(v.a,{onClick:u,children:Object(G.jsx)(y.a,{label:"".concat(t.name," Item: ").concat(t.item),onDelete:function(){i(function(t){return function(){var e=Object(E.a)(D.a.mark((function e(c){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.put("".concat(C,"/products/").concat(t._id)).send({inStock:t.inStock+1}).then((function(){c(w(t))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(t))}})},t.id)}))})]})}var _=Object(p.a)((function(t){return{badge:{right:-3,top:13,border:"2px solid ".concat(t.palette.background.paper),padding:"0 4px"}}}))(d.a),F=Object(i.a)((function(t){return{root:{flexGrow:1},space:{justifyContent:"space-between"}}}));var N={getProducts:function(){return function(t){return k.a.get("".concat(C,"/products")).then((function(e){t(P({products:e.body.results}))}))}}},L=Object(s.b)((function(t){return console.log("STATE???",t),{acart:t.cart}}),N)((function(t){Object(n.useEffect)((function(){t.getProducts(),console.log("get",t.getProducts())}),[t]),console.log("header",t);var e=F();return Object(G.jsx)(u.a,{position:"static",style:{backgroundColor:"#3f51b5"},children:Object(G.jsxs)(l.a,{variant:"dense",className:e.space,children:[Object(G.jsx)(h.a,{variant:"h6",color:"inherit",children:"STORE"}),Object(G.jsxs)(j.a,{"aria-label":"cart",children:[Object(G.jsx)(M,{}),Object(G.jsx)(_,{color:"secondary",children:Object(G.jsx)(g.a,{})})]})]})})})),B=Object(i.a)((function(t){return{footer:{flexGrow:1}}}));function I(){var t=B();return Object(G.jsx)("div",{className:t.footer,children:Object(G.jsx)(u.a,{position:"static",children:Object(G.jsx)(l.a,{variant:"dense",children:Object(G.jsx)(h.a,{style:{textAlign:"center"},variant:"h6",color:"inherit",children:"\xa9Ayah Zaareer"})})})})}var z=function(t){return{type:"ADD",payload:t}},V=c(152),Y=c(153),H=c(148),J=c(149),Q=c(151),R=c(150),W=Object(i.a)({root:{maxWidth:300,border:"solid .1rem",margin:"2rem"}}),X={addProduct:z,updateRemoteData:function(t){return function(){var e=Object(E.a)(D.a.mark((function e(c){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.put("".concat(C,"/products/").concat(t._id)).send({inStock:t.inStock-1}).then((function(){c(T(t))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},Z=Object(s.b)((function(t){return console.log("countForPro",t.products),{active:t.categories.active,products:t.products.products}}),X)((function(t){console.log("count-card",t.product.count);var e=W();return Object(G.jsxs)(H.a,{stayle:{height:"100rem"},className:e.root,children:[Object(G.jsxs)(J.a,{children:[Object(G.jsx)(R.a,{component:"img",alt:t.alt,height:"200",image:t.image,title:t.name}),Object(G.jsx)(h.a,{gutterBottom:!0,variant:"h6",component:"h2",children:t.name}),Object(G.jsxs)(h.a,{gutterBottom:!0,variant:"h6",component:"h2",children:["InStock:  ",t.inStock]})]}),Object(G.jsxs)(Q.a,{children:[Object(G.jsx)(f.a,{size:"small",color:"primary",onClick:function(e){0===t.product.inStock?alert("out of stock"):t.updateRemoteData(t.product)},children:"Add To Cart"}),Object(G.jsx)(f.a,{size:"small",color:"primary",children:"Details"})]})]})}));var U={addProduct:z},K=Object(s.b)((function(t){return console.log("STATE???",t),{active:t.categories.active,products:t.products}}),U)((function(t){return console.log("proooooood",t),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("p",{style:{textAlign:"center",fontSize:"25px"},children:t.active}),Object(G.jsx)("br",{}),Object(G.jsx)(V.a,{cols:3,children:t.products.activeProducts.map((function(e,c){return t.active===e.category?Object(G.jsx)(Y.a,{rows:"auto",children:Object(G.jsx)(Z,{className:"cards ".concat(e.name),image:e.url,alt:e.name,style:{marginLeft:"80px",marginTop:"10px"},inStock:e.inStock,name:e.name,product:e},e.name)},c):""}))})]})})),q=Object(i.a)({root:{maxWidth:300,padding:"1rem",margin:"1rem",border:"solid",display:"inline-block",textAlign:"center"}});var $={activeCategory:function(t){return{type:"ACTIVE",payload:t}},getCat:S,getCategory:function(){return function(t){return k.a.get("".concat(C,"/categories")).then((function(e){t(S({categories:e.body.results}))}))}}},tt=Object(s.b)((function(t){return console.log("STATE???",t),{categories:t.categories.categories,active:t.categories.active}}),$)((function(t){Object(n.useEffect)((function(){t.getCategory(),console.log("get",t.getCategory())}));var e=q();return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("h3",{children:"Categories :"}),t.categories.map((function(c){return Object(G.jsx)(H.a,{stayle:{height:"100rem"},className:e.root,children:Object(G.jsx)(J.a,{children:Object(G.jsx)(h.a,{gutterBottom:!0,variant:"h6",component:"h2",onClick:function(){return t.activeCategory(c.name)},children:c.name})})})}))]})})),et=c(43),ct=c(12),nt={products:[{name:"Apple iPhone 11 Pro",id:"1",category:"Electronics",price:"700",count:"9",image:"https://1.bp.blogspot.com/-C1NmMstWuGQ/XXjs8Fs-O5I/AAAAAAAAYGU/11gUGHLK20MmBrcSulVVwaQHp1GvPGXrACLcBGAsYHQ/s1600/%25D8%25A2%25D9%258A%25D9%2581%25D9%2588%25D9%2586-11-%25D8%25A8%25D8%25B1%25D9%2588-iPhone-11-Pro.png"},{name:"Sloppy Jose Luis",id:"2",category:"Food",price:"50",count:"10",image:"https://www.readyseteat.com/sites/g/files/qyyrlu501/files/images/articles/Zz1lNGJhMzI3MWY2MDY1MTc3MmNiMjZlZjE1YzcxNGY3MQ==.jpeg"},{name:"Samsung Smart TV",id:"3",category:"Electronics",price:"1000",count:"10",image:"https://jveex.com/wp-content/uploads/2020/09/40-smart-4k-ready-led-tv-500x500-1.jpeg"},{name:"Apple MacBook Air M1 2021",id:"4",category:"Electronics",price:"600",count:"9",image:"https://cdn.mos.cms.futurecdn.net/gPvyaz76tASn87RCGuSdDc.jpg"},{name:"Pizza",id:"5",category:"Food",price:"40",count:"4",image:"https://images.deliveryhero.io/image/talabat/MenuItems/Deal_For_Two_637371778656268786.jpg"}],activeProducts:[]},rt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case"ACTIVE":return t.activeProducts=t.products.filter((function(t){return t.category===n})),Object(ct.a)(Object(ct.a)({},t),{},{activeProducts:t.activeProducts});case"ADD":return console.log("ADDDDDDDDDDDDd",t.activeProducts),t.activeProducts=t.activeProducts.map((function(t){if(t.name===n.name){if(!(t.inStock>0))return t;t.inStock=t.inStock-1}return t})),Object(ct.a)(Object(ct.a)({},t),t.activeProducts);case"GET_P":return console.log("GEEEEEEET",n),Object(ct.a)(Object(ct.a)({},t),{},{products:n.products});case"DELETE":return console.log("ADDDDDDDDDDDDd",t.activeProducts),t.activeProducts=t.activeProducts.map((function(t){if(t.name===n.name){if(!(t.inStock>0))return t;t.inStock=t.inStock+1}return t})),Object(ct.a)(Object(ct.a)({},t),t.activeProducts);default:return t}},at={categories:[{name:"food",displayName:"Food",description:"Food Description",url:"https://purewows3.imgix.net/images/articles/2020_12/LittleBeetTable_healthy-restaurants-nyc.jpg?auto=format,compress&cs=strip"},{name:"electronics",displayName:"Electronics",description:"Electronics Description",url:"https://files.shoppersdrugmart.ca/food-and-electronics/electronics/Hero%20Electronics.png"},{name:"clothing",displayName:"Clothing",description:"Clothing Description",url:"https://static.highsnobiety.com/thumbor/9LC4p5GLF9tI6Kh5UEw3MCcrXi8=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/12/13124156/vintage-clothes-thrift-shopping-main.jpg"}],active:""},ot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case"ACTIVE":var r=t.categories;return{categories:r,active:n};case"GET_C":return Object(ct.a)(Object(ct.a)({},t),{},{categories:n.categories});default:return t}},it=c(15),st={cart:[],visible:!1,num:0},ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case"ADD":if(t.cart.length){for(var r=!1,a=0;a<t.cart.length;a++)n._id===t.cart[a]._id&&(t.num+=1,t.cart[a].item+=1,r=!0);return r||(n.item=1,t.num+=1,t.cart.push(n)),Object(ct.a)({},t)}return t.num=0,n.item=1,t.num+=1,t.cart.push(n),Object(ct.a)({},t);case"DELETE":for(var o=!1,i=0;i<t.cart.length;i++)if(n._id===t.cart[i]._id)if(t.cart[i].item>1&&t.num>0)t.num-=1,t.cart[i].item-=1,o=!0;else if(1===t.cart[i].item&&!o){var s=t.cart.filter((function(t){return t.name!==n.name}));return{cart:Object(it.a)(s),visible:!0}}return Object(ct.a)({},t);default:return t}},lt=c(62),dt=Object(et.b)({categories:ot,products:rt,cart:ut}),pt=Object(et.c)(dt,Object(et.a)(lt.a));var jt=function(){return Object(G.jsxs)(s.a,{store:pt,children:[Object(G.jsx)(L,{}),Object(G.jsxs)("div",{className:"App",children:[Object(G.jsx)(tt,{}),Object(G.jsx)(K,{}),Object(G.jsx)(I,{})]})]})},mt=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,158)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;c(t),n(t),r(t),a(t),o(t)}))};o.a.render(Object(G.jsx)(r.a.StrictMode,{children:Object(G.jsx)(jt,{})}),document.getElementById("root")),mt()},77:function(t,e,c){},78:function(t,e,c){},97:function(t,e){}},[[109,1,2]]]);
//# sourceMappingURL=main.49d1dc6a.chunk.js.map