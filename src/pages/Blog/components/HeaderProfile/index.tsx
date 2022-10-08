import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "../../../../components/Spinner";
import { useGetProfileData } from "../../../../hooks/useGetProfileData";

export const HeaderProfileSection = () => {
 const { isLoading, profileData} = useGetProfileData()

    return (
      <ProfileContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ProfilePicture src={profileData.avatar_url} />
            <ProfileDetails>
              <header>
                <h1>{profileData.name}</h1>
                <ExternalLink text="Github" href={profileData.html_url} />
              </header>
              <p>{profileData.bio}</p>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faGithub} />
                  {profileData.login}
                </li>

                {profileData.company && (
                  <li>
                    <FontAwesomeIcon icon={faBuilding} />
                    {profileData.company}
                  </li>
                )}

                <li>
                  <FontAwesomeIcon icon={faUserGroup} />
                  {profileData.followers} seguidores
                </li>
              </ul>
            </ProfileDetails>
          </>
        )}
      </ProfileContainer>
    );
}