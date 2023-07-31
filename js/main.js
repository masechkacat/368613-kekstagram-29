import {renderMiniatures, removeMiniatures} from'./miniatures.js';
import {renderBigPicture} from'./modal-window.js';
import './form.js';
import'./slider.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './form.js';
import { showAlert } from './alerts.js';
import {initFilters} from './sort.js';

getData()
  .then((data) => {
    renderMiniatures(data);
    renderBigPicture(data);
    //initSorting(data);
    initFilters(data,(pictures) => {
      removeMiniatures();
      renderMiniatures(pictures);
    });
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
setUserFormSubmit();
