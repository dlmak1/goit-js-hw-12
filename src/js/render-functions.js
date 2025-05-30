import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

const lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 150,
});

function createImageCard({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) {
  return `
    <li class="image-item">
      <div>
        <a href="${largeImageURL}" class="image-link">
          <img src="${webformatURL}" alt="${tags}" class="gallery-image" loading="lazy">
        </a>
      </div>
      <div>
        <ul class="info-box">
          <li class="info-item">
            <p class="info-title">Likes</p>
            <p class="info-label">${likes}</p>
          </li>
          <li class="info-item">
            <p class="info-title">Views</p>
            <p class="info-label">${views}</p>
          </li>
          <li class="info-item">
            <p class="info-title">Comments</p>
            <p class="info-label">${comments}</p>
          </li>
          <li class="info-item">
            <p class="info-title">Downloads</p>
            <p class="info-label">${downloads}</p>
          </li>
        </ul>
      </div>
    </li>
  `;
}

export function createGallery(images) {
  const markup = images.map(createImageCard).join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function showLoader() {
  loader?.classList.remove('hidden');
}

export function hideLoader() {
  loader?.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn?.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn?.classList.add('hidden');
}
