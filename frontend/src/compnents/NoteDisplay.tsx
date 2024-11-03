import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Note } from "../recoil";
import axios from "axios";
import { BROSWER_URL } from "../config";
import { Error } from "./Error";
import { SkeletonNoteDisplay } from "./SkeletonNoteDisplay";
import deleteIcon from "../assets/DeleteIcon.svg";
import editNoteIcon from "../assets/editNoteIcon.svg";
import { Loader } from "./Loader";

export const NoteDisplay = () => {
  const { id } = useParams();
  const [note, setNote] = useState<Note>();
  const navigate = useNavigate();
  const [error, setError] = useState<{ msg: string; isVisible: boolean }>({
    msg: "",
    isVisible: false,
  });
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
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
      : "Edited: " + note?.updatedAt.substring(0, 10);

  const handleDelete = async () => {
    setIsDeleting(true);
    await axios.delete(`${BROSWER_URL}/api/v1/note/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    navigate("/home/today");
    setIsDeleting(false);
  };
  const handleEdit = async (e: any) => {
    e.stopPropagation();
    navigate(`/home/editor/${id}`);
  };
  if (isDeleting) {
    return <Loader />;
  }
  return (
    <div className="px-10 lg:px-20 py-10 overflow-auto w-full ql-snow">
      {error.isVisible ? <Error errMsg={error.msg} /> : <></>}
      <div className="mb-5 flex items-center justify-between">
        <div className="text-sm ">{date}</div>
        <div className="flex items-start">
          <img
            src={editNoteIcon}
            alt="editNoteIcon"
            onClick={handleEdit}
            className="cursor-pointer"
          />
          <img
            src={deleteIcon}
            alt="deleteIcon"
            onClick={handleDelete}
            className="cursor-pointer ml-5"
          />
        </div>
      </div>
      <div
        className="ql-editor p-0 pb-5 h-fit"
        dangerouslySetInnerHTML={{ __html: note?.content as string }}
      ></div>
    </div>
  );
};
