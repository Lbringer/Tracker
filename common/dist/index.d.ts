import { z } from "zod";
export declare const signupInput: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
}, {
    username: string;
    email: string;
    password: string;
}>;
export type SignupInputType = z.infer<typeof signupInput>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type SigninInputType = z.infer<typeof signinInput>;
export declare const createTodo: z.ZodObject<{
    title: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
}, {
    title: string;
}>;
export type CreateTodoType = z.infer<typeof createTodo>;
export declare const updateTodo: z.ZodObject<{
    done: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    done: string;
    id: string;
}, {
    done: string;
    id: string;
}>;
export type UpdateTodoType = z.infer<typeof updateTodo>;
export declare const createNote: z.ZodObject<{
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
}, {
    content: string;
}>;
export type CreateNoteType = z.infer<typeof createNote>;
export declare const updateNote: z.ZodObject<{
    content: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: string;
}, {
    id: string;
    content: string;
}>;
export type UpdateNoteType = z.infer<typeof updateNote>;
