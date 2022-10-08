import { SearchInputContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchInputInterface {
  getPosts: (query?: string) => Promise<void>;
  postLength: number;
}

export const SearchInput = ({ getPosts, postLength }: SearchInputInterface) => {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchPosts = async(data: SearchFormInput) => {
    await getPosts(data.query);
  };

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span> {postLength} {postLength === 1 ? "publicação" : "publicações"} </span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchInputContainer>
  );
};
