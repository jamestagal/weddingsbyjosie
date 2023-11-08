import{SvelteComponent,append_hydration,attr,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,detach,element,init,insert_hydration,mount_component,noop,safe_not_equal,space,src_url_equal,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import Service2Header from"../components/service2_header.js";function create_fragment(){let h,V,u,_,l,S,f,v,r,he,te,w,i,d,c,H,G,$,j,q,K,o,T,Q,Z,N,ne,Y,a,M,s,A,k,z,re,E,L,ae,se,C,x,I,U,ee,O,t,y,b,F,X,g,P,J,W,m,p,n,oe,ie,R,D,ce,le,de,ue,B;return h=new Service2Header({}),{c(){create_component(h.$$.fragment),V=space(),u=element("section"),_=element("div"),l=element("div"),S=element("div"),f=element("div"),v=element("div"),r=element("img"),te=space(),w=element("div"),i=element("div"),d=element("div"),c=element("div"),H=element("h5"),G=text("Alternative Wedding Service - $ negotiable"),$=space(),j=element("h2"),q=text("The Intimate Wedding"),K=space(),o=element("div"),T=element("p"),Q=text(`A cheaper option, if you want a simple, affordable but still personal ceremony. You may be
                            having your religious ceremony here or overseas with family and friends, or simply want
                            to get married with no frills.`),Z=space(),N=element("p"),ne=text("I’ll provide a personal ceremony for you and perform the face to face ceremony which is also compulsory as part of the legal process. This ceremony may be at a location of your choice or my home, with a small number of guests."),Y=space(),a=element("div"),M=element("div"),s=element("div"),A=element("div"),k=element("div"),z=element("i"),re=space(),E=element("div"),L=element("h5"),ae=text("The Ceremony"),se=space(),C=element("div"),x=element("div"),I=element("p"),U=text("You will get a beautiful, personalised and intimate ceremony. This is perfect for those who want to legalise their union in a personal, meaningful and affordable ceremony."),ee=space(),O=element("div"),t=element("div"),y=element("div"),b=element("div"),F=element("i"),X=space(),g=element("div"),P=element("h5"),J=text("The Legals"),W=space(),m=element("div"),p=element("div"),n=element("p"),oe=text("BEFORE: I prepare all the legal paperwork, this paperwork must be completed a minimum of 1 month before the ceremony. This is a legal reqirement."),ie=element("br"),R=element("span"),D=element("i"),ce=text(`I need to sight evidence of Identification e.g
                                          passport/driver’s licence/birth certificate.`),le=space(),de=element("br"),ue=text(`AFTER: I will lodge all the paperwork with the ACT Births, Deaths and Marriages Department. Then I Inform you when the marriage has been registered and send you the link so that
                                        you can apply for the official document.`),this.h()},l(e){claim_component(h.$$.fragment,e),V=claim_space(e),u=claim_element(e,"SECTION",{class:!0});var B,Ke=children(u),We,pe,Re,Ae,Ee,Oe,be,je,fe,ze,we,ve,xe,Ce,ge,ke,me,ye,Me,Fe,Te,_e,De,Ne,Le,he,Pe,He,Ie,Be,Ve,$e,Ue,Se;_=claim_element(Ke,"DIV",{class:!0}),We=children(_),l=claim_element(We,"DIV",{class:!0}),pe=children(l),S=claim_element(pe,"DIV",{class:!0}),Re=children(S),f=claim_element(Re,"DIV",{class:!0}),Ae=children(f),v=claim_element(Ae,"DIV",{class:!0}),Ee=children(v),r=claim_element(Ee,"IMG",{class:!0,src:!0,title:!0,alt:!0}),Ee.forEach(detach),Ae.forEach(detach),Re.forEach(detach),te=claim_space(pe),w=claim_element(pe,"DIV",{class:!0}),Oe=children(w),i=claim_element(Oe,"DIV",{class:!0}),be=children(i),d=claim_element(be,"DIV",{class:!0}),je=children(d),c=claim_element(je,"DIV",{class:!0}),fe=children(c),H=claim_element(fe,"H5",{}),ze=children(H),G=claim_text(ze,"Alternative Wedding Service - $ negotiable"),ze.forEach(detach),$=claim_space(fe),j=claim_element(fe,"H2",{class:!0}),we=children(j),q=claim_text(we,"The Intimate Wedding"),we.forEach(detach),fe.forEach(detach),K=claim_space(je),o=claim_element(je,"DIV",{class:!0}),ve=children(o),T=claim_element(ve,"P",{}),xe=children(T),Q=claim_text(xe,`A cheaper option, if you want a simple, affordable but still personal ceremony. You may be
                            having your religious ceremony here or overseas with family and friends, or simply want
                            to get married with no frills.`),xe.forEach(detach),Z=claim_space(ve),N=claim_element(ve,"P",{}),Ce=children(N),ne=claim_text(Ce,"I’ll provide a personal ceremony for you and perform the face to face ceremony which is also compulsory as part of the legal process. This ceremony may be at a location of your choice or my home, with a small number of guests."),Ce.forEach(detach),ve.forEach(detach),je.forEach(detach),Y=claim_space(be),a=claim_element(be,"DIV",{class:!0}),ge=children(a),M=claim_element(ge,"DIV",{class:!0}),ke=children(M),s=claim_element(ke,"DIV",{class:!0}),me=children(s),A=claim_element(me,"DIV",{class:!0}),ye=children(A),k=claim_element(ye,"DIV",{class:!0}),Me=children(k),z=claim_element(Me,"I",{class:!0}),children(z).forEach(detach),Me.forEach(detach),ye.forEach(detach),re=claim_space(me),E=claim_element(me,"DIV",{class:!0}),Fe=children(E),L=claim_element(Fe,"H5",{}),Te=children(L),ae=claim_text(Te,"The Ceremony"),Te.forEach(detach),Fe.forEach(detach),se=claim_space(me),C=claim_element(me,"DIV",{class:!0}),_e=children(C),x=claim_element(_e,"DIV",{class:!0}),De=children(x),I=claim_element(De,"P",{}),Ne=children(I),U=claim_text(Ne,"You will get a beautiful, personalised and intimate ceremony. This is perfect for those who want to legalise their union in a personal, meaningful and affordable ceremony."),Ne.forEach(detach),De.forEach(detach),_e.forEach(detach),me.forEach(detach),ke.forEach(detach),ee=claim_space(ge),O=claim_element(ge,"DIV",{class:!0}),Le=children(O),t=claim_element(Le,"DIV",{class:!0}),he=children(t),y=claim_element(he,"DIV",{class:!0}),Pe=children(y),b=claim_element(Pe,"DIV",{class:!0}),He=children(b),F=claim_element(He,"I",{class:!0}),children(F).forEach(detach),He.forEach(detach),Pe.forEach(detach),X=claim_space(he),g=claim_element(he,"DIV",{class:!0}),Ie=children(g),P=claim_element(Ie,"H5",{}),Be=children(P),J=claim_text(Be,"The Legals"),Be.forEach(detach),Ie.forEach(detach),W=claim_space(he),m=claim_element(he,"DIV",{class:!0}),Ve=children(m),p=claim_element(Ve,"DIV",{class:!0}),$e=children(p),n=claim_element($e,"P",{}),B=children(n),oe=claim_text(B,"BEFORE: I prepare all the legal paperwork, this paperwork must be completed a minimum of 1 month before the ceremony. This is a legal reqirement."),ie=claim_element(B,"BR",{}),R=claim_element(B,"SPAN",{}),Ue=children(R),D=claim_element(Ue,"I",{}),Se=children(D),ce=claim_text(Se,`I need to sight evidence of Identification e.g
                                          passport/driver’s licence/birth certificate.`),Se.forEach(detach),Ue.forEach(detach),le=claim_space(B),de=claim_element(B,"BR",{}),ue=claim_text(B,`AFTER: I will lodge all the paperwork with the ACT Births, Deaths and Marriages Department. Then I Inform you when the marriage has been registered and send you the link so that
                                        you can apply for the official document.`),B.forEach(detach),$e.forEach(detach),Ve.forEach(detach),he.forEach(detach),Le.forEach(detach),ge.forEach(detach),be.forEach(detach),Oe.forEach(detach),pe.forEach(detach),We.forEach(detach),Ke.forEach(detach),this.h()},h(){attr(r,"class","img-fluid"),src_url_equal(r.src,he="media/service/WeddingCeremonyAlt.webp")||attr(r,"src",he),attr(r,"title","single-img-three"),attr(r,"alt","single-img-three"),attr(v,"class","ttm_single_image-wrapper"),attr(f,"class","d-inline-block border p-3"),attr(S,"class","col-lg-6"),attr(j,"class","title"),attr(c,"class","title-header"),attr(o,"class","title-desc"),attr(d,"class","section-title"),attr(z,"class","flaticon flaticon-ring"),attr(k,"class","ttm-icon ttm-icon_element-fill ttm-icon_element-color-skincolor ttm-icon_element-size-sm ttm-icon_element-style-rounded"),attr(A,"class","featured-icon"),attr(E,"class","featured-title"),attr(x,"class","featured-desc"),attr(C,"class","featured-content"),attr(s,"class","featured-icon-box icon-align-before-title style6"),attr(M,"class","col-md-6"),attr(F,"class","ti ti-pencil-alt"),attr(b,"class","ttm-icon ttm-icon_element-fill ttm-icon_element-color-skincolor ttm-icon_element-size-sm ttm-icon_element-style-rounded"),attr(y,"class","featured-icon"),attr(g,"class","featured-title"),attr(p,"class","featured-desc"),attr(m,"class","featured-content"),attr(t,"class","featured-icon-box icon-align-before-title style6"),attr(O,"class","col-md-6"),attr(a,"class","row"),attr(i,"class","res-991-pt-40 pr-15"),attr(w,"class","col-lg-6"),attr(l,"class","row"),attr(_,"class","container"),attr(u,"class","ttm-row about-section bg-img6 ttm-bg ttm-bgimage-yes clearfix")},m(e,he){mount_component(h,e,he),insert_hydration(e,V,he),insert_hydration(e,u,he),append_hydration(u,_),append_hydration(_,l),append_hydration(l,S),append_hydration(S,f),append_hydration(f,v),append_hydration(v,r),append_hydration(l,te),append_hydration(l,w),append_hydration(w,i),append_hydration(i,d),append_hydration(d,c),append_hydration(c,H),append_hydration(H,G),append_hydration(c,$),append_hydration(c,j),append_hydration(j,q),append_hydration(d,K),append_hydration(d,o),append_hydration(o,T),append_hydration(T,Q),append_hydration(o,Z),append_hydration(o,N),append_hydration(N,ne),append_hydration(i,Y),append_hydration(i,a),append_hydration(a,M),append_hydration(M,s),append_hydration(s,A),append_hydration(A,k),append_hydration(k,z),append_hydration(s,re),append_hydration(s,E),append_hydration(E,L),append_hydration(L,ae),append_hydration(s,se),append_hydration(s,C),append_hydration(C,x),append_hydration(x,I),append_hydration(I,U),append_hydration(a,ee),append_hydration(a,O),append_hydration(O,t),append_hydration(t,y),append_hydration(y,b),append_hydration(b,F),append_hydration(t,X),append_hydration(t,g),append_hydration(g,P),append_hydration(P,J),append_hydration(t,W),append_hydration(t,m),append_hydration(m,p),append_hydration(p,n),append_hydration(n,oe),append_hydration(n,ie),append_hydration(n,R),append_hydration(R,D),append_hydration(D,ce),append_hydration(n,le),append_hydration(n,de),append_hydration(n,ue),B=!0},p:noop,i(e){if(B)return;transition_in(h.$$.fragment,e),B=!0},o(e){transition_out(h.$$.fragment,e),B=!1},d(e){destroy_component(h,e),e&&detach(V),e&&detach(u)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component