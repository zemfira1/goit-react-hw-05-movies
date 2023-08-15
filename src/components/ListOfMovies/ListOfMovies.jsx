import { Link } from 'react-router-dom';
import { Item, List, Title } from './ListOfMovies.styled';
import PropTypes from 'prop-types';

export const ListOfMovies = ({ movies }) => {
  return (
    <>
      <Title>Trending today</Title>
      <List>
        {movies.map(({ id, title }) => (
          <Item key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </Item>
        ))}
      </List>
    </>
  );
};

ListOfMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      to: PropTypes.string,
      movieId: PropTypes.number,
    })
  ),
};
