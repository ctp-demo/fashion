import{u as rt,r as ut,a as mt,c as gt,w as it,b as n,d as e,h as ht,v as _t,i,g as lt,t as pt,e as nt,f as at}from"./app-99513220.js";import{_ as St}from"./loading2-cc69d4b8.js";import{_ as ft}from"./Layout-61dc6c62.js";import{S as vt}from"./Switch-4b0eff40.js";import"./SideNav.vue_vue_type_style_index_1_scoped_d3198c53_lang-c8ddfb98.js";import"./useDataStore-d37a8ed6.js";import"./index-dca72a42.js";/* empty css                                                               */const yt={class:"row"},xt={class:"col-md-6"},Ct={class:"card"},bt={class:"card-body position-relative imgContainer"},Vt=e("h2",{class:"card-title"},"Home Categories",-1),wt={class:"mt-1"},kt={class:"d-flex align-items-start py-1"},Bt=["src"],Ut={class:"ms-1"},jt={class:"mb-25"},Pt={class:"d-flex align-items-center justify-content-between"},Dt={class:"mt-1"},Nt=e("label",null,"Show Status",-1),Tt={key:0,class:"row"},$t={class:"col"},At=e("div",{class:"card-body d-flex align-items-center justify-content-center"},[e("h3",{class:"text-success"},"Update Setting")],-1),Et=[At],Ft=e("div",{class:"col"},[e("a",{href:"/panel/settings",class:"card bg-light-danger cursor-pointer"},[e("div",{class:"card-body d-flex align-items-center justify-content-center"},[e("h3",{class:"text-danger"},"Cancel Setting")])])],-1),Ht={key:1,class:"col d-flex align-items-center justify-content-center"},Lt=e("img",{src:St,alt:""},null,-1),Mt=[Lt],Rt={__name:"HomeSetting",props:{products:[]|null,categories:[]|null,brands:[]|null,advised:[]|null,main_url:String|null,homeSettings:Array|null},setup(dt){var c,r,u,m,g,h,_,p,S,f,v,y,x,C,b,V,w,k,B,U,j,P,D,N,T,$,A,E,F,H,L,M,q,z,G,I,J,K,O,Q,R,W,X,Y,Z,tt,et,st;const t=dt,l=rt({add1:{title:((r=(c=t.homeSettings)==null?void 0:c.add1)==null?void 0:r.title)??null,status:((m=(u=t.homeSettings)==null?void 0:u.add1)==null?void 0:m.status)??null,items:((h=(g=t.homeSettings)==null?void 0:g.add1)==null?void 0:h.items)??null},add2:{title:((p=(_=t.homeSettings)==null?void 0:_.add2)==null?void 0:p.title)??null,status:((f=(S=t.homeSettings)==null?void 0:S.add2)==null?void 0:f.status)??null,items:((y=(v=t.homeSettings)==null?void 0:v.add2)==null?void 0:y.items)??null},categories1:{title:((C=(x=t.homeSettings)==null?void 0:x.topCategories)==null?void 0:C.title)??null,status:((V=(b=t.homeSettings)==null?void 0:b.topCategories)==null?void 0:V.status)??null,items:((k=(w=t.homeSettings)==null?void 0:w.topCategories)==null?void 0:k.items)??null},add3:{title:((U=(B=t.homeSettings)==null?void 0:B.add3)==null?void 0:U.title)??null,status:((P=(j=t.homeSettings)==null?void 0:j.add3)==null?void 0:P.status)??null,items:((N=(D=t.homeSettings)==null?void 0:D.add3)==null?void 0:N.items)??null},topProducts:{title:(($=(T=t.homeSettings)==null?void 0:T.topProducts)==null?void 0:$.title)??null,status:((E=(A=t.homeSettings)==null?void 0:A.topProducts)==null?void 0:E.status)??null,items:((H=(F=t.homeSettings)==null?void 0:F.topProducts)==null?void 0:H.items)??null},add4:{title:((M=(L=t.homeSettings)==null?void 0:L.add4)==null?void 0:M.title)??null,status:((z=(q=t.homeSettings)==null?void 0:q.add4)==null?void 0:z.status)??null,items:((I=(G=t.homeSettings)==null?void 0:G.add4)==null?void 0:I.items)??null},categories2:{title:((K=(J=t.homeSettings)==null?void 0:J.homeCategories)==null?void 0:K.title)??null,status:((Q=(O=t.homeSettings)==null?void 0:O.homeCategories)==null?void 0:Q.status)??null,items:((W=(R=t.homeSettings)==null?void 0:R.homeCategories)==null?void 0:W.items)??null},add5:{title:((Y=(X=t.homeSettings)==null?void 0:X.add5)==null?void 0:Y.title)??null,status:((tt=(Z=t.homeSettings)==null?void 0:Z.add5)==null?void 0:tt.status)??null,items:((st=(et=t.homeSettings)==null?void 0:et.add5)==null?void 0:st.items)??null}}),a=ut(!1);let d=()=>{l.post(t.main_url,{onSuccess:ot=>{$sToast.fire({icon:"success",text:"Business Settings Update Successfully Done.:)"})},onError:ot=>{$sToast.fire({icon:"error",text:"Business Settings Not Update (:"})}})};return(ot,o)=>{const ct=mt("vSelect");return n(),gt(ft,null,{default:it(()=>[e("div",yt,[e("div",xt,[e("div",Ct,[e("div",bt,[Vt,e("div",wt,[ht(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>i(l).categories2.title=s),class:"form-control mb-1",placeholder:"e.g title"},null,512),[[_t,i(l).categories2.title]]),lt(ct,{options:t.categories,reduce:s=>s.id,modelValue:i(l).categories2.items,"onUpdate:modelValue":o[1]||(o[1]=s=>i(l).categories2.items=s),multiple:"",label:"title",placeholder:"e.g Select Products For Ads"},{option:it(s=>[e("li",kt,[e("img",{src:s.icon,alt:"",width:"50",height:"50"},null,8,Bt),e("div",Ut,[e("h6",jt,pt(s.title.slice(0,30)),1)])])]),_:1},8,["options","reduce","modelValue"])]),e("div",Pt,[e("div",Dt,[Nt,lt(vt,{modelValue:i(l).categories2.status,"onUpdate:modelValue":o[2]||(o[2]=s=>i(l).categories2.status=s),class:"justify-content-start"},null,8,["modelValue"])])])])]),a.value?at("",!0):(n(),nt("div",Tt,[e("div",$t,[e("div",{class:"card bg-light-success cursor-pointer",onClick:o[3]||(o[3]=(...s)=>i(d)&&i(d)(...s))},Et)]),Ft])),a.value?(n(),nt("div",Ht,Mt)):at("",!0)])])]),_:1})}}};export{Rt as default};
