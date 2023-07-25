//import {thumbnailsList} from './data.js';
import {renderMiniatures} from'./miniatures.js';
import {renderBigPicture} from'./modal-window.js';
import './form.js';
import'./slider.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './form.js';
import { showSuccessMessage, showErrorMessage } from './alerts.js';

getData()
  .then((data) => {
    renderMiniatures(data);
    renderBigPicture(data);
  });
//openForm();
setUserFormSubmit(showSuccessMessage,showErrorMessage);
