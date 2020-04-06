import React from 'react';
import { useDispatch } from 'react-redux';

import history from '~/services/history';

import {
  Wrapper,
  Container,
  LogoContainer,
  MainLogo,
  ButtonGoBack,
  SignoutButton,
} from './styles';
import Logo from '~/assets/logo.png';

import { singOut } from '~/store/modules/auth/actions';

export default function Header({ initialPage = true }) {
  const dispatch = useDispatch();

  function handleSignout() {
    dispatch(singOut());
  }

  function handleMenu() {
    history.push('/dashboard');
  }

  return (
    <Wrapper>
      <Container>
        <LogoContainer>
          <MainLogo type="button" onClick={handleMenu}>
            <img src={Logo} alt="Logo principal" />
          </MainLogo>
          <ButtonGoBack type="button" onClick={() => history.goBack()}>
            Voltar
          </ButtonGoBack>
        </LogoContainer>
        <div>
          <SignoutButton type="button" onClick={handleSignout}>
            Sair da aplicação
          </SignoutButton>
        </div>
      </Container>
    </Wrapper>
  );
}
