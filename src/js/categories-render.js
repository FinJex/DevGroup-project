import { refs } from "./refs";

const categoryImages = {
"М'які меблі": "sofa.jpg",
"Шафи та системи зберігання": "wardrobe.jpg",
"Ліжка та матраци": "bed.jpg",
"Столи": "table.jpg",
"Стільці та табурети": "chairs.jpg",
"Кухні": "kitchen.jpg",
"Меблі для дитячої": "childrens-room.jpg",
"Меблі для офісу": "home-office.jpg",
"Меблі для передпокою": "entryway.jpg",
"Меблі для ванної кімнати": "bathroom.jpg",
"Садові та вуличні меблі": "outdoor-patio.jpg",
"Декор та аксесуари": "home-decor.jpg",
"all": "showroom.jpg"
};

export function renderCategories(categories) {
const markup = [
  `<li>
    <button class="category-btn active"
            data-category="all"
            data-bg="${categoryImages['all']}">
      Всі товари
    </button>
  </li>`,
  ...categories.map(cat => {
    return `
      <li>
        <button class="category-btn"
                data-category="${cat.name}"
                data-bg="${categoryImages[cat.name]}">
          ${cat.name}
        </button>
      </li>
    `;
  })
].join('');
refs.categories.innerHTML = markup;

const buttons = refs.categories.querySelectorAll('.category-btn');
buttons.forEach(btn => {
  const img1x = `img/furniture-list/${btn.dataset.bg}`;
  const img2x = img1x.replace(/\.jpg$/, '@2x.jpg');
  btn.style.backgroundImage = `url(${img1x})`;
  if (window.devicePixelRatio > 1) {
    btn.style.backgroundImage = `url(${img2x})`;
  }
});
}

const colorMap = {
 "Cірий": "#c7c3bb",
 "Жовтий": "#c7aa80",
 "Чорний": "#201a19",
};

export function renderFurniture(list) {
 const markup = list.map(item => {
   const colors = (item.colors || item.color ||[]).slice(0, 3);
   console.log(item);
   return `
     <li class="furniture-card" data-id="${item._id}">
       <img src="${item.images?.[0]}" alt="${item.name}">
       <h3 class="furniture-name">${item.name}</h3>
       <div class="color-list">
         ${colors.map(color => `
           <span
             class="color-dot"
             style="background:${colorMap[color] || color}"
             title="${color}"
           ></span>
         `).join('')}
       </div>
       <p class="furniture-price">${item.price} грн</p>
       <button class="details-btn">Детальніше</button>
     </li>
   `;
 }).join('');

 refs.furnitureList.insertAdjacentHTML('beforeend', markup);
}
