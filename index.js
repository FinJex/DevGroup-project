import{a as u}from"./assets/vendor-B2N6ulqC.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const h="https://furniture-store-v2.b.goit.study/api",L={CATEGORIES:"/categories",PRODUCTS:"/furnitures",ID:"/furnitures/{id}",FEEDBACKS:"/feedbacks"},p=8;u.defaults.baseURL=h;async function $(){return(await u(`${L.CATEGORIES}`)).data}async function d(e){return(await u(`/furnitures?page=${e}&limit=${p}`)).data}async function m(e,a){return(await u(`/furnitures?page=${a}&limit=${p}&category=${e}`)).data}const c={categories:document.querySelector(".categories-list"),furnitureList:document.querySelector(".furniture-list"),loadMoreBtn:document.querySelector(".load-more"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),loader:document.querySelector(".loader")},f={"М'які меблі":"sofa.jpg","Шафи та системи зберігання":"wardrobe.jpg","Ліжка та матраци":"bed.jpg",Столи:"table.jpg","Стільці та табурети":"chairs.jpg",Кухні:"kitchen.jpg","Меблі для дитячої":"childrens-room.jpg","Меблі для офісу":"home-office.jpg","Меблі для передпокою":"entryway.jpg","Меблі для ванної кімнати":"bathroom.jpg","Садові та вуличні меблі":"outdoor-patio.jpg","Декор та аксесуари":"home-decor.jpg",all:"showroom.jpg"};function j(e){const a=[`<li>
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
    `)].join("");c.categories.innerHTML=a,c.categories.querySelectorAll(".category-btn").forEach(n=>{const o=`/DevGroup-project/img/furniture-list/${n.dataset.bg}`,i=o.replace(/\.jpg$/,"@2x.jpg");n.style.backgroundImage=`url(${o})`,window.devicePixelRatio>1&&(n.style.backgroundImage=`url(${i})`)})}const E={Cірий:"#c7c3bb",Жовтий:"#c7aa80",Чорний:"#201a19"};function g(e){const a=e.map(t=>{var r;const n=(t.colors||t.color||[]).slice(0,3);return console.log(t),`
     <li class="furniture-card" data-id="${t._id}">
       <img src="${(r=t.images)==null?void 0:r[0]}" alt="${t.name}">
       <h3 class="furniture-name">${t.name}</h3>
       <div class="color-list">
         ${n.map(o=>`
           <span
             class="color-dot"
             style="background:${E[o]||o}"
             title="${o}"
           ></span>
         `).join("")}
       </div>
       <p class="furniture-price">${t.price} грн</p>
       <button class="details-btn">Детальніше</button>
     </li>
   `}).join("");c.furnitureList.insertAdjacentHTML("beforeend",a)}let s=1,l="all",y=1;async function S(){s=1;try{const e=await $();console.log(e);const a=["Всі товари",...e];j(e);const{furnitures:t,totalItems:n}=await d(s);console.log(t,n),g(t)}catch(e){console.log(e)}}async function v(e){const a=e.target.closest(".category-btn");if(a){s=1,l=a.dataset.id;try{document.querySelectorAll(".category-btn").forEach(o=>{o.classList.remove("active")}),a.classList.add("active"),c.furnitureList.innerHTML="";let t;l==="all"?t=await d(s):t=await m(l,s);const{furnitures:n,totalItems:r}=t;y=Math.ceil(r/8),g(n),b()}catch(t){console.log(t)}}}async function w(){s+=1;try{let e;l==="all"?e=await d(s):e=await m(l,s);const{furnitures:a}=e;g(a),b()}catch(e){console.log(e)}}function b(){s>=y?c.loadMoreBtn.classList.add("hidden"):c.loadMoreBtn.classList.remove("hidden")}document.addEventListener("DOMContentLoaded",S);c.categories.addEventListener("click",v);c.loadMoreBtn.addEventListener("click",w);
//# sourceMappingURL=index.js.map
