import{r as S,u as C,a1 as j,a as g,m as E,c as I,w as N,b as r,d as e,g as n,L as h,q as V,h as d,v as p,i as t,e as u,f as $}from"./app-99513220.js";import{_ as M}from"./loading2-cc69d4b8.js";import{_ as B}from"./Layout-61dc6c62.js";import{_ as K}from"./Editor-b6ad8733.js";import{u as L}from"./useSlug-ddefb553.js";import{_ as F}from"./ImageUploader-3ca64e71.js";import"./SideNav.vue_vue_type_style_index_1_scoped_d3198c53_lang-c8ddfb98.js";import"./useDataStore-d37a8ed6.js";import"./index-dca72a42.js";const z={class:"content-header row mb-1"},R={class:"col-12 d-flex align-items-center justify-content-between"},W=e("h2",{class:"float-start mb-0"},"page List",-1),q=["href"],A=e("span",null,"Go To Back",-1),O={class:"app-user-list"},G={class:"container mt-5"},J={class:"row match-height"},H={class:"card-body"},Q=e("h2",{class:"card-title"},"Page Title & Slug",-1),X={class:"form-group mt-1"},Y=e("label",null,"Title",-1),Z={class:"form-group mt-1"},ee=e("label",null,"slug",-1),se={class:"card"},te={class:"card-body"},oe={class:"d-flex align-items-center justify-content-between"},le=e("h3",null,"Full Specification's",-1),ae={class:""},ie={class:"card"},ne={class:"card-body"},ce=e("h2",{class:"card-title"},"Page Seo Details & Meta Keywords",-1),re={class:"mb-1"},de=e("label",{class:"label"},"Title",-1),ue={class:"mb-1"},_e=e("label",{class:"label"},"Keywords",-1),pe={class:"mb-1"},me=e("label",{class:"label"},"Image",-1),ge=["src"],he={class:"mt-1"},fe=e("label",{class:"label"},"Description's",-1),ve={class:"card"},be={class:"card-body"},ye={key:0,class:"row"},xe=e("div",{class:"card-body d-flex align-items-center justify-content-center"},[e("h3",{class:"text-success"},"Save Page")],-1),Se=[xe],Ve={class:"col"},ke=["href"],we=e("div",{class:"card-body d-flex align-items-center justify-content-center"},[e("h3",{class:"text-danger"},"Cancel Request")],-1),Te=[we],De={key:1,class:"d-flex align-items-center justify-content-center"},Pe=e("img",{src:M,alt:""},null,-1),Ue=[Pe],Le={__name:"Edit",props:{update_url:String|null,page:Object|void 0|null},setup(k){var f,v,b;const a=k,{makeSlug:w}=L(),i=S(!1),T=()=>i.value=!0,D=()=>i.value=!1;let s=C({title:a.page.title,slug:a.page.slug,summery:a.page.summery,seoTitle:(f=a.page)==null?void 0:f.seo.title,seoKeyWords:JSON.parse((v=a.page)==null?void 0:v.seo.key_words),seoImage:a.page.seo.icon,seoDiscriptions:(b=a.page)==null?void 0:b.seo.description});const _=S(!1),P=()=>{s.post(a.update_url,{preserveState:!0,replace:!0,onStart:c=>{console.log("res "+c),_.value=!0},onSuccess:c=>{_.value=!1,s.reset(),$sToast.fire({icon:"success",title:"Page Save Successfully Done...."})},onError:c=>{_.value=!1,$toast.error("Validation Errors...")}})};return j(()=>{s.slug=w(s.title)}),(c,o)=>{const m=g("vue-feather"),y=g("info"),U=g("v-select"),x=E("c-tooltip");return r(),I(B,null,{default:N(()=>[e("div",z,[e("div",R,[W,e("a",{href:c.$page.props.auth.ADMIN_URL+"/pages",class:"btn btn-sm btn-gradient-primary d-flex align-items-center"},[n(m,{type:"arrow-left",size:"15"}),A],8,q)])]),e("section",O,[e("div",G,[e("div",J,[e("div",{class:h(i.value?"col-md-12":"col-md-7")},[e("div",{class:h(["card",i.value?"d-none":""])},[e("div",H,[Q,e("div",X,[Y,V(),n(y,{title:"Page Title"}),d(e("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>t(s).title=l),class:"form-control",type:"text",placeholder:"e.g This is page title"},null,512),[[p,t(s).title]])]),e("div",Z,[ee,V(),n(y,{title:"Url Slug Convert To Title"}),d(e("input",{class:"form-control",disabled:"",type:"text","onUpdate:modelValue":o[1]||(o[1]=l=>t(s).slug=l),placeholder:"e.g Title-convert-to-slug"},null,512),[[p,t(s).slug]])])])],2),e("div",se,[e("div",te,[e("div",oe,[le,i.value?d((r(),u("button",{key:1,class:"btn-icon btn",onClick:D},[n(m,{type:"external-link",style:{rotate:"180deg"}})])),[[x,"Exit full page"]]):d((r(),u("button",{key:0,class:"btn-icon btn",onClick:T},[n(m,{type:"external-link"})])),[[x,"Enter Full page"]])]),e("div",ae,[n(K,{modelValue:t(s).summery,"onUpdate:modelValue":o[2]||(o[2]=l=>t(s).summery=l),isMultiline:i.value,height:i.value?"600px":"400px"},null,8,["modelValue","isMultiline","height"])])])])],2),e("div",{class:h(["col-md-5",i.value?"d-none":""])},[e("div",ie,[e("div",ne,[ce,e("div",re,[de,d(e("input",{"onUpdate:modelValue":o[3]||(o[3]=l=>t(s).seoTitle=l),class:"form-control",type:"text",placeholder:"e.g seo title / default product title"},null,512),[[p,t(s).seoTitle]])]),e("div",ue,[_e,n(U,{modelValue:t(s).seoKeyWords,"onUpdate:modelValue":o[4]||(o[4]=l=>t(s).seoKeyWords=l),multiple:"",taggable:"",placeholder:"Product Sizes"},null,8,["modelValue"])]),e("div",pe,[me,n(F,{modelValue:t(s).seoImage,"onUpdate:modelValue":o[5]||(o[5]=l=>t(s).seoImage=l)},null,8,["modelValue"]),typeof t(s).seoImage=="string"?(r(),u("img",{key:0,src:a.page.seo.icon,width:"100",height:"70",style:{"object-fit":"contain"},alt:""},null,8,ge)):$("",!0)]),e("div",he,[fe,d(e("textarea",{"onUpdate:modelValue":o[6]||(o[6]=l=>t(s).seoDiscriptions=l),class:"form-control",id:"",rows:"8",placeholder:"e.g seo full descriptions"},null,512),[[p,t(s).seoDiscriptions]])])])]),e("div",ve,[e("div",be,[_.value?(r(),u("div",De,Ue)):(r(),u("div",ye,[e("div",{class:"col"},[e("div",{class:"card bg-light-success cursor-pointer",onClick:P},Se)]),e("div",Ve,[e("a",{href:c.$page.props.auth.ADMIN_URL+"/pages",class:"card bg-light-danger cursor-pointer"},Te,8,ke)])]))])])],2)])])])]),_:1})}}};export{Le as default};