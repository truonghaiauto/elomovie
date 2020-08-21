import React, {useState, useEffect} from 'react';
import axios from 'axios';
import url from '../../constants/IpAddress';

const api = axios.create({
  baseURL: url.getUrl.newestMovies,
});

export const getNewestMovies = function (callback) {
  api
    .get('/')
    .then((res) => {
      const data = res.data;
      return data;
    })
    .then((data) => callback(data))
    .catch((error) => console.error(error));
};

export default {getNewestMovies};
