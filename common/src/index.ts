import { z } from "zod";

export const signupInput = z.object({
  usernmae: z.string(),
  email: z.string().email(),
  password: z.string(),
});
export type SignupInputType = z.infer<typeof signupInput>;

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string(),
});
export type SigninInputType = z.infer<typeof signinInput>;

export const createTodo = z.object({
  title: z.string(),
});
export type CreateTodoType = z.infer<typeof createTodo>;

export const updateTodo = z.object({
  done: z.string(),
  id: z.string(),
});
export type UpdateTodoType = z.infer<typeof updateTodo>;

export const createNote = z.object({
  content: z.string(),
});
export type CreateNoteType = z.infer<typeof createNote>;

export const updateNote = z.object({
  content: z.string(),
  id: z.string(),
});
export type UpdateNoteType = z.infer<typeof updateNote>;
