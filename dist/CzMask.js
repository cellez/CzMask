parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"M0PF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){if(void 0===e&&(e={mask:""}),!e.el)return[];if(!e.mask||!e.mask.length)return[];var t=function(t){return!!t&&(e.keyData={code:t.key||t.keyCode||t.which,isDel:!1,isSup:!1},8!==e.keyData.code&&"Backspace"!==e.keyData.code||(e.keyData.isDel=!0),46!==e.keyData.code&&"Delete"!==e.keyData.code||(e.keyData.isSup=!0),!0)},n=function(t){if(!t)return!1;t.preventDefault();var n=t.target;if(!n)return[];if(n instanceof HTMLButtonElement)return[];var i=e.mask||n.dataset.mask;if(i&&n instanceof HTMLInputElement){var a=n.selectionStart,r=n.value.split(""),s=i.split(""),f=0;f=a-1;var l=Object.keys(s.reduce(function(e,t){return e[t]=t,e},{}));if(["_"].forEach(function(e){return l.splice(l.indexOf(e),1)}),!e.keyData)return[];if(e.keyData.isDel)if(l.indexOf(s[a])>=0){for(var o=f;l.indexOf(s[f])>=0;)f--;f=r[f]?f:++o,r.splice(f--,0,"_")}else r.splice(a,0,"_");else if(e.keyData.isSup){r.splice(a,0,"_");for(var u=a;r[u];){if(-1===l.indexOf(s[u])){for(var c=u+1,d=2;l.indexOf(s[c])>=0;)c=u+d++;r.splice(u,0,r[c]),-1===l.indexOf(s[c])&&r.splice(c,1)}u++}}else{for(var k=f;l.indexOf(s[f])>=0;)f++;r[f]=r[k],r.splice(f+1,1)}s=s.map(function(e,t){return l.indexOf(e)>=0?e:r[t]||e}),n.value=s.join(""),n.setSelectionRange(f+1,f+1)}};e.el.removeEventListener("keydown",t),e.el.removeEventListener("input",n),e.el.addEventListener("keydown",t),e.el.addEventListener("input",n)};exports.default=e;
},{}]},{},["M0PF"], null)