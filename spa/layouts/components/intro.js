import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let u,O,w,i,t,a,n,R,W,ne,j,te,Z,f,N,Q,H,F,q,r,_,o,C,x,M,$,c,A,L,se,V,v,z,I,Y,S,s,m,p,D,B,l,E,P,U,K,k,T,G,X,g,d,J,ee,b,y,h,oe;return{c(){u=element("section"),O=element("div"),w=element("div"),i=element("div"),t=element("div"),a=element("div"),n=element("div"),R=element("h5"),W=text("Welcome To Weddings By Josie"),ne=space(),j=element("h2"),te=text('"Tie the knot with Josie"'),Z=space(),f=element("div"),N=element("p"),Q=text(`It will be my pleasure to help you bring to reality your dreams
                for a beautiful ceremony. This can be as short, as long, as
                quirky, as different, as formal/informal as you want it to be. I
                marry you on your terms!`),H=space(),F=element("div"),q=space(),r=element("div"),_=element("div"),o=element("div"),C=element("div"),x=element("div"),M=element("i"),$=space(),c=element("div"),A=element("div"),L=element("h5"),se=text("Certified Celebrant"),V=space(),v=element("div"),z=element("p"),I=text(`I am both a qualified and experienced celebrant in the
                      Canberra region.`),Y=space(),S=element("div"),s=element("div"),m=element("div"),p=element("div"),D=element("i"),B=space(),l=element("div"),E=element("div"),P=element("h5"),U=text("Unique Ceremony"),K=space(),k=element("div"),T=element("p"),G=text(`I create a beautiful and tailored ceremony to suit your
                      style and wishes.`),X=space(),g=element("div"),d=element("a"),J=text("Read More"),ee=space(),b=element("div"),y=element("div"),h=element("img"),this.h()},l(e){u=claim_element(e,"SECTION",{class:!0});var Re=children(u),Se,Ee,ce,oe,le,de,ye,ve,pe,fe,ie,ge,he,be,je,ue,_e,we,Oe,xe,Ce,re,ke,Ae,ae,Me,Fe,Te,ze,De,Ne,Le,me;O=claim_element(Re,"DIV",{class:!0}),Se=children(O),w=claim_element(Se,"DIV",{class:!0}),Ee=children(w),i=claim_element(Ee,"DIV",{class:!0}),ce=children(i),t=claim_element(ce,"DIV",{class:!0}),oe=children(t),a=claim_element(oe,"DIV",{class:!0}),le=children(a),n=claim_element(le,"DIV",{class:!0}),de=children(n),R=claim_element(de,"H5",{}),ye=children(R),W=claim_text(ye,"Welcome To Weddings By Josie"),ye.forEach(detach),ne=claim_space(de),j=claim_element(de,"H2",{class:!0}),ve=children(j),te=claim_text(ve,'"Tie the knot with Josie"'),ve.forEach(detach),de.forEach(detach),Z=claim_space(le),f=claim_element(le,"DIV",{class:!0}),pe=children(f),N=claim_element(pe,"P",{}),fe=children(N),Q=claim_text(fe,`It will be my pleasure to help you bring to reality your dreams
                for a beautiful ceremony. This can be as short, as long, as
                quirky, as different, as formal/informal as you want it to be. I
                marry you on your terms!`),fe.forEach(detach),pe.forEach(detach),le.forEach(detach),H=claim_space(oe),F=claim_element(oe,"DIV",{class:!0}),children(F).forEach(detach),q=claim_space(oe),r=claim_element(oe,"DIV",{class:!0}),ie=children(r),_=claim_element(ie,"DIV",{class:!0}),ge=children(_),o=claim_element(ge,"DIV",{class:!0}),he=children(o),C=claim_element(he,"DIV",{class:!0}),be=children(C),x=claim_element(be,"DIV",{class:!0}),je=children(x),M=claim_element(je,"I",{class:!0}),children(M).forEach(detach),je.forEach(detach),be.forEach(detach),$=claim_space(he),c=claim_element(he,"DIV",{class:!0}),ue=children(c),A=claim_element(ue,"DIV",{class:!0}),_e=children(A),L=claim_element(_e,"H5",{}),we=children(L),se=claim_text(we,"Certified Celebrant"),we.forEach(detach),_e.forEach(detach),V=claim_space(ue),v=claim_element(ue,"DIV",{class:!0}),Oe=children(v),z=claim_element(Oe,"P",{}),xe=children(z),I=claim_text(xe,`I am both a qualified and experienced celebrant in the
                      Canberra region.`),xe.forEach(detach),Oe.forEach(detach),ue.forEach(detach),he.forEach(detach),ge.forEach(detach),Y=claim_space(ie),S=claim_element(ie,"DIV",{class:!0}),Ce=children(S),s=claim_element(Ce,"DIV",{class:!0}),re=children(s),m=claim_element(re,"DIV",{class:!0}),ke=children(m),p=claim_element(ke,"DIV",{class:!0}),Ae=children(p),D=claim_element(Ae,"I",{class:!0}),children(D).forEach(detach),Ae.forEach(detach),ke.forEach(detach),B=claim_space(re),l=claim_element(re,"DIV",{class:!0}),ae=children(l),E=claim_element(ae,"DIV",{class:!0}),Me=children(E),P=claim_element(Me,"H5",{}),Fe=children(P),U=claim_text(Fe,"Unique Ceremony"),Fe.forEach(detach),Me.forEach(detach),K=claim_space(ae),k=claim_element(ae,"DIV",{class:!0}),Te=children(k),T=claim_element(Te,"P",{}),ze=children(T),G=claim_text(ze,`I create a beautiful and tailored ceremony to suit your
                      style and wishes.`),ze.forEach(detach),Te.forEach(detach),ae.forEach(detach),re.forEach(detach),Ce.forEach(detach),ie.forEach(detach),X=claim_space(oe),g=claim_element(oe,"DIV",{class:!0}),De=children(g),d=claim_element(De,"A",{class:!0,href:!0}),Ne=children(d),J=claim_text(Ne,"Read More"),Ne.forEach(detach),De.forEach(detach),oe.forEach(detach),ee=claim_space(ce),b=claim_element(ce,"DIV",{class:!0}),Le=children(b),y=claim_element(Le,"DIV",{class:!0}),me=children(y),h=claim_element(me,"IMG",{class:!0,src:!0,alt:!0}),me.forEach(detach),Le.forEach(detach),ce.forEach(detach),Ee.forEach(detach),Se.forEach(detach),Re.forEach(detach),this.h()},h(){attr(j,"class","title"),attr(n,"class","title-header"),attr(f,"class","title-desc"),attr(a,"class","section-title clearfix"),attr(F,"class","ttm-horizontal_sep width-100 mt-20 mb-35"),attr(M,"class","ti-bookmark-alt"),attr(x,"class","ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg"),attr(C,"class","featured-icon"),attr(A,"class","featured-title"),attr(v,"class","featured-desc"),attr(c,"class","featured-content"),attr(o,"class","featured-icon-box style4 icon-align-before-content icon-ver_align-top"),attr(_,"class","col-sm-6"),attr(D,"class","ti ti-medall"),attr(p,"class","ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg"),attr(m,"class","featured-icon"),attr(E,"class","featured-title"),attr(k,"class","featured-desc"),attr(l,"class","featured-content"),attr(s,"class","featured-icon-box style4 icon-align-before-content icon-ver_align-top"),attr(S,"class","col-sm-6"),attr(r,"class","row"),attr(d,"class","ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-dark res-991-mb-25"),attr(d,"href","about-me"),attr(g,"class","mt-20"),attr(t,"class","col-lg-6 col-sm-12"),attr(h,"class","img-fluid"),src_url_equal(h.src,oe="media/sliderImages/585D3FBF-48CD-4167-A9C6-D830BEB19891-768x768.jpg")||attr(h,"src",oe),attr(h,"alt","Josie marrying a couple"),attr(y,"class","ttm_single_image-wrapper text-right"),attr(b,"class","col-lg-6 col-sm-12"),attr(i,"class","row align-items-center"),attr(w,"class","pt-45 pb-45 pl-30 pr-30 res-991-pl-15 res-991-pr-15 tes-991-pb-0 res-991-ml-15 res-991-mr-15 box-shadow"),attr(O,"class","container"),attr(u,"class","ttm-row introduction-section clearfix")},m(e,oe){insert_hydration(e,u,oe),append_hydration(u,O),append_hydration(O,w),append_hydration(w,i),append_hydration(i,t),append_hydration(t,a),append_hydration(a,n),append_hydration(n,R),append_hydration(R,W),append_hydration(n,ne),append_hydration(n,j),append_hydration(j,te),append_hydration(a,Z),append_hydration(a,f),append_hydration(f,N),append_hydration(N,Q),append_hydration(t,H),append_hydration(t,F),append_hydration(t,q),append_hydration(t,r),append_hydration(r,_),append_hydration(_,o),append_hydration(o,C),append_hydration(C,x),append_hydration(x,M),append_hydration(o,$),append_hydration(o,c),append_hydration(c,A),append_hydration(A,L),append_hydration(L,se),append_hydration(c,V),append_hydration(c,v),append_hydration(v,z),append_hydration(z,I),append_hydration(r,Y),append_hydration(r,S),append_hydration(S,s),append_hydration(s,m),append_hydration(m,p),append_hydration(p,D),append_hydration(s,B),append_hydration(s,l),append_hydration(l,E),append_hydration(E,P),append_hydration(P,U),append_hydration(l,K),append_hydration(l,k),append_hydration(k,T),append_hydration(T,G),append_hydration(t,X),append_hydration(t,g),append_hydration(g,d),append_hydration(d,J),append_hydration(i,ee),append_hydration(i,b),append_hydration(b,y),append_hydration(y,h)},p:noop,i:noop,o:noop,d(e){e&&detach(u)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component