'use strict';

import axios from 'axios';

const baseUrl = 'https://swapi.co/api/';

export default {
  query: 'films/',
  filmList: [],

  async getList() {
    try {
      const filmList = await axios.get(baseUrl + this.query);
      const result = filmList.data.results;

      return result;
    } catch (err) {
      alert(err);
    }
  },

  async searchDetails(url) {
    try {
      const result = await axios.get(url);

      return result.data;
    } catch (err) {
      alert(err);
    }
  },

  get filmsArr() {
    return this.filmList;
  },

  set filmsArr(arr) {
    this.filmList = [...arr];
  },
};
