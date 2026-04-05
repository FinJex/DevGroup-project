import{a as l}from"./assets/vendor-B2N6ulqC.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const h="https://furniture-store-v2.b.goit.study/api",L={CATEGORIES:"/categories",PRODUCTS:"/furnitures",ID:"/furnitures/{id}",FEEDBACKS:"/feedbacks"},p=8;l.defaults.baseURL=h;async function $(){return(await l(`${L.CATEGORIES}`)).data}async function d(e){return(await l(`/furnitures?page=${e}&limit=${p}`)).data}async function m(e,a){return(await l(`/furnitures?page=${a}&limit=${p}&category=${e}`)).data}const c={categories:document.querySelector(".categories-list"),furnitureList:document.querySelector(".furniture-list"),loadMoreBtn:document.querySelector(".load-more"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),loader:document.querySelector(".loader")},f={"М'які меблі":"sofa.jpg","Шафи та системи зберігання":"wardrobe.jpg","Ліжка та матраци":"bed.jpg",Столи:"table.jpg","Стільці та табурети":"chairs.jpg",Кухні:"kitchen.jpg","Меблі для дитячої":"childrens-room.jpg","Меблі для офісу":"home-office.jpg","Меблі для передпокою":"entryway.jpg","Меблі для ванної кімнати":"bathroom.jpg","Садові та вуличні меблі":"outdoor-patio.jpg","Декор та аксесуари":"home-decor.jpg",all:"showroom.jpg"};function j(e){const a=[`<li>
    <button class="category-btn active"
            data-id="all"
            data-bg="${f.all}">
      Всі товари
    </button>
  </li>`,...e.map(n=>`
      <li>
        <button class="category-btn"
                data-id="${n._id}"  
                data-bg="${f[n.name]}">
          ${n.name}
        </button>
      </li>
    `)].join("");c.categories.innerHTML=a,c.categories.querySelectorAll(".category-btn").forEach(n=>{const t=`img/furniture-list/${n.dataset.bg}`,o=t.replace(/\.jpg$/,"@2x.jpg");n.style.backgroundImage=`url(${t})`,window.devicePixelRatio>1&&(n.style.backgroundImage=`url(${o})`)})}const E={Cірий:"#c7c3bb",Жовтий:"#c7aa80",Чорний:"#201a19"};function g(e){const a=e.map(r=>{var t;const n=(r.colors||r.color||[]).slice(0,3);return console.log(r),`
     <li class="furniture-card" data-id="${r._id}">
       <img src="${(t=r.images)==null?void 0:t[0]}" alt="${r.name}">
       <h3 class="furniture-name">${r.name}</h3>
       <div class="color-list">
         ${n.map(o=>`
           <span
             class="color-dot"
             style="background:${E[o]||o}"
             title="${o}"
           ></span>
         `).join("")}
       </div>
       <p class="furniture-price">${r.price} грн</p>
       <button class="details-btn">Детальніше</button>
     </li>
   `}).join("");c.furnitureList.insertAdjacentHTML("beforeend",a)}let s=1,i="all",y=1;async function S(){s=1;try{const e=await $();console.log(e);const a=["Всі товари",...e];j(e);const{furnitures:r,totalItems:n}=await d(s);console.log(r,n),g(r)}catch(e){console.log(e)}}async function w(e){const a=e.target.closest(".category-btn");if(a){s=1,i=a.dataset.id;try{document.querySelectorAll(".category-btn").forEach(o=>{o.classList.remove("active")}),a.classList.add("active"),c.furnitureList.innerHTML="";let r;i==="all"?r=await d(s):r=await m(i,s);const{furnitures:n,totalItems:t}=r;y=Math.ceil(t/8),g(n),b()}catch(r){console.log(r)}}}async function P(){s+=1;try{let e;i==="all"?e=await d(s):e=await m(i,s);const{furnitures:a}=e;g(a),b()}catch(e){console.log(e)}}function b(){s>=y?c.loadMoreBtn.classList.add("hidden"):c.loadMoreBtn.classList.remove("hidden")}document.addEventListener("DOMContentLoaded",S);c.categories.addEventListener("click",w);c.loadMoreBtn.addEventListener("click",P);
//# sourceMappingURL=index.js.map
