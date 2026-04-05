import { initHomePage } from './js/handlers';
import { initFaq } from './js/faq';
import './css/faq.css';

document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initFaq();
});
