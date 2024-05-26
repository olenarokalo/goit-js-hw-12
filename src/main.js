import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { createGalleryItem } from './js/render-functions.js';

const searchBtn = document.querySelector(`.search-btn`);
const searchHolder = document.querySelector(`.form-input`);
const galleryElement = document.querySelector(`.gallery-list`);
const loader = document.querySelector(`.loader`);
const searchForm = document.querySelector(`.form`);

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm.addEventListener(`submit`, e => {
  e.preventDefault();
  loader.style.display = 'inline-block';

  const searchQuery = e.target.elements.search.value.trim();
  if (searchQuery === '') {
    galleryElement.innerHTML = '';
    e.target.reset();
    iziToast.warning({
      title: `Warning`,
      message: 'Search field cannot be empty!',
      position: 'topRight',
    });
    return;
  }
  galleryElement.innerHTML = '';

  fetchImages(searchQuery)
    .then(imagesData => {
      if (!imagesData.total) {
        iziToast.error({
          title: `Error`,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      galleryElement.innerHTML = createGalleryItem(imagesData.hits);
      lightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
      loader.style.display = 'none';
      e.target.reset();
    });
});
