import { DynamicTable } from "../../../../components/DynamicTable";
import { data } from "../../../../services/users";
import { ScheduleTableContainer, WrapperDetails } from "./styles";
import { Avatar } from "../../../../components/Avatar";
import { HeaderButtonsCustomers } from "../HeaderButtonsCustomers";

export const TableSchedules = () => {
  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Nome", accessor: "name" },
    { Header: "Cliente desde", accessor: "cpf" },
    { Header: "Cidade", accessor: "city" },
  ];
  const users = data;
  return (
    <ScheduleTableContainer>
      <HeaderButtonsCustomers />{" "}
      <div className="wrapper">
        <div className="wrapper-table">
          <DynamicTable data={users} columns={columns} />
        </div>{" "}
        <div className="details-container">
          <WrapperDetails>
            <div className="person-container">
              <Avatar />
              <p>Nome do Cliente</p>
            </div>
            <div className="info-container">
              <div className="info">
                <p className="title">Cliente desde</p>
                <p className="description">00/00/0000</p>
              </div>
              <div className="info">
                <p className="title">CPF:</p>
                <p className="description">000.000.000-00</p>
              </div>
            </div>
            <div className="info-container">
              <div className="info">
                <p className="title">Data de nascimento</p>
                <p className="description">00/00/0000</p>
              </div>

              <div className="info">
                <p className="title">Telefone</p>
                <p className="description">(11)00000-0000</p>
              </div>
            </div>
            <div className="info-container">
              <div className="info">
                <p className="title">Cidade</p>
                <p className="description">São Paulo</p>
              </div>

              <div className="info">
                <p className="title">Email</p>
                <p className="description">email@email.com</p>
              </div>
            </div>
          </WrapperDetails>
        </div>
      </div>
    </ScheduleTableContainer>
  );
};
