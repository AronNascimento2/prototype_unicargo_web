import React from "react";
import { Container, Wrapper } from "./styles";
import { Avatar } from "../../components/Avatar";

export const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="person-container">
          <Avatar />
          <p>Aron Nascimento</p>
        </div>
        <div className="info-container">
          <div className="info">
            <p className="title">Cargo</p>
            <p className="description">Desenvolvedor</p>
          </div>
          <div className="info">
            <p className="title">Email</p>
            <p className="description">aron@email.com</p>
          </div>
        </div>
        <div className="info-container">
          <div className="info">
            <p className="title">Data de nascimento</p>
            <p className="description">01/12/1992</p>
          </div>
          <div className="info">
            <p className="title">Telefone</p>
            <p className="description">(11)00000-0000</p>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
