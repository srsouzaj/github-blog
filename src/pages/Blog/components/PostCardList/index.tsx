import { PostContainer } from "./styles";
import {relativeDateFormatter} from "../../../../utils/formatter"
import { PostInterface } from "../../../../models/interfaces/Post.interface";

interface PostsInterface {
  post: PostInterface;
}

export function PostCard({post}: PostsInterface) {

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
