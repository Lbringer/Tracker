import { useNavigate } from "react-router-dom";
import { Note } from "../recoil";

export const OneNote: React.FC<Note> = ({
  id,
  content,
  createdAt,
  updatedAt,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/home/note/${id}`);
  };
  const date =
    createdAt.substring(0, 10) == updatedAt.substring(0, 10)
      ? createdAt.substring(0, 10)
      : updatedAt.substring(0, 10);
  return (
    <div
      className="border border-lightAlt rounded p-5 text-sm mb-5 cursor-pointer"
      onClick={handleClick}
    >
      <div className="mb-5 text-xs text-grey">
        <div>{date}</div>
      </div>
      <div>
        {content.length >= 1000 ? content.substring(0, 800) + "..." : content}
      </div>
    </div>
  );
};
