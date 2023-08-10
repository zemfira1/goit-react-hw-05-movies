import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1900px;
  margin-inline: auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  font-size: 34px;
  color: #010101;
  background-color: #f0e68c;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  padding: 30px;
`;

export const NavLinkEl = styled(NavLink)`
  color: inherit;
  transition: color, 250ms;

  &.active {
    color: #de0b74;
  }
`;

export const Main = styled.main`
  background-color: #ffffe0;
  height: 100vh;
  padding: 20px;
`;
