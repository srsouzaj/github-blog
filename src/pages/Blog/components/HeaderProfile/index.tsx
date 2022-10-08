import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { api } from "../../../../services/api/base.api";

const username = import.meta.env.VITE_GITHUB_USERNAME;
interface ProfileInterface {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  html_url: string;
  company?: string;
  followers: number;
}

export const HeaderProfileSection = () => {
const [profileData, setProfileData] = React.useState<ProfileInterface>({} as ProfileInterface);
const [isLoading, setIsLoading] = React.useState<boolean>(true)

const getProfileData = React.useCallback(async () => {
  try {
    setIsLoading(true);
    const response = await api.get(`/users/${username}`);

    setProfileData(response.data);
  } finally {
    setIsLoading(false);
  }
}, [profileData]);

React.useEffect(() => {
  getProfileData();
}, []);

    return (
      <ProfileContainer>
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
      </ProfileContainer>
    );
}