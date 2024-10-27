import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Note } from "../recoil";
import axios from "axios";
import { BROSWER_URL } from "../config";
import { Error } from "./Error";
import { SkeletonNoteDisplay } from "./SkeletonNoteDisplay";

export const NoteDisplay = () => {
  const { id } = useParams();
  const [note, setNote] = useState<Note>();
  const [error, setError] = useState<{ msg: string; isVisible: boolean }>({
    msg: "",
    isVisible: false,
  });
  const [isLoading, setisLoading] = useState<boolean>(false);
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${BROSWER_URL}/api/v1/note/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setNote(res.data);
        setisLoading(false);
      })
      .catch((error) => {
        setError({
          msg: error.response?.data.message || "Something went wrong",
          isVisible: true,
        });
        setisLoading(false);
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <SkeletonNoteDisplay />;
  }

  const date =
    note?.createdAt.substring(0, 10) == note?.updatedAt.substring(0, 10)
      ? note?.createdAt.substring(0, 10)
      : note?.updatedAt.substring(0, 10);
  return (
    <div className="px-10 lg:px-44 py-10 overflow-auto">
      {error.isVisible ? <Error errMsg={error.msg} /> : <></>}
      <div className="text-sm mb-5">{date}</div>
      <div>{note?.content}</div>
    </div>
  );
};
