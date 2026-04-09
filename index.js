import{r as e}from"./assets/rolldown-runtime-Cq0jCQ29.js";import{a as t,i as n,n as r,r as i,t as a}from"./assets/vendor-CLbvvtMQ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var o=e(n(),1),s={categories:document.querySelector(`.categories-list`),furnitureList:document.querySelector(`.furniture-list`),loadMoreBtn:document.querySelector(`.load-more`),loader:document.querySelector(`.loader`),section:document.querySelector(`[data-feedback-section]`),loaderFeedback:document.querySelector(`[data-feedback-loader]`),readyState:document.querySelector(`[data-feedback-ready]`),list:document.querySelector(`[data-feedback-list]`),prevBtn:document.querySelector(`[data-feedback-prev]`),nextBtn:document.querySelector(`[data-feedback-next]`),pagination:document.querySelector(`[data-feedback-pagination]`),backdrop:document.querySelector(`.backdrop`),modalCloseBtn:document.querySelector(`.product-close-btn`),modalContainer:document.querySelector(`.product-modal`),orderBtn:document.querySelector(`.order-btn`),productModal:document.querySelector(`#product-backdrop`),orderModal:document.querySelector(`#order-backdrop`),orderForm:document.querySelector(`#order-form-id`),orderCloseBtn:document.querySelector(`.order-close-btn`),submitBtn:document.querySelector(`.submit-btn`)},c=`https://furniture-store-v2.b.goit.study/api/feedbacks?page=1&limit=10`;async function l(){ee();try{let e=await u();if(!e.length)throw Error(`No feedbacks available`);s.list.innerHTML=p(e),s.readyState.classList.remove(`hidden`),m(),d(e.length)}catch{y()}finally{v()}}async function u(){let{data:e}=await t.get(c);return(Array.isArray(e?.feedbacks)?e.feedbacks:Array.isArray(e)?e:[]).slice(0,10)}function d(e){new i(`[data-feedback-swiper]`,{slidesPerView:1,spaceBetween:24,speed:500,grabCursor:!0,allowTouchMove:e>1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{prevEl:s.prevBtn,nextEl:s.nextBtn,disabledClass:`is-disabled`},pagination:{el:s.pagination,clickable:!0,bulletElement:`button`,renderBullet(e,t){return`<button class="${t}" type="button" aria-label="Перейти до відгуку ${e+1}"></button>`}},on:{afterInit(e){f(e)},slideChange(e){f(e)},resize(e){f(e)}}})}function f(e){s.prevBtn.disabled=e.isBeginning,s.nextBtn.disabled=e.isEnd}function p(e){return e.map((e,t)=>{let n=e?.name??e?.author??`Anonymous`,r=e?.descr??e?.description??e?.review??`Клієнт поділився позитивним враженням про співпрацю з нами.`,i=h(Number(e?.rate??e?.rating??0));return`
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
      `}).join(``)}function m(){document.querySelectorAll(`[data-feedback-rating]`).forEach(e=>{new r(e,{readOnly:!0,score:Number(e.dataset.feedbackScore),half:!0,halfShow:!0,starType:`i`,number:5,hints:[,,,,,].fill(``),space:!0}).init()})}function h(e){if(e>=3.3&&e<=3.7)return 3.5;if(e>=3.8&&e<=4.2)return 4;let t=Math.round(e*2)/2;return Math.max(0,Math.min(5,t))}function g(e){return Number.isInteger(e)?String(e):e.toFixed(1)}function _(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function ee(){s.loaderFeedback.classList.remove(`hidden`),s.readyState.classList.add(`hidden`)}function v(){s.loaderFeedback.classList.add(`hidden`)}function y(){o.default.error({title:`Помилка`,message:`Не вдалося завантажити відгуки. Спробуйте ще раз трохи пізніше.`,position:`bottomRight`,timeout:5e3})}var b=document.querySelector(`.header-mobile-menu`),x=document.querySelector(`.burger-btn`),S=document.querySelector(`.close-btn`),C=document.querySelector(`.header-list-row`),w=document.querySelector(`.header-darkness`),T=async()=>{await new Promise(e=>requestAnimationFrame(e)),w.classList.toggle(`is-open`),b.classList.toggle(`is-open`),x.classList.toggle(`header-burger-hidann`),S.classList.toggle(`header-burger-hidann`)};x.addEventListener(`click`,T),S.addEventListener(`click`,T);for(let e of C.children){let t=e.querySelector(`a`);t&&t.addEventListener(`click`,T)}var E=`https://furniture-store-v2.b.goit.study/api`,D={CATEGORIES:`/categories`,PRODUCTS:`/furnitures`},O=8;t.defaults.baseURL=E;async function k(){return(await t(`${D.CATEGORIES}`)).data}async function A(e){return(await t(`${D.PRODUCTS}?page=${e}&limit=${O}`)).data}async function j(e,n){return(await t(`${D.PRODUCTS}?page=${n}&limit=${O}&category=${e}`)).data}async function te(e){return(await t(`${D.PRODUCTS}/${e}`)).data}function M(e){let t=[`<li>
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
   `)].join(``);s.categories.innerHTML=t}var N={Cірий:`#c7c3bb`,Жовтий:`#c7aa80`,Чорний:`#201a19`};function P(e){let t=e.map(e=>{let t=(e.colors||e.color||[]).slice(0,3);return`
     <li class="furniture-card" data-id="${e._id}">
       <img src="${e.images?.[0]}" alt="${e.name}">
       <h3 class="furniture-name">${e.name}</h3>
       <div class="color-list">
         ${t.map(e=>`
           <span
             class="color-dot"
             style="background:${N[e]||e}"
             title="${e}"
           ></span>
         `).join(``)}
       </div>
       <p class="furniture-price">${e.price} грн</p>
       <button class="details-btn">Детальніше</button>
     </li>
   `}).join(``);s.furnitureList.insertAdjacentHTML(`beforeend`,t)}function F(){let e=document.querySelectorAll(`.color-checkbox-input`);e.length>0&&(e[0].checked=!0)}function I(e){let{_id:t,images:n,name:r,category:{name:i},price:a,rate:o,color:c,description:l,sizes:u}=e,d=c.map((e,t)=>`
              <li class="color-checkbox-item">
                <label class="color-checkbox-label">
                  <input
                    type="radio"
                    name="color"
                    value="${e}"
                    class="color-checkbox-input"
                    ${t===0?`checked`:``}
                  />
        <span class="color-checkbox-marker" style="background-color: ${e};
