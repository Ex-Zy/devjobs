import{r as F,w as E,a as y,b as _,o as s,c as u,d as l,e as c,f as v,u as h,g,h as k,T as C,F as j,_ as J,i as B,n as L,t as b,j as M,k as w,l as S}from"./index.4833e036.js";import{J as z,r as O,a as $}from"./jobs.api.9ce98d96.js";function U(){const a=F(!1);return E(a,()=>{a.value?document.body.classList.add("is-lock-scroll"):document.body.classList.remove("is-lock-scroll")}),{isOpenModal:a}}const N={key:0,class:"modal"},I={class:"mblock"},T={class:"mblock__top"},V=l("div",{class:"mblock__divider"},null,-1),A={class:"mblock__body"},P=l("span",null,"Full Time Only",-1),Q=l("span",null,"Search",-1),H={__name:"ModalFilterJobs",emits:["update:filter"],setup(a,{emit:o}){const t=y({isFulltime:!1,location:""}),{isOpenModal:e}=U(),r=i=>{const n=i?Object.assign(t,i):t;o("update:filter",n)};return(i,n)=>{const p=_("SvgIcon"),m=_("InputEl"),d=_("CheckboxEl"),x=_("ButtonEl");return s(),u(j,null,[l("div",{class:"filter__fulltime-icon-filter",onClick:n[0]||(n[0]=f=>e.value=!0)},[c(p,{name:"filter",class:"icon-filter"})]),(s(),v(C,{to:"body"},[h(e)?(s(),u("div",N,[l("div",{class:"modal__backdrop",onClick:n[1]||(n[1]=f=>e.value=!1)}),l("div",I,[l("div",T,[c(m,{value:t.location,"onUpdate:value":n[2]||(n[2]=f=>t.location=f),valueModifiers:{trim:!0},class:"modal-location",iconName:"location",placeholder:"Filter by location\u2026",onEnter:r,onClear:n[3]||(n[3]=f=>r({location:""}))},null,8,["value"])]),V,l("div",A,[c(d,{checked:t.isFulltime,"onUpdate:checked":n[4]||(n[4]=f=>t.isFulltime=f)},{default:g(()=>[P]),_:1},8,["checked"]),c(x,{onClick:r,class:"mblock__btn"},{default:g(()=>[Q]),_:1})])])])):k("",!0)]))],64)}}};const q={class:"filter"},D={class:"filter__row"},R=l("div",{class:"filter__divider"},null,-1),G=l("div",{class:"filter__divider"},null,-1),K={class:"filter__fulltime"},W=l("span",{class:"filter__fulltime-title"},[B(" Full Time "),l("span",null,"Only")],-1),X=l("span",null,"Search",-1),Y={__name:"FilterJobs",emits:["update:filter"],setup(a,{emit:o}){const t=y({position:"",location:"",isFulltime:!1}),e=r=>{const i=r?Object.assign(t,r):t;o("update:filter",i)};return(r,i)=>{const n=_("InputEl"),p=_("CheckboxEl"),m=_("ButtonEl");return s(),u("div",q,[l("div",D,[c(n,{value:t.position,"onUpdate:value":i[0]||(i[0]=d=>t.position=d),valueModifiers:{trim:!0},class:"filter-position filter-radius",iconName:"search",placeholder:"Filter by position",onEnter:e,onClear:i[1]||(i[1]=d=>e({position:""}))},null,8,["value"]),R,c(n,{value:t.location,"onUpdate:value":i[2]||(i[2]=d=>t.location=d),valueModifiers:{trim:!0},class:"filter-location filter-radius",iconName:"location",placeholder:"Filter by location\u2026",onEnter:e,onClear:i[3]||(i[3]=d=>e({location:""}))},null,8,["value"]),G,l("div",K,[c(p,{checked:t.isFulltime,"onUpdate:checked":i[4]||(i[4]=d=>t.isFulltime=d)},{default:g(()=>[W]),_:1},8,["checked"]),c(H,{"onUpdate:filter":e}),c(m,{class:"filter__fulltime-search",onClick:e},{default:g(()=>[X,c(J,{name:"search",class:"icon-search-sm"})]),_:1})])])])}}};const Z={class:"card__top"},tt={class:"card__posted"},et=l("div",{class:"card__divider divider"},null,-1),ot={class:"card__contract"},it={class:"card__position title-h3"},lt={class:"card__company"},at={class:"card__location location"},rt={__name:"CardJobs",props:{job:{type:Object,default:()=>new z}},setup(a){return(o,t)=>{const e=_("LogoSvg"),r=_("router-link");return s(),v(r,{to:`/jobs/${a.job.id}`,class:"card"},{default:g(()=>[a.job.logo.length?(s(),u("div",{key:0,class:"card__logo",style:L({background:a.job.logoBackground})},[c(e,{name:h(O)(a.job.logo)},null,8,["name"])],4)):k("",!0),l("div",Z,[l("div",tt,b(a.job.postedAt),1),et,l("div",ot,b(a.job.contract),1)]),l("div",it,b(a.job.position),1),l("div",lt,b(a.job.company),1),l("div",at,b(a.job.location),1)]),_:1},8,["to"])}}};const nt={key:1,class:"jobs"},st={class:"jobs__in"},dt={__name:"ListJobs",props:{jobs:{type:Array,default:()=>[]}},setup(a){return(o,t)=>{const e=_("LoaderBase");return a.jobs.length?(s(),u("div",nt,[l("div",st,[(s(!0),u(j,null,M(a.jobs,r=>(s(),v(rt,{key:r.id,job:r},null,8,["job"]))),128))])])):(s(),v(e,{key:0}))}}};class ct{static serializeFilterQuery(o){const{location:t,position:e,isFulltime:r}=o,i=new URLSearchParams;return t.trim()!==""&&i.append("location",t),e.trim()!==""&&i.append("position",e),r&&i.append("contract","Full Time"),i.toString()}}class _t{static async filter(o){const t=ct.serializeFilterQuery(o),e=await $.filter(t);return e.type==="success"&&!e.data.length&&Object.assign(e,{type:"error",data:null,error:"Jobs not found"}),e}}const ut={key:0,class:"error-msg title-h1"},pt={key:2,class:"load-more"},bt={__name:"HomePage",setup(a){const o=y({jobs:[],limit:8,error:null}),t=w(n),e=w(()=>t.value<o.jobs&&!o.error);S(r);async function r(p){const{type:m,data:d,error:x}=p?await _t.filter(p):await $.getAll();if(m==="error")return o.error=x;o.error=null,o.jobs=d}function i(){o.limit+=4}function n(){return o.jobs.length<o.limit?o.jobs:o.jobs.slice(0,o.limit)}return(p,m)=>{const d=_("ButtonEl");return s(),u(j,null,[c(Y,{"onUpdate:filter":r}),o.error?(s(),u("div",ut,b(o.error),1)):(s(),v(dt,{key:1,jobs:h(t)},null,8,["jobs"])),h(e)?(s(),u("div",pt,[c(d,{title:"Load more",onClick:i,class:"load-more__btn"})])):k("",!0)],64)}}};export{bt as default};
