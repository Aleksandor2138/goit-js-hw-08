var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=l||u||Function("return this")(),s=Object.prototype.toString,c=Math.max,m=Math.min,v=function(){return f.Date.now()};function d(e,t,n){var i,o,a,r,l,u,f=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,a=o;return i=o=void 0,f=t,r=e.apply(a,n)}function h(e){return f=e,l=setTimeout(w,t),s?y(e):r}function j(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-f>=a}function w(){var e=v();if(j(e))return O(e);l=setTimeout(w,function(e){var n=t-(e-u);return d?m(n,a-(e-f)):n}(e))}function O(e){return l=void 0,b&&i?y(e):(i=o=void 0,r)}function S(){var e=v(),n=j(e);if(i=arguments,o=this,u=e,n){if(void 0===l)return h(u);if(d)return l=setTimeout(w,t),y(u)}return void 0===l&&(l=setTimeout(w,t)),r}return t=p(t)||0,g(n)&&(s=!!n.leading,a=(d="maxWait"in n)?c(p(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==l&&clearTimeout(l),f=0,i=u=o=l=void 0},S.flush=function(){return void 0===l?r:O(v())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=o.test(e);return l||a.test(e)?r(e.slice(2),l?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),d(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form");b.addEventListener("input",t((()=>{const e={email:b.elements.email.value,message:b.elements.message.value},t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t),console.log(localStorage.getItem("feedback-form-state"))}),500));(()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));b.elements.email.value=e.email,b.elements.message.value=e.message}catch(e){}})();b.addEventListener("submit",(e=>{if(e.preventDefault(),""===b.elements.email.value||""===b.elements.message.value)alert("Заполните пожалуста email и ваше сообщение.");else{const e={email:b.elements.email.value,message:b.elements.message.value};console.log(e),b.elements.email.value="",b.elements.message.value="",localStorage.clear()}}));
//# sourceMappingURL=03-feedback.9d43539e.js.map