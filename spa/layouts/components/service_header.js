import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let s,l,i,a,t,r,c,_,b,u,f,p,n,m,o,g,v,d,j,y,h,w;return{c(){s=element("div"),l=element("div"),i=element("div"),a=element("div"),t=element("div"),r=element("div"),c=element("h2"),_=text("My Service"),b=space(),u=element("div"),f=element("span"),p=space(),n=element("div"),m=element("span"),o=element("a"),g=text("Home"),v=space(),d=element("span"),j=text(">"),y=space(),h=element("span"),w=text("Service"),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var O,x,C,E,k,A,S,M,F,T,z,D,N=children(s);l=claim_element(N,"DIV",{class:!0}),F=children(l),i=claim_element(F,"DIV",{class:!0}),k=children(i),a=claim_element(k,"DIV",{class:!0}),E=children(a),t=claim_element(E,"DIV",{class:!0}),O=children(t),r=claim_element(O,"DIV",{class:!0}),A=children(r),c=claim_element(A,"H2",{class:!0}),S=children(c),_=claim_text(S,"My Service"),S.forEach(detach),A.forEach(detach),b=claim_space(O),u=claim_element(O,"DIV",{class:!0}),M=children(u),f=claim_element(M,"SPAN",{}),children(f).forEach(detach),M.forEach(detach),p=claim_space(O),n=claim_element(O,"DIV",{class:!0}),x=children(n),m=claim_element(x,"SPAN",{}),T=children(m),o=claim_element(T,"A",{title:!0,href:!0}),z=children(o),g=claim_text(z,"Home"),z.forEach(detach),T.forEach(detach),v=claim_space(x),d=claim_element(x,"SPAN",{class:!0}),D=children(d),j=claim_text(D,">"),D.forEach(detach),y=claim_space(x),h=claim_element(x,"SPAN",{}),C=children(h),w=claim_text(C,"Service"),C.forEach(detach),x.forEach(detach),O.forEach(detach),E.forEach(detach),k.forEach(detach),F.forEach(detach),N.forEach(detach),this.h()},h(){attr(c,"class","title"),attr(r,"class","page-title-heading"),attr(u,"class","heading-seperator"),attr(o,"title","Homepage"),attr(o,"href","."),attr(d,"class","ttm-bread-sep"),attr(n,"class","breadcrumb-wrapper"),attr(t,"class","col-lg-12"),attr(a,"class","row align-items-center"),attr(i,"class","container"),attr(l,"class","ttm-page-title-row-inner ttm-bgcolor-darkgrey"),attr(s,"class","ttm-page-title-row")},m(e,O){insert_hydration(e,s,O),append_hydration(s,l),append_hydration(l,i),append_hydration(i,a),append_hydration(a,t),append_hydration(t,r),append_hydration(r,c),append_hydration(c,_),append_hydration(t,b),append_hydration(t,u),append_hydration(u,f),append_hydration(t,p),append_hydration(t,n),append_hydration(n,m),append_hydration(m,o),append_hydration(o,g),append_hydration(n,v),append_hydration(n,d),append_hydration(d,j),append_hydration(n,y),append_hydration(n,h),append_hydration(h,w)},p:noop,i:noop,o:noop,d(e){e&&detach(s)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component