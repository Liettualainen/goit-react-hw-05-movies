import React from 'react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieInfo } from 'services/moviesDB';

import { ReviewsText } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieInfo(movieId, 'reviews');
        const data = response.data.results;
        setReviews(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <ReviewsText>{content}</ReviewsText>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};

export default Reviews;
