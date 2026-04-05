import 'css-star-rating/css/star-rating.css';

import { getProductInModal } from './categories-api';

function updateRating(value) {
  const ratingEl = document.querySelector('.rating');
  if (!ratingEl) return;

  ratingEl.classList.remove(
    'value-1',
    'value-2',
    'value-3',
    'value-4',
    'value-5',
    'half'
  );

  const integerPart = Math.floor(value);
  const hasHalf = value % 1 !== 0;

  ratingEl.classList.add(`value-${integerPart}`);
  if (hasHalf) {
    ratingEl.classList.add('half');
  }
}

const backdrop = document.querySelector('.backdrop');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const orderBtn = document.querySelector('.order-btn');

export function initColorMarkers() {
  const colorInputs = document.querySelectorAll('.color-checkbox-input');
  if (colorInputs.length > 0) {
    colorInputs[0].checked = true;
  }
}

export async function openModal(id) {
  try {
    const modal = await getProductInModal(id);

    renderModalContent(modal);

    initColorMarkers();

    console.log('close btn', modalCloseBtn);

    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  } catch (error) {
    console.error('Помилка при завантаженні даних товару', error);
  }
}

export function closeModal() {
  backdrop.classList.remove('is-open');
  document.body.style.overflow = '';
}

modalCloseBtn?.addEventListener('click', closeModal);

orderBtn?.addEventListener('click', () => {
  closeModal();
  openOrderForm(); // ф-я відкриття другої модалки
});

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

export function renderModalContent(product) {
  const {
    id,
    images,
    name,
    category: { name: categoryName },
    price,
    rate,
    color,
    description,
    sizes,
  } = product;

  const colorListMarkup = color
    .map(
      (hex, index) => `
              <li class="color-checkbox-item">
                <label class="color-checkbox-label">
                  <input
                    type="radio"
                    name="color"
                    value="${hex}"
                    class="color-checkbox-input"
                    {${index === 0 ? 'checked' : ''}
                  />
                  <span class="color-checkbox-marker" style="background-color: ${hex}"></span>
                </label>
              </li>`
    )
    .join('');

  const starsMarkup = Array(5)
    .fill('')
    .map(
      () => `<div class="star">
              <i class="star-empty"></i>
              <i class="star-half"></i>
              <i class="star-filled"></i>
            </div>`
    )
    .join('');

  const markup = `<div class="backdrop is-open">
  <div class="modal">
    <button type="button" class="modal-close-btn">
      <svg class="modal-close-btn-svg" width="32" height="32">
        <use href="../img/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="product-modal" data-id="${id}">
      <div class="product-gallery">
        <img src="${images[0]}" class="main-img" alt="Product image" />
        <div class="thumb-list">
          <img src="${images[1]}" class="thumb" alt="Preview image" />
          <img src="${images[2]}" class="thumb" alt="Preview image" />
        </div>
      </div>

      <div class="product-info">
        <h2 class="product-title">${name}</h2>
        <p class="category">${categoryName}</p>
        <p class="price">${price} грн</p>
        <div class="rating large star-icon value-1 half color-default label-top">
        <div class="star-container">${starsMarkup}</div>
        </div>
         <div class="product-colors">
            <p class="label">Колір</p>
            <ul class="color-checkbox-list">${colorListMarkup}</ul>
              </div>
              <div class="description">
            <p class="description-text">${description}</p>
            <p class="sizes">Розміри: ${sizes}</p>
          </div>
          <button class="order-btn" data-id="${id}">
            Перейти до замовлення
          </button>
          </div>
          </div>
           </div>
  </div>
</div>`;

  const modalContainer = document.querySelector('.modal');
  modalContainer.innerHTML = markup;

  updateRating(product.rate);
}
// openModal('682f9bbf8acbdf505592ac37');
