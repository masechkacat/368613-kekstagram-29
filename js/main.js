import {renderMiniatures} from'./miniatures.js';
import {renderBigPicture} from'./modal-window.js';
import './form.js';
import'./slider.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './form.js';
import { showAlert } from './alerts.js';
import {initSorting} from './sort.js';

getData()
  .then((data) => {
    renderMiniatures(data);
    renderBigPicture(data);
    initSorting(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
setUserFormSubmit();
