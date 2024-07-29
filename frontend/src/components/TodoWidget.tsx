import { useRecoilValue } from "recoil";
import { NoData } from "./NoData";
import { SubTitle } from "./SubTitle";
import Wrapper from "./Wrapper";
import { themeState } from "../recoil";
import darkSend from "../assets/dark_Send.svg";
import lightSend from "../assets/light_send.svg";
import { ChangeEvent, useState } from "react";
import { TodoObject } from "../types";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";

export const TodoWidget = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Array<TodoObject>>([]);
  const theme = useRecoilValue(themeState);

  const onClickTodo = (id: string) => {
    const todo: TodoObject = todos.find((todo) => todo.id === id)!;
    todo.isCompleted = !todo.isCompleted;
    const filteredTodos = todos.filter((todo) => todo.id != id);

    if (!todo.isCompleted) {
      setTodos([todo, ...filteredTodos]);
    } else {
      setTodos([...filteredTodos, todo]);
    }
  };

  const handleClick = () => {
    if (input != "") {
      setTodos([...todos, { id: uuidv4(), label: input, isCompleted: false }]);
      setInput("");
    }
  };
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter" && input != "") {
      setTodos([...todos, { id: uuidv4(), label: input, isCompleted: false }]);
      setInput("");
    }
  };
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <div className="w-full grow  mt-1">
      <Wrapper>
        <SubTitle label={"Todo"} />
        <div className="w-full h-full flex flex-col">
          {todos.length === 0 ? (
            <NoData label={"No todos yet ...."} />
          ) : (
            <div className="w-full grow overflow-auto w-full h-10 mb-2">
              {todos.map((todo) => {
                return (
                  <Todo
                    onClick={() => {
                      onClickTodo(todo.id);
                    }}
                    key={todo.id}
                    todo={todo}
                  />
                );
              })}
            </div>
          )}
          <div className="w-full relative inline-block">
            <input
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              value={input}
              type="text"
              className="w-full text-sm placeholder:text-xs focus:outline-none placeholder:font-light px-8 py-3 mb-2 rounded-lg bg-slate-50 dark:bg-slate-950"
              placeholder="Add a todo"
            />
            {theme == "dark" ? (
              <div
                className="absolute cursor-pointer top-3.5 right-3"
                onClick={handleClick}
              >
                <img src={darkSend} alt="send" />
              </div>
            ) : (
              <div
                className="absolute cursor-pointer top-3.5 right-3"
                onClick={handleClick}
              >
                <img src={lightSend} alt="send" />
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
