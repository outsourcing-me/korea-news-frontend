!function(){function a(a){return"string"==typeof a?a.replace(/^\s\s*/,"").replace(/\s\s*$/,""):a}function b(){var b,a=new Date;a.setTime(a.getTime()+864e5),b="expires="+a.toGMTString(),document.cookie="ACT_C=Y; "+b+"; domain=ad.daum.net; path=/"}function c(b){var e,f,g,c=b+"=",d=document.cookie?document.cookie.split(";"):[];for(f=0,g=d.length;f<g;f++)if(e=a(d[f]),0===e.indexOf(c))return e.substring(c.length,e.length);return""}function d(a){return a&&a.turl?a.turl:""}function e(a){var d,e,f,g,h,b="string"==typeof a&&a.indexOf("?")!==-1?a.split("?")[1]:"",c=b.length>0?b.split("&"):[];for(d=0,e=c.length;d<e;d++)if(f=c[d].split("="),f.length>0&&(g=f[0],h=f[1],"ask"===g))return h;return""}function f(){try{return window.self!==window.top}catch(a){return!1}}function g(){var a=document.domain||"";return-1!==a.indexOf("daum.net")}function h(){for(var h,n,o,p,q,a=window.roosevelt_params_queue||[],i="",j=f(),k=g(),l=c("ACT_C"),m=c("DAPROF"),r="0.0.4";a.length>0;)h=a.shift(),i=d(h),n=e(i),o=h.channel_id||"",p=h.channel_label||"","Y"!==l&&""!==n&&""!==m&&j&&k&&(q=document.createElement("IMG"),q.src=("https:"===document.location.protocol?"https://":"http://")+"wat.daumdn.com/prof?ask="+n+"&DAPROF="+m+"&roo_channel_id="+o+"&roo_channel_label="+p+"&jsver="+r,b())}h()}();
