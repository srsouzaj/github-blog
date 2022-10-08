import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ExternalLink } from "../../../../components/ExternalLink"
import { PostHeaderContainer } from "./styles"
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faComment,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const PostHeader = () => {

    const goBack = () => {
    const navigate = useNavigate()
    navigate(-1)
    }

    return (
      <PostHeaderContainer>
        <header>
          <ExternalLink
            as="button"
            onClick={goBack}
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            text="Voltar"
            href="#"
            variant="iconLeft"
          />
          <ExternalLink text="Ver no Github" href="#" target="_blank" />
        </header>

        <h1>Javascript data types and data structures</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            srsouzaj
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            há 01 dia(s)
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </li>
        </ul>
      </PostHeaderContainer>
    );
}