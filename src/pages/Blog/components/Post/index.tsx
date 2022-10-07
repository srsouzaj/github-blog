import { PostContainer } from "./styles";


export function Post() {
  
  return (
    <PostContainer to={"/post/1"}>
      <div>
        <strong>Olha isso</strong>
        <span>Há dois dias</span>
      </div>
      <p>
        Formado em Sistema da Informação pela Universidade Santa Cecília.
        Graduado em Logística pela Etec Paula Souza. Fiz transição de carreira
        para programação. Atualmente estou focado em desenvolvimento Front-End
        com experiência profissional em TS | NextJS e ChakraUI.
      </p>
    </PostContainer>
  );
}
