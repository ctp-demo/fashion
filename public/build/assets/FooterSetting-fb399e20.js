import{r as S,u as k,o as C,a as f,c as V,w as v,b as n,d as t,e as l,s as x,h as w,v as U,i as e,g as d,t as B,f as u,F}from"./app-99513220.js";import{_ as D}from"./loading2-cc69d4b8.js";import{_ as N}from"./Layout-61dc6c62.js";import"./_baseGetTag-92f65be8.js";import"./index-dca72a42.js";/* empty css                                                               */import"./SideNav.vue_vue_type_style_index_1_scoped_d3198c53_lang-c8ddfb98.js";import"./useDataStore-d37a8ed6.js";const $={class:"row"},j={class:"col-md-6","data-repeater-item":""},T={class:"card"},A={class:"card-body position-relative imgContainer"},E=t("h2",{class:"card-title"},"Add banners 2",-1),L={class:"mt-1"},M=["onUpdate:modelValue"],R={class:"d-flex align-customPages-start py-1"},q={class:"mb-25"},z=["onClick"],G={key:0,class:"row"},H={class:"col"},I=t("div",{class:"card-body d-flex align-customPages-center justify-content-center"},[t("h3",{class:"text-success"},"Update Setting")],-1),J=[I],K=t("div",{class:"col"},[t("a",{href:"panerl/settings",class:"card bg-light-danger cursor-pointer"},[t("div",{class:"card-body d-flex align-customPages-center justify-content-center"},[t("h3",{class:"text-danger"},"Cancel Setting")])])],-1),O={key:1,class:"col d-flex align-customPages-center justify-content-center"},Q=t("img",{src:D,alt:""},null,-1),W=[Q],nt={__name:"FooterSetting",props:{pages:[]|null,savePages:[]|null,main_url:String|null},setup(b){const i=b,m=S(!1);let s=k({customPages:[{title:"",pages:[],status:!1}]}),p=()=>{s.customPages.push({title:"",pages:[],status:!0})},y=c=>{s.customPages.splice(c,1)};C(()=>{s.customPages=i.savePages??[{}]});let _=()=>{s.post(i.main_url,{onSuccess:c=>{$sToast.fire({icon:"success",text:"Business Settings Update Successfully Done.:)"})},onError:c=>{$sToast.fire({icon:"error",text:"Business Settings Not Update (:"})}})};return(c,r)=>{const P=f("vSelect"),g=f("vue-feather");return n(),V(N,null,{default:v(()=>[t("div",$,[(n(!0),l(F,null,x(e(s).customPages,(h,a)=>(n(),l("div",j,[t("div",T,[t("div",A,[E,t("div",L,[w(t("input",{type:"text","onUpdate:modelValue":o=>e(s).customPages[a].title=o,class:"form-control mb-1",placeholder:"e.g title"},null,8,M),[[U,e(s).customPages[a].title]]),d(P,{options:i.pages,modelValue:e(s).customPages[a].pages,"onUpdate:modelValue":o=>e(s).customPages[a].pages=o,reduce:o=>o.id,multiple:"",label:"title",placeholder:"e.g Select Products For Ads"},{option:v(o=>[t("li",R,[t("h6",q,B(o.title.slice(0,30)),1)])]),_:2},1032,["options","modelValue","onUpdate:modelValue","reduce"])]),a===e(s).customPages.length-1?(n(),l("button",{key:0,class:"btn btn-primary btn-sm float-end mt-25",type:"button",name:"button",onClick:r[0]||(r[0]=(...o)=>e(p)&&e(p)(...o))},[d(g,{type:"plus"})])):u("",!0),t("button",{class:"btn btn-danger btn-sm float-end mt-25 me-1",onClick:o=>e(y)(a),"data-repeater-delete":"",type:"button"},[d(g,{type:"trash"})],8,z)])])]))),256))]),m.value?u("",!0):(n(),l("div",G,[t("div",H,[t("div",{class:"card bg-light-success cursor-pointer",onClick:r[1]||(r[1]=(...h)=>e(_)&&e(_)(...h))},J)]),K])),m.value?(n(),l("div",O,W)):u("",!0)]),_:1})}}};export{nt as default};
