import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(2, "Title is required.").max(100),
  content: z.string().min(12, "Descripton is required.").max(1000),
});
