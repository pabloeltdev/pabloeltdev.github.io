import{q as f,w as m,h as p,e as v,s as g,j as l,a as d,u as h}from"./query.046ea17d.js";import{c as _,a as y,b as C}from"./entry.fa10d76e.js";import{u as w}from"./preview.9ca7dcfa.js";import{_ as P}from"./nuxt-link.fae787a8.js";import{j as $,ab as N,k as j,aa as T,l as r}from"./swiper-vue.799c8af8.js";const b=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(g())return(await y(()=>import("./client-db.712bfa70.js"),["./client-db.712bfa70.js","./entry.fa10d76e.js","./swiper-vue.799c8af8.js","./swiper-vue.d33d3671.css","./entry.6b9d63b9.css","./query.046ea17d.js","./preview.9ca7dcfa.js","./index.b0fe9fac.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:l(a),previewToken:w().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=$({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=N(e),a=j(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:n}=d();return{navigation:n}}const{data:s}=await h(`content-navigation-${p(a.value)}`,()=>b(a.value));return{navigation:s}},render(e){const t=T(),{navigation:a}=e,s=o=>r(P,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),R=D;export{R as default};