import { useState } from "react";
import penFilledIcon from "../assets/penFilledIcon.svg";
import penNotFilledIcon from "../assets/penNotFilledIcon.svg";
import { useNavigate } from "react-router-dom";

export const AddNoteBtn = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="w-10 h-10 rounded-full bg-none hover:bg-dark  border border-dark fixed right-6 lg:right-36 bottom-10 cursor-pointer flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        navigate("/home/editor");
      }}
    >
      <img
        src={isHovered ? penFilledIcon : penNotFilledIcon}
        alt="AddIcon"
        className="transition-all duration-300"
      />
    </div>
  );
};
