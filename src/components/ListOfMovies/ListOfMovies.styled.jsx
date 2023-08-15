import styled from '@emotion/styled';

export const Title = styled.h1`
  margin-bottom: 12px;
  font-size: 44px;
  font-weight: 400;
`;

export const List = styled.ul`
  margin-left: 24px;
  width: 500px;
`;

export const Item = styled.li`
  margin-bottom: 8px;
  font-size: 20px;
  transition: color 50ms linear;

  &:hover,
  :focus {
    color: #de0b74;
  }
`;
