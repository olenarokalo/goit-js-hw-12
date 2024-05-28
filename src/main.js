import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { createGalleryItem } from './js/render-functions.js';
import { perPage } from './js/pixabay-api.js';

const galleryElement = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader');
const searchForm = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.js-load-more-btn');

loadMoreBtn.style.display = 'none';
let photosCurrentPage = 1;
let totalPages = 0;
let searchQuery = '';

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  loader.style.display = 'inline-block';

  photosCurrentPage = 1;

  searchQuery = e.target.elements.search.value.trim();
  if (searchQuery === '') {
    galleryElement.innerHTML = '';
    e.target.reset();
    iziToast.warning({
      title: 'Warning',
      message: 'Search field cannot be empty!',
      position: 'topRight',
    });
    loader.style.display = 'none';
    loadMoreBtn.style.display = 'none';
    return;
  }
  galleryElement.innerHTML = '';

  try {
    const imagesData = await fetchImages(searchQuery, photosCurrentPage);
    if (!imagesData.total) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      loadMoreBtn.style.display = 'none';
    } else {
      galleryElement.innerHTML = createGalleryItem(imagesData.hits);
      lightbox.refresh();
      totalPages = Math.ceil(imagesData.totalHits / perPage);
      if (photosCurrentPage < totalPages) {
        loadMoreBtn.style.display = 'block';
      } else {
        loadMoreBtn.style.display = 'none';
      }
    }
  } catch (error) {
    console.log(error);
    loadMoreBtn.style.display = 'none';
  } finally {
    loader.style.display = 'none';
    e.target.reset();
  }
});

const onLoadMorePress = async (event, searchQuery) => {
  try {
    loader.style.display = 'inline-block';
    photosCurrentPage++;

    const { hits, totalHits } = await fetchImages(
      searchQuery,
      photosCurrentPage
    );

    galleryElement.insertAdjacentHTML('beforeend', createGalleryItem(hits));
    lightbox.refresh();
    totalPages = Math.ceil(totalHits / perPage);

    if (photosCurrentPage === totalPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    console.error('Error loading more photos:', error);
    loadMoreBtn.style.display = 'none';
     loadMoreBtn.style.display = 'none';
  } finally {
    loader.style.display = 'none';
    smoothScrollOnLoadMore();
  }
};

loadMoreBtn.addEventListener('click', () =>
  onLoadMorePress(event, searchQuery)
);

const smoothScrollOnLoadMore = () => {
  const lastImg = galleryElement.querySelector('.gallery-item');
  const imgHeight = lastImg.getBoundingClientRect().height;
  const scrollHeight = imgHeight * 2;
  console.log(scrollHeight);

  window.scrollBy({
    top: imgHeight,
    left: 0,
    behavior: 'smooth',
  });
};
