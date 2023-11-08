import{SvelteComponent,append_hydration,attr,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,detach,element,init,insert_hydration,mount_component,noop,safe_not_equal,space,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import SlickSlider from"./slick_slider.js";function create_fragment(){let t,d,f,n,a,r,c,s,l,h,m,i,p,g,o,u;return o=new SlickSlider({}),{c(){t=element("section"),d=element("div"),f=space(),n=element("div"),a=element("div"),r=element("div"),c=element("div"),s=element("div"),l=element("h5"),h=text("Upcoming Weddings"),m=space(),i=element("h2"),p=text("Featured Weddings Plans"),g=space(),create_component(o.$$.fragment),this.h()},l(e){t=claim_element(e,"SECTION",{class:!0});var u,v,j,y,_,w,O,b=children(t);d=claim_element(b,"DIV",{class:!0}),children(d).forEach(detach),f=claim_space(b),n=claim_element(b,"DIV",{class:!0}),u=children(n),a=claim_element(u,"DIV",{class:!0}),j=children(a),r=claim_element(j,"DIV",{class:!0}),y=children(r),c=claim_element(y,"DIV",{class:!0}),_=children(c),s=claim_element(_,"DIV",{class:!0}),v=children(s),l=claim_element(v,"H5",{}),w=children(l),h=claim_text(w,"Upcoming Weddings"),w.forEach(detach),m=claim_space(v),i=claim_element(v,"H2",{class:!0}),O=children(i),p=claim_text(O,"Featured Weddings Plans"),O.forEach(detach),v.forEach(detach),_.forEach(detach),y.forEach(detach),j.forEach(detach),g=claim_space(u),claim_component(o.$$.fragment,u),u.forEach(detach),b.forEach(detach),this.h()},h(){attr(d,"class","ttm-row-wrapper-bg-layer ttm-bg-layer"),attr(i,"class","title"),attr(s,"class","title-header"),attr(c,"class","section-title clearfix"),attr(r,"class","col-lg-12 col-xl-12 col-md-12"),attr(a,"class","row"),attr(n,"class","container"),attr(t,"class","ttm-row testimonial-section ttm-bgcolor-grey ttm-bgimage-yes bg-img5 ttm-bg clearfix")},m(e,v){insert_hydration(e,t,v),append_hydration(t,d),append_hydration(t,f),append_hydration(t,n),append_hydration(n,a),append_hydration(a,r),append_hydration(r,c),append_hydration(c,s),append_hydration(s,l),append_hydration(l,h),append_hydration(s,m),append_hydration(s,i),append_hydration(i,p),append_hydration(n,g),mount_component(o,n,null),u=!0},p:noop,i(e){if(u)return;transition_in(o.$$.fragment,e),u=!0},o(e){transition_out(o.$$.fragment,e),u=!1},d(e){e&&detach(t),destroy_component(o)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component