import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let h,M,A,k,i,C,r,U,pe,t,w,a,L,me,he,g,ce,oe,B,J,Z,l,O,x,N,q,o,f,V,se,le,T,R,fe,K,s,z,F,H,ie,d,S,$,te,ee,E,m,Y,G,X,Q,u,y,D,W,ne,n,b,I,ae,re,v,P,de,ue,p,j,_,c,ge;return{c(){h=element("section"),M=element("div"),A=element("div"),k=element("div"),i=element("div"),C=element("div"),r=element("div"),U=element("div"),pe=space(),t=element("div"),w=element("div"),a=element("div"),L=element("h5"),me=text("Contact Me"),he=space(),g=element("h2"),ce=text("It's Your Turn!"),oe=space(),B=element("p"),J=text(`There is no obligation when contacting me. You are most
                  welcome to have a chat to find out whether my service is right
                  for you.`),Z=space(),l=element("div"),O=element("div"),x=element("div"),N=element("i"),q=space(),o=element("div"),f=element("div"),V=element("h5"),se=text("Location"),le=space(),T=element("div"),R=element("p"),fe=text("Gungahlin area, ACT"),K=space(),s=element("div"),z=element("div"),F=element("div"),H=element("i"),ie=space(),d=element("div"),S=element("div"),$=element("h5"),te=text("Call Or Email"),ee=space(),E=element("div"),m=element("p"),Y=text("+61 406 379 530"),G=element("br"),X=text("weddingsbyjosiecbr@gmail.com"),Q=space(),u=element("div"),y=element("div"),D=element("div"),W=element("i"),ne=space(),n=element("div"),b=element("div"),I=element("h5"),ae=text("Office Hours"),re=space(),v=element("div"),P=element("p"),de=text("Mon – Sun: 9.00am to 8.00pm"),ue=space(),p=element("div"),j=element("div"),_=element("div"),c=element("img"),this.h()},l(e){h=claim_element(e,"SECTION",{class:!0});var tt=children(h),Ye,Ue,We,ye,Ie,we,ge,Re,Ce,Te,Se,Ae,ve,Me,Fe,Ee,ze,De,Ne,Le,xe,Pe,He,_e,Be,Ve,$e,je,be,Ke,qe,Oe,Ge,Xe,Qe,Ze,Je,et,ke;M=claim_element(tt,"DIV",{class:!0}),Ye=children(M),A=claim_element(Ye,"DIV",{class:!0}),Ue=children(A),k=claim_element(Ue,"DIV",{class:!0}),We=children(k),i=claim_element(We,"DIV",{class:!0}),ye=children(i),C=claim_element(ye,"DIV",{class:!0}),Ie=children(C),r=claim_element(Ie,"DIV",{class:!0}),we=children(r),U=claim_element(we,"DIV",{class:!0}),children(U).forEach(detach),pe=claim_space(we),t=claim_element(we,"DIV",{class:!0}),ge=children(t),w=claim_element(ge,"DIV",{class:!0}),Re=children(w),a=claim_element(Re,"DIV",{class:!0}),Ce=children(a),L=claim_element(Ce,"H5",{}),Te=children(L),me=claim_text(Te,"Contact Me"),Te.forEach(detach),he=claim_space(Ce),g=claim_element(Ce,"H2",{class:!0}),Se=children(g),ce=claim_text(Se,"It's Your Turn!"),Se.forEach(detach),Ce.forEach(detach),Re.forEach(detach),oe=claim_space(ge),B=claim_element(ge,"P",{}),Ae=children(B),J=claim_text(Ae,`There is no obligation when contacting me. You are most
                  welcome to have a chat to find out whether my service is right
                  for you.`),Ae.forEach(detach),Z=claim_space(ge),l=claim_element(ge,"DIV",{class:!0}),ve=children(l),O=claim_element(ve,"DIV",{class:!0}),Me=children(O),x=claim_element(Me,"DIV",{class:!0}),Fe=children(x),N=claim_element(Fe,"I",{class:!0}),children(N).forEach(detach),Fe.forEach(detach),Me.forEach(detach),q=claim_space(ve),o=claim_element(ve,"DIV",{class:!0}),Ee=children(o),f=claim_element(Ee,"DIV",{class:!0}),ze=children(f),V=claim_element(ze,"H5",{}),De=children(V),se=claim_text(De,"Location"),De.forEach(detach),ze.forEach(detach),le=claim_space(Ee),T=claim_element(Ee,"DIV",{class:!0}),Ne=children(T),R=claim_element(Ne,"P",{}),Le=children(R),fe=claim_text(Le,"Gungahlin area, ACT"),Le.forEach(detach),Ne.forEach(detach),Ee.forEach(detach),ve.forEach(detach),K=claim_space(ge),s=claim_element(ge,"DIV",{class:!0}),xe=children(s),z=claim_element(xe,"DIV",{class:!0}),Pe=children(z),F=claim_element(Pe,"DIV",{class:!0}),He=children(F),H=claim_element(He,"I",{class:!0}),children(H).forEach(detach),He.forEach(detach),Pe.forEach(detach),ie=claim_space(xe),d=claim_element(xe,"DIV",{class:!0}),_e=children(d),S=claim_element(_e,"DIV",{class:!0}),Be=children(S),$=claim_element(Be,"H5",{}),Ve=children($),te=claim_text(Ve,"Call Or Email"),Ve.forEach(detach),Be.forEach(detach),ee=claim_space(_e),E=claim_element(_e,"DIV",{class:!0}),$e=children(E),m=claim_element($e,"P",{}),je=children(m),Y=claim_text(je,"+61 406 379 530"),G=claim_element(je,"BR",{}),X=claim_text(je,"weddingsbyjosiecbr@gmail.com"),je.forEach(detach),$e.forEach(detach),_e.forEach(detach),xe.forEach(detach),Q=claim_space(ge),u=claim_element(ge,"DIV",{class:!0}),be=children(u),y=claim_element(be,"DIV",{class:!0}),Ke=children(y),D=claim_element(Ke,"DIV",{class:!0}),qe=children(D),W=claim_element(qe,"I",{class:!0}),children(W).forEach(detach),qe.forEach(detach),Ke.forEach(detach),ne=claim_space(be),n=claim_element(be,"DIV",{class:!0}),Oe=children(n),b=claim_element(Oe,"DIV",{class:!0}),Ge=children(b),I=claim_element(Ge,"H5",{}),Xe=children(I),ae=claim_text(Xe,"Office Hours"),Xe.forEach(detach),Ge.forEach(detach),re=claim_space(Oe),v=claim_element(Oe,"DIV",{class:!0}),Qe=children(v),P=claim_element(Qe,"P",{}),Ze=children(P),de=claim_text(Ze,"Mon – Sun: 9.00am to 8.00pm"),Ze.forEach(detach),Qe.forEach(detach),Oe.forEach(detach),be.forEach(detach),ge.forEach(detach),we.forEach(detach),Ie.forEach(detach),ue=claim_space(ye),p=claim_element(ye,"DIV",{class:!0}),Je=children(p),j=claim_element(Je,"DIV",{class:!0}),et=children(j),_=claim_element(et,"DIV",{class:!0}),ke=children(_),c=claim_element(ke,"IMG",{class:!0,src:!0,title:!0,alt:!0}),ke.forEach(detach),et.forEach(detach),Je.forEach(detach),ye.forEach(detach),We.forEach(detach),Ue.forEach(detach),Ye.forEach(detach),tt.forEach(detach),this.h()},h(){attr(U,"class","ttm-col-wrapper-bg-layer ttm-bg-layer"),attr(g,"class","title"),attr(a,"class","title-header"),attr(w,"class","section-title without-seperator"),attr(N,"class","ti ti-location-pin"),attr(x,"class","ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-sm"),attr(O,"class","featured-icon"),attr(f,"class","featured-title"),attr(T,"class","featured-desc"),attr(o,"class","featured-content"),attr(l,"class","featured-icon-box icon-align-before-content icon-ver_align-top style8"),attr(H,"class","ti ti-files"),attr(F,"class","ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-sm"),attr(z,"class","featured-icon"),attr(S,"class","featured-title"),attr(E,"class","featured-desc"),attr(d,"class","featured-content"),attr(s,"class","featured-icon-box icon-align-before-content icon-ver_align-top style8"),attr(W,"class","ti ti-briefcase"),attr(D,"class","ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-sm"),attr(y,"class","featured-icon"),attr(b,"class","featured-title"),attr(v,"class","featured-desc"),attr(n,"class","featured-content"),attr(u,"class","featured-icon-box icon-align-before-content icon-ver_align-top style8"),attr(t,"class","layer-content"),attr(r,"class","ttm-col-bgcolor-yes ttm-bg"),attr(C,"class","col-lg-5 col-md-5 col-sm-12"),attr(c,"class","img-fluid"),src_url_equal(c.src,ge="media/service/wedding_service04.webp")||attr(c,"src",ge),attr(c,"title","single-img-three"),attr(c,"alt","single-img-three"),attr(_,"class","ttm_single_image-wrapper"),attr(j,"class","d-inline-block border p-3"),attr(p,"class","col-lg-6"),attr(i,"class","row no-gutters"),attr(k,"class","col-lg-12"),attr(A,"class","row"),attr(M,"class","container"),attr(h,"class","ttm-row contact-us-section bg-layer-equal-height clearfix")},m(e,ge){insert_hydration(e,h,ge),append_hydration(h,M),append_hydration(M,A),append_hydration(A,k),append_hydration(k,i),append_hydration(i,C),append_hydration(C,r),append_hydration(r,U),append_hydration(r,pe),append_hydration(r,t),append_hydration(t,w),append_hydration(w,a),append_hydration(a,L),append_hydration(L,me),append_hydration(a,he),append_hydration(a,g),append_hydration(g,ce),append_hydration(t,oe),append_hydration(t,B),append_hydration(B,J),append_hydration(t,Z),append_hydration(t,l),append_hydration(l,O),append_hydration(O,x),append_hydration(x,N),append_hydration(l,q),append_hydration(l,o),append_hydration(o,f),append_hydration(f,V),append_hydration(V,se),append_hydration(o,le),append_hydration(o,T),append_hydration(T,R),append_hydration(R,fe),append_hydration(t,K),append_hydration(t,s),append_hydration(s,z),append_hydration(z,F),append_hydration(F,H),append_hydration(s,ie),append_hydration(s,d),append_hydration(d,S),append_hydration(S,$),append_hydration($,te),append_hydration(d,ee),append_hydration(d,E),append_hydration(E,m),append_hydration(m,Y),append_hydration(m,G),append_hydration(m,X),append_hydration(t,Q),append_hydration(t,u),append_hydration(u,y),append_hydration(y,D),append_hydration(D,W),append_hydration(u,ne),append_hydration(u,n),append_hydration(n,b),append_hydration(b,I),append_hydration(I,ae),append_hydration(n,re),append_hydration(n,v),append_hydration(v,P),append_hydration(P,de),append_hydration(i,ue),append_hydration(i,p),append_hydration(p,j),append_hydration(j,_),append_hydration(_,c)},p:noop,i:noop,o:noop,d(e){e&&detach(h)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component