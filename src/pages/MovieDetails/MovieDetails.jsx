import { Loader } from 'components/Loader';
import { MovieDetailsItem } from 'components/MovieDetailsItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'servises/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const getMovieDetailsData = async () => {
      try {
        setIsLoading(true);
        setMovieDetails(await getMovieDetails(movieId));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetailsData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <MovieDetailsItem movieDetails={movieDetails} />
      {error && alert('Sorry, something is wrong!')}
    </>
  );
};
