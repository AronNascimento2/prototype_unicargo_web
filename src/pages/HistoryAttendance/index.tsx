import React from "react";
import { Container, WrapperTable } from "./styles";
import { TableSchedules } from "./components/TableSchedules";

export const SchedulesPage: React.FC = () => {

  return (
    <Container>
      <WrapperTable>
        <TableSchedules />
      </WrapperTable>
    </Container>
  );
};
