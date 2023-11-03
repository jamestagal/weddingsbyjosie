import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let c,b,o,t,E,z,$,x,P,F,w,a,m,f,M,D,i,_,k,I,W,l,A,y,H,N,j,s,g,p,O,T,n,d,S,L,R,u,C,h,B,V,v,r,U;return{c(){c=element("div"),b=element("div"),o=element("div"),t=element("div"),E=element("h4"),z=text("2. Book an appointment"),$=space(),x=element("p"),P=text('Once you’ve made your decision, you book a "meetup" at a time/location\n          convenient to you. I can be contacted via email or by mobile. I am\n          flexible and can come to you or vice versa.'),F=space(),w=element("div"),a=element("div"),m=element("div"),f=element("div"),M=element("i"),D=space(),i=element("div"),_=element("div"),k=element("h5"),I=text("My number :"),W=space(),l=element("div"),A=element("p"),y=element("a"),H=text("0406 379 530"),N=space(),j=element("div"),s=element("div"),g=element("div"),p=element("div"),O=element("i"),T=space(),n=element("div"),d=element("div"),S=element("h5"),L=text("My email :"),R=space(),u=element("div"),C=element("p"),h=element("a"),B=text("weddingsbyjosiecbr@gmail.com"),V=space(),v=element("div"),r=element("img"),this.h()},l(e){c=claim_element(e,"DIV",{class:!0});var U,K,q,Y,G,X,Q,Z,J,ve=children(c),ue,ce,te,ee,ne,se,oe,ie,ae,re,le,de,he,me,fe,pe,ge;b=claim_element(ve,"DIV",{class:!0}),ue=children(b),o=claim_element(ue,"DIV",{class:!0}),Y=children(o),t=claim_element(Y,"DIV",{class:!0}),U=children(t),E=claim_element(U,"H4",{}),ce=children(E),z=claim_text(ce,"2. Book an appointment"),ce.forEach(detach),$=claim_space(U),x=claim_element(U,"P",{}),te=children(x),P=claim_text(te,'Once you’ve made your decision, you book a "meetup" at a time/location\n          convenient to you. I can be contacted via email or by mobile. I am\n          flexible and can come to you or vice versa.'),te.forEach(detach),F=claim_space(U),w=claim_element(U,"DIV",{class:!0}),Z=children(w),a=claim_element(Z,"DIV",{class:!0}),K=children(a),m=claim_element(K,"DIV",{class:!0}),J=children(m),f=claim_element(J,"DIV",{class:!0}),ee=children(f),M=claim_element(ee,"I",{class:!0}),children(M).forEach(detach),ee.forEach(detach),J.forEach(detach),D=claim_space(K),i=claim_element(K,"DIV",{class:!0}),X=children(i),_=claim_element(X,"DIV",{class:!0}),ne=children(_),k=claim_element(ne,"H5",{}),se=children(k),I=claim_text(se,"My number :"),se.forEach(detach),ne.forEach(detach),W=claim_space(X),l=claim_element(X,"DIV",{class:!0}),oe=children(l),A=claim_element(oe,"P",{}),ie=children(A),y=claim_element(ie,"A",{href:!0}),ae=children(y),H=claim_text(ae,"0406 379 530"),ae.forEach(detach),ie.forEach(detach),oe.forEach(detach),X.forEach(detach),K.forEach(detach),Z.forEach(detach),N=claim_space(U),j=claim_element(U,"DIV",{class:!0}),re=children(j),s=claim_element(re,"DIV",{class:!0}),G=children(s),g=claim_element(G,"DIV",{class:!0}),le=children(g),p=claim_element(le,"DIV",{class:!0}),de=children(p),O=claim_element(de,"I",{class:!0}),children(O).forEach(detach),de.forEach(detach),le.forEach(detach),T=claim_space(G),n=claim_element(G,"DIV",{class:!0}),q=children(n),d=claim_element(q,"DIV",{class:!0}),he=children(d),S=claim_element(he,"H5",{}),me=children(S),L=claim_text(me,"My email :"),me.forEach(detach),he.forEach(detach),R=claim_space(q),u=claim_element(q,"DIV",{class:!0}),fe=children(u),C=claim_element(fe,"P",{}),pe=children(C),h=claim_element(pe,"A",{href:!0}),ge=children(h),B=claim_text(ge,"weddingsbyjosiecbr@gmail.com"),ge.forEach(detach),pe.forEach(detach),fe.forEach(detach),q.forEach(detach),G.forEach(detach),re.forEach(detach),U.forEach(detach),V=claim_space(Y),v=claim_element(Y,"DIV",{class:!0}),Q=children(v),r=claim_element(Q,"IMG",{class:!0,src:!0,alt:!0}),Q.forEach(detach),Y.forEach(detach),ue.forEach(detach),ve.forEach(detach),this.h()},h(){attr(M,"class","ti ti-mobile"),attr(f,"class","ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg"),attr(m,"class","featured-icon"),attr(_,"class","featured-title"),attr(y,"href","tel:0406 379 530"),attr(l,"class","featured-desc"),attr(i,"class","featured-content"),attr(a,"class","featured-icon-box style4 icon-align-before-content icon-ver_align-top"),attr(w,"class","mt-25"),attr(O,"class","ti ti-email"),attr(p,"class","ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg"),attr(g,"class","featured-icon"),attr(d,"class","featured-title"),attr(h,"href","mailto:weddingsbyjosiecbr@gmail.com"),attr(u,"class","featured-desc"),attr(n,"class","featured-content"),attr(s,"class","featured-icon-box style4 icon-align-before-content icon-ver_align-top"),attr(j,"class","mt-30"),attr(t,"class","col-lg-7 col-md-7 col-sm-12"),attr(r,"class","img-fluid"),src_url_equal(r.src,U="media/service/wedding_service02.webp")||attr(r,"src",U),attr(r,"alt","a wedding"),attr(v,"class","col-lg-5 col-md-5 col-sm-12"),attr(o,"class","row"),attr(b,"class","ttm-service-description"),attr(c,"class","ttm-service-single-content-area")},m(e,U){insert_hydration(e,c,U),append_hydration(c,b),append_hydration(b,o),append_hydration(o,t),append_hydration(t,E),append_hydration(E,z),append_hydration(t,$),append_hydration(t,x),append_hydration(x,P),append_hydration(t,F),append_hydration(t,w),append_hydration(w,a),append_hydration(a,m),append_hydration(m,f),append_hydration(f,M),append_hydration(a,D),append_hydration(a,i),append_hydration(i,_),append_hydration(_,k),append_hydration(k,I),append_hydration(i,W),append_hydration(i,l),append_hydration(l,A),append_hydration(A,y),append_hydration(y,H),append_hydration(t,N),append_hydration(t,j),append_hydration(j,s),append_hydration(s,g),append_hydration(g,p),append_hydration(p,O),append_hydration(s,T),append_hydration(s,n),append_hydration(n,d),append_hydration(d,S),append_hydration(S,L),append_hydration(n,R),append_hydration(n,u),append_hydration(u,C),append_hydration(C,h),append_hydration(h,B),append_hydration(o,V),append_hydration(o,v),append_hydration(v,r)},p:noop,i:noop,o:noop,d(e){e&&detach(c)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component