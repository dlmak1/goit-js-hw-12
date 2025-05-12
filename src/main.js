import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-form');
const input = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const query = input.value.trim();

    if (query === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query.',
            position: 'topRight',
        });
        return;
    }

    showLoader();
    clearGallery();

    getImagesByQuery(query)
    .then(res => {
        if (res.hits.length === 0) {
            iziToast.error({
                title: 'No images',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            createGallery(res.hits);
        }
    })
    .catch(error => {
        iziToast.error({
            position: 'topCenter',
            title: 'Error',
            message: 'An error occurred while fetching images. Please try again later.',
        });
    })
    .finally(() => {
        hideLoader();
    });
});
