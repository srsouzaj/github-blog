import { HeaderContainer } from "./styles";
import LogoSrc from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={LogoSrc} alt="" />
      </Link>
    </HeaderContainer>
  );
}
