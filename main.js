(()=>{"use strict";var e=document.querySelector(".main__title_button"),t=document.querySelector(".popup__buttonClose"),o=document.querySelector(".popup"),n=document.querySelector(".popup__form"),r=document.querySelector(".popup__button"),s=Array.from(n.querySelectorAll(".test")),c=document.querySelector(".header__menu_phone"),u=document.querySelector(".popup__menu"),d=document.querySelector(".header__menu_phone-button"),i=document.querySelector(".header__menu_phone-buttonClose"),l=document.querySelectorAll(".header__menu_item"),a=document.querySelectorAll(".header__menu_down-indik"),_=Array.from(document.querySelectorAll(".header__menu_down")),p=document.querySelector(".bg-blur"),m=document.querySelectorAll(".popup__input"),y=document.querySelector(".popup__input_check");function h(){return!s.some((function(e){return!e.validity.valid}))}function v(e){c.style.background="",e.classList.remove("popup__open"),document.removeEventListener("keydown",(function(e){"Escape"==e.key&&v(o)})),window.innerWidth<=961&&c.classList.remove("header__menu_phone-white")}function L(e,t,o){e.addEventListener("mouseover",(function(){t.style.display="block",e.querySelector(".header__menu_item-text").style.color="pink";var n=e.getBoundingClientRect().left;o.style.left=n+70+"px",o.style.top="-11px"})),e.addEventListener("mouseleave",(function(){t.style.display="none",e.querySelector(".header__menu_item-text").style.color="black"}))}e.addEventListener("click",(function(){var e;e=o,c.style.background="white",window.innerWidth<=961&&c.classList.add("header__menu_phone-white"),e.classList.add("popup__open"),document.addEventListener("keydown",(function(e){"Escape"==e.key&&v(o)})),m.forEach((function(e){e.addEventListener("blur",(function(){var t=e.classList;h()?(console.log(r),r.classList.remove("popup__button_disablet"),r.removeAttribute("disabled")):(r.classList.add("popup__button_disablet"),r.setAttribute("disabled",!0)),function(e,t){if(document.querySelectorAll(".popup__error"),e.validity.valid){var o=document.querySelectorAll("#".concat(t,"-error")),n=document.querySelectorAll("#".concat(t,"-good"));n[0].classList.add("popup__error_open"),n[0].classList.remove("popup__error_hidden"),o.forEach((function(e){e.classList.remove("popup__error_open"),e.classList.add("popup__error_hidden")}))}else{var r=document.querySelectorAll("#".concat(t,"-error"));document.querySelectorAll("#".concat(t,"-good")),r.forEach((function(e){e.classList.add("popup__error_open"),e.classList.remove("popup__error_hidden")}))}}(e,t[0])}))})),y.addEventListener("blur",(function(){h()?(console.log(r),r.classList.remove("popup__button_disablet"),r.removeAttribute("disabled")):(r.classList.add("popup__button_disablet"),r.setAttribute("disabled",!0))}))})),t.addEventListener("click",(function(){v(o)})),o.addEventListener("click",(function(e){"popup"===e.target.classList[0]&&v(o)})),n.addEventListener("submit",(function(e){e.preventDefault(),v(o)})),window.addEventListener("scroll",(function(){p.style.opacity=pageYOffset/350,p.style.opacity>.99?(p.style.opacity=.999,c.classList.add("header__menu_phone-white")):c.classList.remove("header__menu_phone-white")}));for(var f=0;f<=2;f++)L(l[f],_[f],a[f]);d.addEventListener("click",(function(){u.classList.add("popup__open_phone"),c.style.background="white",i.classList.add("header__button_open"),d.classList.add("header__button_close")})),i.addEventListener("click",(function(){u.classList.remove("popup__open_phone"),c.style.background="",i.classList.remove("header__button_open"),d.classList.remove("header__button_close")}));var b=document.querySelectorAll(".header__icons_icon"),q=function(){var e=b[f],t=b[f+1],o=b[f-1];0===f||f%2==0?e.addEventListener("mouseover",(function(){e.classList.add("header__icons_hide"),t.classList.remove("header__icons_hide")})):e.addEventListener("mouseout",(function(){e.classList.add("header__icons_hide"),o.classList.remove("header__icons_hide")}))};for(f=0;f<=5;f++)q()})();