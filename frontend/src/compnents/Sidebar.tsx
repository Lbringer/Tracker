import React, { useState } from "react";
import menu from "../assets/menu.svg";
import userIcon from "../assets/userIcon.svg";

type SidebarProps = {
  name: string;
};

export const Sidebar: React.FC<SidebarProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`font-sans transform h-screen w-60  ${
        isOpen ? "translate-x-0 bg-light2" : "-translate-x-3/4 lg:w-50 bg-light"
      } transition-all duration-300 ease-in-out p-4 fixed lg:static`}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <div>
            <img
              src={userIcon}
              alt="userIcon"
              className="cursor-pointer w-3/4"
            />
          </div>
          <div className="text-sm font-medium ml-1">{name}</div>
        </div>
        <div>
          <img
            src={menu}
            alt="menu"
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>
    </div>
  );
};
