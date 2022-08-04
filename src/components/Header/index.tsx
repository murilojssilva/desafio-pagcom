import { HeaderContainer } from "./styles";
import pagcomLogo from "../../assets/pagcom-logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <p>
        Seja um agente da <img src={pagcomLogo} alt="Logo da empresa Pagcom" />
      </p>
    </HeaderContainer>
  );
}
