import{r as p,k as y,l as k,x as T,a as h,c as D,w as M,b as r,d as t,g as n,h as m,n as B,q as C,v as S,e as f,s as j,i as g,t as d,F as A,a3 as I}from"./app-99513220.js";import{_ as L}from"./Layout-61dc6c62.js";import{d as N}from"./debounce-823fcc0a.js";import{u as P}from"./useAction-799874c3.js";import"./SideNav.vue_vue_type_style_index_1_scoped_d3198c53_lang-c8ddfb98.js";import"./useDataStore-d37a8ed6.js";import"./index-dca72a42.js";import"./_baseGetTag-92f65be8.js";const V={class:"content-header row mb-1"},$={class:"col-12 d-flex align-items-center justify-content-between"},z=t("h2",{class:"float-start mb-0"},"page List",-1),F=["href"],U=t("span",null,"Add New page",-1),E={class:"app-user-list"},H={class:"card"},q={class:"card-datatable table-responsive pt-0 px-2"},O={class:"d-flex align-items-center justify-content-between border-bottom"},R={class:"select-search-area d-flex align-items-center"},W=t("option",{value:void 0},"10",-1),Y=t("option",{value:"25"},"25",-1),G=t("option",{value:"50"},"50",-1),J=t("option",{value:"100"},"100",-1),K=[W,Y,G,J],Q={class:"d-flex align-items-center justify-content-center justify-content-lg-end flex-lg-nowrap flex-wrap"},X={class:"select-search-area"},Z={class:"page-list-table table"},tt=t("thead",{class:"table-light"},[t("tr",{class:"null"},[t("th",{class:"sorting"},"Id"),t("th",{class:"sorting"},"title"),t("th",{class:"sorting"},"Summery"),t("th",{class:"sorting"},"Created At"),t("th",{class:"sorting"})])],-1),et=["onDblclick"],st=["href"],ot=["innerHTML"],nt=t("button",{class:"btn btn-primary dropdown-toggle btn-sm",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false"}," Action ",-1),at={class:"dropdown-menu p-0","aria-labelledby":"dropdownMenuButton"},lt=["href"],it=t("span",{class:"ms-1"},"Edit",-1),ct=["onClick"],rt=t("span",{class:"ms-1"},"Delete",-1),bt={__name:"Index",props:{pages:[]|null,main_url:String|null,filters:Object},setup(s){const u=s,{deleteItem:b,copyToClipboard:v}=P(),a=p(),l=p();return y([a,l],N(function([i,o]){k.Inertia.get(u.main_url,{search:i,perPage:o},{preserveState:!0,replace:!0})},300)),T(()=>{$sToast.fire({icon:"success",title:I().props.value.message})}),(i,o)=>{const c=h("vue-feather"),w=h("Pagination");return r(),D(L,null,{default:M(()=>[t("div",V,[t("div",$,[z,t("a",{href:i.$page.props.auth.ADMIN_URL+"/pages/create",class:"btn btn-sm btn-gradient-primary d-flex align-items-center"},[n(c,{type:"plus",size:"15"}),U],8,F)])]),t("section",E,[t("div",H,[t("div",q,[t("div",O,[t("div",R,[m(t("select",{class:"form-select","onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e)},K,512),[[B,l.value]])]),t("div",Q,[t("div",X,[t("label",null,[C("Search "),m(t("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e),type:"search",class:"form-control",placeholder:"What You Find ?","aria-controls":"DataTables_Table_0"},null,512),[[S,a.value]])])])])]),t("table",Z,[tt,t("tbody",null,[(r(!0),f(A,null,j(s.pages.data,e=>{var _;return r(),f("tr",{key:e.id,onDblclick:x=>g(v)(e.slug)},[t("td",null,"#_"+d(e.id),1),t("td",null,[t("a",{href:"/pages/"+e.slug,class:"fs-6"},d(e.title),9,st)]),t("td",null,[t("p",{innerHTML:(_=e.summery)==null?void 0:_.slice(0,200)},null,8,ot)]),t("td",null,d(e.created_at,"lll"),1),t("td",null,[nt,t("div",at,[t("a",{href:e.edit_url,class:"dropdown-item d-flex align-items-center text-info w-100"},[n(c,{type:"edit",size:"15"}),it],8,lt),t("button",{class:"dropdown-item d-flex align-items-center text-danger w-100",type:"button",onClick:x=>g(b)(u.main_url,e.id)},[n(c,{type:"trash",size:"15"}),rt],8,ct)])])],40,et)}),128))])]),n(w,{links:s.pages.links,from:s.pages.from,to:s.pages.to,total:s.pages.total},null,8,["links","from","to","total"])])])])]),_:1})}}};export{bt as default};