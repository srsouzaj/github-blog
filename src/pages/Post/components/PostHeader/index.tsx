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

import { relativeDateFormatter } from "../../../../utils/formatter";
import { Spinner } from "../../../../components/Spinner";
import { PostInterface } from "../../../../models/interfaces/Post.interface";

interface PostHeaderInterface {
  postData: PostInterface;
  isLoading: boolean;
}

export const PostHeader = ({ postData, isLoading }: PostHeaderInterface) => {
  const navigate = useNavigate();
  const formattedDate = relativeDateFormatter(postData?.created_at);

  const goBack = () => {
    navigate("/");
  };

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              variant="iconLeft"
            />
            <ExternalLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user ? postData.user.login : "srsouzaj"}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} /> {postData.comments || 0}{" "}
              comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  );
};