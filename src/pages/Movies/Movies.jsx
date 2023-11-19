import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByKeyword } from '#services/api';
import MoviesList from '#components/MoviesList/MoviesList';
import { SearchForm } from '#components/SearchForm/SearchForm';

import { Loader } from '#components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesName = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState();
  const [loader, setLoader] = useState(false);

  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };

  useEffect(() => {
    if (!moviesName) return;
    const getSearchMovie = async () => {
      setLoader(true);
      try {
        const response = await fetchMovieByKeyword(moviesName);
        setMovies(response);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    };
    getSearchMovie();
  }, [moviesName]);

  return (
    <>
    {loader && <Loader />}
      <SearchForm value={moviesName} onSearch={handleOnSubmit} />
      {movies?.length > 0 && (<MoviesList movies={movies} />)}
    </>
  );
};

export default Movies;