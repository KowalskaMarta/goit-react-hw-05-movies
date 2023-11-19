export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_BASE_URL = 'https://api.themoviedb.org/3';

export const API_ENDPOINTS = {
  TRENDING_MOVIES: '/trending/movie/day',
  MOVIE_DETAILS: '/movie/',
  SEARCH_MOVIE: '/search/movie',
};

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const ERROR_MESSAGE = 'Oops! Sorry, something went wrong...';