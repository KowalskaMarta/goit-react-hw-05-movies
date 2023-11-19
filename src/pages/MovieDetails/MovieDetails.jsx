// components/MovieDetails/MovieDetails.js
import React, { useEffect, useState, Suspense } from 'react'; // to jest ok :)
import { useParams, Link, useLocation, Outlet } from 'react-router-dom'; //brakuje hooka useLocation dla go-back
import { getMovieDetailsByID } from '#services/api';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const detailsResponse = await getMovieDetailsByID(movieId);
        setMovieDetails(detailsResponse);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Error fetching movie details. Please try again later.');
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const userScore = Math.round(movieDetails.vote_average * 10);
  const genres = movieDetails.genres.map(genre => genre.name).join(' ');
  const location = useLocation;
  const prevPath = location.state?.from ?? '/movies';
  const backBtn = location.state?.from ?? '/';
  const poster = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;

  return (
    <div>
      <div className={css.backBtn}>
      <Link to={backBtn} state={{ from: prevPath }}>
      &#x2190; Come Back
      </Link>
      </div>
      <h1>
        {movieDetails.title} ({movieDetails.release_date.slice(0, 4)})
      </h1>

      <img src={poster} alt={movieDetails.title} />

      <p>User score: {userScore} %</p>
      <h2>Overwiew: </h2>
      <p>{movieDetails.overview}</p>

      <h2>Genres: </h2>
      <p>{genres}</p>


      <h3>Additional information</h3>

      <ul>
        <li>
          <Link to="cast" state={{ from: prevPath }}>
            CAST
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: prevPath }}>
            REVIEWS
          </Link>
        </li>
      </ul>

       <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
       </Suspense>

      {/* <Cast cast={credits} />  nie podoba mi się */}
      {/* <Reviews reviews={reviews} /> nie podoba mi się */}
    </div>
  );
};

// MovieDetails.Cast = Cast;
// MovieDetails.Reviews = Reviews;

export default MovieDetails;
