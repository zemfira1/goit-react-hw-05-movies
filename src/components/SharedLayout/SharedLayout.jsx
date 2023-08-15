import { Outlet } from 'react-router-dom';
import {
  Header,
  Main,
  NavLinkEl,
  Navigation,
  Container,
  Line,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavLinkEl to="/">Home</NavLinkEl>
            <NavLinkEl to="/movies">Movies</NavLinkEl>
          </Navigation>
        </Container>
      </Header>
      <Line></Line>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
};
