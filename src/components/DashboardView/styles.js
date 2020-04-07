import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.div`
  display: flex;
  input {
    flex: 1;
    border-radius: 4px;
    padding: 15px 20px;

    &::placeholder {
      color: #999;
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 900px) {
    margin-bottom: 30px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  span {
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
    color: #ed4325;
  }
`;

export const PreviousPage = styled.button`
  background: #ed4325;
  border-radius: 4px;
  padding: 5px 10px;
  display: ${(props) => (props.firstPage ? 'none' : 'block')};
`;

export const ForwardPage = styled.button`
  background: #ed4325;
  padding: 5px 10px;
  border-radius: 4px;
  display: ${(props) => (props.lastPage ? 'none' : 'block')};
`;