border: ${e.toLowerCase()===`#ffffff`?`1px solid #e1e1e1`:`none`};"></span>
                </label>
              </li>`).join(``),f=`
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
        <div class="rating-wrapper">
          <div class="stars-container" data-raty data-score="${o}">
            </div>
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
      </div>`;s.modalContainer.innerHTML=f,L()}function L(){document.querySelectorAll(`[data-raty]`).forEach(e=>{e.children.length>0||new r(e,{score:e.dataset.score||0,readOnly:!0,half:!0,starType:`i`}).init()})}function R(e){e.target.classList.contains(`backdrop`)&&(H(),document.removeEventListener(`keydown`,B),s.modalContainer.innerHTML=``)}function z(){H(),document.removeEventListener(`keydown`,B),s.modalContainer.innerHTML=``}function B(e){e.key===`Escape`&&(H(),document.removeEventListener(`keydown`,B),s.modalContainer.innerHTML=``)}function V(){s.backdrop.classList.add(`is-open`),document.body.style.overflow=`hidden`}function H(){s.backdrop.classList.remove(`is-open`),document.body.style.overflow=``}function U(){s.loader.classList.remove(`hidden`),s.submitBtn.disabled=!0,s.submitBtn.querySelector(`.btn-text`).textContent=`Відправка...`}function W(){s.loader.classList.add(`hidden`),s.submitBtn.disabled=!1}function G(){s.loadMoreBtn.classList.remove(`hidden`)}function K(){s.loadMoreBtn.classList.add(`hidden`)}function q(e,t=`success`){let n={message:e,position:`bottomRight`,timeout:5e3};switch(t){case`success`:o.default.success(n);break;case`error`:o.default.error(n);break;case`warning`:o.default.warning(n);break;case`info`:o.default.info(n);break;default:o.default.error({message:`Invalid type of toast: ${t}`,position:`topRight`,timeout:5e3});break}}var J,Y=`all`,X;function Z(){J>=X?(K(),q(`Вибачте, більше результатів немає`,`warning`)):G()}async function Q(){J=1;try{U(),M(await k());let{furnitures:e,totalItems:t}=await A(J);X=Math.ceil(t/8),P(e),Z(),q(`Меблі успішно завантажено!`)}catch{q(`Щось пішло не так. Спробуйте ще раз пізніше, будь ласка.`,`error`)}finally{W()}}async function ne(e){let t=e.target.closest(`.category-btn`);if(t){J=1,Y=t.dataset.id;try{document.querySelectorAll(`.category-btn`).forEach(e=>{e.classList.remove(`active`)}),t.classList.add(`active`),s.furnitureList.innerHTML=``;let e;U(),e=Y===`all`?await A(J):await j(Y,J);let{furnitures:n,totalItems:r}=e;X=Math.ceil(r/8),P(n),Z(),q(`Меблі успішно завантажено!`)}catch{q(`Щось пішло не так. Спробуйте ще раз, будь ласка.`,`error`)}finally{W()}}}async function re(){J+=1;try{let e;U(),e=Y===`all`?await A(J):await j(Y,J);let{furnitures:t}=e;P(t),Z(),q(`Меблі успішно завантажено!`)}catch{q(`Щось пішло не так. Спробуйте ще раз, будь ласка.`,`error`)}finally{W()}}async function ie(e){let t=e.target.closest(`li`).dataset.id;try{U();let e=await te(t);V(),I(e),F(),document.addEventListener(`keydown`,B)}catch{q(`Щось пішло не так. Спробуйте ще раз, будь ласка.`,`error`)}finally{W()}}var ae=e(a(),1);function oe(){new ae.default(`.accordion-container`,{duration:300,showMultiple:!1})}document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`year`);e&&(e.textContent=new Date().getFullYear())});function se(e){let t=e.target.closest(`.order-btn`);if(!t)return;let n=t.getAttribute(`data-id`);document.querySelector(`#product-id`).value=n;let r=document.querySelector(`input[name="color"]:checked`)?.value;document.querySelector(`#product-color`).value=r,H(),ce(),document.addEventListener(`keydown`,$)}function ce(){s.orderModal.classList.add(`is-open`),document.body.style.overflow=`hidden`}function le(e){e.target.classList.contains(`backdrop`)&&(s.orderModal.classList.remove(`is-open`),document.body.style.overflow=``,document.removeEventListener(`keydown`,$))}function ue(){s.orderModal.classList.remove(`is-open`),document.body.style.overflow=``,document.removeEventListener(`keydown`,$)}function $(e){e.key===`Escape`&&(s.orderModal.classList.remove(`is-open`),document.body.style.overflow=``,document.removeEventListener(`keydown`,$))}async function de(e){e.preventDefault();let{name:n,phone:r,productId:i,color:a}=e.target.elements,o={name:n.value,phone:r.value,modelId:i.value,color:a.value};U();try{let e=(await t.post(`/orders`,o)).data;q(`Ваші дані успішно відправлені. Номер замовлення ${e.orderNum}`)}catch{q(`Щось пішло не так. Спробуйте ще раз пізніше, будь ласка.`,`error`)}finally{s.orderModal.classList.remove(`is-open`),document.body.style.overflow=``,e.target.reset(),W()}}document.addEventListener(`DOMContentLoaded`,()=>{Q(),oe(),l()}),s.categories.addEventListener(`click`,ne),s.loadMoreBtn.addEventListener(`click`,re),s.furnitureList.addEventListener(`click`,ie),s.modalContainer.addEventListener(`click`,se),s.productModal.addEventListener(`click`,R),s.modalCloseBtn.addEventListener(`click`,z),s.orderCloseBtn.addEventListener(`click`,ue),s.orderModal.addEventListener(`click`,le),s.orderForm.addEventListener(`submit`,de);
//# sourceMappingURL=index.js.map