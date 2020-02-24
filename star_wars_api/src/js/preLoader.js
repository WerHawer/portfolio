import refs from './refs';
import { cleanPage } from './render';

export default {
  start() {
    refs.loadAnimation.classList.remove('bowlG_close');
    cleanPage(refs.output);
  },

  stop() {
    refs.loadAnimation.classList.add('bowlG_close');
  },
};
