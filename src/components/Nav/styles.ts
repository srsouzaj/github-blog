import styled from "styled-components";
import headerBg from "/headerBg.png";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 5rem;
  }

  @media (max-width: 520px) {
   background-size: 0%;
   height: 15rem;
  }
`;
