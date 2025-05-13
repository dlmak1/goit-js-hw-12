import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-form');
const input = document.querySelector('input[name="search-text"]');
const loadMoreBtn = document.querySelector('.load-more-btn');
let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  if (query !== currentQuery) {
    currentQuery = query;
    currentPage = 1;
    document.querySelector('.js-gallery').innerHTML = '';
  }

  showLoader();
  hideLoadMoreButton();

  try {
    const res = await getImagesByQuery(query, currentPage);

    if (!res.hits.length) {
      iziToast.error({
        title: 'No images',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(res.hits);
      if (res.totalHits > currentPage * 15) {
        showLoadMoreButton();
      } else {
        iziToast.info({
          title: 'End of results',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topCenter',
        });
      }
    }
  } catch (error) {
    iziToast.error({
      position: 'topCenter',
      title: 'Error',
      message: 'An error occurred while fetching images. Please try again later.',
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async function () {
  currentPage += 1;
  showLoader();

  try {
    const res = await getImagesByQuery(currentQuery, currentPage);

    if (!res.hits.length) {
      iziToast.error({
        title: 'No more images',
        message: 'Sorry, no more images available.',
        position: 'topRight',
      });
    } else {
      createGallery(res.hits);
      if (res.totalHits <= currentPage * 15) {
        hideLoadMoreButton();
        iziToast.info({
          title: 'End of results',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topCenter',
        });
      }
    }
  } catch (error) {
    iziToast.error({
      position: 'topCenter',
      title: 'Error',
      message: 'An error occurred while fetching images. Please try again later.',
    });
  } finally {
    hideLoader();
  }

  const imageCards = document.querySelectorAll('.image-item');
  const imageHeight = imageCards[0].getBoundingClientRect().height;
  window.scrollBy({
    top: imageHeight * 2, 
    behavior: 'smooth',
  });
});
