import { closeModal } from './details-modal';
import { refs } from './refs';

export function onOrderBtnClick() {
  const productId = refs.orderBtn.dataset.id;

  document.getElementById('product-id').value = productId;

  const selectedColor = document.querySelector(
    'input[name="selected-color"]:checked'
  )?.value;
  document.getElementById('product-color').value = selectedColor;

  closeModal();
  openOrderForm(); // ф-я відкриття другої модалки
}

function openOrderForm() {
  refs.orderModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
