import PropTypes from 'prop-types';
import { ActorData, Image, Item, Name } from './CastListItem.styled';

export const CastListItem = ({ name, character, profile_path }) => {
  const BASE_URL = 'http://image.tmdb.org/t/p/w185/';

  return (
    <Item>
      <Image src={BASE_URL + profile_path} alt={name} />
      <ActorData>
        <Name>{name}</Name>
        <p>Character: {character}</p>
      </ActorData>
    </Item>
  );
};

CastListItem.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};
