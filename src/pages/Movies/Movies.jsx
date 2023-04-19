import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchMovies } from '../../services/moviesDB';

import { MoviesInput, SearchButton, FormMovies } from './Movies.styled';
import { MovieItem, MovieList, MovieLink } from '../../pages/Home/Home.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    async function fetchMovies() {
      const response = await getSearchMovies(query);
      const results = response.data.results;
      setMovies(results);
      try {
        getSearchMovies(query);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.elements.query.value = '';
  };
  return (
    <main>
      <FormMovies onSubmit={handleSubmit}>
        <MoviesInput type="text" name="query" />
        <SearchButton type="submit">search</SearchButton>
      </FormMovies>
      <MovieList>
        {movies.map(el => {
          return (
            <MovieItem key={el.id}>
              <MovieLink
                to={`${el.id}`}
                state={{ from: `/movies?query=${query}` }}
              >
                <p>{el.title}</p>
              </MovieLink>
            </MovieItem>
          );
        })}
      </MovieList>
    </main>
  );
};

export default Movies;