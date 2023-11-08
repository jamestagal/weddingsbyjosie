import{SvelteComponent,add_render_callback,append_hydration,attr,children,claim_element,claim_space,claim_svg_element,claim_text,destroy_each,detach,element,init,insert_hydration,listen,noop,run_all,safe_not_equal,select_option,select_value,set_data,set_input_value,space,svg_element,text}from"../../../web_modules/svelte/internal/index.mjs";import allContent from"../../../generated/content.js";function get_each_context(e,t,n){const s=e.slice();return s[14]=t[n],s}function create_if_block_2(e){let n,a,r,t,i,s,o,c,l;return{c(){n=element("span"),a=text(e[0]),r=space(),t=svg_element("svg"),i=svg_element("path"),s=svg_element("line"),o=svg_element("line"),this.h()},l(c){n=claim_element(c,"SPAN",{class:!0});var l,d=children(n);a=claim_text(d,e[0]),r=claim_space(d),t=claim_svg_element(d,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),l=children(t),i=claim_svg_element(l,"path",{stroke:!0,d:!0,fill:!0}),children(i).forEach(detach),s=claim_svg_element(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),children(s).forEach(detach),o=claim_svg_element(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),children(o).forEach(detach),l.forEach(detach),d.forEach(detach),this.h()},h(){attr(i,"stroke","none"),attr(i,"d","M0 0h24v24H0z"),attr(i,"fill","none"),attr(s,"x1","18"),attr(s,"y1","6"),attr(s,"x2","6"),attr(s,"y2","18"),attr(o,"x1","6"),attr(o,"y1","6"),attr(o,"x2","18"),attr(o,"y2","18"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-x svelte-u7vz01"),attr(t,"width","15"),attr(t,"height","15"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(n,"class","tag svelte-u7vz01")},m(d,u){insert_hydration(d,n,u),append_hydration(n,a),append_hydration(n,r),append_hydration(n,t),append_hydration(t,i),append_hydration(t,s),append_hydration(t,o),c||(l=listen(t,"click",e[10]),c=!0)},p(e,t){t&1&&set_data(a,e[0])},d(e){e&&detach(n),c=!1,l()}}}function create_else_block(){let t,n,s;return{c(){t=svg_element("svg"),n=svg_element("path"),s=svg_element("circle"),this.h()},l(e){t=claim_svg_element(e,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var o=children(t);n=claim_svg_element(o,"path",{stroke:!0,d:!0,fill:!0}),children(n).forEach(detach),s=claim_svg_element(o,"circle",{cx:!0,cy:!0,r:!0}),children(s).forEach(detach),o.forEach(detach),this.h()},h(){attr(n,"stroke","none"),attr(n,"d","M0 0h24v24H0z"),attr(n,"fill","none"),attr(s,"cx","12"),attr(s,"cy","12"),attr(s,"r","9"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-circle"),attr(t,"width","20"),attr(t,"height","20"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","gray"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round")},m(e,o){insert_hydration(e,t,o),append_hydration(t,n),append_hydration(t,s)},d(e){e&&detach(t)}}}function create_if_block_1(){let t,n,s;return{c(){t=svg_element("svg"),n=svg_element("path"),s=svg_element("path"),this.h()},l(e){t=claim_svg_element(e,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var o=children(t);n=claim_svg_element(o,"path",{stroke:!0,d:!0,fill:!0}),children(n).forEach(detach),s=claim_svg_element(o,"path",{d:!0}),children(s).forEach(detach),o.forEach(detach),this.h()},h(){attr(n,"stroke","none"),attr(n,"d","M0 0h24v24H0z"),attr(n,"fill","none"),attr(s,"d","M12 3a9 9 0 1 0 9 9"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-loader-2 svelte-u7vz01"),attr(t,"width","20"),attr(t,"height","20"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","gray"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round")},m(e,o){insert_hydration(e,t,o),append_hydration(t,n),append_hydration(t,s)},d(e){e&&detach(t)}}}function create_if_block(e){let n,o,i,a,s=e[2],t=[];for(let n=0;n<s.length;n+=1)t[n]=create_each_block(get_each_context(e,s,n));return{c(){n=element("select");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){n=claim_element(e,"SELECT",{size:!0,class:!0});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(detach),this.h()},h(){attr(n,"size",o=e[2].length===1?2:e[2].length),attr(n,"class","svelte-u7vz01"),e[4]===void 0&&add_render_callback(()=>e[12].call(n))},m(s,o){insert_hydration(s,n,o);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(n,null);select_option(n,e[4],!0),i||(a=listen(n,"change",e[12]),i=!0)},p(e,i){if(i&68){s=e[2];let o;for(o=0;o<s.length;o+=1){const a=get_each_context(e,s,o);t[o]?t[o].p(a,i):(t[o]=create_each_block(a),t[o].c(),t[o].m(n,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=s.length}i&4&&o!==(o=e[2].length===1?2:e[2].length)&&attr(n,"size",o),i&20&&select_option(n,e[4])},d(e){e&&detach(n),destroy_each(t,e),i=!1,a()}}}function create_each_block(e){let t,n=e[14]+"",s,o,i,a;return{c(){t=element("option"),s=text(n),this.h()},l(e){t=claim_element(e,"OPTION",{class:!0});var o=children(t);s=claim_text(o,n),o.forEach(detach),this.h()},h(){t.__value=o=e[14],t.value=t.__value,attr(t,"class","svelte-u7vz01")},m(n,o){insert_hydration(n,t,o),append_hydration(t,s),i||(a=listen(t,"click",e[6]),i=!0)},p(e,i){i&4&&n!==(n=e[14]+"")&&set_data(s,n),i&4&&o!==(o=e[14])&&(t.__value=o,t.value=t.__value)},d(e){e&&detach(t),i=!1,a()}}}function create_fragment(e){let s,a,r,d,o,m,c,h,u,f,t=e[0]!==""&&create_if_block_2(e);function p(e){return e[3]?create_if_block_1:create_else_block}let l=p(e,-1),i=l(e),n=e[2]&&e[2].length>0&&create_if_block(e);return{c(){s=element("div"),a=element("div"),r=element("div"),t&&t.c(),d=space(),o=element("input"),m=space(),c=element("div"),i.c(),h=space(),n&&n.c(),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var u,f,p,l=children(s);a=claim_element(l,"DIV",{class:!0}),u=children(a),r=claim_element(u,"DIV",{class:!0}),f=children(r),t&&t.l(f),f.forEach(detach),d=claim_space(u),o=claim_element(u,"INPUT",{class:!0}),u.forEach(detach),m=claim_space(l),c=claim_element(l,"DIV",{class:!0}),p=children(c),i.l(p),p.forEach(detach),h=claim_space(l),n&&n.l(l),l.forEach(detach),this.h()},h(){attr(r,"class","tags svelte-u7vz01"),attr(o,"class","svelte-u7vz01"),attr(a,"class","input-wrapper svelte-u7vz01"),attr(c,"class","load-icon svelte-u7vz01"),attr(s,"class","reference svelte-u7vz01")},m(l,p){insert_hydration(l,s,p),append_hydration(s,a),append_hydration(a,r),t&&t.m(r,null),append_hydration(a,d),append_hydration(a,o),set_input_value(o,e[1]),append_hydration(s,m),append_hydration(s,c),i.m(c,null),append_hydration(s,h),n&&n.m(s,null),u||(f=[listen(o,"input",e[11]),listen(o,"keyup",e[5])],u=!0)},p(e,[a]){e[0]!==""?t?t.p(e,a):(t=create_if_block_2(e),t.c(),t.m(r,null)):t&&(t.d(1),t=null),a&2&&o.value!==e[1]&&set_input_value(o,e[1]),l!==(l=p(e,a))&&(i.d(1),i=l(e),i&&(i.c(),i.m(c,null))),e[2]&&e[2].length>0?n?n.p(e,a):(n=create_if_block(e),n.c(),n.m(s,null)):n&&(n.d(1),n=null)},i:noop,o:noop,d(e){e&&detach(s),t&&t.d(),i.d(),n&&n.d(),u=!1,run_all(f)}}}function instance(e,t,n){let{schema:l,parentKeys:r,field:i}=t,o,s,c,a;console.log("reference: "+r);let u=structuredClone(allContent);const h=()=>{n(3,c=!0),n(2,s=[]),l[r].options.forEach(e=>{let t=u.filter(t=>t.type===e.type);t.forEach(t=>{e.search.forEach(i=>{if(t.fields.hasOwnProperty(i)&&t.fields[i].includes(o)){let o=e.result.split("."),i=o[0]==="*"?t:t[o[0]];o.length>1&&o.slice(1).forEach(e=>{i=i[e]}),n(2,s=[...s,i])}})})}),o===""&&n(2,s=[]),setTimeout(()=>{n(3,c=!1)},"500")},m=()=>{n(2,s=[]),n(0,i=a),n(1,o="")},d=e=>{n(0,i="")},f=()=>d(i);function p(){o=this.value,n(1,o)}function g(){a=select_value(this),n(4,a),n(2,s)}return e.$$set=e=>{"schema"in e&&n(8,l=e.schema),"parentKeys"in e&&n(9,r=e.parentKeys),"field"in e&&n(0,i=e.field)},[i,o,s,c,a,h,m,d,l,r,f,p,g]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{schema:8,parentKeys:9,field:0})}}export default Component