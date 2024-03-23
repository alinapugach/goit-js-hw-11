import { ImagesAPI } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const imagesAPI = new ImagesAPI();
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let inputValue;

input.addEventListener('input', function () {
  inputValue = input.value;
});

form.addEventListener('submit', event => {
  event.preventDefault();
  loader.style.display = 'block';
  imagesAPI.getImages(inputValue).then(response => {
    loader.style.display = 'none';
    if (response.hits.length == 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderGallery(response.hits, gallery);
    }
  });

  event.target.reset();
});
