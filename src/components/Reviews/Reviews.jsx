// components/MovieDetails/Reviews.js
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'; // to jest ok :)
import { useParams } from 'react-router-dom'; //brakuje hooka useLocation dla go-back
import { getMovieReviews } from '#services/api';
import { Loader } from '#components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoader(true);
      try {
        const reviewsResponse = await getMovieReviews(movieId);
        setReviews(reviewsResponse.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Error fetching movie details. Please try again later.');
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
        <h2>Reviews</h2>
        {/* Display reviews */}

        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>Content: {review.content}</p>
            </li>
          ))}
        </ul>
      </div>
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
      // Add more if needed
    })
  ),
};

export default Reviews;
