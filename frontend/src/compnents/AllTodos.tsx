import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { allTodos, Todo } from "../recoil";
import axios from "axios";
import { BROSWER_URL } from "../config";
import { SkeletonTodo } from "./SkeletonTodo";
import { NoData } from "./NoData";
import { Error } from "./Error";
import { OneTodo } from "./OneTodo";
import { OneTodoDetailed } from "./OneTodoDetailed";

type AllTodosProps = {
  query: string;
};
export const AllTodos: React.FC<AllTodosProps> = ({ query }) => {
  const [todos, setTodos] = useRecoilState(allTodos);
  const [error, setError] = useState<{ msg: string; isVisible: boolean }>({
    msg: "",
    isVisible: false,
  });
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingNewTodos, setLoadingNewTodos] = useState(false);
  const loaderRef = useRef(null);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${BROSWER_URL}/api/v1/todo?queryString=${query}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.todos);
        setTodos(res.data.todos);
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

  let timeoutId: ReturnType<typeof setTimeout>;
  const debouncedFetchTodos = () => {
    clearInterval(timeoutId);
    timeoutId = setTimeout(() => {
      fetchTodos();
    }, 400);
  };

  const fetchTodos = () => {
    if (page == 1) {
      return;
    }
    console.log("fetching");
    setLoadingNewTodos(true);
    axios
      .get(`${BROSWER_URL}/api/v1/todo?page=${page}&queryString=${query}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.todos.length == 0) {
          setHasMore(false);
        } else {
          setTodos((todos) => [...todos, ...res.data.todos]);
          console.log(res.data.notes);
        }
        setLoadingNewTodos(false);
      })
      .catch((error: any) => {
        setError({
          msg: error.response?.data.message || "Something went wrong",
          isVisible: true,
        });
        setLoadingNewTodos(false);
        console.log(error);
      });
  };

  useEffect(() => {
    if (hasMore) {
      debouncedFetchTodos();
      console.log("here");
    }
  }, [page]);

  useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [isLoading, todos]);
  if (isLoading) {
    return (
      <div className="px-10 lg:px-20">
        <SkeletonTodo />
        <SkeletonTodo />
        <SkeletonTodo />
        <SkeletonTodo />
        <SkeletonTodo />
        <SkeletonTodo />
      </div>
    );
  }
  if (todos.length == 0) {
    return (
      <div className="mt-10">
        <NoData title="No todos." />
      </div>
    );
  }
  return (
    <div className="w-full px-10 lg:px-20 pt-5">
      {error.isVisible ? <Error errMsg={error.msg} /> : <></>}
      <div className="mt-1">
        {todos.map((todo: Todo) => {
          return <OneTodoDetailed key={todo.id} {...todo} />;
        })}
      </div>

      <div ref={loaderRef} className="flex justify-center mt-10">
        {loadingNewTodos ? (
          <div className="text-sm font-bold">Loading more todos...</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
