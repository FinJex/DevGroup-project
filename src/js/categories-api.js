import axios from 'axios';

const API_BASE_URL = 'https://furniture-store-v2.b.goit.study/api';
const API_ENDPOINTS = {
  CATEGORIES: '/categories',
  PRODUCTS: '/furnitures',
  BYECATEGORY: '/furnitures/{id}',
  FEEDBACKS: '/feedbacks',
};
const ITEMS_PER_PAGE = 8;

axios.defaults.baseURL = API_BASE_URL;

export async function getCategories() {
  const res = await axios(`${API_ENDPOINTS.CATEGORIES}`);
  return res.data;
}

export async function getProducts(page) {
  // const page = (currentPage - 1) * 8;

  const res = await axios(
    `${API_ENDPOINTS.PRODUCTS}?page=1&limit=${ITEMS_PER_PAGE}`
  );
  return res.data;
}
