import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, Content } from './styles';

import Header from '~/components/Header';

export default function DefaultLayout({ children, initialPage }) {
  return (
    <Wrapper>
      <Header initialPage={initialPage} />
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  initialPage: PropTypes.bool,
};

DefaultLayout.defaultProps = {
  initialPage: true,
};
