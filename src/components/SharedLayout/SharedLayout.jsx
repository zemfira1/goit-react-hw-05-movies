import { Outlet } from 'react-router-dom';
import {
  Header,
  Main,
  NavLinkEl,
  Navigation,
  Container,
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
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
};
