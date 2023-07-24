import {closeModal, onDocumentKeydown} from './form.js';

const body = document.body;
const successMessageTemplate = document.querySelector('#success').content;
const newSuccessMessage = successMessageTemplate.cloneNode(true);
const successButton = newSuccessMessage.querySelector('.success__button');

const errorMessageTemplate = document.querySelector('#error').content;
const newErrorMessage = errorMessageTemplate.cloneNode(true);
const errorButton = newErrorMessage.querySelector('.error__button');

const createMessages = () => {
  body.append(newSuccessMessage);
  document.querySelector('.success').classList.add('hidden');
  body.append(newErrorMessage);
  document.querySelector('.error').classList.add('hidden');
};

const onDocumentClickSuccess = (evt) => {
  if(evt.target.classList.contains('error')){
    closeSuccessMessage();
  }
};

const onDocumentSuccessKeydown = (evt) => {
  if(evt.key === 'Escape'){
    closeSuccessMessage();
  }
};

function closeSuccessMessage () {
  document.querySelector('.success').classList.add('hidden');
  successButton.removeEventListener('click', closeSuccessMessage);
  document.removeEventListener('keydown', onDocumentSuccessKeydown);
  document.removeEventListener('click', onDocumentClickSuccess);
  document.addEventListener('keydown', onDocumentKeydown);

  closeModal();
}

const showSuccessMessage = () => {
  document.querySelector('.success').classList.remove('hidden');
  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onDocumentSuccessKeydown);
  document.addEventListener('click', onDocumentClickSuccess);
  document.removeEventListener('keydown', onDocumentKeydown);

};

const onDocumentErrorKeydown = (evt) => {
  if(evt.key === 'Escape'){
    closeErrorMessage();
  }
};

const onDocumentClick = (evt) => {
  if(evt.target.classList.contains('error')){
    closeErrorMessage();
  }
};

function closeErrorMessage () {
  document.querySelector('.error').classList.add('hidden');
  errorButton.removeEventListener('click', closeErrorMessage);
  document.removeEventListener('keydown', onDocumentErrorKeydown);
  document.removeEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

const showErrorMessage = () => {
  document.querySelector('.error').classList.remove('hidden');
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onDocumentErrorKeydown);
  document.addEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

createMessages();

export {showErrorMessage, showSuccessMessage};
