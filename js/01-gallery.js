import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createsGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
function createsGalleryItemsMarkup(galleryItems) {
    return  galleryItems.map(({ preview, original, description }) => {
      return  `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"   
            />
        </a>
    </div>
    `;
    }).join('');
}

galleryEl.addEventListener('click', onItemClick);
function onItemClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') { return; };

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
    `)
    instance.show()


    window.addEventListener('keydown', onModalClose);
    function onModalClose(e) {
        if (e.key !== 'Escape') { return; };
        
        instance.close();
    };
};

