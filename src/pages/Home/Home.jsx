//import { Link } from 'react-router-dom';
import { HomeList } from './Home.styled';

export const Home = () => {
  return (
    <HomeList>
      {/* {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })} */}
    </HomeList>
  );
};
