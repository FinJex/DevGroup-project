import {
  initHomePage,
  handleLoadMore,
  handlerByCategories,
} from './js/handlers';
import { initFaq } from './js/faq';
import './css/faq.css';
import { refs } from './js/refs';
import './js/footer.js';
import { initFeedbackSection } from './js/feedback.js';

document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initFaq();
  initFeedbackSection();
});

refs.categories.addEventListener('click', handlerByCategories);

refs.loadMoreBtn.addEventListener('click', handleLoadMore);
