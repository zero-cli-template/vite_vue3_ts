import{d as e,r as t,c as o,a as s,t as a,F as r,w as n,p as d,b as l,e as c,f as u,o as i,g as p,h as m,i as f,j as h,k as v,l as g,m as k,A as _}from"./vendor.112975a1.js";var b=e({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:t(0)})});const E=n();d("data-v-17a26df6");const V=l('<p data-v-17a26df6> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-17a26df6>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-17a26df6> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-17a26df6>Volar</a> (if using <code data-v-17a26df6>&lt;script setup&gt;</code>) </p><p data-v-17a26df6>See <code data-v-17a26df6>README.md</code> for more information.</p><p data-v-17a26df6><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-17a26df6> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-17a26df6>Vue 3 Docs</a></p>',3),j=s("p",null,[c(" Edit "),s("code",null,"components/HelloWorld.vue"),c(" to test hot module replacement. ")],-1);u();const x=E(((e,t,n,d,l,c)=>(i(),o(r,null,[s("h1",null,a(e.msg),1),V,s("button",{onClick:t[1]||(t[1]=t=>e.count++)},"count is: "+a(e.count),1),j],64))));b.render=x,b.__scopeId="data-v-17a26df6";var H=e({name:"App",components:{HelloWorld:b}});const y=s("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1);let A;H.render=function(e,t,a,n,d,l){const c=p("HelloWorld");return i(),o(r,null,[y,s(c,{msg:"Hello Vue 3 + TypeScript + Vite"})],64)};const P={},D=m.create({baseURL:"https://api.github.com",timeout:2e4});D.interceptors.request.use((e=>e),(e=>Promise.reject(e))),D.interceptors.response.use((e=>e),(e=>{if(e.response&&e.response.data){const t=e.response.status,o=e.response.data.message;f.error(`Code: ${t}, Message: ${o}`),console.error("[Axios Error]",e.response)}else f.error(`${e}`);return Promise.reject(e)}));var L=e({setup(){D.get("/users/XPoet").then((e=>{console.log("res: ",e)})).catch((e=>{console.log("err: ",e)}))}});const S=s("div",null,"This is Home",-1);L.render=function(e,t,s,a,r,n){return i(),o("div",null,[S])};const W={},$=s("div",null,"This is Vuex",-1);W.render=function(e,t,s,a,r,n){return i(),o("div",null,[$])};const C=[{path:"/",name:"Home",component:L},{path:"/vuex",name:"Vuex",component:W},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t)return e();if(void 0===A){const e=document.createElement("link").relList;A=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in P)return;P[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":A,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./axios.2d3ac167.js")),["./assets/axios.2d3ac167.js","./assets/vendor.112975a1.js"])}],R=h({history:v(),routes:C}),T={count:0};var q=g({state:()=>T,mutations:{increment(e){e.count++}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}});k(H).use(R).use(q).use(_).mount("#app");
