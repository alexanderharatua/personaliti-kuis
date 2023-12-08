(()=>{var e={857:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function s(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}r.d(t,{Z:()=>X});var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(l,H5P.EventDispatcher);var t,r,n,u,c=(n=l,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=a(n);if(u){var r=a(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function l(e,t){var r,n=e.successScreenImage,i=void 0===n?{}:n,o=e.successMessage,s=void 0===o?"":o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=c.call(this)).wrapper=document.createElement("div"),r.wrapper.className="h5p-questionnaire-success",r.wrapper.setAttribute("tabindex","-1"),r.wrapper.classList.add("hide");var a=document.createElement("div");a.className="h5p-questionnaire-success-center",r.wrapper.appendChild(a);var u=document.createElement("div");u.className="h5p-questionnaire-success-icon",i.params&&i.params.file?(u.classList.add("image"),H5P.newRunnable(i,t.contentId,H5P.jQuery(u),void 0,{parent:t}).on("loaded",(function(){r.trigger("imageLoaded")}))):u.classList.add("standard-icon");var f=document.createElement("div");return f.className="h5p-questionnaire-success-message",f.innerHTML=s,a.appendChild(u),a.appendChild(f),r.show=function(){this.wrapper.classList.remove("hide"),this.wrapper.focus()},r}return t=l,(r=[{key:"attachTo",value:function(e){e.appendChild(this.wrapper)}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}();function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,r=[{key:"createButton",value:function(t,r,n){var i=e.createElement("button",{className:"h5p-questionnaire-button "+r,type:"button",innerHTML:t});return n&&i.addEventListener("click",(function(){n.trigger(r)})),i}},{key:"createElement",value:function(e,t){var r=document.createElement(e);return Object.keys(t).forEach((function(e){r[e]=t[e]})),r}},{key:"createDiv",value:function(t){return e.createElement("div",t)}}],null&&c(t.prototype,null),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(s,H5P.EventDispatcher);var t,r,n,i,o=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(i){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function s(e){var t,r=e.title,n=e.subtitle,i=e.backLabel,a=e.submitLabel;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=o.call(this)).wrapper=l.createDiv({className:"h5p-questionnaire-submit-screen hide"}),t.wrapper.setAttribute("tabindex","-1"),t.wrapper.appendChild(l.createDiv({className:"h5p-questionnaire-submit-screen-title",innerHTML:r})),t.wrapper.appendChild(l.createDiv({className:"h5p-questionnaire-submit-screen-subtitle",innerHTML:n})),t.wrapper.appendChild(l.createButton(i,"previous",b(t))),t.wrapper.appendChild(l.createButton(a,"submit",b(t))),t.show=function(){this.wrapper.classList.remove("hide"),this.wrapper.focus()},t.hide=function(){this.wrapper.classList.add("hide")},t}return t=s,(r=[{key:"attachTo",value:function(e){e.appendChild(this.wrapper)}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function O(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(s,H5P.EventDispatcher);var t,r,n,i,o=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(n);if(i){var r=S(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return O(this,e)});function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=o.call(this)).requiredElement=document.createElement("div"),t.requiredElement.classList.add("h5p-questionnaire-choice-required"),t.requiredElement.classList.add("hide"),t.requiredMessage=document.createElement("div"),t.requiredMessage.innerHTML=e.requiredMessage,t.requiredMessage.className="h5p-questionnaire-choice-required-message",t.requiredMessage.setAttribute("role","alert");var r=document.createElement("button");return r.className="h5p-questionnaire-choice-required-exit",r.setAttribute("aria-label",e.accessibility.requiredTextExitLabel),r.addEventListener("click",(function(){t.hideMessage()})),t.on("hideMessage",(function(){t.hideMessage()})),t.on("showMessage",(function(){t.showMessage()})),t.requiredElement.appendChild(t.requiredMessage),t.requiredElement.appendChild(r),t}return t=s,(r=[{key:"showMessage",value:function(){this.requiredElement.classList.remove("hide")}},{key:"hideMessage",value:function(){this.requiredElement.classList.add("hide")}},{key:"attachTo",value:function(e){e.appendChild(this.requiredElement)}}])&&g(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function j(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(s,H5P.EventDispatcher);var t,r,n,i,o=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(n);if(i){var r=B(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return j(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=o.call(this)).footerWrapper=document.createElement("div"),t.footerWrapper.className="h5p-questionnaire-footer",t.footerWrapper.appendChild(t.createButton(e.prevLabel,"previous")),t.footerWrapper.appendChild(t.createButton(e.nextLabel,"next")),t.footerWrapper.appendChild(t.createButton(e.continueLabel,"next","continue")),t}return t=s,r=[{key:"setForwardNavigationButton",value:function(e){this.trigger("disable-next"),this.trigger("disable-continue"),this.trigger("enable-"+e)}},{key:"createButton",value:function(e,t,r){var n=l.createButton(e,t,this);return this.on("enable-"+(r||t),(function(){n.classList.remove("disable")})),this.on("disable-"+(r||t),(function(){n.classList.add("disable")})),n}},{key:"hide",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.footerWrapper.classList[e?"add":"remove"]("hide")}},{key:"attachTo",value:function(e){e.appendChild(this.footerWrapper)}}],r&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}();function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var T=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.numberWidget=document.createElement("div"),this.numberWidget.className="h5p-questionnaire-progress-bar-widget",this.numberWidget.setAttribute("aria-hidden","true"),this.currentIndex=document.createElement("div"),this.currentIndex.className="h5p-questionnaire-progress-bar-widget-current",this.currentIndex.textContent=t;var n=document.createElement("div");n.className="h5p-questionnaire-progress-bar-widget-separator",n.textContent="/";var i=document.createElement("div");i.className="h5p-questionnaire-progress-bar-widget-max",i.textContent=r,this.numberWidget.appendChild(this.currentIndex),this.numberWidget.appendChild(n),this.numberWidget.appendChild(i)}var t,r;return t=e,(r=[{key:"setCurrentIndex",value:function(e){this.currentIndex.textContent=e}},{key:"attachTo",value:function(e){e.appendChild(this.numberWidget)}}])&&C(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var k=function(){function e(t){var r=t.currentIndex,n=t.maxIndex,i=t.uiElements;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.maxIndex=n,this.uiElements=i,this.progressBar=document.createElement("div"),this.progressBar.className="h5p-questionnaire-progress-bar",this.progressBar.setAttribute("tabindex","-1"),this.progressBar.setAttribute("role","progressbar"),this.progressBar.setAttribute("aria-valuemin","0"),this.progressBar.setAttribute("aria-valuemax",n),this.updateAriaValues(r),this.currentProgress=document.createElement("div"),this.currentProgress.className="h5p-questionnaire-progress-bar-current",this.numberWidget=new T(r,n),this.move(r),this.progressBar.appendChild(this.currentProgress)}var t,r;return t=e,r=[{key:"updateAriaValues",value:function(e){this.progressBar.setAttribute("aria-valuenow",e),this.progressBar.setAttribute("aria-valuetext",this.uiElements.accessibility.progressBarText.replace("%current",e).replace("%max",this.maxIndex))}},{key:"move",value:function(e){this.numberWidget.setCurrentIndex(e),this.currentProgress.style.width="".concat(e/this.maxIndex*100,"%"),this.updateAriaValues(e),this.progressBar.focus()}},{key:"hide",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.progressBar.classList[e?"add":"remove"]("hide")}},{key:"attachNumberWidgetTo",value:function(e){this.numberWidget.attachTo(e)}},{key:"attachTo",value:function(e){e.appendChild(this.progressBar)}}],r&&_(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function N(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(a,H5P.EventDispatcher);var t,r,n,i,o,s=(i=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(i);if(o){var r=D(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return N(this,e)});function a(e){var t,r=e.progressBar,n=e.params,i=e.contentId,o=e.requiredField,u=(e.index,e.uiElements);return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=s.call(this)).progressBar=r,t.questionnaireElement=document.createElement("div"),t.questionnaireElement.className="h5p-questionnaire-element hide",t.instance=H5P.newRunnable(n,i,H5P.jQuery(t.questionnaireElement),void 0,{parent:M(t)}),t.requiredField=o,t.answered=n.userDatas&&n.userDatas.state&&n.userDatas.state.length,t.attachRequiredField(o,u),t.instance.on("xAPI",t.handleInteraction.bind(M(t))),t.instance.on("allow-finish-changed",t.trigger.bind(M(t))),t.instance.on("changed",t.trigger.bind(M(t))),t}return t=a,n=[{key:"AllowFinish",get:function(){return{ALWAYS:0,DENY:1,ALLOW:2}}}],(r=[{key:"attachRequiredField",value:function(e,t){if(e){var r=this.questionnaireElement.querySelector(".h5p-subcontent-question");this.questionnaireElement.classList.add("h5p-questionnaire-required");var n=document.createElement("div");n.innerHTML="* "+t.requiredText,n.className="h5p-questionnaire-required-symbol",r&&r.insertBefore(n,r.firstChild)}}},{key:"handleInteraction",value:function(e){if("http://adlnet.gov/expapi/verbs/interacted"===e.data.statement.verb.id){var t=e.data.statement.result.response;t.trim&&(t=t.trim()),this.answered=!!t.length,this.trigger("handledInteraction")}}},{key:"allowFinish",value:function(){return void 0!==this.instance.allowFinish?this.instance.allowFinish():a.AllowFinish.ALWAYS}},{key:"finish",value:function(){if(this.instance.finish)return this.instance.finish()}},{key:"getCurrentState",value:function(){return this.instance.getCurrentState?this.instance.getCurrentState():null}},{key:"getElement",value:function(){return this.questionnaireElement}},{key:"isRequired",value:function(){return this.requiredField}},{key:"isAnswered",value:function(){return this.answered}},{key:"hide",value:function(e){this.questionnaireElement.classList[e?"add":"remove"]("hide")}},{key:"setActivityStarted",value:function(){this.instance.setActivityStarted&&this.instance.setActivityStarted()}}])&&I(t.prototype,r),n&&I(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}();function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W.apply(this,arguments)}function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},z(e,t)}function V(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(o,H5P.EventDispatcher);var t,r,n,i=(r=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(r);if(n){var i=Y(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return V(this,e)});function o(e){var t,r=e.questionnaireElements,n=void 0===r?[]:r,s=e.successScreenOptions,a=void 0===s?{}:s,c=e.uiElements,l=void 0===c?{}:c,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,p=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Q(this,o),(t=i.call(this)).contentId=f,t.state={questionnaireElements:[],currentIndex:0},l=H5P.jQuery.extend(!0,{buttonLabels:{prevLabel:"Back",nextLabel:"Next",submitLabel:"Submit",continueLabel:"Continue"},accessibility:{requiredTextExitLabel:"Close error message",progressBarText:"Question %current of %max"},requiredMessage:"This question requires an answer",requiredText:"required",submitScreenTitle:"You successfully answered all of the questions",submitScreenSubtitle:"Click below to submit your answers"},l),t.createQuestionnaireBody=function(){var e=this,t=document.createElement("div");return t.className="h5p-questionnaire-content",n.forEach((function(r,n){var i=r.requiredField,o=r.library;if("object"===H(o)&&o.library){var s=e.createQuestionContent(i,o,n);t.appendChild(s.getElement()),e.state.questionnaireElements.push(s)}})),this.createSubmitScreen().attachTo(t),a.enableSuccessScreen&&this.createSuccessScreen().attachTo(t),t},t.createQuestionContent=function(e,t,r){var n=this,i=new F({progressBar:this.progressBar,params:t,contentId:this.contentId,requiredField:e,index:r,uiElements:l});return i.on("handledInteraction",(function(){n.trigger("resize"),n.requiredMessage.trigger("hideMessage"),n.triggerXAPI("interacted")})),i.on("allow-finish-changed",(function(){n.setForwardNavigationButton(n.state.currentIndex)})),i.on("changed",(function(){n.requiredMessage.trigger("hideMessage")})),i},t.createQuestionnaire=function(){var e=document.createElement("div");if(e.className="h5p-questionnaire",1===n.length&&!n[0].library)return e.classList.add("h5p-invalid-questionnaire"),e.textContent="Invalid content",e;this.createProgressBar(n).attachTo(e);var t=this.createQuestionnaireBody();return e.appendChild(t),this.requiredMessage=new E(l),this.requiredMessage.attachTo(e),this.createFooter().attachTo(e),this.state.questionnaireElements.length&&this.state.questionnaireElements[0].setActivityStarted(),this.state.finished?a.enableSuccessScreen?this.showSuccessScreen():this.showSubmitScreen():this.move(this.state.currentIndex,this.state.currentIndex>0),e},t.createSubmitScreen=function(){var e=this;return this.submitScreen=new m({title:l.submitScreenTitle,subtitle:l.submitScreenSubtitle,backLabel:l.buttonLabels.prevLabel,submitLabel:l.buttonLabels.submitLabel}),this.submitScreen.on("submit",this.handleSubmit.bind(this)),this.submitScreen.on("previous",(function(){e.submitScreen.hide(),e.hideQuestion(!1),e.trigger("resize")})),this.submitScreen},t.hideQuestion=function(e){this.state.questionnaireElements[this.state.questionnaireElements.length-1].hide(e),this.progressBar.hide(e),this.footer.hide(e)},t.createSuccessScreen=function(){var e=this;return this.successScreen=new u(a,this),this.successScreen.on("imageLoaded",(function(){e.trigger("resize")})),this.successScreen},t.createProgressBar=function(e){return this.progressBar=new k({currentIndex:this.state.currentIndex+1,maxIndex:e.length,uiElements:l}),this.progressBar},t.showSubmitScreen=function(){this.hideQuestion(!0),this.submitScreen.show(),this.trigger("resize")},t.showSuccessScreen=function(){this.hideQuestion(!0),this.submitScreen.hide(),this.successScreen.show(),this.trigger("resize")},t.handleSubmit=function(){a.enableSuccessScreen?this.showSuccessScreen():this.trigger("noSuccessScreen"),this.state.finished=!0,this.triggerXAPI("completed")},t.createFooter=function(){var e=this,t=new L(l.buttonLabels);return t.on("next",(function(){e.move(e.state.currentIndex+1)&&e.showSubmitScreen()})),t.on("previous",(function(){e.move(e.state.currentIndex-1)})),t.trigger("disable-previous"),this.footer=t,t},t.setForwardNavigationButton=function(e){if(!(e>this.state.questionnaireElements.length-1)){var t=this.state.questionnaireElements[e].allowFinish()===F.AllowFinish.ALLOW?"next":"continue";this.footer.setForwardNavigationButton(t)}},t.triggerRequiredQuestion=function(){this.requiredMessage.trigger("showMessage"),this.trigger("resize")},t.move=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.state,n=r.currentIndex,i=r.questionnaireElements,o=i[n];if(e<0)return!1;if(!t&&e>n){if(!this.isValidAnswer(o))return this.triggerRequiredQuestion(),!1;if(o.allowFinish()===F.AllowFinish.DENY&&!o.finish())return this.setForwardNavigationButton(n),this.trigger("resize"),!1}if(e>i.length-1)return!0;this.footer.trigger(0===e?"disable-previous":"enable-previous"),this.setForwardNavigationButton(e),this.requiredMessage.trigger("hideMessage"),i[n].hide(!0);var s=i[e];s.hide(!1);var a=s.getElement().querySelector(".h5p-subcontent-question");if(this.progressBar.attachNumberWidgetTo(a),this.trigger("resize"),this.state=W(this.state,{currentIndex:e}),this.progressBar.move(e+1),0!==e&&0!==n){var u=this.createXAPIEventTemplate("progressed");u.data.statement.object&&(u.data.statement.object.definition.extensions["http://id.tincanapi.com/extension/ending-point"]=e+1,this.trigger(u))}return i[e].setActivityStarted(),!1},t.isValidAnswer=function(e){return!e.isRequired()||e.isAnswered()},t.attach=function(e){e.get(0).classList.add("h5p-questionnaire-wrapper"),e.get(0).appendChild(d)},t.getCurrentState=function(){return{questions:this.state.questionnaireElements.map((function(e){return e.getCurrentState()})),progress:this.state.currentIndex,finished:this.state.finished,version:1}},t.setPreviousState=function(){var e=p.previousState;if(e&&e.questions){if(this.state.finished=e.finished,e.progress){this.state.currentIndex=e.progress;var t=this.state.currentIndex>=n.length;void 0===e.version&&t&&(this.state.currentIndex=n.length-1,this.state.finished=!0)}e.questions.forEach((function(e,t){n[t].library.userDatas=n[t].library.userDatas||{},n[t].library.userDatas.state=e}))}},t.setPreviousState();var d=t.createQuestionnaire();return t}return t=o,Object.defineProperty(t,"prototype",{writable:!1}),t}()}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),H5P.Questionnaire=r(857).Z})();