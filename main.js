(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.items,o=e.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var n,r;return n=t,(r=[{key:"appendItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.data,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._cardClick=o,this._selector=n}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.cloneNode(!0)}},{key:"_fullSizeImage",value:function(){var e=this;this._image.addEventListener("click",(function(){e._cardClick(e._image)}))}},{key:"_likeCard",value:function(){var e=this._element.querySelector(".card__like");e.addEventListener("click",(function(){e.classList.toggle("card__like_fill")}))}},{key:"_delCard",value:function(){var e=this._element.querySelector(".card__del");e.addEventListener("click",(function(){e.closest(".card").remove()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".card__image"),this._image.src=this._link,this._image.alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this._fullSizeImage(),this._likeCard(),this._delCard(),this._element}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=t,this._element=document.querySelector(t),this._closeButton=this._element.querySelector(".edit-form__close-button"),this._handleEscClose=this._handleEscClose.bind(this),this._overlayClickClose=this._overlayClickClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add("edit-form_display-flex"),document.addEventListener("keydown",this._handleEscClose),this._element.addEventListener("mousedown",this._overlayClickClose)}},{key:"close",value:function(){this._element.classList.remove("edit-form_display-flex"),document.removeEventListener("keydown",this._handleEscClose),this._element.removeEventListener("mousedown",this._overlayClickClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_overlayClickClose",value:function(e){e.target.classList.contains(this._element.classList.item(0))&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()}))}}])&&o(t.prototype,n),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=document.querySelector(".edit-form__image"),t._popupCaption=document.querySelector(".edit-form__caption"),t}return t=a,(n=[{key:"open",value:function(e){s(f(a.prototype),"open",this).call(this),this._popupImage.src=e.src,this._popupCaption.textContent=e.alt}}])&&c(t.prototype,n),a}(i);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formSumbit=t,n._element=document.querySelector(e),n._handleSumbitForm=n._handleSumbitForm.bind(v(n)),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._element.querySelectorAll(".edit-form__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"_handleSumbitForm",value:function(e){e.preventDefault(),this._formSumbit(this._getInputValues())}},{key:"setEventListeners",value:function(){m(b(a.prototype),"setEventListeners",this).call(this),this._element.querySelector(".edit-form__form").addEventListener("submit",this._handleSumbitForm)}}])&&_(t.prototype,n),a}(i);function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){var n=t.selectorUserName,r=t.selectorUserJob;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileUserName=document.querySelector(n),this._profileUserJob=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileUserName.textContent,job:this._profileUserJob.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job;this._profileUserName.textContent=t,this._profileUserJob.textContent=n}}])&&k(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n}var t,n;return t=e,(n=[{key:"_showError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._config.inputErrorClass)}},{key:"_hideError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(this._config.inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_setButtonState",value:function(e){e?(this._submitButton.classList.remove(this._config.inactiveButtonClass),this._submitButton.disabled=!1):(this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this;this._inputsList=this._form.querySelectorAll(".".concat(this._config.inputSelector)),this._submitButton=this._form.querySelector(".".concat(this._config.submitButtonSelector)),this._inputsList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._setButtonState(e._form.checkValidity())}))}))}},{key:"resetValidationState",value:function(){var e=this;this._inputsList.forEach((function(t){""===t.value?(e._hideError(t),e._setButtonState(e._form.checkValidity())):(e._checkInputValidity(t),e._setButtonState(e._form.checkValidity()))}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setButtonState(this._form.checkValidity())}}])&&C(t.prototype,n),e}(),w={formSelector:"edit-form__form",inputSelector:"edit-form__input",submitButtonSelector:"edit-form__button",inactiveButtonClass:"edit-form__button_disabled",inputErrorClass:"edit-form__input_type_error"},L=document.querySelector(".profile__edit-button"),j=document.querySelector(".profile__add-button"),O=document.querySelector(".edit-form__input_content_name"),q=document.querySelector(".edit-form__input_content_job"),P=document.forms.form1,x=document.forms.form2,I=new t({items:[{name:"Армавир",link:"https://sun9-48.userapi.com/impg/bdrFY0uEccsYnlpJyNcvPsfkZ_cgolO4BbWrgg/nS6r86TRyaY.jpg?size=1800x1200&quality=96&proxy=1&sign=1a4a828215ea0eb62aa46e9e57b8f9dc&type=album"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=new r({data:e,handleCardClick:function(){var e=new p(".edit-form_button_img");e.open(t._image),e.setEventListeners()}},".template-cards");I.appendItem(t.generateCard())}},".grid-cards");I.renderItems();var R=new E(w,P);R.enableValidation();var B=new E(w,x);B.enableValidation();var V=new S({selectorUserName:".profile__title",selectorUserJob:".profile__subtitle"}),U=new g(".edit-form_button_redact",(function(e){V.setUserInfo({name:e.name,job:e.job}),U.close()}));U.setEventListeners(),L.addEventListener("click",(function(){var e=V.getUserInfo();O.value=e.name,q.value=e.job,R.resetValidationState(),U.open()}));var T=new g(".edit-form_button_add",(function(e){var t=new r({data:e,handleCardClick:function(){var e=new p(".edit-form_button_img");e.open(t._image),e.setEventListeners()}},".template-cards");I.prependItem(t.generateCard()),T.close()}));T.setEventListeners(),j.addEventListener("click",(function(){T.open(),x.reset(),B.resetValidationState()}))})();
//# sourceMappingURL=main.js.map