import {
  initHomePage,
  handleLoadMore,
  handlerByCategories,
  handlerModal,
} from './js/handlers';
import { initFaq } from './js/faq';
import './css/faq.css';
import { refs } from './js/refs';
import './js/footer.js';
import { closeModal, openModal } from './js/details-modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initFaq();
});

refs.categories.addEventListener('click', handlerByCategories);

refs.loadMoreBtn.addEventListener('click', handleLoadMore);

refs.furnitureList.addEventListener('click', handlerModal);

refs.orderBtn?.addEventListener('click', () => {
  const productId = orderBtn.dataset.id;

  document.getElementById('product-id').value = productId;

  const selectedColor = document.querySelector(
    'input[name="selected-color"]:checked'
  )?.value;
  document.getElementById('product-color').value = selectedColor;

  closeModal(refs.productModal);
  openOrderForm(); // ф-я відкриття другої модалки
});

refs.modalCloseBtn?.addEventListener('click', e => {
  closeModal(refs.productModal);
});
refs.backdrop.addEventListener('click', e => {
  if (e.target === refs.backdrop) closeModal(refs.productModal);
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal(refs.productModal);
});
