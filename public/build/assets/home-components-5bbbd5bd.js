import{_ as u,a as m,m as g,e as a,F as d,s as p,f as r,d as o,t as i,c as l,b as e,h as _}from"./app-99513220.js";const y={},f={key:0,class:"row match-height mb-2"},v={class:"col-lg col-sm-6"},b=["href"],D=["src"],w={key:1,class:"section-header row match-height mb-2 my-md-5 my-sm-1 p-md-2 p-sm-0 bg-light-info"},k={class:"text-center display-4 fw-bolder text-primary text-uppercase my-2 header-before position-relative"},$={class:"col-lg col-sm-12"},C=["href"],N=["src"],L={key:2,class:"row match-heigh mb-1"},A={class:"col"},B=["href"],M=["src"],R={key:3,class:"row match-height mb-2 my-md-5 my-sm-1 p-md-2 p-sm-0 bg-light-warning"},U={class:"text-center display-4 fw-bolder text-primary text-uppercase my-2 header-before position-relative"},P={key:4,class:"row match-height mb-2 my-5 p-2 bg-light-info"},F={class:"text-center display-4 fw-bolder text-primary text-uppercase my-2 header-before position-relative"},V={class:"col"},j=["href"],z=["src"],E=["textContent"],I={key:6,class:"row match-height mb-2 my-5 p-2 bg-light-secondary"},S={class:"text-center display-4 fw-bolder text-primary text-uppercase my-2 header-before position-relative"},T={class:"row match-height add-section-sm-gap"},q={class:"col-6 col-lg-3 col-md-3"},G=["href"],H=["src"],J={key:0,class:"text-center display-4 fw-bolder text-primary text-uppercase my-2 header-before position-relative"},K={class:"row match-height mb-2"},O=o("h2",{class:"text-center display-4 fw-bolder text-primary text-uppercase my-2 header-before position-relative"}," Top Brands ",-1),Q={class:"row gap-lg-0 banner-gyap"},W={class:"col-md-3 col-sm-3 col-6 col-lg-2"},X=["href"],Y={class:"card brand-card h-100"},Z={class:"card-body d-flex align-items-center justify-content-center"},x=["src"];function tt(s,et){const c=m("product-carousel"),n=g("c-tooltip");return e(),a(d,null,[s.props.pageData.add1.status===!0?(e(),a("div",f,[(e(!0),a(d,null,p(s.props.pageData.add1.items,t=>(e(),a("div",v,[o("a",{href:`${s.$page.props.auth.MAIN_URL}/products/ads-products?add=${t.slug}`},[o("img",{src:t.image,class:"card-img-top",alt:""},null,8,D)],8,b)]))),256))])):r("",!0),s.props.pageData.add2.status===!0?(e(),a("div",w,[o("h2",k,i(s.props.pageData.add2.title),1),(e(!0),a(d,null,p(s.props.pageData.add2.items,t=>(e(),a("div",$,[o("a",{href:`${s.$page.props.auth.MAIN_URL}/products/ads-products?add=${t.slug}`},[o("img",{src:t.image,class:"card-img-top",alt:""},null,8,N)],8,C)]))),256))])):r("",!0),s.props.pageData.add4.status===!0?(e(),a("div",L,[(e(!0),a(d,null,p(s.props.pageData.add4.items,t=>(e(),a("div",A,[o("a",{href:`${s.$page.props.auth.MAIN_URL}/products/ads-products?add=${t.slug}`},[o("img",{src:t.image,class:"card-img-top",alt:""},null,8,M)],8,B)]))),256))])):r("",!0),s.props.pageData.topProducts.status===!0?(e(),a("div",R,[o("h2",U,i(s.props.pageData.topProducts.title),1),s.props.pageData.topProducts.items.length>0?(e(),l(c,{key:0,products:s.props.pageData.topProducts.items},null,8,["products"])):r("",!0)])):r("",!0),s.props.pageData.add2.status===!0?(e(),a("div",P,[o("h2",F,i(s.props.pageData.add2.title),1),(e(!0),a(d,null,p(s.props.pageData.add2.items,t=>(e(),a("div",V,[o("a",{href:`${s.$page.props.auth.MAIN_URL}/products/ads-products?add=${t.slug}`},[o("img",{src:t.image,class:"card-img-top",alt:""},null,8,z)],8,j)]))),256))])):r("",!0),s.props.pageData.topCategories.status===!0?(e(!0),a(d,{key:5},p(s.props.homeCategory,(t,h)=>(e(),a("div",{class:"row match-height my-5",key:t.id},[t.products.length>0?(e(),a("h2",{key:0,class:"text-capitalize",textContent:i(t.title)},null,8,E)):r("",!0),t.products.length>0?(e(),l(c,{key:1,products:t.products},null,8,["products"])):r("",!0)]))),128)):r("",!0),s.props.pageData.add3.status===!0?(e(),a("div",I,[o("h2",S,i(s.props.pageData.add3.title),1),o("div",T,[(e(!0),a(d,null,p(s.props.pageData.add3.items,t=>(e(),a("div",q,[o("a",{class:"h-100",href:`${s.$page.props.auth.MAIN_URL}/products/ads-products?add=${t.slug}`},[o("img",{src:t.image,class:"card-img-top h-100",alt:""},null,8,H)],8,G)]))),256))])])):r("",!0),s.props.pageData.homeCategories.status===!0?(e(!0),a(d,{key:7},p(s.props.pageData.homeCategories.items,(t,h)=>(e(),a("div",{class:"row match-height my-5",key:t.id},[t.products.length>0?(e(),a("h2",J,i(t.title),1)):r("",!0),t.products.length>0?(e(),l(c,{key:1,products:t.products},null,8,["products"])):r("",!0)]))),128)):r("",!0),o("div",K,[O,o("div",Q,[(e(!0),a(d,null,p(s.props.featuredBrands,t=>(e(),a("div",W,[o("a",{class:"h-100",href:`${s.$page.props.auth.MAIN_URL}/products?brand=${t.slug}`},[_((e(),a("div",Y,[o("div",Z,[o("img",{src:t.icon,class:"card-img-top",alt:""},null,8,x)])])),[[n,t.name]])],8,X)]))),256))])])],64)}const at=u(y,[["render",tt]]);export{at as default};
