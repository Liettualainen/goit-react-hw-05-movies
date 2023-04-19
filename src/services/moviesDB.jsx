import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '3755b5a74791c7c24db924897f5b67df';

function getTrendsMovies() {
  return axios.get(`${BASE_URL}trending/all/day`, {
    params: {
      api_key: KEY,
    },
  });
}

function getSearchMovies(query) {
  return axios.get(`${BASE_URL}search/movie`, {
    params: {
      api_key: KEY,
      query,
    },
  });
}

function getMovieDetails(id) {
  return axios.get(`${BASE_URL}movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });
}

function getMovieInfo(id, info) {
  return axios.get(`${BASE_URL}movie/${id}/${info}`, {
    params: {
      api_key: KEY,
    },
  });
}

export { getTrendsMovies, getSearchMovies, getMovieDetails, getMovieInfo };
