import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  padding-top: 1.5rem;
  padding-left: 1rem;
  padding-bottom: 1.5rem;

  flex-wrap: wrap;
  align-items: center;
  .datepicker {
    width: 220px;
    height: 40px;
    padding-right: 1rem;
    font-size: 14px;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    border: 1px solid lightgray;
  }

  .input-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  select {
    width: 200px;
    height: 40px;
  }

  .input-search {
    width: 250px;
    height: 40px;
    border-radius: 20px;
    outline: 0;
    border: 1px solid lightgray;
    padding-left: 1rem;
  }
`;
