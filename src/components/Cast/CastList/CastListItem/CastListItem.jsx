import PropTypes from 'prop-types';
import { ActorData, Image, Item, Name } from './CastListItem.styled';

export const CastListItem = ({ name, character, profile_path }) => {
  const BASE_URL = 'http://image.tmdb.org/t/p/w185/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <Item>
      <Image
        src={profile_path ? BASE_URL + profile_path : defaultImg}
        alt={name}
      />
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
