import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let u,f,o,_,w,S,i,oe,P,x,l,s,c,z,ee,J,v,H,K,r,R,$,G,M,I,X,a,A,n,m,k,T,te,E,N,q,W,C,O,F,B,V,h,t,y,j,L,Y,b,D,Q,Z,g,p,d,ne,se,U;return{c(){u=element("section"),f=element("div"),o=element("div"),_=element("div"),w=element("div"),S=element("div"),i=element("img"),P=space(),x=element("div"),l=element("div"),s=element("div"),c=element("div"),z=element("h5"),ee=text("Alternate Wedding Service - $ negotiable"),J=space(),v=element("h2"),H=text("The Intimate Wedding"),K=space(),r=element("div"),R=element("p"),$=text(`A cheaper option, if you want a simple, affordable but still personal ceremony. You may be
                            having your religious ceremony here or overseas with family and friends, or simply want
                            to get married with no frills.`),G=space(),M=element("p"),I=text("I’ll provide a personal ceremony for you and perform the face to face ceremony which is also compulsory as part of the legal process. This ceremony may be at a location of your choice or my home, with a small number of guests."),X=space(),a=element("div"),A=element("div"),n=element("div"),m=element("div"),k=element("div"),T=element("i"),te=space(),E=element("div"),N=element("h5"),q=text("The Ceremony"),W=space(),C=element("div"),O=element("div"),F=element("p"),B=text("You will get a beautiful, personalised and intimate ceremony like a registry style service. This is perfect for those who want to legalise their union without a traditional wedding but do it in an affordable way yet still in a meaningful ceremony."),V=space(),h=element("div"),t=element("div"),y=element("div"),j=element("div"),L=element("i"),Y=space(),b=element("div"),D=element("h5"),Q=text("The Legals"),Z=space(),g=element("div"),p=element("div"),d=element("p"),ne=text(`BEFORE: I prepare all the legal paperwork, this paperwork must be completed a minimum of 1 month before the ceremony. This is a legal reqirement.
                                        `),se=element("br"),U=text(`AFTER: I will lodge all the paperwork with the ACT Births, Deaths and Marriages Department. Then I Inform you when the marriage has been registered and send you the link so that
                                        you can apply for the official document.`),this.h()},l(e){u=claim_element(e,"SECTION",{class:!0});var Re=children(u),ye,ce,Me,_e,je,ge,ue,he,ae,Te,pe,de,ve,be,le,me,ie,we,Oe,xe,Ce,Ee,ke,Ae,Se,oe,Fe,fe,ze,De,Ne,Le,re;f=claim_element(Re,"DIV",{class:!0}),ye=children(f),o=claim_element(ye,"DIV",{class:!0}),ce=children(o),_=claim_element(ce,"DIV",{class:!0}),Me=children(_),w=claim_element(Me,"DIV",{class:!0}),_e=children(w),S=claim_element(_e,"DIV",{class:!0}),je=children(S),i=claim_element(je,"IMG",{class:!0,src:!0,title:!0,alt:!0}),je.forEach(detach),_e.forEach(detach),Me.forEach(detach),P=claim_space(ce),x=claim_element(ce,"DIV",{class:!0}),ge=children(x),l=claim_element(ge,"DIV",{class:!0}),ue=children(l),s=claim_element(ue,"DIV",{class:!0}),he=children(s),c=claim_element(he,"DIV",{class:!0}),ae=children(c),z=claim_element(ae,"H5",{}),Te=children(z),ee=claim_text(Te,"Alternate Wedding Service - $ negotiable"),Te.forEach(detach),J=claim_space(ae),v=claim_element(ae,"H2",{class:!0}),pe=children(v),H=claim_text(pe,"The Intimate Wedding"),pe.forEach(detach),ae.forEach(detach),K=claim_space(he),r=claim_element(he,"DIV",{class:!0}),de=children(r),R=claim_element(de,"P",{}),ve=children(R),$=claim_text(ve,`A cheaper option, if you want a simple, affordable but still personal ceremony. You may be
                            having your religious ceremony here or overseas with family and friends, or simply want
                            to get married with no frills.`),ve.forEach(detach),G=claim_space(de),M=claim_element(de,"P",{}),be=children(M),I=claim_text(be,"I’ll provide a personal ceremony for you and perform the face to face ceremony which is also compulsory as part of the legal process. This ceremony may be at a location of your choice or my home, with a small number of guests."),be.forEach(detach),de.forEach(detach),he.forEach(detach),X=claim_space(ue),a=claim_element(ue,"DIV",{class:!0}),le=children(a),A=claim_element(le,"DIV",{class:!0}),me=children(A),n=claim_element(me,"DIV",{class:!0}),ie=children(n),m=claim_element(ie,"DIV",{class:!0}),we=children(m),k=claim_element(we,"DIV",{class:!0}),Oe=children(k),T=claim_element(Oe,"I",{class:!0}),children(T).forEach(detach),Oe.forEach(detach),we.forEach(detach),te=claim_space(ie),E=claim_element(ie,"DIV",{class:!0}),xe=children(E),N=claim_element(xe,"H5",{}),Ce=children(N),q=claim_text(Ce,"The Ceremony"),Ce.forEach(detach),xe.forEach(detach),W=claim_space(ie),C=claim_element(ie,"DIV",{class:!0}),Ee=children(C),O=claim_element(Ee,"DIV",{class:!0}),ke=children(O),F=claim_element(ke,"P",{}),Ae=children(F),B=claim_text(Ae,"You will get a beautiful, personalised and intimate ceremony like a registry style service. This is perfect for those who want to legalise their union without a traditional wedding but do it in an affordable way yet still in a meaningful ceremony."),Ae.forEach(detach),ke.forEach(detach),Ee.forEach(detach),ie.forEach(detach),me.forEach(detach),V=claim_space(le),h=claim_element(le,"DIV",{class:!0}),Se=children(h),t=claim_element(Se,"DIV",{class:!0}),oe=children(t),y=claim_element(oe,"DIV",{class:!0}),Fe=children(y),j=claim_element(Fe,"DIV",{class:!0}),fe=children(j),L=claim_element(fe,"I",{class:!0}),children(L).forEach(detach),fe.forEach(detach),Fe.forEach(detach),Y=claim_space(oe),b=claim_element(oe,"DIV",{class:!0}),ze=children(b),D=claim_element(ze,"H5",{}),De=children(D),Q=claim_text(De,"The Legals"),De.forEach(detach),ze.forEach(detach),Z=claim_space(oe),g=claim_element(oe,"DIV",{class:!0}),Ne=children(g),p=claim_element(Ne,"DIV",{class:!0}),Le=children(p),d=claim_element(Le,"P",{}),re=children(d),ne=claim_text(re,`BEFORE: I prepare all the legal paperwork, this paperwork must be completed a minimum of 1 month before the ceremony. This is a legal reqirement.
                                        `),se=claim_element(re,"BR",{}),U=claim_text(re,`AFTER: I will lodge all the paperwork with the ACT Births, Deaths and Marriages Department. Then I Inform you when the marriage has been registered and send you the link so that
                                        you can apply for the official document.`),re.forEach(detach),Le.forEach(detach),Ne.forEach(detach),oe.forEach(detach),Se.forEach(detach),le.forEach(detach),ue.forEach(detach),ge.forEach(detach),ce.forEach(detach),ye.forEach(detach),Re.forEach(detach),this.h()},h(){attr(i,"class","img-fluid"),src_url_equal(i.src,oe="media/service/WeddingCeremonyAlt.webp")||attr(i,"src",oe),attr(i,"title","single-img-three"),attr(i,"alt","single-img-three"),attr(S,"class","ttm_single_image-wrapper"),attr(w,"class","d-inline-block border p-3"),attr(_,"class","col-lg-6"),attr(v,"class","title"),attr(c,"class","title-header"),attr(r,"class","title-desc"),attr(s,"class","section-title"),attr(T,"class","flaticon flaticon-ring"),attr(k,"class","ttm-icon ttm-icon_element-fill ttm-icon_element-color-skincolor ttm-icon_element-size-sm ttm-icon_element-style-rounded"),attr(m,"class","featured-icon"),attr(E,"class","featured-title"),attr(O,"class","featured-desc"),attr(C,"class","featured-content"),attr(n,"class","featured-icon-box icon-align-before-title style6"),attr(A,"class","col-md-6"),attr(L,"class","flaticon flaticon-wedding-cake"),attr(j,"class","ttm-icon ttm-icon_element-fill ttm-icon_element-color-skincolor ttm-icon_element-size-sm ttm-icon_element-style-rounded"),attr(y,"class","featured-icon"),attr(b,"class","featured-title"),attr(p,"class","featured-desc"),attr(g,"class","featured-content"),attr(t,"class","featured-icon-box icon-align-before-title style6"),attr(h,"class","col-md-6"),attr(a,"class","row"),attr(l,"class","res-991-pt-40 pr-15"),attr(x,"class","col-lg-6"),attr(o,"class","row"),attr(f,"class","container"),attr(u,"class","ttm-row about-section bg-img6 ttm-bg ttm-bgimage-yes clearfix")},m(e,oe){insert_hydration(e,u,oe),append_hydration(u,f),append_hydration(f,o),append_hydration(o,_),append_hydration(_,w),append_hydration(w,S),append_hydration(S,i),append_hydration(o,P),append_hydration(o,x),append_hydration(x,l),append_hydration(l,s),append_hydration(s,c),append_hydration(c,z),append_hydration(z,ee),append_hydration(c,J),append_hydration(c,v),append_hydration(v,H),append_hydration(s,K),append_hydration(s,r),append_hydration(r,R),append_hydration(R,$),append_hydration(r,G),append_hydration(r,M),append_hydration(M,I),append_hydration(l,X),append_hydration(l,a),append_hydration(a,A),append_hydration(A,n),append_hydration(n,m),append_hydration(m,k),append_hydration(k,T),append_hydration(n,te),append_hydration(n,E),append_hydration(E,N),append_hydration(N,q),append_hydration(n,W),append_hydration(n,C),append_hydration(C,O),append_hydration(O,F),append_hydration(F,B),append_hydration(a,V),append_hydration(a,h),append_hydration(h,t),append_hydration(t,y),append_hydration(y,j),append_hydration(j,L),append_hydration(t,Y),append_hydration(t,b),append_hydration(b,D),append_hydration(D,Q),append_hydration(t,Z),append_hydration(t,g),append_hydration(g,p),append_hydration(p,d),append_hydration(d,ne),append_hydration(d,se),append_hydration(d,U)},p:noop,i:noop,o:noop,d(e){e&&detach(u)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component