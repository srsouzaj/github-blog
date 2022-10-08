import * as z from "zod";

export const searchFormSchema = z.object({
  query: z.string(),
});

export type SearchFormInput = z.infer<typeof searchFormSchema>;
