import {
  getCategories,
  getProductInModal,
  getProducts,
  getProductsByCategory,
} from './categories-api';
import { renderCategories, renderFurniture } from './categories-render';
import { toggleLoadMoreBtn } from './helpers';
import { refs } from './refs';

let page = 1;
let currentCategory = 'all';
let totalPages = 1;

export async function initHomePage() {
  page = 1;
  try {
    const categories = await getCategories();
    console.log(categories);
    const allCategories = ['Всі товари', ...categories];
    renderCategories(categories);
    const { furnitures, totalItems } = await getProducts(page);
    console.log(furnitures, totalItems);
    renderFurniture(furnitures);
  } catch (error) {
    console.log(error);
  }
}

export async function handlerByCategories(e) {
  const btn = e.target.closest('.category-btn');
  if (!btn) return;

  page = 1;
  currentCategory = btn.dataset.id;

  try {
    document.querySelectorAll('.category-btn').forEach(b => {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    refs.furnitureList.innerHTML = '';

    let data;

    if (currentCategory === 'all') {
      data = await getProducts(page);
    } else {
      data = await getProductsByCategory(currentCategory, page);
    }

    const { furnitures, totalItems } = data;

    totalPages = Math.ceil(totalItems / 8);

    renderFurniture(furnitures);

    toggleLoadMoreBtn();
  } catch (error) {
    console.log(error);
  }
}

export async function handleLoadMore() {
  page += 1;

  try {
    let data;

    if (currentCategory === 'all') {
      data = await getProducts(page);
    } else {
      data = await getProductsByCategory(currentCategory, page);
    }

    const { furnitures } = data;

    renderFurniture(furnitures);

    toggleLoadMoreBtn();
  } catch (error) {
    console.log(error);
  }
}

export async function handlerModal(e) {
  const id = e.target.closest('li').dataset.id;
  try {
    const modal = await getProductInModal(id);
  } catch (error) {
    console.log(error);
  }
}
