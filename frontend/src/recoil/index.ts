import { atom } from "recoil";

export const isSidebarOpen = atom({
  key: "isSidebarOpen",
  default: false,
});
export const isAddTodoClicked = atom({
  key: "isAddTodoClicked",
  default: false,
});
export const isNewTodoLoading = atom({
  key: "isNewTodoLoading",
  default: false,
});

export type Todo = {
  id: string;
  title: string;
  done: boolean;
  createdAt?: string;
};

export const todaysTodos = atom<Array<Todo>>({
  key: "todaysTodos",
  default: [],
});
export const allTodos = atom<Array<Todo>>({
  key: "allTodos",
  default: [],
});

export type Note = {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export const todaysNotes = atom<Array<Note>>({
  key: "todaysNotes",
  default: [],
});

export const allNotes = atom<Array<Note>>({
  key: "allNotes",
  default: [],
});
