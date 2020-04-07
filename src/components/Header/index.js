import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowLeft } from 'react-icons/fi';
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

export default function Header({ initialPage }) {
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
          {!initialPage && (
            <ButtonGoBack type="button" onClick={() => history.goBack()}>
              <FiArrowLeft color="#FFF" size={24} />
              <span>Voltar</span>
            </ButtonGoBack>
          )}
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

Header.propTypes = {
  initialPage: PropTypes.bool,
};

Header.defaultProps = {
  initialPage: false,
};
