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
  .select-container{
    display: flex;
    align-items: center;
    gap: 5px;
  }
  select{
    width: 300px;
    height: 30px;
  }
  .input-radio{
    display: flex;
    align-items: center;
    
  }
  .input-search {
    width: 250px;
    height: 40px;
    border-radius: 20px;
    outline: 0;
    border: 1px solid lightgray;
    padding-left: 1rem;
  }
`
