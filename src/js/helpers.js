import { refs } from './refs';

export function toggleLoadMoreBtn() {
  if (page >= totalPages) {
    refs.loadMoreBtn.classList.add('hidden');
  } else {
    refs.loadMoreBtn.classList.remove('hidden');
  }
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}
