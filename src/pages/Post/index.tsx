import React from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api/base.api";
import { IPost } from "../Blog";
import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader"

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export const PostScreen = () => {
    const [postData, setPostData] = React.useState<IPost>({} as IPost);
    const [isLoading, setIsLoading] = React.useState(true);

    const { id } = useParams();

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
    return (
      <>
        <PostHeader isLoading={isLoading} postData={postData} />
        {!isLoading && <PostContent content={postData.body} />}
      </>
    );
}