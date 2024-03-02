import styled from "styled-components";
import { SidebarProps } from "./types";

export const Sidebar = styled.div<SidebarProps>`
  background-color: #fff;
  top: 0;
  left: 0;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1); /* Sombra desejada */
  overflow-y: auto;
  transition: left 0.3s ease-in-out;
  .container-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 300px;
    height: 178px;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MenuItem = styled.li<SidebarProps>`
  padding: 15px;
  display: flex;
  gap: 0.5rem;
  &.disabled {
    color: #ccc;
    pointer-events: none; /* Desabilitar eventos de clique */
    &:hover {
      cursor: not-allowed;
    }
  }

  &.activated {
    background-color: #097969;
    color: white;
    transition: box-shadow 0.3s ease; /* Adiciona uma transição suave */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    transition: box-shadow 0.3s ease; /* Adiciona uma transição suave */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    color: #fff;
    background-color: #097969;
    cursor: pointer;
  }
  &.activated {
    background-color: #097969;
    color: white;
  }
  /* Estiliza o último item */
  &:last-child {
    flex: 1;
    align-items: end;
  }

`;

export const MenuIcon = styled.div`
  width: 18px;
  height: 1px;
  background-color: #555;
  margin: 4px 0;
  border-radius: 1px;
`;

export const SidebarWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
