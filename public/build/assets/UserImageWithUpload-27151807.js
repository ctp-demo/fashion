import{_ as d,r as l,a as p,e as s,d as a,g as _,S as n,f as m,l as g,b as o}from"./app-99513220.js";const v={class:"d-flex align-items-center flex-column"},f={class:"avatar-upload"},y={class:"avatar-edit"},h={for:"imageUpload",class:"d-flex align-items-center justify-content-center"},I={class:"avatar-preview"},U={__name:"UserImageWithUpload",setup(b){const t=l(null),r=l(null),i=e=>{t.value=URL.createObjectURL(e.target.files[0]),r.value=e.target.files[0]},c=()=>{g.Inertia.post("/update-profile-image",{image:r.value},{preserveState:!0,replace:!0,onSuccess:e=>{r.value={},$sToast.fire({icon:"success",title:"Signed in successfully"})},onError:e=>{$toast.error("Server Error 500")}})};return(e,k)=>{const u=p("vue-feather");return o(),s("div",v,[a("div",f,[a("div",y,[a("input",{type:"file",onInput:i,id:"imageUpload",accept:".png, .jpg, .jpeg"},null,32),a("label",h,[_(u,{type:"edit",size:"10"})])]),a("div",I,[t.value?(o(),s("div",{key:0,id:"imagePreview",style:n({"background-image":"url("+t.value+")"})},null,4)):(o(),s("div",{key:1,id:"imagePreview2",style:n({"background-image":"url("+e.$page.props.auth.user.avatar+")"})},null,4))])]),t.value!==null?(o(),s("button",{key:0,class:"btn btn-primary btn-sm my-1",onClick:c},"upload")):m("",!0)])}}},S=d(U,[["__scopeId","data-v-243824a7"]]);export{S as default};