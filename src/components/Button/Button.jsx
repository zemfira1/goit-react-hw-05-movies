import { BsArrowLeft } from 'react-icons/bs';
import { ButtonEl } from './Button.styled';

export const Button = () => {
  return (
    <ButtonEl>
      <BsArrowLeft />
      <span>Go back</span>
    </ButtonEl>
  );
};
