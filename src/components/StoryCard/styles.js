import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  background: #fff;
  padding: 15px 20px;
  transition: box-shadow 0.6s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StoryContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  color: #999;
  font-size: 18px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    flex: 1;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    span {
      font-weight: bold;
      font-size: 20px;
    }
  }
`;
