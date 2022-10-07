import { HeaderContainer } from "./styles";
import LogoSrc from "../../assets/logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoSrc} alt="" />
      
    </HeaderContainer>
  );
}
