import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContentContainer = styled.div`
  background: rgba(246, 246, 235, 1);
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    flex: 1;
  }
`;

export const Cover = styled.div`
  background: ${lighten(0.07, '#ea4228')};
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
