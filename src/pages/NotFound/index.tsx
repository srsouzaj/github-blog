import NotFoundIcon from "../../assets/notFound";
import { NotFoundContainer } from "./styles";

export const NotFound = () => {
    return (
      <NotFoundContainer>
        <NotFoundIcon />
        <h1> A página que você procura não está disponível</h1>
      </NotFoundContainer>
    );
}