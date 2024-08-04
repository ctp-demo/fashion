import{P as a}from"./app-99513220.js";const s=a("cart",{state:()=>({cart:[]}),actions:{addToCart(t){const e=this.cart.findIndex(r=>r.id===t.id);e>-1?this.cart[e].quantity=t.quantity:this.cart.push(t),this.setInLocalStorage()},removeFromCart(t){const e=this.cart.indexOf(t);e>-1&&(this.cart.splice(e,1),localStorage.setItem("cart",JSON.stringify(this.cart)))},incrementQty(t){const e=this.cart.findIndex(r=>r.id===t);this.cart[e].quantity++,this.setInLocalStorage()},decrementQty(t){const e=this.cart.findIndex(r=>r.id===t);this.cart[e].quantity--,this.cart[e].quantity<=0&&this.removeFromCart(this.cart[e]),this.setInLocalStorage()},setInLocalStorage(){localStorage.setItem("cart",JSON.stringify(this.cart))},initCart(){const t=localStorage.getItem("cart");t&&(this.cart=JSON.parse(t))},clearCart(){this.items=[],localStorage.removeItem("cart"),this.initCart()}},getters:{getCartLength(){return this.cart.length},getCartItems(){return this.cart},getCartTotalPrice(){return this.cart.reduce((t,e)=>t+e.sellPrice*e.quantity,0)}}});export{s as u};