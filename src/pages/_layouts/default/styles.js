import styled from 'styled-components';
import { lighten } from 'polished';

import Cover from '~/assets/cover-logo.png';

export const Wrapper = styled.div`
  flex: 1;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${Cover});
  background-color: ${lighten(0.07, '#ea4228')};
  min-height: 100%;
`;

export const Content = styled.div`
  width: 1200px;
  background: rgb(32, 32, 32);
`;
