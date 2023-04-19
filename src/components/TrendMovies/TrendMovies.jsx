import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getTrendsMovies } from 'services/moviesDB';

const TrendMovies = () => {
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
    <>
      <h1>Trending today</h1>
      <ul>
        {trends.map(el => {
          return (
            <li key={el.id}>
              <Link to={el.id}>{el.title || el.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TrendMovies;