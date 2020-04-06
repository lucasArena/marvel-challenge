import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 320px;
    }

    input {
      padding: 20px 25px;
      border-radius: 8px;
      margin-bottom: 20px;
      border: 1px solid #eee;
      align-self: stretch;
      font-size: 18px;
      color: #999;

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: #ef4327;
      font-size: 15px;
      font-weight: bold;
      text-align: center;
      margin-bottom: auto;
      margin-bottom: 20px;
    }
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  disabled: props.loading,
}))`
  align-self: stretch;
  padding: 20px 30px;
  background: #ed4325;
  border-radius: 8px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;

  &:disabled {
    opacity: 0.7;
  }
`;
