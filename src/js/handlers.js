import { getCategories, getProducts } from './categories-api';
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
  } catch (error) {
    console.log(error);
  }
}
