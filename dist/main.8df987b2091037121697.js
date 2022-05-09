"use strict";(self.webpackChunkasteroids=self.webpackChunkasteroids||[]).push([[179],{15:function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var r=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.reduce((function(t,e){return t+e}))},n=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t(Array(e).keys()).map((function(t){return t+r}))};function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e[0].map((function(t,r){return e.reduce((function(t,e){return t+e[r]}),0)}))},f=function(t,e){return t.map((function(t,r){return t-e[r]}))},l=function(t,e){return e.map((function(e){return e*t}))},y=function(t){return Math.sqrt(r.apply(void 0,i(t.map((function(t){return Math.pow(t,2)})))))},s=function(t,e){return y(f(t,e))},p=function(t){var e=o(t,2),r=e[0],n=e[1];return[r*Math.cos(n),r*Math.sin(n)]},h=function(t,e){var r=function(t){var e=o(t,2),r=e[0],n=e[1],i=Math.atan2(n,r);return[y(t),i]}(e),n=o(r,2),i=n[0],u=n[1];return p([i,u+t])},b=function(t,e){var r=o(t,2),n=r[0],i=r[1],u=o(e,2),a=u[0],c=u[1],f=s(n,i),l=s(a,c),y=function(t,e,r,n){var i=o(t,2),u=i[0],a=i[1],c=o(e,2),f=c[0],l=c[1],y=o(r,2),s=y[0],p=y[1],h=o(n,2),b=h[0],v=h[1],d=(f-u)*(v-p)-(b-s)*(l-a);if(0===d)return null;var m=((v-p)*(b-u)+(s-b)*(v-a))/d,w=((a-l)*(b-u)+(f-u)*(v-a))/d;return 0<m&&m<1&&0<w&&w<1?[u+m*(f-u),a+m*(l-a)]:null}(n,i,a,c);return null!==y&&(s(n,y)<=f&&s(i,y)<=f&&s(a,y)<=l&&s(c,y)<=l)},v=function(t,e,r){var n=[e-t.x,r-t.y];return function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return r.map((function(e){return l(t,e)}))}(t.force,n)[0]};function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=w(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,e)||w(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){if(t){if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.points=e,this.rotationAngle=0,this.x=0,this.y=0,this.vx=0,this.vy=0,this.vr=0,this.acceleration=0,this.travelled=0}var e,r,o;return e=t,r=[{key:"move",value:function(t){var e=this.vx*t/1e3,r=this.vy*t/1e3,n=m(c([this.x,this.y],[e,r]),2);this.x=n[0],this.y=n[1],this.travelled+=this.speed()/t,this.x<-11&&(this.x+=22),this.y<-11&&(this.y+=22),this.x>11&&(this.x-=22),this.y>11&&(this.y-=22)}},{key:"rotate",value:function(t){var e=this.vr*t/1e3,r=m(c([this.rotationAngle],[e]),1);this.rotationAngle=r[0]}},{key:"accelerate",value:function(t){var e=this.acceleration*Math.cos(this.rotationAngle),r=this.acceleration*Math.sin(this.rotationAngle);this.vx+=e*t/1e3,this.vy+=r*t/1e3}},{key:"speed",value:function(){return y([this.vx,this.vy])}},{key:"transformed",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.points;return e.map((function(e){return h(t.rotationAngle,e)})).map((function(e){return c([t.x,t.y],e)}))}},{key:"segments",value:function(){var t=this.points.length,e=this.transformed();return n(t).map((function(r){return[e[r],e[(r+1)%t]]}))}},{key:"doesCollide",value:function(t){var e,r=d(t.segments());try{for(r.s();!(e=r.n()).done;){var n=e.value;if(this.doesIntersect(n))return!0}}catch(t){r.e(t)}finally{r.f()}return!1}},{key:"doesIntersect",value:function(t){var e,r=d(this.segments());try{for(r.s();!(e=r.n()).done;){var n=e.value;if(b(t,n))return!0}}catch(t){r.e(t)}finally{r.f()}return!1}}],r&&O(e.prototype,r),o&&O(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function P(t,e){return P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},P(t,e)}function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=E(t);if(e){var o=E(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _(this,r)}}function _(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(i,t);var e,r,n,o=x(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,[[.5,0],[-.25,.25],[-.25,-.25]])}return e=i,(r=[{key:"muzzle",value:function(){return this.transformed()[0]}},{key:"tail",value:function(){return this.transformed([[-.25,0]])[0]}}])&&A(e.prototype,r),n&&A(e,n),Object.defineProperty(e,"prototype",{writable:!1}),i}(S),k=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},T=function(t,e){return Math.random()*(e-t)+t};function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function B(t,e){return B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},B(t,e)}function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=L(t);if(e){var o=L(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return D(this,r)}}function D(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,r,o,i=W(u);function u(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;M(this,u);var r=k(5,9),o=n(r).map((function(t){var n=T(.5,1)/e;return p([n,2*Math.PI*t/r])}));return(t=i.call(this,o)).vx=T(-1,1)*e,t.vy=T(-1,1)*e,t.vr=T(-1,1)*e,t.generation=e,t}return e=u,r&&C(e.prototype,r),o&&C(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(S),z=function(t,e){t.beginPath(),t.moveTo(e[0][0],e[0][1]);for(var r=1;r<e.length;r++)t.lineTo(e[r][0],e[r][1]);t.closePath()},$=function(t,e){["shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY"].forEach((function(r){r in e&&(t[r]=e[r])}))},q=function(t,e){var r=e.fillStyle,n=e.strokeStyle,o=e.lineWidth;r&&(t.fillStyle=r,t.fill()),n&&o&&(t.strokeStyle=n,t.lineWidth=o,t.stroke())};function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function H(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function F(t,e){return F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},F(t,e)}function X(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=J(t);if(e){var o=J(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Y(this,r)}}function Y(t,e){if(e&&("object"===G(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}var K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&F(t,e)}(i,t);var e,r,n,o=X(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,[[0,0],[.5,0]])).reach=50,t}return e=i,r&&H(e.prototype,r),n&&H(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(S);function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function Q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function V(t,e){return V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},V(t,e)}function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=et(t);if(e){var o=et(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return tt(this,r)}}function tt(t,e){if(e&&("object"===N(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function et(t){return et=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},et(t)}var rt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&V(t,e)}(i,t);var e,r,n,o=Z(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,[[0,0],[.1,0]])).reach=6,t}return e=i,r&&Q(e.prototype,r),n&&Q(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(S);function nt(t){return nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(t)}function ot(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function it(t,e){return it=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},it(t,e)}function ut(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=ct(t);if(e){var o=ct(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return at(this,r)}}function at(t,e){if(e&&("object"===nt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function ct(t){return ct=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ct(t)}var ft=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&it(t,e)}(u,t);var e,r,o,i=ut(u);function u(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);var r=n(20).map((function(t){return p([.5,2*Math.PI*t/20])}));return(e=i.call(this,r)).force=t,e}return e=u,r&&ot(e.prototype,r),o&&ot(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(S);function lt(t){return lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lt(t)}function yt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function st(t,e){return st=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},st(t,e)}function pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=bt(t);if(e){var o=bt(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return ht(this,r)}}function ht(t,e){if(e&&("object"===lt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function bt(t){return bt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},bt(t)}var vt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&st(t,e)}(u,t);var e,r,o,i=pt(u);function u(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);var e=k(3,6),r=n(e).map((function(t){var r=T(.05,.1);return p([r,2*Math.PI*t/e])}));return(t=i.call(this,r)).reach=6,t}return e=u,r&&yt(e.prototype,r),o&&yt(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(S);function dt(t){return function(t){if(Array.isArray(t))return gt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||wt(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function mt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,e)||wt(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function wt(t,e){if(t){if("string"==typeof t)return gt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?gt(t,e):void 0}}function gt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Ot=null,St=[],jt=[],At=[],Pt=[],xt=[];document.body.appendChild(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=document.createElement("div");return e.innerHTML=t,e}("<canvas id='game-action-layer'/>"));var _t=document.getElementById("game-action-layer");_t.setAttribute("height","400"),_t.setAttribute("width","400");var Et=!1,Rt=!1,kt=!1;window.addEventListener("keydown",(function(t){if(!t.repeat)switch(t.key){case"ArrowLeft":Rt=!0;break;case"ArrowRight":kt=!0;break;case"ArrowUp":Et=!0;break;case" ":var e=new K,r=mt(Ot.muzzle(),2);e.x=r[0],e.y=r[1],e.vx=Ot.vx,e.vy=Ot.vy,e.rotationAngle=Ot.rotationAngle,e.acceleration=40,jt.push(e)}})),window.addEventListener("keyup",(function(t){switch(t.key){case"ArrowLeft":Rt=!1;break;case"ArrowRight":kt=!1;break;case"ArrowUp":Et=!1}}));var Tt,It,Ct,Mt,Bt=_t.getContext("2d"),Wt=(Tt=_t.width,It=_t.height,Ct=20,Mt=20,function(t,e){return[Tt/2+Tt*t/Ct,It/2-It*e/Mt]}),Dt=function(){Ot=new R,St=n(8).map((function(t){var e=new U;return e.x=k(-9,9),e.y=k(-9,9),e})),jt=[],At=[],xt=n(1).map((function(t){return new ft(-.1)}))},Lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.map((function(t){var e=mt(t,2),r=e[0],n=e[1];return Wt(r,n)}));Bt.save(),z(Bt,r),$(Bt,e),q(Bt,e),Bt.restore()},Ut=performance.now();Dt(),function t(){var e=performance.now(),r=e-Ut;if(Ut=e,Bt.clearRect(0,0,_t.width,_t.height),xt.map((function(t){Lt(t.transformed(),{fillStyle:"Black",shadowColor:"Gray",shadowBlur:16})})),Et){Ot.acceleration=12;for(var o=k(1,5),i=0;i<o;i++){var u=new rt,a=mt(Ot.tail(),2);u.x=a[0],u.y=a[1],u.vx=Ot.vx,u.vy=Ot.vy,u.reach=k(3,10),u.rotationAngle=Ot.rotationAngle-Math.PI+T(-.2,.2),u.acceleration=k(20,30),At.push(u)}}else Ot.acceleration=0;Rt&&!kt?Ot.rotationAngle+=.1:!Rt&&kt&&(Ot.rotationAngle-=.1),Ot.rotate(r),Ot.accelerate(r),Ot.move(r),Lt(Ot.transformed(),{lineWidth:1,strokeStyle:"Blue",fillStyle:"Lavender"});var c=[],f=!1;St=St.filter((function(t){t.doesCollide(Ot)&&(f=!0);var e,r=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=wt(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}(jt);try{for(r.s();!(e=r.n()).done;){var o=e.value;if(t.doesCollide(o)){for(var i=k(30,50)*(4-t.generation),u=0;u<i;u++){var a=new vt;a.x=t.x+T(-.2,.2),a.y=t.y+T(-.2,.2);var l=T(0,2*Math.PI),y=mt(p([3,l]),2),s=y[0],h=y[1];a.vx=s,a.vy=h,a.reach=k(2,5),a.rotationAngle=l,a.acceleration=k(-3,-1),Pt.push(a)}return o.reach=0,t.generation<3&&n(3).forEach((function(e){var r=new U(t.generation+1);r.x=t.x,r.y=t.y,c.push(r)})),!1}}}catch(t){r.e(t)}finally{r.f()}return!0})),St=[].concat(dt(St),c),xt.forEach((function(t){St.forEach((function(e){var n=mt(v(t,e.x,e.y),2),o=n[0],i=n[1];e.vx+=o*(r/1e3),e.vy+=i*(r/1e3)}));var e=mt(v(t,Ot.x,Ot.y),2),n=e[0],o=e[1];Ot.vx+=n*(r/1e3),Ot.vy+=o*(r/1e3)})),St.forEach((function(t){t.move(r),t.rotate(r),Lt(t.transformed(),{lineWidth:1,strokeStyle:"Green",fillStyle:"Honeydew"})})),(jt=jt.filter((function(t){return t.travelled<t.reach}))).forEach((function(t){t.accelerate(r),t.move(r),Lt(t.transformed(),{lineWidth:1,strokeStyle:"Red"})})),(At=At.filter((function(t){return t.travelled<t.reach}))).forEach((function(t){t.accelerate(r),t.move(r),Lt(t.transformed(),{lineWidth:1,strokeStyle:"rgba(255,".concat(k(128,255),",0,").concat(1-t.travelled/t.reach,")"),shadowColor:"White",shadowBlur:1})})),(Pt=Pt.filter((function(t){return t.travelled<t.reach}))).forEach((function(t){t.accelerate(r),t.move(r);var e=k(200,255);Lt(t.transformed(),{fillStyle:"rgba(".concat(e-15,",").concat(e,",").concat(e-15,",").concat(1-t.travelled/t.reach,")"),shadowColor:"White",shadowBlur:2})})),f&&Dt(),requestAnimationFrame(t)}()}},function(t){var e;e=15,t(t.s=e)}]);
//# sourceMappingURL=main.8df987b2091037121697.js.map