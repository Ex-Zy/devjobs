var n=Object.defineProperty;var r=(s,a,t)=>a in s?n(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var e=(s,a,t)=>(r(s,typeof a!="symbol"?a+"":a,t),t);class l{constructor(){e(this,"id",null);e(this,"company","");e(this,"logo","");e(this,"logoBackground","");e(this,"position","");e(this,"postedAt","");e(this,"contract","");e(this,"location","");e(this,"website","");e(this,"apply","");e(this,"description","");e(this,"requirements",{content:"",items:[]});e(this,"role",{content:"",items:[]})}}const d=s=>s.substring(0,s.lastIndexOf("."))||s;function u(s){return s.trim().length?new URL(s).hostname:""}class c{static async fetch(a){try{const t=await fetch(`http://localhost:3004/api${a}`);if(!t.ok)throw Error(t.statusText);const o=await t.json();return{type:"success",error:null,data:o}}catch(t){return{type:"error",error:(t==null?void 0:t.message)||t,data:null}}}}class h extends c{static async getAll(){return await this.fetch("/jobs")}static async getById(a){return await this.fetch(`/jobs/${a}`)}static async filter(a){return await this.fetch(`/jobs?${a}`)}}export{l as J,h as a,u as g,d as r};
