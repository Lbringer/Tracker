import React from "react";

type BtnProps = {
  onClick: () => void;
  title: string;
};
export const Btn: React.FC<BtnProps> = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm font-medium w-3/5 mr-2 text-slate-950 dark:text-slate-200 border border-slate-950 dark:border-slate-400 rounded py-3 
      hover:bg-slate-950 hover:text-slate-50 dark:hover:text-slate-950 dark:hover:bg-slate-50"
    >
      {title}
    </button>
  );
};
