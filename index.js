import{a as l}from"./assets/vendor-B2N6ulqC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const b="https://furniture-store-v2.b.goit.study/api",L={CATEGORIES:"/categories",PRODUCTS:"/furnitures",ID:"/furnitures/{id}",FEEDBACKS:"/feedbacks"},g=8;l.defaults.baseURL=b;async function h(){return(await l(`${L.CATEGORIES}`)).data}async function d(e){return(await l(`/furnitures?page=${e}&limit=${g}`)).data}async function y(e,o){return(await l(`/furnitures?page=${o}&limit=${g}&category=${e}`)).data}const c={categories:document.querySelector(".categories-list"),furnitureList:document.querySelector(".furniture-list"),loadMoreBtn:document.querySelector(".load-more"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),loader:document.querySelector(".loader")};function $(e){const o=[`<li>
     <button class="category-btn active" data-id="all" data-category="all">
       Всі товари
     </button>
   </li>`,...e.map(t=>`
     <li>
       <button class="category-btn"
               data-id="${t._id}"
               data-category="${t.name}">
         ${t.name}
       </button>
     </li>
   `)].join("");c.categories.innerHTML=o}const E={Cірий:"#c7c3bb",Жовтий:"#c7aa80",Чорний:"#201a19"};function f(e){const o=e.map(t=>{var r;const s=(t.colors||t.color||[]).slice(0,3);return`
     <li class="furniture-card" data-id="${t._id}">
       <img src="${(r=t.images)==null?void 0:r[0]}" alt="${t.name}">
       <h3 class="furniture-name">${t.name}</h3>
       <div class="color-list">
         ${s.map(a=>`
           <span
             class="color-dot"
             style="background:${E[a]||a}"
             title="${a}"
           ></span>
         `).join("")}
       </div>
       <p class="furniture-price">${t.price} грн</p>
       <button class="details-btn">Детальніше</button>
     </li>
   `}).join("");c.furnitureList.insertAdjacentHTML("beforeend",o)}let n=1,i="all",m=1;async function S(){n=1;try{const e=await h();console.log(e);const o=["Всі товари",...e];$(e);const{furnitures:t,totalItems:s}=await d(n);console.log(t,s),f(t)}catch(e){console.log(e)}}async function M(e){const o=e.target.closest(".category-btn");if(o){n=1,i=o.dataset.id;try{document.querySelectorAll(".category-btn").forEach(a=>{a.classList.remove("active")}),o.classList.add("active"),c.furnitureList.innerHTML="";let t;i==="all"?t=await d(n):t=await y(i,n);const{furnitures:s,totalItems:r}=t;m=Math.ceil(r/8),f(s),p()}catch(t){console.log(t)}}}async function P(){n+=1;try{let e;i==="all"?e=await d(n):e=await y(i,n);const{furnitures:o}=e;f(o),p()}catch(e){console.log(e)}}function p(){n>=m?c.loadMoreBtn.classList.add("hidden"):c.loadMoreBtn.classList.remove("hidden")}document.addEventListener("DOMContentLoaded",S);c.categories.addEventListener("click",M);c.loadMoreBtn.addEventListener("click",P);
//# sourceMappingURL=index.js.map
