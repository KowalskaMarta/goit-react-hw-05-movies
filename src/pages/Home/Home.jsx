import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '#services/api';
import MoviesList from '#components/MoviesList/MoviesList';
import css from './Home.module.css';
import { Loader } from '#components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoader(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      {loader && <Loader />}
      <div>
        <h1 className={css.title}>Trending Movies</h1>
        <MoviesList movies={trendingMovies} />
      </div>
    </>
  );
};

export default Home;
