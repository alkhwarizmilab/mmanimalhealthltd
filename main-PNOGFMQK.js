import{B as O,C as T,D as x,E as V,G as j,O as k,T as L,U as z,b as R,c as S,d as w,f as N,h as D,l as P,m as M,v as E}from"./chunk-JD3SAF3A.js";import{Da as g,Mb as I,V as d,Wa as f,X as p,Xa as y,Za as v,_ as h,_a as A,ba as s,bb as C,ec as b,fa as m,ja as c,qb as F,rc as _,wa as u}from"./chunk-J54JXSCI.js";var B=[{path:"",loadChildren:()=>import("./chunk-2QW7GKF4.js").then(i=>i.LayoutModule)},{path:"control-panel",loadChildren:()=>import("./chunk-SCCQPDWE.js").then(i=>i.ControlPanelModule)}];var Y="@",q=(()=>{class i{constructor(e,r,o,n,a){this.doc=e,this.delegate=r,this.zone=o,this.animationType=n,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=s(v,{optional:!0}),this.loadingSchedulerFn=s(K,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-3WNEVZSW.js").then(o=>o),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(e):r=e(),r.catch(o=>{throw new d(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc);let a=new n(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,r){let o=this.delegate.createRenderer(e,r);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let n=new l(o);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let G=a.createRenderer(e,r);n.use(G),this.scheduler?.notify(10)}).catch(a=>{n.use(o)}),n}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(r){y()}}static{this.\u0275prov=p({token:i,factory:i.\u0275fac})}}return i})(),l=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,r,o){this.delegate.insertBefore(t,e,r,o)}removeChild(t,e,r){this.delegate.removeChild(t,e,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,r,o){this.delegate.setAttribute(t,e,r,o)}removeAttribute(t,e,r){this.delegate.removeAttribute(t,e,r)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,r,o){this.delegate.setStyle(t,e,r,o)}removeStyle(t,e,r){this.delegate.removeStyle(t,e,r)}setProperty(t,e,r){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(t,e,r)),this.delegate.setProperty(t,e,r)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(t,e,r)),this.delegate.listen(t,e,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(Y)}},K=new h("");function Z(i="animations"){return C("NgAsyncAnimations"),c([{provide:A,useFactory:(t,e,r)=>new q(t,e,r,i),deps:[_,S,u]},{provide:g,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var H={providers:[R(),b({eventCoalescing:!0}),P(B,M()),Z(),O(()=>T({projectId:"mmanimalhealthltd",appId:"1:728464196232:web:9e3355e1ff2418301ad53d",storageBucket:"mmanimalhealthltd.firebasestorage.app",apiKey:"AIzaSyDtVCVoNpVmLe0qbW-O3a8OZeEZ2V8p1Ec",authDomain:"mmanimalhealthltd.firebaseapp.com",messagingSenderId:"728464196232"})),x(()=>V()),j(()=>k()),L(()=>z()),N()]};var U=(()=>{class i{constructor(e){this.config=e,this.title="mmanimalhealthltd"}ngOnInit(){this.config.ripple=!0}static{this.\u0275fac=function(r){return new(r||i)(f(E))}}static{this.\u0275cmp=m({type:i,selectors:[["app-root"]],standalone:!0,features:[I],decls:1,vars:0,template:function(r,o){r&1&&F(0,"router-outlet")},dependencies:[D]})}}return i})();w(U,H).catch(i=>console.error(i));
