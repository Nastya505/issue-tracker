import { z } from "zod";

// Раньше мы называли объект для валидации schema, но в больших
// проектах у нас может быть множество схем для разных задач.
// Поэтому назовем ее более осмысленно.
export const createIssueSchema = z.object({
  title: z.string({ required_error: "Title is required" }).min(1, "Title must be at least 1 character").max(255),
  description: z.string({ required_error: "Description is required" }).min(1, "Description must be at least 1 character")
});

export type IssueForm = z.infer<typeof createIssueSchema>;


export interface IIssue{
  id: number;
  title: string;
  description: string;
  
}