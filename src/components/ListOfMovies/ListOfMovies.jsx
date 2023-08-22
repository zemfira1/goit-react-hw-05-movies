import { Link, useLocation } from 'react-router-dom';
import { Item, List, Image } from './ListOfMovies.styled';
import PropTypes from 'prop-types';

export const ListOfMovies = ({ movies }) => {
  const location = useLocation();
  const BASE_URL = 'http://image.tmdb.org/t/p';

  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <Image src={BASE_URL + poster_path} alt={title} />
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </Item>
      ))}
    </List>
  );
};

ListOfMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      to: PropTypes.string,
      movieId: PropTypes.number,
      poster_path: PropTypes.string,
    })
  ),
};
