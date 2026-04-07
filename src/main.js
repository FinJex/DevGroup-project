
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
<<<<<<< HEAD
import { closeModal } from './js/details-modal.js';
import { onOrderBtnClick } from './js/order-modal.js';
=======
import { initFeedbackSection } from './js/feedback.js';
import { closeModal, hideModal } from './js/details-modal.js';
>>>>>>> 8bc55a51f725a0fbdbe1645bca1e316475f8236c

document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initFaq();
  initFeedbackSection();
});

refs.categories.addEventListener('click', handlerByCategories);

refs.loadMoreBtn.addEventListener('click', handleLoadMore);

refs.furnitureList.addEventListener('click', handlerModal);

refs.orderBtn?.addEventListener('click', onOrderBtnClick);

refs.backdrop.addEventListener('click', closeModal);

