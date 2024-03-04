import{J as b,r as u,g as x,a as v}from"./jobs.api.1f7c0c9d.js";import{b as p,o as d,c as l,d as t,t as i,e as _,F as g,j as m,u as a,n as f,m as y,a as j,k as w,l as k,f as B}from"./index.0ec6eb29.js";const $={class:"job-details"},J={class:"tdetails"},S={class:"tdetails__info"},D={class:"tdetails__top"},E={class:"tdetails__posted"},L=t("div",{class:"tdetails__divider divider"},null,-1),A={class:"tdetails__contract"},F={class:"tdetails__position title-h3"},q={class:"tdetails__location location"},H={class:"job-details__text"},N=t("h2",{class:"job-details__title title-h2"},"Requirements",-1),C={class:"job-details__text"},M={class:"job-details__list"},O=t("h2",{class:"job-details__title title-h2"},"What You Will Do",-1),P={class:"job-details__text"},R={class:"job-details__list",style:{"margin-bottom":"0"}},V={__name:"JobDetails",props:{job:{type:Object,default:()=>new b}},setup(o){return(e,r)=>{const c=p("ButtonEl");return d(),l("div",$,[t("div",J,[t("div",S,[t("div",D,[t("div",E,i(o.job.postedAt),1),L,t("div",A,i(o.job.contract),1)]),t("div",F,i(o.job.position),1),t("div",q,i(o.job.location),1)]),_(c,{title:"Apply now"})]),t("p",H,i(o.job.description),1),N,t("p",C,i(o.job.requirements.content),1),t("ol",M,[(d(!0),l(g,null,m(o.job.requirements.items,(s,n)=>(d(),l("li",{class:"job-details__list-item",key:n},i(s),1))),128))]),O,t("p",P,i(o.job.role.content),1),t("ol",R,[(d(!0),l(g,null,m(o.job.role.items,(s,n)=>(d(),l("li",{class:"job-details__list-item job-details__list-item_numbers",key:n},i(s),1))),128))])])}}};const W={class:"header-details"},z={class:"header-details__description"},I={class:"header-details__info"},Y={class:"header-details__company title-h2"},G={class:"header-details__website"},K={__name:"HeaderDetails",props:{company:String,logo:String,website:String,logoBackground:String},setup(o){const e=o;return(r,c)=>{const s=p("LogoSvg"),n=p("ButtonEl");return d(),l("div",W,[t("div",{class:"header-details__logo",style:f({background:o.logoBackground})},[_(s,{name:a(u)(o.logo)},null,8,["name"])],4),t("div",z,[t("div",I,[t("div",Y,i(e.company),1),t("div",G,i(a(x)(e.website)),1)]),_(n,{type:"secondary",title:"Company site"})])])}}};const Q={class:"footer-details"},T={class:"footer-details__in"},U={class:"footer-details__info"},X={class:"footer-details__position title-h3"},Z={class:"footer-details__location location"},tt={__name:"FooterDetails",props:{position:String,location:String},setup(o){const e=o;return(r,c)=>{const s=p("ButtonEl");return d(),l("footer",Q,[t("div",T,[t("div",U,[t("div",X,i(e.position),1),t("div",Z,i(e.location),1)]),_(s,{title:"Apply now"})])])}}};function et(){const o=y(),e=j({job:null,error:null}),r=w(()=>+o.params.id);async function c(){const{type:s,data:n,error:h}=await v.getById(r.value);if(s==="error")return e.error=h;e.job=n}return{state:e,id:r,fetchJob:c}}const ot={key:0,class:"error-msg title-h1",style:{"margin-top":"100px"}},it={class:"details-wrp"},dt={__name:"JobPage",setup(o){const{state:e,fetchJob:r}=et();return k(r),(c,s)=>{const n=p("LoaderBase");return a(e).error?(d(),l("div",ot,i(a(e).error),1)):a(e).job?(d(),l(g,{key:2},[t("div",it,[_(K,{company:a(e).job.company,website:a(e).job.website,logo:a(e).job.logo,logoBackground:a(e).job.logoBackground},null,8,["company","website","logo","logoBackground"]),_(V,{job:a(e).job},null,8,["job"])]),_(tt,{position:a(e).job.position,location:a(e).job.location},null,8,["position","location"])],64)):(d(),B(n,{key:1,style:{"padding-top":"100px"}}))}}};export{dt as default};