import{SvelteComponent,append_hydration,assign,attr,check_outros,children,claim_component,claim_element,claim_space,construct_svelte_component,create_component,destroy_component,detach,element,get_spread_object,get_spread_update,group_outros,init,insert_hydration,mount_component,safe_not_equal,space,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import Head from"./head.js";import Header from"./header.js";import Footer from"./footer.js";import{makeTitle}from"../scripts/make_title.js";function create_fragment(e){let s,o,f,l,n,r,u,c,t,h,a,d;o=new Head({props:{title:makeTitle(e[0].filename),env:e[2]}}),r=new Header({});const m=[e[0].fields,{allContent:e[3]},{allLayouts:e[4]},{content:e[0]},{env:e[2]}];var i=e[1];function p(){let t={};for(let e=0;e<m.length;e+=1)t=assign(t,m[e]);return{props:t}}return i&&(t=construct_svelte_component(i,p(e))),a=new Footer({}),{c(){s=element("html"),create_component(o.$$.fragment),f=space(),l=element("body"),n=element("main"),create_component(r.$$.fragment),u=space(),c=element("div"),t&&create_component(t.$$.fragment),h=space(),create_component(a.$$.fragment),this.h()},l(e){s=claim_element(e,"HTML",{lang:!0});var i,m,p,d=children(s);claim_component(o.$$.fragment,d),f=claim_space(d),l=claim_element(d,"BODY",{}),m=children(l),n=claim_element(m,"MAIN",{class:!0}),i=children(n),claim_component(r.$$.fragment,i),u=claim_space(i),c=claim_element(i,"DIV",{class:!0}),p=children(c),t&&claim_component(t.$$.fragment,p),p.forEach(detach),h=claim_space(i),claim_component(a.$$.fragment,i),i.forEach(detach),m.forEach(detach),d.forEach(detach),this.h()},h(){attr(c,"class","site-main"),attr(n,"class","page"),attr(s,"lang","en")},m(e,i){insert_hydration(e,s,i),mount_component(o,s,null),append_hydration(s,f),append_hydration(s,l),append_hydration(l,n),mount_component(r,n,null),append_hydration(n,u),append_hydration(n,c),t&&mount_component(t,c,null),append_hydration(n,h),mount_component(a,n,null),d=!0},p(e,[n]){const s={};n&1&&(s.title=makeTitle(e[0].filename)),n&4&&(s.env=e[2]),o.$set(s);const a=n&29?get_spread_update(m,[n&1&&get_spread_object(e[0].fields),n&8&&{allContent:e[3]},n&16&&{allLayouts:e[4]},n&1&&{content:e[0]},n&4&&{env:e[2]}]):{};if(n&2&&i!==(i=e[1])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}i?(t=construct_svelte_component(i,p(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,c,null)):t=null}else i&&t.$set(a)},i(e){if(d)return;transition_in(o.$$.fragment,e),transition_in(r.$$.fragment,e),t&&transition_in(t.$$.fragment,e),transition_in(a.$$.fragment,e),d=!0},o(e){transition_out(o.$$.fragment,e),transition_out(r.$$.fragment,e),t&&transition_out(t.$$.fragment,e),transition_out(a.$$.fragment,e),d=!1},d(e){e&&detach(s),destroy_component(o),destroy_component(r),t&&destroy_component(t),destroy_component(a)}}}function instance(e,t,n){let{content:s,layout:o,env:i,allContent:a,allLayouts:r}=t;return e.$$set=e=>{"content"in e&&n(0,s=e.content),"layout"in e&&n(1,o=e.layout),"env"in e&&n(2,i=e.env),"allContent"in e&&n(3,a=e.allContent),"allLayouts"in e&&n(4,r=e.allLayouts)},[s,o,i,a,r]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:0,layout:1,env:2,allContent:3,allLayouts:4})}}export default Component