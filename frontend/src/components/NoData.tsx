import React from "react";

type NodataProps = {
  label: string;
};

export const NoData: React.FC<NodataProps> = ({ label }) => {
  return (
    <div className="w-full grow flex justify-center items-center text-xs font-light text-slate-950 dark:text-slate-50">
      {label}
    </div>
  );
};
