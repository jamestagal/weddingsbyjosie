import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let o,u,d,l,t,a,i,_,b,c,f,p,n,h,s,g,v,r,j,y,m,w;return{c(){o=element("div"),u=element("div"),d=element("div"),l=element("div"),t=element("div"),a=element("div"),i=element("h2"),_=text("Alternative Service"),b=space(),c=element("div"),f=element("span"),p=space(),n=element("div"),h=element("span"),s=element("a"),g=text("Home"),v=space(),r=element("span"),j=text(">"),y=space(),m=element("span"),w=text("Alternative"),this.h()},l(e){o=claim_element(e,"DIV",{class:!0});var O,x,C,E,k,A,S,M,F,T,z,D,N=children(o);u=claim_element(N,"DIV",{class:!0}),M=children(u),d=claim_element(M,"DIV",{class:!0}),k=children(d),l=claim_element(k,"DIV",{class:!0}),E=children(l),t=claim_element(E,"DIV",{class:!0}),O=children(t),a=claim_element(O,"DIV",{class:!0}),A=children(a),i=claim_element(A,"H2",{class:!0}),C=children(i),_=claim_text(C,"Alternative Service"),C.forEach(detach),A.forEach(detach),b=claim_space(O),c=claim_element(O,"DIV",{class:!0}),S=children(c),f=claim_element(S,"SPAN",{}),children(f).forEach(detach),S.forEach(detach),p=claim_space(O),n=claim_element(O,"DIV",{class:!0}),x=children(n),h=claim_element(x,"SPAN",{}),F=children(h),s=claim_element(F,"A",{title:!0,href:!0}),T=children(s),g=claim_text(T,"Home"),T.forEach(detach),F.forEach(detach),v=claim_space(x),r=claim_element(x,"SPAN",{class:!0}),z=children(r),j=claim_text(z,">"),z.forEach(detach),y=claim_space(x),m=claim_element(x,"SPAN",{}),D=children(m),w=claim_text(D,"Alternative"),D.forEach(detach),x.forEach(detach),O.forEach(detach),E.forEach(detach),k.forEach(detach),M.forEach(detach),N.forEach(detach),this.h()},h(){attr(i,"class","title"),attr(a,"class","page-title-heading"),attr(c,"class","heading-seperator"),attr(s,"title","Homepage"),attr(s,"href","."),attr(r,"class","ttm-bread-sep"),attr(n,"class","breadcrumb-wrapper"),attr(t,"class","col-lg-12"),attr(l,"class","row align-items-center"),attr(d,"class","container"),attr(u,"class","ttm-page-title-row-inner ttm-bgcolor-darkgrey"),attr(o,"class","ttm-page-title-row")},m(e,O){insert_hydration(e,o,O),append_hydration(o,u),append_hydration(u,d),append_hydration(d,l),append_hydration(l,t),append_hydration(t,a),append_hydration(a,i),append_hydration(i,_),append_hydration(t,b),append_hydration(t,c),append_hydration(c,f),append_hydration(t,p),append_hydration(t,n),append_hydration(n,h),append_hydration(h,s),append_hydration(s,g),append_hydration(n,v),append_hydration(n,r),append_hydration(r,j),append_hydration(n,y),append_hydration(n,m),append_hydration(m,w)},p:noop,i:noop,o:noop,d(e){e&&detach(o)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component