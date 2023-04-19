import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';

// import Home from '../../pages/Home/Home';
// import Movies from '../../pages/Movies/Movies';
// import MovieDetails from '../MovieDetails/MovieDetails';
// import Layout from 'pages/Layout/Layout';
// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';

const Layout = lazy(() => import('../../pages/Layout/Layout'));
const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>

  );
};