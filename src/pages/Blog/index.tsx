import React from "react";
import Logo from "../../assets/logo/Logo.icon";
import { api } from "../../services/api/base.api";
import { PostCard } from "./components/PostCardList";
import { HeaderProfileSection } from "./components/HeaderProfile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./components/styles";
import { Spinner } from "../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export const BlogScreen = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getPosts = React.useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20label:published%20repo:${username}/${repoName}`
        );

        setPosts(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [posts]
  );

  React.useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <HeaderProfileSection />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SearchInput getPosts={getPosts} postLength={posts.length} />
          <PostListContainer>
            {posts.map((post) => (
              <PostCard key={post.number} post={post} />
            ))}
          </PostListContainer>
        </>
      )}
    </>
  );
};
