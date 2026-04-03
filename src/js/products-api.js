import axios from 'axios';

const API_BASE_URL = 'https://furniture-store-v2.b.goit.study/api';
const API_ENDPOINTS = {
  CATEGORIES: '/categories',
  PRODUCTS: '/furnitures',
  BYECATEGORY: '/furnitures/{id}',
  FEEDBACKS: '/feedbacks',
};

axios.defaults.baseURL = API_BASE_URL;

export async function getCategories() {
  const { data } = await axios(`${API_ENDPOINTS.CATEGORIES}`);
  return data;
}

async function init() {
  const categories = await getCategories();
  console.log(categories);
}

init();
