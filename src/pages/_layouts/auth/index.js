import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, ContentContainer, Cover } from './styles';

import CoverLogo from '~/assets/cover-logo.png';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <ContentContainer>{children}</ContentContainer>
      <Cover>
        <img src={CoverLogo} alt="Logo cover" />
      </Cover>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
