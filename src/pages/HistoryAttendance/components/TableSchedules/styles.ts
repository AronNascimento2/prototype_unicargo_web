import styled from "styled-components";
type Props = { disabled?: boolean };
export const ScheduleTableContainer = styled.div<Props>`
  width: 100%;
  overflow: hidden;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #fff;
`;

export const WrapperTable = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  overflow: auto;
`;
