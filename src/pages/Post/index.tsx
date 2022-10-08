import { useParams } from "react-router-dom";
import { useGetPostDetails } from "../../hooks/useGetPostDetails";
import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader"

export const PostScreen = () => {
    const { id } = useParams();
    const { isLoading, postData} = useGetPostDetails(id as string)
        
    return (
      <>
        <PostHeader isLoading={isLoading} postData={postData} />
        {!isLoading && <PostContent content={postData.body} />}
      </>
    );
}