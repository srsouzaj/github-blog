export interface SearchInputInterface {
  getPosts: (query?: string) => Promise<void>;
  postLength: number;
}
