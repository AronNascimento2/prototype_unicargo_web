import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  padding-bottom: 5rem;
  .div-logo {
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
    img {
      max-width: 50%;
      max-height: 90%;
    }
  }
 
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    width: 40%;
    max-width: 350px;
    .icon {
      padding-bottom: 0.5rem;
    }
    .title {
      color: #2980b9;
      font-size: 25px;
      font-weight: 600;
     
    }
    .buttons {
      width: 100%;
      gap: 1rem;
      flex-direction: column;
      justify-content: center;
      .button {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        font-size: 16px;
        margin: 0;
        width: 100%;
        height: 45px;
        font-size: 16px;
        padding: 14px 16px;
        border-radius: 8px;
        font-weight: 600;
      }
    }
    .error-message-container {
      background-color: #ffbaba;
      height: 40px;
      font-size: 16px;
      padding: 14px 16px;
      border-radius: 8px;
      width: 100%;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      .message {
        color: #ff3333;
        font-size: 14px;
        margin: 0;
      }
    }
   
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  width: 100%;

  .inputmask {
    width: 100%;
    height: 45px;
    font-size: 16px;
    padding: 14px 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
 
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  font-size: 16px;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;


`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  position: relative;

`;
export const TogglePasswordVisibility = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;
