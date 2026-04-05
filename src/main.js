import {
  handleLoadMore,
  handlerByCategories,
  initHomePage,
} from './js/handlers';

import { refs } from './js/refs';
import './js/footer.js';

document.addEventListener('DOMContentLoaded', initHomePage);

refs.categories.addEventListener('click', handlerByCategories);
refs.loadMoreBtn.addEventListener('click', handleLoadMore);