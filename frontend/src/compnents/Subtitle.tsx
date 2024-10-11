import React from "react";

type SubtitleProps = {
  title: string;
  link: string;
  onClick: () => void;
};

export const Subtitle: React.FC<SubtitleProps> = ({ title, link, onClick }) => {
  return (
    <div className="text-sm mb-2 mt-2">
      {title}
      <span className="underline font-bold cursor-pointer" onClick={onClick}>
        {link}
      </span>
    </div>
  );
};
