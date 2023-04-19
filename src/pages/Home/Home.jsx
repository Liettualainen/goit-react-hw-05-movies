import React from 'react';
import { useState, useEffect } from 'react';
import { getTrendsMovies } from '../../services/moviesDB';

import { MovieItem, MovieTitle, MovieList, MovieLink } from './Home.styled';

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function feetchMovies() {
      try {
        const response = await getTrendsMovies();
        const results = response.data.results;
        setTrends(results);
      } catch (err) {
        console.log(err);
      }
    }
    feetchMovies();
  }, []);

  return (
    <div>
      <MovieTitle>TRENDING NOW</MovieTitle>
      <MovieList>
        {trends.map(el => {
          return (
            <MovieItem key={el.id}>
              <MovieLink to={`movies/${el.id}`} state={{ from: '/' }}>
                {el.title || el.name}
              </MovieLink>
            </MovieItem>
          );
        })}
      </MovieList>
    </div>
  );
};

export default Home;