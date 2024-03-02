import {
  faArrowsRotate,
  faPersonCirclePlus,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const HeaderButtonsCustomers = () => {
  return (
    <Container>
      <DynamicButton text="Atualizar" icon={faArrowsRotate} />
      <input className="input-search" type="text" placeholder="Buscar" />

      <DynamicButton text="Cadastro de clientes" icon={faScroll} />
      <DynamicButton
        text="Gerenciamento de contratos"
        icon={faPersonCirclePlus}
      />
    
    </Container>
  );
};
