import { useRecoilValue } from "recoil";
import { NoData } from "./NoData";
import { SubTitle } from "./SubTitle";
import Wrapper from "./Wrapper";
import { themeState } from "../recoil";
import darkSend from "../assets/dark_Send.svg";
import lightSend from "../assets/light_send.svg";
import { ChangeEvent, useState } from "react";

export const TodoWidget = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Array<String>>([]);
  const theme = useRecoilValue(themeState);

  const handleClick = () => {
    setTodos([...todos, input]);
    setInput("");
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
            <div className="w-full grow">
              {todos.map((todo) => {
                return <div>{todo}</div>;
              })}
            </div>
          )}
          <div className="w-full relative inline-block">
            <input
              onChange={handleInput}
              value={input}
              type="text"
              className="w-full text-sm placeholder:text-xs focus:outline-none placeholder:font-light px-8 py-3 mb-2 rounded bg-slate-50 dark:bg-slate-950"
              placeholder="Add a todo"
            />
            {theme == "dark" ? (
              <div
                className="absolute cursor-pointer top-3 right-3"
                onClick={handleClick}
              >
                <img src={darkSend} alt="send" />
              </div>
            ) : (
              <div>
                <img
                  className="absolute cursor-pointer top-3 right-3"
                  onClick={handleClick}
                  src={lightSend}
                  alt="send"
                />
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
