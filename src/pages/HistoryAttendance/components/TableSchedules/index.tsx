import { DynamicTable } from "../../../../components/DynamicTable";
import { ScheduleTableContainer } from "./styles";
import { data } from "../../../../services/users";
import { HeaderButtonsHistory } from "../HeaderButtons";

export const TableSchedules = () => {
  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Nome", accessor: "name" },
    { Header: "CPF", accessor: "cpf" },
    { Header: "Motivo do contato", accessor: "reason" },
    { Header: "Data do Atendimento", accessor: "date" },
    { Header: "Finalizado por", accessor: "finishedBy" },
  ];
  const users = data;
  return (
    <ScheduleTableContainer>
      <HeaderButtonsHistory />
      <DynamicTable data={users} columns={columns} />
    </ScheduleTableContainer>
  );
};
