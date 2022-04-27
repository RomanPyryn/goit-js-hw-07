import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createsGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createsGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img 
                class="gallery__image" 
                src="${preview}" 
                alt="${description}" />
        </a>
        `
    } ).join('');
};

galleryEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
    e.preventDefault();

    if (e.target.classList.value !== 'gallery__image') {
        return;
    }

    console.log(e.target.classList.value);
};

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
