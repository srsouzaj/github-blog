import React from "react";
import { ProfileInterface } from "../models/interfaces/Profile.interface";
import { api } from "../services/api/base.api";

const username = import.meta.env.VITE_GITHUB_USERNAME;


export const useGetProfileData = () => {
  const [profileData, setProfileData] = React.useState<ProfileInterface>(
    {} as ProfileInterface
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

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

  return {
    profileData,
    isLoading,
  };
};
