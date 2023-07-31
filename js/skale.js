const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const scaleInput = document.querySelector('.scale__control--value');
const scaleImg = document.querySelector('.img-upload__preview img');

scaleInput.value = '100%';


const onSmallerButtonClick = () => {
  let scaleNumber = parseInt(scaleInput.value, 10);
  if(scaleNumber > MIN_SCALE && scaleNumber <= MAX_SCALE) {
    scaleNumber -= SCALE_STEP;
  }
  scaleInput.value = `${scaleNumber}%`;
  scaleImg.style.transform = `scale(${scaleNumber / 100})`;
};

const onBiggerButtonClick = () => {
  let scaleNumber = parseInt(scaleInput.value, 10);
  if(scaleNumber >= MIN_SCALE && scaleNumber < MAX_SCALE) {
    scaleNumber += SCALE_STEP;
  }
  scaleInput.value = `${scaleNumber}%`;
  scaleImg.style.transform = `scale(${scaleNumber / 100})`;
};

const resetZoom = () =>{
  scaleInput.value = '100%';
  scaleImg.style.transform = `scale(${MAX_SCALE / 100})`;
};

export {resetZoom, onBiggerButtonClick, onSmallerButtonClick};
