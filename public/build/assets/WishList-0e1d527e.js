import{u as h}from"./useWishListStore-95d72058.js";import{o as _,a as u,e as n,d as s,g as d,t as o,i,F as c,s as m,b as a}from"./app-99513220.js";const p={class:"nav-link",href:"#","data-bs-toggle":"dropdown"},g={class:"badge rounded-pill bg-danger badge-up"},b={class:"dropdown-menu dropdown-menu-media dropdown-menu-end zindex-1"},f={class:"dropdown-menu-header"},v={class:"dropdown-header d-flex"},L=s("h4",{class:"notification-title mb-0 me-auto"},"Wish List Items",-1),y={class:"badge rounded-pill badge-light-primary"},w={class:"list-item align-items-center"},W=["src"],k={class:"list-item-body flex-grow-1"},x={class:"media-heading"},I={class:"cart-item-title"},$=["href"],B=s("br",null,null,-1),C=s("small",null,"by",-1),F={class:"ms-1",href:"#"},N={class:"cart-item-price"},D={__name:"WishList",setup(M){const t=h();return _(()=>{t.initWishList()}),(r,S)=>{const l=u("vue-feather");return a(),n(c,null,[s("a",p,[d(l,{type:"heart"}),s("span",g,o(i(t).getWishListLength),1)]),s("ul",b,[s("li",f,[s("div",v,[L,s("div",y,o(i(t).getWishListLength)+" Items",1)])]),(a(!0),n(c,null,m(i(t).getWishListItems,e=>(a(),n("li",{class:"scrollable-container media-list",key:e.id},[s("div",w,[s("img",{class:"d-block rounded me-1",src:e.thumbnail,alt:"donuts",width:"62"},null,8,W),s("div",k,[d(l,{class:"ficon cart-item-remove",type:"x",onClick:V=>i(t).removeFromWishList(e)},null,8,["onClick"]),s("div",x,[s("h6",I,[s("a",{class:"text-body",href:`${r.$page.props.auth.MAIN_URL}/product/single-product/${e.slug}`},o(e.title),9,$),B,C,s("a",F,o(e.category.title),1)])]),s("h5",N,"৳ "+o(e.sellPrice),1)])])]))),128))])],64)}}};export{D as default};
