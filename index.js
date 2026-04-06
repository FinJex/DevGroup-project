import{r as e}from"./assets/rolldown-runtime-Cq0jCQ29.js";import{n as t,r as n,t as r}from"./assets/vendor-CCl_4X-O.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=`https://furniture-store-v2.b.goit.study/api`,a={CATEGORIES:`/categories`,PRODUCTS:`/furnitures`,ID:`/furnitures/{id}`,FEEDBACKS:`/feedbacks`},o=8;n.defaults.baseURL=i;async function s(){return(await n(`${a.CATEGORIES}`)).data}async function c(e){return(await n(`/furnitures?page=${e}&limit=${o}`)).data}async function l(e,t){return(await n(`/furnitures?page=${t}&limit=${o}&category=${e}`)).data}async function u(e){return(await n(`/furnitures/${e}`)).data}var d={categories:document.querySelector(`.categories-list`),furnitureList:document.querySelector(`.furniture-list`),loadMoreBtn:document.querySelector(`.load-more`),loader:document.querySelector(`.loader`),backdrop:document.querySelector(`.backdrop`),modalCloseBtn:document.querySelector(`.modal-close-btn`),orderBtn:document.querySelector(`.order-btn`),productModal:document.getElementById(`product-backdrop`),orderModal:document.getElementById(`order-backdrop`)};function f(e){let t=[`<li>
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
   `}).join(``);d.furnitureList.insertAdjacentHTML(`beforeend`,t)}var h=e(t(),1);function g(){d.loader.classList.remove(`hidden`)}function _(){d.loader.classList.add(`hidden`)}function v(){d.loadMoreBtn.classList.remove(`hidden`)}function y(){d.loadMoreBtn.classList.add(`hidden`)}function b(e,t=`success`){let n={message:e,position:`bottomRight`,timeout:5e3};switch(t){case`success`:h.default.success(n);break;case`error`:h.default.error(n);break;case`warning`:h.default.warning(n);break;case`info`:h.default.info(n);break;default:h.default.error({message:`Invalid type of toast: ${t}`,position:`topRight`,timeout:5e3});break}}var x,S=`all`,C;function w(){x>=C?(y(),b(`Вибачте, більше результатів немає`)):v()}async function T(){x=1;try{g(),f(await s());let{furnitures:e,totalItems:t}=await c(x);m(e),w()}catch{b(`Щось пішло не так. Спробуйте ще раз пізніше, будь ласка.`)}finally{_()}}async function E(e){let t=e.target.closest(`.category-btn`);if(t){x=1,S=t.dataset.id;try{document.querySelectorAll(`.category-btn`).forEach(e=>{e.classList.remove(`active`)}),t.classList.add(`active`),d.furnitureList.innerHTML=``;let e;g(),e=S===`all`?await c(x):await l(S,x);let{furnitures:n,totalItems:r}=e;C=Math.ceil(r/8),m(n),w()}catch{b(`Щось пішло не так. Спробуйте ще раз, будь ласка.`)}finally{_()}}}async function D(){x+=1;try{let e;g(),e=S===`all`?await c(x):await l(S,x);let{furnitures:t}=e;m(t),w()}catch{b(`Щось пішло не так. Спробуйте ще раз, будь ласка.`)}finally{_()}}async function O(e){let t=e.target.closest(`li`).dataset.id;try{g(),await u(t)}catch{b(`Щось пішло не так. Спробуйте ще раз, будь ласка.`)}finally{_()}}var k=e(r(),1);function A(){new k.default(`.accordion-container`,{duration:300,showMultiple:!1})}document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`year`);e&&(e.textContent=new Date().getFullYear())});function j(e){e.classList.remove(`is-open`),!productModal.classList.contains(`is-open`)&&!orderModal.classList.contains(`is-open`)&&(document.body.style.overflow=``)}document.addEventListener(`DOMContentLoaded`,()=>{T(),A()}),d.categories.addEventListener(`click`,E),d.loadMoreBtn.addEventListener(`click`,D),d.furnitureList.addEventListener(`click`,O),d.orderBtn?.addEventListener(`click`,()=>{let e=orderBtn.dataset.id;document.getElementById(`product-id`).value=e;let t=document.querySelector(`input[name="selected-color"]:checked`)?.value;document.getElementById(`product-color`).value=t,j(d.productModal),openOrderForm()}),d.modalCloseBtn?.addEventListener(`click`,e=>{j(d.productModal)}),d.backdrop.addEventListener(`click`,e=>{e.target===d.backdrop&&j(d.productModal)}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&j(d.productModal)});
//# sourceMappingURL=index.js.map