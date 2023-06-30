import {createPhotos} from './data.js';

const getMiniatures = () => {

  const containerPictures = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const pictureElements = createPhotos();

  const containerPictureFragment = document.createDocumentFragment();

  pictureElements.forEach (({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    containerPictureFragment.appendChild(pictureElement);
  });

  containerPictures.appendChild(containerPictureFragment);
};
export {getMiniatures};
