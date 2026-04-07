import{r as e}from"./assets/rolldown-runtime-Cq0jCQ29.js";import{n as t,r as n,t as r}from"./assets/vendor-DK-yxzEr.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=`https://furniture-store-v2.b.goit.study/api`,a={CATEGORIES:`/categories`,PRODUCTS:`/furnitures`,ID:`/furnitures/{id}`,FEEDBACKS:`/feedbacks`},o=8;n.defaults.baseURL=i;async function s(){return(await n(`${a.CATEGORIES}`)).data}async function c(e){return(await n(`/furnitures?page=${e}&limit=${o}`)).data}async function l(e,t){return(await n(`/furnitures?page=${t}&limit=${o}&category=${e}`)).data}async function u(e){return(await n(`${a.PRODUCTS}/${e}`)).data}var d={categories:document.querySelector(`.categories-list`),furnitureList:document.querySelector(`.furniture-list`),loadMoreBtn:document.querySelector(`.load-more`),loader:document.querySelector(`.loader`),backdrop:document.querySelector(`.backdrop`),modalCloseBtn:document.querySelector(`.modal-close-btn`),modalContainer:document.querySelector(`.product-modal`),orderBtn:document.querySelector(`.order-btn`),productModal:document.getElementById(`.product-backdrop`),orderModal:document.getElementById(`.order-backdrop`)};function f(e){let t=[`<li>
     <button class="category-btn active" data-id="all" data-category="all">
       Всі товари
     </button>
   </li>`,...e.map(e=>`
     <li>
       <button class="category-btn"
               data-id="${e._id}"
               data-category="${e.name}">
         ${e.name}
       </button>
     </li>
   `)].join(``);d.categories.innerHTML=t}var p={Cірий:`#c7c3bb`,Жовтий:`#c7aa80`,Чорний:`#201a19`};function m(e){let t=e.map(e=>{let t=(e.colors||e.color||[]).slice(0,3);return`
     <li class="furniture-card" data-id="${e._id}">
       <img src="${e.images?.[0]}" alt="${e.name}">
       <h3 class="furniture-name">${e.name}</h3>
       <div class="color-list">
         ${t.map(e=>`
           <span
             class="color-dot"
             style="background:${p[e]||e}"
             title="${e}"
           ></span>
         `).join(``)}
       </div>
       <p class="furniture-price">${e.price} грн</p>
       <button class="details-btn">Детальніше</button>
     </li>
   `}).join(``);d.furnitureList.insertAdjacentHTML(`beforeend`,t)}function h(e){let t=document.querySelector(`.rating`);if(!t)return;t.classList.remove(`value-1`,`value-2`,`value-3`,`value-4`,`value-5`,`half`);let n=Math.floor(e),r=e%1!=0;t.classList.add(`value-${n}`),r&&t.classList.add(`half`)}function g(){let e=document.querySelectorAll(`.color-checkbox-input`);e.length>0&&(e[0].checked=!0)}function _(e){let{id:t,images:n,name:r,category:{name:i},price:a,rate:o,color:s,description:c,sizes:l}=e,u=s.map((e,t)=>`
              <li class="color-checkbox-item">
                <label class="color-checkbox-label">
                  <input
                    type="radio"
                    name="color"
                    value="${e}"
                    class="color-checkbox-input"
                    {${t===0?`checked`:``}
                  />
                  <span class="color-checkbox-marker" style="background-color: ${e}"></span>
                </label>
              </li>`).join(``),f=[,,,,,].fill(``).map(()=>`<div class="star">
              <i class="star-empty"></i>
              <i class="star-half"></i>
              <i class="star-filled"></i>
            </div>`).join(``),p=`<div class="backdrop is-open">
  <div class="modal">
    <button type="button" class="modal-close-btn">
      <svg class="modal-close-btn-svg" width="32" height="32">
        <use href="../img/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="product-modal" data-id="${t}">
      <div class="product-gallery">
        <img src="${n[0]}" class="main-img" alt="Product image" />
        <div class="thumb-list">
          <img src="${n[1]}" class="thumb" alt="Preview image" />
          <img src="${n[2]}" class="thumb" alt="Preview image" />
        </div>
      </div>

      <div class="product-info">
        <h2 class="product-title">${r}</h2>
        <p class="category">${i}</p>
        <p class="price">${a} грн</p>
        <div class="rating large star-icon value-1 half color-default label-top">
        <div class="star-container">${f}</div>
        </div>
         <div class="product-colors">
            <p class="label">Колір</p>
            <ul class="color-checkbox-list">${u}</ul>
              </div>
              <div class="description">
            <p class="description-text">${c}</p>
            <p class="sizes">Розміри: ${l}</p>
          </div>
          <button class="order-btn" data-id="${t}">
            Перейти до замовлення
          </button>
          </div>
        </div>
      </div>`;d.modalContainer.dataset.id=t,d.modalContainer.innerHTML=p,h(e.rate)}function v(e){(e.target.classList.contains(`backdrop`)||e.target.classList.contains(`modal-close-btn-svg`)||e.target.classList.contains(`order-btn`))&&(x(),document.removeEventListener(`keydown`,y),d.modalContainer.innerHTML=``)}function y(e){e.key===`Escape`&&(x(),document.removeEventListener(`keydown`,y),d.modalContainer.innerHTML=``)}function b(){d.backdrop.classList.add(`is-open`)}function x(){d.backdrop.classList.remove(`is-open`)}var S=e(t(),1);function C(){d.loader.classList.remove(`hidden`)}function w(){d.loader.classList.add(`hidden`)}function T(){d.loadMoreBtn.classList.remove(`hidden`)}function E(){d.loadMoreBtn.classList.add(`hidden`)}function D(e,t=`success`){let n={message:e,position:`bottomRight`,timeout:5e3};switch(t){case`success`:S.default.success(n);break;case`error`:S.default.error(n);break;case`warning`:S.default.warning(n);break;case`info`:S.default.info(n);break;default:S.default.error({message:`Invalid type of toast: ${t}`,position:`topRight`,timeout:5e3});break}}var O,k=`all`,A;function j(){O>=A?(E(),D(`Вибачте, більше результатів немає`)):T()}async function M(){O=1;try{C(),f(await s());let{furnitures:e,totalItems:t}=await c(O);m(e),j()}catch{D(`Щось пішло не так. Спробуйте ще раз пізніше, будь ласка.`)}finally{w()}}async function N(e){let t=e.target.closest(`.category-btn`);if(t){O=1,k=t.dataset.id;try{document.querySelectorAll(`.category-btn`).forEach(e=>{e.classList.remove(`active`)}),t.classList.add(`active`),d.furnitureList.innerHTML=``;let e;C(),e=k===`all`?await c(O):await l(k,O);let{furnitures:n,totalItems:r}=e;A=Math.ceil(r/8),m(n),j()}catch{D(`Щось пішло не так. Спробуйте ще раз, будь ласка.`)}finally{w()}}}async function P(){O+=1;try{let e;C(),e=k===`all`?await c(O):await l(k,O);let{furnitures:t}=e;m(t),j()}catch{D(`Щось пішло не так. Спробуйте ще раз, будь ласка.`)}finally{w()}}async function F(e){let t=e.target.closest(`li`).dataset.id;try{C();let e=await u(t);b(),_(e),g(),document.addEventListener(`keydown`,y)}catch{D(`Щось пішло не так. Спробуйте ще раз, будь ласка.`)}finally{w()}}var I=e(r(),1);function L(){new I.default(`.accordion-container`,{duration:300,showMultiple:!1})}document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`year`);e&&(e.textContent=new Date().getFullYear())}),document.addEventListener(`DOMContentLoaded`,()=>{M(),L()}),d.categories.addEventListener(`click`,N),d.loadMoreBtn.addEventListener(`click`,P),d.furnitureList.addEventListener(`click`,F),d.orderBtn?.addEventListener(`click`,()=>{let e=orderBtn.dataset.id;document.getElementById(`product-id`).value=e;let t=document.querySelector(`input[name="selected-color"]:checked`)?.value;document.getElementById(`product-color`).value=t,v(),openOrderForm()}),d.backdrop.addEventListener(`click`,v);
//# sourceMappingURL=index.js.map