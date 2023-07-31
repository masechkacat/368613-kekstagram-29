const thumbnailsContainer = document.querySelector('.pictures');

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const thumbnailsContainerFragment = document.createDocumentFragment();


const createThumbnailElements = (pictures) => {
  pictures.forEach(({url, description, likes, comments, id}) => {
    const thumbnailElement = thumbnailTemplate.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').src = url;
    thumbnailElement.querySelector('.picture__img').alt = description;
    thumbnailElement.querySelector('.picture__likes').textContent = likes;
    thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
    thumbnailElement.dataset.thumbnailId = id;

    thumbnailsContainerFragment.append(thumbnailElement);

    return thumbnailsContainerFragment;
  });
};

const renderMiniatures = (pictures) => {
  createThumbnailElements(pictures);
  thumbnailsContainer.append(thumbnailsContainerFragment);
};//const thumbnailsContainerFragment = document.createDocumentFragment();
  /*const thumbnailsContainerFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnailElement = thumbnailElements(picture);
    thumbnailsContainerFragment.append(thumbnailElement);

  };

  thumbnailsContainer.append(thumbnailsContainerFragment);
};*/

const removeMiniatures = () => {
  document.querySelectorAll('.picture').forEach((picture) => {
    picture.remove();
  });
};

export {renderMiniatures, removeMiniatures};
