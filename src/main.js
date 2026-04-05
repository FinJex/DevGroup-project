HEAD;
import { initHomePage } from './js/handlers';
import { initFaq } from './js/faq';
import './css/faq.css';

document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initFaq();
});

import {
  handleLoadMore,
  handlerByCategories,
  initHomePage,
} from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', initHomePage);
refs.categories.addEventListener('click', handlerByCategories);
refs.loadMoreBtn.addEventListener('click', handleLoadMore);
main;
