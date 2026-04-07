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
import { closeModal } from './js/details-modal.js';
import { onOrderBtnClick } from './js/order-modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initFaq();
});

refs.categories.addEventListener('click', handlerByCategories);

refs.loadMoreBtn.addEventListener('click', handleLoadMore);

refs.furnitureList.addEventListener('click', handlerModal);

refs.orderBtn?.addEventListener('click', onOrderBtnClick);

refs.backdrop.addEventListener('click', closeModal);
