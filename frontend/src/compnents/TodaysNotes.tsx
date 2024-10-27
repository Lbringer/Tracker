import { useRecoilState } from "recoil";
import { Note, todaysNotes } from "../recoil";
import { useEffect, useState } from "react";
import axios from "axios";
import { BROSWER_URL } from "../config";
import { NoData } from "./NoData";
import { Error } from "./Error";
import { OneNote } from "./OneNote";
import { SkeletonNote } from "./SkeletonNote";

export const TodaysNotes = () => {
  const [notes, setNotes] = useRecoilState(todaysNotes);
  const [error, setError] = useState<{ msg: string; isVisible: boolean }>({
    msg: "",
    isVisible: false,
  });
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${BROSWER_URL}/api/v1/note/today`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setNotes(res.data.notes);
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
    return <SkeletonNote />;
  }
  if (notes.length == 0) {
    return (
      <div className="mt-10">
        <NoData title="No notes." />
      </div>
    );
  }
  return (
    <div>
      {error.isVisible ? <Error errMsg={error.msg} /> : <></>}
      {notes.map((note: Note) => {
        return <OneNote key={note.id} {...note} />;
      })}
    </div>
  );
};
