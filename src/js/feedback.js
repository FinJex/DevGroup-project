import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const API_URL = 'https://furniture-store-v2.b.goit.study/api/feedbacks?page=1&limit=10';

const refs = {
  section: document.querySelector('[data-feedback-section]'),
  loader: document.querySelector('[data-feedback-loader]'),
  readyState: document.querySelector('[data-feedback-ready]'),
  list: document.querySelector('[data-feedback-list]'),
  prevBtn: document.querySelector('[data-feedback-prev]'),
  nextBtn: document.querySelector('[data-feedback-next]'),
  pagination: document.querySelector('[data-feedback-pagination]'),
};

let feedbackSwiper;

if (refs.section) {
  initFeedbackSection();
}

async function initFeedbackSection() {
  showLoader();

  try {
    const feedbacks = await getFeedbacks();

    if (!feedbacks.length) {
      throw new Error('No feedbacks available');
    }

    refs.list.innerHTML = createFeedbackMarkup(feedbacks);
    refs.readyState.classList.remove('hidden');
    initSwiper(feedbacks.length);
  } catch (error) {
    showErrorToast();
  } finally {
    hideLoader();
  }
}

async function getFeedbacks() {
  const { data } = await axios.get(API_URL);

  const feedbacks = Array.isArray(data?.feedbacks)
    ? data.feedbacks
    : Array.isArray(data)
      ? data
      : [];

  return feedbacks.slice(0, 10);
}

function initSwiper(slidesCount) {
  feedbackSwiper = new Swiper('[data-feedback-swiper]', {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 500,
    grabCursor: true,
    allowTouchMove: slidesCount > 1,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      prevEl: refs.prevBtn,
      nextEl: refs.nextBtn,
      disabledClass: 'is-disabled',
    },
    pagination: {
      el: refs.pagination,
      clickable: true,
      bulletElement: 'button',
      renderBullet(index, className) {
        return `<button class="${className}" type="button" aria-label="Перейти до відгуку ${index + 1}"></button>`;
      },
    },
    on: {
      afterInit(swiper) {
        syncNavState(swiper);
      },
      slideChange(swiper) {
        syncNavState(swiper);
      },
      resize(swiper) {
        syncNavState(swiper);
      },
    },
  });
}

function syncNavState(swiper) {
  refs.prevBtn.disabled = swiper.isBeginning;
  refs.nextBtn.disabled = swiper.isEnd;
}

function createFeedbackMarkup(feedbacks) {
  return feedbacks
    .map((feedback, index) => {
      const author = feedback?.name ?? feedback?.author ?? 'Anonymous';
      const reviewText =
        feedback?.descr ??
        feedback?.description ??
        feedback?.review ??
        'Клієнт поділився позитивним враженням про співпрацю з нами.';
      const roundedRating = normalizeRating(Number(feedback?.rate ?? feedback?.rating ?? 0));

      return `
        <li class="swiper-slide feedback__item">
          <article class="feedback__card">
            <div class="feedback__rating-row">
              <div class="feedback__stars" aria-label="Оцінка ${roundedRating} з 5">
                ${createStarsMarkup(roundedRating, index)}
              </div>
              <span class="feedback__score">${formatRating(roundedRating)}</span>
            </div>

            <p class="feedback__text">${escapeHtml(reviewText)}</p>

            <div class="feedback__author">
              <span class="feedback__author-badge" aria-hidden="true">${getInitials(author)}</span>
              <p class="feedback__author-name">${escapeHtml(author)}</p>
            </div>
          </article>
        </li>
      `;
    })
    .join('');
}

function normalizeRating(rating) {
  if (rating >= 3.3 && rating <= 3.7) {
    return 3.5;
  }

  if (rating >= 3.8 && rating <= 4.2) {
    return 4;
  }

  const rounded = Math.round(rating * 2) / 2;
  return Math.max(0, Math.min(5, rounded));
}

function formatRating(rating) {
  return Number.isInteger(rating) ? String(rating) : rating.toFixed(1);
}

function createStarsMarkup(rating, feedbackIndex) {
  return Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = rating >= starNumber;
    const isHalf = !isFilled && rating === starNumber - 0.5;
    const gradientId = `feedback-half-star-${feedbackIndex}-${starNumber}`;

    return `
      <svg
        class="feedback__star ${isFilled ? 'is-filled' : ''} ${isHalf ? 'is-half' : ''}"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="${gradientId}">
            <stop offset="50%" stop-color="currentColor"></stop>
            <stop offset="50%" stop-color="#d8d3c8"></stop>
          </linearGradient>
        </defs>
        <path
          fill="${isHalf ? `url(#${gradientId})` : 'currentColor'}"
          d="M12 2.75l2.86 5.8 6.4.93-4.63 4.51 1.09 6.37L12 17.35 6.28 20.36l1.09-6.37L2.74 9.48l6.4-.93L12 2.75z"
        ></path>
      </svg>
    `;
  }).join('');
}

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('') || 'A';
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function showLoader() {
  refs.loader.classList.remove('hidden');
  refs.readyState.classList.add('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

function showErrorToast() {
  iziToast.error({
    title: 'Помилка',
    message: 'Не вдалося завантажити відгуки. Спробуйте ще раз трохи пізніше.',
    position: 'bottomRight',
    timeout: 5000,
  });
}
