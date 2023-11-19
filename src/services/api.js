import axios from 'axios';
import { API_BASE_URL, API_KEY } from './const';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.params = {api_key:API_KEY};

export const getTrendingMovies = async () => {
  try {
    const response = await axios('/trending/movie/day');
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMovieDetailsByID = async (movie_id) => {
    try {
      const response = await axios(`/movie/${movie_id}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };
  

  export const getMovieCredits = async (movie_id) => {
    try {
      const response = await axios(`/movie/${movie_id}/credits`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const getMovieReviews = async (movie_id) => {
    try {
      const response = await axios(`/movie/${movie_id}/reviews?language=en-US&page=1`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  
  export const fetchMovieByKeyword = async (search) => {
    const queryParams = `?query=${search}`;
    try {
      const response = await axios(`/search/movie${queryParams}`);
      return response.data.results;
    } catch (error) {
      throw new Error(error);
    }
  };


  // const options = {method: 'GET', headers: {accept: 'application/json'}};

  // fetch('https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));


// 

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTJiZmIyZGU1ZDFjZDg1NTZiZWY0YmE0NzY0YzkyMyIsInN1YiI6IjY1NTdjNWIxMDgxNmM3MDBjM2RjOTU1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IX1XW1nI2iT_zXKR3aGdhEGO9P1cMcN8fN8JXPMnxSw'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));