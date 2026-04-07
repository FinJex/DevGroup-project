import './js/header.js';
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
import { closeOrderForm, onOrderBtnClick } from './js/order-modal.js';
import { initFeedbackSection } from './js/feedback.js';

document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initFaq();
  initFeedbackSection();
});

refs.categories.addEventListener('click', handlerByCategories);

refs.loadMoreBtn.addEventListener('click', handleLoadMore);

refs.furnitureList.addEventListener('click', handlerModal);

refs.modalContainer.addEventListener('click', onOrderBtnClick);

refs.backdrop.addEventListener('click', closeModal);

refs.orderModal.addEventListener('click', closeOrderForm);
