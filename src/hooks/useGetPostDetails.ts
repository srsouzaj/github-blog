import React from "react";
import { PostInterface } from "../models/interfaces/Post.interface";

import { api } from "../services/api/base.api";


const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export const useGetPostDetails = ( id: string) => {
    const [postData, setPostData] = React.useState<PostInterface>({} as PostInterface);
    const [isLoading, setIsLoading] = React.useState(true);

const getPostDetails = React.useCallback(async () => {
  
  try {
    setIsLoading(true);

    const response = await api.get(
      `/repos/${username}/${repoName}/issues/${id}`
    );

    setPostData(response.data);
  } finally {
    setIsLoading(false);
  }
}, [postData]);

React.useEffect(() => {
  getPostDetails();
}, []);

return {
    postData, 
    isLoading

}

}