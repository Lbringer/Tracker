import React from "react";
import { TodoObject } from "../types";

type TodoProps = {
  todo: TodoObject;
  onClick: () => void;
};

export const Todo: React.FC<TodoProps> = ({ todo, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full bg-slate-50 dark:bg-slate-950 px-4 py-5 cursor-pointer rounded-md text-xs font-normal mt-2"
    >
      <span
        className={`${todo.isCompleted ? "line-through text-slate-500" : ""}`}
      >
        {todo.label}
      </span>
    </div>
  );
};
