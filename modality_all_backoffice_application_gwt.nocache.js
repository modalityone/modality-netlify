function modality_all_backoffice_application_gwt(){var O='bootstrap',P='begin',Q='gwt.codesvr.modality_all_backoffice_application_gwt=',R='gwt.codesvr=',S='modality_all_backoffice_application_gwt',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='position:absolute; width:0; height:0; border:none; left: -1000px;',Z=' top: -1000px;',$='CSS1Compat',_='<!doctype html>',ab='',bb='<html><head><\/head><body><\/body><\/html>',cb='undefined',db='readystatechange',eb=10,fb='Chrome',gb='eval("',hb='");',ib='script',jb='javascript',kb='moduleStartup',lb='moduleRequested',mb='Failed to load ',nb='head',ob='meta',pb='name',qb='modality_all_backoffice_application_gwt::',rb='::',sb='gwt:property',tb='content',ub='=',vb='gwt:onPropertyErrorFn',wb='Bad handler "',xb='" for "gwt:onPropertyErrorFn"',yb='gwt:onLoadErrorFn',zb='" for "gwt:onLoadErrorFn"',Ab='#',Bb='?',Cb='/',Db='img',Eb='clear.cache.gif',Fb='baseUrl',Gb='modality_all_backoffice_application_gwt.nocache.js',Hb='base',Ib='//',Jb='selectingPermutation',Kb='modality_all_backoffice_application_gwt.devmode.js',Lb='9ABB87B976005C59C478EDA50F0C2018',Mb=':',Nb='.cache.js',Ob='loadExternalRefs',Pb='end',Qb='http:',Rb='file:',Sb='_gwt_dummy_',Tb='__gwtDevModeHook:modality_all_backoffice_application_gwt',Ub='Ignoring non-whitelisted Dev Mode URL: ',Vb=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
modality_all_backoffice_application_gwt.__sendStats=r;modality_all_backoffice_application_gwt.__moduleName=S;modality_all_backoffice_application_gwt.__errFn=null;modality_all_backoffice_application_gwt.__moduleBase=U;modality_all_backoffice_application_gwt.__softPermutationId=V;modality_all_backoffice_application_gwt.__computePropValue=null;modality_all_backoffice_application_gwt.__getPropMap=null;modality_all_backoffice_application_gwt.__installRunAsyncCode=function(){};modality_all_backoffice_application_gwt.__gwtStartLoadingFragment=function(){return null};modality_all_backoffice_application_gwt.__gwt_isKnownPropertyValue=function(){return false};modality_all_backoffice_application_gwt.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};modality_all_backoffice_application_gwt.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[modality_all_backoffice_application_gwt.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.id=S;a.style.cssText=Y+Z;a.tabIndex=-1;p.body.appendChild(a);u=a.contentWindow.document;u.open();var b=document.compatMode==$?_:ab;u.write(b+bb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==cb){return typeof p.body!=cb&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(p.removeEventListener){p.removeEventListener(db,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(db,d,false)}var e=setInterval(function(){d()},eb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(fb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(gb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(hb));g=e.createElement(ib);g.language=jb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(ib);g.language=jb;g.text=c[i];f.appendChild(g);d(f,g)}}}
modality_all_backoffice_application_gwt.onScriptDownloaded=function(a){l(function(){m(a)})};r(kb,lb);var n=p.createElement(ib);n.src=k;if(modality_all_backoffice_application_gwt.__errFn){n.onerror=function(){modality_all_backoffice_application_gwt.__errFn(S,new Error(mb+code))}}p.getElementsByTagName(nb)[V].appendChild(n)}
modality_all_backoffice_application_gwt.__startLoadingFragment=function(a){return D(a)};modality_all_backoffice_application_gwt.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(ib);d.language=jb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(ob);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(pb),k;if(j){j=j.replace(qb,ab);if(j.indexOf(rb)>=V){continue}if(j==sb){k=i.getAttribute(tb);if(k){var l,m=k.indexOf(ub);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=ab}c[j]=l}}else if(j==vb){k=i.getAttribute(tb);if(k){try{d=eval(k)}catch(a){alert(wb+k+xb)}}}else if(j==yb){k=i.getAttribute(tb);if(k){try{e=eval(k)}catch(a){alert(wb+k+zb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;modality_all_backoffice_application_gwt.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Ab);if(b==-1){b=a.length}var c=a.indexOf(Bb);if(c==-1){c=a.length}var d=a.lastIndexOf(Cb,Math.min(c,b));return d>=V?a.substring(V,d+W):ab}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Db);b.src=a+Eb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Fb);if(a!=null){return a}return ab}
function h(){var a=p.getElementsByTagName(ib);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Gb)!=-1){return e(a[b].src)}}return ab}
function i(){var a=p.getElementsByTagName(Hb);if(a.length>V){return a[a.length-W].href}return ab}
function j(){var a=p.location;return a.href==a.protocol+Ib+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==ab){k=h()}if(k==ab){k=i()}if(k==ab&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return modality_all_backoffice_application_gwt.__moduleBase+a}
function F(){var f=[];var g=V;var h=[];var i=[];function j(a){var b=i[a](),c=h[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
__gwt_isKnownPropertyValue=function(a,b){return b in h[a]};modality_all_backoffice_application_gwt.__getPropMap=function(){var a={};for(var b in h){if(h.hasOwnProperty(b)){a[b]=j(b)}}return a};modality_all_backoffice_application_gwt.__computePropValue=j;o.__gwt_activeModules[S].bindings=modality_all_backoffice_application_gwt.__getPropMap;r(O,Jb);if(q()){return D(Kb)}var k;try{k=Lb;var l=k.indexOf(Mb);if(l!=-1){g=parseInt(k.substring(l+W),eb);k=k.substring(V,l)}}catch(a){}modality_all_backoffice_application_gwt.__softPermutationId=g;return D(k+Nb)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(Ob,P);r(Ob,Pb)}
B();modality_all_backoffice_application_gwt.__moduleBase=C();t[S].moduleBase=modality_all_backoffice_application_gwt.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==Qb||o.location.protocol==Rb);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=Sb;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=Tb;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(Ub+L)}L=ab}if(L&&!o[K]){o[K]=true;o[K+Vb]=C();var M=p.createElement(ib);M.src=L;var N=p.getElementsByTagName(nb)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,Pb);A(H);return true}
modality_all_backoffice_application_gwt.succeeded=modality_all_backoffice_application_gwt();