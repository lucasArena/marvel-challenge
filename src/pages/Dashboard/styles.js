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
`;
