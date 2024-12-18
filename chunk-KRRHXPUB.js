import{b as L,d as f,e as T,f as O,g as R,h as z}from"./chunk-T6HABUB6.js";import{j as E,l as _,m as D,q as v,w as U}from"./chunk-V6OJC5AI.js";import{F as N,g as I,i as F,j,n as k}from"./chunk-YGVH7TRF.js";import"./chunk-MJR3NRSB.js";import{Bc as S,Cc as M,Gb as p,Gc as b,Ib as u,Ob as C,Pb as P,Ra as y,Va as l,Wa as c,Y as g,ba as x,fa as s,ga as w,hb as a,kb as d,pb as n,qb as r,rb as m}from"./chunk-KJXMVPC6.js";var J=t=>["/products",t],K=()=>[1,2,3,4,5,6];function Q(t,h){if(t&1&&(n(0,"div",5),m(1,"app-product-card",6),r()),t&2){let i=h.$implicit;l(),d("routerLink",P(3,J,i.id))("state",i)("product",i)}}function V(t,h){t&1&&(n(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12),m(5,"p-skeleton",13),r()(),n(6,"div",14),m(7,"p-skeleton"),r()()()())}function W(t,h){t&1&&(n(0,"div",2,0),a(2,V,8,0,"div",7),r()),t&2&&(l(2),d("ngForOf",C(1,K)))}var B=(()=>{class t{constructor(i){this.productService=i,this.firestore=x(N),this.products=[{shimmer:!0},{shimmer:!0},{shimmer:!0},{shimmer:!0},{shimmer:!0}]}ngOnInit(){this.fetchProducts(),window!==void 0&&window.scrollTo(0,0)}fetchProducts(){this.productService.fetchProducts().subscribe(i=>{this.products=i;let o=new Map;this.products.map(e=>{o.set(e.id,e)}),this.productService.productMap=o})}static{this.\u0275fac=function(o){return new(o||t)(c(v))}}static{this.\u0275cmp=s({type:t,selectors:[["app-products"]],decls:4,vars:2,consts:[["shimmer",""],[1,"col-12","sm:col-12","md:col-10","lg:col-10","mx-auto"],[1,"flex","flex-wrap","justify-content-center"],["class","w-full w-6 sm:w-6 md:w-4 lg:w-4 xl:w-4 p-1",4,"ngFor","ngForOf"],["class","flex flex-wrap justify-content-center",4,"ngIf"],[1,"w-full","w-6","sm:w-6","md:w-4","lg:w-4","xl:w-4","p-1"],[3,"routerLink","state","product"],["class","flex",4,"ngFor","ngForOf"],[1,"flex"],[1,"flex","p-card","m-3","p-3","cursor-pointer","transition-colors","transition-duration-500","hover:bg-black-alpha-10","hover:text-gray-900"],[1,"flex","flex-column","p-1"],[1,"flex-grow-1"],[2,"width","300px","height","400px"],["styleClass","w-full h-full"],[1,"text-lg","flex-grow-0","mt-2"]],template:function(o,e){o&1&&(n(0,"div",1)(1,"div",2),a(2,Q,2,5,"div",3),r(),a(3,W,3,2,"div",4),r()),o&2&&(l(2),d("ngForOf",e.products),l(),d("ngIf",!e.products.length))},dependencies:[S,M,j,_,f]})}}return t})();var $=(()=>{class t{constructor(i,o,e){this.router=i,this.route=o,this.productService=e,window.scrollTo(0,0)}ngOnInit(){this.route.params.subscribe(i=>{this.product=this.productService.productMap.get(i.id),this.product})}static{this.\u0275fac=function(o){return new(o||t)(c(F),c(I),c(v))}}static{this.\u0275cmp=s({type:t,selectors:[["app-product-details"]],decls:20,vars:5,consts:[[1,"col-12","sm:col-10","md:col-8","lg:col-10","flex","mx-auto","mt-4"],[1,"card","w-full","shadow-2","p-4","flex","flex-column","gap-4","border-round"],[1,"flex","flex-column","md:flex-row","align-items-center","gap-4"],[1,"border-round","overflow-hidden","flex-shrink-0"],["alt","Product Image",2,"object-fit","cover",3,"src"],[1,"flex","flex-column","gap-2","w-full"],[1,"text-2xl","font-bold","text-center","md:text-left","text-black-alpha-90"],[1,"text-md","text-center","md:text-left","text-black-alpha-70"],[1,"flex","justify-content-center","sm:justify-content-center","md:justify-content-start","gap-2"],[1,"font-semibold","text-md"],["severity","info",3,"value"],[1,"text-xl","font-semibold","text-black-alpha-90","mb-2"],[1,"text-black-alpha-70","line-height-3"]],template:function(o,e){o&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),m(4,"img",4),r(),n(5,"div",5)(6,"div",6),p(7),r(),n(8,"div",7),p(9),r(),n(10,"div",8)(11,"span",9),p(12,"Category:"),r(),m(13,"p-tag",10),r()()(),m(14,"p-divider"),n(15,"div")(16,"div",11),p(17,"Details"),r(),n(18,"div",12),p(19),r()()()()),o&2&&(l(4),d("src",e.product==null?null:e.product.imageUrl,y),l(3),u(" ",e.product==null?null:e.product.name," "),l(2),u(" ",e.product==null?null:e.product.shortDescription," "),l(4),d("value",e.product==null?null:e.product.category),l(6),u(" ",e.product==null?null:e.product.description," "))},dependencies:[T,R]})}}return t})();var q=[{path:"",component:B},{path:":id",component:$}];var It=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=w({type:t})}static{this.\u0275inj=g({imports:[b,U,k.forChild(q),E,D,f,L,O,z]})}}return t})();export{It as ProductsModule};
