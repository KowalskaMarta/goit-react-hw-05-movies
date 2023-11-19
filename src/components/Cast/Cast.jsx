import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '#services/api';
import { Actor } from '#components/Actor/Actor';
import css from './Cast.module.css';
import { Loader } from '#components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoader(true);
      try {
        const creditsResponse = await getMovieCredits(movieId);
        setCredits(creditsResponse.cast);
      } catch (error) {
        console.error('Error fetching movie details:', error);
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
