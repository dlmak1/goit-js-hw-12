import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.js-gallery');
const lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',  
  captionDelay: 150,   
});

export function createGallery(images) {
  const galleryMarkup = images.map(image => {
    return `
      <li class="image-item">
        <div>
          <a href="${image.largeImageURL}" class="image-link">
            <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image">
          </a>
        </div>
        <div>
          <ul class="info-box">
            <li class="info-item">
              <p class="info-title">Likes</p>
              <p class="info-label" data-likes>${image.likes}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Views</p>
              <p class="info-label" data-views>${image.views}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Comments</p>
              <p class="info-label" data-comments>${image.comments}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Downloads</p>
              <p class="info-label" data-downloads>${image.downloads}</p>
            </li>
          </ul>
        </div>
      </li>`;
  }).join('');

  galleryContainer.innerHTML = galleryMarkup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.js-loader').classList.remove('hidden');
}

export function hideLoader() {
  document.querySelector('.js-loader').classList.add('hidden');
}
