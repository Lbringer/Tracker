import React from "react";

type SubTitleProps = {
  label: string;
};

export const SubTitle: React.FC<SubTitleProps> = ({ label }) => {
  return (
    <div className="text-slate-950 dark:text-slate-50 text-xs font-medium">
      {label}
    </div>
  );
};
