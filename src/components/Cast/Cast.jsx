import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getMovieCredits } from '#services/api';
import { Actor } from '#components/Actor/Actor';
import css from './Cast.module.css';
import { Loader } from '#components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoader(true);
      try {
        const creditsResponse = await getMovieCredits(movieId);
        setCredits(creditsResponse.cast);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Error fetching movie details. Please try again later.');
        // setLoading(false);
      } finally {
        setLoader(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      <div>
        <h2>Cast</h2>
        <ul className={css.castItem}>
          {credits.map(actor => (
            <li className={css.castList} key={actor.id}>
              <Actor
                name={actor.name}
                character={actor.character}
                profile_path={actor.profile_path ? actor.profile_path : ''}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};

export default Cast;
