'use strict';

import refs from './refs';
import getApi from './getAPI';
import { renderFilmsList, cleanPage } from './render';

let revers = 1;

function sortListByName(e) {
  if (e.target.dataset.action !== 'sort') return;

  getApi.filmList.sort((a, b) => a.title.localeCompare(b.title, 'en') * revers);

  revers = revers * -1;
  cleanPage(refs.output);
  renderFilmsList(getApi.filmList);
}

export default sortListByName;
