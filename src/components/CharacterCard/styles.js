import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 20px 25px;
  border-radius: 4px;
  justify-content: space-between;
  background: #fff;
  margin-bottom: 15px;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.2);
  }

  div {
    font-size: 16px;
    color: #999;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;

    img {
      margin-right: 15px;
      border-radius: 50%;
      background: #999;
      width: 64px;
      height: 64px;
    }

    &:nth-child(1) {
      span {
        margin-right: auto;
        text-align: center;
      }
    }
  }
`;
