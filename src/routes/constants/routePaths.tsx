import {
  faCalendarCheck,
  faPeopleGroup,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { CustomersPage, LoginPage, SchedulesPage } from "../../pages";
import { ProfilePage } from "../../pages/Profile";

export const ROUTES_PATHS = [
  {
    path: "/Perfil",
    element: ProfilePage,
    title: "Perfil",
    label: "Perfil",
    isPrivate: true,
    Permissions: [],
    icon: faPerson,
  },

  {
    path: "/Historico",
    element: SchedulesPage,
    title: "Historico",
    label: "Histórico de Atendimentos",
    isPrivate: true,
    Permissions: [],
    icon: faCalendarCheck,
  },
  {
    path: "/Clientes",
    element: CustomersPage,
    title: "Clientes",
    label: "Clientes",
    isPrivate: true,
    Permissions: [],
    icon: faPeopleGroup,
  },

  {
    path: "/",
    element: LoginPage,
    title: "Login",
    isPrivate: false,
  },
];
