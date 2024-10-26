import { useState } from "react";
import addIcon from "../assets/addIcon.svg";
import addFillIcon from "../assets/addFillIcon.svg";
import { useRecoilState } from "recoil";
import { isAddTodoClicked } from "../recoil";

export const AddTodoNotClicked = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [, setIsClicked] = useRecoilState(isAddTodoClicked);
  return (
    <div
      className="mt-5 w-full text-grey hover:text-dark cursor-pointer text-sm flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked((isClicked) => !isClicked)}
    >
      <img
        src={isHovered ? addFillIcon : addIcon}
        alt="AddIcon"
        className="transition-all duration-300"
      />
      <span className="ml-2">Add task</span>
    </div>
  );
};
