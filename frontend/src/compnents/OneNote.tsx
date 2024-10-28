import { useNavigate } from "react-router-dom";
import { Note, todaysNotes } from "../recoil";
import { useState } from "react";
import deleteIcon from "../assets/DeleteIcon.svg";
import axios from "axios";
import { BROSWER_URL } from "../config";
import { useRecoilState } from "recoil";

export const OneNote: React.FC<Note> = ({
  id,
  content,
  createdAt,
  updatedAt,
}) => {
  const navigate = useNavigate();
  const [notes, setNotes] = useRecoilState(todaysNotes);
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    navigate(`/home/note/${id}`);
  };
  const handleDelete = async (e: any) => {
    e.stopPropagation();
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
    await axios.delete(`${BROSWER_URL}/api/v1/note/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  };
  const date =
    createdAt.substring(0, 10) == updatedAt.substring(0, 10)
      ? createdAt.substring(0, 10)
      : updatedAt.substring(0, 10);
  return (
    <div
      className="border border-lightAlt rounded p-5 text-sm mb-5 cursor-pointer"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center justify-between mb-3`}>
        <div className="text-xs text-grey mt-1 mb-1">{date}</div>
        {isHovered ? (
          <img src={deleteIcon} alt="deleteIcon" onClick={handleDelete} />
        ) : (
          <></>
        )}
      </div>

      <div>
        {content.length >= 1000 ? content.substring(0, 800) + "..." : content}
      </div>
    </div>
  );
};
