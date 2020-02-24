'use strict';
import filmsListMarkup from '../markup/filmsListMarkup.hbs';
import searchedObjListMarkup from '../markup/searchedObjListMarkup.hbs';
import getApi from './getAPI';
import refs from './refs';
import { getInfoByTap, getInfo } from './search';
import sortListByName from './sortFilmList';
import preLoader from './preLoader';
import markupByType from './markupByType';

refs.output.addEventListener('click', getInfoByTap);
window.addEventListener('click', sortListByName);
FirstRender();

export function renderFilmsList(item) {
  const markup = filmsListMarkup(item);
  preLoader.stop();
  refs.output.insertAdjacentHTML('beforeend', markup);
}

export async function FirstRender() {
  try {
    const filmList = await getApi.getList();

    getApi.filmsArr = filmList;
    renderFilmsList(filmList);
  } catch (err) {
    alert(err);
  }
}

export function cleanPage(page) {
  page.innerHTML = '';
}

export async function oneObjRender(obj, target) {
  try {
    const objInfo = await getInfo(obj);
    const type = target.dataset.type;
    const markup = markupByType[type](objInfo);

    preLoader.stop();
    refs.output.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    alert(err);
  }
}

export function findedObjectsRender(obj) {
  const markup = searchedObjListMarkup(obj);
  refs.output.insertAdjacentHTML('beforeend', markup);
}
