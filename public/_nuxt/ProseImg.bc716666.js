import{k as a,w as n,c,l as h}from"./entry.fa10d76e.js";import{j as o,k as l,H as u,I as d,u as f}from"./swiper-vue.799c8af8.js";const m=["src","alt","width","height"],w=o({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=l(()=>{var r;if((r=t.src)!=null&&r.startsWith("/")&&!t.src.startsWith("//")){const s=a(n(c().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return h(s,t.src)}return t.src});return(r,s)=>(u(),d("img",{src:f(i),alt:e.alt,width:e.width,height:e.height},null,8,m))}});export{w as default};
