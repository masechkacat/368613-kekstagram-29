import {closeModal} from './form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
//функция вызова события по нажатию кнопки ESC
function onDocumentKeydown(evt,cb){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
    cb();
  }
}
//реализация показа успешной отправки сообщения
//закрытие по нажатию на тело документа вне сообщения
const onSuccessDocumentClick = (evt)=>{
  evt.preventDefault();
  const isClickOnModalSuccess = evt.target.dataset.successMessage !== undefined;

  if (!isClickOnModalSuccess) {
    closeSuccessMessage();
  }
};
const onSuccesButtonClick = ()=>closeSuccessMessage();//закрытие по кнопке
const onCloseSuccessMessage = (evt)=>onDocumentKeydown(evt,closeSuccessMessage);
function closeSuccessMessage (){
  document.body.querySelector('.success').remove();
  document.body.removeEventListener('click',onSuccessDocumentClick);
  document.body.removeEventListener('keydown', onCloseSuccessMessage);
  closeModal();
}
const showSuccessMessage = ()=>{
  const successBlock = successTemplate.cloneNode(true);
  document.body.append(successBlock);
  successBlock.querySelector('.success__button').addEventListener('click', onSuccesButtonClick);
  document.body.addEventListener('click',onSuccessDocumentClick);
  document.body.addEventListener('keydown',onCloseSuccessMessage);
};
//реализация окна с показом ошибки
//закрытие окна по щелчку вне области сообщения
const onErrorDocumentClick = (evt)=>{
  evt.preventDefault();
  const isClickOnModalError = evt.target.dataset.errorMessage !== undefined;

  if (!isClickOnModalError) {
    closeErrorMessage();
  }
};
const onErrorButtonclick = () => closeErrorMessage();
const onCloseErrorMessage = (evt)=>onDocumentKeydown(evt,closeErrorMessage);
function closeErrorMessage (){
  document.body.querySelector('.error').remove();
  document.body.classList.remove('has-modal');
  document.body.removeEventListener('click',onErrorDocumentClick);
  document.removeEventListener('keydown', onCloseErrorMessage);
}

const showErrorMessage = ()=>{
  const errorBlock = errorTemplate.cloneNode(true);
  const errorButton = errorBlock.querySelector('.error__button');
  document.body.append(errorBlock);
  document.body.classList.add('has-modal');
  errorButton.addEventListener('click',onErrorButtonclick);
  document.body.addEventListener('keydown',onCloseErrorMessage);
  document.body.addEventListener('click',onErrorDocumentClick);

};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
};

export{showSuccessMessage,showErrorMessage, showAlert};
