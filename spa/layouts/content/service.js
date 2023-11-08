import{SvelteComponent,append_hydration,attr,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,detach,element,group_outros,init,insert_hydration,listen,mount_component,run_all,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import ServiceStep1 from"../components/service_step1.js";import ServiceStep2 from"../components/service_step2.js";import ServiceStep3 from"../components/service_step3.js";import ServiceStep4 from"../components/service_step4.js";import ServiceStep5 from"../components/service_step5.js";import ServiceStep6 from"../components/service_step6.js";import SerivceHeader from"../components/service_header.js";function create_if_block_5(){let t,n;return t=new ServiceStep6({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_4(){let t,n;return t=new ServiceStep5({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_3(){let t,n;return t=new ServiceStep4({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_2(){let t,n;return t=new ServiceStep3({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_1(){let t,n;return t=new ServiceStep2({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block(){let t,n;return t=new ServiceStep1({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_fragment(e){let O,H,_,k,S,A,r,c,N,ce,oe,M,te,Q,T,L,ne,B,p,z,u,f,F,n,C,l,G,X,ae,E,i,U,R,Z,y,m,I,K,de,j,h,V,$,ie,x,d,q,Y,J,g,a,P,W,ee,D,v,se,re,w,o,s,t,le,he;O=new SerivceHeader({});const ue=[create_if_block,create_if_block_1,create_if_block_2,create_if_block_3,create_if_block_4,create_if_block_5],b=[];function me(e){return"step1"===e[6]?0:"step2"===e[6]?1:"step3"===e[6]?2:"step4"===e[6]?3:"step5"===e[6]?4:"step6"===e[6]?5:-1}return~(o=me(e,-1))&&(s=b[o]=ue[o](e)),{c(){create_component(O.$$.fragment),H=space(),_=element("section"),k=element("div"),S=element("div"),A=element("div"),r=element("div"),c=element("div"),N=element("h5"),ce=text("Wedding Service"),oe=space(),M=element("h2"),te=text("Wedding with the Works!"),Q=space(),T=element("div"),L=element("p"),ne=text("Once booked, I am committed to your day and my time to you is unlimited. I am happy to meet with you as many times as needed and communicate via email/phone to create the perfect ceremony. I provide you with a resource folder for ideas and attend your rehearsal and complete the legal paperwork. See steps below for more information."),B=space(),p=element("div"),z=element("div"),u=element("div"),f=element("div"),F=element("aside"),n=element("ul"),C=element("li"),l=element("a"),G=text(e[0]),ae=space(),E=element("li"),i=element("a"),U=text(e[1]),Z=space(),y=element("li"),m=element("a"),I=text(e[2]),de=space(),j=element("li"),h=element("a"),V=text(e[3]),ie=space(),x=element("li"),d=element("a"),q=text(e[4]),J=space(),g=element("li"),a=element("a"),P=text(e[5]),ee=space(),D=element("div"),v=element("a"),se=text("See Pricing"),re=space(),w=element("div"),s&&s.c(),this.h()},l(t){claim_component(O.$$.fragment,t),H=claim_space(t),_=claim_element(t,"SECTION",{class:!0});var o,b,R,$,W,K,Y,X,Te=children(_),ve,pe,fe,ye,le,ue,he,me,be,je,_e,we,Oe,xe,Ce,Ee,ke,Ae,Se,Me,Fe,ge;k=claim_element(Te,"DIV",{class:!0}),ve=children(k),S=claim_element(ve,"DIV",{class:!0}),pe=children(S),A=claim_element(pe,"DIV",{class:!0}),fe=children(A),r=claim_element(fe,"DIV",{class:!0}),W=children(r),c=claim_element(W,"DIV",{class:!0}),b=children(c),N=claim_element(b,"H5",{}),ye=children(N),ce=claim_text(ye,"Wedding Service"),ye.forEach(detach),oe=claim_space(b),M=claim_element(b,"H2",{class:!0}),X=children(M),te=claim_text(X,"Wedding with the Works!"),X.forEach(detach),b.forEach(detach),Q=claim_space(W),T=claim_element(W,"DIV",{class:!0}),le=children(T),L=claim_element(le,"P",{}),ue=children(L),ne=claim_text(ue,"Once booked, I am committed to your day and my time to you is unlimited. I am happy to meet with you as many times as needed and communicate via email/phone to create the perfect ceremony. I provide you with a resource folder for ideas and attend your rehearsal and complete the legal paperwork. See steps below for more information."),ue.forEach(detach),le.forEach(detach),W.forEach(detach),fe.forEach(detach),pe.forEach(detach),ve.forEach(detach),Te.forEach(detach),B=claim_space(t),p=claim_element(t,"DIV",{class:!0}),he=children(p),z=claim_element(he,"DIV",{class:!0}),me=children(z),u=claim_element(me,"DIV",{class:!0}),$=children(u),f=claim_element($,"DIV",{class:!0}),R=children(f),F=claim_element(R,"ASIDE",{class:!0}),K=children(F),n=claim_element(K,"UL",{class:!0}),o=children(n),C=claim_element(o,"LI",{class:!0}),be=children(C),l=claim_element(be,"A",{href:!0,"data-filter":!0}),je=children(l),G=claim_text(je,e[0]),je.forEach(detach),be.forEach(detach),ae=claim_space(o),E=claim_element(o,"LI",{class:!0}),Y=children(E),i=claim_element(Y,"A",{href:!0,"data-filter":!0}),_e=children(i),U=claim_text(_e,e[1]),_e.forEach(detach),Y.forEach(detach),Z=claim_space(o),y=claim_element(o,"LI",{class:!0}),we=children(y),m=claim_element(we,"A",{href:!0,"data-filter":!0}),Oe=children(m),I=claim_text(Oe,e[2]),Oe.forEach(detach),we.forEach(detach),de=claim_space(o),j=claim_element(o,"LI",{class:!0}),xe=children(j),h=claim_element(xe,"A",{href:!0,"data-filter":!0}),Ce=children(h),V=claim_text(Ce,e[3]),Ce.forEach(detach),xe.forEach(detach),ie=claim_space(o),x=claim_element(o,"LI",{class:!0}),Ee=children(x),d=claim_element(Ee,"A",{href:!0,"data-filter":!0}),ke=children(d),q=claim_text(ke,e[4]),ke.forEach(detach),Ee.forEach(detach),J=claim_space(o),g=claim_element(o,"LI",{class:!0}),Ae=children(g),a=claim_element(Ae,"A",{href:!0,"data-filter":!0}),Se=children(a),P=claim_text(Se,e[5]),Se.forEach(detach),Ae.forEach(detach),o.forEach(detach),K.forEach(detach),ee=claim_space(R),D=claim_element(R,"DIV",{class:!0}),Me=children(D),v=claim_element(Me,"A",{class:!0,href:!0}),Fe=children(v),se=claim_text(Fe,"See Pricing"),Fe.forEach(detach),Me.forEach(detach),R.forEach(detach),re=claim_space($),w=claim_element($,"DIV",{class:!0}),ge=children(w),s&&s.l(ge),ge.forEach(detach),$.forEach(detach),me.forEach(detach),he.forEach(detach),this.h()},h(){attr(M,"class","title"),attr(c,"class","title-header"),attr(T,"class","title-desc"),attr(r,"class","section-title style2"),attr(A,"class","col-lg-12 res-991-pr-15 res-991-pl-15"),attr(S,"class","row"),attr(k,"class","container"),attr(_,"class","ttm-row gallery-section clearfix svelte-8vifec"),attr(l,"href","service"),attr(l,"data-filter","step1"),attr(C,"class",X=e[6]==="step1"?" active":""),attr(i,"href","service"),attr(i,"data-filter","step2"),attr(E,"class",R=e[6]==="step2"?" active":""),attr(m,"href","service"),attr(m,"data-filter","step3"),attr(y,"class",K=e[6]==="step3"?" active":""),attr(h,"href","service"),attr(h,"data-filter","step4"),attr(j,"class",$=e[6]==="step4"?" active":""),attr(d,"href","service"),attr(d,"data-filter","step5"),attr(x,"class",Y=e[6]==="step5"?" active":""),attr(a,"href","service"),attr(a,"data-filter","step6"),attr(g,"class",W=e[6]==="step6"?" active":""),attr(n,"class","widget-menu"),attr(F,"class","widget widget-nav-menu"),attr(v,"class","ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-dark"),attr(v,"href","pricing"),attr(D,"class","mt-10 text-center btn-center svelte-8vifec"),attr(f,"class","col-lg-4 widget-area sidebar-right svelte-8vifec"),attr(w,"class","col-lg-8 content-area svelte-8vifec"),attr(u,"class","row"),attr(z,"class","container"),attr(p,"class","ttm-row sidebar ttm-sidebar-right clearfix svelte-8vifec")},m(s,R){mount_component(O,s,R),insert_hydration(s,H,R),insert_hydration(s,_,R),append_hydration(_,k),append_hydration(k,S),append_hydration(S,A),append_hydration(A,r),append_hydration(r,c),append_hydration(c,N),append_hydration(N,ce),append_hydration(c,oe),append_hydration(c,M),append_hydration(M,te),append_hydration(r,Q),append_hydration(r,T),append_hydration(T,L),append_hydration(L,ne),insert_hydration(s,B,R),insert_hydration(s,p,R),append_hydration(p,z),append_hydration(z,u),append_hydration(u,f),append_hydration(f,F),append_hydration(F,n),append_hydration(n,C),append_hydration(C,l),append_hydration(l,G),append_hydration(n,ae),append_hydration(n,E),append_hydration(E,i),append_hydration(i,U),append_hydration(n,Z),append_hydration(n,y),append_hydration(y,m),append_hydration(m,I),append_hydration(n,de),append_hydration(n,j),append_hydration(j,h),append_hydration(h,V),append_hydration(n,ie),append_hydration(n,x),append_hydration(x,d),append_hydration(d,q),append_hydration(n,J),append_hydration(n,g),append_hydration(g,a),append_hydration(a,P),append_hydration(f,ee),append_hydration(f,D),append_hydration(D,v),append_hydration(v,se),append_hydration(u,re),append_hydration(u,w),~o&&b[o].m(w,null),t=!0,le||(he=[listen(l,"click",e[7]),listen(i,"click",e[8]),listen(m,"click",e[9]),listen(h,"click",e[10]),listen(d,"click",e[11]),listen(a,"click",e[12])],le=!0)},p(e,[n]){(!t||n&1)&&set_data(G,e[0]),(!t||n&64&&X!==(X=e[6]==="step1"?" active":""))&&attr(C,"class",X),(!t||n&2)&&set_data(U,e[1]),(!t||n&64&&R!==(R=e[6]==="step2"?" active":""))&&attr(E,"class",R),(!t||n&4)&&set_data(I,e[2]),(!t||n&64&&K!==(K=e[6]==="step3"?" active":""))&&attr(y,"class",K),(!t||n&8)&&set_data(V,e[3]),(!t||n&64&&$!==($=e[6]==="step4"?" active":""))&&attr(j,"class",$),(!t||n&16)&&set_data(q,e[4]),(!t||n&64&&Y!==(Y=e[6]==="step5"?" active":""))&&attr(x,"class",Y),(!t||n&32)&&set_data(P,e[5]),(!t||n&64&&W!==(W=e[6]==="step6"?" active":""))&&attr(g,"class",W);let i=o;o=me(e,n),o!==i&&(s&&(group_outros(),transition_out(b[i],1,1,()=>{b[i]=null}),check_outros()),~o?(s=b[o],s||(s=b[o]=ue[o](e),s.c()),transition_in(s,1),s.m(w,null)):s=null)},i(e){if(t)return;transition_in(O.$$.fragment,e),transition_in(s),t=!0},o(e){transition_out(O.$$.fragment,e),transition_out(s),t=!1},d(e){destroy_component(O,e),e&&detach(H),e&&detach(_),e&&detach(B),e&&detach(p),~o&&b[o].d(),le=!1,run_all(he)}}}function instance(e,t,n){let{step1:a,step2:l,step3:i,step4:o,step5:r,step6:c}=t,s="step1";const d=()=>n(6,s="step1"),u=()=>n(6,s="step2"),h=()=>n(6,s="step3"),m=()=>n(6,s="step4"),f=()=>n(6,s="step5"),p=()=>n(6,s="step6");return e.$$set=e=>{"step1"in e&&n(0,a=e.step1),"step2"in e&&n(1,l=e.step2),"step3"in e&&n(2,i=e.step3),"step4"in e&&n(3,o=e.step4),"step5"in e&&n(4,r=e.step5),"step6"in e&&n(5,c=e.step6)},[a,l,i,o,r,c,s,d,u,h,m,f,p]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{step1:0,step2:1,step3:2,step4:3,step5:4,step6:5})}}export default Component