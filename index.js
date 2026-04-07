import{r as e}from"./assets/rolldown-runtime-Cq0jCQ29.js";import{a as t,i as n,n as r,r as i,t as a}from"./assets/vendor-DG1VNpx7.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var o=e(n(),1),s={categories:document.querySelector(`.categories-list`),furnitureList:document.querySelector(`.furniture-list`),loadMoreBtn:document.querySelector(`.load-more`),loader:document.querySelector(`.loader`),section:document.querySelector(`[data-feedback-section]`),loader:document.querySelector(`[data-feedback-loader]`),readyState:document.querySelector(`[data-feedback-ready]`),list:document.querySelector(`[data-feedback-list]`),prevBtn:document.querySelector(`[data-feedback-prev]`),nextBtn:document.querySelector(`[data-feedback-next]`),pagination:document.querySelector(`[data-feedback-pagination]`),backdrop:document.querySelector(`.backdrop`),modalCloseBtn:document.querySelector(`.modal-close-btn`),modalContainer:document.querySelector(`.product-modal`),orderBtn:document.querySelector(`.order-btn`),productModal:document.getElementById(`.product-backdrop`),orderModal:document.getElementById(`.order-backdrop`)},c=`https://furniture-store-v2.b.goit.study/api/feedbacks?page=1&limit=10`;async function l(){v();try{let e=await u();if(!e.length)throw Error(`No feedbacks available`);s.list.innerHTML=p(e),s.readyState.classList.remove(`hidden`),m(),d(e.length)}catch{b()}finally{y()}}async function u(){let{data:e}=await t.get(c);return(Array.isArray(e?.feedbacks)?e.feedbacks:Array.isArray(e)?e:[]).slice(0,10)}function d(e){new i(`[data-feedback-swiper]`,{slidesPerView:1,spaceBetween:24,speed:500,grabCursor:!0,allowTouchMove:e>1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{prevEl:s.prevBtn,nextEl:s.nextBtn,disabledClass:`is-disabled`},pagination:{el:s.pagination,clickable:!0,bulletElement:`button`,renderBullet(e,t){return`<button class="${t}" type="button" aria-label="Перейти до відгуку ${e+1}"></button>`}},on:{afterInit(e){f(e)},slideChange(e){f(e)},resize(e){f(e)}}})}function f(e){s.prevBtn.disabled=e.isBeginning,s.nextBtn.disabled=e.isEnd}function p(e){return e.map((e,t)=>{let n=e?.name??e?.author??`Anonymous`,r=e?.descr??e?.description??e?.review??`Клієнт поділився позитивним враженням про співпрацю з нами.`,i=h(Number(e?.rate??e?.rating??0));return`
        <li class="swiper-slide feedback__item">
          <article class="feedback__card">
            <div class="feedback__rating-row">
              <div
                class="feedback__stars"
                data-feedback-rating
                data-feedback-score="${i}"
                aria-label="Оцінка ${i} з 5"
              ></div>
              <span class="feedback__score">${g(i)}</span>
            </div>

            <p class="feedback__text">“${_(r)}”</p>

            <div class="feedback__author">
              <p class="feedback__author-name">${_(n)}</p>
            </div>
          </article>
        </li>
      `}).join(``)}function m(){document.querySelectorAll(`[data-feedback-rating]`).forEach(e=>{new r(e,{readOnly:!0,score:Number(e.dataset.feedbackScore),half:!0,halfShow:!0,starType:`i`,number:5,hints:[,,,,,].fill(``),space:!0}).init()})}function h(e){if(e>=3.3&&e<=3.7)return 3.5;if(e>=3.8&&e<=4.2)return 4;let t=Math.round(e*2)/2;return Math.max(0,Math.min(5,t))}function g(e){return Number.isInteger(e)?String(e):e.toFixed(1)}function _(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function v(){s.loader.classList.remove(`hidden`),s.readyState.classList.add(`hidden`)}function y(){s.loader.classList.add(`hidden`)}function b(){o.default.error({title:`Помилка`,message:`Не вдалося завантажити відгуки. Спробуйте ще раз трохи пізніше.`,position:`bottomRight`,timeout:5e3})}var x=document.querySelector(`.header-mobile-menu`),S=document.querySelector(`.burger-btn`),C=document.querySelector(`.close-btn`),w=document.querySelector(`.header-list-row`),T=document.querySelector(`.header-darkness`),E=async()=>{await new Promise(e=>requestAnimationFrame(e)),T.classList.toggle(`is-open`),x.classList.toggle(`is-open`),S.classList.toggle(`header-burger-hidann`),C.classList.toggle(`header-burger-hidann`)};S.addEventListener(`click`,E),C.addEventListener(`click`,E);for(let e of w.children){let t=e.querySelector(`a`);t&&t.addEventListener(`click`,E)}var D=`https://furniture-store-v2.b.goit.study/api`,O={CATEGORIES:`/categories`,PRODUCTS:`/furnitures`,ID:`/furnitures/{id}`,FEEDBACKS:`/feedbacks`},k=8;t.defaults.baseURL=D;async function A(){return(await t(`${O.CATEGORIES}`)).data}async function j(e){return(await t(`/furnitures?page=${e}&limit=${k}`)).data}async function M(e,n){return(await t(`/furnitures?page=${n}&limit=${k}&category=${e}`)).data}async function N(e){return(await t(`${O.PRODUCTS}/${e}`)).data}function P(e){let t=[`<li>
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
   `)].join(``);s.categories.innerHTML=t}var F={Cірий:`#c7c3bb`,Жовтий:`#c7aa80`,Чорний:`#201a19`};function I(e){let t=e.map(e=>{let t=(e.colors||e.color||[]).slice(0,3);return`
     <li class="furniture-card" data-id="${e._id}">
       <img src="${e.images?.[0]}" alt="${e.name}">
       <h3 class="furniture-name">${e.name}</h3>
       <div class="color-list">
         ${t.map(e=>`
           <span
             class="color-dot"
             style="background:${F[e]||e}"
             title="${e}"
           ></span>
         `).join(``)}
       </div>
       <p class="furniture-price">${e.price} грн</p>
       <button class="details-btn">Детальніше</button>
     </li>
   `}).join(``);s.furnitureList.insertAdjacentHTML(`beforeend`,t)}function L(e){let t=document.querySelector(`.rating`);if(!t)return;t.classList.remove(`value-1`,`value-2`,`value-3`,`value-4`,`value-5`,`half`);let n=Math.floor(e),r=e%1!=0;t.classList.add(`value-${n}`),r&&t.classList.add(`half`)}function R(){let e=document.querySelectorAll(`.color-checkbox-input`);e.length>0&&(e[0].checked=!0)}function z(e){let{id:t,images:n,name:r,category:{name:i},price:a,rate:o,color:c,description:l,sizes:u}=e,d=c.map((e,t)=>`
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
        <use href="/img/sprite.svg#icon-close"></use>
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
            <ul class="color-checkbox-list">${d}</ul>
              </div>
              <div class="description">
            <p class="description-text">${l}</p>
            <p class="sizes">Розміри: ${u}</p>
          </div>
          <button class="order-btn" data-id="${t}">
            Перейти до замовлення
          </button>
          </div>
        </div>
      </div>`;s.modalContainer.dataset.id=t,s.modalContainer.innerHTML=p,L(e.rate)}function B(e){(e.target.classList.contains(`backdrop`)||e.target.classList.contains(`modal-close-btn-svg`)||e.target.classList.contains(`order-btn`))&&(U(),document.removeEventListener(`keydown`,V),s.modalContainer.innerHTML=``)}function V(e){e.key===`Escape`&&(U(),document.removeEventListener(`keydown`,V),s.modalContainer.innerHTML=``)}function H(){s.backdrop.classList.add(`is-open`)}function U(){s.backdrop.classList.remove(`is-open`)}function W(){s.loader.classList.remove(`hidden`)}function G(){s.loader.classList.add(`hidden`)}function K(){s.loadMoreBtn.classList.remove(`hidden`)}function q(){s.loadMoreBtn.classList.add(`hidden`)}function J(e,t=`success`){let n={message:e,position:`bottomRight`,timeout:5e3};switch(t){case`success`:o.default.success(n);break;case`error`:o.default.error(n);break;case`warning`:o.default.warning(n);break;case`info`:o.default.info(n);break;default:o.default.error({message:`Invalid type of toast: ${t}`,position:`topRight`,timeout:5e3});break}}var Y,X=`all`,Z;function Q(){Y>=Z?(q(),J(`Вибачте, більше результатів немає`)):K()}async function $(){Y=1;try{W(),P(await A());let{furnitures:e,totalItems:t}=await j(Y);I(e),Q()}catch{J(`Щось пішло не так. Спробуйте ще раз пізніше, будь ласка.`)}finally{G()}}async function ee(e){let t=e.target.closest(`.category-btn`);if(t){Y=1,X=t.dataset.id;try{document.querySelectorAll(`.category-btn`).forEach(e=>{e.classList.remove(`active`)}),t.classList.add(`active`),s.furnitureList.innerHTML=``;let e;W(),e=X===`all`?await j(Y):await M(X,Y);let{furnitures:n,totalItems:r}=e;Z=Math.ceil(r/8),I(n),Q()}catch{J(`Щось пішло не так. Спробуйте ще раз, будь ласка.`)}finally{G()}}}async function te(){Y+=1;try{let e;W(),e=X===`all`?await j(Y):await M(X,Y);let{furnitures:t}=e;I(t),Q()}catch{J(`Щось пішло не так. Спробуйте ще раз, будь ласка.`)}finally{G()}}async function ne(e){let t=e.target.closest(`li`).dataset.id;try{W();let e=await N(t);H(),z(e),R(),document.addEventListener(`keydown`,V)}catch{J(`Щось пішло не так. Спробуйте ще раз, будь ласка.`)}finally{G()}}var re=e(a(),1);function ie(){new re.default(`.accordion-container`,{duration:300,showMultiple:!1})}document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`year`);e&&(e.textContent=new Date().getFullYear())}),document.addEventListener(`DOMContentLoaded`,()=>{$(),ie(),l()}),s.categories.addEventListener(`click`,ee),s.loadMoreBtn.addEventListener(`click`,te),s.furnitureList.addEventListener(`click`,ne),s.orderBtn?.addEventListener(`click`,()=>{let e=orderBtn.dataset.id;document.getElementById(`product-id`).value=e;let t=document.querySelector(`input[name="selected-color"]:checked`)?.value;document.getElementById(`product-color`).value=t,B(),openOrderForm()}),s.backdrop.addEventListener(`click`,B);
//# sourceMappingURL=index.js.map