(()=>{"use strict";var e=document.querySelector(".left"),t=document.querySelector(".center"),o=document.querySelector(".right"),u=document.querySelector(".main__button"),c=document.querySelector(".popup__buttonClose"),n=document.querySelector(".popup"),r=document.querySelector(".popup__button"),l=document.querySelector(".tasksName"),a=document.querySelector(".text"),d=document.querySelector(".name"),s=document.querySelector(".time"),m=document.querySelector(".color"),i=document.querySelectorAll(".popup__radio");function _(e,t,o,u,c,n){var r=document.getElementById("card").content.cloneNode(!0);r.querySelector(".tasks__title").textContent=t,r.querySelector(".tasks__text").textContent=o,r.querySelector(".tasks__people").textContent=u,r.querySelector(".tasks__time").textContent=c,r.querySelector(".tasks").style.background=n,r.querySelector(".tasks__delete").addEventListener("click",(function(e){e.target.parentNode.parentNode.remove()})),new Draggabilly(r.querySelector(".tasks"),{containment:".main__board_column"}),e.append(r)}function p(e){e.classList.remove("popup__open")}Array.from(document.querySelectorAll(".main__board_column-tasks")),r.addEventListener("click",(function(){i[0].checked?_(e,l.value,a.value,d.value,s.value,m.value):i[1].checked?_(t,l.value,a.value,d.value,s.value,m.value):i[2].checked&&_(o,l.value,a.value,d.value,s.value,m.value),console.log(m.value),p(n)})),u.addEventListener("click",(function(){n.classList.add("popup__open")})),c.addEventListener("click",(function(){p(n)})),_(e,"Задание 1","Надо выполнить задание 1","Выполнит: Морозов Артем Алексеевич","с 21.02.13 по 22.03.14","white")})();