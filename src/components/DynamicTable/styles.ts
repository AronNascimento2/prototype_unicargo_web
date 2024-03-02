import styled from "styled-components";
type Props = { disabled?: boolean };
export const TableContainer = styled.div<Props>`
  table {
    border-collapse: collapse;
    align-items: center;
    width: 100%;
    cursor: pointer;
  }

  thead {
    border-bottom: 1px solid lightgrey;
  }

  th {
    height: 40px;
    background-color: #097969;
    color: #fff;
    justify-content: space-between;
    :hover {
      cursor: default;
    }
  }

  th,
  td {
    width: 80px;
    max-width: 80px;
    padding: 0.5rem;
    height: 50px;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgrey;
  }
  td {
    white-space: nowrap;
    width: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  tr.clicked {
    background-color: #2980b9;
    color: white; /* Adicione essa linha para garantir contraste */
  }
  tr {
    &:hover {
      background: #097969;
      color: #fff;
    }
  }
  .container-th {
    gap: 0.5rem;
    align-items: center;
    display: flex;
  }
  .icon-sort {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
  }
  .container-pagination {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    .page-text {
      font-size: 12px;
    }
  }
  .input-page-text {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .input-page {
      border-radius: 20px;
      outline: 0;
      border: 1px solid lightgray;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
  .buttons {
    border-radius: 50%;
    outline: 0;
    border: 0;
    height: 30px;
    width: 30px;
    color: #fff;
    background-color: #097969;
    &:hover {
      cursor: pointer;
    }
  }
  .buttons[disabled] {
    background-color: #ccc;
    cursor: not-allowed; /* Exemplo: mudar o cursor */
  }
`;
