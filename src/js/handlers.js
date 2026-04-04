import {
  getCategories,
  getFeedbacks,
  getProductInModal,
  getProducts,
  getProductsByCategory,
} from './categories-api';
let page;
let totalPages;
export async function initHomePage() {
  page = 1;
  try {
    const categories = await getCategories();
    console.log(categories);
    const allCategories = ['Всі товари', ...categories];
    const { furnitures, totalItems } = await getProducts(page);
    console.log(furnitures, totalItems);
    const feedbacks = await getFeedbacks(page);
    console.log(feedbacks);
  } catch (error) {
    console.log(error);
  }
}

export async function handlerByCategories(e) {
  page = 1;
  category = e.target.dataset.category;
  try {
    const { furnitures, totalItems } = await getProductsByCategory(
      category,
      page
    );
    console.log(furnitures, totalItems);
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
