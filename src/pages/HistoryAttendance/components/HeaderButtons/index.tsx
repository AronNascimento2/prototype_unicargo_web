import {
  faArrowsRotate,
  faFilter,

} from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const HeaderButtonsHistory= () => {
  return (
    <Container>
      <DynamicButton text="Atualizar" icon={faArrowsRotate} />
      <input className="input-search" type="text" placeholder="Buscar" />

      <DynamicButton text="Filtrar" icon={faFilter} />
      
    
    </Container>
  );
};
