import Logo from "../../assets/logo/Logo.icon"
import { Post } from "./components/Post";
import { ProfileSection } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./components/styles";

export const BlogScreen = () => {
    return (
      <>
        <ProfileSection />
        <SearchInput />
        <PostListContainer>
          <Post />
          <Post />
          <Post />
          <Post />
        </PostListContainer>
      </>
    );
}