import { onDocumentKeydown } from './modal-window';

const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelButton = uploadOverlay.querySelector('.img-upload__cancel');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  document.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadCancelButton.removeEventListener('click', closeModal);
};

const openModal = () => {
  uploadOverlay.classList.remove('hidden');
  document.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  uploadCancelButton.addEventListener('click', closeModal);
};
