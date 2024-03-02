import styled from "styled-components";

export const Container = styled.div`

 
`;


export const WrapperTable = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
`;
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  /* Estilos para o conteúdo do modal */
  .modalContent {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 30%;
    max-height: 80%;
    overflow-y: auto;
    position: relative;
 
  }

  /* Estilos para o botão de fechar o modal */
  .closeButton {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 40px;
    cursor: pointer;
  }
`;
