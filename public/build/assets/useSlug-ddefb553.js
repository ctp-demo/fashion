function p(r=null){return{makeSlug:(e=null)=>{const n="àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ",a="aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh",u=new RegExp(n.split("").join("|"),"g"),l="and";if(e!=null)return e.toString().toLowerCase().replace(/[\s_]+/g,"-").replace(u,o=>a.charAt(n.indexOf(o))).replace(/&/g,`-${l}-`).replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")}}}export{p as u};
