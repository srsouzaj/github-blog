import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export const ProfileSection = () => {
    return (
      <ProfileContainer>
        <ProfilePicture src="http://github.com/srsouzaj.png" />
        <ProfileDetails>
          <header>
            <h1>Jorge de Souza</h1>
            <ExternalLink text="Github" href="http://github.com/srsouzaj" />
          </header>
          <p>
            Formado em Sistema da Informação pela Universidade Santa Cecília.
            Graduado em Logística pela Etec Paula Souza. Atualmente estou focado em
            desenvolvimento Front-End com experiência profissional em TS |
            NextJS e ChakraUI.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              srsouzaj
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              Recrutaê
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              642 seguidores
            </li>
          </ul>
        </ProfileDetails>
      </ProfileContainer>
    );
}