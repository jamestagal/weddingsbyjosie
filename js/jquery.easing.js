jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,s,o){return jQuery.easing[jQuery.easing.def](e,t,n,s,o)},easeInQuad:function(e,t,n,s,o){return s*(t/=o)*t+n},easeOutQuad:function(e,t,n,s,o){return-s*(t/=o)*(t-2)+n},easeInOutQuad:function(e,t,n,s,o){return(t/=o/2)<1?s/2*t*t+n:-s/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,s,o){return s*(t/=o)*t*t+n},easeOutCubic:function(e,t,n,s,o){return s*((t=t/o-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,s,o){return(t/=o/2)<1?s/2*t*t*t+n:s/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,s,o){return s*(t/=o)*t*t*t+n},easeOutQuart:function(e,t,n,s,o){return-s*((t=t/o-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,s,o){return(t/=o/2)<1?s/2*t*t*t*t+n:-s/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,s,o){return s*(t/=o)*t*t*t*t+n},easeOutQuint:function(e,t,n,s,o){return s*((t=t/o-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,s,o){return(t/=o/2)<1?s/2*t*t*t*t*t+n:s/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,s,o){return-s*Math.cos(t/o*(Math.PI/2))+s+n},easeOutSine:function(e,t,n,s,o){return s*Math.sin(t/o*(Math.PI/2))+n},easeInOutSine:function(e,t,n,s,o){return-s/2*(Math.cos(Math.PI*t/o)-1)+n},easeInExpo:function(e,t,n,s,o){return t==0?n:s*Math.pow(2,10*(t/o-1))+n},easeOutExpo:function(e,t,n,s,o){return t==o?n+s:s*(-Math.pow(2,-10*t/o)+1)+n},easeInOutExpo:function(e,t,n,s,o){return t==0?n:t==o?n+s:(t/=o/2)<1?s/2*Math.pow(2,10*(t-1))+n:s/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,s,o){return-s*(Math.sqrt(1-(t/=o)*t)-1)+n},easeOutCirc:function(e,t,n,s,o){return s*Math.sqrt(1-(t=t/o-1)*t)+n},easeInOutCirc:function(e,t,n,s,o){return(t/=o/2)<1?-s/2*(Math.sqrt(1-t*t)-1)+n:s/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,s,o){var r=1.70158,i=0,a=s;return t==0?n:(t/=o)==1?n+s:(i||(i=o*.3),a<Math.abs(s)?(a=s,r=i/4):(r=i/(2*Math.PI)*Math.asin(s/a)),-(a*Math.pow(2,10*(t-=1))*Math.sin((t*o-r)*(2*Math.PI)/i))+n)},easeOutElastic:function(e,t,n,s,o){var r=1.70158,i=0,a=s;return t==0?n:(t/=o)==1?n+s:(i||(i=o*.3),a<Math.abs(s)?(a=s,r=i/4):(r=i/(2*Math.PI)*Math.asin(s/a)),a*Math.pow(2,-10*t)*Math.sin((t*o-r)*(2*Math.PI)/i)+s+n)},easeInOutElastic:function(e,t,n,s,o){var r=1.70158,i=0,a=s;return t==0?n:(t/=o/2)==2?n+s:(i||(i=o*(.3*1.5)),a<Math.abs(s)?(a=s,r=i/4):(r=i/(2*Math.PI)*Math.asin(s/a)),t<1?-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*o-r)*(2*Math.PI)/i))+n:a*Math.pow(2,-10*(t-=1))*Math.sin((t*o-r)*(2*Math.PI)/i)*.5+s+n)},easeInBack:function(e,t,n,s,o,i){return i==void 0&&(i=1.70158),s*(t/=o)*t*((i+1)*t-i)+n},easeOutBack:function(e,t,n,s,o,i){return i==void 0&&(i=1.70158),s*((t=t/o-1)*t*((i+1)*t+i)+1)+n},easeInOutBack:function(e,t,n,s,o,i){return i==void 0&&(i=1.70158),(t/=o/2)<1?s/2*(t*t*(((i*=1.525)+1)*t-i))+n:s/2*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)+n},easeInBounce:function(e,t,n,s,o){return s-jQuery.easing.easeOutBounce(e,o-t,0,s,o)+n},easeOutBounce:function(e,t,n,s,o){return(t/=o)<1/2.75?s*(7.5625*t*t)+n:t<2/2.75?s*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?s*(7.5625*(t-=2.25/2.75)*t+.9375)+n:s*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,s,o){return t<o/2?jQuery.easing.easeInBounce(e,t*2,0,s,o)*.5+n:jQuery.easing.easeOutBounce(e,t*2-o,0,s,o)*.5+s*.5+n}})