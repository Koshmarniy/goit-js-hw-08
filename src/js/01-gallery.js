// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMurkup = creategalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMurkup)

function creategalleryItems(images) {
  return galleryItems.map(({preview, original, description}) => {
    return ` 
        <li>
            <a class="gallery__item" 
            href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
            </a>
        </li>
    
    `;
  })
  .join('');
 
}
let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay:250,});