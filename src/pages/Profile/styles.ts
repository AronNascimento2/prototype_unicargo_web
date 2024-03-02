import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid lightgray;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #fff;
  .person-container{
    width: 100%;
    height: 183px;
   background-color: #097969;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    .avatar{
        background-color: #ccc;
        width: 121px;
        height: 118px;
        border-radius: 50% ;
        background-image: url("erplogo.png");
    }
    p{
        font-size: 22px;
        margin-left: 1rem;
        color: #fff;
    }
  }
  .info-container{
    padding-left: 2rem;
    align-items: center;
    gap: 4rem;
    display: flex;
  }
  .info{
    width: 300px;
    border-bottom: 1px solid #ccc;
    .title{
        font-size: 16px;
        font-weight: 600;
        color: #ccc;
    }
    .description{
        font-weight: 600;
    }
  }
`;
