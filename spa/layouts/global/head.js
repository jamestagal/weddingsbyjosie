import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let t,$,Ee,H,xe,I,we,D,ye,P,W,R,Ae,L,V,ve,z,B,pe,n,Ue,ue,O,We,le,E,$e,ie,S,Ve,Q,k,Be,ne,f,Ie,J,d,He,Y,s,Pe,q,a,Re,K,T,Le,G,c,Ke,Z,u,Ne,te,p,De,oe,A,ze,re,w,Te,de,v,Fe,me,_,Me,ge,g,Se,je,l,_e,r,Oe,N,Ce,m,ke,F,be,j,he,C,ae,b,ee,i,U,y,X,h,se,M,ce,x,fe,o;return{c(){t=element("head"),$=element("meta"),Ee=space(),H=element("meta"),xe=space(),I=element("meta"),we=space(),D=element("meta"),ye=space(),P=element("meta"),W=space(),R=element("meta"),Ae=space(),L=element("title"),V=text(e[0]),ve=space(),z=element("base"),pe=space(),n=element("script"),ue=space(),O=element("script"),le=space(),E=element("script"),ie=space(),S=element("script"),Q=space(),k=element("script"),ne=space(),f=element("script"),J=space(),d=element("script"),Y=space(),s=element("script"),q=space(),a=element("script"),K=space(),T=element("script"),G=space(),c=element("script"),Z=space(),u=element("script"),te=space(),p=element("script"),oe=space(),A=element("script"),re=space(),w=element("script"),de=space(),v=element("script"),me=space(),_=element("script"),ge=space(),g=element("script"),je=space(),l=element("link"),_e=space(),r=element("link"),Oe=space(),N=element("link"),Ce=space(),m=element("link"),ke=space(),F=element("link"),be=space(),j=element("link"),he=space(),C=element("link"),ae=space(),b=element("link"),ee=space(),i=element("link"),U=space(),y=element("link"),X=space(),h=element("link"),se=space(),M=element("link"),ce=space(),x=element("link"),fe=space(),o=element("link"),this.h()},l(B){t=claim_element(B,"HEAD",{});var Se=children(t),Me,He,Te,ze,De,Ne,Le,Re,Pe,Fe,Ie,Be,Ve,$e,We,Ue,Ke,qe,Ye;$=claim_element(Se,"META",{charset:!0}),Ee=claim_space(Se),H=claim_element(Se,"META",{"http-equiv":!0,content:!0}),xe=claim_space(Se),I=claim_element(Se,"META",{name:!0,content:!0}),we=claim_space(Se),D=claim_element(Se,"META",{name:!0,content:!0}),ye=claim_space(Se),P=claim_element(Se,"META",{name:!0,content:!0}),W=claim_space(Se),R=claim_element(Se,"META",{name:!0,content:!0}),Ae=claim_space(Se),L=claim_element(Se,"TITLE",{}),Me=children(L),V=claim_text(Me,e[0]),Me.forEach(detach),ve=claim_space(Se),z=claim_element(Se,"BASE",{href:!0}),pe=claim_space(Se),n=claim_element(Se,"SCRIPT",{type:!0,src:!0}),He=children(n),He.forEach(detach),ue=claim_space(Se),O=claim_element(Se,"SCRIPT",{src:!0}),Te=children(O),Te.forEach(detach),le=claim_space(Se),E=claim_element(Se,"SCRIPT",{src:!0}),ze=children(E),ze.forEach(detach),ie=claim_space(Se),S=claim_element(Se,"SCRIPT",{src:!0}),De=children(S),De.forEach(detach),Q=claim_space(Se),k=claim_element(Se,"SCRIPT",{src:!0}),Ne=children(k),Ne.forEach(detach),ne=claim_space(Se),f=claim_element(Se,"SCRIPT",{src:!0}),Le=children(f),Le.forEach(detach),J=claim_space(Se),d=claim_element(Se,"SCRIPT",{src:!0}),Re=children(d),Re.forEach(detach),Y=claim_space(Se),s=claim_element(Se,"SCRIPT",{src:!0}),Pe=children(s),Pe.forEach(detach),q=claim_space(Se),a=claim_element(Se,"SCRIPT",{src:!0}),Fe=children(a),Fe.forEach(detach),K=claim_space(Se),T=claim_element(Se,"SCRIPT",{src:!0}),Ie=children(T),Ie.forEach(detach),G=claim_space(Se),c=claim_element(Se,"SCRIPT",{src:!0}),Be=children(c),Be.forEach(detach),Z=claim_space(Se),u=claim_element(Se,"SCRIPT",{src:!0}),Ve=children(u),Ve.forEach(detach),te=claim_space(Se),p=claim_element(Se,"SCRIPT",{src:!0}),$e=children(p),$e.forEach(detach),oe=claim_space(Se),A=claim_element(Se,"SCRIPT",{src:!0}),We=children(A),We.forEach(detach),re=claim_space(Se),w=claim_element(Se,"SCRIPT",{src:!0}),Ue=children(w),Ue.forEach(detach),de=claim_space(Se),v=claim_element(Se,"SCRIPT",{src:!0}),Ke=children(v),Ke.forEach(detach),me=claim_space(Se),_=claim_element(Se,"SCRIPT",{src:!0}),qe=children(_),qe.forEach(detach),ge=claim_space(Se),g=claim_element(Se,"SCRIPT",{src:!0}),Ye=children(g),Ye.forEach(detach),je=claim_space(Se),l=claim_element(Se,"LINK",{rel:!0,id:!0,href:!0}),_e=claim_space(Se),r=claim_element(Se,"LINK",{rel:!0,type:!0,href:!0}),Oe=claim_space(Se),N=claim_element(Se,"LINK",{rel:!0,href:!0}),Ce=claim_space(Se),m=claim_element(Se,"LINK",{rel:!0,type:!0,href:!0}),ke=claim_space(Se),F=claim_element(Se,"LINK",{rel:!0,type:!0,href:!0}),be=claim_space(Se),j=claim_element(Se,"LINK",{rel:!0,type:!0,href:!0}),he=claim_space(Se),C=claim_element(Se,"LINK",{rel:!0,type:!0,href:!0}),ae=claim_space(Se),b=claim_element(Se,"LINK",{rel:!0,type:!0,href:!0}),ee=claim_space(Se),i=claim_element(Se,"LINK",{rel:!0,type:!0,href:!0}),U=claim_space(Se),y=claim_element(Se,"LINK",{rel:!0,type:!0,href:!0}),X=claim_space(Se),h=claim_element(Se,"LINK",{rel:!0,type:!0,href:!0}),se=claim_space(Se),M=claim_element(Se,"LINK",{rel:!0,type:!0,href:!0}),ce=claim_space(Se),x=claim_element(Se,"LINK",{rel:!0,type:!0,href:!0}),fe=claim_space(Se),o=claim_element(Se,"LINK",{rel:!0,type:!0,href:!0}),Se.forEach(detach),this.h()},h(){attr($,"charset","utf-8"),attr(H,"http-equiv","X-UA-Compatible"),attr(H,"content","IE=edge"),attr(I,"name","keywords"),attr(I,"content","Weddings By Josie"),attr(D,"name","description"),attr(D,"content","The official website for Josie Allocca, a Canberra based marriage celebrant"),attr(P,"name","author"),attr(P,"content","https://www.themetechmount.com/"),attr(R,"name","viewport"),attr(R,"content","width=device-width, initial-scale=1, maximum-scale=1"),attr(z,"href",B=e[1].baseurl),attr(n,"type","module"),src_url_equal(n.src,Ue="spa/core/main.js")||attr(n,"src",Ue),src_url_equal(O.src,We="js/jquery.min.js")||attr(O,"src",We),src_url_equal(E.src,$e="js/tether.min.js")||attr(E,"src",$e),src_url_equal(S.src,Ve="js/bootstrap.min.js")||attr(S,"src",Ve),src_url_equal(k.src,Be="js/jquery.easing.js")||attr(k,"src",Be),src_url_equal(f.src,Ie="js/jquery-waypoints.js")||attr(f,"src",Ie),src_url_equal(d.src,He="js/jquery-validate.js")||attr(d,"src",He),src_url_equal(s.src,Pe="js/jquery.prettyPhoto.js")||attr(s,"src",Pe),src_url_equal(a.src,Re="js/slick.js")||attr(a,"src",Re),src_url_equal(T.src,Le="js/slick.min.js")||attr(T,"src",Le),src_url_equal(c.src,Ke="js/numinate.min.js")||attr(c,"src",Ke),src_url_equal(u.src,Ne="js/imagesloaded.min.js")||attr(u,"src",Ne),src_url_equal(p.src,De="js/jquery-isotope.js")||attr(p,"src",De),src_url_equal(A.src,ze="js/price_range_script.js")||attr(A,"src",ze),src_url_equal(w.src,Te="js/main.js")||attr(w,"src",Te),src_url_equal(v.src,Fe="revolution/js/slider.js")||attr(v,"src",Fe),src_url_equal(_.src,Me="revolution/js/revolution.tools.min.js")||attr(_,"src",Me),src_url_equal(g.src,Se="revolution/js/rs6.min.js")||attr(g,"src",Se),attr(l,"rel","stylesheet"),attr(l,"id","rs-plugin-settings-css"),attr(l,"href","revolution/css/rs6.css"),attr(r,"rel","icon"),attr(r,"type","image/svg+xml"),attr(r,"href","logo.svg"),attr(N,"rel","stylesheet"),attr(N,"href","spa/bundle.css"),attr(m,"rel","stylesheet"),attr(m,"type","text/css"),attr(m,"href","css/bootstrap.min.css"),attr(F,"rel","stylesheet"),attr(F,"type","text/css"),attr(F,"href","css/animate.css"),attr(j,"rel","stylesheet"),attr(j,"type","text/css"),attr(j,"href","css/flaticon.css"),attr(C,"rel","stylesheet"),attr(C,"type","text/css"),attr(C,"href","css/font-awesome.css"),attr(b,"rel","stylesheet"),attr(b,"type","text/css"),attr(b,"href","css/themify-icons.css"),attr(i,"rel","stylesheet"),attr(i,"type","text/css"),attr(i,"href","css/slick.css"),attr(y,"rel","stylesheet"),attr(y,"type","text/css"),attr(y,"href","css/prettyPhoto.css"),attr(h,"rel","stylesheet"),attr(h,"type","text/css"),attr(h,"href","css/shortcodes.css"),attr(M,"rel","stylesheet"),attr(M,"type","text/css"),attr(M,"href","css/main.css"),attr(x,"rel","stylesheet"),attr(x,"type","text/css"),attr(x,"href","css/megamenu.css"),attr(o,"rel","stylesheet"),attr(o,"type","text/css"),attr(o,"href","css/responsive.css")},m(e,B){insert_hydration(e,t,B),append_hydration(t,$),append_hydration(t,Ee),append_hydration(t,H),append_hydration(t,xe),append_hydration(t,I),append_hydration(t,we),append_hydration(t,D),append_hydration(t,ye),append_hydration(t,P),append_hydration(t,W),append_hydration(t,R),append_hydration(t,Ae),append_hydration(t,L),append_hydration(L,V),append_hydration(t,ve),append_hydration(t,z),append_hydration(t,pe),append_hydration(t,n),append_hydration(t,ue),append_hydration(t,O),append_hydration(t,le),append_hydration(t,E),append_hydration(t,ie),append_hydration(t,S),append_hydration(t,Q),append_hydration(t,k),append_hydration(t,ne),append_hydration(t,f),append_hydration(t,J),append_hydration(t,d),append_hydration(t,Y),append_hydration(t,s),append_hydration(t,q),append_hydration(t,a),append_hydration(t,K),append_hydration(t,T),append_hydration(t,G),append_hydration(t,c),append_hydration(t,Z),append_hydration(t,u),append_hydration(t,te),append_hydration(t,p),append_hydration(t,oe),append_hydration(t,A),append_hydration(t,re),append_hydration(t,w),append_hydration(t,de),append_hydration(t,v),append_hydration(t,me),append_hydration(t,_),append_hydration(t,ge),append_hydration(t,g),append_hydration(t,je),append_hydration(t,l),append_hydration(t,_e),append_hydration(t,r),append_hydration(t,Oe),append_hydration(t,N),append_hydration(t,Ce),append_hydration(t,m),append_hydration(t,ke),append_hydration(t,F),append_hydration(t,be),append_hydration(t,j),append_hydration(t,he),append_hydration(t,C),append_hydration(t,ae),append_hydration(t,b),append_hydration(t,ee),append_hydration(t,i),append_hydration(t,U),append_hydration(t,y),append_hydration(t,X),append_hydration(t,h),append_hydration(t,se),append_hydration(t,M),append_hydration(t,ce),append_hydration(t,x),append_hydration(t,fe),append_hydration(t,o)},p(e,[t]){t&1&&set_data(V,e[0]),t&2&&B!==(B=e[1].baseurl)&&attr(z,"href",B)},i:noop,o:noop,d(e){e&&detach(t)}}}function instance(e,t,n){let{title:s,env:o}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"env"in e&&n(1,o=e.env)},[s,o]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,env:1})}}export default Component