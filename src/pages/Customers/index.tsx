import React from "react";
import { Container, WrapperTable } from "./styles";
import { TableSchedules } from "./components/TableCustomers";

export const CustomersPage: React.FC = () => {
  return (
    <Container>
      <WrapperTable>
        <TableSchedules />
      </WrapperTable>
    </Container>
  );
};
