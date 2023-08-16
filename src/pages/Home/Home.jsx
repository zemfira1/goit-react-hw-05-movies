import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../servises/api';
import { ListOfMovies } from 'components/ListOfMovies';
import { Loader } from 'components/Loader';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMoviesData = async () => {
      try {
        setIsLoading(true);
        setMovies(await getTrendingMovies());
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMoviesData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {movies.length !== 0 && (
        <>
          <Title>Trending today</Title>
          <ListOfMovies movies={movies} />
        </>
      )}
      {error && alert('Sorry, something is wrong!')}
    </>
  );
};

export default Home;
