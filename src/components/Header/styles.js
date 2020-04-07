import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  height: 84px;
  background: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  flex: 1;
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MainLogo = styled.button`
  img {
    height: 70px;
  }

  background: transparent;
`;

export const ButtonGoBack = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-left: 30px;
  padding: 10px 25px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: #ed4325;
  border-radius: 4px;

  svg {
    margin-right: 5px;
  }

  @media only screen and (max-width: 900px) {
    background: transparent;

    svg {
      background: #ed4325;
    }

    span {
      display: none;
    }
  }
`;

export const SignoutButton = styled.button`
  padding: 10px 15px;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  background: #ed4325;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${lighten(0.05, '#ed4325')};
  }
`;
