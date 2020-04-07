import styled from 'styled-components';

export const Container = styled.div`
  background: #eee;
  padding: 50px 100px;
  min-height: 100vh;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex: 1;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin: 30px 0;

    span {
      color: #999;
    }
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const VisitedCharacter = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #999;
  margin-bottom: 20px;
`;
