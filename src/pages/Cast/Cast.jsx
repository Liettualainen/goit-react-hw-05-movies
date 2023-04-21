import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieInfo } from 'services/moviesDB';

import { CastList } from './Cast.styled';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieInfo(movieId, 'credits');
        const data = response.data.cast;
        setCast(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <CastList>
      {cast.length > 0
        ? cast.map(({ character, profile_path, id }) => {
            return (
              <li key={id}>
                <img
                  src={`${imgUrl}${profile_path}`}
                  alt={character}
                  width={100}
                />
                <p>Actor: {character}</p>
              </li>
            );
          })
        : 'No casts in this movie   '}
    </CastList>
  );
};

export default Cast;