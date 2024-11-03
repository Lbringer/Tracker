import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import checkLightIcon from "../assets/checkLightIcon.svg";
import addIconEditor from "../assets/addIconEditor.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BROSWER_URL } from "../config";
import { Error } from "./Error";
import { Loader } from "./Loader";
import { CreateNoteType, UpdateNoteType } from "@lbringer237/tracker-common";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export const TextEditor = () => {
  const [value, setValue] = useState<CreateNoteType>({ content: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ msg: string; isVisible: boolean }>({
    msg: "",
    isVisible: false,
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const [onEdit] = useState(id ? true : false);

  useEffect(() => {
    if (onEdit) {
      setIsLoading(true);
      axios
        .get(`${BROSWER_URL}/api/v1/note/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setValue({ content: res.data.content });
          setIsLoading(false);
        })
        .catch((error) => {
          setError({
            msg: error.response?.data.message || "Something went wrong",
            isVisible: true,
          });
          setIsLoading(false);
          console.log(error);
        });
    }
  }, []);

  const handleNewNote = async () => {
    console.log(value.content);
    try {
      setIsLoading(true);
      const res = await axios.post(`${BROSWER_URL}/api/v1/note`, value, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setIsLoading(false);
      navigate(`/home/note/${res.data.id}`);
    } catch (error: any) {
      setError({
        msg: error.response?.data.message || "Something went wrong",
        isVisible: true,
      });
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleEditNote = async () => {
    if (!onEdit) {
      return;
    }
    console.log(value.content);
    try {
      setIsLoading(true);
      const data: UpdateNoteType = { content: value.content, id: id as string };
      const res = await axios.put(`${BROSWER_URL}/api/v1/note`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setIsLoading(false);
      navigate(`/home/note/${res.data.id}`);
    } catch (error: any) {
      setError({
        msg: error.response?.data.message || "Something went wrong",
        isVisible: true,
      });
      setIsLoading(false);
      console.log(error);
    }
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-5 px-6 lg:px-24 w-full max-h-screen  overflow-x-visible overflow-y-auto">
      {error.isVisible ? <Error errMsg={error.msg} /> : <></>}
      <ReactQuill
        theme="snow"
        value={value.content}
        onChange={(html) => setValue({ content: html })}
        placeholder="Type here"
        modules={modules}
        formats={formats}
        className="font-mono"
      />
      <div className="w-full flex justify-end">
        <SaveBtn onClick={onEdit ? handleEditNote : handleNewNote} />
      </div>
    </div>
  );
};

type SaveBtn = {
  onClick: () => void;
};

export const SaveBtn: React.FC<SaveBtn> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-10 h-10 rounded-full bg-none hover:bg-dark  border border-dark relative bottom-8 left-5 cursor-pointer flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        src={isHovered ? checkLightIcon : addIconEditor}
        alt="AddIcon"
        className="transition-all duration-300"
      />
    </div>
  );
};
