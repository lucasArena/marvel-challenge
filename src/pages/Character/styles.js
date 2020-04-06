import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px;
  max-width: 1200px;
  background: #eee;

  h1 {
    text-align: center;
    border-bottom: 1px solid #eee;
    color: #999;
    margin-bottom: 15px;
    border-top: 1px solid #999;
    padding-top: 15px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: #999;
  font-size: 24px;
  font-weight: bold;

  margin-bottom: 15px;

  img {
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    p {
      font-weight: normal;
    }

    span {
      margin-bottom: 20px;
    }
  }
`;
