'use strict';
import debounce from 'debounce';
import axios from 'axios';
import refs from './refs';
import { findedObjectsRender, FirstRender } from './render';
import getApi from './getAPI';
import preLoader from './preLoader';

refs.input.addEventListener('input', debounce(findByInput, 700));
const urls = [
  'https://swapi.co/api/films/?search=',
  'https://swapi.co/api/people/?search=',
  'https://swapi.co/api/planets/?search=',
  'https://swapi.co/api/species/?search=',
  'https://swapi.co/api/starships/?search=',
  'https://swapi.co/api/vehicles/?search=',
];

export async function findByInput() {
  preLoader.start();

  const finalObj = {};
  const value = refs.input.value.toLowerCase();

  if (!value) {
    FirstRender();
    return;
  }

  const searchRequestUrl = urls.map(url => url + value);

  const answer = searchRequestUrl.map(async url => {
    try {
      return await getApi.searchDetails(url);
    } catch (err) {
      throw err;
    }
  });

  try {
    const result = await axios.all(answer);

    const finalResult = result.map(obj => obj.results).flat();

    if (!finalResult.length) {
      finalObj.result = undefined;
      preLoader.stop();
      findedObjectsRender(finalObj);

      return finalObj;
    }

    const resultedArr = finalResult.map(obj => {
      const type = findType(obj);
      const name = obj.name || obj.title;
      const url = obj.url;

      return { name, url, type };
    });
    finalObj.result = resultedArr;

    preLoader.stop();
    findedObjectsRender(finalObj);
    return finalObj;
  } catch (err) {
    alert(err);
  }
}

function findType(obj) {
  const types = ['film', 'people', 'planet', 'starship', 'vehicle'];

  const type = types.find(type => obj.url.includes(type));

  return type;
}
