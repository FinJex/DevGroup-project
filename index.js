import{a as d,i as c,A as M}from"./assets/vendor-CqFioJNj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const $="https://furniture-store-v2.b.goit.study/api",E={CATEGORIES:"/categories"},h=8;d.defaults.baseURL=$;async function v(){return(await d(`${E.CATEGORIES}`)).data}async function g(t){return(await d(`/furnitures?page=${t}&limit=${h}`)).data}async function b(t,r){return(await d(`/furnitures?page=${r}&limit=${h}&category=${t}`)).data}const s={categories:document.querySelector(".categories-list"),furnitureList:document.querySelector(".furniture-list"),loadMoreBtn:document.querySelector(".load-more"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),loader:document.querySelector(".loader")};function P(t){const r=[`<li>
     <button class="category-btn active" data-id="all" data-category="all">
       Всі товари
     </button>
   </li>`,...t.map(e=>`
     <li>
       <button class="category-btn"
               data-id="${e._id}"
               data-category="${e.name}">
         ${e.name}
       </button>
     </li>
   `)].join("");s.categories.innerHTML=r}const S={Cірий:"#c7c3bb",Жовтий:"#c7aa80",Чорний:"#201a19"};function m(t){const r=t.map(e=>{var o;const i=(e.colors||e.color||[]).slice(0,3);return`
     <li class="furniture-card" data-id="${e._id}">
       <img src="${(o=e.images)==null?void 0:o[0]}" alt="${e.name}">
       <h3 class="furniture-name">${e.name}</h3>
       <div class="color-list">
         ${i.map(a=>`
           <span
             class="color-dot"
             style="background:${S[a]||a}"
             title="${a}"
           ></span>
         `).join("")}
       </div>
       <p class="furniture-price">${e.price} грн</p>
       <button class="details-btn">Детальніше</button>
     </li>
   `}).join("");s.furnitureList.insertAdjacentHTML("beforeend",r)}function y(){s.loader.classList.remove("hidden")}function p(){s.loader.classList.add("hidden")}function A(){s.loadMoreBtn.classList.remove("hidden")}function B(){s.loadMoreBtn.classList.add("hidden")}function u(t,r="success"){const e={message:t,position:"bottomRight",timeout:5e3};switch(r){case"success":c.success(e);break;case"error":c.error(e);break;case"warning":c.warning(e);break;case"info":c.info(e);break;default:c.error({message:`Invalid type of toast: ${r}`,position:"topRight",timeout:5e3});break}}let n,l="all",w;function L(){n>=w?(B(),u("Вибачте, більше результатів немає")):A()}async function C(){n=1;try{y();const t=await v();P(t);const{furnitures:r,totalItems:e}=await g(n);m(r),L()}catch{u("Щось пішло не так. Спробуйте ще раз, будь ласка.")}finally{p()}}async function I(t){const r=t.target.closest(".category-btn");if(r){n=1,l=r.dataset.id;try{document.querySelectorAll(".category-btn").forEach(a=>{a.classList.remove("active")}),r.classList.add("active"),s.furnitureList.innerHTML="";let e;y(),l==="all"?e=await g(n):e=await b(l,n);const{furnitures:i,totalItems:o}=e;w=Math.ceil(o/8),m(i),L()}catch{u("Щось пішло не так. Спробуйте ще раз, будь ласка.")}finally{p()}}}async function O(){n+=1;try{let t;y(),l==="all"?t=await g(n):t=await b(l,n);const{furnitures:r}=t;m(r),L()}catch{u("Щось пішло не так. Спробуйте ще раз, будь ласка.")}finally{p()}}function q(){new M(".accordion-container",{duration:300,showMultiple:!1})}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("year");t&&(t.textContent=new Date().getFullYear())});document.addEventListener("DOMContentLoaded",()=>{C(),q()});s.categories.addEventListener("click",I);s.loadMoreBtn.addEventListener("click",O);
//# sourceMappingURL=index.js.map
