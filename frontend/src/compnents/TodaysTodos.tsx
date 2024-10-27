import { useRecoilState, useRecoilValue } from "recoil";
import { isNewTodoLoading, todaysTodos, Todo } from "../recoil";
import { useEffect, useState } from "react";
import axios from "axios";
import { BROSWER_URL } from "../config";
import { Error } from "./Error";
import { OneTodo } from "./OneTodo";
import { SkeletonTodo } from "./SkeletonTodo";
import { NoData } from "./NoData";

export const TodaysTodos = () => {
  const [todos, setTodos] = useRecoilState(todaysTodos);
  const [error, setError] = useState<{ msg: string; isVisible: boolean }>({
    msg: "",
    isVisible: false,
  });
  const [isLoading, setisLoading] = useState(false);
  const isNewTodoLding = useRecoilValue(isNewTodoLoading);
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${BROSWER_URL}/api/v1/todo`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setTodos(res.data.todo);
        setisLoading(false);
      })
      .catch((error: any) => {
        setError({
          msg: error.response?.data.message || "Something went wrong",
          isVisible: true,
        });
        setisLoading(false);
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <SkeletonTodo />;
  }
  return (
    <div className="mb-5">
      {error.isVisible ? <Error errMsg={error.msg} /> : <></>}
      <div>
        {todos.length == 0 && !isNewTodoLding ? (
          <NoData title="No tasks." />
        ) : (
          <></>
        )}
        {todos.map((todo: Todo) => {
          return <OneTodo {...todo} key={todo.id} />;
        })}
        {isNewTodoLding ? (
          <div className="animate-pulse flex items-center mb-5">
            <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden border border-lightAlt rounded-full"></div>
            <div className="relative inline-flex items-center justify-center w-1/4 h-3 overflow-hidden bg-lightAlt ml-2 rounded "></div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
