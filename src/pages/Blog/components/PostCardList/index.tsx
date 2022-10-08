import { IPost } from "../..";
import { PostContainer } from "./styles";
import {relativeDateFormatter} from "../../../../utils/formatter"

interface PostProps{
  post: IPost
}


export function PostCard({post}: PostProps) {

  const dateFormmater = relativeDateFormatter(post.created_at)
  
  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{dateFormmater}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  );
}
