import React from "react";
import { Todo } from "../recoil";
import todoDoneIcon from "../assets/todoDoneIcon.svg";
import todoNotDoneIcon from "../assets/todoNotDoneIcon.svg";

export const OneTodoDetailed: React.FC<Todo> = ({
  id,
  title,
  done,
  createdAt,
}) => {
  return (
    <div className="mb-8 text-sm">
      <div className="text-xs text-grey mb-3">
        {createdAt?.substring(0, 10)}
      </div>
      <div className="flex items-center">
        {done ? (
          <img src={todoDoneIcon} alt="todoDone" />
        ) : (
          <img src={todoNotDoneIcon} alt="todoNotDone" />
        )}
        <div className={`${done ? "line-through text-darkAlt" : ""} ml-2`}>
          {title}
        </div>
      </div>
    </div>
  );
};
