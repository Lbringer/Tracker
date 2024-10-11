import React from "react";

type BtnProps = {
  title: string;
  onClick: () => void;
};

export const Btn: React.FC<BtnProps> = ({ title, onClick }) => {
  return (
    <button
      className="bg-dark text-light w-1/2 md:w-1/4 rounded text-light text-sm px-5 py-3"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
