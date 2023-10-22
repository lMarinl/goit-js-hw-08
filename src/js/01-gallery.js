// Add imports above this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');


function renderGalleryItems() {
  const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery_item">
  <a class="gallery_link" href="${original}">
    <img
      class="gallery_image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    </li>`
  ).join('')

    gallery.innerHTML = galleryMarkup;


    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}

renderGalleryItems(galleryItems);