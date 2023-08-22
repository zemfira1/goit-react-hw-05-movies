import { Link, useLocation } from 'react-router-dom';
import { Item, List, Image, Title } from './ListOfMovies.styled';
import PropTypes from 'prop-types';

export const ListOfMovies = ({ movies }) => {
  const location = useLocation();
  const BASE_URL = 'http://image.tmdb.org/t/p/w500';

  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Image src={BASE_URL + poster_path} alt={title} />
            <Title>{title ? title : '...'}</Title>
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
