!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",i=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,g=s||m||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return g.Date.now()};function b(e,t,n){var i,r,a,u,f,c,l=0,s=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function d(t){var n=i,o=r;return i=r=void 0,l=t,u=e.apply(o,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-l>=a}function S(){var e=y();if(b(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-c);return m?p(n,a-(e-l)):n}(e))}function w(e){return f=void 0,g&&i?d(e):(i=r=void 0,u)}function O(){var e=y(),n=b(e);if(i=arguments,r=this,c=e,n){if(void 0===f)return function(e){return l=e,f=setTimeout(S,t),s?d(e):u}(c);if(m)return f=setTimeout(S,t),d(c)}return void 0===f&&(f=setTimeout(S,t)),u}return t=j(t)||0,h(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=r=f=void 0},O.flush=function(){return void 0===f?u:w(y())},O}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==r}(e))return i;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):u.test(e)?i:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return h(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};const S="feedback-form-state",w=document.querySelector(".feedback-form"),O=document.querySelector('input[name="email"]'),T=document.querySelector('textarea[name="message"]'),x={email:"",message:""};!function(){try{const e=function(){try{const e=localStorage.getItem(S);return JSON.parse(e)}catch(e){console.log("Помилка читання з локального сховища:",e.name,e.message)}}();e.email&&(x.email=e.email,O.value=e.email),e.message&&(x.message=e.message,T.value=e.message)}catch(e){console.log("Локальне сховище не містить коректних данних для автозаповнення форми")}}(),w.addEventListener("input",e(t)((function(e){"email"===e.target.name&&(x.email=e.target.value);"message"===e.target.name&&(x.message=e.target.value);!function(e){try{localStorage.setItem(S,JSON.stringify(e))}catch(e){console.log("Помилка запису в локальне сховище:",e.name,e.message)}}(x)}),500)),w.addEventListener("submit",(function(e){e.preventDefault(),console.log(x),O.value="",T.value="",localStorage.removeItem(S)}))}();
//# sourceMappingURL=03-feedback.36b67e46.js.map
