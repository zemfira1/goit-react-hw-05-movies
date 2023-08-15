import styled from '@emotion/styled';

export const ButtonEl = styled.button`
  margin-bottom: 12px;
  height: auto;
  width: auto;
  padding: 8px;
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
  font-size: 18px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.3),
    0px 4px 5px 0px rgba(0, 0, 0, 0.3), 0px 1px 10px 0px rgba(0, 0, 0, 0.3);

  &:hover,
  :focus {
    box-shadow: 0px 2px 4px -1px rgba(225, 77, 114, 0.4),
      0px 4px 5px 0px rgba(225, 77, 114, 0.4),
      0px 1px 10px 0px rgba(225, 77, 114, 0.4);
  }
`;
