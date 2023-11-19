import noPhoto from './no_user.png';

import PropTypes from 'prop-types';

import css from './Actor.module.css';

export const Actor = ({ name, character, profile_path }) => {
  const photoActor = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : noPhoto;

  return (
    <>
   
      <img className={css.castImg} src={photoActor} alt={name} />
      <div className={css.castActor__Desc}>
      <p className={css.castActor__Name}>{name}</p>
      <p className={css.castActor__Character}>Character: {character}</p>
      </div>
      
    </>
  );
};

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
};

