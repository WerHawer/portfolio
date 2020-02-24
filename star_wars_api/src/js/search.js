'use strict';

import axios from 'axios';
import getApi from './getAPI';
import { oneObjRender } from './render';
import preLoader from './preLoader';

export async function getInfoByTap(e) {
  try {
    const target = e.target;
    const url = target.dataset.url;

    if (!url) return;

    preLoader.start();
    const oneObj = await getApi.searchDetails(url);
    oneObjRender(oneObj, target);
  } catch (err) {
    alert(err);
  }
}

export async function getInfo(obj) {
  const newObj = {};
  const objArr = Object.keys(obj);

  for (let key of objArr) {
    try {
      if (typeof obj[key] === 'object' && obj[key].length) {
        const names = obj[key].map(async path => {
          try {
            const info = await getApi.searchDetails(path);
            const name = info.name || info.title;

            return { name, path };
          } catch (err) {
            throw err;
          }
        });
        const resultArr = await axios.all(names);
        newObj[key] = resultArr;
      } else if (typeof obj[key] === 'object' && !obj[key].length) {
        newObj[key] = undefined;
      } else if (key === 'homeworld') {
        const path = obj[key];
        const info = await getApi.searchDetails(path);
        const name = info.name;

        newObj[key] = { name, path };
      } else {
        newObj[key] = obj[key];
      }
    } catch (err) {
      alert(err);
    }
  }

  return newObj;
}
