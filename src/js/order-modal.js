import { refs } from './refs';

export function onOrderBtnClick(e) {
  const orderBtn = e.target.closest('.order-btn');
  if (!orderBtn) return;
  const productId = orderBtn.getAttribute('data-id');

  document.querySelector('#product-id').value = productId;

  const selectedColor = document.querySelector(
    'input[name="color"]:checked'
  )?.value;
  document.querySelector('#product-color').value = selectedColor;

  openOrderForm();

  document.addEventListener('keydown', closeOrderModalEsc);
}

function openOrderForm() {
  console.log(refs.orderModal);
  refs.orderModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

export function closeOrderForm(e) {
  if (
    e.target.classList.contains('backdrop') ||
    e.target.classList.contains('modal-close-btn-svg')
  ) {
    refs.orderModal.classList.remove('is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', closeOrderModalEsc);
  }
}

function closeOrderModalEsc(e) {
  if (e.key === 'Escape') {
    refs.orderModal.classList.remove('is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', closeOrderModalEsc);
  }
}
