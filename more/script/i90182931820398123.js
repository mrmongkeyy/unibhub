Array.prototype.getRandom=function(){return this[Math.floor(Math.random()*this.length)]},JSON.toEncoded=function(t){let e="";for(let n in t)e+=`${n}=${t[n]}&&`;return e};const jsonstr=function(t){return JSON.stringify(t)},filterString=function(t,e,n){for(;-1!=t.indexOf(e);)t=t.replace(e,n);return t},emptycheck=function(t){let e=!0;for(let n in t)if(!t[n]||0===t[n].length){e=!1;break}return e},recheckvalue=function(t,e=1e3){const n=t.style.borderColor;t.style.borderColor="red",setTimeout(()=>{t.style.borderColor=n},e)},getTimestamp=function(){let t=(new Date).toLocaleTimeString(),e=(new Date).toLocaleDateString();for(;-1!=t.indexOf(".");)t=t.replace(".","");const n=e.split("/");return e="",n.reverse(),n.forEach(t=>{1===t.length&&(t=0+t),e+=t}),e+t},vector2=function(t=0,e=0){return{x:t,y:e}},forIn=function(t,e){for(let n=0;n<t;n++)e&&e(n)},getRad=function(t){return t*Math.PI/180},vector2Dir=function(t,e){return Math.atan2(e.x-t.x,e.y-t.y)},transformV=function(t,e){return vector2(e.x-t.x,e.y-t.y)},getMagnitude=function(t){return Math.hypot(t.x,t.y)},random=function(t,e=0){return Math.floor(Math.random()*t)+e},find=function(t){return Object.assign(document.querySelector(t),toInject)},findall=function(t){const e=document.querySelectorAll(t);for(let t=0;t<e.length;t++)Object.assign(e[t],toInject);return e},flex={components:[]},objlen=function(t){let e=0;for(let n in t)e+=1;return e},toInject={find(t){const e=this.querySelector(t);return e?Object.assign(e,this):null},findall(t){const e=this.querySelectorAll(t);for(let t=0;t<e.length;t++)Object.assign(e[t],toInject);return e},addChild(t){this.appendChild(t),t.onadded&&t.onadded()},addBefore(t,e){this.insertBefore(t,e),t.onadded&&t.onadded()},show(t="block"){"none"!==this.style.display&&""!==this.style.display||(this.style.display=t)},hide(){"none"===this.style.display&&""===this.style.display||(this.style.display="none")},changeTo(t,e="block"){this.hide(),t.style.display=e},saveRemove(t){const e=this.querySelector(t);e&&e.remove()},clear(){this.innerHTML=""},update(t){Object.assign(this,t)},setHTML(t){this.innerHTML=t},showUp(t,e,n=2e3){t(this),setTimeout(()=>{e(this)},n)}},makeElement=function(t,e={}){return Object.assign(e,toInject),Object.assign(document.createElement(t),e)};document.body.addChild=function(t){this.appendChild(t),t.onadded&&t.onadded()},window.onresize=function(t){flex.components.forEach(e=>{e.onScreenChange&&e.onScreenChange(t)})};const form=function(t){const e=new FormData;for(let n in t)e.append(n,t[n]);return e},cOn={x:new XMLHttpRequest,init(){this.x.someSettings=[],this.x.getJSONResponse=(()=>JSON.parse(this.x.responseText))},post(t){this.init(),Object.assign(this.x,t),this.x.open("POST",t.url),this.x.someSettings.length>0&&this.x.someSettings.forEach(t=>{this.x[t[0]](t[1],[t[2]])}),this.x.send(t.data)},get(t){this.init(),Object.assign(this.x,t),this.x.open("GET",t.url),this.x.send()}},uploadFile=function(t="readAsArrayBuffer",e,n=1e3,o,i,r={}){const s=new FileReader;s.onload=function(){const t=this.result;let s=0,l=!1;const a=function(){let c=s,d=c+n;d>t.byteLength&&(d-=d-t.byteLength,l=!0);let u=t.slice(c,d);cOn.post({url:"/upload",someSettings:[["setRequestHeader","content-type","application/octet-stream"],["setRequestHeader","filedata",JSON.stringify(Object.assign({fname:e.name},r))]],data:u,onload(t){s+=u.byteLength,o(s),l?i(t):a()}})};a()},s[t](e)},readFile=function(t,e,n){const o=new FileReader;o[e](t),o.onloadend=function(){n(this.result)}},getPrice=function(t){t=String(t);let e="";for(;;){if(!(t.length>3)){e=t+e;break}e="."+t.slice(t.length-3)+e,t=t.slice(0,t.length-3)}return e},speedywords=function(t,e,n=1e3){let o=0,i=0;setInterval(()=>{e.innerHTML+=`<span>${t[o][i]}</span>`,++i===t[o].length+1&&(++o===t.length&&(o=0),i=0,e.clear())},n)},showElement=function(t,e="flex"){t.style.display=e},hideElement=function(t){t.style.display="none"},getTime=function(){return(new Date).getTime()},getUniqueID=function(t=10){const e="aAbBcCdDEeFfJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";let n="";for(let o=0;o<t;o++)n+=e[Math.floor(Math.random()*e.length)];return n},objToArray=function(t){const e=[];return Object.keys(t).forEach(n=>{e.push(t[n])}),e},OBJevaluate=function(t){const e={};for(let n in t)t[n]&&(e[n]=t[n]);return e},imgErrHandler=function(){},is_null=function(t){return 0===t.length},openLoading=function(t,e,n){return makeElement("div",{id:"loadingDiv",style:"\n\t\t\tposition:absolute;\n\t\t\ttop:0;\n\t\t\tleft:0;\n\t\t\twidth:100%;\n\t\t\theight:100%;\n\t\t\tbackground:RGB(255,255,255,.7);\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tjustify-content:center;\n\t\t\tindex:1;\n\t\t",innerHTML:`\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\tbackground:white;\n\t\t\t\tpadding:20px;\n\t\t\t\tdisplay:flex;\n\t\t\t\tflex-direction:column;\n\t\t\t\talign-items:center;\n\t\t\t\tborder-radius:20px;\n\t\t\t\tbox-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);\n\t\t\t"\n\t\t\t>\n\t\t\t\t<img src=${n||"/file?fn=loadingscreen.gif"}\n\t\t\t\tstyle="\n\t\t\t\t\twidth:200px;\n\t\t\t\t"\n\t\t\t\t>\n\t\t\t\t<span>${t}</span>\n\t\t\t</div>\n\t\t`,onadded(){e&&e(this)}})},compareSet=function(t,e,n){t===e?t=n:t===n&&(t=e)},forceRecheck=function(t,e,n=!1){const o=findall("#frcel");t.addChild(makeElement("div",{id:"frcel",style:`\n\t\t\tposition:absolute;\n\t\t\tbackground:red;\n\t\t\tcolor:white;\n\t\t\tpadding:15px;\n\t\t\tz-index:1;\n\t\t\tleft:0;\n\t\t\tfont-size:16px;\n\t\t\tmargin-top: ${50*o.length+1}px;\n\t\t\tbottom:0;\n\t\t`,innerHTML:e,onadded(){n||setTimeout(()=>{this.remove()},2e3)}}))},getTimePlus=function(t){return(new Date).getTime()+t},nonull=function(t){const e=[];for(let n in t)t[n]||e.push(n);return{valid:0===e.length,nullkeys:e}},getFullDate=function(){return(new Date).toLocaleDateString()},ddmmyy=function(){const t=new Date;let e=String(t.getUTCDate());e=1===e.length?`0${e}`:e;let n=String(t.getUTCMonth());n=1===n.length?`0${n}`:n;let o=String(t.getUTCFullYear());return`${e}-${n}-${o=1===o.length?`0${o}`:o}`},SmartTime=function(t){const e=(new Date).getTime(),n=String(e-t);let o=Number(n.slice(0,n.length-3));const i=o%60;let r=(o-i)/60;const s=r%60;let l=(r-s)/60;const a=l%24;let c=(l-a)/24;const d=c%7;let u=(c-d)/7;const h=u%4;let f=(u-h)/4;const g=f%12;let p=(f-g)/12;const m=[o=i,r=s,l=a,c=d,u=h,f=g,p];let y=-1;for(let t=0;t<m.length;t++)m[t]&&(y=t);return-1==y?"0 detik lalu":`${m[y]} ${["detik","menit","jam","hari","minggu","bulan","tahun"][y]} lalu`};