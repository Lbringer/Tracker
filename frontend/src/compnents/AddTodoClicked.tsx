import { useRecoilState } from "recoil";
import { isAddTodoClicked, isNewTodoLoading, todaysTodos } from "../recoil";
import { useState } from "react";
import { BROSWER_URL } from "../config";
import axios from "axios";
import { Error } from "./Error";
import { CreateTodoType } from "@lbringer237/tracker-common";

export const AddTodoClicked = () => {
  const [, setIsClicked] = useRecoilState(isAddTodoClicked);
  const [, setTodos] = useRecoilState(todaysTodos);
  const [data, setData] = useState<CreateTodoType>({
    title: "",
  });
  const [, setIsLoading] = useRecoilState(isNewTodoLoading);
  const [error, setError] = useState<{ msg: string; isVisible: boolean }>({
    msg: "",
    isVisible: false,
  });
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setIsClicked(false);
      const res = await axios.post(`${BROSWER_URL}/api/v1/todo`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setTodos((todos) => [...todos, res.data]);
      setIsLoading(false);
    } catch (error: any) {
      setError({
        msg: error.response?.data.message || "Something went wrong",
        isVisible: true,
      });
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="mt-5">
      {error.isVisible ? <Error errMsg={error.msg} /> : <></>}
      <input
        autoFocus
        type="text"
        placeholder="Go to gym"
        className="border border-darkAlt rounded bg-light focus:outline-none px-4 py-2 w-full mb-4 mt-1 text-sm placeholder:text-xs"
        onChange={(e) => setData({ title: e.target.value })}
      />
      <div className="w-full flex justify-end items-center">
        <button
          onClick={() => setIsClicked((isClicked) => !isClicked)}
          className="border border-dark text-dark hover:bg-dark hover:text-light rounded text-xs px-4 py-2 transition-all duration-100 mr-2"
        >
          Cancel
        </button>
        <button
          className={`${
            data.title.length == 0 ? "bg-darkAlt" : "bg-dark"
          } text-light rounded text-light text-xs px-4 py-2`}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
