//import {thumbnailsList} from './data.js';
import {renderMiniatures} from'./miniatures.js';
import {renderBigPicture} from'./modal-window.js';
import './form.js';
import'./slider.js';
import { getData } from './api.js';

getData()
  .then((data) => {
    renderMiniatures(data);
    renderBigPicture(data);
  });
//openForm();
