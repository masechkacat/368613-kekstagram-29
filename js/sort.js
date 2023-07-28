import {debounce, getRandomInteger} from './util.js';
import {renderMiniatures} from './miniatures.js';

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const MAX_RANDOM_MINIATURES = 10;

const TYME_OUT_OF_DELAY = 500;

const sortContainer = document.querySelector('.img-filters');
const defaultSort = document.querySelector('#filter-default');
const btnSortForm = document.querySelector('.img-filters__form');
const buttons = btnSortForm.childNodes;
const randomSort = document.querySelector('#filter-random');
const discussSort = document.querySelector('#filter-discussed');

const activeSortClass = 'img-filters__button--active';

const showSorting = () => {
  sortContainer.classList.remove('img-filters--inactive');
};

const deleteMiniatures = () => {
  const personalMiniatures = document.querySelectorAll('.picture');
  if (personalMiniatures) {
    personalMiniatures.forEach((personalMiniature) => {
      personalMiniature.remove();
    });
  }
};

const sortRandomMiniatures = (arr) => {
  const newRandomMiniatures = arr.sort(getRandomInteger);

  return newRandomMiniatures.slice(0, MAX_RANDOM_MINIATURES);
};

const sortDiscussMiniatures = (arr) => arr.slice().sort((arrItemA, arrItemB) => arrItemB.comments.length - arrItemA.comments.length);

const renderDefaultMiniatures = debounce((arr) => {
  deleteMiniatures();
  renderMiniatures(arr);
}, TYME_OUT_OF_DELAY);

const renderRandomMiniatures = debounce((arr) => {
  deleteMiniatures();
  renderMiniatures(sortRandomMiniatures(arr));
}, TYME_OUT_OF_DELAY);

const renderDiscussMiniatures = debounce((arr) => {
  deleteMiniatures();
  renderMiniatures(sortDiscussMiniatures(arr));
}, TYME_OUT_OF_DELAY);

const reGenerateMiniatures = (arr, btn) => {
  if (btn.id === Filter.RANDOM) {

    randomSort.classList.add(activeSortClass);
    defaultSort.classList.remove(activeSortClass);
    discussSort.classList.remove(activeSortClass);
    renderRandomMiniatures(arr);
  }

  if (btn.id === Filter.DISCUSSED) {

    discussSort.classList.add(activeSortClass);
    defaultSort.classList.remove(activeSortClass);
    randomSort.classList.remove(activeSortClass);
    renderDiscussMiniatures(arr);
  }

  if (btn.id === Filter.DEFAULT) {

    defaultSort.classList.add(activeSortClass);
    discussSort.classList.remove(activeSortClass);
    randomSort.classList.remove(activeSortClass);
    renderDefaultMiniatures(arr);
  }
};

const initSorting = (data) => {
  showSorting();
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => reGenerateMiniatures(data, btn));
  });
};


export {initSorting};
