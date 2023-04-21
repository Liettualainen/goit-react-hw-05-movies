import { useEffect, useState, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/moviesDB';

import { DetailBtn, DatailWrap, FilmCard, FilmInfo, FilmTitle, Info, InfoLink,} 
from './MovieDetails.styled';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  console.log(backLink);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieDetails(movieId);
        const data = response.data;
        setMovie(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [movieId]);

  const imgPath = `${imgUrl}${movie.poster_path}`;
  const movieUrl = movie.poster_path;

  return (
    <DatailWrap>
      <DetailBtn to={backLink.current}>Go back</DetailBtn>

      <FilmCard>
        <img src={movieUrl && imgPath} alt={movie.title} width={400} />
        <FilmInfo>
          <FilmTitle>{movie.title}</FilmTitle>
          <Info>
            <li>
              <InfoLink to="cast" >
                Cast
              </InfoLink>
            </li>
            <li>
              <InfoLink to="reviews" >
                Reviews
              </InfoLink>
            </li>
          </Info>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </FilmInfo>
      </FilmCard>
    </DatailWrap>
  );
};

export default MovieDetails;

// state={{ from: `${backLink}` }}